#!/usr/bin/env bash
# 调用 Claude Code CLI 执行数据更新，带指数退避重试与代理健康检查。
#
# 环境变量：
#   ANTHROPIC_BASE_URL     默认 http://127.0.0.1:15721（workflow 中设置）
#   ANTHROPIC_AUTH_TOKEN   第三方代理的占位密钥（workflow 中设置）
#   RUNNER_TEMP            临时目录
#   GITHUB_WORKSPACE       仓库根目录
set -Eeuo pipefail

ROOT="${GITHUB_WORKSPACE:-$(pwd)}"
TEMP_DIR="${RUNNER_TEMP:-/tmp}"
CONFIG="$ROOT/.github/auto-update.config.json"
CONTEXT="$ROOT/.auto-update/context.json"
REPORT="$ROOT/.auto-update/report.json"
PROMPT_FILE="$TEMP_DIR/auto-update-prompt.md"
LOG_FILE="$TEMP_DIR/claude-run.jsonl"

command -v claude >/dev/null 2>&1 || { echo "claude 未安装" >&2; exit 1; }
[[ -f "$CONFIG" ]] || { echo "缺少配置：$CONFIG" >&2; exit 1; }
[[ -f "$CONTEXT" ]] || { echo "缺少运行上下文：$CONTEXT" >&2; exit 1; }
: "${ANTHROPIC_BASE_URL:?缺少 ANTHROPIC_BASE_URL}"

read_cfg() {
  node -e '
    const fs = require("fs");
    const cfg = JSON.parse(fs.readFileSync(process.argv[1], "utf8"));
    const value = process.argv[2].split(".").reduce((o, k) => o[k], cfg);
    console.log(Array.isArray(value) ? value.join(" ") : value);
  ' "$CONFIG" "$1"
}

MAX_TURNS="$(read_cfg claude.max_turns)"
MAX_BUDGET="$(read_cfg claude.max_budget_usd)"
TIMEOUT_MIN="$(read_cfg claude.timeout_minutes)"
ATTEMPTS="$(read_cfg retry.attempts)"
read -r -a BACKOFF <<<"$(read_cfg retry.backoff_seconds)"

ALLOWED_TOOLS=(
  Read Edit Write Grep Glob WebFetch
  "Bash(curl:*)"
  "Bash(jq:*)"
  "Bash(node -e:*)"
  "Bash(node scripts/dedup_timeline.js)"
  "Bash(node scripts/sort_timeline.js)"
)
DISALLOWED_TOOLS=(
  WebSearch
  "Bash(git:*)"
  "Bash(rm:*)"
  "Bash(sudo:*)"
)

# 从流式日志的最后一条 result 事件提取用量并打印，便于后续调整预算上限。
print_usage() {
  local log="$1"
  local out
  if ! out="$(node -e '
    const fs = require("fs");
    const raw = fs.readFileSync(process.argv[1], "utf8");
    let result = null;
    for (const line of raw.split("\n")) {
      const t = line.trim();
      if (!t) continue;
      try { const o = JSON.parse(t); if (o.type === "result") result = o; } catch {}
    }
    if (!result) { console.log("（本次未产生用量统计）"); process.exit(0); }
    const u = result.usage || {};
    const cacheRead = u.cache_read_input_tokens || 0;
    const cacheWrite = u.cache_creation_input_tokens || 0;
    const totalIn = (u.input_tokens || 0) + cacheRead + cacheWrite;
    console.log(`花费：$${(result.total_cost_usd ?? 0).toFixed(4)}`);
    console.log(`输入 tokens：${totalIn}（缓存读 ${cacheRead} / 缓存写 ${cacheWrite}）`);
    console.log(`输出 tokens：${u.output_tokens || 0}`);
    console.log(`轮次：${result.num_turns ?? "-"}｜耗时：${((result.duration_ms || 0) / 1000).toFixed(1)}s`);
    console.log(`终止原因：${result.terminal_reason || result.subtype || "-"}｜错误：${result.is_error ? "是" : "否"}`);
  ' "$log" 2>/dev/null)"; then
    return 0
  fi
  echo "── 本次尝试用量 ──"
  echo "$out"
  if [[ -n "${GITHUB_STEP_SUMMARY:-}" ]]; then
    {
      echo "### 本次尝试用量"
      echo ""
      echo '```'
      echo "$out"
      echo '```'
      echo ""
    } >>"$GITHUB_STEP_SUMMARY"
  fi
}

mkdir -p "$ROOT/.auto-update"

# 把静态提示词与本次运行上下文拼成完整提示词
{
  cat "$ROOT/.github/prompts/auto-update.md"
  printf '\n\n## 七、本次运行上下文\n\n```json\n'
  cat "$CONTEXT"
  printf '```\n'
} >"$PROMPT_FILE"

cd "$ROOT"
: >"$LOG_FILE"

for ((attempt = 1; attempt <= ATTEMPTS; attempt++)); do
  echo "==> Claude 第 ${attempt}/${ATTEMPTS} 次尝试"
  bash "$ROOT/scripts/ci/start-proxy.sh"

  # 启用自动 failover：需 daemon 托管的 worker（由 start-proxy.sh 以 daemon 模式拉起）。
  # 幂等，重复调用无副作用；失败则以主通道单独运行。
  if ! cc-switch --app claude failover enable; then
    echo "⚠ 启用自动 failover 失败，将以主通道单独运行" >&2
  fi
  cc-switch --app claude failover show || true

  # 保留重试前的报告：模型会读它跳过已完成的厂商（见提示词「增量落盘」）。
  # 仅第一次尝试前清空，避免上一轮运行的残留被误当成进度。
  if [[ $attempt -eq 1 ]]; then
    rm -f "$REPORT"
  fi
  printf '\n===== attempt %d =====\n' "$attempt" >>"$LOG_FILE"

  set +e
  timeout "${TIMEOUT_MIN}m" claude -p "$(cat "$PROMPT_FILE")" \
    --model sonnet \
    --fallback-model haiku \
    --permission-mode acceptEdits \
    --max-turns "$MAX_TURNS" \
    --max-budget-usd "$MAX_BUDGET" \
    --allowedTools "${ALLOWED_TOOLS[@]}" \
    --disallowedTools "${DISALLOWED_TOOLS[@]}" \
    --output-format stream-json --verbose \
    >>"$LOG_FILE" 2>&1
  code=$?
  set -e

  print_usage "$LOG_FILE"

  if [[ $code -eq 0 && -s "$REPORT" ]] && node -e 'JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"))' "$REPORT" 2>/dev/null; then
    echo "Claude 运行成功，报告：$REPORT"
    exit 0
  fi

  echo "第 ${attempt} 次尝试失败（exit=$code，报告存在=$([[ -s "$REPORT" ]] && echo yes || echo no)）" >&2
  tail -n 40 "$LOG_FILE" >&2 || true

  if [[ $attempt -lt $ATTEMPTS ]]; then
    delay="${BACKOFF[$((attempt - 1))]:-60}"
    jitter=$((RANDOM % 15))
    wait_seconds=$((delay + jitter))
    echo "等待 ${wait_seconds} 秒后重试..." >&2
    sleep "$wait_seconds"
  fi
done

echo "Claude 在 ${ATTEMPTS} 次尝试后仍未成功" >&2
exit 1

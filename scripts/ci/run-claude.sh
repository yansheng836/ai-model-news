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
  "Bash(node scripts/sort_timeline.js)"
)
DISALLOWED_TOOLS=(
  WebSearch
  "Bash(git:*)"
  "Bash(rm:*)"
  "Bash(sudo:*)"
)

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
  cc-switch --app claude failover show || true
  bash "$ROOT/scripts/ci/start-proxy.sh"

  # 上一轮留下的报告可能不完整，避免误判为成功
  rm -f "$REPORT"
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

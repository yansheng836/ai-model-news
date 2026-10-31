#!/usr/bin/env bash
# 在 CI 中注册多个 cc-switch Claude Provider（OpenAI Chat 格式），并建立 failover 队列。
#
# 按 RELAY_1_* ~ RELAY_<relays.max>_* 的顺序发现中转；队列顺序即 1→N。
# 某个编号的密钥缺失则跳过；至少要配置 1 个。
#
# 单个中转需要（i 为编号 1..N）：
#   RELAY_${i}_BASE_URL      中转地址，例如 https://api.example.com/v1   （Variable）
#   RELAY_${i}_API_KEY       中转密钥                                     （Secret）
#   RELAY_${i}_MODEL         主模型名                                     （Variable）
# 可选：
#   RELAY_${i}_HAIKU_MODEL   轻量模型名，默认同主模型                      （Variable）
#
# 注意：自动 failover 需在代理以 takeover 运行后由 run-claude.sh 启用，
#       本脚本只负责注册 Provider 与填充队列。
set -Eeuo pipefail

ROOT="${GITHUB_WORKSPACE:-$(pwd)}"
CONFIG="$ROOT/.github/auto-update.config.json"
RELAY_MAX="$(node -p 'require(process.argv[1]).relays.max' "$CONFIG")"

PROVIDER_IDS=()

for i in $(seq 1 "$RELAY_MAX"); do
  base_url_var="RELAY_${i}_BASE_URL"
  api_key_var="RELAY_${i}_API_KEY"
  model_var="RELAY_${i}_MODEL"
  haiku_model_var="RELAY_${i}_HAIKU_MODEL"

  base_url="${!base_url_var:-}"
  api_key="${!api_key_var:-}"
  model="${!model_var:-}"
  haiku_model="${!haiku_model_var:-}"

  if [[ -z "$base_url" && -z "$api_key" && -z "$model" ]]; then
    echo "第 ${i} 号中转未配置（$base_url_var 等为空），跳过"
    continue
  fi
  if [[ -z "$base_url" || -z "$api_key" || -z "$model" ]]; then
    echo "第 ${i} 号中转配置不完整：需要 ${base_url_var} / ${api_key_var} / ${model_var} 三者齐全" >&2
    exit 1
  fi

  haiku_model="${haiku_model:-$model}"
  id="relay-${i}"
  echo "==> 注册第 ${i} 号中转：$id"
  cc-switch --app claude provider add \
    --id "$id" \
    --name "$id" \
    --base-url "$base_url" \
    --api-key "$api_key" \
    --api-format openai_chat \
    --sonnet-model "${model} [1M]" \
    --opus-model "${model} [1M]" \
    --haiku-model "${haiku_model} [1M]"

  PROVIDER_IDS+=("$id")
done

if [[ ${#PROVIDER_IDS[@]} -eq 0 ]]; then
  echo "未发现任何中转配置，请至少设置 RELAY_1_BASE_URL / RELAY_1_API_KEY / RELAY_1_MODEL" >&2
  exit 1
fi

echo "==> 填充 failover 队列（切换顺序）：${PROVIDER_IDS[*]}"
for id in "${PROVIDER_IDS[@]}"; do
  cc-switch --app claude failover add "$id"
done

echo "==> 切到主中转 ${PROVIDER_IDS[0]}"
cc-switch --app claude provider switch "${PROVIDER_IDS[0]}"

echo "==> 各中转连通性冒烟测试"
for id in "${PROVIDER_IDS[@]}"; do
  if cc-switch --app claude provider stream-check "$id"; then
    echo "✓ $id 冒烟测试通过"
  else
    echo "⚠ $id 冒烟测试未通过（仍保留在队列中，实际请求时会被跳过）" >&2
  fi
done

cc-switch --app claude failover show || true

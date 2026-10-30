#!/usr/bin/env bash
# 在 CI 中配置 cc-switch 的 Claude Provider（OpenAI Chat 格式），并做一次上游冒烟测试。
#
# 必需环境变量：
#   RELAY_BASE_URL      主通道地址，例如 https://api.example.com/v1
#   RELAY_API_KEY       主通道密钥
#   RELAY_MODEL         主模型名
# 可选环境变量：
#   RELAY_HAIKU_MODEL        haiku 别名对应的轻量模型，默认同主模型
#   RELAY_FALLBACK_BASE_URL  备用通道地址
#   RELAY_FALLBACK_API_KEY   备用通道密钥
#   RELAY_FALLBACK_MODEL     备用通道模型名
set -Eeuo pipefail

: "${RELAY_BASE_URL:?缺少 RELAY_BASE_URL}"
: "${RELAY_API_KEY:?缺少 RELAY_API_KEY}"
: "${RELAY_MODEL:?缺少 RELAY_MODEL}"

HAIKU_MODEL="${RELAY_HAIKU_MODEL:-$RELAY_MODEL}"

echo "==> 添加主 Provider"
cc-switch --app claude provider add \
  --id relay-primary \
  --name relay-primary \
  --base-url "$RELAY_BASE_URL" \
  --api-key "$RELAY_API_KEY" \
  --api-format openai_chat \
  --sonnet-model "$RELAY_MODEL" \
  --opus-model "$RELAY_MODEL" \
  --haiku-model "$HAIKU_MODEL"

HAS_FALLBACK=0
if [[ -n "${RELAY_FALLBACK_BASE_URL:-}" && -n "${RELAY_FALLBACK_API_KEY:-}" && -n "${RELAY_FALLBACK_MODEL:-}" ]]; then
  HAS_FALLBACK=1
  echo "==> 添加备用 Provider"
  cc-switch --app claude provider add \
    --id relay-fallback \
    --name relay-fallback \
    --base-url "$RELAY_FALLBACK_BASE_URL" \
    --api-key "$RELAY_FALLBACK_API_KEY" \
    --api-format openai_chat \
    --sonnet-model "$RELAY_FALLBACK_MODEL" \
    --opus-model "$RELAY_FALLBACK_MODEL" \
    --haiku-model "$RELAY_FALLBACK_MODEL"

  echo "==> 启用 failover 队列"
  cc-switch --app claude failover enable
  cc-switch --app claude failover add relay-fallback
fi

echo "==> 切换到主 Provider"
cc-switch --app claude provider switch relay-primary

echo "==> 上游冒烟测试"
if cc-switch --app claude provider stream-check relay-primary; then
  echo "主通道可用"
elif [[ "$HAS_FALLBACK" -eq 1 ]]; then
  echo "主通道不可用，切换到备用通道"
  cc-switch --app claude provider switch relay-fallback
  cc-switch --app claude provider stream-check relay-fallback
else
  echo "主通道不可用且未配置备用通道，终止运行" >&2
  exit 1
fi

cc-switch --app claude failover show || true

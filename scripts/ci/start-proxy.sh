#!/usr/bin/env bash
# 启动 cc-switch daemon 托管代理，并把 claude 的 worker 路由到 127.0.0.1:$PORT。
#
# 用 daemon 模式而不是前台 `proxy serve`，因为 cc-switch 的自动 failover
# 要求 daemon 托管的 worker（`has_managed_worker_for_app` 才为真），
# 前台进程不满足，`failover enable` 会报
# "automatic failover requires daemon-managed proxy routing"。
set -Eeuo pipefail

PORT="${CCSWITCH_PORT:-15721}"
TEMP_DIR="${RUNNER_TEMP:-/tmp}"
LOG="$TEMP_DIR/ccswitch-proxy.log"

port_open() {
  (exec 3<>"/dev/tcp/127.0.0.1/$PORT") 2>/dev/null
}

daemon_reachable() {
  cc-switch daemon status 2>&1 | grep -q "cc-switch daemon"
}

if port_open; then
  echo "代理已在 127.0.0.1:$PORT 运行"
  exit 0
fi

echo "==> 启动 cc-switch daemon"
cc-switch daemon start --detach

echo "==> 等待 daemon 就绪"
for _ in $(seq 1 60); do
  if daemon_reachable; then
    echo "daemon 就绪"
    break
  fi
  sleep 1
done
if ! daemon_reachable; then
  echo "daemon 未就绪（60 秒超时）" >&2
  cc-switch daemon status >&2 || true
  exit 1
fi

echo "==> 设置 claude worker 监听端口：127.0.0.1:$PORT"
cc-switch --app claude proxy config --listen-port "$PORT"

echo "==> 启用 claude 代理路由（daemon 拉起 worker）"
cc-switch --app claude proxy enable

echo "==> 等待代理端口就绪"
for _ in $(seq 1 60); do
  if port_open; then
    echo "代理已就绪：127.0.0.1:$PORT"
    exit 0
  fi
  sleep 1
done

echo "代理启动超时（60 秒），daemon 状态：" >&2
cc-switch daemon status >&2 || true
tail -n 40 "$LOG" >&2 || true
exit 1
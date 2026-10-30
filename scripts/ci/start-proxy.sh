#!/usr/bin/env bash
# 启动 cc-switch 本地代理（前台进程放到后台），并等待端口就绪。
set -Eeuo pipefail

PORT="${CCSWITCH_PORT:-15721}"
TEMP_DIR="${RUNNER_TEMP:-/tmp}"
LOG="$TEMP_DIR/ccswitch-proxy.log"
PID_FILE="$TEMP_DIR/ccswitch-proxy.pid"

port_open() {
  (exec 3<>"/dev/tcp/127.0.0.1/$PORT") 2>/dev/null
}

if port_open; then
  echo "代理已在 127.0.0.1:$PORT 运行"
  exit 0
fi

echo "==> 启动 cc-switch 代理：127.0.0.1:$PORT"
nohup cc-switch proxy serve --takeover claude --listen-port "$PORT" >"$LOG" 2>&1 &
echo $! >"$PID_FILE"

for _ in $(seq 1 60); do
  if port_open; then
    echo "代理已就绪（pid $(cat "$PID_FILE")）"
    exit 0
  fi
  if ! kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
    echo "代理进程已退出，日志如下：" >&2
    cat "$LOG" >&2 || true
    exit 1
  fi
  sleep 1
done

echo "代理启动超时（60 秒），日志如下：" >&2
cat "$LOG" >&2 || true
exit 1

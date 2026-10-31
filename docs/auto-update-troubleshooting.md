# 自动更新故障记录与修复方法

记录「模型数据定时自动更新」workflow（`.github/workflows/auto-update.yml`）在 2026-10-30 ～ 2026-10-31 调试期间遇到的全部问题、根因与修复方法，供后续排查参考。

设计说明见 [github-action-auto-update.md](./github-action-auto-update.md)。

## 运行索引

| Run | 时间（UTC） | 触发 | 失败步骤 | 主要原因 |
| --- | --- | --- | --- | --- |
| 41037517271 | 10-30 10:00 | 手动 | 运行 Claude Code | 预算撞顶（P1） |
| 41156100633 | 10-31 01:35 | 定时 | 运行 Claude Code | 额度不足 403（P2） |
| 41187953171 | 10-31 09:15 | 手动 | 运行 Claude Code | 预算撞顶 + 额度不足（P1/P2） |
| 41191674240 | 10-31 10:10 | 手动 | 校验运行结果 | 文件名转义误报 + 复合日期（P4/P5） |
| 41194335744 | 10-31 10:49 | 手动 | 运行 Claude Code | failover 未启用 + 模型空转超时（P3/P6） |

## 问题总览

| 编号 | 现象 | 根因 | 状态 |
| --- | --- | --- | --- |
| P1 | `Reached maximum budget ($3)` | 单次预算上限过低 | ✅ 已修 |
| P2 | `403 Not enough quota` | 中转账户余额耗尽 | ⚠️ 需充值 / 靠 P3 兜底 |
| P3 | `failover enable` 从未生效 | 顺序错误 + 要求 daemon 托管 | 🔧 部分已修，daemon 模式待做 |
| P4 | 误报「修改了范围外文件」 | git 非 ASCII 文件名转义 | ✅ 已修 |
| P5 | `release_date 不精确或格式错误` | 模型输出复合日期 | ✅ 已修 |
| P6 | Claude 步骤 3 次 12 分钟超时 | 模型输出被权限系统拦截后空转 | ✅ 已定方案（换主模型） |
| P7 | 超时被杀时无用量统计 | 只读 `result` 事件 | ⬜ 待办 |

## P1 单次预算上限过低

**现象**：`terminal_reason: budget_exhausted`，报错 `Reached maximum budget ($3)`。run 41037517271 跑了 56 轮、花费 $3.18 被砍断；重试后仍撞顶。

**根因**：`.github/auto-update.config.json` 中 `claude.max_budget_usd: 3` 太低。实测**一次成功的更新（分组 3，7 家厂商）花费 $8.22**（run 41191674240 第 2 次尝试，76 轮）。

**修复**：

- `max_budget_usd` 由 `3` 改为 `1000`（视为不设上限）
- `scripts/ci/run-claude.sh` 新增 `print_usage`，每次尝试后打印花费 / tokens / 轮次 / 终止原因，便于后续收敛

## P2 中转账户额度不足（403）

**现象**：

```text
API Error: 403 Not enough quota to pre-consume for this request:
¥0.038398 remaining, ¥0.063612 required
```

**根因**：中转账户**服务端余额**耗尽。与 P1 的客户端预算无关——两者都要够。

**修复**：给中转账户充值；或依赖多中转 failover 自动切换到有额度的通道（但需先完成 P3）。

## P3 failover 从未真正启用

这个问题有**两层**原因，第一层修完后才暴露第二层。

**第一层（顺序错误）**：原 `setup-ccswitch.sh` 先 `failover enable` 再 `failover add`，且在启动代理之前执行。而 `failover enable` 要求：

1. 队列非空（否则报 queue empty）
2. 代理已接管运行，否则弹出交互确认；CI 非 TTY 下会被取消，failover **静默不生效**

修复：注册 Provider 与填充队列放在 `setup-ccswitch.sh`，`failover enable` 移到代理启动之后（`run-claude.sh`）。

**第二层（需要 daemon）**：即便顺序正确，仍报：

```text
Error: automatic failover requires daemon-managed proxy routing for this app
```

源码链路：`enable_auto_failover_for_app` → `ensure_proxy_routing_active_for_app` → `has_managed_worker_for_app`，要求存在 **daemon 托管的 worker**（或 `managed_external` 会话）。前台 `cc-switch proxy serve --takeover claude` 不满足。且 `cc-switch --app claude proxy enable` 是**通过 IPC 请求 daemon**（`daemon_ensure_worker`），因此必须先在 CI 起 daemon。

**修复方法（待实施）**：改为 daemon 模式，替换 `start-proxy.sh` 的前台 `proxy serve`：

```bash
cc-switch daemon start --detach
cc-switch daemon status                     # 确认 daemon 就绪
cc-switch --app claude proxy config --listen-port 15721
cc-switch --app claude proxy enable         # daemon 拉起 claude worker 并监听 15721
cc-switch --app claude failover enable      # 此时 has_managed_worker 为真
cc-switch --app claude failover show
```

Claude Code 侧仍指向 `http://127.0.0.1:15721`，无需改动。

**附：cc-switch failover 语义**（据 cc-switch-cli v5.11.3 源码）

- 会触发切换：`5xx`、`429`、`403`（第三方中转额度不足）、传输错误、超时
- 不触发切换（客户端错误直接返回）：`400`、`405`、`406`、`413`、`414`、`415`、`422`、`501`
- 例外：官方 Codex 的 `401/403` 不切换；第三方 Claude 中转不受此限制
- 单请求最多尝试 `max_retries + 1` 个 Provider（默认 `max_retries = 3`，即最多 4 个）

## P4 非 ASCII 文件名转义导致校验误报

**现象**：CI 报 3 个「修改了范围外文件」，但这 3 个文件其实都在本次分组内：

```text
修改了范围外文件："\344\270\255\345\233\275-\345\225\206\346\261\244..."
```

**根因**：`validate_run.js` 用 `git diff --name-only` 取改动文件名与真实文件名比对。CI 全新克隆的 `core.quotepath` 默认为 `true`，git 会把非 ASCII 文件名转义成 `"\344\270\255…"`，比对必然失败。本机 `~/.gitconfig` 设了 `core.quotepath=false`，所以本地测试一直是好的，问题只在 CI 暴露。

**修复**：`validate_run.js` 与 `build_pr_body.js` 的 git 调用统一加 `-c core.quotepath=false`，使结果与环境无关。

```javascript
execFileSync('git', ['-c', 'core.quotepath=false', ...args], { encoding: 'utf8' });
```

## P5 report 出现复合日期

**现象**：`changes[4].release_date 不精确或格式错误：2026年10月15日（4B）/2026年10月16日（9B/27B）`。

**根因**：模型未遵守「日期精确到日或月」的规范，输出了带括号注释、用 `/` 拼接的复合日期。

**修复**：`.github/prompts/auto-update.md` 的硬性规则与自检清单显式禁止括号注释、参数说明与多日期拼接，并要求多个发版日拆成多条 `changes`。

## P6 模型空转导致 12 分钟超时

**现象**：run 41194335744 的 Claude 步骤 3 次尝试全部 `exit=124`（timeout），且无任何用量统计。

**证据**：产物 `claude-run.jsonl` 中**没有任何 API 错误**，全部是 Claude Code 的权限拒绝：

| 拒绝原因 | 次数 |
| --- | --- |
| `can't be checked before it runs`（多行 `\` 续行 / 带变量命令） | 12 |
| `contains multiple operations ... require approval`（复合命令、for 循环） | 4+ |
| `path is outside the working directories`（向 `/tmp` 写文件） | 3 |

模型 `loomy-auto` 反复提交多行 `curl -s --max-time 40 \` / `node -e \` 这类无法通过 allowlist 预校验的命令，空转到超时。

**对比**：run 41191674240（主模型为 `deepseek-v4.1-flash`）命令为单行，能通过 allowlist，554 秒完成。

**根因**：模型行为差异，与中转/额度无关；failover 也无法缓解（中转并未报错，是模型在空转）。

**修复**：主模型改用 `deepseek-v4.1-flash`（已证可用），`loomy-auto` 降为 2 号中转。

## P7 超时被杀时无用量统计

**现象**：`── 本次尝试用量 ──（本次未产生用量统计）`。

**根因**：`print_usage` 只从最后一条 `type: result` 事件取用量；`claude` 被 `timeout` 杀掉时不会产生该事件，因此拿不到花费。

**修复方法（待办）**：改为累加日志中每条 assistant 消息的 `usage` 作为兜底，保证超时场景也有用量可读。

## 已知限制

- **job 内并发**：`concurrency: auto-update` + `cancel-in-progress: false`，后触发的运行会排队等待
- **定时排队延迟**：cron 定为 UTC 22:17（北京 06:17），实际可能延迟数小时才启动
- **daemon 模式未实测**：P3 的 daemon 方案基于源码推断，尚未在 CI 中验证通过

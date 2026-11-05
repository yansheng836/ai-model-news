# 自动更新故障记录与修复方法

记录「模型数据定时自动更新」workflow（`.github/workflows/auto-update.yml`）在 2026-10-30 ～ 2026-10-31 调试期间遇到的全部问题、根因与修复方法，供后续排查参考。

设计说明见 [github-action-auto-update.md](./github-action-auto-update.md)。

## 运行索引

| Run | 时间（UTC） | 触发 | 失败步骤 | 主要原因 |
|------|------|------|------|------|
| 41037517271 | 10-30 10:00 | 手动 | 运行 Claude Code | 预算撞顶（P1） |
| 41156100633 | 10-31 01:35 | 定时 | 运行 Claude Code | 额度不足 403（P2） |
| 41187953171 | 10-31 09:15 | 手动 | 运行 Claude Code | 预算撞顶 + 额度不足（P1/P2） |
| 41191674240 | 10-31 10:10 | 手动 | 校验运行结果 | 文件名转义误报 + 复合日期（P4/P5） |
| 41194335744 | 10-31 10:49 | 手动 | 运行 Claude Code | failover 未启用 + 模型空转超时（P3/P6） |
| 41199661294 | 10-31 12:06 | 手动 | 运行 Claude Code | daemon 生效但单次耗时逼近超时被砍（P8） |
| 41203893719 | 10-31 13:04 | 手动（group=auto） | 运行 Claude Code | 旧 12 分钟超时持续失败，被取消（P8） |
| 41209465646 | 10-31 14:17 | 手动（group=法国-Mistral-Mistral.md） | 创建或更新 PR | `origin/auto-update` 不存在导致 create-pull-request reset 失败（P10） |

## 问题总览

| 编号 | 现象 | 根因 | 状态 |
|------|------|------|------|
| P1 | `Reached maximum budget ($3)` | 单次预算上限过低 | ✅ 已修 |
| P2 | `403 Not enough quota` | 中转账户余额耗尽 | ⚠️ 需充值 / 靠 P3 兜底 |
| P3 | `failover enable` 从未生效 | 顺序错误 + 要求 daemon 托管 | ✅ 已修（daemon 模式） |
| P4 | 误报「修改了范围外文件」 | git 非 ASCII 文件名转义 | ✅ 已修 |
| P5 | `release_date 不精确或格式错误` | 模型输出复合日期 | ✅ 已修 |
| P6 | Claude 步骤 3 次 12 分钟超时 | 模型输出被权限系统拦截后空转 | ✅ 已修（换主模型） |
| P7 | 超时被杀时无用量统计 | 只读 `result` 事件 | ⬜ 待办 |
| P8 | 单次运行逼近 12 分钟被砍，报告未写 | 超时过紧（实测需 9~12+ 分钟） | ✅ 已修（12→60 分钟） |
| P9 | 新增 README 行与已有条目重复 | 模型重复添加已存在行 | ✅ 已修（提示词加查重） |
| P10 | `fatal: ambiguous argument 'origin/auto-update'` | 远端无 auto-update 分支，create-pull-request reset 失败 | ✅ 已修（新建时推送占位分支） |

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
|------|------|
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

## P8 单次运行逼近 12 分钟被砍

**现象**：run 41199661294 第 1、3 次尝试在 12 分钟整被 `timeout` 杀掉（无 result 事件）；第 2 次耗时 538 秒时仍在「Findings:」整理阶段，被杀后 `report.json` 未写入，被判失败。run 41203893719 同因持续失败并被取消。

**证据**：唯一一次 Claude 步骤成功（run 41191674240）耗时 `553950ms ≈ 9 分 14 秒`，恰好压在 12 分钟线内；相同模型换一次运行就在 9 分钟时被杀。说明 12 分钟对所有分组都贴着上限。

**根因**：`claude.timeout_minutes: 12` 过紧。模型大量时间花在读文件、抓官方文档/HF/OpenRouter、超长内部思考（单份日志 1698 条 `thinking_tokens` 事件）。

**修复**：

- `claude.timeout_minutes` 由 `12` 改为 `60`
- workflow job `timeout-minutes` 由 `60` 改为 `200`（否则 job 硬限会在 claude 运行中被平台强杀，等于没放开）
- 效果：run 41206000437 用 60 分钟超时后，**`运行 Claude Code` 成功**、`排序 README 时间线` 成功、进入 `校验运行结果`

## P9 新增 README 行与已有条目重复

**现象**：run 41206000437 校验报：

```text
README 新增行与已有条目重复：法国|Mistral AI|Mistral|Mistral Large 4（mistral-large-4-0）🆕
```

**根因**：README 中已存在该版本行，模型又新增了一行。`validate_run.js` 用 `rowKey = 国家|公司|模型名|版本` 判定重复（忽略日期），因此即使日期不同也会被拦。校验逻辑本身正确，是**模型未先检索已有条目**。

**修复（待办）**：在提示词中要求——新增 README 行前先检索 README 中是否已有同名模型/版本，已存在则就地修改（补全属性或修正日期），不要重复加行。

**意义**：这一步说明流程已经能走到校验环节，只剩数据质量层面的问题。

## P10 create-pull-request 无法 resolve origin/auto-update

**现象**：run 41209465646 所有业务步骤（Claude、排序、校验、生成 PR 描述、标签）全部成功，唯一失败在 `创建或更新 PR`：

```text
fatal: ambiguous argument 'origin/auto-update': unknown revision or path not in the working tree.
##[error] The process '/usr/bin/git' failed with exit code 128
```

**根因**：`peter-evans/create-pull-request@v8` 在创建 PR 前要先把 base branch（`auto-update`）重置到 `HEAD`，执行 `git checkout auto-update`，要求 `origin/auto-update` 已存在。但 workflow 的「准备滚动分支」步骤在远端没有 auto-update 分支时走 else 分支，只创建了**本地** `auto-update`，从不推到远端，导致 create-pull-request 解析失败。

**修复**：在 else 分支里多推一次占位分支：

```yaml
else
  echo "创建新的 auto-update 分支"
  git checkout -B auto-update
  git push -u origin auto-update
fi
```

**意义**：这是流程里最后一个阻塞点；修完后应能真正创建 PR。

- **job 内并发**：`concurrency: auto-update` + `cancel-in-progress: false`，后触发的运行会排队等待
- **定时排队延迟**：cron 定为 UTC 22:17（北京 06:17），实际可能延迟数小时才启动
- **手动触发默认 `group=auto`**：不填 `group` 输入框会按日期轮换选整组（6~7 家）；只测单家需显式填文件名（如 `法国-Mistral-Mistral.md`）

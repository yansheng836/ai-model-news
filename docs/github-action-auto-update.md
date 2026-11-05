# 定时自动更新方案：GitHub Actions + Claude Code CLI + 第三方 OpenAI 兼容 API

> 状态：设计稿，待评审
> 日期：2026-10-30
> 适用仓库：`ai-model-news`

## 1. 背景与目标

当前维护方式是人工隔几天查看各厂商是否发布新模型，再手动更新公司文档与 README 时间线。目标是把这套流程自动化：

- **定时**：每天由 GitHub Actions 触发
- **轮换**：每天只处理 6～7 家厂商，约 4 天覆盖一轮全量
- **自动检索**：按 CLAUDE.md 的数据源优先级抓取官方文档与 OpenRouter API
- **自动更新**：修改对应厂商 md 与 README 时间线表
- **人工把关**：只开 PR，不直接改 `main`
- **限流容错**：单次 429、上游抖动、单厂商失败都不能让整轮任务白跑

**非目标**：不自动合并 PR、不做全站爬虫、不替代人工判断数据真伪。

## 2. 结论速览

| 问题 | 结论 |
|------|------|
| GitHub Actions 能否定时跑？ | ✅ 用 `on.schedule`，公开仓库不消耗额度 |
| 能否用第三方 OpenAI Chat 格式 API 驱动 Claude Code？ | ✅ 需要一层本地协议转换代理 |
| ccswitch 有 Linux 版吗？ | ✅ 桌面版有 AppImage/deb/rpm；**CLI 版有 Linux 预编译二进制，适合 CI** |
| 429 容错怎么做？ | 分组隔离 + 多 Provider failover + CLI 内置重试 + 预算上限 + workflow 重试 |

## 3. 为什么需要协议转换

Claude Code 只会向 `ANTHROPIC_BASE_URL` 发送 **Anthropic Messages** 格式请求；而第三方中转提供的是 **OpenAI Chat Completions** 格式。把 `ANTHROPIC_BASE_URL` 直接指向 OpenAI 端点会返回 404/405。

因此需要中间层做协议转换：

```text
Claude Code ──Anthropic Messages──▶ 本地代理 ──OpenAI Chat Completions──▶ 第三方中转
                127.0.0.1:15721
```

### 3.1 CC Switch 的 Linux 支持

两个同名项目容易混淆，CI 场景要用后者：

| 项目 | 形态 | Linux 产物 | 是否适合 Actions |
|------|------|------|------|
| `farion1231/cc-switch` | Tauri 桌面 GUI | `.AppImage` / `.deb` / `.rpm`（x86_64、arm64） | ❌ 无显示器，GUI 跑不起来 |
| `SaladDay/cc-switch-cli` | Rust CLI + TUI | `cc-switch-cli-linux-x64-musl.tar.gz` 等预编译二进制 | ✅ 纯命令行，可 headless |

`cc-switch-cli` 对 CI 有用的能力：

- **非交互添加 Provider**（CLI 源码中明确标注 `Add` 为 non-interactive）
- **协议转换代理**：`proxy serve --takeover claude --listen-port 15721`，前台模式全平台可用
- **自动 failover 队列**：当前 Provider 429/5xx/403 等失败时按队列顺序切换下一个中转
- **健康检查**：`provider stream-check <id>` 可在正式运行前做一次冒烟测试

### 3.2 备选方案对比

| 方案 | 协议转换 | CI 友好度 | 429 容错 | 结论 |
|------|------|------|------|------|
| **cc-switch-cli 本地代理** | ✅ | ✅ 单二进制 | ✅ 内置 failover 队列 | **采用** |
| claude-code-router (CCR) | ✅ | ✅ npm 安装 | ⚠️ 需自行配置重试 | 备选 |
| LiteLLM Proxy | ✅ `/v1/messages` | ⚠️ Python 依赖较重 | ✅ 重试/fallback 成熟 | 备选 |
| 纯 Node 脚本，不调 LLM | ❌ | ✅ 最稳定 | ✅ | 无法解析非结构化文档，只能做 OpenRouter diff |
| 直接把 OpenAI 端点当 Anthropic 用 | ❌ | — | — | 不可行 |

## 4. 总体架构

```mermaid
flowchart TD
    A[cron 每天 06:17<br/>或手动触发] --> B[计算当天分组<br/>day_of_year % 4]
    B --> C[安装 Claude Code CLI<br/>与 cc-switch-cli]
    C --> D[配置多中转 Provider<br/>填充 failover 队列]
    D --> E[启动本地代理<br/>127.0.0.1:15721]
    E --> F[claude -p<br/>只处理本组厂商]
    F --> G{运行成功?}
    G -->|失败| H[重试最多 2 次<br/>指数退避]
    H --> F
    G -->|成功| I[校验：排序/日期/变更范围]
    I -->|不通过| J[失败并上传日志<br/>不开 PR]
    I -->|通过| K{有文件变更?}
    K -->|否| L[结束：本轮无更新]
    K -->|是| M[更新滚动分支<br/>创建/更新 PR]
    M --> N[人工审核合并]
```

## 5. 组件与文件清单

```text
.github/
├── workflows/
│   └── auto-update.yml          # 编排入口
├── auto-update.config.json      # 非敏感项目级参数
└── prompts/
    └── auto-update.md           # 给 Claude 的任务提示词

.claude/
└── settings.json                # 工具权限白名单/黑名单

scripts/
├── vendors.json                 # 厂商分组
├── pick_vendors.js              # 计算当天分组 / 校验覆盖
├── sort_timeline.js             # 已有：时间线排序
└── ci/
    ├── setup-ccswitch.sh        # 配置多中转 Provider、填充 failover 队列、上游冒烟测试
    ├── start-proxy.sh           # 启动本地代理并等待端口就绪
    ├── run-claude.sh            # 带退避重试的 Claude 调用
    ├── validate_run.js          # 运行结果校验
    └── build_pr_body.js         # 由报告生成 PR 描述
```

每个组件职责单一，可独立运行验证：

| 组件 | 输入 | 输出 |
|------|------|------|
| `pick_vendors.js` | 日期、`vendors.json` | 当天厂商文件列表、`context.json` |
| `setup-ccswitch.sh` | Provider 环境变量 | 已就绪的 Provider 与 failover 队列 |
| `start-proxy.sh` | 端口配置 | 可用的 `127.0.0.1:15721` |
| `run-claude.sh` | 提示词、运行上下文 | Claude 运行日志、`report.json` |
| `validate_run.js` | `report.json`、`context.json`、git diff | 通过/失败 + 原因 |
| `build_pr_body.js` | `report.json`、`context.json` | PR 描述 Markdown |

本地可单独验证的脚本：

```bash
npm run check:vendors                              # 分组覆盖校验
node scripts/pick_vendors.js --date 2026-10-30     # 查看指定日期选中的分组
node scripts/ci/validate_run.js                    # 用默认路径校验最近一次运行
```

## 6. 关键设计

### 6.1 厂商分组

把 26 个厂商文件分为 4 组，按「北京时间年积日 % 4」轮换，每家约 4 天检查一次：

| 组 | 厂商 |
| -- | ---- |
| 0 | OpenAI、Anthropic、Google、Meta、xAI、NVIDIA |
| 1 | DeepSeek、阿里巴巴(Qwen)、腾讯、百度、字节跳动(豆包)、华为 |
| 2 | 智谱AI、月之暗面(Kimi)、MiniMax、小米、科大讯飞、百川、小红书 |
| 3 | 零一万物、商汤、美团、阶跃星辰、快手、蚂蚁集团、Mistral |

`vendors.json` 是唯一事实来源。`pick_vendors.js --check` 会校验：

- 仓库根目录所有 `国家-公司-*.md` 都被且仅被一个分组覆盖
- 分组中不存在已删除的文件

新增厂商时只改 `vendors.json`，不需要改 workflow。

### 6.2 项目级参数配置

非敏感参数放在 `.github/auto-update.config.json`，敏感信息只走 GitHub Secrets：

```json
{
  "relays": {
    "max": 4
  },
  "ccswitch": {
    "version": "v5.11.3",
    "listen_port": 15721
  },
  "claude_code_version": "2.1.305",
  "claude": {
    "max_turns": 60,
    "max_budget_usd": 1000,
    "timeout_minutes": 60
  },
  "retry": {
    "attempts": 3,
    "backoff_seconds": [30, 120]
  },
  "limits": {
    "max_changed_files": 8,
    "max_added_rows": 30
  }
}
```

`relays.max` 是中转槽位数；`setup-ccswitch.sh` 按 `RELAY_1_*`~`RELAY_<max>_*` 的顺序发现并注册中转，编号即 failover 优先级。`max_budget_usd` 默认 1000（等同不设上限），每次尝试的用量会打印在日志与运行摘要中，据此再收敛。

`.claude/settings.json` 只放行为开关，**不放端点地址，也不放禁用 git 的规则**，避免影响本地开发：

```json
{
  "env": {
    "DISABLE_TELEMETRY": "1",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

工具权限通过 CI 调用参数控制，见 6.4。这样本地用 Claude Code 提交代码不会受到影响，而 CI 中的模型无法执行 `git`、`rm` 等命令。

### 6.3 Provider 配置与代理启动

```bash
# 按编号顺序注册各中转（OpenAI Chat 格式），编号越小优先级越高
PROVIDER_IDS=()
for i in $(seq 1 "$RELAY_MAX"); do
  # 实际脚本用间接展开取 RELAY_${i}_BASE_URL / _API_KEY / _MODEL / _HAIKU_MODEL
  # 三者（BASE_URL/API_KEY/MODEL）齐全才注册；整组缺失则跳过；只缺其中一个则报错
  cc-switch --app claude provider add \
    --id "relay-$i" --name "relay-$i" \
    --base-url "$base_url" \
    --api-key "$api_key" \
    --api-format openai_chat \
    --sonnet-model "$model" \
    --opus-model "$model" \
    --haiku-model "$haiku_model"
  PROVIDER_IDS+=("relay-$i")
done

# 依次填充 failover 队列；队列顺序即切换顺序
for id in "${PROVIDER_IDS[@]}"; do
  cc-switch --app claude failover add "$id"
done

cc-switch --app claude provider switch "${PROVIDER_IDS[0]}"

# 冒烟测试：逐个检查上游连通性（不通过也保留在队列中，实际请求时会被跳过）
for id in "${PROVIDER_IDS[@]}"; do
  cc-switch --app claude provider stream-check "$id" || true
done

# 启动 cc-switch daemon（自动 failover 要求 daemon 托管的 worker，
# 前台 `proxy serve --takeover` 不满足，failover enable 会直接报错）
cc-switch daemon start --detach

# 等待 daemon 就绪（status 正常输出以 "cc-switch daemon" 开头）
cc-switch daemon status

# 把 claude 的 daemon worker 路由到 127.0.0.1:15721
cc-switch --app claude proxy config --listen-port 15721
cc-switch --app claude proxy enable

# daemon 托管 worker 就绪后再启用自动 failover（幂等）
cc-switch --app claude failover enable
cc-switch --app claude failover show
```

> ⚠️ 顺序不能颠倒：`failover enable` 要求队列非空，且要求 **daemon 托管的 worker**（否则报 `automatic failover requires daemon-managed proxy routing`）。因此注册 Provider 与填充队列在 `setup-ccswitch.sh`，daemon 启动与 `failover enable` 在 `start-proxy.sh`/`run-claude.sh` 中按上序执行。

Claude Code 侧只需要：

```bash
export ANTHROPIC_BASE_URL="http://127.0.0.1:15721"
export ANTHROPIC_AUTH_TOKEN="PROXY_MANAGED"
export API_TIMEOUT_MS="600000"
```

### 6.4 Claude 调用

```bash
claude -p "$(cat "$RUNNER_TEMP/auto-update-prompt.md")" \
  --model sonnet \
  --fallback-model haiku \
  --permission-mode acceptEdits \
  --max-turns 60 \
  --max-budget-usd 1000 \
  --allowedTools "Read" "Edit" "Write" "Grep" "Glob" "WebFetch" \
                 "Bash(curl:*)" "Bash(jq:*)" "Bash(node -e:*)" \
                 "Bash(node scripts/sort_timeline.js)" \
  --disallowedTools "WebSearch" "Bash(git:*)" "Bash(rm:*)" "Bash(sudo:*)" \
  --output-format stream-json --verbose \
  > "$RUNNER_TEMP/claude-run.jsonl" 2>&1
```

提示词的关键约束：

1. 先读 `CLAUDE.md`，严格遵守数据源优先级与格式规范
2. **只处理本组厂商**，不碰其他厂商文件
3. **禁止使用 WebSearch**；用 `WebFetch` 抓官方文档，用 `curl` 查 OpenRouter API
4. 每条新增/变更必须给出 `source` URL，写进运行报告
5. 日期必须精确到日或月；无法确认时写 `未公开` 或 `待确认`，禁止编造
6. 结束时运行 `node scripts/sort_timeline.js`
7. 有更新时同步更新 README 顶部的 ⚠️ 数据说明
8. 把变更摘要写入 `.auto-update/report.json`（已 gitignore）

### 6.5 运行报告

`.auto-update/report.json` 是校验与 PR 描述的唯一数据来源：

```json
{
  "date": "2026-10-31",
  "group": 2,
  "vendors": ["中国-智谱AI-GLM.md", "中国-月之暗面-Kimi.md"],
  "changes": [
    {
      "file": "中国-智谱AI-GLM.md",
      "model": "GLM-5.4",
      "release_date": "2026年10月28日",
      "action": "added",
      "source": "https://docs.z.ai/release-notes/new-released"
    }
  ],
  "errors": [
    {
      "vendor": "中国-MiniMax-abab.md",
      "reason": "官方页面 403，未能确认"
    }
  ]
}
```

### 6.6 PR 策略

采用**单滚动分支 + 单个 PR，变更逐次累积**，避免每天堆积一个 PR，也避免后一轮覆盖前一轮未合并的成果：

- 分支：`auto-update`
- 每次运行先检查远端是否已有 `auto-update` 分支：
  - 有：checkout 该分支并 `git merge origin/main`，在已有变更上继续累积
  - 无：从 `main` 创建
- 合并 `origin/main` 发生冲突时，直接失败并提示人工处理，不强行覆盖
- 使用 `peter-evans/create-pull-request@v8` 提交并创建/更新 PR
- 合并 PR 后删除分支，下一轮重新从 `main` 创建
- PR 标题：`docs: 自动更新模型数据（2026-10-31，组 2）`
- PR 标签：`auto-update`
- PR 描述由 `build_pr_body.js` 生成：本次运行变更、失败厂商、本次 diff、PR 累计 diff

## 7. 429 与故障容错

| 层级 | 机制 | 失败后的行为 |
|------|------|------|
| L1 分组隔离 | 每天只处理 6～7 家 | 单厂商失败不影响同组其他厂商 |
| L2 Provider failover | cc-switch failover 队列（多中转） | 当前中转 429/5xx/403 等失败时按队列顺序切下一个 |
| L3 CLI 内置重试 | Claude Code 对 429/529/5xx 指数退避 | 自动重试，`retry-after` 生效 |
| L4 模型降级 | `--fallback-model haiku` | 主模型不可用时降级 |
| L5 workflow 重试 | `run-claude.sh` 最多 3 次，退避 30s/120s | 保留已有编辑，幂等续跑 |
| L6 预算/超时 | `--max-budget-usd`、`--max-turns`、`timeout` | 防止单次运行失控 |
| L7 结果校验 | 排序、日期、变更范围 | 校验不过则不开 PR，只留日志 |

### 7.1 failover 触发条件与容量（据 cc-switch-cli v5.11.3 源码）

- **会触发切换**：`5xx`、`429`、`403`（第三方中转「额度不足」即此类）、传输错误、超时。
- **不会触发切换**（客户端错误，直接返回）：`400`、`405`、`406`、`413`、`414`、`415`、`422`、`501`。
- **例外**：官方 Codex 的 `401/403` 不切换；本项目用第三方 Claude 中转，走的是通用分支，因此 `403 额度不足` **会**切换到下一个中转。
- **单请求上限**：一次请求最多尝试 `max_retries + 1` 个 Provider。cc-switch 默认 `max_retries = 3`，即最多 **4 个**；因此队列中转数不宜超过 4。
- **注意**：`--max-budget-usd` 撞顶（`budget_exhausted`）是客户端预算行为，切换中转**无法**解决，只能调高预算或缩小分组。

`run-claude.sh` 的重试原则：

- **幂等续跑**，不重置工作区：提示词要求「只补缺失/过时条目」，第二次运行会在第一次的成果上继续
- 每次重试前检查代理是否存活，挂掉则重启
- 每次重试前打印 `cc-switch failover show`，便于确认当前生效的 Provider 与队列状态
- 最终只要有合法报告且校验通过，即使部分厂商失败也照常开 PR，并在 PR 描述里列出失败项

## 8. 数据质量校验

`validate_run.js` 在开 PR 前执行，任一失败即中止：

| 校验项 | 规则 |
|------|------|
| 时间线顺序 | `node scripts/sort_timeline.js --check` 返回 0 |
| 日期格式 | 新增行日期匹配 `YYYY年MM月DD日` 或 `YYYY年MM月` |
| 变更文件范围 | 只允许本组厂商文件 + `README.md` |
| 新增文件 | 不允许出现新的根目录 md（除非显式加入分组） |
| 变更规模 | 新增时间线行数 ≤ 30，变更文件数 ≤ 8 |
| 来源 | 每条 change 必须有 `http(s)://` 来源 |
| 报告结构 | `report.json` 必须符合约定 schema |
| 重复检测 | README 新增行不得与已有条目或本次其他新增行重复 |
| Markdown | `markdownlint-cli` 目前作为可选项，不在 v1 中强制 |

## 9. 需要配置的 Secrets / Variables

按编号 `i = 1..relays.max`（默认 4）配置多个中转，编号即 failover 优先级：

| 名称 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `RELAY_${i}_BASE_URL` | Variable | ✅ | 第 i 号中转的 OpenAI 兼容地址，如 `https://api.example.com/v1` |
| `RELAY_${i}_API_KEY` | Secret | ✅ | 第 i 号中转密钥 |
| `RELAY_${i}_MODEL` | Variable | ✅ | 第 i 号主力模型名 |
| `RELAY_${i}_HAIKU_MODEL` | Variable | 可选 | 第 i 号轻量模型名（别名 `haiku`），默认同主模型 |

至少配置 1 号，2~4 号可缺省（整组缺失则跳过）；若某编号只配了部分变量则脚本报错终止。

密钥只在这些位置出现：GitHub Secrets → workflow `env` → cc-switch provider 配置。禁止写入仓库文件或日志。

## 10. 已知限制与应对

| 限制 | 影响 | 应对 |
|------|------|------|
| 轮换导致延迟 | 新模型最多延迟约 4 天 | `workflow_dispatch` 支持手动指定组或 `all` |
| 第三方中转稳定性 | 可能限流、额度不足、断流 | L2 多中转 failover（`403 额度不足`亦会切换）+ L5 重试；注意客户端预算撞顶需调 `max_budget_usd` |
| 中转对工具调用支持不一 | 可能出现 400/流式异常 | 启动前 `stream-check`，不通过则快速失败 |
| 官网反爬 | 部分页面 403 | 按 CLAUDE.md 备用数据源降级 |
| WebSearch 不可用 | 无法用服务端搜索 | 只用 WebFetch + OpenRouter API |
| 模型幻觉 | 编造版本号/日期 | 来源必填 + 自动校验 + PR 人工审核 |
| Actions 定时延迟 | 高峰期可能晚几分钟到几十分钟 | 分组按日期计算，不依赖精确触发时刻 |
| 公开仓库 60 天无活动会停用定时任务 | 自动化静默停止 | PR 本身算仓库活动；另可每月手动触发一次 |
| Actions 单 job 上限 6 小时 | 长任务被强杀 | 分组 + `timeout-minutes: 60` |
| 默认 `GITHUB_TOKEN` 可能无权建 PR | PR 步骤 403 | 仓库 Settings → Actions → General 勾选「Allow GitHub Actions to create and approve pull requests」，或改用 PAT |

## 11. 落地步骤

1. 在第三方中转创建 Key，配置上表中的 Secrets / Variables
2. 新增 `scripts/vendors.json`、`scripts/pick_vendors.js`，运行 `npm run check:vendors` 确认分组完整
3. 新增 `.github/auto-update.config.json`、`.github/prompts/auto-update.md`
4. 新增 `.claude/settings.json`（仅关闭遥测，不放权限规则）
5. 新增 `scripts/ci/` 下五个脚本，并把 `pick:vendors` / `check:vendors` / `validate:run` 加入 `package.json`
6. 新增 `.github/workflows/auto-update.yml`
7. 用 `workflow_dispatch` 指定 `group=0`、`dry_run=true` 手动跑一次
8. 检查日志、报告、PR 内容；确认无误后启用 `on.schedule`

### 验收标准

- 手动触发能完成：装工具 → 起代理 → 跑 Claude → 校验 → 开 PR
- 无更新时正常退出，不产生空 PR
- 故意配置错误 Key 时：快速失败、上传日志、不开 PR
- 排序校验失败时：不开 PR，日志能看到具体文件与行
- 分组覆盖检查通过（26 个厂商文件全覆盖、无重复）
- PR 描述包含来源链接与失败厂商列表

## 12. 后续可选增强

- 每周日额外跑一次「全量组」，弥补轮换延迟
- 用 OpenRouter `/models` 做确定性 diff，只把有变化的厂商交给 LLM，降低 token 成本
- 失败时自动开 Issue 并 `@` 维护者
- 引入第二个中转做 A/B，对比数据完整率
- 把 README 去重校验扩展到全表历史数据

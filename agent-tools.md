# AI Agent 工具总览

> 本文档整理当前主流 AI Agent（智能体）工具的横向对比，覆盖**编码/终端 Agent**、**无代码/平台型 Agent**、**Agent 开发框架**三类。
> 数据主要来自 GitHub API、各产品官网及官方 changelog，抓取日期 **2026年9月19日**。
> 注：本文档为工具横评（相对独立文件），未纳入 README 的模型发版时间线表。

## 总览表格

| 厂商 | 工具 | 类型 | 是否开源 | 基于某开源工具修改 | 最早发版/创建 | 最近发版/更新 | 形态 |
|------|------|------|:------:|:------:|------|------|------|
| Anthropic | Claude Code | 编码 Agent | ❌ 闭源（SDK 开源） | — | 2025年 | 2026年9月（v2.1.x） | CLI / IDE / 桌面 / Web / 移动 / Chrome 扩展 |
| OpenAI | Codex | 编码 Agent | ✅ Rust 开源 (Apache-2.0) | — | 2025年4月 | 2026年9月18日 | CLI / Web / 桌面 / Work |
| Google | Gemini CLI | 终端 Agent | ✅ TypeScript 开源 (Apache-2.0) | — | 2025年4月 | 2026年9月18日 | CLI |
| Google | Jules | 编码 Agent（异步云） | ❌ 闭源 | — | 2025年5月 | 2026年 | Web |
| Google | ADK (Agent Dev Kit) | Agent 框架 | ✅ Python 开源 (Apache-2.0) | — | 2025年4月 | 2026年9月15日 (v2.9.1) | Python 库 |
| Microsoft | AutoGen | Agent 框架 | ✅ Python 开源 (CC-BY-4.0) | — | 2023年8月 | 2026年9月 | Python 库 |
| Microsoft/GitHub | GitHub Copilot | 编码 Agent | ❌ 闭源 | — | 2021年6月 | 2026年 | IDE / CLI / Web |
| Anysphere | Cursor | 编码 IDE Agent | ❌ 闭源 | 基于 VSCode 二次开发 | 2024年3月 | 2026年9月 | 桌面 IDE / CLI / 移动 |
| Cognition | Devin | 通用软件工程师 Agent | ❌ 闭源 | — | 2024年3月12日 | 2026年 | Web / CLI / Desktop |
| Cognition | Windsurf（原 Codeium） | 编码 IDE Agent | ❌ 闭源 | 基于 VSCode 二次开发 | 2023年（Codeium）/ 2024年（Windsurf） | 已并入 Devin | 桌面 IDE / CLI |
| Amazon | Kiro | 通用 Agent | ❌ 闭源 | — | 2025年 | 2026年 | Web / 桌面 / CLI / IDE / 移动 |
| 字节跳动 | Trae（TraeCode + TraeWork） | 编码 IDE Agent | ❌ 闭源 | 基于 VSCode 二次开发 | 2024年（海外） | 2026年 | 桌面 IDE / CLI |
| Vercel | v0 | 前端生成 Agent | ❌ 闭源 | — | 2025年 | 2026年 | Web |
| Lovable | Lovable | 无代码 Web 应用生成 | ❌ 闭源 | — | 2024年 | 2026年 | Web |
| Replit | Replit Agent | 无代码应用生成 | ❌ 闭源 | — | 2024年 | 2026年 | Web |
| Paul Gauthier | Aider | 终端编码 Agent | ✅ Python 开源 (Apache-2.0) | — | 2023年5月 | 2026年5月 (v0.86) | CLI |
| Cline 团队 | Cline | 编码 IDE Agent | ✅ TypeScript 开源 (Apache-2.0) | — | 2024年7月 | 2026年9月18日 | IDE / CLI / SDK / 桌面 |
| RooCodeInc | Roo-Code | 编码 IDE Agent | ✅ TypeScript 开源 (Apache-2.0) | 分叉自 Cline | 2024年10月 | 已归档（2026年5月最后发布 v3.54） | IDE |
| Block (Square) | Goose | 终端 Agent | ✅ Rust 开源 (Apache-2.0) | — | 2024年8月 | 2026年9月17日 (v1.51) | CLI / 桌面 |
| All Hands AI | OpenHands | 自研编码 Agent | ✅ TypeScript 开源 (MIT) | — | 2024年3月 | 2026年9月17日 (v1.20) | CLI / Web |
| StackBlitz | Bolt.diy | 全栈应用生成 | ✅ TypeScript 开源 (MIT) | ✅ Fork 自 Bolt.new 社区版 | 2024年10月 | 2025年5月 (v1.0) | Web |
| Significant Gravitas | AutoGPT | 通用 Agent | ✅ Python 开源 (MIT) | — | 2023年3月 | 2026年（活跃） | CLI |
| stitionai | Devika | 通用 Agent | ✅ Python 开源 | — | 2024年3月 | 2025年9月（停更） | CLI |
| 月之暗面等（OpenManus） | OpenManus | 通用 Agent | ✅ Python 开源 (Apache-2.0) | 灵感源自 Manus | 2025年3月 | 2025年5月 | CLI |
| Anthropic | Claude Agent SDK | Agent 框架 | ✅ 开源 (极简许可证) | — | 2025年6月 | 2026年9月 | Python/TS 库 |
| OpenAI | OpenAI Agents SDK | Agent 框架 | ✅ Python 开源 (MIT) | — | 2025年3月 | 2026年9月17日 (v0.22.3) | Python 库 |
| LangChain | LangGraph / LangChain | Agent 框架 | ✅ Python 开源 (MIT) | — | 2022-2023年 | 2026年9月 | Python/TS 库 |
| CrewAI | CrewAI | Agent 框架 | ✅ Python 开源 (MIT) | — | 2023年10月 | 2026年9月16日 | Python 库 + 平台 |
| DeepWisdom | MetaGPT | 多 Agent 框架 | ✅ Python 开源 (MIT) | — | 2023年6月 | 2026年2月 | Python 库 |
| CAMEL-AI | CAMEL | 多 Agent 框架 | ✅ Python 开源 (Apache-2.0) | — | 2023年3月 | 2026年9月 | Python 库 |
| Agno | Agno | Agent 框架 | ✅ Python 开源 (Apache-2.0) | — | 2022年5月 | 2026年9月16日 (v3.0.10) | Python 库 |
| Letta | Letta (MemGPT) | 有状态 Agent 平台 | ✅ Python 开源 (Apache-2.0) | — | 2023年10月 | 2026年5月 | 平台 / Docker |
| Langgenius | Dify | Agent 可视化编排平台 | ✅ TypeScript 开源 | — | 2023年4月 | 2026年9月10日 (v1.17.1) | 自托管 / Web |
| Langflow | Langflow | 低代码 Agent / 工作流 | ✅ Python 开源 (MIT) | — | 2023年2月 | 2026年9月16日 (v1.12.2) | 自托管 / Web |

---

## 一、编码 / 终端 Agent（Coding Agents）

### Claude Code — Anthropic
- **厂商**：Anthropic（美国，由 Dario Amodei 创立，前 OpenAI 高管）
- **开源**：❌ 闭源；但底层开发工具链 **Claude Agent SDK** 已开源
- **基于某开源工具修改**：否（原创）
- **最早发版**：2025年（终端预览版公开）
- **最近发版/更新**：2026年9月（文档 changelog 记录到 v2.1.276 左右）
- **形态**：多端覆盖最全 — **终端 CLI、IDE 插件（VSCode/JetBrains）、桌面应用、网页版、移动端、Chrome 扩展**
- **说明**：当前主流的终端编码 Agent 之一，可读写代码库、执行命令、调用 MCP 工具；支持远程控制、团队协作、Claude Tag 等。数据源：详细模型与版本见 `美国-Anthropic-Claude.md`。

### Codex — OpenAI
- **厂商**：OpenAI（美国，由 Sam Altman 等创立）
- **开源**：✅ **本体开源**（Rust，Apache-2.0），仓库 `openai/codex`，⭐12.5万
- **基于某开源工具修改**：否
- **最早发版/创建**：2025年4月13日（GitHub 创建时间）
- **最近发版/更新**：2026年9月18日（最新 push；发布 tag 至 v0.156.0-alpha 系列）
- **形态**（对应你问的「各有各版本」）：终端 **CLI**（本地落地版）、**云版 / Web**、**桌面版**、**Codex Work**（面向工程任务的云端异步工作台）
- **说明**：名称沿用 OpenAI 2021 年旧开源模型 Codex（现已弃用），2025 年起指代新的 coding agent。本地 CLI 版开源，Work/云版为闭源 SaaS。

### Gemini CLI — Google
- **厂商**：Google（美国）
- **开源**：✅ TypeScript 开源（Apache-2.0），仓库 `google-gemini/gemini-cli`，⭐10.7万
- **最早发版/创建**：2025年4月17日
- **最近发版/更新**：2026年9月18日（nightly 构建 v0.62.0-nightly）
- **形态**：命令行 CLI；支持 MCP client/server、多模型（Gemini 系列 + 其他）
- **说明**：Google 的终端 Agent，功能对标 Claude Code / Codex。

### Jules — Google
- **厂商**：Google
- **开源**：❌ 闭源
- **形态**：**Web**（GitHub 集成，异步跑任务）
- **说明**：Google 的异步编码 Agent，关联 GitHub repo 后台执行 PR 任务，与 gemini-cli 互补（CLI 实时 vs Jules 后台异步）。

### Kiro — Amazon
- **厂商**：Amazon（美国）
- **开源**：❌ 闭源
- **形态**：多形态 — **Web、桌面、CLI、IDE 插件、移动端**
- **说明**：Amazon 的通用 AI Agent（2025 年推出），定位终端/桌面的个人助手，可处理编码以外的日常任务。

### Aider — Paul Gauthier（个人/开源）
- **厂商**：个人开发者 Paul Gauthier（加拿大）
- **开源**：✅ Python 开源（Apache-2.0），仓库 `paul-gauthier/aider`，⭐4.9万
- **最早发版/创建**：2023年5月9日（最早的终端编码 Agent 之一）
- **最近发版/更新**：2026年5月（v0.86.0）
- **形态**：单文件 CLI
- **说明**：开源终端 AI 结对编程工具，支持多种后端模型（Claude/GPT/Gemini/Llama 等），是 Cline/Goose 等之后大量工具的灵感来源。

### Cline — Cline 团队
- **厂商**：开源社区 + Cline 商业团队（美国）
- **开源**：✅ TypeScript 开源（Apache-2.0），⭐6.9万
- **最早发版/创建**：2024年7月6日
- **最近发版/更新**：2026年9月18日（desktop-v0.0.32 等）
- **形态**：**IDE 扩展（VSCode 为主）、CLI、SDK、桌面应用**
- **说明**：蚂蚁集团早期核心成员之一（其创始人曾主导 Cline），目前是最大的开源编码 Agent 之一；支持任意模型 + MCP。

### Roo-Code — RooCode Inc
- **厂商**：开源（社区维护商业化）
- **开源**：✅ TypeScript 开源（Apache-2.0），⭐2.4万
- **基于某开源工具修改**：✅ **分叉自 Cline**（原有独立维护，定位于「整个 AI 开发团队」的多角色模式）
- **最早发版/创建**：2024年10月31日
- **最近发版/更新**：已 **归档（archived）**，最后发布 v3.54.0（2026年5月15日）；仓库 archived=true
- **说明**：曾是 Cline 最大 fork，多实验性功能；2026 年 5 月后主仓库归档，用户迁移回 Cline 或 fork 分支。

### Goose — Block（Square）
- **厂商**：Block, Inc.（美国，Jack Dorsey 创立的支付公司）
- **开源**：✅ Rust 开源（Apache-2.0），⭐5.4万
- **最早发版/创建**：2024年8月23日
- **最近发版/更新**：2026年9月17日（v1.51.0）
- **形态**：CLI + 桌面
- **说明**：可扩展终端 Agent，支持任意外部工具和任意 LLM，MCQ/MCP 生态。

### OpenHands — All Hands AI
- **厂商**：开源 + All Hands AI 公司（前 OpenDevin 项目）
- **开源**：✅ TypeScript 开源（MIT，核心含 CLI），⭐5.5万（仓库含建模历史）

> 注：上估计星数为仓库元数据，实际以 GitHub 页面为准。

- **最早发版/创建**：2024年3月13日（OpenDevin）
- **最近发版/更新**：2026年9月17日（v1.20.0）
- **形态**：CLI + Web（云端沙盒环境）
- **说明**：研究出身（伊利诺伊大学/勒穆瓦纳大学合作开源），可在 Docker 容器中自主完成任务。

### AutoGPT — Significant Gravitas
- **厂商**：开源社区（Significant Gravitas）
- **开源**：✅ Python 开源（MIT），仓库原 `Significant-Gravitas/AutoGPT`（⭐18.7万，已迁移到平台化仓库）
- **最早发版/创建**：2023年3月16日（早期 agent 爆款，GPT-4 自主 agent 的代表）
- **最近发版/更新**：2026年仍旧活跃
- **形态**：CLI / 平台
- **说明**：2023 年引领「自主 Agent」热潮的开源项目，后演变为 Agent 平台（AutoGPT Platform）。

### Devika — stitionai
- **厂商**：独立开源项目（巴基斯坦开发者）
- **开源**：✅ Python 开源，仓库 `stitionai/devika`，⭐2万
- **最早发版/创建**：2024年3月21日（对标 Devin 的开源实现）
- **最近发版/更新**：2025年9月后基本停更
- **说明**：Devin 的开源替代尝试，热度高峰后维护放缓。

### Bolt.diy — StackBlitz 社区版
- **厂商**：StackBlitz（美国）+ 社区维护
- **开源**：✅ TypeScript 开源（MIT），`stackblitz-labs/bolt.diy`，⭐2万
- **基于某开源工具修改**：✅ **Fork 自官方 Bolt.new**（原官方源码移除/闭源后，社区 fork 出 bolt.diy 支持任意 LLM）
- **最早发版/创建**：2024年10月13日
- **最近发版/更新**：2025年5月（v1.0.0）
- **形态**：Web（浏览器内全栈应用生成）
- **说明**：提供「prompt → 全栈应用」的生成 Agent，本 fork 解除了官方对模型厂商的限制。

---

## 二、编码 IDE Agent（闭源商业）

### Cursor — Anysphere
- **厂商**：Anysphere, Inc.（美国，2023 年成立）
- **开源**：❌ 闭源
- **基于某开源工具修改**：✅ **基于 VSCode 二次开发（fork）**，深度集成 AI 到编辑器
- **最早发版**：2024年3月（公开访问）
- **最近发版/更新**：2026年9月（新增 Cursor Projects——云端协调器 + 千级子代理、Automations 等）
- **形态**：桌面 IDE、Composer/Agent、CLI、移动端
- **说明**：最主流的 AI 原生 IDE 之一；2026 年 9 月上线「Projects」在云上管理长期任务上下文，协调器代理规划、委派子代理并行执行。

### Windsurf — 原 Codeium（现并入 Cognition）
- **厂商**：原 Codeium（美国，2023 年成立）→ **已被 Cognition AI（Devin 团队）收购整合**
  - 证据：`windsurf.com/changelog` 现已重定向到 Devin 官方文档（docs.devin.ai），版本列表为 Devin Desktop 的版本号
- **开源**：❌ 闭源
- **基于某开源工具修改**：✅ 基于 VSCode 二次开发
- **最早发版**：Codeium 2023 年（代码补全插件）/ Windsurf IDE 2024年
- **最近发版/更新**：并入 Devin 生态（Devin Desktop / 云 Agent + Cascade 本地代理）
- **形态**：桌面 IDE、CLI、Cascade（本地协作代理）
- **说明**：曾是可对标 Cursor 的 AI 编辑器，2025 年被 Cognition 收购后融入 Devin 产品线，形成「一个地方管理本地与云端所有 Agent」。

### Devin — Cognition AI
- **厂商**：Cognition AI（美国，2023 年成立）
- **开源**：❌ 闭源
- **最早发版**：2024年3月12日（「首位 AI 软件工程师」发布）
- **最近发版/更新**：2026年（Devin Desktop / Editor / CLI / 云）
- **形态**：**Web（云端沙盒）、CLI、桌面编辑器、API、企业版**
- **说明**：真正的通用「软件工程师」Agent，具备 shell/编辑器/浏览器、长时推理规划、自主完成任务；2026 年收购 Windsurf/Cascade 后扩展为本地 + 云端统一 Agent 管理（Devin Agent Client Protocol, ACP）。

### GitHub Copilot — GitHub / Microsoft
- **厂商**：GitHub（微软，美国）
- **开源**：❌ 闭源（Copilot App 部分 CLI/工具链有开源组件）
- **最早发版**：2021年6月（代码补全插件，与 OpenAI Codex 合作）
- **最近发版/更新**：2026年（Copilot App、Copilot CLI、MCP Registry、code review agent）
- **形态**：IDE 扩展、**CLI**、**Web（Copilot app / code review agent）**
- **说明**：最早大规模商用的 AI 编程助手，现已从「补全」演进为「Agent」——Copilot 编码代理、CLI 终端 agent、代码评审代理。

### Trae — ByteDance（字节跳动）
- **厂商**：字节跳动（中国，北京）/ 海外 Blackbird（深圳，原字节 AI 编程团队）
- **开源**：❌ 闭源（有部分组件开源）
- **基于某开源工具修改**：✅ 基于 VSCode 二次开发
- **最早发版**：2024年（海外版；2025 年国内由 Blackbird 团队推出 Trae 国内版）
- **最近发版/更新**：2026年
- **形态**：桌面 IDE（TraeCode）+ 通用工作助手（TraeWork，Web/桌面）
- **说明**：字节推出的 AI 编程 IDE，定位中国市场对标 Cursor/Windsurf；分 TraeCode（编码工程师，10x coding agent）与 TraeWork（通用工作 Agent）双形态。

---

## 三、无代码 / 应用生成 Agent

### v0 — Vercel
- **厂商**：Vercel（美国）
- **开源**：❌ 闭源
- **最早发版**：2025年（公开）
- **形态**：Web、iOS；可生成可部署前端/全栈应用，默认 agentic（规划任务、连数据库、部署）
- **说明**：面向前端/全栈的 prompt-to-app 生成 Agent，深度绑定 Vercel 部署生态。

### Lovable — Lovable（原 GPT Engineer 商业化演进）
- **厂商**：Lovable（瑞典，2024 年成立）
- **开源**：❌ 闭源（早期 GPT Engineer 为开源）
- **最早发版**：2024年（Lovable 品牌；前身开源项目更早）
- **形态**：Web
- **说明**：无代码的 Web 应用生成 Agent，主打「自然语言建 Full-stack 应用」，欧洲市场增长快。

### Replit Agent — Replit
- **厂商**：Replit（美国，2016 年成立）
- **开源**：❌ 闭源（Replit 平台部分开源）
- **最早发版**：2024年（Replit Agent）
- **形态**：Web（云端 IDE）
- **说明**：在 Replit 云端推出 agentic 应用构建，prompt → 可运行应用（网站、移动、自动化）。

---

## 四、Agent 开发框架（开源 SDK / 编排）

围绕 agentic AI 的开发框架，适合开发者自建 Agent。

| 框架 | 厂商 | 语言 | License | GitHub 创建 | 最近更新 | 定位 |
|------|------|------|---------|-----------|---------|------|
| Claude Agent SDK | Anthropic | Python / TS | 开源（极简许可） | 2025年6月 | 2026年9月 | 构建基于 Claude 的编码/通用 agent（支持 sandbox、subagent、hook）。Claude Code 底层 |
| OpenAI Agents SDK | OpenAI | Python / TS | MIT | 2025年3月 | 2026年9月 (v0.22.3) | 多 Agent 工作流轻量框架 |
| ADK (Agent Development Kit) | Google | Python | Apache-2.0 | 2025年4月1日 | 2026年9月15日 (v2.9.1) | 构建/评估/部署 agent，可绑定 Gemini |
| AutoGen | Microsoft | Python | CC-BY-4.0 | 2023年8月18日 | 2026年9月 | 多 Agent 对话编排框架（最早火的项目） |
| CrewAI | CrewAI Inc | Python | MIT | 2023年10月27日 | 2026年9月16日 (1.15.22) | 「角色扮演团队」协作式多 Agent 框架 |
| MetaGPT | DeepWisdom | Python | MIT | 2023年6月30日 | 2026年2月 | 多 Agent 软件开发流程（产品/架构/编码角色） |
| LangGraph / LangChain | LangChain Inc | Python / TS | MIT | 2023年8月 (LangGraph) | 2026年9月 | 图状态机的 agent 编排，企业级，生态最大 |
| CAMEL | CAMEL-AI | Python | Apache-2.0 | 2023年3月17日 | 2026年9月 | 多 Agent 协作研究框架 |
| Agno | Agno | Python | Apache-2.0 | 2022年5月4日 | 2026年9月16日 (v3.0.10) | 构建/托管 Agent 平台的库 |
| Letta (MemGPT) | Letta Inc | Python | Apache-2.0 | 2023年10月11日 | 2026年5月 | 有状态、可长期记忆的 Agent 平台 |
| Dify | Langgenius | TypeScript | 开源（商业条款） | 2023年4月12日 | 2026年9月10日 (v1.17.1) | 可视化 Agent/RAG 工作流平台，可自托管 |
| Langflow | Langflow | Python | MIT | 2023年2月8日 | 2026年9月16日 (v1.12.2) | 拖拽式低代码 Agent / 工作流 |
| OpenManus | OpenManus 社区 | Python | Apache-2.0 | 2025年3月6日 | 2025年5月 | Manus 的轻量开源实现（通用 Agent） |

---

## 五、国产 Agent 工具补充

> 以下三家为国内主流编码/通用 Agent 工具，均为闭源商业产品；因官方开源数据有限，未列入上方主表，单独列出以便对照。抓取日期 **2026年9月19日**。

### Kimi（Kimi for Coding / Kimi CLI）— 月之暗面
- **厂商**：月之暗面（Moonshot AI，中国，北京，杨植麟创立）
- **开源**：❌ 闭源（模型与服务均闭源；无对应官方开源代码仓库）
- **基于某开源工具修改**：否（自研）
- **最早发版/创建**：Kimi 助手 2023年10月；编程形态（Kimi for Coding）2025 年起陆续推出
- **最近发版/更新**：2026年（旗舰模型 **K3** 发布，1M 上下文，定位「专为智能体编程与知识工作打造」；另提供 K2.7 Code（256K 上下文编码模型）、K2.6）
- **形态**：
  - **Kimi Code** — 编码 Agent（对标 Claude Code / Codex，支持仓库读写、命令执行、MCP 工具调用）
  - **Kimi Work** — 通用工作 Agent（对标 Claude Work / Devin 的异步任务协作）
  - **Kimi Claw** — 计算机操作 Agent（Computer Use，可操控图形界面）
  - **Kimi 助手 / Kimi CLI / 网页版 / 移动端** 等多端覆盖
- **说明**：国内最早一批大模型独角兽之一；2026 年将编程 Agent 形态独立成线，K3 作为「智能体编程」旗舰模型，Kimi Code/Work/Claw 三条产品线分别对标国际主流形态。
- **数据来源**：`platform.kimi.com`（模型列表与定价）、`kimi.com`（产品入口）、`platform.kimi.ai/docs/pricing/`（各模型定价详情）

### 通义灵码（Tongyi Lingma）— 阿里巴巴 / 阿里云
- **厂商**：阿里巴巴集团 / 阿里云（中国，杭州）
- **开源**：❌ 闭源（底层通义千问模型与灵码服务均闭源）
- **基于某开源工具修改**：否（自研；**Lingma IDE** 为独立 AI IDE，非 VSCode fork）
- **最早发版/创建**：2023年（通义千问模型）/ 通义灵码编码助手 2024 年公测
- **最近发版/更新**：2026年（**Lingma IDE 全面公测**，定位独立 AI IDE）
- **形态**：
  - **VSCode / JetBrains 插件** — 编程助手（代码补全、问答、生成）
  - **Lingma IDE** — 独立 AI IDE（全面公测，对标 Cursor/Trae）
  - **编程智能体** — 自主规划、自动感知、工具使用、终端命令执行的 agentic 能力
- **说明**：定位「灵动指间，快码加编，你的智能编码助手」；支持个人免费使用与企业免费开通；从「补全插件」演进为「独立 IDE + 编程智能体」双形态，是国内厂商中形态最接近 Cursor + Cline 组合的产品。
- **数据来源**：`tongyi.aliyun.com/lingma`（产品官网，含能力介绍与 IDE 公测信息）

### 腾讯 CodeBuddy — 腾讯云
- **厂商**：腾讯云（中国，深圳）
- **开源**：❌ 闭源（服务闭源；GitHub 上无官方开源仓库，仅有同名无关第三方项目）
- **基于某开源工具修改**：否（自研）
- **最早发版/创建**：2024年（CodeBuddy 公测）
- **最近发版/更新**：2026年（持续迭代）
- **形态**：
  - **IDE 插件** — VSCode / JetBrains 编码助手
  - **云端代码助手** — 集成于腾讯云生态的代码评审、补全、生成
  - 产品页以「AI 时代的智能编程伙伴」为定位
- **说明**：腾讯云推出的智能编码助手，深度绑定腾讯云生态；官方页面为 JS 动态渲染，详细版本号与形态信息有限，以官方 `codebuddy.tencent.com` 为准。
- **数据来源**：`codebuddy.tencent.com`（产品官网，JS 渲染，文本信息有限）

### 国产工具横向对照

| 厂商 | 工具 | 是否开源 | 基于开源工具 | 最早 | 最近 | 形态 |
|------|------|:------:|:------:|------|------|------|
| 月之暗面 | Kimi（Code/Work/Claw） | ❌ | 否 | 2023年10月（Kimi）/ 2025年（编程形态） | 2026年（K3） | CLI / 桌面 / Web / 移动 / Computer Use |
| 阿里巴巴 | 通义灵码（Lingma） | ❌ | 否（IDE 自研） | 2023年（通义）/ 2024年（灵码） | 2026年（Lingma IDE 公测） | IDE 插件 / 独立 IDE / 编程智能体 |
| 腾讯 | CodeBuddy | ❌ | 否 | 2024年 | 2026年 | IDE 插件 / 云端助手 |

---

## 六、常见关系梳理 FAQ

### Q1：哪些是「根据某开源工具修改 / fork」的？
- **Roo-Code** ✅ 分叉自 **Cline**
- **Bolt.diy** ✅ 分叉自 **Bolt.new**（官方闭源后社区 fork）
- **Cursor / Windsurf / Trae** ✅ 均为**基于 VSCode 的二次开发**（IDE fork，非开源）
- 其余为原创工具；「Codex」开源模型与「Codex」agent 是不同产品，agent 本体原创。

### Q2：Codex 到底有哪些版本/形态？
OpenAI **Codex** 有 4 类形态：
1. **CLI（本地版）** — Rust 开源，可打断审计式地在本地仓库干活
2. **Web（云版）** — 浏览器里用云端容器跑
3. **桌面版** — 本地 GUI
4. **Codex Work** — 面向「大型工程任务」的云端异步委托工作台，可后台长期执行
其中仅本地 CLI 版开源；Work/云版为闭源收费服务。

### Q3：Claude Code 有多少形态？
Anthropic **Claude Code** 覆盖最全：**终端 CLI、IDE 插件（VSCode/JetBrains/VS Server 版）、桌面应用、Web、移动端、Chrome 扩展、Slack（Claude Tag）、云远程控制**。底层可用开源 Claude Agent SDK 二次开发。

### Q4：还有哪些同类工具值得注意？
- **OpenAI Cline 生态、Gemini、Cursor CLI**（Cursor 也提供独立 CLI agent）
- **MCP（Model Context Protocol，Anthropic 开源）**：agent 工具互通标准，几乎被上述工具普遍采用
- **ACP（Agent Client Protocol，Cognition 基于 MCP 扩展）**：Devin 生态的 agent 协作协议
- 国产工具（**Kimi Code/Work/Claw**、**通义灵码**、**腾讯 CodeBuddy**）详见上方「**五、国产 Agent 工具补充**」一节。

---

## 数据来源与日期

- GitHub 仓库元数据（创建时间、star、license、fork、最新 push）：GitHub REST API，抓取于 2026年9月19日
- Claude Code：`docs.anthropic.com/en/docs/claude-code/*`（changelog 记录 v2.1.2xx，2026年9月）
- Codex：`developers.openai.com/codex`（认证墙，部分基于已知信息 + GitHub release feed）
- Cursor：`cursor.com/changelog`（2026年9月10日 Projects 发布）
- Windsurf/Devin：`windsurf.com/changelog` 重定向 → `docs.devin.ai`（Devin Desktop changelog）
- Devin：`cognition.ai/blog/introducing-devin`（2024-03-12）
- Trae：`trae.ai`（TraeCode / TraeWork）
- Replit/v0/Lovable：官方首页文本

> ⚠️ **数据截止为 2026年9月19日**。AI Agent 领域迭代极快，发版时间与形态请以各官方 changelog 为准。

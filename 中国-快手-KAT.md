# 快手 - KAT (Kwaipilot)

## 公司简介

| 项目 | 内容 |
|------|------|
| 国家 | 中国 |
| 总部 | 北京 |
| 成立时间 | 2011年（快手App上线），2015年公司正式成立 |
| 创始人 | 宿华、程一笑 |
| 定位 | 中国头部短视频与直播平台，2021年于港交所上市。旗下 **Kwaipilot** 团队负责智能编程与 Agent 大模型（KAT / KwaiCoder 系列） |

> **功能属性图例**：📝 纯文本 | 🌐 多模态 | 🧠 推理 | 💻 代码 | 🖼️ 文生图 | 🎤 语音 | 👁️ 视觉理解 | 🖥️ 计算机操作

> **说明**：本文件聚焦快手 **Kwaipilot** 团队的大语言/智能体编程模型（KAT、KwaiCoder 系列）。快手的文生视频模型 **可灵（Kling）** 属于独立产品线，不在本文档范围内。

## 模型总览

### KAT 系列（Kwaipilot Agentic，2025年-2026年）

| 版本 | 发布时间 | 功能属性 | 参数规模 | 激活参数 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|----------|
| KAT-Coder-Pro V2.5 | 2026年7月10日 | 💻🧠🖥️ | 未公开（MoE） | 未公开 | 256K | 旗舰级 Agentic 编程模型，可自主定位并完成整个 issue/业务流程（闭源API） |
| KAT-Coder-V2.5-Dev | 2026年7月23日 | 💻🧠 | MoE（qwen3.5_moe 架构） | 8专家/token | 256K | KAT-Coder 开源版，HuggingFace 高人气（4万+下载） |
| KAT-Coder-Pro V2 | 2026年3月27日 | 💻🧠🖥️ | 未公开（MoE） | 未公开 | 256K | 面向复杂企业级软件工程与 SaaS 集成的高性能 Agentic 编程模型（闭源） |
| KAT-Dev-72B-Exp | 2025年10月10日 | 💻🧠 | 72B（Dense） | 72B | 128K | 强化学习实验版，探索大规模 RL 训练（另有 FP8 量化版） |
| KAT-Dev | 2025年9月15日 | 💻🧠 | 32B（Dense，Qwen3架构） | 32B | 128K | 开源 Agentic 编程模型，社区人气高（220+ likes） |
| KAT-V1-40B | 2025年7月20日 | 💻🧠 | 40B（Dense，Qwen2架构） | 40B | 128K | KAT 系列首款 Agentic 编程模型 |

### KwaiCoder / 早期研究系列（2024年-2025年）

| 版本 | 发布时间 | 功能属性 | 参数规模 | 激活参数 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|----------|
| HiPO-1.7B | 2025年10月31日 | 📝🧠 | 1.7B | 1.7B | 未公开 | 混合策略优化（Hybrid Policy Optimization）研究模型 |
| HiPO-8B | 2025年9月26日 | 📝🧠 | 8B | 8B | 未公开 | HiPO 推理研究模型 |
| KwaiCoder-AutoThink-preview | 2025年6月2日 | 💻🧠 | 未公开 | 未公开 | 未公开 | 自动思考（AutoThink）预览版，按需触发深度推理 |
| SRPO-Qwen-32B | 2025年4月21日 | 📝🧠 | 32B | 32B | 未公开 | 基于 Qwen 的强化学习研究模型 |
| OASIS-code-embedding-1.5B | 2025年3月11日 | 💻 | 1.5B | 1.5B | 未公开 | 代码检索向量（embedding）模型 |
| KwaiCoder-23B-A4B-v1 | 2025年1月22日 | 💻 | 23B（MoE） | 4B | 未公开 | 稀疏 MoE 代码模型 |
| KwaiCoder-DS-V2-Lite-Base | 2024年12月2日 | 💻 | 未公开 | 未公开 | 未公开 | 轻量级代码基座模型 |
| OASIS-code-1.3B | 2024年10月30日 | 💻 | 1.3B | 1.3B | 未公开 | 早期代码补全模型 |

## 模型详细介绍

### KAT-V1-40B（2025年7月20日）

KAT（Kwaipilot Agentic）系列的首款模型，40B 稠密参数，基于 Qwen2 架构（80层，hidden 5120），支持 128K 上下文。定位为面向真实软件工程场景的 Agentic 编程模型，标志着快手从代码补全（KwaiCoder/OASIS）向自主智能体编程的转型。

### KAT-Dev（2025年9月15日）

KAT-Dev 是快手开源的 32B 稠密 Agentic 编程模型，基于 Qwen3 架构（64层，hidden 5120），128K 上下文。在 HuggingFace 上获得社区高度关注（220+ likes），面向 SWE-Bench 等真实代码工程评测优化，可在开发环境中自主探索代码库、实现多文件修改。

### KAT-Dev-72B-Exp（2025年10月10日）

KAT-Dev 的实验（Experimental）版本，72B 稠密参数（Qwen2 架构，80层，hidden 8192），128K 上下文。主要用于探索大规模强化学习（RL）在 Agentic 编程能力上的效果，同时提供 FP8 量化版本以降低部署门槛。

### KAT-Coder-Pro V2（2026年3月27日）

KAT-Coder 系列进入 "Pro" 商用阶段的高性能版本，采用 MoE 架构，256K 上下文。面向复杂企业级软件工程与 SaaS 集成场景，具备强 Agentic 编程能力，可自主完成跨文件、跨模块的工程任务。通过闭源 API 提供服务，并上架 OpenRouter。

### KAT-Coder-V2.5-Dev（2026年7月23日）

KAT-Coder V2.5 的**开源版本**，采用 qwen3.5_moe 稀疏 MoE 架构（40层，hidden 2048，每 token 激活 8 个专家），256K 上下文。在 HuggingFace 上人气极高（4万+下载、640+ likes），是快手开源生态中最受欢迎的编程模型之一。

### KAT-Coder-Pro V2.5（2026年7月10日）

KAT-Coder 系列的旗舰级 Agentic 编程模型（闭源 API，上架 OpenRouter），256K 上下文。官方定位为可以"直接把整个 issue 或整条业务工作流交给它"，由模型自主定位问题、实现修改并验证结果，是快手当前能力最强的智能体编程模型。

### KwaiCoder / OASIS 早期系列（2024年-2025年）

Kwaipilot 团队在 KAT 之前的技术积累：

- **OASIS-code-1.3B / embedding-1.5B**：面向代码补全与代码检索的轻量模型
- **KwaiCoder-DS-V2-Lite-Base / 23B-A4B-v1**：代码基座与稀疏 MoE 代码模型（23B 总参 / 4B 激活）
- **KwaiCoder-AutoThink-preview**：引入"自动思考"机制，按任务难度自适应触发深度推理
- **SRPO-Qwen-32B / HiPO 系列**：强化学习与混合策略优化（Hybrid Policy Optimization）的研究成果，为 KAT 的 Agentic RL 训练奠定基础

## 访问链接

| 平台 | URL |
|------|-----|
| HuggingFace（Kwaipilot） | <https://huggingface.co/Kwaipilot> |
| GitHub（Kwaipilot） | <https://github.com/Kwaipilot> |
| 快手官网 | <https://www.kuaishou.com> |
| OpenRouter（KAT-Coder） | <https://openrouter.ai/kwaipilot> |

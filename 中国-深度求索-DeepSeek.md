# DeepSeek（深度求索）

## 公司简介

| 项目 | 内容 |
|------|------|
| 国家 | 中国 |
| 总部 | 杭州 |
| 成立时间 | 2023年11月 |
| 创始人 | 梁文锋（幻方量化创始人） |
| 定位 | 专注通用人工智能研究的初创公司，以极低训练成本和开源策略闻名 |

> **功能属性图例**：📝 纯文本 | 🌐 多模态 | 👁️ 视觉理解 | 🧠 推理 | 💻 代码

## 模型总览

> ⚠️ 部分模型发布时间仅精确到年份，需后续通过产品官网验证补充精确日期

| 版本 | 发布时间 | 功能属性 | 参数规模 | 激活参数 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|----------|
| DeepSeek-V4.1-Flash-1017 🆕 | 2026年10月17日 | 🌐🧠 多模态（支持图像理解）+推理 | 552B MoE（每token激活8-16B：输入8B/输出16B） | 未公开 | 1M（384K输出） | 最新快照，DeepSWE v1.1等基准较9月版提升、输出更短，面向端到端项目开发（游戏/3D建模）；API 模型名 `deepseek-flash` |
| DeepSeek-V4.1-Flash-1017-经济版 🆕 | 2026年10月17日 | 🌐🧠 多模态（支持图像理解）+推理 | 552B MoE | 未公开 | 1M（384K输出） | 经济版与标准版权重完全一致、能力相同，价格更低、生成速度略慢（火山方舟：输入0.8/1.6、输出3.2/6.4元/M tokens 空闲/高峰）；模型ID `deepseek-v4-1-flash-economy-261017` |
| DeepSeek-V4.1-Flash | 2026年9月10日 | 🌐🧠 多模态（支持图像理解）+推理 | 官方未公开 | 未公开 | 1M（384K输出） | V4 Flash新一代版本，全面超越V4 Pro（性能/费用/速度），支持思考/非思考切换，JSON Output/Tool Calls/Responses API |
| DeepSeek-V4-Flash-0731 | 2026年7月31日 | 📝 纯文本 | 158B MoE | 13B | 1M（384K输出） | V4 Flash 0731版本快照，⚠️ 2026年9月已退役（路由至V4.1-Flash） |
| DeepSeek-V4-Pro-0813 🆕 | 2026年8月12日 | 📝 纯文本 | 862B MoE | 未公开 | 1M（384K输出） | V4 Pro 0813 GA版本；DeepSeek 于 2026年9月10日公告：应广大用户需求，2026年9月14日之后继续提供 V4 Pro API 服务（计费方式不变，原退役并路由至 V4.1-Flash 的计划已撤销）；OpenRouter Pro 家族 `~deepseek/deepseek-pro-latest` 别名始终指向 Pro 家族最新模型 |
| DeepSeek Coder V1 | 2024年1月 | 💻 代码 | 未公开 | 未公开 | 16K | 首个代码模型 |
| DeepSeek Coder V2 | 2024年6月 | 💻📝 代码+文本 | 236B MoE | 21B | 128K | 代码专用模型 |
| DeepSeek LLM 67B | 2024年1月5日 | 📝 纯文本 | 67B | 67B | 4K | 首个开源模型 |
| deepseek-chat | 2024年 | 📝 纯文本 | — | — | 128K | ⚠️ **2026年7月24日已弃用**，迁移至 deepseek-v4-flash 非思考模式 |
| DeepSeek-Math-V2 | 2025年11月 | 📝🧠 文本+推理 | 685B MoE | 未公开 | 128K | 数学推理专用 |
| DeepSeek-OCR | 2025年11月 | 👁️📝 视觉+文本 | 3B | 3B | — | OCR专用模型 |
| DeepSeek-OCR-2 | 2026年2月 | 👁️📝 视觉+文本 | 3B | 3B | — | OCR升级版，视觉因果流 |
| DeepSeek-R1 | 2025年1月20日 | 🧠 推理 | 671B MoE | 37B | 160K | 对标OpenAI o1 |
| DeepSeek-R1-0528 | 2025年5月28日 | 🧠 推理 | 671B MoE | 37B | 160K | R1迭代更新 |
| DeepSeek-R1-Lite | 2024年11月20日 | 🧠 推理 | 未公开 | 未公开 | 128K | 推理模型预览版 |
| DeepSeek-R1-Zero | 2025年1月28日 | 🧠 推理 | 671B MoE | 37B | 160K | 纯强化学习训练 |
| DeepSeek-R1蒸馏（1.5B~70B） | 2025年1月28日 | 🧠 推理 | 1.5B~70B | — | 160K | 多规模蒸馏版 |
| deepseek-reasoner | 2025年 | 🧠 推理 | — | — | 160K | ⚠️ **2026年7月24日已弃用**，迁移至 deepseek-v4-flash 思考模式 |
| DeepSeek-V2-Lite | 2024年5月 | 📝 纯文本 | 15.7B MoE | 2.4B | 32K | V2轻量版 |
| DeepSeek-V2.5 | 2024年9月 | 📝💻 文本+代码 | 236B MoE | 21B | 128K | 融合Chat和Coder |
| DeepSeek-V2.5-0905 | 2024年9月 | 📝💻 文本+代码 | 236B MoE | 21B | 128K | V2到V3过渡版 |
| DeepSeek-V2（236B/21B） | 2024年5月6日 | 📝 纯文本 | 236B MoE | 21B（160专家） | 128K | MoE架构创新 |
| DeepSeek-V3-0324 | 2025年3月24日 | 📝 纯文本 | 671B MoE | 37B | 160K | V3更新版 |
| DeepSeek-V3-Base | 2024年12月 | 📝 纯文本 | 671B MoE | 37B | 128K | 预训练基座模型 |
| DeepSeek-V3.1 | 2025年 | 📝 纯文本 | 671B MoE | 37B | 160K | V3.1迭代版 |
| DeepSeek-V3.1-Terminus | 2025年 | 📝 纯文本 | 671B MoE | 37B | 160K | V3.1终结版 |
| DeepSeek-V3.2 | 2025年12月 | 📝 纯文本 | 685B MoE | 未公开 | 128K | V3正式升级版 |
| DeepSeek-V3.2-Exp | 2025年11月 | 📝 纯文本 | 685B MoE | 未公开 | 160K | V3.2实验版 |
| DeepSeek-V3.2-Speciale | 2025年12月 | 📝 纯文本 | 685B MoE | 未公开 | 128K | V3.2特别版 |
| DeepSeek-V3（671B/37B） | 2024年12月26日 | 📝 纯文本 | 671B MoE | 37B（256专家） | 128K | 训练成本仅$5.5M，FP8训练 |
| DeepSeek-V4-Flash | 2026年 | 📝 纯文本 | 158B MoE | 未公开 | 1M（384K输出） | V4轻量版，定价0.02/1.00/2.00元/M tokens |
| DeepSeek-V4-Flash-Base | 2026年4月 | 📝 纯文本 | 292B MoE | 未公开 | 未公开 | V4 Flash基座模型 |
| DeepSeek-V4-Pro | 2026年 | 📝 纯文本 | 862B MoE | 未公开 | 1M（384K输出） | V4旗舰版，⚠️ 2026年8月17日起峰谷定价：缓存命中0.15/0.30、缓存未命中4.5/9.0、输出13.5/27.0元/M tokens（空闲/高峰） |
| DeepSeek-V4-Pro-Base | 2026年4月 | 📝 纯文本 | 1.6T MoE | 未公开 | 未公开 | V4 Pro基座模型 |
| DeepSeek-VL | 2024年3月 | 👁️📝 视觉+文本 | 未公开 | 未公开 | 未公开 | 首个视觉语言模型 |
| DeepSeek-VL2 | 2024年12月13日 | 👁️📝 视觉+文本 | 未公开MoE | 未公开 | 128K | 视觉语言模型 |

## 模型详细介绍

### DeepSeek LLM 67B（2024年1月）

深度求索首个开源模型，67B参数稠密模型，4K上下文。在多项基准上表现出色，奠定了DeepSeek开源模型的基础。

### DeepSeek Coder V1（2024年1月）

首个代码专用模型，支持多种编程语言的代码生成和理解。

### DeepSeek-VL（2024年3月）

首个视觉语言模型，结合视觉理解和文本生成能力，支持图像描述、视觉问答等任务。

### DeepSeek-V2（2024年5月）

首个采用MoE架构的版本，236B总参数仅21B激活，大幅降低推理成本。创新性地使用了多头潜在注意力（MLA）机制，在保持性能的同时显著减少KV Cache内存占用。

### DeepSeek-V2-Lite（2024年5月）

V2的轻量版本，15.7B MoE架构仅2.4B激活参数，适合资源受限场景。

### DeepSeek-V3

671B参数MoE模型，37B激活，256个专家。最大亮点是训练成本仅$5.5M（使用2048块H800 GPU训练约2个月），是同级别模型成本的几分之一。采用FP8训练、Multi-Token Prediction（MTP）等创新技术。在多项基准上与GPT-4o竞争。V3-Base是预训练基座模型（无SFT/RL后训练）。

### DeepSeek-R1

深度推理模型，对标OpenAI o1，160K上下文。采用强化学习训练，具备链式思维推理能力。在数学（AIME 2024得分79.8%，MATH-500得分97.3%）、编程（Codeforces评分2029）等任务上达到或超越o1水平。R1-Zero版本完全通过强化学习训练（无监督微调），展示了纯RL训练推理能力的可行性。V3通过从R1系列模型蒸馏知识来增强推理能力。

### 蒸馏模型系列

将R1的推理能力蒸馏到更小的模型中（1.5B/7B/8B/14B/32B/70B），使小模型也能具备强推理能力。其中DeepSeek-R1-Distill-Qwen-32B在多项推理基准上超越了o1-mini。

### DeepSeek-V3.2

V3的重大升级版本，685B参数MoE架构。2025年12月发布，包含标准版和Speciale特别版。在多项基准测试中表现优异。

### DeepSeek-V4系列（2026年）

最新一代模型家族：
- **DeepSeek-V4.1-Flash-1017**（2026年10月17日）：V4.1-Flash 的 10 月快照，官方称为性能与成本的帕累托改进：基准更强、任务完成更快、输出更短。重点优化端到端项目开发（从游戏到 3D 建模），并针对 DeepSeek Harness、腾讯 CodeBuddy / WorkBuddy 等 Agent 工具适配。上下文 1M，最大输出 384K，支持图像理解。API 模型名为 `deepseek-flash`（旧名 `deepseek-v4-flash` 仍可调用并路由至此）。定价（元/百万 tokens，空闲/高峰）：缓存命中 0.02/0.04，缓存未命中 1/2，输出 4/8；OpenRouter 为 $0.15/$0.60。火山方舟同步上架 **deepseek-v4-1-flash-economy-261017 经济版**（2026年10月17日）：与标准版权重完全一致、能力相同，价格更低、生成速度略慢（方舟定价：输入 0.8/1.6、输出 3.2/6.4 元/百万 tokens 空闲/高峰）。⚠️ 火山方舟文档确认 V4.1-Flash 架构为 552B 总参数 MoE，每 token 激活 8-16B（输入 8B / 输出 16B），KV Cache 压缩至上一代 HBM 的 1/4、SSD 的 1/8
- **DeepSeek-V4.1-Flash**（2026年9月10日）：V4 Flash 系列的新一代版本，全面超越 V4 Pro（性能、费用、速度、总用时）。支持图像理解，支持思考/非思考切换（默认思考）。上下文1M，最大输出384K。支持 JSON Output、Tool Calls、Responses API、Anthropic API、前缀续写（Beta）、FIM（Beta）。参数规模官方未披露。
- **DeepSeek-V4-Pro**：862B参数MoE架构旗舰模型，最强能力。上下文1M，最大输出384K。⚠️ **定价更新（2026年10月24日核查）**：2026年8月17日起采用峰谷定价，当前官方定价页为——缓存命中 0.15/0.30元、缓存未命中 4.5/9.0元、输出 13.5/27.0元 每百万 tokens（空闲/高峰时段，高峰为北京时周一至周五9:00-12:00、14:00-18:00），此前的 0.025/3.00/6.00 元已不再适用。后续推出 **DeepSeek-V4-Pro-0813**（2026年8月12日）GA版本，OpenRouter 模型 ID 为 `deepseek/deepseek-v4-pro-0813`。DeepSeek 于 2026年9月10日公告：应广大用户需求，2026年9月14日之后继续提供 V4 Pro 的 API 调用服务，计费方式保持不变（原计划的退役并路由至 V4.1-Flash 已撤销），API 定价页当前仍列有 `deepseek-v4-pro`。OpenRouter Pro 家族的 `~deepseek/deepseek-pro-latest` 别名始终指向 Pro 家族最新模型
- **DeepSeek-V4-Flash**：158B参数MoE架构，高性能低成本。上下文1M，最大输出384K。定价：缓存命中0.02元/M tokens，缓存未命中1.00元/M tokens，输出2.00元/M tokens。后续推出 **DeepSeek-V4-Flash-0731**（2026年7月31日）版本快照，OpenRouter 模型 ID 为 `deepseek/deepseek-v4-flash-0731`
- **DeepSeek-V4-Pro-Base**：1.6T参数MoE基座模型
- **DeepSeek-V4-Flash-Base**：292B参数MoE基座模型

### ⚠️ 模型弃用通知

- **deepseek-chat** 和 **deepseek-reasoner** 将于 **2026年7月24日 15:59 UTC** 弃用
- 弃用后，`deepseek-chat` 对应 `deepseek-v4-flash` 的非思考模式
- 弃用后，`deepseek-reasoner` 对应 `deepseek-v4-flash` 的思考模式
- 建议用户尽快迁移到新的模型名称
- **deepseek-v4-flash** 与 **deepseek-v4-flash-vision-exp** 已退役（下线）：旧模型名仍可调用，但请求实际由 **DeepSeek-V4.1-Flash** 提供服务，按 Flash 价格计费
- **deepseek-v4-pro（V4-Pro-0813）未退役**：DeepSeek 于 2026年9月10日公告，应广大用户需求，2026年9月14日之后继续提供 DeepSeek V4 Pro 的 API 调用服务，计费方式保持不变（原计划的退役并路由至 V4.1-Flash 已撤销）；当前 API 定价页仍列有 `deepseek-v4-pro`（DeepSeek-V4-Pro-0813）；OpenRouter 的 Pro 家族 `~deepseek/deepseek-pro-latest` 别名始终指向 Pro 家族最新模型
- **Search / Fetch API 开始计费**：独立调用每 1,000 次成功请求 5 元（约 $0.75）；在 DeepSeek Harness、Claude Code、Codex 中的服务端工具调用目前免费，自 **2026年11月1日 00:00（北京时间）** 起按次收费
- **自研搜索 API 开放**（2026年10月17日）：网页端与 API 端搜索能力均由自研 DeepSeek 搜索引擎提供底层支持，索引全球千亿级网页，过滤 SEO 作弊/GEO 操纵/低质 AIGC；同日 **DeepSeek-V4.1-Flash 升级至 1017 快照**，网页端与 APP 模型同步更新，API 调用方式与价格保持不变（更新日志：HLE 42.6、Terminal-Bench 4.0 42.3、DeepSWE v1.1 77.0、NL2Repo-Bench 68.2、Agents' Last Exam 35.4）

### DeepSeek-OCR系列

OCR专用模型：
- **DeepSeek-OCR**（3B，2025年11月）：首个OCR专用模型
- **DeepSeek-OCR-2**（3B，2026年2月）：升级版，视觉因果流技术

### 核心创新

- **MLA（多头潜在注意力）**：减少KV Cache内存，提高推理效率
- **MoE架构**：256专家中仅激活37B参数，成本极低
- **FP8训练**：业界首批大规模FP8训练模型之一
- **Multi-Token Prediction**：多token预测，提升训练效率
- **纯RL训练**：R1-Zero证明无需监督微调即可涌现推理能力
- **视觉因果流**：DeepSeek-OCR-2采用的新技术

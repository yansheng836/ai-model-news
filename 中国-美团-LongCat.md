# 美团 - LongCat

## 公司简介

| 项目 | 内容 |
|------|------|
| 国家 | 中国 |
| 总部 | 北京 |
| 成立时间 | 2010年 |
| 创始人 | 王兴 |
| 定位 | 生活服务领域头部平台，聚焦"零售+科技"战略，深耕本地生活服务与即时配送 |

> **功能属性图例**：📝 纯文本 | 🌐 多模态 | 🧠 推理 | 💻 代码 | 🖼️ 文生图 | 🎤 语音 | 👁️ 视觉理解 | 🖥️ 计算机操作

## 模型总览

### LongCat 系列（2025年-2026年）

| 版本 | 发布时间 | 功能属性 | 参数规模 | 激活参数 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|----------|
| LongCat-Flash-Lite-MoE | 2025年（推测） | 📝 | 68.5B | 3B | 未公开 | 轻量级MoE基座，用于LongCat-Next |
| LongCat-Flash-Thinking | 2025年（推测） | 📝🧠 | 未公开 | 未公开 | 未公开 | 推理模型，Flash-Thinking-2601基座 |
| LongCat-Flash-Thinking-2601 | 2026年1月20日 | 📝🧠💻 | 未公开 | 未公开 | 未公开 | 工具调用能力登顶开源SOTA，"重思考"模式 |
| LongCat-Next | 2026年4月2日 | 🌐👁️🎤🖼️ | 68.5B（基于Flash-Lite MoE） | 3B | 未公开 | 原生多模态（视觉+语音+文本），DiNA架构，全开源 |
| LongCat-2.0 | 2026年6月30日 | 📝🧠💻 | 1.6T | 平均48B（动态33B~56B） | 1M | 万亿参数MoE，五万卡国产算力训练，MOPD架构，开源 |

> **注**：LongCat-2.0 预览版在正式发布前已通过 OpenRouter 平台和 longcat.ai 面向全球开发者开放调用，曾跻身 OpenRouter 全球大模型调用量前三。

## 模型详细介绍

### LongCat-Flash-Lite-MoE（2025年）

LongCat-Flash-Lite-MoE 是美团 LongCat 团队的轻量级 MoE 基座模型，总参数量 68.5B，激活参数仅 3B，采用稀疏混合专家架构设计。该模型作为 LongCat-Next 原生多模态模型的基座，验证了 MoE 路由在训练中逐渐出现模态专精化的特性。

### LongCat-Flash-Thinking（2025年）

LongCat 团队的首款推理模型，作为 LongCat-Flash-Thinking-2601 的前身。具体技术细节和参数规模尚未公开。

### LongCat-Flash-Thinking-2601（2026年1月20日）

2026年1月20日，美团 LongCat 团队正式发布并开源 LongCat-Flash-Thinking-2601，作为 LongCat-Flash-Thinking 的升级版。该模型在智能体工具调用、智能体搜索等核心评测基准上达到开源模型 SOTA 水平。

**核心技术：**

1. **「重思考」模式（Deep Thinking）**：模型将思考过程拆分为并行思考和总结归纳两步。并行思考阶段同时梳理多条推理路径，保证思路多样性；总结归纳阶段对多条路径进行梳理、优化与合成，形成闭环迭代推理。额外设计强化学习环节，针对性打磨模型的总结归纳能力。

2. **环境扩展与多环境强化学习（DORA）**：构建多套高质量训练环境，每套集成 60 余种工具形成密集依赖关系图谱，支撑高度复杂的任务场景。自研强化学习基础设施 DORA 实现大规模多环境智能体的稳定并行训练，按难度与训练进度智能分配算力。

3. **噪声环境下的稳健训练**：在训练数据中主动注入多类噪声，模拟 API 调用失败、返回错误信息、数据缺失等场景，采用课程学习方式循序渐进训练，使模型在复杂不理想场景中也能稳定发挥。

**基准测试成绩：**

| 评测集 | 分数 | 说明 |
|--------|------|------|
| AIME-25 | 100.0 | 数学推理（开启重思考模式），满分 |
| IMO-AnswerBench | 86.8 | 数学推理，达到 SOTA |
| τ²-Bench | 88.2 | 工具调用，开源 SOTA |
| VitaBench | 29.3 | 工具调用，开源 SOTA |
| BrowseComp | 73.1 | 智能体搜索，全模型最优 |
| RW Search | 79.5 | 智能体搜索，开源领先 |
| LCB | 82.8 | 编程能力 |
| OIBench EN | 47.7 | 编程能力 |

**开源与部署：**

- GitHub：<https://github.com/meituan-longcat/LongCat-Flash-Thinking-2601>
- HuggingFace：<https://huggingface.co/meituan-longcat/LongCat-Flash-Thinking-2601>
- ModelScope：<https://www.modelscope.cn/models/meituan-longcat/LongCat-Flash-Thinking-2601>
- 官网体验：<https://longcat.ai>
- API 开放平台：<https://longcat.chat/platform/usage>

### LongCat-Next（2026年4月2日）

2026年4月2日，美团发布原生多模态模型 LongCat-Next，基于 LongCat-Flash-Lite MoE（68.5B 总参数，3B 激活参数）构建。LongCat-Next 采用全新的离散原生自回归架构，将视觉、语音与文本统一映射为同源的离散 Token，实现以"NTP（Next Token Prediction）"范式统一建模所有模态。

**核心技术架构：**

1. **DiNA（Discrete Native Autoregressive）离散原生自回归架构**：将所有模态统一为离散 Token，用同一个自回归模型进行建模，实现视觉、语音、文本多模态的底层建模统一。理解与生成共享同一套参数，数学形式完全一致。

2. **dNaViT 离散原生分辨率视觉分词器**：首创的视觉分词器，将图像拆解为有意义的"视觉词汇"。支持原生任意分辨率（不缩放、不裁剪、不填充），8层残差向量量化（RVQ）实现高达 28 倍极致像素空间压缩，解耦的双轨生成解码器保证文本渲染无损清晰。

3. **SAE（Semantic-and-Aligned Encoder）语义对齐完备编码器**：通过大规模视觉-语言监督学习高信息密度、多属性的表征，解决"离散化必然损失信息"的难题，在抽象语义中保留细粒度信息。

**关键发现：**

- 离散视觉没有天花板：OmniDocBench 超越 Qwen3-Omni 和 Qwen3-VL
- 理解与生成可以协同：统一模型理解损失仅比纯理解模型高 0.006，生成损失比纯生成模型低 0.02
- 统一框架不折损语言能力，在智能体与音频交互上形成跨模态协同

**基准测试成绩：**

| 评测集 | 分数 | 说明 |
|--------|------|------|
| MMLU-Pro | 77.02 | 语言理解 |
| C-Eval | 86.80 | 中文语言理解 |
| MathVista | 83.1 | 视觉数学推理 |
| OmniDocBench | 0.152/0.226 | 文档理解 |
| τ²-Bench（零售） | 73.68 | 工具调用 |
| SWE-Bench | 43.0 | 代码工程 |
| MMAU | 76.40 | 音频理解 |
| TUT2017 | 43.09 | 音频场景分类 |
| TTS 中文 WER | 1.90 | 语音合成 |
| TTS 英文 WER | 1.89 | 语音合成 |
| LongText-Bench（英文） | 93.15 | 图像生成 |

**开源与部署：**

- GitHub：<https://github.com/meituan-longcat/LongCat-Next>
- HuggingFace：<https://huggingface.co/meituan-longcat/LongCat-Next>
- 技术报告：<https://github.com/meituan-longcat/LongCat-Next/blob/main/tech_report.pdf>
- Demo：<https://longcat.chat/longcat-next>

### LongCat-2.0（2026年6月30日）

2026年6月30日，美团正式发布新一代万亿参数大模型 LongCat-2.0，并对外开源。作为**业界首个在五万卡国产算力集群上完成全流程训练与推理的万亿参数模型**，LongCat-2.0 从零开始预训练，原生支持 1M 超长上下文。

**核心参数：**

- 总参数：1.6T（万亿级）
- 激活参数：平均约 48B，动态范围 33B~56B（token 级动态激活）
- 架构：MoE（混合专家模型）
- 上下文长度：原生 1M
- 预训练数据：超过 30T tokens（中文、英文、多语言、代码）
- 训练算力：五万卡国产算力集群

**架构创新：**

1. **LongCat Sparse Attention（LSA）稀疏注意力机制**：在处理长文本时智能筛选关键信息，将计算量从平方级降至线性级，在 100 万 Token 的超长上下文中保持精准的信息定位与理解能力。

2. **零计算专家 + ScMoE**：通过零计算专家实现 token 级动态激活（33B~56B），简单 token 不消耗算力，复杂 token 自动获得更多计算资源，实现算力按需分配。

3. **MOPD（Multi-Expert for Different Domains）多专家融合架构**：融合三种专家能力——
   - **Agent Experts**：专攻工具调用与自主纠错
   - **Reasoning Experts**：深耕数学与 STEM 推理
   - **Interaction Experts**：优化指令遵循与交互体验
   推理时由门控网络根据任务类型动态调度最擅长的专家。

**国产算力突破：**

- 自 2023 年起探索国产算力，从千卡起步逐步攻克算子适配、通信优化、分布式稳定性等难题
- **稳定性**：卡间通信异常处理、弹性扩缩卡和自动故障恢复，月均日故障率降低 70% 以上
- **正确性**：自研设计确定性算子、Bitwise 一致性验证和参数检测
- **效率**：流水线调度、显存优化和算子级控核，训练 MFU 提升 1.5 倍
- **稳态日吞吐**：超过 1T tokens/day

**推理优化：**

- 大规模专家并行聚合访存带宽，支撑万亿参数 MoE 模型的低延迟解码
- 零计算专家机制融入专家并行通信流程，避免不必要的传输与计算
- 通信、Attention、GEMM 等核心算子优化调度，结合提前下发与权重预取

**基准测试成绩：**

| 评测集 | 分数 | 对比 |
|--------|------|------|
| **SWE-bench Pro** | 59.5 | 领先 Gemini 3.1 Pro（54.2）、GPT-5.5（58.6）、Claude Opus 4.6（57.3） |
| **SWE-bench Multilingual** | 77.3 | 与 Claude Opus 4.6（77.8）同一水位 |
| **Terminal-Bench 2.1** | 70.8 | 真实运维与开发终端任务 |
| **RWSearch** | 78.8 | 搜索智能体评测 |
| **FORTE** | 73.2 | 生产力场景评测 |
| **BrowseComp** | 79.9 | 浏览能力评测 |

**应用场景：**

- **Agent 搭建**：AI SQL Agent，自然语言查询数据，自动完成全链路闭环
- **代码库迁移**：自行分析整体架构、梳理核心逻辑，重构为符合新API的实现
- **完整应用开发**：从一句话创意到可运行产品，包含技术选型、页面架构、游戏逻辑
- **3D 交互演示**：一句话生成完整 Three.js 3D 演示
- **AI 小说工厂**：多 Agent 编排，从创意到自动化内容流水线

**访问方式：**

- API 开放平台：<https://longcat.chat/platform/product>
- 官网：<https://longcat.ai>

## 访问链接

| 平台 | URL |
|------|-----|
| 美团技术博客 | <https://tech.meituan.com> |
| LongCat 官网 | <https://longcat.ai> |
| LongCat API 平台 | <https://longcat.chat/platform/product> |
| GitHub（LongCat 团队） | <https://github.com/meituan-longcat> |
| HuggingFace（LongCat 团队） | <https://huggingface.co/meituan-longcat> |

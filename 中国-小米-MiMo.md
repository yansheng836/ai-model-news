# 小米

## 公司简介

| 项目 | 内容 |
|------|------|
| 国家 | 中国 |
| 总部 | 北京 |
| 成立时间 | 2010年 |
| 创始人 | 雷军 |
| 定位 | 智能硬件与IoT生态公司，积极布局AI大模型和端侧智能 |

> **功能属性图例**：📝 纯文本 | 🧠 推理 | 💻 代码 | 🎤 语音

## 模型总览

> ⚠️ 部分模型发布时间仅精确到年份，需后续通过产品官网验证补充精确日期

### MiMo-7B系列（2025年4月25日）

| 版本 | 发布时间 | 功能属性 | 参数规模 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|
| MiMo-7B-Base | 2025年4月25日 | 📝 纯文本 | 7B | 未公开 | 预训练基座模型 |
| MiMo-7B-RL | 2025年4月25日 | 🧠 推理 | 7B | 未公开 | 强化学习版 |
| MiMo-7B-SFT | 2025年4月25日 | 📝🧠 推理+文本 | 7B | 未公开 | 监督微调版 |

### MiMo-V2系列（2025年4月20日）

| 版本 | 发布时间 | 功能属性 | 参数规模 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|
| MiMo-V2-Flash | 2025年4月20日 | 📝 纯文本 | 309B MoE | 256K | 快速推理版，15B激活参数 |
| MiMo-V2-Flash-Base | 2025年4月20日 | 📝 纯文本 | 309B MoE | 256K | 基座模型 |

### MiMo-V2.5系列（2026年4月27日）

| 版本 | 发布时间 | 功能属性 | 参数规模 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|
| MiMo-V2.5-Pro | 2026年4月27日 | 📝🧠 推理+文本 | 1.02T MoE | 1M | 旗舰模型，42B激活参数 |
| MiMo-V2.5-Pro-Base | 2026年4月27日 | 📝 纯文本 | 1.02T MoE | 256K | 旗舰基座模型 |
| MiMo-V2.5 | 2026年4月27日 | 📝🧠 推理+文本 | 310B MoE | 1M | 标准版，15B激活参数 |
| MiMo-V2.5-Base | 2026年4月27日 | 📝 纯文本 | 310B MoE | 1M | 标准基座模型 |
| MiMo-V2.5-Pro-FP4-DFlash | 2026年6月8日 | 📝 纯文本 | 554B | 未公开 | 量化版（FP4+DFlash投机解码），高效推理；日期为HuggingFace上传时间 |
| MiMo-V2.5-Pro-UltraSpeed | 2026年（待确认） | 📝🧠 纯文本+推理 | 1T | 未公开 | 高速推理版，突破1000 TPS |
| MiMo-V2-Omni | 2025年 | 🌐 多模态 | 未公开 | 未公开 | 全模态模型（视觉+听觉+行动） |

### MiMo-V2.6系列（2026年9月21日）🆕

| 版本 | 发布时间 | 功能属性 | 参数规模 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|
| MiMo-V2.6-Pro-RL | 2026年9月21日 | 🌐🧠💻 多模态+推理+代码 | 1.02T MoE | 1M | 旗舰RL版，42B激活参数，原生全模态（文本+图像+视频+音频），MIT |
| MiMo-V2.6-Flash-RL | 2026年9月21日 | 🌐🧠💻 多模态+推理+代码 | 309B MoE | 1M | 高效RL版，15B激活参数，混合注意力（SWA+GA），MIT |
| MiMo-V2.6-Pro（API: xiaomi/mimo-v2.6-pro） | 2026年9月21日 | 🌐🧠💻 多模态+推理+代码 | 1T+ | 1050K | API旗舰版，$0.435/$0.87 MTok |
| MiMo-V2.6-Flash（API: xiaomi/mimo-v2.6-flash） | 2026年9月21日 | 🌐🧠💻 多模态+推理+代码 | 309B MoE | 1050K | API高效版，$0.14/$0.28 MTok |
| MiMo-V2.6-Pro-UltraSpeed（API: xiaomi/mimo-v2.6-pro-ultraspeed） | 2026年9月21日 | 🌐🧠💻 多模态+推理+代码 | 1T | 1048576 | 高速推理版（约10倍吞吐），$4.35/$8.7 MTok |
| MiMo-V2.6-Distill-Qwen-9B | 2026年9月21日 | 🌐💻 多模态+代码 | 9B | 未公开 | 基于 Qwen3.5-9B 蒸馏的多模态小模型，MIT |
| MiMo-V2.6-Pro-MOPD / MiMo-V2.6-Flash-MOPD | 2026年9月27日 | 🌐🧠 多模态+推理 | 1T / 309B | 未公开 | MOPD多教师在线蒸馏后训练版本，MIT（HuggingFace上传时间） |

### MiMo-Audio系列（2025年）

| 版本 | 发布时间 | 功能属性 | 参数规模 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|
| MiMo-Audio-7B-Base | 2025年 | 🎤 语音 | 8B | 未公开 | 音频基础模型 |
| MiMo-Audio-7B-Instruct | 2025年 | 🎤 语音 | 8B | 未公开 | 音频指令模型 |
| MiMo-Audio-Tokenizer | 2025年 | 🎤 语音 | 1B | 未公开 | 音频分词器 |
| MiMo-V2.5-ASR | 2025年4月24日 | 🎤 语音识别 | 8B | 未公开 | 语音识别模型 |

## 模型详细介绍

### MiMo-V2.6系列详情（2026年9月21日）🆕

小米新一代旗舰系列，主打"Scaling RL Toward Self-Improvement"（通过强化学习规模化实现自我改进），官网首页已标注「Xiaomi MiMo-V2.6-Series: Frontier intelligence, all the modalities, built in public」：

- **MiMo-V2.6-Pro-RL**：系列旗舰检查点。1.02T 总参数 / 42B 激活的稀疏 MoE 架构，1M 上下文，原生支持文本、图像、视频、音频四种模态。视觉编码器为 681M 参数 MiMo ViT（28层：24 SWA + 4 Full），音频编码器 308M AudioTokenizer + 127M audio patch encoder，5层 MTP 投机解码器。主干 70 层（60 SWA / 10 GA），384 专家路由激活 8 个。核心训练特性：全异步 GRPO（1,568 prompts × 16 rollouts/step）、Groupwise Agentic Grading（GRS+GAR 自我改进闭环）、多前缀多教师在线蒸馏 MOPD2。基准表现（技术报告）：DeepSWE v1.1 71.9、Terminal Bench 2.1 89.9、OSWorld-Verified 82.0、Toolathlon-Verified 76.9、CyberGym 94.0，对标 Claude Opus 5 / GPT-5.6 Sol / Claude Fable 5。
- **MiMo-V2.6-Flash-RL**：高效版，309B 总参数 / 15B 激活，混合注意力（SWA+GA），1M 上下文。
- **API 版本**（OpenRouter，2026-09-21 上架）：`xiaomi/mimo-v2.6-pro`（$0.435/$0.87 MTok）、`xiaomi/mimo-v2.6-flash`（$0.14/$0.28 MTok）、`xiaomi/mimo-v2.6-pro-ultraspeed`（$4.35/$8.7 MTok，同一 1T checkpoint 高速版，约10倍吞吐）。三者上下文均 1050K（UltraSpeed 为 1048576），最大输出 131072，均支持文本+图像+视频+音频输入。
- **MiMo-V2.6-Distill-Qwen-9B**：基于 Qwen3.5-9B 的蒸馏多模态小模型（Image-Text-to-Text），MIT 许可。
- **MiMo-V2.6-Pro-MOPD / Flash-MOPD**：MOPD（Multi-Teacher On-Policy Distillation）多教师在线蒸馏后训练版本（论文2026年6月29日发布），HuggingFace 上传于2026年9月27日。
- **开源许可**：MiMo-V2.6 系列权重 MIT 许可，配套开源 RL 数据集 `MiMo-V2.6-RL-oss`；SGLang/vLLM 均提供部署配方。

### MiMo-7B系列详情（2025年4月25日）

小米首个开源推理大模型系列，虽然只有7B参数，但在多项推理基准测试中表现出色：

- **MiMo-7B-Base**：预训练基座模型
- **MiMo-7B-SFT**：监督微调版，适用于数学、代码等推理任务
- **MiMo-7B-RL**：强化学习版，推理能力最强，在AIME 2025、LiveCodeBench等基准上表现优异

### MiMo-V2-Flash（2025年4月20日）

310B MoE架构的快速推理模型，提供高效的推理能力。

### MiMo-V2.5-Pro（2026年4月27日）

小米旗舰大模型，**1.02T（万亿）参数**MoE架构，42B激活参数，1M上下文，是目前小米最大规模的AI模型：
- **MiMo-V2.5-Pro**：旗舰版，最强推理和生成能力
- **MiMo-V2.5**：310B参数标准版，15B激活参数，平衡性能和效率
- **MiMo-V2.5-Pro-FP4-DFlash**：554B量化版，优化推理效率

### MiMo-Audio系列详情（2025年）

小米的音频/语音模型系列：
- **MiMo-Audio-7B**：音频理解和生成模型
- **MiMo-V2.5-ASR**：语音识别模型
- **MiMo-Audio-Tokenizer**：音频分词器，用于音频数据处理

### 生态应用

小米的大模型主要服务于自身生态：
- **小爱同学**：整合大模型能力，提升智能助手体验
- **HyperOS**：小米操作系统集成端侧大模型
- **小米汽车**：智能座舱AI能力
- **智能家居**：IoT设备智能化

### 开源策略

小米在HuggingFace上开源了完整的MiMo模型系列（共30个模型，截至2026年10月），采用开放策略推动AI技术发展。MiMo-V2.6 系列权重均以 MIT 许可开源。官网另列出 **MiMo-V2.5-TTS 系列**语音合成模型（"Give your agent a voice"），参数与发布日期未公开，待官方验证。

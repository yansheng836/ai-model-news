# 蚂蚁集团（Ant Group）— Ling 百灵

## 公司简介

| 项目 | 内容 |
|------|------|
| 国家 | 中国 |
| 总部 | 杭州 |
| 成立时间 | 2004年（蚂蚁金服前身支付宝成立），2020年7月更名蚂蚁集团 |
| 创始人 | 马云（Jack Ma，蚂蚁集团创始团队） |
| 定位 | 全球领先的金融科技公司，旗下支付宝、蚂蚁森林、OceanBase数据库等。开源AI组织 **inclusionAI**（蚂蚁集团开源项目系列），主攻AGI方向，发布 Ling（百灵）大模型 |

> **关于 inclusionAI**：inclusionAI 是蚂蚁集团的官方开源 AI 组织。其 GitHub 组织描述原文为"This organization contains the series of open-source projects from Ant Group with dedicated efforts to work towards Artificial General Intelligence (AGI)."。发布了大语言模型 Ling（百灵）、推理模型 Ring、扩散语言模型 LLaDA 等开源项目。
>
> **功能属性图例**：📝 纯文本 | 🌐 多模态 | 👁️ 视觉理解 | 🧠 推理 | 💻 代码 | 🖼️ 文生图 | 🎬 文生视频 | 🎤 语音 | 🖥️ 计算机操作

## 模型总览

> ⚠️ 部分版本发布时间由 GitHub 仓库创建/提交时间推断，未获官方精确公告确认，标注"待确认"。

| 版本 | 发布时间 | 功能属性 | 参数规模 | 激活参数 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|----------|
| Ling 3.1 Flash（inclusionai/ling-3.1-flash）🆕 | 2026年10月2日（待确认） | 📝🧠 纯文本+推理 MoE | 560B | 25B | 262K | 混合推理MoE，OpenRouter免费上架 |
| Ling 3.0 Flash（inclusionai/ling-3.0-flash）🆕 | 2026年7月23日 | 📝 纯文本 MoE | 124B | ~5.1B | 262K | 3.0旗舰主模型，token高效，生产级agent推理；MIT许可，多量化版本；OpenRouter上架7月23日，HF权重8月2日上传 |
| Ling 3.0 Flash VL（inclusionai/ling-3.0-flash-vl）🆕 | 2026年9月4日 | 👁️🌐 多模态视觉 | 124B | ~5.5B | 256K | 在Flash基础上加入原生视觉感知（图像+视频），多模态；日期为HuggingFace上传时间 |
| Ling 3.0 Flash Fin（inclusionai/ling-3.0-flash-fin）🆕 | 2026年9月3日 | 📝 金融 | 124B | 5.1B | 256K | 金融/投资专用，开源FinFIRST评测集；日期为HuggingFace上传时间 |
| Ling-2.6-flash（inclusionai/Ling-2.6-flash）🆕 | 2026年4月28日 | 📝🧠 纯文本+推理 | 104B | 7.4B | 未公开 | 2.x高效版，混合线性架构，4×H20下340 token/s，token高效；日期为HuggingFace上传时间 |
| Ling-2.6-1T（inclusionai/Ling-2.6-1T）🆕 | 2026年4月29日 | 📝🧠💻 纯文本+推理+代码 | 1T | 未公开 | 262K | 2.x综合旗舰，MLA+线性注意力混合，"Fast Thinking"降低token开销；日期为HuggingFace上传时间 |
| Ling-2.5-1T | 2026年2月（待确认） | 📝🧠💻 文本+推理+代码 | 1T | 63B | 256K→1M（YaRN） | 2.x旗舰，混合线性注意力，预训练29T tokens，兼容Claude Code/OpenCode，BFCL-V4开源领先 |
| Ling-flash-2.0 | 2025年9月（待确认） | 📝 纯文本 | 100B | 6.1B | 32K→128K（YaRN） | 2.x高速版，高效稀疏 |
| Ling-mini-2.0 | 2025年9月（待确认） | 📝 纯文本 | 16B | 1.4B | 32K→128K（YaRN） | 1/32激活比，训练20T tokens，300+ token/s，FP8训练 |
| Ling-lite-1.5 | 2025年5月10日 | 📝 纯文本 | 16.8B | 2.75B | 128K | 1.x轻量版最终迭代，推理能力显著提升 |
| Ling-lite-0415 | 2025年4月15日 | 📝 纯文本 | 16.8B | 2.75B | 128K | lite升级版，代码/数学显著提升 |
| Ling-Coder-lite | 2025年3月（待确认） | 💻 代码 | 16.8B | 2.75B | 16K | 代码专项 |
| Ling-plus | 2025年3月（待确认） | 📝 纯文本 | 290B | 28.8B | 64K | 1.x旗舰，28.8B激活 |
| Ling-lite | 2025年2月（待确认） | 📝 纯文本 | 16.8B | 2.75B | 128K | 1.x首代轻量版 |

## 模型详细介绍

### Ling 系列总体介绍

Ling（中文"百灵"）是蚂蚁集团开源AI组织 inclusionAI 发布的 MoE（Mixture of Experts）稀疏混合专家大语言模型家族，全部开源。模型按不同参数规模与定位分为 lite（轻量）、plus（旗舰）、mini（紧凑）、flash（高速）、1T（超大）等多个档位。架构上采用低激活比的专家路由，强调 token 效率与生产级推理能力。自2025年2月首发 Ling-lite 以来持续迭代，至2026年已演进到 3.0/3.1 系列，并拓展出视觉（VL）、金融（Fin）、医疗（Sante）等垂直变体。

### Ling 1.x（2025年上半年）

- **Ling-lite**（2025年2月）：16.8B总参数 / 2.75B激活，128K上下文，Ling 系列首代轻量版，MoE架构。
- **Ling-plus**（2025年3月）：290B总参数 / 28.8B激活，64K上下文，1.x 旗舰模型。
- **Ling-Coder-lite**（2025年3月）：代码专项版本，16K上下文。
- **Ling-lite-0415**（2025年4月15日）：lite 升级版，代码/数学能力显著提升。
- **Ling-lite-1.5**（2025年5月10日）：1.x 轻量版最终迭代，推理能力较先前版本显著进步。代表基准：MMLU 74.33 / GPQA 36.55 / HumanEval 87.27 / MATH 82.62（对比 Qwen3-4B/8B、LLaMA3.1-8B）。

### Ling 2.0（2025年9月）

- **Ling-mini-2.0**：16B总参数 / 仅1.4B激活（非嵌入参数789M），采用1/32激活比MoE架构，调用通常远少于同规模模型。预训练20T tokens，多阶段SFT+RL增强。128K上下文（YaRN）。H20部署下简单场景生成速度300+ token/s，比8B稠密模型快2倍以上。全程FP8混合精度训练，开源5个预训练checkpoint（5T/10T/15T/20T）。
- **Ling-flash-2.0**：100B总参数 / 6.1B激活，2.x 高速版。

### Ling 2.5（2026年2月，旗舰）

- **Ling-2.5-1T**：Ling 家族 2.x 时代旗舰，1T总参数 / 63B激活。采用1/32激活比MoE + 混合线性注意力架构，预训练语料扩充至29T tokens。上下文 256K→1M（YaRN）。通过"正确性+过程冗余度"复合奖励机制在token效率上逼近主流推理模型（通常需4倍输出token的"thinking"模型）。支持双向RL反馈与基于Agent的指令约束验证，兼容主流 Agent 平台（Claude Code、OpenCode、OpenClaw），在通用工具调用基准 BFCL-V4 上开源领先。

### Ling 2.6（2026年4月，待确认）🆕

- **Ling-2.6-flash**：104B总参数 / 7.4B激活的指令模型，混合线性注意力架构。4×H20 部署下推理速度最高 340 token/s。主打 token 效率（Artificial Analysis 全套评测仅耗 15M tokens）与 agent 场景优化（BFCL-V4、TAU2-bench、SWE-bench Verified、Claw-Eval、PinchBench），兼容 Claude Code、Kilo Code、Qwen Code、Hermes Agent、OpenClaw 等框架。MIT许可，HuggingFace 权重 2026年4月28日上传。
- **Ling-2.6-1T**：万亿参数综合旗舰，MLA + 线性注意力混合架构。后训练引入 Contextual Process Redundancy Suppression 奖励策略（"Fast Thinking"），压缩冗余思维链输出。AIME26、SWE-bench Verified、BFCL-V4、TAU2-Bench、IFBench 等执行型基准开源SOTA，兼容 Claude Code、OpenClaw、OpenCode、CodeBuddy。SGLang 部署上下文 262144。MIT许可，OpenRouter 提供免费额度。HuggingFace 权重 2026年4月29日上传；两模型另有 base 版（2026年6月2日上传）。

> 技术报告：arXiv:2606.15079。

### Ling 3.0（2026年7月-9月）

inclusionAI 发布 Ling 3.0 系列（`vllm-ling-v3` 定制版仓库2026年7月13日创建，HuggingFace 首批权重于2026年8月2日上传）：

- **Ling 3.0 Flash**：124B总参数 / 约5.1B激活的MoE，262K上下文，token高效与生产级agentic推理为先，为3.0旗舰主模型。MIT许可开源，提供BF16/FP8/MXFP4/INT4多量化，可本地部署（DGX Spark、SGLang/vLLM）。HuggingFace 权重 2026年8月2日上传，OpenRouter 上架 2026年7月23日，定价 $0.021/$0.063 per MTok。
- **Ling 3.0 Flash VL**：在Flash基础上进一步强化语言能力并加入原生视觉感知（支持图像与视频输入），多模态视觉模型。124B总参数 / 约5.5B激活，256K上下文。架构：ViT视觉编码器+2层MLP投影，VideoRoPE时空位置编码，42层混合骨干（KDA与Gated MLA按5:1交替），稀疏MoE激活5.5B。AA Intelligence Index v4.1.1 得分42（Flash为38）。HuggingFace 权重 2026年9月4日上传，OpenRouter 上架 2026年9月10日，定价 $0.021/$0.062 per MTok。
- **Ling 3.0 Flash Fin**：蚂蚁Ling家族首个金融增强模型（与领先金融机构合作），在Ling-3.0-flash基础上用高质量金融数据继续训练。124B总参数 / 5.1B激活，256K上下文，BF16权重。主打端到端金融研究、来源可追溯的金融搜索、多文档金融推理、估值与表格工作流。同步开源 FinFIRST 评测集（FinSearchComp Verified、FinCRAFT、Finance Agent、SpreadsheetBench 等基准）。HuggingFace 权重 2026年9月3日上传，OpenRouter 上架 2026年8月27日，定价 $0.042/$0.123 per MTok。
- **Ling 3.0 Flash Sante**：医疗/健康专用版，基于 Ling 3.0 Flash（124B/5.1B激活），262K上下文。OpenRouter 上架 2026年9月4日，定价 $0.042/$0.123 per MTok。
- **Ling 3.0 Tiny**：轻量版（8B），MIT许可，提供 base/fp8/int4/GGUF 多版本（HuggingFace 2026年8月10日上传）。
- **Ling 3.0 flash-dspark**：为 DGX Spark 优化部署的投机解码版本（HuggingFace 2026年8月9日上传）。

> ⚠️ Ling 3.0 系列各版本精确发布日期依据 HuggingFace 权重上传时间与 OpenRouter 上架时间交叉确认，官方公告未逐项核实，可能晚于所标日期。

### Ling 3.1（2026年10月，待确认）🆕

- **Ling 3.1 Flash**：混合推理（hybrid reasoning）MoE 模型，560B总参数 / 25B激活，262K上下文，OpenRouter 免费上架（$0/$0 per MTok）。在 Artificial Analysis 评测中：Intelligence Index 41.1、HLE 39.4%、AA-LCR 83.0%、GDPval-AA 56.1%、SciCode 54.1%、Terminal-Bench 4.0 33.3%。HuggingFace 未见公开权重（组织搜索无结果），开源许可与权重状态待确认。

### 姊妹模型与其他开源项目

- **Ring / Ring-V2 / Ring-V2.5**：源自 Ling 的推理（reasoning）MoE 模型，专注深度推理。
- **LLaDA2.X / LLaDA2.0-Uni**：扩散语言模型（Diffusion Language Model）系列，由 inclusionAI 团队、蚂蚁集团开发。
- **linghe**：面向 LLM 训练的高性能 kernel 库。

### 开源策略

inclusionAI 采用积极开源策略，Ling 系列（2.5-1T 等）采用 MIT 许可，在 HuggingFace（`inclusionAI`）与 ModelScope（`inclusionAI`）同步分发。官网 ant-ling.com，X 账号 @AntLingAGI。

### 参考链接

- GitHub（Ling 主仓库）：https://github.com/inclusionAI/Ling
- GitHub（Ling-V2）：https://github.com/inclusionAI/Ling-V2
- GitHub（Ling-V2.5）：https://github.com/inclusionAI/Ling-V2.5
- GitHub 组织：https://github.com/inclusionAI
- HuggingFace：https://huggingface.co/inclusionAI
- ModelScope：https://www.modelscope.cn/organization/inclusionAI

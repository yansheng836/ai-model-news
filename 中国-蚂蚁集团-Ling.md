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
| Ming-3.0-asr-tiny（inclusionAI/Ming-3.0-asr-tiny）🆕 | 2026年10月14日（HF权重上传） | 🎤 语音识别 | 未公开（Ling-tiny-v3 MoE骨干+音频编码器） | 未公开 | 未公开（长音频分块编码） | 上下文感知ASR：中英文转写+15组方言（粤语/闽南语/上海话等），支持热词与对话上文（Context ASR），MIT开源 |
| Ling 3.1 Flash（inclusionai/ling-3.1-flash）🆕 | 2026年10月2日（API/OpenRouter）；开源权重10月13日 | 📝🧠 纯文本+推理 MoE | 560B | 25B | 1M | 原生混合推理MoE，MIT许可开源；面向通用Agent、搜索、办公与软件工程，OpenRouter免费上架 |
| Ling 3.0 Flash（inclusionai/ling-3.0-flash）🆕 | 2026年7月23日 | 📝 纯文本 MoE | 124B | ~5.1B | 262K | 3.0旗舰主模型，token高效，生产级agent推理；MIT许可，多量化版本；OpenRouter上架7月23日，HF权重8月2日上传 |
| Ling 3.0 Flash VL（inclusionai/ling-3.0-flash-vl）🆕 | 2026年9月4日 | 👁️🌐 多模态视觉 | 124B | ~5.5B | 256K | 在Flash基础上加入原生视觉感知（图像+视频），多模态；日期为HuggingFace上传时间 |
| Ling 3.0 Flash Sante（inclusionai/ling-3.0-flash-Sante）🆕 | 2026年9月4日（OpenRouter上架）；开源权重10月19日 | 📝 医疗健康 | 124B | 5.1B | 256K | 医疗/健康专用版，基于 Ling 3.0 Flash，主打医学推理、医疗研究与工具辅助工作流；MIT许可 |
| Ling 3.0 Flash Fin（inclusionai/ling-3.0-flash-fin）🆕 | 2026年9月3日 | 📝 金融 | 124B | 5.1B | 256K | 金融/投资专用，开源FinFIRST评测集；日期为HuggingFace上传时间 |
| Ling-3.0-flash-UBTree 🆕 | 2026年10月14日 | 📝 推理加速（投机解码草稿） | 482M | — | 262K（同目标模型） | Ling-3.0-flash 的 UBTree 树状投机解码草稿模型，5层DFlash骨干+bigram选择器，须配合目标模型使用 |
| Ling-2.6-flash（inclusionai/Ling-2.6-flash）🆕 ⚠️ 2026年11月15日下线 | 2026年4月28日 | 📝🧠 纯文本+推理 | 104B | 7.4B | 未公开 | 2.x高效版，混合线性架构，4×H20下340 token/s，token高效；日期为HuggingFace上传时间 |
| Ling-2.6-1T（inclusionai/Ling-2.6-1T）🆕 ⚠️ 2026年11月15日下线 | 2026年4月29日 | 📝🧠💻 纯文本+推理+代码 | 1T | 未公开 | 262K | 2.x综合旗舰，MLA+线性注意力混合，"Fast Thinking"降低token开销；日期为HuggingFace上传时间 |
| Ling-2.5-1T ⚠️ 2026年9月30日已下线 | 2026年2月11日 | 📝🧠💻 文本+推理+代码 | 1T | 63B | 256K→1M（YaRN） | 2.x旗舰，混合线性注意力，预训练29T tokens，兼容Claude Code/OpenCode，BFCL-V4开源领先 |
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
- **Ling 3.0 Flash Sante**：医疗/健康专用版，基于 Ling 3.0 Flash（124B/5.1B激活），262K上下文。OpenRouter 上架 2026年9月4日，定价 $0.042/$0.123 per MTok；开源权重于 2026年10月19日上传 HuggingFace（MIT）。名称取自法语 santé（健康），采用 KDA + gated MLA + 稀疏 MoE 的混合线性架构，每 token 激活 5.1B/124B，训练扩展至 256K，面向医学推理、医疗健康研究、深度研究与工具辅助工作流；官方声明其为研究模型，不能替代专业医疗诊断。
- **Ling 3.0 Tiny**：轻量版（8B），MIT许可，提供 base/fp8/int4/GGUF 多版本（HuggingFace 2026年8月10日上传）。7.9B总参数 / 1.3B激活，3:1 交替 KDA–MLA + 128路由专家（每token激活8路由+1共享），256K YaRN 上下文，已在 DGX Spark / Apple Silicon 验证端侧部署；官方更新日志记为 2026年8月7日上线。
- **Ling 3.0 flash-dspark**：为 DGX Spark 优化部署的投机解码版本（HuggingFace 2026年8月9日上传）。
- **Ling-3.0-flash-UBTree**（2026年10月14日）：Ling-3.0-flash 的 UBTree 树状投机解码草稿模型，5 层 DFlash 全注意力骨干 + 可学习 bigram 选择器，单 checkpoint 存 482M 参数（BF16），候选 top-k=64/位置、草稿块大小16，需与目标模型配套使用（论文 arXiv:2609.39972）。同系列另有 Ling-3.0-tiny-UBTree（2026年10月21日，183M）。

> ⚠️ Ling 3.0 系列各版本精确发布日期依据 HuggingFace 权重上传时间与 OpenRouter 上架时间交叉确认，官方公告未逐项核实，可能晚于所标日期。

### Ming 3.0 系列（全模态/语音，2026年8-10月）🆕

Ming（鸣）是蚂蚁 Ling 家族之外的全模态模型系列（官网定位：统一支持文本、图像、音频、视频的跨模态理解与生成），权重均在 HuggingFace `inclusionAI` 组织以 MIT 许可开源：

- **Ming-3.0-asr-tiny**（2026年10月14日 HuggingFace 上传）：上下文感知语音识别模型，基于 Ling-tiny-v3 语言骨干（24层、128路由专家）+ 音频编码器构建。支持单轮中英文转写、15组地区方言（粤语、闽南语、上海话等）、Context ASR（热词/对话上文提升领域术语识别），覆盖高噪语音与五类应用领域。长音频可分块编码。GitHub 代码与教程 `inclusionAI/Ming-3.0-asr`（2026年10月19日创建）。
- **Ming-3.0-audio-flash**（126B MoE / 6.5B激活；HF权重2026年9月3日上传，GitHub 仓库2026年10月15日创建）：原生音频大模型，覆盖复杂语音识别（方言/口音/噪声/多人会议）、长音频理解、细粒度声音/音乐感知、音频推理与端到端语音交互（可选合成语音输出）。支持 vLLM-Omni / SGLang / Transformers 三路推理。
- **Ming-3.0-audio-tiny**（9.3B MoE / 2.7B激活，与 flash 同批）：音频紧凑版。
- **Ming-3.0-tts-0.5B / tts-tiny**（HF权重2026年9月22日上传，GitHub 仓库2026年10月19日创建）：多语言语音合成，基于 Qwen2.5-0.5B 稠密骨干 + DiT 头 + 音频 tokenizer + 说话人编码器，支持副语言与自由形式控制、音色克隆，覆盖中英德西法韩日。

> ⚠️ Ming 系列精确发布日期依据 HuggingFace 权重上传时间与 GitHub 仓库创建时间交叉确认；官方新闻稿未逐项核实。相关 OCR 基础模型 PolyOCR-Venus（2B/9B，基于Qwen3.5-VL，技术报告2026-09-21）由蚂蚁 GuangJian 团队发布于 `venus-guangjian` 组织，未归入 inclusionAI。

### Ling 3.1（2026年10月）🆕

- **Ling 3.1 Flash**：原生混合推理（hybrid reasoning）MoE 模型，560B总参数 / 25B激活，**1M上下文**。API/OpenRouter 于 2026年10月2日上线（免费，$0/$0 per MTok），MIT 许可开源权重于 2026年10月13日上传 HuggingFace。相较 Ling 3.0 Flash 在通用Agent、搜索、办公生产力与软件工程等真实任务上提升。在 Artificial Analysis 评测中：Intelligence Index 41.1、HLE 39.4%、AA-LCR 83.0%、GDPval-AA 56.1%、SciCode 54.1%、Terminal-Bench 4.0 33.3%。模型卡另提及正在考虑开源更大规模的版本。

### 状态变更与下架（2026年10月核查）

据百灵官方文档「下架」页（2026年10月24日更新）：

- **即将下架**：`Ling-2.6-1T`、`Ring-2.6-1T`、`Ling-2.6-flash` 于 **2026年11月15日 00:00（UTC+8）** 下线，官方推荐迁移至 `Ling-3.1-flash`
- **已下架**：`Ling-1T`、`Ring-1T`（2026年6月15日）；`Ling-2.5-1T`、`Ring-2.5-1T`（2026年9月30日）
- **当前稳定支持**：`Ling-3.1-flash`、`Ling-3.0-flash-VL`、`Ling-3.0-flash`、`Ling-3.0-tiny`

定价方面，官方平台 Ling-3.1-flash 当前限时 2.5 折（输入 ¥0.50 / 输出 ¥1.50 / 缓存命中 ¥0.10 每百万 tokens），Ling-3.0-flash 与 Ling-3.0-flash-VL 限时 2.8 折（¥0.14 / ¥0.42 / ¥0.028）。

来源：<https://developer.ant-ling.com/zh-CN/docs/models/deprecation/>、<https://developer.ant-ling.com/zh-CN/docs/models/price/>

### 姊妹模型与其他开源项目

- **Ming / Ming-3.0**：全模态模型系列（见上文「Ming 3.0 系列」），统一支持文本、图像、音频、视频的理解与生成。
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

# 小红书 - dots

## 公司简介

| 项目 | 内容 |
|------|------|
| 国家 | 中国 |
| 总部 | 上海 |
| 成立时间 | 2013年 |
| 创始人 | 毛文超、瞿芳 |
| 定位 | 中国头部生活方式社区与 UGC 平台（海外称 RedNote）。旗下 **hi lab（Humane Intelligence Lab）** 负责 **dots** 系列大模型的研发，以 `rednote-hilab` / `dots-studio` 组织在 HuggingFace 开源 |

> **功能属性图例**：📝 纯文本 | 🌐 多模态 | 🧠 推理 | 💻 代码 | 🖼️ 文生图 | 🎤 语音 | 👁️ 视觉理解 | 🖥️ 计算机操作

## 模型总览

### dots 系列（2025年-2026年）

| 版本 | 发布时间 | 功能属性 | 参数规模 | 激活参数 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|----------|
| dots3-note-preview | 2026年8月9日 | 📝🧠 | 280B（MoE，256专家） | 16B | 512K | dots3 家族最轻量的开源 MoE 预览版，每 token 激活 8 专家（另有 FP8 版） |
| dots.tts 系列 | 2026年6月3日起 | 🎤 | 未公开 | 未公开 | — | 文本转语音系列（soar / base / mf 多个版本），支持语音编辑 |
| dots.mocr | 2026年3月19日 | 👁️ | 未公开 | 未公开 | 未公开 | 多语言文档 OCR 升级版（含 SVG 输出版本） |
| dots.vlm1 | 2025年8月5日 | 🌐👁️ | MoE（256专家） | 8专家/token | 160K | 小红书首个多模态视觉语言模型，基于 NaViT 视觉编码器 + dots MoE |
| dots.ocr | 2025年7月30日 | 👁️ | 1.7B | 1.7B | 未公开 | 多语言文档解析 OCR 模型，社区爆款（76万+下载、1300+ likes） |
| dots.llm1 | 2025年5月14日 | 📝 | 142B（MoE，128专家） | 14B | 32K（可扩展） | 小红书首个开源大语言模型，无合成数据训练（base + inst 双版本） |

## 模型详细介绍

### dots.llm1（2025年5月14日）

小红书 hi lab 的首个开源大语言模型，采用稀疏 MoE 架构：总参数 142B，激活参数 14B（128 个路由专家 + 2 个共享专家，每 token 激活 6 个路由专家；62 层，hidden 4096）。原生上下文 32K，可通过 RoPE 扩展。

**核心特点：**

- **无合成数据训练**：预训练数据全部来自真实高质量语料，主打数据质量而非规模堆砌，训练约 11.2T tokens
- **base + inst 双版本**：同时开源基座模型与指令微调模型
- 面向中英文通用能力，是小红书对外开源的起点

### dots.ocr（2025年7月30日）

dots 系列中影响力最大的模型：一个仅 1.7B 参数的多语言文档 OCR / 版面解析模型。凭借小体积、高精度和对复杂版面（表格、公式、多栏）的良好支持，在 HuggingFace 成为爆款——76 万+ 下载、1300+ likes，是开源 OCR 领域的代表作之一。后续推出 `dots.ocr.base` 基座版本。

### dots.vlm1（2025年8月5日）

小红书首个多模态视觉语言模型（VLM），采用 MoE 架构（256 专家、每 token 激活 8 专家，61 层，hidden 7168），支持约 160K 上下文。基于 NaViT 原生分辨率视觉编码器与 dots MoE 语言模型构建，具备图像理解与图文推理能力。

### dots.mocr（2026年3月19日）

dots.ocr 的多语言（multilingual）升级版本，进一步增强跨语种文档识别与解析能力，并提供 `dots.mocr-svg` 版本以支持结构化 SVG 输出。

### dots.tts 系列（2026年6月起）

小红书的文本转语音（TTS）模型系列，包含 `dots.tts-soar`、`dots.tts-base`、`dots.tts-mf`（及 1step/2steps 蒸馏版本）等多个变体，并提供 `dots.tts.edit` 支持语音编辑，覆盖从基础合成到高效推理的不同场景。

### dots3-note-preview（2026年8月9日）

dots 第三代（dots3）家族的开源预览模型，也是该家族中**最轻量**的成员。采用大规模稀疏 MoE：总参数约 280B，激活参数 16B（256 个路由专家 + 1 个共享专家，每 token 激活 8 专家；46 层，hidden 5120），原生支持 512K 超长上下文。同时提供 FP8 量化版本（`dots3-note-prev-fp8`）便于部署。

## 访问链接

| 平台 | URL |
|------|-----|
| HuggingFace（dots-studio） | <https://huggingface.co/dots-studio> |
| HuggingFace（rednote-hilab） | <https://huggingface.co/rednote-hilab> |
| 小红书官网 | <https://www.xiaohongshu.com> |
| OpenRouter（dots） | <https://openrouter.ai/dots-studio> |

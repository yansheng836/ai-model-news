# ai-model-news

该项目用于整理现在市面上的流行的各个厂家的大模型产品，进行对比。

每个厂家一个md介绍文件，需要介绍公司、及对应的大模型，大模型需要有各版本发布时间、版本特点等。

同时将所有厂家的大模型的发版时间整理到README.md文档中，一览无遗，需要包括公司所在国家、公司名、大模型名称、版本、发版时间。

> ⚠️ **数据说明**：本项目数据截止至 **2026年6月25日**，通过 `WebFetch` 抓取各厂商官方文档更新。已验证更新的厂商包括：Anthropic、OpenAI、Google、xAI、Mistral、DeepSeek、阿里巴巴、Meta、NVIDIA、智谱AI、月之暗面、百度、腾讯、字节跳动、科大讯飞、华为。本次更新内容：修正 Anthropic Fable 5/Mythos 5 暂停状态（已恢复）、新增 Mistral OCR 4/Leanstral、补充阿里巴巴 Qwen3.5-LiveTranslate/Wan2.7系列/Qwen3-VL-Plus/Qwen-MT-Flash 等模型。部分厂商数据可能仍有遗漏，欢迎补充更新。

## 问题

我发现了一些问题：

1.消息严重滞后，今天是 2026年6月25日，但是最新版的大模型时间是
  2025年5-6月，需要搜索新闻进行内容更新，大模型迭代非常快。

2.需要精确到 具体模型的版本，比如
  Claude 4 Opus，这个就太笼统了，需要精确到 Claude 4 Opus 4.7
  这样。

3.需要特别注明模型的功能属性，比如
  多模型、纯文本模型、文生图、文生视屏、试图、语音模型等。

4.需要注明 模型的参数，启动参数，上下文长度。

5.文档命名规则：国家-公司-该公司经典大模型名称.md，例如：中国-深度求索-DeepSeek.md

6.各个文档里面，除了总览，还需要有该模型的具体的介绍。

7.**发布时间必须精确到天或月**，不能只标注年份或时间范围。
  格式：`YYYY年MM月DD日` 或 `YYYY年MM月`
  正确示例：`2025年8月7日`、`2026年3月`
  错误示例：`2025年`、`2025-2026年`、`2024年下半年`

## 数据更新策略

### 工具限制说明

- `WebSearch` 工具不可靠 — 返回的是模型生成的文本，而非真实搜索结果
- `WebFetch` 工具部分可用 — 访问官方 API 文档通常有效，但很多网站会返回 403 或需要认证
- Fetch MCP 提供的工具进行搜索。
- **解决方案**：优先使用 `WebFetch` 访问各厂商官方 API 文档页面

### 各厂商官方文档地址

| 厂商 | 文档地址 | 状态 |
|------|----------|------|
| Anthropic | `platform.claude.com/docs` | ✅ 已验证可用 |
| OpenAI | `platform.openai.com/docs/models` | ⚠️ 待验证 |
| Google Gemini | `ai.google.dev/gemini-api/docs/models` | ⚠️ 待验证 |
| Meta Llama | `llama.meta.com` 或 GitHub | ⚠️ 待验证 |
| xAI Grok | `docs.x.ai/docs/models` | ⚠️ 待验证 |
| Mistral | `docs.mistral.ai/getting-started/models/` | ⚠️ 待验证 |
| DeepSeek | `platform.deepseek.com/api-docs` | ⚠️ 待验证 |
| 阿里通义千问 | `help.aliyun.com/zh/model-studio/getting-started/models` | ⚠️ 待验证 |
| 百度文心 | `cloud.baidu.com/doc/WENXINWORKSHOP/s/clntwmv7t` | ⚠️ 待验证 |
| 智谱AI | `open.bigmodel.cn/dev/api` | ✅ 已验证可用 |

### 更新流程

1. 使用 `WebFetch` 访问厂商官方文档
2. 解析模型列表，提取：模型名称、API ID、发布时间、上下文长度、定价、能力
3. 更新对应厂商的 markdown 文件
4. 将新条目添加到 README.md 时间线表
5. 更新本文件顶部的 ⚠️ 数据截止提示
6. 若 `WebFetch` 失败，尝试备选地址（GitHub、Wikipedia、科技新闻网站）

## 功能属性图例

| 图例 | 含义 |
|------|------|
| 📝 | 纯文本模型 |
| 🌐 | 多模态模型（文本+图像+音频+视频等） |
| 🖼️ | 文生图模型 |
| 🎬 | 文生视频模型 |
| 👁️ | 视觉理解模型 |
| 🎤 | 语音模型（语音识别/合成） |
| 🧠 | 推理模型（链式思维/深度推理） |
| 💻 | 代码模型 |
| 🖥️ | 计算机操作（Computer Use） |
| 🧊 | 3D生成模型 |

## 各厂家介绍文件

| 厂家 | 文件 | 国家 |
|------|------|------|
| OpenAI | [美国-OpenAI-GPT.md](美国-OpenAI-GPT.md) | 美国 |
| Google DeepMind | [美国-Google-Gemini.md](美国-Google-Gemini.md) | 美国 |
| Anthropic | [美国-Anthropic-Claude.md](美国-Anthropic-Claude.md) | 美国 |
| Meta | [美国-Meta-Llama.md](美国-Meta-Llama.md) | 美国 |
| Mistral AI | [法国-Mistral-Mistral.md](法国-Mistral-Mistral.md) | 法国 |
| xAI | [美国-xAI-Grok.md](美国-xAI-Grok.md) | 美国 |
| NVIDIA | [美国-NVIDIA-Nemotron.md](美国-NVIDIA-Nemotron.md) | 美国 |
| 百度 | [中国-百度-文心.md](中国-百度-文心.md) | 中国 |
| 阿里巴巴 | [中国-阿里巴巴-通义千问.md](中国-阿里巴巴-通义千问.md) | 中国 |
| 字节跳动 | [中国-字节跳动-豆包.md](中国-字节跳动-豆包.md) | 中国 |
| 腾讯 | [中国-腾讯-混元.md](中国-腾讯-混元.md) | 中国 |
| 华为 | [中国-华为-盘古.md](中国-华为-盘古.md) | 中国 |
| 小米 | [中国-小米-MiMo.md](中国-小米-MiMo.md) | 中国 |
| 科大讯飞 | [中国-科大讯飞-星火.md](中国-科大讯飞-星火.md) | 中国 |
| DeepSeek（深度求索） | [中国-深度求索-DeepSeek.md](中国-深度求索-DeepSeek.md) | 中国 |
| 智谱AI | [中国-智谱AI-GLM.md](中国-智谱AI-GLM.md) | 中国 |
| 月之暗面 | [中国-月之暗面-Kimi.md](中国-月之暗面-Kimi.md) | 中国 |
| 零一万物 | [中国-零一万物-Yi.md](中国-零一万物-Yi.md) | 中国 |
| MiniMax | [中国-MiniMax-abab.md](中国-MiniMax-abab.md) | 中国 |
| 百川智能 | [中国-百川智能-Baichuan.md](中国-百川智能-Baichuan.md) | 中国 |
| 商汤科技 | [中国-商汤科技-日日新.md](中国-商汤科技-日日新.md) | 中国 |


## 大模型发版时间线总览

> 按发版时间倒序排列，涵盖各厂商主要模型版本。数据来源：各厂商产品官方文档和GitHub/HuggingFace。
>
> **参数规模说明**：OpenAI、Anthropic、Google、xAI、Mistral等主要厂商均未公开模型参数规模，标注为"未公开（厂商未公开）"。已公开参数的模型包括：DeepSeek、阿里巴巴Qwen、NVIDIA Nemotron等。

| 国家 | 公司名 | 大模型名称 | 版本 | 功能属性 | 参数规模 | 上下文 | 发版时间 |
|------|--------|-----------|------|----------|----------|--------|----------|
| 美国 | Anthropic | Claude | Claude Fable 5（claude-fable-5） | 🌐🖥️ | 未公开 | 1M | 2026年6月9日（⚠️ 6月12日曾短暂暂停，已恢复） |
| 美国 | Anthropic | Claude | Claude Mythos Preview | 🌐🖥️ | 未公开 | 200K | 2025年（⏰ **2026年6月30日退役 - 仅剩5天**） |
| 美国 | Anthropic | Claude | Claude Mythos 5（claude-mythos-5） | 🌐🖥️ | 未公开 | 1M | 2026年6月9日（⚠️ 6月12日曾短暂暂停，已恢复） |
| 美国 | NVIDIA | Nemotron | Cosmos 3 | 🌐🤖 | 未公开 | 未公开 | 2026年6月初 |
| 美国 | NVIDIA | Nemotron | Nemotron 3.5 Content Safety | 📝🌐 | 4B | 未公开 | 2026年6月初 |
| 美国 | NVIDIA | Nemotron | Nemotron 3.5 ASR | 🎤 | 未公开 | 未公开 | 2026年6月初 |
| 美国 | NVIDIA | Nemotron | Diffusion Language Models | 📝 | 未公开 | 未公开 | 2026年6月初 |
| 中国 | 商汤科技 | 日日新 | ConsistCompose-BAGEL-7B-MoT | 🌐 | 15B MoE | 未公开 | 2026年6月中旬 |
| 中国 | 商汤科技 | 日日新 | SenseNova-U1-8B-MoT-Interleaved | 🌐 | 18B MoE | 未公开 | 2026年6月中旬 |
| 中国 | 商汤科技 | 日日新 | SenseNova-U1-8B-MoT-LoRAs | 🌐 | 18B MoE | 未公开 | 2026年6月中旬 |
| 中国 | 商汤科技 | 日日新 | SenseNova 6.7 Flash-Lite | 🌐 智能体 | 未公开 | 未公开 | 2026年 |
| 中国 | 商汤科技 | 日日新 | SenseNova U1 Fast | 🌐 多模态理解+生成 | 未公开 | 未公开 | 2026年 |
| 中国 | MiniMax | M系列 | MiniMax-M3.0 | 📝🌐💻 | 427B MoE/23B激活 | 1M | 2026年5月31日 |
| 美国 | Anthropic | Claude | Claude Opus 4.8（claude-opus-4-8） | 🌐🖥️ | 未公开 | 1M | 2026年5月28日 |
| 美国 | Google | Gemini | Gemini 3.5 Flash（Stable） | 🌐🧠💻🖥️ | 未公开 | 未公开 | 2026年5月19日 |
| 美国 | Google | Gemini | Gemini 3.1 Pro（Preview） | 🌐🧠💻🖥️ | 未公开 | 未公开 | 2026年5月19日 |
| 美国 | xAI | Grok | 旧版Grok模型 | 📝 | — | — | 🔄 2026年5月15日退役 |
| 美国 | Google | Gemini | Antigravity Agent（Preview） | 🧠💻🌐 | 未公开 | 未公开 | 2026年5月 |
| 中国 | 阿里巴巴 | 通义千问 | WebWorld-32B | 📝 | 32B | 未公开 | 2026年5月 |
| 中国 | 阿里巴巴 | 通义千问 | WebWorld-14B | 📝 纯文本 | 14B | 未公开 | 2026年5月 |
| 中国 | 小米 | MiMo | MiMo-V2.5-Pro-UltraSpeed | 📝🧠 | 1T | 未公开 | 2026年5月 |
| 中国 | 小米 | MiMo | MiMo-V2.5-Pro | 📝🧠 | 1.02T MoE/42B激活 | 1M | 2026年4月27日 |
| 中国 | 小米 | MiMo | MiMo-V2-Omni | 🌐 | 未公开 | 未公开 | 2025年10月 |
| 中国 | 小米 | MiMo | MiMo-V2.5-Pro-Base | 📝 | 1.02T MoE | 256K | 2026年4月27日 |
| 中国 | 小米 | MiMo | MiMo-V2.5-Base | 📝 | 310B MoE | 1M | 2026年4月27日 |
| 中国 | 小米 | MiMo | MiMo-V2.5 | 📝🧠 | 310B MoE/15B激活 | 1M | 2026年4月27日 |
| 美国 | OpenAI | GPT | GPT-5.5（gpt-5.5） | 🌐🧠🖥️ | 未公开 | 1050K | 2026年4月23日 |
| 美国 | OpenAI | GPT | GPT-5.5-pro | 🌐🧠🖥️ | 未公开 | 1050K | 2026年4月 |
| 美国 | OpenAI | GPT | GPT-5.2 / GPT-5.2-pro / GPT-5.2-codex | 🌐🧠🖥️ | 未公开 | 400K | 2026年2月 |
| 美国 | OpenAI | GPT | GPT-5.1 / GPT-5.1-codex / GPT-5.1-codex-max | 🌐🧠🖥️ | 未公开 | 400K | 2026年1月 |
| 美国 | OpenAI | GPT | GPT-5-pro / GPT-5-mini / GPT-5-nano | 🌐🧠🖥️ | 未公开 | 400K | 2025年8月 |
| 美国 | OpenAI | GPT | GPT-5-codex / GPT-5-image / GPT-5-image-mini | 🌐🧠🖥️ | 未公开 | 400K | 2025年9月 |
| 美国 | OpenAI | GPT | GPT-Audio / GPT-Audio-mini | 🎤 | — | 128K | 2025年10月 |
| 美国 | OpenAI | GPT | GPT-5.3-chat / GPT-5.3-codex | 🌐🧠💻 | 未公开 | 128K/400K | 2026年2月 |
| 美国 | OpenAI | GPT | GPT-5.4-pro | 🌐🧠🖥️ | 未公开 | 1050K | 2026年3月 |
| 美国 | OpenAI | GPT | GPT-5.4-image-2 | 🌐🖼️ | 未公开 | 272K | 2026年3月 |
| 美国 | OpenAI | GPT | GPT-4.1-nano | 🌐 | 未公开 | 1M | 2025年4月 |
| 美国 | OpenAI | o系列 | o1-pro | 🧠 | 未公开 | 200K | 2024年 |
| 美国 | OpenAI | GPT | GPT-4o search preview / mini | 🌐 | 未公开 | 128K | 2025年3月 |
| 美国 | OpenAI | GPT-OSS | GPT-OSS-Safeguard-20B | 📝 | 20B | 131K | 2025年7月（开源） |
| 美国 | OpenAI | o系列 | o3-pro | 🧠 | 未公开 | 200K | 2025年5月 |
| 美国 | OpenAI | o系列 | o4-mini-high | 🧠💻 | 未公开 | 200K | 2025年5月 |
| 美国 | OpenAI | o系列 | o3-deep-research / o4-mini-deep-research | 🧠 | 未公开 | 200K | 2025年6月 |
| 美国 | OpenAI | GPT-OSS | GPT-OSS-120B / GPT-OSS-20B | 📝 | 120B/20B | 131K | 2025年7月（开源） |
| 美国 | xAI | Grok | Grok-4.3 | 🌐🧠💻 | 未公开 | 1M | 2026年4月17日 |
| 美国 | xAI | Grok | Grok Build 0.1 | 💻🧠 | 未公开 | 256K | 2025年8月 |
| 美国 | NVIDIA | Nemotron | Nemotron 3 Nano Omni | 🌐🎤 | 未公开 | 1M | 2026年4月 |
| 美国 | NVIDIA | Nemotron | Isaac GR00T N1.7 | 🤖 | 未公开 | 未公开 | 2026年4月 |
| 法国 | Mistral AI | Mistral | Mistral Medium 3.5 | 🌐🧠💻🖥️ | 未公开 | 未公开 | 2026年4月 |
| 法国 | Mistral AI | OCR | OCR 4 | 👁️ | — | — | 2026年4月 |
| 法国 | Mistral AI | Leanstral | Leanstral | 📝 | 未公开 | 未公开 | 2026年3月（⏰ 2026年6月30日退役） |
| 美国 | Google | Gemini | Deep Research（Preview） | 🧠🌐 | 未公开 | 未公开 | 2026年4月 |
| 美国 | Google | Gemini | Deep Research Max（Preview） | 🧠🌐 | — | — | 2026年4月 |
| 美国 | Meta | Muse | Muse Spark | 🌐 | 未公开 | 未公开 | 2026年4月 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-V4-Pro-Base | 📝 | 1.6T MoE | 未公开 | 2026年4月 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-V4-Flash-Base | 📝 | 292B MoE | 未公开 | 2026年4月 |
| 美国 | OpenAI | GPT | GPT-5.4 mini（gpt-5.4-mini） | 🌐🧠🖥️ | 未公开 | 400K | 2026年3月17日 |
| 美国 | OpenAI | GPT | GPT-5.4（gpt-5.4） | 🌐🧠🖥️ | 未公开 | 1050K | 2026年3月5日 |
| 美国 | NVIDIA | Nemotron | Nemotron 3 Nano 4B | 📝🧠 | 4B | 未公开 | 2026年3月 |
| 法国 | Mistral AI | Mistral | Mistral Small 4 | 📝🧠💻 | 未公开 | 未公开 | 2026年3月 |
| 法国 | Mistral AI | Voxtral | Voxtral TTS | 🎤 | 未公开 | 未公开 | 2026年3月 |
| 法国 | Mistral AI | Voxtral | Voxtral Mini Transcribe 2 | 🎤 | 未公开 | 未公开 | 2026年2月 |
| 法国 | Mistral AI | Voxtral | Voxtral Mini Transcribe Realtime | 🎤 | 未公开 | 未公开 | 2026年2月 |
| 法国 | Mistral AI | Mistral | Mistral Moderation 2 | 📝 | 未公开 | 128K | 2026年3月 |
| 中国 | MiniMax | M系列 | MiniMax-M2.7 | 📝 | 未公开 | 未公开 | 2026年3月 |
| 美国 | Anthropic | Claude | Claude Sonnet 4.6（claude-sonnet-4-6） | 🌐🧠🖥️ | 未公开 | 1M | 2026年2月17日 |
| 中国 | 字节跳动 | 豆包 | Doubao Seed 2.0 | 🌐🧠 | 未公开 | 未公开 | 2026年2月14日 |
| 中国 | 字节跳动 | 豆包 | Doubao-Seed-2.1-pro | 🌐🧠💻 | 未公开 | 未公开 | 2026年 |
| 中国 | 字节跳动 | 豆包 | Doubao-Seed-2.1-turbo | 🌐🧠💻 | 未公开 | 未公开 | 2026年 |
| 中国 | 字节跳动 | 豆包 | Doubao-Seed-Evolving | 🧠💻 | 未公开 | 未公开 | 2026年 |
| 中国 | 字节跳动 | 豆包 | Doubao-Seed-Character | 📝 | 未公开 | 未公开 | 2026年 |
| 中国 | 字节跳动 | 豆包 | Seedream 5.0-lite | 🖼️ | — | — | 2026年 |
| 中国 | 字节跳动 | 豆包 | Seed3D-2.0 | 🧊 3D生成 | — | — | 2026年 |
| 中国 | 字节跳动 | 豆包 | Doubao-音频生成-1.0 | 🎤 | — | — | 2026年 |
| 中国 | 字节跳动 | 豆包 | Doubao-实时语音交互 | 🎤 | — | — | 2026年 |
| 中国 | 百川智能 | Baichuan | Baichuan-M3-235B | 📝 | 235B | 32K | 2026年2月9日 |
| 美国 | xAI | Grok | Grok-4.20 Beta | 🌐🧠💻 | 未公开 | 2M | 2026年2月 |
| 美国 | xAI | Grok | Grok-4.20 Multi-Agent | 🌐🧠💻🖥️ | 未公开 | 2M | 2026年2月 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-OCR-2 | 👁️📝 | 3B | — | 2026年2月 |
| 中国 | MiniMax | M系列 | MiniMax-M2.7-highspeed | 📝 | 未公开 | 未公开 | 2026年3月 |
| 中国 | MiniMax | M系列 | MiniMax-M2.5 / M2.5-Lightning | 📝 | 未公开 | 未公开 | 2026年2月 |
| 中国 | MiniMax | Hailuo | Hailuo 2.3 / 2.3 Fast | 🎬 | — | — | 2025年9月 |
| 美国 | Anthropic | Claude | Claude Opus 4.7（claude-opus-4-7） | 🌐🖥️ | 未公开 | 1M | 2026年初 |
| 美国 | NVIDIA | Nemotron | Cosmos Reason 2 | 🧠🤖 | 未公开 | 未公开 | 2026年1月 |
| 美国 | NVIDIA | Nemotron | Cosmos Policy | 🤖 | 未公开 | 未公开 | 2026年1月 |
| 美国 | NVIDIA | Nemotron | Earth-2 | 🌐 | 未公开 | 未公开 | 2026年1月 |
| 美国 | NVIDIA | Nemotron | Llama Nemotron RAG | 📝 | 未公开 | 未公开 | 2026年1月 |
| 美国 | Google | Gemini | Gemini 3.5 Live Translate（Preview） | 🎤 | 未公开 | 未公开 | 2026年5月 |
| 美国 | Google | Veo | Veo 3.1（Preview） | 🎬 | — | — | 2026年5月 |
| 美国 | Google | Lyria | Lyria 3 Pro（Preview） | 🎵 | — | — | 2026年5月 |
| 美国 | xAI | Grok | grok-imagine-video-1.5 | 🎬 | — | — | 2026年1月 |
| 美国 | NVIDIA | Nemotron | Nemotron 3 Ultra（550B/55B） | 📝🧠 | 550B MoE/55B激活 | 1M | 2026年3月 |
| 美国 | NVIDIA | Nemotron | Nemotron 3 Super（120B/12B） | 📝🧠 | 120B MoE/12B激活 | 1M | 2026年3月 |
| 美国 | Google | Gemini | Gemini 3 Flash（Preview） | 🌐🧠 | 未公开 | 未公开 | 2026年1月 |
| 美国 | Google | Gemini | Gemini 3.1 Flash-Lite（Stable） | 🌐🧠 | 未公开 | 未公开 | 2026年4月 |
| 美国 | Google | Gemini | Gemini 3.1 Flash Live（Preview） | 🎤🌐 | 未公开 | 未公开 | 2026年4月 |
| 美国 | Google | Gemini | Gemini 3.1 Flash TTS（Preview） | 🎤 | 未公开 | 未公开 | 2026年4月 |
| 美国 | Google | Gemini | Gemini Embedding 2 | 📝 | — | — | 2026年3月 |
| 美国 | Google | Gemini | Gemini Robotics-ER 1.6（Preview） | 🤖 | — | — | 2026年3月 |
| 美国 | Google | Gemini | Gemini 3.1 Pro（Preview） | 🌐🧠💻🖥️ | 未公开 | 1M | 2026年5月 |
| 美国 | Google | Gemini | Gemini 3 Pro Image / 3.1 Flash Image | 🖼️ | — | 65K/131K | 2026年4月 |
| 美国 | Google | Gemini | Gemini 2.5 Flash Image | 🖼️ | — | 32K | 2025年10月 |
| 美国 | Google | Gemma | Gemma 4（26B-A4B / 31B） | 📝 | 26B MoE/31B | 262K | 2026年2月 |
| 美国 | Google | Gemma | Gemma 3n（E4B） | 📝 | 4B | 32K | 2025年11月 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-V4-Pro | 📝 | 862B MoE | 1M（384K输出） | 2026年4月 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-V4-Flash | 📝 | 158B MoE | 1M（384K输出） | 2026年4月 |
| 中国 | 阿里巴巴 | 通义千问 | qwen3.7-max | 🌐🧠💻 | 未公开 | 1M | 2026年5月21日 |
| 中国 | 阿里巴巴 | 通义千问 | qwen3.7-plus | 🌐🧠 | 未公开 | 1M | 2026年6月3日 |
| 中国 | 阿里巴巴 | 通义千问 | qwen3.6-max-preview | 🌐🧠 | 未公开 | 262K | 2026年4月27日 |
| 中国 | 阿里巴巴 | 通义千问 | qwen3.6-plus | 🌐🧠 | 未公开 | 1M | 2026年4月2日 |
| 中国 | 阿里巴巴 | 通义千问 | qwen3.6-flash | 🌐🧠 | 未公开 | 1M | 2026年4月27日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3.5-397b-a17b | 📝 | 397B MoE/17B激活 | 256K | 2026年2月16日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3.5-122b-a10b | 📝 | 122B MoE/10B激活 | 262K | 2026年2月25日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3.5-27B | 📝 | 27B | 262K | 2026年2月25日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3.5-9B | 📝 | 9B | 262K | 2026年3月10日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3.5-35B-A3B | 📝 | 35B MoE/3B激活 | 262K | 2026年2月25日 |
| 中国 | 阿里巴巴 | 通义千问 | qwen3-coder / qwen3-coder-plus / flash / next | 💻 | 未公开 | 1M/262K | 2025年7月-2026年2月 |
| 中国 | 阿里巴巴 | 通义千问 | qwen3-vl-235b-a22b-instruct | 👁️📝 | 235B MoE/22B激活 | 262K | 2025年9月23日 |
| 中国 | 阿里巴巴 | 通义千问 | qwen3-vl-32b-instruct / 30b-a3b / 8b | 👁️📝 | 32B/30B MoE/8B | 262K/256K | 2025年10月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3.5-35B-A3B | 📝 | 35B MoE/3B激活 | 262K | 2026年1月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-TTS | 🎤 | — | — | 2026年3月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen-Image-Bench | 👁️📝 | 27B | 未公开 | 2026年3月 |
| 中国 | 百度 | 文心一言 | ERNIE-5.0 | 🌐🧠 | 未公开 | 119K（64K输入+64K输出） | 2026年4月 |
| 中国 | 百度 | 文心一言 | ERNIE-5.0-Thinking-Preview | 🌐🧠 | 未公开 | 119K（64K输出） | 2026年 |
| 中国 | 百度 | 文心一言 | ERNIE 5.1 | 📝 | 未公开 | 32K/128K | 2026年5月 |
| 中国 | 阿里巴巴 | 通义千问 | qwen3.5-omni-plus | 🌐🎤 | 未公开 | 未公开 | 2026年3月 |
| 中国 | 阿里巴巴 | 通义千问 | qwen-image-2.0-pro | 🖼️ | — | — | 2026年4月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3.5-LiveTranslate | 🎤 | — | — | 2026年 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-TTS-Flash | 🎤 | — | — | 2026年 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-VL-Plus | 👁️🧠 | 未公开 | 未公开 | 2026年 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3.5-Omni-Flash | 🌐🎤 | 未公开 | 未公开 | 2026年 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen-MT-Flash | 📝 | 未公开 | 未公开 | 2026年 |
| 中国 | 阿里巴巴 | 通义千问 | Fun-ASR-Realtime | 🎤 | 未公开 | — | 2026年 |
| 中国 | 阿里巴巴 | 万相 | Wan2.7-Image | 🖼️ | — | — | 2026年 |
| 中国 | 阿里巴巴 | 万相 | Wan2.7-I2V | 🎬 | — | — | 2026年 |
| 中国 | 阿里巴巴 | 万相 | Wan2.7-R2V | 🎬 | — | — | 2026年 |
| 中国 | 阿里巴巴 | 万相 | Wan2.6-T2I | 🖼️ | — | — | 2026年 |
| 中国 | 智谱AI | GLM | GLM-5.2 | 📝 | 未公开 | 1M（128K输出） | 2026年6月16日 |
| 中国 | 智谱AI | GLM | GLM-5.1 | 📝 | 未公开 | 200K（128K输出） | 2026年4月7日 |
| 中国 | 智谱AI | GLM | GLM-5V-Turbo | 👁️📝 | 未公开 | 200K | 2026年4月1日 |
| 中国 | 智谱AI | GLM | GLM-5-Turbo | 📝 | 未公开 | 262K（128K输出） | 2026年3月15日 |
| 中国 | 智谱AI | GLM | GLM-5 | 📝 | 未公开 | 200K（128K输出） | 2026年2月12日 |
| 中国 | 智谱AI | GLM | GLM-OCR | 👁️ | 未公开 | — | 2026年2月3日 |
| 中国 | 智谱AI | GLM | GLM-4.7-Flash | 📝 | 未公开 | 200K（128K输出） | 2026年1月19日 |
| 中国 | 智谱AI | GLM | GLM-4.7-FlashX | 📝 | 未公开 | 200K（128K输出） | 2026年1月 |
| 中国 | 智谱AI | GLM | GLM-4.7 | 📝 | 未公开 | 200K（128K输出） | 2025年12月22日 |
| 中国 | 智谱AI | GLM | GLM-Image | 🖼️ | — | — | 2026年1月14日 |
| 中国 | 智谱AI | GLM | GLM-4.6V | 👁️📝 | 未公开 | 128K | 2026年2月 |
| 中国 | 智谱AI | GLM | CogVideoX-3 | 🎬 | — | — | 2026年3月 |
| 中国 | 智谱AI | GLM | Vidu Q1 | 🎬 | — | — | 2026年2月 |
| 中国 | 智谱AI | GLM | Vidu 2 | 🎬 | — | — | 2026年4月 |
| 中国 | 智谱AI | GLM | GLM-Realtime | 🌐🎤 | — | — | 2026年3月 |
| 中国 | 智谱AI | GLM | GLM-TTS | 🎤 | — | — | 2026年2月 |
| 中国 | 智谱AI | GLM | GLM-TTS-Clone | 🎤 | — | — | 2026年2月 |
| 中国 | 智谱AI | GLM | GLM-4.5-AirX | 📝 | 未公开 | 128K（96K输出） | 2026年1月 |
| 中国 | 智谱AI | GLM | GLM-4.5-Flash | 📝🧠 | 未公开 | 未公开 | 2025年（免费，即将下线） |
| 中国 | 智谱AI | GLM | GLM-4.6V-Flash | 👁️📝 | 未公开 | 未公开 | 2025年（免费） |
| 中国 | 智谱AI | GLM | GLM-4.1V-Thinking-FlashX | 👁️🧠 | 未公开 | 64K | 2025年8月 |
| 中国 | 智谱AI | GLM | GLM-4.1V-Thinking-Flash | 👁️🧠 | 未公开 | 64K | 2025年（免费） |
| 中国 | 智谱AI | GLM | GLM-4V-Flash | 👁️ | 未公开 | 16K | 2024年（免费） |
| 中国 | 智谱AI | GLM | CogView-3-Flash | 🖼️ | — | — | 2024年（免费） |
| 中国 | 智谱AI | GLM | CogVideoX-Flash | 🎬 | — | — | 2024年（免费） |
| 中国 | 智谱AI | GLM | GLM-4-Voice | 🎤 | — | — | 2025年10月 |
| 中国 | 智谱AI | GLM | Embedding-3 | 📝 | — | — | 2024年 |
| 中国 | 智谱AI | GLM | Rerank | 📝 | — | — | 2024年 |
| 中国 | 智谱AI | GLM | CodeGeeX-4 | 💻 | 未公开 | 128K | 2025年9月 |
| 中国 | 月之暗面 | Kimi | Kimi K2.7 Code HighSpeed | 💻🧠 | 未公开 | 256K | 2026年6月16日 |
| 中国 | 月之暗面 | Kimi | Kimi K2.7 Code | 💻🧠 | 未公开 | 256K | 2026年6月16日 |
| 中国 | 月之暗面 | Kimi | Kimi K2.6 | 📝🧠 | 未公开 | 256K | 2026年4月 |
| 中国 | 月之暗面 | Kimi | Kimi K2.5 | 📝🧠👁️ | 1T MoE/32B激活 | 256K | 2026年1月 |
| 中国 | 月之暗面 | Kimi | Kimi-Dev | 💻 | 72B | 未公开 | 2025年6月 |
| 中国 | 月之暗面 | Kimi | Kimi-Researcher | 🧠 | 未公开 | 未公开 | 2025年6月 |
| 中国 | 月之暗面 | Kimi | Kimi-K2-Instruct-0905 | 🧠 | 1T MoE/32B激活 | 256K | 2025年9月9日 |
| 中国 | 月之暗面 | Kimi | Kimi-Linear | 📝 | 48B MoE/3B激活 | 未公开 | 2025年10月 |
| 中国 | 月之暗面 | Kimi | K2 Thinking | 🧠 | 未公开 | 256K | 2025年11月 |
| 中国 | 月之暗面 | Kimi | Kimi-K2-Thinking | 🧠 | 未公开 | 256K | 2025年12月 |
| 中国 | MiniMax | Speech | Speech-2.8-HD | 🎤 | — | — | 2026年5月 |
| 中国 | MiniMax | Speech | Speech-2.8-Turbo | 🎤 | — | — | 2026年5月 |
| 中国 | MiniMax | music | music-2.6 | 🎵 | — | — | 2026年4月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3.5-2B | 📝 纯文本 | 2B | 262K | 2026年1月 |
| 美国 | Anthropic | Claude | Claude Opus 4.6（claude-opus-4-6） | 🌐🧠🖥️ | 未公开 | 1M | 2025年底 |
| 美国 | Anthropic | Claude | Claude Opus 4.6/4.7/4.8 Fast | 🌐🧠🖥️ | 未公开 | 1M | 2025年底-2026年（Fast模式，2x定价） |
| 美国 | NVIDIA | Nemotron | Nemotron 3 Nano（30B/3B） | 📝🧠 | 30B MoE/3B激活 | 1M | 2025年12月 |
| 法国 | Mistral AI | Mistral | Mistral Large 3 | 🌐 | 未公开 | 未公开 | 2025年12月 |
| 法国 | Mistral AI | Mistral | Ministral 3（3B/8B/14B） | 📝🌐 | 3B/8B/14B | 未公开 | 2025年12月 |
| 法国 | Mistral AI | OCR | OCR 3 | 👁️ | 未公开 | 未公开 | 2025年12月 |
| 法国 | Mistral AI | Mistral | Devstral 2 | 💻 | 未公开 | 未公开 | 2025年12月 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-V3.2 | 📝 | 685B MoE | 160K | 2025年12月 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-V3.1 / V3.1-Terminus | 📝 | 未公开 | 160K | 2025年10月 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-V3.2-Speciale | 📝 | 685B MoE | 未公开 | 2025年12月 |
| 中国 | 智谱AI | GLM | GLM-ASR-2512 | 🎤 | — | — | 2025年12月 |
| 美国 | xAI | Grok | Grok-4.1 / 4.1 Fast | 🌐🧠 | 未公开 | 1M/2M | 2025年11月17-19日 |
| 美国 | Anthropic | Claude | Claude Opus 4.5（claude-opus-4-5-20251101） | 🌐🧠🖥️ | 未公开 | 200K | 2025年11月1日 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-Math-V2 | 📝🧠 | 685B MoE | 未公开 | 2025年11月 |
| 中国 | DeepSeek | DeepSeek | DeepSeek-OCR | 👁️📝 | 3B | — | 2025年11月 |
| 美国 | Anthropic | Claude | Claude Haiku 4.5（claude-haiku-4-5-20251001） | 🌐🧠 | 未公开 | 200K | 2025年10月1日 |
| 美国 | NVIDIA | Nemotron | Llama-Embed-Nemotron-8B | 📝 | 8B | — | 2025年10月 |
| 美国 | NVIDIA | Nemotron | Cosmos Predict 2.5 / Transfer 2.5 | 🌐🤖 | 未公开 | 未公开 | 2025年10月 |
| 美国 | Anthropic | Claude | Claude Sonnet 4.5（claude-sonnet-4-5-20250929） | 🌐🧠🖥️ | 未公开 | 1M | 2025年9月29日 |
| 美国 | xAI | Grok | Grok-4 Fast | 🌐🧠 | 未公开 | 2M | 2025年9月 |
| 法国 | Mistral AI | Mistral | Mistral Medium 3.1 | 🌐🧠💻 | 未公开 | 未公开 | 2025年8月 |
| 法国 | Mistral AI | Codestral | Codestral（代码补全） | 💻 | 未公开 | 未公开 | 2025年8月 |
| 法国 | Mistral AI | Magistral | Magistral Medium 1.2 / Small 1.2 | 🧠 | 未公开 | 未公开 | 2025年9月 |
| 中国 | 百川智能 | Baichuan | Baichuan-M2-32B | 📝 | 33B | 未公开 | 2025年9月 |
| 美国 | xAI | Grok | Grok Code Fast 1 | 💻🧠 | 未公开 | 未公开 | 2025年8月28日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-4B-Instruct-2507 | 📝 纯文本（非思考） | 4B | 128K | 2025年8月6日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-4B-Thinking-2507 | 🧠 推理（思考） | 4B | 128K | 2025年8月6日 |
| 美国 | Anthropic | Claude | Claude Opus 4.1（claude-opus-4-1-20250805） | 🌐🧠🖥️ | 未公开 | 200K | 2025年8月5日（⏰ **2026年8月5日退役 - 仅剩41天**） |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-30B-A3B-Instruct-2507 / Thinking-2507 | 📝🧠 | 30B MoE/3B激活 | 256K | 2025年7月30-31日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-30B-A3B-Thinking-2507 | 🧠 推理（思考） | 30B MoE/3B激活 | 256K（可扩展至1M） | 2025年7月31日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-235B-A22B-Thinking-2507 | 🧠 | 235B MoE/22B激活 | 256K | 2025年7月25日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-235B-A22B-Instruct-2507 | 📝 | 235B MoE/22B激活 | 256K | 2025年7月21日 |
| 美国 | xAI | Grok | Grok-4 / 4 Heavy | 🌐🧠💻 | 未公开 | 1M | 2025年7月9日 |
| 中国 | 智谱AI | GLM | GLM-4.1V-9B-Thinking | 👁️🧠 | 9B | 未公开 | 2025年7月2日 |
| 美国 | NVIDIA | Nemotron | OpenReasoning-Nemotron | 🧠 | 未公开 | 未公开 | 2025年7月 |
| 法国 | Mistral AI | Magistral | Magistral Medium 1.1 / Small 1.1 | 🧠 | 未公开 | 未公开 | 2025年7月 |
| 法国 | Mistral AI | Voxtral | Voxtral Small / Mini Transcribe / Mini | 🎤 | 未公开 | 未公开 | 2025年7月 |
| 中国 | 月之暗面 | Kimi | Kimi-VL-A3B-Thinking-2506 | 👁️🧠 | 16B MoE/3B激活 | 128K | 2025年6月21日 |
| 美国 | NVIDIA | Nemotron | Llama Nemotron Nano VLM | 👁️📝 | 未公开 | 未公开 | 2025年6月 |
| 美国 | NVIDIA | Nemotron | Llama Nemotron Nano 4B | 📝🧠 | 4B | 未公开 | 2025年6月 |
| 法国 | Mistral AI | Mistral | Mistral Small 3.2 | 📝 | 未公开 | 未公开 | 2025年6月 |
| 法国 | Mistral AI | Magistral | Magistral Medium 1.0 / Small 1.0 | 🧠 | 未公开 | 未公开 | 2025年6月 |
| 中国 | MiniMax | M系列 | MiniMax-M2 / M2.1 / M2.1-highspeed | 📝 | 未公开 | 未公开 | 2025年7月 |
| 中国 | MiniMax | Speech | Speech-2.6-HD / Speech-2.6-Turbo | 🎤 | — | — | 2025年8月 |
| 中国 | MiniMax | Speech | Speech-02-HD / Speech-02-Turbo | 🎤 | — | — | 2025年5月 |
| 中国 | MiniMax | image | image-01-live | 🖼️ | — | — | 2024年 |
| 中国 | MiniMax | music | music-cover | 🎵 | — | — | 2025年6月 |
| 中国 | MiniMax | M系列 | MiniMax-M1 | 📝 | 未公开 | 未公开 | 2025年6月 |
| 中国 | DeepSeek | DeepSeek | R1-0528 | 🧠 | 671B MoE/37B激活 | 160K | 2025年5月28日 |
| 法国 | Mistral AI | Mistral | Mistral Medium 3 | 🌐🧠💻 | 未公开 | 未公开 | 2025年5月 |
| 法国 | Mistral AI | Devstral | Devstral | 💻 | 未公开 | 未公开 | 2025年5月 |
| 法国 | Mistral AI | Codestral | Codestral Embed | 💻 | 未公开 | 未公开 | 2025年5月 |
| 法国 | Mistral AI | OCR | OCR 2 | 👁️ | — | — | 2025年5月 |
| 中国 | 商汤科技 | 日日新 | SenseNova-U1-8B-MoT | 🌐 | 18B MoE | 未公开 | 2025年5月 |
| 中国 | 商汤科技 | 日日新 | SenseNova-U1-A3B-MoT | 🌐 | 39B MoE | 未公开 | 2025年5月 |
| 中国 | 商汤科技 | 日日新 | SenseNova-SI-1.5-8B | 👁️📝 | 8B | 未公开 | 2025年5月 |
| 中国 | 商汤科技 | 日日新 | SenseNova-SI-1.5-InternVL3-8B | 👁️📝 视觉+文本 | 8B | 未公开 | 2025年5月 |
| 中国 | 商汤科技 | 日日新 | SenseNova-SI-1.4-InternVL3-8B | 👁️📝 视觉+文本 | 8B | 未公开 | 2025年5月 |
| 中国 | 商汤科技 | 日日新 | SenseNova-SI-1.3-InternVL3-8B | 👁️📝 视觉+文本 | 8B | 未公开 | 2025年5月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3系列（0.6B~235B） | 🧠📝 | 0.6B~235B MoE | 128K | 2025年4月29日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-4B | 🧠📝 | 4B | 128K | 2025年4月29日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-14B | 🧠📝 | 14B | 128K | 2025年4月29日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-32B | 🧠📝 | 32B | 128K | 2025年4月29日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-30B-A3B | 🧠📝 | 30B MoE/3B激活 | 128K | 2025年4月29日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-235B-A22B | 🧠📝 | 235B MoE/22B激活 | 128K | 2025年4月29日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-0.6B | 🧠📝 推理+文本 | 0.6B | 128K | 2025年4月29日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-1.7B | 🧠📝 推理+文本 | 1.7B | 128K | 2025年4月29日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-8B | 🧠📝 推理+文本 | 8B | 131K | 2025年4月29日 |
| 中国 | 百度 | 文心一言 | 文心4.5 Turbo / X1 Turbo | 🌐🧠 | 未公开 | 128K | 2025年4月25日 |
| 中国 | 百度 | 文心一言 | 文心4.5 / X1 / 4.5 Turbo / X1 Turbo | 🌐🧠 | 未公开 | 128K | 2025年4月25日 |
| 中国 | 小米 | MiMo | MiMo-7B-RL | 🧠 | 8B | 未公开 | 2025年4月25日 |
| 中国 | 小米 | MiMo | MiMo-7B-SFT | 📝🧠 | 8B | 未公开 | 2025年4月25日 |
| 中国 | 百度 | 文心一言 | 文心大模型4.5 | 🌐🧠 多模态+推理 | 未公开 | 128K | 2025年4月25日 |
| 中国 | 百度 | 文心一言 | 文心大模型X1 | 🧠 推理 | 未公开 | 128K | 2025年4月25日 |
| 中国 | 小米 | MiMo | MiMo-7B-Base | 📝 纯文本 | 8B | 未公开 | 2025年4月25日 |
| 中国 | 小米 | MiMo | MiMo-V2.5-ASR | 🎤 | 8B | 未公开 | 2025年4月24日 |
| 中国 | 小米 | MiMo | MiMo-V2-Flash | 📝 | 309B MoE/15B激活 | 256K | 2025年4月20日 |
| 中国 | 小米 | MiMo | MiMo-V2-Flash-Base | 📝 | 309B MoE | 256K | 2025年4月20日 |
| 美国 | OpenAI | o系列 | o3（o3-2025-04-16） | 🧠 | 未公开 | 200K | 2025年4月16日 |
| 中国 | 智谱AI | GLM | GLM-Z1-Rumination-32B | 🧠 | 32B | 128K | 2025年4月14日 |
| 中国 | 智谱AI | GLM | GLM-4-32B-0414 / GLM-Z1-32B-0414 | 📝🧠 | 32B | 128K | 2025年4月14日 |
| 中国 | 智谱AI | GLM | GLM-4-9B-0414 / GLM-Z1-9B-0414 | 📝🧠 | 9B | 32K→128K（YaRN） | 2025年4月14日 |
| 中国 | 智谱AI | GLM | GLM-4-Air-250414 / GLM-4-FlashX-250414 / GLM-4-Flash-250414 | 📝 | 未公开 | 128K | 2025年4月14日 |
| 中国 | 智谱AI | GLM | GLM-4-32B-Base-0414 | 📝 纯文本 | 32B | 32K→128K（YaRN） | 2025年4月14日 |
| 中国 | 百川智能 | Baichuan | BaichuanMed-OCR-7B/72B | 👁️📝 | 8B/73B | 未公开 | 2025年4月7日 |
| 美国 | Meta | Llama | Llama 4 Maverick（17B/400B MoE） | 🌐 | 400B/17B激活 | 1M | 2025年4月5日 |
| 美国 | Meta | Llama | Llama 4 Scout（17B/109B MoE） | 🌐 | 109B/17B激活 | 10M | 2025年4月5日 |
| 美国 | OpenAI | GPT | GPT-4.1 | 🌐 | 未公开 | 1M | 2025年4月 |
| 美国 | OpenAI | o系列 | o4-mini | 🧠💻 | 未公开 | 200K | 2025年4月 |
| 中国 | 商汤科技 | 日日新 | SenseNova-SI-1.3-Qwen3-VL-8B | 👁️📝 | 9B | 未公开 | 2025年4月 |
| 中国 | 月之暗面 | Kimi | Kimi-VL-A3B-Instruct | 👁️📝 | 16B MoE/3B激活 | 128K | 2025年4月 |
| 中国 | 月之暗面 | Kimi | Kimi-VL-A3B-Thinking | 👁️🧠 | 16B MoE/3B激活 | 128K | 2025年4月（已弃用） |
| 中国 | MiniMax | Speech | Speech-02 | 🎤 语音合成 | — | 未公开 | 2025年4月 |
| 美国 | Google | Gemini | Gemini 2.5 Pro | 🧠🌐 | 未公开 | 1M | 2025年3月25日 |
| 中国 | 腾讯 | 混元 | 混元 Turbo S | 📝 | 560B MoE | 128K | 2025年3月 |
| 中国 | 百度 | 文心一言 | 深度搜索（Deep Search） | 📝 | — | — | 2025年3月 |
| 美国 | xAI | Grok | Grok-3 | 🧠🌐 | 未公开 | 128K | 2025年2月17日 |
| 美国 | OpenAI | GPT | GPT-4.5（Orion） | 🌐 | 未公开 | 128K | 2025年2月 |
| 美国 | Google | Gemini | Gemini 2.0 Pro | 🌐 | 未公开 | 2M | 2025年2月 |
| 美国 | Google | Gemini | Gemini 2.0 Flash（GA） | 🌐 | 未公开 | 1M | 2025年2月 |
| 中国 | DeepSeek | DeepSeek | V3-0324 | 📝 | 671B MoE/37B激活 | 160K | 2025年3月24日 |
| 中国 | 腾讯 | 混元 | 混元 T1 | 🧠 | 未公开 | 128K | 2025年3月21日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2.5-1M | 📝 | 72B | 1M | 2025年2月 |
| 中国 | 百川智能 | Baichuan | Baichuan-Audio-Base | 🎤 | 10B | — | 2025年2月 |
| 美国 | OpenAI | GPT | GPT-5 | 🌐🧠🖥️ | 未公开 | 未公开 | 2025年8月7日 |
| 美国 | OpenAI | GPT | GPT-4.1 mini | 🌐 | 未公开 | 1M | 2025年4月 |
| 美国 | OpenAI | GPT | GPT-5.4 nano | 🌐 | 未公开 | 未公开 | 2026年3月17日 |
| 美国 | OpenAI | GPT Image | GPT Image 2 | 🖼️ | — | — | 2025年10月14日 |
| 美国 | OpenAI | GPT-Realtime | GPT-Realtime-2 / 1.5 / Translate / mini | 🎤 | — | — | 2025-2026年 |
| 美国 | OpenAI | GPT-Realtime | GPT-Realtime-Whisper | 🎤 | — | — | 2025-2026年 |
| 美国 | OpenAI | GPT-4o | GPT-4o Transcribe / mini Transcribe | 🎤 | — | — | 2025-2026年 |
| 美国 | OpenAI | o系列 | o3-mini（o3-mini-2025-01-31） | 🧠💻 | 未公开 | 200K | 2025年1月31日 |
| 中国 | DeepSeek | DeepSeek | R1-Zero | 🧠 | 671B MoE/37B激活 | 160K | 2025年1月28日 |
| 中国 | DeepSeek | DeepSeek | R1蒸馏模型（1.5B~70B） | 🧠 | 1.5B~70B | 160K | 2025年1月28日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2.5-Max | 📝 | 未公开 MoE | 1M | 2025年1月29日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2.5-VL（7B/72B） | 👁️📝 | 7B/72B | 128K | 2025年1月29日 |
| 中国 | DeepSeek | DeepSeek | R1 | 🧠 | 671B MoE/37B激活 | 160K | 2025年1月20日 |
| 中国 | MiniMax | MiniMax-01 | MiniMax-01（456B MoE） | 📝 | 456B MoE/45.9B激活 | 4M | 2025年1月15日 |
| 法国 | Mistral AI | Mistral | Mistral Small 3（24B） | 📝 | 24B | 128K | 2025年1月 |
| 法国 | Mistral AI | Mistral | Mistral Small 3.1 | 📝 | 未公开 | 未公开 | 2025年3月 |
| 法国 | Mistral AI | OCR | OCR | 👁️ | — | — | 2025年3月 |
| 中国 | 字节跳动 | 豆包 | Doubao-pro 2.0 | 📝 纯文本 | 未公开 | 128K | 2025年6月 |
| 中国 | 字节跳动 | 豆包 | Doubao-1.5-pro | 📝 | 未公开 | 128K | 2025年1月 |
| 中国 | 字节跳动 | 豆包 | Doubao-1.5-lite | 📝 | 未公开 | 128K | 2025年1月 |
| 中国 | 智谱AI | GLM | GLM-Z1 | 🧠 | 未公开 | 128K | 2025年1月 |
| 中国 | 月之暗面 | Kimi | k1.5 | 🧠 | 未公开 | 200万字 | 2025年1月 |
| 中国 | 百川智能 | Baichuan | Baichuan-Omni-1.5 | 🌐🎤 | 7B | 未公开 | 2025年1月 |
| 美国 | Google | Imagen | Nano Banana / Nano Banana Pro | 🖼️ | — | — | 2025-2026年 |
| 美国 | xAI | Grok | grok-imagine-image / video | 🖼️🎬 | — | — | 2025-2026年 |
| 美国 | Google | Gemini | Gemini 2.5 Flash | 🧠🌐 | 未公开 | 1M | 2025年4月17日 |
| 美国 | Google | Gemini | Gemini 2.5 Flash-Lite | 🌐🧠 | 未公开 | 未公开 | 2025年8月 |
| 美国 | Google | Gemini | Gemini 2.5 Flash Live | 🎤🌐 | 未公开 | 未公开 | 2025年8月 |
| 美国 | Google | Gemini | Gemini 2.5 Flash TTS | 🎤 | 未公开 | 未公开 | 2025年8月 |
| 美国 | Google | Gemini | Gemini 2.5 Pro TTS | 🎤 | 未公开 | 未公开 | 2025年8月 |
| 美国 | Google | Gemini | Computer Use（Preview） | 🖥️ | 未公开 | 未公开 | 2025年12月 |
| 中国 | DeepSeek | DeepSeek | deepseek-reasoner | 🧠 | — | — | 2025年1月（⏰ **2026年7月24日弃用 - 仅剩29天**，迁移至 deepseek-v4-flash 思考模式） |
| 中国 | 百度 | 文心一言 | ERNIE-4.5-0.3B | 📝 | 0.3B | 未公开 | 2025年4月 |
| 中国 | 百度 | 文心一言 | ERNIE Character（ernie-char-8k） | 📝 | 未公开 | 8K | 2025年6月 |
| 中国 | 百度 | 文心一言 | ERNIE X1.1 Preview | 🧠 | 未公开 | 64K | 2025年10月 |
| 中国 | 百度 | 文心一言 | ERNIE 4.5 Turbo | 📝 | 未公开 | 32K/128K | 2025年10月 |
| 中国 | 百度 | 文心一言 | ERNIE 4.5 Turbo VL | 👁️📝 | 未公开 | 128K | 2025年10月 |
| 中国 | 腾讯 | 混元 | Tencent HY 2.0 Think | 🧠 | 未公开 | 128K | 2025年12月 |
| 中国 | 腾讯 | 混元 | Tencent HY 2.0 Instruct | 📝 | 未公开 | 128K | 2025年12月 |
| 中国 | 腾讯 | 混元 | Tencent HY Vision 1.5 Instruct | 👁️📝 | 未公开 | 未公开 | 2025年11月 |
| 中国 | 腾讯 | 混元 | Hunyuan-t1-vision | 👁️📝 | 未公开 | 未公开 | 2025年10月 |
| 中国 | 腾讯 | 混元 | Hunyuan-translation-lite | 📝 | 未公开 | 未公开 | 2025年9月 |
| 中国 | 字节跳动 | 豆包 | Seedance 2.0 系列 | 🎬 | — | — | 2025年10月 |
| 中国 | 字节跳动 | 豆包 | Seedream 4.0-5.0 | 🖼️ | — | — | 2025年11月 |
| 中国 | 科大讯飞 | 星火 | 星火V5.0 | 🌐🧠💻 | 未公开 | 未公开 | 2025年12月 |
| 中国 | 科大讯飞 | 星火 | 星火深度推理模型 | 🧠 | 未公开 | 未公开 | 2025年12月 |
| 中国 | 科大讯飞 | 星火 | 星火深度推理X2 | 🧠 | 未公开 | 未公开 | 2025年 |
| 中国 | 科大讯飞 | 星火 | 科技文献大模型（kjwx） | 📝 | 未公开 | 未公开 | 2025年 |
| 中国 | 科大讯飞 | 星火 | 科技文献大模型 | 📝 | 未公开 | 未公开 | 2025年12月 |
| 中国 | 华为 | 盘古 | 盘古大模型5.0 | 🌐🧠🔮🔬 | 未公开 | 未公开 | 2025年12月 |
| 中国 | 华为 | 盘古NLP | 盘古NLP-N4（718B MoE） | 📝🧠 | 718B MoE | 4K/32K/128K | 未公开 |
| 中国 | 腾讯 | 混元 | Hunyuan-Video 2.0 | 🎬 | — | — | 2025年11月 |
| 中国 | 腾讯 | 混元 | Hunyuan-Video | 🎬 | — | — | 2025年6月 |
| 中国 | 腾讯 | 混元 | HY-Vision-2.0-instruct | 👁️📝 | 406B MoE/32B激活 | 28K输入/16K输出 | 2026年2月11日 |
| 中国 | 腾讯 | 混元 | HY-Vision1.5-Thinking | 👁️🧠 | 560B MoE/56B激活 | 16K输入/24K输出 | 2025年9月16日 |
| 中国 | 腾讯 | 混元 | HY-OCR | 👁️ | 1B | 16K | 2025年11月25日 |
| 中国 | 腾讯 | 混元 | HY Image 3.0 Plus | 🖼️ | — | — | 2026年4月29日 |
| 中国 | 腾讯 | 混元 | HY Image 3.0 Instruct | 🖼️ | — | — | 2026年1月26日 |
| 中国 | 腾讯 | 混元 | HY Video 1.5 I2V | 🎬 | — | — | 2025年11月21日 |
| 中国 | 腾讯 | 混元 | HY Video 1.5 T2V | 🎬 | 8.3B | — | 2025年11月21日 |
| 中国 | 腾讯 | 混元 | Hunyuan-3D v3.0 系列 | 🧊 3D生成 | — | — | 2025年9月16日 |
| 中国 | 腾讯 | 混元 | Hunyuan-role-latest | 📝 | 未公开 | 未公开 | 2025年8月 |
| 中国 | 腾讯 | 混元 | Hunyuan-embedding | 📝 | — | — | 2025年7月 |
| 中国 | 腾讯 | 混元 | HY3-Preview | 🌐🧠💻 | 295B MoE/21B激活 | 192K输入/128K输出 | 2026年4月23日 |
| 中国 | 腾讯 | 混元 | Hy-MT2-30B-A3B | 📝 翻译 | 30B MoE/3B激活 | 4K | 2026年5月14日 |
| 中国 | 腾讯 | 混元 | Hy-MT2-7B | 📝 翻译 | 7B | 4K | 2026年5月19日 |
| 中国 | 腾讯 | 混元 | Hy-MT2-1.8B | 📝 翻译 | 1.8B | 4K | 2026年5月19日 |
| 中国 | 腾讯 | 混元 | Hunyuan-A13B | 📝 | 80B MoE/13B激活 | 224K输入/32K输出 | 2025年6月25日 |
| 中国 | 月之暗面 | Kimi | Kimi k2 | 🧠 | 1T MoE/32B激活 | 未公开 | 2025年7月 |
| 中国 | 小米 | MiMo | MiMo-Audio-7B | 🎤 | 8B | 未公开 | 2025年12月 |
| 中国 | 腾讯 | 混元 | Hunyuan-turbos-vision | 👁️📝 视觉+文本 | 未公开 | 未公开 | 2025年10月 |
| 中国 | 腾讯 | 混元 | Hunyuan-turbos-vision-video | 👁️📝 视觉+文本（视频输入） | 未公开 | 未公开 | 2025年10月 |
| 中国 | 腾讯 | 混元 | Hunyuan-large-role | 📝 纯文本（角色扮演） | 未公开 | 未公开 | 2025年8月 |
| 中国 | 腾讯 | 混元 | Hunyuan-translation | 📝 纯文本（翻译） | 未公开 | 未公开 | 2025年9月 |
| 中国 | 百度 | 文心一言 | ERNIE-4.5-VL-28B-A3B | 👁️🧠 视觉+推理 | 28B MoE/3B激活 | 32K | 2025年9月 |
| 中国 | 百度 | 文心一言 | ERNIE-4.5-VL-424B-A47B | 👁️📝 | 424B MoE/47B激活 | 131K | 2025年6月30日 |
| 中国 | 科大讯飞 | 星火 | 星火大模型V5.0 | 🌐🧠💻 多模态+推理+代码 | 未公开 | 未公开 | 2025年12月 |
| 中国 | DeepSeek | DeepSeek | V3（671B/37B MoE） | 📝 | 671B MoE/37B激活 | 128K | 2024年12月26日 |
| 中国 | 阿里巴巴 | 通义千问 | QVQ-72B | 👁️🧠 | 72B | 128K | 2024年12月24日 |
| 美国 | OpenAI | o系列 | o1（o1-2024-12-17） | 🧠 | 未公开 | 200K | 2024年12月17日 |
| 美国 | Google | Gemini | Gemini 2.0 Flash（实验版） | 🌐 | 未公开 | 1M | 2024年12月 |
| 美国 | OpenAI | Sora | Sora | 🎬 | — | — | 2024年12月 |
| 美国 | Meta | Llama | Llama 3.3（70B） | 📝 | 70B | 128K | 2024年12月 |
| 中国 | 阿里巴巴 | 通义千问 | QwQ-32B | 🧠 | 32B | 128K | 2024年11月28日 |
| 中国 | DeepSeek | DeepSeek | R1-Lite | 🧠 | 未公开 | 128K | 2024年11月20日 |
| 中国 | 腾讯 | 混元 | Hunyuan-Large（389B MoE） | 📝 | 389B MoE/52B激活 | 256K | 2024年11月5日 |
| 法国 | Mistral AI | Pixtral | Pixtral Large（124B） | 👁️📝 | 124B | 128K | 2024年11月 |
| 中国 | 月之暗面 | Kimi | Kimi k1系列 | 🧠 推理 | 未公开 | 未公开 | 2024年11月 |
| 中国 | 科大讯飞 | 星火 | V4.0 Ultra | 🌐🧠 | 未公开 | 32K | 2024年10月24日 |
| 美国 | Anthropic | Claude | Claude 3.5 Haiku（claude-3-5-haiku-20241022） | 🌐 | 未公开 | 200K | 2024年10月22日 |
| 美国 | Anthropic | Claude | Claude 3.5 Sonnet v2（claude-3-5-sonnet-20241022） | 🌐🖥️ | 未公开 | 200K | 2024年10月22日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2.5系列 | 📝 | 0.5B~72B | 128K | 2024年9月19日 |
| 美国 | OpenAI | o系列 | o1-preview | 🧠 | 未公开 | 128K | 2024年9月12日 |
| 美国 | OpenAI | o系列 | o1-mini | 🧠💻 | 未公开 | 128K | 2024年9月12日 |
| 美国 | Meta | Llama | Llama 3.2 Vision（11B/90B） | 👁️📝 | 11B/90B | 128K | 2024年9月 |
| 美国 | Meta | Llama | Llama 3.2（1B/3B） | 📝 | 1B/3B | 128K | 2024年9月 |
| 法国 | Mistral AI | Pixtral | Pixtral 12B | 👁️📝 | 12B | 128K | 2024年9月 |
| 中国 | DeepSeek | DeepSeek | V2.5 | 📝💻 | 236B MoE/21B激活 | 128K | 2024年9月 |
| 中国 | 腾讯 | 混元 | 混元 Turbo | 📝 | 未公开 | 32K | 2024年9月 |
| 中国 | MiniMax | video-01 | video-01 | 🎬 | — | — | 2024年9月 |
| 中国 | 零一万物 | Yi | Yi-Coder（1.5B/9B） | 💻 代码 | 1.5B/9B | 128K | 2024年9月 |
| 美国 | xAI | Grok | Grok-2 | 🌐🖼️ | 未公开 | 128K | 2024年8月14日 |
| 美国 | xAI | Grok | Grok-2 mini | 📝 | 未公开 | 128K | 2024年8月14日 |
| 美国 | OpenAI | GPT | GPT-4o（2024-08-06） | 🌐 | 未公开 | 128K | 2024年8月6日 |
| 美国 | Google | Gemini | Gemini 1.5 Flash-8B | 🌐 | 8B | 1M | 2024年8-9月 |
| 美国 | OpenAI | GPT | GPT-4o mini | 🌐 | 未公开（推测8B） | 128K | 2024年7月 |
| 美国 | Meta | Llama | Llama 3.1（8B/70B/405B） | 📝 | 8B/70B/405B | 128K | 2024年7月 |
| 法国 | Mistral AI | Mistral | Mistral Large 2（123B） | 📝 | 123B | 128K | 2024年7月 |
| 中国 | 商汤科技 | 日日新 | SenseNova 5.5（日日新5.5） | 🌐 | 未公开 | 未公开 | 2024年7月 |
| 中国 | 百度 | 文心一言 | ERNIE Speed / Lite | 📝 | 未公开 | 128K | 2024年7月 |
| 中国 | 腾讯 | 混元 | 混元-MoE | 📝 | MoE | 32K | 2024年7月 |
| 中国 | 百度 | 文心一言 | ERNIE Lite | 📝 纯文本 | 未公开 | 128K | 2024年7月 |
| 中国 | 科大讯飞 | 星火 | V4.0 | 🌐 | 未公开 | 128K | 2024年6月27日 |
| 美国 | Anthropic | Claude | Claude 3.5 Sonnet（claude-3-5-sonnet-20240620） | 🌐 | 未公开 | 200K | 2024年6月20日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2-72B | 📝 | 72B | 128K | 2024年6月6日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2系列 | 📝 | 0.5B~72B | 128K | 2024年6月6日 |
| 中国 | 智谱AI | GLM | GLM-4-9B | 📝 纯文本 | 9B | 8K/128K/1M | 2024年6月5日 |
| 中国 | 智谱AI | GLM | GLM-4V-9B | 👁️📝 视觉+文本 | 9B | 8K | 2024年6月5日 |
| 美国 | Google | Gemini | Gemini 1.5 Pro（200万token） | 🌐 | 未公开 MoE | 2M | 2024年6月 |
| 中国 | 华为 | 盘古 | 盘古大模型4.0 | 🌐🧠🔮🔬 | 未公开 | 未公开 | 2024年6月 |
| 中国 | DeepSeek | DeepSeek | Coder V2 | 💻📝 | 236B MoE/21B激活 | 128K | 2024年6月 |
| 中国 | 百度 | 文心一言 | 文心4.0 Turbo | 🌐 | 未公开 | 128K | 2024年6月 |
| 中国 | 零一万物 | Yi | Yi-Lightning | 📝 | 未公开 | 128K | 2024年10月 |
| 中国 | 百川智能 | Baichuan | Baichuan 4 | 🌐 | 未公开 | 128K | 2024年5月22日 |
| 美国 | xAI | Grok | Grok-1.5 | 📝 | 未公开 | 128K | 2024年5月15日 |
| 中国 | 字节跳动 | 豆包 | 豆包大模型系列（pro/lite/embedding/视觉） | 📝👁️ | 未公开 | 128K | 2024年5月15日 |
| 中国 | 字节跳动 | 豆包 | Doubao-pro | 📝 纯文本 | 未公开 | 128K | 2024年5月15日 |
| 中国 | 字节跳动 | 豆包 | Doubao-embedding | 📝 纯文本（向量） | 未公开 | — | 2024年5月15日 |
| 中国 | 字节跳动 | 豆包 | Doubao-pro 128k | 📝 纯文本 | 未公开 | 128K | 2024年 |
| 中国 | 字节跳动 | 豆包 | Doubao-pro 1.5 | 📝 纯文本 | 未公开 | 128K | 2024年12月 |
| 中国 | 字节跳动 | 豆包 | Doubao-lite | 📝 纯文本 | 未公开 | 128K | 2024年5月15日 |
| 中国 | 字节跳动 | 豆包 | Doubao-视觉理解模型 | 👁️ 视觉理解 | 未公开 | 128K | 2024年5月15日 |
| 美国 | OpenAI | GPT | GPT-4o（2024-05-13） | 🌐 | 未公开 | 128K | 2024年5月13日 |
| 中国 | DeepSeek | DeepSeek | V2（236B/21B MoE） | 📝 | 236B MoE/21B激活 | 128K | 2024年5月6日 |
| 美国 | Google | Gemini | Gemini 1.5 Flash | 🌐 | 未公开 | 1M | 2024年5月 |
| 法国 | Mistral AI | Codestral | Codestral（22B） | 💻📝 | 22B | 32K | 2024年5月 |
| 中国 | 腾讯 | 混元 | 混元升级版 / Hunyuan-DiT | 📝 / 🖼️ | 未公开 | 32K | 2024年5月 |
| 中国 | DeepSeek | DeepSeek | V2-Lite | 📝 | 15.7B MoE/2.4B激活 | 32K | 2024年5月 |
| 中国 | 零一万物 | Yi | Yi-Large | 📝 | 未公开 | 128K | 2024年5月 |
| 中国 | 零一万物 | Yi | Yi-1.5系列（6B/9B/34B） | 📝 | 6B/9B/34B | 4K（200K为单独变体） | 2024年5月 |
| 中国 | MiniMax | abab | abab 6.5系列 | 📝 | 未公开 | 128K | 2024年4月17日 |
| 中国 | MiniMax | abab | abab 6.5 / 6.5s / 6.5t | 📝 纯文本 | 未公开 | 128K | 2024年4月17日 |
| 美国 | xAI | Grok | Grok-1.5 Vision | 👁️📝 | 未公开 | 128K | 2024年4月12日（未公开发布） |
| 美国 | Meta | Llama | Llama 3（8B/70B） | 📝 | 8B/70B | 8K | 2024年4月 |
| 美国 | xAI | Grok | Grok-1（开源，314B MoE） | 📝 | 314B MoE/86B激活 | 31K | 2024年3月17日 |
| 美国 | Anthropic | Claude | Claude 3 Opus（claude-3-opus-20240229） | 🌐 | 未公开 | 200K | 2024年3月4日 |
| 美国 | Anthropic | Claude | Claude 3 Sonnet（claude-3-sonnet-20240229） | 🌐 | 未公开 | 200K | 2024年3月4日 |
| 美国 | Anthropic | Claude | Claude 3 Haiku（claude-3-haiku-20240307） | 🌐 | 未公开 | 200K | 2024年3月4日 |
| 中国 | 月之暗面 | Kimi | Kimi升级（200万字上下文） | 📝 | 未公开 | 200万字 | 2024年3月 |
| 中国 | DeepSeek | DeepSeek | VL | 👁️📝 | 未公开 | 未公开 | 2024年3月 |
| 中国 | MiniMax | MiniMax | Hailuo AI | 🌐 多模态 | — | 未公开 | 2024年3月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen1.5系列（0.5B~110B） | 📝 | 0.5B~110B | 32K | 2024年2月4日 |
| 法国 | Mistral AI | Mistral | Mixtral 8x22B（176B/39B MoE） | 📝 | 176B MoE/39B激活 | 64K | 2024年2月 |
| 美国 | Google | Gemini | Gemini 1.5 Pro（100万token） | 🌐 | 未公开 MoE | 1M | 2024年2月 |
| 中国 | 科大讯飞 | 星火 | V3.5 | 🌐 | 未公开 | 64K | 2024年1月30日 |
| 中国 | 百川智能 | Baichuan | Baichuan 3 | 📝 | 未公开 | 未公开 | 2024年1月29日 |
| 中国 | DeepSeek | DeepSeek | LLM 67B | 📝 | 67B | 4K | 2024年1月5日 |
| 法国 | Mistral AI | Mistral | Mistral Small / Medium | 📝 | 未公开 | 32K | 2024年1月 |
| 法国 | Mistral AI | Mistral | Mistral Embed | 📝 | 未公开 | 未公开 | 2023年12月 |
| 法国 | Mistral AI | Mistral | Mistral Nemo 12B | 📝 | 12B | 未公开 | 2024年7月 |
| 法国 | Mistral AI | Mistral | Mistral Large 2.1 | 📝 | 未公开 | 未公开 | 2024年11月 |
| 中国 | 智谱AI | GLM | GLM-4 / GLM-4V / GLM-4-AllTools | 📝 / 👁️📝 | 未公开 | 128K | 2024年1月 |
| 中国 | 百川智能 | Baichuan | Baichuan2-192K | 📝 | 13B | 192K | 2024年1月 |
| 中国 | DeepSeek | DeepSeek | Coder V1 | 💻 | 未公开 | 16K | 2024年1月 |
| 中国 | 零一万物 | Yi | Yi-34B-Chat / Yi-6B-Chat | 📝 纯文本 | 6B/34B | 4K（200K为单独变体） | 2024年1月 |
| 中国 | 零一万物 | Yi | Yi-VL（6B/34B） | 👁️📝 视觉+文本 | 6B/34B | 未公开 | 2024年1月 |
| 中国 | 科大讯飞 | 星火 | 星火Max（v3.5） | 📝 | 未公开 | 未公开 | 2024年（⚠️ 2026年3月10日下线） |
| 中国 | DeepSeek | DeepSeek | deepseek-chat | 📝 | — | — | 2024年（⏰ **2026年7月24日弃用 - 仅剩29天**，迁移至 deepseek-v4-flash 非思考模式） |
| 中国 | 字节跳动 | 豆包 | Seedance 1.0 | 🎬 | — | — | 2024年 |
| 中国 | 科大讯飞 | 星火 | 星火Pro-128K | 📝 | 未公开 | 131K | 2024年 |
| 中国 | 腾讯 | 混元 | Hunyuan-lite | 📝 | 未公开 | 未公开 | 2024年 |
| 中国 | MiniMax | Speech | Speech-01 | 🎤 | — | — | 2024年 |
| 中国 | 智谱AI | GLM | GLM-4-Plus / GLM-4V-Plus | 📝 / 👁️📝 | 未公开 | 128K | 2024年 |
| 中国 | 百川智能 | Baichuan | Baichuan-4-Turbo | 📝 | 未公开 | 128K | 2024年 |
| 中国 | 百川智能 | Baichuan | Baichuan-NPC | 📝 | 未公开 | 未公开 | 2024年 |
| 中国 | 零一万物 | Yi | Yi-Large-Turbo | 📝 | 未公开 | 128K | 2024年 |
| 中国 | 零一万物 | Yi | Yi-Spark | 📝 | 未公开 | 未公开 | 2024年 |
| 中国 | 科大讯飞 | 星火 | 讯飞星火Lite | 📝 纯文本 | 未公开 | 未公开 | 2024年 |
| 中国 | 字节跳动 | 豆包 | 即梦（Jimeng） | 🖼️🎬 文生图+视频 | — | AI图像/视频生成 | 2024年 |
| 中国 | 智谱AI | GLM | GLM-4-Long | 📝 纯文本 | 未公开 | 1M（4K输出） | 2024年 |
| 中国 | 智谱AI | GLM | GLM-4-Plus | 📝 纯文本 | 未公开 | 128K | 2024年 |
| 中国 | 智谱AI | GLM | GLM-4V | 👁️📝 视觉+文本 | 未公开 | 未公开 | 2024年 |
| 中国 | 智谱AI | GLM | GLM-4V-Plus | 🌐 多模态 | 未公开 | 未公开 | 2024年 |
| 中国 | 智谱AI | GLM | CogVideoX | 🎬 文生视频 | 未公开 | — | 2024年 |
| 中国 | 智谱AI | GLM | GLM-4-AirX | 📝 纯文本 | 未公开 | 8K | 2024年 |
| 中国 | 智谱AI | GLM | GLM-4.6 | 📝 纯文本 | 未公开 | 200K（128K输出） | 2025年12月 |
| 中国 | 智谱AI | GLM | GLM-4.5-Air | 📝 纯文本 | 未公开 | 128K（96K输出） | 2025年10月 |
| 中国 | 智谱AI | GLM | GLM-Z1-Air | 🧠 推理 | 未公开 | 128K | 2025年3月 |
| 中国 | 智谱AI | GLM | GLM-Z1-AirX | 🧠 推理 | 未公开 | 32K | 2025年3月 |
| 中国 | 智谱AI | GLM | GLM-Z1-FlashX | 🧠 推理 | 未公开 | 128K | 2025年4月 |
| 中国 | 智谱AI | GLM | GLM-Z1-Flash | 🧠 推理 | 未公开 | 128K | 2025年4月 |
| 中国 | 智谱AI | GLM | CogView-3/4 | 🖼️ 文生图 | 未公开 | 文生图模型 | 2024年 |
| 美国 | Google | Gemini | Gemini 1.0 Ultra | 🌐 | 未公开 | 32K | 2023年12月6日 |
| 美国 | Google | Gemini | Gemini 1.0 Pro | 🌐 | 未公开 | 32K | 2023年12月6日 |
| 美国 | Google | Gemini | Gemini 1.0 Nano | 📝 | 1.8B/3.25B | 32K | 2023年12月6日 |
| 法国 | Mistral AI | Mixtral | Mixtral 8x7B（47B/13B MoE） | 📝 | 47B MoE/13B激活 | 32K | 2023年12月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen-Audio | 🎤📝 | 7B | 32K | 2023年11月30日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen-72B | 📝 | 72B | 32K | 2023年11月29日 |
| 美国 | xAI | Grok | Grok-1 | 📝 | 314B MoE/86B激活 | 31K | 2023年11月3日 |
| 中国 | 零一万物 | Yi | Yi-6B / Yi-34B | 📝 | 6B/34B | 4K（200K为单独变体） | 2023年11月2日 |
| 美国 | OpenAI | GPT | GPT-4 Turbo（1106/0125） | 🌐 | 同GPT-4 | 128K | 2023年11月 |
| 美国 | OpenAI | DALL·E | DALL·E 3 | 🖼️ | — | — | 2023年10月 |
| 美国 | OpenAI | TTS | TTS-1-HD | 🎤 | — | — | 2023年3月 |
| 美国 | OpenAI | Whisper | Whisper（large-v3） | 🎤 | 1.55B | — | 2023年11月 |
| 美国 | Anthropic | Claude | Claude 2（claude-2.0/2.1） | 📝 | 未公开 | 100K/200K | 2023年7月/11月 |
| 中国 | 阿里巴巴 | 通义千问 | 通义千问2.0 | 📝 | 未公开 | 32K | 2023年10月31日 |
| 中国 | 智谱AI | ChatGLM | ChatGLM3 | 📝💻 | 6B | 128K | 2023年10月27日 |
| 中国 | 科大讯飞 | 星火 | V3.0 | 🌐 | 未公开 | 32K | 2023年10月24日 |
| 中国 | 百度 | 文心一言 | 文心大模型4.0 | 🌐 多模态 | 未公开 | 128K | 2023年10月17日 |
| 中国 | 月之暗面 | Kimi | Kimi Chat | 📝 | 未公开 | 20万字 | 2023年10月9日 |
| 中国 | 百川智能 | Baichuan | Baichuan2-7B / Baichuan2-13B | 📝 | 7B/13B | 4K | 2023年9月25日 |
| 中国 | 腾讯 | 混元 | 混元大模型 | 📝 | 千亿级 | 4K | 2023年9月7日 |
| 法国 | Mistral AI | Mistral | Mistral 7B | 📝 | 7B | 8K | 2023年9月 |
| 中国 | 百度 | 文心一言 | 文心一言全面开放 | 📝 | 未公开 | 8K | 2023年8月31日 |
| 中国 | 科大讯飞 | 星火 | V2.0 | 📝💻 | 未公开 | 8K | 2023年8月15日 |
| 中国 | 百川智能 | Baichuan | Baichuan-53B | 📝 | 53B | 4K | 2023年8月8日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen-7B / Qwen-14B | 📝 | 7B/14B | 8K | 2023年8月3日 |
| 中国 | 华为 | 盘古 | 盘古大模型3.0 | 🌐🔮🔬 | 未公开 | — | 2023年7月7日 |
| 美国 | Meta | Llama | Llama 2（7B/13B/70B） | 📝 | 7B/13B/70B | 4K | 2023年7月 |
| 中国 | 华为 | 盘古 | PanGu-Weather（盘古气象大模型） | 🌐 | 未公开 | — | 2023年7月 |
| 中国 | 智谱AI | ChatGLM | ChatGLM2-6B | 📝 | 6B | 32K | 2023年6月25日 |
| 中国 | 百川智能 | Baichuan | Baichuan-7B / Baichuan-13B | 📝 | 7B/13B | 4K | 2023年6月15日 |
| 中国 | 科大讯飞 | 星火 | V1.5 | 📝 | 未公开 | 8K | 2023年6月9日 |
| 中国 | 科大讯飞 | 星火 | V1.0 | 📝 | 未公开 | 4K | 2023年5月6日 |
| 中国 | 阿里巴巴 | 通义千问 | 通义千问1.0 | 📝 | 未公开 | 8K | 2023年4月7日 |
| 中国 | 商汤科技 | 日日新 | SenseNova 5.0（日日新5.0） | 🌐 | 未公开 | 未公开 | 2023年8月 |
| 中国 | 百度 | 文心一言 | 文心一言 / 文心3.5 | 📝 | 未公开 | 4K | 2023年3月16日 |
| 中国 | 百度 | 文心一言 | 文心大模型3.5（ERNIE Bot） | 📝 纯文本 | 未公开 | 4K | 2023年3月16日 |
| 美国 | OpenAI | GPT | GPT-4（0613） | 🌐 | ~1.8T MoE（推测） | 8K/32K | 2023年3月14日 |
| 中国 | 智谱AI | ChatGLM | ChatGLM-6B | 📝 | 6B | 2K | 2023年3月14日 |
| 美国 | OpenAI | GPT | GPT-3（davinci-003等） | 📝 | 175B | 4K | 2020年6月 |
| 美国 | Anthropic | Claude | Claude 1（claude-1.0） | 📝 | 未公开 | 9K | 2023年3月 |
| 美国 | Meta | Llama | Llama 1（7B/13B/33B/65B） | 📝 | 7B/13B/33B/65B | 2K | 2023年2月 |
| 中国 | MiniMax | abab | abab 5.5 | 📝 | 未公开 | 未公开 | 2023年 |
| 美国 | OpenAI | GPT | ChatGPT / GPT-3.5 Turbo | 📝 | ~20B（推测） | 4K/16K | 2022年11月30日 |
| 中国 | MiniMax | abab | abab 3 | 📝 | 未公开 | 未公开 | 2022年10月 |
| 中国 | MiniMax | abab | abab 2 | 📝 | 未公开 | 未公开 | 2022年6月 |
| 美国 | OpenAI | DALL·E | DALL·E 2 | 🖼️ | — | — | 2022年4月 |
| 中国 | MiniMax | abab | abab 1 | 📝 | 未公开 | 未公开 | 2022年4月 |
| 中国 | 华为 | 盘古 | PanGu-α（盘古α） | 📝 | 200B | — | 2021年4月 |
| 中国 | 华为 | 盘古 | 盘古大模型1.0 | 📝👁️ | 未公开 | — | 2021年4月 |
| 中国 | 百川智能 | Baichuan | M3Plus | 📝 | 未公开 | 未公开 | 待确认 |


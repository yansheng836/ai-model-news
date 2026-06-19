# ai-model-news

该项目用于整理现在市面上的流行的各个厂家的大模型产品，进行对比。

每个厂家一个md介绍文件，需要介绍公司、及对应的大模型，大模型需要有各版本发布时间、版本特点等。

同时将所有厂家的大模型的发版时间整理到README.md文档中，一览无遗，需要包括公司所在国家、公司名、大模型名称、版本、发版时间。

> ⚠️ **数据说明**：本项目数据截止至 **2025年5月**，2025年5月之后发布的模型版本尚未收录（当前日期2026年6月20日）。各厂商模型迭代频繁，如有遗漏或错误，欢迎补充更新。

## 问题

我发现了一些问题：

1.消息严重滞后，今天是 2026年6月20日，但是最新版的大模型时间是
  2025年5-6月，需要搜索新闻进行内容更新，大模型迭代非常快。

2.需要精确到 具体模型的版本，比如
  Claude 4 Opus，这个就太笼统了，需要精确到 Claude 4 Opus 4.7
  这样。

3.需要特别注明模型的功能属性，比如
  多模型、纯文本模型、文生图、文生视屏、试图、语音模型等。

4.需要注明 模型的参数，启动参数，上下文长度。

5.文档命名规则：国家-公司-该公司经典大模型名称.md，例如：中国-深度求索-DeepSeek.md

6.各个文档里面，除了总览，还需要有该模型的具体的介绍。

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

## 各厂家介绍文件

| 厂家 | 文件 | 国家 |
|------|------|------|
| OpenAI | [美国-OpenAI-GPT.md](美国-OpenAI-GPT.md) | 美国 |
| Google DeepMind | [美国-Google-Gemini.md](美国-Google-Gemini.md) | 美国 |
| Anthropic | [美国-Anthropic-Claude.md](美国-Anthropic-Claude.md) | 美国 |
| Meta | [美国-Meta-Llama.md](美国-Meta-Llama.md) | 美国 |
| Mistral AI | [法国-Mistral-Mistral.md](法国-Mistral-Mistral.md) | 法国 |
| xAI | [美国-xAI-Grok.md](美国-xAI-Grok.md) | 美国 |
| 百度 | [中国-百度-文心.md](中国-百度-文心.md) | 中国 |
| 阿里巴巴 | [中国-阿里巴巴-通义千问.md](中国-阿里巴巴-通义千问.md) | 中国 |
| 字节跳动 | [中国-字节跳动-豆包.md](中国-字节跳动-豆包.md) | 中国 |
| 腾讯 | [中国-腾讯-混元.md](中国-腾讯-混元.md) | 中国 |
| 华为 | [中国-华为-盘古.md](中国-华为-盘古.md) | 中国 |
| 小米 | [中国-小米-MiLM.md](中国-小米-MiLM.md) | 中国 |
| 科大讯飞 | [中国-科大讯飞-星火.md](中国-科大讯飞-星火.md) | 中国 |
| DeepSeek（深度求索） | [中国-深度求索-DeepSeek.md](中国-深度求索-DeepSeek.md) | 中国 |
| 智谱AI | [中国-智谱AI-GLM.md](中国-智谱AI-GLM.md) | 中国 |
| 月之暗面 | [中国-月之暗面-Kimi.md](中国-月之暗面-Kimi.md) | 中国 |
| 零一万物 | [中国-零一万物-Yi.md](中国-零一万物-Yi.md) | 中国 |
| MiniMax | [中国-MiniMax-abab.md](中国-MiniMax-abab.md) | 中国 |
| 百川智能 | [中国-百川智能-Baichuan.md](中国-百川智能-Baichuan.md) | 中国 |

## 大模型发版时间线总览

> 按发版时间倒序排列，涵盖各厂商主要模型版本。

| 国家 | 公司名 | 大模型名称 | 版本 | 功能属性 | 参数规模 | 上下文 | 发版时间 |
|------|--------|-----------|------|----------|----------|--------|----------|
| 美国 | Anthropic | Claude | Claude 4 Opus（claude-opus-4-20250514） | 🌐🖥️ | 未公开 | 200K | 2025年5月14日 |
| 美国 | Anthropic | Claude | Claude 4 Sonnet（claude-sonnet-4-20250514） | 🌐🖥️ | 未公开 | 200K | 2025年5月14日 |
| 中国 | DeepSeek | DeepSeek | R1-0528 | 🧠 | 671B MoE/37B激活 | 128K | 2025年5月28日 |
| 法国 | Mistral AI | Mistral | Mistral Medium 3 / Devstral | 📝 / 💻 | 未公开 | 128K | 2025年4-5月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen3-235B-A22B 等 | 🧠📝 | 235B MoE/22B激活 | 128K | 2025年4月 |
| 美国 | Meta | Llama | Llama 4 Maverick（17B/400B MoE） | 🌐 | 400B/17B激活 | 1M | 2025年4月 |
| 美国 | Meta | Llama | Llama 4 Scout（17B/109B MoE） | 🌐 | 109B/17B激活 | 10M | 2025年4月 |
| 美国 | OpenAI | GPT | GPT-4.1 | 🌐 | 未公开 | 1M | 2025年4月 |
| 美国 | OpenAI | o系列 | o3（o3-2025-04-16） | 🧠 | 未公开 | 200K | 2025年4月16日 |
| 美国 | OpenAI | o系列 | o4-mini | 🧠💻 | 未公开 | 200K | 2025年4月 |
| 中国 | 百度 | 文心一言 | 文心4.5 Turbo | 🌐🧠 | 未公开 | 128K | 2025年4月25日 |
| 中国 | 百度 | 文心一言 | 文心X1 Turbo | 🧠 | 未公开 | 128K | 2025年4月25日 |
| 中国 | 百度 | 文心一言 | 文心4.5 | 🌐🧠 | 未公开 | 128K | 2025年4月 |
| 中国 | 百度 | 文心一言 | 文心X1 | 🧠 | 未公开 | 128K | 2025年4月 |
| 美国 | Google | Gemini | Gemini 2.5 Pro | 🧠🌐 | 未公开 | 1M | 2025年3月 |
| 中国 | 腾讯 | 混元 | 混元 Turbo S | 📝 | 未公开 | 128K | 2025年3月 |
| 中国 | 百度 | 文心一言 | 深度搜索（Deep Search） | 📝 | — | — | 2025年3月 |
| 法国 | Mistral AI | Mistral | Mistral Small 3（24B） | 📝 | 24B | 128K | 2025年1月 |
| 美国 | xAI | Grok | Grok-3 | 🧠🌐 | 未公开 | 128K | 2025年2月 |
| 美国 | OpenAI | GPT | GPT-4.5（Orion） | 🌐 | 未公开 | 128K | 2025年2月 |
| 美国 | OpenAI | o系列 | o3-mini（o3-mini-2025-01-31） | 🧠💻 | 未公开 | 200K | 2025年1月31日 |
| 中国 | 腾讯 | 混元 | 混元 T1 | 🧠 | 未公开 | 128K | 2025年2月 |
| 美国 | Google | Gemini | Gemini 2.0 Pro | 🌐 | 未公开 | 2M | 2025年2月 |
| 美国 | Google | Gemini | Gemini 2.0 Flash（GA） | 🌐 | 未公开 | 1M | 2025年2月 |
| 中国 | DeepSeek | DeepSeek | V3-0324 | 📝 | 671B MoE/37B激活 | 128K | 2025年2月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2.5-1M | 📝 | 72B | 1M | 2025年2-3月 |
| 中国 | DeepSeek | DeepSeek | R1 | 🧠 | 671B MoE/37B激活 | 128K | 2025年1月20日 |
| 中国 | DeepSeek | DeepSeek | R1-Zero | 🧠 | 671B MoE/37B激活 | 128K | 2025年1月28日 |
| 中国 | DeepSeek | DeepSeek | R1蒸馏模型（1.5B~70B） | 🧠 | 1.5B~70B | 128K | 2025年1月28日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2.5-Max | 📝 | 未公开 MoE | 1M | 2025年1月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2.5-VL（7B/72B） | 👁️📝 | 7B/72B | 128K | 2025年1月 |
| 中国 | 智谱AI | GLM | GLM-Z1 | 🧠 | 未公开 | 128K | 2025年1月 |
| 中国 | MiniMax | MiniMax-01 | MiniMax-01（456B MoE） | 📝 | 456B MoE/45.9B激活 | 4M | 2025年1月 |
| 中国 | 月之暗面 | Kimi | k1.5 | 🧠 | 未公开 | 200万字 | 2025年1月 |
| 美国 | Google | Gemini | Gemini 2.0 Flash（实验版） | 🌐 | 未公开 | 1M | 2024年12月 |
| 美国 | OpenAI | o系列 | o1（o1-2024-12-17） | 🧠 | 未公开 | 200K | 2024年12月17日 |
| 美国 | OpenAI | Sora | Sora | 🎬 | — | — | 2024年12月 |
| 中国 | DeepSeek | DeepSeek | V3（671B/37B MoE） | 📝 | 671B MoE/37B激活 | 128K | 2024年12月26日 |
| 中国 | 阿里巴巴 | 通义千问 | QVQ-72B | 👁️🧠 | 72B | 128K | 2024年12月 |
| 美国 | Meta | Llama | Llama 3.3（70B） | 📝 | 70B | 128K | 2024年12月 |
| 法国 | Mistral AI | Pixtral | Pixtral Large（124B） | 👁️📝 | 124B | 128K | 2024年11月 |
| 中国 | 阿里巴巴 | 通义千问 | QwQ-32B | 🧠 | 32B | 128K | 2024年11月 |
| 中国 | 腾讯 | 混元 | Hunyuan-Large（389B MoE） | 📝 | 389B MoE/52B激活 | 256K | 2024年11月 |
| 中国 | DeepSeek | DeepSeek | R1-Lite | 🧠 | 未公开 | 128K | 2024年11月 |
| 中国 | MiniMax | abab | abab 7 | 📝 | 未公开 | 128K | 2024年11月 |
| 美国 | Anthropic | Claude | Claude 3.5 Haiku（claude-3-5-haiku-20241022） | 🌐 | 未公开 | 200K | 2024年10月22日 |
| 美国 | Anthropic | Claude | Claude 3.5 Sonnet v2（claude-3-5-sonnet-20241022） | 🌐🖥️ | 未公开 | 200K | 2024年10月22日 |
| 美国 | xAI | Grok | Grok-2 | 🌐🖼️ | 未公开 | 128K | 2024年10月 |
| 美国 | xAI | Grok | Grok-2 mini | 📝 | 未公开 | 128K | 2024年10月 |
| 中国 | 智谱AI | GLM | GLM-4-Plus / GLM-4V-Plus | 📝 / 👁️📝 | 未公开 | 128K | 2024年 |
| 美国 | Meta | Llama | Llama 3.2 Vision（11B/90B） | 👁️📝 | 11B/90B | 128K | 2024年9月 |
| 美国 | Meta | Llama | Llama 3.2（1B/3B） | 📝 | 1B/3B | 128K | 2024年9月 |
| 法国 | Mistral AI | Pixtral | Pixtral 12B | 👁️📝 | 12B | 128K | 2024年9月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2.5系列 | 📝 | 0.5B~72B | 128K | 2024年9月 |
| 中国 | DeepSeek | DeepSeek | V2.5 | 📝💻 | 236B MoE/21B激活 | 128K | 2024年9月 |
| 中国 | 腾讯 | 混元 | 混元 Turbo | 📝 | 未公开 | 32K | 2024年9月 |
| 美国 | OpenAI | o系列 | o1-preview | 🧠 | 未公开 | 128K | 2024年9月12日 |
| 美国 | OpenAI | o系列 | o1-mini | 🧠💻 | 未公开 | 128K | 2024年9月12日 |
| 中国 | MiniMax | video-01 | video-01 | 🎬 | — | — | 2024年8月 |
| 美国 | xAI | Grok | Grok-1.5 Vision | 👁️📝 | 未公开 | 128K | 2024年8月 |
| 美国 | Google | Gemini | Gemini 1.5 Flash-8B | 🌐 | 8B | 1M | 2024年8-9月 |
| 美国 | OpenAI | GPT | GPT-4o（2024-08-06） | 🌐 | 未公开 | 128K | 2024年8月6日 |
| 美国 | OpenAI | GPT | GPT-4o mini | 🌐 | 未公开（推测8B） | 128K | 2024年7月 |
| 美国 | Meta | Llama | Llama 3.1（8B/70B/405B） | 📝 | 8B/70B/405B | 128K | 2024年7月 |
| 法国 | Mistral AI | Mistral | Mistral Large 2（123B） | 📝 | 123B | 128K | 2024年7月 |
| 中国 | 百度 | 文心一言 | ERNIE Speed | 📝 | 未公开 | 128K | 2024年7月 |
| 中国 | 百度 | 文心一言 | ERNIE Lite | 📝 | 未公开 | 128K | 2024年7月 |
| 中国 | 腾讯 | 混元 | 混元-MoE | 📝 | MoE | 32K | 2024年7月 |
| 美国 | Anthropic | Claude | Claude 3.5 Sonnet（claude-3-5-sonnet-20240620） | 🌐 | 未公开 | 200K | 2024年6月20日 |
| 美国 | Google | Gemini | Gemini 1.5 Pro（200万token） | 🌐 | 未公开 MoE | 2M | 2024年6月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2-72B | 📝 | 72B | 128K | 2024年6月 |
| 中国 | DeepSeek | DeepSeek | Coder V2 | 💻📝 | 236B MoE/21B激活 | 128K | 2024年6月 |
| 中国 | 百度 | 文心一言 | 文心4.0 Turbo | 🌐 | 未公开 | 128K | 2024年6月 |
| 中国 | 科大讯飞 | 星火 | V4.0 | 🌐 | 未公开 | 128K | 2024年6月27日 |
| 美国 | OpenAI | GPT | GPT-4o（2024-05-13） | 🌐 | 未公开 | 128K | 2024年5月13日 |
| 美国 | Google | Gemini | Gemini 1.5 Flash | 🌐 | 未公开 | 1M | 2024年5月 |
| 法国 | Mistral AI | Codestral | Codestral（22B） | 💻📝 | 22B | 32K | 2024年5月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen2系列 | 📝 | 0.5B~72B | 128K | 2024年5月 |
| 中国 | 字节跳动 | 豆包 | 豆包大模型系列（pro/lite/embedding/视觉） | 📝👁️ | 未公开 | 128K | 2024年5月 |
| 中国 | 腾讯 | 混元 | 混元升级版 / Hunyuan-DiT | 📝 / 🖼️ | 未公开 | 32K | 2024年5月 |
| 中国 | DeepSeek | DeepSeek | V2（236B/21B MoE） | 📝 | 236B MoE/21B激活 | 128K | 2024年5月 |
| 中国 | 百川智能 | Baichuan | Baichuan 4 | 🌐 | 未公开 | 128K | 2024年5月22日 |
| 美国 | xAI | Grok | Grok-1.5 | 📝 | 未公开 | 128K | 2024年5月 |
| 中国 | 零一万物 | Yi | Yi-Lightning / Yi-Large | 📝 | 未公开 | 128K | 2024年5-6月 |
| 美国 | Meta | Llama | Llama 3（8B/70B） | 📝 | 8B/70B | 8K | 2024年4月 |
| 美国 | xAI | Grok | Grok-1（开源，314B MoE） | 📝 | 314B MoE/86B激活 | 31K | 2024年3月 |
| 美国 | Anthropic | Claude | Claude 3 Opus（claude-3-opus-20240229） | 🌐 | 未公开 | 200K | 2024年3月4日 |
| 美国 | Anthropic | Claude | Claude 3 Sonnet（claude-3-sonnet-20240229） | 🌐 | 未公开 | 200K | 2024年3月4日 |
| 美国 | Anthropic | Claude | Claude 3 Haiku（claude-3-haiku-20240307） | 🌐 | 未公开 | 200K | 2024年3月4日 |
| 中国 | 零一万物 | Yi | Yi-1.5系列（6B/9B/34B） | 📝 | 6B/9B/34B | 200K | 2024年3月 |
| 中国 | 月之暗面 | Kimi | Kimi升级（200万字上下文） | 📝 | 未公开 | 200万字 | 2024年3月 |
| 法国 | Mistral AI | Mistral | Mixtral 8x22B（176B/39B MoE） | 📝 | 176B MoE/39B激活 | 64K | 2024年2月 |
| 美国 | Google | Gemini | Gemini 1.5 Pro（100万token） | 🌐 | 未公开 MoE | 1M | 2024年2月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen1.5系列（0.5B~110B） | 📝 | 0.5B~110B | 32K | 2024年2月 |
| 中国 | 智谱AI | GLM | GLM-4 / GLM-4V / GLM-4-AllTools | 📝 / 👁️📝 | 未公开 | 128K | 2024年1月 |
| 中国 | 百川智能 | Baichuan | Baichuan2-192K | 📝 | 13B | 192K | 2024年1月 |
| 中国 | 科大讯飞 | 星火 | V3.5 | 🌐 | 未公开 | 64K | 2024年1月30日 |
| 中国 | DeepSeek | DeepSeek | LLM 67B | 📝 | 67B | 4K | 2024年1月 |
| 法国 | Mistral AI | Mistral | Mistral Small / Medium | 📝 | 未公开 | 32K | 2024年1月 |
| 美国 | Google | Gemini | Gemini 1.0 Ultra | 🌐 | 未公开 | 32K | 2023年12月6日 |
| 美国 | Google | Gemini | Gemini 1.0 Pro | 🌐 | 未公开 | 32K | 2023年12月6日 |
| 美国 | Google | Gemini | Gemini 1.0 Nano | 📝 | 1.8B/3.25B | 32K | 2023年12月6日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen-Audio | 🎤📝 | 7B | 32K | 2023年12月 |
| 法国 | Mistral AI | Mixtral | Mixtral 8x7B（47B/13B MoE） | 📝 | 47B MoE/13B激活 | 32K | 2023年12月 |
| 中国 | 零一万物 | Yi | Yi-6B / Yi-34B | 📝 | 6B/34B | 200K | 2023年11月 |
| 中国 | 小米 | MiLM | MiLM-6B / MiLM-1.3B | 📝 | 6B/1.3B | — | 2023年11月 |
| 美国 | OpenAI | GPT | GPT-4 Turbo（1106/0125） | 🌐 | 同GPT-4 | 128K | 2023年11月 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen-72B | 📝 | 72B | 32K | 2023年11月 |
| 美国 | xAI | Grok | Grok-1 | 📝 | 314B MoE/86B激活 | 31K | 2023年11月 |
| 中国 | 百度 | 文心一言 | 文心4.0 | 🌐 | 未公开 | 128K | 2023年10月17日 |
| 中国 | 科大讯飞 | 星火 | V3.0 | 🌐 | 未公开 | 32K | 2023年10月24日 |
| 中国 | 智谱AI | ChatGLM | ChatGLM3 | 📝💻 | 6B | 128K | 2023年10月 |
| 中国 | 月之暗面 | Kimi | Kimi Chat | 📝 | 未公开 | 20万字 | 2023年10月 |
| 法国 | Mistral AI | Mistral | Mistral 7B | 📝 | 7B | 8K | 2023年9月 |
| 中国 | 阿里巴巴 | 通义千问 | 通义千问2.0 | 📝 | 未公开 | 32K | 2023年9月 |
| 中国 | 腾讯 | 混元 | 混元大模型 | 📝 | 千亿级 | 4K | 2023年9月 |
| 中国 | 百川智能 | Baichuan | Baichuan2-7B / Baichuan2-13B | 📝 | 7B/13B | 4K | 2023年9月25日 |
| 中国 | 百度 | 文心一言 | 文心一言全面开放 | 📝 | 未公开 | 8K | 2023年8月31日 |
| 中国 | 阿里巴巴 | 通义千问 | Qwen-7B / Qwen-14B | 📝 | 7B/14B | 8K | 2023年8月 |
| 中国 | 科大讯飞 | 星火 | V2.0 | 📝💻 | 未公开 | 8K | 2023年8月15日 |
| 中国 | 百川智能 | Baichuan | Baichuan-53B | 📝 | 53B | 4K | 2023年8月8日 |
| 美国 | Meta | Llama | Llama 2（7B/13B/70B） | 📝 | 7B/13B/70B | 4K | 2023年7月 |
| 美国 | Anthropic | Claude | Claude 2（claude-2.0/2.1） | 📝 | 未公开 | 100K/200K | 2023年7月/11月 |
| 中国 | 华为 | 盘古 | 盘古大模型3.0 | 🌐🔮🔬 | 未公开 | — | 2023年7月 |
| 中国 | 智谱AI | ChatGLM | ChatGLM2-6B | 📝 | 6B | 32K | 2023年6月 |
| 中国 | 百川智能 | Baichuan | Baichuan-7B / Baichuan-13B | 📝 | 7B/13B | 4K | 2023年6月15日 |
| 中国 | 科大讯飞 | 星火 | V1.5 | 📝 | 未公开 | 8K | 2023年6月9日 |
| 中国 | 百度 | 文心一言 | 文心一言 / 文心3.5 | 📝 | 未公开 | 4K | 2023年3月16日 |
| 中国 | 科大讯飞 | 星火 | V1.0 | 📝 | 未公开 | 4K | 2023年5月6日 |
| 中国 | 阿里巴巴 | 通义千问 | 通义千问1.0 | 📝 | 未公开 | 8K | 2023年4月 |
| 美国 | OpenAI | GPT | GPT-4（0613） | 🌐 | ~1.8T MoE（推测） | 8K/32K | 2023年3月14日 |
| 美国 | Anthropic | Claude | Claude 1（claude-1.0） | 📝 | 未公开 | 9K | 2023年3月 |
| 中国 | 智谱AI | ChatGLM | ChatGLM-6B | 📝 | 6B | 2K | 2023年3月 |
| 美国 | Meta | Llama | Llama 1（7B/13B/33B/65B） | 📝 | 7B/13B/33B/65B | 2K | 2023年2月 |
| 美国 | OpenAI | GPT | ChatGPT / GPT-3.5 Turbo | 📝 | ~20B（推测） | 4K/16K | 2022年11月30日 |
| 美国 | OpenAI | DALL·E | DALL·E 2 | 🖼️ | — | — | 2022年4月 |
| 美国 | OpenAI | Whisper | Whisper（large-v3） | 🎤 | 1.55B | — | 2023年11月 |

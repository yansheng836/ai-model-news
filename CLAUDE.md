# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a documentation-only project (no code) that catalogs major AI model products from various companies. The content is written in Chinese.

**Structure:**
- `README.md` — master timeline table with capability annotations, plus company index
- Per-company markdown files — one file per company, covering company background, model version history, and detailed model introductions

## File Naming Convention

Files must follow the pattern: **国家-公司英文名-经典模型名.md**

Examples:
- `中国-深度求索-DeepSeek.md`
- `美国-OpenAI-GPT.md`
- `美国-Anthropic-Claude.md`
- `美国-Google-Gemini.md`
- `美国-Meta-Llama.md`
- `法国-Mistral-Mistral.md`
- `美国-xAI-Grok.md`
- `中国-百度-文心.md`
- `中国-阿里巴巴-通义千问.md`
- `中国-字节跳动-豆包.md`
- `中国-腾讯-混元.md`
- `中国-华为-盘古.md`
- `中国-小米-MiLM.md`
- `中国-科大讯飞-星火.md`
- `中国-智谱AI-GLM.md`
- `中国-月之暗面-Kimi.md`
- `中国-零一万物-Yi.md`
- `中国-MiniMax-abab.md`
- `中国-百川智能-Baichuan.md`

## Content Requirements

### Each company file must include:

1. **公司简介** — company overview table (country, HQ, founded, founder, positioning)
2. **模型总览表** — summary table of all model versions with: version, release date, capability type, parameters, active parameters, context length, key features
3. **模型详细介绍** — detailed description of each major model (architecture, training data, benchmarks, use cases, API info, etc.)

### Model version entries must include:

- **精确版本号** — e.g., `Claude 4 Opus (claude-opus-4-20250514)`, not just `Claude 4 Opus`
- **功能属性** — use emoji annotations (see below)
- **参数规模** — total parameters (e.g., 671B)
- **激活参数** — active parameters for MoE models (e.g., 37B)
- **上下文长度** — context window (e.g., 128K, 200K, 1M)
- **精确发布时间** — 必须精确到天或月，不能只标注年份或时间范围。格式：`YYYY年MM月DD日` 或 `YYYY年MM月`。例如：`2025年8月7日`，不能写成`2025年`或`2025-2026年`
- **状态信息** — 如有暂停、弃用、停用等状态变更，需在版本说明中注明（如 `⚠️ 2026年6月12日起暂停`）

### README.md timeline table must include columns:

国家 | 公司名 | 大模型名称 | 版本 | 功能属性 | 发版时间

## Capability Annotations (功能属性图例)

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

## Conventions

- All content is written in **Chinese (简体中文)**.
- When adding a new company, also add its release entries to the timeline table in `README.md`.
- Keep data up to date — the AI model field iterates very fast.
- Update the ⚠️ data cutoff notice in README.md when refreshing data.

## Data Update Strategy (数据更新策略)

### Problem

- `WebSearch` tool is unreliable — returns model-generated text instead of real search results.
- `WebFetch` works for some URLs but many sites block it (403 Forbidden, anti-scraping, auth walls).
- Solution: use `WebFetch` to access **official API documentation pages** which typically don't have anti-scraping.

### Official Documentation URLs (优先级从高到低)

| Vendor | URL | Status | 备注 |
|--------|-----|--------|------|
| **Anthropic** | `https://platform.claude.com/docs/en/docs/about-claude/models` | ✅ Verified | 完整模型列表，含定价、上下文、弃用信息 |
| **OpenAI** | `https://developers.openai.com/api/docs/models` | ✅ Verified | 重定向后可用，含GPT-5.5/5.4/o系列 |
| **Google Gemini** | `https://ai.google.dev/gemini-api/docs/models` | ✅ Verified | 完整模型列表含Gemini 3系列、Veo、Lyria |
| **xAI Grok** | `https://docs.x.ai/docs/models` | ✅ Verified | 完整模型列表含grok-4.3、图像/视频/语音模型 |
| **Mistral** | `https://docs.mistral.ai/getting-started/models/` | ✅ Verified | 完整模型列表含生命周期（弃用/退役日期） |
| **Meta Llama** | `https://huggingface.co/meta-llama` | ✅ Verified | HuggingFace页面比developer.meta.com更完整 |
| **DeepSeek** | `https://github.com/deepseek-ai/DeepSeek-V3` | ⚠️ GitHub可用 | 仅V3详情，V4信息需从README时间线推断 |
| **Qwen（阿里）** | `https://github.com/QwenLM/Qwen3` | ✅ Verified | Qwen3完整列表含2507版，Apache 2.0 |
| **智谱AI GLM** | `https://github.com/THUDM/GLM-4` | ✅ Verified | GLM-4/0414/Z1完整列表，含基准分数 |
| **月之暗面 Kimi** | `https://github.com/MoonshotAI/Kimi-VL` | ✅ Verified | Kimi-VL-A3B系列，含Thinking/Instruct版 |
| **百度文心** | `https://cloud.baidu.com/product-s/qianfan_home` | ✅ Verified | 千帆平台首页，含ERNIE 5.0/X1.1/4.5 Turbo |
| **腾讯混元** | `https://cloud.tencent.com/document/product/1729/97731` | ✅ Verified | 定价页含HY 2.0、T1、TurboS等模型列表 |
| **字节豆包** | `https://en.wikipedia.org/wiki/Doubao` | ⚠️ Wikipedia | 官方文档JS渲染无法抓取，Wikipedia有基本信息 |
| **科大讯飞星火** | `https://xinghuo.xfyun.cn/desk` | ❌ 无法抓取 | 页面JS渲染，无有效内容 |
| **NVIDIA Nemotron** | `https://huggingface.co/nvidia` | ✅ Verified | HuggingFace含完整Nemotron/Cosmos/GR00T系列 |
| **MiniMax** | — | ⚠️ 待补充 | 官方文档地址待确认 |
| **百川智能** | — | ⚠️ 待补充 | 官方文档地址待确认 |

### 备用数据源（当官方文档不可用时）

| 数据源 | URL | 适用场景 |
|--------|-----|----------|
| **HuggingFace** | `https://huggingface.co/{org}` | 开源模型列表、参数、架构 |
| **Wikipedia** | `https://en.wikipedia.org/wiki/{Model}` | 模型历史、发布时间、用户规模 |
| **GitHub** | `https://github.com/{org}/{repo}` | 模型详情、基准分数、训练数据 |

### Update Procedure

1. Use `WebFetch` to access the official documentation URL for each vendor
2. Parse the model list, extract: model name, API ID, release date, context window, pricing, capabilities
3. Update the per-company markdown file with new models
4. Add new entries to the README.md timeline table
5. Update the ⚠️ data cutoff notice in README.md
6. If `WebFetch` fails for a vendor, try alternative URLs (GitHub repos, blog posts, Wikipedia)
7. Mark URL status in the table above after verification

### Fallback Strategy

If official docs are inaccessible:
1. Try the vendor's GitHub repository (releases/README)
2. Try HuggingFace organization page (`https://huggingface.co/{org}`)
3. Try Wikipedia pages for the model family
4. Try tech news sites (Ars Technica, The Verge, etc.)
5. Document what was tried and why it failed

### 已知限制

- **JS渲染页面**：火山引擎（字节跳动）、科大讯飞等使用JS动态渲染，WebFetch无法获取内容
- **认证墙**：部分厂商文档需要登录才能访问（如阿里云、腾讯云部分页面）
- **反爬虫**：部分网站返回403或需要特殊headers
- **解决方案**：优先使用GitHub/HuggingFace/Wikipedia等开放平台

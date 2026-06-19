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

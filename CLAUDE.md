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
- `中国-小米-MiMo.md`
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

### ⚠️ 重要原则：必须搜索产品官网

**不能只依赖 GitHub/HuggingFace，必须同时搜索产品官网获取准确信息。**

原因：
1. **HuggingFace "Updated" 时间是上传日期，不是正式发布日期**（如小米 MiMo-V2.5-Pro：HuggingFace显示2025年5月，实际发布于2026年4月27日）
2. **GitHub README 可能不完整**，只包含部分模型或旧版本
3. **产品官网包含最准确的发布日期、定价、功能说明**

数据源优先级：
1. **产品官网/API文档**（如 `mimo.xiaomi.com`、`platform.baichuan-ai.com`）→ 最准确的发布日期
2. **OpenRouter API** → 跨厂商标准化数据（上下文长度、定价、模型ID），可用于交叉验证
3. **GitHub 仓库** → 模型架构、训练数据、基准分数
4. **HuggingFace 组织页面** → 完整模型列表、参数规模
5. **Wikipedia** → 公司背景、历史时间线

### OpenRouter API（跨厂商统一数据源）

OpenRouter 聚合了所有主流厂商的模型数据，提供标准化的 API 接口，适合用于：
- **交叉验证**：对比各厂商官方文档中的上下文长度、定价是否一致
- **发现遗漏**：OpenRouter 上架的模型可能尚未在厂商文档中列出
- **统一格式**：所有模型使用相同的数据结构（id、context_length、pricing）

| 数据 | URL | 说明 |
|------|-----|------|
| 全部模型列表 | `https://openrouter.ai/api/v1/models` | JSON格式，含340+模型 |
| 按厂商筛选 | `https://openrouter.ai/models?q={关键词}` | 网页版，JS动态渲染需用API |
| 模型详情 | `https://openrouter.ai/{model-id}` | 单个模型的详细信息页 |

**使用方法：**
```bash
# 获取全部模型数据（JSON）
curl -s "https://openrouter.ai/api/v1/models" | node -e "
const chunks = [];
process.stdin.on('data', c => chunks.push(c));
process.stdin.on('end', () => {
  const data = JSON.parse(Buffer.concat(chunks));
  data.data.forEach(m => {
    console.log(m.id + ' | ctx:' + m.context_length + ' | \$' + m.pricing.prompt + '/\$' + m.pricing.completion);
  });
});
"
```

**已验证的 OpenRouter 厂商覆盖（2026年6月）：**
- OpenAI: 62 模型 | Qwen: 49 | Google: 28 | Mistral: 19 | Anthropic: 15
- 智谱AI(z-ai): 12 | Meta: 12 | NVIDIA: 11 | DeepSeek: 11 | MiniMax: 8
- xAI: 4 | 小米: 2 | 腾讯: 2 | 月之暗面: 6

### Official Documentation URLs (优先级从高到低)

| Vendor | URL | Status | 备注 |
|--------|-----|--------|------|
| **OpenRouter** | `https://openrouter.ai/api/v1/models` | ✅ Verified | **跨厂商统一API**，340+模型，含上下文/定价/模型ID，适合交叉验证 |
| **Anthropic** | `https://platform.claude.com/docs/en/docs/about-claude/models` | ✅ Verified | 完整模型列表，含定价、上下文、弃用信息 |
| **OpenAI** | `https://developers.openai.com/api/docs/models` | ✅ Verified | 重定向后可用，含GPT-5.5/5.4/o系列 |
| **Google Gemini** | `https://ai.google.dev/gemini-api/docs/models` | ✅ Verified | 完整模型列表含Gemini 3系列、Veo、Lyria |
| **xAI Grok** | `https://docs.x.ai/docs/models` | ✅ Verified | 完整模型列表含grok-4.3、图像/视频/语音模型 |
| **Mistral** | `https://docs.mistral.ai/getting-started/models/` | ✅ Verified | 完整模型列表含生命周期（弃用/退役日期） |
| **Meta Llama** | `https://huggingface.co/meta-llama` | ✅ Verified | HuggingFace页面比developer.meta.com更完整 |
| **DeepSeek** | `https://github.com/deepseek-ai/DeepSeek-V3` | ✅ Verified | V3详情，含架构、训练成本 |
| **DeepSeek** | `https://huggingface.co/deepseek-ai` | ✅ Verified | 87个模型，含V4/V3.2/OCR参数确认 |
| **Qwen（阿里）** | `https://github.com/QwenLM/Qwen3` | ✅ Verified | Qwen3完整列表含2507版，Apache 2.0 |
| **通义千问（阿里云）** | `https://www.aliyun.com/product/tongyi` | ✅ Verified | 产品官网，含Qwen3.7/万相系列/LiveTranslate等最新模型 |
| **智谱AI GLM** | `https://github.com/zai-org/GLM-5` | ✅ Verified | GLM-5.2/5.1/5完整列表，含基准分数 |
| **月之暗面 Kimi** | `https://github.com/MoonshotAI/Kimi-VL` | ✅ Verified | Kimi-VL-A3B系列，含Thinking/Instruct版 |
| **百度文心** | `https://cloud.baidu.com/product-s/qianfan_home` | ✅ Verified | 千帆平台首页，含ERNIE 5.0/5.0-Thinking/X1.1/4.5 Turbo，含定价和API ID |
| **腾讯混元** | `https://cloud.tencent.com/document/product/1729/97731` | ✅ Verified | 定价页含HY 2.0、T1、TurboS等模型列表，含TokenHub迁移通知 |
| **腾讯混元** | `https://aistudio.tencent.com/modelSquare` | ✅ Verified（浏览器） | 模型广场，含精确参数（HY3:295B/21B、A13B:80B/13B）、Hy-MT2翻译系列 |
| **腾讯混元** | `https://huggingface.co/Tencent-Hunyuan` | ⚠️ 有限信息 | 仅含HunyuanDiT图像模型，无文本模型详情 |
| **字节豆包** | `https://en.wikipedia.org/wiki/Doubao` | ⚠️ Wikipedia | 官方文档JS渲染无法抓取，Wikipedia有基本信息 |
| **字节跳动** | `https://huggingface.co/bytedance` | ⚠️ 有限信息 | 含Bernini/Ouro等模型，无Doubao系列 |
| **科大讯飞星火** | `https://xinghuo.xfyun.cn/desk` | ❌ 无法抓取 | 页面JS渲染，无有效内容 |
| **NVIDIA Nemotron** | `https://huggingface.co/nvidia` | ✅ Verified | HuggingFace含完整Nemotron/Cosmos/GR00T系列 |
| **MiniMax** | `https://en.wikipedia.org/wiki/MiniMax_(company)` | ✅ Verified | 含abab 1-3早期版本、M系列完整时间线 |
| **百川智能** | `https://huggingface.co/baichuan-inc` | ✅ Verified | 25个模型，含M2/M3/Med系列新模型 |
| **01.AI 零一万物** | `https://huggingface.co/01-ai` | ✅ Verified | 28个模型，含Yi/Yi-1.5/Yi-Coder完整列表 |
| **商汤科技** | `https://huggingface.co/SenseNova` | ✅ Verified | 28个模型，含U1/SI系列参数确认 |
| **商汤科技** | `https://www.sensenova.cn/models` | ✅ Verified | 产品官网，含SenseNova 6.7 Flash-Lite/U1 Fast等最新模型 |
| **小米** | `https://huggingface.co/XiaoMi` | ❌ 401 Unauthorized | 需认证，无法访问 |
| **小米 MiMo** | `https://huggingface.co/XiaoMiMiMo` | ✅ Verified | 24个模型，含V2.5-Pro(1T)/Audio系列 |
| **小米 MiMo** | `https://mimo.xiaomi.com` | ✅ Verified | 产品官网，含准确发布日期（如V2.5-Pro: 2026年4月27日） |
| **DeepSeek** | `https://api-docs.deepseek.com/zh-cn/quick_start/pricing` | ✅ Verified | API定价页，含V4上下文1M/384K输出 |
| **月之暗面 Kimi** | `https://platform.kimi.com` | ✅ Verified | 平台首页，含K2.5/K2.6/K2.7系列、定价、模型描述 |
| **月之暗面 Kimi** | `https://platform.kimi.ai/docs/pricing/` | ✅ Verified | 各模型定价详情页（K2.7 Code/K2.6/K2.5/Moonshot V1） |
| **智谱AI GLM** | `https://docs.bigmodel.cn/cn/guide/start/model-overview` | ✅ Verified | 完整模型列表含GLM-5.2/4.7/视觉/视频/音频模型 |
| **智谱AI GLM发版日期** | `https://docs.z.ai/release-notes/new-released` | ✅ Verified | 精确发版日期（GLM-5.2:2026-06-16等） |
| **MiniMax** | `https://platform.minimaxi.com` | ✅ Verified | 平台首页，含M3定价、Speech-2.8、music-2.6 |
| **百川智能** | `https://platform.baichuan-ai.com/docs` | ✅ Verified | 平台文档，含M3Plus、医疗大模型 |
| **科大讯飞星火** | `https://www.xfyun.cn/doc/spark/Web.html` | ✅ Verified | API文档，含Spark Ultra/Max/Pro/Lite完整信息、上下文长度、domain参数 |
| **科大讯飞星火** | `https://xinghuo.xfyun.cn/sparkapi` | ⚠️ JS渲染 | 产品页，JS动态渲染无法抓取 |

### 备用数据源（当官方文档不可用时）

| 数据源 | URL | 适用场景 |
|--------|-----|----------|
| **HuggingFace** | `https://huggingface.co/{org}` | 开源模型列表、参数、架构 |
| **Wikipedia** | `https://en.wikipedia.org/wiki/{Model}` | 模型历史、发布时间、用户规模 |
| **GitHub** | `https://github.com/{org}/{repo}` | 模型详情、基准分数、训练数据 |

### 已验证的HuggingFace组织页面

| 厂商 | HuggingFace URL | 模型数量 | 信息丰富度 |
|------|-----------------|----------|-----------|
| DeepSeek | `https://huggingface.co/deepseek-ai` | 87 | ⭐⭐⭐ 含参数、架构 |
| 百川智能 | `https://huggingface.co/baichuan-inc` | 25 | ⭐⭐⭐ 含M2/M3/Med系列 |
| 01.AI | `https://huggingface.co/01-ai` | 28 | ⭐⭐⭐ 含完整Yi系列 |
| 商汤科技 | `https://huggingface.co/SenseNova` | 28 | ⭐⭐ 含U1/SI参数 |
| 腾讯混元 | `https://huggingface.co/Tencent-Hunyuan` | 25 | ⭐ 仅图像模型 |
| 字节跳动 | `https://huggingface.co/bytedance` | 53 | ⭐ 无Doubao系列 |
| 小米 | `https://huggingface.co/XiaoMi` | — | ❌ 401需认证 |

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

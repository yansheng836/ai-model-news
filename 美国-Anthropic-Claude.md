# Anthropic

## 公司简介

| 项目 | 内容 |
|------|------|
| 国家 | 美国 |
| 总部 | 旧金山 |
| 成立时间 | 2021年 |
| 创始人 | Dario Amodei、Daniela Amodei（前OpenAI成员） |
| 定位 | AI安全研究，打造安全可靠的AI系统 |

> **功能属性图例**：📝 纯文本 | 🌐 多模态（文本+图像） | 👁️ 视觉理解 | 🧠 推理 | 💻 代码 | 🖥️ 计算机操作

## 模型总览

| 版本 | 发布时间 | 功能属性 | 参数规模 | 上下文长度 | 主要特点 |
|------|----------|----------|----------|----------|----------|
| Claude Opus 5.5（claude-opus-5-5）🆕 | 2026年9月22日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M（128K输出） | 长时程智能体编码与知识工作模型，Adaptive Thinking始终开启（effort默认medium），Computer Use仅支持computer_toolset_20260801工具集，$4/$20 MTok（缓存读$0.20），知识截止2026年6月 |
| Claude Sonnet 5.5（claude-sonnet-5-5）🆕 | 2026年9月28日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M（128K输出） | 速度与智能最佳组合，Adaptive Thinking默认开启（effort默认high，between_tools可关闭前置思考），$2/$10 MTok（缓存读$0.10为Sonnet 5一半），知识截止2026年6月 |
| Claude Haiku 5.5（claude-haiku-5-5）🆕 | 2026年10月7日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M（128K输出） | 高并发低延迟任务（分类/抽取/路由/子代理），上下文从200K提升至1M、输出从64K提升至128K，分层定价（提示≤100K：$0.10/$0.50；>100K：$0.50/$2.50 MTok），知识截止2026年6月 |
| Claude Opus 5（claude-opus-5） | 2026年7月24日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M | 支持Adaptive Thinking（effort默认high），适用于复杂智能体编码和企业工作，$5/$25 MTok |
| Claude Opus 5 Fast（claude-opus-5-fast） | 2026年7月24日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M | Fast模式，2x定价$10/$50 MTok，相对延迟中等 |
| Claude 1.3 | 2023年中 | 📝 纯文本 | 未公开 | 100K | 上下文扩展 |
| Claude 1（claude-1.0） | 2023年3月 | 📝 纯文本 | 未公开 | 9K | 首个版本 |
| Claude 2.1（claude-2.1） | 2023年11月 | 📝 纯文本 | 未公开 | 200K | 幻觉减少，上下文翻倍 |
| Claude 2（claude-2.0） | 2023年7月 | 📝 纯文本 | 未公开 | 100K | 性能提升 |
| Claude 3 Haiku（claude-3-haiku-20240307） | 2024年3月4日 | 🌐 多模态 | 未公开 | 200K | 最快最经济，⚠️ 已停用（2026年4月20日） |
| Claude 3 Opus（claude-3-opus-20240229） | 2024年3月4日 | 🌐 多模态 | 未公开 | 200K | 最强能力版本 |
| Claude 3 Sonnet（claude-3-sonnet-20240229） | 2024年3月4日 | 🌐 多模态 | 未公开 | 200K | 速度与智能平衡 |
| Claude 3.5 Haiku（claude-3-5-haiku-20241022） | 2024年10月22日 | 🌐 多模态 | 未公开 | 200K | 轻量版升级，⚠️ 已停用（2026年2月19日） |
| Claude 3.5 Sonnet v2（claude-3-5-sonnet-20241022） | 2024年10月22日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 200K | 支持Computer Use |
| Claude 3.5 Sonnet（claude-3-5-sonnet-20240620） | 2024年6月20日 | 🌐 多模态 | 未公开 | 200K | 超越Claude 3 Opus |
| Claude 3.7 Sonnet（claude-3-7-sonnet-20250219） | 2025年2月19日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 200K | ⚠️ 已停用（2026年2月19日） |
| Claude 4 Opus（claude-opus-4-20250514） | 2025年5月14日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 200K | 最强下一代模型，⚠️ 已弃用（2026-06-15停用） |
| Claude 4 Sonnet（claude-sonnet-4-20250514） | 2025年5月14日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 200K | 编程能力大幅提升，⚠️ 已弃用（2026-06-15停用） |
| Claude Sonnet 5（claude-sonnet-5） | 2026年6月30日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M | 最强Sonnet级模型，支持Adaptive Thinking（可选低/中/高/最大），$2/$10 MTok |
| Claude Opus 5（claude-opus-5-20260723）🆕 | 2026年7月23日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M | 最新旗舰Opus模型，最强推理/编程/Agent能力，$5/$25 MTok |
| Claude Opus 5 Fast（claude-opus-5-fast-20260723）🆕 | 2026年7月23日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M | Opus 5快速推理版，2x定价，$10/$50 MTok |
| Claude Fable 5（claude-fable-5） | 2026年6月9日 | 🌐🖥️ 多模态+计算机操作 | 未公开（厂商未公开） | 1M | 最强广泛发布模型，Adaptive Thinking，$10/$50 MTok（⚠️ 6月12日曾短暂暂停，已恢复） |
| Claude Fable 5.1（claude-fable-5.1）🆕 | 2026年9月1日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M（128K输出） | Fable 5全面升级版，agent编码/长时程Agent工作流/知识工作显著提升，$10/$50 MTok（缓存读$0.25/写$12.5），知识截止2026年6月 |
| Claude Haiku 4.5（claude-haiku-4-5-20251001） | 2025年10月1日 | 🌐🧠 多模态+推理 | 未公开 | 200K | 支持Extended Thinking，知识截止2025年2月 |
| Claude Instant 1.2 | 2023年中 | 📝 纯文本 | 未公开 | 100K | 快速轻量版 |
| Claude Mythos 5.1（claude-mythos-5-1）🆕 | 2026年9月1日 | 🌐🖥️🧠 多模态+计算机操作+推理 | 未公开（厂商未公开） | 1M（128K输出） | 仅限通过Anthropic验证计划（如Cyber Verification Program）的组织使用，规格与定价同Fable 5.1（$10/$50 MTok，缓存读$0.25），知识截止2026年6月 |
| Claude Mythos 5（claude-mythos-5） | 2026年6月9日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 1M | 仅限Project Glasswing邀请用户（⚠️ 6月12日曾短暂暂停，已恢复） |
| Claude Mythos Preview（claude-mythos-preview） | 2025年 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 200K | 研究预览模型，⚠️ 已弃用（2026年6月9日，退役日期待公布），迁移至claude-mythos-5 |
| Claude Opus 4.1（claude-opus-4-1-20250805） | 2025年8月5日 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 200K | 支持Extended Thinking，$15/$75 MTok，⚠️ 已弃用（2026-06-05），⛔ **2026年8月5日已退役**，推荐替代claude-opus-4-8 |
| Claude Opus 4.5（claude-opus-4-5-20251101） | 2025年11月1日 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 200K | 支持Extended Thinking，知识截止2025年5月 |
| Claude Opus 4.6 Fast（claude-opus-4-6-fast） | 2025年底 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 1M | Opus 4.6快速推理版，$30/$150 MTok |
| Claude Opus 4.6（claude-opus-4-6） | 2025年底 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 1M | 支持Extended Thinking，上下文提升至1M |
| Claude Opus 4.7 Fast（claude-opus-4-7-fast） | 2026年初 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 1M | Opus 4.7快速推理版，$30/$150 MTok |
| Claude Opus 4.7（claude-opus-4-7） | 2026年初 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 1M | 支持Adaptive Thinking（取代Extended Thinking），新tokenizer |
| Claude Opus 4.8 Fast（claude-opus-4-8-fast） | 2026年5月28日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 1M | Opus 4.8快速推理版，$10/$50 MTok |
| Claude Opus 4.8（claude-opus-4-8） | 2026年5月28日 | 🌐🖥️ 多模态+计算机操作 | 未公开（厂商未公开） | 1M | 支持Adaptive Thinking，$5/$25 MTok，知识截止2026年1月 |
| Claude Sonnet 4.5（claude-sonnet-4-5-20250929） | 2025年9月29日 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 200K | 支持Extended Thinking，$3/$15 MTok，⚠️ 已弃用（2026年9月30日），⏰ 2026年11月30日退役，推荐替代claude-sonnet-5-5 |
| Claude Sonnet 4.6（claude-sonnet-4-6） | 2026年2月17日 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开（厂商未公开） | 1M | 支持Extended Thinking + Adaptive Thinking，$3/$15 MTok |

## 模型详细介绍

### Claude 2系列

Anthropic的第二代模型，支持100K（后扩展至200K）上下文窗口。以安全性和有用性著称，采用Constitutional AI（宪法AI）方法训练。Claude 2.1大幅减少了幻觉率，支持系统提示词。

### Claude 3系列

首个原生多模态Claude家族，发布时包含三个层级：
- **Haiku**：最快最便宜，适合高并发场景
- **Sonnet**：速度与智能的最佳平衡
- **Opus**：最强能力，适合复杂推理任务

支持图像理解，200K上下文窗口，在多项基准上与GPT-4竞争。

### Claude 3.5 Sonnet

在发布时超越了Claude 3 Opus的性能，同时成本仅为1/5。v2版本新增Computer Use能力，可以操作桌面应用程序（移动鼠标、点击按钮、输入文字等）。

### Claude 4系列（2025年5月）

下一代模型家族。Sonnet 4在编程能力上大幅提升，成为编程竞赛中的顶级模型。Opus 4是最强版本，在复杂推理、多步骤任务上表现出色。两个版本均支持Computer Use。

### Claude 4.x 系列（2025年下半年 - 2026年上半年）

快速迭代的模型家族：
- **Opus 4.1**（2025年8月）：首个定价$15/$75 MTok的高端模型，支持Extended Thinking
- **Haiku 4.5**（2025年10月）：新一代轻量模型，$1/$5 MTok，支持Extended Thinking
- **Sonnet 4.5**（2025年9月）：性能与成本的最佳平衡，$3/$15 MTok，⚠️ 已弃用（2026年9月30日），2026年11月30日退役，推荐替代Sonnet 5.5
- **Opus 4.5**（2025年11月）：知识截止2025年5月，支持Extended Thinking
- **Opus 4.6**（2025年底）：上下文窗口从200K提升至1M
- **Opus 4.7**（2026年初）：引入Adaptive Thinking（自适应思考，取代固定Extended Thinking），新tokenizer（相同文本产生约30%更多token）
- **Sonnet 4.6**（2026年）：同时支持Extended Thinking和Adaptive Thinking
- **Opus 4.8**（2026年）：当前最强Opus模型，知识截止2026年1月，effort参数默认为high
- **Opus 5**（2026年7月23日）：新一代最强旗舰Opus模型，最强推理/编程/Agent能力，$5/$25 MTok，1M上下文，128K最大输出。Fast版$10/$50 MTok

### Claude 5系列（2026年6月至今）

最新一代模型：
- **Claude Sonnet 5**（claude-sonnet-5）：2026年6月30日发布，最强Sonnet级模型，编程/Agent/专业工作前沿性能。1M上下文，128K最大输出，$2/$10 MTok。支持Adaptive Thinking，可选择性思考深度（低/中/高/最大）。Design Arena：Intelligence 53.4, Coding 71.5, Agentic 46.7。定价仅为Fable 5的1/5。
- **Claude Fable 5**（claude-fable-5）：2026年6月9日发布，Anthropic最强大的广泛发布模型。1M上下文，128K最大输出，$10/$50 MTok。支持Adaptive Thinking（始终开启），适用于最复杂的推理和长期自主代理工作。6月12日曾因安全审查短暂暂停，已恢复。
- **Claude Fable 5.1**（claude-fable-5.1）：2026年9月1日发布，Fable 5的全面升级版。最大增益在agent编码、长时程agent工作流与知识工作（长代码重构、前端与视觉工作等）。1M上下文，128K最大输出，$10/$50 MTok（缓存读$0.25/写$12.5）。由Anthropic、Azure、Amazon Bedrock、Google等多端点提供。
- **Claude Mythos 5**（claude-mythos-5）：同日发布，仅通过Project Glasswing提供给受邀客户，用于防御性网络安全工作流。6月12日曾短暂暂停，已恢复。
- **Claude Opus 5**（claude-opus-5-20260723）：2026年7月23日发布，最新旗舰模型。最强推理/代码/代理任务模型。1M上下文，128K最大输出，$5/$25 MTok。Fast版$10/$50 MTok。知识截止2026年4月。

### Claude Opus 5（2026年7月）

新一代旗舰Opus模型：
- **Claude Opus 5**（claude-opus-5）：2026年7月24日发布，Anthropic当前最强大的模型。1M上下文，128K最大输出，$5/$25 MTok。支持Adaptive Thinking（effort参数默认high），适用于复杂智能体编码、企业级工作负载和深度推理任务。知识截止2026年5月，相对延迟中等。
- **Claude Opus 5 Fast**（claude-opus-5-fast）：Opus 5的快速推理版，2x定价$10/$50 MTok，相同规格。

### Claude 5.5系列（2026年9月-10月）

2026年9月至10月发布的同代三档模型，取代Opus 5/Sonnet 5/Haiku 4.5成为当前主力阵容。三款模型均为1M上下文、128K最大输出、知识截止2026年6月、支持文本+图像输入，官方建议大多数工作负载从Claude Opus 5.5开始。

#### Claude Opus 5.5（claude-opus-5-5）

- **发布时间**：2026年9月22日
- **定位**：长时程智能体编码与知识工作（long-running agentic coding and knowledge work）
- **定价**：$4/$20 MTok（较Opus 5的$5/$25降价20%），5m缓存写$5、1h缓存写$8、缓存读$0.20（基础输入价0.05x）；Batch API 5折（$2/$10）；Fast模式（研究预览，仅Claude API）$8/$40 MTok
- **规格**：1M上下文，128K最大输出（Batch API beta下最高300K，需output-300k-2026-03-24 header），知识截止2026年6月，相对延迟中等
- **能力**：
  - Adaptive Thinking始终开启且**不可关闭**（`thinking: {type: "disabled"}`返回400），effort参数默认**medium**（Opus 5为high）
  - 支持per-message effort（beta）、mid-conversation system messages、task budgets、prompt caching（最小可缓存前缀512 token）、Files API、PDF、视觉、服务端/客户端工具
  - Computer Use在Claude API和Google Cloud上**仅支持computer_toolset_20260801工具集**（不再接受computer_20251124）
- **相对Opus 5的改进**：图表、示意图和截图阅读更精确（无需工具即可精确读取密集图表数值）；每turn思考量在同等effort下更多（xhigh/max最明显）；新增生物安全分类器（原有网络安全分类器之外）；强制工具使用（tool_choice any/tool）不再支持
- **适用场景**：复杂智能体编码、企业级工作负载、知识工作

#### Claude Sonnet 5.5（claude-sonnet-5-5）

- **发布时间**：2026年9月28日
- **定位**：速度与智能的最佳组合（the best combination of speed and intelligence）
- **定价**：$2/$10 MTok（与Sonnet 5持平），5m缓存写$2.50、1h缓存写$4、缓存读$0.10（Sonnet 5的一半）；Batch API 5折（$1/$5）
- **规格**：1M上下文，128K最大输出（Batch API beta下最高300K），知识截止2026年6月，相对延迟Fast
- **能力**：
  - Adaptive Thinking默认开启，effort默认**high**；新增**between_tools**最低思考档（可关闭前置思考，high及以下effort可用；xhigh/max下返回400）
  - 支持per-message effort（beta）、mid-conversation system messages、mid-conversation tool changes（beta）、prompt caching（最小可缓存前缀512 token）、Files API、PDF、视觉、服务端/客户端工具
  - Computer Use在Claude API和Google Cloud上仅支持computer_toolset_20260801工具集
- **相对Sonnet 5的改进**：effort级别重新校准（同级别思考量不同）；tokenizer与Sonnet 5相同（token数不变）；缓存读降价一半；强制工具使用不再支持；advisor工具部分旧模型配对不再支持（如Opus 4.8/4.7/Sonnet 5作advisor）
- **适用场景**：生产工作负载、多步骤工具调用、延迟敏感任务（低/中effort）

#### Claude Haiku 5.5（claude-haiku-5-5）

- **发布时间**：2026年10月7日
- **定位**：高并发低延迟任务（分类、抽取、路由、子代理）
- **定价**：分层定价（按提示长度）：提示≤100K token为$0.10/$0.50 MTok，>100K为$0.50/$2.50 MTok；缓存读$0.01（≤100K）/$0.05（>100K）；5m缓存写$0.125/$0.625、1h缓存写$0.20/$1；Batch API 5折（$0.05/$0.25与$0.25/$1.25）
- **规格**：1M上下文（从200K提升），128K最大输出（从64K提升），知识截止2026年6月，相对延迟Fastest
- **能力**：
  - 新增**Adaptive Thinking与effort参数**（默认开启，effort默认medium；high及以下effort仍可用`thinking: {type: "disabled"}`关闭）
  - 新增**Browser use工具**（Claude API和Google Cloud）
  - 支持prompt caching（最小可缓存前缀从4096降至512 token）、task budgets（beta）
  - manual extended thinking（budget_tokens）、采样参数（temperature/top_p/top_k）、assistant prefill均返回400错误
- **相对Haiku 4.5的改进**：上下文窗口提升5倍（200K→1M）、最大输出翻倍（64K→128K）；tokenizer与Claude 4.7及之后版本相同（同文本约多30% token）；思考块保留所有先前turn（Haiku 4.5仅保留最新turn）
- **适用场景**：高并发分类/抽取/路由、子代理任务、成本敏感的大规模处理

#### Claude Mythos 5.1（claude-mythos-5-1）

- **发布时间**：2026年9月1日
- **定位**：Claude Fable 5.1的安全验证版，仅限通过Anthropic验证计划（如Cyber Verification Program）的组织使用，规格与定价与Fable 5.1完全相同
- **定价**：$10/$50 MTok，5m缓存写$12.50、1h缓存写$20、缓存读$0.25（基础输入价0.025x）；Batch API 5折
- **规格**：1M上下文，128K最大输出，知识截止2026年6月，相对延迟较慢
- **能力**：Adaptive Thinking始终开启（effort默认high），支持文本+图像输入、视觉、工具使用
- **适用场景**：防御性网络安全工作流（需组织验证）

### Claude Opus 4.1 退役状态

⛔ Claude Opus 4.1（claude-opus-4-1-20250805）已于 **2026年8月5日退役**（2026年6月5日弃用），请求将失败。官方推荐替代方案为 **claude-opus-4-8**。

#### Fable 5 / Mythos 5 访问暂停事件（已恢复）

2026年6月12日，美国政府以国家安全为由，曾短暂暂停 Fable 5 和 Mythos 5 的访问。目前已恢复正常使用。

**事件详情：**
- **暂停时间**：2026年6月12日
- **恢复时间**：2026年6月15日前（Anthropic官方文档6月15日更新时已显示GA状态）
- **原因**：美国政府发现了一个潜在的越狱(jailbreak)方法，可能绕过模型的安全防护
- **当前状态**：✅ 已恢复，Claude Fable 5 在 Claude API、AWS Bedrock、Vertex AI、Microsoft Foundry 均可用

**参考链接：**
- 官方声明：https://anthropic.com/news/fable-mythos-access
- 状态页面：https://status.anthropic.com/

### 模型生命周期定义

- **活跃（Active）**：完全支持，推荐使用
- **遗留（Legacy）**：不再接收更新，未来可能弃用
- **已弃用（Deprecated）**：仍可正常使用，但不再推荐，有指定停用日期
- **已停用（Retired）**：不再可用，请求会失败

### API 参数弃用

⚠️ `temperature`、`top_p`、`top_k` 参数在 **Claude Opus 4.7 及更高版本**（包括 Opus 4.8、Fable 5）上已弃用。设置非默认值将返回 400 错误。建议使用提示工程引导模型行为。

### Extended Thinking vs Adaptive Thinking

- **Extended Thinking**（扩展思考）：Claude 4系列引入的功能，模型在回答前进行内部推理链思考。通过API参数控制是否开启。`budget_tokens`手动思考预算在5.5系列已完全移除（返回400）。
- **Adaptive Thinking**（自适应思考）：从Claude Opus 4.7开始引入，模型根据任务复杂度自动调整思考深度。比Extended Thinking更高效，不需要手动控制。
- **5.5系列的思考控制差异**：Opus 5.5思考始终开启且不可关闭（`disabled`/`enabled`均返回400）；Sonnet 5.5用`between_tools`关闭前置思考（effort为high及以下时可用，xhigh/max返回400）；Haiku 5.5在effort为high及以下时仍接受`disabled`。

### Constitutional AI（宪法AI）

Anthropic的核心训练方法，通过一组"宪法"原则指导模型行为，让模型自我评估和改进回答，减少有害输出。

### 定价体系（当前模型）

| 模型 | 输入价格 ($/MTok) | 输出价格 ($/MTok) |
|------|-------------------|-------------------|
| Claude Opus 5.5 | $4 | $20 |
| Claude Sonnet 5.5 | $2 | $10 |
| Claude Haiku 5.5 | $0.10（提示>100K时$0.50） | $0.50（提示>100K时$2.50） |
| Claude Fable 5.1 | $10 | $50 |
| Claude Opus 5 | $5 | $25 |
| Claude Opus 5 Fast | $10 | $50 |
| Claude Sonnet 5 | $2 | $10 |
| Claude Fable 5 | $10 | $50 |
| Claude Opus 4.8 | $5 | $25 |
| Claude Opus 4.5 | $5 | $25 |
| Claude Sonnet 4.5 | $3 | $15 |
| Claude Opus 4.8 Fast | $10 | $50 |
| Claude Opus 4.7 | $5 | $25 |
| Claude Opus 4.7 Fast | $30 | $150 |
| Claude Opus 4.6 | $5 | $25 |
| Claude Opus 4.6 Fast | $30 | $150 |
| Claude Sonnet 4.6 | $3 | $15 |
| Claude Haiku 4.5 | $1 | $5 |

### 模型命名规则

- Claude 4.6代及之后：无日期格式的模型ID（如 `claude-opus-4-6`），是固定快照
- Claude 4.6代之前：带日期的模型ID（如 `claude-3-5-sonnet-20241022`），alias指向最新版本
- 所有模型ID都是固定快照，alias在4.6代之前是便捷指针

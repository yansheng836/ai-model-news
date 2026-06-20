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
| Claude 1（claude-1.0） | 2023年3月 | 📝 纯文本 | 未公开 | 9K | 首个版本 |
| Claude 1.3 | 2023年中 | 📝 纯文本 | 未公开 | 100K | 上下文扩展 |
| Claude 2（claude-2.0） | 2023年7月 | 📝 纯文本 | 未公开 | 100K | 性能提升 |
| Claude 2.1（claude-2.1） | 2023年11月 | 📝 纯文本 | 未公开 | 200K | 幻觉减少，上下文翻倍 |
| Claude Instant 1.2 | 2023年中 | 📝 纯文本 | 未公开 | 100K | 快速轻量版 |
| Claude 3 Haiku（claude-3-haiku-20240307） | 2024年3月4日 | 🌐 多模态 | 未公开 | 200K | 最快最经济 |
| Claude 3 Sonnet（claude-3-sonnet-20240229） | 2024年3月4日 | 🌐 多模态 | 未公开 | 200K | 速度与智能平衡 |
| Claude 3 Opus（claude-3-opus-20240229） | 2024年3月4日 | 🌐 多模态 | 未公开 | 200K | 最强能力版本 |
| Claude 3.5 Sonnet（claude-3-5-sonnet-20240620） | 2024年6月20日 | 🌐 多模态 | 未公开 | 200K | 超越Claude 3 Opus |
| Claude 3.5 Sonnet v2（claude-3-5-sonnet-20241022） | 2024年10月22日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 200K | 支持Computer Use |
| Claude 3.5 Haiku（claude-3-5-haiku-20241022） | 2024年10月22日 | 🌐 多模态 | 未公开 | 200K | 轻量版升级 |
| Claude 4 Sonnet（claude-sonnet-4-20250514） | 2025年5月14日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 200K | 编程能力大幅提升 |
| Claude 4 Opus（claude-opus-4-20250514） | 2025年5月14日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 200K | 最强下一代模型 |
| Claude Haiku 4.5（claude-haiku-4-5-20251001） | 2025年10月15日 | 🌐🧠 多模态+推理 | 未公开 | 200K | 支持Extended Thinking，知识截止2025年2月 |
| Claude Opus 4.1（claude-opus-4-1-20250805） | 2025年8月5日 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 200K | 支持Extended Thinking，定价$15/$75 MTok |
| Claude Sonnet 4.5（claude-sonnet-4-5-20250929） | 2025年9月29日 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 200K | 支持Extended Thinking，$3/$15 MTok |
| Claude Opus 4.5（claude-opus-4-5-20251101） | 2025年11月1日 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 200K | 支持Extended Thinking，知识截止2025年5月 |
| Claude Opus 4.6（claude-opus-4-6） | 2025年底 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 1M | 支持Extended Thinking，上下文提升至1M |
| Claude Opus 4.7（claude-opus-4-7） | 2026年初 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 1M | 支持Adaptive Thinking（取代Extended Thinking），新tokenizer |
| Claude Sonnet 4.6（claude-sonnet-4-6） | 2026年2月17日 | 🌐🧠🖥️ 多模态+推理+计算机操作 | 未公开 | 1M | 支持Extended Thinking + Adaptive Thinking，$3/$15 MTok |
| Claude Opus 4.8（claude-opus-4-8） | 2026年5月28日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 1M | 支持Adaptive Thinking，$5/$25 MTok，知识截止2026年1月 |
| Claude Fable 5（claude-fable-5） | 2026年6月9日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 1M | 最强广泛发布模型，Adaptive Thinking，$10/$50 MTok，**⚠️ 2026年6月12日起暂停访问** |
| Claude Mythos 5（claude-mythos-5） | 2026年6月9日 | 🌐🖥️ 多模态+计算机操作 | 未公开 | 1M | 仅限Project Glasswing邀请用户，**⚠️ 2026年6月12日起暂停访问** |

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
- **Sonnet 4.5**（2025年9月）：性能与成本的最佳平衡，$3/$15 MTok
- **Opus 4.5**（2025年11月）：知识截止2025年5月，支持Extended Thinking
- **Opus 4.6**（2025年底）：上下文窗口从200K提升至1M
- **Opus 4.7**（2026年初）：引入Adaptive Thinking（自适应思考，取代固定Extended Thinking），新tokenizer（相同文本产生约30%更多token）
- **Sonnet 4.6**（2026年）：同时支持Extended Thinking和Adaptive Thinking
- **Opus 4.8**（2026年）：当前最强Opus模型，知识截止2026年1月，effort参数默认为high

### Claude 5系列（2026年6月）
最新一代模型：
- **Claude Fable 5**（claude-fable-5）：2026年6月9日发布，Anthropic最强大的广泛发布模型。1M上下文，128K最大输出，$10/$50 MTok。支持Adaptive Thinking（始终开启），适用于最复杂的推理和长期自主代理工作。
- **Claude Mythos 5**（claude-mythos-5）：同日发布，仅通过Project Glasswing提供给受邀客户，用于防御性网络安全工作流。

### ⚠️ Fable 5 和 Mythos 5 暂停事件（2026年6月12日）
**状态：已暂停访问（Suspended）**

2026年6月12日，美国政府以国家安全为由，发布出口管制指令，要求暂停所有外国人对 Fable 5 和 Mythos 5 的访问。Anthropic 已 comply 并停止了这两个模型的服务。

**事件详情：**
- **暂停时间**：2026年6月12日 17:21 (ET)
- **原因**：美国政府发现了一个潜在的越狱(jailbreak)方法，可能绕过模型的安全防护
- **影响范围**：所有用户（包括美国境内和境外的外国人）
- **其他模型**：不受影响，Opus 4.8、Sonnet 4.6、Haiku 4.5 等继续正常服务

**Anthropic 的立场：**
- 已与美国政府、英国 AISI 等机构进行了数千小时的红队测试
- 未发现通用越狱(universal jailbreak)方法
- 政府提供的越狱示例是窄范围的(non-universal)，其他模型（如 GPT-5.5）也能实现类似功能
- 不认同暂停决定，认为这将阻碍所有前沿模型的部署
- 正在努力恢复访问

**参考链接：**
- 官方声明：https://anthropic.com/news/fable-mythos-access
- 状态页面：https://status.anthropic.com/

### Extended Thinking vs Adaptive Thinking
- **Extended Thinking**（扩展思考）：Claude 4系列引入的功能，模型在回答前进行内部推理链思考。通过API参数控制是否开启。
- **Adaptive Thinking**（自适应思考）：从Claude Opus 4.7开始引入，模型根据任务复杂度自动调整思考深度，始终开启。比Extended Thinking更高效，不需要手动控制。

### Constitutional AI（宪法AI）
Anthropic的核心训练方法，通过一组"宪法"原则指导模型行为，让模型自我评估和改进回答，减少有害输出。

### 定价体系（当前模型）

| 模型 | 输入价格 ($/MTok) | 输出价格 ($/MTok) |
|------|-------------------|-------------------|
| Claude Fable 5 | $10 | $50 |
| Claude Opus 4.8 | $5 | $25 |
| Claude Opus 4.7 | $5 | $25 |
| Claude Opus 4.6 | $5 | $25 |
| Claude Sonnet 4.6 | $3 | $15 |
| Claude Haiku 4.5 | $1 | $5 |

### 模型命名规则
- Claude 4.6代及之后：无日期格式的模型ID（如 `claude-opus-4-6`），是固定快照
- Claude 4.6代之前：带日期的模型ID（如 `claude-3-5-sonnet-20241022`），alias指向最新版本
- 所有模型ID都是固定快照，alias在4.6代之前是便捷指针

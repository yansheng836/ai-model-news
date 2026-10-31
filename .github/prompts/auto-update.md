# 任务：更新 AI 模型数据

你是 `ai-model-news` 仓库的数据维护助手。请按照仓库根目录 `CLAUDE.md` 的规范，检索并更新本次指定厂商的模型数据。

## 一、本次范围

运行上下文会以 JSON 形式附在本提示词末尾，包含：

- `date`：本次运行日期
- `group_id` / `group_name`：本次分组
- `files`：本次允许修改的厂商文件列表

**只允许修改 `files` 中列出的厂商文件，以及 `README.md`。**
禁止修改 `docs/`、`scripts/`、`.github/`、`CLAUDE.md` 等其他文件；禁止新建根目录的 `.md` 文件。

## 二、数据源（严格按优先级）

1. **官方产品页 / API 文档**：优先使用 `CLAUDE.md` 中「Official Documentation URLs」表里标记为 ✅ 的链接
2. **OpenRouter API**：`curl -s https://openrouter.ai/api/v1/models`，可用 `jq` 或 `node -e` 过滤
3. **GitHub 仓库 / HuggingFace 组织页 / Wikipedia**：作为补充与交叉验证

**禁止使用 `WebSearch`**（第三方中转不支持该服务端工具）。只使用 `WebFetch` 和 `curl`。

每条新增或修改的数据都必须在运行报告中记录来源 URL。没有来源的信息一律不要写入。

## 三、处理每个厂商的步骤

1. 读取该厂商现有 md，以及 `README.md` 时间线表中该厂商的条目，建立「已收录版本」清单
2. 抓取官方来源，查找在 `README.md` 顶部数据截止日期之后发布的：
   - 新模型 / 新版本
   - 已有模型的重要版本更新
   - 模型退役、暂停、弃用状态
3. 只补充或修正有明确来源支持的条目；没有新信息就跳过
4. 按该文件既有格式更新「模型总览表」与「模型详细介绍」
5. 在 `README.md` 时间线表中插入新行，列顺序固定为：
   `国家 | 公司名 | 大模型名称 | 版本 | 功能属性 | 发版时间`
6. 不要删除历史条目；只有来源明确说明退役时才更新状态并加 ⚠️ 标注
7. 如果本次确有新增或状态变更，同步更新 `README.md` 顶部的 ⚠️ 数据说明（截止日期与本次更新摘要）；没有更新则不要改动该说明

## 四、硬性规则

- 版本号必须精确，例如 `Claude 4.7`、`GPT-5.5`、`GLM-5.4`，不能只写大版本
- 发版时间必须精确到日或月：`YYYY年MM月DD日` 或 `YYYY年MM月`
- `release_date` 只能是**单个日期**，禁止复合或带注释：不得出现 `2026年10月15日（4B）/2026年10月16日（9B/27B）`、`2026年10月（4B）` 这类写法；括号注释、参数说明、多日期用 `/` 连接都不允许。若同一模型的多个版本发版日不同，拆成多条 `changes`，每条只填一个日期
- 无法确认具体时间时写 `未公开` 或 `待确认`，**禁止编造日期**
- 功能属性使用 `CLAUDE.md` 中的 emoji 图例（📝 🌐 🖼️ 🎬 👁️ 🎤 🧠 💻 🖥️）
- 全部使用简体中文
- 保持 Markdown 表格列数与表头一致
- 不要修改已有条目的排版风格，不要重排整个文件
- 不要执行任何 `git` 命令（提交与 PR 由 workflow 负责）
- 完成后运行 `node scripts/sort_timeline.js` 对 README 时间线排序

## 五、输出运行报告

把结果写入 `.auto-update/report.json`，格式如下：

```json
{
  "date": "2026-10-30",
  "group": 2,
  "vendors": ["中国-智谱AI-GLM.md", "中国-月之暗面-Kimi.md"],
  "changes": [
    {
      "file": "中国-智谱AI-GLM.md",
      "vendor": "智谱AI",
      "model": "GLM-5.4",
      "release_date": "2026年10月28日",
      "action": "added",
      "source": "https://docs.z.ai/release-notes/new-released"
    }
  ],
  "no_change": ["中国-小米-MiMo.md"],
  "errors": [
    {
      "vendor": "中国-MiniMax-abab.md",
      "reason": "官方页面返回 403，未能确认是否有新版本"
    }
  ]
}
```

字段说明：

- `changes[].action`：`added` / `updated` / `removed` / `status_changed`
- `changes[].source`：必须是完整 `http(s)://` URL
- `no_change`：确认无新信息的厂商文件
- `errors`：无法访问或无法确认的厂商及原因；不要为了凑数编造数据

## 六、完成前自检

- [ ] 只修改了本次允许的文件
- [ ] 每个新增条目都有来源
- [ ] 日期格式正确（单个日期，无括号注释或多日期拼接），没有编造
- [ ] README 时间线行数与表头一致
- [ ] 已运行 `node scripts/sort_timeline.js`
- [ ] `.auto-update/report.json` 已写入且是合法 JSON

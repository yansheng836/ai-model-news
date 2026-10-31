#!/usr/bin/env node
/**
 * 校验自动更新运行结果，决定是否允许创建 PR。
 *
 * 用法：
 *   node scripts/ci/validate_run.js \
 *     --report .auto-update/report.json \
 *     --context .auto-update/context.json \
 *     --config .github/auto-update.config.json
 *
 * 校验项：
 *   - 运行报告存在且结构合法
 *   - 每条变更都有来源 URL、日期精确到月/日
 *   - 只修改了本组厂商文件与 README.md
 *   - 没有新增未跟踪文件
 *   - 变更文件数与 README 新增行数未超限
 *   - README 新增行没有重复
 */

const fs = require('fs');
const { execFileSync } = require('child_process');

const DATE_RE = /^\d{4}年(0?[1-9]|1[0-2])月((0?[1-9]|[12]\d|3[01])日)?$/;
const DATE_PLACEHOLDERS = new Set(['未公开', '待确认']);
const ACTIONS = new Set(['added', 'updated', 'removed', 'status_changed']);
const COUNTRY_ROW_RE = /^\+\|\s*(中国|美国|法国)\s*\|/;

function parseArgs(argv) {
  const args = {
    report: '.auto-update/report.json',
    context: '.auto-update/context.json',
    config: '.github/auto-update.config.json',
  };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--report') args.report = argv[++i];
    else if (argv[i] === '--context') args.context = argv[++i];
    else if (argv[i] === '--config') args.config = argv[++i];
  }
  return args;
}

function readJson(file, label) {
  if (!fs.existsSync(file)) {
    throw new Error(`${label}不存在：${file}`);
  }
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    throw new Error(`${label}不是合法 JSON：${file}（${e.message}）`);
  }
}

function git(args) {
  // core.quotepath=false 保证非 ASCII 文件名不被转义（CI 全新克隆默认 true，
  // 会把「中国-…」转成 "\344\270\255…"，导致与真实文件名比对失败）
  return execFileSync('git', ['-c', 'core.quotepath=false', ...args], { encoding: 'utf8' });
}

function rowKey(row) {
  const cells = row.split('|').map((c) => c.trim());
  return cells.slice(1, 5).join('|');
}

function checkReport(report, context, limits) {
  const errors = [];
  const allowedFiles = new Set([...context.files, 'README.md']);

  if (!report || typeof report !== 'object') return ['报告内容不是对象'];
  if (!Array.isArray(report.vendors)) errors.push('report.vendors 必须是数组');
  if (!Array.isArray(report.changes)) errors.push('report.changes 必须是数组');
  if (!Array.isArray(report.errors)) errors.push('report.errors 必须是数组');
  if (!Array.isArray(report.no_change)) errors.push('report.no_change 必须是数组');
  if (String(report.group) !== String(context.group_id)) {
    errors.push(`report.group=${report.group} 与本次分组 ${context.group_id} 不一致`);
  }
  if (errors.length > 0) return errors;

  for (const file of report.vendors) {
    if (!allowedFiles.has(file)) errors.push(`report.vendors 包含范围外文件：${file}`);
  }

  for (const [i, change] of report.changes.entries()) {
    const prefix = `changes[${i}]`;
    if (!change || typeof change !== 'object') {
      errors.push(`${prefix} 不是对象`);
      continue;
    }
    if (!change.file || !allowedFiles.has(change.file) || change.file === 'README.md') {
      errors.push(`${prefix}.file 不在本次厂商范围内：${change.file}`);
    }
    if (!change.model || typeof change.model !== 'string') errors.push(`${prefix}.model 为空`);
    if (!ACTIONS.has(change.action)) errors.push(`${prefix}.action 无效：${change.action}`);
    if (!change.release_date || !(DATE_RE.test(change.release_date) || DATE_PLACEHOLDERS.has(change.release_date))) {
      errors.push(`${prefix}.release_date 不精确或格式错误：${change.release_date}`);
    }
    if (!/^https?:\/\/\S+$/.test(change.source || '')) {
      errors.push(`${prefix}.source 必须是完整 http(s) URL`);
    }
  }

  return errors;
}

function checkGit(context, limits) {
  const errors = [];
  const allowedFiles = new Set([...context.files, 'README.md']);

  const changed = git(['diff', '--name-only', 'HEAD'])
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
  const untracked = git(['ls-files', '--others', '--exclude-standard'])
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);

  for (const file of changed) {
    if (!allowedFiles.has(file)) errors.push(`修改了范围外文件：${file}`);
  }
  if (untracked.length > 0) {
    errors.push(`出现未跟踪文件（禁止新建文件）：${untracked.join('、')}`);
  }
  if (changed.length > limits.max_changed_files) {
    errors.push(`变更文件数 ${changed.length} 超过上限 ${limits.max_changed_files}`);
  }

  return { errors, changed, untracked };
}

function checkReadmeRows(limits) {
  const errors = [];
  let diff;
  try {
    diff = git(['diff', '-U0', '--', 'README.md']);
  } catch {
    return { errors, addedRows: 0 };
  }

  const diffLines = diff.split('\n');
  const addedRows = diffLines
    .filter((line) => line.startsWith('+') && !line.startsWith('+++') && COUNTRY_ROW_RE.test(line))
    .map((line) => line.slice(1).trim());

  // 被删除的行的 rowKey：如果同一 key 既被删除又被添加，说明是「修改」而非「重复新增」
  const removedKeys = new Set(
    diffLines
      .filter((line) => line.startsWith('-') && !line.startsWith('---') && COUNTRY_ROW_RE.test(line))
      .map((line) => rowKey(line.slice(1).trim())),
  );

  // 纯删除：key 被删但没有对应的 + 行（不是修改，是直接删行）
  const addedKeys = new Set(addedRows.map(rowKey));
  for (const key of removedKeys) {
    if (!addedKeys.has(key)) {
      errors.push(`README 删除了已有行（禁止删除，只能新增或就地修改）：${key}`);
    }
  }

  if (addedRows.length > limits.max_added_rows) {
    errors.push(`README 新增 ${addedRows.length} 行，超过上限 ${limits.max_added_rows}`);
  }

  let baseRows = [];
  try {
    baseRows = git(['show', 'HEAD:README.md'])
      .split('\n')
      .filter((line) => COUNTRY_ROW_RE.test('+' + line))
      .map((line) => line.trim());
  } catch {
    baseRows = [];
  }

  const existing = new Set(baseRows.map(rowKey));
  const seen = new Set();
  for (const row of addedRows) {
    const key = rowKey(row);
    // 如果该 key 同时出现在删除行中，说明是就地修改，不算重复
    if (!removedKeys.has(key) && existing.has(key)) {
      errors.push(`README 新增行与已有条目重复：${key}`);
    }
    if (seen.has(key)) errors.push(`README 新增行内部重复：${key}`);
    seen.add(key);
  }

  return { errors, addedRows: addedRows.length, rows: addedRows };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const allErrors = [];

  let context;
  let config;
  let report;
  try {
    context = readJson(args.context, '运行上下文');
    config = readJson(args.config, '配置文件');
    report = readJson(args.report, '运行报告');
  } catch (e) {
    console.error(`❌ ${e.message}`);
    process.exit(1);
  }

  const limits = config.limits || { max_changed_files: 8, max_added_rows: 30 };
  allErrors.push(...checkReport(report, context, limits));

  const gitResult = checkGit(context, limits);
  allErrors.push(...gitResult.errors);

  const readmeResult = checkReadmeRows(limits);
  allErrors.push(...readmeResult.errors);

  const summary = [
    `分组：${context.group_id} - ${context.group_name}`,
    `厂商文件：${context.files.length} 个`,
    `变更条目：${report.changes ? report.changes.length : 0} 条`,
    `README 新增行：${readmeResult.addedRows} 行`,
    `修改文件：${gitResult.changed.length} 个`,
    `失败厂商：${report.errors ? report.errors.length : 0} 个`,
  ];

  if (process.env.GITHUB_STEP_SUMMARY) {
    fs.appendFileSync(
      process.env.GITHUB_STEP_SUMMARY,
      ['## 自动更新校验', '', ...summary.map((s) => `- ${s}`), ''].join('\n'),
    );
  }

  summary.forEach((s) => console.log(s));

  if (allErrors.length > 0) {
    console.error('\n❌ 校验失败：');
    allErrors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }

  console.log('\n✅ 校验通过');
}

main();

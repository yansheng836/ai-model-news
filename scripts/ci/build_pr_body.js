#!/usr/bin/env node
/**
 * 根据运行报告生成 PR 描述。
 *
 * 用法：
 *   node scripts/ci/build_pr_body.js \
 *     --report .auto-update/report.json \
 *     --context .auto-update/context.json \
 *     --output "$RUNNER_TEMP/pr-body.md"
 */

const fs = require('fs');
const { execFileSync } = require('child_process');

function parseArgs(argv) {
  const args = {
    report: '.auto-update/report.json',
    context: '.auto-update/context.json',
    output: null,
  };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--report') args.report = argv[++i];
    else if (argv[i] === '--context') args.context = argv[++i];
    else if (argv[i] === '--output') args.output = argv[++i];
  }
  return args;
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function cell(value) {
  return String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\r?\n/g, ' ')
    .trim();
}

function diffStat(ref) {
  try {
    return execFileSync('git', ['diff', '--stat', ref], { encoding: 'utf8' }).trim();
  } catch {
    return '';
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const report = readJson(args.report);
  const context = readJson(args.context);

  const changes = Array.isArray(report.changes) ? report.changes : [];
  const errors = Array.isArray(report.errors) ? report.errors : [];
  const noChange = Array.isArray(report.no_change) ? report.no_change : [];
  const runUrl =
    process.env.GITHUB_SERVER_URL && process.env.GITHUB_REPOSITORY && process.env.GITHUB_RUN_ID
      ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
      : '';

  const lines = [];
  lines.push(`## 自动更新：组 ${context.group_id} - ${context.group_name}`);
  lines.push('');
  lines.push(`- 运行日期：${context.date}`);
  lines.push(`- 厂商范围：${context.files.length} 个文件`);
  lines.push(`- 变更条目：${changes.length} 条`);
  lines.push(`- 无变化厂商：${noChange.length} 个`);
  lines.push(`- 失败厂商：${errors.length} 个`);
  if (runUrl) lines.push(`- 运行日志：${runUrl}`);
  lines.push('');

  if (changes.length > 0) {
    lines.push('### 变更明细');
    lines.push('');
    lines.push('| 厂商文件 | 模型 | 发版时间 | 动作 | 来源 |');
    lines.push('| -------- | ---- | -------- | ---- | ---- |');
    for (const c of changes) {
      const source = /^https?:\/\//.test(c.source || '') ? `[来源](${c.source})` : cell(c.source);
      lines.push(
        `| ${cell(c.file)} | ${cell(c.model)} | ${cell(c.release_date)} | ${cell(c.action)} | ${source} |`,
      );
    }
    lines.push('');
  } else {
    lines.push('本次未发现可确认的新模型或版本变更。');
    lines.push('');
  }

  if (errors.length > 0) {
    lines.push('### 未能确认的厂商');
    lines.push('');
    lines.push('| 厂商文件 | 原因 |');
    lines.push('| -------- | ---- |');
    for (const e of errors) {
      lines.push(`| ${cell(e.vendor)} | ${cell(e.reason)} |`);
    }
    lines.push('');
  }

  if (noChange.length > 0) {
    lines.push('### 无变化厂商');
    lines.push('');
    noChange.forEach((f) => lines.push(`- ${cell(f)}`));
    lines.push('');
  }

  const currentStat = diffStat('HEAD');
  const cumulativeStat = diffStat('origin/main');
  if (currentStat) {
    lines.push('### 本次运行 Diff');
    lines.push('');
    lines.push('```text');
    lines.push(currentStat);
    lines.push('```');
    lines.push('');
  }
  if (cumulativeStat && cumulativeStat !== currentStat) {
    lines.push('### PR 累计 Diff（含之前未合并的运行）');
    lines.push('');
    lines.push('```text');
    lines.push(cumulativeStat);
    lines.push('```');
    lines.push('');
  }

  lines.push('### 审核清单');
  lines.push('');
  lines.push('- [ ] 新增条目的版本号与发版时间有来源支撑');
  lines.push('- [ ] README 时间线顺序正确');
  lines.push('- [ ] 没有编造或重复的数据');
  lines.push('- [ ] 失败厂商是否需要人工补充');
  lines.push('');

  const body = lines.join('\n');
  if (args.output) {
    fs.writeFileSync(args.output, body);
    console.log(`PR 描述已写入：${args.output}`);
  } else {
    process.stdout.write(body);
  }
}

main();

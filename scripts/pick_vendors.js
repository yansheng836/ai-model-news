#!/usr/bin/env node
/**
 * 按日期轮换选择当天要更新的厂商分组。
 *
 * 用法：
 *   node scripts/pick_vendors.js                  # 按今天（Asia/Shanghai）自动选组
 *   node scripts/pick_vendors.js --check          # 校验分组覆盖是否完整
 *   node scripts/pick_vendors.js --group 2        # 指定分组
 *   node scripts/pick_vendors.js --group all      # 全量厂商
 *   node scripts/pick_vendors.js --group 法国-Mistral-Mistral.md   # 只处理单个厂商
 *   node scripts/pick_vendors.js --date 2026-10-30 --json
 *
 * 选项：
 *   --config <path>        分组配置，默认 scripts/vendors.json
 *   --context <path>       输出运行上下文 JSON，默认 .auto-update/context.json
 *   --no-context           不写上下文文件
 *   --github-output        追加 group_id / group_name / files_json 到 $GITHUB_OUTPUT
 *   --json                 以 JSON 输出到 stdout
 *
 * 分组规则：group = (年积日 - 1) % 分组数。
 */

const fs = require('fs');
const path = require('path');

const COMPANY_FILE_RE = /^(中国|美国|法国)-.+\.md$/;

function parseArgs(argv) {
  const args = {
    config: 'scripts/vendors.json',
    context: '.auto-update/context.json',
    group: 'auto',
    date: null,
    check: false,
    json: false,
    githubOutput: false,
    noContext: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--check') args.check = true;
    else if (a === '--json') args.json = true;
    else if (a === '--github-output') args.githubOutput = true;
    else if (a === '--no-context') args.noContext = true;
    else if (a === '--config') args.config = argv[++i];
    else if (a === '--context') args.context = argv[++i];
    else if (a === '--group') args.group = argv[++i];
    else if (a === '--date') args.date = argv[++i];
    else if (a === '-h' || a === '--help') {
      console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]);
      process.exit(0);
    } else {
      console.error(`未知参数：${a}`);
      process.exit(2);
    }
  }
  return args;
}

function loadConfig(configPath) {
  if (!fs.existsSync(configPath)) {
    console.error(`分组配置不存在：${configPath}`);
    process.exit(1);
  }
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  if (!Array.isArray(config.groups) || config.groups.length === 0) {
    console.error('分组配置缺少非空 groups 数组');
    process.exit(1);
  }
  return config;
}

/** 返回指定时区的 YYYY-MM-DD */
function todayInZone(timeZone) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());
  const p = Object.fromEntries(parts.map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}`;
}

function dayOfYear(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const start = Date.UTC(y, 0, 1);
  const cur = Date.UTC(y, m - 1, d);
  return Math.floor((cur - start) / 86400000) + 1;
}

function validateDate(dateStr) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}

function collectCompanyFiles(root) {
  return fs
    .readdirSync(root)
    .filter((f) => COMPANY_FILE_RE.test(f) && fs.statSync(path.join(root, f)).isFile())
    .sort();
}

function checkCoverage(config, root) {
  const errors = [];
  const seen = new Map();
  const onDisk = collectCompanyFiles(root);

  for (const group of config.groups) {
    if (!Number.isInteger(group.id)) errors.push(`分组缺少整数 id：${JSON.stringify(group)}`);
    if (!group.name) errors.push(`分组 ${group.id} 缺少 name`);
    if (!Array.isArray(group.files) || group.files.length === 0) {
      errors.push(`分组 ${group.id} 的 files 为空`);
      continue;
    }
    for (const file of group.files) {
      if (seen.has(file)) {
        errors.push(`文件被多个分组覆盖：${file}（分组 ${seen.get(file)} 与 ${group.id}）`);
      } else {
        seen.set(file, group.id);
      }
      if (!fs.existsSync(path.join(root, file))) {
        errors.push(`分组 ${group.id} 引用了不存在的文件：${file}`);
      }
    }
  }

  const missing = onDisk.filter((f) => !seen.has(f));
  if (missing.length > 0) errors.push(`以下厂商文件未被分组覆盖：${missing.join('、')}`);

  const stale = [...seen.keys()].filter((f) => !onDisk.includes(f));
  if (stale.length > 0) errors.push(`分组中存在已删除的文件：${stale.join('、')}`);

  return { errors, onDisk, seen };
}

function selectSingleVendor(config, file) {
  if (!config.groups.some((g) => g.files.includes(file))) {
    console.error(`不是分组内的厂商文件：${file}`);
    console.error(`可用：0-${config.groups.length - 1}、auto、all 或分组内文件名`);
    process.exit(2);
  }
  return { groupId: 'single', groupName: file, files: [file] };
}

function selectGroup(config, groupArg, dateStr) {
  if (groupArg === 'all') {
    const files = [...new Set(config.groups.flatMap((g) => g.files))];
    return { groupId: 'all', groupName: '全量', files };
  }

  if (groupArg.endsWith('.md')) {
    return selectSingleVendor(config, groupArg);
  }

  let index;
  if (groupArg === 'auto') {
    index = (dayOfYear(dateStr) - 1) % config.groups.length;
  } else {
    const wanted = Number(groupArg);
    index = config.groups.findIndex((g) => g.id === wanted);
    if (index === -1) {
      console.error(`找不到分组：${groupArg}（可用：0-${config.groups.length - 1}、auto、all）`);
      process.exit(2);
    }
  }

  const group = config.groups[index];
  return { groupId: group.id, groupName: group.name, files: group.files };
}

function writeContext(contextPath, context) {
  fs.mkdirSync(path.dirname(contextPath), { recursive: true });
  fs.writeFileSync(contextPath, JSON.stringify(context, null, 2) + '\n');
}

function writeGithubOutput(context) {
  const out = process.env.GITHUB_OUTPUT;
  if (!out) return;
  fs.appendFileSync(
    out,
    [
      `group_id=${context.group_id}`,
      `group_name=${context.group_name}`,
      `date=${context.date}`,
      `files_json=${JSON.stringify(context.files)}`,
      '',
    ].join('\n'),
  );
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const config = loadConfig(args.config);
  const timezone = config.timezone || 'Asia/Shanghai';
  const dateStr = args.date || todayInZone(timezone);

  if (!validateDate(dateStr)) {
    console.error(`日期格式无效：${dateStr}（应为 YYYY-MM-DD）`);
    process.exit(2);
  }

  if (args.check) {
    const { errors, onDisk } = checkCoverage(config, process.cwd());
    const total = config.groups.reduce((n, g) => n + g.files.length, 0);
    console.log(`厂商文件 ${onDisk.length} 个，分组条目 ${total} 条，共 ${config.groups.length} 组`);
    for (const g of config.groups) {
      console.log(`  组 ${g.id} ${g.name}：${g.files.length} 家`);
    }
    if (errors.length > 0) {
      console.error('\n❌ 分组校验失败：');
      errors.forEach((e) => console.error(`  - ${e}`));
      process.exit(1);
    }
    console.log('✅ 分组覆盖完整，无重复、无缺失');
    return;
  }

  const picked = selectGroup(config, args.group, dateStr);
  const context = {
    date: dateStr,
    day_of_year: dayOfYear(dateStr),
    total_groups: config.groups.length,
    group_id: picked.groupId,
    group_name: picked.groupName,
    files: picked.files,
    generated_at: new Date().toISOString(),
  };

  if (!args.noContext) writeContext(args.context, context);
  if (args.githubOutput) writeGithubOutput(context);

  if (args.json) {
    console.log(JSON.stringify(context, null, 2));
    return;
  }

  console.log(`📅 日期：${dateStr}（第 ${context.day_of_year} 天，${timezone}）`);
  console.log(`📦 分组：${context.group_id} - ${context.group_name}（共 ${context.files.length} 家）`);
  context.files.forEach((f) => console.log(`   - ${f}`));
}

main();

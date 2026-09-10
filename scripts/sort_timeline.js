#!/usr/bin/env node
/**
 * README.md 大模型发版时间线排序脚本
 *
 * 将 README.md 中「大模型发版时间线总览」表格的所有数据行按发版时间
 * 倒序排列（最新在上、最旧在下）。
 *
 * 用法：
 *   node scripts/sort_timeline.js              # 原地排序 README.md
 *   node scripts/sort_timeline.js <file>       # 排序指定文件
 *   node scripts/sort_timeline.js --check      # 仅校验顺序，不修改文件
 *
 * 说明：
 * - 自动定位表格数据行（以 `| 中国 |` / `| 美国 |` / `| 法国 |` 开头）
 * - 支持混合日期格式（见 parseDate）：
 *   精确日期 2026年9月7日 / 年月 2026年9月 / 仅年份 2026年 /
 *   年份区间 2025-2026年 / 2026年初 / 未公开 / 待确认
 * - 排序规则：年→月→日倒序；同日期时精确日期优先于模糊日期；
 *   模糊日期（仅年份/区间/年初）排在同年的精确日期之后；
 *   「未公开/待确认」排在最后。
 * - 幂等：对已排序的表格再次运行不会改变顺序。
 */

const fs = require('fs');

// ---------- 日期解析 ----------

/**
 * 将日期字符串解析为排序元组 [year, month, day, precise]。
 * precise: 2=精确日期 | 1=年月 | 0=模糊（仅年份/区间/年初/未知）
 */
function parseDate(raw) {
  let s = raw.replace(/[（(][^）)]*[）)]/g, ' ').trim();

  // 精确日期：2026年9月7日
  let m = s.match(/(20\d{2})年\s*(\d{1,2})月\s*(\d{1,2})日/);
  if (m) return [+m[1], +m[2], +m[3], 2];

  // 年月：2026年9月（无日）
  m = s.match(/(20\d{2})年\s*(\d{1,2})月(?!.*日)/);
  if (m) return [+m[1], +m[2], 15, 1];

  // 2026年初
  m = s.match(/(20\d{2})年初/);
  if (m) return [+m[1], 2, 15, 0];

  // 年份区间：2025-2026年 / 2025.09-2026.02 → 取最大年份
  if (/20\d{2}\s*[-–]\s*20\d{2}|20\d{2}\.\d{1,2}\s*[-–]\s*20\d{2}/.test(s)) {
    const yrs = s.match(/20\d{2}/g);
    return [Math.max(...yrs.map(Number)), 1, 1, 0];
  }

  // 未知 / 空
  if (/待确认/.test(s) || s === '') return [0, 0, 0, 0];

  // 仅年份：2026年
  m = s.match(/(20\d{2})年/);
  if (m) return [+m[1], 1, 1, 0];

  // 裸年份：2026
  m = s.match(/(20\d{2})/);
  if (m) return [+m[1], 1, 1, 0];

  return [0, 0, 0, 0];
}

/** 取表格行的最后一列（发版时间），跳过首尾的空单元格 */
function lastCell(row) {
  const cells = row.split('|').map((c) => c.trim());
  return cells[cells.length - 2];
}

// ---------- 主逻辑 ----------

function collectRows(lines) {
  let start = null;
  let end = null;
  for (let i = 0; i < lines.length; i++) {
    const s = lines[i].trim();
    if (/^\| (中国|美国|法国) \|/.test(s)) {
      if (start === null) start = i;
      end = i;
    }
  }
  if (start === null) {
    console.error('未找到表格数据行（应以 `| 中国 |`/`| 美国 |`/`| 法国 |` 开头）');
    process.exit(1);
  }
  return { start, end };
}

function main() {
  const args = process.argv.slice(2);
  const checkOnly = args.includes('--check');
  const file = args.find((a) => !a.startsWith('-')) || 'README.md';

  if (!fs.existsSync(file)) {
    console.error(`文件不存在：${file}`);
    process.exit(1);
  }

  const lines = fs.readFileSync(file, 'utf8').split('\n');
  const { start, end } = collectRows(lines);

  const rows = [];
  for (let i = start; i <= end; i++) {
    rows.push({ line: lines[i], idx: i, meta: parseDate(lastCell(lines[i])) });
  }

  // 倒序排序；同日期的精确优先，仍相同的保持原始顺序（稳定排序）
  rows.sort((a, b) => {
    for (let k = 0; k < 3; k++) {
      if (b.meta[k] !== a.meta[k]) return b.meta[k] - a.meta[k];
    }
    if (a.meta[3] !== b.meta[3]) return b.meta[3] - a.meta[3];
    return a.idx - b.idx;
  });

  // 检查是否已有序（幂等性校验）
  let changes = 0;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].idx !== start + i) { changes++; break; }
  }

  if (checkOnly) {
    if (changes === 0) console.log(`✅ ${file}：时间线已按发版时间倒序（${rows.length} 行）`);
    else console.log(`⚠️ ${file}：时间线未排序（${rows.length} 行，需要运行排序）`);
    process.exit(changes === 0 ? 0 : 1);
  }

  if (changes === 0) {
    console.log(`无需修改：${file} 时间线已按发版时间倒序（${rows.length} 行）`);
    return;
  }

  const before = lines.slice(0, start);
  const after = lines.slice(end + 1);
  fs.writeFileSync(file, [...before, ...rows.map((r) => r.line), ...after].join('\n'));
  console.log(`✅ ${file}：已按发版时间倒序排列 ${rows.length} 行`);
}

main();

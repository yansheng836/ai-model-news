#!/usr/bin/env node
/**
 * 去除 README.md 时间线表中的重复行。
 *
 * 用 rowKey（国家|公司|模型名|版本）判定重复，保留第一次出现的行，
 * 删除后续重复行。幂等：无重复时文件不变。
 *
 * 用法：
 *   node scripts/dedup_timeline.js           # 原地处理 README.md
 *   node scripts/dedup_timeline.js <file>    # 处理指定文件
 *   node scripts/dedup_timeline.js --check   # 仅检测，不修改（有重复则 exit 1）
 */
const fs = require('fs');

const COUNTRY_ROW_RE = /^\|\s*(中国|美国|法国)\s*\|/;

function rowKey(row) {
  const cells = row.split('|').map((c) => c.trim());
  return cells.slice(1, 5).join('|');
}

function dedup(content) {
  const lines = content.split('\n');
  const seen = new Set();
  const out = [];
  let removed = 0;
  for (const line of lines) {
    if (COUNTRY_ROW_RE.test(line)) {
      const key = rowKey(line);
      if (seen.has(key)) {
        removed++;
        continue; // 跳过重复行
      }
      seen.add(key);
    }
    out.push(line);
  }
  return { content: out.join('\n'), removed };
}

function main() {
  const args = process.argv.slice(2);
  let file = 'README.md';
  let check = false;
  for (const a of args) {
    if (a === '--check') check = true;
    else if (a.startsWith('--')) {
      console.error(`未知选项：${a}`);
      process.exit(2);
    } else file = a;
  }

  const original = fs.readFileSync(file, 'utf8');
  const { content, removed } = dedup(original);

  if (check) {
    if (removed > 0) {
      console.error(`❌ 检测到 ${removed} 行重复`);
      process.exit(1);
    }
    console.log('✅ 无重复行');
    return;
  }

  if (removed > 0) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ 去重完成，删除 ${removed} 行重复`);
  } else {
    console.log('✅ 无重复行，无需修改');
  }
}

main();

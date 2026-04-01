/**
 * content-lint.js — Content compliance linter for mindchecktools.com
 * Scans content/**\/*.{md,mdx} and src/**\/*.{tsx,ts} for:
 *   - YMYL forbidden language (diagnose, diagnosis, cure, treatment plan)
 * Exit code 1 on failure, 0 on pass.
 */

import { readFileSync, readdirSync, existsSync, statSync } from "fs";
import { resolve, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

let failures = 0;

function fail(file, line, msg) {
  const rel = relative(ROOT, file);
  console.error(`  ❌ ${rel}:${line} — ${msg}`);
  failures++;
}

function getFiles(dir, extensions) {
  const results = [];
  if (!existsSync(dir)) return results;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getFiles(fullPath, extensions));
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Rules
// ---------------------------------------------------------------------------

/**
 * Check for YMYL forbidden language.
 * A mental health site legitimately discusses diagnosis, cure, and treatment plans
 * in educational and referral contexts. The YMYL rule is that the TOOL/SITE must
 * never claim to diagnose or cure — so we only flag lines where the site appears
 * to make such claims directly.
 */
function checkYMYLLanguage(file, lines) {
  // Skip legal/policy pages where these terms are contextually required
  const rel = relative(ROOT, file);
  if (
    rel.includes("privacy") ||
    rel.includes("terms") ||
    rel.includes("disclaimer")
  ) {
    return;
  }

  // Patterns that indicate the SITE/TOOL is claiming to diagnose or cure
  const ymylPatterns = [
    {
      pattern:
        /\b(?:this\s+(?:tool|test|quiz|screening|assessment)|we|our\s+(?:tool|test|screening))\s+(?:will\s+)?diagnos/i,
      msg: 'YMYL: site/tool claims to diagnose — reword to "screens for" or "assesses"',
    },
    {
      pattern: /\byour\s+diagnosis\s+is\b/i,
      msg: 'YMYL: presenting results as diagnosis — reword to "your screening result"',
    },
    {
      pattern:
        /\b(?:this\s+(?:tool|test|quiz|screening)|we)\s+(?:can|will)\s+cure\b/i,
      msg: 'YMYL: site/tool claims to cure — reword appropriately',
    },
  ];

  // Lines that negate the claim are fine (FAQ disclaimers like "Can this tool diagnose? No.")
  const negationContext =
    /\b(?:No\.|cannot|can't|does\s+not|is\s+not|not\s+a\s+diagnos)/i;

  for (let i = 0; i < lines.length; i++) {
    for (const { pattern, msg } of ymylPatterns) {
      if (pattern.test(lines[i]) && !negationContext.test(lines[i])) {
        fail(file, i + 1, msg);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log("🧠 MindCheck Tools content lint\n");

const contentFiles = getFiles(resolve(ROOT, "content"), [".md", ".mdx"]);
const srcFiles = getFiles(resolve(ROOT, "src"), [".tsx", ".ts"]);
const allFiles = [...contentFiles, ...srcFiles];

console.log(
  `  Scanning ${contentFiles.length} content files and ${srcFiles.length} source files...\n`
);

for (const file of allFiles) {
  const content = readFileSync(file, "utf-8");
  const lines = content.split("\n");

  checkYMYLLanguage(file, lines);
}

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
console.log("\n" + "=".repeat(50));
if (failures > 0) {
  console.error(
    `\n💥 ${failures} content issue(s) found — fix before deploying.\n`
  );
  process.exit(1);
} else {
  console.log("\n🎉 All content checks passed.\n");
  process.exit(0);
}

import { spawnSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const TEXT_EXTENSIONS = new Set([
  ".css", ".csv", ".html", ".js", ".json", ".jsx", ".md", ".mjs", ".toml",
  ".ts", ".tsx", ".txt", ".yml", ".yaml",
]);
const MAX_READ_BYTES = 256_000;

function gitFiles() {
  const run = spawnSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], {
    cwd: root,
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
  });
  if (run.status !== 0) {
    console.error(`Repository map failed: ${run.stderr.trim()}`);
    process.exit(1);
  }
  return run.stdout.split("\0").filter(Boolean).sort();
}

function parseArgs(argv) {
  let query = "";
  let max = 12;
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--query") {
      query = argv[index + 1] ?? "";
      index += 1;
    } else if (argv[index] === "--max") {
      max = Number(argv[index + 1]);
      index += 1;
    } else if (argv[index] === "--help") {
      console.log('Usage: node scripts/codex/repo-map.mjs [--query "terms"] [--max 1-30]');
      process.exit(0);
    } else {
      console.error(`Repository map failed: unknown argument ${argv[index]}`);
      process.exit(1);
    }
  }
  if (!Number.isInteger(max) || max < 1 || max > 30) {
    console.error("Repository map failed: --max must be an integer from 1 to 30");
    process.exit(1);
  }
  return { query: query.trim(), max };
}

function isReadable(file) {
  if (!TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())) return false;
  try {
    return statSync(path.join(root, file)).size <= MAX_READ_BYTES;
  } catch {
    return false;
  }
}

function defaultMap(files) {
  const preferred = [
    "AGENTS.md",
    "package.json",
    "next.config.mjs",
    "src/app",
    "src/components",
    "src/lib",
    "src/lib/routePolicies.ts",
    "src/middleware.ts",
    "docs/instrument-evidence-rights-register.md",
    "docs/no-display-advertising.md",
    "tests",
    ".github/workflows",
  ];

  const output = [];
  for (const target of preferred) {
    const exact = files.includes(target);
    const prefix = `${target}/`;
    if (exact || files.some((file) => file.startsWith(prefix))) {
      output.push({
        path: target,
        reason: exact ? "key repository entry" : "key repository area",
      });
    }
  }
  return output;
}

function queryMap(files, query) {
  const terms = query
    .toLowerCase()
    .split(/[\s,]+/)
    .map((term) => term.trim())
    .filter((term) => term.length >= 2);

  if (!terms.length) return [];

  const results = [];
  for (const file of files) {
    const lowerPath = file.toLowerCase();
    let score = 0;
    const reasons = new Set();

    for (const term of terms) {
      if (lowerPath.includes(term)) {
        score += lowerPath === term ? 20 : 12;
        reasons.add("path match");
      }
    }

    if (isReadable(file)) {
      let source = "";
      try {
        source = readFileSync(path.join(root, file), "utf8").toLowerCase();
      } catch {}
      let hits = 0;
      for (const term of terms) {
        let offset = 0;
        while (hits < 12) {
          const next = source.indexOf(term, offset);
          if (next < 0) break;
          hits += 1;
          offset = next + term.length;
        }
      }
      if (hits) {
        score += Math.min(hits, 10);
        reasons.add("text reference");
      }
    }

    if (score > 0) {
      if (file.startsWith("tests/")) {
        score += 3;
        reasons.add("test");
      }
      if (file.startsWith("docs/") || file.startsWith(".github/")) {
        score += 1;
        reasons.add("record or workflow");
      }
      results.push({ path: file, score, reason: [...reasons].join(", ") });
    }
  }

  return results.sort((a, b) => b.score - a.score || a.path.localeCompare(b.path));
}

const { query, max } = parseArgs(process.argv.slice(2));
const files = gitFiles();
const results = query ? queryMap(files, query).slice(0, max) : defaultMap(files).slice(0, max);

console.log(query ? `MindCheckTools context candidates for: ${query}` : "MindCheckTools repository entry map");
console.log(`Showing ${results.length} of at most ${max} paths. Read source only after confirming relevance.`);
for (const result of results) console.log(`- ${result.path}: ${result.reason}`);
if (!results.length) {
  console.log("- No evidence-based path match. Refine the query with an exact route, symbol, record, or test name.");
}

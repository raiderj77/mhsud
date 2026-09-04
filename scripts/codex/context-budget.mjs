import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const read = (file) => readFileSync(path.join(root, file), "utf8");
const bytes = (file) => Buffer.byteLength(read(file), "utf8");
const approxTokens = (value) => Math.ceil(value / 4);
const failures = [];

const documents = {
  root: { path: "AGENTS.md", max: 10_000 },
  clinical: { path: "docs/codex/CLINICAL_RIGHTS_CRISIS.md", max: 9_500 },
  privacy: { path: "docs/codex/PRIVACY_SECURITY_ACCESSIBILITY.md", max: 9_500 },
  content: { path: "docs/codex/CONTENT_SEARCH_MONETIZATION.md", max: 9_500 },
  release: { path: "docs/codex/REPOSITORY_RELEASE.md", max: 9_500 },
};

for (const document of Object.values(documents)) {
  if (!existsSync(path.join(root, document.path))) {
    failures.push(`missing ${document.path}`);
    continue;
  }
  document.bytes = bytes(document.path);
  if (document.bytes > document.max) {
    failures.push(`${document.path} is ${document.bytes} bytes, limit ${document.max}`);
  }
}

const config = read(".codex/config.toml");
const projectLimit = Number(config.match(/^project_doc_max_bytes\s*=\s*(\d+)$/m)?.[1] ?? 0);
if (projectLimit !== 10_240) failures.push("project_doc_max_bytes must equal 10240");
if (!/^project_doc_fallback_filenames\s*=\s*\[\]$/m.test(config)) {
  failures.push("project_doc_fallback_filenames must be empty");
}
if (/^tool_output_token_limit\s*=/m.test(config)) {
  failures.push("tool_output_token_limit requires a measured quality benchmark before use");
}
if (/^(?:model|provider|api_key|base_url|profile|telemetry)\s*=/mi.test(config)) {
  failures.push("repository Codex config must not select a model, provider, credential, or telemetry profile");
}
if (/^hooks\s*=/m.test(config) || /^codex_hooks\s*=/m.test(config)) {
  failures.push("project hooks require a separate reviewed need");
}

if (documents.root.bytes) {
  const crlfMargin = read(documents.root.path).split("\n").length;
  if (documents.root.bytes + crlfMargin > projectLimit) {
    failures.push("project_doc_max_bytes leaves insufficient Windows line-ending margin");
  }
}

if (existsSync(path.join(root, "AGENTS.override.md"))) {
  failures.push("root AGENTS.override.md would replace the reviewed root instructions");
}
if (existsSync(path.join(root, ".codex", "hooks.json")) || existsSync(path.join(root, ".codex", "hooks"))) {
  failures.push("project hooks are not part of the reviewed MindCheckTools Codex layer");
}

const git = spawnSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], {
  cwd: root,
  encoding: "utf8",
});
if (git.status !== 0) {
  failures.push(`git instruction-file inventory failed: ${git.stderr.trim()}`);
} else {
  const found = git.stdout
    .split(/\r?\n/)
    .filter((file) => /(^|\/)AGENTS(?:\.override)?\.md$/i.test(file))
    .sort();
  if (found.length !== 1 || found[0] !== "AGENTS.md") {
    failures.push(`unexpected Codex instruction files: ${found.join(", ") || "none"}`);
  }
}

const legacyAssistantFile = ["CLA", "UDE.md"].join("");
const operatingFiles = [
  "AGENTS.md",
  ".codex/config.toml",
  ".codex/agents/mc-reviewer.toml",
  ".codex/agents/mc-verifier.toml",
  ".agents/skills/mc-plan/SKILL.md",
  ".agents/skills/mc-run/SKILL.md",
  ".agents/skills/mc-debug/SKILL.md",
  ".agents/skills/mc-audit/SKILL.md",
  "docs/CODEX.md",
  ...Object.values(documents).map((document) => document.path),
  "scripts/codex/context-budget.mjs",
  "scripts/codex/task-check.mjs",
  "scripts/codex/repo-map.mjs",
  "scripts/codex/doctor.mjs",
  "tests/codex-operating-layer.test.mjs",
];
for (const file of operatingFiles) {
  if (!existsSync(path.join(root, file))) {
    failures.push(`missing ${file}`);
    continue;
  }
  if (read(file).includes(legacyAssistantFile)) {
    failures.push(`${file} depends on a compatibility assistant instruction file`);
  }
}

const scenarios = [
  ["routine", ["root"]],
  ["clinical", ["root", "clinical"]],
  ["privacy-security", ["root", "privacy"]],
  ["content-search", ["root", "content"]],
  ["repository-release", ["root", "release"]],
  ["protected-public", ["root", "clinical", "privacy", "content"]],
  ["all-policies", ["root", "clinical", "privacy", "content", "release"]],
];

console.log("MindCheckTools repository-owned context budget");
console.log(
  "Approximate tokens use bytes / 4 and exclude system instructions, tool schemas, source, tests, chat history, on-demand skills, and subagent prompts.\n",
);
for (const [name, keys] of scenarios) {
  const total = keys.reduce((sum, key) => sum + (documents[key].bytes ?? 0), 0);
  console.log(
    `${name.padEnd(21)} ${String(total).padStart(6)} bytes  ~${String(approxTokens(total)).padStart(5)} tokens`,
  );
}

if (failures.length) {
  console.error("\nContext budget failed:");
  for (const failure of [...new Set(failures)]) console.error(`- ${failure}`);
  process.exit(1);
}

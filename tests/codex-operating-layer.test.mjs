import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { validateTask } from "../scripts/codex/task-check.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => readFileSync(path.join(root, file), "utf8");
const run = (script, args = []) => spawnSync(process.execPath, [path.join(root, script), ...args], {
  cwd: root,
  encoding: "utf8",
});
const mustMatch = (source, patterns) => patterns.forEach((pattern) => assert.match(source, pattern));
const compatibilityName = ["CLA", "UDE.md"].join("");

const policies = {
  clinical: "docs/codex/CLINICAL_RIGHTS_CRISIS.md",
  privacy: "docs/codex/PRIVACY_SECURITY_ACCESSIBILITY.md",
  content: "docs/codex/CONTENT_SEARCH_MONETIZATION.md",
  release: "docs/codex/REPOSITORY_RELEASE.md",
};
const skills = ["mc-audit", "mc-debug", "mc-plan", "mc-run"];
const agents = ["mc-reviewer.toml", "mc-verifier.toml"];
const requiredFiles = [
  "AGENTS.md", ".codex/config.toml", "docs/CODEX.md", ...Object.values(policies),
  ...agents.map((name) => `.codex/agents/${name}`),
  ...skills.map((name) => `.agents/skills/${name}/SKILL.md`),
  "scripts/codex/context-budget.mjs", "scripts/codex/doctor.mjs",
  "scripts/codex/repo-map.mjs", "scripts/codex/task-check.mjs",
  "tests/codex-operating-layer.test.mjs",
];

test("reviewed Codex files exist and unapproved layers do not", () => {
  requiredFiles.forEach((file) => assert.equal(existsSync(path.join(root, file)), true, file));
  ["AGENTS.override.md", ".codex/hooks.json", ".codex/hooks", "agent-os"].forEach((file) => {
    assert.equal(existsSync(path.join(root, file)), false, file);
  });
  assert.match(read(".gitignore"), /^\/\.codex\/TASK[.]md$/m);
});

test("Codex layer does not depend on compatibility instructions", () => {
  requiredFiles.forEach((file) => assert.equal(read(file).includes(compatibilityName), false, file));
});

test("root instructions stay concise and quality first", () => {
  const source = read("AGENTS.md");
  assert.ok(Buffer.byteLength(source) <= 10_000);
  mustMatch(source, [
    /Correctness, safety, evidence, and complete validation always outrank token savings/,
    /WHO ASSIST v3[.]1 remains information-only/,
    /send assessment answers, scores, crisis disclosures/,
    /re-enable display advertising or GA4/,
    /Never work directly on `main`/,
    /mc_reviewer.*mc_verifier.*high-risk work/,
    /Do not set a blind tool-output token cap/,
    /Unknown critical evidence never equals `PASS`/,
  ]);
  assert.doesNotMatch(source, /\b(?:sk|rk|whsec|sbp)_[A-Za-z0-9_-]{12,}\b/);
});

test("project config limits instructions without provider routing or hooks", () => {
  const source = read(".codex/config.toml");
  mustMatch(source, [
    /^project_doc_max_bytes\s*=\s*10240$/m,
    /^project_doc_fallback_filenames\s*=\s*\[\]$/m,
    /^multi_agent\s*=\s*true$/m,
    /^max_concurrent_threads_per_session\s*=\s*2$/m,
  ]);
  assert.doesNotMatch(source, /^(?:hooks|codex_hooks|tool_output_token_limit|model|provider|api_key|base_url|profile|telemetry)\s*=/mi);
});

test("focused policies preserve MindCheckTools safeguards", () => {
  Object.values(policies).forEach((file) => assert.ok(Buffer.byteLength(read(file)) <= 9_500, file));
  mustMatch(read(policies.clinical), [
    /APPROVED_INTERACTIVE/, /WHO ASSIST v3[.]1 remains `INFORMATION_ONLY`/,
    /Crisis Text Line by texting HOME to 741741/, /high-risk item must not be neutralized by a low total score/,
    /AI must not independently/, /children under 13/,
  ]);
  mustMatch(read(policies.privacy), [
    /not intentionally sent to MindCheckTools/, /Global Privacy Control/, /Do not add GA4/,
    /BFCache/, /WCAG 2[.]2 AA/, /health-breach response/, /OWASP ASVS and NIST CSF/,
  ]);
  mustMatch(read(policies.content), [
    /Permanent no-display-ad rule/, /Never make a paid healthcare recommendation from answers/,
    /Generative Engine Optimization/, /OAI-SearchBot/, /Search Console, Bing Webmaster Tools/,
    /Change a review date only after reviewing/, /current exact service brief/,
  ]);
  mustMatch(read(policies.release), [
    /repository `raiderj77\/mhsud`/, /normally no more than 12 files/,
    /No remote model may receive visitor health data/, /does not authorize release/,
    /Do not add project hooks without a separate reviewed need/, /Do not auto-publish clinical content/,
    /protected-item snapshot/, /if organic traffic disappears/,
  ]);
});

test("context budget passes and reports bounded scenarios", () => {
  const result = run("scripts/codex/context-budget.mjs");
  assert.equal(result.status, 0, result.stderr);
  mustMatch(result.stdout, [/routine\s+\d+ bytes/, /protected-public\s+\d+ bytes/, /all-policies\s+\d+ bytes/]);
});

test("task checker enforces readiness, risk, and acceptance coverage", () => {
  const valid = `# Protect high-risk result route
Status: Ready
Risk: High
Base: aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
Route classes: H3 | H4
Protected areas: scoring, crisis behavior

## Policies and records
- \`docs/codex/CLINICAL_RIGHTS_CRISIS.md\`

## Context set
- \`src/app/example/page.tsx\`: route

## Scope
Preserve scoring.

## Excluded
No redesign.

## Failure modes and rollback
Fail closed and revert the isolated commit.

## Acceptance and coverage
| ID | Observable result | Step | Test or evidence |
| --- | --- | --- | --- |
| A1 | Safety stays deterministic | 1 | \`node --test tests/example.test.mjs\` |

## Steps
1. Add bounded regression protection.

## Independent checks
mc_reviewer and mc_verifier

## Readiness
Ready

## Next
Run \`$mc-run\`.
`;
  assert.deepEqual(validateTask(valid, { requireReady: true }).errors, []);
  const low = validateTask(valid.replace("Risk: High", "Risk: Low"));
  assert.ok(low.errors.includes("H3 or H4 work must be High risk"));
  assert.ok(low.errors.includes("work touching a protected area cannot be Low risk"));
  assert.ok(validateTask(valid.replace("mc_reviewer and mc_verifier", "mc_reviewer")).errors.includes(
    "High-risk work requires mc_reviewer and mc_verifier",
  ));
  const wrongStep = validateTask(valid.replace("| 1 |", "| 2 |"));
  assert.ok(wrongStep.errors.some((error) => error.includes("missing step 2")));
  assert.ok(wrongStep.errors.includes("step 1 is not mapped to an acceptance item"));
  const outside = run("scripts/codex/task-check.mjs", ["--file", "../outside.md"]);
  assert.equal(outside.status, 1);
  assert.match(outside.stderr, /must stay inside the repository/);
});

test("repository map emits at most twelve path-only results", () => {
  const result = run("scripts/codex/repo-map.mjs", ["--query", "routePolicies privacy", "--max", "12"]);
  assert.equal(result.status, 0, result.stderr);
  const lines = result.stdout
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "));
  assert.ok(lines.length <= 12);
  const allowedReasons = new Set(["path match", "text reference", "test", "record or workflow"]);
  lines.forEach((line) => {
    const separator = line.lastIndexOf(": ");
    assert.ok(separator > 2, line);
    assert.ok(line.slice(2, separator).trim(), line);
    const reasons = line.slice(separator + 2).split(", ").map((reason) => reason.trim());
    assert.ok(reasons.length > 0, line);
    reasons.forEach((reason) => assert.ok(allowedReasons.has(reason), `${line}: ${reason}`));
    assert.doesNotMatch(line, /function\s|const\s|=>|import\s/);
  });
});

test("reviewer and verifier remain independent high-effort roles", () => {
  assert.deepEqual(readdirSync(path.join(root, ".codex/agents")).filter((name) => name.endsWith(".toml")).sort(), agents);
  agents.forEach((file) => mustMatch(read(`.codex/agents/${file}`), [/^model_reasoning_effort\s*=\s*"high"$/m, /root AGENTS[.]md/]));
  mustMatch(read(".codex/agents/mc-reviewer.toml"), [/^sandbox_mode\s*=\s*"read-only"$/m, /Do not edit files/]);
  mustMatch(read(".codex/agents/mc-verifier.toml"), [/Do not edit tracked files/, /Record git status before and after/]);
});

test("four narrow skills cover plan, run, debug, and audit", () => {
  const folders = readdirSync(path.join(root, ".agents/skills")).sort();
  skills.forEach((folder) => assert.ok(folders.includes(folder), folder));
  skills.forEach((folder) => {
    const source = read(`.agents/skills/${folder}/SKILL.md`);
    assert.match(source, /^---\n[\s\S]+?\n---\n/);
    assert.ok(Buffer.byteLength(source) <= 3_500, folder);
  });
  mustMatch(read(".agents/skills/mc-plan/SKILL.md"), [/no more than 12 files/, /task-check[.]mjs --ready/]);
  assert.match(read(".agents/skills/mc-debug/SKILL.md"), /failing regression test first when practical/);
  assert.match(read(".agents/skills/mc-run/SKILL.md"), /Run `\$mc-audit` in convergence mode/);
  assert.match(read(".agents/skills/mc-audit/SKILL.md"), /Satisfied.*Partial.*Missing.*Contradicts.*Not tested/);
});

test("human guide documents native workflow and measured savings", () => {
  const source = read("docs/CODEX.md");
  mustMatch(source, [/Use `\/status`/, /Use `\/side`/, /Use `\/review`/, /repo-map[.]mjs/,
    /No project hook is installed/, /No model, provider, API key, router, telemetry profile/,
    /Quality must remain equal or improve/]);
});

test("documented npm commands exist", () => {
  const scripts = JSON.parse(read("package.json")).scripts ?? {};
  ["AGENTS.md", "docs/CODEX.md", ...Object.values(policies)].forEach((file) => {
    for (const match of read(file).matchAll(/\bnpm run ([A-Za-z0-9:_-]+)/g)) {
      assert.ok(Object.hasOwn(scripts, match[1]), `${file}: ${match[1]}`);
    }
  });
});

test("doctor is read-only and blocks unsafe starts", () => {
  const source = read("scripts/codex/doctor.mjs");
  mustMatch(source, [/branch === "main"/, /Detached HEAD is blocked/, /Working tree is not clean/, /merge-base/,
    /global Codex instructions/, /context-budget[.]mjs/, /task-check[.]mjs/, /No repository mutation was performed/]);
  assert.doesNotMatch(source, /"git",\s*\["(?:push|commit|checkout|switch|merge|reset|clean|fetch|pull)"/);
  assert.doesNotMatch(source, /"gh",\s*\["pr",\s*"(?:create|merge|close)"/);
});

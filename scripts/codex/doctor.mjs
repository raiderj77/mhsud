import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(scriptPath), "..", "..");
const args = new Set(process.argv.slice(2));
const allowDirty = args.has("--allow-dirty");
const runChecks = args.has("--run-checks");

for (const arg of args) {
  if (!["--allow-dirty", "--run-checks"].includes(arg)) {
    console.error(`Codex doctor failed: unknown argument ${arg}`);
    process.exit(1);
  }
}

const allowedOrigins = new Set([
  "https://github.com/raiderj77/mhsud.git",
  "https://github.com/raiderj77/mhsud",
  "git@github.com:raiderj77/mhsud.git",
  "git@github.com:raiderj77/mhsud",
  "ssh://git@github.com/raiderj77/mhsud.git",
  "ssh://git@github.com/raiderj77/mhsud",
]);

function run(command, commandArgs, { allowFailure = false, stdio = "pipe" } = {}) {
  const result = spawnSync(command, commandArgs, {
    cwd: root,
    encoding: "utf8",
    stdio,
    shell: false,
    maxBuffer: 20 * 1024 * 1024,
  });
  if (!allowFailure && result.status !== 0) {
    const detail = [result.stderr, result.stdout].filter(Boolean).join("\n").trim();
    throw new Error(`${command} ${commandArgs.join(" ")} failed${detail ? `: ${detail}` : ""}`);
  }
  return result;
}

function git(commandArgs, options) {
  return run("git", commandArgs, options).stdout.trim();
}

function fail(error) {
  console.error(`Codex doctor failed: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}

try {
  const actualRoot = git(["rev-parse", "--show-toplevel"]);
  if (path.resolve(actualRoot) !== root) throw new Error("Run the doctor from the MindCheckTools repository.");

  const origin = git(["remote", "get-url", "origin"]).replace(/\/$/, "");
  const branch = git(["branch", "--show-current"]);
  const head = git(["rev-parse", "HEAD"]);
  const before = git(["status", "--porcelain"]);

  if (!allowedOrigins.has(origin)) throw new Error(`Unexpected origin: ${origin}`);
  if (!branch) throw new Error("Detached HEAD is blocked.");
  if (branch === "main") throw new Error("Direct work on main is blocked. Create a current task branch.");
  if (before && !allowDirty) {
    throw new Error("Working tree is not clean. Preserve or isolate changes, or rerun with --allow-dirty after review.");
  }

  const remoteLine = git(["ls-remote", "origin", "refs/heads/main"]);
  const remoteMain = remoteLine.split(/\s+/)[0];
  if (!/^[0-9a-f]{40}$/.test(remoteMain)) throw new Error("Could not resolve current origin/main.");

  const hasCommit = run("git", ["cat-file", "-e", `${remoteMain}^{commit}`], { allowFailure: true });
  if (hasCommit.status !== 0) {
    throw new Error("Current remote main is not available locally. Fetch origin before work.");
  }

  const mergeBase = git(["merge-base", "HEAD", remoteMain]);
  if (mergeBase !== remoteMain) {
    throw new Error("Branch is not based on current origin/main. Rebase or recreate it before editing.");
  }

  console.log(`Root:        ${root}`);
  console.log(`Origin:      ${origin}`);
  console.log(`Branch:      ${branch}`);
  console.log(`HEAD:        ${head}`);
  console.log(`origin/main: ${remoteMain}`);

  const required = [
    "AGENTS.md",
    ".codex/config.toml",
    ".codex/agents/mc-reviewer.toml",
    ".codex/agents/mc-verifier.toml",
    ".agents/skills/mc-plan/SKILL.md",
    ".agents/skills/mc-run/SKILL.md",
    ".agents/skills/mc-debug/SKILL.md",
    ".agents/skills/mc-audit/SKILL.md",
    "docs/CODEX.md",
    "docs/codex/CLINICAL_RIGHTS_CRISIS.md",
    "docs/codex/PRIVACY_SECURITY_ACCESSIBILITY.md",
    "docs/codex/CONTENT_SEARCH_MONETIZATION.md",
    "docs/codex/REPOSITORY_RELEASE.md",
    "scripts/codex/context-budget.mjs",
    "scripts/codex/task-check.mjs",
    "scripts/codex/repo-map.mjs",
    "tests/codex-operating-layer.test.mjs",
  ];
  for (const file of required) {
    if (!existsSync(path.join(root, file))) throw new Error(`Missing required file: ${file}`);
  }

  const codexHome = process.env.CODEX_HOME || path.join(os.homedir(), ".codex");
  for (const name of ["AGENTS.override.md", "AGENTS.md"]) {
    if (existsSync(path.join(codexHome, name))) {
      console.warn(`Warning: global Codex instructions also exist at ${path.join(codexHome, name)}. Review /status.`);
      break;
    }
  }

  const gh = run(process.platform === "win32" ? "where" : "which", ["gh"], { allowFailure: true });
  if (gh.status === 0) {
    console.log("\nOpen pull requests:");
    run(
      "gh",
      ["pr", "list", "--repo", "raiderj77/mhsud", "--state", "open", "--limit", "20"],
      { allowFailure: true, stdio: "inherit" },
    );
    console.log("\nMain protection and required checks:");
    run(
      "gh",
      [
        "api",
        "repos/raiderj77/mhsud/branches/main",
        "--jq",
        "{protected: .protected, checks: .protection.required_status_checks.contexts}",
      ],
      { allowFailure: true, stdio: "inherit" },
    );
  }

  run(process.execPath, [path.join(root, "scripts", "codex", "context-budget.mjs")], { stdio: "inherit" });

  if (existsSync(path.join(root, ".codex", "TASK.md"))) {
    run(process.execPath, [path.join(root, "scripts", "codex", "task-check.mjs"), "--required"], {
      stdio: "inherit",
    });
  }

  if (runChecks) {
    run(process.execPath, ["--test", path.join(root, "tests", "codex-operating-layer.test.mjs")], {
      stdio: "inherit",
    });
    run("git", ["diff", "--check"], { stdio: "inherit" });
    run("git", ["diff", "--cached", "--check"], { stdio: "inherit" });
  }

  const after = git(["status", "--porcelain"]);
  if (after !== before) throw new Error("Doctor checks changed tracked worktree state.");

  console.log("\nMindCheckTools Codex doctor passed. No repository mutation was performed.");
} catch (error) {
  fail(error);
}

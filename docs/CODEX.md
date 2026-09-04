# MindCheckTools Codex Workflow

`AGENTS.md` is the complete root Codex instruction file. Detailed policies under `docs/codex/` load only when a task touches their subject. Open Codex from the repository root so instruction discovery stays predictable.

## Context routing

| Work | Additional policy |
| --- | --- |
| Instruments, scoring, results, clinical claims, rights, evidence, crisis, health-related AI, adults or youth | `CLINICAL_RIGHTS_CRISIS.md` |
| Health data, storage, analytics, consent, headers, service workers, security, privacy, email, accessibility, performance | `PRIVACY_SECURITY_ACCESSIBILITY.md` |
| Public copy, SEO, AEO, GEO, metadata, structured data, links, articles, attribution, referrals, monetization | `CONTENT_SEARCH_MONETIZATION.md` |
| Repository structure, dependencies, workflows, branches, pull requests, deployment, production, automation, Codex tooling | `REPOSITORY_RELEASE.md` |

Cross-category work loads every matching policy and exact source, test, evidence, rights, review, route, and release record.

## Start safely

From a clean branch based on current `origin/main`:

```bash
node scripts/codex/doctor.mjs
```

For a structural check after the Codex layer changes:

```bash
node scripts/codex/doctor.mjs --allow-dirty --run-checks
```

The doctor is read-only. It blocks direct work on `main`, detached HEAD, unexpected origin, stale branch base, and unreviewed dirty state.

## Commands

Clear low-risk work runs directly.

```text
Use $mc-plan for: [medium or high-risk outcome]
Use $mc-run
```

```text
Use $mc-debug for: [observed behavior and reproduction]
```

```text
Use $mc-audit in readiness mode
Use $mc-audit in convergence mode
```

Validate a plan without model reasoning:

```bash
node scripts/codex/task-check.mjs --ready
```

Build a bounded repository path map without sending the repository to a model:

```bash
node scripts/codex/repo-map.mjs --query "route, component, symbol, test, or policy"
```

The default result contains at most 12 paths and reasons. Expand only when imports, references, records, tests, or observed behavior require it.

Report repository-owned instruction size:

```bash
node scripts/codex/context-budget.mjs
```

Use `/status` to inspect loaded instructions, model, approvals, and token use. Review any global Codex instructions shown there. Use `/side` for disposable research that should not crowd the main task thread. Side work still consumes model tokens. Use `/review` for an additional read-only diff review when useful.

## Quality controls

- Medium and high-risk plans include scope, exclusions, protected areas, failure modes, rollback, acceptance criteria, steps, and proving evidence.
- A deterministic checker catches incomplete plans before implementation.
- Defects use reproduction and regression evidence before repair when practical.
- One main agent handles ordinary work.
- One temporary read-only explorer is allowed only when targeted search is insufficient.
- Substantial medium-risk work receives `mc_reviewer`.
- High-risk work receives separate `mc_reviewer` and `mc_verifier` passes.
- AI review never replaces required human clinical, rights, privacy, legal, accessibility, or owner approval.
- Focused tests run during editing. Broad applicable checks run after stabilization.
- GitHub required checks remain the remote authority.
- Merge, deployment, publication, DNS, providers, payments, production data, spending, user contact, and public clinical or legal claims remain owner-controlled.

## Token controls

- The root file holds durable invariants and routes detail to focused policies.
- Skills have narrow descriptions and load on demand.
- `.codex/TASK.md` holds compact multi-turn state and stays untracked.
- Exact search and the deterministic repository map precede broad reading.
- Raw logs stay out of the task file and main conversation.
- No project hook is installed. Resume explicitly from `.codex/TASK.md`.
- No model, provider, API key, router, telemetry profile, or tool-output truncation is configured in the repository.
- Do not install an outside provider, model router, MCP context framework, lossy output filter, or repository-wide agent framework without a benchmark, security review, removal path, and owner approval.

Measure first-pass test success, defects found after review, files read, tool calls, retries, task completion time, and `/status` token use before claiming savings. Quality must remain equal or improve.

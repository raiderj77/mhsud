# MindCheckTools Repository, Automation, and Release Policy

Load this file for repository structure, dependencies, scripts, workflows, branches, pull requests, Codex configuration, automation, deployment, production, providers, DNS, or release work. The root `AGENTS.md` remains controlling. Exact current repository state, `package.json`, workflows, branch rules, deployment evidence, and owner authorization control bounded facts.

## Repository state before work

Before editing:

- verify repository `raiderj77/mhsud`;
- verify current remote `main` SHA;
- inspect current branch and worktree;
- inspect recent relevant commits and open pull requests;
- inspect active branch protection and required checks;
- confirm the branch starts from current `origin/main`;
- confirm no direct change will reach `main`.

Never work directly on `main`. Do not overwrite, discard, reset, clean, or reinterpret existing work without evidence and authorization.

A stale base or overlapping pull request requires a refreshed plan before editing.

Use `node scripts/codex/doctor.mjs` from a clean task branch. It is a read-only guard, not a substitute for direct inspection.

## Scope and context

Prefer exact search over broad reading.

Start medium and high-risk work with a bounded evidence set, normally no more than 12 files:

- entry route or component;
- exact symbol and imports;
- callers and references;
- controlling record or manifest;
- focused regression tests;
- applicable policy and workflow.

Expand only when evidence requires it. The number 12 is a starting target, not a hard cap.

Use `node scripts/codex/repo-map.mjs --query "..."` for path candidates. It outputs paths and reasons, not repository content.

Do not load the whole repository, large logs, or all historical documents into model context by default.

## Task state

Use `.codex/TASK.md` for medium, high-risk, unclear, cross-cutting, or multi-session work.

The task must record:

- outcome, risk, base SHA, route classes, and protected areas;
- exact policies and records;
- bounded context set;
- scope and exclusions;
- failure modes, stop conditions, rollback, and fail-closed behavior;
- acceptance-to-step-to-evidence mapping;
- independent checks;
- readiness and one next action.

Keep it under 900 words. Never include real health data, secrets, private owner data, or raw logs. The file stays untracked.

Validate with:

```bash
node scripts/codex/task-check.mjs --required
node scripts/codex/task-check.mjs --ready
```

## Implementation discipline

- One main agent handles ordinary work.
- One temporary read-only explorer is allowed for unfamiliar code when targeted search fails.
- Close the explorer after handoff before reviewer and verifier work.
- Reproduce defects and add failing regression proof first when practical.
- Make the smallest complete change.
- Avoid unrelated cleanup, broad refactors, dependency churn, and formatting noise.
- Run focused tests while editing.
- Run broad applicable suites after stabilization.
- Never weaken an existing test, registry, source, allowlist, privacy rule, security rule, or release gate merely to pass.
- Keep raw logs in local files. Return only the material failure and summary lines.
- Close every subagent after its result is recorded.

## Automation boundaries

Automate low-risk repetitive work such as broken links, uptime, crisis-resource availability, source-change alerts, rights-review reminders, dependency and secret scans, accessibility checks, sitemap and schema checks, search summaries, and review reminders.

Do not auto-publish clinical content, change protected instrument text or scoring, alter crisis instructions, approve rights, make legal conclusions, create compensated healthcare referrals, or take an owner-controlled release action.

Remove dead ad or tracking code, obsolete consent systems, duplicate analytics, unused agents, abandoned phase documents, duplicate verification keys, and stale policy text only after runtime, build, deployment, verification, privacy, accessibility, PWA, SEO, safety, rights, and governance references are checked.

## Dependencies, services, and tooling

Before adding a dependency, service, agent, command, document, workflow, or tool, answer:

- What current problem does it solve?
- Is the same function already present?
- What data or protected area may it touch?
- What security, privacy, licensing, cost, and maintenance burden does it add?
- How is it tested?
- What is the removal path?

Prefer Node built-ins and current repository tools.

Do not add a model router, outside provider, API key, telemetry profile, MCP context framework, lossy output filter, or repository-wide agent framework without an owner-approved pilot. The pilot must compare first-pass correctness, defects after review, files read, tool calls, retries, completion time, token use, privacy, security, and maintenance. Remove it when quality falls or savings are not material.

Do not set a blind tool-output token cap. Focus the command and preserve access to raw diagnostics.

No remote model may receive visitor health data.

## Review

Substantial medium-risk work uses `mc_reviewer`.

High-risk and final release-sensitive work uses both `mc_reviewer` and `mc_verifier`. They are independent and must not repair each other's findings.

AI review does not replace clinical, instrument-rights, privacy, legal, accessibility, or owner review.

A final convergence audit maps each acceptance item to direct evidence and classifies it as Satisfied, Partial, Missing, Contradicts, or Not tested.

## Owner-controlled actions

Do not perform any of these without exact owner authorization for the action:

- merge;
- deployment or production promotion;
- DNS or domain change;
- provider or billing activation;
- spending;
- real payment, refund, email, referral, or fulfillment;
- production-data access or mutation;
- public clinical, rights, legal, credential, customer, demand, or revenue claim;
- user contact or publication.

Approval to implement or open a pull request does not authorize release.

## Release evidence

Report separately:

1. local source change;
2. focused test results;
3. complete applicable local checks;
4. commit and pushed branch;
5. pull request and required checks;
6. merge;
7. deployment tied to the expected commit SHA;
8. direct production verification;
9. separately authorized provider, payment, referral, or customer-path verification.

A local test, build, preview, URL, dashboard, scheduled job, or configured value does not prove a later stage.

Before promotion, inspect the complete diff and run every applicable current test. The command authorities are `package.json` and `.github/workflows/`.

High-risk release evidence should cover every applicable rights-status check, protected-item snapshot, scoring boundary, crisis state, URL leakage, tracker and network behavior, storage, cache and referrer behavior, BFCache, canonical and sitemap output, schema, broken links, automated accessibility, keyboard, screen reader, responsive behavior, performance, security scanning, and production build.

Common broad checks are:

```bash
npm test
npm run lint:predeploy
npm run lint:content
npm run lint
npm run build
```

Do not claim keyboard, screen-reader, browser network, production performance, provider, rights, clinical, legal, or production behavior from a build alone.

## Repository-owned Codex layer

The reviewed Codex layer consists of:

- root `AGENTS.md`;
- `.codex/config.toml`;
- `mc_reviewer` and `mc_verifier`;
- `$mc-plan`, `$mc-run`, `$mc-debug`, and `$mc-audit`;
- focused policies under `docs/codex/`;
- deterministic task, context-budget, repository-map, doctor, and structural tests.

Do not create hidden or nested instruction files. Do not add project hooks without a separate reviewed need. Keep the automatic root instruction file under its configured byte limit. Keep the compatibility file for other assistants separate from Codex behavior.

## Rollback and done

Every material change needs a bounded rollback or fail-closed path. Reverting a commit is not enough when data, provider state, publication, cache, index, or user communication has already changed.

Work is done only when acceptance criteria are satisfied, applicable checks pass, no P0 or P1 finding remains, the complete diff is in scope, required human review is recorded, and release stages are stated accurately.

For every material decision ask whether it remains safe, accurate, supported, rights-cleared, private, accessible, useful, search-durable, maintainable, legally defensible, and beneficial to MindCheckTools. Ask whether the same decision still makes sense if organic traffic disappears. Stop the affected change when a critical answer is no.

---
name: mc-run
description: Execute an approved Ready MindCheckTools task with focused tests, independent review, and convergence verification.
---

# MindCheckTools run

1. Read the complete root `AGENTS.md` and `.codex/TASK.md`.
2. Run `node scripts/codex/task-check.mjs --ready`. Stop if it fails, the task no longer matches the owner request, or its base, rights, evidence, route, privacy, or release assumptions are stale.
3. Reverify repository identity, current `origin/main`, branch, worktree, overlapping pull requests, protection, required checks, risk, policies, context set, and protected areas.
4. Add context only when imports, references, records, tests, failures, or changed behavior require it. If a defect lacks reproduction or root-cause evidence, stop and use `$mc-debug`.
5. Set task status to `In progress`. Make the smallest complete change. Preserve unrelated work, protected facts, current gates, and owner-controlled boundaries.
6. Run focused tests while editing. After stabilization, run every applicable broad suite once. Repeat only after a relevant change or failure.
7. Record completed steps, exact commands, material results, unresolved risks, and one next action in `.codex/TASK.md`. Keep raw logs and sensitive data out.
8. Inspect the complete diff. Use `mc_reviewer` for substantial medium-risk work. Use both `mc_reviewer` and `mc_verifier` for high-risk or final release-sensitive work. Resolve findings from direct evidence and close each subagent after capturing its result.
9. Run `$mc-audit` in convergence mode. Classify every acceptance item as `Satisfied`, `Partial`, `Missing`, `Contradicts`, or `Not tested`. Report material unrequested work separately. Do not mark complete while a required item is not Satisfied.
10. Preserve final decisions and evidence in the pull request or proper tracked record, then delete `.codex/TASK.md`.
11. Report local work, branch, pull-request checks, merge, deployment, production, and required human review separately.

Never perform an owner-controlled release, production, provider, payment, publication, user-contact, or public clinical or legal action without exact authorization.

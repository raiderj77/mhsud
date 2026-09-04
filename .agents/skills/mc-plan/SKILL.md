---
name: mc-plan
description: Use for medium or high-risk, unclear, multi-file, cross-cutting, or multi-session MindCheckTools work.
---

# MindCheckTools plan

1. Read the complete root `AGENTS.md`.
2. Classify work risk, route classes, protected areas, and every policy category touched.
3. Load every matching `docs/codex/` policy, then the smallest exact source, test, instrument, rights, evidence, route, privacy, review, and release records required by those policies.
4. Verify repository identity, current `origin/main`, branch, worktree, recent relevant commits, overlapping pull requests, branch protection, and required checks.
5. Build an initial context set of no more than 12 files where feasible. Give a reason for each. Start from exact routes, symbols, imports, references, records, and tests. Expand only when evidence requires it.
6. One read-only explorer may map unfamiliar code when targeted search is insufficient. Close it after handoff. The parent owns decisions.
7. Do not overwrite an active `.codex/TASK.md` until its evidence is preserved or the owner authorizes replacement.
8. Create `.codex/TASK.md`:

```md
# [Outcome]
Status: Draft
Risk: Low | Medium | High
Base: [origin/main full SHA]
Route classes: None | N0 | H1 | H2 | H3 | H4
Protected areas: none | [exact areas]

## Policies and records
- `[exact path or current primary source]`

## Context set
- `[path]`: [why it is needed]

## Scope
[Included behavior and files]

## Excluded
[Explicit exclusions]

## Failure modes and rollback
[Material risks, stop conditions, fail-closed behavior, and rollback]

## Acceptance and coverage
| ID | Observable result | Step | Test or evidence |
| --- | --- | --- | --- |
| A1 | [Observable result] | 1 | `[command or inspection]` |

## Steps
1. [Bounded step and file owner]

## Independent checks
[none | mc_reviewer | mc_reviewer and mc_verifier]

## Readiness
[Ready | Blocked, with unresolved items]

## Next
[One exact action]
```

Keep the task under 900 words. Link to policies and records instead of copying them. Never place real health data, secrets, or raw logs in the task.

Run `node scripts/codex/task-check.mjs --required`, then perform a read-only consistency pass. Resolve conflicts, vague criteria, unmapped steps, missing proof, invalid ordering, and uncovered edge, failure, rollback, or fail-closed states. Every acceptance item must map to a step and evidence. Every step must map back to an acceptance item.

Set `Status: Ready` and `Readiness` to `Ready` only after the consistency pass succeeds. Then run `node scripts/codex/task-check.mjs --ready`.

High-risk work requires both `mc_reviewer` and `mc_verifier`. Stop when a material fact, boundary, criterion, reviewer, rights status, rollback path, or approval remains unresolved. Implementation authorization never authorizes merge, deployment, publication, provider changes, payments, production data, spending, user contact, or a public clinical or legal claim.

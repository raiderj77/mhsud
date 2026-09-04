---
name: mc-debug
description: Use when observed MindCheckTools behavior lacks a proven root cause or regression test.
---

# MindCheckTools debug

1. Read the complete root `AGENTS.md`. Classify risk, route classes, protected areas, and load every matching `docs/codex/` policy and exact record.
2. Use `$mc-plan` when the defect is multi-file, cross-cutting, protected, high risk, or likely to span sessions.
3. Record observed behavior, expected behavior, reproduction steps, environment, affected route or path, and evidence quality. Never include real health data.
4. Start with no more than 12 likely files where feasible, found through exact routes, symbols, imports, references, records, and tests. Expand only when evidence requires it.
5. Trace the real execution and data path plus existing tests. One read-only explorer is allowed for unfamiliar code. Close it after handoff.
6. Rank hypotheses. Do not edit production code until evidence supports a root cause or a narrow experiment.
7. Add a failing regression test first when practical. Confirm it fails for the expected reason. Otherwise record why and define repeatable alternate proof.
8. Apply the smallest repair to the proven cause. Never weaken a test, gate, allowlist, rights status, protected instrument definition, privacy boundary, or crisis control.
9. Run the regression test, adjacent focused tests, and applicable broad suites after stabilization.
10. Use `mc_reviewer` for substantial fixes and both `mc_reviewer` and `mc_verifier` for protected or high-risk fixes. Resolve findings before completion.
11. Report root cause, files, exact tests and results, untested areas, residual risk, human-review status, and release stage.

A disappearing symptom is not root-cause proof. A local pass is not pull-request, merge, deployment, production, rights, or clinical proof.

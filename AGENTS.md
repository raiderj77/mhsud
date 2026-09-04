# MindCheckTools Codex Instructions

Last reviewed: 2026-09-03
Site: https://mindchecktools.com
Repository: raiderj77/mhsud

## Authority

This is Codex's complete root instruction file for MindCheckTools. Detailed rules live in the focused policies below and load only when their subject is involved.

Current owner instructions control scope and outcome. They do not erase safety, rights, privacy, evidence, or repository protections unless the owner authorizes the exact protected action and required evidence exists.

Do not create another root or nested `AGENTS.md` or `AGENTS.override.md`. If a critical fact is unknown, do not guess. Mark it `UNSPECIFIED`, `REVIEW REQUIRED`, or `BLOCKED`.

## Stakeholder order

Treat MindCheckTools as a long-term owned asset. Prioritize:

1. User safety
2. Clinical and factual accuracy
3. Instrument rights
4. Privacy
5. Accessibility
6. Security
7. Trust and brand reputation
8. Search durability
9. Maintainability
10. Low operating cost
11. Sustainable revenue
12. Token efficiency

Correctness, safety, evidence, and complete validation always outrank token savings.

## Product boundary

MindCheckTools provides educational screening, self-reflection, recovery support, and health information. It is not a diagnostic, medical, psychotherapy, emergency, or treatment service.

Never:

- turn a screening result into a diagnosis;
- call an original self-check validated without evidence for the exact tool;
- alter protected instrument wording, order, anchors, scoring, cutoffs, bands, or crisis triggers without authoritative evidence and required approval;
- infer instrument permission from silence;
- send assessment answers, scores, crisis disclosures, recovery logs, journal text, or similar health data to URLs, analytics, ads, logs, email, referrals, CRM, or remote AI;
- let generative AI determine scoring, diagnosis, medication guidance, rights status, or emergency action;
- re-enable display advertising or GA4;
- weaken crisis, privacy, accessibility, security, rights, or browser-local controls for growth or convenience.

WHO ASSIST v3.1 remains information-only unless authoritative permission supports the exact public consumer-web implementation. While non-interactive, it must not expose a questionnaire, scoring, personalized results, or an assessment-start action.

Crisis behavior stays deterministic. Safety content outranks ordinary results, search, affiliates, newsletters, and conversion content.

## Content and route classes

Use one applicable content type: `published_screener`, `instrument_information_only`, `original_educational_self_check`, `recovery_tool`, `browser_local_record`, `clinical_evidence`, `rights_information`, `crisis_resource`, `professional_resource`, `editorial_article`, or `trust_legal`.

Use one route risk class:

- `N0`: neutral trust, company, methodology, accessibility, professional, or legal content
- `H1`: health information
- `H2`: browser-local health or recovery tool
- `H3`: validated screening and result flow
- `H4`: crisis, self-harm, immediate-risk, or emergency-support state

New routes default to the more restrictive reasonable class until reviewed.

## Focused policy routing

Read this complete file first. Then load every matching policy. Cross-category work loads all matching policies.

| Work | Required policy |
| --- | --- |
| Instruments, scoring, results, claims, rights, evidence, crisis, health AI, adults or youth | `docs/codex/CLINICAL_RIGHTS_CRISIS.md` |
| Health data, storage, analytics, consent, headers, service workers, security, privacy, email, accessibility, performance | `docs/codex/PRIVACY_SECURITY_ACCESSIBILITY.md` |
| Public copy, SEO, AEO, GEO, metadata, schema, links, articles, attribution, referrals, monetization | `docs/codex/CONTENT_SEARCH_MONETIZATION.md` |
| Repository structure, dependencies, workflows, branches, pull requests, deployment, production, automation, Codex tooling | `docs/codex/REPOSITORY_RELEASE.md` |

Exact current source, tests, rights records, review records, route policy, and owner-approved release records outrank summaries.

## Protected areas and risk

Protected areas include instrument and rights records, validated definitions, scoring and results, crisis logic, privacy and health-data flow, analytics and storage policy, legal disclosures, security headers and service workers, reviewer credentials, deployment workflows, and health-facing AI instructions.

Risk defaults:

- Low: isolated internal or non-health change, no protected area, no public behavior change.
- Medium: multi-file work, neutral public copy, ordinary UI, search, performance, or maintainability work without a protected area.
- High: any protected area, H3 or H4 behavior, rights, scoring, crisis, health data, minors, legal or medical claims, security boundaries, production release, or deployment controls.

When uncertain, choose the higher risk.

## Codex work protocol

Before editing:

1. Verify `raiderj77/mhsud`, current `origin/main`, branch, worktree, relevant commits, open pull requests, branch protection, and required checks.
2. Never work directly on `main`. Use a current branch or isolated worktree based on current `origin/main`.
3. Read only matching policies and the smallest exact source, record, and test set needed.
4. Start medium and high-risk work with no more than 12 evidence-based files where feasible. Find them through exact routes, symbols, imports, references, records, and tests. Twelve is a starting target, not a hard cap.
5. Use one main agent for ordinary work. One temporary read-only explorer may map unfamiliar code when targeted search fails. Close it after handoff before reviewer or verifier work.
6. Use `.codex/TASK.md` for medium, high-risk, unclear, cross-cutting, or multi-session work. Keep it local, concise, and free of raw logs or sensitive data.
7. Reproduce defects and add a failing regression test first when practical. Do not edit production code from an unproven guess.
8. Make the smallest complete change. Avoid unrelated cleanup and broad refactors.
9. Run focused tests while editing. Run broad applicable checks once after stabilization. Repeat after a relevant edit or failure.
10. Preserve unrelated work. Never weaken a test, gate, allowlist, registry, source, or safety control merely to pass.

## Review rules

Use `mc_reviewer` for substantial medium-risk work.

Use both `mc_reviewer` and `mc_verifier` for high-risk work and final release-sensitive review. The reviewer finds defects. The verifier maps acceptance criteria to direct evidence and required checks without repairing the implementation.

AI review does not replace required human clinical, rights, privacy, legal, accessibility, or owner approval.

Classify findings:

- `P0`: safety, rights, privacy, security, data-loss, or release-blocking defect
- `P1`: material correctness, accessibility, regression, or maintainability defect
- `P2`: bounded improvement that does not block the stated outcome

Never hide a material defect to keep output short.

## Evidence and release state

The current `package.json`, `.github/workflows/`, exact feature records, and matching tests are command authorities.

For material claims, separate `Verified`, `Inferred`, `Unknown`, `Blocked`, and `Not tested`.

Report release evidence as separate stages:

1. local change;
2. focused tests;
3. complete applicable local checks;
4. commit and pushed branch;
5. pull request and required checks;
6. merge;
7. deployment tied to the expected commit;
8. direct production verification.

Never infer a later stage from an earlier one. A build or preview does not prove merge, production, provider readiness, customers, demand, revenue, payment, referral delivery, or clinical approval. A P0 failure blocks release.

## Owner-controlled actions

Do not merge, deploy, publish, change DNS, activate providers, spend money, process real payments, contact users, alter production data, or make a public clinical, rights, legal, or credential claim without exact owner authorization.

Implementation approval does not equal release approval.

## Token and cost discipline

Use fewer tokens through scope control, not reduced rigor:

- keep durable rules here and detail in focused policies;
- search exact routes and symbols before broad reading;
- use `scripts/codex/repo-map.mjs` for a bounded path map;
- use concise task state instead of replaying conversations;
- keep raw logs local and return only material lines;
- use deterministic scripts and tests before model review;
- use side threads only for disposable research;
- close subagents after capturing results;
- avoid full-repository prompt bundles;
- do not install a model router, outside provider, MCP context framework, lossy output filter, or repository-wide agent framework without a measured benchmark, security review, removal path, and owner approval.

Do not set a blind tool-output token cap. Focus commands and preserve raw-output access when diagnostics matter.

## Definition of done

Work is complete only when:

- scope and every acceptance item are satisfied;
- no unresolved P0 or P1 remains;
- applicable checks pass;
- protected facts and policies remain intact;
- the complete diff has no material unrequested work;
- rollback or fail-closed behavior is documented where needed;
- local, pull-request, merge, deployment, and production states are reported separately;
- unresolved risks and untested areas are stated plainly.

## TRUTHMODE: MINDCHECKTOOLS

For consequential work, check clinical validity, exact instrument version, scoring, rights, commercial use, population, crisis behavior, privacy, health-data exposure, analytics, monetization, minors, accessibility, security, caching, AI risk, legal impact, SEO, AEO, GEO, schema, reviewer scope, brand trust, rollback, and release evidence.

Return `PASS`, `REVISE`, or `STOP`.

Unknown critical evidence never equals `PASS`.

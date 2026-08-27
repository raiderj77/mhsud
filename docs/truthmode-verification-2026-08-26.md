# MindCheckTools verification and repair — August 26, 2026 (Pacific)

## Status: YELLOW — bounded technical checks pass; release and clinical gates remain

This is not an error-free, clinical-safety, legal-compliance, or WCAG certification.

## Verified evidence

- Correct repository: `raiderj77/mhsud`. Work was isolated to the existing clean `codex/athens-informational-copy-2026-08-23` worktree. The original checkout and unrelated branches were not edited.
- Live `mindchecktools.com` resolved to the Ready production deployment on **mhsud-sdpt**, created August 23. Main was `15ee42136082e02613b8f1ef239d94d3b92f1dc5`. The similarly named legacy **mhsud** project is not treated as the production authority.
- PR #124 was open and draft at the start, containing the existing Athens information-only copy correction. No merge or production deployment was performed in this run.
- **88/88 live sitemap entry URLs passed**, including direct HTTP 200, exact canonical origin/path, title, description, one H1, parseable JSON-LD, indexing directives, frame/content-type protection, and applicable sensitive-route cache/referrer/tag exclusions. All internal route links discovered from these pages resolved within that same maintained set. This is not an external-link or fragment-target certification.
- **74 distinct directory-linked public pages checked at both 390×844 and 1440×1000:** one H1, no horizontal document overflow, and a 988 contact link at observation. These included tools, information pages, score *explainers*, and trust pages—not personal results. Seven rebuilt local entry pages were also checked at mobile width.
- DASS and Athens remain indexable HTTP 200 information pages. DASS has no questionnaire, scoring journey, or personal result; its separate PHQ-4/PHQ-9/GAD-7 links and non-equivalence language remain intact.
- Public Jason Ramirez, CADC-II identity, credentials, citations, non-diagnostic language, instrument gates, and disabled-ad state were preserved. Credentials were not independently re-certified.

## Verified defects repaired locally

1. **Analytics URL detail:** homepage GA code previously retained selected campaign parameters. Removed every query/fragment from the event URL; additionally refuse to load GA on decorated URLs because vendor code can independently inspect the document location. Recheck consent/GPC before delayed initialization and provide sanitized configuration defaults. This deliberately reduces GA campaign attribution.
2. **GPC/runtime boundary:** aggregate analytics previously checked GPC only when filtering events, not before mounting its runtime. It now waits for a browser privacy check, fails closed when browser state is unavailable, and rechecks each event. Navigation cleanup now also recognizes the aggregate runtime, including transitions from allowlisted professional pages into excluded tools.
3. **Crisis contact clarity:** homepage/footer numbers now explicitly identify U.S. services and direct other visitors to local support. The homepage has separate call/text 988 actions; the footer's call-only card no longer labels its telephone action as texting. Added local emergency wording without changing clinical guidance.
4. **Misleading audit result:** the previous audit described result-page ads as acceptable and skipped that check. The replacement checks for forbidden tags on excluded entry routes, rejects off-domain canonicals and malformed JSON-LD, checks index/cache/referrer behavior, applies timeouts, and refuses result/API/query-bearing crawl targets. Static checks are explicitly not browser-network proof.

## Primary sources checked

- [Official 988 help](https://988lifeline.org/get-help/): U.S./territory scope, separate phone/text services, free 24/7 support.
- [Crisis Text Line](https://www.crisistextline.org/): HOME to 741741 and separate international support.
- [UNSW DASS FAQ](https://dass.psy.unsw.edu.au/DASSFAQ.htm): public-domain copying is distinct from restrictions on public electronic administration and direct respondent interpretation. No instrument items were reproduced.
- SAMHSA pages returned a research-tool access error/403; that was **not** classified as a broken visitor link. Existing contact information was retained, not claimed newly verified.

## Validation results

- Full unit/regression suite: **163 passing tests** on final test set; includes executable synthetic URL/GPC/filter cases, audit false-positive fixtures, privacy, instrument-rights, sharing, non-diagnostic, and accessibility regressions.
- ESLint: no warnings/errors. Content lint and predeploy gates passed.
- Production build passed, including type checks and 238 generated pages. Generated route count includes quarantined source routes and is not the number of public indexed pages. Framework notices about deprecated `next lint` and edge-runtime static generation remain non-fatal.
- `npm audit` and production-only audit: zero known reported vulnerabilities at run time; not a penetration test or a guarantee against unknown vulnerabilities.
- Local production-server entry audit: **88/88 passed**. Production audit repeated independently: **88/88 passed**. `git diff --check` passed.
- Evidence: `production-entry-audit-2026-08-26.json`, `local-entry-audit-2026-08-26.json`, and `browser-entry-audit-2026-08-26.json` in this directory. Timestamps use UTC; the run date is Pacific time.

## Inferences

- The confirmed code changes reduce accidental analytics disclosure and make crisis actions less ambiguous. No health-data disclosure was observed or inferred from these defects.
- Archived blog findings are not current public-page defects: the Next.js redirect policy sends those URLs to maintained routes. Existing PR #124's archival Athens cleanup is retained, but no broad rewrite of inaccessible articles was attempted.

## Unknowns and human review

- The rights register still requires topic-qualified review and exact-form/scoring/attribution sign-off for interactive published instruments. General CADC-II attribution is not proof of broader specialty review. Missing rights-holder permissions must not be represented as granted.
- No assessment gate was accepted, no answers entered, and no personal result opened. Full result-flow/browser-device coverage is intentionally outside this run. Unit tests use synthetic fixtures only.
- This run did not audit every article sentence, every external citation/affiliate destination, all assistive technologies, live analytics request payloads, or all third-party service behavior.
- GSC/GA4 traffic, revenue, conversion impact, and provider-side measurement configuration were not reviewed; missing evidence is not zero traffic. No health data, analytics identifiers, or secrets are included in these evidence artifacts.
- New branch CI/preview checks must finish after push. Earlier green checks do not validate a new commit. Preview success is not production deployment.

## Files and handoff

Runtime changes are confined to homepage copy, Footer, ConsentAnalytics, PrivacySafeAggregateAnalytics, and SensitiveRouteLifecycle. Audit tooling and focused regression/evidence files accompany them. Existing committed Athens edits remain unchanged.

Keep PR #124 draft until owner release approval and review of the changed crisis wording. No outreach, account changes, spending, merge, or production release is authorized by this verification run.

**Single next best action:** review the focused PR #124 privacy/crisis fixes and its current CI, then explicitly approve production release. Re-run the entry audit after an approved release. Clinical/rights sign-off remains a separate requirement, not something a green build can satisfy.

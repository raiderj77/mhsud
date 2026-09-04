# MindCheckTools Clinical, Instrument Rights, and Crisis Policy

Load this file for screeners, self-checks, scoring, results, health claims, evidence, instrument rights, crisis behavior, health-related AI, or adult and youth population work. The root `AGENTS.md` remains controlling. Exact current source, tests, rights records, primary sources, and recorded human review control bounded facts.

## Product and content boundaries

MindCheckTools provides education, screening, self-reflection, recovery support, and health information. It does not diagnose, treat, prescribe, provide psychotherapy, determine emergency safety, or replace a qualified professional.

Classify each applicable page or tool as:

- `published_screener`
- `instrument_information_only`
- `original_educational_self_check`
- `recovery_tool`
- `browser_local_record`
- `clinical_evidence`
- `rights_information`
- `crisis_resource`
- `professional_resource`
- `editorial_article`
- `trust_legal`

A published screener and an original educational self-check are not interchangeable. Never describe an original tool as validated unless formal evidence supports the exact version, population, wording, scoring, and use.

## Instrument rights

Before public reproduction, administration, scoring, translation, adaptation, monetization, or electronic display, verify the exact instrument and use from authoritative evidence.

The controlling record for each instrument should identify:

- exact title, version, owner, rights holder, and primary source;
- public electronic administration and reproduction status;
- commercial-use, scoring, modification, and translation status;
- required attribution and approval steps;
- intended and validation populations, setting, language, and exclusions;
- exact scoring, cutoffs, limitations, and high-risk items;
- reviewer, credential, review scope, review date, and next review date;
- current site status and route behavior.

Allowed states:

- `APPROVED_INTERACTIVE`
- `INFORMATION_ONLY`
- `WRITTEN_PERMISSION_REQUIRED`
- `BLOCKED`
- `RETIRED`

Only `APPROVED_INTERACTIVE` may expose protected questionnaire items, answer choices, scoring, cutoffs, personalized results, or an assessment-start action.

Never infer permission from silence, academic availability, a journal article, a downloadable copy, or another site's use. Paper access does not establish public commercial electronic rights.

Current rights records include `docs/instrument-evidence-rights-register.md`, `docs/instrument-rights-matrix-2026-08-05.md`, and `docs/instrument-rights-revalidation-2026-08-22.md`. Search for newer controlling evidence before relying on them.

WHO ASSIST v3.1 remains `INFORMATION_ONLY` until authoritative permission supports the exact MindCheckTools public consumer-web implementation. While non-interactive, it must have no questionnaire, scoring, personalized result, or assessment-start action.

## Protected instrument fidelity

Never rewrite validated questions for SEO, readability, tone, UX, or conversion. Do not change:

- item wording or order;
- response labels, anchors, values, or time periods;
- required or optional behavior;
- reverse scoring;
- calculations, missing-response handling, cutoffs, or bands;
- high-risk item handling;
- result meaning or instrument attribution.

Keep validated definitions separate from surrounding editorial copy. Use snapshots, hashes, or exact fixtures where the current repository pattern supports them.

Every interactive published screener needs regression proof for minimum and maximum scores, each cutoff, one point below and above each cutoff, missing responses, high-risk responses, and representative known combinations. A scoring or protected-text regression is P0.

Do not change a formula, definition, cutoff, or source merely to make a test pass.

## Clinical language and claims

Preferred language:

- screening
- screening result
- score
- score range
- educational interpretation
- symptoms reported
- discuss with a qualified professional

Do not tell a user a result proves or excludes a diagnosis, proves safety, determines treatment need, predicts outcome, or establishes a medication decision.

Every result should state what the result does not establish.

Consequential health claims must trace to approved evidence. Prefer:

1. government health agencies;
2. instrument owners;
3. original validation studies;
4. professional organizations;
5. systematic reviews;
6. strong peer-reviewed research;
7. high-quality secondary sources only when primary material is unavailable.

Do not invent prevalence, accuracy, sensitivity, specificity, validation, prognosis, treatment effect, consensus, or professional-use claims.

Reviewer credentials must match the subject reviewed. A substance-use counseling credential must not appear as psychiatric, psychological, neurological, medical, legal, or rights-holder validation. Record reviewer, credential, scope, date, evidence set, and exclusions.

## Crisis and self-harm behavior

Crisis logic must be deterministic, testable, and separate from ordinary result, search, affiliate, newsletter, analytics, and AI behavior.

When a response activates a safety state:

- safety content appears before ordinary interpretation;
- no ad, affiliate, newsletter, or conversion prompt competes with it;
- no optional analytics or click tracking runs;
- the flow remains mobile, keyboard, screen-reader, and reduced-motion accessible;
- the approved crisis wording and resources load without generative AI;
- the state does not enter URLs, logs, referrals, email, or remote AI.

For U.S. users, preserve clear access to the 988 Suicide & Crisis Lifeline, Crisis Text Line by texting HOME to 741741, SAMHSA's National Helpline at 1-800-662-4357 where relevant, and emergency services for immediate danger. Preserve an international path where appropriate. Verify resource details before changing them.

A high-risk item must not be neutralized by a low total score. Depression screening and suicide-risk determination are not the same function. Do not tell a person the site determined they are safe.

## AI boundary

AI may assist internally with source research, claims review, rights issue detection, accessibility review, code review, test generation, and content-gap research.

AI must not independently:

- alter instrument wording, anchors, order, scoring, cutoffs, or bands;
- determine rights or permission;
- diagnose a visitor;
- create medication instructions;
- classify emergency risk from open-ended output;
- replace crisis language or logic;
- publish unsupported health claims;
- receive raw answers, scores, crisis disclosures, recovery logs, or journal text.

Missing evidence means `UNSPECIFIED`. Unclear rights mean `BLOCKED: RIGHTS UNVERIFIED`. Conflicting evidence means `REVIEW REQUIRED`.

## Adults, youth, and population

Every instrument needs an intended age range and population disclosure.

Interactive tools default to adults unless the exact youth use passes rights, evidence, population, privacy, consent, clinical, crisis, and legal review. Youth information pages must not silently become youth administration.

Do not collect identifying or health information from children under 13 without an explicitly reviewed compliant architecture.

Do not apply evidence from one population, setting, language, or version to another without support. Translation and cultural adaptation require exact evidence and rights.

## Required context and checks

Before editing, search the affected route, component, instrument definition, scoring path, result path, safety path, rights and evidence records, reviewer record, links, sitemap or metadata, and focused tests.

Use the current `package.json` and workflow as command authorities. During implementation, run the smallest affected `node --test tests/<focused-file>.test.mjs` commands. Before promotion, run every applicable current test plus:

```bash
npm test
npm run lint
npm run build
```

Perform manual keyboard, screen-reader, mobile, and clinical or rights review when the change requires evidence that static tests do not prove.

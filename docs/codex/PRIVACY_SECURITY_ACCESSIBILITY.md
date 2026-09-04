# MindCheckTools Privacy, Security, Accessibility, and Performance Policy

Load this file for health data, browser storage, analytics, consent, cookies, URLs, logs, error reporting, headers, middleware, service workers, email, third-party scripts, security, accessibility, or performance work. The root `AGENTS.md` remains controlling. Exact current source, route policy, tests, legal text, and approved records control bounded facts.

## Health-data boundary

Preserve no-account, browser-local screening wherever feasible.

Questionnaire answers, scores, severity, crisis state, recovery logs, journal text, safety plans, and similar health-sensitive entries must not intentionally enter:

- paths, queries, fragments, canonical URLs, referrers, or share URLs;
- analytics, ads, audience systems, or custom events;
- server or edge logs;
- error-monitoring payloads;
- email, CRM, newsletter profiles, or support tools;
- affiliate, referral, treatment, or partner URLs;
- remote AI prompts or caches;
- public issues, pull requests, screenshots, examples, or test fixtures.

Use fictional data in development and tests.

Do not add accounts, synchronization, server storage, or remote processing for health-sensitive data without a separate product, privacy, security, legal, regulatory, retention, deletion, breach-response, and threat-model review.

Use technically defensible wording:

> Your screening answers and scores are processed locally and are not intentionally sent to MindCheckTools.

Do not promise "100% private," "nothing leaves your device," or another absolute statement because ordinary hosting requests still create infrastructure metadata.

## Browser storage and lifecycle

Validated screener answers should normally remain active-session memory only.

Only an intentionally persistent local tool may use `localStorage` or similar storage. It must:

- disclose what is saved and where;
- explain shared-device risk;
- use centrally inventoried keys;
- provide clear delete and reset controls;
- avoid remote sync unless separately approved;
- clear every related key when the user requests deletion.

No undocumented storage key is allowed.

Protect sensitive state from URL history, browser back-forward cache, service-worker caches, shared caches, previews, print output, and accidental export. Leaving a screener should clear answers according to the approved UX. Completed answers must not silently reappear through BFCache restoration.

State-bearing H3 and H4 responses should use private no-store behavior and `Referrer-Policy: no-referrer` where the architecture supports it. Keep sensitive routes and state out of the service-worker cache.

## Route policy and analytics

`src/lib/routePolicies.ts` and its matching tests are the current executable route-policy starting point. Search for all current callers and newer records before changing it.

Sensitive routes default to no optional analytics. Preserve the narrow neutral-route allowlist for privacy-safe aggregate Vercel Web Analytics and suppression when Global Privacy Control is active.

Do not add GA4, tag managers, replay tools, condition-specific custom events, score events, crisis events, instrument-answer events, or health-interest audiences.

Do not track individual crisis-resource clicks.

A configured analytics package or ID does not prove safe events, consent, route exclusion, or production traffic. Verify the actual browser network behavior.

## Display advertising and referrals

MindCheckTools has a permanent no-display-ad rule. Do not restore AdSense, programmatic ads, retargeting, condition audiences, behavioral advertising, or score and crisis targeting.

Never send answer, score, severity, inferred condition, crisis state, or substance information to a referral or affiliate destination.

## Security and secrets

Never inspect, expose, or commit real environment values, credentials, tokens, passwords, private keys, provider payloads, customer data, or personal health data. `.env.example` contains fictional inventory only.

Keep secrets and privileged calls server-side. Preserve restrictive security headers, HTTPS, HSTS, frame controls, content-type protection, dependency scanning, secret scanning, and security workflows that add material value. Use OWASP ASVS and NIST CSF as reference frameworks.

Public verification values designed for disclosure, such as the IndexNow key file, are not private secrets. Retain exactly one canonical value and do not reuse this exception for credentials.

For a sensitive server route, preserve where applicable:

- strict input validation and bounds;
- same-origin and authorization controls;
- abuse protection and rate limits;
- idempotency and current-state checks;
- `Cache-Control: no-store`;
- `Referrer-Policy: no-referrer`;
- `X-Robots-Tag: noindex, nofollow`;
- generic public errors;
- detailed private diagnostics without sensitive values;
- no sensitive logging;
- fail-closed behavior when evidence is missing, stale, ambiguous, or contradictory.

Do not weaken the Content Security Policy or other headers to add marketing technology.

Every third-party script or service needs a documented purpose, route scope, data exposed, storage, retention, privacy impact, security impact, cost, and removal path. Avoid overlapping services.

## Email

Do not combine newsletter identity with health state.

Never record which screener, score, severity, condition page, recovery tool, or crisis resource a subscriber used. Suppress email capture during active assessment and crisis states. Do not place answers or results in ordinary email.

## Accessibility and cognitive safety

Target WCAG 2.2 AA. Core flows require automated checks plus manual keyboard and screen-reader review when affected.

Design for people who may be anxious, depressed, distracted, overwhelmed, intoxicated, withdrawing, distressed, or cognitively fatigued.

Preserve or improve:

- programmatic labels and field instructions;
- keyboard operation without traps;
- visible focus;
- logical headings and landmarks;
- accessible names;
- field-linked errors and recovery guidance;
- result, status, and error announcements;
- adequate targets and spacing;
- zoom and responsive reflow;
- text alternatives for meaningful images;
- reduced-motion behavior;
- plain language and predictable navigation;
- editing answers before completion;
- one primary decision at a time.

Do not rely on color alone or essential placeholder text. Avoid countdowns, false urgency, confetti, competitive severity, symptom streaks, guilt, scare tactics, and clinical gamification.

High-risk safety actions must visually and semantically outrank normal results. Do not claim screen-reader behavior from static code inspection alone.

## Mobile and performance

Mobile first. Preserve single-column usability, readable line length, large controls, no horizontal scroll, reliable Back behavior, fast loading, and accessible crisis actions.

Core Web Vitals goals at the 75th percentile:

- LCP at or below 2.5 seconds;
- INP at or below 200 milliseconds;
- CLS at or below 0.1.

Keep third-party JavaScript near zero on health routes. Do not delay safety information behind a large client bundle.

Performance work must not remove required content, labels, focus behavior, source information, privacy controls, or safety logic. Field performance requires real measurement. A local Lighthouse or build result is not production field evidence.

## Legal and incident boundary

Legal pages must describe actual behavior. Maintain applicable Privacy Policy, Terms, Disclaimer, Accessibility Statement, consumer-health-data disclosures, privacy choices, and instrument-rights information. Do not claim HIPAA compliance, FDA approval, clinical approval, medical review, legal compliance, or breach immunity without documented support.

HIPAA applicability depends on the business model. Reassess before provider, hospital, health-plan, EHR, employer, white-label clinical, or business-associate integration.

Material changes to health data require review of applicable FTC health/privacy rules, state consumer-health laws, California requirements, GDPR or UK GDPR where applicable, and COPPA where youth is involved.

Preserve an incident and health-breach response path covering detection, containment, evidence preservation, legal triage, vendor escalation, deletion propagation, notification analysis, and postmortem.

## Required context and checks

Before editing, read the affected client and server paths, `src/lib/routePolicies.ts`, `src/middleware.ts`, analytics loader and allowlists, storage keys, service worker, headers, legal copy, environment contract, and focused tests.

Run focused tests while iterating. Before promotion, run every applicable current check plus:

```bash
npm test
npm run lint
npm run build
```

Use browser network inspection, storage inspection, keyboard testing, screen-reader testing, mobile-width testing, and header inspection when the acceptance criteria require evidence beyond static tests.

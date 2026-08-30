# MindCheckTools AGENTS.md

Last reviewed: 2026-08-28
Site: https://mindchecktools.com
Repository: raiderj77/mhsud

## Authority

This file is the single project-specific source of truth for AI agents and automated development work on MindCheckTools.

If another repository instruction conflicts with this file, this file wins for MindCheckTools.

Priority:
1. AGENTS.md
2. Explicit current owner instruction
3. CLAUDE.md
4. Other repository docs, historical prompts, and portfolio standards

Do not duplicate this rulebook into another long governance file. Keep CLAUDE.md as a short bridge to AGENTS.md.

## Stakeholder standard

Treat MindCheckTools as a long-term owned asset.

Prioritize, in order:
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

Do not trade safety, rights, privacy, or trust for traffic, conversion, backlinks, publication speed, or short-term revenue.

If a critical fact is unknown, do not guess.

## Product boundary

MindCheckTools is an educational screening, self-reflection, recovery-support, and health-information site.

It is not a diagnostic service, medical provider, psychotherapy provider, emergency service, treatment provider, or substitute for a qualified professional.

A screening score remains a screening score. Never convert it into a diagnosis.

Original MindCheckTools self-checks must not appear clinically validated unless formal validation supports the exact tool.

## Content and route classes

Every health page or tool must use one content type:

- published_screener
- instrument_information_only
- original_educational_self_check
- recovery_tool
- browser_local_record
- clinical_evidence
- rights_information
- crisis_resource
- professional_resource
- editorial_article
- trust_legal

Every route must have a risk class:

- N0: neutral trust, company, methodology, accessibility, professional, or legal content
- H1: health information
- H2: browser-local health or recovery tool
- H3: validated screening and result flow
- H4: crisis, self-harm, immediate-risk, or emergency-support state

New routes default to the more restrictive reasonable class until reviewed.

## Instrument rights are a release gate

Never reproduce, administer, score, monetize, translate, adapt, or publicly display a published instrument until rights for the exact version and use are verified from an authoritative source.

Maintain an instrument registry with:
- exact instrument/version
- owner and primary source
- rights holder
- public administration status
- commercial-use status
- reproduction/electronic/scoring rights
- modification and translation restrictions
- required attribution
- intended and validation populations
- scoring method and cutoffs
- limitations
- reviewer and reviewer scope
- rights/evidence review dates
- next review date
- current site status

Allowed statuses:
- APPROVED_INTERACTIVE
- INFORMATION_ONLY
- WRITTEN_PERMISSION_REQUIRED
- BLOCKED
- RETIRED

Only APPROVED_INTERACTIVE may expose protected questionnaire items, answer choices, scoring, cutoffs, personalized results, or an assessment-start action.

Never infer permission from silence. Academic availability is not commercial web permission. Paper rights do not automatically cover electronic administration.

### WHO ASSIST v3.1

Treat WHO ASSIST v3.1 as INFORMATION_ONLY until authoritative permission supports the exact public consumer-web implementation.

Until then:
- no interactive questionnaire
- no scoring
- no personalized results
- no Begin Assessment action
- retain educational information, evidence, limitations, sources, and rights explanation
- add a regression guard preventing interactive administration while status remains non-interactive

This is a P0 release issue.

## Protected validated content

Never rewrite validated question text for SEO, readability, UX, conversion, tone, or design.

Never alter question order, answer anchors, scales, time periods, scoring, reverse scoring, cutoffs, severity bands, or missing-response behavior without authoritative evidence and approval.

Keep validated instrument definitions separate from editorial copy.

Use snapshots or hashes to detect accidental item changes.

Every validated screener needs golden tests for:
- minimum score
- maximum score
- every cutoff boundary
- one point below and above each cutoff
- missing-answer handling
- high-risk response handling
- representative known combinations

A scoring regression blocks release.

## Clinical language

Preferred terms:
- screening
- screening result
- score
- score range
- educational interpretation
- symptoms reported
- discuss with a qualified professional

Do not tell a user a screener proves a diagnosis, rules one out, proves safety, or determines whether treatment is needed.

Every result page must clearly explain what the result does not establish.

## Evidence and review

Consequential health claims must trace to approved evidence.

Prefer:
1. government health agencies
2. instrument owners
3. original validation studies
4. professional organizations
5. systematic reviews
6. strong peer-reviewed research
7. high-quality secondary sources only when primary material is unavailable

Do not invent prevalence, accuracy, validation, prognosis, or treatment-effect numbers.

Reviewer credentials must match the reviewed subject. Do not portray a substance-use counseling credential as psychiatric, psychological, neurological, or medical validation.

Record reviewer, credential, review scope, date, and limitations.

## Crisis safety

Crisis behavior must be deterministic and separate from ordinary SEO, conversion, affiliate, or AI logic.

When a response requires an immediate safety state, safety content outranks the normal result.

For U.S. users, clearly surface 988 and emergency services for immediate danger. Provide an international support path where appropriate.

H4 states must:
- load without display ads
- load without optional analytics
- contain no affiliate or newsletter CTA
- remain keyboard and screen-reader accessible
- work well on mobile
- place safety content before ordinary interpretation
- avoid unnecessary animation
- never depend on generative AI

Never track individual crisis-resource clicks.

## Privacy architecture

Preserve no-account, browser-local screening wherever feasible.

Questionnaire answers and scores must not intentionally enter:
- URLs, query strings, or fragments
- analytics
- advertising systems
- server logs
- error-monitoring payloads
- CRM
- email
- affiliate or referral URLs
- remote AI prompts

Do not add server-side storage for screening answers without a separate privacy, security, regulatory, legal, and product review.

Use accurate privacy language such as:
"Your screening answers and scores are processed locally and are not intentionally sent to MindCheckTools."

Avoid absolute promises such as "100% private" or "nothing ever leaves your device."

## Browser storage

Validated screener answers should normally remain memory-only.

Only intentionally persistent tools may use localStorage.

For every local record:
- disclose what is stored
- disclose that it remains in the browser
- explain shared-device risk
- provide a clear delete/reset control
- inventory every storage key

No undocumented storage keys.

## Sensitive-route protection

Preserve:
- Referrer-Policy: no-referrer on sensitive routes where appropriate
- private/no-store behavior for state-bearing sensitive responses
- no sensitive caching by service workers
- BFCache regression testing
- no sensitive content in telemetry or error reporting

Do not weaken security headers to add marketing technology.

## Analytics

Use one lightweight privacy-safe aggregate analytics system.

Current preferred implementation:
- Vercel Web Analytics
- neutral allowlisted routes only
- no custom sensitive events
- no query strings or fragments
- suppress when Global Privacy Control is active

Do not run GA4 on MindCheckTools.

Sensitive health routes default to analytics off.

Never send answers, scores, severity, diagnosis, crisis state, recovery logs, journal content, or instrument responses to analytics.

Prefer Search Console, Bing Webmaster Tools, and aggregate search data for growth analysis.

## Permanent no-display-ad rule

MindCheckTools does not use display advertising.

Do not add or reactivate:
- Google AdSense
- programmatic display ads
- behavioral advertising
- retargeting pixels
- mental-health audience building
- condition-based advertising
- score-based advertising
- crisis-based advertising

Remove dormant advertising code, consent branches, CSP domains, policy text, ads.txt, metadata, and tests after dependency checks pass.

## Health referrals and monetization

Never route a paid healthcare recommendation from answers, score, severity, inferred diagnosis, crisis status, or substance disclosed.

Never pass health-state information to referral partners.

Any compensated healthcare referral arrangement requires qualified legal review before launch.

Any approved affiliate relationship must remain separate from scoring and crisis flows and receive no sensitive data.

Long-term monetization should favor professional resources, B2B tools, organization licensing where rights permit, and other products that do not depend on selling user distress.

## AI policy

Do not send assessment answers, scores, crisis disclosures, recovery logs, or journal text to remote generative models.

Do not use AI to diagnose users, override validated scoring, change crisis logic, or improvise emergency instructions.

AI may assist internally with:
- source research
- claims QA
- rights-review assistance
- SEO/AEO/GEO review
- accessibility review
- code review
- test generation
- broken-link checks
- content-gap research

AI must never independently alter:
- protected validated questions
- response anchors
- scoring
- cutoffs
- severity bands
- crisis triggers
- medication guidance
- instrument-rights determinations

If evidence is missing: UNSPECIFIED
If rights are unclear: BLOCKED: RIGHTS UNVERIFIED
If evidence conflicts: REVIEW REQUIRED

## Adults and youth

Every instrument must state intended age range.

Interactive tools default to adults unless the exact youth implementation passes rights, evidence, population, privacy, clinical, crisis, and legal review.

Do not solicit identifying or health information from children under 13 without an explicitly reviewed COPPA-compliant architecture.

## UI and UX

Target WCAG 2.2 AA.

Core flows require automated checks plus manual keyboard and screen-reader review.

Design for users who may be anxious, depressed, distracted, overwhelmed, intoxicated, withdrawing, distressed, or cognitively fatigued.

Use:
- plain language
- short paragraphs
- clear headings
- consistent controls
- large touch targets
- visible focus
- predictable Back behavior
- clear progress
- one primary task at a time
- reduced-motion support

Avoid:
- countdowns
- artificial urgency
- confetti
- symptom/severity streaks
- competitive scoring
- scare tactics
- guilt
- manipulative conversion design
- unnecessary animation

Validated screening UX must preserve instrument fidelity.

Result pages should present:
1. tool name
2. score
3. validated range
4. plain-language meaning
5. what the result does not mean
6. safety information when applicable
7. evidence-based next step
8. instrument source
9. evidence/methodology links
10. privacy reminder
11. reviewer scope
12. last review date

Do not lead result pages with marketing, affiliate links, newsletter capture, or conversion pressure.

Users must immediately distinguish:
- Published Screener
- Information Only
- Original Educational Tool
- Recovery Tool

## Mobile and performance

Mobile first.

Preserve:
- single-column usability
- large controls
- readable line length
- no horizontal scroll
- reliable Back behavior
- fast loading
- accessible crisis actions

Core Web Vitals targets at the 75th percentile:
- LCP <= 2.5 seconds
- INP <= 200 ms
- CLS <= 0.1

Keep third-party JavaScript near zero on health routes.

Do not delay safety information behind large client bundles.

## SEO

MindCheckTools is YMYL. Evidence and trust outrank content volume.

Do not create:
- mass AI health articles
- thin condition pages
- near-duplicate symptom pages
- fake local pages
- keyword-stuffed pages
- search-only pages
- programmatic health-content farms
- unreviewed AI medical content
- automated backlink spam
- fake testimonials

Every indexable health page needs a distinct user purpose.

No arbitrary minimum word count.

Important health pages should include, where applicable:
- clear H1
- direct answer
- purpose and audience
- what the tool measures
- what it does not establish
- evidence
- limitations
- primary source
- reviewer scope
- last review date
- appropriate next step
- methodology/privacy links
- crisis support when relevant

Technical SEO:
- unique factual title and description
- self-referencing canonical
- crawlable HTML
- correct status code
- appropriate internal links
- public canonical URLs only in sitemap
- no result, preview, admin, error, sensitive share, or crisis-state URLs in sitemap
- never put sensitive data in canonical URLs

## AEO

Answer the primary question near the beginning.

Make source-supported answers easy to extract for:
- what the tool measures
- intended population
- scoring
- score meaning
- diagnostic limitations
- next steps
- privacy
- instrument provenance
- validation status

Do not remove material limitations to make snippets more attractive.

## GEO

Generative Engine Optimization is evidence quality and citation clarity, not tricks.

Improve citation eligibility with:
- clear factual statements
- primary sources
- instrument provenance
- original methodology
- transparent reviewer scope
- limitations
- source dates
- stable URLs
- consistent organization/reviewer identity
- useful tables and definitions

Allow OAI-SearchBot on public indexable pages when ChatGPT search visibility is desired.

Training-crawler access is a separate decision.

llms.txt is optional. Keep it only while it remains accurate and low-maintenance. Do not maintain duplicate llms-full content unless evidence shows a need.

## Structured data

Only mark up visible facts.

Use conservative schema such as:
- Organization
- WebSite
- WebPage
- Article or BlogPosting
- BreadcrumbList
- Person where appropriate

Do not invent clinical rich-result types, ratings, credentials, or unsupported FAQ markup.

## Legal and regulatory governance

Legal pages must describe actual behavior.

Maintain applicable Privacy Policy, Terms, Disclaimer, Accessibility Statement, consumer-health-data disclosures, privacy choices, and instrument-rights information.

Do not claim HIPAA compliance, FDA approval, clinical approval, medical review, or legal compliance without documented support.

HIPAA applicability is business-model dependent. Reassess before provider, hospital, health-plan, EHR, employer, white-label clinical, or business-associate integrations.

Maintain a legal/privacy applicability matrix for relevant FTC health/privacy rules, state consumer-health laws, California privacy requirements, GDPR/UK GDPR where applicable, and COPPA where youth is implicated.

Material uncertainty requires qualified review.

## Security

Preserve strong security controls.

Use OWASP ASVS and NIST CSF as reference frameworks.

Keep:
- HTTPS
- restrictive CSP
- frame protection
- content-type protection
- HSTS
- dependency scanning
- secret scanning
- code/security workflows that add material value
- fictional test data only

Do not use real user health data in development, CI, screenshots, examples, or tests.

Every third-party script must have a documented purpose, routes, exposed data, storage, retention, privacy impact, security impact, and removal path.

## Email

Do not combine newsletter identity with health state.

Never record that a subscriber took a specific screener, received a specific score, viewed a sensitive condition page, or used crisis help.

Suppress email capture during active assessment and crisis states.

## Automation and cost discipline

Automate low-risk repetitive work:
- broken links
- uptime
- crisis-resource availability
- source-change alerts
- rights-review reminders
- dependency/security scans
- accessibility checks
- sitemap/canonical/schema checks
- search summaries
- review reminders

Do not auto-publish clinical content, alter validated items/scoring, change crisis language, make legal conclusions, approve rights, or create compensated healthcare referrals.

Prefer free or low-cost infrastructure until traffic/revenue justify added spend.

Do not add overlapping SaaS products.

## Repository simplicity

Keep the repository small and understandable.

Before adding a dependency, service, agent, command, document, or workflow, answer:
- What live problem does it solve?
- Is the same function already present?
- Is it referenced?
- What maintenance cost does it add?
- What user or health data could it touch?
- What is the removal path?

Prefer one source of truth over duplicate documents.

Historical implementation documents belong in Git history, not the active root, unless they remain operationally necessary.

Do not retain dead ad code, dead tracking code, obsolete consent systems, duplicate analytics, unused AI agents, abandoned phase docs, duplicate IndexNow keys, or stale policy text.

Do not remove anything tied to runtime, build, deployment, verification, privacy, accessibility, PWA, SEO, safety, rights, or governance until usage is verified.

## Protected areas

Treat these as protected:
- instrument registry
- validated question definitions
- scoring logic
- result interpretation
- rights registry
- crisis logic and resources
- privacy route policy
- analytics policy
- local-storage definitions
- clinical claims registry
- legal pages
- security headers
- service worker
- AI system instructions
- deployment workflows

Consequential changes require owner approval.

## Release gate

Before high-risk release, run applicable:
- rights-status validation
- protected item snapshots
- golden scoring tests
- cutoff boundary tests
- crisis-state tests
- URL leakage tests
- tracker/network tests
- localStorage tests
- cache/referrer/BFCache tests
- canonical/sitemap/schema checks
- broken-link checks
- automated accessibility checks
- keyboard smoke test
- screen-reader smoke test
- responsive test
- performance test
- security scans
- production build

A P0 failure blocks release.

## TRUTHMODE: MINDCHECKTOOLS

Before consequential work, review:
- clinical validity
- exact instrument version
- scoring integrity
- instrument rights
- commercial-use rights
- intended population
- crisis implications
- privacy and health-data exposure
- analytics
- monetization/referrals
- minors
- accessibility
- security and caching
- AI risk
- legal/regulatory impact
- SEO
- AEO
- GEO
- structured data
- reviewer scope
- brand trust
- rollback plan

Return:
PASS
REVISE
STOP

Unknown critical evidence never equals PASS.

## Final decision test

For every material change ask:
- Is it safe?
- Is it accurate?
- Is it supported?
- Do we have rights to do it?
- Does it protect privacy?
- Is it accessible?
- Is it useful?
- Is it search-durable?
- Is it maintainable?
- Is it legally defensible?
- Does it strengthen MindCheckTools?
- Would we still make this decision if organic traffic disappeared tomorrow?

If a critical answer is no, stop the affected change.

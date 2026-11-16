# SITE-UPGRADE.md — Universal Site Upgrade Prompt for MindCheckTools
Stamp: 2026-11-15 (v1.1 — includes ui-ux-pro-max design-token update checked the same day)
Origin: Jason's original ask (2026-11-15): "search GitHub for updating our sites with SEO, UI, UX, and all other matters for all of our websites. rewrite the prompt and give the original to both them as well and make one superior prompt we can add for all of our sties that can assist with moving forward"
Master pack: SUPERIOR-SITE-UPGRADE-PROMPT-2026-11-15.md (coordinator copy)

---

UNIVERSAL SITE UPGRADE — MindCheckTools — TRUTHMODE

Site: MindCheckTools
Live URL: https://mindchecktools.com
Repo: raiderj77/mhsud
Top competitor to beat: SAMHSA FindTreatment.gov and Psychology Today directory (directory competitors — beat them on listing accuracy and seeker speed to a phone number)
Primary money action: Seeker finds treatment fast (primary visitor action). Operator action: claim / fix a facility listing. The $495 review is GATED — attorney review pending, checkout is CLOSED. Do not enable any payment or Stripe link.
Primary keyword / money page: substance use treatment facilities — /facilities and city pages (sitemap is exactly 12,709 URLs as of 2026-11-14; any change to that count must be intentional and explained)

You are upgrading this site to get more traffic and more revenue, in that order — but only inside the site-specific rules below, which put safety, accuracy, rights, privacy, accessibility, and security ahead of traffic and revenue.
Do not start coding until Phase 0 is proven. Label every claim PROVEN or ASSERTED.
No fabricated proof, numbers, reviews, authors, or results — ever.
If a competitor is genuinely better at something, say so and fix the gap.

SITE-SPECIFIC RULES FOR MindCheckTools (override generic sections below where they conflict):

Authority and priority order
- THIS REPO'S AGENTS.md OUTRANKS THIS FILE on everything, especially safety. Read it in full before any work. Instruction priority: (1) AGENTS.md, (2) explicit current owner instruction, (3) CLAUDE.md, (4) other repository docs, historical prompts, and portfolio standards — this file is in group 4.
- Prioritize, in order: 1 user safety, 2 clinical and factual accuracy, 3 instrument rights, 4 privacy, 5 accessibility, 6 security, 7 trust and brand reputation, 8 search durability, 9 maintainability, 10 low operating cost, 11 sustainable revenue.
- Do not trade safety, rights, privacy, or trust for traffic, conversion, backlinks, publication speed, or short-term revenue.
- If a critical fact is unknown, do not guess. Unknown critical evidence never equals PASS.
- Protect the owner's private life: never publish or expose owner home or location details, private addresses or contact information, LLC records, or unrelated personal history. An approved professional or reviewer identity may appear only when relevant, accurately scoped, and supported.
- MindCheckTools is an educational screening, self-reflection, recovery-support, and health-information site. It is not a diagnostic service, medical provider, psychotherapy provider, emergency service, treatment provider, or substitute for a qualified professional.
- main auto-deploys — branch + PR for consequential changes, never merge on a failed check. Consequential changes to protected areas (instrument registry, validated questions, scoring, result interpretation, rights registry, crisis logic and resources, privacy route policy, analytics policy, local-storage definitions, clinical claims registry, legal pages, security headers, service worker, AI system instructions, deployment workflows) require owner approval.

Instrument rights (a release gate)
- Never reproduce, administer, score, monetize, translate, adapt, or publicly display a published instrument until rights for the exact version and use are verified from an authoritative source.
- Maintain the instrument registry with: exact instrument/version; owner and primary source; rights holder; public administration status; commercial-use status; reproduction/electronic/scoring rights; modification and translation restrictions; required attribution; intended and validation populations; scoring method and cutoffs; limitations; reviewer and reviewer scope; rights/evidence review dates; next review date; current site status.
- Allowed statuses: APPROVED_INTERACTIVE, INFORMATION_ONLY, WRITTEN_PERMISSION_REQUIRED, BLOCKED, RETIRED. Only APPROVED_INTERACTIVE may expose protected questionnaire items, answer choices, scoring, cutoffs, personalized results, or an assessment-start action.
- Never infer permission from silence. Academic availability is not commercial web permission. Paper rights do not automatically cover electronic administration. WHO ASSIST v3.1 stays INFORMATION_ONLY (no interactive questionnaire, scoring, personalized results, or Begin Assessment action) until authoritative permission covers the exact consumer-web use — a P0 release issue.
- Never rewrite validated question text for SEO, readability, UX, conversion, tone, or design. Never alter question order, answer anchors, scales, time periods, scoring, reverse scoring, cutoffs, severity bands, or missing-response behavior without authoritative evidence and approval. A scoring regression blocks release.

Clinical language and review
- Preferred terms: screening, screening result, score, score range, educational interpretation, symptoms reported, discuss with a qualified professional. A screening score remains a screening score — never convert it into a diagnosis.
- Never tell a user a screener proves a diagnosis, rules one out, proves safety, or determines whether treatment is needed. Every result page must clearly explain what the result does not establish.
- Consequential health claims must trace to approved evidence. Evidence hierarchy: (1) government health agencies, (2) instrument owners, (3) original validation studies, (4) professional organizations, (5) systematic reviews, (6) strong peer-reviewed research, (7) high-quality secondary sources only when primary material is unavailable. Never invent prevalence, accuracy, validation, prognosis, or treatment-effect numbers.
- Reviewer credentials must match the reviewed subject. Never portray a substance-use counseling credential as psychiatric, psychological, neurological, or medical validation. Record reviewer, credential, review scope, date, and limitations.
- New-article scope (owner decision, 2026-09-05): new articles must be strictly about alcohol or drugs — substance-use education, recovery support, prevention, or finding appropriate services — matched to Jason Ramirez's stated CADC-II credentials without claiming they authorize every clinical or medical topic. No new general mental-health, mental-load, depression, anxiety, ADHD, grief-treatment, or other psychotherapy articles until an LCSW joins the team and the owner reopens that lane. This does not authorize deleting existing public resources or withholding safety maintenance. When that lane opens, verify the LCSW's active credential, subject expertise, and actual review of the exact article (employment alone is not clinical review). Medication, detoxification/withdrawal protocols, individualized treatment, and other medically consequential claims still require an appropriately qualified reviewer.

Crisis safety
- Crisis behavior must be deterministic and separate from ordinary SEO, conversion, affiliate, or AI logic. When a response requires an immediate safety state, safety content outranks the normal result.
- For U.S. users, clearly surface the 988 Suicide & Crisis Lifeline, Crisis Text Line (text HOME to 741741), and the SAMHSA National Helpline (1-800-662-4357), plus emergency services for immediate danger. Provide an international support path where appropriate.
- H4 (crisis, self-harm, immediate-risk, or emergency-support) states must: load without display ads; load without optional analytics; contain no affiliate or newsletter CTA; remain keyboard and screen-reader accessible; work well on mobile; place safety content before ordinary interpretation; avoid unnecessary animation; never depend on generative AI.
- Never track individual crisis-resource clicks.

Privacy architecture and browser storage
- Preserve no-account, browser-local screening wherever feasible.
- Questionnaire answers and scores must not intentionally enter: URLs, query strings, or fragments; analytics; advertising systems; server logs; error-monitoring payloads; CRM; email; affiliate or referral URLs; remote AI prompts.
- Do not add server-side storage for screening answers without a separate privacy, security, regulatory, legal, and product review.
- Use accurate privacy language such as "Your screening answers and scores are processed locally and are not intentionally sent to MindCheckTools." Never promise "100% private" or "nothing ever leaves your device."
- Validated screener answers normally remain memory-only. Only intentionally persistent tools may use localStorage. For every local record: disclose what is stored; disclose that it remains in the browser; explain shared-device risk; provide a clear delete/reset control; inventory every storage key. No undocumented storage keys.

Analytics
- One lightweight privacy-safe aggregate analytics system: Vercel Web Analytics, on neutral allowlisted routes only, with no custom sensitive events, no query strings or fragments, and suppression when Global Privacy Control is active.
- Do not run GA4 on MindCheckTools — ever.
- Sensitive health routes default to analytics OFF. H4 crisis states load without optional analytics.
- Never send answers, scores, severity, diagnosis, crisis state, recovery logs, journal content, or instrument responses to analytics.
- Prefer Search Console, Bing Webmaster Tools, and aggregate search data for growth analysis.

Email
- Do not combine newsletter identity with health state.
- Never record that a subscriber took a specific screener, received a specific score, viewed a sensitive condition page, or used crisis help.
- Suppress email capture during active assessment and crisis states.
- Never lead result pages with marketing, affiliate links, newsletter capture, or conversion pressure.

Accessibility
- Target WCAG 2.2 AA. Core flows require automated checks PLUS manual keyboard and screen-reader review.
- Design for users who may be anxious, depressed, distracted, overwhelmed, intoxicated, withdrawing, distressed, or cognitively fatigued: plain language, short paragraphs, clear headings, consistent controls, large touch targets, visible focus, predictable Back behavior, clear progress, one primary task at a time, reduced-motion support.
- Forbidden: countdowns, artificial urgency, confetti, symptom/severity streaks, competitive scoring, scare tactics, guilt, manipulative conversion design, unnecessary animation.
- Validated screening UX must preserve instrument fidelity. Result pages should present: 1 tool name, 2 score, 3 validated range, 4 plain-language meaning, 5 what the result does not mean, 6 safety information when applicable, 7 evidence-based next step, 8 instrument source, 9 evidence/methodology links, 10 privacy reminder, 11 reviewer scope, 12 last review date.
- Users must immediately distinguish Published Screener, Information Only, Original Educational Tool, and Recovery Tool.

Security and sensitive routes
- Use OWASP ASVS and NIST CSF as reference frameworks. Keep HTTPS, restrictive CSP, frame protection, content-type protection, HSTS, dependency scanning, secret scanning, code/security workflows that add material value, and fictional test data only.
- Do not weaken security headers to add marketing technology.
- Sensitive-route protections stay in place: Referrer-Policy: no-referrer on sensitive routes where appropriate; private/no-store behavior for state-bearing sensitive responses; no sensitive caching by service workers; BFCache regression testing; no sensitive content in telemetry or error reporting.
- Every third-party script must have a documented purpose, routes, exposed data, storage, retention, privacy impact, security impact, and removal path. Keep third-party JavaScript near zero on health routes.
- Never use real user health data in development, CI, screenshots, examples, or tests.
- Never hard-code or commit API keys, tokens, passwords, credentials, or other secrets; use approved deployment secret storage. Public verification values designed to be disclosed (e.g. the IndexNow key file) are not secrets — keep exactly one canonical value and never stretch this exception to private credentials.

Also binding (full text in AGENTS.md)
- No display ads, ever: no AdSense, programmatic display, behavioral advertising, retargeting pixels, or mental-health / condition / score / crisis-based advertising or audience building.
- Never route a paid healthcare recommendation from answers, score, severity, inferred diagnosis, crisis status, or substance disclosed; never pass health-state information to referral partners; any compensated healthcare referral arrangement requires qualified legal review before launch.
- Never send assessment answers, scores, crisis disclosures, recovery logs, or journal text to remote generative models; never use AI to diagnose, override validated scoring, change crisis logic, or improvise emergency instructions.
- SEO/structured data: no thin, near-duplicate, fake local, keyword-stuffed, or programmatic health-content pages; only mark up visible facts; no invented clinical rich-result types, ratings, credentials, or unsupported FAQ markup; no result, preview, admin, error, sensitive share, or crisis-state URLs in the sitemap.
- Legal pages must describe actual behavior; never claim HIPAA compliance, FDA approval, clinical approval, medical review, or legal compliance without documented support.

Release gate
- Before high-risk release, run every applicable check: rights-status validation; protected item snapshots; golden scoring tests; cutoff boundary tests; crisis-state tests; URL leakage tests; tracker/network tests; localStorage tests; cache/referrer/BFCache tests; canonical/sitemap/schema checks; broken-link checks; automated accessibility checks; keyboard smoke test; screen-reader smoke test; responsive test; performance test; security scans; production build.
- A P0 failure blocks release. Return the AGENTS.md TRUTHMODE verdict (PASS / REVISE / STOP) for consequential work.

This file never narrows AGENTS.md. Where anything here conflicts with AGENTS.md, AGENTS.md wins.

OUR STANDING RULES (override any generic advice you find):
- Article Checklist (2026-10-29) applies to every article, guide, comparison, and tool page: keyword congruence, real author + dates, answer-first, clear definition, methodology, best-for / not-for framing, quantitative HTML comparison table, original evidence, how-to-choose, objection handling, true proof only, 2-3 sentence FAQs, at least 3 intent-matched CTAs. Add the checklist sign-off line to every PR. (On this site, CTA placement never overrides the site-specific rules: no CTA leads a result page, no affiliate or newsletter CTA in H4 states, no email capture during active assessment.)
- Cash register rule: done means verified LIVE where the customer or money touches it — production page serving the change, checkout / form / affiliate link rendering and clicking through. A build, a merge, or a preview is not done.
- Free tools stay free: never gate, paywall, or degrade a free calculator/tool to sell an add-on.
- Gates you must NOT cross without Jason's explicit word: spending, price changes, account creation, sends/publishes beyond the approved lane, TaxBreakTools CPA Gate 1, MindCheckTools attorney review before paid launch.
- One consolidated list of Jason's remaining steps at the end. Nothing scattered.

UPSTREAM WATCH — CHECK FOR UPDATES AS WE GO (owner instruction, 2026-11-15):
Before each upgrade run on this site, check these source repos for new commits / releases since the date stamped at the top of this file. If a change is relevant (new audit check, new design-token or schema practice, changed Core Web Vitals guidance), fold it into this run, note what you adopted and what you skipped and why, and update the stamp date in this file in your PR. An upstream practice never overrides AGENTS.md or the site-specific rules above.
- https://github.com/AgriciDaniel/claude-seo (SEO structure)
- https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (UI/UX — note 2026-11-15 update: design system can now be exported as design tokens, PR #577 — use token export for this site's DESIGN.md)
- https://github.com/VoltAgent/awesome-design-md (DESIGN.md patterns)
- https://github.com/coreyhaines31/marketingskills (CRO / copy / growth)
- https://github.com/addyosmani/web-quality-skills + https://github.com/GoogleChrome/lighthouse + https://github.com/GoogleChrome/lighthouse-ci (performance / Core Web Vitals)
- https://github.com/zubair-trabzada/geo-seo-claude (GEO / AEO)
- https://github.com/every-app/open-seo (keyword / competitor data)
Also check THIS repo before starting: latest commits on main, open PRs, open issues, and whether this file has been updated by a later run. Never work from a stale copy.

PHASE 0 — RECON (prove current state, change nothing)
- Crawl the live site. Record: pages indexed / in sitemap, broken links, 404s, redirects, duplicate titles/meta, missing canonicals.
- Run Lighthouse (mobile first) on homepage + money page + top article. Record Performance, Accessibility, Best Practices, SEO scores and LCP / INP / CLS.
- Check repo state: branch, last deploy, build passing, env vars present (names only, never values).
- Name the top competitor and list, with evidence, where they beat us and where we beat them.
Output: baseline table. Stop if you cannot verify the live site.

PHASE 1 — TECHNICAL SEO
- Titles, meta descriptions, heading order, canonicals, robots.txt, sitemap.xml, OG/Twitter cards — unique per page, keyword-congruent, no stuffing.
- Internal linking: every money page gets at least 3 contextual internal links; no orphan pages; fix dead internal links.
- Schema.org: add/correct only schema that matches visible content. Validate it. Conservative types only (see site-specific rules).
- Indexing: noindex only where intentional. Check Search Console coverage if access exists.

PHASE 2 — CONTENT SEO + E-E-A-T
- Every key page: answer-first opening, who this is for / not for, methodology, real author and dates, sources for claims.
- Thin pages: expand with original evidence or merge them — no doorway stubs.
- Keyword intent match: informational pages inform, transactional pages convert.
- New articles stay inside the substance-use-only scope and the clinical-review rules above.

PHASE 3 — GEO / AEO (AI SEARCH)
- Citable pages: clear definitions, direct answers in the first 100 words, structured lists/tables, named entities, dated facts with sources.
- AI crawlers not blocked in robots.txt unless intentional. Add llms.txt if the stack supports it cleanly. (AGENTS.md: training-crawler access is a separate decision; llms.txt is optional and kept only while accurate and low-maintenance.)
- FAQs answer real questions in 2-3 sentences each.
- Never remove material limitations to make snippets more attractive.

PHASE 4 — UI
- One DESIGN.md for this site: brand colors, type scale, spacing, component styles, real logo (not initials). Export the design system as design tokens where the tooling supports it (upstream ui-ux-pro-max update, 2026-11-15). Every page follows it.
- Consistent header, footer, navigation. One primary action per screen.

PHASE 5 — UX
- Mobile first at 360px. Tap targets at least 44px, no horizontal scroll.
- Seeker test: first-time visitor reaches the primary money action in at most 3 clicks from the homepage.
- Forms: fewest fields, clear labels, inline errors, success state proven live. A form stuck in "not sending yet" state is a blocker — flag it at the top.
- 5-second test: what is this, who is it for, what do I do next — obvious.

PHASE 6 — CRO / CONVERSION (cash register)
- Primary CTA above the fold on homepage and money pages, repeated after value sections. Never on result pages ahead of the result, never in H4 crisis states, never using the forbidden manipulative patterns.
- Trust without fabrication: real disclosures, real contact/domain email, no fake testimonials, counts, or badges.
- Checkout / lead path clicked end to end in production (test mode only for payments). A broken checkout outranks every other fix. The $495 review checkout stays CLOSED — attorney review pending; do not enable any payment or Stripe link.
- Email capture: never combine newsletter identity with health state; never record that a subscriber took a specific screener, received a specific score, viewed a sensitive condition page, or used crisis help; suppress email capture during active assessment and crisis states; never lead result pages with newsletter capture. Within those limits: one clear offer, one list, form proven sending.

PHASE 7 — PERFORMANCE / CORE WEB VITALS
- Targets (75th percentile, mobile): LCP at or under 2.5s, INP at or under 200ms, CLS at or under 0.1, homepage + money page.
- Fix order: largest images, unused JS, render-blocking assets, font loading, third-party scripts. Keep third-party JavaScript near zero on health routes; never delay safety information behind large client bundles.
- Re-run Lighthouse after fixes, show before/after numbers.

PHASE 8 — ACCESSIBILITY (WCAG 2.2 AA)
- Target WCAG 2.2 AA. Core flows (for example screeners, result pages, crisis states, facility search) require automated checks PLUS manual keyboard and screen-reader review — an automated pass alone is not done.
- Baseline: contrast, visible focus, keyboard navigation, descriptive alt text, labels on every input, heading order, skip link, no information by color alone, large touch targets, reduced-motion support, predictable Back behavior, clear progress.
- Design for distressed users (anxious, depressed, distracted, overwhelmed, intoxicated, withdrawing, distressed, cognitively fatigued): plain language, short paragraphs, clear headings, consistent controls, one primary task at a time.
- Remove any forbidden pattern found: countdowns, artificial urgency, confetti, symptom/severity streaks, competitive scoring, scare tactics, guilt, manipulative conversion design, unnecessary animation.
- Verify every result page carries the 12 elements: tool name, score, validated range, plain-language meaning, what the result does not mean, safety information when applicable, evidence-based next step, instrument source, evidence/methodology links, privacy reminder, reviewer scope, last review date. Verify H4 states stay keyboard and screen-reader accessible with safety content first.

PHASE 9 — SECURITY, ANALYTICS, HOUSEKEEPING
- Security: HTTPS everywhere; restrictive CSP, HSTS, frame protection, and content-type protection preserved; never weaken security headers to add marketing technology; dependency and secret scanning in place; no secrets in code; critical/high dependency vulns fixed.
- Sensitive routes: confirm Referrer-Policy: no-referrer where appropriate, private/no-store on state-bearing sensitive responses, no sensitive service-worker caching, BFCache regression tests passing, and no sensitive content in telemetry or error reporting.
- Third-party scripts: every one documented with purpose, routes, exposed data, storage, retention, privacy impact, security impact, and removal path. Undocumented scripts are a finding.
- Test data: fictional only. No real user health data in development, CI, screenshots, examples, or tests.
- Analytics: verify the ONE privacy-safe system — Vercel Web Analytics — runs only on neutral allowlisted routes, with no custom sensitive events, no query strings or fragments, and GPC suppression. Verify NO GA4 anywhere. Verify sensitive health routes have analytics OFF and H4 crisis states load without optional analytics or ads. Verify no answers, scores, severity, diagnosis, crisis state, recovery logs, journal content, or instrument responses reach analytics, and that crisis-resource clicks are not tracked. Use Search Console and Bing Webmaster Tools (aggregate data) for growth analysis.
- Helpful 404 page, redirects for moved URLs, no redirect chains over 2 hops.
- Before any high-risk release, run the full release gate listed in the site-specific rules. A P0 failure blocks release.

OUTPUT — deliver exactly this:
1. Baseline table (Phase 0, PROVEN numbers)
2. Ranked fix list: Impact x Effort, each with file/page, fix, and how it will be verified live
3. Wave plan: Wave 1 = cash register + technical blockers, Wave 2 = UI/UX + performance, Wave 3 = content/GEO depth
4. PR(s) with article-checklist sign-off line where content changed
5. Live verification log for every Wave 1 item
6. ONE consolidated list of Jason's remaining steps (gates only)

STOP CONDITIONS: build fails out of scope, a gate is required, live verification contradicts the code, or a fix requires fabricating proof. Report the blocker plainly — never work around a gate.

# MindCheck Tools Site Record

**Record date:** 2026-08-05. **Production release verified:** 2026-08-06

**Site:** `https://mindchecktools.com`

**Repository:** `raiderj77/mhsud`

**Strict-YMYL status:** **Safety and rights-boundary release verified in production; not cleared for AdSense, unrestricted instrument administration, or monetization activation**

This record separates **verified evidence**, **inference**, and **unknowns**. Testing used only public entry states and fictional/non-sensitive browser state. No assessment was completed, scored, submitted, or shared; one fictional PHQ-4 item was used only to verify keyboard interaction.

## Executive verdict

The public site is available, crawlable, technically well hardened, and unusually explicit about privacy, crisis support, non-diagnostic use, and reviewer scope. The production release now preserves all **35 canonical maintained instrument URLs** as **21 interactive assessment routes plus 14 indexable informational routes**: DASS-21 and 13 additional rights-limited instruments. A fresh unauthenticated release probe returned the exact canonical HTTP 200 for **70/70 desktop and mobile requests**. The 14 informational routes contain no questionnaire, answer capture, scoring, cutoff, result, or automated interpretation. This removes the immediate public-administration exposure on those routes, but it does not create legal permission, qualified topic-specialist clinical approval, or AdSense readiness. Ad code remains disabled.

## Assessment and tool journey inventory

### Verified entry-state coverage

- In the production release state, all **35 maintained instrument routes** listed by `/screening-tools` returned HTTP 200 on the exact canonical URL under desktop Chrome and iPhone Safari user agents. Focused mobile browser checks confirmed the public H1, crisis guidance, non-diagnostic boundary, and privacy language on representative interactive, informational, crisis, and consumer-health-data routes.
- A second unauthenticated production probe fetched every one of those 35 exact routes without cookies: **35/35 returned 200 on the expected URL, 35/35 had no authentication challenge, and 35/35 remained indexable**. No answers were entered and no results were generated.
- All **45 homepage tool cards** were opened at 1440x900 and 390x844 without answering anything.
- The six maintained self-checks not present in those 45 homepage cards were also opened at 1440x900 and 390x844: PHQ-4, postpartum depression, values card sort, compassion fatigue, caregiver burnout, and grief.
- The combined before-state visual entry-state set is **51 unique routes**. No checked route overflowed at 390px except the then-live HALT scale defect described below; that defect is remediated in the current release.
- **Unknown:** every consent/start/question/error/result/reset/print state, keyboard-only completion, screen-reader completion, and post-answer network behavior. Those states were intentionally not entered because this audit did not generate real or fictional assessment results.

### Maintained routes: production 21 interactive plus 14 informational

| Group | Interactive production routes | Indexable informational production routes |
|---|---|---|
| Depression | `/phq-9-depression-test`, `/phq-4-anxiety-depression-screen`, `/ces-d-depression-scale`, `/postpartum-depression-test` | None |
| Anxiety | `/gad-7-anxiety-test` | `/spin-social-anxiety-test`, `/dass-21-depression-anxiety-stress` |
| Trauma | `/pcl-5-ptsd-screening`, `/pc-ptsd-5-screening` | `/ace-questionnaire` |
| Substance use | `/audit-alcohol-test`, `/audit-c-alcohol-screen` | `/cage-aid-substance-abuse-screening`, `/crafft-substance-screening`, `/who-assist-substance-screening` |
| ADHD, eating, BPD, autism | `/asrs-adhd-screening` | `/scoff-eating-disorder-screening`, `/msi-bpd-screening`, `/aq-10-autism-screening` |
| Personality and self-concept | `/big-five-personality-test`, `/rosenberg-self-esteem-scale`, `/values-card-sort` | `/attachment-style-quiz` |
| Stress and resilience | `/k6-distress-scale`, `/burnout-assessment-tool`, `/compassion-fatigue-test`, `/caregiver-burnout-assessment`, `/work-stress-check` | `/holmes-rahe-stress-inventory`, `/brief-resilience-scale` |
| Wellbeing, sleep, grief | `/who-5-wellbeing-index`, `/sleep-and-mood-check`, `/grief-assessment` | `/ucla-loneliness-scale`, `/athens-insomnia-scale` |

The informational routes remain public directory and sitemap destinations, but do not administer their named instruments. This inventory is verified in production, source, and regression coverage.

### Additional homepage journeys: 16/16 entry states verified

`/bac-calculator`, `/standard-drinks-calculator`, `/mental-load-calculator`, `/sobriety-calculator`, `/money-saved-recovery-calculator`, `/health-recovery-timeline`, `/halt-check-in`, `/withdrawal-timeline`, `/treatment-cost-estimator`, `/relapse-prevention-plan`, `/urge-surfing-timer`, `/readiness-to-change`, `/trigger-identification-worksheet`, `/coping-skills-randomizer`, `/daily-recovery-check-in`, and `/family-impact-assessment`.

## Production validity and release state

### Verified

- The sitemap has **86 URLs**. All 86 returned 200, exact self-canonicals, index/follow directives, one H1, viewport metadata, unique title/description/OG/Twitter metadata, and parseable JSON-LD.
- HTTP to HTTPS, `www` to apex, and trailing-slash redirects were valid. A nonexistent route returned 404 with `noindex`.
- TLS 1.3 was negotiated. The observed apex certificate expires 2026-09-18; the `www` certificate expires 2026-09-19.
- The correct remote repository is `raiderj77/mhsud`. [PR #105](https://github.com/raiderj77/mhsud/pull/105) merged on 2026-08-06 as `0d28015a5f9e67e597ff2e47eb33f0531b7ca276`; `origin/main` contains the validated safety commit `7b5037b22128b8fa1be0ce711f8f20eb8cf57c04`.
- The fresh post-merge open pull-request count is **0**.
- Both recorded Vercel deployments completed successfully. The automatic IndexNow workflow completed successfully, and the Empire Compliance Gates job passed. Its separate hosted Build job failed before checkout when GitHub returned `Service Unavailable` while resolving action download metadata; one failed-job retry was queued and had produced no second failure at the bounded final check. Code Security was in progress. These hosted-runner states are external unknowns, not evidence of a production or repository defect; the same commit passed the complete local build and dependency gates.

### Unknown

- Provider-side rollback configuration and deployment retention beyond public responses and recorded commit statuses.

## Clinical evidence, citations, public reviewer, and credentials

### Verified

- `/clinical-evidence` has **21 active-instrument sections** and 23 linked PubMed IDs; all 23 IDs resolved through NCBI.
- Public attribution identifies **Jason Ramirez, CADC-II**, describes the credential as substance-use counseling certification, and explicitly says it is not physician, psychologist, psychiatrist, or independent mental-health licensure.
- The official CCAPP public registry was checked read-only on 2026-08-05 and showed the named CADC-II record as **In Compliance** and **Not Expired**, valid through **2028-02-27**. This verifies the displayed credential status, not topic-specialist scope outside substance-use counseling; the credential identifier is intentionally omitted here.
- The public profile links CCAPP, California DHCS, and LinkedIn sources and limits the stated clinical-review scope.
- A local 27-instrument evidence and rights register now separates public access, validation, scoring, reuse terms, result wording, reviewer/date state, and monetization/release gates. A separate authoritative-source rights matrix classifies each route as A, A-NC, B, C, D, or E and records exact owner actions. Its `BLOCKED` labels do not block public URL access; they block interactive, commercial, or release claims that lack the stated evidence.

### Verified production before-state gaps

- The clinical-evidence page, `llms.txt`, and the 35-route directory do not describe the same set of published instruments.
- Only 22/35 initial self-check pages link the reviewer profile; only 4/35 deep-link a route-specific evidence anchor.
- Review dates conflict across visible copy, reviewer components, structured data, and sitemap metadata.
- WHO ASSIST is publicly described as WHO-validated but was classified as an educational self-check and omitted from the clinical-evidence directory.
- In the production before-state, several result claims exceeded the recorded evidence, including SPIN severity bands, PCL-5 "Probable PTSD," WHO ASSIST treatment-like direction, and unsupported tiers for multiple scales. The production informational conversions remove result claims from the 14 converted routes; PCL-5 and the other remaining interactive routes still require exact result-language review.

### Production reconciliation

- The primary directory now exposes exactly **35 unique maintained assessment and instrument-information routes**: 21 interactive and 14 informational. DASS-21 is included in its primary anxiety-and-stress category instead of being counted only as a guide.
- The clinical-evidence directory, `llms.txt`, `llms-full.txt`, homepage, footer, sitemap, and primary directory now use the same interactive-versus-informational boundary for the 14 converted instruments. WHO ASSIST has an evidence entry and is no longer described as an on-site self-check.
- All 14 informational routes show the named reviewer and bounded CADC-II scope. All 21 interactive entry states now expose a server-rendered H1 and the named, credentialed reviewer before the educational-use gate. This improves disclosure but does not establish topic-specialist qualification.
- The 14 informational pages use one August 2, 2026 review date. Conflicting dates and topic-qualified approval remain unresolved across the 21 interactive assessment routes and their schema/evidence surfaces.

### Unknown / monetization and future-interactivity blocking

- Validation papers do not establish reuse permission. The established-instrument subset is now **13 interactive plus 14 informational**; public-administration and commercial-context terms remain unrestricted, conditional, non-commercial, approval-dependent, prohibited, or unknown on an instrument-specific basis.
- The strongest before-state conflict was DASS-21: UNSW permits public-domain copying of the form but explicitly says a website/app open to the public may not administer it or return computed scores/automated interpretation to respondents. Production now preserves the canonical URL as a public informational page and removes the questionnaire, automated scoring, severity labels, and results journey. The same public-information pattern covers the other 13 rights-limited routes listed above.
- Exact item, response-anchor, reverse-key, algorithm, cutoff, result-copy, and crisis-copy parity has no stored signed approval across the 13 remaining interactive established-measure claims. The 14 informational routes expose none of those mechanics, but still require source, rights-boundary, reviewer-scope, crisis, privacy, and canonical/indexing parity before release.
- Topic-qualified review beyond the documented CADC-II scope is unknown for depression, anxiety, PTSD, eating disorders, autism, ADHD, sleep, personality, and other specialty topics.

## Crisis and non-diagnostic safeguards

### Verified production

- Every checked self-check page includes a global crisis banner and inline non-diagnostic or clinical-limit language.
- `/crisis-resources` lists current US contacts for 988, Crisis Text Line, SAMHSA, Veterans, Trevor Project, domestic violence, and Poison Control, plus international guidance.
- The live crisis page and global banner presented those contacts as plain text, adding mobile friction.

### Production remediation

- Crisis resources now have descriptive, 44px `tel:`, body-free `sms:`, and official HTTPS actions with visible contact details preserved.
- The stale India contact was replaced with the currently published AASRA number.
- PHQ-4 now describes a subscale score of 3 as a follow-up screening threshold, not evidence of a disorder; its 44px radio controls support roving focus and arrow/Home/End keys, and its results are announced.
- Worry-time copy now states that evidence for standalone/online worry postponement is mixed and cites both positive and null randomized evidence. Unsupported outcome percentages and treatment-like guarantees were removed.
- DBT crisis-skills copy now identifies the page as an educational skills reference, not a validated standalone intervention or emergency care. Direct ice exposure, face immersion, painful sensations, hot sauce, and prescribed strenuous exercise were replaced with bounded, low-risk examples and medical cautions.
- HALT no longer emits an invented composite vulnerability category or `/20` relapse-risk score. The four ratings stay separate; the page cites [SAMHSA TIP 65](https://www.ncbi.nlm.nih.gov/books/NBK601489/box/ch2.b11/) for the mnemonic and a [2026 peer-reviewed review](https://pubmed.ncbi.nlm.nih.gov/41583901/) that describes direct HALT research as scant.
- DASS-21 is resolved in production by removing the questionnaire/scoring client instead of repairing or exposing score mechanics. The canonical route remains sitemap-listed and indexable, explains the current UNSW public-administration boundary, cites the official FAQ and validation record, retains the named reviewer and credentials, includes privacy/crisis/non-diagnostic safeguards, and links PHQ-4, PHQ-9, and GAD-7 only as non-equivalent alternatives. Legacy DASS score/comparison and college-wrapper URLs redirect to that main page.
- SPIN, ACE, CAGE-AID, CRAFFT, SCOFF, MSI-BPD, AQ-10, ECR-R attachment, Holmes-Rahe, UCLA Loneliness, Brief Resilience, Athens Insomnia, and WHO ASSIST are also informational in production. Each canonical route remains indexable and useful, explains its rights boundary and limits, retains citations, named public reviewer/credential scope, crisis and non-diagnostic language, and offers only clearly differentiated alternatives; none retains questionnaire or scoring behavior.
- CES-D item text and response anchors now align with the public-domain SAMHSA/NCBI form, retain the four documented reverse keys, and remove unsupported mild/moderate/severe result tiers. Local copy reports only whether the score is below or at/above the traditional follow-up threshold and explicitly says the threshold is not a diagnosis.

## Privacy, analytics, and security

### Verified production

- All 35 core assessment routes use `private, no-store`, `no-referrer`, and `noarchive`; 59 sensitive routes appear to receive the same route policy.
- Sensitive paths are network-only in the service worker. No assessment-client fetch, XHR, beacon, or WebSocket transmission was found.
- Consent Mode defaults analytics and ad storage to denied; GPC remains fail-closed. No external Google Analytics or AdSense script appeared without consent, and sensitive routes suppress analytics entirely.
- Security headers include two-year preload HSTS, CSP, `nosniff`, `DENY`, Permissions-Policy, COOP, and CORP.
- CSP still permits inline script/style and Google allowlists. `/.well-known/security.txt` returns 404.

### Verified gaps and production remediation

- Multiple clients offered explicit OS share/clipboard payloads containing exact scores or result labels, which conflicted with absolute "never leaves your browser" wording.
- The production privacy-safe sharing boundary accepts only a static tool name and canonical URL. Answers, scores, severity/risk/category labels, ratings, estimates, progress, and summaries cannot be passed through that API. Converted informational routes have no assessment result to share.
- The privacy policy and worry-time guide now distinguish application-local processing from browser storage, prints/downloads/screenshots, shared-device access, and device/app/sync/backup handling of user-created copies.
- Public privacy copy now uses the same bounded statement: questionnaire answers and scores are processed locally and are not intentionally sent to MindCheck Tools, while ordinary page requests can still create hosting records and user-created copies can be retained by browsers, devices, applications, sync, backups, or other people with access. A tracked-source regression rejects absolute confidentiality, invisibility, and transmission promises.
- A new consented homepage-only `private_tool_launch` event records an aggregate launch without a tool, route, category, answer, score, or result parameter. Sensitive destination pages remain analytics-free.
- Current GA4 access is valid. A privacy-minimized aggregate before-state was captured in a private, locally excluded owner record. Assessment-route events are intentionally suppressed, so a missing assessment event is not evidence that no assessment was started.
- **Unknown:** whether downstream Google configuration adds parameters not present in the code. Provider-side analytics configuration was not changed.

## UI/UX and accessibility

### Verified

- Shared skip links, main landmarks, H1s, focus styles, navigation, and footer semantics are broadly strong.
- The before-state HALT 1-5 row overflowed at 390px because of fixed endpoint columns and 40px controls; the current production release reflows the control at narrow widths.
- Many assessment answer controls are below 44px, and several custom selection groups omit radio/pressed state semantics.
- Dynamic results are not consistently announced.
- The first-visit analytics-consent dialog had dialog semantics but no focus trap, Escape handling, background inerting, or reliable focus restoration.

### Production remediation

- HALT now reflows at narrow widths, uses 44px radio controls with arrow/Home/End keyboard behavior, announces its reflection, and never shares ratings/results.
- PHQ-4 now uses complete keyboard radio behavior and an announced results region.
- All **21 maintained interactive assessment routes** now require the shared explicit educational-use gate; the 14 informational routes correctly have no questionnaire gate. The converted routes retain public content without presenting consent as permission to administer a restricted instrument.
- All 21 interactive routes now render exactly one entry H1 before the gate. Seven routes that previously introduced their only H1 after acceptance now keep the primary heading server-rendered throughout the journey, and show the named CADC-II reviewer before entry.
- Documented undersized controls were raised to at least 44x44 on retained interactive clients where those fixes apply. Attachment, WHO ASSIST, and Holmes-Rahe no longer expose answer controls because those routes are now informational.
- The consent dialog now traps focus, handles Escape with the privacy-protective choice, makes the background inert, restores focus, and cleans up scroll locking.
- Shared date-only review metadata now formats in UTC, preventing Pacific and other western time zones from displaying the prior calendar day.
- Shared Quick answer review dates now use readable light- and dark-theme contrast; optimized-browser QA confirmed the corrected dark-theme value on the DASS informational page.
- **Remaining:** most single-choice clients still lack complete question-associated radio semantics and keyboard behavior; results are not consistently focused/announced across all clients.

## SEO, AEO, GEO, crawl, and indexing

### Verified

- `robots.txt`, `sitemap.xml`, `llms.txt`, and `llms-full.txt` return 200; `llms-full.txt` covers all 86 sitemap URLs.
- Canonicals, crawl directives, FAQ/WebApplication/Person/Credential structured data, and AI-crawler rules are present.
- Current Search Console access and successful sitemap receipt were verified. The dated before-state, including all query, page, impression, click, CTR, position, and GA figures, is retained only in a private ignored owner record; no low-volume health query or business telemetry belongs in tracked documentation.
- That private record also preserves the exact acquisition-opportunity mapping and the released title, snippet, answer-block, and internal-link changes for later non-overlapping-window comparison.

### Production remediation

- Titles and descriptions now align with "worry postponement," "scheduled worry," and "DBT crisis survival skills" while preserving non-diagnostic and emergency-care limits.
- Navigation/footer anchors now use clearer query-aligned names.
- No new mass health pages, doorway variants, paid/exchanged links, automated posts, outreach, or account action occurred. The repository's automatic post-merge IndexNow workflow completed successfully for the approved release.

### Backlog

- 41/86 titles exceed a 65-character heuristic and 18/86 descriptions exceed 170 characters. They remain unique; this is lower priority than YMYL clearance.
- The repository intentionally has no public `/api/indexnow` proxy and regression-tests its absence. The automatic post-merge IndexNow workflow reported success for this release; provider-side URL receipt and indexing are not independently verified. Search Console already verifies sitemap receipt.
- A separate contextual inventory found 136 blog-source lines using standalone `free, private`, `free and private`, or equivalent label ordering. This bounded release does not classify every label as a defect because surrounding qualification varies. Audit those labels contextually in a later copy pass; do not replace them mechanically or treat this inventory as a release gate.

## Release verification

- The definitive aggregate gate passed: **118/118 repository tests**, TypeScript, ESLint, content and predeploy checks, both production and all-dependency audits with **0 vulnerabilities**, and `git diff --check`.
- The optimized production build completed successfully and generated **232 static pages**.
- Local HTTP verification returned **35/35** canonical instrument routes as HTTP 200 with exact self-canonicals, index directives, and one H1.
- Fictional/non-sensitive optimized-browser QA passed **51/51 desktop** and **51/51 mobile** public entry journeys for canonical/indexing state, one H1, crisis and educational/clinical-limit language, no horizontal overflow, no optional third-party scripts, and no consent dialog on topic pages.
- All **14/14 informational routes** exposed no form, input, select, or textarea and retained their rights boundary, non-diagnostic language, named reviewer/profile, credential, and crisis guidance.
- All **21/21 interactive routes** passed both pre-gate and post-gate entry checks with one H1 and the named reviewer/profile before entry. The audit accepted the educational-use gate but selected no assessment answers and generated no results.
- The same release is now deployed. A fresh production probe on 2026-08-06 passed **70/70** exact-canonical HTTP requests across the 35 maintained routes with desktop and mobile user agents. Focused entry-state browser QA used no answers and generated no results.

## AdSense readiness

### Verified

- Production serializes `adsenseEnabled:false`; no ad slot/script loads in initial HTML.
- `ads.txt` has the publisher row, but that does not prove account approval.
- Code fails closed behind flags and production serializes AdSense as disabled.
- In production, optional third-party services use a positive allowlist containing only the topic-neutral homepage. Every other route, including all assessment, informational, condition-specific, youth, crisis, privacy, and result-adjacent surfaces, is tag-free by default. Downstream provider configuration remains unknown.

### Release gate

**BLOCKED; public access remains enabled.** Do not enable AdSense around an instrument whose commercial-context terms prohibit it, require approval, or remain unknown. Before any activation, preserve an approved ad-free boundary for those public tools; sign off exact scoring/result language and clinical review; pass crisis/privacy QA; and independently verify CSP/account/CMP readiness.

The production-aligned monetization plan treats assessment, result, crisis, youth, condition-specific, privacy, and rights-limited surfaces as tag-free; permits only unlinked aggregate measurement; and separates professional readiness review, AdSense, static sponsorship, ethical affiliate, professional licensing/API, and paid original educational products with channel-specific release and account gates.

### Local professional monetization foundation, not published

- A proposed `/for-professionals` page targets digital-health and behavioral-health software teams with a fixed-scope implementation-readiness review using public or fictional staging evidence only.
- A proposed printable screening-implementation checklist contains no instrument items and cites official FTC health-app and breach guidance, Google publisher policy, WCAG 2.2, the NIST Secure Software Development Framework, official 988 help, and SAMHSA implementation guidance.
- Both pages explicitly reject patient records, assessment answers, scores, diagnoses, legal or clinical certification, instrument permission claims, and guaranteed compliance.
- Internal discovery is limited to general About, Contact, and Methodology pages plus the sitemap. The global footer and sensitive routes contain no professional-service CTA.
- A local `/.well-known/security.txt` implementation closes the recorded 404 gap with an HTTPS contact path, canonical URL, expiry, and language. Production remains unchanged.
- The local aggregate gate now passes **122/122 repository tests**, the optimized production build, content and predeploy checks, both production and all-dependency audits with **0 vulnerabilities**, and `git diff --check`. The build renders both proposed professional routes statically. These results are local evidence, not production evidence.

## Prioritized backlog

1. **P1, production policy:** keep every canonical instrument URL freely and publicly useful. Preserve the 14 rights-limited routes as indexable informational pages unless and until authoritative permission, exact-version parity, and qualified review support a future interactive journey.
2. **P1:** reconcile exact items, anchors, reverse keys, algorithms, cutoffs, every result branch, crisis copy, and one canonical review date against durable approval artifacts for the 21 remaining interactive routes.
3. **P1/P2:** finish question-associated selection semantics, result focus/announcements, and keyboard-complete fictional journeys across the remaining clients.
4. **P2:** align evidence anchors and one canonical review date across the 21 remaining interactive pages, schema, and evidence records; the directory, `llms` files, and pre-gate reviewer links are reconciled in production.
5. **P2:** release and production-verify the local `security.txt` implementation through the normal gate; plan CSP nonce migration before any ad activation.
6. **P2 acquisition:** after a complete post-release comparison window, compare non-overlapping 28-day Search Console windows and measure only aggregate homepage tool launches; keep sensitive routes analytics-free.
7. **P2 monetization:** obtain scope-appropriate legal and clinical review of the local professional offer and checklist; publish only after exact owner release approval. Validate demand before setting price or building a hosted product.

## Single next logical action

Approve or reject opening a draft pull request for the local professional-services page, printable checklist, general-page internal links, and `security.txt`. Public release still requires scope-appropriate legal and clinical review plus exact owner approval. Pricing, outreach, contracts, payment accounts, provider/CMP/account changes, and monetization activation remain separate decisions.

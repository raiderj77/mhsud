# What changed (file by file)

Each entry is PROVEN by the named file and this session's edit commands.

- PROVEN — `src/lib/facilityIndexing.mjs`: shared completeness, location-scoped duplicate/primary selection and sitemap eligibility policy.
- PROVEN — `src/lib/facilities.ts`: all-record loading and cached state-level indexing policies.
- PROVEN — `src/components/DirectoryContext.tsx`: data-derived counts, service mix, field coverage, source dates and licensing limitations.
- PROVEN — `src/components/FacilityDirectory.tsx`: explicit detail-page cross-check status and generated date in provenance.
- PROVEN — `src/app/facilities/page.tsx`: national context and indexable hub; replaced unsupported introductory claims with snapshot limitations.
- PROVEN — `src/app/facilities/[state]/page.tsx`: state context and indexable metadata.
- PROVEN — `src/app/facilities/[state]/[city]/page.tsx`: city context; indexing requires at least three records.
- PROVEN — `src/app/facilities/[state]/[city]/[slug]/page.tsx`: selective facility indexing and primary canonical targets.
- PROVEN — `src/app/facilities/pricing/page.tsx`: indexable metadata.
- PROVEN — `src/app/sober-living/page.tsx`: indexable resource page; clarified that certified-home records have not been imported and removed broad licensing assertions from introductory/CA/GA copy.
- PROVEN — `src/app/sitemap.ts`: eligible directory URLs with dataset lastModified; retained core entries.
- PROVEN — `scripts/ingest-facility-supplements.mjs`: offline CSV staging for reviewed NPPES, state-license and certified-home sources; no runtime publication.
- PROVEN — `tests/facility-indexing.test.mjs`: four policy/data/parser regression checks.
- PROVEN — `INDEXING-REPORT-RUN3.md`: per-phase evidence, counts, blocked sources, offline instructions, scoped security review and verbatim test/lint outputs.
- PROVEN — `HANDOFF.md`: this handoff.

# Evidence (PROVEN or ASSERTED, with sources)

- PROVEN — Local sitemap execution emitted **12,709 unique URLs**: 90 core + 1,237 Wave 1 + 11,382 Wave 2. Directory lastModified is `2026-11-02`. Source: `/tmp/mhsud-run3-verify.log`, reproduced in `INDEXING-REPORT-RUN3.md` under Phase 6 and verification output; `src/app/sitemap.ts`.
- PROVEN — Wave 2 holds **818 records**: 808 non-primaries and 10 incomplete primaries. Settled duplicate policy yields 554 clusters. Sources: `tests/facility-indexing.test.mjs`; policy-count command output reproduced in the Run 3 report's Phases 1–3.
- PROVEN — All nine source-discovery requests failed DNS resolution; no new records or NPIs were imported. Exact export endpoints and terms remain unverified. Sources: `/tmp/mhsud-run3-sources.json`, reproduced in the Run 3 report; importer source only stages reviewed local inputs.
- PROVEN — Scoped security review identified existing API rate/body-validation concerns and a header-coverage gap for nested business API routes; no security patch was applied. Sources: `INDEXING-REPORT-RUN3.md` SECURITY-REPORT, `src/app/facilities/api/{check,claim}/route.ts`, `src/middleware.ts`, `next.config.mjs`. Exploitability remains ASSERTED pending further evidence; no live testing was performed.
- PROVEN — Decision is **REVISE**, pending coordinator build/rendered checks and separate review of API concerns. Source: `INDEXING-REPORT-RUN3.md`, decision and Phase 6. Local metadata execution does not establish HTTP status or production rendering.
- ASSERTED — Coordinator verified the unchanged baseline build outside the sandbox, per `BRIEF.md`. This agent did not run a build; the final changed-tree build remains unverified.

# Tests and checks run (with counts, and any failed or skipped check named)

- PROVEN — `npm ci`: exit 0, 384 packages installed. Source: installation command output; Run 3 report Phase 0.
- PROVEN — Baseline `npm test`: **246 passed / 0 failed / 0 skipped**; final: **250 passed / 0 failed / 0 skipped**. Sources: `/tmp/mhsud-run3-test.log`, `/tmp/mhsud-run3-final-test.log`, copied verbatim into the Run 3 report.
- PROVEN — Baseline and final lint: **2 runs, both exit 0**. TypeScript check: exit 0. Sources: `/tmp/mhsud-run3-{lint,final-lint,types}.log` and command outputs; report Phase 6.
- PROVEN — Server-free checks covered **12,200 facility**, **4,180 city**, and **54 state** metadata objects, sitemap uniqueness/cap and facility canonicals. Source: `/tmp/mhsud-run3-verify.log`. First temporary loader attempt failed resolving `.tsx`; corrected loader then passed. Source: session command outputs and report Phase 6.
- PROVEN — **15 directory source files** passed byline/Stripe-link checks; **3 source checks** preserved check/claim/report noindex. Local PurchaseCta rendering produced a disabled button with checkout env unset. Source: render/scan command outputs, summarized in report Phase 6. Production checkout environment is unverified.
- PROVEN — Secret-signature sweep: **375 text files, 0 selected-pattern hits**; limited scope, not exhaustive clearance. Source: `/tmp/mhsud-run3-security-sweep.json`, report SECURITY-REPORT.
- PROVEN — Failed external checks: **9 source-discovery requests** (curl exit 6); **1 dependency advisory audit** (exit 1, DNS failure). Sources: source JSON and `/tmp/mhsud-run3-audit.json`, reproduced in report.
- PROVEN — Skipped: agent baseline/final builds and local HTTP crawl (**0 HTTP URLs checked**) under `BRIEF.md`'s server/build prohibition. Also unverified: browser accessibility, manual keyboard/screen-reader, responsive/performance and changed-page network/BFCache checks. Source: report Phase 6 and session tool transcript. Coordinator verification remains necessary.

# Gates left untouched

- PROVEN — This run's edits did not change instrument rights/items/scoring, crisis logic, analytics/privacy-route policy, local storage, legal pages, security headers, service worker or deployment workflows. Source: file-by-file edit inventory above and session edit commands.
- PROVEN — Checkout implementation and empty example gate remain; local disabled rendering verified. Source: `src/components/FacilityDirectory.tsx`, `.env.example`, render command output. No production-setting assertion is made.
- PROVEN — Check/claim/report noindex metadata and `/api/*` header rule remain. Source: those page files and `next.config.mjs`; nested API coverage concern is reported separately.
- PROVEN — No git commands, merge, deployment, publication, outbound messaging or paid-service actions were run. Source: session tool transcript; restrictions in `BRIEF.md` and user instruction. Existing Run 1/2 reports were only read from the external paths, not edited.

# Remaining owner steps (true owner items only, or the word None)

None

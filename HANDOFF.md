# Navigation fix handoff

## What changed (file by file)

- **PROVEN** `src/components/Navbar.tsx:277` and `:675`: added “Find treatment” → `/facilities` to desktop and mobile navigation, using adjacent link styling.
- **PROVEN** `src/app/page.tsx:608`: added “Find a treatment program near you.” and the treatment action before the existing tool actions. Existing screening hero text and compliance paragraphs remain (`:601–630`).
- **PROVEN** `src/components/Footer.tsx:78`: added the treatment link to Resources.
- **PROVEN** `src/app/facilities/page.tsx:39`: seeker section renders before browsing and operator content. The complete operator pitch moved below browsing (`:62`); statistics moved below task content (`:101`).
- **PROVEN** `src/app/facilities/[state]/page.tsx:46`: cities and their filter precede the existing dataset summary and `DirectoryContext` (`:56`). This template has city links, not a facility list; no new facility-list UI was introduced.
- **PROVEN** `src/app/facilities/[state]/[city]/page.tsx:62`: existing facility listings precede the complete `DirectoryContext` (`:91`).
- **PROVEN** `src/components/DirectoryBrowse.tsx:1`: new shared client component for state/city links. Empty initial query renders every link on the server; filtering uses supplied static labels, with a visible label, result count, empty state, and focus styling. No fetch, storage, backend, or URL-state code appears in this component.
- **PROVEN** `src/components/ToolGrid.tsx:80` and `:244`: separates all 14 Information cards from the homepage main tool list into “About restricted instruments”; existing card data and destinations remain in `src/app/page.tsx`.
- **PROVEN** `src/app/screening-tools/page.tsx:577`: groups the existing information-only entries into the same clearly labeled section. Original category anchors and introductory content remain, including links to the restricted section for categories with no interactive cards.
- **PROVEN** `HANDOFF.md`: this requested report. Source comparison found exactly nine changed/new source files, listed above (`/tmp/mindcheck-source.log`).

## Evidence (PROVEN or ASSERTED, with sources)

- **PROVEN — recon:** working directory from `pwd`: `/Users/jasonramirez/muse-runs/20261113-224508-mindcheck-nav-build2/worktree`. BRIEF.md’s coordinator-supplied preflight records branch `main`, HEAD and origin/main `d963c76b87e08aee5082056c3616a04df117af35`, zero modified source files, and three untracked tool directories. These repository-state claims are accepted from that explicitly authorized preflight, not independently queried.
- **PROVEN — comparison method:** copied `src` to `/tmp/mindcheck-nav-baseline/src` before edits; used `diff -ru`, byte comparisons, and `/tmp/mindcheck-source-check.py`, not git. Diff is `/tmp/mindcheck-nav.diff`. All nine source changes concern the six fixes.
- **PROVEN — content preservation:** `/tmp/mindcheck-source.log` reports `PASS operator pitch byte-identical`; the shared `DirectoryContext.tsx` is byte-identical. The diff shows relocated blocks, not removal of statistics/provenance. The tool data objects remain unchanged.
- **PROVEN — sitemap:** `/tmp/mindcheck-sitemap.cjs` transpiled and executed both baseline/current sitemap functions using their respective source trees. `/tmp/mindcheck-sitemap.log`: `PASS baseline 12709; current 12709; added 0; removed 0`. Built sitemap independently contains 12,709 `<loc>` entries (`/tmp/mindcheck-dom.log`).
- **PROVEN — rendered routes:** Next.js production request handler with its `createRequestResponseMocks` rendered `/`, `/facilities`, `/facilities/ca`, `/facilities/ca/san-jose` in process, without opening a listening socket. `/tmp/mindcheck-render.log` reports HTTP 200 and body sizes 212622, 119640, 200939, 113709 bytes respectively. HTML is in `/tmp/mindcheck-render_*.html`.
- **PROVEN — DOM:** `/tmp/mindcheck-dom.log` reports 23 passing checks: crisis markup with 988 and SAMHSA before main on all four routes; zero Stripe/checkout links on those routes; homepage hero action; 14 separately grouped homepage cards; seeker section first; state/city ordering; server-rendered full browsing lists; filter inputs; San Jose present; sitemap count. Separate command output: `PASS tools index: 14 restricted cards; 0 broken section anchors; 2 checks passed` from `.next/server/app/screening-tools.html`.
- **PROVEN — payment-link scan:** source-diff scan found zero added Stripe/checkout references (`/tmp/mindcheck-source.log`). Recursive built HTML scan output: `Built HTML scan: 96 files; 0 Stripe/checkout hrefs`. Four dynamic route responses were additionally checked above.
- **ASSERTED — interaction/layout intent:** the local filter is intended to narrow San Jose to one city, and the hero action is intended to be visible above the fold. Browser execution was blocked, so neither interaction nor viewport placement is claimed verified.
- **PROVEN — copy review:** new hero sentence and action identify the existing directory, whose data access remains in `src/app/facilities/page.tsx:23–25`. Applied checklist items: plain language, answer-first action, existing substance-use directory purpose. Dropped as inapplicable: new clinical evidence, instrument changes, reviewer credentials, diagnostic claims, article schema, and article publication. No new health article was created (nine-file source inventory).
- **ASSERTED — TRUTHMODE decision: REVISE for release verification.** Source/DOM evidence supports the scoped implementation; missing normal build and browser verification prevents a full PASS. No rights, scoring, crisis-policy, legal, analytics, or clinical-content approval is inferred.

## Tests and checks run (with counts, and any failed or skipped check named)

- **PROVEN — existing unit suite:** final `npm test`, `/tmp/mindcheck-tests-final.log`:
  ```text
  tests 255
  pass 255
  fail 0
  cancelled 0
  skipped 0
  ```
- **PROVEN — ESLint:** `npm run lint` exited 0 with no errors/warnings (`/tmp/mindcheck-lint.log`).
- **PROVEN — prebuild checks:** tests 255/255, predeploy checks passed, and content checks passed (`/tmp/mindcheck-build.log`). Content checker reported 0 content files and 196 source files scanned; these are its reported scope, not a claim of clinical review.
- **PROVEN — source integrity:** 11 checks passed, 0 failed (`/tmp/mindcheck-source.log`).
- **PROVEN — DOM checks:** 23 passed, 0 failed (`/tmp/mindcheck-dom.log`), plus 2 tools-index checks passed in command output. Four routes rendered HTTP 200 (`/tmp/mindcheck-render.log`).
- **PROVEN — sitemap equality:** 1 full URL-set comparison passed: 12,709 before/after, 0 added, 0 removed (`/tmp/mindcheck-sitemap.log`).
- **PROVEN — offline production build:** `NEXT_TELEMETRY_DISABLED=1 NEXT_FONT_GOOGLE_MOCKED_RESPONSES=/tmp/mindcheck-font-mock.cjs npx next build` exited 0; compiled, checked types/lint, and generated 103/103 static entries (`/tmp/mindcheck-offline-build.log`). Fixture uses local Arial via Next.js’s font-response testing hook; no repository font code changed. This is webpack with mocked font responses, not the normal Turbopack release build.
- **PROVEN — failed/aborted normal builds:** initial `npm run build` failed `EPERM` writing Next telemetry preferences. Telemetry-disabled Turbopack attempt was interrupted after remaining at compilation without progress. Plain `npx next build` then failed `ENOTFOUND fonts.googleapis.com`, unable to fetch DM Sans and Source Serif 4 (`/tmp/mindcheck-webpack-build.log`). First offline fixture also failed because it lacked `@font-face`; corrected fixture build passed. Normal production build remains unverified.
- **PROVEN — blocked browser checks:** server startup failed `listen EPERM ... 127.0.0.1:4311` (`/tmp/mindcheck-server.log`); headless Chrome launch aborted before checks (`/tmp/mindcheck-browser.log`). Browser assertions completed: 0. Prepared script: `/tmp/mindcheck-browser.mjs`.
- **PROVEN — skipped checks:** existing Playwright suite, live San Jose filtering/clear/empty-state interaction, JavaScript-disabled browser execution, above-fold desktop/mobile placement, responsive overflow, automated browser accessibility, manual keyboard and screen-reader smoke checks. Sandbox server/browser failures above prevented these checks. Full lists are proven in server HTML, not in an actual JS-disabled browser.
- **PROVEN — React review:** applied the available React best-practices skill: small client boundary receiving link labels only; local state; stable href keys; no client data fetch; derived filtering; explicit input label/status/focus. Source: `DirectoryBrowse.tsx` and `ToolGrid.tsx`. This source review does not replace browser accessibility checks.

## Gates left untouched

- **PROVEN** Byte comparison confirms unchanged pricing page, listing-check page, claim page, route policy, root layout, crisis banner, directory context, and sitemap (`/tmp/mindcheck-source.log`). No data files changed. Complete source inventory/diff shows no instrument definitions, scoring, rights registry, legal pages, analytics policy, security headers, service worker, or deployment workflows changed.
- **PROVEN** Operator prices/links/text are byte-identical after relocation. No payment links were introduced; paid launch was not enabled (source and built-link scans above).
- **PROVEN** noindex rules were not edited; no route file was added or removed; sitemap URL sets are identical. Crisis banner implementation and root placement remain unchanged; four rendered pages confirm top markup.
- **PROVEN** No git, merge, deploy, publish, send, or spend command was executed in this task’s tool transcript. Only local source changes, local verification, and this handoff were performed.
- **PROVEN** Coordinator follow-up is prescribed by BRIEF.md “After the run”: recount evidence and perform live preview verification. The skipped/blocked checks above remain coordinator verification work; this handoff does not authorize crossing a hard gate.

## Remaining owner steps

None

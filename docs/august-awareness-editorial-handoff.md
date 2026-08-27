# August awareness articles — research and release gate

Prepared August 26, 2026. Status: editorial drafts, qualified human review pending. No production release or indexing submission authorized in this task.

## Verified before-state

- Canonical repository: `raiderj77/mhsud`; origin/main `2ec426d237a37eadf1aefc422ad0e251395d4506` (PR #124).
- Original checkout was clean and remains untouched. Work is isolated on `codex/august-awareness-articles-2026-08-26` in a new worktree.
- Vercel inspection returned project `mhsud-sdpt`, READY, production, with both `mindchecktools.com` and `www.mindchecktools.com` aliases. This task does not change production.
- Open PRs at orientation: dependency PRs #112, #113, #114; no overlapping editorial PR found.
- No existing `/awareness` section. Existing `/blog/*` routes are redirected; the new guides intentionally use a separate route namespace.
- Optional services are allowlisted only on the homepage. Aggregate analytics uses a separate narrow public-route allowlist. Neither includes awareness routes. The new section is also explicitly sensitive for no-store/no-referrer and service-worker network-only handling.

## Deliverables and search intent

These are intent hypotheses, not verified GSC opportunity rankings or search-volume estimates.

| Proposed canonical path | Reader question | Original practical value |
| --- | --- | --- |
| `/awareness/august` | Which mental-health and addiction awareness dates occur in August? | A sourced calendar separating days, months, campaigns, and unverified week dates. |
| `/awareness/national-wellness-month` | What is August Wellness Month, and what can I do? | A low-pressure planning exercise and accessible community ideas without outcome claims. |
| `/awareness/national-grief-awareness-day` | When is Grief Awareness Day, and how can I support someone? | Optional, easy-to-decline invitations and a permission/privacy checklist for remembrance. |
| `/awareness/fentanyl-prevention-awareness-day` | What is the August 21 observance? | Full-name/date clarity, accurate basic distinctions, a resource-table plan, official response links. |
| `/awareness/overdose-awareness-month-day` | Is overdose awareness a month, week, or day? | One consolidated explanation and small-event checklist instead of competing near-duplicate pages. |

The URLs are year-independent. References to 2026 describe this source check, not an automatically refreshed publication date. Do not clone the pages for every year or locality.

## Authoritative evidence and boundaries

- [GPO, National Wellness Month](https://govbooktalk.gpo.gov/2022/08/22/national-wellness-month/) confirms August. It is not evidence of a particular clinical benefit or a federal mandate.
- [NIMH, Caring for Your Mental Health](https://www.nimh.nih.gov/health/topics/caring-for-your-mental-health) provides general self-care and professional-help context. No exercise dose, treatment algorithm, or diagnostic threshold was copied into these articles.
- [NAMI's 2026 grief-day calendar](https://stigmafree.nami.org/event/national-grief-awareness-day/2026-08-30/) confirms August 30. [NIA's grief guide](https://www.nia.nih.gov/health/grief-and-mourning/coping-grief-and-loss) supports the individual nature of mourning and routes to support. No grief diagnosis or staged recovery timetable is offered.
- [CDC's August 21 toolkit](https://www.cdc.gov/overdose-prevention/php/toolkits/fentanyl-prevention-awareness-day.html) was updated August 19, 2026. [CDC fentanyl facts](https://www.cdc.gov/stop-overdose/caring/fentanyl-facts.html) supports the pharmaceutical/illegally-made distinction. Statistics and fear-based headlines were deliberately omitted.
- [CDC's IOAD toolkit](https://www.cdc.gov/overdose-prevention/php/toolkits/ioad.html) and [Penington Institute campaign resources](https://www.overdoseday.com/campaign-resources/) confirm August 31. The [official event guide](https://www.overdoseday.com/event-tips/) allows a locally suitable event date. The campaign homepage timed out in one fetch; the resources and event pages were accessible. That timeout is not a broken-link verdict.
- [End Overdose's campaign](https://endoverdose.net/campaign/) establishes organizational use of the month label, not a universal federal designation.
- [SAMHSA's week toolkit](https://www.samhsa.gov/about/digital-toolkits/overdose-awareness-week), [May toolkit](https://www.samhsa.gov/about/digital-toolkits/mental-health-awareness-month), and [September recovery page](https://www.samhsa.gov/about/digital-toolkits/recovery-month) were corroborated in current official-domain search extracts. Direct fetches returned access errors. An exact 2026 overdose-awareness week range remains unverified and is not invented.
- [CDC overdose-response guidance](https://www.cdc.gov/stop-overdose/response/index.html) supports the emergency route. Articles point to official guidance rather than attempting to replace response training.

Citations are adjacent to factual sections as well as collected at the article end. Organizer checklists and example invitations are labeled editorial suggestions, not validated clinical interventions. No instrument items, private stories, clinical results, statistics, endorsements, or testimonials are reproduced.

## Search-result comparison: evidence versus inference

Current searches surfaced an [ACTS Florida wellness article](https://www.actsfl.org/national-wellness-month-small-habits-that-support-recovery/) and [SADOD's organizer guide](https://sadod.org/2025/07/08/howorganizeioadeventyourcommunity), alongside CDC and campaign-owner resources. ACTS offers a recovery-oriented habits overview. SADOD includes firsthand organizer interviews. These were inspected as competing formats, not used as medical authorities or copied.

Inference: a compact sourced calendar plus permission-conscious, practical guides may serve readers who need date clarity and simple organizational planning. This is not proof that competitors lack safeguards, that our articles are better, or that the pages will outrank them. We must not fabricate firsthand experience to match an established organization's authority.

Unknown: current Search Console property access, query volume, impressions, CTR, position, live backlinks, competitor rankings by location/device, and actual reader demand for the proposed routes. No authenticated GSC or GA4 data was reviewed in this run. Missing data is not zero traffic.

## SEO, AEO, and GEO implementation

- Distinct titles/descriptions and canonical URLs; server-rendered main text; one H1; useful headings; visible answer blocks and FAQs; accessible table and section navigation.
- Topic-consistent internal links among the five drafts and outward to established resources. No assessment conversion prompt. No unrelated portfolio backlinks.
- Article/Breadcrumb structured data reflects the visible content. Organization authorship is separated from site ownership. No `reviewedBy`, fabricated publication date, or fake named clinical review. No FAQ rich-result eligibility claim.
- Four original, local 1536 × 1024 WebP illustrations, descriptive alt text, intrinsic dimensions, responsive delivery, and explicit AI-art disclosure. Generation prompts are recorded separately. No campaign logos or licensed photography reused.
- No keyword stuffing, mass pages, ranking promises, invented expertise, or special crawler-only content.

Google's [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) emphasizes useful, trustworthy content, particularly for YMYL. Its [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) says there are no special AI markup requirements beyond established SEO practices. [Article markup guidance](https://developers.google.com/search/docs/appearance/structured-data/article) and [image guidance](https://developers.google.com/search/docs/appearance/google-images) inform implementation, not a guarantee of a particular search appearance.

## Publication and indexing gate — currently HOLD

All five routes deliberately return `noindex, nofollow, noimageindex` and are absent from the public sitemap and existing public navigation. They are review drafts, not currently index-eligible articles. Noindex is not authentication or confidentiality; never add private reviewer information or health data to these files.

Before any release:

1. A topic-qualified human must review factual copy, emergency language, grief-support limits, source interpretation, permissions, and each illustration. Record the reviewer's actual name, credential scope, review date, and which pages were reviewed. Jason's CADC-II is retained as site ownership, not invented approval of these drafts.
2. Resolve any reviewer corrections. If the exact awareness-week dates remain uncertain, keep that uncertainty or omit the date range; do not guess.
3. Obtain owner approval for these specific articles and their release. Previous approval of PR #124 does not authorize this new release.
4. In a reviewed change, remove the draft notice/indexing overrides in both `layout.tsx` and `awarenessMetadata`, add truthful review/published dates and corresponding metadata, add only approved routes to the sitemap, and add a descriptive calendar link from a relevant existing education surface. Update the gate tests intentionally.
5. Re-run all checks; merge only after checks and release approval. Verify the actual production deployment, HTTP 200, canonical, crawl rules, schema, images, noindex removal, and privacy isolation on every approved route.
6. Use GSC URL Inspection for the approved canonical pages and verify the sitemap. [Google's recrawl guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) says requests do not guarantee indexing; repeated requests do not make crawling faster. IndexNow is not a Google indexing guarantee. No indexing request was made here.

Do not rush unreviewed health copy to catch August 30 or 31. These guides can remain useful in future years after genuine source refreshes.

## Measurement and revenue boundary

After an approved release, save the release SHA/date and use privacy-safe GSC page-level aggregates for the five exact canonical URLs: impressions, clicks, CTR, and average position. Review at 28, 56, and 84 days and account for August seasonality; do not claim causation from small samples or compare seasonal pages as though demand were constant. Keep exports private and do not expose health-related query rows or identifiers.

No analytics allowlist expansion, ads, affiliate offers, lead forms, or personalized marketing is part of this change. Search Console can measure discovery without adding client-side tracking to grief or overdose articles. No claim of qualified conversions or revenue can be made yet. The legitimate long-term value is a useful, citable resource; commercial pressure does not belong in these journeys.

## Reproducible checks

```text
npm test
npm run lint
npm run lint:content
npm run lint:predeploy
npm run build
npm audit --omit=dev
npm run start -- --port 3100
node scripts/audit-awareness-drafts.mjs
```

The last command only reads local informational entry pages, links, and image resources. Browser QA must likewise avoid assessment answers and result screens. Automated checks are not clinical review, a full accessibility certification, or a promise of zero defects.

## Verified validation results

- 170 automated tests passed, including six new awareness-focused tests. Existing privacy, GPC, instrument-rights, and crisis regressions remain passing.
- ESLint: no errors or warnings. TypeScript no-emit check passed. Production build passed with all five awareness pages prerendered. Content and predeploy checks passed.
- Runtime-dependency audit reported zero known vulnerabilities at this check. Dependency deprecation notices and the existing build notice about an edge-runtime page are not claims of full security certification.
- Final local entry audit: 5/5 HTTP 200 pages; explicit noindex; correct canonical; valid JSON-LD; original images HTTP 200; direct crisis actions; zero article forms or optional tracking tags. All 9 unique in-article internal destinations returned HTTP 200. Sitemap excludes every draft.
- Unknown article slug returned HTTP 404. The initial `dynamicParams:false` setting caused the pinned framework to log `NoFallbackError` for that request; letting unknown slugs reach the explicit `notFound()` guard removed the log while preserving 404. Verified against the final local production build.
- Browser checks: all five pages at 390 × 844 and 1440 × 1000 had one main H1, no horizontal overflow, no broken section anchors, direct crisis links, no forms, and no visible optional tracking scripts. Light/dark presentation and generated images were inspected; all four hub images loaded when brought into view.
- Four WebP assets total 599,166 bytes, each 1536 × 1024. Originals were visually inspected; no campaign branding, medical diagrams, people, or embedded claims are present.
- Existing assessment routes were not answered and no result screen was opened. No production, Search Console, analytics-account, email, or monetization setting was changed.

Human review and owner release approval remain outstanding. The next action is qualified review of the four article drafts and calendar, not an indexing submission.

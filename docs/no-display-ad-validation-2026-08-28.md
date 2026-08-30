# No-display-ad cleanup: local validation

> Historical branch record. The later privacy cleanup removes Google Analytics,
> the consent dialog, and the generic tool-launch event. Current behavior is
> governed by `AGENTS.md` and `docs/no-display-advertising.md`; the observations
> below must not be read as the current production measurement design.

Verified August 28, 2026. Base: `640657211b79f992104aafb168dfdcaada97ba3d`.
Branch: `codex/no-display-advertising-2026-08-28`.

## Implemented

- Removed 418 AdSlot placements across 148 tool/article/layout files, their
  imports, the component, ad loader/queue/event, seller declaration, metadata,
  activation flags, and ad-only CSP origins/frames.
- Exact comparison against the base confirmed those 148 files differ only by
  ad removal and obsolete ad-comment cleanup. Questionnaire/scoring logic,
  article text, citations, and redirects were not rewritten.
- Updated public policies, footer/homepage, consent UI, AI discovery summaries,
  build checks and current operating guidance. Historical plans are explicitly
  superseded; other portfolio policies were not changed.
- Version-3 consent retains only a valid, explicit analytics choice. Migration
  tests cover every version-2 analytics/advertising boolean combination, current
  choices, extra fields, missing fields, malformed values and unknown versions.
- Found and fixed privacy-dialog clipping at 320x568: previously its top was
  approximately -165px; after the bounded-scroll fix it is 12px, bottom 556px.
- Blocked automatic Vercel deployment for this exact review branch only. Main
  and other branches retain their existing deployment behavior.

## Passed locally

| Check | Result |
|---|---|
| Full unit/regression suite | 180 passed, 0 failed |
| Production build | Compiled; lint/type validation passed; 241 pages generated |
| Standalone ESLint | Passed for src |
| Standalone TypeScript | Passed (`tsc --noEmit`) |
| Content lint and predeploy | Passed, including new no-ad gate |
| Production dependency advisory audit | 0 reported advisories; not a full security audit |
| HTTP entry audit | 67/67 passed, including all 58 classified routes and public/policy/commercial/crisis pages |
| Local seller URL | `/ads.txt` returns 404 |
| Sitemap | HTTP 200; DASS informational canonical retained |
| Selected protected files | 15 exact comparisons passed: author, classifications, route policies, middleware, worker, DASS/Athens, professional offer, reading page, crisis banner, aggregate analytics, email/API, affiliate and acquisition helper |
| Diff whitespace | Passed |

## Browser observations

- Desktop 1280x720, mobile 375x812 and short mobile 320x568 inspected.
- Privacy dialog has one analytics checkbox, no advertising option, explanatory
  aggregate-measurement copy, and the no-display-ad statement.
- Forward/reverse focus trapping, Escape rejection, and reopening were exercised.
- Short-screen dialog scrolls within the viewport; controls remain reachable.
- Explicit analytics consent does not load Google on the cookie-policy page.
  On the homepage it permits only the existing Google Analytics loader.
- Third-party measurement requests were blocked in the temporary local test tab
  to avoid adding QA events to production analytics. A fresh observed reload
  window contained 18 requests, zero ad requests, and two blocked requests.
- Navigating from that homepage to the PHQ-9 entry left no Google or aggregate
  analytics script, no ad element/frame, one H1, and crisis links present.
- A homepage with fictional, non-sensitive query/fragment values did not load
  the Google Analytics script.

GPC and URL sanitization passed the automated regression gates. The browser API
did not support injecting a legacy/GPC fixture; no claim is made that those
synthetic cases were manually exercised in the live browser. Browser connection
delays were resolved using a fresh local policy tab, not by testing real data.

No answers were entered, assessments submitted, results opened, newsletter
subscriptions created, or messages sent. Shared GPC, allowlists, crisis resources,
instrument-rights gates and browser-local data handling remain in place.

## Still gated

These are local results, not production verification or a legal, clinical,
security or accessibility certification. Production was read-only and still
served the prior ad metadata/disclosures during this run. No merge, deployment,
provider/account/environment mutation, outreach or spending is authorized by
this PR. A separately approved release must recheck production headers, HTML,
network behavior, seller removal, consent migration and disclosures.

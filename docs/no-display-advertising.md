# MindCheckTools: permanent no-display-advertising policy

Owner directive: August 27, 2026. Local implementation authorized August 28, 2026.
This policy supersedes conflicting advertising instructions in this repository,
including legacy Empire standards, agent prompts, checklists, and monetization plans.
It does not change another portfolio site's policy. Only a new explicit owner
directive can change this rule; vendor approval or an environment flag cannot.

## Product boundary

- No display ads, advertising networks, banners, interstitials, programmatic ads,
  retargeting, or health-interest advertising on any MindCheckTools route.
- Never collect, transmit, profile, or monetize answers, scores, results, crisis
  activity, or other sensitive tool information for commercial purposes.
- Keep essential screening context, interpretation, crisis resources, and safety
  information free. Never sell from a screening result.
- Separately disclosed affiliate links and professional services are not display
  advertising. Their existing privacy/route restrictions remain in force; this
  cleanup does not approve new partners, offers, tracking, or placement changes.
- Do not claim zero data collection, legal compliance, clinical validation, or
  security/accessibility certification. Hosting, voluntary email, analytics,
  and local copies retain their stated boundaries.

## Dependency-aware disposition

| Item | Disposition | Reason / dependency |
|---|---|---|
| AdSlot and its imports/placements | REMOVE | Ad-only; retain surrounding tools, questionnaire logic, sources, and redirects |
| Ad loader, queue, ready event, activation props/flags | REMOVE | No path may reactivate display advertising |
| Seller ads.txt and AdSense account metadata | REMOVE | No authorized display-ad sellers; update CI/predeploy in the same change |
| Ad-only and Google Analytics CSP origins and frames | REMOVE | No active consumer remains; retain the existing security directives and general image policy |
| Obsolete Google consent implementation and saved preferences | REMOVE | Google Analytics is not used; no consent state may reactivate a retired tracker |
| Policies, footer, homepage, AI discovery summaries | REWRITE | State no display ads, not temporary disablement; preserve ordinary-data disclosures |
| Build gates and regression tests | REWRITE | Require ad absence rather than publisher setup |
| Active operating guidance | REWRITE | Remove MindCheck ad recommendations; give shared/historical content an explicit supersession notice |
| GPC and the Vercel aggregate route allowlist | KEEP | Required for the remaining privacy-safe, cookie-free aggregate measurement boundary |
| Sensitive navigation cleanup, no-store/no-referrer, service-worker rules | KEEP | Prevent inherited analytics and stale-page exposure |
| Legacy ad script-ID removal | KEEP | Defensive cleanup only, never a loader or activation path |
| Negative Google/ad runtime tests | KEEP | Prevent a retired tracker or advertising system from returning |
| Negative ad tests, rights records, historical evidence | KEEP | Safety/rights boundaries and dated history remain useful |

No runtime dependency, paid vendor, patient-data store, or new analytics event is
added. Instrument-use decisions and public author/reviewer credentials are unchanged.
No display ads is not blanket commercial permission for published instruments.

## Verification and release gate

Run `npm test`, `npm run lint:predeploy`, `npm run lint:content`, type checking,
ESLint, and a production build. Verify GPC, aggregate-route allowlisting,
query/hash isolation, clean navigation, sensitive entry states,
absence of ad metadata/requests/frames, and retained crisis navigation.
Do not answer assessment questions, submit assessments, or open results.

This document describes the branch, not a completed production release. Merge,
deployment, account changes, outreach, and spending remain separately gated.
`vercel.json` disables automatic deployment for this exact PR branch only,
so publishing the review branch does not request a preview deployment. Other
branches, including main, keep their existing deployment behavior.
After an approved release, recheck production HTML/headers/network behavior,
the absence of the seller route, and privacy disclosures. Provider environment
settings and old deployed versions are not changed by this local cleanup.

## Technical references checked August 28, 2026

- [Vercel Web Analytics documentation](https://vercel.com/docs/analytics): implementation reference for the remaining cookie-free aggregate measurement service; MindCheckTools applies a narrower route allowlist and GPC suppression in application code.
- [MDN CSP frame-src](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-src): frame source restrictions are separate from frame-ancestors/X-Frame-Options.
- [Vercel Git configuration](https://vercel.com/docs/project-configuration/git-configuration): branch-specific deployment suppression; unspecified branches retain the default behavior.

These sources explain technical controls, not legal compliance or instrument rights.

# MindCheck Tools focus and professional-review implementation record

Date: 2026-08-22

This record separates verified evidence from inference and unknowns. It documents a local, unreleased implementation. It is not clinical, legal, privacy, or licensing approval.

## Verified evidence

### Repository and release state

- Repository: `raiderj77/mhsud` at `https://github.com/raiderj77/mhsud.git`.
- Isolated worktree: `C:\Users\jason\Documents\Empire\mindcheck-focus-professional-review-2026-08-22`.
- Branch: `codex/mindcheck-focus-professional-review-2026-08-22`, based on `origin/main` commit `bb2f12e6dd97e8f29acb12897dc100242ed4a543`.
- Production project: Vercel project `mhsud-sdpt`; the production deployment was Ready before this work began.
- No production deployment, merge, outreach delivery, account change, or spending occurred in this implementation.

### Before state

- The production footer linked to unrelated portfolio properties, including FiberTools.
- The treatment-cost guide linked to Medical Bill Reader.
- Tool type, ownership, rights, validation, scoring, privacy, review, and manual-review state were not supplied through one typed registry covering every maintained tool route.
- Work Stress cited PubMed PMID `31693056` as workplace-stress support. The PMID resolves to an unrelated dermatology article, not a Gallup workplace study.
- Work Stress assigned site-created severity bands to a 0-36 total without validation evidence.
- The professional page described a proposed review but did not present the bounded $495 founding offer and fictional sample now implemented.

### Information architecture and trust changes

- The homepage now presents four paths: substance use and recovery; published mental-health screeners; educational tools and skills; and professional teams. Substance use and recovery is the primary path.
- Desktop and mobile navigation link directly to recovery, screening tools, professional resources, evidence, methodology, and crisis help.
- Unrelated portfolio links were removed from the footer and treatment-cost guide. The predeploy rule now fails if any of eight known unrelated portfolio domains are reintroduced.
- `mindchecktools.com` remains the canonical public domain in metadata and public machine-readable summaries.
- `llms.txt`, `llms-full.txt`, and the sitemap now expose the bounded professional offer and fictional sample.

### Central tool classification

- `src/lib/toolClassifications.ts` defines three user-facing labels: `Published Screener`, `Original Educational Tool`, and `Information Only`.
- The registry covers 58 maintained tool and instrument-information routes.
- Every record contains route, name, intended audience, purpose, source or ownership, rights status, validation status, scoring or cutoff status, diagnostic limits, clinical-review status, privacy behavior, citation links, related-guide links, last-verified date, and a manual-review flag.
- `ToolClassificationNotice` displays the classification and limits before tool content, with expandable source, scoring, privacy, and review details.
- The screening directory obtains its tool-basis label from the same registry rather than maintaining an independent classification list.

### Work Stress repair

- The unrelated PMID and the unsupported 23% statistic were removed.
- Current sources are the WHO mental-health-at-work fact sheet, WHO burnout classification guidance, and the CDC/NIOSH work-stress overview.
- The page now states that its six areas and 0-36 total are site-defined educational aids, not validated domains, prediction rules, severity bands, or clinical cutoffs.
- Automated lower/moderate/high/very-high labels were removed. Results show a raw reflection total with no clinical band and general, non-score-driven next steps.
- Advertising and affiliate-style therapy promotion were removed from the Work Stress client.
- The content-update date is 2026-08-22. The separate reviewer date remains 2026-08-02; this change does not represent a new clinical review.

Primary sources:

- WHO, Mental health at work: https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work
- WHO, Burn-out an occupational phenomenon: https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon
- CDC/NIOSH, About stress at work: https://www.cdc.gov/niosh/stress/about/index.html

### Professional offer

- `/for-professionals` now offers a `Privacy and Screening Readiness Review` at a founding fixed price of $495.
- Scope is limited to one instrument family and up to five public or fictional staging routes.
- Normal delivery is within five business days after written scope confirmation and access to the agreed public or fictional staging pages.
- The offer includes one follow-up email and explicitly lists included and excluded work.
- The inquiry template requests organization and contact context, public or fictional staging URLs, route count, instrument names if known, and timing. It instructs prospects not to send patient information, assessment answers, scores, diagnoses, or other health data.
- `/for-professionals/sample-readiness-review` is a printable, entirely fictional example. It names no real client and contains no assessment answers, scores, symptoms, diagnoses, or other health information.

### Privacy and monetization boundaries

- Sensitive assessment and result routes remain excluded from optional analytics, advertising, and affiliate services.
- Optional third-party services remain restricted to the topic-neutral homepage.
- The aggregate route allowlist includes the general professional offer and fictional sample; it does not transmit assessment answers, scores, results, or query strings.
- Work Stress loads no Google, advertising, analytics, or affiliate script in local entry-state testing.
- No ad placement, affiliate link, payment collection, or marketing transmission was added to an assessment, result, or crisis flow.

## Browser entry-state verification

Only public entry states were inspected. No disclaimer was accepted on a tool page, no assessment question was answered, and no result screen was opened.

- Desktop checks at a 1365 by 768 viewport: `/`, `/screening-tools`, `/work-stress-check`, `/for-professionals`, and `/for-professionals/sample-readiness-review` had no horizontal overflow and contained no FiberTools, Medical Bill Reader, BuildMetric, or CaliforniaMailer domain.
- Mobile checks at the browser's effective 375-pixel viewport: the same routes had no horizontal overflow. Crisis, non-diagnostic, and privacy language remained present.
- Work Stress displayed `Original Educational Tool`, `Manual review remains required`, its source and scoring limits, and crisis guidance before any assessment interaction.
- The professional page displayed $495 pricing, five-business-day timing, one follow-up email, exclusions, a no-health-data instruction, and a link to the fictional sample.

## Validation results

- `npm test`: 148 of 148 tests passed.
- `npm run lint:predeploy`: passed.
- `npm run lint:content`: passed.
- `npx tsc --noEmit`: passed.
- `npx eslint src tests scripts --ext .ts,.tsx,.mjs`: passed.
- `npm audit --omit=dev --audit-level=high`: 0 vulnerabilities.
- `npm audit --audit-level=high`: 0 vulnerabilities.
- `npm run build`: passed; Next.js generated 238 of 238 static pages.

Focused regression coverage now checks classification completeness, Work Stress claims and cutoff removal, portfolio-link exclusion, navigation focus, professional-offer boundaries, and sample-page safety.

## Inferences

- Making recovery the primary path is likely to improve coherence and qualified discovery because it aligns the homepage with the maintainer's stated CADC-II scope and the site's strongest practical resource cluster.
- A bounded, no-health-data readiness review is a more durable initial revenue offer than placing ads or affiliate pressure in trust-sensitive assessment journeys.
- A central registry should reduce classification drift, but it does not replace instrument-by-instrument rights verification or topic-specialist review.

## Unknowns and deferred decisions

- No qualified topic specialist has approved every mental-health instrument implementation or the Work Stress revision.
- The registry reflects the current repository rights records; it is not legal advice and does not resolve open or changing instrument-license terms.
- Customer terms, professional liability coverage, invoicing, payment collection, taxes, cancellation policy, data-processing terms, and service-capacity limits require owner and, where appropriate, professional advice before accepting paid work.
- The $495 founding price is an owner-approved implementation target in the attached scope, not evidence of market demand or conversion.
- Production behavior will remain unchanged until a later merge and deployment authorization.
- Draft PR #120 overlaps the portfolio-link removal. Draft PR #119 independently addresses the Athens source; neither was modified or closed here.

## Manual review flags

- All published screeners and information-only instrument routes retain manual review requirements.
- Original tools that make medically consequential, withdrawal, treatment, safety, health-timeline, BAC, or population-specific claims require periodic source and scope review even when the registry's default manual flag is false.
- Before release, an owner should review the public $495 commercial terms and a qualified reviewer should re-check Work Stress wording, withdrawal-related routes, and other high-consequence original tools.

## Release gate

This implementation is suitable for a draft pull request. It must not be merged or deployed until hosted checks pass and the owner explicitly approves the commercial wording and release. A production smoke test remains required after any authorized deployment.

# MindCheck Tools organic growth baseline

Date: August 8, 2026

Scope: growth and revenue evidence only; this does not repeat the Site Record or assessment audit.

## Verified current state

- Production returns HTTP 200 with an exact canonical for the homepage, professional hub, professional checklist, screening-rights guide, DASS informational page, sitemap, robots file, and security contact file.
- GitHub `main` includes the merged professional growth funnel. There were no open pull requests when this workstream began.
- Search Console, three months ending August 6: 433 clicks, 51,530 impressions, 0.8% CTR, average position 45.7. The sitemap is accepted, HTTPS and breadcrumb reports have no reported errors, and no manual action or security issue was present in the latest review.
- Search Console page evidence identifies `/worry-time-scheduler` as the clearest near-page-one improvement candidate: 716 impressions, 10 clicks, 1.4% CTR, average position 9.1. `/dbt-crisis-skills` also ranks near page one but is crisis-adjacent and is excluded from commercial optimization.
- GA4, 28 days ending August 7: 90 users and 129 page views. Revenue is $0. GA is intentionally limited to the topic-neutral homepage after consent; sensitive and health-topic routes do not load optional analytics or advertising services.
- A quarantined worry-time article contradicted the safer interactive tool by claiming guaranteed mechanisms and unsupported 35–50% and 50–80% outcomes. It also contained dormant ad-slot call sites on a page with crisis guidance. This branch removes those risks while preserving the existing `/blog/*` quarantine.

No Search Console query strings, analytics identifiers, health answers, scores, or browser-local entries are recorded in this file.

## Current external evidence

### Authoritative sources

- [NHS Every Mind Matters](https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/tackling-your-worries/) describes a short worry-time exercise and practical problem-solving steps.
- [Krzikalla et al. (2024)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11303915/) reported a positive signal in a small, supported waitlist-controlled intervention, with important population and delivery limits.
- [Versluis et al. (2016)](https://pubmed.ncbi.nlm.nih.gov/26511764/) found that an online worry-postponement intervention did not outperform worry registration alone.
- [Google's people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) says trust is especially important for YMYL topics.
- [Google's snippet guidance](https://developers.google.com/search/docs/appearance/snippet) says snippets primarily come from visible page content and may also use a page-specific meta description.
- [Google's link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) recommends descriptive crawlable internal links that help people and Google understand related pages.
- [Google's personalized-ad policy](https://support.google.com/adspolicy/answer/143465?hl=en) treats health as a sensitive interest and restricts personalized targeting based on it.

### Competitor observations

- Current worry-time competitors commonly lead with an interactive worksheet or timer, an answer-first explanation, reviewer identity, a no-signup promise, and a direct source list.
- Several competitors overstate efficacy or describe the technique as reliably reducing anxiety. Those claims are not a safe model for MindCheck Tools because the randomized online evidence is mixed.
- A source-checked, privacy-explicit explanation is a useful differentiator. This is an inference from the competitor pages and the site's trust standards, not a guarantee of ranking improvement.

## Ranked opportunities

Scores use 1 (weak/low) to 5 (strong/high). Risk is inverse: 1 is lowest YMYL risk.

| Opportunity | Search demand | Trust value | Revenue viability | Effort | YMYL risk | Decision |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| Correct and strengthen the worry-time guide and scheduler cluster | 4 | 5 | 2 | 2 | 2 | Implement now |
| Package the existing professional implementation resources into a paid organizational review offer | Unknown | 5 | 5 | 3 | 1 | Next owner-gated commercial test |
| Improve the existing CBT thought-record cluster | 4 | 4 | 3 | 3 | 2 | Next organic candidate after measuring this release |
| Build more burnout content | 4 | 3 | 2 | 3 | 3 | Defer; current rankings are too distant and claims require careful review |
| Monetize crisis or assessment traffic with display ads | 3 | 1 | 2 | 2 | 5 | Prohibited |
| Turn on broad display ads now | 2 | 1 | 1 | 3 | 4 | Defer; traffic and trust economics do not justify it |

## Implemented on this branch

- Replaced the quarantined worry-time article's unsupported outcome claims so it cannot be accidentally reused later as unsafe health content. It remains non-public under the existing `/blog/*` redirect.
- Strengthened the public scheduler's title, description, H1, visible evidence summary, and plain-language comparison of the positive small trial and null larger online trial.
- Preserved non-diagnostic language, named reviewer credentials, crisis guidance, privacy limits, canonical metadata, Article/FAQ/Breadcrumb structured data, and public-source links.
- Removed all ad-slot call sites from both the educational article and the interactive scheduler, creating defense in depth beyond the global route allowlist.
- Added descriptive crawlable links to the scheduler from the maintained screening hub, CBT thought record, and cognitive-distortion tool; no maintained page links into the quarantined blog.
- Replaced leading reflection prompts and outcome claims with neutral language.

## Measurement plan

- Record this document as the before-state. Do not copy query-level health terms into source control.
- At 28, 56, and 84 days after a production release, compare Search Console page-level clicks, impressions, CTR, and position for `/worry-time-scheduler` and `/blog/worry-time-guide`.
- Use the consented homepage-only `private_tool_launch` event only as an aggregate acquisition signal. Do not add destination, topic, answer, score, or result parameters.
- Treat GA4's current lack of health-route and tool-flow events as a privacy safeguard, not a measurement defect.
- No ranking, traffic, conversion, or revenue outcome is guaranteed.

## Monetization boundary and next owner decision

1. Professional or organizational implementation reviews remain the best first revenue model because they sell expertise and process rather than access to a vulnerable audience.
2. Paid educator or implementation products can follow only after rights review, named clinical/editorial review, crisis QA, privacy QA, and a real demand test. Avoid repackaging copyrighted instrument content.
3. Sponsorships or affiliates require exact owner approval, conflict disclosure, a direct user benefit, and complete separation from assessments, results, crisis content, browser-local entries, and personalized targeting.
4. Display ads remain off. Any future activation requires the publisher account to be approved, a Google-certified CMP, strict CSP validation, non-personalized serving, and a narrowly approved route allowlist that excludes all health-topic, assessment, result, crisis, and local-data pages.

The next genuine owner/account-side decision is whether to publish this tested branch. After publication and a measurement window, the next commercial decision is whether to define a price and checkout path for the professional implementation review offer; outreach, sponsorship, affiliates, and ads remain separately approval-gated.

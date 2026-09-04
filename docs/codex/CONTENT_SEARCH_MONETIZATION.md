# MindCheckTools Content, Search, Attribution, and Monetization Policy

Load this file for public copy, articles, metadata, SEO, AEO, GEO, structured data, links, attribution, recommendations, professional services, referrals, affiliates, or monetization. The root `AGENTS.md` remains controlling. Exact current source, evidence, rights, review, privacy, and owner-approved business records control bounded facts.

## Editorial truth

MindCheckTools is YMYL. Evidence, limits, and user safety outrank content volume, rankings, conversion, and publication speed.

Every indexable health page needs a distinct user purpose. Do not create:

- mass AI health articles;
- thin or duplicate condition and symptom pages;
- programmatic health-content farms;
- fake local pages or testimonials;
- keyword-stuffed or search-only pages;
- scraped or spun content;
- automated backlink, forum, review, or community spam;
- unsupported diagnostic, validation, accuracy, prevalence, treatment, or credential claims;
- fake review dates, approval, customers, demand, or outcomes.

No arbitrary minimum word count. Write the amount needed to answer the user's question, explain limits, and support claims.

Before publishing or materially changing health content, load `CLINICAL_RIGHTS_CRISIS.md`. Before adding tracking, forms, referrals, third parties, or user state, load `PRIVACY_SECURITY_ACCESSIBILITY.md`.

## Page and result content

Important health pages should include where applicable:

- a clear H1 and direct answer;
- purpose and intended audience;
- what the tool measures;
- what it does not establish;
- exact instrument version and population;
- scoring and result limits;
- evidence and primary source;
- instrument rights or information-only status;
- reviewer identity, credential, exact scope, and review date;
- appropriate next step;
- methodology and privacy links;
- crisis support when relevant.

A result page should place:

1. tool name;
2. score;
3. validated range;
4. plain-language meaning;
5. what the result does not mean;
6. safety information when triggered;
7. evidence-based next step;
8. instrument source;
9. evidence and methodology links;
10. privacy reminder;
11. reviewer scope;
12. last review date.

Do not lead results with marketing, affiliates, newsletter capture, or conversion pressure.

Users must readily distinguish a Published Screener, Information Only page, Original Educational Tool, Recovery Tool, and Browser-Local Record.

## SEO

Preserve:

- unique factual titles and descriptions;
- self-referencing canonical URLs;
- correct status codes;
- crawlable HTML;
- useful internal links;
- public canonical routes only in the sitemap;
- exclusion of result, preview, admin, error, sensitive share, and transient crisis-state URLs;
- no health-sensitive data in paths, queries, canonicals, schema, or social metadata.

Visible copy, metadata, structured data, sitemap, redirects, robots rules, `llms.txt`, and live behavior must agree.

Do not alter validated instrument wording for search. Do not remove material limits for a better snippet.

## AEO and GEO

Answer the main question near the beginning.

Make source-supported answers easy to extract for what the tool measures, intended population, scoring, score meaning, diagnostic limits, next steps, privacy, provenance, validation status, and rights status.

Generative Engine Optimization means clear facts, primary sources, transparent reviewer scope, limitations, source dates, stable URLs, useful definitions, and consistent identity. It is not prompt injection or crawler tricks.

Allow OAI-SearchBot on public indexable pages when search visibility is desired. Search-crawler access is separate from model training. Keep `llms.txt` only while accurate and low maintenance. Do not create duplicate full-site prompt files.

Prefer Search Console, Bing Webmaster Tools, and aggregate search data over sensitive route-level tracking.

## Structured data

Mark up only visible supported facts.

Use conservative types such as Organization, WebSite, WebPage, Article or BlogPosting, BreadcrumbList, and Person where appropriate.

Do not invent clinical rich-result types, ratings, reviews, credentials, medical approval, or FAQ content. Structured data must not imply diagnostic or professional authority beyond the visible page and recorded review scope.

## Sources, review dates, and attribution

Material health claims need current approved evidence and the exact applicable population.

Change a review date only after reviewing the represented content, sources, links, rights status, and limitations. Do not refresh a date for appearance.

Reviewer identity must remain accurately scoped. Protect the owner's private address, location, personal accounts, unrelated history, tax, payment, and company-registration details. Publish only deliberately approved professional identity and contact information relevant to the page.

Verify external links and destinations. A configured or historical link does not prove the current destination, disclosure, privacy behavior, or suitability.

## Permanent no-display-ad rule

MindCheckTools does not use display advertising.

Do not add or restore AdSense, programmatic display, behavioral advertising, retargeting, mental-health audiences, condition-based ads, score-based ads, or crisis-based ads.

Keep `docs/no-display-advertising.md` and executable safeguards aligned with runtime behavior. Remove dormant ad code, consent branches, CSP domains, metadata, policy text, and tests only after complete reference and dependency checks pass.

## Referrals, affiliates, and revenue

Never make a paid healthcare recommendation from answers, score, severity, inferred diagnosis, crisis status, condition page, or substance disclosed.

Never pass health state to a referral, affiliate, therapist directory, partner, or email system.

Any compensated healthcare referral needs qualified legal and privacy review before launch. A disclosure does not cure an unsafe data flow or conflict.

Any permitted affiliate link must:

- be useful without the compensation;
- stay separate from scoring and crisis flows;
- receive no sensitive data;
- use an accurate nearby disclosure;
- use appropriate sponsored and nofollow attributes;
- point to a verified destination;
- comply with instrument rights and privacy policy.

Long-term revenue should favor professional resources, bounded readiness review, B2B tools, organization licensing where rights permit, and products that do not depend on selling user distress.

Professional-review work must follow the current exact service brief, operations runbook, readiness record, business ledger, public copy, credential scope, and owner decision. Code or copy does not prove sales, customers, demand, deliverability, legal readiness, or clinical authority.

## AI-assisted content

AI may draft or review internal content only from supplied approved sources and records.

AI output must receive required human review before publication. It must not invent sources, evidence, rights, reviewer scope, dates, quotes, statistics, diagnoses, treatments, or crisis instructions.

Keep source passages full fidelity where exact wording matters. Reduce output through a narrow question and structured response, not through evidence loss.

## Required context and checks

Before editing, search the affected page, source and rights records, reviewer record, metadata, schema, sitemap, redirects, navigation, links, privacy route classification, business record, and focused tests.

Run focused tests while iterating. Before promotion, run every applicable current check plus:

```bash
npm run lint:content
npm run lint:predeploy
npm test
npm run lint
npm run build
```

Manually verify public copy, links, mobile presentation, source support, reviewer scope, disclosures, and search output when automated checks do not prove them.

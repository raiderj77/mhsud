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

## Parallel acquisition workstream: cognitive-distortion tool

The worry-time measurement dates are checkpoints, not a freeze on other acquisition work. A separate before-state identifies `/cognitive-distortion-identifier` as the next qualified existing-page opportunity: 17 clicks, 580 impressions, 2.9% CTR, and average position 15.7 in the same three-month Search Console window. These are page-level aggregates; query strings and health data are not stored here.

### Verified before-state

- The route was already indexable, canonical, in the sitemap, and linked from the screening hub, CBT thought record, worry-time scheduler, global navigation, and other maintained tools.
- The page offered a browser-local, self-guided pattern-selection and reframing exercise with no automated score.
- It made unsupported claims about typical distortion counts, practice frequency, clinical outcomes, and specific disorder-pattern relationships.
- It rendered three ad-slot call sites around the thought-entry journey, despite the site's current global ad restrictions.
- The privacy boundary appeared after the exercise rather than before the free-text field.

### Evidence and competitive interpretation

- The Beck Institute describes CBT as a structured psychotherapy in which trained therapists help clients identify distressing thoughts and evaluate how realistic they are.
- NHS Every Mind Matters describes a thought record as a common CBT exercise using a situation, thoughts and feelings, evidence, and a more realistic or neutral alternative.
- Current competing pages commonly lead with a test, AI analysis, automatic classification, or account-based journaling. A transparent no-AI, no-score, browser-local exercise is a meaningful product distinction. This is an inference from current competitor pages, not a ranking guarantee.

### Implemented locally

- Aligned the title, H1, visible quick answer, description, and structured data around the actual `cognitive distortion identifier` and guided reframing task.
- Added a just-in-time privacy notice before the free-text field, encouraged fictional or de-identified examples, and disabled autocomplete on the field.
- Moved the descriptive H1 and named reviewer credentials ahead of the entry journey and connected the privacy guidance to the text field's accessible description.
- Removed unsupported efficacy, frequency, quantity, and disorder-association claims from visible copy, FAQs, and shared reflection content.
- Clarified that the tool is not a questionnaire, validated assessment, automated analysis, score, diagnosis, treatment, or substitute for therapy.
- Replaced a medical catastrophizing example with a non-medical fictional example.
- Removed all page-level ad-slot call sites and replaced result-oriented clinician copy with neutral discussion guidance.
- Updated primary-source links and the screening-hub description while preserving named reviewer credentials, crisis guidance, non-diagnostic language, and browser-local privacy limits.

### Independent measurement

If released, compare this page's clicks, impressions, CTR, and average position at 28, 56, and 84 days. Continue separate, non-overlapping acquisition work during that period; avoid repeated edits to this route unless safety, accuracy, or technical evidence requires them. No health-route analytics, answers, selected labels, free text, or result-like state should be added to measurement.

## Parallel acquisition workstream: homepage brand search fit

The cognitive-distortion measurement dates are checkpoints, not a freeze on other acquisition work. A fresh Search Console read on August 9, 2026 identifies the homepage as the next safe existing-route opportunity after excluding the just-released routes, the crisis-adjacent route, the quarantined blog, and the already strong mental-load page.

### Verified before-state

- Search Console, three months ending August 7: 102 clicks, 3,263 impressions, 3.1% CTR, and average position 16.7 for the homepage.
- The tractable homepage visibility is concentrated in the site's own name variants, which average around positions 4 to 5 but have low-single-digit CTR. Broad generic mental-health terms remain far from page one.
- The current public search result still reflects older homepage copy. Google's crawl lag means that result is not proof of the currently deployed page or of how a future result will be rendered.
- The page is indexable, canonical, present in the sitemap, linked throughout the maintained site, and limited to aggregate, consented, topic-neutral acquisition measurement.
- The deployed homepage H1 described the category but did not contain the exact public site name. `WebSite` structured data used a generic alternate name rather than the concise brand form already visible in the navigation.

No Search Console query strings, analytics identifiers, health answers, scores, or browser-local entries are recorded in this file.

### Evidence-backed interpretation

- [Google's site-name guidance](https://developers.google.com/search/docs/appearance/site-names) recommends a unique, concise name used consistently on the homepage and allows a commonly recognized alternative through `alternateName`; it warns against generic site names.
- [Google's title-link guidance](https://developers.google.com/search/docs/appearance/title-link) recommends concise, descriptive, non-repetitive titles that match the page's visible main title.
- [Google's snippet guidance](https://developers.google.com/search/docs/appearance/snippet) says snippets primarily come from page content and may use a page-specific meta description when it describes the page accurately.
- The name-variant CTR gap is a qualified opportunity, but title links, snippets, crawling, positions, and CTR remain controlled by Google and user intent. Improvement is not guaranteed.

### Implemented locally

- Aligned the homepage title, H1, visible answer-first summary, and structured data around the exact `MindCheck Tools` identity and concise `MindCheck` alternative.
- Replaced the generic structured-data alternate name with the non-generic brand form already used in site navigation.
- Added a visible answer to “What is MindCheck Tools?” that distinguishes published screeners, original educational tools, and worksheets while preserving non-diagnostic and browser-local privacy boundaries.
- Made the named reviewer and credential visible near the main heading and linked to the public reviewer profile.
- Added descriptive crawlable links to the maintained tool index, methodology, clinical evidence, and separately labeled professional implementation resources.
- Replaced undefined homepage typography utilities so the H1 and major section headings render with an accessible responsive hierarchy instead of body-size text.
- Preserved the homepage-only optional-services allowlist, consent requirement, crisis guidance, public credentials, no-signup model, and prohibition on sending answers or scores to analytics or advertising systems. Advertising remains disabled.

### Independent measurement

If released, compare homepage clicks, impressions, CTR, average position, and the aggregate privacy-safe tool-launch count at 28, 56, and 84 days. Continue other non-overlapping acquisition work in parallel, and avoid repeated homepage title or identity edits during the window unless safety, accuracy, or technical evidence requires them.

## Parallel acquisition workstream: trigger-identification worksheet

The homepage measurement dates are checkpoints, not a freeze on other acquisition work. The next distinct, non-crisis route in the same fresh Search Console page report is `/trigger-identification-worksheet`.

### Verified before-state

- Search Console, three months ending August 7: 16 clicks, 433 impressions, 3.7% CTR, and average position 20.8 for the canonical page.
- This is page-level aggregate evidence. The signed-in query view was not available for a reliable fresh export during implementation, so exact query intent is unknown and no query strings are recorded here.
- The route was indexable, canonical, listed on the homepage and screening-tools index, and present in the sitemap.
- The page rendered two ad-slot call sites within a substance-use reflection journey, even though the global route policy currently blocks ad delivery there.
- It described an algorithmically paired response idea as a personalized trigger profile and included unsupported claims about trigger categories, relapse outcomes, brain mechanisms, and required review frequency.
- Custom free text appeared without a just-in-time warning to avoid names or other identifying details. Printing had no sensitive-content confirmation.

### Evidence and interpretation

- [NIAAA's alcohol-craving worksheet](https://rethinkingdrinking.niaaa.nih.gov/tools/worksheets-more/how-stop-alcohol-cravings) distinguishes external cues such as people, places, things, and times from internal cues such as thoughts, emotions, and physical sensations. It presents recognize, avoid, and cope ideas as self-help support, not individualized care.
- [NIAAA's planning worksheet](https://rethinkingdrinking.niaaa.nih.gov/tools/worksheets-more/handling-urges-drink/plan-your-strategies) warns that recalling urge experiences can itself bring up an urge and advises using the activity with a therapist, doctor, or trusted person when someone is unsure about doing it alone.
- [SAMHSA TIP 35](https://store.samhsa.gov/sites/default/files/SAMHSA_Digital_Download/PEP20-02-01_004.pdf) discusses triggers and coping strategies in the context of counseling. It does not validate the site's six categories as a relapse-risk scale.
- The route name and page-level visibility support preserving the exact canonical URL while aligning the title and H1 to the worksheet's actual substance-use context. Because the fresh query mix is unknown, this is a relevance and trust improvement, not a claim about a specific query or ranking outcome.

### Implemented locally

- Removed both page-level ad-slot call sites, preserving the no-commercial-pressure boundary for a substance-use entry and summary journey.
- Aligned the title, H1, description, visible quick answer, structured data, homepage card, and screening-tools link around an educational addiction trigger-identification worksheet.
- Moved the descriptive H1, answer-first explanation, update date, and named public reviewer credentials ahead of the interactive journey.
- Reframed the generated surface as an organizational worksheet summary rather than a personalized profile, and stated that counts are not scores, severity levels, clinical results, or relapse-risk estimates.
- Added a just-in-time warning before custom entry, encouraged fictional or de-identified wording, disabled autocomplete and spellcheck, and connected the input to the warning for assistive technology.
- Added keyboard focus to the generated summary, 44-pixel controls, a confirmation before printing sensitive entries, and static-link-only sharing that excludes selections.
- Replaced unsupported efficacy and brain-mechanism claims with cautious official-source explanations and neutral general planning ideas.
- Made SAMHSA, 988, Crisis Text Line, 911, and the full crisis-resources route directly actionable while preserving non-diagnostic and professional-support language.

### Independent measurement

If released, compare this page's clicks, impressions, CTR, and average position at 28, 56, and 84 days. Do not add route, answer, selected-cue, custom-entry, summary, crisis-click, or other health-related parameters to analytics or advertising systems. Continue separate non-overlapping acquisition work during the measurement window; no ranking, traffic, conversion, or revenue outcome is guaranteed.

## Parallel acquisition workstream: CBT thought-record worksheet

The trigger-worksheet measurement dates are checkpoints, not a freeze on other acquisition work. A fresh signed-in Search Console read on August 9, 2026 identifies `/cbt-thought-record` as the next distinct non-crisis route with existing visibility and a material trust repair opportunity.

### Verified before-state

- Search Console, three months ending August 7: 9 clicks, 1,204 impressions, 0.7% CTR, and average position 34.8 for the canonical page.
- Exact thought-record and thought-diary intent accounted for visible impressions but generally ranked well beyond page one. Smaller source- and method-oriented intent appeared closer to page one. This supports a relevance and trust repair; it does not guarantee a ranking or CTR gain.
- The route was indexable, canonical, present in the sitemap, globally linked, and already connected from the maintained screening hub, CBT guide, worry-time scheduler, and cognitive-distortion tool.
- The interactive journey rendered three ad-slot call sites around sensitive free-text entry and its summary, although global site policy currently blocks ad delivery there.
- Completing the worksheet automatically wrote the entry to local storage. The visible page described saving as optional, so the behavior did not match the privacy promise.
- Free-text fields had no just-in-time instruction to remove identifying details, autocomplete was not disabled, and printing exposed the entry without a sensitive-content confirmation.
- The page made unsupported claims about effectiveness, expected emotion changes, required practice frequency, study outcomes, and named contributors without directly supporting those claims or clearly separating this independent implementation from published worksheets.

No Search Console query strings, analytics identifiers, health answers, scores, or browser-local entries are recorded in this file. Values presented by a browser SEO extension were excluded from the evidence set.

### Evidence-backed interpretation

- [NHS Every Mind Matters](https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/thought-record/) describes a thought record as a common CBT exercise and presents seven prompts covering a situation, feelings, thoughts, supporting and contrary evidence, an alternative thought, and feelings afterward.
- [NHS guidance on CBT](https://www.nhs.uk/tests-and-treatments/cognitive-behavioural-therapy-cbt/) describes CBT as a talking therapy and notes that people may be asked to practise skills using a worksheet or diary between sessions.
- [Beck Institute's professional resources](https://beckinstitute.org/cbt-resources/resources-for-professionals-and-students/cbtresources/) provides official thought-record materials for clinicians and students. The site's route should explain the general technique without representing itself as an official Beck Institute worksheet or reproducing copyrighted item wording.
- The existing exact-intent impressions make title, H1, answer-first copy, and source alignment a qualified opportunity. Search demand, future crawling, rankings, snippets, and CTR remain outside the site's control.

### Implemented locally

- Aligned the title, H1, description, answer block, FAQs, and structured data around a free seven-step CBT thought-record worksheet while preserving the canonical URL.
- Clearly labeled the page as an independent educational implementation, not an official Beck Institute worksheet, clinical assessment, diagnosis, treatment, or automated analysis.
- Removed all three route-level ad-slot call sites from the entry, summary, and educational journey.
- Changed browser persistence from automatic to explicit opt-in, off by default, and made the summary state accurately disclose whether the visitor chose to save.
- Added a just-in-time privacy notice before the first free-text field, encouraged fictional or de-identified wording, disabled autocomplete and spellcheck, and connected every free-text field to the notice for assistive technology.
- Replaced direct printing with the sensitive-content confirmation helper and moved keyboard focus to the generated worksheet summary.
- Removed unsupported efficacy, expected-change, study-outcome, contributor, and required-frequency claims from visible copy, FAQs, and shared reflection prompts.
- Added direct official-source links, actionable 988 and emergency links, the full crisis-resources route, and neutral professional-support language.
- Preserved the named public reviewer and credentials ahead of the interactive journey. No health-route measurement or sharing payload was added.

### Independent measurement

If released, compare page-level clicks, impressions, CTR, and average position at 28, 56, and 84 days. Continue separate non-overlapping acquisition work during that period. Do not add route, free-text, emotion, evidence, rating, summary, save state, crisis action, or other health-related parameters to analytics or advertising systems. No ranking, traffic, conversion, or revenue outcome is guaranteed.

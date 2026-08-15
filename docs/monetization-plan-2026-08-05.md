# MindCheckTools Monetization Plan

**Status:** Production-aligned release-control artifact, researched 2026-08-05 and verified 2026-08-06

**Scope:** Strict-YMYL monetization and privacy controls for `mindchecktools.com`

**External action:** None. No provider application, permission request, purchase, outreach, account change, deployment, or publication is authorized by this document.

## Verdict

**Do not place advertising or third-party measurement code on an assessment, result, crisis, youth, condition-specific, or rights-boundary informational route. AdSense activation remains blocked.** The best first monetization hypothesis is a fixed-scope professional implementation-readiness review that receives no patient data and turns repeated findings into buyer evidence. Original paid educational products should follow only when interviews identify a gap not already covered by free authoritative toolkits. Professional self-hosted licensing is the best higher-upside product path after demand, rights, clinical, privacy, security, and contract gates pass. Static first-party sponsorship and narrow affiliate use remain secondary. AdSense should be last and limited to contextual or non-personalized ads on an owner-approved general-page allowlist.

This is a deliberately stricter MindCheckTools policy than the minimum described by an advertising platform. It keeps assessment activity and health inferences away from advertising systems, minimizes trust damage, and reduces exposure under health-data privacy rules.

## Evidence status

- **Verified evidence:** Google classifies physical and mental-health content as a sensitive interest category. Google Publisher Policies prohibit using Google code or audience data for personalized advertising based on inferred or actual health information. Google also states that partner integrations send information including the viewed URL and IP address. Non-personalized ads may still use cookies or mobile identifiers for fraud prevention, frequency capping, and aggregate reporting. Google Analytics policies prohibit sending data that reveals sensitive information about an identifiable user.
- **Verified production implementation:** optional third-party services use a positive allowlist containing only `/`, the topic-neutral homepage. All assessment, result, crisis, youth, condition-specific, privacy, reviewer, and rights-boundary informational routes are tag-free by default. The only explicit tool-acquisition event in source is the consented homepage-only `private_tool_launch`, which passes no instrument, route, category, answer, score, result, referrer, session, user, or device parameter. Production serializes `adsenseEnabled:false`.
- **Conservative MindCheckTools policy:** turning personalization off, obtaining consent, hiding an ad, or omitting custom event parameters does not make an ad or analytics tag acceptable on a sensitive route. Expanding optional services beyond the homepage requires a new route-specific rights, clinical, privacy, crisis, and network review plus owner approval.
- **Inference requiring legal review:** A condition-specific route, assessment start, result label, or crisis interaction may constitute or enable an inference about health. Third-party disclosure could implicate consumer-health-data or general privacy law even where HIPAA does not apply.
- **Unknowns:** downstream provider-added parameters, current AdSense account eligibility, provider configuration, consent-platform state, legal applicability by jurisdiction, sponsor or affiliate availability, commercial demand, conversion, revenue, tax treatment, and the price or terms of any instrument licence. None may be inferred from this plan.

## Authoritative policy evidence

1. [Google: Health in personalized advertising](https://support.google.com/adspolicy/answer/16701855?hl=en) identifies physical and mental-health conditions as sensitive interests.
2. [Google Publisher Policies: Personalized advertising](https://support.google.com/publisherpolicies/answer/15101728?hl=en) prohibits selecting or targeting personalized ads, or collecting/using audience data, based on inferred or actual health information.
3. [Google: How information from partner sites is used](https://policies.google.com/technologies/partner-sites?hl=en) says an integrated browser automatically sends information including the page URL and IP address; disabling personalization does not stop all measurement and fraud-prevention uses.
4. [Google: Publisher integration with the IAB Europe TCF](https://support.google.com/adsense/answer/9804260?hl=en) states that non-personalized ads still use cookies or mobile identifiers for fraud prevention, frequency capping, and aggregated reporting; limited ads may serve when storage consent is unavailable.
5. [Google: Certified CMP requirements](https://support.google.com/adsense/answer/13554020?hl=en-GB) requires an eligible Google-certified CMP integrated with the IAB TCF for applicable EEA, UK, and Swiss ad serving.
6. [Google Analytics: HIPAA and Google Analytics](https://support.google.com/analytics/answer/13297105?hl=en) says Analytics data may not reveal sensitive information about or identify a user.
7. [FTC: Health Breach Notification Rule guidance](https://www.ftc.gov/business-guidance/resources/complying-ftcs-health-breach-notification-rule-0) explains that certain non-HIPAA health technologies can have breach-notification duties, including for unauthorized disclosures of identifiable health information.
8. [Washington RCW 19.373.030](https://app.leg.wa.gov/RCW/default.aspx?cite=19.373.030) restricts collection and sharing of consumer health data without specified consent or necessity. Applicability to MindCheckTools requires counsel.
9. [FTC: Endorsement guidance](https://consumer.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking) requires clear and conspicuous disclosure of affiliate and other material relationships.
10. [FTC: Health Products Compliance Guidance](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance) requires truthful, non-misleading health claims supported by appropriate scientific evidence.

## Strict tag-free boundary

The production implementation uses an explicit optional-services **allowlist**, not a sensitive-page denylist. It currently contains only the homepage. Anything else is tag-free by default; future expansion is a release-gated owner decision.

### Always tag-free

- Every assessment landing page, questionnaire, answer state, progress state, score, result, interpretation, retake, comparison, and share surface.
- Every route, title, or page whose instrument or condition name can disclose or imply a visitor's health interest.
- Every crisis, suicide, self-harm, emergency, safety-plan, urgent-help, or `988` surface, including any global crisis component rendered within another page.
- Every youth or adolescent assessment and all content directed to or likely to be used by minors.
- Privacy, consent, clinical-review, correction, complaint, and data-rights pages.
- Any page that reproduces a non-commercial, ad-free, permission-limited, or rights-unresolved instrument.

### Prohibited data and behavior

- No answer, selected option, free text, score, subscore, threshold, result label, positive/negative status, interpretation, instrument name, sensitive route/path/title/referrer, crisis-link click, or retake behavior may reach an ad, affiliate, sponsor, conversion, analytics, session-replay, or audience system.
- No advertising cookie, device identifier, User ID, fingerprint, enhanced conversion, audience, remarketing, lookalike, cross-device, or profile-building feature may be created from assessment-related activity.
- Do not load third-party code and then hide its output. The network request itself must not occur.
- Do not encode instrument, condition, score, result, or source route in query strings, UTMs, affiliate sub-IDs, order metadata, email subject lines, logs, or support tickets.
- Crisis links must have no click tracking or affiliate parameters.

### Technical controls

1. Maintain one central sensitive-route registry and one small general-page monetization allowlist.
2. Render third-party tags only after a route is positively allowlisted and applicable consent is established.
3. Use `Referrer-Policy: no-referrer` on sensitive pages and `rel="noopener noreferrer"` on external crisis links.
4. Strip query strings and sensitive paths from application, CDN, error, and observability logs; minimize IP and user-agent retention.
5. Use path-specific Content Security Policy or equivalent edge controls to block ad and analytics domains on sensitive routes.
6. Add CI and browser-network tests that fail when a sensitive route requests an unapproved third-party domain or renders a monetization element.
7. Re-run mobile and desktop crisis, privacy, accessibility, and assessment-safety QA before every monetization release.

## Privacy-safe aggregate measurement

**Current production state:** the only explicit tool-acquisition event is the parameter-free `private_tool_launch` on the consented homepage. It measures a generic launch from the topic-neutral homepage, not which assessment was chosen and not whether an assessment started or completed. Consented homepage analytics may still perform provider-standard page measurement; downstream provider-added parameters remain unknown. Assessment and informational destination routes remain tag-free. Exact Search Console and GA before-state metrics are retained only in the ignored local owner record and are intentionally absent here.

The designs below define what may be considered in a future approved implementation. They do not claim that first-party tool-start or completion counters currently exist.

### Allowed future aggregate designs

- Daily aggregate counts such as total general educational-page visits, total tool starts, total completions, and technical success/failure.
- AdSense reporting only for explicitly allowlisted general pages.
- Aggregate sponsor impressions and outbound clicks using a generic sponsor ID.
- Affiliate-network aggregate clicks, orders, and commission totals that cannot be joined to assessment activity.
- B2B subscription, organization, uptime, and aggregate request-volume metrics with no patient or payload data.
- Paid-product SKU, gross sales, refund, and support-volume metrics using generic product names.

### Required aggregation design for any future counters

- Tool-start and completion counters are first-party, cookieless, and unlinked. They carry no route, instrument, condition, answer, score, result, referrer, session, user, device, or persistent identifier.
- Store daily counters rather than raw event rows where technically feasible.
- Keep marketing-page acquisition counts separate from tool activity. Do not build person-level or session-level conversion attribution across that boundary.
- Never send assessment events to GA4 or an advertising conversion system.

## Channel matrix

| Channel | Recommended use | Mandatory controls | Launch gate | Exact owner/account-side approval |
|---|---|---|---|---|
| **Professional readiness review** | Recommended first revenue test: a fixed-scope technical and content QA review using public or fictional staging evidence only. | No patient data, answers, scores, diagnoses, or production health records; explicit limits on legal, clinical, security, accessibility, and licensing conclusions; qualified escalation where needed. | One buyer segment, one sample deliverable, scope-appropriate legal and clinical review, terms, insurance decision, and demand validation. | Approve segment, scope, public claims, price, terms, reviewers/spend, publication, outreach, contracts, payment, and each customer engagement. |
| **AdSense** | Last-priority pilot. Manual contextual or non-personalized units on a small allowlist of genuinely general educational pages only. | Auto Ads off; user-based/personalized ads off; no GA audience linkage or remarketing; certified CMP/TCF where applicable; privacy/cookie disclosures; no code on sensitive routes. | Instrument-rights boundary complete; counsel review; consent QA; `ads.txt`; Policy Center review; mobile/desktop network proof that excluded routes load no ad code. | Approve use/addition of the site in AdSense, account terms, personalization settings, CMP configuration, privacy copy, `ads.txt`, payment/tax profile, and each placement. |
| **Direct sponsorship** | Preferred first advertising-style pilot: a static, first-party sponsor card on a general resource page. | No sponsor script, pixel, iframe, cookie, result targeting, route targeting, or visitor-data access. Label `Advertisement` or `Paid sponsor`; preserve editorial independence; substantiate all health claims. | Exact sponsor/product due diligence, clinical and claims review, written no-data contract, disclosure/accessibility QA, and placement allowlist. | Approve the exact sponsor, product, copy, claim, rate, placement, contract, data terms, and any outreach before contact. |
| **Ethical affiliate** | Narrow use in non-sensitive resource guides; never a result-driven recommendation. | Plain link only; `rel="sponsored nofollow noopener noreferrer"`; no network JavaScript/pixel; generic campaign ID; visible commission disclosure beside the link. Exclude supplements, cures, crisis products, predatory services, and unsubstantiated treatment claims. | Merchant/product evidence review, FTC disclosure QA, privacy/network QA, editorial review, and aggregate-only reporting. | Approve each merchant/program, application, agreement, product, claim, disclosure, payment/tax setup, and external enrollment. |
| **Professional licensing/API** | Best longer-term fit. Prefer a self-hosted or customer-controlled deployment before a centralized hosted API. License MindCheckTools' original workflow and QA, not instruments it does not own. | Commercial/API rights for every included instrument; no payload logging; encryption; tenant isolation; RBAC; retention/deletion; audit and incident controls; no ad technology; customers obtain their own licences where required. | Exact scoring and clinical review; security review and penetration testing; DPA; HIPAA/BAA, HBNR, and state-law role analysis; support/SLA design; contract review. | Decide target buyer, self-hosted versus hosted model, pricing, support, security/legal budget, instrument scope, payment account, and authorize each rights request, DPA, BAA, licence, or customer contract. |
| **Paid printable/educational products** | Safest direct-sale pilot: original clinician/educator implementation checklists, screening-versus-diagnosis explainers, citation guides, or accessibility packs. | Keep instruments and crisis resources free. Do not reproduce copyrighted items or sell repackaged government publications. Use citations, named review, revision date, non-diagnostic copy, generic checkout SKU, and no health-based customer segmentation. | Originality and rights audit; primary-source citations; clinical, crisis, privacy, accessibility, and checkout QA; refund/tax terms. | Approve each product, audience, price, reviewer, rights status, checkout/payment/tax account, refund policy, and publication. |

## Crisis and assessment exclusions

These are non-negotiable release gates:

- No ad, sponsor, affiliate, donation, upsell, checkout, lead-generation, or conversion element on or adjacent to crisis content.
- No monetization in the assessment flow, between questions, before submitting, on results, or beside next-step guidance.
- No product or service recommendation based on an answer, score, band, result, or inferred condition.
- No commercial CTA may visually compete with crisis resources, professional-care guidance, privacy disclosures, or the non-diagnostic statement.
- No monetization experiment may alter assessment order, scoring, crisis escalation, accessibility, or clinical copy.

## Universal launch gates

All must pass before any monetization release:

1. **Rights:** every monetized page and included instrument has current authoritative commercial-use evidence; restricted or unresolved instruments remain public but ad-free.
2. **Clinical:** exact items, scoring, thresholds, result branches, next steps, non-diagnostic language, and crisis copy have named, scope-appropriate review and one canonical date.
3. **Privacy:** approved data-flow map, vendor inventory, retention schedule, consent design, consumer-health-data policy decision, and browser-network proof of the tag-free boundary.
4. **Security:** CSP/headers, dependency review, secrets handling, logging minimization, incident response, and proportionate penetration testing.
5. **Advertising integrity:** claims evidence, FTC disclosures, sponsor/affiliate separation, ad accessibility, and no deceptive native placement.
6. **Operational:** support, correction, takedown, rights-renewal, vendor-review, and breach/escalation procedures have named owners.
7. **Release:** local build/tests and mobile/desktop QA pass, then the existing explicit approval gate is obtained before deployment or publication.

## Exact owner and account-side decisions remaining

1. **Selected locally, not launched:** use digital-health and behavioral-health software teams as the first segment for the bounded professional readiness review. Approve or reject publishing the implemented page and free checklist only after scope-appropriate review.
2. Authorize legal review of FTC HBNR, Washington MHMDA, CCPA and other state laws, GDPR/UK GDPR, youth/COPPA scope, and HIPAA/BAA applicability.
3. Decide whether the homepage-only optional-services boundary should remain permanent. Any proposed additional general page must be named and separately cleared before code changes; no assessment, informational instrument, condition, youth, crisis, privacy, or reviewer route is eligible.
4. If the preceding legal, rights, clinical, privacy, and network gates ever pass, separately approve AdSense site/account activity, CMP, ad settings, privacy copy, `ads.txt`, payment, tax configuration, and each exact placement. AdSense is currently blocked.
5. Approve each sponsor, affiliate, instrument-licence counterparty, paid product, contract, fee, application, and external contact separately.
6. Decide whether professional licensing is self-hosted/customer-controlled or a hosted API, and approve the associated security and legal budget.
7. Name qualified clinical, crisis, privacy, and legal reviewers and approve their scope and fees.
8. The bounded non-monetized safety release is now deployed and production-verified with 21 interactive plus 14 informational routes, homepage-only optional services, and disabled AdSense. Monetization activation remains a later, separate decision; this document grants neither approval.

Current affiliate candidates and the privacy-safe measurement boundary are maintained in [Privacy-safe measurement and affiliate readiness](./privacy-safe-measurement-and-affiliate-readiness-2026-08-14.md). That matrix does not authorize an application, account change, merchant contact, affiliate link, or release.

## Local monetization implementation, not published

- `/for-professionals` defines a fixed-scope technical and content-readiness review for digital-health and behavioral-health software teams.
- `/for-professionals/screening-implementation-checklist` provides an original, printable resource covering rights, evidence, privacy, crisis safeguards, accessibility, discovery, and fictional release QA with official FTC, Google, W3C, NIST, 988, and SAMHSA links.
- Both pages prohibit patient records, assessment answers, scores, diagnoses, and other health information. Neither loads ad, affiliate, email-capture, analytics-event, or session-replay components.
- Internal discovery is limited to the general About, Contact, and Methodology pages plus the sitemap. No professional or commercial CTA was added to the global footer, assessment routes, results, crisis pages, or rights-boundary informational routes.
- `/.well-known/security.txt` now has a local canonical, dated, HTTPS contact-path implementation. It is not production evidence until an approved release is deployed and rechecked.

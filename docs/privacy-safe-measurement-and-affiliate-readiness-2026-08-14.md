# Privacy-safe measurement and affiliate readiness

Date: 2026-08-14

Status: The Bookshop.org application was owner-approved and submitted on 2026-08-16. Bookshop.org confirmed acceptance on 2026-08-17. No affiliate link, public book list, analytics-account change, publication, deployment, or monetization activation is authorized by this document.

## Measurement boundary

MindCheckTools intentionally does not use Google Analytics as a whole-site visitor counter. Optional Google services are limited to the topic-neutral homepage, require an affirmative choice, and remain disabled when Global Privacy Control is active. Assessment, result, crisis, condition-specific, youth, privacy, reviewer, and rights-limited routes stay tag-free.

Use each source only for the question it can safely answer:

| Question | Source | Safe interpretation |
|---|---|---|
| Is Google Search sending traffic? | Google Search Console | Organic clicks, impressions, CTR, average position, query, and canonical landing page. A click is not a unique visitor. |
| How many people opted into homepage analytics? | GA4 | Consented homepage-only active users and page views. This is not total-site traffic. |
| Did a consented homepage visitor launch any private tool? | GA4 `private_tool_launch` | One parameter-free aggregate event. It does not identify the tool, health topic, route, answer, score, result, user, or device. |
| Did a visitor start or finish an assessment? | Not currently measured | Do not infer this from GA4. A future counter must be first-party, daily aggregate, cookieless, unlinked, and separately approved. |

### Local reliability fix

Homepage tool cards now carry a local marker instead of relying on a later React click handler. The privacy lifecycle queues the consented, generic `private_tool_launch` event with beacon transport before forcing the clean document navigation that keeps the destination tag-free. No destination or health context is added.

### Account-side gate after an approved release

The owner may separately approve marking `private_tool_launch` as a GA4 key event and verifying it with a fictional homepage click. Do not submit an assessment or inspect a result during that check. This account change is not performed by this branch.

## Affiliate candidate matrix

The candidates below have current official public program evidence. They are candidates, not endorsements. Every exact product or course still needs an editorial, claims, rights, privacy, accessibility, and placement review before a link is published.

| Rank | Candidate | Verified program evidence | Best fit | Main risks and controls | Owner/account action |
|---:|---|---|---|---|---|
| 1 | Bookshop.org | [Bookshop's official affiliate page](https://bookshop.org/affiliates/profile/introduction) advertises a 10% commission and a verification process for authors, publishers, media outlets, bloggers, influencers, and other non-bookstore affiliates. | A carefully reviewed reading list for clinicians, educators, libraries, and the public on a new, non-sensitive editorial resource page. | Recommend books for standalone educational value, never from an assessment result. Use plain links, not embedded widgets. Verify every title and edition. | Approve account creation, tax/payment setup, storefront name, exact titles, disclosure, and publication. |
| 2 | PESI Global Partners | [PESI's official partner page](https://landinghub.pesi.com/affiliatesignup) advertises free enrollment and 20–50% commissions for mental-health professional education. | Professional-only implementation, ethics, accessibility, and continuing-education resources. | Higher revenue potential but higher endorsement risk. Review each course, instructor, accreditation statement, price claim, audience, and jurisdiction. Do not promote courses in consumer assessment, result, or crisis journeys. | Approve the application, professional profile, payment/tax setup, each course, copy, disclosure, and professional-page placement. |
| 3 | Therapy Trainings | [The official affiliate page](https://www.therapytrainings.com/pages/affiliate-program) advertises 20–30% recurring commissions, monthly PayPal payment, and no purchase requirement. Its [official program page](https://www.therapytrainings.com/pages/unlimited-page) lists NBCC, ASWB ACE, and NAADAC approvals. | A professional-only CE comparison or resource guide after credential and course acceptance are independently checked. | Accreditation and license acceptance vary by course, profession, state, board, and renewal cycle. Never state that a course will satisfy a reader's requirements without direct verification. | Approve the account, PayPal/payment setup, application representations, each course, disclosure, and placement. |
| 4 | Amazon Associates | [Amazon's official program page](https://affiliate-program.amazon.com/) accepts qualifying publishers and content creators. Its [current commission statement](https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ) lists 4.5% for physical books. | A fallback for evidence-based books unavailable through Bookshop.org, or other professionally reviewed reference materials. | Lower rate, broad marketplace, short attribution window, and a stricter program-policy burden. Avoid health products, supplements, diagnostic devices, and personalized recommendations. The current MindCheckTools account/site status is unknown. | Check whether an existing Associates account is active, add the site if permitted, create a site-specific tracking ID, approve exact products and required Amazon disclosure. |

## Required implementation controls

- Affiliate links may appear only on an owner-approved, non-sensitive editorial or professional resource page.
- Use plain outbound links with `rel="sponsored nofollow noopener noreferrer"` and `referrerPolicy="no-referrer"`. Do not embed merchant JavaScript, widgets, pixels, iframes, or retargeting code.
- Place a clear commission disclosure beside the first affiliate link and before the user clicks. Preserve editorial independence and identify the selection method.
- Do not include a tool, condition, score, result, crisis action, or source route in an affiliate URL, sub-ID, campaign parameter, merchant report, or checkout metadata.
- Do not recommend a product because of an assessment answer, score, or inferred condition.
- No affiliate element may appear on an assessment, result, crisis, safety-plan, youth, privacy, consumer-health-data, reviewer, or rights-boundary page.
- Keep crisis resources, assessment access, citations, and core educational material free and visually separate from commercial content.

## Programs not recommended

- Online-therapy lead-generation programs: high trust and health-inference risk, difficult data-flow review, and an incentive to steer vulnerable visitors.
- Supplements, detoxes, cures, diagnostic devices, or products making treatment claims.
- Guest-post networks, paid backlinks, directories that sell placement, link exchanges, and affiliate programs requiring a tracking pixel on MindCheckTools.
- Any merchant that cannot provide current terms, disclosure requirements, privacy information, and a legitimate application route.

## Current gate

Bookshop.org is the approved first program. Bookshop.org emailed `affiliate@mindchecktools.com` on 2026-08-17 confirming that the MindCheck Tools affiliate store was accepted (affiliate ID `127434`). Do not publish affiliate links or a public book list until the exact titles pass the editorial review in `bookshop-post-approval-package-2026-08-16.md`, signed-out attribution is verified, and the ordinary release gate is explicitly approved.

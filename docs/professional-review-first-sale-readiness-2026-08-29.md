# Privacy and Screening Readiness Review: First-Sale Decision Record

**Evidence checked:** 2026-08-29

**Status:** YELLOW — the $495 offer, public scope, sample, and internal delivery workflow are ready. MindCheckTools should not accept payment or start customer work until the owner chooses the correctly titled business payment account and approves customer terms, cancellation/refund rules, insurance position, tax handling, and secure delivery.

This record is operational research, not legal, tax, accounting, insurance, or payment-provider advice.

## Executive decision

Do not build website checkout, subscriptions, a customer portal, or a new database for the first sale. The service requires written qualification and scope confirmation before payment, and initial capacity should be one review at a time.

Recommended sequence:

1. Qualify the buyer using public or fictional, non-sensitive information only.
2. Confirm the written scope and customer terms.
3. Send a one-time hosted invoice from the correctly titled business account.
4. Let the customer enter payment details directly on the provider's hosted page; MindCheckTools must never receive card or bank details by email.
5. Deliver through a customer-controlled business folder or portal when available.
6. Record only business-level sales and delivery metrics in the privacy-safe ledger.

## Payment and invoicing evidence

Current official pricing checked on 2026-08-29:

| Option | Official published price relevant to a $495 domestic sale | Estimated fee on $495 | Estimated amount after fee | Decision |
| --- | --- | ---: | ---: | --- |
| [Stripe hosted invoice](https://support.stripe.com/questions/stripe-invoicing-pricing) | Invoicing Starter 0.4% per paid invoice, plus [standard U.S. domestic-card processing of 2.9% + $0.30](https://stripe.com/pricing) | $16.64 | $478.36 | **Preferred if an appropriately titled, separate business account is already available** |
| [PayPal invoice paid by card or Apple Pay](https://www.paypal.com/us/business/fees) | 2.99% + $0.49 | $15.29 | $479.71 | **Acceptable alternative** |
| PayPal invoice paid with PayPal or Venmo | 3.49% + $0.49 | $17.77 | $477.23 | Acceptable, but more expensive |
| [Square invoice paid by ACH](https://squareup.com/us/en/invoices/pricing) | 1%, $1 minimum; cap depends on the selected Square plan | $4.95 | $490.05 | Lowest listed fee, but account availability and buyer ACH preference are unknown |

Calculations assume one domestic $495 payment and the published standard rates above. Actual pricing, international-card fees, currency conversion, disputes, refunds, taxes on provider fees, negotiated rates, and account-specific terms may differ. Verify the signed-in account's current pricing before sending an invoice.

### Recommendation

- Use a hosted invoice, not a generic Payment Link or embedded checkout. An invoice preserves the customer, scope, amount, due date, and payment record for a service that must be qualified first.
- Prefer an existing account only when its legal/business name, payout account, tax identity, public descriptor, support email, and recordkeeping are appropriate for MindCheckTools.
- Do not reuse a different site's product description, customer statement descriptor, or bookkeeping category merely because the account already exists.
- Do not create or configure an external account until the owner chooses the business identity and provider.
- Do not collect or manually enter card or bank details. Stripe's official guidance notes higher risk and PCI responsibility for manually entered card payments and recommends hosted payment options.
- A $1–$2 fee difference is not a reason to choose the wrong account or create extra infrastructure.

## Customer terms gate

The internal scope worksheet is not a contract. Before the first invoice, customer-facing terms need owner approval and, where appropriate, qualified legal review. At minimum they should identify:

- The legal/business names and authorized contacts for both parties.
- Exact routes, instrument family, environment, deliverables, exclusions, and delivery target.
- The $495 price, invoice due date, start condition, and effect of late or failed payment.
- Cancellation, rescheduling, refund, and scope-change rules.
- Confidentiality and the prohibition on sending health information, credentials, or payment details.
- Ownership and permitted use of the final report and pre-existing MindCheckTools materials.
- No legal opinion, clinical validation, licence grant, penetration test, formal accessibility certification, deployment, or guarantee.
- Responsibility for customer decisions, specialist review, remediation, and release.
- Liability, dispute, governing-law, electronic-acceptance, and record-retention terms selected with qualified advice.

Do not copy a competitor's agreement or publish AI-generated clauses as final legal terms.

## Tax and recordkeeping boundary

- The [IRS says every business must keep records](https://www.irs.gov/businesses/small-businesses-self-employed/why-should-i-keep-records) sufficient to identify income, expenses, and support tax returns. Invoices, payment records, and receipts are supporting documents.
- California's [CDTFA says charges for services are generally not subject to sales tax](https://www.cdtfa.ca.gov/industry/home-based-businesses/industry-topics.htm) when the business is providing a service rather than selling tangible goods. This is a general rule, not a determination for MindCheckTools or for customers in other jurisdictions.
- Do not add or omit tax based only on this record. Confirm the owner's business location and structure, customer location, service classification, and filing obligations with appropriate tax guidance.
- Keep MindCheckTools income and expenses identifiable and separable from unrelated websites and personal transactions.

## Insurance boundary

The [U.S. Small Business Administration](https://www.sba.gov/counseling/launch-your-business/) describes professional liability insurance as coverage for service businesses against financial loss from malpractice, errors, and negligence, and recommends comparing terms and prices with licensed agents.

Before the first paid review, the owner must decide whether to purchase professional liability, cyber, general liability, or other coverage. The review's no-health-data scope reduces exposure but does not establish that insurance is unnecessary. Coverage, exclusions, limits, deductibles, insurer eligibility, and cost are unknown until quotes are reviewed.

## Secure delivery and retention

Preferred first-sale delivery order:

1. Customer-controlled business folder or portal restricted to the authorized contact.
2. An owner-approved business storage provider with access limited to the named customer contact.
3. Email attachment only after the owner accepts the confidentiality and retention implications.

The report must contain no patient records, assessment answers, scores, diagnoses, crisis status, credentials, or restricted instrument items. Even so, fictional staging details and unreleased product findings may be confidential business information.

Do not invent a retention period. Retain only what is needed for the customer agreement, payment/tax records, dispute handling, and defensible delivery records; have the final schedule reviewed for applicable business and legal needs. Do not promise deletion until it has been verified across the relevant systems.

## Capacity and economics control

- Accept no more than one paid review at a time until actual delivery time and revision burden are known.
- Record active delivery hours separately from waiting time.
- If any of the first three reviews takes more than ten active hours, do not accept another at the same scope and price until the scope is narrowed, the process is standardized, or the price is reconsidered.
- One $495 Stripe-hosted invoice at the published standard rates would leave about $478.36 before taxes, insurance, specialist review, refunds, software, support, and owner labor.
- Do not advertise two-per-month or five-day capacity as guaranteed when existing commitments make that untrue.

## Privacy-safe sales ledger

Use `docs/professional-review-business-ledger.csv` for business-level validation. It intentionally excludes personal email, health information, assessment behavior, answers, scores, diagnoses, crisis status, and user-level analytics.

Record a sale only after money is actually received. A conversation, inquiry, accepted scope, sent invoice, or unpaid invoice is not revenue.

## Launch gate

### Ready without another decision

- Public offer, price, scope, exclusions, sample, and no-health-data intake language.
- Internal qualification, delivery, report QA, and stop workflow.
- Privacy-safe business ledger structure.
- Recommendation to use a hosted invoice and customer-controlled report delivery.

### Genuine owner decisions required

1. Which legal/business identity will sell the service?
2. Which correctly titled existing or new invoicing account will receive payment?
3. What customer terms, cancellation/refund rules, and acceptance method are approved?
4. What tax/accounting treatment applies to the owner's exact circumstances?
5. What insurance decision and coverage limits are acceptable?
6. What report-delivery provider and retention schedule are approved?
7. Is capacity available for one five-business-day engagement?

Until those seven decisions are resolved, MindCheckTools may qualify an inquiry and prepare a scope, but must not accept payment or start customer work.

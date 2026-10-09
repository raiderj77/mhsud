# DRAFT — NOT SENT

For owner review only. No recipient list, submission or outreach has been created.
Confirm the final wording and Jason's availability before sending.

Subject: A screening website designed to keep answers out of its server records

Hello [journalist name],

If you are covering health-data privacy, MindCheckTools offers a concrete design
example: its educational screening tools work without an account, and their
answers and scores are processed locally rather than intentionally sent to the
site. There are no display ads, and sensitive tool flows are excluded from optional
analytics. Some explicitly identified record tools save information in the browser.

That is a bounded claim, not a promise of complete privacy. Hosting requests,
shared devices, browser extensions, and copies a person prints or shares have
separate implications. The [privacy policy](https://mindchecktools.com/privacy)
explains these distinctions, and the [methodology](https://mindchecktools.com/methodology)
describes screening and review limits. An educational score is not a diagnosis.

Owner Jason Ramirez, CADC-II, can be offered as a source on the site's design
choices and the limits of his substance-use counseling scope, subject to his
confirmation of availability. We can provide public source-code references and a
demonstration using fictional inputs, without exposing visitor health data.

Would a specific example of these privacy tradeoffs be useful for your reporting?

[Owner-approved signature]

## Evidence behind the draft

Checked against `src/lib/routePolicies.ts`, `src/components/PrivacySafeAggregateAnalytics.tsx`,
`src/app/privacy/page.tsx`, `src/lib/privateToolSharing.ts` and existing privacy tests.
This draft does not claim HIPAA compliance, a clinical certification, superiority
over a named competitor, measured user outcomes or independently audited privacy.
Any new PR changes must be reviewed and released before describing them as live.

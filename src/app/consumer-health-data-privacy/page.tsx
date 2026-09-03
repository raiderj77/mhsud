import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, createMetadata, SITE_URL } from "@/lib/metadata";

const LAST_UPDATED = "2026-09-02";

export const metadata: Metadata = createMetadata({
  path: "/consumer-health-data-privacy",
  title: "Consumer Health Data Privacy Notice",
  description:
    "How MindCheck Tools limits, uses, and protects information that may indicate an interest in a mental health or substance-use topic.",
});

export default function ConsumerHealthDataPrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              {
                name: "Consumer Health Data Privacy Notice",
                url: `${SITE_URL}/consumer-health-data-privacy`,
              },
            ]),
          ),
        }}
      />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50">
            Consumer Health Data Privacy Notice
          </h1>
          <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-300">
            This notice explains how MindCheck Tools handles information that may be treated as
            consumer health data under laws such as Washington&apos;s My Health My Data Act. It
            supplements our <Link href="/privacy">Privacy Policy</Link>.
          </p>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            Last updated: <time dateTime={LAST_UPDATED}>September 2, 2026</time> (provider-status clarification)
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <section className="card border-sage-200 p-6 dark:border-sage-800 sm:p-8">
            <h2 className="mt-0 font-serif text-xl font-semibold text-sage-700 dark:text-sage-300">
              The most important distinction
            </h2>
            <p>
              <strong>Questionnaire answers, scores, journal entries, safety plans, and locally
              saved tool data are processed in your browser and are not intentionally sent to
              MindCheck Tools.</strong> Tools that intentionally save entries in your browser say so
              before use. Ordinary page requests are separate and can create hosting records.
            </p>
            <p>
              Visiting a mental-health or substance-use page can itself suggest an interest in a
              health topic. Ordinary hosting requests therefore deserve careful treatment even
              though they do not contain your answers or score. This notice describes that limited
              request and service data conservatively.
            </p>
          </section>

          <section>
            <h2>Categories collected and why</h2>
            <ul>
              <li>
                <strong>Website request data:</strong> requested path, IP address, user-agent or
                browser information, time, response status, and security events. Vercel processes
                this information to deliver the page, prevent abuse, diagnose failures, and protect
                the service. A health-topic path may indicate an interest in that topic.
              </li>
              <li>
                <strong>Cookie-free aggregate measurement:</strong> When enabled for the production
                project, Vercel Web Analytics counts visitors and page views only on a positive allowlist of topic-neutral and
                professional pages. Its documented data-point fields can include event time,
                allowlisted page path and route, browser-supplied referrer, coarse city/region/country,
                operating system and version, browser and version, device type, and analytics-script
                version. Query strings and fragments are removed from the event URL, custom events
                are not sent, and Global Privacy Control suppresses events. Assessment, result, crisis,
                condition-specific, blog-detail, and interactive-tool routes do not send Web
                Analytics events.
              </li>
              <li>
                <strong>Messages you send:</strong> we receive the contents of messages you choose
                to send. Please do not email screening answers, diagnoses, or other sensitive health
                details.
              </li>
            </ul>
          </section>

          <section>
            <h2>Sources</h2>
            <p>
              Request data comes from your browser, device, and network when you visit the site. If
              analytics is enabled, analytics data comes from the same sources on allowlisted pages.
              Contact information comes directly from you when you choose to send it. We
              do not buy health data, enrich visitor profiles with broker data, or
              infer a diagnosis from site activity.
            </p>
          </section>

          <section>
            <h2>Sharing and service providers</h2>
            <p>We do not sell consumer health data. Limited information is processed by:</p>
            <ul>
              <li>
                <strong>Vercel:</strong> website request and security information, including the
                requested path, for hosting, delivery, reliability, and abuse prevention. Vercel
                also processes cookie-free aggregate events from the narrow non-sensitive route
                allowlist when Vercel Web Analytics is enabled. Its documented visitor hash resets after 24 hours.
              </li>
              <li>
                <strong>Email delivery providers:</strong> message contents and routing metadata when
                you choose to contact us by email.
              </li>
            </ul>
            <p>
              No MindCheck Tools corporate affiliate receives consumer health data. Disclosed affiliate
              links use a no-referrer policy and do not append answers or scores. An external destination
              may collect information after you choose to visit it under
              its own privacy policy.
            </p>
          </section>

          <section>
            <h2>No display advertising</h2>
            <p>
              MindCheck Tools does not display ads or load advertising networks on any page.
              We do not use screening activity, answers, scores, or other consumer health information
              for advertising, retargeting, or commercial profiling. Disclosed affiliate links and
              professional services remain separate from sensitive tool journeys. Hosting, any enabled
              allowlisted aggregate analytics, contact messages, and local copies retain the boundaries described in this notice.
            </p>
          </section>

          <section>
            <h2>Your choices and requests</h2>
            <ul>
              <li>
                Use browser controls to clear local storage and cookies. MindCheck Tools does not use Google Analytics or display advertising. Global Privacy Control suppresses any enabled Vercel Web Analytics events.
              </li>
              <li>
                Clear or reset browser-local tool data on the device where it is stored. MindCheck
                Tools cannot retrieve or delete data that remains only in your browser.
              </li>
              <li>
                Email <strong>privacy@mindchecktools.com</strong> with the subject
                &quot;Consumer Health Data Request&quot; to ask whether we hold covered data about you,
                request access or deletion, request a list of the third parties and affiliates with
                which covered data has been shared or sold, or withdraw consent. You do not need to
                create an account. We may request limited information needed to authenticate the request.
              </li>
            </ul>
            <p>
              We will respond without undue delay and within the period required by applicable law.
              If we deny a request, you may appeal by replying with the subject &quot;Consumer Health
              Data Appeal.&quot; We will explain the outcome and, when required, how to contact the
              appropriate regulator.
            </p>
          </section>

          <section>
            <h2>Retention and security</h2>
            <p>
              Browser-local health entries remain on your device until you reset the tool, clear site
              data, or the browser removes them. Hosting/security log retention follows Vercel&apos;s
              configured service limits and legitimate security or legal needs. When Web Analytics is
              enabled, Vercel documents that its visitor hash resets after 24 hours; aggregate reporting
              retention follows the project and plan settings.
            </p>
            <p>
              Sensitive routes use no-store and no-referrer response controls and bypass optional
              analytics, advertising, affiliate calls to action, and service-worker caching. When
              browser JavaScript loads successfully, the sensitive-route lifecycle also replaces a
              query-bearing or fragmented address with the clean path after the initial request. A
              query can still reach hosting infrastructure in that initial request, and cleanup cannot
              be guaranteed if JavaScript or hydration fails; do not place sensitive information in a URL.
            </p>
          </section>

          <section>
            <h2>Changes and contact</h2>
            <p>
              We will update this notice before collecting, using, or sharing an additional category
              of consumer health data or using it for a materially different purpose when notice or
              consent is required. Questions and requests can be sent to
              <strong> privacy@mindchecktools.com</strong>.
            </p>
            <p>
              For official information, see the Washington Legislature&apos;s{
              " "
              }<a href="https://app.leg.wa.gov/RCW/default.aspx?cite=19.373" target="_blank" rel="noopener noreferrer">
                My Health My Data Act
              </a>{" "}
              and the{
              " "
              }<a href="https://www.atg.wa.gov/protecting-washingtonians-personal-health-data-and-privacy" target="_blank" rel="noopener noreferrer">
                Washington Attorney General&apos;s guidance
              </a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

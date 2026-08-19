import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, createMetadata, SITE_URL } from "@/lib/metadata";

const LAST_REVIEWED = "2026-08-18";

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
            Last reviewed: <time dateTime={LAST_REVIEWED}>August 18, 2026</time>
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <section className="card border-sage-200 p-6 dark:border-sage-800 sm:p-8">
            <h2 className="mt-0 font-serif text-xl font-semibold text-sage-700 dark:text-sage-300">
              The most important distinction
            </h2>
            <p>
              <strong>Questionnaire answers, scores, journal entries, safety plans, and locally
              saved tool data are not collected by MindCheck Tools.</strong> Screening and scoring
              happen in your browser. Tools that intentionally save entries in your browser say so
              before use.
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
                <strong>Consented public-page analytics:</strong> on routes that are not classified
                as sensitive, Google Analytics may receive a sanitized page URL, page title, the
                referring site&apos;s origin, device/browser information, network information,
                approximate region, and analytics cookie identifiers. This happens only after an
                affirmative analytics choice and is used to understand aggregate site use.
              </li>
              <li>
                <strong>Cookie-free aggregate measurement:</strong> Vercel Web Analytics counts
                visitors and page views only on a positive allowlist of topic-neutral and
                professional pages. Query strings, fragments, and custom events are excluded;
                Global Privacy Control suppresses events. Assessment, result, crisis,
                condition-specific, blog-detail, and interactive-tool routes do not send Web
                Analytics events.
              </li>
              <li>
                <strong>Resource-email subscription:</strong> if you independently subscribe, we
                collect the email address and your affirmative subscription choice. We intentionally
                exclude the source page, tool name, answers, score, diagnosis, and crisis information.
                Subscription forms are suppressed on sensitive interactive routes.
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
              Request and analytics data comes from your browser, device, and network when you visit
              the site. Subscription and contact information comes directly from you when you choose
              to submit it. We do not buy health data, enrich visitor profiles with broker data, or
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
                allowlist. Its documented visitor hash resets after 24 hours.
              </li>
              <li>
                <strong>Google Analytics:</strong> the limited public-page analytics described above,
                only after analytics consent. Google Analytics is disabled on sensitive routes.
              </li>
              <li>
                <strong>Loops:</strong> an email address submitted with affirmative resource-email
                consent. No tool name, source page, answer, score, diagnosis, or crisis information
                is included in the provider payload.
              </li>
              <li>
                <strong>Email delivery providers:</strong> message contents and routing metadata when
                you choose to contact us by email.
              </li>
            </ul>
            <p>
              No MindCheck Tools corporate affiliate receives consumer health data. External links,
              including disclosed affiliate links, use a no-referrer policy and do not append answers
              or scores. The destination may collect information after you choose to visit it under
              its own privacy policy.
            </p>
          </section>

          <section>
            <h2>Advertising status</h2>
            <p>
              Advertising is currently disabled. At the last review, Google&apos;s European-regulations
              message was published, the AdSense site review was still &quot;Getting ready,&quot; and no
              ads were eligible to serve. Application code keeps the AdSense runtime off unless the
              publisher enablement, certified-CMP readiness, and strict-CSP readiness gates are all
              enabled. If advertising is activated, it remains excluded from sensitive
              routes, requires an affirmative advertising choice, and requests non-personalized ads.
              Non-personalized advertising can still use identifiers for functions such as frequency
              capping and aggregated reporting; details must be presented by the applicable consent
              layer before activation.
            </p>
          </section>

          <section>
            <h2>Your choices and requests</h2>
            <ul>
              <li>
                Use <Link href="/cookies">Privacy Choices</Link> to deny or withdraw Google
                Analytics and advertising. Global Privacy Control also suppresses Vercel Web
                Analytics events.
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
              configured service limits and legitimate security or legal needs. Google Analytics retention
              follows the configured property setting. Vercel documents that its Web Analytics visitor
              hash resets after 24 hours; aggregate reporting retention follows the project and plan
              settings. Newsletter addresses remain while subscribed or until no longer needed,
              subject to limited suppression, security, backup, and legal records.
            </p>
            <p>
              Sensitive routes use no-store and no-referrer response controls, bypass optional
              analytics, advertising, affiliate calls to action, and service-worker caching, and remove
              query strings or fragments from browser history.
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

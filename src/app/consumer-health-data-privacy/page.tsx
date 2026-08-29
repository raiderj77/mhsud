import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd, createMetadata, SITE_URL } from "@/lib/metadata";

const LAST_REVIEWED = "2026-08-28";

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
            This notice explains how MindCheck Tools handles information that may be treated as consumer health data under laws such as Washington&apos;s My Health My Data Act. It supplements our <Link href="/privacy">Privacy Policy</Link>.
          </p>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            Last reviewed: <time dateTime={LAST_REVIEWED}>August 28, 2026</time>
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <section className="card border-sage-200 p-6 dark:border-sage-800 sm:p-8">
            <h2 className="mt-0 font-serif text-xl font-semibold text-sage-700 dark:text-sage-300">
              The most important distinction
            </h2>
            <p>
              <strong>Questionnaire answers, scores, journal entries, safety plans, and other browser-local tool entries are not intentionally collected by the MindCheck Tools application.</strong> Screening and scoring happen in your browser. Tools that intentionally save entries in the browser say so before use.
            </p>
            <p>
              Visiting a mental-health or substance-use page can itself suggest an interest in a health topic. Ordinary hosting requests therefore deserve careful treatment even though they do not contain questionnaire answers or scores. This notice describes that limited request and service data conservatively.
            </p>
          </section>

          <section>
            <h2>Categories collected and why</h2>
            <ul>
              <li>
                <strong>Website request data:</strong> requested path, IP address, user-agent or browser information, time, response status, and security events. Vercel processes this information to deliver the page, prevent abuse, diagnose failures, and protect the service. A health-topic path may indicate an interest in that topic.
              </li>
              <li>
                <strong>Cookie-free aggregate measurement:</strong> Vercel Web Analytics counts visits only on a fixed allowlist of topic-neutral and professional pages. Query strings, fragments, and custom screening events are excluded. Global Privacy Control suppresses Web Analytics. Assessment, result, crisis, condition-specific, and interactive-tool routes do not send Web Analytics events.
              </li>
              <li>
                <strong>Resource-email subscription:</strong> if you independently subscribe, we collect the email address and affirmative subscription choice. The subscription payload is designed to exclude source page, tool name, answers, score, diagnosis, and crisis information.
              </li>
              <li>
                <strong>Messages you send:</strong> we receive the contents of messages you choose to send. Please do not email screening answers, diagnoses, or other sensitive health details.
              </li>
            </ul>
          </section>

          <section>
            <h2>Sources</h2>
            <p>
              Request data comes from your browser, device, and network when you visit the site. Subscription and contact information comes directly from you when you choose to submit it. We do not buy health data, enrich visitor profiles with data-broker health information, or infer a diagnosis from site activity.
            </p>
          </section>

          <section>
            <h2>Sharing and service providers</h2>
            <p>We do not sell consumer health data. Limited information is processed by:</p>
            <ul>
              <li>
                <strong>Vercel:</strong> website request and security information for hosting, delivery, reliability, and abuse prevention. Vercel also processes cookie-free aggregate events from the narrow neutral-route allowlist.
              </li>
              <li>
                <strong>Loops:</strong> an email address submitted with affirmative resource-email consent. The provider payload is designed not to include tool name, source page, answer, score, diagnosis, or crisis information.
              </li>
              <li>
                <strong>Email delivery providers:</strong> message contents and routing metadata when you choose to contact us by email.
              </li>
            </ul>
            <p>
              External links do not append screening answers or scores. Sensitive health routes use no-referrer controls where appropriate. A destination may collect information after you choose to visit it under its own privacy policy.
            </p>
          </section>

          <section>
            <h2>No display advertising</h2>
            <p>
              MindCheck Tools does not use display advertising. The application does not load Google AdSense, retargeting pixels, behavioral-advertising scripts, or an advertising consent runtime. Consumer health data is not used for targeted advertising or profiling.
            </p>
          </section>

          <section>
            <h2>Your choices and requests</h2>
            <ul>
              <li>
                Global Privacy Control suppresses Vercel Web Analytics. See the <Link href="/cookies">Cookie &amp; Browser Storage Policy</Link> for browser controls.
              </li>
              <li>
                Clear or reset browser-local tool data on the device where it is stored. MindCheck Tools cannot retrieve or delete information that remains only in your browser.
              </li>
              <li>
                Email <strong>privacy@mindchecktools.com</strong> with the subject &quot;Consumer Health Data Request&quot; to ask whether we hold covered data about you, request access or deletion, request information about third parties or affiliates with which covered data has been shared or sold, or withdraw consent where applicable. We may request limited information needed to authenticate the request.
              </li>
            </ul>
            <p>
              We will respond within the period required by applicable law. If an applicable law provides an appeal right and a request is denied, you may reply with the subject &quot;Consumer Health Data Appeal.&quot;
            </p>
          </section>

          <section>
            <h2>Retention and security</h2>
            <p>
              Browser-local health entries remain on your device until you reset the tool, clear site data, or the browser removes them. Hosting and security log retention follows Vercel settings and legitimate security, backup, and legal needs. Aggregate Web Analytics retention follows the Vercel project and plan settings. Newsletter addresses remain while needed for the subscription, subject to provider suppression, security, backup, and legal records.
            </p>
            <p>
              Sensitive routes exclude optional Web Analytics and use privacy controls including no-referrer behavior, removal of query strings and fragments from browser history, and service-worker rules that do not cache sensitive requests.
            </p>
          </section>

          <section>
            <h2>Changes and contact</h2>
            <p>
              We will update this notice when site behavior materially changes or when notice is required before a materially different collection, use, or sharing practice. Questions and requests can be sent to <strong>privacy@mindchecktools.com</strong>.
            </p>
            <p>
              For official information, see the Washington Legislature&apos;s{" "}
              <a href="https://app.leg.wa.gov/RCW/default.aspx?cite=19.373" target="_blank" rel="noopener noreferrer">
                My Health My Data Act
              </a>{" "}
              and the{" "}
              <a href="https://www.atg.wa.gov/protecting-washingtonians-personal-health-data-and-privacy" target="_blank" rel="noopener noreferrer">
                Washington Attorney General&apos;s guidance
              </a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

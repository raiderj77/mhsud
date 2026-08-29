import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/privacy",
  title: "Privacy Policy, How We Protect Your Data",
  description:
    "How MindCheck Tools handles browser-local screening data, hosting requests, privacy-safe aggregate analytics, subscriptions, and privacy rights.",
});

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Privacy Policy", url: `${SITE_URL}/privacy` },
            ]),
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Effective Date: January 1, 2026 | Last Reviewed: August 28, 2026
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-6 sm:p-8 border-sage-200 dark:border-sage-800">
            <h2 className="font-serif text-xl font-semibold text-sage-700 dark:text-sage-400 mt-0 mb-3">
              The short version
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>Your screening answers and scores are processed locally and are not intentionally sent to MindCheck Tools.</strong> We do not maintain an application database of those questionnaire answers or scores. Ordinary page requests can create hosting and security records that include the requested URL and network information. Some clearly identified planning, journal, recovery, and preference features save information in your browser. MindCheck Tools does not use Google Analytics or display advertising.
            </p>
          </div>

          <section>
            <h2>Self-check and screening data</h2>
            <p>
              Questionnaire answers and scores for interactive screeners are calculated with browser-side code. The assessment application is not configured to submit those answers or scores to MindCheck Tools, analytics, advertising systems, email providers, affiliate partners, or remote AI services.
            </p>
            <p>
              A screenshot, printout, downloaded reflection, browser extension, device backup, shared-browser profile, or other software you choose to use is outside that application boundary and may retain or process information locally or through its own services.
            </p>
          </section>

          <section>
            <h2>Browser storage</h2>
            <p>
              MindCheck Tools uses browser <strong>localStorage</strong> for the theme preference and for features that intentionally preserve information between visits. Examples include the safety plan, CBT thought record, worry-time scheduler, daily recovery check-in, and sobriety calculator. Each persistent tool should identify that behavior before use and provide an appropriate reset or delete control.
            </p>
            <p>
              Browser-local information remains available to the same browser profile until you delete it, clear site data, or the browser removes it. Anyone with access to the same browser profile may be able to view it.
            </p>
          </section>

          <section>
            <h2>Analytics</h2>
            <p>
              MindCheck Tools uses <strong>Vercel Web Analytics</strong> only on a fixed allowlist of topic-neutral and professional pages. It is excluded from assessment, result, crisis, condition-specific, and interactive-tool routes. The application sends no custom screening funnel events and is not configured to send answers, scores, severity labels, crisis states, recovery entries, or journal content to Web Analytics.
            </p>
            <p>
              The analytics path is stripped of query strings and URL fragments, and Web Analytics is suppressed when Global Privacy Control is active. Vercel describes Web Analytics as cookie-free aggregate measurement. Ordinary hosting requests are separate from Web Analytics and are covered below.
            </p>
          </section>

          <section>
            <h2>Hosting and technical request logs</h2>
            <p>
              Vercel hosts MindCheck Tools and may process ordinary request information such as IP address, browser and user-agent details, requested URL, timestamps, response status, and security events. A requested health-topic URL can reveal the topic page visited even though questionnaire answers and scores are not placed in the URL.
            </p>
            <p>
              Infrastructure-log retention depends on provider settings, security needs, backups, and legal obligations. We do not promise zero logging or immediate deletion from every infrastructure system. Sensitive health routes use no-referrer controls when appropriate so the page path is not sent as the referrer when you follow an external link.
            </p>
          </section>

          <section>
            <h2>Email subscriptions and contact messages</h2>
            <p>
              You do not need an account or email address to use MindCheck Tools. If you voluntarily subscribe to resource emails, we collect the email address for that purpose and use <strong>Loops</strong> as the email service provider. The subscription payload is designed not to include the screening tool used, answers, score, diagnosis, crisis information, or originating sensitive page.
            </p>
            <p>
              If you contact us voluntarily, we receive the information you choose to include. Please do not email screening answers or other sensitive health information.
            </p>
          </section>

          <section>
            <h2>Data retention</h2>
            <ul>
              <li><strong>Screening answers and scores:</strong> not retained in a MindCheck Tools application database. In-memory responses normally disappear when you reset, refresh, or leave the tool.</li>
              <li><strong>Browser-local tool data:</strong> remains in that browser until you delete/reset it, clear site data, or the browser removes it.</li>
              <li><strong>Vercel Web Analytics:</strong> aggregate reporting retention follows the Vercel project and plan settings. Sensitive routes do not send Web Analytics events.</li>
              <li><strong>Newsletter address:</strong> retained while needed to operate the subscription, subject to provider suppression, security, backup, and legal records.</li>
              <li><strong>Contact messages:</strong> retained as needed to respond, maintain security, and meet legitimate recordkeeping obligations.</li>
              <li><strong>Hosting and security logs:</strong> retention follows hosting settings and legitimate security, backup, and legal requirements.</li>
            </ul>
          </section>

          <section>
            <h2>Display advertising</h2>
            <p>
              <strong>MindCheck Tools does not use display advertising.</strong> The application does not load Google AdSense, retargeting pixels, behavioral-advertising scripts, or an advertising consent runtime. Screening answers, scores, severity, crisis state, and browser-local tool entries are not used to select ads.
            </p>
          </section>

          <section>
            <h2>Reflection summaries and user-created copies</h2>
            <p>
              Some tools can create a printable or downloadable reflection using client-side code. The application does not automatically upload that local copy to a MindCheck Tools application database. A downloaded or printed file can contain sensitive information and may be available to other device users, printers, cloud-sync systems, backups, security software, or applications you choose to open it with.
            </p>
          </section>

          <section>
            <h2>Third-party links and affiliate links</h2>
            <p>
              MindCheck Tools links to external crisis resources, professional organizations, evidence sources, educational resources, and other sites. Those destinations have their own privacy practices.
            </p>
            <p>
              Some therapist or resource links may be affiliate links. When used, they are configured not to add screening answers, score, diagnosis, crisis information, or email address to the destination URL, and sensitive routes use no-referrer controls where appropriate. A third party may collect information after you choose to visit its site under its own policy.
            </p>
          </section>

          <section>
            <h2>Children&apos;s privacy</h2>
            <p>
              MindCheck Tools is a general-audience educational site. Youth-oriented information identifies its intended age range where applicable. Children under 13 should not submit an email address or contact message. If you believe a child provided personal information to us, contact privacy@mindchecktools.com so we can investigate and respond appropriately.
            </p>
          </section>

          <section>
            <h2>Security</h2>
            <p>
              The site uses HTTPS, restrictive response headers, a content security policy, no-store controls for sensitive API responses, dependency review, and other security controls. No security measure eliminates every risk, particularly risks from shared devices, browser extensions, downloaded files, third-party links, or software outside our control.
            </p>
          </section>

          <section>
            <h2>Your privacy rights</h2>
            <p>
              Privacy rights vary by location and by whether a particular law applies to MindCheck Tools or the processing involved. Where applicable, you may have rights to access, correct, delete, restrict, object to, or obtain a portable copy of personal data, and rights concerning sale, targeted advertising, or certain profiling. Requests can be sent to privacy@mindchecktools.com or through the <Link href="/contact">Contact page</Link>. We may need to verify a request and will respond within the timeframe required by applicable law.
            </p>

            <h3>EEA and UK</h3>
            <p>
              Where the GDPR or UK GDPR applies, rights can include access, rectification, erasure, restriction, portability, and objection. Health information can receive heightened legal protection. MindCheck Tools is designed so questionnaire answers and scores remain browser-local rather than being intentionally submitted to the application.
            </p>

            <h3>Washington My Health My Data Act</h3>
            <p>
              A requested health-topic path in ordinary hosting data may qualify as consumer health data when it is reasonably linkable to a person and reveals an interest in health care. The <Link href="/consumer-health-data-privacy">Consumer Health Data Privacy Notice</Link> describes the categories, purposes, sources, service providers, and request process for consumer health data handled by the site.
            </p>

            <h3>Maryland Online Data Privacy Act</h3>
            <p>
              Where MODPA applies, Maryland residents may have rights concerning access, correction, deletion, portability, sale, targeted advertising, and certain profiling, along with protections for sensitive data. MindCheck Tools does not use consumer health data for targeted advertising or profiling.
            </p>

            <h3>California privacy rights</h3>
            <p>
              Where the CCPA/CPRA applies, California residents may have rights to know, access, correct, delete, and obtain information about qualifying sharing or sale, plus rights concerning sensitive personal information and non-discrimination. MindCheck Tools does not sell personal information and does not use consumer health data for cross-context behavioral advertising.
            </p>

            <h3>Other U.S. states</h3>
            <p>
              Other state privacy laws can provide similar rights with different thresholds, exemptions, and procedures. Submit a request through the <Link href="/contact">Contact page</Link> or privacy@mindchecktools.com and we will evaluate it under the applicable law.
            </p>
          </section>

          <section>
            <h2>Global Privacy Control</h2>
            <p>
              MindCheck Tools honors the Global Privacy Control browser signal by suppressing Vercel Web Analytics. Middleware may set a small first-party <code>empire_gpc=1</code> cookie so browser-side code can continue honoring that signal. Ordinary hosting and security processing still occurs as needed to deliver and protect the site.
            </p>
          </section>

          <section>
            <h2>Related policies</h2>
            <p>
              See the <Link href="/consumer-health-data-privacy">Consumer Health Data Privacy Notice</Link>, <Link href="/cookies">Cookie &amp; Browser Storage Policy</Link>, and <Link href="/terms">Terms of Use</Link> for additional details.
            </p>
          </section>

          <section>
            <h2>Changes and contact</h2>
            <p>
              We update this policy when site behavior or legal requirements materially change. Questions and privacy requests can be sent to <strong>privacy@mindchecktools.com</strong>.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800">
            <p className="text-sm text-sage-700 dark:text-sage-400 leading-relaxed m-0">
              <strong>Privacy principle:</strong> MindCheck Tools is designed to collect less, keep screening inputs local, and avoid monetization that depends on advertising against a visitor&apos;s health concerns.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

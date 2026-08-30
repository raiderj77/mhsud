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
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Privacy Policy
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Effective Date: January 1, 2026 | Last updated: August 28, 2026 (no-display-advertising policy)
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* The Hook */}
          <div className="card p-6 sm:p-8 border-sage-200 dark:border-sage-800">
            <h2 className="font-serif text-xl font-semibold text-sage-700 dark:text-sage-400 mt-0 mb-3">
              The short version
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>Your screening answers and scores are processed locally and are not intentionally sent to MindCheck Tools.</strong> We do not collect or store them in an application database. Ordinary page requests can create hosting records that include the requested URL and network information. If you choose to print, download, or copy a local reflection, that copy is handled by your browser, device, printer, and any sync or backup services you use. Access through a shared browser or device is outside this boundary. Separate journaling, safety-plan, worry-log, recovery check-in, and sobriety tools save entries in your browser when their page says so. You can use every tool without an account or email. If you separately choose to subscribe to resource emails, we collect only your email address for that purpose.
            </p>
          </div>

          {/* Detailed Sections */}
          <section>
            <h2>What data do we collect from the self-check tools?</h2>
            <p>
              <strong>The questionnaire code does not intentionally submit answers or scores.</strong> Questionnaire answers and scores, including those for the PHQ-9, GAD-7, AUDIT, and AUDIT-C, are processed locally using client-side JavaScript and are not intentionally sent to MindCheck Tools. Ordinary page requests are separate and can create hosting records.
            </p>
            <p>
              We have deliberately built our tools this way because mental health screening calls for strong privacy safeguards. The assessment application has no configured endpoint or application-database write for questionnaire responses and does not intentionally submit them to MindCheck Tools, analytics, or advertising systems. Browser extensions, device software, shared-browser access, and any copy you deliberately create operate outside that application boundary.
            </p>
          </section>

          <section>
            <h2>Do you use cookies?</h2>
            <p>
              We use browser <strong>localStorage</strong> for the light/dark theme preference and for tools that need to preserve a journal or plan between visits. Those tools are the safety plan, CBT thought record, worry-time scheduler, daily recovery check-in, and sobriety calculator. Their pages display a local-storage notice before the interactive tool.
            </p>
            <p>
              Browser-local entries are not intentionally transmitted to MindCheck Tools application servers, but they remain available to this browser profile until you use the tool&apos;s reset/delete control, clear site data, or the browser removes them. Anyone with access to the same browser profile may be able to read them. Use a private window or clear the tool on a shared device. Browser extensions, device software, screenshots, downloads, and backups are outside our control.
            </p>
            <p>The following first-party browser storage may be used on this site:</p>
            <ul>
              <li><strong>Theme preference</strong>, which remembers the selected color theme.</li>
              <li><strong>Clearly identified local tools</strong>, which may preserve a journal, plan, check-in, or calculator preference in this browser.</li>
              <li><strong>Global Privacy Control signal</strong>, which middleware may remember in a short-lived first-party cookie so browser-side analytics remain suppressed.</li>
            </ul>
            <p>
              You can remove these items through each tool&apos;s reset control or your browser settings. MindCheck Tools does not use Google Analytics.
            </p>
          </section>

          <section>
            <h2>What data is collected through analytics?</h2>
            <p>
              Vercel Web Analytics separately counts visits and page views without cookies. It is configured with a positive route allowlist, removes query strings and fragments, sends no custom events, and returns no event when Global Privacy Control is active. Assessment, result, crisis, condition-specific, blog-detail, and interactive-tool routes are excluded. Vercel determines a visitor with a request-derived hash that resets after 24 hours and reports only aggregated analytics; ordinary hosting requests remain subject to the separate hosting-log disclosure below.
            </p>
            <p>
              <strong>The application is not configured to add screening answers, scores, results, or browser-local entries to analytics.</strong> MindCheck Tools does not use Google Analytics or display advertising. A print, download, screenshot, or other copy that you deliberately create is controlled by your browser, device, printer, and any sync or backup service you use.
            </p>
          </section>

          <section>
            <h2>Hosting and technical request logs</h2>
            <p>
              Vercel hosts MindCheck Tools and may process ordinary request information such as IP
              address, browser and user-agent details, requested URL, timestamps, and security events.
              A requested URL can reveal which tool or topic page was visited, but screening answers,
              scores, journal entries, and locally saved plans are not placed in URLs or intentionally
              sent with those requests.
            </p>
            <p>
              Infrastructure-log retention depends on provider settings, security needs, backups, and
              legal obligations. We do not promise zero logging or immediate deletion from every system.
              Sensitive tool pages use a no-referrer policy so the page path is not sent when you follow
              an external link.
            </p>
          </section>

          <section>
            <h2>Do you collect personal information?</h2>
            <p>
              We do not require an account, registration, or email address to use our tools. If you voluntarily subscribe to resource emails, we collect your email address and send it to <strong>Loops</strong>, our email service provider. We do not send Loops the screening tool you used, your answers, score, diagnosis, crisis information, or the page where you subscribed.
            </p>
            <p>
              Authorized MindCheck Tools administrators and Loops, acting as our service provider, can access subscriber records as needed to operate the mailing list. We use the address only for the emails you consented to receive. Every marketing email includes an unsubscribe link. We do not sell subscriber information or share it for advertising.
            </p>
            <p>
              If you contact us voluntarily, we receive the information you choose to include in your message. Please do not send screening answers or other sensitive health information by email.
            </p>
          </section>

          <section>
            <h2>Data retention</h2>
            <p>
              We retain data for the minimum period necessary:
            </p>
            <ul>
              <li><strong>Screening answers and scores:</strong> Not retained by MindCheck Tools. In-memory responses are removed when you close, refresh, or reset the page. A printout or downloaded reflection that you deliberately create is a separate local copy and remains until you or the relevant device/service deletes it.</li>
              <li><strong>Browser-local journals and tool data:</strong> Retained in your browser until you delete/reset it, clear site data, or the browser removes it. MindCheck Tools cannot retrieve or delete data that remains only on your device.</li>
              <li><strong>Vercel Web Analytics:</strong> Vercel documents that its cookie-free visitor hash resets after 24 hours. Aggregated reporting retention follows the Vercel project and plan settings. Sensitive routes do not send Web Analytics events.</li>
              <li><strong>Newsletter email address:</strong> Retained while you are subscribed or until it is no longer needed for the mailing list. You may unsubscribe from any email or request deletion at privacy@mindchecktools.com. Loops may retain limited suppression, security, backup, or legal records under its own obligations; we do not promise immediate deletion from every backup.</li>
              <li><strong>Contact emails:</strong> Retained only as long as necessary to respond to your inquiry, then deleted.</li>
              <li><strong>Dark mode preference:</strong> Stored in your browser&apos;s localStorage indefinitely until you clear browser data.</li>
              <li><strong>Hosting and security logs:</strong> Retention follows Vercel settings and legitimate security, backup, and legal requirements; it may change and is not represented as zero retention.</li>
            </ul>
          </section>

          <section>
            <h2>No display advertising</h2>
            <p>
              MindCheck Tools does not display ads or load advertising networks. This applies across the site, including public education, screening, result, professional, and crisis pages. We do not use retargeting or health-interest advertising.
            </p>
            <p>
              <strong>The application is not configured to pass screening answers, scores, results, or browser-local tool entries to advertising systems.</strong> Ordinary hosting, optional analytics, voluntary email, and local copies still have the privacy boundaries described in this policy. No display ads does not mean zero data collection.
            </p>
            <p>
              Separately disclosed affiliate links and professional services are not display advertising. They must not use answers, scores, or sensitive tool activity to target an offer. Essential screening context, crisis resources, and safety information remain free. External destinations have their own privacy practices.
            </p>
          </section>

          <section>
            <h2>Reflection summaries</h2>
            <p>
              Our screening tools offer a &quot;Download Reflection Summary&quot; feature that generates a summary of your results as an HTML file using client-side JavaScript. The application does not automatically upload the summary, answers, or score to a MindCheck Tools server or application database. Your browser creates the file locally, and your browser, device, downloads folder, and any sync or backup service you use may retain or process it.
            </p>
            <p>
              A downloaded or printed summary can contain sensitive information. It may be accessible to other people using the device and may be processed by browser downloads, printers, cloud sync, backups, security software, or any app you choose to open it with. Tool-link sharing on MindCheck Tools is deliberately limited to the public tool name and canonical page URL; it does not include answers, scores, ratings, result labels, or summaries.
            </p>
          </section>

          <section>
            <h2>Third-party links</h2>
            <p>
              Our site may link to external resources such as crisis hotlines, professional organizations, and educational materials. These external sites have their own privacy policies. We are not responsible for their content or data practices, but we only link to resources we believe are reputable.
            </p>
            <p>
              Some therapist links are affiliate links, which means we may earn a commission if you sign up. These links are configured not to send the referring page. We do not add your screening answers, score, diagnosis, crisis information, email address, or other identifiers to an affiliate link. The external provider may collect information after you choose to visit its site under its own privacy policy.
            </p>
          </section>

          <section>
            <h2>Children&apos;s privacy</h2>
            <p>
              MindCheck Tools is a general-audience educational site. Any youth-oriented tool identifies its intended age range and should be used with a parent, guardian, or qualified professional when appropriate. The application processes screening answers locally and does not automatically send them to a MindCheck Tools server or application database; a screenshot, printout, download, or other copy a user creates is controlled by that user&apos;s browser, device, and chosen services. Subscription forms are suppressed on sensitive interactive routes. Children under 13 should not submit an email address or contact message. If you are a parent or guardian and believe a child provided personal information, contact privacy@mindchecktools.com so we can investigate and address it.
            </p>
          </section>

          <section>
            <h2>Data security</h2>
            <p>
              Assessment code does not automatically send questionnaire responses to a MindCheck Tools server or save them in an application database, so MindCheck Tools does not maintain an application database of those answers. Browser-local tool entries and user-created screenshots, printouts, or downloads can remain on a browser, device, printer, sync service, or backup. The site is served over HTTPS and uses restrictive response headers, a content security policy, no-store controls on sensitive routes and API responses, and dependency review. No security measure can eliminate every risk, especially risks from a shared device, browser extension, downloaded file, or software outside our control.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              Depending on where you live, you have specific rights regarding your personal data:
            </p>

            <h3>GDPR (EEA/UK residents)</h3>
            <p>
              Under the General Data Protection Regulation, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. MindCheck Tools does not use Google Analytics. Cookie-free Vercel Web Analytics is limited to allowlisted non-sensitive pages and is suppressed when Global Privacy Control is active.
            </p>
            <p>
              <strong>GDPR Article 9, Special category data:</strong> Health data is classified as special category data under Article 9 of the GDPR. Screening results are processed in your browser, and the application does not automatically send them to a MindCheck Tools server or application database. A screenshot, printout, download, or other copy you create is controlled by your browser, device, and chosen services. Newsletter subscriptions are deliberately separated from tool names, answers, scores, diagnoses, and crisis information.
            </p>

            <h3>Washington My Health My Data Act (MHMDA)</h3>
            <p>
              Washington law can treat reasonably linkable information that identifies a person&apos;s interest in seeking health care as consumer health data. MindCheck Tools does not collect questionnaire answers, scores, journal entries, or locally saved plans, but a requested health-topic path can appear in ordinary hosting data. Health-topic routes are excluded from Vercel Web Analytics. Our dedicated <Link href="/consumer-health-data-privacy">Consumer Health Data Privacy Notice</Link> describes the categories, purposes, sources, service providers, and request process we apply to that limited data.
            </p>

            <h3>Maryland Online Data Privacy Act (MODPA)</h3>
            <p>
              MODPA took effect October 1, 2025 and applies when its statutory processing thresholds and other requirements are met. It gives covered Maryland residents rights to access, correct, delete, and obtain a portable copy of personal data, plus rights to opt out of sale, targeted advertising, and certain profiling. It also restricts the sale and unnecessary processing of sensitive data.
            </p>
            <p>
              <strong>Your rights under MODPA:</strong>
            </p>
            <ul>
              <li><strong>Right to access</strong> the personal data we hold about you</li>
              <li><strong>Right to correct</strong> inaccurate personal data</li>
              <li><strong>Right to delete</strong> your personal data</li>
              <li><strong>Right to opt out</strong> of targeted advertising and profiling</li>
              <li><strong>Right to portability</strong> of your data in a machine-readable format</li>
            </ul>
            <p>
              We honor the <strong>Global Privacy Control (GPC)</strong> browser signal by automatically suppressing Vercel Web Analytics events. MindCheck Tools does not use Google Analytics or display advertising. Ordinary hosting and security processing still occurs to deliver and protect the site.
            </p>
            <p>
              <strong>We do not sell sensitive personal data.</strong> We also do not use consumer health data for targeted advertising or profiling.
            </p>
            <p>
              To exercise your MODPA rights, contact us at <strong>privacy@mindchecktools.com</strong>. We respond within 45 days.
            </p>
            <p>
              To exercise any GDPR rights, contact us at privacy@mindchecktools.com. We will respond within 30 days. For California privacy rights, see the dedicated section below.
            </p>
          </section>

          <section id="california-privacy" aria-labelledby="california-heading">
            <h2 id="california-heading">California Privacy Rights (CCPA/CPRA)</h2>

            <p>
              If you are a California resident, the California Consumer Privacy Act (CCPA) as amended
              by the California Privacy Rights Act (CPRA) grants you specific rights regarding your
              personal information. This section describes those rights and how to exercise them
              when the law applies, and the privacy controls we make available more broadly.
            </p>

            <h3>Information We Collect</h3>
            <p>In the past 12 months we have collected the following categories of personal information:</p>
            <ul>
              <li><strong>Identifiers:</strong> Email address if you voluntarily subscribe, plus IP address, browser type, and Vercel&apos;s short-lived daily visitor hash on allowlisted non-sensitive pages.</li>
              <li><strong>Internet or network activity:</strong> Requested paths, timestamps, response status, allowlisted cookie-free aggregate page data, and referring-site origin.</li>
            </ul>

            <h3>Sensitive Personal Information</h3>
            <p>
              As of January 1, 2026, California law defines an expanded category of sensitive personal
              information. <strong>MindCheck Tools does not intentionally collect screening answers,
              scores, or browser-local journal entries through its application servers.</strong> Sensitive
              information under CPRA includes precise geolocation data,
              racial or ethnic origin, religious beliefs, union membership, contents of private
              communications, genetic data, biometric data, health or medical information, or sexual
              orientation. Mental health screening responses entered into our tools are processed
              locally and are not intentionally sent to our servers or shared
              with any third party, including advertising systems. A local print or download that
              you deliberately create is controlled by your device and chosen services.
            </p>

            <h3>Data Minimization</h3>
            <p>
              We collect only the minimum personal information necessary to operate this service.
              We do not collect personal information beyond what is reasonably necessary and
              proportionate to the purposes disclosed in this policy.
            </p>

            <h3>How We Use Your Information</h3>
            <ul>
              <li>To analyze site traffic and improve user experience via analytics</li>
              <li>To maintain site security and prevent fraud</li>
              <li>To send occasional resource emails when a subscriber has expressly consented</li>
            </ul>
            <p>We do not sell your personal information and do not use consumer health data for cross-context behavioral advertising.</p>

            <h3>Your Rights as a California Resident</h3>
            <ul>
              <li><strong>Right to Know:</strong> You may request disclosure of the categories and specific pieces of personal information we have collected about you in the past 12 months.</li>
              <li><strong>Right to Delete:</strong> You may request deletion of personal information we have collected, subject to certain exceptions.</li>
              <li><strong>Right to Correct:</strong> You may request correction of inaccurate personal information we maintain about you.</li>
              <li><strong>Right to Opt-Out:</strong> You may opt out of the sale or sharing of your personal information. We do not sell personal information. You may also opt out via a Global Privacy Control (GPC) signal from your browser, which we honor automatically.</li>
              <li><strong>Right to Limit Use of Sensitive Information:</strong> You may direct us to limit our use and disclosure of sensitive personal information to purposes necessary to provide the service.</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of these rights.</li>
            </ul>

            <h3>Do Not Sell or Share My Personal Information</h3>
            <p>
              We do not sell personal information or use it for targeted advertising. You may use a
              <a href="https://globalprivacycontrol.org/" rel="noopener noreferrer">Global Privacy Control (GPC)</a>-enabled
              browser to suppress Vercel Web Analytics. MindCheck Tools does not use Google Analytics.
            </p>

            <h3>How to Submit a Request</h3>
            <p>To exercise your California privacy rights, contact us via the <a href="/contact">Contact page</a>. We will respond within 45 days. We may need to verify your identity before processing your request.</p>

            <h3>Data Retention</h3>
            <p>
              Screening responses are not retained because processing is client-side only. Browser-local
              journal and planning data remains on the device until the visitor deletes it. Analytics and
              server-log retention follow the periods described above and our configured service settings.
              Newsletter addresses are retained while subscribed or until no longer needed, subject to the
              limited provider records described above.
            </p>
          </section>

          <section id="state-privacy" aria-labelledby="state-heading">
            <h2 id="state-heading">Additional U.S. State Privacy Rights</h2>
            <p>
              U.S. state privacy laws have different coverage thresholds, exemptions, and request
              procedures. Where an applicable law gives you rights to access, correct, delete, or
              obtain a portable copy of personal data, or to opt out of sale, targeted advertising,
              or qualifying profiling, you may submit a request through the <Link href="/contact">Contact page</Link>
              or email privacy@mindchecktools.com. We will authenticate and respond within the period
              required by the applicable law.
            </p>
            <p>
              Regardless of location, MindCheck Tools does not use Google Analytics. We honor Global Privacy Control by
              suppressing Vercel Web Analytics events, do not sell personal information, and do not
              use consumer health data for targeted advertising.
            </p>
          </section>

          <section>
            <h2>Related policies</h2>
            <p>
              For more details, see our <Link href="/consumer-health-data-privacy">Consumer Health Data Privacy Notice</Link> (health-topic request and service data), <Link href="/cookies">Cookie Policy</Link> (browser storage and choices), and <Link href="/terms">Terms of Use</Link> (use limitations and legal terms).
            </p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>
              If we make material changes to this privacy policy, particularly if we begin collecting any data we do not currently collect, we will update the &quot;Last updated&quot; date at the top of this page. For significant changes, we will also add a notice on the homepage.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              If you have questions about this privacy policy or how our tools work, you can reach us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@mindchecktools.com
            </p>
          </section>

          {/* Final reassurance */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800">
            <p className="text-sm text-sage-700 dark:text-sage-400 leading-relaxed m-0">
              <strong>Our commitment:</strong> We built MindCheck Tools because we believe mental health screening should be free, private, and accessible. That mission only works if you trust us. We will always err on the side of collecting less data, not more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

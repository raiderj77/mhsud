import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/privacy",
  title: "Privacy Policy, How We Protect Your Data",
  description:
    "Your screening answers never leave your browser. No accounts, no login. Ads never access your responses. Full transparency.",
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
            Effective Date: January 1, 2026 | Last Reviewed: July 2026
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* The Hook */}
          <div className="card p-6 sm:p-8 border-sage-200 dark:border-sage-800">
            <h2 className="font-serif text-xl font-semibold text-sage-700 dark:text-sage-400 mt-0 mb-3">
              The short version
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>Your screening answers and scores never leave your browser.</strong> We do not collect or store them. You can use every tool without an account or email. If you separately choose to subscribe to resource emails, we collect only your email address for that purpose.
            </p>
          </div>

          {/* Detailed Sections */}
          <section>
            <h2>What data do we collect from the self-check tools?</h2>
            <p>
              <strong>None.</strong> All scoring and result calculations happen entirely in your browser using client-side JavaScript. Your responses to any questionnaire on this site, including the PHQ-9, GAD-7, AUDIT, and AUDIT-C, are processed locally on your device. No answer data is ever sent to our servers or any third-party server.
            </p>
            <p>
              We have deliberately built our tools this way because we believe that mental health screening should be private. There is no technical mechanism on this site that captures, logs, or transmits your questionnaire responses.
            </p>
          </section>

          <section>
            <h2>Do you use cookies?</h2>
            <p>
              We use a single <strong>localStorage</strong> entry to remember your dark mode preference (light or dark theme). This is stored only on your device and is never transmitted to us.
            </p>
            <p>
              The following third-party services may set cookies on this site:
            </p>
            <ul>
              <li><strong>Cookiebot</strong> (CBID: a9a99ccb-4863-4e33-a895-a6d5642f408d), our consent management platform. Stores your cookie consent preferences. Required for GDPR and CCPA compliance.</li>
              <li><strong>Google Analytics (GA4)</strong>, anonymized usage analytics. Measurement ID: G-XKHQN1NJ2Z.</li>
              <li><strong>Google AdSense</strong>, planned advertising provider. AdSense is not currently enabled because the site has not been approved to show ads.</li>
            </ul>
            <p>
              You can manage your cookie preferences at any time through the Cookiebot consent banner or your browser settings.
            </p>
          </section>

          <section>
            <h2>What data is collected through analytics and advertising?</h2>
            <p>
              Google Analytics (GA4), when you consent, may automatically collect the following categories of information through cookies and standard web protocols. Google AdSense is not currently enabled.
            </p>
            <ul>
              <li><strong>Device and browser information:</strong> browser type, operating system, screen resolution, device type</li>
              <li><strong>Network information:</strong> IP address (anonymized by GA4 by default), approximate geographic location (city/region level, not precise)</li>
              <li><strong>Usage data:</strong> pages visited, time on page, referral URLs, click interactions</li>
              <li><strong>Cookie identifiers:</strong> anonymous identifiers set by Google Analytics and Cookiebot (our consent management platform)</li>
            </ul>
            <p>
              <strong>None of this data includes your screening answers, scores, or results.</strong> Screening data never leaves your browser and is never accessible to analytics or advertising systems.
            </p>
            <p>
              You can opt out of Google Analytics by installing the <strong>Google Analytics Opt-out Browser Add-on</strong> (available at tools.google.com/dlpage/gaoptout) or by using a browser extension that blocks tracking scripts.
            </p>
            <p>
              <strong>Current status:</strong> Google Analytics (measurement ID: G-XKHQN1NJ2Z) is available only after consent. Google AdSense is disabled.
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
              <li><strong>Screening answers and scores:</strong> Not retained. Never leaves your browser. Deleted when you close or refresh the page.</li>
              <li><strong>Cookie consent preferences:</strong> 12 months (managed by Cookiebot, stored on your device).</li>
              <li><strong>Google Analytics data:</strong> 14 months (Google&apos;s default GA4 retention period), then automatically deleted.</li>
              <li><strong>Newsletter email address:</strong> Retained while you are subscribed or until it is no longer needed for the mailing list. You may unsubscribe from any email or request deletion at privacy@mindchecktools.com. Loops may retain limited suppression, security, backup, or legal records under its own obligations; we do not promise immediate deletion from every backup.</li>
              <li><strong>Contact emails:</strong> Retained only as long as necessary to respond to your inquiry, then deleted.</li>
              <li><strong>Dark mode preference:</strong> Stored in your browser&apos;s localStorage indefinitely until you clear browser data.</li>
            </ul>
          </section>

          <section>
            <h2>Advertising</h2>
            <p>
              Google AdSense (publisher ID: ca-pub-7171402107622932) is configured as a possible future advertising provider but is not currently enabled. We will update this notice if advertising is activated after approval.
            </p>
            <p>
              <strong>Health data is not passed to advertising systems.</strong> Your screening answers, scores, and results are processed entirely in your browser. If advertising is enabled in the future, MindCheck Tools will use non-personalized ads and require consent before advertising storage.
            </p>
            <p>
              Ads are never placed adjacent to crisis resources (988 Suicide &amp; Crisis Lifeline, Crisis Text Line, SAMHSA Helpline). We will never place ads in a way that exploits distress or interferes with access to help.
            </p>
            <p>
              You can opt out of personalized advertising by visiting{" "}
              <a href="https://ads.google.com/settings" target="_blank" rel="noopener noreferrer">
                Google Ad Settings
              </a>{" "}
              or the{" "}
              <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer">
                Digital Advertising Alliance opt-out portal
              </a>
              .
            </p>
          </section>

          <section>
            <h2>Reflection summaries</h2>
            <p>
              Our screening tools offer a &quot;Download Reflection Summary&quot; feature that generates a summary of your results as an HTML file. This summary is generated <strong>entirely in your browser</strong> using client-side JavaScript. MindCheck Tools does not receive, store, or transmit your answers, scores, or reflection summaries. The file is created locally on your device and saved directly to your downloads folder.
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
              Most tools are designed for adults; any youth-oriented tool identifies its intended age range. We do not knowingly collect email addresses from children under 13. Screening answers remain in the browser and are not collected. If you are a parent or guardian and believe a child submitted an email address, contact privacy@mindchecktools.com so we can address it.
            </p>
          </section>

          <section>
            <h2>Data security</h2>
            <p>
              Because we do not collect or store your questionnaire responses, there is no database of user answers to protect. Our site is served over HTTPS, and we follow standard security practices for web applications including security headers, content security policies, and regular dependency updates.
            </p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>
              Depending on where you live, you have specific rights regarding your personal data:
            </p>

            <h3>GDPR (EEA/UK residents)</h3>
            <p>
              Under the General Data Protection Regulation, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. We rely on consent obtained through our Cookiebot consent management platform before enabling analytics or advertising storage.
            </p>
            <p>
              <strong>GDPR Article 9, Special category data:</strong> Health data is classified as special category data under Article 9 of the GDPR. Screening results on MindCheck Tools are processed entirely in your browser and are not transmitted to our servers. Newsletter subscriptions are deliberately separated from tool names, answers, scores, diagnoses, and crisis information.
            </p>

            <h3>Washington My Health My Data Act (MHMDA)</h3>
            <p>
              Under Washington&apos;s My Health My Data Act, consumers have the right to know what health data is collected, the right to withdraw consent, and the right to have health data deleted. MindCheck Tools does not collect, store, or share health data, all screening results are processed client-side in your browser and are never transmitted to our servers or any third party.
            </p>

            <h3>Maryland Online Data Privacy Act (MODPA, enforcement effective April 1, 2026)</h3>
            <p>
              Maryland&apos;s MODPA is the strictest US state privacy law and applies to any site that processes data about Maryland residents. It requires data minimization (collect only what is <em>strictly</em> necessary, not merely reasonably necessary), an outright ban on the sale of sensitive data with no consent workaround, and mandatory honoring of the Global Privacy Control signal.
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
              We honor the <strong>Global Privacy Control (GPC)</strong> browser signal as a universal opt-out of targeted advertising, data sale, and data sharing. When your browser sends a GPC signal, we automatically suppress all non-essential cookies and data collection, you do not need to interact with a consent banner.
            </p>
            <p>
              <strong>We do not sell sensitive personal data under any circumstance.</strong> Sensitive data under MODPA includes health information, precise geolocation, racial or ethnic origin, religious beliefs, sexual orientation, citizenship status, genetic or biometric data, and personal data of known minors under 18. No consent can override this prohibition.
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
              personal information. This section describes those rights and how to exercise them.
              These rights are effective as of January 1, 2026.
            </p>

            <h3>Information We Collect</h3>
            <p>In the past 12 months we have collected the following categories of personal information:</p>
            <ul>
              <li><strong>Identifiers:</strong> Email address if you voluntarily subscribe, plus IP address, browser type, and device identifiers collected via analytics.</li>
              <li><strong>Internet or network activity:</strong> Pages visited, time on site, referring URLs.</li>
            </ul>

            <h3>Sensitive Personal Information</h3>
            <p>
              As of January 1, 2026, California law defines an expanded category of sensitive personal
              information. <strong>MindCheck Tools does not knowingly collect sensitive personal
              information</strong> as defined under CPRA, which includes: precise geolocation data,
              racial or ethnic origin, religious beliefs, union membership, contents of private
              communications, genetic data, biometric data, health or medical information, or sexual
              orientation. Mental health screening responses entered into our tools are processed
              entirely client-side and are never transmitted to our servers, stored, or shared with
              any third party including advertising systems.
            </p>

            <h3>Data Minimization</h3>
            <p>
              We collect only the minimum personal information necessary to operate this service.
              We do not collect personal information beyond what is reasonably necessary and
              proportionate to the purposes disclosed in this policy.
            </p>

            <h3>How We Use Your Information</h3>
            <ul>
              <li>To display non-personalized advertising through Google AdSense after approval and consent, if advertising is enabled in the future</li>
              <li>To analyze site traffic and improve user experience via analytics</li>
              <li>To maintain site security and prevent fraud</li>
              <li>To send occasional resource emails when a subscriber has expressly consented</li>
            </ul>
            <p>We do not sell your personal information. We do not share your personal information for cross-context behavioral advertising without your consent.</p>

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
              We do not sell personal information. To opt out of sharing for advertising purposes,
              you may use a <a href="https://globalprivacycontrol.org/" rel="noopener noreferrer">Global Privacy Control (GPC)</a>-enabled
              browser. Our Consent Management Platform (Cookiebot) also provides granular consent controls.
            </p>

            <h3>How to Submit a Request</h3>
            <p>To exercise your California privacy rights, contact us via the <a href="/contact">Contact page</a>. We will respond within 45 days. We may need to verify your identity before processing your request.</p>

            <h3>Data Retention</h3>
            <p>
              Screening responses are not retained because processing is client-side only. Analytics and
              server-log retention follow the periods described above and our configured service settings.
              Newsletter addresses are retained while subscribed or until no longer needed, subject to the
              limited provider records described above.
            </p>
          </section>

          <section id="state-privacy" aria-labelledby="state-heading">
            <h2 id="state-heading">Additional U.S. State Privacy Rights</h2>
            <p>
              Residents of the following states have privacy rights similar to California&apos;s CCPA/CPRA.
              To exercise your rights, contact us via the <Link href="/contact">Contact page</Link>.
              We will respond within the timeframe required by your state&apos;s law.
            </p>
            <table>
              <thead>
                <tr>
                  <th>State</th>
                  <th>Law</th>
                  <th>Effective</th>
                  <th>Key Rights</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Colorado</td><td>CPA</td><td>Jul 2023</td><td>Access, delete, correct, opt-out, portability</td></tr>
                <tr><td>Connecticut</td><td>CTDPA</td><td>Jul 2023</td><td>Access, delete, correct, opt-out, portability</td></tr>
                <tr><td>Virginia</td><td>VCDPA</td><td>Jan 2023</td><td>Access, delete, correct, opt-out</td></tr>
                <tr><td>Texas</td><td>TDPSA</td><td>Jul 2024</td><td>Access, delete, correct, opt-out</td></tr>
                <tr><td>Florida</td><td>FDBR</td><td>Jul 2024</td><td>Access, delete, correct, opt-out</td></tr>
                <tr><td>Montana</td><td>MTCPA</td><td>Oct 2024</td><td>Access, delete, correct, opt-out</td></tr>
                <tr><td>Oregon</td><td>OCPA</td><td>Jul 2024</td><td>Access, delete, correct, opt-out, portability</td></tr>
                <tr><td>Tennessee</td><td>TIPA</td><td>Jul 2025</td><td>Access, delete, correct, opt-out</td></tr>
                <tr><td>Minnesota</td><td>MNDPA</td><td>Jul 2025</td><td>Access, delete, correct, opt-out, portability</td></tr>
                <tr><td>Maryland</td><td>MODPA</td><td>Apr 2026</td><td>Access, delete, correct, opt-out, portability; bans sale of sensitive data; honors GPC</td></tr>
                <tr><td>Indiana</td><td>IDCPA</td><td>Jan 2026</td><td>Access, delete, correct, opt-out</td></tr>
                <tr><td>Kentucky</td><td>KYCPA</td><td>Jan 2026</td><td>Access, delete, correct, opt-out</td></tr>
                <tr><td>Rhode Island</td><td>RIDPA</td><td>Jan 2026</td><td>Access, delete, correct, opt-out</td></tr>
              </tbody>
            </table>
            <p className="mt-4">
              We honor Global Privacy Control (GPC) signals from all states that require it.
              We do not sell personal information to third parties. We do not engage in targeted
              advertising using sensitive personal information.
            </p>
          </section>

          <section>
            <h2>Related policies</h2>
            <p>
              For more details, see our <Link href="/cookies">Cookie Policy</Link> (what cookies we use, how to manage them) and <Link href="/terms">Terms of Use</Link> (legal disclaimers, GDPR rights, CCPA rights, limitation of liability).
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

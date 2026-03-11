import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/privacy",
  title: "Privacy Policy — How We Protect Your Data",
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
            Last updated: March 11, 2026
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* The Hook */}
          <div className="card p-6 sm:p-8 border-sage-200 dark:border-sage-800">
            <h2 className="font-serif text-xl font-semibold text-sage-700 dark:text-sage-400 mt-0 mb-3">
              The short version
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>Your answers never leave your browser.</strong> We don&apos;t collect them, store them, transmit them, or sell them. We have no accounts, no login, and no way to identify you. When you close the page, your responses are gone.
            </p>
          </div>

          {/* Detailed Sections */}
          <section>
            <h2>What data do we collect from the self-check tools?</h2>
            <p>
              <strong>None.</strong> All scoring and result calculations happen entirely in your browser using client-side JavaScript. Your responses to any questionnaire on this site — including the PHQ-9, GAD-7, AUDIT, and AUDIT-C — are processed locally on your device. No answer data is ever sent to our servers or any third-party server.
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
              <li><strong>Cookiebot</strong> (CBID: a9a99ccb-4863-4e33-a895-a6d5642f408d) — our consent management platform. Stores your cookie consent preferences. Required for GDPR and CCPA compliance.</li>
              <li><strong>Google Analytics (GA4)</strong> — anonymized usage analytics. Measurement ID: G-XKHQN1NJ2Z.</li>
              <li><strong>Google AdSense</strong> — advertising. On health screening pages, we use non-personalized ads that do not use behavioral targeting or health-related data for ad selection. Ads are never placed adjacent to crisis resources.</li>
            </ul>
            <p>
              You can manage your cookie preferences at any time through the Cookiebot consent banner or your browser settings.
            </p>
          </section>

          <section>
            <h2>What data is collected through analytics and advertising?</h2>
            <p>
              We use Google Analytics (GA4) and Google AdSense, which may automatically collect the following categories of information through cookies and standard web protocols:
            </p>
            <ul>
              <li><strong>Device and browser information:</strong> browser type, operating system, screen resolution, device type</li>
              <li><strong>Network information:</strong> IP address (anonymized by GA4 by default), approximate geographic location (city/region level, not precise)</li>
              <li><strong>Usage data:</strong> pages visited, time on page, referral URLs, click interactions</li>
              <li><strong>Cookie identifiers:</strong> anonymous identifiers set by Google Analytics, Google AdSense, and Cookiebot (our consent management platform)</li>
            </ul>
            <p>
              <strong>None of this data includes your screening answers, scores, or results.</strong> Screening data never leaves your browser and is never accessible to analytics or advertising systems.
            </p>
            <p>
              You can opt out of Google Analytics by installing the <strong>Google Analytics Opt-out Browser Add-on</strong> (available at tools.google.com/dlpage/gaoptout) or by using a browser extension that blocks tracking scripts.
            </p>
            <p>
              <strong>Current status:</strong> Google Analytics (measurement ID: G-XKHQN1NJ2Z) is active.
            </p>
          </section>

          <section>
            <h2>Do you collect personal information?</h2>
            <p>
              We do not require accounts, registration, email addresses, or any personal information to use our tools. If you contact us voluntarily (e.g., via email for feedback), we will receive whatever information you choose to share in that message. We will not use it for marketing or share it with third parties.
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
              <li><strong>Contact emails:</strong> Retained only as long as necessary to respond to your inquiry, then deleted.</li>
              <li><strong>Dark mode preference:</strong> Stored in your browser&apos;s localStorage indefinitely until you clear browser data.</li>
            </ul>
          </section>

          <section>
            <h2>Advertising</h2>
            <p>
              This site uses Google AdSense (publisher ID: ca-pub-7171402107622932) to display advertisements that support free access to all tools.
            </p>
            <p>
              <strong>Health data is never passed to advertising systems.</strong> Your screening answers, scores, and results are processed entirely in your browser and are never accessible to Google AdSense or any other advertising platform. On health screening pages, we use non-personalized ads that do not rely on behavioral profiling or health-related data for ad targeting.
            </p>
            <p>
              Ads are never placed adjacent to crisis resources (988 Suicide &amp; Crisis Lifeline, Crisis Text Line, SAMHSA Helpline). We will never place ads in a way that exploits distress or interferes with access to help.
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
          </section>

          <section>
            <h2>Children&apos;s privacy</h2>
            <p>
              Our tools are designed for adults. We do not knowingly collect any information from children under 13. Since we collect no personal data from any user, there is no mechanism through which we could inadvertently collect children&apos;s data through our tools. If you are a parent or guardian and have concerns, please contact us.
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

            <h3>CCPA/CPRA (California residents)</h3>
            <ul>
              <li><strong>Right to know:</strong> You can request the categories of personal information we collect and the purposes for which it is used.</li>
              <li><strong>Right to delete:</strong> You can request deletion of personal information we hold about you.</li>
              <li><strong>Right to correct:</strong> You can request correction of inaccurate personal information.</li>
              <li><strong>Right to opt out of sale or sharing:</strong> See the &quot;Do Not Sell or Share&quot; section below.</li>
              <li><strong>Right to limit use of sensitive personal information:</strong> We do not collect sensitive personal information as defined by the CCPA. Screening data is processed entirely in your browser and is never collected by us.</li>
              <li><strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising any of these rights.</li>
            </ul>

            <h3>CCPA sensitive data categories (effective January 2026)</h3>
            <p>
              The CCPA defines expanded sensitive data categories including mental and physical health information, biometric data, genetic data, precise geolocation, and citizenship or immigration status. <strong>We do not collect any of these categories.</strong> Mental health screening results are processed entirely in your browser and never transmitted to or stored on our servers. We do not collect biometric data, genetic data, precise geolocation, or citizenship/immigration information.
            </p>

            <h3>GDPR (EEA/UK residents)</h3>
            <p>
              Under the General Data Protection Regulation, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. Our lawful basis for processing analytics data is legitimate interest; for advertising cookies, we rely on consent obtained through our Cookiebot consent management platform.
            </p>
            <p>
              <strong>GDPR Article 9 — Special category data:</strong> Health data is classified as special category data under Article 9 of the GDPR, requiring explicit consent for processing. Because all screening results on MindCheck Tools are processed entirely in your browser and never transmitted to our servers, we do not process health data as a data controller. No health-related data is shared with third parties, including advertising systems.
            </p>

            <h3>Washington My Health My Data Act (MHMDA)</h3>
            <p>
              Under Washington&apos;s My Health My Data Act, consumers have the right to know what health data is collected, the right to withdraw consent, and the right to have health data deleted. MindCheck Tools does not collect, store, or share health data — all screening results are processed client-side in your browser and are never transmitted to our servers or any third party.
            </p>

            <h3>Maryland Online Data Privacy Act (MODPA — effective October 2025)</h3>
            <p>
              Maryland&apos;s MODPA prohibits the sale of health data and requires heightened protections for sensitive data. MindCheck Tools does not sell any personal data, including health data. Screening results are never collected, stored, or shared.
            </p>

            <p>
              To exercise any of these rights, contact us at privacy@mindchecktools.com. We will respond within 45 days (CCPA) or 30 days (GDPR).
            </p>
          </section>

          <section>
            <h2>Do Not Sell or Share My Personal Information</h2>
            <p>
              <strong>We do not sell or share your personal information</strong> as defined by the California Consumer Privacy Act (CCPA/CPRA). We do not sell screening data, analytics data, or any other personal information to third parties.
            </p>
            <p>
              Google AdSense may use cookies to serve ads based on your prior visits to this or other websites. This activity may constitute &quot;sharing&quot; under the CCPA. You can opt out by:
            </p>
            <ul>
              <li>Declining advertising cookies through our Cookiebot consent banner</li>
              <li>Enabling <strong>Global Privacy Control (GPC)</strong> in your browser — we honor GPC signals as a valid opt-out request under the CCPA</li>
              <li>Visiting <strong>Google&apos;s Ad Settings</strong> at adssettings.google.com to opt out of personalized advertising</li>
            </ul>
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
              If we make material changes to this privacy policy — particularly if we begin collecting any data we do not currently collect — we will update the &quot;Last updated&quot; date at the top of this page. For significant changes, we will also add a notice on the homepage.
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

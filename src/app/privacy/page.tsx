import type { Metadata } from "next";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/privacy",
  title: "Privacy Policy — How We Protect Your Data",
  description:
    "MindCheck Tools privacy policy. Your screening answers never leave your browser. No accounts, no login. We use analytics and may display ads, but they never access your responses. Full transparency.",
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
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
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
              We use a single <strong>localStorage</strong> entry to remember your dark mode preference (light or dark theme). This is stored only on your device and is never transmitted to us. We do not use tracking cookies, advertising cookies, or any third-party cookies for the purpose of identifying or profiling you.
            </p>
            <p>
              If we add advertising in the future, third-party ad networks may set their own cookies. We will update this policy before that happens and clearly disclose which ad partners are involved.
            </p>
          </section>

          <section>
            <h2>Do you use analytics?</h2>
            <p>
              We use Google Analytics (GA4) to understand general traffic patterns — which pages are visited, which countries visitors come from, and how people find our site. Google Analytics uses cookies and collects anonymized usage data. It does not have access to your screening answers (which never leave your browser).
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
            <h2>Advertising</h2>
            <p>
              Our site may display advertisements to support the cost of development and hosting. Ad placements are positioned away from crisis resources and emergency content. We will never place ads in a way that exploits distress or interferes with access to help.
            </p>
            <p>
              When ad networks are active, they may collect anonymized data according to their own privacy policies. We will list active ad partners here when applicable.
            </p>
            <p>
              <strong>Current status:</strong> No advertising is active at this time.
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

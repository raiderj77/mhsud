import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/terms",
  title: "Terms of Use",
  description:
    "Terms of use for MindCheck Tools. Disclaimers about our free mental health self-checks, your rights, and our limitations.",
  keywords: [
    "terms of use", "disclaimer", "mental health tool disclaimer",
    "not medical advice", "terms and conditions",
  ],
});

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Terms of Use", url: `${SITE_URL}/terms` }])) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">Terms of Use</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Last updated: September 2, 2026 (provider-status clarification)</p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Acceptance of terms</h2>
            <p>
              By accessing or using MindCheck Tools (&quot;the Site,&quot; located at mindchecktools.com), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the Site.
            </p>
          </section>

          <section>
            <h2>Not medical advice, critical disclaimer</h2>
            <p>
              <strong>MindCheck Tools does not provide medical advice, diagnoses, or treatment recommendations.</strong> All tools, questionnaires, screeners, checklists, and content on this Site are provided for educational and self-reflection purposes only.
            </p>
            <p>
              Some self-check pages implement published screening instruments, including the PHQ-9, GAD-7, AUDIT, and AUDIT-C. Other original tools are educational reflection exercises and are not presented as validated clinical screeners. Neither kind of tool provides a diagnosis. A qualified healthcare professional must evaluate an individual before offering a clinical diagnosis or treatment recommendation.
            </p>
            <p>
              <strong>Do not rely on any information on this Site as a substitute for professional medical advice, diagnosis, or treatment.</strong> Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical or mental health condition. Never disregard professional medical advice or delay in seeking it because of something you have read or scored on this Site.
            </p>
          </section>

          <section>
            <h2>No provider-patient relationship</h2>
            <p>
              Your use of MindCheck Tools does not create a provider-patient, therapist-client, or counselor-client relationship. MindCheck Tools is not a healthcare provider, mental health service, crisis service, or medical facility. Named contributors and reviewers provide editorial review within their stated scope; they do not provide individualized care through the Site.
            </p>
          </section>

          <section>
            <h2>Emergency situations</h2>
            <p>
              <strong>If you are experiencing a medical or mental health emergency, including thoughts of harming yourself or others, please call your local emergency number (911 in the US) or go to your nearest emergency room immediately.</strong>
            </p>
            <p>
              MindCheck Tools is not equipped to handle emergencies. Our <Link href="/crisis-resources">crisis resources page</Link> lists helplines and services, but we are not a crisis service and cannot provide immediate help.
            </p>
          </section>

          <section>
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by applicable law, MindCheck Tools, its owners, operators, and contributors shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of the Site, including but not limited to:
            </p>
            <p>
              Damages arising from reliance on any screening result, score, or information provided by the Site; damages arising from failure to seek professional medical advice; damages arising from any action taken or not taken based on content on this Site; or any loss or injury resulting from the use of crisis resource links or external referrals.
            </p>
            <p>
              The Site and all content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied.
            </p>
          </section>

          <section>
            <h2>Accuracy of information</h2>
            <p>
              We make reasonable efforts to ensure that the information on this Site is accurate and up to date. Published instruments are identified with their source, scoring reference, and known reuse terms or public-use status. Scoring ranges and interpretive language are checked against the cited publications or official materials.
            </p>
            <p>
              However, we cannot guarantee that all information is error-free. Research guidelines and clinical practices evolve. If you notice an error or have a concern about accuracy, please contact us at <strong>hello@mindchecktools.com</strong>.
            </p>
          </section>

          <section>
            <h2>Intellectual property</h2>
            <p>
              Rights and reuse terms differ among published instruments. Consult each tool&apos;s identified source and publisher terms before reproducing it. Original MindCheck Tools text, original educational tools, page designs, and visual elements are protected by applicable intellectual property laws.
            </p>
            <p>
              You may use our tools for personal, educational, or clinical purposes. You may not reproduce, redistribute, or commercially use our original content without written permission.
            </p>
          </section>

          <section>
            <h2>User responsibilities</h2>
            <p>
              You agree to use the Site for lawful purposes and in accordance with these Terms. If you are under the age of majority where you live, use youth-oriented material with a parent or guardian when required. Children under 13 must not send a contact message.
            </p>
            <p>
              You understand and agree that screening results are not diagnoses, and that you are solely responsible for any decisions you make based on information from this Site.
            </p>
          </section>

          <section>
            <h2>Privacy and data practices</h2>
            <p>
              Our <Link href="/privacy">Privacy Policy</Link>, <Link href="/consumer-health-data-privacy">Consumer Health Data Privacy Notice</Link>, and <Link href="/cookies">Cookie Policy</Link> describe how we handle data. In summary: questionnaire answers and scores are processed locally and are not intentionally sent to MindCheck Tools. Ordinary page requests can create hosting records. Prints, downloads, copies, device or browser sync, backups, and shared browser or device access are outside this boundary. Journaling, planning, recovery check-in, and sobriety tools may save entries in this browser when the page displays a local-storage notice. The site does not offer a newsletter signup. MindCheck Tools does not use Google Analytics or display advertising. When enabled for the production project, cookie-free Vercel Web Analytics is restricted to a positive allowlist of topic-neutral and professional pages, strips query strings and fragments, sends no custom events, and honors Global Privacy Control.
            </p>
          </section>

          <section>
            <h2>Your rights under GDPR (European Economic Area &amp; United Kingdom)</h2>
            <p>
              If you are located in the EEA or UK, you have rights under the General Data Protection Regulation (GDPR) including:
            </p>
            <p>
              <strong>Right to access:</strong> You can request information about what personal data we process. Screening answers and scores are processed locally and are not intentionally sent to MindCheck Tools. The site does not offer a newsletter signup or require an account.
            </p>
            <p>
              <strong>Right to erasure:</strong> You can ask us to delete eligible personal information we hold by contacting privacy@mindchecktools.com. You can clear browser-local tool data through the tool&apos;s reset control or your browser settings. Legal, security, and technical exceptions may apply.
            </p>
            <p>
              <strong>Right to object:</strong> You may object to eligible processing by contacting us. Global Privacy Control suppresses any enabled Vercel Web Analytics, and browser controls can block or clear site storage. There is no analytics consent banner; the <Link href="/cookies">Cookie Policy</Link> describes the actual browser-storage and measurement boundary.
            </p>
            <p>
              <strong>Right to lodge a complaint:</strong> You have the right to lodge a complaint with your local Data Protection Authority if you believe your data rights have been violated.
            </p>
            <p>
              <strong>Data controller:</strong> MindCheck Tools (mindchecktools.com). Contact: <strong>privacy@mindchecktools.com</strong>.
            </p>
            <p>
              <strong>Legal basis for processing:</strong> Where GDPR applies, we rely on legitimate interests for site delivery, security, and limited aggregate measurement, and on your request or another applicable lawful basis for information you voluntarily send.
            </p>
          </section>

          <section>
            <h2>Your rights under CCPA/CPRA (California)</h2>
            <p>
              If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) provide you with specific rights including:
            </p>
            <p>
              <strong>Right to know:</strong> You can request information about what personal information we collect, use, and disclose. Our data practices are described in our <Link href="/privacy">Privacy Policy</Link> and <Link href="/cookies">Cookie Policy</Link>.
            </p>
            <p>
              <strong>Right to delete:</strong> The questionnaire code is not configured to submit screening answers to a MindCheck Tools application database. Clearing cookies and localStorage removes browser-held preferences and any locally saved journal, plan, check-in, or sobriety data. Contact privacy@mindchecktools.com to request deletion of eligible personal information we hold.
            </p>
            <p>
              <strong>Right to opt out of sale/sharing:</strong> We do not sell personal information or use it for targeted advertising. MindCheck Tools does not display ads or use Google Analytics. We honor Global Privacy Control (GPC) by suppressing any enabled Vercel Web Analytics events; ordinary hosting and security processing still occurs.
            </p>
            <p>
              <strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising your CCPA/CPRA rights. All tools remain fully functional when Global Privacy Control is active.
            </p>
            <p>
              To exercise any rights, contact: <strong>privacy@mindchecktools.com</strong>.
            </p>
          </section>

          <section id="do-not-sell">
            <h2>Do Not Sell or Share My Personal Information</h2>
            <p>
              MindCheck Tools does not sell your personal information or use it for targeted advertising. Display advertising and Google Analytics are absent. Read our <Link href="/cookies">Cookie Policy</Link> for the cookie-free aggregate measurement boundary and browser controls. We honor the Global Privacy Control (GPC) signal. Contact us to exercise applicable privacy rights.
            </p>
          </section>

          <section>
            <h2>Third-party links and resources</h2>
            <p>
              This Site contains links to external websites and crisis resources. We are not responsible for the content, privacy practices, or availability of these external sites. Links are provided as a convenience and do not constitute an endorsement.
            </p>
          </section>

          <section>
            <h2>Changes to these terms</h2>
            <p>
              We may update these Terms of Use from time to time. Material changes will be reflected in the &quot;Last updated&quot; date at the top of this page. Your continued use of the Site after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2>Governing law</h2>
            <p>
              These Terms of Use are governed by and construed in accordance with the laws of the State of California, United States, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              For questions about these Terms of Use, contact us at:
            </p>
            <p>
              <strong>Email:</strong> hello@mindchecktools.com<br />
              <strong>Privacy inquiries:</strong> privacy@mindchecktools.com
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/terms",
  title: "Terms of Use — MindCheck Tools",
  description:
    "Terms of use for MindCheck Tools. Important disclaimers about our mental health self-check tools, your rights, our limitations, and applicable privacy regulations.",
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
          <p className="text-sm text-neutral-400 dark:text-neutral-500">Last updated: February 17, 2026</p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Acceptance of terms</h2>
            <p>
              By accessing or using MindCheck Tools (&quot;the Site,&quot; located at mindchecktools.com), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use the Site.
            </p>
          </section>

          <section>
            <h2>Not medical advice — critical disclaimer</h2>
            <p>
              <strong>MindCheck Tools does not provide medical advice, diagnoses, or treatment recommendations.</strong> All tools, questionnaires, screeners, checklists, and content on this Site are provided for educational and self-reflection purposes only.
            </p>
            <p>
              The self-check tools on this Site — including the PHQ-9, GAD-7, AUDIT, AUDIT-C, and all original tools — are screening instruments. A screening result is not the same as a clinical diagnosis. Only a qualified healthcare professional (such as a physician, psychiatrist, psychologist, or licensed clinical social worker) can diagnose a mental health condition or substance use disorder.
            </p>
            <p>
              <strong>Do not rely on any information on this Site as a substitute for professional medical advice, diagnosis, or treatment.</strong> Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding a medical or mental health condition. Never disregard professional medical advice or delay in seeking it because of something you have read or scored on this Site.
            </p>
          </section>

          <section>
            <h2>No provider-patient relationship</h2>
            <p>
              Your use of MindCheck Tools does not create a provider-patient, therapist-client, or counselor-client relationship. MindCheck Tools is not a healthcare provider, mental health service, crisis service, or medical facility. We do not employ or contract with physicians, therapists, or counselors.
            </p>
          </section>

          <section>
            <h2>Emergency situations</h2>
            <p>
              <strong>If you are experiencing a medical or mental health emergency — including thoughts of harming yourself or others — please call your local emergency number (911 in the US) or go to your nearest emergency room immediately.</strong>
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
              We make reasonable efforts to ensure that the information on this Site is accurate and up to date. The PHQ-9, GAD-7, and AUDIT/AUDIT-C questionnaires are reproduced from their public-domain source materials. Scoring ranges and interpretive language are based on published clinical research.
            </p>
            <p>
              However, we cannot guarantee that all information is error-free. Research guidelines and clinical practices evolve. If you notice an error or have a concern about accuracy, please contact us at <strong>hello@mindchecktools.com</strong>.
            </p>
          </section>

          <section>
            <h2>Intellectual property</h2>
            <p>
              The PHQ-9, GAD-7, and AUDIT/AUDIT-C instruments are in the public domain and may be used freely. All original content on this Site — including original tools (Work Stress &amp; Burnout, Mental Load Calculator, Sleep &amp; Mood Reflection), article text, page designs, and visual elements — is the property of MindCheck Tools and is protected by applicable intellectual property laws.
            </p>
            <p>
              You may use our tools for personal, educational, or clinical purposes. You may not reproduce, redistribute, or commercially use our original content without written permission.
            </p>
          </section>

          <section>
            <h2>User responsibilities</h2>
            <p>
              By using this Site, you represent that you are at least 18 years old (or the age of majority in your jurisdiction). You agree to use the Site for lawful purposes only and in accordance with these Terms.
            </p>
            <p>
              You understand and agree that screening results are not diagnoses, and that you are solely responsible for any decisions you make based on information from this Site.
            </p>
          </section>

          <section>
            <h2>Privacy and data practices</h2>
            <p>
              Our <Link href="/privacy">Privacy Policy</Link> and <Link href="/cookies">Cookie Policy</Link> describe how we handle data. In summary: your screening answers are processed entirely in your browser and never transmitted to any server. We use Google Analytics (with Consent Mode v2) for page-level analytics. We may display advertising in the future.
            </p>
          </section>

          <section>
            <h2>Your rights under GDPR (European Economic Area &amp; United Kingdom)</h2>
            <p>
              If you are located in the EEA or UK, you have rights under the General Data Protection Regulation (GDPR) including:
            </p>
            <p>
              <strong>Right to access:</strong> You can request information about what personal data we process. Since we do not collect personal data through our tools (screening answers stay in your browser), there is typically nothing to provide. Google Analytics processes anonymized data on our behalf.
            </p>
            <p>
              <strong>Right to erasure:</strong> You can request deletion of your personal data. Since we don&apos;t store personal data, you can clear cookies through your browser and use our cookie consent controls to withdraw consent. 
            </p>
            <p>
              <strong>Right to object / withdraw consent:</strong> You can withdraw cookie consent at any time through our cookie banner or the <Link href="/cookies">Cookie Policy</Link> page.
            </p>
            <p>
              <strong>Right to lodge a complaint:</strong> You have the right to lodge a complaint with your local Data Protection Authority if you believe your data rights have been violated.
            </p>
            <p>
              <strong>Data controller:</strong> MindCheck Tools (mindchecktools.com). Contact: <strong>privacy@mindchecktools.com</strong>.
            </p>
            <p>
              <strong>Legal basis for processing:</strong> Consent (for analytics and advertising cookies). Legitimate interest (for essential site functionality).
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
              <strong>Right to delete:</strong> You can request deletion of your personal information. Since we do not store personal information from tools, clearing your browser cookies and localStorage is sufficient.
            </p>
            <p>
              <strong>Right to opt out of sale/sharing:</strong> We do not &quot;sell&quot; personal information in the traditional sense. However, certain cookie-based analytics or advertising data may constitute &quot;sharing&quot; under the CPRA. You can opt out via our cookie banner or by using a browser that sends the Global Privacy Control (GPC) signal. We honor GPC signals.
            </p>
            <p>
              <strong>Right to non-discrimination:</strong> We will not discriminate against you for exercising your CCPA/CPRA rights. All tools remain fully functional regardless of your cookie preferences.
            </p>
            <p>
              To exercise any rights, contact: <strong>privacy@mindchecktools.com</strong>.
            </p>
          </section>

          <section id="do-not-sell">
            <h2>Do Not Sell or Share My Personal Information</h2>
            <p>
              In accordance with the CCPA/CPRA, we provide this notice: MindCheck Tools does not sell your personal information. If analytics or advertising cookies constitute &quot;sharing&quot; under applicable law, you may opt out via our cookie consent banner, our <Link href="/cookies">Cookie Policy</Link>, or by enabling the Global Privacy Control (GPC) in your browser. We honor GPC signals.
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

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/disclaimer",
  title: "Disclaimer — Not a Substitute for Professional Care",
  description:
    "MindCheck Tools provides free screening tools for educational purposes only. Results are not a diagnosis. Always consult a qualified professional.",
});

export default function DisclaimerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Disclaimer", url: `${SITE_URL}/disclaimer` },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Disclaimer
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Key message */}
          <div className="card p-6 sm:p-8 border-sage-200 dark:border-sage-800">
            <h2 className="font-serif text-xl font-semibold text-sage-700 dark:text-sage-400 mt-0 mb-3">
              Important
            </h2>
            <p className="text-lg leading-relaxed">
              <strong>The tools on this site are screening instruments, not diagnostic tools.</strong> They are provided for educational and informational purposes only. Results should never be used as a substitute for professional evaluation, advice, or care from a qualified healthcare provider.
            </p>
          </div>

          <section>
            <h2>Not a medical or clinical service</h2>
            <p>
              MindCheck Tools is not a healthcare provider, licensed counselor, therapist, or medical professional. The self-check tools available on this site — including the PHQ-9, GAD-7, AUDIT, AUDIT-C, Sleep &amp; Mood Check, Mental Load Calculator, and Burnout Assessment — are validated screening instruments adapted for self-administration. They are designed to help you reflect on your experiences and decide whether to seek professional support.
            </p>
            <p>
              <strong>No tool on this site can provide a diagnosis.</strong> Only a qualified mental health professional or healthcare provider can assess, evaluate, and offer a clinical opinion about your mental health or substance use.
            </p>
          </section>

          <section>
            <h2>Screening results are informational</h2>
            <p>
              The scores and interpretive ranges displayed after completing a screening are based on published clinical thresholds from peer-reviewed research. However, these thresholds were developed for use in clinical settings with professional oversight. When used for self-screening:
            </p>
            <ul>
              <li>Results may indicate areas worth discussing with a professional</li>
              <li>A low score does not guarantee the absence of a condition</li>
              <li>A high score does not confirm the presence of a condition</li>
              <li>Many factors — including how you feel on a given day — can influence your responses</li>
            </ul>
          </section>

          <section>
            <h2>No professional-client relationship</h2>
            <p>
              Using any tool on this site does not create a therapeutic, counseling, medical, or professional-client relationship between you and MindCheck Tools, its contributors, or its reviewers. The clinical reviewer credited on blog content provides editorial oversight for accuracy but is not providing individual clinical services through this website.
            </p>
          </section>

          <section>
            <h2>Crisis and emergency situations</h2>
            <p>
              <strong>If you are in crisis or experiencing a mental health emergency, do not rely on this website.</strong> Contact emergency services or a crisis resource immediately:
            </p>
            <ul>
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> (available 24/7)</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
              <li><strong>Emergency services:</strong> Call <strong>911</strong></li>
            </ul>
          </section>

          <section>
            <h2>Accuracy and completeness</h2>
            <p>
              We make every effort to ensure the information on this site is accurate, current, and reviewed by qualified professionals. However, we do not warrant that the content is free of errors, complete, or up to date at all times. Mental health research evolves, clinical guidelines change, and individual circumstances vary widely. Always verify information with a qualified professional.
            </p>
          </section>

          <section>
            <h2>Third-party resources</h2>
            <p>
              This site links to external resources including crisis hotlines, government agencies, and professional organizations. We are not responsible for the content, accuracy, or availability of these external sites. Inclusion of a link does not imply endorsement of all content on that site.
            </p>
          </section>

          <section>
            <h2>Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, MindCheck Tools and its contributors shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of, or inability to use, the tools or information provided on this site. This includes, but is not limited to, any decisions made or actions taken based on screening results.
            </p>
          </section>

          <section>
            <h2>Your responsibility</h2>
            <p>
              By using this site, you acknowledge that:
            </p>
            <ul>
              <li>You are using these tools voluntarily and for personal informational purposes</li>
              <li>You understand that results are not a diagnosis or professional recommendation</li>
              <li>You will seek professional help if your results or experiences concern you</li>
              <li>You will contact emergency services if you are in immediate danger</li>
            </ul>
          </section>

          <section>
            <h2>Related policies</h2>
            <p>
              For information about how we handle your data, see our{" "}
              <Link href="/privacy">Privacy Policy</Link>. For terms governing your use of the site, see our{" "}
              <Link href="/terms">Terms of Use</Link>. For details about cookies, see our{" "}
              <Link href="/cookies">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              If you have questions about this disclaimer, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@mindchecktools.com
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800">
            <p className="text-sm text-sage-700 dark:text-sage-400 leading-relaxed m-0">
              <strong>Our mission:</strong> MindCheck Tools exists to make mental health screening free, private, and accessible. We encourage everyone to use these tools as a starting point — not an endpoint — in understanding their well-being.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

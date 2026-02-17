import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/about",
  title: "About MindCheck Tools — Our Mission & Approach",
  description:
    "MindCheck Tools provides free, private, evidence-based mental health self-checks. Learn about our mission, how our tools work, and why privacy and clinical accuracy matter to us.",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "About", url: `${SITE_URL}/about` },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            About MindCheck Tools
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl">
            Free, private mental health self-checks — built with clinical care and radical transparency.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Mission */}
          <section>
            <h2>Why we built this</h2>
            <p>
              Millions of people search for mental health and substance use screening tools every month. What they typically find are outdated PDFs, cluttered quiz sites harvesting email addresses, or tools buried behind institutional logins.
            </p>
            <p>
              We believe that the first step toward getting help — honestly reflecting on how you&apos;re feeling — should not require creating an account, handing over personal data, or wading through ads placed next to crisis hotline numbers.
            </p>
            <p>
              MindCheck Tools was created to offer a better experience: validated screening instruments presented clearly, with strong disclaimers, clinical context, and absolute privacy. Every answer you give stays in your browser. Period.
            </p>
          </section>

          {/* Approach */}
          <section>
            <h2>Our approach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
              {[
                {
                  title: "Evidence-based tools",
                  text: "Our core screeners — the PHQ-9, GAD-7, AUDIT, and AUDIT-C — are validated instruments used by clinicians worldwide. They are in the public domain or free to use without licensing fees.",
                },
                {
                  title: "Privacy by architecture",
                  text: "All scoring runs in client-side JavaScript. There is no server-side processing of your answers, no database, and no way for us to access your responses. This is a design choice, not just a policy.",
                },
                {
                  title: "Education, not diagnosis",
                  text: "Every tool includes prominent disclaimers, explains what scores can and cannot tell you, and encourages professional follow-up. We never use diagnostic labels in our results.",
                },
                {
                  title: "Responsible advertising",
                  text: "We keep ad density low and never place ads near crisis resources, emergency text, or acknowledgment checkboxes. Sustainability matters, but not at the cost of user trust.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2 text-base">{item.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed m-0">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What we are not */}
          <section>
            <h2>What we are not</h2>
            <p>
              MindCheck Tools is <strong>not a healthcare provider</strong>, not a crisis service, and not a substitute for professional evaluation or treatment. Our tools are screening instruments — they help you reflect on symptoms and decide whether to seek professional help. They do not diagnose conditions, prescribe treatments, or provide clinical advice.
            </p>
            <p>
              If you are in crisis or immediate danger, please contact your local emergency number, call or text <strong>988</strong> (US Suicide &amp; Crisis Lifeline), or visit <strong>findahelpline.com</strong> for international resources.
            </p>
          </section>

          {/* Tools */}
          <section>
            <h2>Our tools</h2>
            <div className="not-prose space-y-3 my-6">
              {[
                {
                  name: "PHQ-9 Depression Self-Check",
                  href: "/phq-9-depression-test",
                  detail: "9 questions · Scores 0–27 · Developed by Drs. Spitzer, Williams & Kroenke · Public domain",
                },
                {
                  name: "GAD-7 Anxiety Self-Check",
                  href: "/gad-7-anxiety-test",
                  detail: "7 questions · Scores 0–21 · Developed by Drs. Spitzer, Kroenke, Williams & Löwe · Free to use",
                },
                {
                  name: "AUDIT Alcohol Use Screen",
                  href: "/audit-alcohol-test",
                  detail: "10 questions · Scores 0–40 · Developed by the World Health Organization · Public domain",
                },
                {
                  name: "AUDIT-C Quick Alcohol Screen",
                  href: "/audit-c-alcohol-screen",
                  detail: "3 questions · Scores 0–12 · Derived from the WHO AUDIT · Public domain",
                },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} className="card p-4 block hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="font-semibold text-sage-600 dark:text-sage-400 mb-1">{tool.name}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">{tool.detail}</p>
                </Link>
              ))}
            </div>
            <p>
              Additional tools — including original, non-proprietary self-reflection instruments for work stress, sleep, and substance use — are in development.
            </p>
          </section>

          {/* For Clinicians */}
          <section>
            <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose">
              <h2 className="font-serif text-xl font-semibold text-sage-700 dark:text-sage-400 mb-3">For clinicians and health educators</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                You are welcome to share MindCheck Tools with clients, patients, and students. Our tools use the official wording of public-domain instruments with proper attribution, include mandatory disclaimer acknowledgments, and process all data client-side.
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                We are not affiliated with the original instrument developers, and our tools are not intended to replace clinical administration of these screeners. They are designed as a low-barrier entry point for people who are not yet in care or who want to reflect privately before a conversation with a provider.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Questions or feedback? Reach us at <strong>hello@mindchecktools.com</strong>.
              </p>
            </div>
          </section>

          {/* Open Source */}
          <section>
            <h2>Transparency</h2>
            <p>
              We believe in building trust through transparency. If you want to verify that our tools process data only in your browser, you are welcome to inspect the source code — all scoring logic runs in client-side JavaScript that is visible in your browser&apos;s developer tools. Our codebase is open source and available on GitHub.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2>Contact us</h2>
            <p>
              For general inquiries: <strong>hello@mindchecktools.com</strong>
            </p>
            <p>
              For privacy concerns: <strong>privacy@mindchecktools.com</strong>
            </p>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-4">
              Please note: we cannot provide mental health advice, clinical recommendations, or crisis support via email. If you need immediate help, please use the crisis resources listed on our tools or call your local emergency number.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

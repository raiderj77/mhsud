import type { Metadata } from "next";
import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import {
  breadcrumbJsonLd,
  createMetadata,
  faqJsonLd,
  medicalWebPageJsonLd,
  SITE_URL,
} from "@/lib/metadata";

const PAGE_PATH = "/spin-social-anxiety-test";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const APTA_SPIN_URL =
  "https://www.apta.org/patient-care/evidence-based-practice-resources/test-measures/social-phobia-inventory-spin";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "SPIN Social Anxiety Information and Licensing Boundary",
  description:
    "Educational information about the Social Phobia Inventory (SPIN), why MindCheck Tools does not administer or score it publicly, and non-equivalent options.",
  keywords: [
    "SPIN information",
    "Social Phobia Inventory licensing",
    "social anxiety education",
    "SPIN public use",
    "social anxiety screening options",
  ],
  openGraph: {
    title: "SPIN Social Anxiety Information and Licensing Boundary",
    description:
      "Why this site provides SPIN information without a public questionnaire, scoring, or automated interpretation.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the SPIN?",
    answer:
      "The Social Phobia Inventory (SPIN) is a published self-report measure developed to assess social-anxiety symptoms. It is a screening and severity measure, not a diagnosis.",
  },
  {
    question: "Can I take the SPIN on MindCheck Tools?",
    answer:
      "No. The current rights information directs users to the copyright holder for permission and a possible user fee. MindCheck Tools has not archived a licence for public electronic administration, so this page does not display questions, collect answers, calculate a score, or return an interpretation.",
  },
  {
    question: "Why does this page not explain SPIN scores or cutoffs?",
    answer:
      "Scoring and interpretation are part of the licensed instrument journey. They are intentionally omitted while public electronic reproduction rights and qualified clinical review remain unresolved.",
  },
  {
    question: "Are the GAD-7 or PHQ-4 equivalent to the SPIN?",
    answer:
      "No. They focus on generalized anxiety and broader depression-and-anxiety symptoms rather than social anxiety specifically. They are linked only as separately validated, publicly permitted options and cannot be compared score-for-score with the SPIN.",
  },
  {
    question: "Can this page diagnose social anxiety disorder?",
    answer:
      "No. This page is educational and does not assess you. A qualified healthcare professional can evaluate symptoms, duration, impairment, medical factors, and other possible explanations.",
  },
];

const ALTERNATIVES = [
  {
    href: "/gad-7-anxiety-test",
    name: "GAD-7 Anxiety Self-Check",
    description:
      "A publicly permitted screen for generalized anxiety symptoms. It is not specific to social anxiety and is not a SPIN substitute.",
  },
  {
    href: "/phq-4-anxiety-depression-screen",
    name: "PHQ-4 Quick Screen",
    description:
      "A brief, publicly permitted screen covering depression and generalized anxiety symptoms. It does not measure the same construct as the SPIN.",
  },
];

export default function SpinInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "SPIN Social Anxiety Information and Licensing Boundary",
              description:
                "Educational information about the SPIN and the permission boundary for public electronic administration.",
              url: PAGE_URL,
              lastReviewed: "2026-08-02",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "SPIN Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-wrap gap-2 mb-5" aria-label="Page status">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">
            Educational information
          </span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">
            No questionnaire
          </span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">
            No scoring
          </span>
        </div>

        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          SPIN Social Anxiety Information and Licensing Boundary
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          MindCheck Tools does not administer, score, or interpret the Social Phobia Inventory on this public website. This page explains the evidence and rights boundary without reproducing the instrument.
        </p>

        <AnswerBlock
          what="An educational overview of the Social Phobia Inventory and the current permission requirement for public electronic use."
          who="People seeking reliable SPIN information or a separately permitted anxiety self-check."
          bottomLine="This page does not provide a SPIN questionnaire or result. GAD-7 and PHQ-4 are different instruments, not equivalent replacements, and no self-check can diagnose social anxiety disorder."
          lastUpdated="2026-08-05"
        />

        <section className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6" aria-labelledby="spin-rights-boundary">
          <h2 id="spin-rights-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">
            Why the public self-check is unavailable
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              The American Physical Therapy Association&apos;s current SPIN record says users should contact the copyright holder for permission and a user fee. MindCheck Tools does not have an archived licence covering a public consumer website, electronic administration, scoring, or results.
            </p>
            <p>
              Public access to this educational page remains available, but the questionnaire, answer capture, scoring keys, cutoffs, severity bands, and automated interpretation are not provided.
            </p>
            <a href={APTA_SPIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
              Review APTA&apos;s SPIN rights and cost record
            </a>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="about-spin">
          <h2 id="about-spin" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What the SPIN was developed to assess
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              Connor and colleagues introduced the SPIN as a self-report measure of social-anxiety symptoms. The validation study supports its use as a clinical and research measure, but a questionnaire result alone cannot establish a diagnosis.
            </p>
            <p>
              Social anxiety can involve persistent fear of scrutiny, avoidance, physical distress, and disruption to school, work, relationships, or daily activities. A clinician can consider those experiences alongside duration, context, other health conditions, and possible alternative explanations.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="spin-alternatives">
          <h2 id="spin-alternatives" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Separately permitted, non-equivalent options
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            These self-checks measure different symptom patterns. They do not reproduce the SPIN and should not be used to estimate or translate a SPIN result.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {ALTERNATIVES.map((alternative) => (
              <Link key={alternative.href} href={alternative.href} className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">{alternative.name}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{alternative.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5" aria-labelledby="spin-privacy">
          <h2 id="spin-privacy" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            No-input privacy boundary
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            This informational page has no form and asks for no symptoms, answers, or score. It calculates no personal result. Review the <Link href="/privacy" className="font-semibold underline">privacy policy</Link> before using any linked self-check, especially on a shared device.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5" aria-labelledby="spin-help">
          <h2 id="spin-help" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">
            If anxiety feels overwhelming or unsafe
          </h2>
          <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
            This page cannot assess an emergency. In the United States, call or text 988 for the Suicide &amp; Crisis Lifeline, or call 911 for immediate danger. Outside the United States, use local emergency or crisis services.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg bg-crisis-700 px-4 py-2 text-sm font-semibold text-white hover:bg-crisis-800">Call 988</a>
            <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Text 988</a>
            <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 911</a>
            <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">View U.S. and international crisis resources</Link>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="spin-sources">
          <h2 id="spin-sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources</h2>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              American Physical Therapy Association. <a href={APTA_SPIN_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">Social Phobia Inventory record</a>, including the direction to contact the copyright holder for permission and a user fee.
            </li>
            <li>
              Connor, K. M., et al. (2000). Psychometric properties of the Social Phobia Inventory. <a href="https://pubmed.ncbi.nlm.nih.gov/10827888/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">PubMed PMID 10827888</a>.
            </li>
            <li>
              National Institute of Mental Health. <a href="https://www.nimh.nih.gov/health/publications/social-anxiety-disorder-more-than-just-shyness" target="_blank" rel="noopener noreferrer" className="font-semibold underline">Social Anxiety Disorder: More Than Just Shyness</a>.
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <ToolReviewerBio lastReviewed="August 2, 2026" />
        </div>

        <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="spin-faq">
          <h2 id="spin-faq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {FAQ_DATA.map((entry) => (
              <div key={entry.question}>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{entry.question}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{entry.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

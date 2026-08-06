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

const PAGE_PATH = "/dass-21-depression-anxiety-stress";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const DASS_FAQ_URL = "https://dass.psy.unsw.edu.au/DASSFAQ.htm";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "DASS-21 Information and Public-Use Boundary",
  description:
    "Educational information about the DASS-21, why MindCheck Tools does not administer or score it publicly, and non-equivalent screening alternatives.",
  keywords: [
    "DASS-21 information",
    "DASS-21 public use",
    "DASS-21 licensing",
    "depression anxiety stress scales",
    "PHQ-4 PHQ-9 GAD-7 alternatives",
  ],
  openGraph: {
    title: "DASS-21 Information and Public-Use Boundary",
    description:
      "Why this site provides DASS-21 information without a public questionnaire, scoring, or automated interpretation.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the DASS-21?",
    answer:
      "The DASS-21 is a shortened form of the Depression Anxiety Stress Scales. It measures three related symptom dimensions for research and appropriately supervised assessment. It is not a diagnostic instrument.",
  },
  {
    question: "Can I take the DASS-21 on MindCheck Tools?",
    answer:
      "No. The current official DASS guidance says a website or app open to the public may not administer the instrument. MindCheck Tools therefore provides educational information only and does not collect answers, calculate scores, or return DASS interpretations.",
  },
  {
    question: "Why does this page not show DASS-21 scoring or severity results?",
    answer:
      "The official guidance says computed scores should not be returned directly to respondents and warns that automated interpretation may be misleading or unsafe. This page follows that boundary.",
  },
  {
    question: "Are the PHQ-4, PHQ-9, and GAD-7 equivalent to the DASS-21?",
    answer:
      "No. They measure different constructs, use different timeframes and scoring systems, and should not be compared score-for-score. MindCheck Tools links them only as separately validated, publicly permitted screening options for specific depression or anxiety concerns.",
  },
  {
    question: "Can this information diagnose depression, anxiety, or a stress disorder?",
    answer:
      "No. This page is educational. Only an appropriately qualified healthcare professional can evaluate symptoms in context and make a diagnosis.",
  },
];

const ALTERNATIVES = [
  {
    href: "/phq-4-anxiety-depression-screen",
    name: "PHQ-4 Quick Screen",
    description:
      "A four-item combined depression-and-anxiety symptom screener. It is brief, but it is not a DASS-21 substitute and does not reproduce the DASS stress construct.",
  },
  {
    href: "/phq-9-depression-test",
    name: "PHQ-9 Depression Self-Check",
    description:
      "A nine-item screener focused on depressive symptoms. It does not measure generalized anxiety or the DASS stress subscale.",
  },
  {
    href: "/gad-7-anxiety-test",
    name: "GAD-7 Anxiety Self-Check",
    description:
      "A seven-item screener focused on generalized anxiety symptoms. It is not interchangeable with a DASS-21 anxiety score.",
  },
];

export default function DASS21InformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "DASS-21 Information and Public-Use Boundary",
              description:
                "Educational information about the DASS-21 and the official boundary against public online administration and automated respondent interpretation.",
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
              { name: "DASS-21 Information", url: PAGE_URL },
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
          DASS-21 Information and Public-Use Boundary
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          MindCheck Tools does not administer, score, or interpret the DASS-21 on this public website. This page explains why and offers separately validated screening options for specific depression or anxiety concerns.
        </p>

        <AnswerBlock
          what="An educational overview of the DASS-21 and the official limits on public website administration and automated respondent interpretation."
          who="People looking for accurate information about the DASS-21 or an appropriately licensed alternative self-check."
          bottomLine="This page does not provide a DASS questionnaire or result. PHQ-4, PHQ-9, and GAD-7 are separate instruments, not equivalent replacements. No page result can provide a diagnosis."
          lastUpdated="2026-08-05"
        />

        <section className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6" aria-labelledby="licensing-boundary">
          <h2 id="licensing-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">
            Why the public self-check was removed
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              The DASS questionnaire may be copied as a public-domain form, but the instrument owner&apos;s current guidance draws a separate boundary around administration. It says an app or website open to the public may not administer the DASS.
            </p>
            <p>
              The same guidance says electronic use is appropriate only for a defined group when results go to a clinician or researcher rather than directly to respondents. It also warns against returning computed scores or automated interpretations.
            </p>
            <p>
              MindCheck Tools follows that distinction. Public access to this information page remains free, while the former questionnaire, automated scoring, severity labels, and results journey are not provided.
            </p>
            <a
              href={DASS_FAQ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2"
            >
              Read the official UNSW DASS administration guidance
            </a>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="about-dass">
          <h2 id="about-dass" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What the DASS-21 is designed to measure
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              The DASS-21 is the shorter version of the Depression Anxiety Stress Scales developed by S. H. Lovibond and P. F. Lovibond. It produces separate dimensional measures of depression, anxiety, and stress symptoms. Those dimensions are not diagnoses.
            </p>
            <p>
              Interpretation requires appropriate training in psychological science and assessment. The official guidance recommends qualified professional interpretation when a person is seeking help or experiencing high distress.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="alternatives">
          <h2 id="alternatives" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Separately permitted screening options
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            These instruments are linked under their owners&apos; published terms and required attribution. They are not equivalent to the DASS-21, do not reproduce all three DASS constructs, and cannot be compared with a DASS score.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {ALTERNATIVES.map((alternative) => (
              <Link
                key={alternative.href}
                href={alternative.href}
                className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors"
              >
                <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">
                  {alternative.name}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {alternative.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5" aria-labelledby="privacy-boundary">
          <h2 id="privacy-boundary" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
            Privacy boundary
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            This page does not ask for symptoms, answers, or a score and does not calculate a personal result. If you follow a link to another self-check, review that page&apos;s limits and the <Link href="/privacy" className="font-semibold underline">privacy policy</Link> before answering, especially on a shared device.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5" aria-labelledby="immediate-help">
          <h2 id="immediate-help" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">
            If you need immediate help
          </h2>
          <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
            An informational page or screening result cannot assess an emergency. In the United States, call or text 988 for the Suicide &amp; Crisis Lifeline, or call 911 for immediate danger. Outside the United States, use local emergency or crisis services.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg bg-crisis-700 px-4 py-2 text-sm font-semibold text-white hover:bg-crisis-800">
              Call 988
            </a>
            <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">
              Text 988
            </a>
            <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">
              Call 911
            </a>
            <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">
              View U.S. and international crisis resources
            </Link>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="sources">
          <h2 id="sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Sources
          </h2>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              University of New South Wales. <a href={DASS_FAQ_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">DASS frequently asked questions</a>, including administration, interpretation, and public website/app guidance.
            </li>
            <li>
              Henry, J. D., &amp; Crawford, J. R. (2005). The short-form version of the Depression Anxiety Stress Scales. <a href="https://pubmed.ncbi.nlm.nih.gov/16004657/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">PubMed PMID 16004657</a>.
            </li>
            <li>
              Lovibond, S. H., &amp; Lovibond, P. F. (1995). <em>Manual for the Depression Anxiety Stress Scales</em>, second edition.
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <ToolReviewerBio lastReviewed="August 2, 2026" />
        </div>

        <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {FAQ_DATA.map((entry) => (
              <div key={entry.question}>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                  {entry.question}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {entry.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

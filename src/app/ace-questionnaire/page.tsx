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

const PAGE_PATH = "/ace-questionnaire";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const CDC_STUDY_URL = "https://www.cdc.gov/violenceprevention/aces/about.html";
const CDC_ACES_URL = "https://www.cdc.gov/aces/about/index.html";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "ACE Information, Research, and Questionnaire Boundary",
  description:
    "Trauma-informed education about adverse childhood experiences, the CDC-Kaiser research, and why MindCheck Tools does not administer its former ACE form.",
  keywords: [
    "adverse childhood experiences information",
    "ACE research",
    "CDC Kaiser ACE study",
    "ACE questionnaire versions",
    "trauma informed education",
  ],
  openGraph: {
    title: "ACE Information, Research, and Questionnaire Boundary",
    description:
      "Educational ACE information without questions, answer collection, scoring, cutoffs, or individualized risk interpretation.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What are adverse childhood experiences?",
    answer:
      "The CDC describes adverse childhood experiences, or ACEs, as potentially traumatic events during childhood and aspects of a child's environment that can undermine safety, stability, and bonding. The examples are not a complete list of childhood adversity.",
  },
  {
    question: "Why is there no ACE questionnaire on this page?",
    answer:
      "CDC makes identified study and surveillance questionnaires available without copyright fees, but the former MindCheck Tools simplified form was not matched exactly to one authoritative CDC version. The public questionnaire and scoring were removed until exact provenance, parity, and trauma-informed review are established.",
  },
  {
    question: "Can ACE research predict an individual's health?",
    answer:
      "No. ACE research describes population-level associations. It cannot predict a person's future, diagnose a condition, or account fully for timing, context, protective relationships, community factors, or later support and healing.",
  },
  {
    question: "Are PHQ-4, PHQ-9, or GAD-7 replacements for an ACE questionnaire?",
    answer:
      "No. They screen for recent depression or anxiety symptoms and do not measure childhood adversity. They are linked only as separate, publicly permitted ways to describe current symptoms before speaking with a qualified professional.",
  },
  {
    question: "Does this page provide an ACE score or interpretation?",
    answer:
      "No. It displays no questionnaire, collects no answers, calculates no score, and provides no cutoff or individualized risk interpretation.",
  },
];

const ALTERNATIVES = [
  {
    href: "/phq-4-anxiety-depression-screen",
    name: "PHQ-4 Quick Screen",
    description:
      "A brief screen for recent depression and generalized anxiety symptoms. It does not measure childhood adversity and is not an ACE replacement.",
  },
  {
    href: "/phq-9-depression-test",
    name: "PHQ-9 Depression Self-Check",
    description:
      "A publicly permitted depression symptom screen. It cannot explain whether symptoms relate to trauma or adverse experiences.",
  },
  {
    href: "/gad-7-anxiety-test",
    name: "GAD-7 Anxiety Self-Check",
    description:
      "A publicly permitted generalized-anxiety symptom screen. It does not measure adversity, trauma exposure, or resilience.",
  },
];

export default function AceInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "ACE Information, Research, and Questionnaire Boundary",
              description:
                "Trauma-informed education about adverse childhood experiences and the exact-version boundary for public questionnaire use.",
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
              { name: "ACE Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-wrap gap-2 mb-5" aria-label="Page status">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Educational information</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">No questionnaire</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">No scoring or risk estimate</span>
        </div>

        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          ACE Information, Research, and Questionnaire Boundary
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          This page explains adverse childhood experiences and the CDC-Kaiser research without asking you to recall personal events or producing a score. It is educational, trauma-informed information, not an assessment or prediction.
        </p>

        <AnswerBlock
          what="An educational overview of adverse childhood experiences, the CDC-Kaiser research, and the need to use an exact, verified questionnaire version."
          who="People seeking trauma-informed ACE information without entering personal childhood history."
          bottomLine="This page does not assess adversity or predict health. PHQ-4, PHQ-9, and GAD-7 address different, current symptom domains and are not ACE replacements."
          lastUpdated="2026-08-05"
        />

        <section className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6" aria-labelledby="ace-version-boundary">
          <h2 id="ace-version-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">
            Why the former public questionnaire was removed
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              CDC states that the identified CDC-Kaiser study questionnaires are not copyrighted and have no use fee. That permission applies to the actual published questionnaire versions; it does not establish that a separately simplified or rewritten form is an exact copy.
            </p>
            <p>
              MindCheck Tools could not tie its former simplified form, wording, and interpretation to one exact authoritative CDC artifact. The questionnaire, answer capture, scoring, cutoffs, and individualized health-risk language are therefore unavailable while exact-version parity and trauma-informed clinical review remain unresolved.
            </p>
            <a href={CDC_STUDY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
              Review the CDC-Kaiser study and questionnaire source
            </a>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="about-aces">
          <h2 id="about-aces" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What ACE research can and cannot show
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              The original CDC-Kaiser study examined associations between reported childhood adversity and later health and well-being across a large insured adult sample. Later public-health research has studied ACEs in other populations and settings.
            </p>
            <p>
              These findings describe patterns across groups. They do not determine an individual&apos;s future or capture every adverse experience, protective relationship, community condition, coping resource, or opportunity for recovery. A count is not a diagnosis, a measure of worth, or a treatment plan.
            </p>
            <p>
              If childhood experiences continue to affect daily life, a trauma-informed healthcare professional can help explore current needs without requiring you to disclose more than you choose.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="ace-alternatives">
          <h2 id="ace-alternatives" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Separate options for current symptoms
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            These publicly permitted tools address recent symptoms, not childhood adversity. They cannot estimate an ACE result or explain the cause of symptoms.
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

        <section className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5" aria-labelledby="ace-privacy">
          <h2 id="ace-privacy" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">No-input privacy boundary</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            This page has no form and asks for no childhood history, symptoms, answers, or score. It calculates and stores no personal result. If you use a linked self-check, review its limits and the <Link href="/privacy" className="font-semibold underline">privacy policy</Link>, especially on a shared device.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5" aria-labelledby="ace-help">
          <h2 id="ace-help" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">If this topic brings up immediate distress</h2>
          <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
            You can stop reading and seek support without completing any questionnaire. In the United States, call or text 988 for the Suicide &amp; Crisis Lifeline, or call 911 for immediate danger. Outside the United States, use local emergency or crisis services.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg bg-crisis-700 px-4 py-2 text-sm font-semibold text-white hover:bg-crisis-800">Call 988</a>
            <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Text 988</a>
            <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 911</a>
            <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">View U.S. and international crisis resources</Link>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="ace-sources">
          <h2 id="ace-sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources</h2>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li>
              Centers for Disease Control and Prevention. <a href={CDC_STUDY_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">About the CDC-Kaiser ACE Study</a>, including the identified public questionnaire versions and reuse statement.
            </li>
            <li>
              Centers for Disease Control and Prevention. <a href={CDC_ACES_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">About Adverse Childhood Experiences</a>, updated March 2, 2026.
            </li>
            <li>
              Felitti, V. J., et al. (1998). Relationship of childhood abuse and household dysfunction to leading causes of death in adults. <a href="https://pubmed.ncbi.nlm.nih.gov/9635069/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">PubMed PMID 9635069</a>.
            </li>
          </ul>
        </section>

        <div className="mt-10">
          <ToolReviewerBio lastReviewed="August 2, 2026" />
        </div>

        <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="ace-faq">
          <h2 id="ace-faq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Frequently asked questions</h2>
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

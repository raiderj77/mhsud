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

const PAGE_PATH = "/aq-10-autism-screening";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const ARC_URL = "https://www.autismresearchcentre.com/tests/autism-spectrum-quotient-10-items-aq-10-adult/";
const VALIDATION_URL = "https://pubmed.ncbi.nlm.nih.gov/22265366/";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Adult AQ-10 Autism Screening Information",
  description:
    "Educational information about the Adult AQ-10, its evidence, diagnostic limits, and commercial electronic-use boundary. No questionnaire or scoring.",
  keywords: [
    "AQ-10 information",
    "Adult AQ-10 autism screening",
    "Autism Spectrum Quotient information",
    "AQ-10 licence",
  ],
  openGraph: {
    title: "Adult AQ-10 Autism Screening Information",
    description:
      "Evidence and licensing information about the Adult AQ-10, without questionnaire content, scoring, or a personal result.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the Adult AQ-10?",
    answer:
      "The Adult AQ-10 is a brief autism-trait screening instrument developed by the University of Cambridge Autism Research Centre. It can inform a decision about fuller assessment, but it cannot diagnose or rule out autism.",
  },
  {
    question: "Why is there no AQ-10 questionnaire on this page?",
    answer:
      "The Autism Research Centre permits specified non-profit research and educational uses but says commercial and information-technology uses may require a licence and fees. MindCheck Tools has no licence covering this public website on file, so this route is informational only.",
  },
  {
    question: "Can a brief online screen identify autism?",
    answer:
      "No. Autism assessment considers development, current experiences, functioning, strengths, support needs, and possible overlapping explanations. A qualified professional can discuss whether a comprehensive assessment is appropriate.",
  },
  {
    question: "Is the PHQ-4 an alternative autism screen?",
    answer:
      "No. The PHQ-4 addresses depression and anxiety symptoms, not autism. It is linked only as a separately permitted option for those different concerns.",
  },
];

const PAGE_JSON_LD = {
  ...medicalWebPageJsonLd({
    name: "Adult AQ-10 Autism Screening Information",
    description:
      "Educational information about Adult AQ-10 validation, diagnostic limits, and commercial electronic-use licensing.",
    url: PAGE_URL,
    lastReviewed: "2026-08-02",
  }),
  mainEntity: {
    "@type": "Thing",
    name: "Adult Autism Spectrum Quotient, 10-item form",
  },
};

export default function AQ10InformationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "AQ-10 Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-wrap gap-2 mb-5" aria-label="Page status">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Educational information</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">No questionnaire</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">No scoring</span>
        </div>

        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          Adult AQ-10 Autism Screening Information
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          MindCheck Tools does not reproduce, administer, score, or interpret the Adult AQ-10 on this public website. This page explains the evidence, limitations, and licensing boundary without creating a personal autism result.
        </p>

        <AnswerBlock
          what="An educational overview of the Adult AQ-10 evidence base and the licensing boundary for commercial or information-technology use."
          who="Adults seeking reliable information about the instrument or considering whether to ask a qualified professional about autism assessment."
          bottomLine="This page cannot identify autism and provides no personal result. MindCheck Tools has no public commercial electronic-use licence for the AQ-10 on file."
          lastUpdated="2026-08-05"
        />

        <section className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6" aria-labelledby="aq-rights-boundary">
          <h2 id="aq-rights-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">Why the public self-check is unavailable</h2>
          <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              The Autism Research Centre publishes the Adult AQ-10 and its use conditions. The centre permits specified non-profit research and educational use, while for-profit, commercial, and information-technology uses may require a licence and fees.
            </p>
            <p>
              A public website with a potential commercial context should not assume that a non-profit permission applies. MindCheck Tools has no licence decision covering public electronic administration, scoring, and result delivery on file, so this page contains no instrument content or result mechanics.
            </p>
            <a href={ARC_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
              Read the Autism Research Centre terms and instrument page
            </a>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="about-aq">
          <h2 id="about-aq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">What the evidence can and cannot establish</h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              The validation study examined whether brief forms could help identify people who may benefit from fuller assessment. Group-level performance does not confirm or exclude autism for one person, and self-report results can be shaped by context, interpretation, masking, and overlapping conditions.
            </p>
            <p>
              A comprehensive autism assessment may include developmental history, current experiences, strengths, support needs, and input from a clinician experienced in adult neurodevelopmental assessment. Seeking information does not obligate anyone to pursue a diagnosis. The site reviewer&apos;s stated credential is not specialist autism-assessment qualification.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="aq-next-steps">
          <h2 id="aq-next-steps" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">Next steps and non-equivalent resources</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            MindCheck Tools currently offers no equivalent autism questionnaire with a verified public commercial electronic-use licence. These links provide professional-conversation guidance or address different concerns.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Prepare for an assessment conversation</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">A general guide for organizing questions and asking about an appropriate referral.</p>
            </Link>
            <Link href="/phq-4-anxiety-depression-screen" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">PHQ-4 mood and anxiety screen</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">A permitted screen for different symptoms. It does not assess autism or neurodevelopment.</p>
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5" aria-labelledby="aq-privacy">
          <h2 id="aq-privacy" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Privacy on this page</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            This page asks no trait questions, accepts no answers, calculates no score, and creates no assessment result. Review the <Link href="/privacy" className="font-semibold underline">privacy policy</Link> before using any other self-check, especially on a shared device.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5" aria-labelledby="aq-urgent-help">
          <h2 id="aq-urgent-help" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">Immediate support</h2>
          <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
            In the United States, call or text 988 if you may act on thoughts of self-harm or cannot stay safe, or call 911 for immediate danger. Outside the United States, use local emergency or crisis services. This information page is not emergency care.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg bg-crisis-700 px-4 py-2 text-sm font-semibold text-white hover:bg-crisis-800">Call 988</a>
            <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Text 988</a>
            <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 911</a>
            <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">U.S. and international crisis resources</Link>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="aq-sources">
          <h2 id="aq-sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources</h2>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li><a href={ARC_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">University of Cambridge Autism Research Centre: Adult AQ-10 instrument and use conditions</a>.</li>
            <li>Allison, Auyeung, and Baron-Cohen. <a href={VALIDATION_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">Toward brief red flags for autism screening: the short Autism Spectrum Quotient forms</a>.</li>
            <li><a href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" target="_blank" rel="noopener noreferrer" className="font-semibold underline">National Institute of Mental Health: Autism Spectrum Disorder</a>.</li>
          </ul>
        </section>

        <div className="mt-10">
          <ToolReviewerBio lastReviewed="August 2, 2026" />
        </div>

        <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="aq-faq">
          <h2 id="aq-faq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Frequently asked questions</h2>
          <div className="space-y-5">
            {FAQ_DATA.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{item.question}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}

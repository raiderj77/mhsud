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

const PAGE_PATH = "/msi-bpd-screening";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const VALIDATION_URL = "https://pubmed.ncbi.nlm.nih.gov/14744082/";
const NIMH_BPD_URL = "https://www.nimh.nih.gov/health/topics/borderline-personality-disorder";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "MSI-BPD Screening Instrument Information",
  description:
    "Educational information about the MSI-BPD evidence base, diagnostic limits, and unresolved public electronic-reuse permission. No questionnaire or scoring.",
  keywords: [
    "MSI-BPD information",
    "McLean Screening Instrument information",
    "borderline personality disorder screening information",
    "MSI-BPD permissions",
  ],
  openGraph: {
    title: "MSI-BPD Screening Instrument Information",
    description:
      "Evidence and rights information about the MSI-BPD, without questionnaire content, scoring, or a personal result.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the MSI-BPD?",
    answer:
      "The McLean Screening Instrument for Borderline Personality Disorder is a research-supported screening instrument intended to indicate when a fuller clinical assessment may be useful. It is not a diagnostic interview.",
  },
  {
    question: "Why is there no MSI-BPD questionnaire or result here?",
    answer:
      "A validation paper establishes evidence, not reuse permission. MindCheck Tools has not archived an authoritative grant for public electronic reproduction, automated scoring, or commercial use, so this page does not administer the instrument.",
  },
  {
    question: "Can an online screen diagnose borderline personality disorder?",
    answer:
      "No. Diagnosis requires a qualified clinician to consider patterns over time, current circumstances, safety, other possible explanations, and the person as a whole. A label should never be assigned from a website result alone.",
  },
  {
    question: "Are the PHQ-4 or DBT skills pages alternatives to the MSI-BPD?",
    answer:
      "They are not equivalent. The PHQ-4 screens different mood and anxiety symptoms, while the DBT page is an educational coping-skills reference. Neither evaluates borderline personality disorder.",
  },
];

const PAGE_JSON_LD = {
  ...medicalWebPageJsonLd({
    name: "MSI-BPD Screening Instrument Information",
    description:
      "Educational information about MSI-BPD validation, diagnostic limits, and unresolved public electronic-reuse permission.",
    url: PAGE_URL,
    lastReviewed: "2026-08-02",
  }),
  mainEntity: {
    "@type": "Thing",
    name: "McLean Screening Instrument for Borderline Personality Disorder",
  },
};

export default function MSIBPDInformationPage() {
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
              { name: "MSI-BPD Information", url: PAGE_URL },
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
          MSI-BPD Screening Instrument Information
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          MindCheck Tools does not reproduce, administer, score, or interpret the MSI-BPD on this public website. This page explains the evidence and why written public electronic-use permission must come before any questionnaire journey.
        </p>

        <AnswerBlock
          what="An educational overview of the MSI-BPD validation record, diagnostic limitations, and unresolved electronic-reuse rights."
          who="People seeking accurate information about the instrument or considering a professional conversation about longstanding emotional or relationship patterns."
          bottomLine="This page provides no personal result. A published validation study is not a reuse licence, and only a qualified clinician can diagnose borderline personality disorder."
          lastUpdated="2026-08-05"
        />

        <section className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6" aria-labelledby="msi-rights-boundary">
          <h2 id="msi-rights-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">Why the public self-check is unavailable</h2>
          <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              The primary validation record supports research discussion of the MSI-BPD. It does not state that third parties may reproduce the instrument, administer it to the general public, score it electronically, or use it in a commercial product.
            </p>
            <p>
              MindCheck Tools has no authoritative public-web or commercial permission artifact on file. Until the current rights holder supplies a written grant for the exact intended use, the route remains an informational page without protected content or result mechanics.
            </p>
            <a href={VALIDATION_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
              Review the primary validation record on PubMed
            </a>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="about-msi">
          <h2 id="about-msi" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">What the instrument can and cannot do</h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              The MSI-BPD was studied as a screening instrument, not as a stand-alone diagnosis. Screening research describes how a measure performed in a studied population; it cannot decide what explains one person&apos;s experiences.
            </p>
            <p>
              Similar experiences can occur for many reasons, including trauma, mood conditions, substance use, neurodevelopmental differences, medical factors, or current stress. A qualified mental-health professional can evaluate patterns over time and discuss evidence-based care without reducing a person to a label. The site reviewer&apos;s stated credential does not replace personality-disorder specialist review.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="msi-next-steps">
          <h2 id="msi-next-steps" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">Next steps and non-equivalent resources</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            MindCheck Tools currently offers no equivalent BPD questionnaire with verified public electronic-use rights. The following pages serve narrower, different purposes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Prepare for an evaluation conversation</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">A general guide for describing patterns and asking about appropriate assessment.</p>
            </Link>
            <Link href="/phq-4-anxiety-depression-screen" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">PHQ-4 mood and anxiety screen</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">A permitted screen for different symptoms. It does not assess BPD.</p>
            </Link>
            <Link href="/dbt-crisis-skills" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">DBT crisis-skills reference</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">An educational coping reference, not an assessment, diagnosis, or substitute for care.</p>
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5" aria-labelledby="msi-privacy">
          <h2 id="msi-privacy" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Privacy on this page</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            This page asks no symptom questions, accepts no answers, calculates no score, and creates no assessment result. Review the <Link href="/privacy" className="font-semibold underline">privacy policy</Link> before using any other self-check, especially on a shared device.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5" aria-labelledby="msi-urgent-help">
          <h2 id="msi-urgent-help" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">Immediate support</h2>
          <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
            In the United States, call or text 988 if you may act on thoughts of self-harm or cannot stay safe, or call 911 for immediate danger. Outside the United States, use local emergency or crisis services. This page is not crisis care.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg bg-crisis-700 px-4 py-2 text-sm font-semibold text-white hover:bg-crisis-800">Call 988</a>
            <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Text 988</a>
            <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 911</a>
            <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">U.S. and international crisis resources</Link>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="msi-sources">
          <h2 id="msi-sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources</h2>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Zanarini and colleagues. <a href={VALIDATION_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">A screening measure for BPD: the McLean Screening Instrument for Borderline Personality Disorder</a>.</li>
            <li><a href={NIMH_BPD_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">National Institute of Mental Health: Borderline Personality Disorder</a>.</li>
          </ul>
        </section>

        <div className="mt-10">
          <ToolReviewerBio lastReviewed="August 2, 2026" />
        </div>

        <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="msi-faq">
          <h2 id="msi-faq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Frequently asked questions</h2>
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

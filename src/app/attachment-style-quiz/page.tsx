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

const PAGE_PATH = "/attachment-style-quiz";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const AUTHOR_ECRR_URL = "https://labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm";
const PRIMARY_ARTICLE_URL = "https://doi.org/10.1037/0022-3514.78.2.350";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "ECR-R Attachment Measure Information",
  description:
    "Educational information about the ECR-R, its dimensional interpretation and commercial-use permission boundary. No questionnaire, categories, or scoring.",
  keywords: [
    "ECR-R information",
    "attachment measure information",
    "Experiences in Close Relationships Revised",
    "ECR-R commercial permission",
  ],
  openGraph: {
    title: "ECR-R Attachment Measure Information",
    description:
      "Evidence, interpretation cautions, and commercial-use rights for the ECR-R, without a questionnaire or personal result.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the ECR-R?",
    answer:
      "The Experiences in Close Relationships-Revised is a self-report research measure of adult romantic attachment dimensions. It is not a diagnosis or a universal description of how someone relates in every context.",
  },
  {
    question: "Why is there no ECR-R quiz on this page?",
    answer:
      "The author-controlled page permits noncommercial research use without permission and requires permission for commercial use. MindCheck Tools has no commercial public electronic-use grant on file, so it does not reproduce or score the measure.",
  },
  {
    question: "Does the ECR-R assign a fixed attachment type?",
    answer:
      "The author recommends dimensional interpretation and cautions against forcing scores into categories. Attachment experiences can also vary by relationship and over time, so a website label can be misleading.",
  },
  {
    question: "Are the Big Five and Values Card Sort equivalent alternatives?",
    answer:
      "No. The Big Five reflects broad personality traits, while the Values Card Sort supports values reflection. Neither measures attachment or replaces relationship-focused assessment.",
  },
];

const PAGE_JSON_LD = {
  ...medicalWebPageJsonLd({
    name: "ECR-R Attachment Measure Information",
    description:
      "Educational information about ECR-R research, dimensional interpretation, and commercial electronic-use permission.",
    url: PAGE_URL,
    lastReviewed: "2026-08-02",
  }),
  mainEntity: {
    "@type": "Thing",
    name: "Experiences in Close Relationships-Revised measure",
  },
};

export default function AttachmentMeasureInformationPage() {
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
              { name: "ECR-R Information", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-wrap gap-2 mb-5" aria-label="Page status">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Educational information</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">No questionnaire</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-600 dark:text-neutral-300">No scoring or categories</span>
        </div>

        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
          ECR-R Attachment Measure Information
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          MindCheck Tools does not reproduce, administer, score, or categorize people with the ECR-R on this public website. This page explains the research measure, the author&apos;s interpretation cautions, and the commercial-use permission boundary.
        </p>

        <AnswerBlock
          what="An educational overview of the ECR-R research measure, its dimensional interpretation, and the permission required for commercial use."
          who="People looking for accurate attachment-research information without a reductive online relationship label."
          bottomLine="This page provides no attachment result. The author requires permission for commercial use and discourages categorical interpretation of ECR-R scores."
          lastUpdated="2026-08-05"
        />

        <section className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6" aria-labelledby="ecrr-rights-boundary">
          <h2 id="ecrr-rights-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">Why the public quiz is unavailable</h2>
          <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              The author-controlled ECR-R page permits noncommercial academic research use without a separate request and states that commercial use requires permission. A public site with potential monetization should not extend the research permission to consumer administration or automated results.
            </p>
            <p>
              MindCheck Tools has no written commercial public electronic-use grant on file. The route therefore remains useful and indexable as information, but contains no protected instrument content, scoring, or categorical result journey.
            </p>
            <a href={AUTHOR_ECRR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
              Read the author&apos;s ECR-R information and use conditions
            </a>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="about-ecrr">
          <h2 id="about-ecrr" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">A dimensional measure, not a fixed identity</h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              The ECR-R was developed for research on attachment-related anxiety and avoidance in close relationships. The author&apos;s guidance favors interpreting those dimensions rather than converting them into a small set of attachment categories.
            </p>
            <p>
              Self-report findings are influenced by the relationship, life period, question interpretation, and current stress. They do not establish a disorder, predict a relationship&apos;s future, or define someone&apos;s character. A relationship-informed clinician can help explore persistent patterns in context. The site reviewer&apos;s stated credential is not specialist relationship or attachment assessment.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="ecrr-next-steps">
          <h2 id="ecrr-next-steps" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">Non-equivalent reflection options</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            The following tools are offered under different, documented use bases and explore different constructs. Neither is an attachment assessment or ECR-R replacement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/big-five-personality-test" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Big Five personality traits</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">A public-use-compatible broad trait measure, not a relationship or attachment assessment.</p>
            </Link>
            <Link href="/values-card-sort" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Values Card Sort</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">An original reflection activity for priorities and values, not attachment classification.</p>
            </Link>
            <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Prepare for a professional conversation</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">A general guide for discussing relationship distress or recurring patterns with a professional.</p>
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5" aria-labelledby="ecrr-privacy">
          <h2 id="ecrr-privacy" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Privacy on this page</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            This page asks no relationship questions, accepts no answers, calculates no score, and creates no profile or category. Review the <Link href="/privacy" className="font-semibold underline">privacy policy</Link> before using any other self-check, especially on a shared device.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5" aria-labelledby="ecrr-urgent-help">
          <h2 id="ecrr-urgent-help" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">Immediate support</h2>
          <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
            In the United States, call or text 988 if relationship distress involves thoughts of self-harm or inability to stay safe, or call 911 for immediate danger. Outside the United States, use local emergency or crisis services. This page is not crisis care.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg bg-crisis-700 px-4 py-2 text-sm font-semibold text-white hover:bg-crisis-800">Call 988</a>
            <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Text 988</a>
            <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 911</a>
            <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">U.S. and international crisis resources</Link>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="ecrr-sources">
          <h2 id="ecrr-sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources</h2>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li><a href={AUTHOR_ECRR_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">R. Chris Fraley: ECR-R information, scoring cautions, and use conditions</a>.</li>
            <li>Fraley, Waller, and Brennan. <a href={PRIMARY_ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">An item response theory analysis of self-report measures of adult attachment</a>.</li>
          </ul>
        </section>

        <div className="mt-10">
          <ToolReviewerBio lastReviewed="August 2, 2026" />
        </div>

        <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="ecrr-faq">
          <h2 id="ecrr-faq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Frequently asked questions</h2>
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

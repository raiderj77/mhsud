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

const PAGE_PATH = "/scoff-eating-disorder-screening";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const BMJ_ARTICLE_URL = "https://www.bmj.com/content/319/7223/1467";
const BMJ_PERMISSIONS_URL = "https://www.bmj.com/about-bmj/resources-readers/permissions";

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "SCOFF Eating Disorder Screening Information",
  description:
    "Educational information about the SCOFF eating-disorder screener, its evidence and reuse boundary, and why this site does not administer or score it.",
  keywords: [
    "SCOFF information",
    "SCOFF eating disorder screener",
    "eating disorder screening information",
    "SCOFF permissions",
  ],
  openGraph: {
    title: "SCOFF Eating Disorder Screening Information",
    description:
      "Evidence, limitations, and the permission boundary for the SCOFF, without a questionnaire or automated result.",
    url: PAGE_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the SCOFF?",
    answer:
      "The SCOFF is a brief screening instrument intended to help identify when a fuller eating-disorder assessment may be appropriate. It cannot diagnose or rule out an eating disorder.",
  },
  {
    question: "Why is there no SCOFF questionnaire on this page?",
    answer:
      "The validation article makes the instrument publicly viewable, but public access to an article is not permission to reproduce and score the instrument on a commercial public website. MindCheck Tools has no written electronic-reproduction grant on file, so this route is informational only.",
  },
  {
    question: "Can this page tell me whether I have an eating disorder?",
    answer:
      "No. Eating disorders require assessment by a suitably qualified professional who can consider physical health, eating patterns, history, and current circumstances. Seek care whenever eating or body-image concerns are affecting your health or daily life.",
  },
  {
    question: "Are the linked mood and anxiety screens equivalent to the SCOFF?",
    answer:
      "No. The PHQ-4, PHQ-9, and GAD-7 address depression or anxiety symptoms, not eating disorders. They are linked only as separately permitted options for different concerns.",
  },
];

const PAGE_JSON_LD = {
  ...medicalWebPageJsonLd({
    name: "SCOFF Eating Disorder Screening Information",
    description:
      "Educational information about the SCOFF evidence base, limitations, and public electronic-reuse boundary.",
    url: PAGE_URL,
    lastReviewed: "2026-08-02",
  }),
  mainEntity: {
    "@type": "Thing",
    name: "SCOFF eating-disorder screening instrument",
  },
};

export default function SCOFFInformationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_JSON_LD) }}
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
              { name: "SCOFF Information", url: PAGE_URL },
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
          SCOFF Eating Disorder Screening Information
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          MindCheck Tools does not reproduce, administer, score, or interpret the SCOFF on this public website. This page preserves useful evidence and safety information while written electronic-reuse permission remains unverified.
        </p>

        <AnswerBlock
          what="An educational overview of the SCOFF eating-disorder screening instrument and the permission boundary that prevents public administration here."
          who="People seeking accurate SCOFF information or deciding whether to discuss eating or body-image concerns with a qualified professional."
          bottomLine="This page provides no personal result and cannot diagnose or rule out an eating disorder. MindCheck Tools has no written public electronic-reproduction grant on file."
          lastUpdated="2026-08-05"
        />

        <section
          className="mt-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20 p-5 sm:p-6"
          aria-labelledby="scoff-rights-boundary"
        >
          <h2 id="scoff-rights-boundary" className="font-serif text-xl font-bold text-amber-900 dark:text-amber-200 mb-3">
            Why the public self-check is unavailable
          </h2>
          <div className="space-y-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
            <p>
              The original BMJ article displays the SCOFF and documents its development. Article access does not, by itself, grant a third party permission to reproduce the instrument in a commercial public website or deliver automated results.
            </p>
            <p>
              BMJ routes reuse through its permissions process. Until MindCheck Tools archives a written grant covering public electronic reproduction and scoring, the safe state is this informational page without instrument content or result mechanics.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={BMJ_ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
                Read the original BMJ article
              </a>
              <a href={BMJ_PERMISSIONS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-2">
                Read BMJ permissions guidance
              </a>
            </div>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="about-scoff">
          <h2 id="about-scoff" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What the evidence can and cannot establish
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <p>
              The SCOFF was developed as a brief prompt for further assessment, not as a stand-alone diagnosis. Validation findings describe performance in studied groups and do not determine whether one individual has an eating disorder.
            </p>
            <p>
              Eating-disorder presentations vary across people and may involve urgent physical as well as psychological risks. A clinician with eating-disorder training can assess symptoms, medical stability, history, and support needs in context. The reviewer named below does not substitute for specialist eating-disorder review or individual care.
            </p>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="scoff-next-steps">
          <h2 id="scoff-next-steps" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            Next steps and non-equivalent options
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
            MindCheck Tools currently offers no equivalent eating-disorder questionnaire with a verified public electronic-use grant. These resources serve different purposes and should not be compared with the SCOFF.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">Prepare for a professional conversation</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">A general guide for describing concerns and asking about appropriate evaluation.</p>
            </Link>
            <Link href="/phq-4-anxiety-depression-screen" className="card p-5 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
              <h3 className="font-semibold text-sage-700 dark:text-sage-400 mb-2">PHQ-4 mood and anxiety screen</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">A separate, permitted screen for depression and anxiety symptoms. It does not assess eating disorders.</p>
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-sage-200 dark:border-sage-800 bg-sage-50 dark:bg-sage-950/20 p-5" aria-labelledby="scoff-privacy">
          <h2 id="scoff-privacy" className="font-serif text-xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Privacy on this page</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            This page asks no symptom questions, accepts no answers, calculates no score, and creates no assessment result. Review the <Link href="/privacy" className="font-semibold underline">privacy policy</Link> before using any other self-check, especially on a shared device.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/20 p-5" aria-labelledby="scoff-urgent-help">
          <h2 id="scoff-urgent-help" className="font-serif text-xl font-bold text-crisis-900 dark:text-crisis-200 mb-2">Get urgent help when needed</h2>
          <p className="text-sm text-crisis-900 dark:text-crisis-200 leading-relaxed mb-4">
            In the United States, call 911 for immediate medical danger. If you may act on thoughts of self-harm or need immediate emotional support, call or text 988. Outside the United States, use local emergency or crisis services. This site is not emergency care.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:911" className="inline-flex min-h-11 items-center rounded-lg bg-crisis-700 px-4 py-2 text-sm font-semibold text-white hover:bg-crisis-800">Call 911</a>
            <a href="tel:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Call 988</a>
            <a href="sms:988" className="inline-flex min-h-11 items-center rounded-lg border border-crisis-700 px-4 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200">Text 988</a>
            <Link href="/crisis-resources" className="inline-flex min-h-11 items-center px-2 py-2 text-sm font-semibold text-crisis-800 dark:text-crisis-200 underline">U.S. and international crisis resources</Link>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="scoff-sources">
          <h2 id="scoff-sources" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources</h2>
          <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
            <li>Morgan, Reid, and Lacey. <a href={BMJ_ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">The SCOFF questionnaire: assessment of a new screening tool for eating disorders (BMJ, 1999)</a>.</li>
            <li><a href={BMJ_PERMISSIONS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline">BMJ permissions and licensing guidance</a>.</li>
            <li><a href="https://www.nimh.nih.gov/health/topics/eating-disorders" target="_blank" rel="noopener noreferrer" className="font-semibold underline">National Institute of Mental Health: Eating Disorders</a>.</li>
          </ul>
        </section>

        <div className="mt-10">
          <ToolReviewerBio lastReviewed="August 2, 2026" />
        </div>

        <section className="mt-8 border-t border-sand-200 dark:border-neutral-700 pt-6" aria-labelledby="scoff-faq">
          <h2 id="scoff-faq" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">Frequently asked questions</h2>
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

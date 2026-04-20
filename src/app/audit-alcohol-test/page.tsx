import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";
import { AUDITClient } from "./AUDITClient";

const TOOL_URL = `${SITE_URL}/audit-alcohol-test`;

export const metadata: Metadata = createMetadata({
  path: "/audit-alcohol-test",
  title: "AUDIT Alcohol Use Screening Test",
  description:
    "Take the free AUDIT alcohol screening test — the WHO's 10-question tool used by clinicians worldwide. Private, honest, no sign-up. Results in 3 minutes.",
  keywords: [
    "audit alcohol test", "alcohol screening test", "alcohol assessment",
    "alcohol use disorders identification test", "alcohol screening questionnaire",
    "who alcohol test", "audit score", "alcohol use screen",
    "drinking self-assessment", "am i drinking too much",
    "audit questionnaire online", "free alcohol test", "who audit",
  ],
  openGraph: {
    title: "AUDIT Alcohol Use Screening Test",
    description: "Take the free AUDIT alcohol screening test — the WHO's 10-question tool used by clinicians worldwide. Private, no sign-up. Results in 3 minutes.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the AUDIT alcohol test?", answer: "The AUDIT (Alcohol Use Disorders Identification Test) is a 10-question screening tool developed by the World Health Organization to identify hazardous and harmful alcohol use. It is widely used in primary care, emergency settings, and counseling to initiate conversations about alcohol use." },
  { question: "How is the AUDIT scored?", answer: "AUDIT scores range from 0–40. A score of 8 or above suggests hazardous alcohol use and warrants a brief intervention. Scores of 16 and above indicate harmful use, and scores of 20 or above may suggest alcohol dependence requiring further assessment." },
  { question: "What is the difference between the AUDIT and AUDIT-C?", answer: "The AUDIT is the full 10-question assessment covering frequency, quantity, and consequences of drinking. The AUDIT-C is a shorter 3-question version using only the first three questions — it is faster but focuses solely on consumption rather than consequences or dependence." },
  { question: "Is the AUDIT test confidential?", answer: "Yes. This online version processes all your responses in your browser only. Nothing you enter is stored or transmitted to any server. Your results are completely private." },
  { question: "What should I do if I score high on the AUDIT?", answer: "A high AUDIT score is a signal worth taking seriously. Consider speaking with your primary care doctor or a licensed substance use counselor. Many people find that even a brief conversation with a professional leads to meaningful changes. You can also explore SAMHSA's National Helpline at 1-800-662-4357 for free, confidential support." },
  { question: "Can this tool diagnose an alcohol use disorder?", answer: "No. The AUDIT is a screening instrument, not a diagnostic tool. Only a qualified healthcare professional can diagnose an alcohol use disorder through a comprehensive evaluation." },
  { question: "What if I'm concerned about withdrawal?", answer: "If you drink heavily and are considering reducing or stopping, please talk to a healthcare professional first. Alcohol withdrawal can be medically dangerous and sometimes requires supervised care. Do not attempt to stop suddenly without medical guidance if you have been drinking heavily." },
  { question: "Who created the AUDIT?", answer: "The AUDIT was developed by the World Health Organization as a simple method of screening for excessive drinking. It has been validated across many countries and cultures and is in the public domain." },
];

export default function AUDITPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "AUDIT Alcohol Screening Test", description: "A free online implementation of the AUDIT (Alcohol Use Disorders Identification Test), the World Health Organization's gold-standard 10-question alcohol screening tool.", url: TOOL_URL, datePublished: "2025-01-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "AUDIT Alcohol Test", url: TOOL_URL }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd({ name: "AUDIT Alcohol Screening Test", description: "A free online implementation of the AUDIT (Alcohol Use Disorders Identification Test), the World Health Organization's gold-standard 10-question alcohol screening tool.", url: TOOL_URL, lastReviewed: "2026-03-07" })) }} />
      <section className="sr-only">
        <h2>What Is the AUDIT Alcohol Screening?</h2>
        <h2>How Is the AUDIT Scored?</h2>
        <h2>What Do My AUDIT Results Mean?</h2>
      </section>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AuthorByline publishedDate="2025-01-01" modifiedDate={new Date().toISOString().split("T")[0]} />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The AUDIT is a 10-question WHO-validated alcohol use screening tool used in clinical and primary care settings."
          who="Anyone wanting to understand their relationship with alcohol using a clinically recognized instrument."
          bottomLine="AUDIT scores help identify drinking patterns on a standardized scale — results are informational and not a clinical diagnosis."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>
<AUDITClient faqData={FAQ_DATA} />

      {/* Related Tools */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/audit-score-interpretation" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Score Guide</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand what your AUDIT score means</p>
          </Link>
          <Link href="/audit-c-alcohol-screen" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT-C Quick Screen</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Brief 3-question alcohol screening</p>
          </Link>
          <Link href="/alcohol-screening-for-women" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Alcohol Screening for Women</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Gender-specific alcohol screening with context</p>
          </Link>
        </div>
      </div>
    </>
  );
}

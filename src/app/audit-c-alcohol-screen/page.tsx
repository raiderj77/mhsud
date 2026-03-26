import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { AUDITCClient } from "./AUDITCClient";

const TOOL_URL = `${SITE_URL}/audit-c-alcohol-screen`;

export const metadata: Metadata = createMetadata({
  path: "/audit-c-alcohol-screen",
  title: "AUDIT-C Alcohol Screen | Free 3-Question Test",
  description:
    "Take the free AUDIT-C alcohol screening — just 3 questions, under 60 seconds. The quick WHO-validated test for risky drinking. Private, no sign-up.",
  keywords: [
    "audit c screening", "alcohol use screening", "quick alcohol test",
    "audit-c", "audit c", "brief alcohol screen", "audit-c online",
    "audit-c score", "3 question alcohol test", "primary care alcohol screen",
    "audit-c questionnaire", "audit c test", "alcohol self-check",
  ],
  openGraph: {
    title: "AUDIT-C Alcohol Screen | Free 3-Question Test",
    description: "Take the free AUDIT-C alcohol screening — just 3 questions, under 60 seconds. WHO-validated, private, no sign-up.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the AUDIT-C screening test?", answer: "The AUDIT-C is a 3-question abbreviated version of the WHO's AUDIT tool. It screens for hazardous alcohol use by asking about drinking frequency, typical quantity, and frequency of heavy drinking occasions. It is widely used in primary care for rapid screening." },
  { question: "What is a positive AUDIT-C score?", answer: "For men, a score of 4 or above is considered a positive screen for hazardous drinking. For women, the threshold is 3 or above. A positive screen suggests that a more comprehensive assessment, such as the full AUDIT, may be appropriate." },
  { question: "How is the AUDIT-C different from the full AUDIT?", answer: "The AUDIT-C uses only the first 3 questions of the 10-question AUDIT. It focuses purely on consumption patterns and is faster to complete, but does not capture alcohol-related consequences or signs of dependence. A positive AUDIT-C often prompts follow-up with the full AUDIT." },
  { question: "Is the AUDIT-C test accurate?", answer: "The AUDIT-C has good sensitivity for detecting hazardous drinking and has been validated across multiple populations. It is a screening tool, not a diagnostic test, and results should be interpreted in the context of a broader clinical conversation." },
  { question: "Should I take the AUDIT-C or the full AUDIT?", answer: "If you want a quick initial check, the AUDIT-C takes under a minute. If you want a more thorough picture of your relationship with alcohol — including consequences and warning signs of dependence — take the full AUDIT. Many people do both." },
  { question: "Can this tool diagnose an alcohol problem?", answer: "No. The AUDIT-C is a brief screening tool, not a diagnostic instrument. A positive screen means further assessment is recommended, not that you have an alcohol use disorder. Only a healthcare professional can make a diagnosis." },
];

export default function AUDITCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "AUDIT-C Alcohol Screening Test", description: "A free online implementation of the AUDIT-C, a validated 3-question rapid alcohol screening tool derived from the WHO's AUDIT. Used in primary care for quick identification of hazardous drinking.", url: TOOL_URL, datePublished: "2025-01-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "AUDIT-C Alcohol Screen", url: TOOL_URL }])) }} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The AUDIT-C, a 3-question brief alcohol screening used in primary care to identify hazardous drinking patterns."
          who="Anyone who wants a quick validated check of their alcohol consumption against clinical risk thresholds."
          bottomLine="The AUDIT-C is a brief initial screen — a positive result suggests taking the full AUDIT for a more detailed assessment. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <section className="sr-only">
        <h2>What Is the AUDIT-C Alcohol Screen?</h2>
        <h2>How Is the AUDIT-C Scored?</h2>
        <h2>What Do My AUDIT-C Results Mean?</h2>
      </section>
            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
<AUDITCClient faqData={FAQ_DATA} />

      {/* Related Tools */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/audit-c-score-interpretation" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT-C Score Guide</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand what your AUDIT-C score means</p>
          </Link>
          <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Full AUDIT Test</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Complete 10-question WHO alcohol screening</p>
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

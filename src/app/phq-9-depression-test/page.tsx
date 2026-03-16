import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "./PHQ9Client";

const TOOL_URL = `${SITE_URL}/phq-9-depression-test`;

export const metadata: Metadata = createMetadata({
  path: "/phq-9-depression-test",
  title: "PHQ-9 Depression Test | Free Screening Tool",
  description:
    "Take the free PHQ-9 depression screening test. 9 questions, instant results, clinically validated. Reviewed by a CADC-II counselor. Not a diagnosis.",
  keywords: [
    "phq-9 test", "phq 9 questionnaire", "depression screening test",
    "phq9", "phq-9", "depression test", "depression questionnaire",
    "depression self-assessment", "online depression checker", "depression screening",
    "patient health questionnaire 9", "phq9 online", "phq-9 score",
    "free depression test", "mental health screening",
  ],
  openGraph: {
    title: "PHQ-9 Depression Test | Free Screening Tool",
    description: "Take the free PHQ-9 depression screening test used by doctors worldwide. 9 questions, 3 minutes. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the PHQ-9 test?", answer: "The PHQ-9 (Patient Health Questionnaire-9) is a clinically validated 9-question screening tool used by doctors and mental health professionals to assess the severity of depression. It measures how often you have experienced symptoms like low mood, sleep changes, and loss of interest over the past two weeks." },
  { question: "How is the PHQ-9 scored?", answer: "Each of the 9 questions is scored 0–3 (Not at all, Several days, More than half the days, Nearly every day). Total scores range from 0–27: 1–4 is minimal depression, 5–9 is mild, 10–14 is moderate, 15–19 is moderately severe, and 20–27 is severe depression." },
  { question: "Is the PHQ-9 questionnaire accurate?", answer: "The PHQ-9 has strong clinical validity and is widely used in primary care settings. However, it is a screening tool, not a diagnostic instrument. A positive screen should be followed up with a licensed mental health professional for a proper evaluation." },
  { question: "Can I use the PHQ-9 test online for free?", answer: "Yes. This tool provides the full PHQ-9 questionnaire at no cost. Your responses are processed entirely in your browser and are never stored or transmitted to any server." },
  { question: "What should I do if my PHQ-9 score is high?", answer: "A high score (10 or above) suggests it may be helpful to speak with a doctor or mental health professional. This screening tool is a starting point for a conversation, not a final answer. If you are in crisis or having thoughts of self-harm, please contact the 988 Suicide and Crisis Lifeline by calling or texting 988." },
  { question: "Can this tool diagnose depression?", answer: "No. The PHQ-9 is a screening instrument, not a diagnostic tool. Only a qualified healthcare professional can diagnose depression through a comprehensive evaluation that considers your full medical history, symptoms, and circumstances." },
  { question: "How often should I take the PHQ-9?", answer: "Some people find it helpful to complete the PHQ-9 periodically (e.g., every 2–4 weeks) to notice patterns over time. You can share results with your healthcare provider to support ongoing conversations about your mental health." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
];

export default function PHQ9Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "PHQ-9 Depression Test",
              description: "A free online implementation of the PHQ-9 Patient Health Questionnaire, the gold-standard 9-item depression screening tool used by clinicians worldwide.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: new Date().toISOString().split("T")[0],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQ_DATA)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "PHQ-9 Depression Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "PHQ-9 Depression Test",
              description: "A free online implementation of the PHQ-9 Patient Health Questionnaire, the gold-standard 9-item depression screening tool used by clinicians worldwide.",
              url: TOOL_URL,
              lastReviewed: "2026-03-07",
            })
          ),
        }}
      />

      <section className="sr-only">
        <h2>What Is the PHQ-9 Depression Screening?</h2>
        <h2>How Is the PHQ-9 Scored?</h2>
        <h2>What Do My PHQ-9 Results Mean?</h2>
      </section>
      <PHQ9Client faqData={FAQ_DATA} />

      {/* Internal Links */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/phq-9-score-interpretation" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Score Guide</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand what your depression score means</p>
          </Link>
          <Link href="/gad-7-score-interpretation" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Score Guide</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Anxiety screening interpretation and next steps</p>
          </Link>
          <Link href="/am-i-depressed-quiz" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Am I Depressed? Quiz</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided depression self-check with context</p>
          </Link>
        </div>
      </div>
    </>
  );
}

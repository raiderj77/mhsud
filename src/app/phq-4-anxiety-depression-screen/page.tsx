import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ4Client } from "./PHQ4Client";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/phq-4-anxiety-depression-screen`;

export const metadata: Metadata = createMetadata({
  path: "/phq-4-anxiety-depression-screen",
  title: "PHQ-4 Anxiety & Depression Screen | Free 4-Question Test",
  description:
    "Take the free PHQ-4 ultra-brief screening for anxiety and depression. 4 questions, under 60 seconds. Private, instant results scored in your browser.",
  keywords: [
    "phq-4 test", "phq4", "phq-4", "phq-4 screening",
    "anxiety and depression test", "ultra-brief depression screen",
    "quick anxiety test", "phq-4 questionnaire", "mental health screening",
    "free anxiety depression test", "4 question depression test",
    "patient health questionnaire 4", "phq-4 online",
  ],
  openGraph: {
    title: "PHQ-4 Anxiety & Depression Screen | Free 4-Question Test",
    description: "Take the free PHQ-4 ultra-brief screening for anxiety and depression. 4 questions, under 60 seconds. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the PHQ-4?", answer: "The PHQ-4 (Patient Health Questionnaire-4) is a validated ultra-brief screening tool that checks for both anxiety and depression using just 4 questions. It combines the first 2 items of the GAD-7 (anxiety) with the first 2 items of the PHQ-9 (depression). It is widely used in primary care, research, and population health settings." },
  { question: "How is the PHQ-4 scored?", answer: "Each of the 4 questions is scored 0–3 (Not at all, Several days, More than half the days, Nearly every day). Total scores range from 0–12: 0–2 is minimal, 3–5 is mild, 6–8 is moderate, and 9–12 is severe. The anxiety subscale (questions 1–2) and depression subscale (questions 3–4) each range from 0–6, with a score of 3 or higher suggesting possible difficulty in that area." },
  { question: "Is the PHQ-4 clinically validated?", answer: "Yes. The PHQ-4 was validated by Kroenke, Spitzer, Williams, and Löwe (2009) in a study of over 6,000 patients. It has strong psychometric properties for detecting anxiety and depressive disorders. However, it is a screening instrument, not a diagnostic tool." },
  { question: "When should I use the PHQ-4 vs. the full PHQ-9 or GAD-7?", answer: "The PHQ-4 is ideal as a first-step screener when time is limited or when you want a quick overall check. If the PHQ-4 indicates possible anxiety or depression (subscale score of 3 or higher), following up with the full GAD-7 or PHQ-9 provides a more detailed assessment of symptom severity." },
  { question: "Can this tool diagnose anxiety or depression?", answer: "No. The PHQ-4 is a screening instrument, not a diagnostic tool. Only a qualified healthcare professional can provide a diagnosis through a comprehensive evaluation. A positive screen is a starting point for a conversation with your doctor." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
  { question: "How often should I take the PHQ-4?", answer: "Some people find it helpful to complete the PHQ-4 periodically (e.g., every 2–4 weeks) to notice patterns over time. You can share results with your healthcare provider to support ongoing conversations about your mental health." },
];

export default function PHQ4Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "PHQ-4 Anxiety & Depression Screen",
              description: "A free online implementation of the PHQ-4 Patient Health Questionnaire-4, the validated ultra-brief screening tool for anxiety and depression used in primary care worldwide.",
              url: TOOL_URL,
              datePublished: "2026-03-01",
              dateModified: new Date().toISOString().substring(0,10),
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
              { name: "PHQ-4 Anxiety & Depression Screen", url: TOOL_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "PHQ-4 Anxiety & Depression Screen",
              description: "A free online implementation of the PHQ-4 Patient Health Questionnaire-4, the validated ultra-brief screening tool for anxiety and depression used in primary care worldwide.",
              url: TOOL_URL,
              lastReviewed: "2026-03-08",
            })
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The PHQ-4, an ultra-brief 4-question screening that simultaneously checks for both anxiety and depression."
          who="Anyone who wants the quickest possible validated check for both anxiety and depression symptoms."
          bottomLine="The PHQ-4 takes under a minute — a positive result on either subscale suggests taking the full GAD-7 or PHQ-9. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is the PHQ-4 Anxiety and Depression Screen?</h2>
        <h2>How Is the PHQ-4 Scored?</h2>
        <h2>What Do My PHQ-4 Results Mean?</h2>
      </section>
<PHQ4Client faqData={FAQ_DATA} />
    </>
  );
}

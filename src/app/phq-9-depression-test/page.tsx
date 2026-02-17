import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "./PHQ9Client";

const TOOL_URL = `${SITE_URL}/phq-9-depression-test`;

export const metadata: Metadata = createMetadata({
  path: "/phq-9-depression-test",
  title: "Free PHQ-9 Depression Self-Check (Private, Not a Diagnosis)",
  description:
    "Take the PHQ-9 depression screening questionnaire online for free. 9 questions, ~2 minutes, 100% private — your answers never leave your browser. Not a diagnosis.",
  keywords: [
    "phq9", "phq-9", "depression test", "depression questionnaire",
    "depression self-assessment", "online depression checker", "depression screening",
    "patient health questionnaire 9", "phq9 online", "phq-9 score",
    "depression self-check", "free depression test", "mental health screening",
    "am i depressed quiz", "depression symptoms test", "phq-9 scoring",
    "depression scale", "mood assessment",
  ],
  openGraph: {
    title: "PHQ-9 Depression Self-Check — Free & Private",
    description: "Take the validated PHQ-9 depression screener. 9 questions, private, not a diagnosis.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the PHQ-9?", answer: "The Patient Health Questionnaire-9 (PHQ-9) is a validated, 9-item self-report tool developed by Drs. Robert L. Spitzer, Janet B.W. Williams, and Kurt Kroenke, with funding from Pfizer Inc. It was placed in the public domain and is free to use without permission. It is widely used in clinical and research settings worldwide to screen for depressive symptoms." },
  { question: "Can this tool diagnose depression?", answer: "No. The PHQ-9 is a screening instrument, not a diagnostic tool. Only a qualified healthcare professional can diagnose depression through a comprehensive evaluation that considers your full medical history, symptoms, and circumstances." },
  { question: "How is the PHQ-9 score calculated?", answer: "Each of the 9 questions is scored from 0 (not at all) to 3 (nearly every day). Your total score ranges from 0 to 27. Research has established ranges that correspond to minimal, mild, moderate, moderately severe, and severe symptom levels — but these ranges are guidelines, not diagnoses." },
  { question: "How accurate is the PHQ-9?", answer: "The PHQ-9 has been extensively validated in research, showing good sensitivity and specificity for detecting major depressive disorder when used as a screening tool. However, no screening tool is perfect — false positives and false negatives occur, which is why professional follow-up is essential." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
  { question: "How often should I use the PHQ-9?", answer: "Some people find it helpful to complete the PHQ-9 periodically (e.g., every 2-4 weeks) to notice patterns over time. You can share results with your healthcare provider to support ongoing conversations about your mental health." },
  { question: "What should I do if my score is high?", answer: "A higher score suggests more depressive symptoms, but it does not mean you have a specific diagnosis. Please consider talking with a healthcare provider, therapist, or counselor. If you are having thoughts of self-harm, please reach out to a crisis service immediately." },
  { question: "Who created the PHQ-9?", answer: "The PHQ-9 was developed by Drs. Robert L. Spitzer, Janet B.W. Williams, and Kurt Kroenke with an educational grant from Pfizer Inc. It is in the public domain. This online implementation provides a clean, private, and accessible way to use this public-domain instrument." },
];

export default function PHQ9Page() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "PHQ-9 Depression Self-Check",
              description: "Free, private PHQ-9 depression screening questionnaire. 9 questions scored 0-27 with result interpretation. Runs entirely in your browser.",
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
              { name: "PHQ-9 Depression Self-Check", url: TOOL_URL },
            ])
          ),
        }}
      />

      <PHQ9Client faqData={FAQ_DATA} />
    </>
  );
}

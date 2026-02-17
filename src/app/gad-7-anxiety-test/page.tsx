import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { GAD7Client } from "./GAD7Client";

const TOOL_URL = `${SITE_URL}/gad-7-anxiety-test`;

export const metadata: Metadata = createMetadata({
  path: "/gad-7-anxiety-test",
  title: "Free GAD-7 Anxiety Self-Check (Private, Not a Diagnosis)",
  description:
    "Take the GAD-7 anxiety screening questionnaire online for free. 7 questions, ~2 minutes, 100% private — your answers never leave your browser. Not a diagnosis.",
  keywords: [
    "gad7", "gad-7", "anxiety test", "anxiety questionnaire",
    "anxiety self-assessment", "generalized anxiety disorder test", "anxiety screening",
    "gad-7 online", "gad-7 score", "anxiety self-check", "free anxiety test",
    "mental health screening", "anxiety symptoms test", "gad-7 scoring",
    "anxiety scale", "worry assessment", "generalized anxiety",
  ],
  openGraph: {
    title: "GAD-7 Anxiety Self-Check — Free & Private",
    description: "Take the validated GAD-7 anxiety screener. 7 questions, private, not a diagnosis.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the GAD-7?", answer: "The Generalized Anxiety Disorder-7 (GAD-7) is a validated, 7-item self-report questionnaire developed by Drs. Robert L. Spitzer, Kurt Kroenke, Janet B.W. Williams, and Bernd Löwe. It is widely used in clinical and research settings worldwide to screen for anxiety symptoms and is free to use without licensing fees." },
  { question: "Can this tool diagnose an anxiety disorder?", answer: "No. The GAD-7 is a screening instrument, not a diagnostic tool. Only a qualified healthcare professional can diagnose anxiety disorders through a comprehensive evaluation that considers your full history, symptoms, and circumstances." },
  { question: "How is the GAD-7 score calculated?", answer: "Each of the 7 questions is scored from 0 (not at all) to 3 (nearly every day). Your total score ranges from 0 to 21. Research has established ranges corresponding to minimal, mild, moderate, and severe anxiety symptom levels — but these are guidelines, not diagnoses." },
  { question: "Does the GAD-7 only screen for generalized anxiety?", answer: "While developed for generalized anxiety disorder, research has shown the GAD-7 also has reasonable sensitivity for detecting panic disorder, social anxiety disorder, and post-traumatic stress disorder. However, it is not a specific diagnostic tool for any of these conditions." },
  { question: "How accurate is the GAD-7?", answer: "The GAD-7 has been extensively validated and shows good sensitivity and specificity for detecting anxiety disorders. However, no screening tool is perfect — professional follow-up is essential for proper evaluation." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
  { question: "How often should I use the GAD-7?", answer: "Some people find it helpful to complete the GAD-7 periodically (e.g., every 2-4 weeks) to notice patterns over time. You can share results with your healthcare provider to support conversations about your mental health." },
  { question: "What should I do if my score is high?", answer: "A higher score suggests more anxiety symptoms, but does not mean you have a specific diagnosis. Consider talking with a healthcare provider, therapist, or counselor. If anxiety is significantly impacting your daily life, seeking help sooner is encouraged." },
];

export default function GAD7Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "GAD-7 Anxiety Self-Check",
              description: "Free, private GAD-7 anxiety screening questionnaire. 7 questions scored 0-21 with result interpretation. Runs entirely in your browser.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: new Date().toISOString().split("T")[0],
            })
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
              { name: "GAD-7 Anxiety Self-Check", url: TOOL_URL },
            ])
          ),
        }}
      />
      <GAD7Client faqData={FAQ_DATA} />
    </>
  );
}

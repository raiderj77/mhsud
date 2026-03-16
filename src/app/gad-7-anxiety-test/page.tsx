import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { GAD7Client } from "./GAD7Client";

const TOOL_URL = `${SITE_URL}/gad-7-anxiety-test`;

export const metadata: Metadata = createMetadata({
  path: "/gad-7-anxiety-test",
  title: "GAD-7 Anxiety Test | Free Online Screening",
  description:
    "Take the free GAD-7 anxiety test — the clinically validated 7-question screening used by doctors. Results in 2 minutes. Private, no sign-up needed.",
  keywords: [
    "gad-7 test", "anxiety test", "gad 7 questionnaire",
    "gad7", "gad-7", "anxiety questionnaire",
    "anxiety self-assessment", "generalized anxiety disorder test", "anxiety screening",
    "gad-7 online", "gad-7 score", "free anxiety test",
    "mental health screening", "anxiety symptoms test",
  ],
  openGraph: {
    title: "GAD-7 Anxiety Test | Free Online Screening",
    description: "Take the free GAD-7 anxiety test — clinically validated, 7 questions, results in 2 minutes. Private, no sign-up needed.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the GAD-7 test?", answer: "The GAD-7 (Generalized Anxiety Disorder-7) is a validated 7-question screening tool used by clinicians to assess the severity of generalized anxiety disorder. It asks how often you have experienced anxiety symptoms over the past two weeks." },
  { question: "What is a normal GAD-7 score?", answer: "GAD-7 scores are interpreted as follows: 0–4 is minimal anxiety, 5–9 is mild, 10–14 is moderate, and 15–21 is severe anxiety. A score of 10 or above is often used as a threshold to indicate further clinical evaluation is warranted." },
  { question: "What does the GAD-7 questionnaire measure?", answer: "The GAD-7 measures seven core anxiety symptoms: feeling nervous or on edge, inability to control worrying, worrying too much, difficulty relaxing, restlessness, irritability, and feeling afraid something awful might happen." },
  { question: "Is the GAD-7 test the same as a diagnosis?", answer: "No. The GAD-7 is a screening tool, not a diagnostic instrument. A high score indicates that anxiety symptoms are present and that talking to a mental health professional would be beneficial. Only a licensed clinician can provide a formal diagnosis." },
  { question: "Can anxiety and depression occur together?", answer: "Yes, anxiety and depression frequently co-occur. Research suggests that approximately 50% of people diagnosed with depression are also diagnosed with an anxiety disorder. If you score high on the GAD-7, taking the PHQ-9 depression screening may also be informative." },
  { question: "Does the GAD-7 only screen for generalized anxiety?", answer: "While developed for generalized anxiety disorder, research has shown the GAD-7 also has reasonable sensitivity for detecting panic disorder, social anxiety disorder, and post-traumatic stress disorder. However, it is not a specific diagnostic tool for any of these conditions." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
  { question: "What should I do if my GAD-7 score is high?", answer: "A higher score suggests more anxiety symptoms, but does not mean you have a specific diagnosis. Consider talking with a healthcare provider, therapist, or counselor. If anxiety is significantly impacting your daily life, seeking help sooner is encouraged." },
  { question: "What does my anxiety assessment score mean?", answer: "Your GAD-7 score reflects the frequency of anxiety symptoms over the past two weeks. Scores of 0\u20134 indicate minimal anxiety, 5\u20139 mild, 10\u201314 moderate, and 15\u201321 severe. The score helps identify whether anxiety symptoms are present and how much they may be affecting your daily life. It is a snapshot, not a permanent label." },
  { question: "Is this anxiety test medically accurate?", answer: "The GAD-7 is one of the most extensively validated anxiety screening tools in clinical research. Studies demonstrate a sensitivity of 89% and specificity of 82% for generalized anxiety disorder at a cutoff score of 10. It is used by doctors, psychologists, and researchers worldwide. However, it is a screening tool \u2014 not a diagnostic instrument \u2014 and results should be discussed with a healthcare professional for proper context." },
  { question: "How often should I take an anxiety assessment?", answer: "The GAD-7 measures symptoms over the past two weeks, so retaking it every 2\u20134 weeks is a practical interval for tracking changes. If you are currently receiving treatment, your provider may use repeated GAD-7 scores to monitor progress. A drop of 5 or more points is generally considered a clinically meaningful improvement." },
];

export default function GAD7Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "GAD-7 Anxiety Test",
              description: "A free online implementation of the GAD-7 (Generalized Anxiety Disorder-7) questionnaire, a clinically validated screening tool for measuring anxiety severity.",
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
              { name: "GAD-7 Anxiety Test", url: TOOL_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "GAD-7 Anxiety Test",
              description: "A free online implementation of the GAD-7 (Generalized Anxiety Disorder-7) questionnaire, a clinically validated screening tool for measuring anxiety severity.",
              url: TOOL_URL,
              lastReviewed: "2026-03-07",
            })
          ),
        }}
      />
      <section className="sr-only">
        <h2>What Is the GAD-7 Anxiety Screening?</h2>
        <h2>How Is the GAD-7 Scored?</h2>
        <h2>What Do My GAD-7 Results Mean?</h2>
      </section>
            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
<GAD7Client faqData={FAQ_DATA} />
    </>
  );
}

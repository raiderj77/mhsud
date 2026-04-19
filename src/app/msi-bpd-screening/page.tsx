import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { MSIBPDClient } from "./MSIBPDClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/msi-bpd-screening`;

export const metadata: Metadata = createMetadata({
  path: "/msi-bpd-screening",
  title: "MSI-BPD Borderline Personality Screen",
  description:
    "Take the free MSI-BPD borderline personality disorder screening. 10 yes/no questions, 2 minutes. Private, instant results. Not a diagnosis — a starting point.",
  keywords: [
    "msi-bpd", "msi-bpd test", "borderline personality disorder test",
    "bpd screening", "bpd test", "borderline personality disorder screening",
    "mclean screening instrument", "bpd self-assessment",
    "borderline personality disorder quiz", "bpd questionnaire",
    "do i have bpd", "borderline personality test online",
    "free bpd screening", "mental health screening",
  ],
  openGraph: {
    title: "MSI-BPD Borderline Personality Screen",
    description: "Take the free MSI-BPD borderline personality disorder screening. 10 yes/no questions, 2 minutes. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the MSI-BPD screening test?", answer: "The MSI-BPD (McLean Screening Instrument for Borderline Personality Disorder) is a 10-item yes/no screening tool developed by Dr. Mary Zanarini and colleagues at McLean Hospital. It is designed to identify individuals who may meet criteria for borderline personality disorder and is widely used in clinical and research settings." },
  { question: "How is the MSI-BPD scored?", answer: "Each 'Yes' answer scores 1 point, for a total between 0 and 10. A score of 7 or higher is considered a positive screen, suggesting further evaluation may be warranted. Scores of 5 to 6 fall in an uncertain range where BPD cannot be ruled out. Scores of 0 to 4 suggest a lower likelihood." },
  { question: "Is the MSI-BPD screening accurate?", answer: "The MSI-BPD has strong sensitivity (0.81) and specificity (0.85) for identifying borderline personality disorder at the cutoff of 7 or higher. However, it is a screening instrument, not a diagnostic tool. A positive screen should be followed by a comprehensive evaluation with a licensed mental health professional." },
  { question: "Can this tool diagnose borderline personality disorder?", answer: "No. The MSI-BPD is a screening instrument only. A borderline personality disorder assessment requires a thorough clinical evaluation by a qualified mental health professional who considers your full history, symptoms, and functioning. This tool is for personal reflection and education only." },
  { question: "What should I do if my MSI-BPD score is 7 or higher?", answer: "A score of 7 or higher suggests it may be helpful to speak with a mental health professional who is experienced with personality disorders. Effective treatments like Dialectical Behavior Therapy (DBT) and Mentalization-Based Therapy (MBT) are available. This screening result is a starting point for a conversation, not a final answer." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
  { question: "What is borderline personality disorder (BPD)?", answer: "BPD is a mental health condition characterized by patterns of instability in relationships, self-image, and emotions, along with impulsive behavior. People with BPD may experience intense episodes of anger, anxiety, and depression that can last hours to days. With proper support and evidence-based treatment, many people with BPD experience significant improvement." },
];

export default function MSIBPDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "MSI-BPD Borderline Personality Disorder Screening",
              description: "A free online implementation of the McLean Screening Instrument for Borderline Personality Disorder (MSI-BPD), a validated 10-item yes/no screening tool developed by Zanarini et al.",
              url: TOOL_URL,
              datePublished: "2026-03-08",
              dateModified: "2026-04-14",
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
              { name: "MSI-BPD Screening", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "MSI-BPD Borderline Personality Disorder Screening",
              description: "A free online implementation of the McLean Screening Instrument for Borderline Personality Disorder (MSI-BPD), a validated 10-item yes/no screening tool developed by Zanarini et al.",
              url: TOOL_URL,
              lastReviewed: "2026-03-08",
            })
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The McLean Screening Instrument for BPD, a 10-item validated screening for borderline personality disorder."
          who="Adults who experience emotional instability, relationship difficulties, or identity confusion and want to screen for BPD."
          bottomLine="The MSI-BPD is a well-validated screening tool — a positive result indicates further evaluation by a specialist. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>


      <p className="text-sm text-gray-500 mt-2 mb-0 text-center">Last reviewed: April 2026</p>

      <section className="sr-only">
        <h2>What Is the MSI-BPD Screening?</h2>
        <h2>How Is the MSI-BPD Scored?</h2>
        <h2>What Do My MSI-BPD Results Mean?</h2>
      </section>
            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
<MSIBPDClient faqData={FAQ_DATA} />
    </>
  );
}

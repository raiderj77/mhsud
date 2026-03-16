import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { K6Client } from "./K6Client";

const TOOL_URL = `${SITE_URL}/k6-distress-scale`;

export const metadata: Metadata = createMetadata({
  path: "/k6-distress-scale",
  title: "K6 Distress Scale | Free Mental Health Check",
  description:
    "Free Kessler-6 psychological distress screening. 6 questions, past 30 days. Used in national health surveys. Private, instant results.",
  keywords: [
    "K6", "Kessler 6", "K6 distress scale",
    "psychological distress test", "K6 screening",
    "Kessler psychological distress scale",
    "K6 test online", "mental distress screening",
    "K6 score", "serious psychological distress",
    "K6 questionnaire", "psychological distress scale free",
  ],
  openGraph: {
    title: "K6 Distress Scale | Free Mental Health Check",
    description:
      "Free Kessler-6 psychological distress screening. 6 questions, past 30 days. Used in national health surveys. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the K6?",
    answer:
      "The K6 (Kessler Psychological Distress Scale) is a 6-item screening tool developed by Ronald Kessler and colleagues at Harvard Medical School in collaboration with the World Health Organization. It measures nonspecific psychological distress — a general indicator of emotional difficulty that spans anxiety, depression, and other forms of mental distress. It is one of the most widely used brief mental health screening instruments in the world, included in major national surveys like the NSDUH and NHIS.",
  },
  {
    question: "How is the K6 scored?",
    answer:
      "Each of the six items is rated on a 5-point scale from 0 (None of the time) to 4 (All of the time) for the past 30 days. The total score ranges from 0 to 24. A score of 0-4 suggests low distress, 5-12 suggests moderate distress, and 13 or higher meets the threshold for serious psychological distress (SPD). The SPD cutoff of 13 is the same threshold used by SAMHSA in the National Survey on Drug Use and Health.",
  },
  {
    question: "What does 'serious psychological distress' mean?",
    answer:
      "Serious psychological distress (SPD) is a classification used in national health surveys to identify people experiencing a level of emotional difficulty that is likely to impair functioning and may indicate the presence of a mental health condition. It does not correspond to any single disorder — it is a general indicator that something significant is affecting your mental health. In the NSDUH, approximately 5-6% of U.S. adults meet the SPD threshold in any given year. A K6 score of 13 or higher warrants follow-up with a more specific screening tool or a healthcare provider.",
  },
  {
    question: "What is the difference between the K6 and the K10?",
    answer:
      "The K10 is the full 10-item version of the Kessler Psychological Distress Scale, and the K6 is a shorter 6-item version derived from it. Both were developed together by Ronald Kessler and colleagues. Research has shown that the K6 performs nearly as well as the K10 for identifying serious mental illness, which is why it became the preferred version for brief screening and population-level surveys. The K10 may provide slightly more nuanced information but requires four additional questions. Both are freely available for use.",
  },
  {
    question: "How is the K6 different from the PHQ-9 or GAD-7?",
    answer:
      "The K6 measures general psychological distress — it picks up on a range of negative emotional experiences without identifying a specific condition. The PHQ-9 specifically screens for depression based on DSM-5 criteria, and the GAD-7 specifically screens for generalized anxiety. The K6 is often used as a first-step screener: if the score is elevated, more specific tools like the PHQ-9 or GAD-7 can help pinpoint what type of distress is most prominent. They complement each other well.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function K6Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "K6 Psychological Distress Scale",
              description:
                "A free online implementation of the Kessler-6 (K6) Psychological Distress Scale, a 6-item measure of nonspecific psychological distress. Scores 0-24 with serious psychological distress threshold at 13+. Used in national health surveys (NSDUH, NHIS). Public domain.",
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
              { name: "K6 Distress Scale", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the K6 Distress Scale?</h2>
        <h2>How Is the K6 Distress Scale Scored?</h2>
        <h2>What Do My K6 Distress Results Mean?</h2>
      </section>
<K6Client faqData={FAQ_DATA} />
    </>
  );
}

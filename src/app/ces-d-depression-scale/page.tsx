import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CesdClient } from "./CesdClient";

const TOOL_URL = `${SITE_URL}/ces-d-depression-scale`;

export const metadata: Metadata = createMetadata({
  path: "/ces-d-depression-scale",
  title: "CES-D Depression Scale | Free Self-Check",
  description:
    "Free CES-D depression screening. 20 items, past week. Developed by NIMH. Instant results with clinical cutoff. Private, no signup.",
  keywords: [
    "CES-D", "CES-D depression scale", "CES-D test",
    "depression screening test", "CES-D online",
    "center for epidemiologic studies depression",
    "CES-D questionnaire", "depression self-assessment",
    "CES-D score", "depression test free",
    "CES-D 20 item", "CES-D screening",
  ],
  openGraph: {
    title: "CES-D Depression Scale | Free Self-Check",
    description:
      "Free CES-D depression screening. 20 items, past week. Developed by NIMH. Instant results with clinical cutoff. Private, no signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the CES-D?",
    answer:
      "The CES-D (Center for Epidemiologic Studies Depression Scale) is a 20-item self-report depression screening tool developed by Lenore Radloff at the National Institute of Mental Health (NIMH) in 1977. It was originally designed for epidemiological research to measure depressive symptoms in the general population. It covers depressed mood, feelings of guilt and worthlessness, helplessness, psychomotor retardation, loss of appetite, and sleep disturbance. It is one of the most widely cited depression instruments in the world.",
  },
  {
    question: "How is the CES-D scored?",
    answer:
      "Each of the 20 items is rated on a 4-point scale for the past week: 0 (Rarely or none of the time — less than 1 day), 1 (Some or a little of the time — 1-2 days), 2 (Occasionally or a moderate amount — 3-4 days), 3 (Most or all of the time — 5-7 days). Four items (#4, #8, #12, #16) are positively worded and reverse-scored: for these, the scoring is reversed (0 becomes 3, 1 becomes 2, etc.). The total score ranges from 0 to 60. A score of 16 or higher is the traditional cutoff suggesting clinically significant depressive symptoms.",
  },
  {
    question: "What are the reverse-scored items?",
    answer:
      "Items 4 (\"I felt that I was just as good as other people\"), 8 (\"I felt hopeful about the future\"), 12 (\"I was happy\"), and 16 (\"I enjoyed life\") are positively worded. For these items, answering \"Most or all of the time\" scores 0 (indicating good wellbeing), while \"Rarely\" scores 3 (indicating poor wellbeing). This reverse scoring prevents response bias (where someone might select the same answer for every item without reading) and allows the scale to measure both negative symptoms and the absence of positive affect.",
  },
  {
    question: "What is the difference between the CES-D and the PHQ-9?",
    answer:
      "Both screen for depression, but they differ in scope and clinical use. The CES-D has 20 items and covers a broader range of experiences including interpersonal difficulties and positive affect. The PHQ-9 has 9 items directly aligned with DSM-5 diagnostic criteria for major depressive disorder. The PHQ-9 is more commonly used in clinical settings today because of its brevity and diagnostic alignment. The CES-D remains widely used in research, community health screening, and studies involving diverse populations. Both are free and public domain.",
  },
  {
    question: "What does a CES-D score of 16 or higher mean?",
    answer:
      "A score of 16 or higher on the CES-D is the traditionally used cutoff suggesting clinically significant depressive symptoms. This threshold was established in Radloff's original 1977 validation study and has been replicated in many populations. However, exceeding this cutoff does not mean you have clinical depression — it means your symptom level warrants further evaluation. Many factors can elevate a CES-D score, including grief, stress, medical illness, or sleep deprivation. A qualified healthcare professional can help determine what your symptoms mean in context.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function CesdPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "CES-D Depression Scale",
              description:
                "A free online implementation of the CES-D (Center for Epidemiologic Studies Depression Scale), a 20-item self-report depression screening tool developed by NIMH. Scores 0-60 with clinical cutoff at 16. Includes 4 reverse-scored positive-affect items. Public domain.",
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
              { name: "CES-D Depression Scale", url: TOOL_URL },
            ])
          ),
        }}
      />

      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <CesdClient faqData={FAQ_DATA} />
    </>
  );
}

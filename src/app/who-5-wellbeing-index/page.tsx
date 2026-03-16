import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { Who5Client } from "./Who5Client";

const TOOL_URL = `${SITE_URL}/who-5-wellbeing-index`;

export const metadata: Metadata = createMetadata({
  path: "/who-5-wellbeing-index",
  title: "WHO-5 Well-Being Index | Free Wellbeing Check",
  description:
    "Free WHO-5 Well-Being Index. 5 questions about your wellbeing over the past 2 weeks. Instant percentage score. Private, no signup.",
  keywords: [
    "WHO-5", "WHO 5", "well-being index", "wellbeing index",
    "WHO-5 well-being index", "mental wellbeing test",
    "wellbeing questionnaire", "WHO-5 test", "WHO-5 score",
    "wellbeing assessment", "WHO wellbeing scale",
    "mental health wellbeing check", "WHO-5 online free",
  ],
  openGraph: {
    title: "WHO-5 Well-Being Index | Free Wellbeing Check",
    description:
      "Free WHO-5 Well-Being Index. 5 questions about your wellbeing over the past 2 weeks. Instant percentage score. Private, no signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the WHO-5 Well-Being Index?",
    answer:
      "The WHO-5 Well-Being Index is a short questionnaire developed by the World Health Organization in 1998 to measure subjective psychological wellbeing. It consists of five positively worded statements rated on a 6-point scale for the past two weeks. It is one of the most widely used wellbeing measures in the world, translated into more than 30 languages, and has been validated in hundreds of studies across many populations and clinical settings.",
  },
  {
    question: "How is the WHO-5 scored?",
    answer:
      "Each of the five items is rated from 0 (At no time) to 5 (All of the time). The raw score ranges from 0 to 25. This raw score is multiplied by 4 to produce a percentage score from 0 to 100, where 0 represents the worst possible wellbeing and 100 represents the best. A percentage score below 50 suggests low wellbeing and indicates that further evaluation may be appropriate. A score below 28 is associated with depression in research studies and suggests screening with a tool like the PHQ-9.",
  },
  {
    question: "Is the WHO-5 a depression test?",
    answer:
      "No. The WHO-5 is a general wellbeing measure, not a depression screening tool. It uses positively worded items (cheerfulness, calm, energy, rest, engagement) rather than asking about depressive symptoms. However, research has consistently shown that low WHO-5 scores are associated with depression, which is why a score below 50% is a signal to consider further evaluation with a depression-specific screener like the PHQ-9. The WHO-5 can detect reduced wellbeing from many causes — not just depression.",
  },
  {
    question: "How is the WHO-5 different from the PHQ-9 or GAD-7?",
    answer:
      "The PHQ-9 screens specifically for depression symptoms, and the GAD-7 screens specifically for anxiety symptoms. Both use negatively framed questions about problems and difficulties. The WHO-5 measures positive wellbeing — it asks about good feelings and experiences rather than symptoms. This makes the WHO-5 less stigmatizing and useful as a general check-in, while the PHQ-9 and GAD-7 are more specific clinical screening tools. They complement each other well: a low WHO-5 score tells you something is off, and tools like the PHQ-9 can help identify what.",
  },
  {
    question: "Can I use the WHO-5 to track my wellbeing over time?",
    answer:
      "Yes, and this is one of its primary strengths. The WHO-5 is designed to be taken repeatedly — weekly, biweekly, or monthly — to monitor changes in wellbeing. A change of 10 percentage points or more from a previous score is considered clinically significant. Tracking your score over time can help you notice patterns related to seasons, life events, work stress, sleep changes, or treatment effects. Many clinicians use the WHO-5 as a routine monitoring tool for this reason.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function Who5Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "WHO-5 Well-Being Index",
              description:
                "A free online implementation of the WHO-5 Well-Being Index, a 5-item positive wellbeing measure developed by the World Health Organization. Raw score 0-25, percentage score 0-100%. Scores below 50% suggest further evaluation; below 28% suggest depression screening.",
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
              { name: "WHO-5 Well-Being Index", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the WHO-5 Wellbeing Index?</h2>
        <h2>How Is the WHO-5 Scored?</h2>
        <h2>What Do My WHO-5 Results Mean?</h2>
      </section>
<Who5Client faqData={FAQ_DATA} />
    </>
  );
}

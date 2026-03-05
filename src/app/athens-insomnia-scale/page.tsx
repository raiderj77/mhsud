import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AISClient } from "./AISClient";

const TOOL_URL = `${SITE_URL}/athens-insomnia-scale`;

export const metadata: Metadata = createMetadata({
  path: "/athens-insomnia-scale",
  title: "Athens Insomnia Scale | Free Insomnia Self-Check",
  description:
    "Free Athens Insomnia Scale (AIS). 8 items, past month, score 0-24. Based on ICD-10 criteria (Soldatos et al., 2000). Score 6+ suggests insomnia. Private, instant results.",
  keywords: [
    "Athens insomnia scale", "AIS", "insomnia test",
    "insomnia questionnaire", "insomnia screening",
    "sleep disorder test", "insomnia self-check",
    "Athens insomnia scale online", "insomnia assessment",
    "sleep quality test", "do I have insomnia",
    "insomnia scale free", "Soldatos insomnia",
  ],
  openGraph: {
    title: "Athens Insomnia Scale | Free Insomnia Self-Check",
    description:
      "Free Athens Insomnia Scale (AIS). 8 items, past month, score 0-24. Based on ICD-10 criteria (Soldatos et al., 2000). Score 6+ suggests insomnia. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the Athens Insomnia Scale?",
    answer:
      "The Athens Insomnia Scale (AIS) is an 8-item self-report questionnaire designed to measure insomnia severity based on the ICD-10 diagnostic criteria. It was developed by Constantine Soldatos and colleagues at the University of Athens and published in 2000 in the Journal of Psychosomatic Research. The first five items assess nighttime sleep problems (difficulty falling asleep, nighttime awakenings, early morning awakening, total sleep duration, and overall sleep quality) and the last three items assess daytime consequences (well-being, functioning, and sleepiness). It is one of the most widely used insomnia screening instruments in clinical research.",
  },
  {
    question: "How is the Athens Insomnia Scale scored?",
    answer:
      "Each of the 8 items is rated from 0 (no problem) to 3 (severe problem) based on your experience over the past month. The total score ranges from 0 to 24. A score of 6 or higher suggests the presence of insomnia. In the original validation study, this cutoff of 6 demonstrated 93% sensitivity and 85% specificity for identifying insomnia based on ICD-10 criteria. Higher scores indicate more severe insomnia: 6-9 is considered mild, 10-15 moderate, and 16-24 severe.",
  },
  {
    question: "What is the difference between the AIS and other insomnia scales?",
    answer:
      "The Athens Insomnia Scale is based specifically on ICD-10 diagnostic criteria for insomnia, which makes it clinically grounded. Other common insomnia measures include the Insomnia Severity Index (ISI), which is based on DSM criteria, and the Pittsburgh Sleep Quality Index (PSQI), which is a broader sleep quality measure. The AIS is shorter than the PSQI (8 items vs. 19) and uniquely includes daytime consequences as part of the core assessment. All three are validated and widely used; the AIS is particularly popular in European and international research.",
  },
  {
    question: "How is insomnia related to mental health?",
    answer:
      "Insomnia and mental health are deeply interconnected. Insomnia is both a symptom of and a risk factor for depression, anxiety, PTSD, and substance use disorders. Research shows that people with insomnia are approximately twice as likely to develop depression as those without sleep difficulties. Insomnia can also worsen existing mental health conditions by impairing emotion regulation, concentration, and stress tolerance. Conversely, treating insomnia often improves depression and anxiety symptoms even when those conditions are not directly treated. If your AIS score is elevated, it may be helpful to also screen for depression (PHQ-9) or anxiety (GAD-7).",
  },
  {
    question: "When should I see a doctor about insomnia?",
    answer:
      "Consider speaking with a healthcare provider if your sleep difficulties have persisted for more than a few weeks, if they are affecting your daytime functioning (work, relationships, safety), or if your AIS score is 6 or higher. The first-line treatment for chronic insomnia is Cognitive Behavioral Therapy for Insomnia (CBT-I), which has strong evidence and is recommended over medication by the American College of Physicians. A doctor can also rule out other conditions that may be affecting your sleep, such as sleep apnea, restless leg syndrome, or medical conditions.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function AISPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Athens Insomnia Scale (AIS)",
              description:
                "A free online implementation of the Athens Insomnia Scale (Soldatos et al., 2000), an 8-item measure of insomnia severity based on ICD-10 criteria. Score 0-24 with cutoff of 6+ for insomnia (93% sensitivity, 85% specificity).",
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
              { name: "Athens Insomnia Scale", url: TOOL_URL },
            ])
          ),
        }}
      />

      <AISClient faqData={FAQ_DATA} />
    </>
  );
}

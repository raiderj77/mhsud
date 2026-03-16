import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { HolmesRaheClient } from "./HolmesRaheClient";

const TOOL_URL = `${SITE_URL}/holmes-rahe-stress-inventory`;

export const metadata: Metadata = createMetadata({
  path: "/holmes-rahe-stress-inventory",
  title: "Holmes-Rahe Stress Inventory | Life Stress Self-Check",
  description:
    "Free Holmes-Rahe Social Readjustment Rating Scale. 43-item life stress checklist with Life Change Units scoring. Check events from the past 12 months. Private, no signup.",
  keywords: [
    "Holmes-Rahe stress inventory", "social readjustment rating scale",
    "life stress test", "Holmes and Rahe", "life change units",
    "stress scale", "life events stress", "Holmes-Rahe scale",
    "stress screening", "life stress checklist",
    "stressful life events questionnaire",
    "stress risk assessment",
  ],
  openGraph: {
    title: "Holmes-Rahe Stress Inventory | Life Stress Self-Check",
    description:
      "Free Holmes-Rahe Social Readjustment Rating Scale. 43-item life stress checklist with Life Change Units scoring. Private, no signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the Holmes-Rahe Stress Inventory?",
    answer:
      "The Holmes-Rahe Social Readjustment Rating Scale is a 43-item life stress checklist developed by psychiatrists Thomas Holmes and Richard Rahe in 1967. It measures stress by assigning Life Change Units (LCU) to major life events. The scale was developed by studying over 5,000 medical patients and correlating life events with illness onset. It remains one of the most widely cited stress measurement tools in psychological research.",
  },
  {
    question: "How is the Holmes-Rahe Scale scored?",
    answer:
      "You check all life events that have occurred in the past 12 months. Each event has a pre-assigned Life Change Unit (LCU) value ranging from 11 to 100. Your total score is the sum of all checked events. Scores below 150 suggest low susceptibility to stress-related illness. Scores of 150-299 suggest about a 50% chance of a major health breakdown in the next 2 years. Scores of 300 or more suggest about an 80% chance — though these are statistical associations, not certainties.",
  },
  {
    question: "What are Life Change Units (LCU)?",
    answer:
      "Life Change Units are numerical values assigned to each life event based on the amount of readjustment that event typically requires. Holmes and Rahe determined these values by surveying thousands of people about the relative amount of adjustment each event demanded. Death of a spouse received the highest value (100 LCU), while minor violations of the law received the lowest (11 LCU). Importantly, both positive and negative events receive LCU values because all major life changes require adaptation.",
  },
  {
    question: "Is this a medical test?",
    answer:
      "No. The Holmes-Rahe Stress Inventory is a self-reflection and educational tool, not a clinical diagnosis or medical test. It identifies statistical associations between accumulated life changes and health risk at the population level — it does not predict what will happen to any individual. Many people with high scores remain healthy, and many factors (coping skills, social support, physical health) influence outcomes. Always consult a healthcare professional for health concerns.",
  },
  {
    question: "Why are positive events included in the scale?",
    answer:
      "The Holmes-Rahe Scale measures life change and readjustment, not just negative stress. Events like marriage, retirement, pregnancy, and outstanding personal achievement all require significant adaptation and adjustment — even though they are positive. The research behind the scale found that any major life change, whether welcome or unwelcome, contributes to the overall stress load on the body and mind. This is why positive events like vacation (13 LCU) and Christmas (12 LCU) appear on the list.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function HolmesRahePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Holmes-Rahe Life Stress Inventory",
              description:
                "A free online implementation of the Holmes-Rahe Social Readjustment Rating Scale (1967). 43-item life stress checklist where users check life events from the past 12 months. Each event has assigned Life Change Units (LCU). Three risk tiers: Low (0-149), Moderate (150-299), High (300+).",
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
              { name: "Holmes-Rahe Stress Inventory", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the Holmes-Rahe Stress Inventory?</h2>
        <h2>How Is the Holmes-Rahe Stress Inventory Scored?</h2>
        <h2>What Do My Stress Inventory Results Mean?</h2>
      </section>
<HolmesRaheClient faqData={FAQ_DATA} />
    </>
  );
}

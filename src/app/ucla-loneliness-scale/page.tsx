import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { UCLAClient } from "./UCLAClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/ucla-loneliness-scale`;

export const metadata: Metadata = createMetadata({
  path: "/ucla-loneliness-scale",
  title: "UCLA Loneliness Scale | Free Loneliness Self-Check",
  description:
    "Free UCLA Loneliness Scale (Version 3, Russell 1996). 20 items, 9 reverse-scored. Score 20-80. Research cutoff 44+ for elevated loneliness. Private, instant results.",
  keywords: [
    "UCLA loneliness scale", "loneliness test", "loneliness questionnaire",
    "UCLA loneliness scale version 3", "Russell loneliness scale",
    "loneliness screening", "loneliness assessment",
    "UCLA loneliness score", "am I lonely test",
    "loneliness scale free", "social isolation test",
    "UCLA loneliness scale online",
  ],
  openGraph: {
    title: "UCLA Loneliness Scale | Free Loneliness Self-Check",
    description:
      "Free UCLA Loneliness Scale (Version 3, Russell 1996). 20 items, 9 reverse-scored. Score 20-80. Research cutoff 44+ for elevated loneliness. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the UCLA Loneliness Scale?",
    answer:
      "The UCLA Loneliness Scale (Version 3) is a 20-item self-report measure of subjective feelings of loneliness and social isolation. It was developed by Daniel Russell at UCLA and published in its current form in 1996. It is the most widely used loneliness measure in psychological research, cited in thousands of studies. The scale measures how often you experience feelings of disconnection, lack of companionship, and social isolation. It includes both negatively worded items (e.g., 'How often do you feel alone?') and positively worded items (e.g., 'How often do you feel close to people?') to reduce response bias.",
  },
  {
    question: "How is the UCLA Loneliness Scale scored?",
    answer:
      "Each of the 20 items is rated on a 4-point scale: Never (1), Rarely (2), Sometimes (3), or Always (4). Nine items are positively worded and reverse-scored, meaning that answering 'Always' to a positive item scores 1 instead of 4. The total score ranges from 20 to 80. Higher scores indicate greater loneliness. A score of 44 or higher is commonly used in research as a threshold for elevated loneliness, though there is no single universally agreed-upon clinical cutoff.",
  },
  {
    question: "What does an elevated loneliness score mean?",
    answer:
      "An elevated score on the UCLA Loneliness Scale means you are experiencing a higher-than-typical level of subjective loneliness. Loneliness is the feeling that your social connections are not meeting your needs — it is about perceived quality of relationships, not just quantity. You can feel lonely in a crowd or while in a relationship. Research has linked chronic loneliness to increased risk of depression, anxiety, cardiovascular disease, cognitive decline, and weakened immune function. An elevated score does not mean something is wrong with you, but it may be worth exploring what is contributing to these feelings, whether through self-reflection, social changes, or speaking with a therapist.",
  },
  {
    question: "Is loneliness the same as being alone?",
    answer:
      "No. Loneliness and being alone (solitude) are different things. Solitude is an objective state — you are physically by yourself. Loneliness is a subjective emotional experience — the feeling that your social needs are not being met. Some people enjoy solitude and do not feel lonely. Others feel deeply lonely despite being surrounded by people. The UCLA Loneliness Scale measures subjective loneliness, not how much time you spend alone. Research consistently shows that the quality of social connections matters more than the quantity.",
  },
  {
    question: "How is loneliness related to depression and anxiety?",
    answer:
      "Loneliness and mental health conditions like depression and anxiety frequently co-occur and can reinforce each other. Loneliness increases the risk of developing depression, and depression can lead to social withdrawal that deepens loneliness. Similarly, social anxiety can prevent people from forming the connections they need, leading to loneliness. If your loneliness score is elevated, it may be helpful to also take a depression screening (like the PHQ-9) or an anxiety screening (like the GAD-7) to get a more complete picture of what you are experiencing.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function UCLAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "UCLA Loneliness Scale (Version 3)",
              description:
                "A free online implementation of the UCLA Loneliness Scale Version 3 (Russell, 1996), a 20-item measure of subjective loneliness and social isolation. Score 20-80 with 9 reverse-scored items. Research cutoff of 44+ for elevated loneliness.",
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
              { name: "UCLA Loneliness Scale", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The UCLA Loneliness Scale, a 20-item validated measure of subjective loneliness and social isolation."
          who="Anyone who feels disconnected or isolated and wants to measure their loneliness using a validated research tool."
          bottomLine="Loneliness is a health risk factor as serious as smoking — recognizing it is the first step to addressing it. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>

      <section className="sr-only">
        <h2>What Is the UCLA Loneliness Scale?</h2>
        <h2>How Is the UCLA Loneliness Scale Scored?</h2>
        <h2>What Do My Loneliness Scale Results Mean?</h2>
      </section>
<UCLAClient faqData={FAQ_DATA} />
    </>
  );
}

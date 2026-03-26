import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { RSESClient } from "./RSESClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/rosenberg-self-esteem-scale`;

export const metadata: Metadata = createMetadata({
  path: "/rosenberg-self-esteem-scale",
  title: "Rosenberg Self-Esteem Scale | Free Self-Esteem Check",
  description:
    "Free Rosenberg Self-Esteem Scale (RSES). 10 items, 4-point scale, 5 reverse-scored. Score 0-30. Public domain (Rosenberg, 1965). Private, instant results.",
  keywords: [
    "Rosenberg self-esteem scale", "RSES", "self-esteem test",
    "self-esteem questionnaire", "Rosenberg self-esteem",
    "self-esteem screening", "self-esteem assessment",
    "RSES score", "self-esteem scale free",
    "Rosenberg 1965", "self-esteem measure",
    "low self-esteem test",
  ],
  openGraph: {
    title: "Rosenberg Self-Esteem Scale | Free Self-Esteem Check",
    description:
      "Free Rosenberg Self-Esteem Scale (RSES). 10 items, 4-point scale, 5 reverse-scored. Score 0-30. Public domain (Rosenberg, 1965). Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the Rosenberg Self-Esteem Scale?",
    answer:
      "The Rosenberg Self-Esteem Scale (RSES) is a 10-item self-report measure of global self-esteem developed by sociologist Morris Rosenberg in 1965. It is the most widely used self-esteem measure in social science research, with translations into more than 25 languages. The scale measures overall feelings of self-worth and self-acceptance using a simple 4-point Likert format. It was originally developed for a study of over 5,000 high school students and has since been validated across diverse populations and age groups.",
  },
  {
    question: "How is the Rosenberg Self-Esteem Scale scored?",
    answer:
      "The scale contains 10 items rated from Strongly Agree to Strongly Disagree. Five items (1, 3, 4, 7, 10) are positively worded and scored as Strongly Agree = 3, Agree = 2, Disagree = 1, Strongly Disagree = 0. Five items (2, 5, 6, 8, 9) are negatively worded and reverse-scored: Strongly Agree = 0, Agree = 1, Disagree = 2, Strongly Disagree = 3. The total score ranges from 0 to 30. Scores between 15 and 25 are considered within the normal range. Scores below 15 suggest low self-esteem. Scores above 25 suggest high self-esteem.",
  },
  {
    question: "What does a low self-esteem score mean?",
    answer:
      "A score below 15 on the Rosenberg Self-Esteem Scale suggests low self-esteem, meaning you may have a generally negative evaluation of yourself. Low self-esteem is not a mental health condition on its own, but research has consistently linked it with depression, anxiety, substance use, and difficulty in relationships. A low score does not mean something is permanently wrong with you. Self-esteem can change over time and is influenced by life circumstances, relationships, and mental health. If your score concerns you, consider speaking with a therapist or counselor who can help you understand what may be contributing to how you feel about yourself.",
  },
  {
    question: "Is the Rosenberg Self-Esteem Scale public domain?",
    answer:
      "Yes. The Rosenberg Self-Esteem Scale is in the public domain and may be used without permission or fee. Morris Rosenberg made the instrument freely available for research and clinical use. The original publication is: Rosenberg, M. (1965). Society and the adolescent self-image. Princeton, NJ: Princeton University Press. The scale has been reproduced in thousands of studies and is freely available from multiple academic sources.",
  },
  {
    question: "How is self-esteem related to mental health?",
    answer:
      "Self-esteem and mental health are closely connected but are not the same thing. Low self-esteem is a risk factor for depression, anxiety disorders, eating disorders, and substance use problems. It can also result from these conditions. High self-esteem is generally associated with better psychological wellbeing, greater resilience to stress, and healthier relationships. However, self-esteem is just one dimension of mental health. A person can have normal self-esteem and still experience mental health difficulties. The RSES provides one piece of the picture, and more specific screening tools like the PHQ-9 or GAD-7 can assess depression and anxiety directly.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function RSESPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Rosenberg Self-Esteem Scale (RSES)",
              description:
                "A free online implementation of the Rosenberg Self-Esteem Scale (Rosenberg, 1965), a 10-item measure of global self-esteem. Score 0-30 with 5 reverse-scored items. Scores 15-25 normal range, below 15 suggests low self-esteem. Public domain.",
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
              { name: "Rosenberg Self-Esteem Scale", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The Rosenberg Self-Esteem Scale, a 10-item validated measure of global self-esteem used widely in psychology research."
          who="Anyone who wants to assess their overall self-esteem using the most widely used self-esteem measure in the field."
          bottomLine="Self-esteem is not fixed — understanding where you are now is the starting point for building confidence. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>

      <section className="sr-only">
        <h2>What Is the Rosenberg Self-Esteem Scale?</h2>
        <h2>How Is the Rosenberg Self-Esteem Scale Scored?</h2>
        <h2>What Do My Self-Esteem Results Mean?</h2>
      </section>
<RSESClient faqData={FAQ_DATA} />
    </>
  );
}

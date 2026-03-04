import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AceClient } from "./AceClient";

const TOOL_URL = `${SITE_URL}/ace-questionnaire`;

export const metadata: Metadata = createMetadata({
  path: "/ace-questionnaire",
  title: "ACE Questionnaire | Adverse Childhood Experiences",
  description:
    "Free ACE (Adverse Childhood Experiences) questionnaire based on the CDC-Kaiser study. 10 yes/no questions about childhood adversity. Private, no signup. Includes resilience resources.",
  keywords: [
    "ACE questionnaire", "adverse childhood experiences",
    "ACE score", "ACE test", "childhood trauma screening",
    "ACE study", "CDC Kaiser ACE", "childhood adversity",
    "ACE score meaning", "trauma screening",
    "adverse childhood experiences questionnaire",
    "childhood trauma test",
  ],
  openGraph: {
    title: "ACE Questionnaire | Adverse Childhood Experiences",
    description:
      "Free ACE (Adverse Childhood Experiences) questionnaire based on the CDC-Kaiser study. 10 yes/no questions about childhood adversity. Private, no signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the ACE Questionnaire?",
    answer:
      "The ACE (Adverse Childhood Experiences) Questionnaire is a 10-item yes/no survey developed from the landmark CDC-Kaiser Permanente Adverse Childhood Experiences Study (1995-1997), one of the largest investigations of the link between childhood adversity and later-life health outcomes. The original study was led by Dr. Vincent Felitti and Dr. Robert Anda and involved over 17,000 participants. The questionnaire asks about 10 types of childhood adversity experienced before age 18, grouped into three categories: abuse (emotional, physical, sexual), neglect (emotional, physical), and household dysfunction (domestic violence, substance abuse, mental illness, parental separation, incarcerated household member).",
  },
  {
    question: "What does my ACE score mean?",
    answer:
      "Your ACE score is simply the count of categories of adversity you experienced before age 18, ranging from 0 to 10. Research shows that higher ACE scores are statistically associated with increased risk for certain health outcomes later in life — but an ACE score is not a diagnosis, a prediction, or a destiny. Many people with high ACE scores live healthy, fulfilling lives, especially when protective factors like supportive relationships, community connection, and access to resources are present. Your ACE score is one piece of a much larger picture.",
  },
  {
    question: "Is a high ACE score a diagnosis?",
    answer:
      "No. An ACE score is not a clinical diagnosis or a measure of current mental health. It is a research-based count of childhood adversity categories. It does not capture the severity, duration, or timing of experiences, and it does not account for resilience factors, protective relationships, or healing that may have occurred since childhood. A high ACE score does not mean you are damaged or destined for poor health — it means you experienced more types of adversity, which research associates with increased statistical risk. Many people with high ACE scores thrive with appropriate support.",
  },
  {
    question: "Why does the questionnaire include a content warning?",
    answer:
      "The ACE Questionnaire asks about sensitive topics including abuse, neglect, and household dysfunction. For some people, reflecting on these experiences can bring up difficult emotions or memories. The content warning is there so you can make an informed decision about whether this is a good time and place to take the questionnaire. If you are currently in crisis or working through trauma with a therapist, you may want to discuss the ACE questionnaire with them before completing it on your own.",
  },
  {
    question: "What are resilience factors?",
    answer:
      "Resilience factors are protective experiences and resources that can buffer the impact of adverse childhood experiences. The CDC identifies several key resilience factors: having at least one stable, caring adult relationship during childhood; developing social and emotional skills; feeling a sense of belonging in a community; access to basic needs like food, housing, and healthcare; and having opportunities for meaningful participation in community life. Research shows that resilience is not a fixed trait — it can be developed at any age through supportive relationships, therapy, community connection, and intentional self-care.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function AcePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "ACE Questionnaire — Adverse Childhood Experiences",
              description:
                "A free online implementation of the ACE (Adverse Childhood Experiences) Questionnaire based on the CDC-Kaiser Permanente ACE Study. 10 yes/no questions about childhood adversity across three categories: abuse, neglect, and household dysfunction. Score 0-10 with resilience framing and protective factors.",
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
              { name: "ACE Questionnaire", url: TOOL_URL },
            ])
          ),
        }}
      />

      <AceClient faqData={FAQ_DATA} />
    </>
  );
}

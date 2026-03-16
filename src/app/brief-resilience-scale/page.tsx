import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BRSClient } from "./BRSClient";

const TOOL_URL = `${SITE_URL}/brief-resilience-scale`;

export const metadata: Metadata = createMetadata({
  path: "/brief-resilience-scale",
  title: "Brief Resilience Scale | Free Resilience Self-Check",
  description:
    "Free Brief Resilience Scale (BRS, Smith et al. 2008). 6 items, 3 reverse-scored. Mean score 1-5. Measures ability to bounce back from stress. Private, instant results.",
  keywords: [
    "Brief Resilience Scale", "BRS", "resilience test",
    "resilience questionnaire", "resilience screening",
    "bounce back from stress", "resilience assessment",
    "BRS score", "resilience scale free",
    "Smith resilience scale", "stress resilience test",
    "how resilient am I",
  ],
  openGraph: {
    title: "Brief Resilience Scale | Free Resilience Self-Check",
    description:
      "Free Brief Resilience Scale (BRS, Smith et al. 2008). 6 items, 3 reverse-scored. Mean score 1-5. Measures ability to bounce back from stress. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the Brief Resilience Scale?",
    answer:
      "The Brief Resilience Scale (BRS) is a 6-item self-report measure of resilience developed by Bruce Smith and colleagues and published in 2008 in the International Journal of Behavioral Medicine. Unlike other resilience scales that measure protective factors or resources, the BRS specifically measures the ability to bounce back or recover from stress. It is one of the most widely used resilience measures in psychological research and has been validated across diverse populations including college students, cardiac patients, chronic pain patients, and healthy adults.",
  },
  {
    question: "How is the Brief Resilience Scale scored?",
    answer:
      "Each of the 6 items is rated on a 5-point scale from 1 (Strongly Disagree) to 5 (Strongly Agree). Items 2, 4, and 6 are negatively worded and reverse-scored, so that higher scores always indicate greater resilience. The final score is the mean (average) of all 6 items, ranging from 1.00 to 5.00. A mean score of 1.00-2.99 indicates low resilience, 3.00-4.30 indicates normal resilience, and 4.31-5.00 indicates high resilience. These cutoffs come from the original validation study by Smith et al. (2008).",
  },
  {
    question: "What does low resilience mean?",
    answer:
      "A low resilience score (below 3.00) suggests that you may have more difficulty bouncing back from stressful events, setbacks, or adversity. This does not mean you are weak or flawed. Resilience is influenced by many factors including life circumstances, social support, mental health, physical health, and coping skills. Low resilience is associated with higher levels of depression, anxiety, and negative affect in research. The good news is that resilience is not a fixed trait \u2014 it can be developed and strengthened through therapy, social support, mindfulness practices, and building coping skills.",
  },
  {
    question: "Can resilience be improved?",
    answer:
      "Yes. Research consistently shows that resilience is not a fixed personality trait but a dynamic process that can be strengthened. Effective strategies include: building strong social connections, developing problem-solving skills, practicing mindfulness and stress management, maintaining physical health through exercise and sleep, working with a therapist (especially cognitive-behavioral approaches), and gradually exposing yourself to manageable challenges. Even people who score low on resilience measures can develop greater resilience over time with the right support and practices.",
  },
  {
    question: "How is resilience related to mental health?",
    answer:
      "Resilience and mental health are closely connected. Higher resilience is associated with lower rates of depression, anxiety, and PTSD following stressful events. People with higher resilience tend to recover more quickly from setbacks and are less likely to develop mental health conditions in response to adversity. However, resilience is not the absence of distress \u2014 resilient people still experience stress and pain, but they are able to recover more effectively. If your resilience score is low, you may also benefit from screening for depression (PHQ-9) or general distress (K6) to get a more complete picture.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function BRSPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Brief Resilience Scale (BRS)",
              description:
                "A free online implementation of the Brief Resilience Scale (Smith et al., 2008), a 6-item measure of the ability to bounce back from stress. Mean score 1-5 with 3 reverse-scored items. Low resilience below 3.00, normal 3.00-4.30, high 4.31-5.00.",
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
              { name: "Brief Resilience Scale", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the Brief Resilience Scale?</h2>
        <h2>How Is the Brief Resilience Scale Scored?</h2>
        <h2>What Do My Resilience Results Mean?</h2>
      </section>
<BRSClient faqData={FAQ_DATA} />
    </>
  );
}

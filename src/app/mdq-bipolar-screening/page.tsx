import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { MDQClient } from "./MDQClient";

const TOOL_URL = `${SITE_URL}/mdq-bipolar-screening`;

export const metadata: Metadata = createMetadata({
  path: "/mdq-bipolar-screening",
  title: "MDQ Bipolar Screening Test | Free Mood Disorder Check",
  description:
    "Take the free MDQ bipolar screening test. 15 items, 3 minutes. Validated screener for bipolar spectrum disorders. Private, instant results.",
  keywords: [
    "mdq", "mood disorder questionnaire", "bipolar test", "bipolar screening",
    "bipolar self-test", "do i have bipolar", "bipolar quiz", "mdq screening",
    "bipolar disorder test", "bipolar spectrum screening", "mood disorder test",
    "bipolar assessment", "mdq bipolar", "free bipolar screening",
    "bipolar screening test online",
  ],
  openGraph: {
    title: "MDQ Bipolar Screening Test | Free Mood Disorder Check",
    description: "Take the free MDQ bipolar screening test. 15 items, 3 minutes. Validated screener for bipolar spectrum disorders.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is bipolar disorder?", answer: "Bipolar disorder is a mental health condition characterized by unusual shifts in mood, energy, activity levels, and the ability to carry out daily tasks. There are several types: Bipolar I involves manic episodes lasting at least 7 days (or severe enough to require hospitalization) often accompanied by depressive episodes; Bipolar II involves a pattern of depressive episodes and less severe manic episodes called hypomania; and Cyclothymic disorder involves periods of hypomanic and depressive symptoms lasting at least 2 years that do not meet the full criteria for hypomanic or depressive episodes." },
  { question: "What does the MDQ screen for?", answer: "The MDQ (Mood Disorder Questionnaire) screens for symptoms associated with bipolar spectrum disorders, including Bipolar I, Bipolar II, and related conditions. It asks about lifetime experiences of manic or hypomanic symptoms such as elevated mood, increased energy, racing thoughts, and risky behavior. It also assesses whether these symptoms co-occurred and caused functional problems. It is a screening tool, not a way to confirm or rule out bipolar disorder." },
  { question: "Can a screening test indicate bipolar disorder?", answer: "No screening test can confirm or rule out bipolar disorder. The MDQ is designed to identify individuals who may benefit from a comprehensive professional evaluation. Bipolar disorder requires a thorough clinical assessment that includes a detailed history, consideration of other possible explanations for symptoms, and often input from family members or close contacts. The MDQ is a starting point, not a final answer." },
  { question: "What are the types of bipolar disorder?", answer: "The main types are Bipolar I (full manic episodes, often with depressive episodes), Bipolar II (hypomanic episodes with major depressive episodes — hypomania is less severe than full mania), and Cyclothymic Disorder (chronic fluctuating mood with periods of hypomanic and depressive symptoms that do not meet full episode criteria). There are also other specified and unspecified bipolar disorders for presentations that do not fit neatly into these categories." },
  { question: "What should I do after a positive MDQ screen?", answer: "A positive screen means your symptom pattern is consistent with bipolar spectrum disorders and that a comprehensive evaluation by a qualified mental health professional is recommended. This typically involves a detailed clinical interview, review of your mood history, and assessment of how symptoms affect daily functioning. Your primary care provider can be a good starting point, or you can seek a specialist in mood disorders. SAMHSA's helpline (1-800-662-4357) can help with referrals." },
  { question: "Is the MDQ accurate?", answer: "The MDQ has been validated in multiple studies and demonstrates good sensitivity for detecting bipolar spectrum disorders in clinical settings. However, like all screening tools, it can produce false positives (flagging bipolar when another condition is responsible) and false negatives (missing bipolar in some individuals). Its accuracy is highest when all three criteria are considered together, which is why the scoring requires positive responses across all three parts of the questionnaire." },
  { question: "What is the difference between bipolar disorder and depression?", answer: "Depression (major depressive disorder) involves episodes of low mood, loss of interest, and related symptoms without manic or hypomanic episodes. Bipolar disorder includes depressive episodes but also includes periods of abnormally elevated mood, energy, or activity (mania or hypomania). This distinction is clinically important because treatments differ significantly. Research suggests that the average time from first symptoms to correct identification of bipolar disorder is approximately 10 years, often because the depressive episodes are recognized first while the manic or hypomanic episodes are missed or not reported." },
];

export default function MDQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "MDQ Mood Disorder Questionnaire — Bipolar Screening Test",
              description: "A free online implementation of the Mood Disorder Questionnaire (MDQ), a validated screening tool for bipolar spectrum disorders.",
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
              { name: "MDQ Bipolar Screening Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <MDQClient faqData={FAQ_DATA} />
    </>
  );
}

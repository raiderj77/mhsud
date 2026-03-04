import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AssistClient } from "./AssistClient";

const TOOL_URL = `${SITE_URL}/who-assist-substance-screening`;

export const metadata: Metadata = createMetadata({
  path: "/who-assist-substance-screening",
  title: "WHO ASSIST Screening | Free Substance Use Test",
  description:
    "Free WHO ASSIST substance use screening. 10 substance categories, past 3 months. Risk levels with intervention recommendations. Private, instant results.",
  keywords: [
    "WHO ASSIST", "ASSIST screening", "substance use screening",
    "ASSIST test", "WHO substance use test", "drug screening test",
    "alcohol screening", "substance involvement screening test",
    "ASSIST score", "substance use risk assessment",
    "ASSIST questionnaire", "substance abuse screening free",
  ],
  openGraph: {
    title: "WHO ASSIST Screening | Free Substance Use Test",
    description:
      "Free WHO ASSIST substance use screening. 10 substance categories, past 3 months. Risk levels with intervention recommendations. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the WHO ASSIST?",
    answer:
      "The ASSIST (Alcohol, Smoking and Substance Involvement Screening Test) is a screening tool developed by the World Health Organization to detect substance use and related problems in primary care settings. Version 3.1 covers 10 substance categories: tobacco, alcohol, cannabis, cocaine, amphetamine-type stimulants, inhalants, sedatives, hallucinogens, opioids, and other substances. It was developed through an international collaborative study across 8 countries and is available in many languages. The ASSIST is designed to be administered in about 5-10 minutes and produces a risk score for each substance used.",
  },
  {
    question: "How is the ASSIST scored?",
    answer:
      "The ASSIST calculates a Substance-Specific Involvement Score for each substance you have used. This score is the sum of questions 2 through 7, which ask about frequency of use in the past 3 months, desire or urge to use, health/social/legal/financial problems, failure to meet obligations, concern expressed by others, and attempts to cut down or stop. Each question has different weighted response options reflecting its clinical significance. The maximum score per substance is 39. Scores are categorized into three risk levels with specific intervention recommendations.",
  },
  {
    question: "What do the risk levels mean?",
    answer:
      "Low risk (0-3 for most substances, 0-10 for alcohol) means your current use pattern carries minimal risk and no intervention is needed. Moderate risk (4-26 for most substances, 11-26 for alcohol) means you are at risk of health and other problems from your current use pattern and a brief intervention is recommended — this typically involves information, advice, and follow-up with a healthcare provider. High risk (27+ for all substances) indicates a high risk of severe problems and possible dependence, and intensive assessment and treatment by a specialist is strongly recommended.",
  },
  {
    question: "Why are the alcohol risk cutoffs different?",
    answer:
      "The WHO set different low-risk cutoffs for alcohol (0-10) compared to other substances (0-3) because alcohol is legal and widely consumed in most cultures. A person can score higher on alcohol questions simply because social drinking is normalized — scoring a 4 on alcohol does not carry the same clinical concern as scoring a 4 on cocaine or opioids. The higher threshold for alcohol ensures that the screening appropriately identifies people whose alcohol use has actually reached a concerning level, rather than flagging moderate social drinkers. The moderate and high risk thresholds are the same across all substances.",
  },
  {
    question: "How is the ASSIST different from the AUDIT or DAST-10?",
    answer:
      "The AUDIT focuses exclusively on alcohol use and provides a detailed picture of drinking patterns, dependence, and harm. The DAST-10 focuses exclusively on drug use (excluding alcohol and tobacco). The ASSIST covers ALL substance categories in a single screening and provides separate risk scores for each substance. The ASSIST is particularly useful when you want a comprehensive overview across multiple substances, while the AUDIT and DAST-10 provide more focused information about alcohol or drugs specifically. If the ASSIST identifies high risk for a particular substance, a more specific screening like the AUDIT (for alcohol) may provide additional detail.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function AssistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "WHO ASSIST Substance Use Screening",
              description:
                "A free online implementation of the WHO ASSIST (Alcohol, Smoking and Substance Involvement Screening Test) v3.1. Covers 10 substance categories with per-substance risk scores (0-39). Three risk levels: low, moderate (brief intervention), high (intensive treatment). Stepped wizard interface.",
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
              { name: "WHO ASSIST Screening", url: TOOL_URL },
            ])
          ),
        }}
      />

      <AssistClient faqData={FAQ_DATA} />
    </>
  );
}

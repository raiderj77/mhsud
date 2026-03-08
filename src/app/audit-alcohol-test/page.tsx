import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { AUDITClient } from "./AUDITClient";

const TOOL_URL = `${SITE_URL}/audit-alcohol-test`;

export const metadata: Metadata = createMetadata({
  path: "/audit-alcohol-test",
  title: "AUDIT Alcohol Test | Free Alcohol Screening Tool",
  description:
    "Take the free AUDIT alcohol screening test — the WHO's 10-question tool used by clinicians worldwide. Private, honest, no sign-up. Results in 3 minutes.",
  keywords: [
    "audit alcohol test", "alcohol screening test", "alcohol assessment",
    "alcohol use disorders identification test", "alcohol screening questionnaire",
    "who alcohol test", "audit score", "alcohol use screen",
    "drinking self-assessment", "am i drinking too much",
    "audit questionnaire online", "free alcohol test", "who audit",
  ],
  openGraph: {
    title: "AUDIT Alcohol Test | Free Alcohol Screening Tool",
    description: "Take the free AUDIT alcohol screening test — the WHO's 10-question tool used by clinicians worldwide. Private, no sign-up. Results in 3 minutes.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the AUDIT alcohol test?", answer: "The AUDIT (Alcohol Use Disorders Identification Test) is a 10-question screening tool developed by the World Health Organization to identify hazardous and harmful alcohol use. It is widely used in primary care, emergency settings, and counseling to initiate conversations about alcohol use." },
  { question: "How is the AUDIT scored?", answer: "AUDIT scores range from 0–40. A score of 8 or above suggests hazardous alcohol use and warrants a brief intervention. Scores of 16 and above indicate harmful use, and scores of 20 or above may suggest alcohol dependence requiring further assessment." },
  { question: "What is the difference between the AUDIT and AUDIT-C?", answer: "The AUDIT is the full 10-question assessment covering frequency, quantity, and consequences of drinking. The AUDIT-C is a shorter 3-question version using only the first three questions — it is faster but focuses solely on consumption rather than consequences or dependence." },
  { question: "Is the AUDIT test confidential?", answer: "Yes. This online version processes all your responses in your browser only. Nothing you enter is stored or transmitted to any server. Your results are completely private." },
  { question: "What should I do if I score high on the AUDIT?", answer: "A high AUDIT score is a signal worth taking seriously. Consider speaking with your primary care doctor or a licensed substance use counselor. Many people find that even a brief conversation with a professional leads to meaningful changes. You can also explore SAMHSA's National Helpline at 1-800-662-4357 for free, confidential support." },
  { question: "Can this tool diagnose an alcohol use disorder?", answer: "No. The AUDIT is a screening instrument, not a diagnostic tool. Only a qualified healthcare professional can diagnose an alcohol use disorder through a comprehensive evaluation." },
  { question: "What if I'm concerned about withdrawal?", answer: "If you drink heavily and are considering reducing or stopping, please talk to a healthcare professional first. Alcohol withdrawal can be medically dangerous and sometimes requires supervised care. Do not attempt to stop suddenly without medical guidance if you have been drinking heavily." },
  { question: "Who created the AUDIT?", answer: "The AUDIT was developed by the World Health Organization as a simple method of screening for excessive drinking. It has been validated across many countries and cultures and is in the public domain." },
];

export default function AUDITPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "AUDIT Alcohol Screening Test", description: "A free online implementation of the AUDIT (Alcohol Use Disorders Identification Test), the World Health Organization's gold-standard 10-question alcohol screening tool.", url: TOOL_URL, datePublished: "2025-01-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "AUDIT Alcohol Test", url: TOOL_URL }])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd({ name: "AUDIT Alcohol Screening Test", description: "A free online implementation of the AUDIT (Alcohol Use Disorders Identification Test), the World Health Organization's gold-standard 10-question alcohol screening tool.", url: TOOL_URL, lastReviewed: "2026-03-07" })) }} />
      <AUDITClient faqData={FAQ_DATA} />
    </>
  );
}

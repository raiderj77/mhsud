import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AUDITClient } from "./AUDITClient";

const TOOL_URL = `${SITE_URL}/audit-alcohol-test`;

export const metadata: Metadata = createMetadata({
  path: "/audit-alcohol-test",
  title: "Free AUDIT Alcohol Use Screen (WHO, Private, Not a Diagnosis)",
  description:
    "Take the WHO AUDIT alcohol screening questionnaire online for free. 10 questions, ~3 minutes, 100% private — your answers never leave your browser. Not a diagnosis.",
  keywords: [
    "audit alcohol test", "alcohol use disorders identification test",
    "alcohol screening questionnaire", "alcohol self-assessment",
    "who alcohol test", "audit score", "alcohol use screen",
    "drinking self-assessment", "am i drinking too much",
    "alcohol risk assessment", "audit questionnaire online",
    "free alcohol test", "alcohol screening tool", "audit-10",
    "who audit", "alcohol use screening", "drinking habits test",
  ],
  openGraph: {
    title: "AUDIT Alcohol Use Screen — WHO, Free & Private",
    description: "Take the WHO AUDIT alcohol screening tool. 10 questions, private, not a diagnosis.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the AUDIT?", answer: "The Alcohol Use Disorders Identification Test (AUDIT) is a 10-item screening tool developed by the World Health Organization (WHO). It is in the public domain and can be used freely. It is designed to help identify people whose alcohol consumption may be putting them at risk." },
  { question: "Can this tool diagnose an alcohol use disorder?", answer: "No. The AUDIT is a screening instrument, not a diagnostic tool. Only a qualified healthcare professional can diagnose an alcohol use disorder through a comprehensive evaluation." },
  { question: "How is the AUDIT score calculated?", answer: "Each of the 10 questions is scored from 0 to 4. Your total score ranges from 0 to 40. Research has established zones that correspond to low risk, hazardous use, harmful use, and possible dependence — but these are guidelines for further assessment, not diagnoses." },
  { question: "What do the AUDIT risk zones mean?", answer: "Zone I (0-7): Lower risk. Zone II (8-15): Hazardous use — alcohol may be increasing your risk of harm. Zone III (16-19): Harmful use — alcohol is likely causing harm. Zone IV (20-40): Possible dependence — a comprehensive assessment is recommended. These zones guide clinical decisions about intervention level." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser. Your answers are never sent to any server, stored in any database, or shared with anyone." },
  { question: "What if I'm concerned about withdrawal?", answer: "If you drink heavily and are considering reducing or stopping, please talk to a healthcare professional first. Alcohol withdrawal can be medically dangerous and sometimes requires supervised care. Do not attempt to stop suddenly without medical guidance if you have been drinking heavily." },
  { question: "How is the AUDIT different from AUDIT-C?", answer: "The AUDIT-C uses only the first 3 questions of the full AUDIT as a brief screen. The full AUDIT provides more detailed information about drinking patterns, dependence symptoms, and alcohol-related harm. Both are valid screening tools." },
  { question: "Who created the AUDIT?", answer: "The AUDIT was developed by the World Health Organization as a simple method of screening for excessive drinking. It has been validated across many countries and cultures and is in the public domain." },
];

export default function AUDITPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "AUDIT Alcohol Use Screen", description: "Free, private WHO AUDIT alcohol screening questionnaire. 10 questions scored 0-40 with risk zone interpretation.", url: TOOL_URL, datePublished: "2025-01-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "AUDIT Alcohol Use Screen", url: TOOL_URL }])) }} />
      <AUDITClient faqData={FAQ_DATA} />
    </>
  );
}

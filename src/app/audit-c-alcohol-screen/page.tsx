import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AUDITCClient } from "./AUDITCClient";

const TOOL_URL = `${SITE_URL}/audit-c-alcohol-screen`;

export const metadata: Metadata = createMetadata({
  path: "/audit-c-alcohol-screen",
  title: "Free AUDIT-C Quick Alcohol Screen (3 Questions, Private)",
  description:
    "Take the AUDIT-C 3-question alcohol screen online for free. ~60 seconds, 100% private — your answers never leave your browser. Not a diagnosis.",
  keywords: [
    "audit-c", "audit c", "quick alcohol screen", "alcohol screening 3 questions",
    "alcohol use self-check", "brief alcohol screen", "audit-c online",
    "audit-c score", "audit-c screening", "3 question alcohol test",
    "primary care alcohol screen", "quick drinking test", "brief alcohol assessment",
    "alcohol self-check", "audit-c questionnaire", "audit c test",
  ],
  openGraph: {
    title: "AUDIT-C Quick Alcohol Screen — 3 Questions, Free & Private",
    description: "Take the 3-question AUDIT-C brief alcohol screen. ~60 seconds, private, not a diagnosis.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the AUDIT-C?", answer: "The AUDIT-C is a 3-question brief alcohol screen derived from the first three questions of the full AUDIT (Alcohol Use Disorders Identification Test) developed by the WHO. It is widely used in primary care settings as a quick initial screen for unhealthy alcohol use." },
  { question: "How is the AUDIT-C different from the full AUDIT?", answer: "The AUDIT-C uses only questions 1-3 from the full 10-question AUDIT. It focuses on consumption patterns (frequency, quantity, and binge drinking) rather than dependence symptoms and alcohol-related harm. It is often used as a first step, with the full AUDIT recommended for those who screen positive." },
  { question: "How is the AUDIT-C scored?", answer: "Each of the 3 questions is scored from 0 to 4, giving a total range of 0-12. Research generally considers scores of 3+ for women and 4+ for men as positive screens warranting further assessment — but these thresholds vary by setting and population." },
  { question: "Can this tool diagnose an alcohol problem?", answer: "No. The AUDIT-C is a brief screening tool, not a diagnostic instrument. A positive screen means further assessment is recommended, not that you have an alcohol use disorder. Only a healthcare professional can make a diagnosis." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser. Your answers are never sent to any server or stored anywhere." },
  { question: "Should I take the full AUDIT instead?", answer: "The AUDIT-C is a good starting point. If your score suggests further assessment may be helpful, taking the full 10-question AUDIT or speaking with a healthcare provider would be logical next steps." },
];

export default function AUDITCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "AUDIT-C Quick Alcohol Screen", description: "Free, private AUDIT-C 3-question alcohol screening. Scored 0-12 with interpretation. Runs entirely in your browser.", url: TOOL_URL, datePublished: "2025-01-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "AUDIT-C Quick Alcohol Screen", url: TOOL_URL }])) }} />
      <AUDITCClient faqData={FAQ_DATA} />
    </>
  );
}

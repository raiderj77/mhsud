import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AUDITCClient } from "./AUDITCClient";

const TOOL_URL = `${SITE_URL}/audit-c-alcohol-screen`;

export const metadata: Metadata = createMetadata({
  path: "/audit-c-alcohol-screen",
  title: "AUDIT-C Alcohol Screen | Free 3-Question Test",
  description:
    "Take the free AUDIT-C alcohol screening — just 3 questions, under 60 seconds. The quick WHO-validated test for risky drinking. Private, no sign-up.",
  keywords: [
    "audit c screening", "alcohol use screening", "quick alcohol test",
    "audit-c", "audit c", "brief alcohol screen", "audit-c online",
    "audit-c score", "3 question alcohol test", "primary care alcohol screen",
    "audit-c questionnaire", "audit c test", "alcohol self-check",
  ],
  openGraph: {
    title: "AUDIT-C Alcohol Screen | Free 3-Question Test",
    description: "Take the free AUDIT-C alcohol screening — just 3 questions, under 60 seconds. WHO-validated, private, no sign-up.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the AUDIT-C screening test?", answer: "The AUDIT-C is a 3-question abbreviated version of the WHO's AUDIT tool. It screens for hazardous alcohol use by asking about drinking frequency, typical quantity, and frequency of heavy drinking occasions. It is widely used in primary care for rapid screening." },
  { question: "What is a positive AUDIT-C score?", answer: "For men, a score of 4 or above is considered a positive screen for hazardous drinking. For women, the threshold is 3 or above. A positive screen suggests that a more comprehensive assessment, such as the full AUDIT, may be appropriate." },
  { question: "How is the AUDIT-C different from the full AUDIT?", answer: "The AUDIT-C uses only the first 3 questions of the 10-question AUDIT. It focuses purely on consumption patterns and is faster to complete, but does not capture alcohol-related consequences or signs of dependence. A positive AUDIT-C often prompts follow-up with the full AUDIT." },
  { question: "Is the AUDIT-C test accurate?", answer: "The AUDIT-C has good sensitivity for detecting hazardous drinking and has been validated across multiple populations. It is a screening tool, not a diagnostic test, and results should be interpreted in the context of a broader clinical conversation." },
  { question: "Should I take the AUDIT-C or the full AUDIT?", answer: "If you want a quick initial check, the AUDIT-C takes under a minute. If you want a more thorough picture of your relationship with alcohol — including consequences and warning signs of dependence — take the full AUDIT. Many people do both." },
  { question: "Can this tool diagnose an alcohol problem?", answer: "No. The AUDIT-C is a brief screening tool, not a diagnostic instrument. A positive screen means further assessment is recommended, not that you have an alcohol use disorder. Only a healthcare professional can make a diagnosis." },
];

export default function AUDITCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "AUDIT-C Alcohol Screening Test", description: "A free online implementation of the AUDIT-C, a validated 3-question rapid alcohol screening tool derived from the WHO's AUDIT. Used in primary care for quick identification of hazardous drinking.", url: TOOL_URL, datePublished: "2025-01-01", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "AUDIT-C Alcohol Screen", url: TOOL_URL }])) }} />
      <section className="sr-only">
        <h2>What Is the AUDIT-C Alcohol Screen?</h2>
        <h2>How Is the AUDIT-C Scored?</h2>
        <h2>What Do My AUDIT-C Results Mean?</h2>
      </section>
      <AUDITCClient faqData={FAQ_DATA} />
    </>
  );
}

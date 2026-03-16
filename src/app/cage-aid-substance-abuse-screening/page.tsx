import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CAGEAIDClient } from "./CAGEAIDClient";

const TOOL_URL = `${SITE_URL}/cage-aid-substance-abuse-screening`;

export const metadata: Metadata = createMetadata({
  path: "/cage-aid-substance-abuse-screening",
  title: "CAGE-AID Substance Use Screening",
  description:
    "Take the free CAGE-AID substance abuse screening. 4 yes/no questions, 1 minute. Screens for both alcohol and drug use. Private, instant results.",
  keywords: [
    "cage-aid", "cage aid test", "cage-aid screening", "substance abuse screening",
    "cage-aid questionnaire", "substance use screening test", "cage adapted include drugs",
    "alcohol and drug screening", "cage aid score", "substance abuse test",
    "free substance abuse screening", "cage-aid online", "combined substance screening",
    "drug and alcohol self-assessment", "cage-aid substance use",
  ],
  openGraph: {
    title: "CAGE-AID Substance Use Screening",
    description: "Take the free CAGE-AID substance abuse screening. 4 yes/no questions, 1 minute. Screens for both alcohol and drug use.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the CAGE-AID?", answer: "The CAGE-AID (CAGE Adapted to Include Drugs) is a validated 4-question screening tool that screens for both alcohol and drug use problems. It is an adaptation of the original CAGE questionnaire, which screened for alcohol use only. The acronym stands for Cut down, Annoyed, Guilty, and Eye-opener — each representing a key question about substance use patterns." },
  { question: "How is the CAGE-AID different from the original CAGE?", answer: "The original CAGE questionnaire asks only about drinking. The CAGE-AID adds 'or drug use' to each question, making it a combined screening tool for both alcohol and drug-related concerns. This allows healthcare providers to screen for substance use problems more broadly with a single, brief instrument." },
  { question: "What does a positive CAGE-AID screen mean?", answer: "A score of 2 or higher on the CAGE-AID is considered a positive screen. This does not mean you have a substance use disorder — it means further evaluation by a qualified healthcare professional is recommended. A positive screen is a starting point for a deeper conversation, not a final answer." },
  { question: "How is the CAGE-AID different from the AUDIT or DAST-10?", answer: "The CAGE-AID is a brief 4-question screen covering both alcohol and drugs. The AUDIT (10 questions) focuses specifically on alcohol use patterns and severity. The DAST-10 (10 questions) focuses specifically on drug use. The CAGE-AID is often used as a quick first-pass screen, while the AUDIT and DAST-10 provide more detailed assessments of specific substance categories." },
  { question: "Is the CAGE-AID a diagnosis?", answer: "No. The CAGE-AID is a screening instrument, not a diagnostic tool. It is designed to identify individuals who may benefit from a more comprehensive evaluation. Only a qualified healthcare professional can assess substance use concerns through a thorough clinical evaluation that considers your full history and circumstances." },
  { question: "What should I do if I score 2 or higher?", answer: "A score of 2 or higher suggests that speaking with a healthcare provider or substance use professional may be beneficial. You can contact the SAMHSA National Helpline at 1-800-662-4357 for free, confidential treatment referrals available 24/7. If you are in crisis, call or text 988 to reach the Suicide and Crisis Lifeline." },
  { question: "Can I take the CAGE-AID for someone else?", answer: "The CAGE-AID is designed as a self-report instrument and works best when the person answers about their own experiences. If you are concerned about someone's substance use, consider encouraging them to take the screening themselves or to speak with a healthcare provider directly." },
];

export default function CAGEAIDPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "CAGE-AID Substance Abuse Screening Test",
              description: "A free online implementation of the CAGE-AID (CAGE Adapted to Include Drugs), a validated 4-item yes/no screening tool for both alcohol and drug use problems.",
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
              { name: "CAGE-AID Screening Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03">March 2026</time>
      </p>
      <CAGEAIDClient faqData={FAQ_DATA} />
    </>
  );
}

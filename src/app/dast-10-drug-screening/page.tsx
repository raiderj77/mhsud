import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { DAST10Client } from "./DAST10Client";

const TOOL_URL = `${SITE_URL}/dast-10-drug-screening`;

export const metadata: Metadata = createMetadata({
  path: "/dast-10-drug-screening",
  title: "DAST-10 Drug Screening Test | Free Self-Check",
  description:
    "Take the free DAST-10 drug abuse screening test. 10 yes/no questions, 2 minutes. Private, instant results. Validated screening tool — not a diagnosis.",
  keywords: [
    "dast-10", "dast 10", "drug abuse screening test", "drug screening test",
    "dast-10 test", "drug use screening", "substance abuse screening",
    "drug abuse test", "dast-10 questionnaire", "drug self-assessment",
    "online drug screening", "dast-10 score", "free drug screening test",
    "substance use assessment", "drug abuse screening test 10",
  ],
  openGraph: {
    title: "DAST-10 Drug Screening Test | Free Self-Check",
    description: "Take the free DAST-10 drug abuse screening test. 10 yes/no questions, 2 minutes. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the DAST-10?", answer: "The DAST-10 (Drug Abuse Screening Test) is a clinically validated 10-item yes/no questionnaire used by healthcare professionals to screen for drug use problems. It was developed by Dr. Harvey Skinner and is widely used in clinical, research, and primary care settings to identify individuals who may need further assessment for substance use concerns." },
  { question: "How is the DAST-10 scored?", answer: "Each of the 10 questions is answered Yes (1 point) or No (0 points). The total score ranges from 0 to 10. A score of 0 suggests no problems reported, 1–2 indicates a low level, 3–5 indicates a moderate level, 6–8 indicates a substantial level, and 9–10 indicates a severe level of drug-related concerns." },
  { question: "What does my DAST-10 score mean?", answer: "Your score reflects the degree to which drug use may be affecting your life based on your self-reported answers. Higher scores suggest a greater level of drug-related problems. However, this is a screening tool — it identifies potential concerns but cannot determine the nature or severity of a substance use disorder. Only a qualified professional can do that." },
  { question: "Is the DAST-10 a diagnosis?", answer: "No. The DAST-10 is a screening instrument, not a diagnostic tool. It is designed to flag potential drug-related problems so that further evaluation can be pursued with a qualified healthcare professional. A positive screen does not mean you have a substance use disorder — it means a deeper conversation with a professional may be helpful." },
  { question: "What should I do if I score high on the DAST-10?", answer: "A score of 3 or higher suggests that speaking with a healthcare provider or substance use professional may be beneficial. You can contact the SAMHSA National Helpline at 1-800-662-4357 for free, confidential treatment referrals available 24/7. If you are in crisis, call or text 988 to reach the Suicide and Crisis Lifeline." },
  { question: "How is the DAST-10 different from the AUDIT?", answer: "The DAST-10 screens specifically for drug use problems (excluding alcohol and tobacco), while the AUDIT (Alcohol Use Disorders Identification Test) screens specifically for alcohol-related concerns. They are complementary tools — a healthcare provider may use both to get a fuller picture of substance use patterns." },
  { question: "Can I take the DAST-10 for someone else?", answer: "The DAST-10 is designed as a self-report instrument — it works best when the person answers about their own experiences. While you can review the questions to understand what the tool assesses, answering on behalf of someone else may not produce accurate results. If you are concerned about someone's drug use, consider encouraging them to take the screening themselves or to speak with a healthcare provider." },
];

export default function DAST10Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "DAST-10 Drug Screening Test",
              description: "A free online implementation of the DAST-10 Drug Abuse Screening Test, a validated 10-item yes/no questionnaire used by clinicians to screen for drug use problems.",
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
              { name: "DAST-10 Drug Screening Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <DAST10Client faqData={FAQ_DATA} />
    </>
  );
}

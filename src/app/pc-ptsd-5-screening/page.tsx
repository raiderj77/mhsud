import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PcPtsd5Client } from "./PcPtsd5Client";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/pc-ptsd-5-screening`;

export const metadata: Metadata = createMetadata({
  path: "/pc-ptsd-5-screening",
  title: "PC-PTSD-5 Screening | Free PTSD Screen",
  description:
    "Free PC-PTSD-5 PTSD screening. 5 yes/no questions developed by the VA. Quick, private, instant results. No signup required.",
  keywords: [
    "pc-ptsd-5", "pc ptsd 5", "ptsd screening test",
    "ptsd quiz", "do I have ptsd quiz", "VA ptsd screening",
    "primary care ptsd screen", "ptsd screening tool",
    "ptsd test online free", "ptsd self assessment",
    "pc-ptsd-5 screening", "brief ptsd screen",
  ],
  openGraph: {
    title: "PC-PTSD-5 Screening | Free PTSD Screen",
    description:
      "Free PC-PTSD-5 PTSD screening. 5 yes/no questions developed by the VA. Quick, private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the PC-PTSD-5?",
    answer:
      "The PC-PTSD-5 (Primary Care PTSD Screen for DSM-5) is a 5-item screening tool developed by the National Center for PTSD at the U.S. Department of Veterans Affairs. It is designed for use in primary care settings as a brief, first-step screen to identify people who may have PTSD. The instrument begins with a question about trauma exposure, followed by five yes/no questions about past-month symptoms. It was validated by Prins et al. (2016) and is in the public domain.",
  },
  {
    question: "How is the PC-PTSD-5 scored?",
    answer:
      "The PC-PTSD-5 is scored by counting the number of \"Yes\" responses to the five symptom questions. Scores range from 0 to 5. A score of 3 or higher is considered a positive screen, meaning further evaluation with a more comprehensive tool (like the PCL-5) or a clinical interview is recommended. If the person does not endorse the initial trauma exposure question, the symptom questions are not administered and the screen is negative.",
  },
  {
    question: "What is the difference between the PC-PTSD-5 and the PCL-5?",
    answer:
      "The PC-PTSD-5 is a 5-item brief screen designed to quickly identify whether further PTSD evaluation is needed. The PCL-5 is a 20-item comprehensive assessment that measures PTSD symptom severity across all four DSM-5 symptom clusters. In clinical practice, the PC-PTSD-5 is often used first as a quick check; if the screen is positive, the PCL-5 or a clinical interview is used for more detailed assessment. Both are developed by the National Center for PTSD and are in the public domain.",
  },
  {
    question: "What does a positive PC-PTSD-5 screen mean?",
    answer:
      "A positive screen (score of 3 or higher) means that your symptom pattern is consistent with what is commonly seen in people who may have PTSD. It does not mean you have PTSD. It means that a more thorough evaluation is recommended. Many people screen positive and do not ultimately meet full criteria for PTSD, while some people with significant trauma-related difficulties may screen negative. The screen is a starting point, not an endpoint.",
  },
  {
    question: "Can I use this tool for a veteran or service member?",
    answer:
      "Yes. The PC-PTSD-5 was originally developed for use in VA primary care settings and is widely used with veterans and active-duty service members. However, it is validated for use with anyone, not just veterans. If you are a veteran or are supporting a veteran who screens positive, the Veterans Crisis Line (1-800-273-8255, Press 1) and VA mental health services are specifically designed to help. The VA offers specialized PTSD treatment programs at no cost to eligible veterans.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function PcPtsd5Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "PC-PTSD-5 PTSD Screening",
              description:
                "A free online implementation of the PC-PTSD-5 (Primary Care PTSD Screen for DSM-5), a 5-item yes/no PTSD screening tool developed by the National Center for PTSD at the U.S. Department of Veterans Affairs. Public domain instrument.",
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
              { name: "PC-PTSD-5 Screening", url: TOOL_URL },
            ])
          ),
        }}
      />

      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The PC-PTSD-5, a brief 5-item validated screening for PTSD used in primary care and VA settings."
          who="Anyone who has experienced trauma and wants a quick initial screening for post-traumatic stress disorder."
          bottomLine="The PC-PTSD-5 is designed to identify those who may benefit from further PTSD evaluation. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is the PC-PTSD-5 Screening?</h2>
        <h2>How Is the PC-PTSD-5 Scored?</h2>
        <h2>What Do My PC-PTSD-5 Results Mean?</h2>
      </section>
      <PcPtsd5Client faqData={FAQ_DATA} />
    </>
  );
}

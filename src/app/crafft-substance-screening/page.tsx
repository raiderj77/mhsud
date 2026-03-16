import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import { CrafftClient } from "./CrafftClient";

const TOOL_URL = `${SITE_URL}/crafft-substance-screening`;

export const metadata: Metadata = createMetadata({
  path: "/crafft-substance-screening",
  title: "CRAFFT Screening for Teens | Free Substance Check",
  description:
    "Free CRAFFT 2.1+N substance screening for ages 12-21. Quick yes/no questions about alcohol, drugs, and safety. Private, no signup.",
  keywords: [
    "CRAFFT", "CRAFFT screening", "CRAFFT test",
    "teen substance screening", "adolescent drug screening",
    "CRAFFT 2.1", "CRAFFT score", "teen alcohol screening",
    "substance use screening for teens", "CRAFFT questionnaire",
    "youth drug screening", "adolescent substance use test",
  ],
  openGraph: {
    title: "CRAFFT Screening for Teens | Free Substance Check",
    description:
      "Free CRAFFT 2.1+N substance screening for ages 12-21. Quick yes/no questions about alcohol, drugs, and safety. Private, no signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the CRAFFT?",
    answer:
      "The CRAFFT is a short screening tool designed specifically for young people ages 12-21. It was developed by Dr. John R. Knight and colleagues at Boston Children's Hospital and Harvard Medical School. CRAFFT is an acronym for the six key words in the Part B questions: Car, Relax, Alone, Forget, Friends/Family, and Trouble. It has been validated in multiple studies and is recommended by the American Academy of Pediatrics (AAP) as the standard substance use screening tool for adolescents.",
  },
  {
    question: "Who is the CRAFFT for?",
    answer:
      "The CRAFFT was designed and validated for people between the ages of 12 and 21. It is commonly used in pediatric clinics, school health offices, emergency departments, and other settings where young people receive care. Adults over 21 may find other screening tools like the AUDIT (for alcohol) or DAST-10 (for drugs) more appropriate, as those tools were validated in adult populations.",
  },
  {
    question: "What does a score of 2 or higher mean?",
    answer:
      "A CRAFFT score of 2 or higher is considered a 'positive screen,' which means there may be a pattern of substance use that could benefit from a conversation with a trusted adult, school counselor, doctor, or other healthcare provider. It does not mean you have a substance use problem — it means that talking to someone could be helpful. Many young people who screen positive benefit from brief conversations about safety and decision-making.",
  },
  {
    question: "What is the '+N' in CRAFFT 2.1+N?",
    answer:
      "The '+N' stands for Nicotine. Version 2.1+N of the CRAFFT added a question about nicotine and tobacco use (including e-cigarettes, vapes, and other products) to the opening questions. The nicotine question does not affect your CRAFFT score — it is included because nicotine use among young people has become a significant health concern, especially with the rise of vaping. If you answered yes to the nicotine question, your results will include information about nicotine and resources specific to quitting.",
  },
  {
    question: "Will my parents or school find out my answers?",
    answer:
      "No. This is an online self-screening tool that runs entirely in your web browser. Your answers are never sent to a server, saved in a database, or shared with anyone — not your parents, not your school, not us. When you close this page, your answers are gone. There is no login, no account, and no way for anyone to see what you entered.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, completely. All scoring happens in your browser using JavaScript. Your answers are never sent to a server, stored in a database, or accessible to anyone. When you close this page, your responses are gone. We do not use accounts, logins, or any form of data collection for this tool.",
  },
];

export default function CrafftPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "CRAFFT 2.1+N Adolescent Substance Screening",
              description:
                "A free online implementation of the CRAFFT 2.1+N, a validated substance use screening tool for adolescents ages 12-21. Part A opening questions gate Part B CRAFFT questions (Car, Relax, Alone, Forget, Friends/Family, Trouble). Score of 2+ is a positive screen. Includes nicotine screening question.",
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
              { name: "CRAFFT Screening", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "CRAFFT 2.1+N Adolescent Substance Screening",
              description: "A free online implementation of the CRAFFT 2.1+N, a validated substance use screening tool for adolescents ages 12-21.",
              url: TOOL_URL,
              lastReviewed: "2026-03-07",
            })
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is the CRAFFT Substance Screening?</h2>
        <h2>How Is the CRAFFT Scored?</h2>
        <h2>What Do My CRAFFT Results Mean?</h2>
      </section>
<CrafftClient faqData={FAQ_DATA} />
    </>
  );
}

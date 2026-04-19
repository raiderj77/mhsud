import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";
import { BigFiveClient } from "./BigFiveClient";

const TOOL_URL = `${SITE_URL}/big-five-personality-test`;

export const metadata: Metadata = createMetadata({
  path: "/big-five-personality-test",
  title: "Big Five Personality Test — IPIP-NEO",
  description:
    "Take the free Big Five personality test (IPIP-NEO-50). Measure openness, conscientiousness, extraversion, agreeableness, and neuroticism in minutes.",
  keywords: [
    "big five personality test", "ocean personality test",
    "ipip-neo-50", "big 5 personality test",
    "five factor model test", "openness conscientiousness extraversion agreeableness neuroticism",
    "personality assessment", "free personality test",
    "big five traits", "ipip personality test",
    "ocean model test", "personality quiz",
    "five factor personality test", "big five inventory",
  ],
  openGraph: {
    title: "Big Five Personality Test — IPIP-NEO",
    description: "Take the free Big Five (OCEAN) personality test. 50 questions, 10 minutes. Measure Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the Big Five personality model?", answer: "The Big Five (also called OCEAN or Five Factor Model) is the most widely accepted framework in personality psychology. It measures five broad dimensions of personality: Openness to Experience, Conscientiousness, Extraversion, Agreeableness, and Neuroticism. Decades of cross-cultural research support its reliability and validity." },
  { question: "What does IPIP-NEO-50 mean?", answer: "IPIP stands for International Personality Item Pool, a public-domain collection of personality items. NEO refers to the NEO-PI-R framework by Costa and McCrae. The \"50\" indicates this is the 50-item short form developed by Goldberg (1999) and validated by Johnson (2014)." },
  { question: "How is the test scored?", answer: "Each of the five traits is measured by 10 items rated 1-5. Some items are reverse-scored (6 minus the raw score). Each trait score ranges from 10 to 50. Higher scores indicate stronger presence of that trait." },
  { question: "Can my personality change over time?", answer: "Yes. Research shows personality traits can shift across the lifespan. People generally become more conscientious and agreeable and less neurotic as they age. Major life events, therapy, and intentional effort can also produce changes." },
  { question: "How is this different from Myers-Briggs (MBTI)?", answer: "The Big Five is the dominant model in academic personality research with decades of validation. Unlike MBTI, which sorts people into 16 types, the Big Five measures five continuous dimensions. Research consistently shows the Big Five has stronger reliability, validity, and predictive power than MBTI." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
];

export default function BigFivePersonalityTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "IPIP-NEO-50 Big Five Personality Test",
              description: "A free online implementation of the IPIP-NEO-50, a validated 50-item Big Five personality assessment based on Goldberg (1999) and Johnson (2014).",
              url: TOOL_URL,
              datePublished: "2026-03-08",
              dateModified: "2026-04-14",
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
              { name: "Big Five Personality Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            medicalWebPageJsonLd({
              name: "IPIP-NEO-50 Big Five Personality Test",
              description: "A free online implementation of the IPIP-NEO-50, a validated 50-item Big Five personality assessment based on Goldberg (1999) and Johnson (2014).",
              url: TOOL_URL,
              lastReviewed: "2026-03-08",
            })
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A personality assessment measuring the Big Five traits: openness, conscientiousness, extraversion, agreeableness, and neuroticism."
          who="Anyone interested in understanding their personality profile using the most widely researched trait model in psychology."
          bottomLine="The Big Five model describes tendencies, not fixed categories — traits exist on a spectrum. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>
      <p className="text-sm text-gray-500 mt-2 mb-0 text-center">Last reviewed: April 2026</p>

      <section className="sr-only">
        <h2>What Is the Big Five Personality Test?</h2>
        <h2>How Is the Big Five Test Scored?</h2>
        <h2>What Do My Personality Results Mean?</h2>
      </section>

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
<BigFiveClient faqData={FAQ_DATA} />
    </>
  );
}

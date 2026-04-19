import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { SobrietyClient } from "./SobrietyClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/sobriety-calculator`;

export const metadata: Metadata = createMetadata({
  path: "/sobriety-calculator",
  title: "Sobriety Calculator | Free Sober Day Counter",
  description:
    "Track your sobriety with our free day counter. See days sober, milestones hit, next milestone countdown, and money saved. Private — saved in your browser only.",
  keywords: [
    "sobriety calculator", "sober day counter", "how many days sober",
    "recovery calculator", "clean date calculator", "sobriety tracker",
    "days sober counter", "sobriety milestone tracker", "sober counter",
    "recovery day counter", "clean time calculator", "sober date calculator",
    "sobriety counter free", "days clean calculator",
  ],
  openGraph: {
    title: "Sobriety Calculator | Free Sober Day Counter",
    description: "Track your sobriety with our free day counter. See milestones, countdowns, and money saved. Private and free.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is a sobriety calculator?", answer: "A sobriety calculator is a tool that counts the number of days since you stopped using a substance. You enter your clean or sober date, and it calculates how many days, weeks, months, and years you have been in recovery. Many people in recovery find it helpful to track their progress as a source of motivation and to mark important milestones like 30 days, 90 days, and 1 year sober." },
  { question: "Why count sober days?", answer: "Counting sober days serves several purposes in recovery. It provides tangible evidence of progress, which is especially important during difficult moments. It creates a sense of accountability and investment — the longer your streak, the more motivation to protect it. Milestones provide opportunities to celebrate achievements in recovery. Research on habit formation shows that tracking progress increases the likelihood of maintaining behavior change. Many recovery programs, including 12-step programs, use day counting as a core motivational tool." },
  { question: "What are recovery milestones?", answer: "Recovery milestones are specific time markers that are commonly celebrated in the recovery community. Key milestones include: 24 hours (the crucial first day), 1 week, 30 days (completing the first month), 60 days, 90 days (a significant marker in many treatment programs), 6 months, 1 year (often celebrated with a medallion or chip in 12-step programs), 18 months, 2 years, 5 years, and 10 years. Each milestone represents increasing stability in recovery, though every single day is an achievement worth recognizing." },
  { question: "Does counting days help recovery?", answer: "For many people, yes. Research on goal-setting and self-monitoring shows that tracking progress toward a goal increases motivation and commitment. Counting days provides concrete, measurable evidence of progress. However, day counting is not right for everyone — some people find it creates unhelpful pressure, and some recovery approaches (like harm reduction) don't emphasize abstinence tracking. If counting days feels motivating, use it. If it creates anxiety, it's okay to focus on other aspects of your recovery." },
  { question: "What if I relapse?", answer: "Relapse does not erase the progress you made. The skills, insights, and healthy connections you built during recovery remain with you. Many people experience relapse as part of their recovery journey — research shows that relapse rates for substance use disorders (40-60%) are similar to other chronic conditions like diabetes and hypertension. If you relapse, the most important step is to reach out for support immediately. You can reset your sobriety date and begin again — each new attempt at recovery builds on what you learned before. Contact SAMHSA (1-800-662-4357) or call/text 988 if you need support." },
  { question: "What is a clean date?", answer: "A clean date (also called a sobriety date or sober date) is the date you last used a substance. It marks the beginning of your current period of sobriety or recovery. In 12-step programs and other recovery communities, this date is used to calculate your 'clean time' or 'sober time.' Some people track a single clean date across all substances, while others may track different dates for different substances. There is no wrong way to define your own recovery — what matters is that the date is meaningful to you." },
];

export default function SobrietyCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Sobriety Calculator & Day Counter",
              description: "A free sobriety calculator that tracks days sober, recovery milestones, next milestone countdown, and estimated money saved. Your clean date is stored in your browser only — completely private.",
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
              { name: "Sobriety Calculator", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A sobriety calculator that counts your clean days, weeks, months, and years from your sobriety date."
          who="Anyone in recovery who wants to track their sobriety milestone and celebrate their progress."
          bottomLine="Every day counts — whether it is day 1 or day 1,000, your recovery journey matters. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>


      <section className="sr-only">
        <h2>What Is the Sobriety Calculator?</h2>
        <h2>How Does the Sobriety Calculator Work?</h2>
        <h2>What Do My Sobriety Milestones Mean?</h2>
      </section>

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
<SobrietyClient faqData={FAQ_DATA} />
    </>
  );
}

import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ValuesCardSortClient } from "./ValuesCardSortClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/values-card-sort`;

export const metadata: Metadata = createMetadata({
  path: "/values-card-sort",
  title: "Values Card Sort | Free Personal Values Identification Exercise",
  description:
    "Free interactive values card sort. Sort 43 personal values, narrow to your top 5, rank them, and reflect. Used in Motivational Interviewing and recovery. No signup required.",
  keywords: [
    "values card sort", "personal values exercise",
    "identify my values quiz", "values identification exercise",
    "motivational interviewing values card sort",
    "core values exercise", "values clarification",
    "personal values list", "values sorting activity",
    "recovery values exercise", "values worksheet",
    "what are my values", "free values card sort online",
  ],
  openGraph: {
    title: "Values Card Sort | Free Personal Values Identification Exercise",
    description: "Free interactive values card sort exercise. Sort 43 values into 3 piles, narrow to your top 5, rank them, and reflect on how to live in alignment with what matters most.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is a values card sort?",
    answer: "A values card sort is an exercise commonly used in counseling, coaching, and Motivational Interviewing (MI). You sort a set of value cards (like Family, Honesty, Health, Freedom) into piles based on how important each one is to you. Then you narrow your 'very important' pile to your top 5 core values and rank them. The result is a personal values profile that reveals what matters most to you — which can guide decisions, goal-setting, and personal growth. It was popularized by William R. Miller, one of the founders of Motivational Interviewing.",
  },
  {
    question: "How is this used in recovery and Motivational Interviewing?",
    answer: "In Motivational Interviewing, values clarification helps people explore the gap between their current behavior and their deeply held values. For example, someone who values Family above all else but recognizes that substance use is harming their family relationships may feel motivated to change — not because someone told them to, but because the change aligns with what they already care about. This 'values-behavior discrepancy' is one of the most powerful drivers of intrinsic motivation. Many addiction counselors and therapists use values card sorts early in treatment to build rapport and identify what matters to each individual.",
  },
  {
    question: "How often should I do this exercise?",
    answer: "Values tend to be relatively stable, but they can shift with major life events — a new relationship, becoming a parent, a health scare, entering recovery, career changes, or loss. Doing this exercise once or twice a year can help you check in with yourself and notice how your priorities may have evolved. It is also valuable to revisit your values profile during times of difficult decisions: looking at your top 5 can clarify which choice aligns best with who you want to be.",
  },
  {
    question: "What if I cannot narrow to just 5 values?",
    answer: "This is very common and completely normal — it means you care about a lot of things, which is a strength. The purpose of narrowing to 5 is not to dismiss your other values, but to identify the handful that are most central to your identity and decision-making. Think of it this way: if two values conflict in a real-life situation, which one would win? That comparison helps you prioritize. If you truly cannot choose, that is valuable information too — it may point to a values conflict worth exploring with a counselor or therapist.",
  },
  {
    question: "Are there right or wrong answers?",
    answer: "Absolutely not. Values are personal — there is no correct set of core values. What matters is honesty with yourself. Try to sort based on how important each value actually is to you, not how important you think it should be or how others would expect you to answer. The exercise is most useful when you are honest rather than aspirational. If you find yourself sorting a value as 'very important' because it feels like the right thing to say rather than because you truly feel it, notice that — it is an insight in itself.",
  },
  {
    question: "Is this a screening tool or assessment?",
    answer: "No. This is a self-reflection exercise, not a clinical screening or diagnostic assessment. There are no scores, no clinical cutoffs, and no results that indicate a condition. It is an educational tool designed to help you explore your personal values. It is commonly used as a therapeutic exercise by counselors and therapists, but using it on your own is not a substitute for professional guidance. If you are facing challenges related to substance use, mental health, or major life decisions, consider working with a qualified professional who can help you apply your values insights in a therapeutic context.",
  },
];

export default function ValuesCardSortPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Values Card Sort",
              description: "A free interactive values card sort exercise. Sort 43 personal values into three categories (Very Important, Somewhat Important, Not Important), narrow to your top 5 core values, rank them in order of priority, and reflect on how you are living in alignment with your values. Includes guided reflection prompts. Used in Motivational Interviewing, recovery counseling, and personal development.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
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
              { name: "Values Card Sort", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="An interactive values card sort exercise that helps you identify and rank your core personal values."
          who="Anyone in therapy, recovery, or personal growth who wants to clarify what matters most to them."
          bottomLine="Living in alignment with your values improves mental health — knowing what they are comes first. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is the Values Card Sort?</h2>
        <h2>How Does the Values Card Sort Work?</h2>
        <h2>What Do My Values Card Sort Results Mean?</h2>
      </section>
<ValuesCardSortClient faqData={FAQ_DATA} />
    </>
  );
}

import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { DbtCrisisSkillsClient } from "./DbtCrisisSkillsClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/dbt-crisis-skills`;

export const metadata: Metadata = createMetadata({
  path: "/dbt-crisis-skills",
  title: "DBT Crisis Survival Skills | TIPP, STOP & ACCEPTS",
  description:
    "Explore educational DBT crisis-survival and distress-tolerance skill cards for TIPP, STOP, ACCEPTS, and IMPROVE. Includes cautions and 988 links; not emergency care.",
  keywords: [
    "DBT skills cards", "distress tolerance skills",
    "DBT crisis skills", "TIPP skills DBT",
    "ACCEPTS DBT", "IMPROVE DBT skills",
    "STOP skill DBT", "dialectical behavior therapy skills",
    "DBT distress tolerance", "crisis survival skills",
    "DBT coping skills", "Marsha Linehan DBT",
  ],
  openGraph: {
    title: "DBT Crisis Survival Skills | TIPP, STOP & ACCEPTS",
    description: "Interactive DBT distress-tolerance cards with medical cautions and crisis-support links. Educational only; not DBT treatment or emergency care.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What are DBT distress tolerance skills?",
    answer: "Distress tolerance skills are one of four core skill modules in Dialectical Behavior Therapy (DBT), developed by Dr. Marsha Linehan. They are designed for crisis moments when emotions are so intense that you cannot think clearly or solve problems effectively. The goal is not to fix the problem or eliminate the emotion, it is to survive the crisis without making things worse. The skills on this page (TIPP, STOP, ACCEPTS, IMPROVE) give you concrete actions to take when you are overwhelmed, helping you ride out the emotional wave until it naturally subsides.",
  },
  {
    question: "Which skill should I use first in a crisis?",
    answer: "There is no single correct first skill for every person or crisis. STOP can create a pause before an impulsive action. TIPP includes physical techniques that may not be safe for everyone: very cold water can lower heart rate and intense exercise can raise it. If you have a medical condition, physical limitation, take medication that affects heart rate, or are unsure, ask a health professional before using those techniques. Call emergency services if there is immediate danger.",
  },
  {
    question: "Do I need to be in DBT therapy to use these skills?",
    answer: "This page is an educational reference, not DBT treatment. Comprehensive DBT includes more than skills cards and is delivered within a structured clinical program. A trained professional can help choose, adapt, and practice skills safely. Seek professional help for persistent distress, self-harm urges, suicidal thoughts, or substance-use concerns.",
  },
  {
    question: "What is the difference between distress tolerance and emotion regulation?",
    answer: "Distress tolerance skills are for crisis moments, they help you survive intense emotions in the short term without making things worse. Emotion regulation skills are for the longer term, they help you understand your emotions, reduce vulnerability to negative emotions, and change unwanted emotional responses over time. Think of distress tolerance as the fire extinguisher (put out the immediate fire) and emotion regulation as the fire prevention system (reduce the chance of fires starting). Both are essential parts of DBT.",
  },
  {
    question: "What if a skill does not work for me?",
    answer: "Not every skill works for every person or every situation. If one skill is not helping, try a different one, that is why there are 22 skills across four categories. Some people respond better to physical skills (TIPP) while others do better with cognitive skills (IMPROVE). Also, skills take practice. The first time you try paced breathing during a crisis, it may feel pointless. But with repeated practice (ideally when you are NOT in crisis), the skills become more effective over time. If you consistently find that no skills help, that is important information to share with a therapist.",
  },
  {
    question: "Can these skills help with substance use urges?",
    answer: "Some people include distress-tolerance skills in a clinician-guided substance-use treatment or relapse-prevention plan. This page cannot predict how long an urge will last or guarantee that a skill will reduce it. If an urge remains strong, move to a safer environment and contact a support person, treatment provider, or crisis resource.",
  },
];

export default function DbtCrisisSkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "DBT Crisis Survival Skills Cards",
              description: "Free interactive DBT distress tolerance skills cards. 22 crisis survival skills organized by four acronyms: TIPP (Temperature, Intense exercise, Paced breathing, Progressive relaxation), STOP (Stop, Take a step back, Observe, Proceed mindfully), ACCEPTS (Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, Sensations), and IMPROVE (Imagery, Meaning, Prayer, Relaxation, One thing at a time, Vacation, Encouragement). Each card shows detailed instructions and concrete examples. Random skill button for crisis moments. Based on Dialectical Behavior Therapy by Dr. Marsha Linehan.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-08-05",
            }),
    }),
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
              { name: "DBT Crisis Survival Skills", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 5, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="DBT crisis-survival skills are distress-tolerance practices intended to help a person pause and avoid making a high-distress situation worse. This reference covers TIPP, STOP, ACCEPTS, and IMPROVE."
          who="Adults learning DBT skills who want a structured reference during non-emergency distress. For immediate danger, call emergency services."
          bottomLine="A skill may help create a pause, but it cannot make a crisis safe. This page is not DBT treatment, medical advice, or emergency care."
          lastUpdated="2026-08-05"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools
    </p>
    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
      <span>
        Published:{" "}
        <time dateTime="2025-01-01">
          {new Date("2025-01-01T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
      <span>
        Last reviewed:{" "}
        <time dateTime="2026-08-02">
          {new Date("2026-08-02T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
      </div>

<DbtCrisisSkillsClient faqData={FAQ_DATA} />
    </>
  );
}

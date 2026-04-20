import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { DbtCrisisSkillsClient } from "./DbtCrisisSkillsClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/dbt-crisis-skills`;

export const metadata: Metadata = createMetadata({
  path: "/dbt-crisis-skills",
  title: "DBT Crisis Survival Skills Cards | Free Distress Tolerance Tool",
  description:
    "Free interactive DBT distress tolerance skills cards. TIPP, STOP, ACCEPTS, IMPROVE acronyms with detailed instructions. Random skill button for crisis moments. No signup required.",
  keywords: [
    "DBT skills cards", "distress tolerance skills",
    "DBT crisis skills", "TIPP skills DBT",
    "ACCEPTS DBT", "IMPROVE DBT skills",
    "STOP skill DBT", "dialectical behavior therapy skills",
    "DBT distress tolerance", "crisis survival skills",
    "DBT coping skills", "Marsha Linehan DBT",
  ],
  openGraph: {
    title: "DBT Crisis Survival Skills Cards | Free Distress Tolerance Tool",
    description: "Free interactive DBT distress tolerance skills cards. TIPP, STOP, ACCEPTS, and IMPROVE with detailed instructions and examples. Random skill button for crisis moments.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What are DBT distress tolerance skills?",
    answer: "Distress tolerance skills are one of four core skill modules in Dialectical Behavior Therapy (DBT), developed by Dr. Marsha Linehan. They are designed for crisis moments when emotions are so intense that you cannot think clearly or solve problems effectively. The goal is not to fix the problem or eliminate the emotion — it is to survive the crisis without making things worse. The skills on this page (TIPP, STOP, ACCEPTS, IMPROVE) give you concrete actions to take when you are overwhelmed, helping you ride out the emotional wave until it naturally subsides.",
  },
  {
    question: "Which skill should I use first in a crisis?",
    answer: "If your distress is very high (8-10 on a 0-10 scale), start with TIPP — especially the Temperature skill (cold water on your face). This works the fastest because it triggers a physiological reflex that slows your heart rate within seconds. If you are about to act impulsively (send an angry message, use a substance, hurt yourself), use STOP first — literally freeze and do not act. Once you have brought the intensity down slightly, you can use ACCEPTS for distraction or IMPROVE to make the moment more bearable. If you cannot decide, use the Random Skill button — any skill is better than no skill.",
  },
  {
    question: "Do I need to be in DBT therapy to use these skills?",
    answer: "No — these skills can be helpful for anyone experiencing intense emotions. However, learning them within a structured DBT program with a trained therapist is significantly more effective. A therapist helps you practice the skills, troubleshoot when they do not work, and understand which skills fit which situations. This page is an educational reference, not a replacement for therapy. If you are dealing with chronic emotional distress, self-harm urges, or suicidal thoughts, please seek out a DBT-trained therapist through the Behavioral Tech clinician directory or your insurance provider.",
  },
  {
    question: "What is the difference between distress tolerance and emotion regulation?",
    answer: "Distress tolerance skills are for crisis moments — they help you survive intense emotions in the short term without making things worse. Emotion regulation skills are for the longer term — they help you understand your emotions, reduce vulnerability to negative emotions, and change unwanted emotional responses over time. Think of distress tolerance as the fire extinguisher (put out the immediate fire) and emotion regulation as the fire prevention system (reduce the chance of fires starting). Both are essential parts of DBT.",
  },
  {
    question: "What if a skill does not work for me?",
    answer: "Not every skill works for every person or every situation. If one skill is not helping, try a different one — that is why there are 22 skills across four categories. Some people respond better to physical skills (TIPP) while others do better with cognitive skills (IMPROVE). Also, skills take practice. The first time you try paced breathing during a crisis, it may feel pointless. But with repeated practice (ideally when you are NOT in crisis), the skills become more effective over time. If you consistently find that no skills help, that is important information to share with a therapist.",
  },
  {
    question: "Can these skills help with substance use urges?",
    answer: "Yes. Many DBT distress tolerance skills are highly effective for riding out substance use urges. Urges are intense but temporary — they typically peak and pass within 15-30 minutes if you do not act on them. TIPP (especially intense exercise and cold temperature) can reduce the physical intensity of cravings. ACCEPTS provides distraction until the urge passes. The Urge Surfing technique (available as a separate tool on this site) pairs well with these DBT skills. If you are in recovery, having these skills readily accessible on your phone can be a valuable part of your prevention toolkit.",
  },
];

export default function DbtCrisisSkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "DBT Crisis Survival Skills Cards",
              description: "Free interactive DBT distress tolerance skills cards. 22 crisis survival skills organized by four acronyms: TIPP (Temperature, Intense exercise, Paced breathing, Progressive relaxation), STOP (Stop, Take a step back, Observe, Proceed mindfully), ACCEPTS (Activities, Contributing, Comparisons, Emotions, Pushing away, Thoughts, Sensations), and IMPROVE (Imagery, Meaning, Prayer, Relaxation, One thing at a time, Vacation, Encouragement). Each card shows detailed instructions and concrete examples. Random skill button for crisis moments. Based on Dialectical Behavior Therapy by Dr. Marsha Linehan.",
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
              { name: "DBT Crisis Survival Skills", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guided DBT crisis survival skills tool with TIPP, STOP, and distress tolerance techniques for managing intense emotions."
          who="Anyone in emotional crisis who needs structured, step-by-step DBT skills to get through the moment safely."
          bottomLine="Crisis skills are for surviving the moment without making it worse — they are not long-term solutions. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Are DBT Crisis Skills?</h2>
        <h2>How Do DBT Crisis Skills Work?</h2>
        <h2>When Should You Use DBT Crisis Skills?</h2>
      </section>
<DbtCrisisSkillsClient faqData={FAQ_DATA} />
    </>
  );
}

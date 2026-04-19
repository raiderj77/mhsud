import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { WorryTimeClient } from "./WorryTimeClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/worry-time-scheduler`;

export const metadata: Metadata = createMetadata({
  path: "/worry-time-scheduler",
  title: "Worry Time Scheduler | Free CBT Worry Postponement Tool",
  description:
    "Free worry time scheduler based on CBT worry postponement. Park worries during the day, process them in a guided session. Reduce anxiety by containing worry. No signup required.",
  keywords: [
    "worry time scheduler", "worry postponement CBT",
    "scheduled worry time", "worry period technique",
    "CBT worry management", "contain worry anxiety",
    "worry time exercise", "worry postponement technique",
    "stimulus control worry", "worry diary CBT",
    "anxiety management tool", "worry time CBT technique",
  ],
  openGraph: {
    title: "Worry Time Scheduler | Free CBT Worry Postponement Tool",
    description: "Free CBT worry postponement tool. Park worries during the day, then process them in a guided worry time session. Reduce anxiety by containing worry to a set time.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is worry time and how does it work?",
    answer: "Worry time (also called scheduled worry or stimulus control for worry) is a cognitive behavioral therapy technique where you designate a specific 15-30 minute period each day as your 'worry time.' When worries arise outside this period, you briefly write them down and postpone thinking about them until your scheduled session. During worry time, you work through each parked worry systematically. Research shows this technique reduces generalized anxiety by containing worry to a set time, rather than letting it dominate your entire day.",
  },
  {
    question: "How long should my worry time session be?",
    answer: "Most CBT protocols recommend 15-30 minutes. Start with 15 minutes and increase if you find you consistently need more time. The key is having a fixed endpoint — worry time should not extend indefinitely. If you finish early, that is a good sign. If you do not get through all worries, prioritize the most pressing ones and save the rest for tomorrow. Over time, many people find they need less worry time as their anxiety decreases.",
  },
  {
    question: "What if I cannot stop worrying outside of worry time?",
    answer: "This is completely normal, especially when starting out. The goal is not perfection — it is practice. When a worry pops up, acknowledge it, write it down quickly (so your brain knows it will not be forgotten), and gently redirect your attention. Some people find it helpful to say to themselves: 'I see this worry. I have written it down. I will give it my full attention at [scheduled time].' If a worry feels truly urgent (involving immediate safety), address it right away. Otherwise, the act of postponing gets easier with practice.",
  },
  {
    question: "When is the best time to schedule worry time?",
    answer: "Choose a time that works consistently for your schedule, but avoid right before bed (worrying before sleep can cause insomnia) and the very start of your day (it may set a negative tone). Late afternoon or early evening works well for many people — it is late enough that you have collected the day's worries but early enough that you have time to decompress afterward. The most important factor is consistency: the same time each day helps your brain learn that worries have a designated time and place.",
  },
  {
    question: "Is worry time the same as rumination?",
    answer: "No — and this is a critical distinction. Rumination is passive, repetitive, unproductive thinking that goes in circles. Worry time is structured and goal-oriented. During worry time, you actively engage with each worry: Is it solvable? If yes, plan a concrete next step. If no, practice acceptance and letting go. The guided prompts in this tool help ensure your worry time stays productive rather than becoming rumination. If you find yourself going in circles on a worry, that is a signal to move on to the next one.",
  },
  {
    question: "Are my worries stored privately?",
    answer: "Yes. Everything you enter in this tool stays in your browser's local storage on your device. Nothing is sent to any server, collected, or shared. Your worry log is only accessible from the browser and device you used. Clearing your browser data will remove your entries. This tool is for educational self-help purposes and is not a replacement for professional therapy. If anxiety is significantly impacting your daily life, please consult a qualified mental health professional.",
  },
];

export default function WorryTimeSchedulerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Worry Time Scheduler",
              description: "A free CBT worry postponement tool. Schedule a daily worry time, park worries throughout the day with a quick capture button, then process each worry in a guided session with structured prompts. Track worry patterns over time with stats. Based on the stimulus control and scheduled worry techniques from cognitive behavioral therapy for generalized anxiety disorder.",
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
              { name: "Worry Time Scheduler", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A CBT-based worry scheduling tool that helps you contain worry by setting aside dedicated time for it rather than worrying all day."
          who="Anyone with chronic worry or generalized anxiety who wants a structured technique to reduce anxious rumination."
          bottomLine="Scheduled worry time paradoxically reduces total worry by giving your brain a designated outlet. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is the Worry Time Scheduler?</h2>
        <h2>How Does the Worry Time Scheduler Work?</h2>
        <h2>What Are the Benefits of Scheduled Worry Time?</h2>
      </section>
<WorryTimeClient faqData={FAQ_DATA} />
    </>
  );
}

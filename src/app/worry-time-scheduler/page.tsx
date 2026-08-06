import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { WorryTimeClient } from "./WorryTimeClient";
import AnswerBlock from "@/components/AnswerBlock";
import { LocalStorageNotice } from "@/components/LocalStorageNotice";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

const TOOL_URL = `${SITE_URL}/worry-time-scheduler`;

export const metadata: Metadata = createMetadata({
  path: "/worry-time-scheduler",
  title: "Worry Time & Worry Postponement | Free CBT Scheduler",
  description:
    "Use a free, private worry time scheduler to park worries and practice CBT worry postponement in a structured 15-30 minute session. Educational; no signup.",
  keywords: [
    "worry time scheduler", "worry postponement CBT",
    "scheduled worry time", "worry period technique",
    "CBT worry management", "contain worry anxiety",
    "worry time exercise", "worry postponement technique",
    "stimulus control worry", "worry diary CBT",
    "anxiety management tool", "worry time CBT technique",
  ],
  openGraph: {
    title: "Worry Time & Worry Postponement | Free CBT Scheduler",
    description: "A free, private tool for practicing scheduled worry time and CBT worry postponement. Educational only; no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is worry time and how does it work?",
    answer: "Worry time (also called worry postponement or scheduled worry) is a cognitive behavioral technique where you designate a specific 15-30 minute period to revisit worries. When a worry arises outside that period, you briefly record it and return to it later. Studies of worry-postponement exercises have reported mixed results, so this educational tool should not be treated as therapy or as a guaranteed way to reduce anxiety.",
  },
  {
    question: "How long should my worry time session be?",
    answer: "Some CBT protocols use a 15-30 minute period, but evidence does not establish one best duration for everyone. You can start with 15 minutes, keep a fixed endpoint, and adjust based on comfort. If you finish early, that only means no other entries need review at that time; it does not show that the exercise is working. Stop if the session increases distress.",
  },
  {
    question: "What if I cannot stop worrying outside of worry time?",
    answer: "Postponing worry can be difficult. The goal is practice, not perfect control. When a worry appears, you can acknowledge it, write a brief reminder, and try returning attention to the present task. A note does not guarantee that the worry will feel less urgent. Address immediate safety concerns right away, and stop the exercise or seek professional support if it increases distress.",
  },
  {
    question: "When is the best time to schedule worry time?",
    answer: "There is no established best time for everyone. Choose a time you can remember and that does not interfere with important activities or rest. If reviewing worries near bedtime feels activating, choose an earlier time. A consistent reminder can support the routine, but it does not train the brain or guarantee an outcome.",
  },
  {
    question: "Is worry time the same as rumination?",
    answer: "They are not intended to be the same. This exercise uses a bounded review period and prompts about possible actions or acceptance, while rumination is repetitive thinking without a clear next step. The prompts cannot ensure that a session stays productive or reduces anxiety. If you find yourself going in circles or becoming more distressed, stop and consider professional support.",
  },
  {
    question: "Are my worries stored privately?",
    answer: "Your worry log is saved in this browser's local storage and is not intentionally sent to MindCheck Tools application servers. Anyone with access to the same browser profile may be able to read it. Clearing site data removes the entries. On a shared device, use a private window or clear the log when finished. This educational tool is not a replacement for professional therapy.",
  },
];

export default function WorryTimeSchedulerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "Worry Time Scheduler",
              description: "A free CBT worry postponement tool. Schedule a daily worry time, park worries throughout the day with a quick capture button, then process each worry in a guided session with structured prompts. Track worry patterns over time with stats. Based on the stimulus control and scheduled worry techniques from cognitive behavioral therapy for generalized anxiety disorder.",
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
              { name: "Worry Time Scheduler", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100">
          Worry Time Scheduler
        </h1>
      </div>
      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 5, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="Worry time, also called worry postponement, is a CBT exercise that sets a planned 15-30 minute period to revisit worries recorded earlier in the day."
          who="People who want a structured, private way to practice scheduled worry without creating an account."
          bottomLine="Evidence for standalone and online worry-postponement exercises is mixed. This educational tool is not treatment, a diagnosis, or emergency care."
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

      <LocalStorageNotice dataDescription="your worry log and schedule" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ToolReviewerBio lastReviewed="August 2, 2026" />
      </div>
      <WorryTimeClient faqData={FAQ_DATA} />
    </>
  );
}

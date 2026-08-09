import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ThoughtRecordClient } from "./ThoughtRecordClient";
import AnswerBlock from "@/components/AnswerBlock";
import { LocalStorageNotice } from "@/components/LocalStorageNotice";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

const TOOL_URL = `${SITE_URL}/cbt-thought-record`;

export const metadata: Metadata = createMetadata({
  path: "/cbt-thought-record",
  title: "CBT Thought Record Worksheet | Free 7-Step Tool",
  description:
    "Use a free CBT thought record worksheet to note a situation, thoughts, feelings, evidence, and an alternative view. Optional browser-local save; no signup.",
  keywords: [
    "CBT thought record", "thought record worksheet",
    "CBT worksheet online", "thought diary",
    "cognitive behavioral therapy worksheet",
    "CBT thought diary", "dysfunctional thought record",
    "thought record template", "cognitive restructuring worksheet",
    "CBT emotions worksheet", "automatic thoughts CBT",
    "Aaron Beck thought record",
  ],
  openGraph: {
    title: "CBT Thought Record Worksheet | Free 7-Step Tool",
    description: "Work through a seven-step CBT thought record. Optional browser-local save; no signup, diagnosis, or automated analysis.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is a CBT thought record?",
    answer: "A CBT thought record (also called a thought diary) is a structured exercise for noting a situation, thoughts and feelings, evidence that supports or does not support a thought, and a more realistic or neutral alternative. This page offers an independent educational implementation of that general technique; it is not an official Beck Institute worksheet or a clinical assessment.",
  },
  {
    question: "When might I use a thought record?",
    answer: "You might use one when you want to slow down and examine a recent difficult situation. There is no required schedule on this page. If a clinician has suggested thought records, follow the plan you agreed with them. Pause if the exercise increases distress or self-criticism.",
  },
  {
    question: "What if my emotions do not change after completing a thought record?",
    answer: "An emotion rating may decrease, stay the same, or increase. The worksheet does not grade that change or determine whether the exercise worked. A realistic alternative thought should acknowledge the available evidence rather than force a positive conclusion. A qualified professional can help if you feel stuck or the exercise is distressing.",
  },
  {
    question: "What is the difference between a thought and an emotion?",
    answer: "An emotion is a feeling word, such as anxious, sad, angry, or frustrated. A thought is a sentence or image that passes through your mind, such as 'I might fail.' The worksheet separates them to make the reflection easier to organize; it does not decide whether a thought is true or label it automatically.",
  },
  {
    question: "Is this tool the same as seeing a therapist?",
    answer: "No. This is an educational self-reflection worksheet, not therapy, diagnosis, treatment, or individualized medical advice. A qualified professional can consider your circumstances, help with difficult parts of the exercise, and discuss whether CBT or another approach is appropriate.",
  },
  {
    question: "Are my thought records private?",
    answer: "Entries are saved in this browser's local storage and are not intentionally sent to MindCheck Tools application servers. Anyone with access to the same browser profile may be able to read them. Clearing site data deletes the local records. On a shared device, use a private window or delete records when finished. Keep any printed or downloaded copy in a secure location you control.",
  },
];

export default function CbtThoughtRecordPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "CBT Thought Record Worksheet",
              description: "A free independent educational CBT thought record worksheet with seven prompts for a situation, thoughts, emotions, evidence, an alternative thought, and an optional emotion re-rating. Entries can be saved to the current browser profile only when the visitor opts in.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-08-09",
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
              { name: "CBT Thought Record", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100">
          CBT Thought Record Worksheet
        </h1>
      </div>
      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 9, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A seven-step educational worksheet for recording a situation, thoughts, emotions, supporting and contrary evidence, and a more realistic or neutral alternative."
          who="Adults learning CBT concepts who want a structured reflection exercise; it is not a substitute for working with a qualified professional."
          bottomLine="The worksheet can organize reflection, but it does not assess, diagnose, or treat a mental health condition. Optional saves remain in this browser profile."
          lastUpdated="2026-08-09"
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

      <LocalStorageNotice dataDescription="your thought-record entries" optional />
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ToolReviewerBio lastReviewed="August 2, 2026" />
      </div>
      <ThoughtRecordClient faqData={FAQ_DATA} />
    </>
  );
}

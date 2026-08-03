import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ThoughtRecordClient } from "./ThoughtRecordClient";
import AnswerBlock from "@/components/AnswerBlock";
import { LocalStorageNotice } from "@/components/LocalStorageNotice";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

const TOOL_URL = `${SITE_URL}/cbt-thought-record`;

export const metadata: Metadata = createMetadata({
  path: "/cbt-thought-record",
  title: "Free CBT Thought Record: 7-Column Online Worksheet",
  description:
    "Use a free 7-column CBT thought record to identify automatic thoughts, compare evidence, and draft a balanced alternative. Local browser save; no signup.",
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
    title: "Free CBT Thought Record: 7-Column Online Worksheet",
    description: "Work through a 7-column CBT thought record, compare evidence, and draft a balanced alternative thought. Optional local browser save; no signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is a CBT thought record?",
    answer: "A CBT thought record (also called a dysfunctional thought record or thought diary) is a structured worksheet used in cognitive behavioral therapy. It breaks down a distressing experience into columns: the situation, your automatic thought, the emotions you felt, evidence for the thought, evidence against it, a balanced alternative thought, and a re-rating of your emotions. By working through these columns, you learn to distinguish between facts and feelings, challenge distorted thinking, and develop more balanced perspectives. It was developed by Aaron Beck and refined by David Burns and Christine Padesky.",
  },
  {
    question: "How often should I complete a thought record?",
    answer: "During active CBT treatment, therapists typically recommend completing at least one thought record per day, especially when you notice strong negative emotions. Even 2-3 per week can build the cognitive restructuring skill over time. The key is consistency, regular practice trains your brain to automatically question distorted thoughts. Many people find it helpful to set a daily time (like the evening) to reflect on the most distressing moment of their day and work through it. Over time, you will start catching and challenging negative thoughts in real time without needing to write them down.",
  },
  {
    question: "What if my emotions do not change after completing a thought record?",
    answer: "It is completely normal for emotion ratings to not change dramatically, especially in the beginning. The goal is not to eliminate negative emotions, it is to make your thinking more accurate and reduce the intensity somewhat. Even a 10-point reduction (e.g., anxiety from 80 to 70) is meaningful. If you consistently find no change, it may mean the balanced thought does not feel convincing yet, which is common. Try asking: 'What would I tell a friend in this situation?' or 'What will I think about this in a year?' If emotions remain very intense, this is worth discussing with a therapist who can help you develop the skill further.",
  },
  {
    question: "What is the difference between a thought and an emotion?",
    answer: "This is one of the most important distinctions in CBT. Emotions are single words that describe how you feel: anxious, sad, angry, guilty, ashamed, frustrated, hopeless. Thoughts are sentences or images that go through your mind: 'I'm going to fail,' 'Nobody likes me,' 'This is hopeless.' A common mistake is listing a thought as an emotion. For example, 'I feel like a failure' is actually a thought (containing the cognitive distortion of labeling), while the emotion might be 'ashamed' or 'sad.' The thought record separates these so you can challenge the thought while validating the emotion.",
  },
  {
    question: "Is this tool the same as seeing a therapist?",
    answer: "No. This tool is an educational self-help exercise based on the CBT thought record technique. While thought records are a core CBT tool, working with a trained therapist provides much more than a worksheet: a therapist helps you identify patterns you might miss, guides you through stuck points, provides accountability, and tailors the approach to your specific needs. If you are experiencing significant anxiety, depression, or other mental health challenges, this tool can be a helpful supplement but should not replace professional care.",
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
              description: "A free interactive 7-column CBT thought record worksheet. Record situations, automatic thoughts, emotions with intensity ratings, evidence for and against, balanced alternative thoughts, and re-rate emotions. Before/after emotion comparison. Save entries to browser for a private thought journal. Printable output. Based on the work of Aaron Beck, David Burns, and Christine Padesky.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-08-02",
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
          CBT Thought Record
        </h1>
      </div>
      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 2, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A seven-column educational worksheet for recording a situation, automatic thoughts, emotions, evidence, and a more balanced alternative thought."
          who="Adults learning CBT concepts who want a structured reflection exercise; it is not a substitute for working with a qualified professional."
          bottomLine="The worksheet can organize reflection, but it does not assess, diagnose, or treat a mental health condition. Optional saves remain in this browser profile."
          lastUpdated="2026-08-02"
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

      <LocalStorageNotice dataDescription="your thought-record entries" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ToolReviewerBio lastReviewed="August 2, 2026" />
      </div>
      <ThoughtRecordClient faqData={FAQ_DATA} />
    </>
  );
}

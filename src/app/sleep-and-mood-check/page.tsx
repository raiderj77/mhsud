import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { SleepMoodClient } from "./SleepMoodClient";
import AnswerBlock from "@/components/AnswerBlock";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

const TOOL_URL = `${SITE_URL}/sleep-and-mood-check`;

export const metadata: Metadata = createMetadata({
  path: "/sleep-and-mood-check",
  title: "Free Sleep & Mood Reflection Tool (Private, Not a Diagnosis)",
  description:
    "Reflect on how sleep relates to mood and energy with this browser-local, 10-question educational tool. About 2 minutes. Not a diagnostic tool.",
  keywords: [
    "sleep and mood reflection", "sleep quality check", "insomnia self-check",
    "sleep habits and mental health", "sleep mood connection", "sleep assessment",
    "am i sleeping enough", "sleep quality quiz", "sleep and anxiety",
    "sleep and depression", "sleep reflection tool", "sleep hygiene check",
  ],
});

const FAQ_DATA = [
  { question: "Is this a sleep disorder diagnostic tool?", answer: "No. This is a self-reflection tool that helps you think about patterns in your sleep and mood. It cannot diagnose insomnia, sleep apnea, or any other sleep disorder. If you suspect a sleep disorder, please consult a healthcare provider." },
  { question: "How are sleep and mood connected?", answer: "Research consistently shows a bidirectional relationship between sleep and mental health. Poor sleep can worsen anxiety and depression, while anxiety and depression can disrupt sleep. This tool helps you notice whether these patterns may be present in your life." },
  { question: "How are my answers handled?", answer: "Answers and results are processed locally and are not intentionally sent to MindCheck Tools. Ordinary page requests can create hosting records, and copies, sync, backups, or shared-device access are outside this boundary." },
  { question: "How much sleep do I need?", answer: "Most adults need 7-9 hours per night, though individual needs vary. This tool doesn't prescribe a specific amount, it asks about your experience of sleep quality, daytime energy, and mood to help you reflect on whether your current sleep pattern is working for you." },
  { question: "What if my results suggest problems?", answer: "Consider talking with your healthcare provider about your sleep. Good sleep hygiene practices can help many people, but persistent sleep problems often benefit from professional assessment to rule out underlying causes." },
  {
    question: "Do I need exact sleep times for a useful conversation?",
    answer: "No. Approximate times and plain descriptions can help explain your experience without pretending to be precise measurements. If you are unsure about an entry, mark it as an estimate rather than filling in details you do not remember. Follow any specific recording guidance your healthcare professional gives you.",
  },
  {
    question: "Should I repeat the tool every day to create a trend?",
    answer: "This tool does not save entries or provide a validated way to compare changes over time. Repeated results are not evidence that a condition is improving or worsening. A separate simple note can support discussion, but concerns deserve attention even without a complete log.",
  },
];

export default function SleepMoodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      ...toolPageJsonLd({ name: "Sleep & Mood Reflection Tool", description: "Original 10-question tool to reflect on sleep quality, duration, and mood impact.", url: TOOL_URL, datePublished: "2025-02-01", dateModified: "2026-05-12" }),
    }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Sleep & Mood Reflection", url: TOOL_URL }])) }} />
            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A one-time, 10-question educational reflection on sleep, mood, and daytime energy. It does not save a sleep diary or track changes over time."
          who="Adults who want to reflect on their current sleep experience before discussing concerns with a healthcare professional."
          bottomLine="This original self-reflection tool is not clinically validated and cannot diagnose a sleep or mood condition. Answers are processed in your browser; this is not an ongoing tracking service."
          lastUpdated="2026-03-20"
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
        <time dateTime="2026-03-20">
          {new Date("2026-03-20T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ToolReviewerBio lastReviewed="August 2, 2026" />
      </div>
      <SleepMoodClient faqData={FAQ_DATA} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-10 mb-12 space-y-8 text-neutral-600 dark:text-neutral-300 leading-relaxed">
        <section aria-labelledby="sleep-and-mood-check-guide-0" className="space-y-4">
          <h2 id="sleep-and-mood-check-guide-0" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">Keeping a simple sleep and mood log</h2>
          <p>This page offers a one-time reflection, not a saved diary. If you want to look across several days, you could keep a separate brief paper note in a private place. Record approximate sleep and waking times, how rested you felt, and a few words about mood or daytime energy. Estimates are enough for reflection; there is no need to monitor every minute.</p>
          <p>Use similar wording when possible so later entries are easier to compare. A short note such as “restless night, low energy in the afternoon” may be more useful than a long explanation written from memory. You can include ordinary context such as a changed work schedule or an interrupted night. Avoid turning the log into a daily performance grade.</p>
        </section>
        <section aria-labelledby="sleep-and-mood-check-guide-1" className="space-y-4">
          <h2 id="sleep-and-mood-check-guide-1" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">Looking back over a week of entries</h2>
          <p>Read the entries together and look for repeated experiences rather than deciding what any one night means. Do difficult mornings appear alongside later bedtimes, or do low-energy days happen after several different kinds of nights? Notice exceptions too. A rested morning after disrupted sleep is part of the picture, not an entry to discard because it does not fit an emerging idea.</p>
          <p>Write a question rather than a conclusion: “I noticed several tired afternoons; what else should I consider?” A week is a convenient review period, not a validated observation window or proof of a cause. If you speak with a healthcare professional, a few concrete examples can explain what has been bothering you and how it affects ordinary activities.</p>
        </section>
        <section aria-labelledby="sleep-and-mood-check-guide-2" className="space-y-4">
          <h2 id="sleep-and-mood-check-guide-2" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">Limitations and choosing a next step</h2>
          <p>Self-reported notes depend on memory and personal judgment. Work hours, caregiving, surroundings, physical discomfort, substance use, and other circumstances may all be relevant to a discussion about sleep and mood. A log cannot separate those influences or determine which one explains a pattern. Do not use entries to adjust medication or to decide whether a health concern needs attention.</p>
          <p>Keep any separate record somewhere you are comfortable storing personal information, especially on a shared device or in a shared household. This tool does not store that log for you. If tracking becomes burdensome or makes you preoccupied with getting sleep “right,” it is reasonable to stop. Reflection should serve a useful conversation, not become another demand.</p>
          <p>The <Link href="/work-stress-check" className="font-semibold underline">work stress check</Link> offers a separate look at work demands, while the <Link href="/daily-recovery-check-in" className="font-semibold underline">daily recovery check-in</Link> provides a recovery-focused reflection. For a brief change of focus, consider <Link href="/five-senses-grounding" className="font-semibold underline">five-senses grounding</Link>. None establishes why sleep or mood has changed or replaces professional care. Persistent or concerning difficulties can be discussed with a qualified healthcare professional. If support is urgent, visit <Link href="/crisis-resources" className="font-semibold underline">crisis resources</Link>.</p>
        </section>
      </div>
    </>
  );
}

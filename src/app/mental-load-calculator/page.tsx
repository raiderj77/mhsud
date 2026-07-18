import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { MentalLoadClient } from "./MentalLoadClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/mental-load-calculator`;

export const metadata: Metadata = createMetadata({
  path: "/mental-load-calculator",
  title: "Mental Load Calculator & Test | MindCheckTools",
  description:
    "Feeling overwhelmed managing everything at home? Take our free mental load calculator to measure your invisible labor and find balance. No sign-up needed.",
  keywords: [
    "mental load calculator", "mental load test", "emotional labor assessment", "invisible labor tool",
    "household mental load", "invisible workload check", "cognitive labor quiz",
    "mental load in relationships", "who does more housework", "household task distribution",
    "emotional labor calculator", "planning burden assessment",
  ],
});

const FAQ_DATA = [
  { question: "What is 'mental load'?", answer: "Mental load refers to the invisible cognitive work of managing a household or family, remembering appointments, planning meals, tracking supplies, anticipating needs, coordinating schedules, and noticing what needs to be done. It's the planning and remembering that happens before any task gets executed." },
  { question: "Is this a clinical assessment?", answer: "No. This is a reflection and conversation tool designed to help you identify patterns. It is not based on any clinical scale and cannot diagnose any condition. It's meant to support healthier conversations at home." },
  { question: "Can I use this with my partner?", answer: "Yes, that's one of the best uses. Each person can take it independently, then compare results. The goal is to start a constructive conversation about task distribution, not to assign blame." },
  { question: "Is my data stored?", answer: "No. Everything happens in your browser. Your responses are never sent to any server." },
  { question: "Why does mental load matter for mental health?", answer: "Research suggests that carrying a disproportionate share of cognitive household labor is associated with higher stress, resentment, and burnout, particularly for women and primary caregivers. Recognizing the pattern is often the first step toward more equitable distribution." },
];

export default function MentalLoadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      ...toolPageJsonLd({ name: "Mental Load Calculator", description: "Reflect on how planning, remembering, and organizing are distributed in your household.", url: TOOL_URL, datePublished: "2025-02-01", dateModified: "2026-05-12" }),
      reviewedBy: { "@type": "Person", "name": "Jason Ramirez", "jobTitle": "Certified Drug and Alcohol Counselor (CADC-II)", "url": "https://mindchecktools.com/about/jason-ramirez" },
    }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Mental Load Calculator", url: TOOL_URL }])) }} />
            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A calculator that quantifies the invisible mental load of managing household tasks, schedules, and emotional labor."
          who="Anyone who feels overwhelmed by household management and wants to see the actual scope of their mental load."
          bottomLine="Making the mental load visible is the first step to redistributing it more equitably. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools &middot; Your Friendly Developer LLC
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

      <section className="sr-only">
        <h2>What Is the Mental Load Calculator?</h2>
        <h2>How Does the Mental Load Calculator Work?</h2>
        <h2>What Do My Mental Load Results Mean?</h2>
      </section>
<MentalLoadClient faqData={FAQ_DATA} />
    </>
  );
}

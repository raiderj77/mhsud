import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { BurnoutClient } from "./BurnoutClient";

const TOOL_URL = `${SITE_URL}/burnout-assessment-tool`;

export const metadata: Metadata = createMetadata({
  path: "/burnout-assessment-tool",
  title: "Burnout Self-Check | Free Educational Check-In",
  description: "Original educational burnout self-check about current role-related strain. Site-defined reflection ranges, private in-browser scoring, and no signup.",
  keywords: [
    "burnout assessment", "burnout test", "role-related strain", "work burnout",
    "professional burnout", "mental health screening", "stress assessment", "burnout symptoms",
    "burnout questionnaire", "workplace stress", "occupational burnout", "burnout scale",
    "burnout screening", "job burnout", "caregiver burnout", "teacher burnout",
    "healthcare burnout", "burnout recovery", "burnout prevention", "burnout symptoms test"
  ],
  openGraph: {
    title: "Burnout Self-Check | Free Educational Check-In",
    description: "Use an original educational check-in about energy, recovery, connection, patience, confidence, and meaning. Not a validated or diagnostic instrument.",
    url: TOOL_URL,
    type: "website",
  },
});

const faqData = [
  {
    question: "What is burnout?",
    answer: "Burnout is an occupational phenomenon associated with chronic workplace stress that has not been successfully managed. People may notice depleted energy, greater mental distance or cynicism toward work, and reduced professional effectiveness. Similar experiences can also occur with depression, anxiety, sleep problems, medical conditions, or difficult life circumstances, so a self-check cannot determine the cause.",
  },
  {
    question: "Is this tool a clinical diagnosis?",
    answer: "No. MindCheck Tools created this educational self-check for reflection. It is not a validated screening instrument and cannot diagnose burnout, depression, anxiety, or another condition. A qualified healthcare professional can help evaluate persistent or concerning experiences.",
  },
  {
    question: "How should I interpret this burnout check-in?",
    answer: "Use it to notice patterns in energy and recovery, connection and patience, and confidence and meaning. The questions, totals, and four score bands were created by MindCheck Tools for education. They have not been clinically validated, and the bands are not clinical cutoffs.",
  },
  {
    question: "What should I do if my total falls in a higher site-defined range?",
    answer: "The total alone does not establish that you have burnout or need a particular treatment. Review the individual responses that concern you and consider practical support, such as discussing workload, arranging recovery time, contacting an employee assistance program, or speaking with a qualified healthcare professional if the experiences persist or interfere with daily life.",
  },
  {
    question: "How often should I use this check-in?",
    answer: "You can use the check-in whenever reflection might be helpful. Some people repeat it during periods of high stress or workload to notice changes in individual responses. Because the score bands are not validated, do not use changes in the total as a medical outcome measure.",
  },
  {
    question: "Are my results private?",
    answer: "Yes. This tool runs entirely in your browser. No data is sent to any server, and no results are stored. Your privacy is protected, and you can feel comfortable answering honestly.",
  },
];

export default function BurnoutAssessmentPage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "Burnout Educational Self-Check",
              description: "An original educational check-in about current role-related strain. Its site-defined score bands are not validated clinical cutoffs and cannot diagnose burnout.",
              url: TOOL_URL,
              datePublished: "2025-02-25",
              dateModified: "2026-08-02",
            }),
    }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(faqData)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Tools", url: `${SITE_URL}/tools` },
              { name: "Burnout Educational Self-Check", url: TOOL_URL },
            ])
          ),
        }}
      />
            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 2, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6"><AnswerBlock what="An original educational check-in about energy and recovery, connection and patience, and confidence and meaning in a work or caregiving role." who="People who want to reflect on current role-related strain. This check-in cannot determine whether someone has clinical burnout or another condition." bottomLine="The questions and four score bands are site-defined and have not been clinically validated. They are not diagnostic cutoffs or a substitute for professional evaluation." lastUpdated="2026-08-02" /></div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ToolReviewerBio lastReviewed="August 2, 2026" />
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
<BurnoutClient faqData={faqData} />
    </>
  );
}

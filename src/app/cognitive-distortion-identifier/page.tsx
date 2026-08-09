import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CognitiveDistortionClient } from "./CognitiveDistortionClient";
import AnswerBlock from "@/components/AnswerBlock";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

const TOOL_URL = `${SITE_URL}/cognitive-distortion-identifier`;

export const metadata: Metadata = createMetadata({
  path: "/cognitive-distortion-identifier",
  title: "Cognitive Distortion Identifier | Free Browser-Local CBT Tool",
  description:
    "Explore 16 common cognitive distortions with examples and guided reframing prompts. Free browser-local educational CBT tool; no AI, signup, score, or diagnosis.",
  keywords: [
    "cognitive distortions list", "thinking errors CBT",
    "cognitive distortion worksheet", "cognitive distortions examples",
    "CBT thought record", "cognitive behavioral therapy tool",
    "thinking patterns", "reframe negative thoughts",
    "cognitive distortion identifier", "all or nothing thinking",
    "catastrophizing", "emotional reasoning",
    "David Burns cognitive distortions",
  ],
  openGraph: {
    title: "Cognitive Distortion Identifier | Free Browser-Local CBT Tool",
    description: "Explore 16 common thinking patterns and practice a balanced reframe. Educational only, with no AI, signup, score, or diagnosis.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What are cognitive distortions?",
    answer: "The term cognitive distortions refers to biased or unhelpful patterns that can shape how someone interprets a situation. Examples include all-or-nothing thinking, catastrophizing, mind reading, and emotional reasoning. A pattern label is a prompt for reflection, not a diagnosis or proof that a thought is false.",
  },
  {
    question: "Is this tool the same as therapy or AI?",
    answer: "No. This tool does not use AI and is not a substitute for therapy. It is an educational self-reflection exercise based on the CBT thought record technique. You write your own thought, you identify the distortions yourself from a provided list, and you write your own reframing. The tool structures the process but does not analyze your thoughts or provide personalized clinical advice. If you are struggling with persistent negative thinking, a licensed therapist trained in CBT can provide much more comprehensive support.",
  },
  {
    question: "Can one thought fit more than one cognitive distortion?",
    answer: "Yes. One thought may resemble one pattern, several patterns, or none of the listed patterns. There is no required number and this tool does not calculate a score. Select only the labels that help you examine the thought more carefully.",
  },
  {
    question: "What is a CBT thought record?",
    answer: "A thought record is a common CBT exercise for writing down a situation, thoughts and feelings, evidence for and against an unhelpful thought, and a more realistic or neutral alternative. This tool offers a simplified educational pattern-identification and reframing exercise; it is not a complete thought record or a replacement for therapy.",
  },
  {
    question: "Does identifying cognitive distortions mean my thoughts are wrong?",
    answer: "Not necessarily. A thought can contain cognitive distortions and still have some truth in it. The goal is not to replace negative thoughts with positive ones, it is to make your thinking more accurate and balanced. For example, 'I made a mistake at work and I'll probably get fired' contains fortune telling and catastrophizing, but the first part (making a mistake) may be true. The reframe isn't 'Everything is fine!', it might be 'I made a mistake at work. Mistakes happen. I can address it and see what happens next.' The goal is balance, not denial.",
  },
  {
    question: "How often should I practice identifying cognitive distortions?",
    answer: "There is no single schedule that is right for everyone. Use the exercise only when it feels constructive, and pause if it increases distress or self-criticism. If you are receiving care, a qualified professional can help you decide whether and how a thought record fits your plan.",
  },
];

export default function CognitiveDistortionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "Cognitive Distortion Identifier",
              description: "A free browser-local educational tool for exploring 16 common cognitive distortions with examples and guided reframing prompts. It does not use AI, score responses, diagnose, or replace therapy.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-08-08",
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
              { name: "Cognitive Distortion Identifier", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">
          Cognitive Distortion Identifier and Reframing Tool
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Explore 16 common thinking patterns and draft a more balanced alternative. This free educational tool does not use AI, calculate a score, or provide a diagnosis.
        </p>
      </div>
      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 8, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A browser-local educational tool for comparing a thought with 16 common cognitive-distortion descriptions and drafting a more balanced alternative."
          who="Adults exploring CBT concepts independently or alongside guidance from a qualified professional."
          bottomLine="This is a self-guided reflection exercise, not a validated assessment. It does not use AI, score or diagnose you, or determine whether a thought is true."
          lastUpdated="2026-08-08"
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
        <time dateTime="2026-08-08">
          {new Date("2026-08-08T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ToolReviewerBio lastReviewed="August 2026" />
      </div>

<CognitiveDistortionClient faqData={FAQ_DATA} />
    </>
  );
}

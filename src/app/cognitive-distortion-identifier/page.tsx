import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { CognitiveDistortionClient } from "./CognitiveDistortionClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/cognitive-distortion-identifier`;

export const metadata: Metadata = createMetadata({
  path: "/cognitive-distortion-identifier",
  title: "Cognitive Distortion Identifier | Free CBT Thought Tool",
  description:
    "Identify cognitive distortions in your thinking with this free CBT-based tool. 16 common thinking errors with examples and guided reframing prompts. No signup required.",
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
    title: "Cognitive Distortion Identifier | Free CBT Thought Tool",
    description: "Free CBT-based tool to identify cognitive distortions. Write a thought, identify thinking errors from 16 patterns, and practice reframing. No signup.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What are cognitive distortions?",
    answer: "Cognitive distortions are systematic errors in thinking that cause you to perceive reality inaccurately. They were first identified by psychiatrist Aaron Beck in the 1960s and later expanded by psychologist David Burns in his book Feeling Good. Common examples include all-or-nothing thinking, catastrophizing, and emotional reasoning. Everyone experiences cognitive distortions — they become a problem when they are frequent, automatic, and unchallenged, leading to persistent negative emotions like anxiety and depression.",
  },
  {
    question: "Is this tool the same as therapy or AI?",
    answer: "No. This tool does not use AI and is not a substitute for therapy. It is an educational self-reflection exercise based on the CBT thought record technique. You write your own thought, you identify the distortions yourself from a provided list, and you write your own reframing. The tool structures the process but does not analyze your thoughts or provide personalized clinical advice. If you are struggling with persistent negative thinking, a licensed therapist trained in CBT can provide much more comprehensive support.",
  },
  {
    question: "How many cognitive distortions should I expect to find in one thought?",
    answer: "Most negative thoughts involve 2-4 cognitive distortions at once. For example, the thought 'I failed the test, so I'm an idiot and I'll never graduate' contains all-or-nothing thinking (total failure from one test), labeling (calling yourself an idiot), fortune telling (predicting you'll never graduate), and overgeneralization (one test defines your future). Finding multiple distortions in a single thought is completely normal and does not mean something is wrong with you — it just means the thought is doing a lot of distorting.",
  },
  {
    question: "What is a CBT thought record?",
    answer: "A CBT thought record (also called a dysfunctional thought record) is a structured worksheet used in cognitive behavioral therapy. The basic version involves writing down a situation, the automatic thought that came to mind, the emotions you felt, the cognitive distortions present, and then a more balanced alternative thought. This tool is a simplified, interactive version of that exercise. Thought records are one of the most evidence-based tools in CBT and are routinely assigned as homework between therapy sessions.",
  },
  {
    question: "Does identifying cognitive distortions mean my thoughts are wrong?",
    answer: "Not necessarily. A thought can contain cognitive distortions and still have some truth in it. The goal is not to replace negative thoughts with positive ones — it is to make your thinking more accurate and balanced. For example, 'I made a mistake at work and I'll probably get fired' contains fortune telling and catastrophizing, but the first part (making a mistake) may be true. The reframe isn't 'Everything is fine!' — it might be 'I made a mistake at work. Mistakes happen. I can address it and see what happens next.' The goal is balance, not denial.",
  },
  {
    question: "How often should I practice identifying cognitive distortions?",
    answer: "Research suggests that regular practice produces the best results. Many CBT therapists recommend completing a thought record at least once per day, especially during periods of high stress, anxiety, or depression. Even 2-3 times per week can build the skill. Over time, you will start catching distortions automatically in real time — before they spiral into overwhelming emotions. Think of it like a muscle: the more you exercise it, the stronger and more natural it becomes.",
  },
];

export default function CognitiveDistortionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Cognitive Distortion Identifier",
              description: "A free CBT-based educational tool for identifying cognitive distortions. Write a negative thought, identify which of 16 common thinking errors apply from a guided list with descriptions and examples, then practice reframing with balanced alternative prompts. Based on the work of Aaron Beck and David Burns.",
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
              { name: "Cognitive Distortion Identifier", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A tool that helps you identify common cognitive distortions like catastrophizing, all-or-nothing thinking, and mind reading in your own thought patterns."
          who="Anyone working on CBT skills who wants to recognize which thinking traps they fall into most often."
          bottomLine="Identifying cognitive distortions is the first step to challenging them — awareness creates space for change. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>

      <section className="sr-only">
        <h2>What Is the Cognitive Distortion Identifier?</h2>
        <h2>How Does the Cognitive Distortion Tool Work?</h2>
        <h2>What Do My Cognitive Distortion Results Mean?</h2>
      </section>
<CognitiveDistortionClient faqData={FAQ_DATA} />
    </>
  );
}

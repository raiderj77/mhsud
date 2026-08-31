import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { SafetyPlanClient } from "./SafetyPlanClient";
import AnswerBlock from "@/components/AnswerBlock";
import { LocalStorageNotice } from "@/components/LocalStorageNotice";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

const TOOL_URL = `${SITE_URL}/safety-plan`;

export const metadata: Metadata = createMetadata({
  path: "/safety-plan",
  title: "Safety Plan | Free Crisis Safety Planning Tool",
  description:
    "Create a personal safety plan based on the Stanley-Brown model. Entries can be saved in this browser, and you can print a copy for offline access. Call 988 if in crisis.",
  keywords: [
    "safety plan", "safety plan template", "suicide safety plan",
    "Stanley-Brown safety plan", "crisis safety plan",
    "safety planning intervention", "suicide prevention plan",
    "crisis plan template", "safety plan worksheet",
    "988 crisis lifeline", "mental health safety plan",
  ],
  openGraph: {
    title: "Safety Plan | Free Crisis Safety Planning Tool",
    description: "Create a personal 6-step safety plan based on the Stanley-Brown model. Entries can be saved in this browser, and you can print a copy for offline access. If you are in crisis, call or text 988.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is a safety plan?",
    answer: "A safety plan is a prioritized written list of coping strategies and resources that you can use during or before a suicidal crisis. It is based on the Stanley-Brown Safety Planning Intervention, which is one of the most evidence-based suicide prevention tools available. The plan includes 6 steps: recognizing warning signs, using internal coping strategies, contacting people for distraction, reaching out for help, contacting professionals or crisis lines, and making your environment safer. The idea is to work through the steps in order, starting with the simplest strategies and escalating only if needed.",
  },
  {
    question: "Is a safety plan the same as a no-suicide contract?",
    answer: "No. A no-suicide contract is a promise not to self-harm; it is not a substitute for risk assessment, collaborative safety planning, or care. A safety plan instead organizes concrete coping and support steps. In a 2018 JAMA Psychiatry cohort comparison, a clinician-delivered Safety Planning Intervention plus structured follow-up was associated with 45% fewer suicidal behaviors over six months among adult Veterans Health Administration emergency-department patients than usual care. That finding does not establish that this standalone web tool prevents suicide.",
  },
  {
    question: "Should I create a safety plan with a therapist?",
    answer: "Ideally, yes. While this tool allows you to create a safety plan on your own, the gold standard is to develop one in collaboration with a mental health professional who knows your situation. A therapist can help you identify warning signs you might not recognize, suggest coping strategies tailored to you, and ensure your plan is as strong as possible. If you already have a therapist, bring your plan to your next session for review. If you do not have a therapist, creating a plan on your own is still far better than having no plan at all.",
  },
  {
    question: "How often should I update my safety plan?",
    answer: "You should review and update your safety plan regularly, at minimum, every few months or whenever something significant changes in your life. Update it when your support network changes (new therapist, new friends, someone moves away), when you discover new coping strategies that work for you, after a crisis (what worked? what did not?), or when your warning signs shift. Many therapists review the safety plan at the beginning of each session. Think of it as a living document, not a one-time exercise.",
  },
  {
    question: "What does 'making my environment safer' mean?",
    answer: "Step 6 of the safety plan focuses on reducing access to things that could be used for self-harm during a crisis. Research from Harvard's Means Matter project shows that this is one of the single most effective suicide prevention strategies. It does not mean you are 'dangerous', it means you are being smart about protecting yourself during your most vulnerable moments. Practical steps include asking a trusted person to temporarily hold onto certain items, securing medications in a locked box or giving them to someone else, and identifying a safe place you can go if you need to leave your current environment.",
  },
  {
    question: "What if I do not have anyone to put on my plan?",
    answer: "If you are struggling to think of people to add to Steps 3 and 4, that is okay, and it is more common than you might think. Start with the crisis resources that are already pre-filled in Step 5: the 988 Suicide and Crisis Lifeline (call or text 988), Crisis Text Line (text HOME to 741741), and the SAMHSA helpline (1-800-662-4357). These services connect you with trained counselors who genuinely want to help. You can also consider adding a faith leader, a coworker, a neighbor, a doctor's office, a local crisis center, or a peer support warmline. Even one name on your plan is valuable.",
  },
];

export default function SafetyPlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "Safety Plan",
              description: "A free safety planning tool based on the Stanley-Brown Safety Planning Intervention. Create a personalized 6-step crisis safety plan: warning signs, internal coping strategies, people for distraction, people to ask for help, professional and crisis contacts (988 Lifeline, Crisis Text Line, Veterans Crisis Line), and making your environment safer. Uses browser-local storage when available and provides printable output.",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-08-30",
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
              { name: "Safety Plan", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100">
          Safety Plan
        </h1>
      </div>
      <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 30, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guided safety planning tool based on the Stanley-Brown Safety Plan that creates a personalized crisis response strategy."
          who="Anyone who experiences suicidal thoughts or emotional crises and wants a structured plan for staying safe."
          bottomLine="A safety plan can organize practical crisis steps. Complete it when you are calm, review it with a qualified professional when possible, and keep a printed copy accessible. This standalone tool is not crisis care or a substitute for treatment."
          lastUpdated="2026-08-30"
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

      <LocalStorageNotice dataDescription="your safety-plan entries" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <ToolReviewerBio lastReviewed="August 2, 2026" />
      </div>
      <SafetyPlanClient faqData={FAQ_DATA} />
    </>
  );
}

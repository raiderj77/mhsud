import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { SafetyPlanClient } from "./SafetyPlanClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/safety-plan`;

export const metadata: Metadata = createMetadata({
  path: "/safety-plan",
  title: "Safety Plan | Free Crisis Safety Planning Tool",
  description:
    "Create a personal safety plan based on the Stanley-Brown model. 6-step crisis planning tool with printable output. Free, private, and always available. Call 988 if in crisis.",
  keywords: [
    "safety plan", "safety plan template", "suicide safety plan",
    "Stanley-Brown safety plan", "crisis safety plan",
    "safety planning intervention", "suicide prevention plan",
    "crisis plan template", "safety plan worksheet",
    "988 crisis lifeline", "mental health safety plan",
  ],
  openGraph: {
    title: "Safety Plan | Free Crisis Safety Planning Tool",
    description: "Create a personal 6-step safety plan based on the Stanley-Brown model. Free, private, printable, and always available. If you are in crisis, call or text 988.",
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
    answer: "No, and this is an important distinction. A no-suicide contract (or 'safety contract') is a verbal or written agreement in which a person promises not to harm themselves. Research has shown that no-suicide contracts are NOT effective at preventing suicide and may actually be harmful because they create a false sense of security. A safety plan is fundamentally different — it is a set of concrete, actionable steps that a person can take during a crisis. Multiple studies, including a 2012 study by Stanley and Brown in the American Journal of Preventive Medicine, have shown that safety plans ARE effective at reducing suicidal behavior.",
  },
  {
    question: "Should I create a safety plan with a therapist?",
    answer: "Ideally, yes. While this tool allows you to create a safety plan on your own, the gold standard is to develop one in collaboration with a mental health professional who knows your situation. A therapist can help you identify warning signs you might not recognize, suggest coping strategies tailored to you, and ensure your plan is as strong as possible. If you already have a therapist, bring your plan to your next session for review. If you do not have a therapist, creating a plan on your own is still far better than having no plan at all.",
  },
  {
    question: "How often should I update my safety plan?",
    answer: "You should review and update your safety plan regularly — at minimum, every few months or whenever something significant changes in your life. Update it when your support network changes (new therapist, new friends, someone moves away), when you discover new coping strategies that work for you, after a crisis (what worked? what did not?), or when your warning signs shift. Many therapists review the safety plan at the beginning of each session. Think of it as a living document, not a one-time exercise.",
  },
  {
    question: "What does 'making my environment safer' mean?",
    answer: "Step 6 of the safety plan focuses on reducing access to things that could be used for self-harm during a crisis. Research from Harvard's Means Matter project shows that this is one of the single most effective suicide prevention strategies. It does not mean you are 'dangerous' — it means you are being smart about protecting yourself during your most vulnerable moments. Practical steps include asking a trusted person to temporarily hold onto certain items, securing medications in a locked box or giving them to someone else, and identifying a safe place you can go if you need to leave your current environment.",
  },
  {
    question: "What if I do not have anyone to put on my plan?",
    answer: "If you are struggling to think of people to add to Steps 3 and 4, that is okay — and it is more common than you might think. Start with the crisis resources that are already pre-filled in Step 5: the 988 Suicide and Crisis Lifeline (call or text 988), Crisis Text Line (text HOME to 741741), and the SAMHSA helpline (1-800-662-4357). These services connect you with trained counselors who genuinely want to help. You can also consider adding a faith leader, a coworker, a neighbor, a doctor's office, a local crisis center, or a peer support warmline. Even one name on your plan is valuable.",
  },
];

export default function SafetyPlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Safety Plan",
              description: "A free safety planning tool based on the Stanley-Brown Safety Planning Intervention. Create a personalized 6-step crisis safety plan: warning signs, internal coping strategies, people for distraction, people to ask for help, professional and crisis contacts (988 Lifeline, Crisis Text Line, Veterans Crisis Line), and making your environment safer. Printable output. Auto-saves in browser.",
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
              { name: "Safety Plan", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guided safety planning tool based on the Stanley-Brown Safety Plan that creates a personalized crisis response strategy."
          who="Anyone who experiences suicidal thoughts or emotional crises and wants a structured plan for staying safe."
          bottomLine="A safety plan can be life-saving — complete it when you are calm and keep it accessible. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>

      <section className="sr-only">
        <h2>What Is a Safety Plan?</h2>
        <h2>How Does the Safety Plan Tool Work?</h2>
        <h2>When Should You Create a Safety Plan?</h2>
      </section>
<SafetyPlanClient faqData={FAQ_DATA} />
    </>
  );
}

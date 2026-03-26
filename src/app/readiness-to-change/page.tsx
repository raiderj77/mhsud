import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ReadinessClient } from "./ReadinessClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/readiness-to-change`;

export const metadata: Metadata = createMetadata({
  path: "/readiness-to-change",
  title: "Readiness to Change Assessment | Stages of Change",
  description:
    "Find out which Stage of Change you are in. Free assessment based on the Transtheoretical Model by Prochaska & DiClemente. Private, instant results, stage-specific guidance.",
  keywords: [
    "stages of change assessment", "readiness to change quiz",
    "am I ready to quit", "stages of change model",
    "transtheoretical model", "prochaska stages of change",
    "readiness to change assessment", "motivation to change",
    "precontemplation contemplation preparation action maintenance",
    "stages of change addiction", "readiness ruler",
    "behavior change assessment", "change readiness tool",
  ],
  openGraph: {
    title: "Readiness to Change Assessment | Stages of Change",
    description: "Identify your Stage of Change using a free assessment based on Prochaska & DiClemente's model. Instant results with stage-specific next steps.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the Stages of Change model?", answer: "The Stages of Change model, also called the Transtheoretical Model (TTM), was developed by psychologists James Prochaska, PhD, and Carlo DiClemente, PhD, in the late 1970s and early 1980s. It describes behavior change as a process that unfolds over time through five stages: Precontemplation, Contemplation, Preparation, Action, and Maintenance. The model is one of the most widely used frameworks in addiction counseling, behavioral health, and public health. It recognizes that people are at different levels of readiness to change, and that the most effective support is tailored to where a person currently is — not where others think they should be." },
  { question: "What do the five stages mean?", answer: "Precontemplation means you are not currently considering change — you may not see your substance use as a problem, or you may feel that the costs of changing outweigh the benefits. Contemplation means you are aware that a problem may exist and are weighing the pros and cons of change, but have not committed to action. Preparation means you have decided to change and are getting ready — perhaps setting a date, gathering resources, or making small initial steps. Action means you are actively modifying your behavior, environment, or habits. Maintenance means you have sustained your changes for six months or more and are focused on preventing relapse. People often move through these stages multiple times before lasting change takes hold." },
  { question: "Is this a validated clinical instrument?", answer: "No. This is an original educational tool inspired by the Transtheoretical Model. It is designed to help you reflect on where you might be in the change process. Validated clinical instruments for assessing stages of change include the URICA (University of Rhode Island Change Assessment) and the Readiness to Change Questionnaire. This tool is not a substitute for clinical assessment. If you want a formal evaluation of your readiness to change, a counselor or therapist trained in motivational interviewing can help." },
  { question: "Can I be in more than one stage at the same time?", answer: "In practice, yes. The stages are not rigid boxes — they are points along a continuum. You might strongly identify with Contemplation (thinking about change) while also showing some Preparation behaviors (looking into resources). This tool shows your scores across all five stages so you can see where your responses cluster. Your primary stage is the one with the highest score, but the full picture of your scores across stages can be informative. Many people find they resonate with elements of two adjacent stages." },
  { question: "What if I have been through these stages before and relapsed?", answer: "This is completely normal. Prochaska and DiClemente's research found that most people cycle through the stages multiple times before achieving lasting change. Relapse is not failure — it is a common part of the change process. The spiral model of change suggests that each time you move through the stages, you learn something new that makes your next attempt stronger. If you have relapsed, you have not gone back to zero. You carry the skills, self-knowledge, and experience from your previous attempts. The question is not whether you will face setbacks, but how you respond to them." },
  { question: "How can I use my results from this assessment?", answer: "Your results can help you understand where you are right now — without judgment — and identify what kind of support might be most helpful at this point. If you are in Precontemplation, the most useful step might be simply gathering information. If you are in Contemplation, exploring the pros and cons of change with a counselor can help. If you are in Preparation, building a concrete plan (like a relapse prevention plan) is the priority. If you are in Action or Maintenance, tools that support daily coping and accountability are most valuable. Share your results with a counselor or therapist if you have one — it gives them useful context for how to support you." },
];

export default function ReadinessToChangePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Readiness to Change Assessment",
              description: "A free educational assessment based on the Transtheoretical Model (Stages of Change) by Prochaska & DiClemente. 15 statements help identify your current stage of change: Precontemplation, Contemplation, Preparation, Action, or Maintenance. Includes stage-specific guidance and resources.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
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
              { name: "Readiness to Change", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A readiness to change assessment based on the Stages of Change model that identifies where you are in the change process."
          who="Anyone considering a behavioral change who wants to understand their current stage of motivation and readiness."
          bottomLine="Knowing your stage of change helps you choose the right strategies — there is no wrong place to start. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>

      <section className="sr-only">
        <h2>What Is the Readiness to Change Assessment?</h2>
        <h2>How Is the Readiness to Change Assessment Scored?</h2>
        <h2>What Do My Readiness to Change Results Mean?</h2>
      </section>
<ReadinessClient faqData={FAQ_DATA} />
    </>
  );
}

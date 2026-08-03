import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/grief-assessment`;

export const metadata: Metadata = createMetadata({
  path: "/grief-assessment",
  title: "Grief and Depression Self-Screen | PHQ-9 Mood Check",
  description:
    "Use the PHQ-9 to reflect on depression symptoms during grief. This private self-screen does not assess or diagnose prolonged grief disorder.",
  keywords: [
    "grief and depression self-screen", "PHQ-9 after a loss", "grief and mood check",
    "depression symptoms during grief", "bereavement mental health", "grief support",
  ],
  openGraph: {
    title: "Grief and Depression Self-Screen | PHQ-9 Mood Check",
    description:
      "Use the PHQ-9 to reflect on depression symptoms during grief. It does not assess prolonged grief disorder.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the difference between normal grief and complicated grief?",
    answer:
      "Grief is a natural response to loss and does not follow one universal timeline. Prolonged grief disorder is a separate clinical condition involving persistent, intense grief plus substantial disruption in daily functioning. For diagnosis, the death must have occurred at least 12 months earlier for adults or 6 months earlier for children and adolescents, and a clinician must consider cultural and personal context. This PHQ-9 self-screen does not assess prolonged grief disorder.",
  },
  {
    question: "How do I know if my grief is 'normal'?",
    answer:
      "There is no single timeline for grief, and this page cannot label grief as normal or disordered. If grief remains intensely distressing, persistently disrupts daily functioning, or leaves you feeling unsafe, talk with a licensed clinician who can consider the full situation and your cultural and personal context.",
  },
  {
    question: "Can grief cause depression?",
    answer:
      "Grief and depression can share symptoms such as sadness, sleep changes, appetite changes, difficulty concentrating, and loss of interest, but they are not the same condition. The PHQ-9 on this page screens for depression symptoms that may occur during grief. It cannot determine their cause or assess prolonged grief disorder.",
  },
  {
    question: "Can this PHQ-9 result show prolonged grief disorder?",
    answer:
      "No. The PHQ-9 measures depression symptoms over the past two weeks. Prolonged grief disorder is distinct from depression and requires a grief-specific clinical evaluation. A PHQ-9 result may help you discuss mood symptoms with a clinician, but it cannot confirm or rule out prolonged grief disorder.",
  },
  {
    question: "Can grief affect physical health?",
    answer:
      "Grief can affect sleep, appetite, energy, concentration, and daily routines. New, severe, or persistent physical symptoms deserve medical evaluation rather than being assumed to be caused by grief.",
  },
];

export default function GriefAssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "Grief and Depression Self-Screen | PHQ-9 Mood Check",
              description:
                "A private PHQ-9 depression self-screen for people who are grieving. It does not assess prolonged grief disorder.",
              url: TOOL_URL,
              datePublished: "2026-03-08",
              dateModified: "2026-08-02",
            }),
    }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "PHQ-9 Depression Test", url: `${SITE_URL}/phq-9-depression-test` },
              { name: "Grief Assessment", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Published Depression Screener (PHQ-9)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-900/40 dark:text-slate-300">
            Loss &amp; Bereavement
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            🔒 Answers Stay Local
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Grief and Mood Check
        </h1>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Grief is not something you get over. It&apos;s something you carry, and over time,
            for most people, it becomes lighter. But sometimes grief doesn&apos;t ease. It
            stays as raw and consuming as the day it began, or it quietly hollows out your
            life until you realize you&apos;ve stopped living it.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            This page uses the PHQ-9 to screen for depression symptoms that can occur while
            grieving. The PHQ-9 does not measure grief and cannot tell you whether you have
            prolonged grief disorder. It can help you notice depression symptoms worth
            discussing with a qualified healthcare professional.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Your answers are scored entirely in your browser and are not sent to MindCheck Tools.
          </p>
        </div>

        {/* The Tool */}
        <a href="#screening" className="btn-primary inline-flex mb-6">
          Start the PHQ-9 mood self-screen
        </a>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 2, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A PHQ-9 depression self-screen presented with grief-specific context. It does not measure grief or prolonged grief disorder."
          who="Adults who are grieving and want to reflect on depression symptoms over the past two weeks."
          bottomLine="A PHQ-9 result can support a conversation about mood, but only a qualified clinician can evaluate depression or prolonged grief disorder."
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

<div id="screening"><PHQ9Client faqData={FAQ_DATA} /></div>

        {/* Grief Warning Signs */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            When to Seek a Grief-Specific Evaluation
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Intense longing that hasn't eased after many months",
              "Difficulty accepting that the person is gone",
              "Feeling that life is meaningless without them",
              "Bitterness or anger that doesn't diminish",
              "Avoiding reminders to the point of isolation",
              "Inability to trust others since the loss",
              "Feeling emotionally numb or detached from life",
              "Difficulty engaging in normal activities or relationships",
              "Feeling that a part of yourself died with them",
              "Thoughts that you cannot or should not move forward",
            ].map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-4 py-3"
              >
                <span className="text-slate-500 dark:text-slate-400 mt-0.5 shrink-0">•</span>
                <span className="text-sm text-slate-700 dark:text-slate-300">{sign}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 italic">
            These experiences are reasons to seek support, not a diagnostic checklist. The{" "}
            <a href="https://www.psychiatry.org/patients-families/prolonged-grief-disorder" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              American Psychiatric Association
            </a>{" "}
            explains that prolonged grief disorder requires persistent symptoms, impaired
            functioning, timing criteria, and clinical evaluation. The PHQ-9 below cannot
            make that distinction. The{" "}
            <a href="https://newsinhealth.nih.gov/2026/07/navigating-grief" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              NIH grief guide
            </a>{" "}
            offers current support guidance.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQ_DATA.map((item) => (
              <div
                key={item.question}
                className="border border-slate-200 dark:border-slate-700 rounded-xl p-5"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Crisis &amp; Support Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
              <strong>988</strong>, if grief has brought thoughts of suicide
            </li>
            <li>
              <strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong>
            </li>
            <li>
              <strong>GriefShare:</strong>{" "}
              <strong>griefshare.org</strong>, grief support groups nationwide
            </li>
            <li>
              <strong>American Psychiatric Association:</strong>{" "}
              <a href="https://www.psychiatry.org/patients-families/prolonged-grief-disorder" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
                prolonged grief disorder information
              </a>
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This assessment is for educational purposes only, it is not a diagnosis. Only a
            licensed healthcare professional can diagnose complicated grief or related conditions.
            Your responses are processed entirely in your browser and are never stored or transmitted.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Compiled by Jason Ramirez, CADC-II. Clinical content drawn from NIMH, PubMed, and WHO. For evaluation, consult a licensed mental health professional.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
             Last reviewed: August 2, 2026
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
          <Link href="/phq-4-anxiety-depression-screen" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-4 Quick Screen →
          </Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
          <Link href="/sleep-and-mood-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Sleep &amp; Mood Check →
          </Link>
          <Link href="/safety-plan" className="text-sky-600 dark:text-sky-400 hover:underline">
            Safety Plan Builder →
          </Link>
        </div>
      </div>
    </>
  );
}

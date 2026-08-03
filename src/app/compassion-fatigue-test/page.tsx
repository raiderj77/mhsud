import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/compassion-fatigue-test`;

export const metadata: Metadata = createMetadata({
  path: "/compassion-fatigue-test",
  title: "Compassion Fatigue Self-Check | Educational Check-In",
  description:
    "Original educational check-in for helpers and caregivers reflecting on current role-related strain. Private in-browser scoring and no signup.",
  keywords: [
    "compassion fatigue test", "compassion fatigue quiz", "compassion fatigue assessment",
    "compassion fatigue screening", "compassion fatigue self test", "do i have compassion fatigue",
    "compassion fatigue nurses", "compassion fatigue therapists", "compassion fatigue social workers",
    "compassion fatigue first responders", "secondary traumatic stress test",
    "vicarious trauma test", "helper burnout test", "caregiver compassion fatigue",
    "compassion fatigue symptoms quiz", "free compassion fatigue test",
    "compassion satisfaction test", "compassion fatigue scale online",
    "compassion fatigue healthcare workers", "burnout vs compassion fatigue",
  ],
  openGraph: {
    title: "Compassion Fatigue Self-Check | Educational Check-In",
    description:
      "Use an original educational check-in about energy, recovery, connection, patience, confidence, and meaning. This page does not administer ProQOL.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is compassion fatigue?",
    answer:
      "Compassion fatigue is a term used for stress reactions that some people report after repeated exposure to the suffering or trauma of people they support. Experiences may include emotional depletion, detachment, reduced empathy, intrusive thoughts, or a diminished sense of purpose. These experiences overlap with burnout, secondary traumatic stress, depression, anxiety, grief, and sleep problems, so a self-check cannot determine the cause.",
  },
  {
    question: "What's the difference between compassion fatigue and burnout?",
    answer:
      "The concepts overlap. Burnout is generally associated with chronic workplace demands and limited recovery, while compassion fatigue is used in helping settings to emphasize the impact of repeated exposure to others' distress. A person may identify with both descriptions, and an online check-in cannot reliably distinguish between them or rule out another concern.",
  },
  {
    question: "Who is most at risk for compassion fatigue?",
    answer:
      "People in helping roles may report compassion-fatigue experiences, including healthcare workers, therapists, social workers, first responders, hospice workers, child-welfare staff, and family caregivers. Workload, repeated exposure to distressing material, limited supervision, limited recovery time, and personal circumstances may influence an individual's experience.",
  },
  {
    question: "What does this educational check-in cover?",
    answer:
      "This page uses the same original 15-item MindCheck Tools check-in as the general burnout page. It asks about energy and recovery, connection and patience, and confidence and meaning. It does not administer the Professional Quality of Life Scale (ProQOL) or another validated compassion-fatigue instrument. Its score bands are site-defined educational ranges, not clinical cutoffs.",
  },
  {
    question: "What can I do about compassion fatigue?",
    answer:
      "Options to consider include regular supervision or peer consultation, clearer role boundaries, recovery time after difficult cases, reducing workload where possible, and asking an employer or care team for additional support. A qualified mental health professional can help evaluate persistent distress and discuss options suited to your situation.",
  },
];

export default function CompassionFatigueTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "Compassion Fatigue Educational Self-Check",
              description:
                "An original educational check-in for helpers and caregivers. Its site-defined score bands are not validated clinical cutoffs and cannot identify compassion fatigue.",
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
              { name: "Burnout Educational Check-In", url: `${SITE_URL}/burnout-assessment-tool` },
              { name: "Compassion Fatigue Self-Check", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Original Educational Check-In
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
            Helpers &amp; Caregivers
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            🔒 Answers Stay Local
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Compassion Fatigue Self-Check
        </h1>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You chose this work because you care. But somewhere along the way, the caring
            started to cost more than it used to. Maybe you find yourself going through the
            motions. Maybe the stories that used to move you now feel like weight. Maybe
            you&apos;re tired in a way that a weekend off doesn&apos;t fix.
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Compassion fatigue is a term used for strain that can arise in helping roles
            involving repeated exposure to other people&apos;s pain or trauma. Experiences vary,
            and similar symptoms can have many causes.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            This page uses MindCheck Tools&apos; original general burnout check-in. It is not tailored
            or validated specifically for compassion fatigue, does not administer ProQOL, and cannot
            diagnose a condition. Your answers are scored entirely in your browser and are not sent to MindCheck Tools.
          </p>
        </div>

        {/* The Tool */}
        <a href="#screening" className="btn-primary inline-flex mb-6">
          Start the compassion fatigue check
        </a>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: August 2, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="An original educational check-in about energy and recovery, connection and patience, and confidence and meaning. It is not a compassion-fatigue clinical instrument."
          who="Helping professionals, caregivers, and anyone in a caring role who feels emotionally drained by others' suffering."
          bottomLine="The questions and score bands are site-defined and have not been clinically validated. They cannot identify compassion fatigue, secondary trauma, burnout, or another condition."
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

<div id="screening"><BurnoutClient faqData={FAQ_DATA} embedded /></div>

        {/* Compassion Fatigue vs Burnout Table */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Compassion Fatigue vs. Burnout
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            These are broad educational distinctions, not diagnostic rules. The experiences can overlap, and a qualified professional can evaluate persistent or concerning symptoms.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tl-lg">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Compassion Fatigue</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tr-lg">Burnout</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Common context</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Repeated exposure to other people&apos;s distress or trauma</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Ongoing workplace demands with limited recovery</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Onset</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">May appear after repeated or intense exposure</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Often described as building over time</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Possible experiences</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Reduced empathy, emotional depletion, intrusive thoughts</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Exhaustion, detachment, reduced work effectiveness</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Who is affected</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Helpers, caregivers, trauma workers</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Anyone in a demanding job</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">Support to consider</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Supervision, peer support, boundaries, professional evaluation</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Recovery time, workload review, workplace support, professional evaluation</td>
                </tr>
              </tbody>
            </table>
          </div>
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
            Crisis Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
              <strong>988</strong>, free, 24/7, confidential
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong>{" "}
              <strong>1-800-662-4357</strong>, free referrals, 24/7
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This check-in is for educational purposes only and is not a diagnosis. Its original
            questions and site-defined score bands have not been clinically validated. A qualified
            healthcare professional can evaluate compassion-fatigue experiences or related concerns.
            Your responses are processed entirely in your browser and are never stored or transmitted.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by Jason Ramirez, CADC-II. The questions and score ranges are original, site-defined educational content, not a validated clinical assessment.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: August 2, 2026
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/burnout-assessment-tool" className="text-sky-600 dark:text-sky-400 hover:underline">
            General Burnout Check-In →
          </Link>
          <Link href="/caregiver-burnout-assessment" className="text-sky-600 dark:text-sky-400 hover:underline">
            Caregiver Burnout Self-Check →
          </Link>
          <Link href="/work-stress-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Work Stress Check →
          </Link>
          <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="text-sky-600 dark:text-sky-400 hover:underline">
            Talk to Your Doctor →
          </Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
        </div>
      </div>
    </>
  );
}

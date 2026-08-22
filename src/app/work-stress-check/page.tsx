import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, medicalWebPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { WorkStressClient } from "./WorkStressClient";
import AnswerBlock from "@/components/AnswerBlock";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

const TOOL_URL = `${SITE_URL}/work-stress-check`;

export const metadata: Metadata = createMetadata({
  path: "/work-stress-check",
  title: "Work Stress Reflection | Original Educational Check",
  description:
    "Reflect on work stress with this original 12-question, browser-local self-check. About 3 minutes. Not a clinical tool; for personal reflection only.",
  keywords: [
    "work stress test", "burnout self-check", "job burnout questionnaire",
    "work stress assessment", "burnout risk check", "workplace stress test",
    "am i burned out", "burnout screening", "work exhaustion test",
    "occupational stress check", "work-life balance assessment",
    "work stress symptoms", "burnout reflection tool",
  ],
});

const FAQ_DATA = [
  {
    question: "Is this a substitute for professional mental health care?",
    answer:
      "No. This is an original self-reflection tool for personal use, not a clinical instrument. Your responses do not constitute a diagnosis of burnout or any mental health condition. If work stress is affecting your sleep, physical health, or relationships, please speak with a licensed therapist, counselor, or your primary care provider. If you are in crisis, call or text 988, or text HOME to 741741.",
  },
  {
    question: "Is this a clinical burnout assessment?",
    answer:
      "No. This is an original self-reflection tool written from scratch. It is not based on any proprietary or copyrighted scale. It is designed to help you reflect on work stress patterns, not to diagnose burnout or any clinical condition.",
  },
  {
    question: "What's the difference between work stress and clinical burnout?",
    answer:
      "Work stress can involve harmful physical or emotional responses when job demands do not match a worker's capabilities, resources, or needs. WHO describes burnout as an occupational phenomenon, not a medical condition. This original tool can help you notice patterns, but it cannot determine whether you have burnout or another condition.",
  },
  {
    question: "Is my data stored?",
    answer:
      "Answers and results are processed locally and are not intentionally sent to MindCheck Tools. Ordinary page requests can create hosting records, and copies, sync, backups, or shared-device access are outside this boundary.",
  },
  {
    question: "What should I do if my results suggest high stress?",
    answer:
      "Consider talking with a healthcare provider, therapist, or counselor - especially if stress is affecting your sleep, health, or relationships. Workplace stress is also worth discussing with a trusted manager or HR department when appropriate.",
  },
  {
    question: "Can I show these results to my therapist?",
    answer:
      "Yes. While this is not a clinical tool, your responses can help start a conversation about how work is affecting your well-being.",
  },
  {
    question: "How often should I take this?",
    answer:
      "Every few weeks can help you notice trends. Work stress fluctuates, so periodic check-ins give a better picture than a single snapshot.",
  },
];

export default function WorkStressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      ...toolPageJsonLd({ name: "Work Stress Reflection", description: "Original 12-question work stress reflection tool. Private, free, not a diagnosis.", url: TOOL_URL, datePublished: "2025-02-01", dateModified: "2026-08-22" }),
    }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      ...medicalWebPageJsonLd({ name: "Work Stress Reflection", description: "A free original 12-question self-reflection tool covering site-defined areas of workplace demands, control, support, engagement, recovery, and impact. For personal reflection only.", url: TOOL_URL, lastReviewed: "2026-08-02" }),
    }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Work Stress & Burnout Self-Check", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-warm-100 text-warm-800 dark:bg-warm-900/40 dark:text-warm-300">Original 12-Question Tool</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">Working Professionals</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">Answers Stay Local</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Work Stress &amp; Burnout Self-Check
        </h1>

        <div className="mb-6 space-y-4 text-slate-600 dark:text-slate-300">
          <p className="text-lg">
            Work stress can develop gradually, and people may notice changes in energy, sleep, concentration, relationships, or their sense of control at different times. These experiences have many possible causes, so an online reflection cannot determine whether they amount to burnout or another health concern.
          </p>
          <p>
            This original 12-question check groups prompts into six site-defined areas: demands, control, support, engagement, recovery, and impact. These groupings and the 0–36 total are educational reflection aids, not validated domains, severity bands, or clinical cutoffs. It takes about 3 minutes; answers and results are processed locally and are not intentionally sent to MindCheck Tools.
          </p>
          <p>
            This is a reflection tool, not a clinical assessment. If your results raise concerns, the most useful next step is a conversation with a therapist, counselor, or your primary care provider - not more self-diagnosis.
          </p>
        </div>

        <a href="#screening" className="btn-primary inline-flex mb-8">
          Start the 3-minute check
        </a>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          What Does Workplace Burnout Actually Look Like?
        </h2>
        <div className="mb-6 space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            The{" "}
            <a href="https://www.who.int/standards/classifications/frequently-asked-questions/burn-out-an-occupational-phenomenon" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              WHO describes burnout
            </a>{" "}
            as an occupational phenomenon (not a medical diagnosis) defined by three dimensions: feelings of energy depletion or exhaustion, increased mental distance from your job, and reduced professional efficacy. In plain terms: you are drained, you have mentally checked out, and you feel like you are not doing your job well even when you are working harder than ever.
          </p>
          <p>
            Work-related mental-health risks can include excessive workloads, limited job control, long or inflexible hours, limited support, and conflicting home and work demands, according to the{" "}
            <a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              World Health Organization
            </a>
            . The{" "}
            <a href="https://www.cdc.gov/niosh/stress/about/index.html" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              CDC notes
            </a>{" "}
            that job stress can lead to poor health and injury and studies how work organization relates to stress, illness, and injury.
          </p>
          <p>
            This page does not claim that its six areas predict burnout. They are a practical way to review several workplace and recovery experiences described in WHO and NIOSH guidance, while keeping the result non-diagnostic.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">12</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">original reflection prompts</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">6</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">site-defined areas for reflection</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">3 min</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">to complete, results are instant</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          The Six Dimensions This Check Covers
        </h2>
        <div className="mb-8 space-y-3 text-slate-600 dark:text-slate-300">
          <p>This original check organizes its prompts into six site-defined areas. They are not a validated model and do not predict burnout risk:</p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-2">
            <li><strong>Demands</strong> - workload, time pressure, the gap between what is expected and what is humanly possible</li>
            <li><strong>Control</strong> - your ability to influence how and when your work gets done</li>
            <li><strong>Support</strong> - feedback, recognition, and backup from managers and coworkers</li>
            <li><strong>Engagement</strong> - connection to the meaning and purpose of your work</li>
            <li><strong>Recovery</strong> - your ability to mentally detach from work during non-work hours</li>
            <li><strong>Impact</strong> - whether work stress is spilling into your physical health and personal life</li>
          </ul>
          <p>
            The breakdown shows where you selected more frequent responses. It is not a clinical profile. You can use individual prompts to organize a conversation with a healthcare professional, employee assistance program, or workplace support when appropriate.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-8">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-2">What To Expect</h2>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
            <li>12 questions, rated on a 4-point frequency scale</li>
            <li>Results broken into the six domains above</li>
            <li>A summary with context and suggested next steps</li>
            <li>No account or email required; answers and results use local processing</li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
          Content updated: August 22, 2026
        </p>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
          <AnswerBlock
            what="An original 12-prompt educational reflection covering six site-defined areas. It is not a validated workplace stress or burnout instrument."
            who="Adults who want to organize observations about work demands, control, support, engagement, recovery, and impact."
            bottomLine="The 0–36 total has no validated severity bands or clinical cutoff. Review the individual prompts; seek qualified support for persistent distress, health effects, or safety concerns."
            lastUpdated="2026-08-22"
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
        Content updated:{" "}
        <time dateTime="2026-08-22">
          {new Date("2026-08-22T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
        </div>

        <ToolReviewerBio lastReviewed="August 2, 2026" />

        <div id="screening"><WorkStressClient faqData={FAQ_DATA} /></div>

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

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Support Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong></li>
            <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li>
              <strong>SAMHSA National Helpline:</strong>{" "}
              <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
                1-800-662-4357
              </a>{" "}
              - free, confidential, 24/7
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Compiled by Jason Ramirez, CADC-II. Clinical content drawn from WHO, CDC NIOSH, NIMH, and PubMed. This is a self-reflection tool, not a clinical assessment.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Content updated August 22, 2026. Reviewer scope and date are shown above.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/" className="text-sky-600 dark:text-sky-400 hover:underline">MindCheck Tools Home &rarr;</Link>
          <Link href="/burnout-assessment-tool" className="text-sky-600 dark:text-sky-400 hover:underline">Burnout Assessment Tool &rarr;</Link>
          <Link href="/compassion-fatigue-test" className="text-sky-600 dark:text-sky-400 hover:underline">Compassion Fatigue Test &rarr;</Link>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, medicalWebPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { WorkStressClient } from "./WorkStressClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/work-stress-check`;

export const metadata: Metadata = createMetadata({
  path: "/work-stress-check",
  title: "Work Stress & Burnout Self-Check | Free & Private",
  description:
    "Reflect on your work stress and burnout risk with this original 12-question self-check. 100% private, ~3 minutes. Not a clinical tool - for personal reflection only.",
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
      "Work stress is a normal response to workplace demands. Clinical burnout is a state of chronic physical and emotional exhaustion, often accompanied by cynicism and reduced professional efficacy. The distinction typically requires professional assessment. This tool can help you notice patterns, but cannot determine where stress ends and burnout begins.",
  },
  {
    question: "Is my data stored?",
    answer:
      "No. All scoring happens in your browser. Your answers are never sent to any server or stored anywhere.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Work Stress & Burnout Self-Check", description: "Original 12-question work stress reflection tool. Private, free, not a diagnosis.", url: TOOL_URL, datePublished: "2025-02-01", dateModified: "2026-05-14" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageJsonLd({ name: "Work Stress & Burnout Self-Check", description: "A free 12-question self-reflection tool covering workplace demands, control, support, engagement, recovery, and physical impact. For personal reflection only.", url: TOOL_URL, lastReviewed: "2026-05-14" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Work Stress & Burnout Self-Check", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-warm-100 text-warm-800 dark:bg-warm-900/40 dark:text-warm-300">Original 12-Question Tool</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">Working Professionals</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">100% Private</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Work Stress &amp; Burnout Self-Check
        </h1>

        <div className="mb-6 space-y-4 text-slate-600 dark:text-slate-300">
          <p className="text-lg">
            Most people who are burning out do not realize it until they are already running on empty. The warning signs are easy to rationalize: the exhaustion is just a tough week, the irritability is just stress, the loss of interest in work that used to matter is just a phase. By the time it is impossible to ignore, months of damage have already been done.
          </p>
          <p>
            This 12-question self-check was designed to help you catch those patterns early. It covers the six domains most consistently linked to workplace burnout: demands, control, support, engagement, recovery, and physical impact. It takes about 3 minutes and your responses never leave your browser.
          </p>
          <p>
            This is a reflection tool, not a clinical assessment. If your results raise concerns, the most useful next step is a conversation with a therapist, counselor, or your primary care provider - not more self-diagnosis.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          What Does Workplace Burnout Actually Look Like?
        </h2>
        <div className="mb-6 space-y-4 text-slate-600 dark:text-slate-300">
          <p>
            The{" "}
            <a href="https://www.who.int/news-room/fact-sheets/detail/mental-health-at-work" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              WHO classifies burnout
            </a>{" "}
            as an occupational phenomenon (not a medical diagnosis) defined by three dimensions: feelings of energy depletion or exhaustion, increased mental distance from your job, and reduced professional efficacy. In plain terms: you are drained, you have mentally checked out, and you feel like you are not doing your job well even when you are working harder than ever.
          </p>
          <p>
            What makes burnout hard to catch is that it builds slowly. A{" "}
            <a href="https://pubmed.ncbi.nlm.nih.gov/31693056/" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              2019 Gallup study of nearly 7,500 full-time workers
            </a>{" "}
            found that 23% reported feeling burned out very often or always, while another 44% reported feeling burned out sometimes. That means roughly two-thirds of workers are experiencing meaningful burnout symptoms at any given time. The{" "}
            <a href="https://www.cdc.gov/niosh/topics/stress/default.html" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              CDC notes
            </a>{" "}
            that workplace stress is linked to cardiovascular disease, musculoskeletal disorders, and compromised immune function.
          </p>
          <p>
            Burnout is not just about working too many hours. People in low-demand jobs can burn out from a chronic lack of control or recognition. People in high-passion roles burn out when the meaning of the work stops compensating for the toll it takes. This check looks at all of these dimensions, not just workload.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">23%</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">of workers report burnout nearly always</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">6</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">domains this check measures</p>
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
          <p>Research on occupational stress consistently points to six areas that predict burnout risk:</p>
          <ul className="list-disc list-inside space-y-2 text-sm ml-2">
            <li><strong>Demands</strong> - workload, time pressure, the gap between what is expected and what is humanly possible</li>
            <li><strong>Control</strong> - your ability to influence how and when your work gets done</li>
            <li><strong>Support</strong> - feedback, recognition, and backup from managers and coworkers</li>
            <li><strong>Engagement</strong> - connection to the meaning and purpose of your work</li>
            <li><strong>Recovery</strong> - your ability to mentally detach from work during non-work hours</li>
            <li><strong>Impact</strong> - whether work stress is spilling into your physical health and personal life</li>
          </ul>
          <p>
            When multiple domains are strained simultaneously, the cumulative effect is what{" "}
            <a href="https://www.nimh.nih.gov/health/topics/stress" target="_blank" rel="noopener noreferrer" className="text-sky-600 dark:text-sky-400 hover:underline">
              researchers and clinicians recognize as burnout risk
            </a>
            . This check helps you see which dimensions are most affected so you can target your attention and conversations.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-8">
          <h2 className="text-base font-semibold text-slate-900 dark:text-white mb-2">What To Expect</h2>
          <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
            <li>12 questions, rated on a 4-point frequency scale</li>
            <li>Results broken into the six domains above</li>
            <li>A summary with context and suggested next steps</li>
            <li>No account, no email, nothing stored or transmitted</li>
          </ul>
        </div>

        <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
          Last updated: May 14, 2026
        </p>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
          <AnswerBlock
            what="A workplace stress assessment that measures job-related stressors, burnout risk, and work-life balance indicators across six domains."
            who="Working professionals who feel their job stress has become unmanageable and want to assess the severity."
            bottomLine="Chronic work stress damages both mental and physical health - your score can guide a conversation with HR or a therapist. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
            lastUpdated="2026-05-14"
          />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
          <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-05-14" />
        </div>

        <section className="sr-only">
          <h2>What Is the Work Stress Check?</h2>
          <h2>How Is the Work Stress Check Scored?</h2>
          <h2>What Do My Work Stress Results Mean?</h2>
        </section>
        <WorkStressClient faqData={FAQ_DATA} />

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
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: May 2026</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/" className="text-sky-600 dark:text-sky-400 hover:underline">MindCheck Tools Home &rarr;</Link>
          <Link href="/burnout-test-for-healthcare-workers" className="text-sky-600 dark:text-sky-400 hover:underline">Burnout Test for Healthcare Workers &rarr;</Link>
          <Link href="/burnout-test-for-teachers" className="text-sky-600 dark:text-sky-400 hover:underline">Burnout Test for Teachers &rarr;</Link>
        </div>
      </div>
    </>
  );
}

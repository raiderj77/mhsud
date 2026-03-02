import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BurnoutClient } from "../burnout-assessment-tool/BurnoutClient";

const TOOL_URL = `${SITE_URL}/burnout-test-for-nurses`;

export const metadata: Metadata = createMetadata({
  path: "/burnout-test-for-nurses",
  title: "Burnout Test for Nurses | Free Self-Assessment",
  description:
    "Free burnout screening designed for nurses. Assess emotional exhaustion, compassion fatigue, and depersonalization. Private, instant results. Not a diagnosis.",
  keywords: [
    "burnout test for nurses", "nurse burnout assessment", "nursing burnout quiz",
    "compassion fatigue test nurses", "nurse burnout screening", "healthcare burnout test",
    "nurse emotional exhaustion", "nursing stress test", "am i burned out nurse",
    "nurse burnout symptoms", "rn burnout test", "travel nurse burnout",
    "nurse burnout self-assessment", "nursing burnout scale", "free nurse burnout test",
    "healthcare worker burnout", "nurse mental health screening",
  ],
  openGraph: {
    title: "Burnout Test for Nurses | Free Self-Assessment",
    description: "Free, private burnout screening for nurses. Assess emotional exhaustion, compassion fatigue, and depersonalization with instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "What is the difference between burnout and compassion fatigue in nursing?",
    answer: "Burnout develops gradually from chronic workplace stress — heavy patient loads, long shifts, and systemic issues. Compassion fatigue (sometimes called secondary traumatic stress) comes specifically from the emotional toll of caring for suffering patients. Nurses often experience both simultaneously. Burnout makes you feel depleted and cynical; compassion fatigue makes you feel emotionally numb to patients' pain.",
  },
  {
    question: "How common is burnout among nurses?",
    answer: "Nursing burnout rates are among the highest of any profession. Studies consistently report that 30–50% of nurses experience significant burnout symptoms at any given time. Following the COVID-19 pandemic, some surveys found burnout rates exceeding 60% among bedside nurses. Burnout is not a personal failing — it is a systemic issue.",
  },
  {
    question: "Can shift work make burnout worse?",
    answer: "Yes. Rotating shifts, 12-hour shifts, and night shifts all disrupt circadian rhythms, reduce sleep quality, and limit time for recovery and social connection. Research shows that nurses working night shifts or extended hours have significantly higher burnout rates. Fatigue compounds the emotional demands of patient care.",
  },
  {
    question: "What should I do if this screening suggests high burnout?",
    answer: "A high score is a signal to take seriously. Consider speaking with a mental health professional, your Employee Assistance Program (EAP), or a trusted colleague. Practical steps include setting firmer boundaries around overtime, prioritizing sleep, and exploring whether your workload is sustainable. Burnout is treatable, and seeking help is a sign of professional strength.",
  },
  {
    question: "Is nurse burnout something my employer should address?",
    answer: "Yes. While individual coping strategies help, research consistently shows that burnout is primarily driven by systemic factors — staffing ratios, workload, leadership support, and organizational culture. Effective burnout reduction requires both individual self-care and institutional change. This screening can help you understand your personal experience, but advocating for better working conditions is equally important.",
  },
];

export default function BurnoutTestForNursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Burnout Test for Nurses — Self-Assessment",
              description: "A free, private burnout screening tool for nurses assessing emotional exhaustion, depersonalization, and reduced personal accomplishment.",
              url: TOOL_URL,
              datePublished: "2026-03-01",
              dateModified: "2026-03-01",
            })
          ),
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
              { name: "Burnout Assessment Tool", url: `${SITE_URL}/burnout-assessment-tool` },
              { name: "Burnout Test for Nurses", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Informed
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300">
            Nurses &amp; Healthcare Workers
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Burnout Test for Nurses
        </h1>

        {/* Intro */}
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
          Nursing is one of the most emotionally demanding professions, and burnout rates among nurses
          have reached critical levels. If you&apos;re a nurse feeling emotionally drained, detached, or
          questioning whether you can keep going, this free screening can help you assess where you are.
          It is <strong>not a diagnosis</strong>, but it can validate what you may already be feeling
          and encourage you to seek support.
        </p>

        {/* Quick Facts Box */}
        <div className="bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-rose-800 dark:text-rose-300 uppercase tracking-wide mb-3">
            Nurse Burnout: Quick Facts
          </h2>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li>• An estimated <strong>30–50%</strong> of nurses experience burnout at any given time</li>
            <li>• Post-pandemic surveys found burnout rates exceeding <strong>60%</strong> among bedside nurses</li>
            <li>• Nurse burnout is linked to <strong>higher patient mortality</strong> and increased medical errors</li>
            <li>• Nearly <strong>1 in 5 nurses</strong> left the profession between 2020 and 2023</li>
          </ul>
        </div>

        {/* Educational Content */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Why This Screening Matters for Nurses
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none mb-6">
          <p>
            Nurses are trained to care for others, often at the expense of their own well-being. The culture
            of nursing sometimes treats exhaustion as a badge of honor, making it harder to recognize when
            chronic stress has crossed into burnout. This screening assesses three core dimensions:
            emotional exhaustion, depersonalization (feeling detached from patients), and reduced personal
            accomplishment.
          </p>
          <p>
            The aftermath of the COVID-19 pandemic amplified existing burnout drivers — staffing shortages,
            mandatory overtime, moral distress from resource limitations, and the cumulative grief of patient
            loss. Whether you are a bedside nurse, travel nurse, nurse practitioner, or nursing student,
            understanding your current burnout level is the first step toward protecting both yourself and
            your patients.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess burnout or related conditions. Your responses are processed
            entirely in your browser and are never stored or transmitted.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            <strong>Reviewed by a Certified Drug and Alcohol Counselor (CADC-II)</strong> with 11 years
            of clinical experience in substance abuse counseling.
          </p>
        </div>

        {/* Additional Resources */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Resources for Nurses
        </h2>
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7
            </li>
            <li>
              <strong>Employee Assistance Program (EAP):</strong> Most hospitals offer free, confidential counseling through your EAP — ask your HR department
            </li>
            <li>
              <strong>Nurse Support Programs:</strong> Many state nursing boards offer peer assistance programs for nurses experiencing burnout or substance use concerns
            </li>
          </ul>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/burnout-assessment-tool" className="text-sky-600 dark:text-sky-400 hover:underline">
            Burnout Assessment Tool →
          </Link>
          <Link href="/work-stress-check" className="text-sky-600 dark:text-sky-400 hover:underline">
            Work Stress Check →
          </Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
        </div>

        {/* Transition to Tool */}
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
          Take the Burnout Assessment
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          The screening below takes about 5 minutes. Answer each question based on how you&apos;ve been
          feeling about your work. Your results are completely private.
        </p>
      </div>

      <BurnoutClient faqData={FAQ_DATA} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AuthorByline } from "@/components/AuthorByline";
import AnswerBlock from "@/components/AnswerBlock";

const PAGE_URL = `${SITE_URL}/audit-vs-audit-c`;

export const metadata: Metadata = createMetadata({
  path: "/audit-vs-audit-c",
  title: "AUDIT vs. AUDIT-C: Which Alcohol Screening Tool Should You Use?",
  description:
    "AUDIT has 10 questions and screens for the full spectrum of alcohol use. AUDIT-C has 3 questions and is a rapid triage tool. Learn the key differences, scoring, and when each is used.",
  keywords: [
    "AUDIT vs AUDIT-C",
    "AUDIT versus AUDIT-C",
    "difference between AUDIT and AUDIT-C",
    "alcohol screening comparison",
    "AUDIT-C vs full AUDIT",
    "which alcohol screening tool",
    "alcohol use disorder screening",
    "AUDIT score",
    "AUDIT-C score",
    "WHO alcohol screening",
  ],
  openGraph: {
    title: "AUDIT vs. AUDIT-C: Which Alcohol Screening Tool Should You Use?",
    description:
      "AUDIT screens for the full spectrum of hazardous, harmful, and dependent drinking. AUDIT-C is a 3-question triage tool. Key differences in scoring and when each is used.",
    url: PAGE_URL,
    type: "article",
  },
});

const FAQ_DATA = [
  {
    question: "What does AUDIT stand for?",
    answer:
      "AUDIT stands for Alcohol Use Disorders Identification Test. It was developed by the World Health Organization (WHO) in 1989 to identify hazardous and harmful alcohol consumption in primary care settings. It has since been translated into over 40 languages and validated across numerous countries and populations. AUDIT-C stands for AUDIT-Consumption, referring to the fact that it includes only the three consumption questions from the full AUDIT.",
  },
  {
    question: "How accurate is the AUDIT-C compared to the full AUDIT?",
    answer:
      "The AUDIT-C performs well as a triage tool. Studies show sensitivity of approximately 86% and specificity of 89% for detecting hazardous drinking at the standard cutoffs (≥4 for men, ≥3 for women). The full AUDIT has somewhat stronger performance for detecting alcohol dependence and harmful drinking patterns that go beyond quantity alone. The AUDIT-C is designed to identify who needs further assessment — not to replace the full AUDIT for comprehensive evaluation.",
  },
  {
    question: "What are the AUDIT-C cutoff scores?",
    answer:
      "The standard AUDIT-C cutoff scores are: ≥4 for men and ≥3 for women. These lower thresholds for women reflect research showing that women experience alcohol-related harm at lower consumption levels. Some clinical guidelines use a cutoff of ≥3 for both sexes, particularly in older adults or medically vulnerable populations. A positive AUDIT-C typically warrants administration of the full AUDIT or a follow-up clinical conversation.",
  },
  {
    question: "What are the full AUDIT score ranges?",
    answer:
      "AUDIT scores range from 0 to 40. Risk levels: 0–7 low risk (Zone I), 8–15 hazardous use (Zone II), 16–19 harmful use (Zone III), 20+ possible alcohol dependence (Zone IV). Zones III and IV warrant more intensive clinical intervention. The WHO's AUDIT Manual provides specific brief intervention strategies matched to each zone.",
  },
  {
    question: "Can the AUDIT or AUDIT-C diagnose alcohol use disorder?",
    answer:
      "No. Neither the AUDIT nor the AUDIT-C is a diagnostic tool. They are screening instruments designed to identify people who may benefit from brief counseling, further assessment, or referral to treatment. A clinical diagnosis of alcohol use disorder requires a full evaluation by a qualified healthcare provider using DSM-5 or ICD-11 criteria. A high score on the AUDIT or AUDIT-C means you should speak with a professional — it does not mean you have been diagnosed.",
  },
  {
    question: "Is the AUDIT valid for all populations?",
    answer:
      "The AUDIT has been validated in numerous countries, cultures, age groups, and clinical settings. However, it was originally developed and validated primarily in adult primary care populations. Separate instruments are often preferred for adolescents (e.g., CRAFFT), pregnancy (specific low-risk thresholds apply), older adults (lower risk thresholds may be appropriate), and people with comorbid substance use disorders (where broader tools like DAST-10 or WHO-ASSIST may be more appropriate).",
  },
  {
    question: "What should I do if I score high on the AUDIT or AUDIT-C?",
    answer:
      "A high score means your drinking pattern may be putting your health at risk and warrants a conversation with a healthcare provider. This does not mean you need inpatient treatment or that you are an 'alcoholic' — these are clinical labels that require professional assessment. Your primary care provider, a Certified Drug and Alcohol Counselor (CADC), or an addiction medicine specialist can help you understand what your results mean in context and discuss options ranging from brief counseling to formal treatment referral. The SAMHSA National Helpline (1-800-662-4357) provides free, confidential referrals 24/7.",
  },
  {
    question: "Where can I find the official AUDIT and AUDIT-C tools?",
    answer:
      "The AUDIT is a WHO instrument available for free at the WHO website and in the WHO AUDIT Manual. The AUDIT-C is in the public domain and available through multiple sources including the U.S. Department of Veterans Affairs (VA) health system, which uses it routinely. The tools on MindCheck Tools are based on the validated instruments with standard WHO/VA scoring applied.",
  },
];

export default function AuditVsAuditCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "AUDIT vs. AUDIT-C: Differences in Scoring, Purpose, and Use",
              description:
                "A comprehensive comparison of the AUDIT (10-question) and AUDIT-C (3-question) alcohol screening tools — what each measures, how they are scored, and when each is used.",
              url: PAGE_URL,
              datePublished: "2026-05-06",
              dateModified: "2026-05-06",
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
              { name: "AUDIT vs. AUDIT-C", url: PAGE_URL },
            ])
          ),
        }}
      />

      <main className="min-h-screen bg-white dark:bg-slate-950">
        {/* Crisis Resources at Top */}
        <div
          role="alert"
          className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-sm leading-relaxed px-4 py-4"
        >
          <div className="max-w-2xl mx-auto">
            <p className="font-semibold mb-2">⚠️ If you are in crisis or need immediate support:</p>
            <ul className="space-y-1 text-sm">
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free, confidential, 24/7</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong> — free, 24/7</li>
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Disclaimer */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Medical Disclaimer:</strong> This content is for informational and educational purposes only. The AUDIT and AUDIT-C are screening tools, not diagnostic instruments. Scores do not constitute a diagnosis of alcohol use disorder. Please consult a qualified healthcare provider regarding any alcohol use concerns.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              WHO-Validated Tools
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
              Evidence-Based
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300">
              Substance Use Screening
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            AUDIT vs. AUDIT-C: Which Alcohol Screening Tool Should You Use?
          </h1>

          {/* Intro */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              Use the{" "}
              <Link href="/audit-c-alcohol-screen" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">AUDIT-C</Link>{" "}
              when you need a rapid 3-question alcohol screen that takes under one minute; use the full 10-question{" "}
              <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">AUDIT</Link>{" "}
              when the AUDIT-C is positive or when time allows a complete assessment. The AUDIT-C is designed for high-volume primary care and intake settings; the full AUDIT identifies harmful drinking patterns with greater precision. This page is for clinicians, patients, or researchers choosing between the two tools. The comparison below explains scoring, cutoffs, and when a positive AUDIT-C should trigger the full screen.
            </p>
          </div>

          <AnswerBlock
            what="A side-by-side comparison of the AUDIT (Alcohol Use Disorders Identification Test, 10 questions) and AUDIT-C (AUDIT-Consumption, 3 questions), covering what each measures, how they are scored, and when each is clinically appropriate."
            who="Anyone who has completed one or both tools and wants to understand the difference, or anyone deciding which tool is appropriate for their situation or healthcare setting."
            bottomLine="The AUDIT-C is a 3-question triage screen that flags who needs further evaluation. The full AUDIT provides a comprehensive picture across consumption, dependence, and harm. A positive AUDIT-C result typically warrants follow-up with the full AUDIT."
            lastUpdated="2026-05-06"
          />

          {/* What is the AUDIT */}
          <section className="mt-10 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is the AUDIT?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The AUDIT (Alcohol Use Disorders Identification Test) is a 10-question self-report screening tool developed by the{" "}
              <a href="https://www.who.int/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">World Health Organization</a>{" "}
              in 1989 to identify hazardous and harmful alcohol use across different cultures and healthcare systems. It remains the most widely used and globally validated alcohol screening instrument, recommended by SAMHSA, the CDC, and the U.S. Preventive Services Task Force.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The 10 items span three domains:
            </p>
            <div className="space-y-3 mb-4">
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Questions 1–3: Alcohol Consumption</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  How often you drink, how many standard drinks on a typical drinking day, and how often you have 6 or more drinks on one occasion.
                </p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Questions 4–6: Alcohol Dependence</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  How often you could not stop drinking once started, failed to do expected activities due to drinking, or needed a drink in the morning.
                </p>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Questions 7–10: Alcohol-Related Harm</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Whether you felt guilt or remorse, whether you could not remember what happened, whether anyone was injured because of your drinking, and whether a relative, friend, doctor, or health worker expressed concern about your drinking.
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Total scores range from 0 to 40. Risk zones: 0–7 low risk, 8–15 hazardous use, 16–19 harmful use, 20+ possible alcohol dependence. The full AUDIT is the only tool in this family that captures dependence signs and harmful consequences — not just consumption volume.
            </p>
          </section>

          {/* What is the AUDIT-C */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is the AUDIT-C?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The AUDIT-C (AUDIT-Consumption) is a 3-item subset of the full AUDIT containing only the three consumption questions: frequency of drinking, typical quantity, and frequency of heavy episodic (binge) drinking. It was developed to provide a faster triage tool for busy clinical settings where administering the full 10-item AUDIT for every patient is impractical.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The AUDIT-C is widely used by the U.S. Department of Veterans Affairs (VA) as part of routine primary care screening and has been validated across large, diverse populations. Its brevity (approximately 1 minute) makes it feasible for high-volume settings.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Scores range from 0 to 12 (3 questions × max 4 points each). The standard positive-screen thresholds are ≥4 for men and ≥3 for women, reflecting the well-established difference in physiological vulnerability to alcohol-related harm between sexes. A positive AUDIT-C result indicates the person should receive further evaluation — typically with the full AUDIT or a clinical interview.
            </p>
          </section>

          {/* Comparison table */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How are the AUDIT and AUDIT-C different?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              The critical difference is breadth of coverage. The AUDIT-C tells you whether someone is drinking at potentially hazardous levels. The full AUDIT additionally tells you whether there are signs of dependence or alcohol-related harm — information that significantly changes clinical decision-making.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">Feature</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-orange-700 dark:text-orange-400">AUDIT</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-amber-700 dark:text-amber-400">AUDIT-C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Number of items</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">10 items</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">3 items</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Score range</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">0–40</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">0–12</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Positive screen threshold</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">≥8 (hazardous use)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">≥4 (men), ≥3 (women)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Measures consumption</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (items 1–3)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (only items)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Measures dependence signs</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (items 4–6)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">No</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Measures alcohol-related harm</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (items 7–10)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">No</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Administration time</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">~3–5 minutes</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">~1 minute</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Best used for</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Comprehensive risk stratification</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Rapid population-level triage</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* When to use each */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">When should you use the AUDIT versus the AUDIT-C?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The choice depends on the clinical context and the depth of information needed:
            </p>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Use the full AUDIT when:</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>You want a comprehensive picture of consumption, dependence, and harm</li>
                  <li>You are seeking a baseline for monitoring over time</li>
                  <li>You have already screened positive on the AUDIT-C</li>
                  <li>You are concerned about possible alcohol dependence (not just heavy drinking)</li>
                  <li>You want to understand what clinical zone your pattern falls into</li>
                </ul>
              </div>
              <div className="border-l-4 border-amber-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Use the AUDIT-C when:</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>You want a quick first-step screen before deciding whether full assessment is needed</li>
                  <li>You are in a high-volume setting (e.g., primary care intake forms)</li>
                  <li>You want to focus purely on consumption patterns</li>
                  <li>You are monitoring changes in drinking quantity over time</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              In clinical practice, the AUDIT-C is often used as a gate: a positive result triggers administration of the full AUDIT (or items 4–10 specifically) to complete the picture. This two-step approach maximizes efficiency without missing important clinical information about dependence or harm.
            </p>
          </section>

          {/* Scoring explained */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What do the AUDIT scores mean in each risk zone?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              The WHO AUDIT Manual provides specific guidance on matching clinical responses to each risk zone. Understanding these zones helps contextualize a score beyond a simple positive/negative result.
            </p>
            <div className="space-y-4 mb-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 dark:text-green-300 mb-1">Zone I: 0–7 — Low Risk</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Alcohol use is within low-risk levels. No intervention indicated beyond health education about standard low-risk drinking limits.
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">Zone II: 8–15 — Hazardous Use</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Hazardous drinking pattern with risk of future harm. Simple brief advice recommended — typically 5–10 minutes with a healthcare provider discussing consequences and limits.
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-1">Zone III: 16–19 — Harmful Use</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Alcohol use is causing harm. Extended brief counseling (brief motivational interviewing) recommended, with possible referral to a specialist.
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h3 className="font-semibold text-red-800 dark:text-red-300 mb-1">Zone IV: 20–40 — Possible Dependence</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Probable alcohol dependence. Referral to specialist alcohol services for diagnostic evaluation and treatment is recommended. Self-managed withdrawal from alcohol can be medically dangerous — always consult a healthcare provider before stopping heavy drinking.
                </p>
              </div>
            </div>
          </section>

          {/* What if scores are high */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What should you do if your AUDIT or AUDIT-C score is high?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              A high score on either tool is important information — and it is actionable. The appropriate next step depends on the severity of the score:
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 mb-4 list-disc list-inside">
              <li><strong>AUDIT-C positive (≥4 men, ≥3 women):</strong> Consider taking the full AUDIT and speaking with a primary care provider about your drinking pattern.</li>
              <li><strong>AUDIT Zone II (8–15):</strong> Brief counseling from your primary care provider or family doctor is typically appropriate.</li>
              <li><strong>AUDIT Zone III (16–19):</strong> Extended brief counseling and possible referral to an addiction specialist, CADC, or counselor.</li>
              <li><strong>AUDIT Zone IV (20+):</strong> Speak with a healthcare provider as soon as possible. Do not stop drinking abruptly without medical supervision — alcohol withdrawal can be medically dangerous.</li>
            </ul>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold">
                Important: Never abruptly stop heavy alcohol use without medical supervision. Alcohol withdrawal can cause seizures, delirium tremens, and other life-threatening complications. Talk to a healthcare provider first.
              </p>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The <a href="https://www.samhsa.gov/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">SAMHSA National Helpline</a> (1-800-662-4357) provides free, confidential referrals to local treatment and support services 24 hours a day, 7 days a week.
            </p>
          </section>

          {/* Citations */}
          <section className="mb-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Sources &amp; Further Reading</h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>Saunders JB, Aasland OG, Babor TF, et al. Development of the Alcohol Use Disorders Identification Test (AUDIT). <em>Addiction.</em> 1993;88(6):791–804.</li>
              <li>Bush K, Kivlahan DR, McDonell MB, et al. The AUDIT alcohol consumption questions (AUDIT-C). <em>Arch Intern Med.</em> 1998;158(16):1789–1795.</li>
              <li><a href="https://www.who.int/publications/i/item/audit-the-alcohol-use-disorders-identification-test" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">WHO AUDIT Manual</a> — World Health Organization. (2001).</li>
              <li><a href="https://www.samhsa.gov/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">SAMHSA.gov</a> — Substance Abuse and Mental Health Services Administration.</li>
              <li><a href="https://www.cdc.gov/alcohol/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">CDC Alcohol and Public Health</a> — Centers for Disease Control and Prevention.</li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mt-12 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQ_DATA.map((item) => (
                <details
                  key={item.question}
                  className="group border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900 dark:text-white group-open:text-sky-600 dark:group-open:text-sky-400">
                    {item.question}
                  </summary>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-3">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-10 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Take the Screening Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  AUDIT — Full Alcohol Use Disorders Identification Test →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 10-question alcohol screening covering consumption, dependence, and harm. Takes about 3–5 minutes.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/audit-c-alcohol-screen" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  AUDIT-C — Rapid Alcohol Consumption Screen →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 3-question rapid screen for hazardous drinking. Takes about 1 minute.
                </p>
              </li>
            </ul>
          </section>

          {/* Author Bio */}
          <div className="my-8">
            <AuthorByline publishedDate="2026-05-06" modifiedDate="2026-05-06" />
          </div>

          {/* Crisis Resources at Bottom */}
          <div
            role="alert"
            className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-900 dark:text-amber-200 text-sm leading-relaxed px-4 py-4 mt-12 mb-8"
          >
            <p className="font-semibold mb-2">⚠️ If you are in crisis or need immediate support:</p>
            <ul className="space-y-1">
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free, confidential, 24/7</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong> — free, 24/7</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

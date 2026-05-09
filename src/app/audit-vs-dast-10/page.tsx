import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AuthorByline } from "@/components/AuthorByline";
import AnswerBlock from "@/components/AnswerBlock";

const PAGE_URL = `${SITE_URL}/audit-vs-dast-10`;

export const metadata: Metadata = createMetadata({
  path: "/audit-vs-dast-10",
  title: "AUDIT vs. DAST-10: Alcohol vs. Drug Screening Tools Compared",
  description:
    "AUDIT screens for alcohol use disorders; DAST-10 screens for drug use problems. Learn the key differences, when to use each, and when to use both together.",
  keywords: [
    "AUDIT vs DAST-10",
    "AUDIT versus DAST-10",
    "alcohol vs drug screening",
    "AUDIT DAST-10 difference",
    "substance use screening comparison",
    "drug alcohol screening tools",
    "DAST-10 vs AUDIT",
    "alcohol drug test comparison",
    "AUDIT DAST together",
    "substance use disorder screening",
  ],
  openGraph: {
    title: "AUDIT vs. DAST-10: Alcohol vs. Drug Screening Tools Compared",
    description:
      "AUDIT screens for alcohol use disorders; DAST-10 screens for drug use other than alcohol. Key differences in scope, scoring, and when to use each or both.",
    url: PAGE_URL,
    type: "article",
  },
});

const FAQ_DATA = [
  {
    question: "What is the difference between alcohol use disorder and drug use disorder?",
    answer:
      "Alcohol use disorder (AUD) and drug use disorder (also called substance use disorder or SUD) share overlapping features — both involve loss of control over use, continued use despite harm, and withdrawal phenomena — but they involve different substances with different pharmacological profiles, risk factors, medical complications, and treatment approaches. AUD specifically involves alcohol. Drug use disorders involve controlled substances or misused medications such as opioids, stimulants, cannabis, benzodiazepines, and others. Separate screening tools are often used to capture each substance domain more precisely.",
  },
  {
    question: "Can you use the AUDIT and DAST-10 together?",
    answer:
      "Yes, and this is common clinical practice. Alcohol and drug use frequently co-occur — research suggests roughly 50% of people with a drug use disorder also have an alcohol use disorder, and vice versa. Administering both the AUDIT and DAST-10 together during intake provides a comprehensive substance use picture in approximately 8–10 minutes. Many primary care, behavioral health, and addiction medicine settings include both on standard intake forms.",
  },
  {
    question: "Does the DAST-10 include alcohol?",
    answer:
      "No. The DAST-10 specifically excludes alcohol — its opening instructions tell respondents to answer based on drug use other than alcohol. This is a critical distinction: if a patient uses only alcohol, the DAST-10 is not the appropriate tool — use the AUDIT. If they use drugs other than alcohol, or both drugs and alcohol, administer both the DAST-10 and AUDIT respectively.",
  },
  {
    question: "What does DAST-10 stand for?",
    answer:
      "DAST stands for Drug Abuse Screening Test. The DAST-10 is the 10-item short form of the original 28-item DAST, developed by Harvey Skinner at the University of Toronto in 1982. The short form retains strong psychometric properties and is more practical for clinical settings. It has been validated across numerous populations and settings, including primary care, emergency departments, and addiction treatment programs.",
  },
  {
    question: "What is the DAST-10 cutoff for a positive screen?",
    answer:
      "DAST-10 scores range from 0 to 10. Risk levels: 0 = no problems, 1–2 = low, 3–5 = moderate (warrants further assessment), 6–8 = substantial, 9–10 = severe. A score of 3 or higher is commonly used as the threshold for positive screening requiring further evaluation. Some guidelines use 2 or higher in higher-risk settings. Like the AUDIT, higher scores correspond to more intensive intervention levels.",
  },
  {
    question: "Is the DAST-10 validated?",
    answer:
      "Yes. The DAST-10 has been validated in numerous studies including primary care and addiction populations. Meta-analyses show sensitivity of approximately 70–80% and specificity of approximately 73–80% for detecting drug use disorders at a cutoff of ≥3. It is endorsed by SAMHSA and included in the Alcohol and Drug Abuse Institute's library of validated instruments. The WHO-ASSIST (Alcohol, Smoking and Substance Involvement Screening Test) is a broader validated alternative when screening is needed across multiple substance categories simultaneously.",
  },
  {
    question: "What should I do if I score high on the DAST-10?",
    answer:
      "A DAST-10 score of 3 or higher means your drug use may be causing problems and warrants professional evaluation. This is not a diagnosis — it is a signal. Speak with your primary care provider, a Certified Drug and Alcohol Counselor (CADC), or an addiction medicine specialist. The SAMHSA National Helpline (1-800-662-4357) provides free, confidential referrals to local treatment and support services 24/7. Treatment is effective, and seeking help early leads to better outcomes.",
  },
  {
    question: "Are there other substance use screening tools beyond the AUDIT and DAST-10?",
    answer:
      "Yes. The WHO-ASSIST (Alcohol, Smoking and Substance Involvement Screening Test) screens for multiple substances simultaneously including alcohol, tobacco, cannabis, cocaine, opioids, and others in a single instrument. The CAGE-AID (adapted for drugs and alcohol) is a 4-item rapid screen for both. The CRAFFT is validated specifically for adolescents aged 14–21. The AUDIT-C is the 3-item rapid alcohol triage screen. The appropriate tool depends on the population, the time available, and whether single-substance or multi-substance screening is needed.",
  },
];

export default function AuditVsDast10Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "AUDIT vs. DAST-10: Differences in Scope, Scoring, and Use",
              description:
                "A comprehensive comparison of the AUDIT (alcohol screening) and DAST-10 (drug screening) — what each measures, how they differ, and when to use them together.",
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
              { name: "AUDIT vs. DAST-10", url: PAGE_URL },
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
              <strong>Medical Disclaimer:</strong> This content is for informational and educational purposes only. The AUDIT and DAST-10 are screening tools, not diagnostic instruments. Scores do not constitute a clinical diagnosis of substance use disorder. Please consult a qualified healthcare provider regarding any substance use concerns.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300">
              Substance Use Screening
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
              Validated Instruments
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              SAMHSA-Endorsed Tools
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            AUDIT vs. DAST-10: Alcohol vs. Drug Screening Tools Compared
          </h1>

          {/* Intro */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              Use the{" "}
              <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">AUDIT</Link>{" "}
              if you are screening for alcohol use; use the{" "}
              <Link href="/dast-10-drug-screening" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">DAST-10</Link>{" "}
              for drug use other than alcohol — they cover separate substance categories and are not interchangeable. The AUDIT is a 10-question WHO-validated alcohol screen; the DAST-10 is a 10-question screen for illicit and non-prescribed drug use. Note: the DAST-10 interactive tool is currently under licensing review — see the{" "}
              <Link href="/dast-10-drug-screening" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">DAST-10 drug screening page</Link>{" "}
              for availability — but the clinical comparison below remains accurate. This page is for anyone determining which screen fits their situation; the full comparison covers scoring, thresholds, and when both tools are needed together.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Many people who struggle with substance use problems use both alcohol and drugs. In those cases, both tools are needed to get a complete picture.
            </p>
          </div>

          <AnswerBlock
            what="A side-by-side comparison of the AUDIT (10-question alcohol screening) and DAST-10 (10-question drug screening), including what each covers, how they are scored, and when to use them individually or together."
            who="Anyone trying to understand the difference between alcohol and drug screening, or anyone who has received a score on one or both tools and wants to know what it means."
            bottomLine="AUDIT screens for alcohol; DAST-10 screens for drugs other than alcohol. They are complementary tools — not alternatives. Clinicians often administer both together because alcohol and drug use disorders frequently co-occur."
            lastUpdated="2026-05-06"
          />

          {/* What is the AUDIT */}
          <section className="mt-10 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What does the AUDIT screen for?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The AUDIT (Alcohol Use Disorders Identification Test) is a 10-item screening tool developed by the{" "}
              <a href="https://www.who.int/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">World Health Organization</a>{" "}
              in 1989. It screens exclusively for alcohol use problems across three domains: consumption patterns, signs of dependence, and alcohol-related harm. Scores range from 0 to 40, with clinical risk zones mapped to WHO-recommended intervention levels.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The AUDIT captures the full spectrum of alcohol problem severity — from hazardous drinking (Zone II: 8–15) through harmful use (Zone III: 16–19) to possible alcohol dependence (Zone IV: 20+). It is one of the most widely validated screening instruments in global health and is the standard alcohol screen used by SAMHSA, the CDC, the U.S. Preventive Services Task Force, and healthcare systems in over 40 countries.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Critically, the AUDIT does not screen for drug use at all. A person could have significant opioid, cannabis, or stimulant use disorder and score 0 on the AUDIT if they do not drink alcohol.
            </p>
          </section>

          {/* What is the DAST-10 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What does the DAST-10 screen for?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The DAST-10 (Drug Abuse Screening Test — 10 item) was developed by Harvey Skinner at the University of Toronto (1982) as a brief self-report instrument for detecting drug use problems. Its instructions explicitly tell respondents to answer based on use of drugs other than alcohol — including recreational drugs, prescription drug misuse, and any illegal drug use.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The 10 yes/no questions ask about consequences and patterns of drug use over the past 12 months: whether use interfered with functioning, caused health problems, resulted in loss of control, or affected relationships. Total scores range from 0 to 10, with each &quot;yes&quot; answer scored as 1 point (with one reverse-scored item).
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Risk levels: 0 = no reported problems, 1–2 = low risk, 3–5 = moderate (warrants further assessment), 6–8 = substantial, 9–10 = severe. A score of 3 or higher is the commonly used threshold for referral for further evaluation.
            </p>
          </section>

          {/* Structural comparison */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How are the AUDIT and DAST-10 structurally different?</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">Feature</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-orange-700 dark:text-orange-400">AUDIT</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-teal-700 dark:text-teal-400">DAST-10</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Substance covered</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Alcohol only</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Drugs only (excludes alcohol)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Number of items</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">10 items</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">10 items</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Response format</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">5-point frequency scale (0–4)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes/No (0 or 1)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Score range</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">0–40</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">0–10</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Clinical cutoff</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">≥8 hazardous use</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">≥3 warrants evaluation</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Measures consumption</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (items 1–3)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Indirect (yes/no questions about use)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Measures dependence signs</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (items 4–6)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (items on control, withdrawal, etc.)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Measures harm/consequences</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (items 7–10)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (central focus of most items)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Developed by</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">WHO (1989)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Skinner, U of Toronto (1982)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              One notable structural difference: the AUDIT uses a 5-point frequency scale for most items, allowing graduated capture of consumption intensity. The DAST-10 uses a simpler yes/no format, which is faster to administer but provides less granularity — it cannot differentiate between someone who has tried marijuana twice and someone with daily opioid dependence beyond the threshold count.
            </p>
          </section>

          {/* When to use each or both */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">When should you use the AUDIT, the DAST-10, or both?</h2>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-orange-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Use the AUDIT when:</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>Your primary concern is alcohol use</li>
                  <li>You want detailed alcohol consumption data (frequency, quantity, binge drinking)</li>
                  <li>You want to distinguish hazardous drinking from harmful drinking and dependence</li>
                  <li>You are conducting standard primary care or occupational health screening</li>
                  <li>You need a globally recognized, WHO-validated alcohol instrument</li>
                </ul>
              </div>
              <div className="border-l-4 border-teal-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Use the DAST-10 when:</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>Your concern is drug use other than alcohol (including cannabis, opioids, stimulants, benzodiazepines)</li>
                  <li>You want to screen for consequences and loss of control related to drug use</li>
                  <li>You need a brief tool for busy clinical settings</li>
                  <li>You are working in primary care, emergency medicine, or addiction services</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Use both when:</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>You use or have used both alcohol and drugs</li>
                  <li>You are completing a comprehensive substance use intake assessment</li>
                  <li>The clinical setting requires screening across both alcohol and drug domains</li>
                  <li>You want a baseline across all substance use for monitoring purposes</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Administering both tools takes approximately 8–10 minutes combined. Because polysubstance use is common and the AUDIT and DAST-10 do not overlap, using both is the most comprehensive approach. The{" "}
              <Link href="/who-assist-substance-screening" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">WHO-ASSIST</Link>{" "}
              is an alternative that screens for multiple substance categories (including tobacco, cannabis, opioids, cocaine, and others) in a single instrument, if a single-tool multi-substance screen is preferred.
            </p>
          </section>

          {/* Scoring side by side */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What do the scores mean on each tool?</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-4">
              <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-5">
                <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-3">AUDIT Scores (0–40)</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><span className="font-medium text-green-700 dark:text-green-400">0–7:</span> Zone I — Low risk</li>
                  <li><span className="font-medium text-yellow-700 dark:text-yellow-400">8–15:</span> Zone II — Hazardous use</li>
                  <li><span className="font-medium text-orange-700 dark:text-orange-400">16–19:</span> Zone III — Harmful use</li>
                  <li><span className="font-medium text-red-700 dark:text-red-400">20–40:</span> Zone IV — Possible dependence</li>
                </ul>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-lg p-5">
                <h3 className="font-semibold text-teal-800 dark:text-teal-300 mb-3">DAST-10 Scores (0–10)</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><span className="font-medium text-green-700 dark:text-green-400">0:</span> No problems reported</li>
                  <li><span className="font-medium text-lime-700 dark:text-lime-400">1–2:</span> Low risk</li>
                  <li><span className="font-medium text-yellow-700 dark:text-yellow-400">3–5:</span> Moderate — further assessment needed</li>
                  <li><span className="font-medium text-orange-700 dark:text-orange-400">6–8:</span> Substantial problem level</li>
                  <li><span className="font-medium text-red-700 dark:text-red-400">9–10:</span> Severe problem level</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Co-occurring and what to do */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What should you do if you score high on both the AUDIT and DAST-10?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Scoring above clinical thresholds on both tools indicates that both alcohol and drug use may be causing problems — a polysubstance use pattern. This is common: according to{" "}
              <a href="https://www.samhsa.gov/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">SAMHSA</a>,
              {" "}approximately 50% of people with a substance use disorder involving drugs also have an alcohol use disorder. Effective treatment requires addressing both.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              High scores on both tools are a signal to seek a comprehensive substance use evaluation from a qualified professional — a Certified Drug and Alcohol Counselor (CADC), addiction medicine specialist, or behavioral health clinician. They can assess the full pattern of use, determine which substances are primary, evaluate for any dependence, and develop a treatment plan that addresses both alcohol and drug use.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold">
                Important: If you have been using both alcohol and other depressants (opioids, benzodiazepines) heavily, do not stop abruptly without medical supervision. Combined depressant withdrawal can be life-threatening. Speak with a healthcare provider before stopping use.
              </p>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The SAMHSA National Helpline (1-800-662-4357) provides free, confidential referrals to local treatment facilities, support groups, and community-based organizations 24 hours a day, 7 days a week.
            </p>
          </section>

          {/* Citations */}
          <section className="mb-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Sources &amp; Further Reading</h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>Saunders JB, Aasland OG, Babor TF, et al. Development of the Alcohol Use Disorders Identification Test (AUDIT). <em>Addiction.</em> 1993;88(6):791–804.</li>
              <li>Skinner HA. The drug abuse screening test. <em>Addict Behav.</em> 1982;7(4):363–371.</li>
              <li>Yudko E, Lozhkina O, Fouts A. A comprehensive review of the psychometric properties of the Drug Abuse Screening Test. <em>J Subst Abuse Treat.</em> 2007;32(2):189–198.</li>
              <li><a href="https://www.who.int/publications/i/item/audit-the-alcohol-use-disorders-identification-test" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">WHO AUDIT Manual</a> — World Health Organization (2001).</li>
              <li><a href="https://www.samhsa.gov/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">SAMHSA</a> — Substance Abuse and Mental Health Services Administration.</li>
              <li><a href="https://www.cdc.gov/alcohol/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">CDC Alcohol and Public Health</a>.</li>
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
                  AUDIT — Alcohol Use Disorders Identification Test →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 10-question alcohol screening tool covering consumption, dependence, and harm. Takes 3–5 minutes.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/dast-10-drug-screening" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  DAST-10 — Drug Abuse Screening Test →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 10-question drug screening tool. Excludes alcohol. Takes 1–2 minutes.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/audit-vs-audit-c" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  AUDIT vs. AUDIT-C: Which Alcohol Tool Is Right? →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Comparison of the full 10-question AUDIT and the 3-question AUDIT-C triage screen.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/who-assist-substance-screening" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  WHO-ASSIST — Multi-Substance Screening →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Screens for alcohol, tobacco, cannabis, opioids, cocaine, and other substances in a single instrument.
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

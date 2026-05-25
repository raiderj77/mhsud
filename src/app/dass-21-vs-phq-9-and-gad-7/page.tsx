import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";

const PAGE_URL = `${SITE_URL}/dass-21-vs-phq-9-and-gad-7`;

export const metadata: Metadata = createMetadata({
  path: "/dass-21-vs-phq-9-and-gad-7",
  title: "DASS-21 vs. PHQ-9 and GAD-7: Which Should You Use?",
  description:
    "DASS-21 measures depression, anxiety, and stress in one tool. PHQ-9 and GAD-7 are separate validated tools used in clinical care. Learn the key differences and when each is appropriate.",
  keywords: [
    "DASS-21 vs PHQ-9",
    "DASS-21 vs GAD-7",
    "DASS-21 versus PHQ-9 GAD-7",
    "depression anxiety stress scale comparison",
    "DASS-21 comparison",
    "which mental health screening tool",
    "PHQ-9 DASS-21 difference",
    "GAD-7 DASS-21 difference",
    "DASS-21 PHQ-9 clinical comparison",
    "mental health tool comparison",
  ],
  openGraph: {
    title: "DASS-21 vs. PHQ-9 and GAD-7: Which Should You Use?",
    description:
      "DASS-21 measures depression, anxiety, and stress in a single 21-item tool. PHQ-9 and GAD-7 are separate tools widely used in clinical care. Key differences in purpose, scoring, and setting.",
    url: PAGE_URL,
    type: "article",
  },
});

const FAQ_DATA = [
  {
    question: "Is the DASS-21 or PHQ-9 more accurate for detecting depression?",
    answer:
      "Both tools have strong psychometric evidence, but they measure different things. The PHQ-9 maps directly to DSM-5 major depressive disorder criteria and was validated specifically to detect and measure MDD severity in primary care. The DASS-21 depression subscale measures a slightly different construct — characterized by low positive affect, hopelessness, and self-deprecation — and does not map one-to-one to DSM criteria. For clinical screening of MDD in medical settings, the PHQ-9 is generally preferred because it aligns with diagnostic criteria and is well-understood by clinicians worldwide.",
  },
  {
    question: "Does the DASS-21 replace the PHQ-9 and GAD-7?",
    answer:
      "Not in most clinical settings. The DASS-21 is widely used in research and in psychology-focused clinical settings, but the PHQ-9 and GAD-7 are the dominant clinical tools in primary care, telehealth, and behavioral health integration programs globally. The PHQ-9 and GAD-7 are embedded in most electronic health record systems as standard intake measures. The DASS-21 is better viewed as a complementary research tool or as an alternative when the stress dimension is specifically needed.",
  },
  {
    question: "What is the 'stress' subscale of the DASS-21 measuring?",
    answer:
      "The DASS-21 stress subscale measures chronic arousal, tension, and difficulty relaxing or tolerating setbacks. It captures states like persistent irritability, agitation, nervous energy, and being easily upset — distinct from the autonomic fear response measured by the anxiety subscale. There is no direct equivalent stress scale in the PHQ-9/GAD-7 pair, making the DASS-21 stress subscale uniquely useful when chronic stress state (beyond anxiety or depression) is the primary question.",
  },
  {
    question: "Can I compare my DASS-21 score to my PHQ-9 or GAD-7 score?",
    answer:
      "Not directly — the tools use different scoring methods and different normative references. DASS-21 scores are multiplied by 2 to convert to DASS-42 equivalents before applying severity categories, and the norms are based on general population samples. PHQ-9 and GAD-7 scores use the raw item sum directly against clinical thresholds established in patient populations. Comparing raw numbers across the two systems is not meaningful; what matters is each tool's severity classification relative to its own reference population.",
  },
  {
    question: "Which tool is better for tracking treatment progress over time?",
    answer:
      "Both are appropriate for outcome monitoring. In clinical settings, PHQ-9 and GAD-7 are more commonly used for treatment monitoring because clinicians, insurers, and quality metrics programs are calibrated to their cutoffs and change benchmarks. The PHQ-9's minimum clinically important difference (MCID) is approximately 5 points. The DASS-21 is more commonly used in research studies tracking treatment response. For self-monitoring, both are suitable — choose the one that gives you the most meaningful feedback about your symptom pattern.",
  },
  {
    question: "Is the DASS-21 validated?",
    answer:
      "Yes. The DASS was developed by Lovibond and Lovibond at the University of New South Wales, Australia, in 1995. The 21-item short form (DASS-21) is widely validated across clinical and non-clinical populations in numerous countries. Its psychometric properties — internal consistency, test-retest reliability, and factor structure — are well-established in the literature. However, it has less clinical uptake in the United States primary care system compared to the PHQ-9 and GAD-7.",
  },
  {
    question: "Are the DASS-21 and PHQ-9/GAD-7 freely available?",
    answer:
      "The DASS is in the public domain and freely available from the University of New South Wales website. The PHQ-9 and GAD-7 are also in the public domain, available from PHQscreeners.com (maintained by Pfizer). All tools on MindCheck Tools are freely available based on the validated public domain instruments.",
  },
  {
    question: "What should I do if I score high on any of these tools?",
    answer:
      "A high score on the DASS-21 depression or anxiety subscale, or on the PHQ-9 or GAD-7, means your symptoms warrant evaluation by a qualified healthcare provider. These are screening tools, not diagnoses — they tell you that something may be wrong and you should seek professional evaluation. A licensed mental health professional (therapist, psychologist, psychiatrist) or your primary care provider can conduct a full assessment and discuss treatment options. If you are in crisis, call or text 988.",
  },
];

export default function Dass21VsPhq9Gad7Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "DASS-21 vs. PHQ-9 and GAD-7: Differences in Purpose, Scoring, and Setting",
              description:
                "A comprehensive comparison of the DASS-21 and the PHQ-9/GAD-7 pair — what each measures, how they are scored, and when each is most appropriate.",
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
              { name: "DASS-21 vs. PHQ-9 and GAD-7", url: PAGE_URL },
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
            <p className="font-semibold mb-2">⚠️ If you are in crisis or having thoughts of self-harm:</p>
            <ul className="space-y-1 text-sm">
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong> — free, 24/7</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free, 24/7</li>
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Disclaimer */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Medical Disclaimer:</strong> This content is for informational and educational purposes only. The DASS-21, PHQ-9, and GAD-7 are screening tools, not diagnostic instruments. Scores do not constitute a clinical diagnosis. Please consult a qualified healthcare provider regarding any mental health concerns.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              Validated Instruments
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
              Evidence-Based
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
              Research &amp; Clinical Use
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            DASS-21 vs. PHQ-9 and GAD-7: Which Should You Use?
          </h1>

          {/* Intro */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              Use the{" "}
              <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">DASS-21</Link>{" "}
              when stress is part of the clinical picture and you want one instrument covering depression, anxiety, and stress together; use the{" "}
              <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">PHQ-9</Link>{" "}
              and{" "}
              <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">GAD-7</Link>{" "}
              paired when you need stricter alignment with DSM diagnostic categories. The DASS-21 is common in research and stress-monitoring contexts; the PHQ-9 and GAD-7 pair is standard in primary care and outpatient behavioral health. This page is for anyone deciding between a combined stress-inclusive screen and the two-instrument clinical standard. The comparison below covers scoring, sensitivity, and practical tradeoffs.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              The key distinction: the DASS-21 measures depression, anxiety, and stress simultaneously in a single 21-item instrument. The PHQ-9 and GAD-7 are two separate instruments — one for depression, one for anxiety — that are often used together. Neither approach is universally better; the right choice depends on your clinical context and what information you need.
            </p>
          </div>

          <AnswerBlock
            what="A detailed comparison of the DASS-21 (Depression Anxiety Stress Scales, 21-item version) and the PHQ-9/GAD-7 pair — covering the constructs each measures, their scoring systems, and their appropriate clinical and research contexts."
            who="Anyone trying to understand the difference between these tools, or deciding which to use for self-screening, clinical intake, or research purposes."
            bottomLine="The DASS-21 measures depression, anxiety, and stress in one instrument and is widely used in research and psychology settings. The PHQ-9 and GAD-7 are the dominant clinical tools in primary care globally, mapping to DSM criteria and embedded in most healthcare workflows."
            lastUpdated="2026-05-06"
          />

          {/* What is the DASS-21 */}
          <section className="mt-10 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is the DASS-21?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The DASS-21 (Depression Anxiety Stress Scales — 21 item version) is a self-report questionnaire developed by Lovibond and Lovibond at the University of New South Wales, Australia (1995). It is the short-form version of the original 42-item DASS, containing 7 items per subscale across three dimensions: depression, anxiety, and stress.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Each item is rated on a 0–3 scale indicating how often the statement applied to you over the past week. Because the DASS-21 is a short form, raw subscale scores are multiplied by 2 to produce DASS-42 equivalents before applying the published normative categories.
            </p>
            <div className="space-y-3 mb-4">
              <div className="border-l-4 border-indigo-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Depression Subscale (7 items)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Measures dysphoria, hopelessness, devaluation of life, self-deprecation, anhedonia, inertia. DASS depression captures a construct characterized by low positive affect — distinct from the anxious distress overlap.
                </p>
              </div>
              <div className="border-l-4 border-indigo-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Anxiety Subscale (7 items)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Measures autonomic arousal, skeletal muscle effects, situational anxiety, and subjective experience of anxious affect — the physiological fear response.
                </p>
              </div>
              <div className="border-l-4 border-indigo-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Stress Subscale (7 items)</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Measures chronic arousal, irritability, overreaction to minor irritants, impatience, agitation, and difficulty relaxing. This stress dimension has no direct equivalent in the PHQ-9/GAD-7 pair.
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              DASS-21 severity categories (after ×2 conversion): Normal, Mild, Moderate, Severe, Extremely Severe. Each subscale has its own severity thresholds. The DASS is in the public domain and freely available from the{" "}
              <a href="https://www.psy.unsw.edu.au/dass/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">UNSW Psychology website</a>.
            </p>
          </section>

          {/* Structural comparison */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How do the DASS-21 and PHQ-9/GAD-7 compare structurally?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The DASS-21 is a single 21-item instrument measuring depression, anxiety, and stress; the PHQ-9 and GAD-7 are two separate instruments totaling 16 items that measure depression and anxiety respectively, with no equivalent stress dimension.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">Feature</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-indigo-700 dark:text-indigo-400">DASS-21</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-sky-700 dark:text-sky-400">PHQ-9 + GAD-7</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Number of items</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">21 (one instrument)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">16 (two instruments)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Constructs measured</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Depression, Anxiety, Stress</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Depression (PHQ-9), Anxiety (GAD-7)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Response scale</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">0–3 (past week)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">0–3 (past two weeks)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">DSM criteria alignment</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Partial (not DSM-mapped)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Direct (PHQ-9 maps to MDD; GAD-7 to GAD)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Includes suicidality item</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">No</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (PHQ-9 item 9)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Administration time</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">~5 minutes</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">~5 minutes (combined)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Primary use context</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Research, psychology settings</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Primary care, behavioral health, telehealth</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">EHR integration</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Limited</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Standard in most EHR platforms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* The stress subscale difference */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What does the DASS-21 measure that the PHQ-9 and GAD-7 do not?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The most significant unique contribution of the DASS-21 is its stress subscale. There is no dedicated stress measure in the PHQ-9/GAD-7 pair. The DASS-21 stress dimension captures chronic arousal, tension, difficulty tolerating setbacks, persistent irritability, and agitation — a state distinct from both the low mood of depression and the fear-based arousal of anxiety.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              This distinction matters clinically. Someone under significant occupational or caregiving stress may have elevated DASS-21 stress scores while scoring within normal ranges on depression and anxiety subscales. The PHQ-9 and GAD-7 would not capture this state. Conversely, the PHQ-9 includes a direct item about suicidal ideation (item 9) — something the DASS-21 does not address at all.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Another key difference is the time window. The DASS-21 asks about the past week; the PHQ-9 and GAD-7 ask about the past two weeks. For rapidly changing symptom states, the shorter window of the DASS-21 may capture more acute fluctuations.
            </p>
          </section>

          {/* When to use each */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">When should you choose the DASS-21 versus the PHQ-9 and GAD-7?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Choose the DASS-21 when stress is part of the clinical picture or a single unified instrument is preferred; choose the PHQ-9 and GAD-7 when DSM-aligned screening is needed for primary care, behavioral health workflows, or clinical records integration.
            </p>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-indigo-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Choose the DASS-21 when:</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>You want to assess stress as a distinct dimension alongside depression and anxiety</li>
                  <li>You are in a research or academic context where the DASS-21 is the established measure</li>
                  <li>You are working with a psychologist or counselor whose clinical workflow uses the DASS</li>
                  <li>You want a single unified instrument rather than two separate tools</li>
                  <li>You are based in Australia, New Zealand, or another region where the DASS is the standard clinical tool</li>
                </ul>
              </div>
              <div className="border-l-4 border-sky-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Choose the PHQ-9 and GAD-7 when:</h3>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-disc list-inside">
                  <li>You are in a primary care or behavioral health integration setting in the US, UK, Canada, or most of Europe</li>
                  <li>You want direct DSM-aligned depression and anxiety screening</li>
                  <li>Your scores need to interface with clinical records or insurance systems</li>
                  <li>You want a tool that includes a direct suicidality screening item (PHQ-9 item 9)</li>
                  <li>Your clinician uses the PHQ-9 and GAD-7 for treatment monitoring</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              For self-screening purposes, either approach can provide useful information about your current mental health state. The PHQ-9 and GAD-7 may be more useful if you plan to share results with a healthcare provider, since they are the tools most primary care clinicians are trained to interpret.
            </p>
          </section>

          {/* Scoring interpretation */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How are the DASS-21 and PHQ-9/GAD-7 scored differently?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The DASS-21 multiplies each raw subscale score by 2 before applying severity categories; the PHQ-9 and GAD-7 use raw item sums directly — so scores cannot be meaningfully compared across the two systems:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-5">
                <h3 className="font-semibold text-indigo-800 dark:text-indigo-300 mb-3">DASS-21 Scoring</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Raw subscale scores × 2, then apply severity bands:</p>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Depression (converted):</p>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 mb-3">
                  <li>0–9: Normal</li>
                  <li>10–13: Mild</li>
                  <li>14–20: Moderate</li>
                  <li>21–27: Severe</li>
                  <li>28+: Extremely Severe</li>
                </ul>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Anxiety (converted):</p>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 mb-3">
                  <li>0–7: Normal</li>
                  <li>8–9: Mild</li>
                  <li>10–14: Moderate</li>
                  <li>15–19: Severe</li>
                  <li>20+: Extremely Severe</li>
                </ul>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Stress (converted):</p>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li>0–14: Normal</li>
                  <li>15–18: Mild</li>
                  <li>19–25: Moderate</li>
                  <li>26–33: Severe</li>
                  <li>34+: Extremely Severe</li>
                </ul>
              </div>
              <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg p-5">
                <h3 className="font-semibold text-sky-800 dark:text-sky-300 mb-3">PHQ-9 &amp; GAD-7 Scoring</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Raw sum scores, no conversion needed:</p>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">PHQ-9 (0–27):</p>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400 mb-3">
                  <li>0–4: Minimal</li>
                  <li>5–9: Mild</li>
                  <li>10–14: Moderate</li>
                  <li>15–19: Moderately Severe</li>
                  <li>20–27: Severe</li>
                </ul>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">GAD-7 (0–21):</p>
                <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                  <li>0–4: Minimal</li>
                  <li>5–9: Mild</li>
                  <li>10–14: Moderate</li>
                  <li>15–21: Severe</li>
                </ul>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Note also the difference in reference time frame: DASS-21 items ask how true each statement was over the past week, while PHQ-9 and GAD-7 items ask about the past two weeks. This means DASS-21 may capture more acute symptom states, while the PHQ-9 and GAD-7 reflect a slightly longer window that may smooth out short-term fluctuations.
            </p>
          </section>

          {/* Citations */}
          <section className="mb-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Sources &amp; Further Reading</h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>Lovibond SH, Lovibond PF. <em>Manual for the Depression Anxiety Stress Scales.</em> 2nd ed. Sydney: Psychology Foundation; 1995.</li>
              <li>Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. <em>J Gen Intern Med.</em> 2001;16(9):606–613.</li>
              <li>Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder. <em>Arch Intern Med.</em> 2006;166(10):1092–1097.</li>
              <li>Henry JD, Crawford JR. The short-form version of the Depression Anxiety Stress Scales (DASS-21): construct validity in a nonclinical sample. <em>Br J Clin Psychol.</em> 2005;44(2):227–239.</li>
              <li><a href="https://www.phqscreeners.com/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">PHQscreeners.com</a> — Official PHQ and GAD instruments.</li>
              <li><a href="https://www.nimh.nih.gov/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">NIMH.nih.gov</a> — National Institute of Mental Health.</li>
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
                <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  DASS-21 — Depression, Anxiety &amp; Stress Scales →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 21-item screen measuring depression, anxiety, and stress simultaneously.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  PHQ-9 — Depression Screening →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 9-question depression screening tool. DSM-5 aligned. Takes about 2 minutes.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  GAD-7 — Anxiety Screening →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 7-question anxiety screening tool. Takes about 1–2 minutes.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/phq-9-vs-gad-7" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  PHQ-9 vs. GAD-7: What&apos;s the Difference? →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  A detailed comparison of the two most common clinical screening tools.
                </p>
              </li>
            </ul>
          </section>

          {/* Author Bio */}
          <div className="my-8">
            <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools &middot; Your Friendly Developer LLC
    </p>
    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
      <span>
        Published:{" "}
        <time dateTime="2026-05-06">
          {new Date("2026-05-06T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
      <span>
        Last reviewed:{" "}
        <time dateTime="2026-05-06">
          {new Date("2026-05-06T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
          </div>

          {/* Crisis Resources at Bottom */}
          <div
            role="alert"
            className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-900 dark:text-amber-200 text-sm leading-relaxed px-4 py-4 mt-12 mb-8"
          >
            <p className="font-semibold mb-2">⚠️ If you are in crisis or having thoughts of self-harm:</p>
            <ul className="space-y-1">
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong> — free, 24/7</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free, 24/7</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

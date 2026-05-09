import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AuthorByline } from "@/components/AuthorByline";
import AnswerBlock from "@/components/AnswerBlock";

const PAGE_URL = `${SITE_URL}/phq-9-vs-gad-7`;

export const metadata: Metadata = createMetadata({
  path: "/phq-9-vs-gad-7",
  title: "PHQ-9 vs. GAD-7: What's the Difference? | MindCheck Tools",
  description:
    "PHQ-9 screens for depression; GAD-7 screens for anxiety. Learn the key differences in what each tool measures, how they are scored, and when to use each one.",
  keywords: [
    "PHQ-9 vs GAD-7",
    "PHQ-9 versus GAD-7",
    "difference between PHQ-9 and GAD-7",
    "depression vs anxiety screening",
    "PHQ-9 or GAD-7",
    "which screening tool",
    "PHQ-9 comparison",
    "GAD-7 comparison",
    "depression anxiety screening tools",
    "mental health questionnaire comparison",
  ],
  openGraph: {
    title: "PHQ-9 vs. GAD-7: What's the Difference?",
    description:
      "PHQ-9 screens for depression; GAD-7 screens for anxiety. Key differences in scoring, purpose, and when clinicians use each tool.",
    url: PAGE_URL,
    type: "article",
  },
});

const FAQ_DATA = [
  {
    question: "What is the difference between depression and anxiety?",
    answer:
      "Depression and anxiety are distinct but related conditions. Depression is primarily characterized by persistent low mood, loss of interest or pleasure, fatigue, and feelings of worthlessness or hopelessness. Anxiety is characterized by excessive worry, fear, nervousness, and physical symptoms like muscle tension, racing heart, and restlessness. Both can disrupt sleep, concentration, and daily functioning. Depression and anxiety frequently co-occur — estimates suggest 45–60% of people with major depression also meet criteria for an anxiety disorder.",
  },
  {
    question: "Can depression and anxiety occur together?",
    answer:
      "Yes. Comorbid depression and anxiety is common. Research published in journals including JAMA Psychiatry and the Journal of Affective Disorders consistently shows that 45–60% of people with major depressive disorder also have a diagnosable anxiety disorder. This is one reason clinicians often administer both the PHQ-9 and GAD-7 together — to get a fuller picture of a patient's mental health status in a single brief administration.",
  },
  {
    question: "How long does each screening take?",
    answer:
      "Both tools are brief. The PHQ-9 has 9 items and typically takes 2–3 minutes to complete. The GAD-7 has 7 items and typically takes 1–2 minutes. Together, they can be administered in under 5 minutes, which is why many primary care practices routinely include both on intake paperwork or electronic health record check-ins.",
  },
  {
    question: "Are the PHQ-9 and GAD-7 clinically validated tools?",
    answer:
      "Yes. Both tools have undergone extensive psychometric validation. The PHQ-9 was developed and validated by Kroenke and Spitzer (2001) in primary care populations with strong sensitivity (88%) and specificity (88%) for major depressive disorder. The GAD-7 was validated by Spitzer, Kroenke, Williams, and Löwe (2006) with sensitivity of 89% and specificity of 82% for generalized anxiety disorder. Both are endorsed by the World Health Organization, SAMHSA, and major professional medical associations.",
  },
  {
    question: "What should I do if I score high on both the PHQ-9 and GAD-7?",
    answer:
      "A high score on both tools — for example, PHQ-9 ≥10 and GAD-7 ≥10 — suggests significant depressive and anxiety symptoms are both present. This is common and does not mean something is 'more wrong' with you; comorbidity is the norm rather than the exception. You should speak with a healthcare provider as soon as possible. A clinician can conduct a full evaluation, determine which symptoms are primary, and develop a treatment plan. These screening results are a starting point for conversation, not a diagnosis.",
  },
  {
    question: "Do healthcare providers typically use the PHQ-9 and GAD-7 together?",
    answer:
      "Yes. Using both tools together is standard practice in primary care, behavioral health integration programs, and telehealth settings. The combined PHQ-9/GAD-7 protocol provides a rapid dual-screen for depression and anxiety in approximately 5 minutes. The PHQ-4 is a 4-item ultra-brief screen that combines the first 2 items of each tool for the fastest possible triage, with PHQ-9 and GAD-7 used for deeper assessment when PHQ-4 is positive.",
  },
  {
    question: "Can I use the PHQ-9 or GAD-7 without a doctor?",
    answer:
      "You can take either screening tool on your own — both are in the public domain and freely available. Self-screening can help you recognize patterns in your symptoms and decide whether to seek professional evaluation. However, these tools are not diagnostic instruments. A score above a clinical threshold means your symptoms warrant professional evaluation, not that you have been diagnosed with a specific condition. Always discuss results with a qualified healthcare provider.",
  },
  {
    question: "What do the different severity levels mean on each tool?",
    answer:
      "PHQ-9 severity levels: 0–4 minimal depression, 5–9 mild, 10–14 moderate, 15–19 moderately severe, 20–27 severe. GAD-7 severity levels: 0–4 minimal anxiety, 5–9 mild, 10–14 moderate, 15–21 severe. On both tools, scores in the moderate range (PHQ-9 ≥10; GAD-7 ≥10) are the commonly cited clinical cutoffs for warranting further evaluation. These cutoffs were established in validation studies but should always be interpreted in clinical context by a trained provider.",
  },
];

export default function Phq9VsGad7Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "PHQ-9 vs. GAD-7: Key Differences, Scoring, and When to Use Each",
              description:
                "A comprehensive comparison of the PHQ-9 depression screen and the GAD-7 anxiety screen — what each measures, how they differ, and when to use them.",
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
              { name: "PHQ-9 vs. GAD-7", url: PAGE_URL },
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
              <strong>Medical Disclaimer:</strong> This content is for informational and educational purposes only. The PHQ-9 and GAD-7 are screening tools, not diagnostic instruments. This comparison does not constitute medical advice. Please consult a qualified healthcare provider regarding any mental health concerns.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              Clinically Validated Tools
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
              Evidence-Based
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300">
              Free Screening Tools
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            PHQ-9 vs. GAD-7: What&apos;s the Difference?
          </h1>

          {/* Intro */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              Use the <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">PHQ-9</Link> if you are screening for depression; use the <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">GAD-7</Link> if you are screening for anxiety. Because depression and anxiety co-occur in roughly 50% of cases, taking both tools is often the most clinically appropriate choice. This page is for anyone deciding which screening to take — or whether to take both. The comparison below covers scoring, clinical thresholds, and how the results relate to each other.
            </p>
          </div>

          <AnswerBlock
            what="A side-by-side comparison of the PHQ-9 (Patient Health Questionnaire-9) and GAD-7 (Generalized Anxiety Disorder-7), including what each tool measures, how they are scored, and when clinicians use each one."
            who="Anyone trying to decide whether to take the PHQ-9, the GAD-7, or both — and anyone who has received scores on both tools and wants to understand what they mean."
            bottomLine="The PHQ-9 measures depressive symptoms; the GAD-7 measures anxiety symptoms. Both are validated, 5-minute screens. Many clinicians use both together because depression and anxiety frequently co-occur."
            lastUpdated="2026-05-06"
          />

          {/* What is the PHQ-9 */}
          <section className="mt-10 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is the PHQ-9?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The PHQ-9 (Patient Health Questionnaire-9) is a 9-item self-report screening tool developed to detect and measure the severity of major depressive disorder. It was developed by Kroenke, Spitzer, and Williams (2001) as part of the broader PHQ family of instruments and is now the most widely used depression screener in the world. The PHQ-9 is endorsed by the{" "}
              <a href="https://www.who.int/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">World Health Organization</a>,{" "}
              <a href="https://www.cdc.gov/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">CDC</a>, and{" "}
              <a href="https://www.samhsa.gov/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">SAMHSA</a>.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The nine questions map directly to the DSM-5 diagnostic criteria for major depressive disorder. Each question asks how often in the past two weeks you have been bothered by a symptom, rated on a 0–3 scale (Not at all / Several days / More than half the days / Nearly every day). The symptoms assessed are:
            </p>
            <ul className="space-y-1 text-slate-600 dark:text-slate-400 mb-4 list-disc list-inside text-sm">
              <li>Little interest or pleasure in doing things</li>
              <li>Feeling down, depressed, or hopeless</li>
              <li>Sleep disturbance (too much or too little)</li>
              <li>Feeling tired or having little energy</li>
              <li>Poor appetite or overeating</li>
              <li>Feeling bad about yourself or that you are a failure</li>
              <li>Trouble concentrating on things</li>
              <li>Moving or speaking more slowly — or being fidgety/restless</li>
              <li>Thoughts that you would be better off dead or of hurting yourself</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Scores range from 0 to 27. The commonly cited clinical cutoff for major depression is a score of 10 or higher, though the full severity range is: 0–4 minimal, 5–9 mild, 10–14 moderate, 15–19 moderately severe, 20–27 severe. Question 9 (thoughts of self-harm) is flagged separately regardless of overall score.
            </p>
          </section>

          {/* What is the GAD-7 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is the GAD-7?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The GAD-7 (Generalized Anxiety Disorder-7) is a 7-item self-report screening tool designed to detect generalized anxiety disorder (GAD) and measure anxiety symptom severity. It was developed by Spitzer, Kroenke, Williams, and Löwe (2006) and validated in primary care settings with strong sensitivity (89%) and specificity (82%). Like the PHQ-9, it uses a 0–3 frequency scale over the past two weeks.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The seven items assess core GAD symptoms based on DSM criteria:
            </p>
            <ul className="space-y-1 text-slate-600 dark:text-slate-400 mb-4 list-disc list-inside text-sm">
              <li>Feeling nervous, anxious, or on edge</li>
              <li>Not being able to stop or control worrying</li>
              <li>Worrying too much about different things</li>
              <li>Trouble relaxing</li>
              <li>Being so restless that it is hard to sit still</li>
              <li>Becoming easily annoyed or irritable</li>
              <li>Feeling afraid as if something awful might happen</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Scores range from 0 to 21. Severity levels: 0–4 minimal, 5–9 mild, 10–14 moderate, 15–21 severe. A score of 10 or higher is the standard clinical cutoff for probable generalized anxiety disorder, matching the PHQ-9&apos;s moderate threshold for comparability when both are co-administered.
            </p>
          </section>

          {/* Key differences comparison table */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How are the PHQ-9 and GAD-7 different?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Despite their structural similarities — both use a 0–3 frequency scale and are anchored to the past two weeks — the PHQ-9 and GAD-7 target fundamentally different constructs and symptom domains.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">Feature</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-sky-700 dark:text-sky-400">PHQ-9</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-purple-700 dark:text-purple-400">GAD-7</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Primary target</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Major depressive disorder</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Generalized anxiety disorder</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Number of items</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">9 items</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">7 items</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Score range</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">0–27</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">0–21</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Clinical cutoff</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">≥10 (moderate+)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">≥10 (moderate+)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Administration time</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">~2–3 minutes</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">~1–2 minutes</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Sensitivity / Specificity</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">88% / 88% for MDD</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">89% / 82% for GAD</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">Includes self-harm item</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Yes (item 9)</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">No</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">DSM criteria mapped</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">DSM-5 MDD criteria</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">DSM-5 GAD criteria</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              One structural difference worth noting: the PHQ-9 includes question 9, which directly asks about thoughts of self-harm or suicide. This item is flagged separately by clinicians regardless of total score. The GAD-7 does not include a suicidality item — a clinician administering only the GAD-7 would use a separate suicide risk assessment if indicated.
            </p>
          </section>

          {/* Can you take both */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Can you take both the PHQ-9 and GAD-7 at the same time?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Yes — and this is exactly how they are most often used in clinical practice. Many primary care offices, behavioral health programs, and telehealth platforms include both tools on intake forms because depression and anxiety are highly comorbid. The combined PHQ-9 + GAD-7 administration takes under 5 minutes and provides a comprehensive baseline across both symptom domains.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The{" "}
              <a href="https://www.phqscreeners.com/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">PHQ Screeners website</a>{" "}
              (the official source maintained by Pfizer) offers both tools as a combined packet. The PHQ-4, a 4-item ultra-brief screener, draws its 4 items directly from the first 2 questions of each tool for the fastest possible triage — positive results on the PHQ-4 are followed up with the full PHQ-9 and/or GAD-7.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Taking both tools together is particularly valuable because overlapping symptoms — sleep disruption, difficulty concentrating, fatigue, and irritability — appear in both depression and anxiety. The full PHQ-9 and GAD-7 allow a trained clinician to differentiate the pattern and weight of symptoms more accurately than either tool alone.
            </p>
          </section>

          {/* Which tool is right */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Which tool should I take — PHQ-9 or GAD-7?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The short answer: if you are uncertain, take both. They take under 5 minutes combined. However, your symptom pattern can help guide the choice:
            </p>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-sky-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Use the PHQ-9 if your primary concern is depression</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Low mood or sadness most days, loss of interest in activities you used to enjoy, fatigue, feelings of worthlessness or hopelessness, changes in sleep or appetite, or thoughts of not wanting to be alive. These symptoms align more closely with the PHQ-9&apos;s depression construct.
                </p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Use the GAD-7 if your primary concern is anxiety</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Persistent excessive worry that you cannot control, feeling on edge or keyed up, physical tension, restlessness, irritability, or fear that something bad will happen. These symptoms align more closely with the GAD-7&apos;s anxiety construct.
                </p>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">Take both if you are unsure or have mixed symptoms</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Sleep problems, difficulty concentrating, fatigue, and irritability overlap both constructs. If you are not sure whether what you are feeling is depression, anxiety, or both, taking both tools gives you a more complete picture to discuss with a healthcare provider.
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              No screening tool can replace clinical judgment. These results are most useful as a structured starting point for a conversation with a qualified mental health professional or primary care provider.
            </p>
          </section>

          {/* Scoring */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What do the scores mean on each tool?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Both tools use the same 0–3 frequency scale for individual items and share a ≥10 clinical cutoff for the moderate severity band, but the total score ranges differ (PHQ-9: 0–27; GAD-7: 0–21) because of the different number of items.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-4">
              <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg p-5">
                <h3 className="font-semibold text-sky-800 dark:text-sky-300 mb-3">PHQ-9 Severity Levels</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><span className="font-medium text-slate-700 dark:text-slate-300">0–4:</span> Minimal depression</li>
                  <li><span className="font-medium text-slate-700 dark:text-slate-300">5–9:</span> Mild depression</li>
                  <li><span className="font-medium text-slate-700 dark:text-slate-300">10–14:</span> Moderate depression</li>
                  <li><span className="font-medium text-slate-700 dark:text-slate-300">15–19:</span> Moderately severe depression</li>
                  <li><span className="font-medium text-slate-700 dark:text-slate-300">20–27:</span> Severe depression</li>
                </ul>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">Clinical cutoff: ≥10 warrants evaluation</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-5">
                <h3 className="font-semibold text-purple-800 dark:text-purple-300 mb-3">GAD-7 Severity Levels</h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li><span className="font-medium text-slate-700 dark:text-slate-300">0–4:</span> Minimal anxiety</li>
                  <li><span className="font-medium text-slate-700 dark:text-slate-300">5–9:</span> Mild anxiety</li>
                  <li><span className="font-medium text-slate-700 dark:text-slate-300">10–14:</span> Moderate anxiety</li>
                  <li><span className="font-medium text-slate-700 dark:text-slate-300">15–21:</span> Severe anxiety</li>
                </ul>
                <p className="text-xs text-slate-500 dark:text-slate-500 mt-3">Clinical cutoff: ≥10 warrants evaluation</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Scores in the mild range (PHQ-9: 5–9; GAD-7: 5–9) may warrant watchful waiting and lifestyle interventions. Scores in the moderate range or above warrant clinical evaluation. All results should be interpreted alongside other clinical information — a high score alone does not constitute a diagnosis.
            </p>
          </section>

          {/* When should clinicians use each */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">When do clinicians use the PHQ-9 and GAD-7 together versus separately?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Clinical guidelines from organizations including the{" "}
              <a href="https://www.nimh.nih.gov/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">National Institute of Mental Health (NIMH)</a>{" "}
              and the{" "}
              <a href="https://www.uspreventiveservicestaskforce.org/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">U.S. Preventive Services Task Force (USPSTF)</a>{" "}
              support routine screening for both depression and anxiety in primary care. The USPSTF recommends screening for depression in adults and anxiety in adults 64 and younger.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              In practice, clinicians typically use both tools together during initial intake, periodic monitoring (e.g., every 4–8 weeks during treatment), and at treatment transitions. Using both allows clinicians to track whether interventions are improving depression, anxiety, or both — and to adjust treatment accordingly.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              In settings where time is extremely limited, the PHQ-4 serves as a 2-minute triage tool. Any positive PHQ-4 result is then followed up with the full PHQ-9 and/or GAD-7 to establish a more precise symptom profile before clinical decision-making.
            </p>
          </section>

          {/* Citations */}
          <section className="mb-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Sources &amp; Further Reading</h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. <em>J Gen Intern Med.</em> 2001;16(9):606–613.</li>
              <li>Spitzer RL, Kroenke K, Williams JBW, Löwe B. A brief measure for assessing generalized anxiety disorder. <em>Arch Intern Med.</em> 2006;166(10):1092–1097.</li>
              <li><a href="https://www.phqscreeners.com/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">PHQscreeners.com</a> — Official PHQ and GAD instruments, scoring, and instructions.</li>
              <li><a href="https://www.samhsa.gov/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">SAMHSA.gov</a> — National Helpline and behavioral health screening resources.</li>
              <li>U.S. Preventive Services Task Force. Screening for Anxiety in Adults (2023). <a href="https://www.uspreventiveservicestaskforce.org/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">uspreventiveservicestaskforce.org</a></li>
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
                <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  PHQ-9 Depression Screening →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 9-question depression screening tool. Takes about 2 minutes.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  GAD-7 Anxiety Screening →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 7-question anxiety screening tool. Takes about 1–2 minutes.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  DASS-21 — Depression, Anxiety &amp; Stress →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Measures depression, anxiety, and stress simultaneously across 21 items.
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

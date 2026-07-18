import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";

const PAGE_URL = `${SITE_URL}/phq-2-to-phq-9-when-to-escalate`;

export const metadata: Metadata = createMetadata({
  path: "/phq-2-to-phq-9-when-to-escalate",
  title: "PHQ-2 to PHQ-9: When to Escalate from the Short to the Full Screen",
  description:
    "The PHQ-2 is a 2-question triage screen. A score of 3 or higher triggers escalation to the full PHQ-9. Learn what the PHQ-2 measures, when to move to the PHQ-9, and how clinicians use this two-step protocol.",
  keywords: [
    "PHQ-2 to PHQ-9",
    "when to escalate PHQ-2",
    "PHQ-2 positive follow up",
    "PHQ-2 vs PHQ-9",
    "PHQ-2 score 3",
    "PHQ-2 cutoff",
    "escalate depression screening",
    "PHQ-2 PHQ-9 protocol",
    "two step depression screen",
    "PHQ-2 meaning",
  ],
  openGraph: {
    title: "PHQ-2 to PHQ-9: When to Escalate from the Short to the Full Screen",
    description:
      "PHQ-2 ≥3 triggers escalation to the full PHQ-9. Learn what the PHQ-2 measures, what a positive screen means, and how clinicians use the two-step protocol.",
    url: PAGE_URL,
    type: "article",
  },
});

const FAQ_DATA = [
  {
    question: "What is the PHQ-2?",
    answer:
      "The PHQ-2 (Patient Health Questionnaire-2) is a 2-item ultra-brief depression screen derived from the first two questions of the full PHQ-9. It asks: (1) Over the last two weeks, how often have you been bothered by little interest or pleasure in doing things? (2) How often have you been feeling down, depressed, or hopeless? Each item is rated 0–3, giving a total score of 0–6. It is designed for rapid population-level triage, not comprehensive assessment.",
  },
  {
    question: "What PHQ-2 score indicates escalation to the PHQ-9?",
    answer:
      "A PHQ-2 score of 3 or higher is the standard cutoff for positive screening and should trigger administration of the full PHQ-9. Research shows that a PHQ-2 score ≥3 has sensitivity of approximately 83% and specificity of 90% for major depressive disorder in primary care populations. Some guidelines use a lower threshold of ≥2 for higher-risk populations, but ≥3 is the most widely cited clinical standard.",
  },
  {
    question: "What does a PHQ-2 score of 1 or 2 mean?",
    answer:
      "A PHQ-2 score of 1–2 is below the standard escalation threshold of 3. This suggests the person may have minimal or no significant depressive symptoms at the time of screening. However, the PHQ-2 is not designed to rule out depression definitively, it is a triage tool. A clinician may still choose to administer the full PHQ-9 based on clinical judgment, patient history, or expressed concern, even if the PHQ-2 score is below 3.",
  },
  {
    question: "Can the PHQ-2 replace the PHQ-9?",
    answer:
      "No. The PHQ-2 cannot replace the PHQ-9 because it only measures the two core depressive symptoms (anhedonia and depressed mood) and does not assess the remaining 7 symptom domains, sleep, fatigue, appetite, self-worth, concentration, psychomotor changes, or suicidal ideation. The PHQ-2 tells you whether further screening is warranted; the PHQ-9 tells you the full clinical picture, including a direct suicidality item and a severity score that guides treatment decisions.",
  },
  {
    question: "How sensitive and specific is the PHQ-2 as a screening tool?",
    answer:
      "At a cutoff of ≥3, the PHQ-2 has approximately 83% sensitivity and 90% specificity for major depressive disorder in primary care settings (Löwe et al., 2005; Kroenke et al., 2003). This means roughly 17% of true major depressive disorder cases will be missed by the PHQ-2 alone (false negatives), and 10% of PHQ-2-positive individuals may not have MDD (false positives). These characteristics make it appropriate for rapid population-level triage but not standalone diagnosis.",
  },
  {
    question: "Is the PHQ-2 used in primary care?",
    answer:
      "Yes. The PHQ-2 is widely used in primary care as a fast first-step screen, particularly when time is limited and the clinician wants to prioritize patients who need more detailed evaluation. It is included in many electronic health record templates and is used in federally qualified health centers, VA clinics, and large health system screening programs. When the PHQ-2 is positive, the clinical workflow typically continues with the full PHQ-9.",
  },
  {
    question: "Is there a similar two-step process for anxiety screening?",
    answer:
      "Yes. The GAD-2 (the first 2 items of the GAD-7) functions as a triage screen for anxiety in the same way the PHQ-2 functions for depression. The PHQ-4 combines all 4 items (PHQ-2 + GAD-2) into a single 4-question ultra-brief dual screen. A PHQ-4 score ≥3 on either the PHQ-2 or GAD-2 component suggests that the full PHQ-9 and/or GAD-7 should be administered. This makes the PHQ-4 an efficient single-instrument triage option for both depression and anxiety.",
  },
  {
    question: "Does a PHQ-2 score of 3 or higher mean I have depression?",
    answer:
      "No. A PHQ-2 score of 3 or higher means you may have significant depressive symptoms and should complete the full PHQ-9 for a more detailed assessment. Neither the PHQ-2 nor the PHQ-9 makes a clinical diagnosis, that requires a comprehensive evaluation by a qualified healthcare provider. The purpose of the PHQ-2 is to flag people who need more thorough evaluation, not to establish a diagnosis.",
  },
];

export default function Phq2ToPhq9Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "PHQ-2 to PHQ-9: When to Escalate from the Short to the Full Screen",
              description:
                "Explains what the PHQ-2 measures, the ≥3 cutoff that triggers escalation to the full PHQ-9, and how clinicians use this two-step depression screening protocol.",
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
              { name: "PHQ-2 to PHQ-9: When to Escalate", url: PAGE_URL },
            ])
          ),
        }}
      />

      <div className="min-h-screen bg-white dark:bg-slate-950">
        {/* Crisis Resources at Top */}
        <div
          role="alert"
          className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-sm leading-relaxed px-4 py-4"
        >
          <div className="max-w-2xl mx-auto">
            <p className="font-semibold mb-2">⚠️ If you are in crisis or having thoughts of self-harm:</p>
            <ul className="space-y-1 text-sm">
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong>, free, 24/7</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong>, free, 24/7</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong>, free, 24/7</li>
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Disclaimer */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              <strong>Medical Disclaimer:</strong> This content is for informational and educational purposes only. The PHQ-2 and PHQ-9 are screening tools, not diagnostic instruments. A high score does not constitute a clinical diagnosis. Please consult a qualified healthcare provider regarding any mental health concerns.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">
              PHQ Family Tools
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
              Clinical Protocol
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
              Evidence-Based
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            PHQ-2 to PHQ-9: When to Escalate from the Short to the Full Screen
          </h1>

          {/* Intro */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
              The PHQ-2 is a 2-question depression pre-screen; the{" "}
              <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">PHQ-9</Link>{" "}
              is the 9-question full screen, and the clinical escalation threshold is a PHQ-2 score of 3 or higher. The PHQ-2 is used as a rapid gate in time-limited settings; a positive result (score ≥ 3) means completing the full PHQ-9 is the recommended next step. This page is for anyone who has taken the PHQ-2 and wants to understand whether and how to escalate. The explanation below covers why the two-step protocol exists, what the PHQ-9 adds, and how to interpret the combined results.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Understanding this process helps you know what your PHQ-2 result means and what to do with it.
            </p>
          </div>

          <AnswerBlock
            what="An explanation of the PHQ-2, what the 3-point escalation cutoff means, and the clinical protocol for moving from the PHQ-2 triage screen to the full PHQ-9 assessment."
            who="Anyone who has received a PHQ-2 result and wants to understand what it means, or anyone who wants to understand how depression screening works in primary care settings."
            bottomLine="A PHQ-2 score of 3 or higher means significant depressive symptoms may be present and the full PHQ-9 should be completed. The PHQ-2 is a triage tool, not a diagnosis, and not a replacement for the full PHQ-9."
            lastUpdated="2026-05-06"
          />

          {/* What is the PHQ-2 */}
          <section className="mt-10 mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What is the PHQ-2?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The PHQ-2 is a 2-item ultra-brief depression screening tool derived from the first two questions of the full PHQ-9. It was developed to address the practical challenge of conducting depression screening in high-volume primary care settings where time does not permit administering the full 9-item PHQ-9 to every patient.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The two questions are:
            </p>
            <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg p-5 mb-4">
              <p className="text-sm font-semibold text-sky-900 dark:text-sky-200 mb-3">PHQ-2 Items (rated 0–3: Not at all / Several days / More than half the days / Nearly every day)</p>
              <ol className="space-y-2 text-sm text-slate-700 dark:text-slate-300 list-decimal list-inside">
                <li>Over the last 2 weeks, how often have you been bothered by little interest or pleasure in doing things?</li>
                <li>Over the last 2 weeks, how often have you been feeling down, depressed, or hopeless?</li>
              </ol>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              These two items, anhedonia and depressed mood, are the core features of major depressive disorder and are the minimum criteria for a clinical diagnosis under DSM-5. They are asked first in the PHQ-9 for this reason. The PHQ-2 extracts just these two items to serve as a rapid first-pass triage screen.
            </p>
          </section>

          {/* The escalation threshold */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What PHQ-2 score triggers escalation to the PHQ-9?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              A PHQ-2 score of <strong>3 or higher</strong> is the standard cutoff for a positive screen and the trigger to administer the full PHQ-9. This threshold is supported by validation studies showing sensitivity of approximately 83% and specificity of 90% for major depressive disorder (Löwe et al., 2005; Kroenke et al., 2003).
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">PHQ-2 Score</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">Interpretation</th>
                    <th className="text-left p-3 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">Recommended Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">0</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">No core depressive symptoms</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">No further screening indicated (unless clinical concern)</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-900/30">
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium">1–2</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Minimal/some symptoms present</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Below escalation threshold; monitor or discuss with provider</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-sky-700 dark:text-sky-400 font-semibold">3–6</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">Positive screen, significant symptoms may be present</td>
                    <td className="p-3 border border-slate-200 dark:border-slate-700 text-sky-700 dark:text-sky-400 font-semibold">Administer full PHQ-9; clinical evaluation recommended</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Some clinical guidelines lower the threshold to ≥2 in higher-risk populations (e.g., patients with chronic medical illness, oncology, postpartum), where the cost of missing a case is higher. However, the ≥3 threshold is the standard in general primary care.
            </p>
          </section>

          {/* Why escalate */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why is the PHQ-9 needed after a positive PHQ-2?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The PHQ-2 only asks about two of the nine DSM-5 criteria for major depressive disorder. A PHQ-2 score of 3 tells you that someone endorses significant anhedonia, depressed mood, or both, but it tells you nothing about the remaining symptoms that complete the diagnostic picture:
            </p>
            <ul className="space-y-2 text-slate-600 dark:text-slate-400 mb-4 list-disc list-inside text-sm">
              <li>Sleep disturbance (insomnia or hypersomnia)</li>
              <li>Fatigue or loss of energy</li>
              <li>Changes in appetite or weight</li>
              <li>Feelings of worthlessness or excessive guilt</li>
              <li>Difficulty concentrating or making decisions</li>
              <li>Psychomotor agitation or retardation</li>
              <li>Thoughts of death or suicide</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The full PHQ-9 captures all nine of these domains, produces a total severity score, and includes the critical suicidality item (question 9). This information is essential for clinical decision-making: determining severity, identifying which symptoms are most burdensome, and choosing between watchful waiting, brief counseling, medication, or specialist referral.
            </p>
            <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg p-4 mb-4">
              <p className="text-sm text-sky-900 dark:text-sky-200">
                <strong>Important:</strong> The PHQ-9 includes item 9, which asks about thoughts of being better off dead or of hurting yourself. This item is flagged by clinicians separately regardless of the total score. The PHQ-2 does not include this item, which is one reason a positive PHQ-2 always requires follow-up with the full PHQ-9.
              </p>
            </div>
          </section>

          {/* The broader PHQ family */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">How do the PHQ-2, PHQ-4, and PHQ-9 fit together?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              The PHQ family of instruments is designed as a nested system. Understanding the relationships between them helps clarify when each is most useful:
            </p>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-slate-300 dark:border-slate-600 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">PHQ-4 (4 items): Fastest dual triage</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Combines the 2 PHQ-2 items with the 2 GAD-2 items (the first two items of the GAD-7). Score ≥3 on either pair triggers escalation to the full PHQ-9 and/or GAD-7 respectively. Used when even faster screening is needed, or when anxiety and depression are both to be triaged simultaneously.
                </p>
              </div>
              <div className="border-l-4 border-sky-400 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">PHQ-2 (2 items): Depression triage only</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Screens for depressive symptoms only (anhedonia + low mood). A score ≥3 triggers escalation to the full PHQ-9. Used when depression is the specific concern or when the PHQ-4 is not in use.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-1">PHQ-9 (9 items): Comprehensive assessment and monitoring</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  The full instrument used for complete symptom characterization, severity scoring, treatment planning, and ongoing treatment outcome monitoring. Administered after a positive PHQ-2 or PHQ-4, or directly in settings where time permits.
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              This nested structure allows healthcare settings to balance efficiency and thoroughness, using the short forms for broad population screening and reserving the full instruments for patients who screen positive.
            </p>
          </section>

          {/* When the PHQ-2 misses things */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">When might the PHQ-2 miss a case the PHQ-9 would catch?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Because the PHQ-2 only captures two of nine depressive symptoms, it can miss people whose depression presents atypically, for example, those who do not endorse prominent low mood or anhedonia but do experience significant somatic symptoms (fatigue, sleep changes, appetite changes, psychomotor slowing) that would score positively on the full PHQ-9.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              Research suggests a false-negative rate of approximately 17% at the ≥3 cutoff, meaning roughly 1 in 6 people with major depressive disorder will not be flagged by the PHQ-2 alone. This is acceptable for a rapid triage tool but reinforces why clinical judgment should not rely solely on the PHQ-2, and why the full PHQ-9 is preferred when there is sufficient time.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Populations where the PHQ-2 may perform less well include older adults (who more commonly present with somatic rather than affective depression symptoms), people with medical comorbidities, and people with lower health literacy who may have difficulty interpreting the two specific symptom questions.
            </p>
          </section>

          {/* What to do with a positive PHQ-2 */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What should you do if your PHQ-2 score is 3 or higher?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              A PHQ-2 score of 3 or higher is a signal, not a verdict. Here are the recommended next steps:
            </p>
            <ol className="space-y-3 text-slate-600 dark:text-slate-400 mb-4 list-decimal list-inside">
              <li>
                <strong>Complete the full PHQ-9.</strong> This provides a complete symptom profile and severity score. You can take the{" "}
                <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">PHQ-9 screening tool</Link>{" "}
                free on this site.
              </li>
              <li>
                <strong>Share your results with a healthcare provider.</strong> Your primary care doctor, a therapist, or a mental health professional can conduct a full evaluation, put your scores in clinical context, and discuss next steps.
              </li>
              <li>
                <strong>Do not use the score to self-diagnose.</strong> A PHQ-2 score of 3+ means you should seek evaluation, not that you have been diagnosed with depression.
              </li>
            </ol>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              If you are experiencing significant distress right now, do not wait for an appointment, contact the <a href="https://www.samhsa.gov/" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold" rel="noopener noreferrer" target="_blank">SAMHSA National Helpline</a> (1-800-662-4357) for free confidential referrals to treatment and support services.
            </p>
          </section>

          {/* Citations */}
          <section className="mb-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3 text-sm">Sources &amp; Further Reading</h3>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>Kroenke K, Spitzer RL, Williams JB. The Patient Health Questionnaire-2: validity of a two-item depression screener. <em>Med Care.</em> 2003;41(11):1284–1292.</li>
              <li>Löwe B, Kroenke K, Gräfe K. Detecting and monitoring depression with a two-item questionnaire (PHQ-2). <em>J Psychosom Res.</em> 2005;58(2):163–171.</li>
              <li>Kroenke K, Spitzer RL, Williams JB. The PHQ-9: validity of a brief depression severity measure. <em>J Gen Intern Med.</em> 2001;16(9):606–613.</li>
              <li><a href="https://www.phqscreeners.com/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">PHQscreeners.com</a>, Official PHQ instruments and scoring guides.</li>
              <li><a href="https://www.uspreventiveservicestaskforce.org/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">U.S. Preventive Services Task Force</a>, Depression Screening in Adults recommendation.</li>
              <li><a href="https://www.nimh.nih.gov/" className="text-sky-600 dark:text-sky-400 hover:underline" rel="noopener noreferrer" target="_blank">NIMH</a>, National Institute of Mental Health.</li>
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
                  PHQ-9, Full Depression Screening →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  The complete 9-item depression screening tool. Take this after a positive PHQ-2 for a full symptom profile. Free, takes 2–3 minutes.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  GAD-7, Anxiety Screening →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Free, validated 7-question anxiety screen. Often administered alongside the PHQ-9 at clinical intake.
                </p>
              </li>
              <li className="pt-3 border-t border-slate-200 dark:border-slate-700">
                <Link href="/phq-9-vs-gad-7" className="text-sky-600 dark:text-sky-400 hover:underline font-semibold">
                  PHQ-9 vs. GAD-7: What&apos;s the Difference? →
                </Link>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  A full comparison of the two most commonly used clinical mental health screens.
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
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong>, free, 24/7</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong>, free, 24/7</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong>, free, 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

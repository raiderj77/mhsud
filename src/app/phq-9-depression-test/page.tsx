import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { PHQ9Client } from "./PHQ9Client";

const TOOL_URL = `${SITE_URL}/phq-9-depression-test`;

export const metadata: Metadata = createMetadata({
  path: "/phq-9-depression-test",
  title: "Free PHQ-9 Depression Test: 9-Question Self-Screen",
  description:
    "Take the free 9-question PHQ-9 depression self-screen in about 3 minutes. Get an instant score with private browser-only processing. Not a diagnosis.",
  keywords: [
    "phq-9 test", "phq 9 questionnaire", "depression screening test",
    "phq9", "phq-9", "depression test", "depression questionnaire",
    "depression self-assessment", "online depression checker", "depression screening",
    "patient health questionnaire 9", "phq9 online", "phq-9 score",
    "free depression test", "mental health screening",
  ],
  openGraph: {
    title: "Free PHQ-9 Depression Test: 9-Question Self-Screen",
    description: "Complete the published nine-item PHQ-9 depression self-screen in about 3 minutes. Private browser-only scoring with source and limitation notes.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the PHQ-9 test?", answer: "The PHQ-9 (Patient Health Questionnaire-9) is a published nine-question screening instrument that summarizes how often you report depression-related symptoms over the past two weeks. It was developed by Drs. Kroenke, Spitzer, and Williams and published in 2001 in the Journal of General Internal Medicine. A score can support a conversation with a healthcare professional, but it does not diagnose depression or determine treatment." },
  { question: "How is the PHQ-9 scored?", answer: "Each of the 9 questions is scored 0–3 (Not at all, Several days, More than half the days, Nearly every day). Total scores range from 0–27. Standard symptom-severity labels are minimal (0–4), mild (5–9), moderate (10–14), moderately severe (15–19), and severe (20–27). These labels summarize self-reported symptoms; they do not diagnose depression or determine treatment. The original 2001 validation study (Kroenke et al., JGIM) reported 88% sensitivity and 88% specificity for major depressive disorder at a cutoff score of 10." },
  { question: "Is the PHQ-9 questionnaire accurate?", answer: "The PHQ-9 has strong clinical validity. The original validation study reported 88% sensitivity and 88% specificity at a cutoff score of 10 for detecting major depression. Subsequent large-scale meta-analyses have broadly supported these figures, though accuracy can vary across populations. However, it is a screening tool, not a diagnostic instrument. A positive screen should be followed up with a licensed mental health professional for a proper evaluation." },
  { question: "Can I use the PHQ-9 test online for free?", answer: "Yes. This tool provides the full PHQ-9 questionnaire at no cost. Your responses and score are processed locally and are not intentionally sent to MindCheck Tools." },
  { question: "What should I do if my PHQ-9 score is high?", answer: "A high score (10 or above) suggests it may be helpful to speak with a doctor or mental health professional. This screening tool is a starting point for a conversation, not a final answer. If you are in crisis or having thoughts of self-harm, please contact the 988 Suicide and Crisis Lifeline by calling or texting 988." },
  { question: "Can this tool diagnose depression?", answer: "No. The PHQ-9 is a screening instrument, not a diagnostic tool. Only a qualified healthcare professional can diagnose depression through a comprehensive evaluation that considers your full medical history, symptoms, and circumstances." },
  { question: "How often should I take the PHQ-9?", answer: "Some people find it helpful to complete the PHQ-9 periodically (e.g., every 2–4 weeks) to notice patterns over time. You can share results with your healthcare provider to support ongoing conversations about your mental health." },
  { question: "How are my answers handled?", answer: "Questionnaire answers and scores are processed locally and are not intentionally sent to MindCheck Tools. Ordinary page requests can create hosting records, and prints, downloads, copies, sync, backups, or shared-device access are outside this boundary." },
];

export default function PHQ9Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...toolPageJsonLd({
              name: "PHQ-9 Depression Test",
              description: "A free browser-based implementation of the published nine-item PHQ-9 depression screening instrument. It provides a symptom score, not a diagnosis or treatment decision.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: "2026-08-02",
            }),
    }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQ_DATA)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "PHQ-9 Depression Test", url: TOOL_URL },
            ])
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
      ...medicalWebPageJsonLd({
              name: "PHQ-9 Depression Test",
              description: "A free browser-based implementation of the published nine-item PHQ-9 depression screening instrument. It provides a symptom score, not a diagnosis or treatment decision.",
              url: TOOL_URL,
              lastReviewed: "2026-08-02",
            }),
    }),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-8">
        <h1 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          PHQ-9 Depression Test
        </h1>
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mt-4">
          The PHQ-9 is a nine-item depression screening tool scored 0 to 27 and used in primary care and VA mental health settings. Its standard score bands label the severity of self-reported symptoms, not a diagnosis. Item nine asks about thoughts of being better off dead or of self-harm and requires separate safety assessment when endorsed.
        </p>
        <div className="card mt-6 p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
          <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            <li><strong>988 Suicide &amp; Crisis Lifeline</strong>, Call or text <strong>988</strong> (US, 24/7)</li>
            <li><strong>Crisis Text Line</strong>, Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
            <li><strong>SAMHSA National Helpline</strong>, <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
          </ul>
        </div>
        <a href="#screening" className="btn-primary inline-flex mt-6">
          Start the PHQ-9 self-check
        </a>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
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
        <time dateTime="2026-05-12">
          {new Date("2026-05-12T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="The PHQ-9 is a published nine-question self-report screener for depression-related symptoms during the past two weeks."
          who="Adults who want to summarize recent symptoms before deciding whether to discuss them with a qualified healthcare professional."
          bottomLine="The result is a symptom-range score you can share with a clinician. It does not diagnose depression or determine treatment."
          lastUpdated="2026-08-02"
        />
      </div>

      <div id="screening"><PHQ9Client faqData={FAQ_DATA} /></div>

      {/* SSR Clinical Content, visible to all crawlers */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-8 space-y-6">
        <section>
          <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">What the PHQ-9 Measures</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
            The PHQ-9 (Patient Health Questionnaire-9) was developed by Drs. Robert Spitzer, Janet Williams, and Kurt Kroenke and <a href="https://www.phqscreeners.com" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">released into the public domain</a> for unrestricted clinical and research use. Each of the nine questions corresponds to one DSM diagnostic criterion for major depressive disorder, asking how often you have experienced that symptom over the past two weeks.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            The nine symptoms assessed are: depressed mood, loss of interest or pleasure, sleep disturbance, fatigue, appetite changes, feelings of worthlessness or guilt, difficulty concentrating, psychomotor changes, and thoughts of death or self-harm. The <a href="https://pubmed.ncbi.nlm.nih.gov/11556941/" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">original 2001 validation study</a> (Kroenke et al., <em>Journal of General Internal Medicine</em>) reported 88% sensitivity and 88% specificity for major depressive disorder at a cutoff score of 10.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">PHQ-9 Scoring Ranges</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
            Total scores range from 0 to 27. Each item is scored 0 (not at all), 1 (several days), 2 (more than half the days), or 3 (nearly every day). The five severity ranges used in clinical practice are:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">0–4</span>
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Minimal depressive symptom range</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, few or no reported symptoms</span></div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">5–9</span>
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Mild depressive symptom range</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, consider professional evaluation if symptoms persist, worsen, or interfere with daily life</span></div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">10–14</span>
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Moderate depressive symptom range</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, consider professional evaluation; treatment decisions require individual clinical context</span></div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">15–19</span>
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Moderately severe depressive symptom range</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, seek professional evaluation; treatment decisions require individual clinical context</span></div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">20–27</span>
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Severe depressive symptom range</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, seek prompt professional evaluation; treatment decisions require individual clinical context</span></div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Question 9: Thoughts of Self-Harm</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Question 9 asks about thoughts of being better off dead or of hurting yourself. Any positive response triggers additional clinical assessment for suicide risk. If you are experiencing thoughts of self-harm, please contact the <strong>988 Suicide &amp; Crisis Lifeline</strong> (call or text <strong>988</strong>), text <strong>HOME</strong> to <strong>741741</strong> (Crisis Text Line), or reach the <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">SAMHSA National Helpline</a> at 1-800-662-4357 (free, confidential, 24/7).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">What Your Score Means and When to Seek Help</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
            The PHQ-9 is a screening tool, not a diagnostic test. A score of 10 or higher is widely used as a clinical threshold to prompt further evaluation, but context always matters more than the number. Symptoms lasting two or more weeks, difficulty functioning at work or in relationships, or hopelessness at any score level are reasons to speak with a healthcare provider. The <a href="https://www.nimh.nih.gov/health/topics/depression" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">National Institute of Mental Health</a> provides comprehensive depression information including treatment options and how to find professional support.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            For a deeper explanation of how clinicians interpret PHQ-9 scores, what the instrument can and cannot tell you, and how to bring results to a healthcare appointment, see our <Link href="/phq-9-score-interpretation" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 clinical guide</Link>.
          </p>
        </section>
      </div>

      {/* Clinical References */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-2">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Clinical References</h2>
        <ul className="text-sm text-neutral-500 dark:text-neutral-400 space-y-2 list-disc pl-5">
          <li>
            Kroenke, K., Spitzer, R. L., &amp; Williams, J. B. W. (2001). The PHQ-9: Validity of a brief depression severity measure.{" "}
            <em>Journal of General Internal Medicine</em>, 16(9), 606–613.{" "}
            <a href="https://doi.org/10.1046/j.1525-1497.2001.016009606.x" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 hover:underline">
              doi:10.1046/j.1525-1497.2001.016009606.x
            </a>
          </li>
          <li>
            Kroenke, K., Spitzer, R. L., Williams, J. B. W., &amp; Löwe, B. (2010). The Patient Health Questionnaire Somatic, Anxiety, and Depressive Symptom Scales.{" "}
            <em>General Hospital Psychiatry</em>, 32(4), 345–359.{" "}
            <a href="https://doi.org/10.1016/j.genhosppsych.2010.03.006" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 hover:underline">
              doi:10.1016/j.genhosppsych.2010.03.006
            </a>
          </li>
        </ul>
      </div>

      {/* Internal Links */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Screening Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/phq-9-score-interpretation" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Score Guide</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand what your depression score means</p>
          </Link>
          <Link href="/gad-7-score-interpretation" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Score Guide</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Anxiety screening interpretation and next steps</p>
          </Link>
          <Link href="/phq-4-anxiety-depression-screen" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-4 Quick Screen</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Brief combined depression and anxiety screening</p>
          </Link>
          <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Talk to Your Doctor</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">How to start a conversation about mental health</p>
          </Link>
          <Link href="/phq-9-vs-gad-7" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 vs. GAD-7</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Key differences between depression and anxiety screens</p>
          </Link>
          <Link href="/phq-2-to-phq-9-when-to-escalate" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-2 to PHQ-9 Escalation</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">When a 2-question screen triggers the full PHQ-9</p>
          </Link>
        </div>
      </div>
    </>
  );
}

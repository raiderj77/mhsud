import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, medicalWebPageJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { PHQ9Client } from "./PHQ9Client";

const TOOL_URL = `${SITE_URL}/phq-9-depression-test`;

export const metadata: Metadata = createMetadata({
  path: "/phq-9-depression-test",
  title: "PHQ-9 Depression Test | Free Screening Tool",
  description:
    "Take the free PHQ-9 depression screening test. 9 questions, instant results, clinically validated. Not a diagnosis.",
  keywords: [
    "phq-9 test", "phq 9 questionnaire", "depression screening test",
    "phq9", "phq-9", "depression test", "depression questionnaire",
    "depression self-assessment", "online depression checker", "depression screening",
    "patient health questionnaire 9", "phq9 online", "phq-9 score",
    "free depression test", "mental health screening",
  ],
  openGraph: {
    title: "PHQ-9 Depression Test | Free Screening Tool",
    description: "Take the free PHQ-9 depression screening test used by doctors worldwide. 9 questions, 3 minutes. Private, instant results.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is the PHQ-9 test?", answer: "The PHQ-9 (Patient Health Questionnaire-9) is a clinically validated 9-question screening tool used by doctors and mental health professionals to assess the severity of depression. Developed by Drs. Kroenke, Spitzer, and Williams, it was published in 2001 in the Journal of General Internal Medicine and has become one of the most widely used depression screening instruments in primary care worldwide. It measures how often you have experienced symptoms like low mood, sleep changes, and loss of interest over the past two weeks." },
  { question: "How is the PHQ-9 scored?", answer: "Each of the 9 questions is scored 0–3 (Not at all, Several days, More than half the days, Nearly every day). Total scores range from 0–27: 1–4 is minimal depression, 5–9 is mild, 10–14 is moderate, 15–19 is moderately severe, and 20–27 is severe depression. The original 2001 validation study (Kroenke et al., JGIM) reported 88% sensitivity and 88% specificity for major depressive disorder at a cutoff score of 10." },
  { question: "Is the PHQ-9 questionnaire accurate?", answer: "The PHQ-9 has strong clinical validity. The original validation study reported 88% sensitivity and 88% specificity at a cutoff score of 10 for detecting major depression. Subsequent large-scale meta-analyses have broadly supported these figures, though accuracy can vary across populations. However, it is a screening tool, not a diagnostic instrument. A positive screen should be followed up with a licensed mental health professional for a proper evaluation." },
  { question: "Can I use the PHQ-9 test online for free?", answer: "Yes. This tool provides the full PHQ-9 questionnaire at no cost. Your responses are processed entirely in your browser and are never stored or transmitted to any server." },
  { question: "What should I do if my PHQ-9 score is high?", answer: "A high score (10 or above) suggests it may be helpful to speak with a doctor or mental health professional. This screening tool is a starting point for a conversation, not a final answer. If you are in crisis or having thoughts of self-harm, please contact the 988 Suicide and Crisis Lifeline by calling or texting 988." },
  { question: "Can this tool diagnose depression?", answer: "No. The PHQ-9 is a screening instrument, not a diagnostic tool. Only a qualified healthcare professional can diagnose depression through a comprehensive evaluation that considers your full medical history, symptoms, and circumstances." },
  { question: "How often should I take the PHQ-9?", answer: "Some people find it helpful to complete the PHQ-9 periodically (e.g., every 2–4 weeks) to notice patterns over time. You can share results with your healthcare provider to support ongoing conversations about your mental health." },
  { question: "Is my data stored or shared?", answer: "No. All scoring happens entirely in your browser using client-side JavaScript. Your answers are never sent to any server, stored in any database, or shared with anyone. When you close or reset this page, your responses are gone." },
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
              description: "A free online implementation of the PHQ-9 Patient Health Questionnaire, the gold-standard 9-item depression screening tool used by clinicians worldwide.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: "2026-05-12",
            }),
      reviewedBy: { "@type": "Organization", "name": "Your Friendly Developer LLC" },
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
              description: "A free online implementation of the PHQ-9 Patient Health Questionnaire, the gold-standard 9-item depression screening tool used by clinicians worldwide.",
              url: TOOL_URL,
              lastReviewed: "2026-03-07",
            }),
      reviewedBy: { "@type": "Organization", "name": "Your Friendly Developer LLC" },
    }),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-8">
        <h1 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          PHQ-9 Depression Test
        </h1>
        <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mt-4">
          The PHQ-9 is a nine-item depression screening tool scored 0 to 27, used in primary care and VA mental health settings. Scores of 5 to 9 indicate mild symptoms, 10 to 14 moderate, 15 to 19 moderately severe, and 20 or higher severe depression. Item nine specifically screens for suicidal ideation.
        </p>
        <div className="card mt-6 p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20">
          <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
          <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            <li><strong>988 Suicide &amp; Crisis Lifeline</strong>, Call or text <strong>988</strong> (US, 24/7)</li>
            <li><strong>Crisis Text Line</strong>, Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
            <li><strong>SAMHSA National Helpline</strong>, <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
          </ul>
        </div>
      </div>
      <section className="sr-only">
        <h2>What Is the PHQ-9 Depression Screening?</h2>
        <h2>How Is the PHQ-9 Scored?</h2>
        <h2>What Do My PHQ-9 Results Mean?</h2>
        <p>PHQ-9 scores range from 0 to 27. Score 1–4: minimal depression. Score 5–9: mild depression. Score 10–14: moderate depression. Score 15–19: moderately severe depression. Score 20–27: severe depression.</p>
      </section>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools &middot; Your Friendly Developer LLC
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
          what="The PHQ-9 is a validated 9-question depression screening tool used by healthcare professionals worldwide."
          who="Anyone wanting to understand their depression symptoms, results should always be reviewed with a qualified healthcare provider."
          bottomLine="This 2-minute screening produces a standardized score you can share with your doctor or counselor, it is not a diagnosis."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools &middot; Your Friendly Developer LLC
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
        <time dateTime="2026-03-20">
          {new Date("2026-03-20T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
      </div>
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8" aria-label="Frequently Asked Questions">
        <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {FAQ_DATA.map((item) => (
            <div key={item.question}>
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">{item.question}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

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
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Minimal depression</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, few depressive symptoms; monitoring may be appropriate</span></div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">5–9</span>
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Mild depression</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, some symptoms; watchful waiting or lifestyle changes recommended</span></div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">10–14</span>
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Moderate depression</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, clinically significant symptoms; treatment discussion recommended</span></div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">15–19</span>
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Moderately severe depression</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, many symptoms at high frequency; active treatment typically needed</span></div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
              <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-12 flex-shrink-0">20–27</span>
              <div><span className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Severe depression</span><span className="text-sm text-neutral-500 dark:text-neutral-400">, severe symptom burden; active treatment and close follow-up recommended</span></div>
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
            For a deeper explanation of how clinicians interpret PHQ-9 scores, what the instrument can and cannot tell you, and how to bring results to a healthcare appointment, see our <Link href="/blog/phq-9-guide" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 clinical guide</Link>.
          </p>
        </section>
      </div>

<PHQ9Client faqData={FAQ_DATA} />

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
          <Link href="/am-i-depressed-quiz" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
            <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Am I Depressed? Quiz</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided depression self-check with context</p>
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

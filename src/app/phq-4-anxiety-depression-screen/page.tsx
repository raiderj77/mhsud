"use client";
import { useState } from "react";
import Link from "next/link";


const QUESTIONS = [
  {
    id: 1,
    cluster: "Anxiety",
    text: "Feeling nervous, anxious, or on edge",
  },
  {
    id: 2,
    cluster: "Anxiety",
    text: "Not being able to stop or control worrying",
  },
  {
    id: 3,
    cluster: "Depression",
    text: "Little interest or pleasure in doing things",
  },
  {
    id: 4,
    cluster: "Depression",
    text: "Feeling down, depressed, or hopeless",
  },
];

const OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

function getResult(total: number, anxiety: number, depression: number) {
  const level =
    total <= 2 ? "Minimal" :
    total <= 5 ? "Mild" :
    total <= 8 ? "Moderate" : "Severe";

  const anxietyFlag = anxiety >= 3;
  const depressionFlag = depression >= 3;

  return { level, anxietyFlag, depressionFlag };
}

export default function PHQ4Page() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = QUESTIONS.every((q) => answers[q.id] !== undefined);
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const anxiety = (answers[1] ?? 0) + (answers[2] ?? 0);
  const depression = (answers[3] ?? 0) + (answers[4] ?? 0);
  const result = submitted ? getResult(total, anxiety, depression) : null;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
      {/* Badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
          Clinically Validated (PHQ-4)
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
          4 Questions · ~1 min
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
          🔒 100% Private
        </span>
      </div>

      {/* H1 */}
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        PHQ-4: Ultra-Brief Anxiety &amp; Depression Screen
      </h1>

      <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
        The PHQ-4 is a validated 4-question screening tool that checks for both anxiety and
        depression in under 60 seconds. It combines the first 2 questions of the GAD-7 (anxiety)
        with the first 2 questions of the PHQ-9 (depression). Used in primary care, research,
        and population health settings worldwide.
      </p>

      {/* Clinical Disclaimer Banner */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6 text-sm text-amber-800 dark:text-amber-300">
        <strong>Educational tool only.</strong> This is a screening instrument — not a diagnosis.
        Answers are scored in your browser and never stored or transmitted.
      </div>

      {/* Questions */}
      {!submitted && (
        <div className="space-y-6 mb-8">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Over the <strong>last 2 weeks</strong>, how often have you been bothered by the following?
          </p>
          {QUESTIONS.map((q) => (
            <div key={q.id} className="border border-slate-200 dark:border-slate-700 rounded-xl p-5">
              <div className="flex items-start gap-2 mb-4">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                  {q.cluster}
                </span>
                <p className="text-slate-900 dark:text-white font-medium">{q.text}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt.value }))}
                    className={`px-3 py-2 rounded-lg text-sm border transition-colors ${
                      answers[q.id] === opt.value
                        ? "bg-sage-600 text-white border-sage-600"
                        : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-sage-400"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
            className="w-full py-3 px-6 rounded-xl font-semibold text-white bg-sage-600 hover:bg-sage-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            See My Results
          </button>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="mb-8">
          <div className="bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Your PHQ-4 Results
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-sage-700 dark:text-sage-400">{total}</div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">{result.level} Symptoms</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Total score out of 12</div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className={`rounded-lg p-3 border ${result.anxietyFlag ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800" : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"}`}>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Anxiety Subscale</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{anxiety}/6</div>
                {result.anxietyFlag && <div className="text-xs text-amber-700 dark:text-amber-400 mt-1">Score ≥3 suggests possible anxiety</div>}
              </div>
              <div className={`rounded-lg p-3 border ${result.depressionFlag ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800" : "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700"}`}>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">Depression Subscale</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{depression}/6</div>
                {result.depressionFlag && <div className="text-xs text-amber-700 dark:text-amber-400 mt-1">Score ≥3 suggests possible depression</div>}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">What to do next</h3>
            {total <= 2 && (
              <p className="text-sm text-slate-600 dark:text-slate-300">Your score suggests minimal symptoms. Continue monitoring if you have concerns, and use the full PHQ-9 or GAD-7 for a more detailed assessment.</p>
            )}
            {total >= 3 && total <= 5 && (
              <p className="text-sm text-slate-600 dark:text-slate-300">Your score suggests mild symptoms. Consider taking the full PHQ-9 or GAD-7 for a more detailed picture. Lifestyle factors like sleep, exercise, and social connection can help with mild symptoms.</p>
            )}
            {total >= 6 && (
              <p className="text-sm text-slate-600 dark:text-slate-300">Your score suggests moderate to severe symptoms. Consider speaking with your primary care doctor or a mental health professional. A full PHQ-9 or GAD-7 assessment would provide more detail about your specific symptoms.</p>
            )}
          </div>

          <button
            onClick={() => { setAnswers({}); setSubmitted(false); }}
            className="text-sm text-sky-600 dark:text-sky-400 hover:underline"
          >
            ← Retake the quiz
          </button>
        </div>
      )}

      {/* Score Interpretation Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          PHQ-4 Score Interpretation
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tl-lg">Total Score</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Level</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tr-lg">Suggested Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">0–2</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Minimal</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">No action needed; monitor if concerned</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">3–5</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Mild</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Consider full PHQ-9 or GAD-7 assessment</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">6–8</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Moderate</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Consider speaking with a healthcare provider</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">9–12</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Severe</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Professional evaluation recommended</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          Subscale: Anxiety score ≥3 or Depression score ≥3 suggests possible disorder in that domain.
          Source: Kroenke K, Spitzer RL, Williams JBW, Löwe B. (2009). <em>Psychosomatics</em>, 50(6):613–621.
        </p>
      </div>

      {/* Crisis Resources */}
      <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
          Crisis Resources
        </h2>
        <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
          <li>
            <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text{" "}
            <strong>988</strong> — free, 24/7, confidential
          </li>
          <li>
            <strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong>
          </li>
        </ul>
      </div>

      {/* Clinical Disclaimer */}
      <div className="mb-6">
        <p className="text-sm text-slate-500 dark:text-slate-400 italic">
          This screening tool is for educational purposes only — it is not a diagnosis. Only a
          licensed healthcare professional can diagnose anxiety or depression. Your responses are
          processed entirely in your browser and are never stored or transmitted.
        </p>
      </div>

      {/* Author Bio */}
      <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          <strong>Reviewed by a Certified Drug and Alcohol Counselor (CADC-II)</strong> with 11 years
          of clinical experience in substance abuse and mental health counseling.
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
          Last reviewed: March 2026
        </p>
      </div>

      {/* Internal Links */}
      <div className="flex flex-wrap gap-3 mb-8 text-sm">
        <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
          Full PHQ-9 Depression Test →
        </Link>
        <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
          Full GAD-7 Anxiety Test →
        </Link>
        <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline">
          DASS-21 (Depression + Anxiety + Stress) →
        </Link>
        <Link href="/am-i-depressed-quiz" className="text-sky-600 dark:text-sky-400 hover:underline">
          Am I Depressed Quiz →
        </Link>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";

const TOOL_URL = `${SITE_URL}/am-i-depressed-quiz`;

export const metadata: Metadata = createMetadata({
  path: "/am-i-depressed-quiz",
  title: "Am I Depressed? Free Quiz | PHQ-9 Depression Self-Check",
  description:
    "Wondering 'am I depressed?' Take our free, private PHQ-9 quiz — the same tool used by doctors worldwide. 9 questions, instant results, no sign-up.",
  keywords: [
    "am i depressed quiz", "am i depressed test", "do i have depression quiz",
    "depression quiz free", "am i depressed", "depression self test",
    "am i depressed or just sad", "how to know if you are depressed",
    "depression symptoms quiz", "free depression quiz", "online depression test",
    "depression check quiz", "signs of depression quiz", "depression test online free",
    "phq-9 quiz", "am i clinically depressed", "depression self-assessment",
    "quick depression test", "depression screening quiz", "mental health quiz depression",
  ],
  openGraph: {
    title: "Am I Depressed? Free Quiz | PHQ-9 Depression Self-Check",
    description:
      "Wondering if you might be depressed? Take our free, private 9-question PHQ-9 quiz. Used by doctors worldwide. Instant results, no sign-up.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "How do I know if I'm depressed or just sad?",
    answer:
      "Sadness is a normal emotion that typically passes within days and is usually linked to a specific event. Depression is a persistent pattern — lasting two weeks or more — that affects your mood, energy, sleep, appetite, concentration, and sense of self-worth. Depression can occur without an obvious cause and often doesn't lift on its own. If you've felt low, empty, or hopeless most of the day, nearly every day, for more than two weeks, it's worth speaking with a healthcare professional.",
  },
  {
    question: "What does this quiz actually measure?",
    answer:
      "This quiz uses the PHQ-9 (Patient Health Questionnaire-9), a validated 9-question screening tool developed by Drs. Spitzer, Williams, and Kroenke. It is one of the most widely used depression screening instruments in the world, used in primary care, hospitals, and research settings. It measures nine core symptoms of major depressive disorder over the past two weeks and produces a score from 0 to 27.",
  },
  {
    question: "What do the results mean?",
    answer:
      "Scores are interpreted as: 0–4 (minimal or no depression), 5–9 (mild depression), 10–14 (moderate depression), 15–19 (moderately severe depression), and 20–27 (severe depression). A score of 10 or above is typically used as a threshold for further clinical evaluation. Remember: this quiz is a screening tool, not a diagnosis. Only a licensed clinician can diagnose depression.",
  },
  {
    question: "Can I be depressed even if my life looks good from the outside?",
    answer:
      "Absolutely. Depression is a medical condition, not a response to circumstances. People with stable jobs, loving relationships, and comfortable lives can experience clinical depression. Depression involves changes in brain chemistry, not just life events. This is one reason it's important to take symptoms seriously regardless of whether you think you 'have a reason' to feel this way.",
  },
  {
    question: "What should I do if my score suggests depression?",
    answer:
      "If your score is 10 or above, consider scheduling an appointment with your primary care doctor or a mental health professional. Depression is one of the most treatable mental health conditions — effective options include therapy (especially CBT), medication, lifestyle changes, and support groups. If you are having thoughts of suicide or self-harm, please contact the 988 Suicide and Crisis Lifeline immediately by calling or texting 988.",
  },
  {
    question: "Is this quiz private?",
    answer:
      "Yes. Your answers are scored entirely in your browser. Nothing is sent to any server, stored in a database, or connected to your identity. There is no account, no login, and no way for anyone to see your results.",
  },
];

export default function AmIDepressedQuizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Am I Depressed? Free Quiz | PHQ-9 Depression Self-Check",
              description:
                "A free, private depression quiz using the clinically validated PHQ-9. 9 questions, instant results.",
              url: TOOL_URL,
              datePublished: "2026-03-08",
              dateModified: "2026-03-08",
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
              { name: "PHQ-9 Depression Test", url: `${SITE_URL}/phq-9-depression-test` },
              { name: "Am I Depressed Quiz", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (PHQ-9)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            9 Questions · ~2 min
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
            🔒 100% Private
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Am I Depressed? Free Quiz
        </h1>

        {/* Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Something feels off. Maybe you&apos;ve been waking up already tired, going through
            the motions of your day without really being in it. Maybe the things that used to
            bring you joy feel flat now. Maybe you&apos;ve been asking yourself: <em>is this
            just a rough patch, or is something actually wrong?</em>
          </p>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            This free quiz uses the <strong>PHQ-9</strong> — the same 9-question screening
            tool used by doctors in primary care offices around the world. It won&apos;t give
            you a diagnosis, but it will give you a clearer picture of what you&apos;re
            experiencing and whether it&apos;s worth talking to someone about.
          </p>
          <p className="text-slate-600 dark:text-slate-300">
            Your answers are scored entirely in your browser. Nothing is stored or shared.
          </p>
        </div>

        {/* The Tool */}
        <PHQ9Client faqData={FAQ_DATA} />

        {/* What the Results Mean */}
        <div className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Understanding Your Score
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tl-lg">Score</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Level</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 rounded-tr-lg">Suggested Next Step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">0–4</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Minimal / None</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">No action needed; monitor if symptoms change</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">5–9</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Mild</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Watchful waiting; consider lifestyle changes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">10–14</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Moderate</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Consider speaking with a doctor or therapist</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">15–19</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Moderately Severe</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Active treatment recommended</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">20–27</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Severe</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-300">Immediate professional evaluation recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Signs of Depression Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Common Signs of Depression
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Depression shows up differently in different people. Some common signs include:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Persistent low mood or emptiness",
              "Loss of interest in things you used to enjoy",
              "Fatigue and low energy most of the time",
              "Changes in sleep (too much or too little)",
              "Changes in appetite or weight",
              "Difficulty concentrating or making decisions",
              "Feelings of worthlessness or excessive guilt",
              "Moving or speaking more slowly than usual",
              "Withdrawing from friends and family",
              "Thoughts of death or suicide",
            ].map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg px-4 py-3"
              >
                <span className="text-sage-600 dark:text-sage-400 mt-0.5 shrink-0">•</span>
                <span className="text-sm text-slate-700 dark:text-slate-300">{sign}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-3 italic">
            A clinical diagnosis of major depressive disorder requires at least 5 of these symptoms
            present most of the day, nearly every day, for at least two weeks — and at least one
            must be depressed mood or loss of interest.
          </p>
        </div>

        {/* FAQ Section */}
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
              <strong>Crisis Text Line:</strong> Text <strong>HOME to 741741</strong> — free, 24/7
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This quiz is for educational and informational purposes only — it is not a diagnosis.
            Only a licensed healthcare professional can diagnose depression. Your responses are
            processed entirely in your browser and are never stored or transmitted.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Depression Test →
          </Link>
          <Link href="/phq-9-score-interpretation" className="text-sky-600 dark:text-sky-400 hover:underline">
            PHQ-9 Score Guide →
          </Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
          <Link href="/dass-21-depression-anxiety-stress" className="text-sky-600 dark:text-sky-400 hover:underline">
            DASS-21 (Depression + Anxiety + Stress) →
          </Link>
          <Link href="/blog/depression-screening-guide" className="text-sky-600 dark:text-sky-400 hover:underline">
            Depression Screening Guide →
          </Link>
        </div>
      </div>
    </>
  );
}

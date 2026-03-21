"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";
import EmailCapture from "@/components/EmailCapture";


/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Item {
  id: number;
  label: string;
  text: string;
  options: string[];
}

const ITEMS: Item[] = [
  {
    id: 1,
    label: "Sleep induction",
    text: "How long does it take you to fall asleep after turning off the lights?",
    options: [
      "No problem",
      "Slightly delayed",
      "Markedly delayed",
      "Very delayed or did not sleep at all",
    ],
  },
  {
    id: 2,
    label: "Awakenings during the night",
    text: "How often do you wake up during the night?",
    options: [
      "No problem",
      "Minor problem",
      "Considerable problem",
      "Serious problem or did not sleep at all",
    ],
  },
  {
    id: 3,
    label: "Final awakening earlier than desired",
    text: "Do you wake up earlier in the morning than you would like?",
    options: [
      "Not earlier",
      "A little earlier",
      "Markedly earlier",
      "Much earlier or did not sleep at all",
    ],
  },
  {
    id: 4,
    label: "Total sleep duration",
    text: "How would you describe your total amount of sleep?",
    options: [
      "Sufficient",
      "Slightly insufficient",
      "Markedly insufficient",
      "Very insufficient or did not sleep at all",
    ],
  },
  {
    id: 5,
    label: "Overall quality of sleep",
    text: "How would you rate the overall quality of your sleep?",
    options: [
      "Satisfactory",
      "Slightly unsatisfactory",
      "Markedly unsatisfactory",
      "Very unsatisfactory or did not sleep at all",
    ],
  },
  {
    id: 6,
    label: "Sense of well-being during the day",
    text: "How is your sense of well-being during the day?",
    options: [
      "Normal",
      "Slightly decreased",
      "Markedly decreased",
      "Very decreased",
    ],
  },
  {
    id: 7,
    label: "Functioning capacity during the day",
    text: "How would you describe your ability to function (physically and mentally) during the day?",
    options: [
      "Normal",
      "Slightly decreased",
      "Markedly decreased",
      "Very decreased",
    ],
  },
  {
    id: 8,
    label: "Sleepiness during the day",
    text: "How sleepy do you feel during the day?",
    options: [
      "None",
      "Mild",
      "Considerable",
      "Intense",
    ],
  },
];

interface Tier {
  label: string;
  range: string;
  color: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
  borderLight: string;
  borderDark: string;
  message: string;
}

const TIERS: Tier[] = [
  {
    label: "No Insomnia",
    range: "0\u20135",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-800",
    message:
      "Your score is below the insomnia threshold. Based on your responses, you do not appear to be experiencing significant sleep difficulties over the past month. This is a positive result. Good sleep is one of the strongest foundations for physical and mental health. If you notice changes in your sleep patterns, you can retake this screening at any time.",
  },
  {
    label: "Mild Insomnia",
    range: "6\u20139",
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/30",
    textLight: "text-amber-700",
    textDark: "dark:text-amber-300",
    borderLight: "border-amber-200",
    borderDark: "dark:border-amber-800",
    message:
      "Your score of 6 or higher meets the threshold for insomnia on the Athens Insomnia Scale. At this level, you appear to be experiencing mild but notable sleep difficulties that may be affecting your daytime well-being or functioning. Sleep difficulties at this level are common and often related to stress, life changes, or habits. Consider reviewing your sleep hygiene practices. If symptoms persist for more than a few weeks, speaking with a healthcare provider may be helpful.",
  },
  {
    label: "Moderate Insomnia",
    range: "10\u201315",
    color: "#f97316",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/30",
    textLight: "text-orange-700",
    textDark: "dark:text-orange-300",
    borderLight: "border-orange-200",
    borderDark: "dark:border-orange-800",
    message:
      "Your score suggests moderate insomnia. You are experiencing significant sleep difficulties that are likely affecting your daytime functioning, well-being, or both. Chronic insomnia at this level is associated with increased risk for depression, anxiety, cardiovascular problems, and impaired concentration. The most effective treatment for chronic insomnia is Cognitive Behavioral Therapy for Insomnia (CBT-I). Consider speaking with a healthcare provider about your sleep difficulties.",
  },
  {
    label: "Severe Insomnia",
    range: "16\u201324",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your score suggests severe insomnia. You appear to be experiencing major sleep difficulties that are substantially affecting your nighttime sleep and daytime functioning. At this level, insomnia is likely having a serious impact on your physical health, mental health, and daily life. Please consider reaching out to a healthcare provider. Effective treatments are available, including Cognitive Behavioral Therapy for Insomnia (CBT-I), which is recommended as the first-line treatment by medical guidelines. The support resources listed below are also available.",
  },
];

function getTier(score: number): Tier {
  if (score <= 5) return TIERS[0];
  if (score <= 9) return TIERS[1];
  if (score <= 15) return TIERS[2];
  return TIERS[3];
}

function itemColor(value: number): string {
  if (value === 0) return "#22c55e";
  if (value === 1) return "#f59e0b";
  if (value === 2) return "#f97316";
  return "#ef4444";
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function AISClient({ faqData }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const allAnswered = ITEMS.every((item) => answers[item.id] !== undefined);

  function handleAnswer(id: number, value: number) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    const idx = ITEMS.findIndex((item) => item.id === id);
    if (idx < ITEMS.length - 1) {
      setTimeout(() => {
        questionRefs.current[idx + 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const tier = getTier(totalScore);

  function handleSubmit() {
    if (!allAnswered) return;
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRetake() {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ---------------------------------------------------------------- */
  /*  Results View                                                     */
  /* ---------------------------------------------------------------- */
  if (showResults) {
    const isInsomnia = totalScore >= 6;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10" aria-live="polite">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your Insomnia Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Athens Insomnia Scale &middot; {ITEMS.length} items &middot; Past month &middot; Score 0&ndash;24
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${tier.bgLight} ${tier.bgDark} ${tier.borderLight} ${tier.borderDark}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {tier.label}
            </h2>
            <span className={`text-2xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {totalScore} / 24
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${(totalScore / 24) * 100}%`, backgroundColor: tier.color }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${tier.textLight} ${tier.textDark}`}>
            {tier.message}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* Insomnia follow-up */}
        {isInsomnia && totalScore >= 10 && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
              Further Screening May Be Helpful
            </h2>
            <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed mb-3">
              Insomnia frequently co-occurs with depression and anxiety. Screening for these may help clarify what is contributing to your sleep difficulties:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/phq-9-depression-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                PHQ-9 Depression Screen &rarr;
              </Link>
              <Link
                href="/gad-7-anxiety-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700 transition-colors"
              >
                GAD-7 Anxiety Screen &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Mild follow-up */}
        {isInsomnia && totalScore < 10 && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
            <h2 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-2">
              Consider Exploring Further
            </h2>
            <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
              Mild insomnia sometimes co-occurs with stress, low mood, or anxiety. These screenings may provide additional perspective:
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/phq-9-depression-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                PHQ-9 Depression Screen &rarr;
              </Link>
              <Link
                href="/k6-distress-scale"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                K6 Distress Scale &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Nighttime vs Daytime Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Item Breakdown
        </h2>

        <div className="mb-3">
          <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2">
            Nighttime Sleep (Items 1&ndash;5)
          </h3>
          <div className="space-y-3">
            {ITEMS.slice(0, 5).map((item) => {
              const val = answers[item.id] ?? 0;
              const pct = (val / 3) * 100;
              return (
                <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-0.5">{item.label}</p>
                      <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">{item.text}</p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-neutral-600 dark:text-neutral-300">
                      {val}/3
                    </span>
                  </div>
                  <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, backgroundColor: itemColor(val) }}
                    />
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {item.options[val]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2 mt-5">
            Daytime Consequences (Items 6&ndash;8)
          </h3>
          <div className="space-y-3">
            {ITEMS.slice(5).map((item) => {
              const val = answers[item.id] ?? 0;
              const pct = (val / 3) * 100;
              return (
                <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-0.5">{item.label}</p>
                      <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">{item.text}</p>
                    </div>
                    <span className="shrink-0 text-sm font-bold text-neutral-600 dark:text-neutral-300">
                      {val}/3
                    </span>
                  </div>
                  <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${pct}%`, backgroundColor: itemColor(val) }}
                    />
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {item.options[val]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <AdSlot position="results-middle" />

        {/* Score Guide */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Score Ranges
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {TIERS.map((t) => (
              <div key={t.label} className={`p-3 rounded-lg text-center ${t.bgLight} ${t.bgDark}`}>
                <p className={`text-xs font-bold ${t.textLight} ${t.textDark}`}>{t.label}</p>
                <p className={`text-xs ${t.textLight} ${t.textDark}`}>{t.range}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">
            6+ = Insomnia threshold (93% sensitivity, 85% specificity)
          </p>
        </div>

        {/* Sources & Further Reading */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources and Further Reading References</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                Soldatos, C. R., Dikeos, D. G., &amp; Paparrigopoulos, T. J. (2000). Athens Insomnia Scale: validation of an instrument based on ICD-10 criteria.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/11091029/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — AIS Validation</a>
              </li>
              <li>
                National Institute of Mental Health (NIMH). Sleep Disorders.{" "}
                <a href="https://www.nimh.nih.gov/health/topics/sleep-disorders" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Tools */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Related Mental Health Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/phq-9-depression-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">PHQ-9 Depression Self-Check &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">9-item validated depression screener</p>
            </Link>
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">7-item validated anxiety screener</p>
            </Link>
            <Link href="/k6-distress-scale" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">K6 Distress Scale &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">6-item psychological distress screening</p>
            </Link>
            <Link href="/dass-21-depression-anxiety-stress" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">DASS-21 &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Measure depression, anxiety, and stress together</p>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <button onClick={() => window.print()} className="px-5 py-2.5 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-sm font-medium">
            Print Results
          </button>
          <button onClick={handleRetake} className="px-5 py-2.5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-sand-100 dark:hover:bg-night-700 transition-colors text-sm font-medium">
            Retake Screening
          </button>
        </div>

        {/* Download Reflection Summary */}
        <ReflectionSummary
          toolName="Athens Insomnia Scale"
          toolUrl="https://mindchecktools.com/athens-insomnia-scale"
          score={totalScore}
          severityLabel={tier.label}
          scoreRange={tier.range}
          interpretation={tier.message}
          suggestion={isInsomnia ? "Consider speaking with a healthcare provider about your sleep difficulties. Cognitive Behavioral Therapy for Insomnia (CBT-I) is the recommended first-line treatment." : "Continue maintaining good sleep habits. If you notice changes in your sleep patterns, you can retake this screening at any time."}
          reflectionPrompts={REFLECTION_PROMPTS["athens-insomnia-scale"]?.prompts ?? []}
          responses={ITEMS.map((item) => ({
            question: `${item.label}: ${item.text}`,
            answer: `${item.options[answers[item.id] ?? 0]} (${answers[item.id] ?? 0}/3)`,
          }))}
        />

          {/* Email Capture */}
          <EmailCapture
            headline="Get a private copy of your results"
            subtext="We\u2019ll email you your score and what it means \u2014 your responses are never stored."
            buttonText="Send Private Copy"
            source="mindchecktools-results"
            leadMagnet="screening-score-copy"
            variant="inline"
          />


        {/* Reflection Prompts */}
        {REFLECTION_PROMPTS["athens-insomnia-scale"] && (
          <ReflectionPrompts
            toolName="Athens Insomnia Scale"
            prompts={REFLECTION_PROMPTS["athens-insomnia-scale"].prompts}
          />
        )}

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the Athens Insomnia Scale</h2>
          <p>
            The Athens Insomnia Scale (AIS) was developed by Constantine Soldatos, Dimitris Dikeos, and Alexandros Paparrigopoulos at the University of Athens Sleep Research Unit and published in 2000 in the <em>Journal of Psychosomatic Research</em>. It was designed as a brief, validated instrument to quantify insomnia severity based on the International Classification of Diseases (ICD-10) diagnostic criteria for insomnia.
          </p>
          <p>
            The scale has two components: five items measuring nighttime sleep problems (difficulty falling asleep, awakenings during the night, early morning awakening, total sleep duration, and overall sleep quality) and three items measuring daytime consequences (sense of well-being, functioning capacity, and sleepiness). This structure reflects the ICD-10 definition of insomnia, which requires both nighttime sleep difficulty and daytime impairment.
          </p>
          <h2>How Sleep Affects Mental Health</h2>
          <p>
            Sleep and mental health have a bidirectional relationship. Poor sleep increases the risk of developing <Link href="/phq-9-depression-test">depression</Link>, <Link href="/gad-7-anxiety-test">anxiety</Link>, and other mental health conditions, and mental health conditions frequently disrupt sleep. Research published in <em>The Lancet Psychiatry</em> has shown that treating insomnia with CBT-I can reduce symptoms of depression and anxiety, even when those conditions are not directly targeted.
          </p>
          <p>
            Chronic sleep deprivation impairs emotional regulation, concentration, decision-making, and immune function. The National Sleep Foundation recommends that adults get 7&ndash;9 hours of sleep per night, though individual needs vary. Quality of sleep matters as much as quantity &mdash; fragmented or light sleep can leave you feeling unrefreshed even after adequate hours in bed.
          </p>
          <h2>CBT-I: The Gold Standard Treatment</h2>
          <p>
            Cognitive Behavioral Therapy for Insomnia (CBT-I) is recommended as the first-line treatment for chronic insomnia by the American College of Physicians, the American Academy of Sleep Medicine, and the European Sleep Research Society. CBT-I is typically delivered over 6&ndash;8 sessions and includes sleep restriction, stimulus control, cognitive restructuring, sleep hygiene education, and relaxation techniques. Research consistently shows that CBT-I produces durable improvements in sleep that are maintained after treatment ends, unlike sleep medications which only work while being taken.
          </p>
          <h2>When to Seek Help</h2>
          <p>
            If your AIS score is 6 or higher and your sleep difficulties have persisted for more than a few weeks, consider speaking with a healthcare provider. You should also seek help if your sleep problems are affecting your ability to function at work, maintain relationships, or drive safely. The crisis resources listed below are available 24/7 if you are experiencing a mental health emergency.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The Athens Insomnia Scale is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a sleep disorder. A score of 6 or higher suggests insomnia that may warrant professional evaluation. This tool does not screen for sleep apnea, restless leg syndrome, or other medical sleep conditions. Always consult a qualified healthcare professional for persistent sleep difficulties. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
        </div>

        <ToolReviewerBio />

        {/* Crisis Resources */}
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Crisis &amp; Support Resources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
            <div>
              <p className="font-bold">988 Suicide &amp; Crisis Lifeline</p>
              <p>Call or text 988 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">SAMHSA National Helpline</p>
              <p>1-800-662-4357 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">Crisis Text Line</p>
              <p>Text HOME to 741741</p>
            </div>
            <div>
              <p className="font-bold">International</p>
              <p>findahelpline.com</p>
            </div>
          </div>
        </div>

        <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
          <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
          </Link>
        </div>

        <p className="text-xs text-center text-neutral-500 dark:text-neutral-400 mb-10">
          Your responses were scored entirely in your browser. Nothing was stored or transmitted.
        </p>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-sage-700 dark:hover:text-sage-400 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <span className="ml-2 text-neutral-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-4 pb-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Assessment Form View                                             */
  /* ---------------------------------------------------------------- */
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
        Athens Insomnia Scale
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        A validated measure of insomnia severity based on ICD-10 criteria (Soldatos et al., 2000).
      </p>
      <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8">
        8 questions &middot; ~2 minutes &middot; Past month &middot; Completely private
      </p>

      <AdSlot position="tool-top" />

      {/* Instructions */}
      <div className="mb-6 p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
        <p className="text-sm font-medium text-sage-700 dark:text-sage-300 text-center">
          Please rate each of the following items based on your sleep experience <strong>during the past month</strong>. Select the option that best describes your situation.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
          <span>{answeredCount} of {ITEMS.length} answered</span>
          <span>{Math.round((answeredCount / ITEMS.length) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-500 rounded-full transition-all duration-300"
            style={{ width: `${(answeredCount / ITEMS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4 mb-8">
        {ITEMS.map((item, idx) => (
          <div
            key={item.id}
            ref={(el) => { questionRefs.current[idx] = el; }}
            className={`p-4 rounded-xl border transition-colors ${
              answers[item.id] !== undefined
                ? "bg-white dark:bg-night-800 border-sage-200 dark:border-sage-800"
                : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
            }`}
          >
            <div className="flex items-start gap-3 mb-1">
              <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                answers[item.id] !== undefined
                  ? "bg-sage-500 text-white"
                  : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
              }`}>
                {answers[item.id] !== undefined ? "\u2713" : idx + 1}
              </span>
              <div>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-0.5">{item.label}</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 ml-10 mt-2">
              {item.options.map((opt, optIdx) => (
                <button
                  key={optIdx}
                  onClick={() => handleAnswer(item.id, optIdx)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium text-left transition-colors ${
                    answers[item.id] === optIdx
                      ? "bg-sage-600 text-white"
                      : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                  }`}
                >
                  <span className="font-bold mr-1.5">{optIdx}.</span> {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="text-center mb-10">
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`px-8 py-3 rounded-xl text-base font-semibold transition-colors ${
            allAnswered
              ? "bg-sage-600 text-white hover:bg-sage-700 shadow-sm"
              : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 cursor-not-allowed"
          }`}
        >
          See My Results
        </button>
        {!allAnswered && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
            Please answer all {ITEMS.length} questions to continue
          </p>
        )}
      </div>

      {/* YMYL Disclaimer */}
      <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        <p className="font-semibold mb-1">Clinical Disclaimer</p>
        <p>
          The Athens Insomnia Scale is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a sleep disorder. A score of 6 or higher suggests insomnia that may warrant professional evaluation. This tool does not screen for sleep apnea, restless leg syndrome, or other medical sleep conditions. Always consult a qualified healthcare professional for persistent sleep difficulties. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
        </p>
      </div>

      {/* Crisis Resources */}
      <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
          Crisis &amp; Support Resources
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
          <div>
            <p className="font-bold">988 Suicide &amp; Crisis Lifeline</p>
            <p>Call or text 988 &middot; 24/7</p>
          </div>
          <div>
            <p className="font-bold">SAMHSA National Helpline</p>
            <p>1-800-662-4357 &middot; 24/7</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
        Your responses are scored entirely in your browser. Nothing is stored or transmitted.
      </p>
    </div>
  );
}

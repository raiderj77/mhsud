"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Subscale = "fear" | "avoidance" | "physiological";

interface Item {
  id: number;
  text: string;
  subscale: Subscale;
}

const ITEMS: Item[] = [
  { id: 1,  text: "I am afraid of people in authority.", subscale: "fear" },
  { id: 2,  text: "I am bothered by blushing in front of people.", subscale: "physiological" },
  { id: 3,  text: "Parties and social events scare me.", subscale: "fear" },
  { id: 4,  text: "I avoid talking to people I don't know.", subscale: "avoidance" },
  { id: 5,  text: "Being criticized scares me a lot.", subscale: "fear" },
  { id: 6,  text: "I avoid doing things or speaking to people for fear of embarrassment.", subscale: "avoidance" },
  { id: 7,  text: "Sweating in front of people causes me distress.", subscale: "physiological" },
  { id: 8,  text: "I avoid going to parties.", subscale: "avoidance" },
  { id: 9,  text: "I avoid activities in which I am the center of attention.", subscale: "avoidance" },
  { id: 10, text: "Talking to strangers scares me.", subscale: "fear" },
  { id: 11, text: "I avoid having to give speeches.", subscale: "avoidance" },
  { id: 12, text: "I would do anything to avoid being criticized.", subscale: "avoidance" },
  { id: 13, text: "Heart palpitations bother me when I am around people.", subscale: "physiological" },
  { id: 14, text: "I am afraid of doing things when people might be watching.", subscale: "fear" },
  { id: 15, text: "Being embarrassed or looking stupid are among my worst fears.", subscale: "fear" },
  { id: 16, text: "I avoid speaking to anyone in authority.", subscale: "avoidance" },
  { id: 17, text: "Trembling or shaking in front of others is distressing to me.", subscale: "physiological" },
];

const SCALE_OPTIONS = [
  { value: 0, label: "Not at all" },
  { value: 1, label: "A little bit" },
  { value: 2, label: "Somewhat" },
  { value: 3, label: "Very much" },
  { value: 4, label: "Extremely" },
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
    label: "None to Mild",
    range: "0–20",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-800",
    message:
      "Your score suggests minimal to mild social anxiety. You may experience some discomfort in certain social situations, but it does not appear to be significantly affecting your daily life. If you notice social anxiety increasing or interfering with activities you want to do, you can retake this screening at any time.",
  },
  {
    label: "Moderate",
    range: "21–30",
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/30",
    textLight: "text-amber-700",
    textDark: "dark:text-amber-300",
    borderLight: "border-amber-200",
    borderDark: "dark:border-amber-800",
    message:
      "Your score suggests moderate social anxiety. You may be avoiding social situations, experiencing significant discomfort in performance or social settings, or dealing with physical symptoms like blushing or sweating. This level of social anxiety often responds well to treatment. Consider speaking with a healthcare provider or therapist about your experiences.",
  },
  {
    label: "Severe",
    range: "31–40",
    color: "#f97316",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/30",
    textLight: "text-orange-700",
    textDark: "dark:text-orange-300",
    borderLight: "border-orange-200",
    borderDark: "dark:border-orange-800",
    message:
      "Your score suggests severe social anxiety. Social situations likely cause significant distress and you may be avoiding many activities due to fear of embarrassment, judgment, or physical symptoms. Cognitive-behavioral therapy (CBT) and/or medication have strong evidence for treating social anxiety at this level. Please consider reaching out to a mental health professional.",
  },
  {
    label: "Very Severe",
    range: "41–50",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your score suggests very severe social anxiety. This level of social anxiety is likely significantly interfering with your work, relationships, and daily activities. Many people with social anxiety at this level benefit substantially from professional treatment. Evidence-based approaches include cognitive-behavioral therapy (CBT), exposure therapy, and medication. Please reach out to a healthcare provider or therapist.",
  },
  {
    label: "Extremely Severe",
    range: "51–68",
    color: "#dc2626",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your score suggests extremely severe social anxiety. Social situations are likely causing intense distress, and avoidance may be substantially limiting your life. Social anxiety disorder at this severity is treatable — many people experience significant improvement with evidence-based approaches like cognitive-behavioral therapy (CBT), exposure therapy, and/or medication. Please reach out to a mental health professional. The crisis resources listed below are also available if you need immediate support.",
  },
];

const SUBSCALE_META: Record<Subscale, {
  label: string;
  max: number;
  icon: string;
  color: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
  borderLight: string;
  borderDark: string;
  guidance: string;
}> = {
  fear: {
    label: "Fear",
    max: 24,
    icon: "😰",
    color: "#8b5cf6",
    bgLight: "bg-violet-50",
    bgDark: "dark:bg-violet-950/30",
    textLight: "text-violet-700",
    textDark: "dark:text-violet-300",
    borderLight: "border-violet-200",
    borderDark: "dark:border-violet-800",
    guidance:
      "Fear subscale items measure anxiety triggered by social situations — being judged, criticized, or the center of attention. High scores here suggest that the emotional experience of social anxiety is a primary concern. Cognitive-behavioral approaches that target anxious thoughts about social evaluation can be especially helpful.",
  },
  avoidance: {
    label: "Avoidance",
    max: 28,
    icon: "🚪",
    color: "#3b82f6",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-950/30",
    textLight: "text-blue-700",
    textDark: "dark:text-blue-300",
    borderLight: "border-blue-200",
    borderDark: "dark:border-blue-800",
    guidance:
      "Avoidance subscale items measure how much you stay away from social situations. While avoidance reduces anxiety in the short term, it maintains and often worsens social anxiety over time. Gradual exposure — slowly and repeatedly facing feared situations — is one of the most effective strategies for reducing avoidance.",
  },
  physiological: {
    label: "Physiological",
    max: 16,
    icon: "💓",
    color: "#ec4899",
    bgLight: "bg-pink-50",
    bgDark: "dark:bg-pink-950/30",
    textLight: "text-pink-700",
    textDark: "dark:text-pink-300",
    borderLight: "border-pink-200",
    borderDark: "dark:border-pink-800",
    guidance:
      "Physiological subscale items measure physical symptoms like blushing, sweating, trembling, and heart palpitations in social situations. These symptoms can feel very visible and distressing. Relaxation techniques, controlled breathing, and in some cases medication can help manage physiological symptoms while you work on the underlying anxiety.",
  },
};

function getTier(score: number): Tier {
  if (score <= 20) return TIERS[0];
  if (score <= 30) return TIERS[1];
  if (score <= 40) return TIERS[2];
  if (score <= 50) return TIERS[3];
  return TIERS[4];
}

function subscaleScore(answers: Record<number, number>, subscale: Subscale): number {
  return ITEMS
    .filter((item) => item.subscale === subscale)
    .reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
}

function itemColor(value: number): string {
  if (value <= 1) return "#22c55e";
  if (value <= 2) return "#f59e0b";
  return "#ef4444";
}

function subscaleBadgeClasses(subscale: Subscale): string {
  switch (subscale) {
    case "fear":
      return "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300";
    case "avoidance":
      return "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300";
    case "physiological":
      return "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300";
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function SpinClient({ faqData }: Props) {
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

  const fearScore = subscaleScore(answers, "fear");
  const avoidanceScore = subscaleScore(answers, "avoidance");
  const physScore = subscaleScore(answers, "physiological");

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
    const clinicalCutoff = totalScore >= 19;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10" aria-live="polite">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your SPIN Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Social anxiety · Past week · {ITEMS.length} items
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${tier.bgLight} ${tier.bgDark} ${tier.borderLight} ${tier.borderDark}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {tier.label}
            </h2>
            <span className={`text-2xl font-bold ${tier.textLight} ${tier.textDark}`}>
              {totalScore} / 68
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${(totalScore / 68) * 100}%`, backgroundColor: tier.color }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${tier.textLight} ${tier.textDark}`}>
            {tier.message}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* Clinical Cutoff Alert */}
        {clinicalCutoff && totalScore >= 21 && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
            <h2 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-2">
              Consider Further Evaluation
            </h2>
            <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
              Your score of {totalScore} is above the clinical cutoff of 19 for social anxiety disorder. The SPIN is a screening tool, not a clinical assessment — but this result suggests that speaking with a healthcare provider or therapist could be helpful. Social anxiety disorder is one of the most treatable anxiety disorders.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/gad-7-anxiety-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                GAD-7 Anxiety Screen →
              </Link>
              <Link
                href="/phq-9-depression-test"
                className="inline-block px-4 py-2 rounded-lg text-sm font-semibold bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                PHQ-9 Depression Screen →
              </Link>
            </div>
          </div>
        )}

        {/* Subscale Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Subscale Breakdown
        </h2>
        <div className="space-y-4 mb-8">
          {(["fear", "avoidance", "physiological"] as Subscale[]).map((key) => {
            const meta = SUBSCALE_META[key];
            const score = key === "fear" ? fearScore : key === "avoidance" ? avoidanceScore : physScore;
            const pct = (score / meta.max) * 100;
            return (
              <div key={key} className={`p-4 rounded-xl border ${meta.borderLight} ${meta.borderDark} ${meta.bgLight} ${meta.bgDark}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{meta.icon}</span>
                    <h3 className={`text-sm font-bold ${meta.textLight} ${meta.textDark}`}>{meta.label}</h3>
                  </div>
                  <span className={`text-sm font-bold ${meta.textLight} ${meta.textDark}`}>
                    {score} / {meta.max}
                  </span>
                </div>
                <div className="w-full h-2.5 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: meta.color }}
                  />
                </div>
                <p className={`text-xs leading-relaxed ${meta.textLight} ${meta.textDark}`}>
                  {meta.guidance}
                </p>
              </div>
            );
          })}
        </div>

        {/* Item Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Item Breakdown
        </h2>
        <div className="space-y-3 mb-8">
          {ITEMS.map((item) => {
            const val = answers[item.id] ?? 0;
            const pct = (val / 4) * 100;
            const chosen = SCALE_OPTIONS.find((o) => o.value === val);
            const meta = SUBSCALE_META[item.subscale];
            return (
              <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                      {item.text}
                    </p>
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold ${subscaleBadgeClasses(item.subscale)}`}>
                      {meta.label}
                    </span>
                  </div>
                  <span className="shrink-0 text-sm font-bold text-neutral-600 dark:text-neutral-300">
                    {val}/4
                  </span>
                </div>
                <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden mb-1">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: itemColor(val) }}
                  />
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {chosen?.label}
                </p>
              </div>
            );
          })}
        </div>

        <AdSlot position="results-middle" />

        {/* Score Guide */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Score Ranges
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {TIERS.map((t) => (
              <div key={t.label} className={`p-3 rounded-lg text-center ${t.bgLight} ${t.bgDark}`}>
                <p className={`text-xs font-bold ${t.textLight} ${t.textDark}`}>{t.label}</p>
                <p className={`text-xs ${t.textLight} ${t.textDark}`}>{t.range}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">
            19+ = clinical cutoff for social anxiety disorder (Connor et al., 2000)
          </p>
        </div>

        {/* Sources & Further Reading */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources &amp; Further Reading</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                Connor, K. M., Davidson, J. R., Churchill, L. E., et al. (2000). Psychometric properties of the Social Phobia Inventory (SPIN).{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/10836122/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — SPIN Validation</a>
              </li>
              <li>
                National Institute of Mental Health (NIMH). Social Anxiety Disorder.{" "}
                <a href="https://www.nimh.nih.gov/health/publications/social-anxiety-disorder-more-than-just-shyness" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">nimh.nih.gov</a>
              </li>
              <li>
                American Psychological Association. Anxiety.{" "}
                <a href="https://www.apa.org/topics/anxiety" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">apa.org</a>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Tools */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">7-item generalized anxiety screener</p>
            </Link>
            <Link href="/phq-9-depression-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">PHQ-9 Depression Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">9-item validated depression screener</p>
            </Link>
            <Link href="/dass-21-depression-anxiety-stress" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">DASS-21 →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Measure depression, anxiety, and stress together</p>
            </Link>
            <Link href="/k6-distress-scale" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">K6 Distress Scale →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Brief nonspecific psychological distress measure</p>
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
          toolName="SPIN Social Anxiety Self-Check"
          toolUrl="https://mindchecktools.com/spin-social-anxiety-test"
          score={totalScore}
          severityLabel={tier.label}
          scoreRange={tier.range}
          interpretation={tier.message}
          suggestion={clinicalCutoff ? "Consider speaking with a healthcare provider or therapist about your social anxiety symptoms. Cognitive-behavioral therapy (CBT) and/or medication have strong evidence for treating social anxiety." : "If you notice social anxiety increasing or interfering with activities you want to do, you can retake this screening at any time."}
          reflectionPrompts={REFLECTION_PROMPTS["spin-social-anxiety-test"]?.prompts ?? []}
          responses={ITEMS.map((item) => ({
            question: item.text,
            answer: SCALE_OPTIONS.find((o) => o.value === answers[item.id])?.label ?? "",
          }))}
        />

        {/* Reflection Prompts */}
        {REFLECTION_PROMPTS["spin-social-anxiety-test"] && (
          <ReflectionPrompts
            toolName="SPIN Social Anxiety Self-Check"
            prompts={REFLECTION_PROMPTS["spin-social-anxiety-test"].prompts}
          />
        )}

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the SPIN</h2>
          <p>
            The Social Phobia Inventory (SPIN) was developed in 2000 by Kathryn Connor, Jonathan Davidson, and colleagues at Duke University Medical Center. It was designed as a brief, comprehensive self-report measure that captures the three core dimensions of social anxiety disorder: fear, avoidance, and physiological symptoms. Since its publication, it has become one of the most widely used measures of social anxiety in both clinical practice and research.
          </p>
          <p>
            The SPIN was validated in a study comparing people with social anxiety disorder, people with other psychiatric conditions, and healthy controls. The total score of 19 was identified as the optimal cutoff, correctly classifying approximately 79% of participants. The five severity ranges (none/mild through extremely severe) provide additional clinical context beyond the binary cutoff.
          </p>
          <h2>Understanding Social Anxiety</h2>
          <p>
            Social anxiety disorder (also called social phobia) is characterized by intense fear or anxiety about social situations where you might be scrutinized, judged, or embarrassed. It goes beyond normal shyness — it can significantly interfere with work, school, relationships, and daily activities. Social anxiety disorder affects approximately 7% of the U.S. population and is one of the most common anxiety disorders.
          </p>
          <p>
            The three dimensions measured by the SPIN reflect different aspects of how social anxiety manifests. <strong>Fear</strong> is the emotional core — the anxiety and dread triggered by social or performance situations. <strong>Avoidance</strong> is the behavioral response — staying away from feared situations, which provides short-term relief but maintains the anxiety over time. <strong>Physiological symptoms</strong> like blushing, sweating, trembling, and heart palpitations can be especially distressing because they feel visible to others and can trigger a cycle of worry about the symptoms themselves.
          </p>
          <h2>SPIN vs. Other Anxiety Measures</h2>
          <p>
            The <Link href="/gad-7-anxiety-test">GAD-7</Link> measures generalized anxiety — persistent worry about many different things. The SPIN specifically measures social anxiety. Someone can have significant social anxiety but low generalized anxiety, or vice versa. The <Link href="/dass-21-depression-anxiety-stress">DASS-21</Link> provides a broader view of depression, anxiety, and stress. These tools complement each other and can be used together for a more complete picture.
          </p>
          <h2>Treatment for Social Anxiety</h2>
          <p>
            Social anxiety disorder is one of the most treatable anxiety conditions. Cognitive-behavioral therapy (CBT) has the strongest evidence base and typically involves identifying and challenging anxious thoughts about social situations, combined with gradual exposure to feared situations. Exposure therapy — systematically and repeatedly facing avoided situations — helps the brain learn that the feared outcomes are unlikely or manageable. Medications including SSRIs (like sertraline, paroxetine) and SNRIs (like venlafaxine) are also effective. Many people benefit from a combination of therapy and medication.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The SPIN is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have social anxiety disorder. A score of 19 or higher suggests social anxiety symptoms that may warrant professional evaluation. Always consult a qualified healthcare professional for mental health concerns.
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
              <p>Call or text 988 · 24/7</p>
            </div>
            <div>
              <p className="font-bold">SAMHSA National Helpline</p>
              <p>1-800-662-4357 · 24/7</p>
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
                  <span className="ml-2 text-neutral-400 group-open:rotate-180 transition-transform">▾</span>
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
        SPIN Social Phobia Inventory
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        A 17-item measure of social anxiety covering fear, avoidance, and physiological symptoms.
      </p>
      <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8">
        17 questions · ~3 minutes · Completely private · Connor et al. (2000)
      </p>

      <AdSlot position="tool-top" />

      {/* Instruction */}
      <div className="mb-6 p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
        <p className="text-sm font-medium text-sage-700 dark:text-sage-300 text-center">
          For each statement, indicate how much it has bothered you during the <strong>past week</strong>.
        </p>
      </div>

      {/* Progress — sticky */}
      <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
        <div className="flex justify-between text-xs font-semibold text-sage-600 dark:text-sage-400 mb-1">
          <span>{answeredCount} of {ITEMS.length} answered</span>
          <span>{Math.round((answeredCount / ITEMS.length) * 100)}%</span>
        </div>
        <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500"
            style={{ width: `${(answeredCount / ITEMS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Items */}
      <div className="space-y-4 mb-8">
        {ITEMS.map((item, idx) => {
          const meta = SUBSCALE_META[item.subscale];
          return (
            <div
              key={item.id}
              ref={(el) => { questionRefs.current[idx] = el; }}
              className={`p-4 rounded-xl border transition-colors ${
                answers[item.id] !== undefined
                  ? "bg-white dark:bg-night-800 border-sage-200 dark:border-sage-800"
                  : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  answers[item.id] !== undefined
                    ? "bg-sage-500 text-white"
                    : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
                }`}>
                  {answers[item.id] !== undefined ? "✓" : idx + 1}
                </span>
                <div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {item.text}
                  </p>
                  <span className={`inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold ${subscaleBadgeClasses(item.subscale)}`}>
                    {meta.label}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 ml-10">
                {SCALE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleAnswer(item.id, opt.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      answers[item.id] === opt.value
                        ? "bg-sage-600 text-white"
                        : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
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
          The SPIN is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have social anxiety disorder. A score of 19 or higher suggests social anxiety symptoms that may warrant professional evaluation. Always consult a qualified healthcare professional for mental health concerns. Reviewed by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II).
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
            <p>Call or text 988 · 24/7</p>
          </div>
          <div>
            <p className="font-bold">SAMHSA National Helpline</p>
            <p>1-800-662-4357 · 24/7</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
        Your responses are scored entirely in your browser. Nothing is stored or transmitted.
      </p>
    </div>
  );
}

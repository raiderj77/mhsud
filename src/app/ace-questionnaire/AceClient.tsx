"use client";

import { useState } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

interface AceItem {
  id: string;
  category: "abuse" | "neglect" | "dysfunction";
  label: string;
  text: string;
}

const ACE_ITEMS: AceItem[] = [
  {
    id: "emotional_abuse",
    category: "abuse",
    label: "Emotional Abuse",
    text: "Did a parent or other adult in the household often or very often swear at you, insult you, put you down, or humiliate you? Or act in a way that made you afraid that you might be physically hurt?",
  },
  {
    id: "physical_abuse",
    category: "abuse",
    label: "Physical Abuse",
    text: "Did a parent or other adult in the household often or very often push, grab, slap, or throw something at you? Or ever hit you so hard that you had marks or were injured?",
  },
  {
    id: "sexual_abuse",
    category: "abuse",
    label: "Sexual Abuse",
    text: "Did an adult or person at least 5 years older than you ever touch or fondle you or have you touch their body in a sexual way? Or attempt or actually have oral, anal, or vaginal intercourse with you?",
  },
  {
    id: "emotional_neglect",
    category: "neglect",
    label: "Emotional Neglect",
    text: "Did you often or very often feel that no one in your family loved you or thought you were important or special? Or that your family didn\u2019t look out for each other, feel close to each other, or support each other?",
  },
  {
    id: "physical_neglect",
    category: "neglect",
    label: "Physical Neglect",
    text: "Did you often or very often feel that you didn\u2019t have enough to eat, had to wear dirty clothes, and had no one to protect you? Or that your parents were too drunk or high to take care of you or take you to the doctor if you needed it?",
  },
  {
    id: "domestic_violence",
    category: "dysfunction",
    label: "Domestic Violence",
    text: "Was your mother (or stepmother) often or very often pushed, grabbed, slapped, or had something thrown at her? Or sometimes, often, or very often kicked, bitten, hit with a fist, or hit with something hard? Or ever repeatedly hit or threatened with a gun or knife?",
  },
  {
    id: "household_substance",
    category: "dysfunction",
    label: "Household Substance Abuse",
    text: "Did you live with anyone who was a problem drinker or alcoholic, or who used street drugs?",
  },
  {
    id: "household_mental_illness",
    category: "dysfunction",
    label: "Household Mental Illness",
    text: "Was a household member depressed or mentally ill, or did a household member attempt suicide?",
  },
  {
    id: "parental_separation",
    category: "dysfunction",
    label: "Parental Separation/Divorce",
    text: "Were your parents ever separated or divorced?",
  },
  {
    id: "incarcerated_member",
    category: "dysfunction",
    label: "Incarcerated Household Member",
    text: "Did a household member go to prison?",
  },
];

const CATEGORY_META: Record<string, { label: string; color: string }> = {
  abuse: { label: "Abuse", color: "rose" },
  neglect: { label: "Neglect", color: "amber" },
  dysfunction: { label: "Household Dysfunction", color: "violet" },
};

const RESILIENCE_FACTORS = [
  {
    title: "Supportive Relationships",
    text: "Having at least one stable, caring adult — a parent, teacher, coach, neighbor, or mentor — who provides safety and support.",
  },
  {
    title: "Social & Emotional Skills",
    text: "The ability to recognize and manage emotions, communicate effectively, solve problems, and build healthy relationships.",
  },
  {
    title: "Community Connection",
    text: "Feeling a sense of belonging — through school, faith communities, sports, clubs, cultural groups, or neighborhoods.",
  },
  {
    title: "Basic Needs Met",
    text: "Access to safe housing, nutritious food, healthcare, quality education, and economic stability.",
  },
  {
    title: "Sense of Purpose",
    text: "Feeling that your life has meaning and that you can make a positive difference — through work, volunteering, creativity, or helping others.",
  },
  {
    title: "Therapy & Healing",
    text: "Trauma-informed therapy (such as EMDR, CBT, or somatic experiencing) can help process childhood adversity and build new patterns at any age.",
  },
];

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function AceClient({ faqData }: Props) {
  const [phase, setPhase] = useState<"warning" | "questions" | "results">("warning");
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const allAnswered = ACE_ITEMS.every((q) => answers[q.id] !== undefined);
  const score = ACE_ITEMS.reduce((sum, q) => sum + (answers[q.id] === true ? 1 : 0), 0);
  const answeredCount = Object.keys(answers).length;

  function handleAnswer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit() {
    if (!allAnswered) return;
    setPhase("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRetake() {
    setAnswers({});
    setPhase("warning");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleBegin() {
    setPhase("questions");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* Score color helpers */
  const scoreColor = score === 0
    ? { bg: "bg-green-50 dark:bg-green-950/30", border: "border-green-200 dark:border-green-800", text: "text-green-700 dark:text-green-300", bar: "#22c55e" }
    : score <= 3
      ? { bg: "bg-amber-50 dark:bg-amber-950/30", border: "border-amber-200 dark:border-amber-800", text: "text-amber-700 dark:text-amber-300", bar: "#f59e0b" }
      : { bg: "bg-red-50 dark:bg-red-950/30", border: "border-red-200 dark:border-red-800", text: "text-red-700 dark:text-red-300", bar: "#ef4444" };

  /* ================================================================ */
  /*  Content Warning Gate                                             */
  /* ================================================================ */
  if (phase === "warning") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          ACE Questionnaire
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          Adverse Childhood Experiences · CDC-Kaiser Study · 10 Questions
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

        <AdSlot position="tool-top" />

        {/* Content Warning */}
        <div className="mb-8 p-6 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
          <div className="flex items-start gap-3 mb-4">
            <span className="shrink-0 text-2xl" role="img" aria-label="caution">&#9888;&#65039;</span>
            <div>
              <h2 className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-2">
                Content Warning
              </h2>
              <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
                This questionnaire asks about sensitive topics including abuse, neglect, and household dysfunction during childhood. Reflecting on these experiences can bring up difficult emotions or memories.
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
                <strong>There is no obligation to complete this questionnaire.</strong> If you are currently in crisis or working through trauma with a therapist, consider discussing this with them before proceeding.
              </p>
              <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">
                Your answers are completely private — they are scored in your browser and never sent anywhere.
              </p>
            </div>
          </div>
        </div>

        {/* What to expect */}
        <div className="mb-8 p-5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            What to Expect
          </h2>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5 text-sage-500">&#10003;</span>
              <span>10 yes/no questions about experiences before age 18</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5 text-sage-500">&#10003;</span>
              <span>Takes about 2-3 minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5 text-sage-500">&#10003;</span>
              <span>Your score includes resilience information — an ACE score is not destiny</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5 text-sage-500">&#10003;</span>
              <span>Trauma-specific resources are provided regardless of your score</span>
            </li>
          </ul>
        </div>

        {/* Begin button */}
        <div className="text-center mb-10">
          <button
            onClick={handleBegin}
            className="px-8 py-3 rounded-xl text-base font-semibold bg-sage-600 text-white hover:bg-sage-700 transition-colors shadow-sm"
          >
            I Understand — Begin Questionnaire
          </button>
        </div>

        {/* Crisis Resources */}
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Need Support Right Now?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
            <div>
              <p className="font-bold">988 Suicide &amp; Crisis Lifeline</p>
              <p>Call or text 988 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">Crisis Text Line</p>
              <p>Text HOME to 741741 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">RAINN Sexual Assault Hotline</p>
              <p>1-800-656-4673 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">Childhelp National Hotline</p>
              <p>1-800-422-4453 &middot; 24/7</p>
            </div>
          </div>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The ACE Questionnaire is an educational tool for self-reflection. It is not a clinical assessment, diagnosis, or prediction of future health outcomes. An ACE score describes categories of childhood adversity — it does not capture severity, duration, context, or resilience factors. Always consult a qualified healthcare professional for concerns related to childhood trauma. Reviewed by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II).
          </p>
        </div>

        <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
          Your responses are scored entirely in your browser. Nothing is stored or transmitted.
        </p>
      </div>
    );
  }

  /* ================================================================ */
  /*  Results                                                          */
  /* ================================================================ */
  if (phase === "results") {
    const abuseCount = ACE_ITEMS.filter((q) => q.category === "abuse" && answers[q.id]).length;
    const neglectCount = ACE_ITEMS.filter((q) => q.category === "neglect" && answers[q.id]).length;
    const dysfunctionCount = ACE_ITEMS.filter((q) => q.category === "dysfunction" && answers[q.id]).length;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your ACE Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Adverse Childhood Experiences Questionnaire &middot; CDC-Kaiser Study
        </p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${scoreColor.bg} ${scoreColor.border}`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${scoreColor.text}`}>
              {score === 0
                ? "No ACEs Reported"
                : score <= 3
                  ? "Some Adversity Reported"
                  : "Higher Adversity Reported"
              }
            </h2>
            <span className={`text-2xl font-bold ${scoreColor.text}`}>
              {score} / 10
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${(score / 10) * 100}%`, backgroundColor: scoreColor.bar }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${scoreColor.text}`}>
            {score === 0
              ? "You did not report any of the 10 categories of adverse childhood experiences. This does not mean your childhood was without challenges — the ACE questionnaire captures specific categories of adversity, not every difficult experience."
              : score <= 3
                ? "You reported some categories of childhood adversity. Research associates ACE scores in this range with some increased statistical risk for certain health outcomes — but risk is not certainty, and many protective factors can buffer the impact of early adversity."
                : "You reported a higher number of childhood adversity categories. Research associates higher ACE scores with increased statistical risk for certain health outcomes. However, an ACE score is not a prediction or a diagnosis. Resilience, healing, and protective factors matter enormously — and they can be built at any age."
            }
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* YOUR SCORE IS NOT YOUR DESTINY */}
        <div className="mb-8 p-6 rounded-xl border-2 bg-sage-50 dark:bg-sage-950/30 border-sage-200 dark:border-sage-800">
          <h2 className="text-xl font-bold text-sage-700 dark:text-sage-300 mb-3 text-center">
            Your Score Is Not Your Destiny
          </h2>
          <p className="text-sm text-sage-700 dark:text-sage-300 leading-relaxed mb-4 text-center max-w-2xl mx-auto">
            The ACE study identified statistical associations between childhood adversity and later health risks — but those are population-level statistics, not individual predictions. Many people with high ACE scores lead healthy, fulfilling lives. Resilience is real, and it can be developed at any age.
          </p>
          <h3 className="text-base font-bold text-sage-700 dark:text-sage-300 mb-3">
            CDC-Identified Protective Factors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RESILIENCE_FACTORS.map((factor) => (
              <div key={factor.title} className="p-3 bg-white dark:bg-night-800 rounded-lg border border-sage-200 dark:border-sage-800">
                <p className="text-sm font-semibold text-sage-700 dark:text-sage-300 mb-1">
                  {factor.title}
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {factor.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Category Breakdown
        </h2>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { key: "abuse", count: abuseCount, total: 3 },
            { key: "neglect", count: neglectCount, total: 2 },
            { key: "dysfunction", count: dysfunctionCount, total: 5 },
          ].map((cat) => {
            const meta = CATEGORY_META[cat.key];
            return (
              <div key={cat.key} className="p-3 rounded-lg bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-center">
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-1">
                  {meta.label}
                </p>
                <p className="text-lg font-bold text-neutral-800 dark:text-neutral-100">
                  {cat.count} / {cat.total}
                </p>
              </div>
            );
          })}
        </div>

        {/* Item-by-item */}
        <div className="space-y-3 mb-8">
          {ACE_ITEMS.map((item) => {
            const isYes = answers[item.id] === true;
            return (
              <div key={item.id} className={`p-4 rounded-xl border flex items-start gap-4 ${
                isYes
                  ? "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800"
                  : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
              }`}>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  isYes
                    ? "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                    : "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
                }`}>
                  {isYes ? "Y" : "N"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-neutral-700 dark:text-neutral-200">
                      {item.label}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {CATEGORY_META[item.category].label}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <AdSlot position="results-middle" />

        {/* What Your Score Means (and Doesn't Mean) */}
        <div className="mb-8 p-5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            What Your Score Means (and Does Not Mean)
          </h2>
          <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="shrink-0 text-green-500 mt-0.5 font-bold">&#10003;</span>
              <span><strong>It means:</strong> You experienced this many categories of childhood adversity as defined by the CDC-Kaiser study.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="shrink-0 text-green-500 mt-0.5 font-bold">&#10003;</span>
              <span><strong>It means:</strong> Research associates higher ACE scores with increased statistical risk for certain health outcomes at the population level.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="shrink-0 text-red-500 mt-0.5 font-bold">&#10007;</span>
              <span><strong>It does NOT mean:</strong> You are damaged, broken, or destined for poor health outcomes.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="shrink-0 text-red-500 mt-0.5 font-bold">&#10007;</span>
              <span><strong>It does NOT mean:</strong> Your childhood is fully captured by a number. The ACE questionnaire does not measure severity, duration, timing, or context.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="shrink-0 text-red-500 mt-0.5 font-bold">&#10007;</span>
              <span><strong>It does NOT mean:</strong> You cannot heal. Resilience is real, and it can be built at any stage of life through supportive relationships, therapy, and community.</span>
            </div>
          </div>
        </div>

        {/* Score Guide */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            ACE Score Ranges
          </h2>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 rounded-lg text-center bg-green-50 dark:bg-green-950/30">
              <p className="text-xs font-bold text-green-700 dark:text-green-300">0</p>
              <p className="text-xs text-green-700 dark:text-green-300">No ACEs reported</p>
            </div>
            <div className="p-3 rounded-lg text-center bg-amber-50 dark:bg-amber-950/30">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300">1–3</p>
              <p className="text-xs text-amber-700 dark:text-amber-300">Some adversity</p>
            </div>
            <div className="p-3 rounded-lg text-center bg-red-50 dark:bg-red-950/30">
              <p className="text-xs font-bold text-red-700 dark:text-red-300">4+</p>
              <p className="text-xs text-red-700 dark:text-red-300">Higher adversity</p>
            </div>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 text-center">
            These ranges are descriptive, not diagnostic. The ACE study did not define clinical cutoffs.
          </p>
        </div>

        {/* Next Steps */}
        <div className="mb-8 p-5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Possible Next Steps
          </h2>
          <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5 text-sage-500">&#8226;</span>
              <span><strong>Talk to a therapist</strong> — trauma-informed therapy (EMDR, CBT, somatic experiencing) can help process childhood adversity at any age</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5 text-sage-500">&#8226;</span>
              <span><strong>Share with your doctor</strong> — ACE-aware healthcare providers can consider your history as part of your overall health picture</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5 text-sage-500">&#8226;</span>
              <span><strong>Build protective factors</strong> — strong relationships, community connection, physical health, and stress management all build resilience</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="shrink-0 mt-0.5 text-sage-500">&#8226;</span>
              <span><strong>Learn more</strong> — the CDC&apos;s ACE prevention resources provide evidence-based strategies for individuals and communities</span>
            </li>
          </ul>
        </div>

        {/* Sources & Further Reading */}
        <section className="mb-8">
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">Sources &amp; Further Reading</h2>
          <div className="card p-5 sm:p-6">
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>
                Felitti, V. J., Anda, R. F., Nordenberg, D., et al. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults.{" "}
                <a href="https://pubmed.ncbi.nlm.nih.gov/9635069/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed — Original ACE Study</a>
              </li>
              <li>
                Centers for Disease Control and Prevention. Adverse Childhood Experiences (ACEs).{" "}
                <a href="https://www.cdc.gov/aces/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">cdc.gov</a>
              </li>
              <li>
                SAMHSA. Trauma and Violence.{" "}
                <a href="https://www.samhsa.gov/trauma-violence" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">samhsa.gov</a>
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
            <Link href="/pcl-5-ptsd-screening" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">PCL-5 PTSD Screening &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">20-item PTSD screening for current symptoms</p>
            </Link>
            <Link href="/phq-9-depression-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">PHQ-9 Depression Self-Check &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">9-item validated depression screener</p>
            </Link>
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">7-item validated anxiety screener</p>
            </Link>
            <Link href="/dass-21-depression-anxiety-stress" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">DASS-21 Depression/Anxiety/Stress &rarr;</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Screen all three in one assessment</p>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <button onClick={() => window.print()} className="px-5 py-2.5 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-sm font-medium">
            Print Results
          </button>
          <button onClick={handleRetake} className="px-5 py-2.5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-sand-100 dark:hover:bg-night-700 transition-colors text-sm font-medium">
            Retake Questionnaire
          </button>
        </div>

        {/* Download Reflection Summary */}
        <ReflectionSummary
          toolName="ACE Questionnaire"
          toolUrl="https://mindchecktools.com/ace-questionnaire"
          score={score}
          severityLabel={score === 0 ? "No ACEs Reported" : score <= 3 ? "Some Adversity Reported" : "Higher Adversity Reported"}
          scoreRange={score === 0 ? "0" : score <= 3 ? "1–3" : "4+"}
          interpretation={
            score === 0
              ? "You did not report any of the 10 categories of adverse childhood experiences."
              : score <= 3
                ? "You reported some categories of childhood adversity. Research associates ACE scores in this range with some increased statistical risk for certain health outcomes."
                : "You reported a higher number of childhood adversity categories. Research associates higher ACE scores with increased statistical risk for certain health outcomes."
          }
          suggestion="Consider sharing your results with a healthcare provider or trauma-informed therapist. An ACE score is not a prediction or destiny — resilience can be built at any age."
          reflectionPrompts={REFLECTION_PROMPTS["ace-questionnaire"]?.prompts ?? []}
          responses={ACE_ITEMS.map((item) => ({
            question: item.label,
            answer: answers[item.id] === true ? "Yes" : "No",
          }))}
        />

        {/* Reflection Prompts */}
        {REFLECTION_PROMPTS["ace-questionnaire"] && (
          <ReflectionPrompts
            toolName="ACE Questionnaire"
            prompts={REFLECTION_PROMPTS["ace-questionnaire"].prompts}
          />
        )}

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the ACE Study</h2>
          <p>
            The Adverse Childhood Experiences (ACE) Study was conducted from 1995 to 1997 by Dr. Vincent Felitti at Kaiser Permanente and Dr. Robert Anda at the Centers for Disease Control and Prevention (CDC). It was one of the largest investigations ever conducted on the links between childhood adversity and later-life health and wellbeing. The study involved over 17,000 participants, predominantly middle-class adults with health insurance in San Diego, California.
          </p>
          <p>
            The study found a graded dose-response relationship between the number of ACE categories experienced and the risk for numerous health outcomes later in life, including heart disease, cancer, chronic lung disease, liver disease, depression, substance use disorders, and suicide attempts. The more categories of adversity experienced, the higher the statistical risk — but this describes population-level trends, not individual destinies.
          </p>
          <h2>How ACEs Affect Health</h2>
          <p>
            The leading scientific explanation for the ACE-health connection is that prolonged childhood stress (toxic stress) can disrupt the developing brain and body&apos;s stress response systems. Chronic activation of the stress response in early life — without adequate buffering by supportive adult relationships — can affect brain architecture, immune function, hormonal systems, and even gene expression (epigenetics). These changes can increase vulnerability to both mental and physical health challenges later in life.
          </p>
          <h2>The Science of Resilience</h2>
          <p>
            Critically, the ACE study also showed that adversity is not destiny. Subsequent research has identified numerous protective factors — sometimes called &ldquo;positive childhood experiences&rdquo; (PCEs) — that can buffer the impact of ACEs. The single most powerful protective factor identified in the research is having at least one stable, supportive relationship with a caring adult during childhood. Other protective factors include social and emotional skill development, community belonging, and access to basic needs.
          </p>
          <p>
            Research also shows that resilience is not a fixed trait — it can be developed at any age. Trauma-informed therapy, supportive relationships, physical health practices, and community connection can all contribute to healing and growth, even decades after childhood adversity occurred.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The ACE Questionnaire is an educational tool for self-reflection. It is not a clinical assessment, diagnosis, or prediction of future health outcomes. An ACE score describes categories of childhood adversity — it does not capture severity, duration, context, or resilience factors. Always consult a qualified healthcare professional for concerns related to childhood trauma. Reviewed by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II).
          </p>
        </div>

        <ToolReviewerBio />

        {/* Crisis Resources — trauma-specific */}
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Need Support?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
            <div>
              <p className="font-bold">988 Suicide &amp; Crisis Lifeline</p>
              <p>Call or text 988 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">Crisis Text Line</p>
              <p>Text HOME to 741741 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">RAINN Sexual Assault Hotline</p>
              <p>1-800-656-4673 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">Childhelp National Hotline</p>
              <p>1-800-422-4453 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">SAMHSA National Helpline</p>
              <p>1-800-662-4357 &middot; 24/7</p>
            </div>
            <div>
              <p className="font-bold">SAMHSA Treatment Locator</p>
              <p>findtreatment.gov</p>
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

  /* ================================================================ */
  /*  Assessment Form (questions phase)                                */
  /* ================================================================ */
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
        ACE Questionnaire
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        Answer each question based on your experiences <strong>before age 18</strong>.
      </p>
      <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-8">
        ~2-3 minutes &middot; 10 Yes/No questions &middot; Completely private
      </p>

      <AdSlot position="tool-top" />

      {/* Reassurance */}
      <div className="mb-8 p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
        <p className="text-sm text-sage-700 dark:text-sage-300 text-center leading-relaxed">
          Take your time. There are no right or wrong answers. You can stop at any point.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mb-1">
          <span>{answeredCount} of 10 answered</span>
          <span>{Math.round((answeredCount / 10) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-500 rounded-full transition-all duration-300"
            style={{ width: `${(answeredCount / 10) * 100}%` }}
          />
        </div>
      </div>

      {/* Questions grouped by category */}
      {(["abuse", "neglect", "dysfunction"] as const).map((cat) => {
        const items = ACE_ITEMS.filter((q) => q.category === cat);
        const meta = CATEGORY_META[cat];
        return (
          <div key={cat} className="mb-8">
            <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
              {meta.label}
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
              {cat === "abuse" && "Before your 18th birthday:"}
              {cat === "neglect" && "Before your 18th birthday:"}
              {cat === "dysfunction" && "While you were growing up, during your first 18 years of life:"}
            </p>
            <div className="space-y-3">
              {items.map((q) => (
                <div
                  key={q.id}
                  className={`p-4 rounded-xl border transition-colors ${
                    answers[q.id] !== undefined
                      ? "bg-white dark:bg-night-800 border-sage-200 dark:border-sage-800"
                      : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
                  }`}
                >
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed mb-3">
                    {q.text}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAnswer(q.id, true)}
                      className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                        answers[q.id] === true
                          ? "bg-sage-600 text-white"
                          : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => handleAnswer(q.id, false)}
                      className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                        answers[q.id] === false
                          ? "bg-sage-600 text-white"
                          : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

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
            Please answer all 10 questions to continue
          </p>
        )}
      </div>

      {/* YMYL Disclaimer */}
      <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        <p className="font-semibold mb-1">Clinical Disclaimer</p>
        <p>
          The ACE Questionnaire is an educational tool for self-reflection. It is not a clinical assessment, diagnosis, or prediction of future health outcomes. An ACE score describes categories of childhood adversity — it does not capture severity, duration, context, or resilience factors. Always consult a qualified healthcare professional for concerns related to childhood trauma. Reviewed by Jason Ramirez, Certified Drug and Alcohol Counselor (CADC-II).
        </p>
      </div>

      {/* Crisis Resources */}
      <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
          Need Support Right Now?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
          <div>
            <p className="font-bold">988 Suicide &amp; Crisis Lifeline</p>
            <p>Call or text 988 &middot; 24/7</p>
          </div>
          <div>
            <p className="font-bold">Crisis Text Line</p>
            <p>Text HOME to 741741 &middot; 24/7</p>
          </div>
          <div>
            <p className="font-bold">RAINN Sexual Assault Hotline</p>
            <p>1-800-656-4673 &middot; 24/7</p>
          </div>
          <div>
            <p className="font-bold">Childhelp National Hotline</p>
            <p>1-800-422-4453 &middot; 24/7</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
        Your responses are scored entirely in your browser. Nothing is stored or transmitted.
      </p>
    </div>
  );
}

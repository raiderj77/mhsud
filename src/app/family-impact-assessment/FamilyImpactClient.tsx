"use client";

import { useState } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

type Domain =
  | "behavior"
  | "financial"
  | "relationships"
  | "children"
  | "emotional"
  | "safety"
  | "enabling";

interface Statement {
  id: number;
  text: string;
  domain: Domain;
}

interface DomainInfo {
  label: string;
  icon: string;
  color: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
  guidance: string;
}

const DOMAINS: Record<Domain, DomainInfo> = {
  behavior: {
    label: "Behavior Changes",
    icon: "👁",
    color: "#6366f1",
    bgLight: "bg-indigo-50",
    bgDark: "dark:bg-indigo-950/30",
    textLight: "text-indigo-700",
    textDark: "dark:text-indigo-300",
    guidance:
      "The behavior changes you have noticed are real and significant. Substance use alters brain chemistry, which changes how a person acts, thinks, and relates to others. You are not imagining things — trust what you observe.",
  },
  financial: {
    label: "Financial Impact",
    icon: "💰",
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/30",
    textLight: "text-amber-700",
    textDark: "dark:text-amber-300",
    guidance:
      "Financial strain from a loved one's substance use is extremely common. You may want to consider protecting shared finances by separating accounts, monitoring credit, and setting clear financial boundaries. A financial counselor can help with practical steps.",
  },
  relationships: {
    label: "Relationship Impact",
    icon: "💔",
    color: "#ec4899",
    bgLight: "bg-pink-50",
    bgDark: "dark:bg-pink-950/30",
    textLight: "text-pink-700",
    textDark: "dark:text-pink-300",
    guidance:
      "Addiction erodes trust, communication, and emotional connection. These relationship wounds are real injuries that deserve attention. Family therapy or couples counseling with an addiction-informed therapist can help rebuild what has been damaged — whether your loved one enters recovery or not.",
  },
  children: {
    label: "Impact on Children",
    icon: "🧒",
    color: "#14b8a6",
    bgLight: "bg-teal-50",
    bgDark: "dark:bg-teal-950/30",
    textLight: "text-teal-700",
    textDark: "dark:text-teal-300",
    guidance:
      "Children are deeply affected by a family member's substance use, even when adults try to shield them. Maintaining routines, having age-appropriate honest conversations, and connecting children with a counselor or support group like Alateen can make a significant difference. Protecting children may sometimes require difficult decisions.",
  },
  emotional: {
    label: "Emotional Toll on You",
    icon: "😔",
    color: "#8b5cf6",
    bgLight: "bg-violet-50",
    bgDark: "dark:bg-violet-950/30",
    textLight: "text-violet-700",
    textDark: "dark:text-violet-300",
    guidance:
      "The emotional weight you are carrying is enormous. Worry, guilt, anger, sadness, shame — these are all normal responses to an abnormal situation. You deserve support too. Individual therapy, Al-Anon or Nar-Anon meetings, and self-care are not selfish — they are necessary.",
  },
  safety: {
    label: "Safety Concerns",
    icon: "⚠️",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    guidance:
      "Any safety concern is serious. You do not have to tolerate feeling unsafe in your own home. If you or your children are in danger, please reach out to the National Domestic Violence Hotline at 1-800-799-7233 or contact local law enforcement. A safety plan is essential.",
  },
  enabling: {
    label: "Enabling Behaviors",
    icon: "🔄",
    color: "#f97316",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/30",
    textLight: "text-orange-700",
    textDark: "dark:text-orange-300",
    guidance:
      "Enabling is not a character flaw — it comes from love, fear, and wanting to keep the peace. But when we protect someone from the consequences of their substance use, we may unintentionally make it easier for them to continue. Learning to set boundaries is one of the most powerful things you can do — for yourself and for your loved one.",
  },
};

const STATEMENTS: Statement[] = [
  // Behavior Changes (3)
  { id: 1, text: "I have noticed my loved one becoming more secretive about where they go, who they are with, or how they spend money.", domain: "behavior" },
  { id: 2, text: "My loved one's mood has become unpredictable — they may go from calm to angry, energetic to withdrawn, without clear reason.", domain: "behavior" },
  { id: 3, text: "My loved one has stopped keeping up with responsibilities they used to handle (work, household tasks, personal hygiene).", domain: "behavior" },
  // Financial Impact (2)
  { id: 4, text: "Money has gone missing, or there are unexplained expenses, debts, or financial problems connected to my loved one's behavior.", domain: "financial" },
  { id: 5, text: "I have had to cover bills, lend money, or take on extra financial responsibility because of my loved one's substance use.", domain: "financial" },
  // Relationship Impact (3)
  { id: 6, text: "I find it hard to trust what my loved one tells me because I have caught them in lies or half-truths.", domain: "relationships" },
  { id: 7, text: "Arguments about substance use (or its consequences) have become a regular part of our relationship.", domain: "relationships" },
  { id: 8, text: "I feel emotionally distant from my loved one — like I am living with a stranger.", domain: "relationships" },
  // Impact on Children/Dependents (2)
  { id: 9, text: "Children or other dependents in the household have been exposed to arguments, erratic behavior, or an unstable home environment.", domain: "children" },
  { id: 10, text: "Daily routines for children or dependents (meals, bedtimes, school activities) have been disrupted by my loved one's behavior.", domain: "children" },
  // Emotional Toll (3)
  { id: 11, text: "I spend a significant amount of time worrying about my loved one — their safety, their health, or what they might do next.", domain: "emotional" },
  { id: 12, text: "I feel guilty, wondering if I caused this or if I should be doing more to help.", domain: "emotional" },
  { id: 13, text: "I feel anger or resentment toward my loved one that I have trouble letting go of.", domain: "emotional" },
  // Safety Concerns (2)
  { id: 14, text: "I have felt physically unsafe or afraid in my own home because of my loved one's behavior while using substances.", domain: "safety" },
  { id: 15, text: "My loved one has become verbally aggressive, threatening, or physically intimidating when using or when confronted about their use.", domain: "safety" },
  // Enabling Behaviors (3)
  { id: 16, text: "I have made excuses to others (employer, family, friends) to cover for my loved one's behavior or absences.", domain: "enabling" },
  { id: 17, text: "I have given my loved one money, a place to stay, or other support even when I suspected it would be used to continue their substance use.", domain: "enabling" },
  { id: 18, text: "I avoid bringing up my loved one's substance use because I fear their reaction or want to keep the peace.", domain: "enabling" },
];

const SCALE_LABELS = ["Never", "Rarely", "Sometimes", "Often", "Always"];

interface SeverityTier {
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

const SEVERITY_TIERS: SeverityTier[] = [
  {
    label: "Minimal Impact",
    range: "0–18",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-950/30",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    borderLight: "border-green-200",
    borderDark: "dark:border-green-800",
    message:
      "Your responses suggest that substance use is having a relatively limited impact on your family life at this time. Even so, the fact that you took this assessment means something is on your mind. Trust that instinct. Early awareness and open communication are powerful — consider learning more about the signs of problematic substance use and what family support looks like.",
  },
  {
    label: "Mild Impact",
    range: "19–36",
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-950/30",
    textLight: "text-amber-700",
    textDark: "dark:text-amber-300",
    borderLight: "border-amber-200",
    borderDark: "dark:border-amber-800",
    message:
      "Your responses suggest that your loved one's substance use is beginning to affect your family in noticeable ways. You may be starting to feel the emotional weight, noticing behavior changes, or adjusting your own life around their use. This is an important time to seek support for yourself — not just for them. Organizations like Al-Anon and Nar-Anon exist specifically for people in your situation.",
  },
  {
    label: "Moderate Impact",
    range: "37–54",
    color: "#f97316",
    bgLight: "bg-orange-50",
    bgDark: "dark:bg-orange-950/30",
    textLight: "text-orange-700",
    textDark: "dark:text-orange-300",
    borderLight: "border-orange-200",
    borderDark: "dark:border-orange-800",
    message:
      "Your responses indicate that substance use is significantly affecting your family across multiple areas of life. The emotional toll, relationship strain, and practical disruptions you are experiencing are substantial. You are carrying a heavy burden, and you do not have to carry it alone. Connecting with a family support group, individual therapist, or addiction counselor can provide strategies, community, and relief.",
  },
  {
    label: "Significant Impact",
    range: "55–72",
    color: "#ef4444",
    bgLight: "bg-red-50",
    bgDark: "dark:bg-red-950/30",
    textLight: "text-red-700",
    textDark: "dark:text-red-300",
    borderLight: "border-red-200",
    borderDark: "dark:border-red-800",
    message:
      "Your responses suggest that addiction is deeply affecting nearly every part of your family life. The level of impact you are describing is serious, and it is important that you hear this: this is not your fault, and you deserve help. Please reach out to one of the resources below as soon as possible. A family therapist specializing in addiction, or a support group like Al-Anon or Nar-Anon, can provide immediate guidance and community.",
  },
];

function getSeverityTier(score: number): SeverityTier {
  if (score <= 18) return SEVERITY_TIERS[0];
  if (score <= 36) return SEVERITY_TIERS[1];
  if (score <= 54) return SEVERITY_TIERS[2];
  return SEVERITY_TIERS[3];
}

const DOMAIN_ORDER: Domain[] = [
  "behavior",
  "financial",
  "relationships",
  "children",
  "emotional",
  "safety",
  "enabling",
];

const SELF_CARE: string[] = [
  "Attend an Al-Anon or Nar-Anon meeting — even just one — to hear from others who understand",
  "Set one small boundary this week and practice holding it",
  "Schedule something that is just for you: a walk, a meal with a friend, an hour of quiet",
  "Talk to a therapist or counselor, even if your loved one is not ready for help",
  "Write down three things that are within your control — and three that are not",
  "Practice the phrase: \"I love you, and I cannot control this for you\"",
  "Get enough sleep, eat regularly, and move your body — your health matters too",
  "Reach out to one trusted person and be honest about what you are going through",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function FamilyImpactClient({ faqData }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const allAnswered = STATEMENTS.every((s) => answers[s.id] !== undefined);

  function handleAnswer(id: number, value: number) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  /* Scoring */
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const tier = getSeverityTier(totalScore);

  function domainScore(domain: Domain): number {
    return STATEMENTS.filter((s) => s.domain === domain).reduce(
      (sum, s) => sum + (answers[s.id] ?? 0),
      0
    );
  }

  function domainMax(domain: Domain): number {
    return STATEMENTS.filter((s) => s.domain === domain).length * 4;
  }

  const safetyScore = domainScore("safety");
  const hasSafetyConcern = safetyScore >= 4; // 50%+ on safety domain

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
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10" aria-live="polite">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your Family Impact Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Assessment completed · {STATEMENTS.length} questions
        </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Last reviewed: March 2026</p>

        {/* Safety Alert */}
        {hasSafetyConcern && (
          <div className="mb-8 p-5 bg-red-50 dark:bg-red-950/40 border-2 border-red-300 dark:border-red-700 rounded-xl">
            <h2 className="text-lg font-bold text-red-700 dark:text-red-300 mb-2">
              ⚠️ Safety Concerns Identified
            </h2>
            <p className="text-sm text-red-700 dark:text-red-300 mb-3">
              Your responses indicate safety concerns in your home. Your safety and the safety of any children or dependents is the top priority. Please consider reaching out now:
            </p>
            <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
              <li><strong>National Domestic Violence Hotline:</strong> 1-800-799-7233 (24/7)</li>
              <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text 988</li>
              <li><strong>If in immediate danger:</strong> Call 911</li>
            </ul>
          </div>
        )}

        {/* Overall Score */}
        <div
          className={`p-6 rounded-xl border-2 mb-8 ${tier.bgLight} ${tier.bgDark} ${tier.borderLight} ${tier.borderDark}`}
        >
          <div className="flex items-center justify-between mb-3">
            <h2
              className={`text-xl font-bold ${tier.textLight} ${tier.textDark}`}
            >
              {tier.label}
            </h2>
            <span
              className={`text-2xl font-bold ${tier.textLight} ${tier.textDark}`}
            >
              {totalScore} / 72
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(totalScore / 72) * 100}%`,
                backgroundColor: tier.color,
              }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${tier.textLight} ${tier.textDark}`}>
            {tier.message}
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* Validation Message */}
        <div className="mb-8 p-5 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
          <h2 className="text-lg font-bold text-sage-700 dark:text-sage-300 mb-2">
            Your Experience Is Valid
          </h2>
          <p className="text-sm text-sage-700 dark:text-sage-300 leading-relaxed">
            If you are here, it is because you care deeply about someone who is struggling. The stress, confusion, grief, and exhaustion you may feel are normal responses to living with or loving someone affected by substance use. You are not overreacting. You are not to blame. And you are not alone — millions of families navigate this every day.
          </p>
        </div>

        {/* Domain Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Impact by Area
        </h2>
        <div className="space-y-4 mb-8">
          {DOMAIN_ORDER.map((key) => {
            const info = DOMAINS[key];
            const score = domainScore(key);
            const max = domainMax(key);
            const pct = max > 0 ? (score / max) * 100 : 0;
            return (
              <div
                key={key}
                className={`p-4 rounded-xl ${info.bgLight} ${info.bgDark}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-semibold ${info.textLight} ${info.textDark}`}>
                    {info.icon} {info.label}
                  </span>
                  <span className={`text-sm font-bold ${info.textLight} ${info.textDark}`}>
                    {score} / {max}
                  </span>
                </div>
                <div className="w-full h-2 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: info.color }}
                  />
                </div>
                {score > 0 && (
                  <p className={`text-xs leading-relaxed ${info.textLight} ${info.textDark}`}>
                    {info.guidance}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Psychoeducation */}
        <div className="mb-8 p-5 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Understanding Addiction
          </h2>
          <div className="text-sm text-neutral-600 dark:text-neutral-300 space-y-3 leading-relaxed">
            <p>
              Addiction is recognized by every major medical organization — including the American Medical Association, the National Institute on Drug Abuse, and the World Health Organization — as a chronic brain condition, not a moral failing or a choice. Substances change the brain&apos;s reward system, decision-making centers, and stress response in ways that make it extremely difficult for a person to stop on their own, even when they can see the harm.
            </p>
            <p>
              This does not mean your loved one is not responsible for their actions. It means that willpower alone is usually not enough to overcome addiction. Effective approaches include professional assessment, evidence-based programs, medication-assisted options, peer support, and family involvement. Recovery is possible — but it often requires help.
            </p>
            <p>
              Importantly, <strong>your loved one&apos;s recovery is not something you can control</strong>. What you <em>can</em> control is how you respond, the boundaries you set, and whether you get support for yourself. Families who seek their own support — regardless of whether their loved one enters recovery — consistently report improved wellbeing, reduced stress, and better family functioning.
            </p>
          </div>
        </div>

        <AdSlot position="results-middle" />

        {/* Next Steps */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Recommended Next Steps
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h3 className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">
                Al-Anon Family Groups
              </h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">
                Free support groups for families affected by someone&apos;s drinking. Meetings are confidential and available in-person, online, and by phone.
              </p>
              <p className="text-xs font-bold text-blue-700 dark:text-blue-300">
                1-888-4AL-ANON (1-888-425-2666)
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400">al-anon.org</p>
            </div>
            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h3 className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-1">
                Nar-Anon Family Groups
              </h3>
              <p className="text-xs text-purple-600 dark:text-purple-400 mb-2">
                Free support groups for families affected by someone&apos;s drug use. A 12-step program adapted for families of people with substance use issues.
              </p>
              <p className="text-xs font-bold text-purple-700 dark:text-purple-300">
                1-800-477-6291
              </p>
              <p className="text-xs text-purple-600 dark:text-purple-400">nar-anon.org</p>
            </div>
            <div className="p-4 bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 rounded-xl">
              <h3 className="text-sm font-bold text-teal-700 dark:text-teal-300 mb-1">
                SAMHSA National Helpline
              </h3>
              <p className="text-xs text-teal-600 dark:text-teal-400 mb-2">
                Free, confidential, 24/7 treatment referral and information service for substance use and mental health. Available in English and Spanish.
              </p>
              <p className="text-xs font-bold text-teal-700 dark:text-teal-300">
                1-800-662-4357
              </p>
              <p className="text-xs text-teal-600 dark:text-teal-400">samhsa.gov</p>
            </div>
            <div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 rounded-xl">
              <h3 className="text-sm font-bold text-rose-700 dark:text-rose-300 mb-1">
                Family Therapy
              </h3>
              <p className="text-xs text-rose-600 dark:text-rose-400 mb-2">
                A therapist specializing in addiction and family systems can help you set boundaries, improve communication, and heal — whether or not your loved one is in recovery.
              </p>
              <p className="text-xs font-bold text-rose-700 dark:text-rose-300">
                Find a therapist: psychologytoday.com
              </p>
            </div>
          </div>
        </div>

        {/* Self-Care */}
        <div className="mb-8 p-5 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
          <h2 className="text-lg font-bold text-sage-700 dark:text-sage-300 mb-3">
            Self-Care for You
          </h2>
          <p className="text-sm text-sage-600 dark:text-sage-400 mb-3">
            Taking care of yourself is not selfish — it is essential. Here are steps you can take this week:
          </p>
          <ul className="space-y-2">
            {SELF_CARE.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-sage-700 dark:text-sage-300">
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-sage-200 dark:bg-sage-800 flex items-center justify-center text-xs font-bold text-sage-700 dark:text-sage-300">
                  {i + 1}
                </span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Related Tools */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/readiness-to-change"
              className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">
                Readiness to Change →
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Help assess whether your loved one may be ready for change
              </p>
            </Link>
            <Link
              href="/treatment-cost-estimator"
              className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">
                Treatment Cost Estimator →
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Understand the costs of different treatment options
              </p>
            </Link>
            <Link
              href="/coping-skills-randomizer"
              className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">
                Coping Skills Randomizer →
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Get a healthy coping skill for when you are feeling overwhelmed
              </p>
            </Link>
            <Link
              href="/crisis-resources"
              className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors"
            >
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">
                Crisis Resources →
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Full list of helplines and crisis support
              </p>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <button
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-sm font-medium"
          >
            Print Results
          </button>
          <button
            onClick={handleRetake}
            className="px-5 py-2.5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-sand-100 dark:hover:bg-night-700 transition-colors text-sm font-medium"
          >
            Retake Assessment
          </button>
        </div>

        {/* Download Reflection Summary */}
        <ReflectionSummary
          toolName="Family Impact Assessment"
          toolUrl="https://mindchecktools.com/family-impact-assessment"
          score={totalScore}
          severityLabel={tier.label}
          scoreRange={tier.range}
          interpretation={tier.message}
          suggestion="Consider reaching out to a family support group like Al-Anon or Nar-Anon, or speaking with a therapist who specializes in addiction and family systems."
          reflectionPrompts={REFLECTION_PROMPTS["family-impact-assessment"]?.prompts ?? []}
          responses={STATEMENTS.map((s) => ({
            question: s.text,
            answer: SCALE_LABELS[answers[s.id] ?? 0],
          }))}
        />

        {/* Reflection Prompts */}
        {REFLECTION_PROMPTS["family-impact-assessment"] && (
          <ReflectionPrompts
            toolName="Family Impact Assessment"
            prompts={REFLECTION_PROMPTS["family-impact-assessment"].prompts}
          />
        )}

        {/* Score Guide */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Score Ranges
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {SEVERITY_TIERS.map((t) => (
              <div
                key={t.label}
                className={`p-3 rounded-lg text-center ${t.bgLight} ${t.bgDark}`}
              >
                <p className={`text-xs font-bold ${t.textLight} ${t.textDark}`}>
                  {t.label}
                </p>
                <p className={`text-xs ${t.textLight} ${t.textDark}`}>
                  {t.range}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About This Assessment</h2>
          <p>
            The Family Impact Assessment is an original educational tool designed to help family members and loved ones reflect on how substance use is affecting their lives. It is not a validated clinical instrument — it is a structured self-reflection exercise that covers seven key areas commonly affected when a family member struggles with substance use.
          </p>
          <p>
            This assessment does not evaluate your loved one. It evaluates <em>your experience</em> as a family member. The goal is not to label anyone, but to give you clarity about what you are going through and to point you toward appropriate support.
          </p>
          <h2>The Seven Cs for Families</h2>
          <p>
            Many family support programs teach the &ldquo;Seven Cs&rdquo; — a framework that can help family members understand their role:
          </p>
          <ul>
            <li>I didn&apos;t <strong>Cause</strong> it</li>
            <li>I can&apos;t <strong>Cure</strong> it</li>
            <li>I can&apos;t <strong>Control</strong> it</li>
            <li>I can <strong>Care</strong> for myself</li>
            <li>I can <strong>Communicate</strong> my feelings</li>
            <li>I can make healthy <strong>Choices</strong></li>
            <li>I can <strong>Celebrate</strong> myself</li>
          </ul>
          <p>
            These principles are a reminder that while you cannot control another person&apos;s substance use, you can take meaningful steps to protect your own wellbeing and the wellbeing of others in the family.
          </p>
          <h2>When to Seek Immediate Help</h2>
          <p>
            If you or anyone in your household is in physical danger, call 911 immediately. Other situations that may require urgent action include:
          </p>
          <ul>
            <li>Your loved one is threatening self-harm or suicide (call 988)</li>
            <li>You suspect an overdose (call 911 — many states have Good Samaritan laws)</li>
            <li>Children are being neglected or abused</li>
            <li>You are being physically, verbally, or emotionally abused</li>
            <li>Your loved one is driving under the influence</li>
          </ul>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            This tool is for educational and self-reflection purposes only. It is not a clinical assessment, and it does not screen, assess, or evaluate your loved one. Results do not constitute medical advice, a professional evaluation, or a recommendation for any specific course of action. Always consult a qualified healthcare professional, licensed counselor, or addiction specialist for guidance about substance use concerns. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
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
              <p className="font-bold">Al-Anon Family Groups</p>
              <p>1-888-425-2666 · al-anon.org</p>
            </div>
            <div>
              <p className="font-bold">Nar-Anon Family Groups</p>
              <p>1-800-477-6291 · nar-anon.org</p>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
          Your responses were scored entirely in your browser. Nothing was stored or transmitted.
        </p>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <details
                key={i}
                className="group bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg"
              >
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-sage-700 dark:hover:text-sage-400 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <span className="ml-2 text-neutral-400 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
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
        Family Impact Assessment
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        For family members and loved ones concerned about someone&apos;s substance use. This assessment helps you reflect on how their use is affecting <em>your</em> life.
      </p>
      <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-8">
        {STATEMENTS.length} questions · ~5 minutes · Completely private
      </p>

      <AdSlot position="tool-top" />

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-neutral-400 dark:text-neutral-500 mb-1">
          <span>{answeredCount} of {STATEMENTS.length} answered</span>
          <span>{Math.round((answeredCount / STATEMENTS.length) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-sage-500 rounded-full transition-all duration-300"
            style={{ width: `${(answeredCount / STATEMENTS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Statements */}
      <div className="space-y-4 mb-8">
        {STATEMENTS.map((stmt, idx) => {
          const info = DOMAINS[stmt.domain];
          return (
            <div
              key={stmt.id}
              className={`p-4 rounded-xl border transition-colors ${
                answers[stmt.id] !== undefined
                  ? "bg-white dark:bg-night-800 border-sage-200 dark:border-sage-800"
                  : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-sand-200 dark:bg-neutral-700 flex items-center justify-center text-xs font-bold text-neutral-500 dark:text-neutral-400">
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {stmt.text}
                  </p>
                  <span className={`text-xs ${info.textLight} ${info.textDark} mt-1 inline-block`}>
                    {info.icon} {info.label}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 ml-10">
                {SCALE_LABELS.map((label, val) => (
                  <button
                    key={val}
                    onClick={() => handleAnswer(stmt.id, val)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      answers[stmt.id] === val
                        ? "bg-sage-600 text-white"
                        : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                    }`}
                  >
                    {label}
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
              : "bg-sand-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500 cursor-not-allowed"
          }`}
        >
          See My Results
        </button>
        {!allAnswered && (
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">
            Please answer all {STATEMENTS.length} questions to continue
          </p>
        )}
      </div>

      {/* YMYL Disclaimer */}
      <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        <p className="font-semibold mb-1">Clinical Disclaimer</p>
        <p>
          This tool is for educational and self-reflection purposes only. It is not a clinical assessment, and it does not screen, assess, or evaluate your loved one. Results do not constitute medical advice, a professional evaluation, or a recommendation for any specific course of action. Always consult a qualified healthcare professional, licensed counselor, or addiction specialist for guidance about substance use concerns. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
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
          <div>
            <p className="font-bold">Al-Anon Family Groups</p>
            <p>1-888-425-2666 · al-anon.org</p>
          </div>
          <div>
            <p className="font-bold">Nar-Anon Family Groups</p>
            <p>1-800-477-6291 · nar-anon.org</p>
          </div>
        </div>
      </div>

      <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
        Your responses are scored entirely in your browser. Nothing is stored or transmitted.
      </p>
    </div>
  );
}

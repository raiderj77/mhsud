"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";
import EmailCapture from "@/components/EmailCapture";


/* ── types ─────────────────────────────────────────────── */

type Stage = "precontemplation" | "contemplation" | "preparation" | "action" | "maintenance";

interface Statement {
  id: number;
  text: string;
  stage: Stage;
}

interface StageInfo {
  label: string;
  short: string;
  color: string;
  bgLight: string;
  bgDark: string;
  textLight: string;
  textDark: string;
  description: string;
  meaning: string;
  nextSteps: string[];
  resources: { href: string; label: string; desc: string }[];
}

interface Props {
  faqData: { question: string; answer: string }[];
}

/* ── data ──────────────────────────────────────────────── */

const STATEMENTS: Statement[] = [
  { id: 1, text: "I don\u2019t think my substance use is a problem that needs to change.", stage: "precontemplation" },
  { id: 2, text: "Other people seem more concerned about my use than I am.", stage: "precontemplation" },
  { id: 3, text: "I would be surprised if someone told me I had a substance use problem.", stage: "precontemplation" },
  { id: 4, text: "I sometimes wonder if my substance use is hurting me or the people around me.", stage: "contemplation" },
  { id: 5, text: "I have been thinking about whether I should cut back or stop.", stage: "contemplation" },
  { id: 6, text: "I can see both reasons to change and reasons not to.", stage: "contemplation" },
  { id: 7, text: "I am planning to make a change in my substance use in the next month.", stage: "preparation" },
  { id: 8, text: "I have been looking into what support or resources might help me.", stage: "preparation" },
  { id: 9, text: "I have started taking small steps toward changing my use.", stage: "preparation" },
  { id: 10, text: "I have recently made significant changes to my substance use.", stage: "action" },
  { id: 11, text: "I am actively working on strategies to avoid using.", stage: "action" },
  { id: 12, text: "I have changed my routines or environment to support not using.", stage: "action" },
  { id: 13, text: "I have maintained changes in my substance use for six months or more.", stage: "maintenance" },
  { id: 14, text: "I am focused on preventing a return to old patterns.", stage: "maintenance" },
  { id: 15, text: "I have developed new habits and coping skills that support my recovery.", stage: "maintenance" },
];

const LIKERT_OPTIONS = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

const STAGE_ORDER: Stage[] = ["precontemplation", "contemplation", "preparation", "action", "maintenance"];

const STAGES: Record<Stage, StageInfo> = {
  precontemplation: {
    label: "Precontemplation",
    short: "Not yet considering change",
    color: "#94a3b8",
    bgLight: "bg-slate-100",
    bgDark: "dark:bg-slate-900/30",
    textLight: "text-slate-700",
    textDark: "dark:text-slate-300",
    description: "In this stage, you may not see your substance use as a problem — or you may feel that the costs of changing outweigh the benefits. You might feel defensive when others bring it up, or you may simply not have thought about it much.",
    meaning: "Being in Precontemplation does not mean you are in denial or that something is wrong with you. It means that right now, change is not on your radar. Many people stay in this stage for a long time before something shifts their perspective — a health scare, a relationship consequence, or simply new information.",
    nextSteps: [
      "There is no pressure to change right now. This tool is here whenever you are ready.",
      "Consider taking a substance use screening (AUDIT, DAST-10, or CAGE-AID) just to get information — with no obligation to act on it.",
      "If someone in your life has expressed concern, try listening to their perspective without arguing — just take it in.",
      "Read about the health effects of substance use on our Health Recovery Timeline — information alone can shift awareness over time.",
    ],
    resources: [
      { href: "/audit-alcohol-test", label: "AUDIT Alcohol Screen", desc: "Reflect on your relationship with alcohol" },
      { href: "/dast-10-drug-screening", label: "DAST-10 Drug Screening", desc: "10-question drug use reflection" },
      { href: "/cage-aid-substance-abuse-screening", label: "CAGE-AID Screen", desc: "Quick 4-question substance use check" },
      { href: "/health-recovery-timeline", label: "Health Recovery Timeline", desc: "See what happens to your body when you quit" },
    ],
  },
  contemplation: {
    label: "Contemplation",
    short: "Thinking about change",
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "dark:bg-amber-900/20",
    textLight: "text-amber-700",
    textDark: "dark:text-amber-300",
    description: "You are aware that your substance use may be a problem and you are weighing the pros and cons of making a change. You may feel ambivalent — part of you wants to change, and part of you does not. This is completely normal.",
    meaning: "Contemplation is a critical stage. You are no longer unaware — you are actively thinking about your situation. Ambivalence (wanting to change and not wanting to at the same time) is the hallmark of this stage. The goal is not to force a decision but to explore your feelings honestly.",
    nextSteps: [
      "Write a pros-and-cons list: what are the benefits of changing vs. the benefits of staying the same?",
      "Talk to a counselor or therapist — even one session can help clarify your thinking. Motivational interviewing is especially effective in this stage.",
      "Explore what treatment options and costs look like — having information reduces the fear of the unknown.",
      "Look at our Health Recovery Timeline to see the concrete health benefits of change at different time points.",
    ],
    resources: [
      { href: "/treatment-cost-estimator", label: "Treatment Cost Estimator", desc: "See what recovery support options cost" },
      { href: "/health-recovery-timeline", label: "Health Recovery Timeline", desc: "What happens to your body when you quit" },
      { href: "/money-saved-recovery-calculator", label: "Money Saved Calculator", desc: "See the financial impact of change" },
    ],
  },
  preparation: {
    label: "Preparation",
    short: "Getting ready to change",
    color: "#3b82f6",
    bgLight: "bg-blue-50",
    bgDark: "dark:bg-blue-900/20",
    textLight: "text-blue-700",
    textDark: "dark:text-blue-300",
    description: "You have decided to make a change and are getting ready. You may be setting a quit date, gathering resources, telling trusted people, or taking small steps like cutting back. You are moving from thinking to planning.",
    meaning: "Preparation is the bridge between deciding and doing. Research shows that people who spend time in this stage — building a plan, gathering support, and setting themselves up for success — are more likely to sustain change than those who jump into action without preparation.",
    nextSteps: [
      "Build a relapse prevention plan — identify your triggers, warning signs, coping strategies, and emergency contacts.",
      "Set a specific date to begin. Write it down. Tell someone you trust.",
      "Remove substances and paraphernalia from your home if possible.",
      "Learn the HALT technique (Hungry, Angry, Lonely, Tired) so you can recognize vulnerability before it hits.",
      "If medical support might be needed (alcohol or benzodiazepine dependence), consult a healthcare provider about safe withdrawal.",
    ],
    resources: [
      { href: "/relapse-prevention-plan", label: "Relapse Prevention Plan", desc: "Build your personalized written plan" },
      { href: "/halt-check-in", label: "HALT Check-In", desc: "Learn to check in with yourself daily" },
      { href: "/withdrawal-timeline", label: "Withdrawal Timeline", desc: "Know what to expect during withdrawal" },
      { href: "/treatment-cost-estimator", label: "Treatment Cost Estimator", desc: "Explore your support options" },
    ],
  },
  action: {
    label: "Action",
    short: "Actively making changes",
    color: "#22c55e",
    bgLight: "bg-green-50",
    bgDark: "dark:bg-green-900/20",
    textLight: "text-green-700",
    textDark: "dark:text-green-300",
    description: "You are actively changing your behavior. You may have recently quit or significantly reduced your use. You are modifying your routines, environment, and relationships to support your new direction. This stage requires the most energy and commitment.",
    meaning: "Action is the most visible stage — but it is not the only one that matters. The work you did in Contemplation and Preparation brought you here. The Action stage typically lasts from the first day of change through about six months. During this time, cravings and challenges are most intense, and having tools and support readily available is critical.",
    nextSteps: [
      "Use the Urge Surfing Timer when cravings hit — most pass within 15 to 30 minutes.",
      "Track your progress with the Sobriety Calculator to stay motivated with milestones.",
      "Do a HALT Check-In daily to catch vulnerability early.",
      "Review your relapse prevention plan regularly and update it as you learn what works.",
      "Celebrate your wins — every day in recovery is an accomplishment.",
    ],
    resources: [
      { href: "/urge-surfing-timer", label: "Urge Surfing Timer", desc: "Ride out cravings with guided mindfulness" },
      { href: "/sobriety-calculator", label: "Sobriety Calculator", desc: "Track days and celebrate milestones" },
      { href: "/halt-check-in", label: "HALT Check-In", desc: "Daily recovery vulnerability check" },
      { href: "/relapse-prevention-plan", label: "Relapse Prevention Plan", desc: "Your written safety plan" },
    ],
  },
  maintenance: {
    label: "Maintenance",
    short: "Sustaining your changes",
    color: "#8b5cf6",
    bgLight: "bg-violet-50",
    bgDark: "dark:bg-violet-900/20",
    textLight: "text-violet-700",
    textDark: "dark:text-violet-300",
    description: "You have sustained your changes for six months or more. You have developed new habits, coping skills, and routines. Your focus now is on maintaining your gains and preventing relapse. The challenge in this stage is staying vigilant without becoming complacent.",
    meaning: "Maintenance is not just \"keeping going\" — it is an active stage that requires ongoing attention. Triggers can resurface, especially during times of stress, life transitions, or celebration. The skills you have built are strong, but they need regular practice. Many people in long-term recovery find that helping others strengthens their own commitment.",
    nextSteps: [
      "Continue tracking your milestones — the Sobriety Calculator shows how far you have come.",
      "Keep doing daily check-ins (HALT) to catch early warning signs before they escalate.",
      "Review and update your relapse prevention plan periodically — your triggers and coping strategies evolve.",
      "See how much you have saved financially with the Money Saved Calculator — a tangible reminder of progress.",
      "Consider supporting others in earlier stages — teaching reinforces your own learning.",
    ],
    resources: [
      { href: "/sobriety-calculator", label: "Sobriety Calculator", desc: "Celebrate milestones and track progress" },
      { href: "/money-saved-recovery-calculator", label: "Money Saved Calculator", desc: "See the financial impact of your recovery" },
      { href: "/halt-check-in", label: "HALT Check-In", desc: "Daily check-in to stay ahead of triggers" },
      { href: "/relapse-prevention-plan", label: "Relapse Prevention Plan", desc: "Keep your plan fresh and updated" },
    ],
  },
};

/* ── helpers ────────────────────────────────────────────── */

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── component ─────────────────────────────────────────── */

export function ReadinessClient({ faqData }: Props) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  /* deterministic shuffle so order is stable per session */
  const shuffled = useMemo(() => shuffle(STATEMENTS, 42), []);

  const allAnswered = Object.keys(answers).length === STATEMENTS.length;

  /* ── scoring ─────────────────────────────────────────── */

  const scores = useMemo(() => {
    const s: Record<Stage, number> = {
      precontemplation: 0, contemplation: 0, preparation: 0, action: 0, maintenance: 0,
    };
    for (const st of STATEMENTS) {
      s[st.stage] += answers[st.id] || 0;
    }
    return s;
  }, [answers]);

  const primaryStage = useMemo(() => {
    let best: Stage = "precontemplation";
    let bestScore = -1;
    for (const stage of STAGE_ORDER) {
      if (scores[stage] > bestScore || (scores[stage] === bestScore && STAGE_ORDER.indexOf(stage) > STAGE_ORDER.indexOf(best))) {
        best = stage;
        bestScore = scores[stage];
      }
    }
    return best;
  }, [scores]);

  const maxScore = 15; // 3 questions * 5 max

  /* ── handlers ────────────────────────────────────────── */

  const handleAnswer = (statementId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [statementId]: value }));
  };

  const handleSubmit = () => {
    setShowResults(true);
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  const handleReset = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrint = () => window.print();

  const handleShare = async () => {
    const info = STAGES[primaryStage];
    const text = `I took the Readiness to Change Assessment on MindCheck Tools. My primary stage: ${info.label} — ${info.short}.`;
    if (navigator.share) {
      try { await navigator.share({ title: "Readiness to Change Assessment", text, url: window.location.href }); } catch {}
    } else {
      try { await navigator.clipboard.writeText(`${text}\n${window.location.href}`); alert("Copied to clipboard!"); } catch {}
    }
  };

  const stageInfo = STAGES[primaryStage];

  /* ── stage wheel SVG ─────────────────────────────────── */

  const renderWheel = () => {
    const cx = 140, cy = 140, r = 110;
    const segments = STAGE_ORDER.length;
    const anglePerSegment = (2 * Math.PI) / segments;
    const startOffset = -Math.PI / 2; // start from top

    return (
      <svg viewBox="0 0 280 280" className="w-56 h-56 sm:w-64 sm:h-64 mx-auto" aria-hidden="true">
        {STAGE_ORDER.map((stage, i) => {
          const startAngle = startOffset + i * anglePerSegment;
          const endAngle = startAngle + anglePerSegment;
          const isActive = stage === primaryStage;

          const x1 = cx + r * Math.cos(startAngle);
          const y1 = cy + r * Math.sin(startAngle);
          const x2 = cx + r * Math.cos(endAngle);
          const y2 = cy + r * Math.sin(endAngle);

          const largeArc = anglePerSegment > Math.PI ? 1 : 0;
          const d = `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${largeArc} 1 ${x2},${y2} Z`;

          /* label position */
          const midAngle = (startAngle + endAngle) / 2;
          const labelR = r * 0.62;
          const lx = cx + labelR * Math.cos(midAngle);
          const ly = cy + labelR * Math.sin(midAngle);

          return (
            <g key={stage}>
              <path
                d={d}
                fill={isActive ? STAGES[stage].color : "#e5e7eb"}
                stroke="white"
                strokeWidth={2}
                opacity={isActive ? 1 : 0.5}
              />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-[9px] font-semibold"
                fill={isActive ? "white" : "#6b7280"}
              >
                {STAGES[stage].label.length > 12
                  ? STAGES[stage].label.slice(0, 6) + "..."
                  : STAGES[stage].label}
              </text>
            </g>
          );
        })}
        {/* center circle */}
        <circle cx={cx} cy={cy} r={28} fill="white" stroke="#e5e7eb" strokeWidth={1} />
        <text x={cx} y={cy - 6} textAnchor="middle" className="text-[8px] font-medium" fill="#9ca3af">Stage of</text>
        <text x={cx} y={cy + 6} textAnchor="middle" className="text-[8px] font-medium" fill="#9ca3af">Change</text>
        {/* arrow indicators between segments */}
        {STAGE_ORDER.map((_, i) => {
          const angle = startOffset + (i + 1) * anglePerSegment;
          const arrowR = r + 12;
          const ax = cx + arrowR * Math.cos(angle + 0.15);
          const ay = cy + arrowR * Math.sin(angle + 0.15);
          return (
            <text
              key={`arrow-${i}`}
              x={ax}
              y={ay}
              textAnchor="middle"
              dominantBaseline="central"
              className="text-[10px]"
              fill="#d1d5db"
              transform={`rotate(${(angle + 0.15) * (180 / Math.PI) + 90}, ${ax}, ${ay})`}
            >
              &#x25B6;
            </text>
          );
        })}
      </svg>
    );
  };

  /* ── render ──────────────────────────────────────────── */

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* H1 */}
      <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3 text-center">
        Readiness to Change Assessment
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-center max-w-xl mx-auto mb-2 leading-relaxed">
        Based on the <span className="font-medium text-neutral-700 dark:text-neutral-300">Stages of Change model</span> by
        Prochaska &amp; DiClemente. 15 statements to help you understand where you are in the change process.
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mb-8">
        This is an original educational tool, not a validated clinical instrument.
      </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>

      <AdSlot position="readiness-top" />

      {/* ─── ASSESSMENT ────────────────────────────────── */}
      {!showResults && (
        <section className="card p-6 sm:p-8 mb-8" aria-label="Assessment">
          <h2 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            Rate Each Statement
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
            Read each statement and select how much you agree or disagree. There are no right or wrong answers — answer honestly based on where you are right now.
          </p>

          <div className="space-y-6">
            {shuffled.map((st, idx) => (
              <div key={st.id} className="border-b border-sand-200 dark:border-neutral-700 pb-5 last:border-0 last:pb-0">
                <p className="font-medium text-neutral-800 dark:text-neutral-100 mb-3 text-sm">
                  <span className="text-neutral-500 dark:text-neutral-400 mr-2">{idx + 1}.</span>
                  {st.text}
                </p>
                <div className="flex flex-wrap gap-2">
                  {LIKERT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleAnswer(st.id, opt.value)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        answers[st.id] === opt.value
                          ? "bg-sage-600 text-white shadow-sm"
                          : "bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 hover:bg-sage-50 dark:hover:bg-sage-950/30"
                      }`}
                      aria-pressed={answers[st.id] === opt.value}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* progress + submit */}
          <div className="mt-8 pt-6 border-t border-sand-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {Object.keys(answers).length} of {STATEMENTS.length} answered
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {Math.round((Object.keys(answers).length / STATEMENTS.length) * 100)}%
              </p>
            </div>
            <div className="w-full bg-sand-200 dark:bg-night-700 rounded-full h-2 mb-6">
              <div
                className="bg-sage-500 h-2 rounded-full transition-all"
                style={{ width: `${(Object.keys(answers).length / STATEMENTS.length) * 100}%` }}
              />
            </div>
            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className={`btn-primary text-base px-8 py-3 ${!allAnswered ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                See My Results
              </button>
              {!allAnswered && (
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                  Please answer all 15 statements to see your results.
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ─── RESULTS ───────────────────────────────────── */}
      {showResults && (
        <div ref={resultsRef}>
          <section className="card p-6 sm:p-8 mb-6 print:shadow-none print:border-0" aria-label="Your results" aria-live="polite">
            {/* primary stage */}
            <div className={`${stageInfo.bgLight} ${stageInfo.bgDark} rounded-xl p-6 text-center mb-6`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                Your Primary Stage
              </p>
              <h2 className={`font-serif text-2xl sm:text-3xl font-bold ${stageInfo.textLight} ${stageInfo.textDark} mb-1`}>
                {stageInfo.label}
              </h2>
              <p className={`text-sm ${stageInfo.textLight} ${stageInfo.textDark} opacity-80`}>
                {stageInfo.short}
              </p>
            </div>

            {/* wheel */}
            <div className="mb-6">
              {renderWheel()}
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mt-2">
                The Stages of Change cycle — your current stage is highlighted
              </p>
            </div>

            {/* description */}
            <div className="mb-6">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">What This Means</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
                {stageInfo.description}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {stageInfo.meaning}
              </p>
            </div>

            {/* score breakdown */}
            <div className="mb-6">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-3">Score Breakdown</h3>
              <div className="space-y-3">
                {STAGE_ORDER.map((stage) => {
                  const info = STAGES[stage];
                  const pct = (scores[stage] / maxScore) * 100;
                  const isActive = stage === primaryStage;
                  return (
                    <div key={stage}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-medium ${isActive ? info.textLight + " " + info.textDark : "text-neutral-500 dark:text-neutral-400"}`}>
                          {info.label}
                        </span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-400">
                          {scores[stage]} / {maxScore}
                        </span>
                      </div>
                      <div className="w-full bg-sand-200 dark:bg-night-700 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full transition-all"
                          style={{
                            width: `${Math.max(pct, 2)}%`,
                            backgroundColor: isActive ? info.color : "#d1d5db",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* next steps */}
            <div className="mb-6">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Suggested Next Steps for {stageInfo.label}
              </h3>
              <ul className="space-y-2">
                {stageInfo.nextSteps.map((step) => (
                  <li key={step} className="flex gap-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <span className="text-sage-500 mt-0.5 shrink-0">&#9679;</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* recommended resources */}
            <div className="mb-6">
              <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Recommended Tools for You
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stageInfo.resources.map((res) => (
                  <Link
                    key={res.href}
                    href={res.href}
                    className="block p-3 rounded-xl bg-sage-50 dark:bg-sage-950/30 hover:bg-sage-100 dark:hover:bg-sage-900/30 transition-colors"
                  >
                    <span className="text-sm font-semibold text-sage-700 dark:text-sage-400 block">
                      {res.label}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {res.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* actions */}
            <div className="flex flex-wrap justify-center gap-3 pt-4 border-t border-sand-200 dark:border-neutral-700">
              <button onClick={handlePrint} className="px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors print:hidden">
                Print Results
              </button>
              <button onClick={handleShare} className="px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors print:hidden">
                Share Results
              </button>
              <button onClick={handleReset} className="px-5 py-2 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-500 dark:text-neutral-400 text-sm font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors print:hidden">
                Retake Assessment
              </button>
            </div>
          </section>

          {/* Reflection */}
          {REFLECTION_PROMPTS["readiness-to-change"] && (
            <>
              <ReflectionPrompts
                prompts={REFLECTION_PROMPTS["readiness-to-change"].prompts}
                toolName={REFLECTION_PROMPTS["readiness-to-change"].toolName}
              />
              <ReflectionSummary
                toolName={REFLECTION_PROMPTS["readiness-to-change"].toolName}
                toolUrl="https://mindchecktools.com/readiness-to-change"
                score={stageInfo.label}
                severityLabel={stageInfo.short}
                scoreRange={`${scores[primaryStage]}/${maxScore} in primary stage`}
                interpretation={stageInfo.description}
                suggestion={stageInfo.nextSteps[0]}
                reflectionPrompts={REFLECTION_PROMPTS["readiness-to-change"].prompts}
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

            </>
          )}

          {/* important note */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-8 text-sm text-amber-800 dark:text-amber-200">
            <p className="font-semibold mb-1">Important</p>
            <p className="leading-relaxed">
              This assessment is a self-reflection tool, not a clinical evaluation. Your stage of change
              may shift from day to day, and that is normal. Use these results as a starting point for
              conversation with a counselor, sponsor, or trusted person in your life — not as a definitive label.
            </p>
          </div>
        </div>
      )}

      <AdSlot position="readiness-mid" />

      {/* ─── EDUCATIONAL CONTENT ───────────────────────── */}
      <section className="prose-custom mb-12">
        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Understanding the Stages of Change
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          The <strong>Stages of Change model</strong> (also called the <strong>Transtheoretical Model</strong>) was
          developed by <strong>James Prochaska, PhD</strong>, and <strong>Carlo DiClemente, PhD</strong>, beginning
          in the late 1970s. Their research revealed that people who successfully change addictive behaviors move
          through a predictable series of stages — and that understanding which stage a person is in helps
          determine what kind of support will be most effective.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          The model has since been applied far beyond addiction — to diet, exercise, medication adherence,
          therapy engagement, and more. It is one of the most influential frameworks in behavioral health
          and is the foundation of <strong>motivational interviewing</strong>, a counseling approach used
          worldwide.
        </p>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          The Five Stages Explained
        </h2>
        <div className="space-y-4 mb-6">
          {STAGE_ORDER.map((stage) => {
            const info = STAGES[stage];
            return (
              <div key={stage} className={`${info.bgLight} ${info.bgDark} rounded-xl p-4`}>
                <h3 className={`font-semibold ${info.textLight} ${info.textDark} mb-1`}>
                  {info.label}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {info.short}. {info.description.split(". ").slice(0, 2).join(". ")}.
                </p>
              </div>
            );
          })}
        </div>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Change Is Not Linear
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          One of the most important insights from Prochaska and DiClemente&rsquo;s research is that <strong>change
          is not a straight line</strong>. Most people cycle through the stages multiple times before achieving
          lasting change. A person might move from Contemplation to Preparation, then back to Contemplation
          after a setback. Someone in Maintenance might experience a relapse and return to Action or even
          Contemplation.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          This is why the model is often depicted as a <strong>spiral</strong> rather than a straight line.
          Each time you move through the stages, you bring new knowledge, skills, and self-awareness.
          A relapse after six months of sobriety is not the same as never having tried — you carry everything
          you learned forward.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          Research published in the <em>American Journal of Health Promotion</em> found that the average
          person who successfully quits smoking makes <strong>3 to 4 serious attempts</strong> before
          achieving long-term abstinence. The same pattern applies to other substances. Each attempt builds
          the foundation for the one that sticks.
        </p>

        {/* internal links */}
        <div className="bg-sage-50 dark:bg-sage-950/30 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-3 uppercase tracking-wider">
            Related Recovery Tools
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Relapse Prevention Plan
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Build a written plan with triggers, coping strategies, and emergency contacts</span>
            </li>
            <li>
              <Link href="/urge-surfing-timer" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Urge Surfing Timer
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Ride out cravings with guided mindfulness and breathing</span>
            </li>
            <li>
              <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                HALT Check-In
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Daily check-in for Hungry, Angry, Lonely, Tired</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────── */}
      <section className="mb-12">
        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqData.map((faq) => (
            <details key={faq.question} className="group card p-0 overflow-hidden">
              <summary className="flex items-center justify-between p-4 cursor-pointer select-none hover:bg-sand-50 dark:hover:bg-night-800 transition-colors">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 text-sm pr-4">
                  {faq.question}
                </h3>
                <svg
                  className="w-4 h-4 text-neutral-400 shrink-0 transition-transform group-open:rotate-180"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ─── YMYL FOOTER ──────────────────────────────── */}
      <footer className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        <div className="bg-sand-100 dark:bg-night-800 rounded-xl p-5 border border-sand-200 dark:border-neutral-700">
          <p className="font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Clinical Disclaimer</p>
          <p className="leading-relaxed">
            This is an original educational tool inspired by the Transtheoretical Model. It is not a
            validated clinical instrument and should not be used as a substitute for professional assessment.
            Your results reflect your self-reported responses at this moment — they are a starting point
            for reflection, not a definitive evaluation. Always consult a qualified healthcare professional
            or counselor for personalized guidance.
          </p>
          <ToolReviewerBio />
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 rounded-xl p-5 border border-crisis-200 dark:border-crisis-800">
          <p className="font-semibold text-crisis-700 dark:text-crisis-300 mb-2">
            Need Help Now?
          </p>
          <ul className="space-y-1 text-crisis-600 dark:text-crisis-400">
            <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357 (free, 24/7)</li>
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text 988</li>
            <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          </ul>
        </div>

        <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
          <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
          </Link>
        </div>

        <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
          This tool runs entirely in your browser. No answers are stored, transmitted, or collected.
          Your responses are completely private.
        </p>
      </footer>
    </main>
  );
}

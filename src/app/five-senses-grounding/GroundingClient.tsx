"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

/* ── Step definitions ────────────────────────────────── */

const STEPS = [
  {
    sense: "See",
    count: 5,
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    prompt: "Look around you. Name 5 things you can see.",
    hint: "A clock on the wall, light coming through the window, the color of your shirt...",
    color: "sage",
  },
  {
    sense: "Touch",
    count: 4,
    icon: "M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11",
    prompt: "Notice 4 things you can physically touch or feel.",
    hint: "The texture of your clothes, the chair beneath you, your feet on the floor...",
    color: "amber",
  },
  {
    sense: "Hear",
    count: 3,
    icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m-4-4h8m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
    prompt: "Listen carefully. Name 3 things you can hear.",
    hint: "A fan humming, birds outside, the sound of your own breathing...",
    color: "sky",
  },
  {
    sense: "Smell",
    count: 2,
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    prompt: "Notice 2 things you can smell right now.",
    hint: "Coffee, fresh air, soap on your hands, the room itself...",
    color: "violet",
  },
  {
    sense: "Taste",
    count: 1,
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
    prompt: "Name 1 thing you can taste.",
    hint: "Toothpaste, coffee, water, the inside of your mouth...",
    color: "rose",
  },
] as const;

type StepColor = (typeof STEPS)[number]["color"];

const COLOR_MAP: Record<StepColor, { bg: string; border: string; text: string; fill: string; ring: string; badge: string }> = {
  sage:   { bg: "bg-sage-50 dark:bg-sage-950/20", border: "border-sage-200 dark:border-sage-800", text: "text-sage-700 dark:text-sage-400", fill: "fill-sage-500 dark:fill-sage-400", ring: "focus:ring-sage-400", badge: "bg-sage-600" },
  amber:  { bg: "bg-amber-50 dark:bg-amber-950/20", border: "border-amber-200 dark:border-amber-800", text: "text-amber-700 dark:text-amber-400", fill: "fill-amber-500 dark:fill-amber-400", ring: "focus:ring-amber-400", badge: "bg-amber-600" },
  sky:    { bg: "bg-sky-50 dark:bg-sky-950/20", border: "border-sky-200 dark:border-sky-800", text: "text-sky-700 dark:text-sky-400", fill: "fill-sky-500 dark:fill-sky-400", ring: "focus:ring-sky-400", badge: "bg-sky-600" },
  violet: { bg: "bg-violet-50 dark:bg-violet-950/20", border: "border-violet-200 dark:border-violet-800", text: "text-violet-700 dark:text-violet-400", fill: "fill-violet-500 dark:fill-violet-400", ring: "focus:ring-violet-400", badge: "bg-violet-600" },
  rose:   { bg: "bg-rose-50 dark:bg-rose-950/20", border: "border-rose-200 dark:border-rose-800", text: "text-rose-700 dark:text-rose-400", fill: "fill-rose-500 dark:fill-rose-400", ring: "focus:ring-rose-400", badge: "bg-rose-600" },
};

/* ── Types ────────────────────────────────────────────── */

interface Props {
  faqData: { question: string; answer: string }[];
}

type AppPhase = "intro" | "active" | "transition" | "complete";

/* ── Component ────────────────────────────────────────── */

export function GroundingClient({ faqData }: Props) {
  /* state */
  const [appPhase, setAppPhase] = useState<AppPhase>("intro");
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<string[][]>(STEPS.map((s) => Array(s.count).fill("")));
  const [transitionCountdown, setTransitionCountdown] = useState(0);
  const [pauseEnabled, setPauseEnabled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const firstInputRef = useRef<HTMLInputElement>(null);
  const transitionRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const step = STEPS[stepIndex];
  const colors = COLOR_MAP[step.color];
  const stepAnswers = answers[stepIndex];
  const allFilled = stepAnswers.every((a) => a.trim().length > 0);

  /* focus first input when step changes */
  useEffect(() => {
    if (appPhase === "active") {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [stepIndex, appPhase]);

  /* cleanup transition timer */
  useEffect(() => {
    return () => {
      if (transitionRef.current) clearInterval(transitionRef.current);
    };
  }, []);

  /* ── Actions ───────────────────────────────────────── */

  function handleStart() {
    setStepIndex(0);
    setAnswers(STEPS.map((s) => Array(s.count).fill("")));
    setAppPhase("active");
  }

  function handleInputChange(inputIndex: number, value: string) {
    setAnswers((prev) => {
      const next = prev.map((a) => [...a]);
      next[stepIndex][inputIndex] = value;
      return next;
    });
  }

  function handleNext() {
    if (stepIndex >= STEPS.length - 1) {
      setAppPhase("complete");
      return;
    }

    if (pauseEnabled) {
      setAppPhase("transition");
      setTransitionCountdown(10);
      transitionRef.current = setInterval(() => {
        setTransitionCountdown((prev) => {
          if (prev <= 1) {
            if (transitionRef.current) clearInterval(transitionRef.current);
            transitionRef.current = null;
            setStepIndex((s) => s + 1);
            setAppPhase("active");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setStepIndex((s) => s + 1);
    }
  }

  function handleSkipTransition() {
    if (transitionRef.current) clearInterval(transitionRef.current);
    transitionRef.current = null;
    setStepIndex((s) => s + 1);
    setAppPhase("active");
  }

  function handleBack() {
    if (stepIndex > 0) setStepIndex((s) => s - 1);
  }

  function handleReset() {
    setAppPhase("intro");
    setStepIndex(0);
    setAnswers(STEPS.map((s) => Array(s.count).fill("")));
  }

  /* ── Progress bar ──────────────────────────────────── */

  function ProgressBar() {
    return (
      <div className="mb-6">
        {/* Step dots */}
        <div className="flex items-center justify-center gap-2 mb-3">
          {STEPS.map((s, i) => {
            const done = appPhase === "complete" || i < stepIndex;
            const current = i === stepIndex && appPhase === "active";
            const c = COLOR_MAP[s.color];
            return (
              <div key={s.sense} className="flex items-center gap-2">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    done
                      ? `${c.badge} text-white`
                      : current
                      ? `${c.badge} text-white ring-2 ring-offset-2 dark:ring-offset-night-800 ${c.ring}`
                      : "bg-sand-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500"
                  }`}
                >
                  {done ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    s.count
                  )}
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-6 sm:w-10 h-0.5 ${done ? "bg-sage-400 dark:bg-sage-600" : "bg-sand-200 dark:bg-neutral-700"}`} />
                )}
              </div>
            );
          })}
        </div>
        {/* Sense labels */}
        <div className="flex justify-between px-1 max-w-md mx-auto">
          {STEPS.map((s, i) => (
            <span
              key={s.sense}
              className={`text-[10px] sm:text-xs font-medium ${
                i === stepIndex && appPhase === "active"
                  ? COLOR_MAP[s.color].text
                  : "text-neutral-400 dark:text-neutral-500"
              }`}
            >
              {s.sense}
            </span>
          ))}
        </div>
      </div>
    );
  }

  /* ── Render ────────────────────────────────────────── */

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* H1 */}
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 text-center">
        5-4-3-2-1 Grounding Exercise
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-8">
        A guided sensory grounding technique that may help during moments of anxiety, panic, or dissociation.
        Reconnect with the present moment by engaging your five senses, one at a time.
      </p>

      <AdSlot position="above-tool" />

      {/* ── Tool Card ── */}
      <div className="bg-white dark:bg-night-800 rounded-2xl shadow-lg border border-sand-200 dark:border-neutral-700 p-6 sm:p-8 mb-8">

        {/* ── Intro Screen ── */}
        {appPhase === "intro" && (
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-3 text-4xl" aria-hidden="true">
              {["👁", "✋", "👂", "👃", "👅"].map((e, i) => (
                <span key={i} className="w-12 h-12 flex items-center justify-center rounded-full bg-sand-100 dark:bg-night-700 text-2xl">
                  {e}
                </span>
              ))}
            </div>
            <div className="max-w-md mx-auto">
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                This exercise will guide you through naming things you can <strong>see</strong>, <strong>touch</strong>, <strong>hear</strong>, <strong>smell</strong>, and <strong>taste</strong>.
                Typing out what you notice helps anchor you in the present moment.
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                Takes about 3-5 minutes. Your responses stay in your browser and are never stored.
              </p>
            </div>

            {/* Pause toggle */}
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setPauseEnabled(!pauseEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  pauseEnabled ? "bg-sage-600" : "bg-neutral-300 dark:bg-neutral-600"
                }`}
                role="switch"
                aria-checked={pauseEnabled}
                aria-label="Toggle breathing pause between steps"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    pauseEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-sm text-neutral-600 dark:text-neutral-300">
                Breathing pause between steps (10s)
              </span>
            </div>

            <button
              onClick={handleStart}
              className="px-8 py-4 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 dark:focus:ring-offset-night-800"
            >
              Begin Grounding Exercise
            </button>
          </div>
        )}

        {/* ── Active Step ── */}
        {appPhase === "active" && (
          <div>
            <ProgressBar />

            <div className={`${colors.bg} ${colors.border} border rounded-xl p-5 sm:p-6 mb-5`}>
              {/* Sense icon + label */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full ${colors.badge} flex items-center justify-center`}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>
                <div>
                  <p className={`text-lg font-serif font-bold ${colors.text}`}>
                    {step.count} {step.count === 1 ? "thing" : "things"} you can {step.sense.toLowerCase()}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Step {stepIndex + 1} of 5
                  </p>
                </div>
              </div>

              <p className="text-neutral-600 dark:text-neutral-400 mb-1">
                {step.prompt}
              </p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 italic mb-4">
                {step.hint}
              </p>

              {/* Inputs */}
              <div className="space-y-3">
                {stepAnswers.map((val, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className={`text-sm font-bold w-6 text-center ${colors.text}`}>{i + 1}.</span>
                    <input
                      ref={i === 0 ? firstInputRef : undefined}
                      type="text"
                      value={val}
                      onChange={(e) => handleInputChange(i, e.target.value)}
                      placeholder={`${step.sense} #${i + 1}`}
                      className={`flex-1 px-4 py-3 rounded-lg border border-sand-200 dark:border-neutral-600 bg-white dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 ${colors.ring} transition-colors`}
                      aria-label={`${step.sense} item ${i + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                disabled={stepIndex === 0}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  stepIndex === 0
                    ? "text-neutral-300 dark:text-neutral-600 cursor-not-allowed"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!allFilled}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  allFilled
                    ? "bg-sage-600 hover:bg-sage-700 text-white"
                    : "bg-sage-200 dark:bg-sage-900 text-sage-400 dark:text-sage-700 cursor-not-allowed"
                }`}
              >
                {stepIndex >= STEPS.length - 1 ? "Finish" : "Next Sense"}
              </button>
            </div>
          </div>
        )}

        {/* ── Transition Screen ── */}
        {appPhase === "transition" && (
          <div className="text-center py-8 space-y-6">
            <ProgressBar />
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              Take a slow breath before the next sense...
            </p>
            <p className="text-5xl font-bold text-sage-600 dark:text-sage-400 font-serif">
              {transitionCountdown}
            </p>
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              Next: <strong>{STEPS[stepIndex + 1]?.count}</strong> things you can <strong>{STEPS[stepIndex + 1]?.sense.toLowerCase()}</strong>
            </p>
            <button
              onClick={handleSkipTransition}
              className="px-5 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
            >
              Skip
            </button>
          </div>
        )}

        {/* ── Complete Screen ── */}
        {appPhase === "complete" && (
          <div className="space-y-6">
            <div className="text-center" aria-live="polite">
              <div className="w-16 h-16 rounded-full bg-sage-100 dark:bg-sage-900/40 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage-600 dark:text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-2xl font-serif font-bold text-sage-700 dark:text-sage-400 mb-2">
                You Are Here
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                You just engaged all five senses and reconnected with the present moment.
                You noticed 15 things around you. That takes real awareness.
              </p>
            </div>

            {/* Summary */}
            <div className="bg-sand-50 dark:bg-night-900 rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                What you noticed:
              </h3>
              {STEPS.map((s, si) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={s.sense}>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${c.text} mb-1`}>
                      {s.sense} ({s.count})
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {answers[si].map((a, ai) => (
                        <span
                          key={ai}
                          className={`inline-block px-3 py-1 rounded-full text-sm ${c.bg} ${c.border} border ${c.text}`}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={handleStart}
                className="px-6 py-2.5 rounded-xl bg-sage-600 text-white font-medium text-sm hover:bg-sage-700 transition-colors"
              >
                Do It Again
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
              >
                Back to Start
              </button>
            </div>
          </div>
        )}
      </div>

      <AdSlot position="below-tool" />

      {/* ── How to Use ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          How to Use This Grounding Tool
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <li><strong>Find a comfortable position</strong> — Sit or stand wherever you are. You do not need a quiet room.</li>
          <li><strong>Press &quot;Begin Grounding Exercise&quot;</strong> to start. Optionally turn on the breathing pause to give yourself a moment between senses.</li>
          <li><strong>Follow each step</strong> — The tool will ask you to name things you can see, touch, hear, smell, and taste, one sense at a time.</li>
          <li><strong>Type what you notice</strong> — Writing it out engages your brain more than just thinking about it, which is why this tool uses text inputs.</li>
          <li><strong>Move at your own pace</strong> — There is no time limit. Take as long as you need on each step.</li>
          <li><strong>Review your summary</strong> — At the end, you will see everything you noticed. This is a reminder that you are safe and present.</li>
        </ol>
      </section>

      {/* ── Educational Content ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          How the 5-4-3-2-1 Grounding Technique Works
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
          <p>
            The 5-4-3-2-1 grounding technique is one of the most widely recommended coping strategies for anxiety, panic attacks, and dissociation. It works by redirecting your attention away from distressing thoughts and into the present moment through <strong>sensory awareness</strong>. When anxiety activates your body&apos;s fight-or-flight response, your brain gets locked into &quot;threat mode&quot; — scanning for danger, ruminating on worst-case scenarios, or disconnecting from reality entirely. The 5-4-3-2-1 technique interrupts this cycle by giving your brain a concrete, immediate task: notice what is real and present around you.
          </p>
          <p>
            The counting structure (5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste) is designed to work through your senses from most accessible to least. Vision is the easiest — you can always find 5 things to look at. Taste is the hardest, which is why only one item is asked for. This graduated difficulty keeps you engaged and makes the exercise achievable even during intense anxiety or panic.
          </p>
          <p>
            The technique is rooted in <strong>cognitive behavioral therapy (CBT)</strong> and <strong>dialectical behavior therapy (DBT)</strong>, where grounding is a core distress tolerance skill. Research on mindfulness-based interventions shows that sensory grounding reduces amygdala activation (the brain&apos;s fear center) and increases prefrontal cortex activity (responsible for rational thinking and emotional regulation). A 2019 study in the <em>Journal of Clinical Psychology</em> found that grounding techniques significantly reduced symptoms of acute anxiety and dissociation in clinical populations.
          </p>

          <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
            When to Use the 5-4-3-2-1 Technique
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>During a panic or anxiety attack</li>
            <li>When feeling dissociated or &quot;spaced out&quot;</li>
            <li>After a triggering memory, flashback, or nightmare</li>
            <li>When experiencing intense cravings in recovery</li>
            <li>Before a stressful event to stay centered</li>
            <li>Anytime racing thoughts feel overwhelming</li>
          </ul>

          <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
            Why Typing Helps
          </h3>
          <p>
            Most guided grounding exercises ask you to simply think about what you notice. This tool asks you to <strong>type it out</strong>, which adds a layer of cognitive engagement. Writing activates different brain regions than passive observation — it requires you to find words, organize thoughts, and use your hands. This additional engagement makes the grounding more effective because it gives anxious brain pathways even less room to continue their distress loop.
          </p>
        </div>
      </section>

      <AdSlot position="in-content" />

      {/* ── FAQ ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className="border border-sand-200 dark:border-neutral-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-sand-50 dark:hover:bg-night-700 transition-colors"
                aria-expanded={openFaq === i}
              >
                <h3 className="text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-200 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Tools ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Related Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "/box-breathing-exercise", label: "Box Breathing Exercise", desc: "Visual guided 4-4-4-4 breathing" },
            { href: "/urge-surfing-timer", label: "Urge Surfing Timer", desc: "Guided craving mindfulness tool" },
            { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Test", desc: "7-question anxiety screening" },
            { href: "/halt-check-in", label: "HALT Check-In", desc: "Hungry, Angry, Lonely, Tired" },
            { href: "/coping-skills-randomizer", label: "Coping Skills Randomizer", desc: "Random healthy coping strategy" },
            { href: "/pcl-5-ptsd-screening", label: "PCL-5 PTSD Screening", desc: "20-item PTSD checklist" },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block p-4 rounded-xl border border-sand-200 dark:border-neutral-700 hover:border-sage-400 dark:hover:border-sage-600 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors"
            >
              <p className="font-semibold text-sm text-neutral-700 dark:text-neutral-200">{tool.label}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="mb-8">
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">
            Important Disclaimer
          </h2>
          <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
            This grounding exercise is for educational and wellness purposes only. It is not a medical device, a substitute for professional mental health care, or a treatment for any condition. If you are experiencing a medical or mental health emergency, call 911 or go to your nearest emergency room.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 text-sm">
            <div className="bg-white/60 dark:bg-amber-900/30 rounded-lg p-3 flex-1">
              <p className="font-semibold text-amber-800 dark:text-amber-200">988 Suicide & Crisis Lifeline</p>
              <p className="text-amber-700 dark:text-amber-300">Call or text 988 — 24/7, free & confidential</p>
            </div>
            <div className="bg-white/60 dark:bg-amber-900/30 rounded-lg p-3 flex-1">
              <p className="font-semibold text-amber-800 dark:text-amber-200">SAMHSA National Helpline</p>
              <p className="text-amber-700 dark:text-amber-300">1-800-662-4357 — Treatment referral & info</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Privacy ── */}
      <div className="text-center mb-6">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          Your privacy matters. This tool runs entirely in your browser. Nothing you type is stored, collected, or transmitted.
        </p>
      </div>

      <ToolReviewerBio />

      {/* ── Authoritative Sources ── */}
      <section className="mt-8 mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
          Authoritative Sources
        </h2>
        <ul className="space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <a href="https://www.va.gov/wholehealthlibrary/tools/grounding-techniques.asp" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              VA Whole Health Library — Grounding Techniques
            </a>
          </li>
          <li>
            <a href="https://www.therapistaid.com/therapy-worksheet/grounding-techniques" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              Therapist Aid — Grounding Techniques Worksheet
            </a>
          </li>
          <li>
            <a href="https://dialecticalbehaviortherapy.com/distress-tolerance/grounding/" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              DBT Skills — Grounding as a Distress Tolerance Skill
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

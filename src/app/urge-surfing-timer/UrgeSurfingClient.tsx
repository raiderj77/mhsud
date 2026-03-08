"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── constants ─────────────────────────────────────────── */

const DURATIONS = [5, 10, 15, 20, 30]; // minutes

const PROMPTS = [
  "Notice the urge without judgment.",
  "Where do you feel it in your body?",
  "The urge is peaking — it will pass.",
  "You are not your craving.",
  "Observe the sensation. Don\u2019t push it away.",
  "This feeling is temporary.",
  "You\u2019ve made it through cravings before.",
  "Is the urge getting stronger or weaker?",
  "Imagine the urge as a wave. You\u2019re surfing it.",
  "What would you tell a friend experiencing this?",
  "Notice your thoughts without following them.",
  "Each moment you ride this out, you grow stronger.",
];

const BREATH_PHASES = [
  { label: "Breathe in\u2026", duration: 4 },
  { label: "Hold\u2026", duration: 4 },
  { label: "Breathe out\u2026", duration: 4 },
  { label: "Hold\u2026", duration: 4 },
] as const;

const PROMPT_INTERVAL = 30; // seconds between prompt changes

/* ── types ─────────────────────────────────────────────── */

interface Props {
  faqData: { question: string; answer: string }[];
}

type Phase = "setup" | "active" | "paused" | "complete";

/* ── component ─────────────────────────────────────────── */

export function UrgeSurfingClient({ faqData }: Props) {
  /* state */
  const [selectedMinutes, setSelectedMinutes] = useState(15);
  const [phase, setPhase] = useState<Phase>("setup");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [promptIndex, setPromptIndex] = useState(0);
  const [breathPhaseIndex, setBreathPhaseIndex] = useState(0);
  const [breathProgress, setBreathProgress] = useState(0); // 0-1 within current breath phase
  const [promptsSeen, setPromptsSeen] = useState(1);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const breathRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const promptTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalSeconds = selectedMinutes * 60;
  const elapsed = totalSeconds - secondsLeft;
  const progress = totalSeconds > 0 ? elapsed / totalSeconds : 0;

  /* ── cleanup helper ─────────────────────────────────── */

  const clearAllTimers = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
    if (breathRef.current) { clearInterval(breathRef.current); breathRef.current = null; }
    if (promptTimerRef.current) { clearInterval(promptTimerRef.current); promptTimerRef.current = null; }
  }, []);

  /* ── start / resume ─────────────────────────────────── */

  const startTimers = useCallback(() => {
    /* countdown */
    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearAllTimers();
          setPhase("complete");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    /* breathing: tick every 100ms for smooth circle animation */
    breathRef.current = setInterval(() => {
      setBreathProgress((prev) => {
        const step = 0.1 / BREATH_PHASES[0].duration; // ~100ms tick
        if (prev + step >= 1) {
          setBreathPhaseIndex((pi) => (pi + 1) % BREATH_PHASES.length);
          return 0;
        }
        return prev + step;
      });
    }, 100);

    /* prompts */
    promptTimerRef.current = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % PROMPTS.length);
      setPromptsSeen((prev) => prev + 1);
    }, PROMPT_INTERVAL * 1000);
  }, [clearAllTimers]);

  /* ── actions ─────────────────────────────────────────── */

  const handleStart = () => {
    setSecondsLeft(selectedMinutes * 60);
    setPromptIndex(0);
    setBreathPhaseIndex(0);
    setBreathProgress(0);
    setPromptsSeen(1);
    setPhase("active");
  };

  const handlePause = () => {
    clearAllTimers();
    setPhase("paused");
  };

  const handleResume = () => {
    setPhase("active");
  };

  const handleEndEarly = () => {
    clearAllTimers();
    setPhase("complete");
  };

  const handleReset = () => {
    clearAllTimers();
    setPhase("setup");
    setSecondsLeft(0);
    setPromptIndex(0);
    setBreathPhaseIndex(0);
    setBreathProgress(0);
    setPromptsSeen(1);
  };

  /* ── effects ─────────────────────────────────────────── */

  useEffect(() => {
    if (phase === "active") {
      startTimers();
    }
    return () => clearAllTimers();
  }, [phase, startTimers, clearAllTimers]);

  /* ── format time ─────────────────────────────────────── */

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  /* ── breathing circle scale ─────────────────────────── */

  const breathPhase = BREATH_PHASES[breathPhaseIndex];
  const isInhale = breathPhaseIndex === 0;
  const isExhale = breathPhaseIndex === 2;
  let circleScale = 1;
  if (isInhale) circleScale = 0.6 + 0.4 * breathProgress;
  else if (isExhale) circleScale = 1.0 - 0.4 * breathProgress;
  else if (breathPhaseIndex === 1) circleScale = 1.0; // hold after inhale
  else circleScale = 0.6; // hold after exhale

  /* ── wave path generator ────────────────────────────── */

  const waveTime = useRef(0);
  const [wavePaths, setWavePaths] = useState({ front: "", back: "" });

  useEffect(() => {
    if (phase !== "active") return;
    let raf: number;
    const animate = () => {
      waveTime.current += 0.03;
      const t = waveTime.current;
      const buildPath = (offset: number, amp: number) => {
        let d = `M0,${60 + Math.sin(t + offset) * amp}`;
        for (let x = 10; x <= 400; x += 10) {
          const y = 60 + Math.sin((x / 50) + t + offset) * amp + Math.sin((x / 30) + t * 0.7 + offset) * (amp * 0.5);
          d += ` L${x},${y}`;
        }
        d += " L400,120 L0,120 Z";
        return d;
      };
      setWavePaths({
        back: buildPath(0, 12),
        front: buildPath(2, 16),
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [phase]);

  /* ── render ──────────────────────────────────────────── */

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* H1 */}
      <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3 text-center">
        Urge Surfing Timer
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-center max-w-xl mx-auto mb-8 leading-relaxed">
        Cravings are like waves — they rise, peak, and fall. This guided timer helps you ride the wave using
        mindfulness and breathing, based on{" "}
        <span className="font-medium text-neutral-700 dark:text-neutral-300">Alan Marlatt&rsquo;s urge surfing technique</span>.
        Most cravings pass within 15&ndash;30 minutes.
      </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Last reviewed: March 2026</p>

      <AdSlot position="urge-surfing-top" />

      {/* ─── SETUP SCREEN ─────────────────────────────── */}
      {phase === "setup" && (
        <section className="card p-6 sm:p-8 mb-8" aria-label="Timer setup">
          <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
            Choose Your Duration
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center mb-6">
            Most cravings peak in 15&ndash;20 minutes. Start there if you&rsquo;re unsure.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {DURATIONS.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedMinutes(d)}
                className={`px-5 py-3 rounded-xl text-lg font-semibold transition-all ${
                  selectedMinutes === d
                    ? "bg-sage-600 text-white shadow-md"
                    : "bg-sand-100 dark:bg-night-800 text-neutral-600 dark:text-neutral-300 hover:bg-sage-50 dark:hover:bg-sage-950/30"
                }`}
              >
                {d} min
              </button>
            ))}
          </div>

          {selectedMinutes >= 15 && (
            <p className="text-xs text-sage-600 dark:text-sage-400 text-center mb-6 font-medium">
              Recommended for riding out most cravings
            </p>
          )}

          <div className="text-center">
            <button
              onClick={handleStart}
              className="btn-primary text-lg px-10 py-3"
            >
              Begin Urge Surfing
            </button>
          </div>

          {/* what to expect */}
          <div className="mt-8 pt-6 border-t border-sand-200 dark:border-neutral-700">
            <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-3">What to expect:</h3>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li className="flex gap-2"><span className="text-sage-500 mt-0.5">&#9679;</span> A visual wave animation representing your craving</li>
              <li className="flex gap-2"><span className="text-sage-500 mt-0.5">&#9679;</span> Guided box breathing (4 seconds in, hold, out, hold)</li>
              <li className="flex gap-2"><span className="text-sage-500 mt-0.5">&#9679;</span> Mindfulness prompts every 30 seconds</li>
              <li className="flex gap-2"><span className="text-sage-500 mt-0.5">&#9679;</span> A countdown timer so you know how long is left</li>
            </ul>
          </div>
        </section>
      )}

      {/* ─── ACTIVE / PAUSED SCREEN ───────────────────── */}
      {(phase === "active" || phase === "paused") && (
        <section className="card p-6 sm:p-8 mb-8" aria-label="Active timer" aria-live="polite">
          {/* wave animation */}
          <div className="relative w-full h-28 rounded-xl overflow-hidden bg-gradient-to-b from-sky-50 to-sky-100 dark:from-sky-950/30 dark:to-sky-900/20 mb-6">
            <svg
              viewBox="0 0 400 120"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              {/* back wave */}
              <path
                d={wavePaths.back || "M0,60 L400,60 L400,120 L0,120 Z"}
                fill="rgba(107,163,140,0.25)"
              />
              {/* front wave */}
              <path
                d={wavePaths.front || "M0,60 L400,60 L400,120 L0,120 Z"}
                fill="rgba(107,163,140,0.45)"
              />
            </svg>
            {phase === "paused" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm rounded-xl">
                <span className="text-white font-bold text-lg">Paused</span>
              </div>
            )}
          </div>

          {/* countdown */}
          <div className="text-center mb-6">
            <p className="text-5xl sm:text-6xl font-mono font-bold text-neutral-800 dark:text-neutral-100 tracking-wider">
              {formatTime(secondsLeft)}
            </p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
              {formatTime(elapsed)} elapsed of {selectedMinutes}:00
            </p>
          </div>

          {/* progress bar */}
          <div className="w-full bg-sand-200 dark:bg-night-700 rounded-full h-2 mb-6">
            <div
              className="bg-sage-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${Math.min(progress * 100, 100)}%` }}
            />
          </div>

          {/* breathing circle */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full bg-sage-100 dark:bg-sage-900/40 border-2 border-sage-300 dark:border-sage-700 transition-transform"
                style={{
                  transform: `scale(${circleScale})`,
                  transitionDuration: "100ms",
                }}
              />
              <span className="relative text-sm font-semibold text-sage-700 dark:text-sage-300 text-center px-2">
                {breathPhase.label}
              </span>
            </div>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Box Breathing (4-4-4-4)</p>
          </div>

          {/* mindfulness prompt */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-center mb-6">
            <p className="text-amber-800 dark:text-amber-200 font-medium italic leading-relaxed">
              &ldquo;{PROMPTS[promptIndex]}&rdquo;
            </p>
          </div>

          {/* controls */}
          <div className="flex justify-center gap-3">
            {phase === "active" ? (
              <button
                onClick={handlePause}
                className="px-6 py-2.5 rounded-xl bg-sand-200 dark:bg-night-700 text-neutral-700 dark:text-neutral-300 font-semibold hover:bg-sand-300 dark:hover:bg-night-600 transition-colors"
              >
                Pause
              </button>
            ) : (
              <button
                onClick={handleResume}
                className="btn-primary px-6 py-2.5"
              >
                Resume
              </button>
            )}
            <button
              onClick={handleEndEarly}
              className="px-6 py-2.5 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-500 dark:text-neutral-400 font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors"
            >
              End Early
            </button>
          </div>
        </section>
      )}

      {/* ─── COMPLETION SCREEN ─────────────────────────── */}
      {phase === "complete" && (
        <section className="card p-6 sm:p-8 mb-8 text-center" aria-label="Session complete" aria-live="polite">
          {/* checkmark animation */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-sage-100 dark:bg-sage-900/40 flex items-center justify-center">
            <svg className="w-10 h-10 text-sage-600 dark:text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
            You Rode the Wave
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-6 max-w-md mx-auto leading-relaxed">
            You stayed present through the craving instead of acting on it. That takes real strength.
            Every time you do this, you rewire your brain&rsquo;s response to cravings.
          </p>

          {/* stats */}
          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-6">
            <div className="bg-sage-50 dark:bg-sage-950/30 rounded-xl p-3">
              <p className="text-2xl font-bold text-sage-700 dark:text-sage-400">{formatTime(elapsed)}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Time surfed</p>
            </div>
            <div className="bg-sage-50 dark:bg-sage-950/30 rounded-xl p-3">
              <p className="text-2xl font-bold text-sage-700 dark:text-sage-400">{promptsSeen}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Prompts reflected on</p>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6 max-w-md mx-auto">
            <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
              <span className="font-semibold">Remember:</span> The craving peaked and passed — just like a wave.
              The more you practice this, the easier it gets. You are building new neural pathways every session.
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <button onClick={handleStart} className="btn-primary px-6 py-2.5">
              Start Another Session
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-sand-100 dark:bg-night-800 text-neutral-500 dark:text-neutral-400 font-medium hover:bg-sand-200 dark:hover:bg-night-700 transition-colors"
            >
              Reset
            </button>
          </div>
        </section>
      )}

      <AdSlot position="urge-surfing-mid" />

      {/* ─── EDUCATIONAL CONTENT ───────────────────────── */}
      <section className="prose-custom mb-12">
        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          What Is Urge Surfing?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          Urge surfing is a mindfulness-based technique developed by <strong>Alan Marlatt, PhD</strong>, a
          pioneering researcher in addiction psychology at the University of Washington. The core idea is
          simple but powerful: instead of fighting a craving (which often makes it stronger) or giving in to it,
          you <em>observe</em> it — like watching a wave in the ocean.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          A craving, like a wave, has a natural arc. It builds, reaches a peak, and then subsides. By paying
          attention to the physical sensations and thoughts that come with a craving — without judging them or
          acting on them — you allow the wave to pass on its own. This is the essence of urge surfing: riding
          the wave rather than being pulled under by it.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          The technique is a core component of <strong>Mindfulness-Based Relapse Prevention (MBRP)</strong>,
          developed by Sarah Bowen, PhD, and colleagues, which has been shown in research to reduce relapse
          rates and decrease craving intensity over time.
        </p>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          The Science Behind Cravings
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          Cravings are neurological events. When you encounter a trigger — a place, a person, a feeling, a
          memory — your brain releases dopamine in anticipation of the substance or behavior. This creates the
          intense urge to use. But here is the critical fact: <strong>your brain cannot sustain a craving at
          peak intensity</strong>. The dopamine surge is temporary.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          Research consistently shows that most cravings peak within <strong>15 to 30 minutes</strong> and then
          naturally decline — even without intervention. A study published in <em>Addictive Behaviors</em>
          found that the average craving duration was approximately 11 minutes, with intensity peaking around
          the halfway point. By simply waiting — and observing — you outlast the craving.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          Each time you ride out a craving without acting on it, you weaken the neural pathway that connects
          the trigger to the behavior. Over time, cravings become less frequent and less intense. This is
          neuroplasticity working in your favor.
        </p>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          How to Practice Urge Surfing
        </h2>
        <ol className="space-y-3 text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 list-decimal list-inside">
          <li><strong>Notice the craving.</strong> Acknowledge it without judgment. Say to yourself: &ldquo;I am having a craving right now.&rdquo;</li>
          <li><strong>Start the timer.</strong> Choose 15&ndash;20 minutes. Knowing there is an endpoint makes it easier to commit.</li>
          <li><strong>Focus on your breath.</strong> Use the box breathing pattern: 4 seconds in, 4 seconds hold, 4 seconds out, 4 seconds hold. This activates your parasympathetic nervous system and reduces anxiety.</li>
          <li><strong>Observe your body.</strong> Where do you feel the craving? Your stomach? Chest? Throat? Hands? Notice the sensations without trying to change them.</li>
          <li><strong>Ride the wave.</strong> The craving will intensify, peak, and then begin to fall. Watch it happen. You do not need to do anything except observe.</li>
          <li><strong>Celebrate.</strong> When the timer ends, acknowledge what you just did. You faced a craving head-on and came through the other side.</li>
        </ol>

        {/* internal links */}
        <div className="bg-sage-50 dark:bg-sage-950/30 rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-3 uppercase tracking-wider">
            Related Recovery Tools
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                HALT Check-In
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Check if Hunger, Anger, Loneliness, or Tiredness is driving your craving</span>
            </li>
            <li>
              <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Relapse Prevention Plan
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Build a written plan with triggers, coping strategies, and emergency contacts</span>
            </li>
            <li>
              <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Sobriety Calculator
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Track your progress and celebrate milestones</span>
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
            <details
              key={faq.question}
              className="group card p-0 overflow-hidden"
            >
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

      {REFLECTION_PROMPTS["urge-surfing-timer"] && (
        <ReflectionPrompts
          prompts={REFLECTION_PROMPTS["urge-surfing-timer"].prompts}
          toolName={REFLECTION_PROMPTS["urge-surfing-timer"].toolName}
        />
      )}

      {/* ─── YMYL FOOTER ──────────────────────────────── */}
      <footer className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        {/* disclaimer */}
        <div className="bg-sand-100 dark:bg-night-800 rounded-xl p-5 border border-sand-200 dark:border-neutral-700">
          <p className="font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Clinical Disclaimer</p>
          <p className="leading-relaxed">
            This tool is for educational and self-help purposes only. It is not a substitute for professional
            counseling, therapy, or medical advice. If you are struggling with substance use, please reach out
            to a qualified professional. Urge surfing is a coping technique — it does not replace comprehensive
            recovery support.
          </p>
          <ToolReviewerBio />
        </div>

        {/* crisis resources */}
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

        {/* privacy */}
        <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
          This tool runs entirely in your browser. No data is stored, transmitted, or collected.
          Your session is completely private.
        </p>
      </footer>
    </main>
  );
}

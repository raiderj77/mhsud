"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Presets ──────────────────────────────────────────── */

const PRESETS = [
  { label: "Beginner", desc: "3-3-3-3", values: [3, 3, 3, 3] },
  { label: "Standard", desc: "4-4-4-4", values: [4, 4, 4, 4] },
  { label: "Advanced", desc: "5-5-5-5", values: [5, 5, 5, 5] },
  { label: "Custom", desc: "Set your own", values: [4, 4, 4, 4] },
] as const;

const SESSION_OPTIONS = [
  { label: "2 min", seconds: 120 },
  { label: "5 min", seconds: 300 },
  { label: "10 min", seconds: 600 },
  { label: "Unlimited", seconds: 0 },
];

const PHASE_LABELS = ["Breathe In", "Hold", "Breathe Out", "Hold"] as const;
const PHASE_COLORS = [
  "text-sage-600 dark:text-sage-400",
  "text-amber-600 dark:text-amber-400",
  "text-sky-600 dark:text-sky-400",
  "text-amber-600 dark:text-amber-400",
];

/* ── Types ────────────────────────────────────────────── */

interface Props {
  faqData: { question: string; answer: string }[];
}

type AppPhase = "setup" | "active" | "paused" | "complete";

/* ── Component ────────────────────────────────────────── */

export function BoxBreathingClient({ faqData }: Props) {
  /* setup state */
  const [presetIndex, setPresetIndex] = useState(1); // Standard
  const [customTiming, setCustomTiming] = useState([4, 4, 4, 4]);
  const [sessionIndex, setSessionIndex] = useState(1); // 5 min
  const [soundEnabled, setSoundEnabled] = useState(false);

  /* runtime state */
  const [appPhase, setAppPhase] = useState<AppPhase>("setup");
  const [breathPhase, setBreathPhase] = useState(0); // 0-3
  const [phaseProgress, setPhaseProgress] = useState(0); // 0-1 within current breath phase
  const [cycles, setCycles] = useState(0);
  const [sessionSecondsLeft, setSessionSecondsLeft] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* refs */
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const timing = useMemo(
    () => (presetIndex === 3 ? customTiming : [...PRESETS[presetIndex].values]),
    [presetIndex, customTiming]
  );
  const sessionSeconds = SESSION_OPTIONS[sessionIndex].seconds;

  /* ── Audio helpers ─────────────────────────────────── */

  const initAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = 220;
    gain.gain.value = 0;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    audioCtxRef.current = ctx;
    oscRef.current = osc;
    gainRef.current = gain;
  }, []);

  const updateAudio = useCallback((phase: number, progress: number) => {
    if (!gainRef.current || !oscRef.current || !soundEnabled) return;
    const gain = gainRef.current.gain;
    const osc = oscRef.current;
    const now = audioCtxRef.current!.currentTime;

    if (phase === 0) {
      // Breathe in: rising tone, gentle volume
      osc.frequency.setTargetAtTime(180 + progress * 80, now, 0.1);
      gain.setTargetAtTime(0.08 + progress * 0.04, now, 0.1);
    } else if (phase === 1) {
      // Hold: steady
      osc.frequency.setTargetAtTime(260, now, 0.1);
      gain.setTargetAtTime(0.06, now, 0.1);
    } else if (phase === 2) {
      // Breathe out: falling tone
      osc.frequency.setTargetAtTime(260 - progress * 80, now, 0.1);
      gain.setTargetAtTime(0.08 - progress * 0.04, now, 0.1);
    } else {
      // Hold: quiet
      osc.frequency.setTargetAtTime(180, now, 0.1);
      gain.setTargetAtTime(0.03, now, 0.1);
    }
  }, [soundEnabled]);

  const silenceAudio = useCallback(() => {
    if (gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.1);
    }
  }, []);

  const destroyAudio = useCallback(() => {
    if (oscRef.current) {
      try { oscRef.current.stop(); } catch { /* already stopped */ }
      oscRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    gainRef.current = null;
  }, []);

  /* ── Timer logic ───────────────────────────────────── */

  const clearTick = useCallback(() => {
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
  }, []);

  const startEngine = useCallback(() => {
    const TICK_MS = 50;

    tickRef.current = setInterval(() => {
      setPhaseProgress((prev) => {
        const step = TICK_MS / 1000;
        return prev + step;
      });
    }, TICK_MS);
  }, []);

  /* Phase progression logic — runs on phaseProgress changes */
  useEffect(() => {
    if (appPhase !== "active") return;

    const currentPhaseDuration = timing[breathPhase];
    if (phaseProgress >= currentPhaseDuration) {
      const overflow = phaseProgress - currentPhaseDuration;
      const nextPhase = (breathPhase + 1) % 4;
      setBreathPhase(nextPhase);
      setPhaseProgress(overflow);
      if (nextPhase === 0) {
        setCycles((c) => c + 1);
      }
    }

    updateAudio(breathPhase, phaseProgress / currentPhaseDuration);
  }, [phaseProgress, breathPhase, appPhase, timing, updateAudio]);

  /* Session countdown */
  useEffect(() => {
    if (appPhase !== "active" || sessionSeconds === 0) return;

    const id = setInterval(() => {
      setSessionSecondsLeft((prev) => {
        if (prev <= 1) {
          clearTick();
          silenceAudio();
          setAppPhase("complete");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [appPhase, sessionSeconds, clearTick, silenceAudio]);

  /* cleanup on unmount */
  useEffect(() => {
    return () => {
      clearTick();
      destroyAudio();
    };
  }, [clearTick, destroyAudio]);

  /* ── Actions ───────────────────────────────────────── */

  function handleStart() {
    if (soundEnabled) initAudio();
    setBreathPhase(0);
    setPhaseProgress(0);
    setCycles(0);
    setSessionSecondsLeft(sessionSeconds);
    setAppPhase("active");
    startEngine();
  }

  function handlePause() {
    clearTick();
    silenceAudio();
    setAppPhase("paused");
  }

  function handleResume() {
    if (soundEnabled && !audioCtxRef.current) initAudio();
    setAppPhase("active");
    startEngine();
  }

  function handleStop() {
    clearTick();
    silenceAudio();
    setAppPhase("complete");
  }

  function handleReset() {
    clearTick();
    silenceAudio();
    destroyAudio();
    setAppPhase("setup");
    setBreathPhase(0);
    setPhaseProgress(0);
    setCycles(0);
    setSessionSecondsLeft(0);
  }

  function toggleSound() {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (!next) {
      silenceAudio();
    } else if (appPhase === "active") {
      initAudio();
    }
  }

  /* ── Derived values ────────────────────────────────── */

  const currentPhaseDuration = timing[breathPhase];
  const normalizedProgress = Math.min(phaseProgress / currentPhaseDuration, 1);

  function formatTime(s: number) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  /* ── SVG box animation ─────────────────────────────── */

  function getBoxAnimation() {
    // The box is drawn as 4 segments (top, right, bottom-reverse, left-reverse)
    // Progress traces around the box corresponding to the current phase
    const size = 200;
    const pad = 20;
    const s = pad;
    const e = size - pad;
    const perimeter = (e - s) * 4;

    // How far around the box we are based on completed phases + current progress
    let completedLength = 0;
    for (let i = 0; i < breathPhase; i++) {
      completedLength += (e - s); // each side = one phase
    }
    completedLength += normalizedProgress * (e - s);

    // Dot position along perimeter
    const pos = completedLength;
    let dotX = s, dotY = s;

    if (pos <= (e - s)) {
      // top side: left to right
      dotX = s + pos;
      dotY = s;
    } else if (pos <= 2 * (e - s)) {
      // right side: top to bottom
      dotX = e;
      dotY = s + (pos - (e - s));
    } else if (pos <= 3 * (e - s)) {
      // bottom side: right to left
      dotX = e - (pos - 2 * (e - s));
      dotY = e;
    } else {
      // left side: bottom to top
      dotX = s;
      dotY = e - (pos - 3 * (e - s));
    }

    // Scale factor for the breathing shape (inner pulsing square)
    let scale = 1;
    if (breathPhase === 0) {
      scale = 0.6 + normalizedProgress * 0.4; // expand
    } else if (breathPhase === 1) {
      scale = 1; // hold expanded
    } else if (breathPhase === 2) {
      scale = 1 - normalizedProgress * 0.4; // contract
    } else {
      scale = 0.6; // hold contracted
    }

    const innerPad = 50;
    const center = size / 2;
    const halfInner = ((size - 2 * innerPad) / 2) * scale;

    return { size, s, e, dotX, dotY, center, halfInner, completedLength, perimeter };
  }

  const box = getBoxAnimation();

  /* ── Render ────────────────────────────────────────── */

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* H1 */}
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 text-center">
        Box Breathing Exercise
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-8">
        A free visual guided breathing tool used by Navy SEALs, first responders, and therapists worldwide.
        Box breathing (also called square breathing) may help reduce anxiety, manage stress, and improve focus.
      </p>

      <AdSlot position="above-tool" />

      {/* ── Tool Card ── */}
      <div className="bg-white dark:bg-night-800 rounded-2xl shadow-lg border border-sand-200 dark:border-neutral-700 p-6 sm:p-8 mb-8">

        {/* ── Setup Panel ── */}
        {appPhase === "setup" && (
          <div className="space-y-6">
            {/* Preset selection */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                Breathing Pattern
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {PRESETS.map((p, i) => (
                  <button
                    key={p.label}
                    onClick={() => setPresetIndex(i)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors border ${
                      presetIndex === i
                        ? "bg-sage-600 text-white border-sage-600"
                        : "bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 border-sand-200 dark:border-neutral-600 hover:border-sage-400"
                    }`}
                  >
                    <span className="block font-semibold">{p.label}</span>
                    <span className="block text-xs opacity-80">{p.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom sliders */}
            {presetIndex === 3 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-sand-50 dark:bg-night-900 rounded-xl p-4">
                {PHASE_LABELS.map((label, i) => (
                  <div key={label + i}>
                    <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1">
                      {label}: {customTiming[i]}s
                    </label>
                    <input
                      type="range"
                      min={2}
                      max={8}
                      value={customTiming[i]}
                      onChange={(e) => {
                        const next = [...customTiming];
                        next[i] = Number(e.target.value);
                        setCustomTiming(next);
                      }}
                      className="w-full accent-sage-600"
                      aria-label={`${label} duration in seconds`}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Session length */}
            <div>
              <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                Session Length
              </label>
              <div className="flex flex-wrap gap-2">
                {SESSION_OPTIONS.map((opt, i) => (
                  <button
                    key={opt.label}
                    onClick={() => setSessionIndex(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                      sessionIndex === i
                        ? "bg-sage-600 text-white border-sage-600"
                        : "bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 border-sand-200 dark:border-neutral-600 hover:border-sage-400"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sound toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSound}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  soundEnabled ? "bg-sage-600" : "bg-neutral-300 dark:bg-neutral-600"
                }`}
                role="switch"
                aria-checked={soundEnabled}
                aria-label="Toggle ambient sound"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    soundEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span className="text-sm text-neutral-600 dark:text-neutral-300">
                Ambient sound {soundEnabled ? "on" : "off"}
              </span>
            </div>

            {/* Start button */}
            <button
              onClick={handleStart}
              className="w-full py-4 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sage-400 focus:ring-offset-2 dark:focus:ring-offset-night-800"
            >
              Start Breathing Exercise
            </button>
          </div>
        )}

        {/* ── Active / Paused / Complete ── */}
        {appPhase !== "setup" && (
          <div className="flex flex-col items-center space-y-6">
            {/* Phase label */}
            <div className="text-center" aria-live="polite">
              {appPhase === "complete" ? (
                <p className="text-2xl font-serif font-bold text-sage-700 dark:text-sage-400">
                  Session Complete
                </p>
              ) : (
                <>
                  <p className={`text-2xl sm:text-3xl font-serif font-bold transition-colors ${PHASE_COLORS[breathPhase]}`}>
                    {PHASE_LABELS[breathPhase]}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {Math.ceil(currentPhaseDuration - phaseProgress)}s
                  </p>
                </>
              )}
            </div>

            {/* SVG Animation */}
            <div className="relative">
              <svg
                viewBox={`0 0 ${box.size} ${box.size}`}
                className="w-56 h-56 sm:w-72 sm:h-72"
                aria-hidden="true"
              >
                {/* Outer box - faint guide */}
                <rect
                  x={box.s}
                  y={box.s}
                  width={box.e - box.s}
                  height={box.e - box.s}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="text-sand-300 dark:text-neutral-600"
                  rx={8}
                />

                {/* Traced path */}
                <rect
                  x={box.s}
                  y={box.s}
                  width={box.e - box.s}
                  height={box.e - box.s}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  className="text-sage-500 dark:text-sage-400"
                  rx={8}
                  strokeDasharray={box.perimeter}
                  strokeDashoffset={box.perimeter - box.completedLength}
                  strokeLinecap="round"
                />

                {/* Inner pulsing square */}
                <rect
                  x={box.center - box.halfInner}
                  y={box.center - box.halfInner}
                  width={box.halfInner * 2}
                  height={box.halfInner * 2}
                  rx={6}
                  className={`transition-colors duration-500 ${
                    breathPhase === 0
                      ? "fill-sage-200/50 dark:fill-sage-800/30"
                      : breathPhase === 2
                      ? "fill-sky-200/50 dark:fill-sky-800/30"
                      : "fill-amber-100/40 dark:fill-amber-900/20"
                  }`}
                />

                {/* Tracing dot */}
                {appPhase !== "complete" && (
                  <circle
                    cx={box.dotX}
                    cy={box.dotY}
                    r={7}
                    className="fill-sage-600 dark:fill-sage-400"
                  />
                )}

                {/* Phase labels on sides */}
                <text x={box.center} y={box.s - 6} textAnchor="middle" className="fill-neutral-400 dark:fill-neutral-500 text-[9px]">
                  Breathe In
                </text>
                <text x={box.e + 6} y={box.center} textAnchor="start" className="fill-neutral-400 dark:fill-neutral-500 text-[9px]" transform={`rotate(90, ${box.e + 6}, ${box.center})`}>
                  Hold
                </text>
                <text x={box.center} y={box.e + 14} textAnchor="middle" className="fill-neutral-400 dark:fill-neutral-500 text-[9px]">
                  Breathe Out
                </text>
                <text x={box.s - 6} y={box.center} textAnchor="end" className="fill-neutral-400 dark:fill-neutral-500 text-[9px]" transform={`rotate(-90, ${box.s - 6}, ${box.center})`}>
                  Hold
                </text>
              </svg>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="text-center">
                <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{cycles}</p>
                <p className="text-xs text-neutral-400">Cycles</p>
              </div>
              {sessionSeconds > 0 && (
                <div className="text-center">
                  <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                    {formatTime(sessionSecondsLeft)}
                  </p>
                  <p className="text-xs text-neutral-400">Remaining</p>
                </div>
              )}
              <div className="text-center">
                <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                  {PRESETS[presetIndex]?.desc ?? `${timing.join("-")}`}
                </p>
                <p className="text-xs text-neutral-400">Pattern</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3">
              {appPhase === "active" && (
                <>
                  <button
                    onClick={handlePause}
                    className="px-6 py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 font-medium text-sm hover:bg-amber-200 dark:hover:bg-amber-900/60 transition-colors"
                  >
                    Pause
                  </button>
                  <button
                    onClick={handleStop}
                    className="px-6 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                  >
                    End Session
                  </button>
                  <button
                    onClick={toggleSound}
                    className={`px-3 py-2.5 rounded-xl text-sm transition-colors ${
                      soundEnabled
                        ? "bg-sage-100 dark:bg-sage-900/40 text-sage-700 dark:text-sage-300"
                        : "bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
                    }`}
                    aria-label={soundEnabled ? "Mute sound" : "Unmute sound"}
                  >
                    {soundEnabled ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M17.95 6.05a8 8 0 010 11.9M6.5 8.5H4a1 1 0 00-1 1v5a1 1 0 001 1h2.5l4.5 4V4.5l-4.5 4z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5v14a1 1 0 01-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    )}
                  </button>
                </>
              )}

              {appPhase === "paused" && (
                <>
                  <button
                    onClick={handleResume}
                    className="px-6 py-2.5 rounded-xl bg-sage-600 text-white font-medium text-sm hover:bg-sage-700 transition-colors"
                  >
                    Resume
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                  >
                    Start Over
                  </button>
                </>
              )}

              {appPhase === "complete" && (
                <div className="text-center space-y-4">
                  <div className="bg-sage-50 dark:bg-sage-950/30 rounded-xl p-4">
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                      You completed <strong>{cycles}</strong> breathing {cycles === 1 ? "cycle" : "cycles"}. Great job taking a moment for yourself.
                    </p>
                  </div>
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleStart}
                      className="px-6 py-2.5 rounded-xl bg-sage-600 text-white font-medium text-sm hover:bg-sage-700 transition-colors"
                    >
                      Start Again
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                    >
                      Change Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <AdSlot position="below-tool" />

      {/* ── How to Use ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          How to Use This Box Breathing Tool
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <li><strong>Choose your pattern</strong> — Beginner (3-3-3-3), Standard (4-4-4-4), Advanced (5-5-5-5), or set your own Custom timing.</li>
          <li><strong>Pick a session length</strong> — 2, 5, or 10 minutes. Choose Unlimited if you want to go as long as you need.</li>
          <li><strong>Optionally turn on ambient sound</strong> — A gentle tone rises and falls with your breathing to help you stay focused.</li>
          <li><strong>Press Start</strong> and follow the animated square. The dot traces each side as you breathe in, hold, breathe out, and hold again.</li>
          <li><strong>The inner square expands and contracts</strong> in sync with your breath — let it guide your inhales and exhales.</li>
          <li><strong>Keep going</strong> until the timer ends or you feel calmer. You can pause or end the session at any time.</li>
        </ol>
      </section>

      {/* ── Educational Content ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          What Is Box Breathing?
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
          <p>
            Box breathing — also known as square breathing, four-square breathing, or tactical breathing — is a simple but powerful relaxation technique that involves breathing in a rhythmic pattern with equal intervals. The most common pattern is 4-4-4-4: breathe in for 4 seconds, hold for 4 seconds, breathe out for 4 seconds, and hold again for 4 seconds. Each cycle traces the four sides of a square, which is where the name comes from.
          </p>
          <p>
            This technique is widely used by <strong>Navy SEALs, first responders, elite athletes, and therapists</strong> to manage stress in high-pressure situations. It works by activating the parasympathetic nervous system (your body&apos;s &quot;rest and digest&quot; response), which counteracts the fight-or-flight stress response. The deliberate, slow breathing pattern helps lower heart rate, reduce blood pressure, and calm racing thoughts.
          </p>
          <p>
            Research published in <em>Frontiers in Psychology</em> (2017) found that slow-paced breathing techniques like box breathing significantly reduce cortisol levels and improve attention and emotional regulation. A 2023 study in <em>Cell Reports Medicine</em> by Stanford researchers showed that structured breathing exercises were more effective at reducing anxiety and improving mood than mindfulness meditation alone.
          </p>

          <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
            When to Use Box Breathing
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Before or during an anxiety or panic episode</li>
            <li>When experiencing a craving or urge in recovery</li>
            <li>Before a stressful meeting, presentation, or exam</li>
            <li>During difficulty falling asleep</li>
            <li>After a conflict or emotionally charged conversation</li>
            <li>As a daily mindfulness practice (even 2 minutes helps)</li>
          </ul>

          <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
            Tips for Beginners
          </h3>
          <p>
            If you find the 4-4-4-4 pattern uncomfortable, start with the 3-3-3-3 Beginner pattern and work your way up. Breathe through your nose if you can, but mouth breathing is fine too. Try to breathe into your belly (diaphragmatic breathing) rather than your chest — place a hand on your stomach and feel it rise and fall. There is no wrong way to do this. The goal is simply to slow down and create a steady, rhythmic pattern.
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

      {REFLECTION_PROMPTS["box-breathing-exercise"] && (
        <ReflectionPrompts
          prompts={REFLECTION_PROMPTS["box-breathing-exercise"].prompts}
          toolName={REFLECTION_PROMPTS["box-breathing-exercise"].toolName}
        />
      )}

      {/* ── Related Tools ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Related Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "/urge-surfing-timer", label: "Urge Surfing Timer", desc: "Guided craving mindfulness tool" },
            { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Test", desc: "7-question anxiety screening" },
            { href: "/halt-check-in", label: "HALT Check-In", desc: "Hungry, Angry, Lonely, Tired" },
            { href: "/coping-skills-randomizer", label: "Coping Skills Randomizer", desc: "Random healthy coping strategy" },
            { href: "/sleep-and-mood-check", label: "Sleep & Mood Check", desc: "Sleep-mood connection tool" },
            { href: "/burnout-assessment-tool", label: "Burnout Assessment", desc: "Work burnout self-check" },
          ].map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block p-4 rounded-xl border border-sand-200 dark:border-neutral-700 hover:border-sage-400 dark:hover:border-sage-600 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors"
            >
              <p className="font-semibold text-sm text-neutral-700 dark:text-neutral-200">{tool.label}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{tool.desc}</p>
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
            This box breathing tool is for educational and wellness purposes only. It is not a medical device, a substitute for professional mental health care, or a treatment for any condition. If you are experiencing a medical or mental health emergency, call 911 or go to your nearest emergency room.
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
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Your privacy matters. This tool runs entirely in your browser. No data is stored, collected, or transmitted.
        </p>
      </div>

      <ToolReviewerBio />

      {/* ── Authoritative Sources ── */}
      <section className="mt-8 mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3">
          Authoritative Sources
        </h2>
        <ul className="space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <a href="https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              Harvard Health — Relaxation techniques: Breath control helps quell errant stress response
            </a>
          </li>
          <li>
            <a href="https://www.frontiersin.org/articles/10.3389/fpsyg.2017.00874/full" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              Frontiers in Psychology — The Effect of Diaphragmatic Breathing on Attention, Negative Affect and Stress (2017)
            </a>
          </li>
          <li>
            <a href="https://med.stanford.edu/news/all-news/2023/01/breathing-exercises.html" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              Stanford Medicine — Brief structured breathing exercises enhance mood and reduce physiological arousal (2023)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Types ────────────────────────────────────────────── */

interface WorryEntry {
  id: string;
  date: string;
  text: string;
  timestamp: string;
  stillRelevant?: boolean;
  solvable?: boolean;
  actionStep?: string;
  worstCasePercent?: number;
  processed?: boolean;
}

interface Settings {
  time: string;
  duration: number;
}

interface Props {
  faqData: { question: string; answer: string }[];
}

type Tab = "setup" | "park" | "session";
type SessionPhase = "idle" | "active" | "processing" | "complete";

/* ── Storage ─────────────────────────────────────────── */

const SETTINGS_KEY = "mct-worry-settings";
const LOG_KEY = "mct-worry-log";

function loadSettings(): Settings {
  if (typeof window === "undefined") return { time: "18:00", duration: 20 };
  try {
    const s = localStorage.getItem(SETTINGS_KEY);
    if (s) return JSON.parse(s);
  } catch { /* ignore */ }
  return { time: "18:00", duration: 20 };
}

function saveSettings(s: Settings) {
  try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(s)); } catch { /* ignore */ }
}

function loadWorries(): WorryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const w = localStorage.getItem(LOG_KEY);
    if (w) return JSON.parse(w);
  } catch { /* ignore */ }
  return [];
}

function saveWorries(w: WorryEntry[]) {
  try { localStorage.setItem(LOG_KEY, JSON.stringify(w)); } catch { /* ignore */ }
}

function todayStr() {
  return new Date().toISOString().split("T")[0];
}

/* ── Component ────────────────────────────────────────── */

export function WorryTimeClient({ faqData }: Props) {
  const [tab, setTab] = useState<Tab>("park");
  const [settings, setSettings] = useState<Settings>({ time: "18:00", duration: 20 });
  const [worries, setWorries] = useState<WorryEntry[]>([]);
  const [newWorry, setNewWorry] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* session state */
  const [sessionPhase, setSessionPhase] = useState<SessionPhase>("idle");
  const [sessionSeconds, setSessionSeconds] = useState(0);
  const [currentWorryIndex, setCurrentWorryIndex] = useState(0);
  const [relevantAnswer, setRelevantAnswer] = useState<boolean | null>(null);
  const [solvableAnswer, setSolvableAnswer] = useState<boolean | null>(null);
  const [actionStep, setActionStep] = useState("");
  const [worstCase, setWorstCase] = useState(50);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const today = todayStr();
  const todayWorries = worries.filter((w) => w.date === today);
  const unprocessed = todayWorries.filter((w) => !w.processed);

  /* Load on mount */
  useEffect(() => {
    setSettings(loadSettings());
    setWorries(loadWorries());
    setLoaded(true);
  }, []);

  /* Persist */
  useEffect(() => {
    if (loaded) saveSettings(settings);
  }, [settings, loaded]);

  useEffect(() => {
    if (loaded) saveWorries(worries);
  }, [worries, loaded]);

  /* Timer cleanup */
  useEffect(() => {
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  /* ── Park actions ──────────────────────────────────── */

  function parkWorry() {
    if (!newWorry.trim()) return;
    const entry: WorryEntry = {
      id: Date.now().toString(),
      date: today,
      text: newWorry.trim(),
      timestamp: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }),
      processed: false,
    };
    setWorries((prev) => [entry, ...prev]);
    setNewWorry("");
    inputRef.current?.focus();
  }

  function deleteWorry(id: string) {
    setWorries((prev) => prev.filter((w) => w.id !== id));
  }

  /* ── Session actions ───────────────────────────────── */

  function startSession() {
    setSessionPhase("active");
    setSessionSeconds(0);
    setCurrentWorryIndex(0);
    resetProcessingState();

    timerRef.current = setInterval(() => {
      setSessionSeconds((prev) => prev + 1);
    }, 1000);

    if (unprocessed.length > 0) {
      setSessionPhase("processing");
    } else {
      setSessionPhase("complete");
    }
  }

  function resetProcessingState() {
    setRelevantAnswer(null);
    setSolvableAnswer(null);
    setActionStep("");
    setWorstCase(50);
  }

  function handleNotRelevant() {
    const worry = unprocessed[currentWorryIndex];
    if (!worry) return;
    setWorries((prev) =>
      prev.map((w) => (w.id === worry.id ? { ...w, processed: true, stillRelevant: false } : w))
    );
    advanceToNext();
  }

  function handleStillRelevant() {
    setRelevantAnswer(true);
  }

  function handleFinishWorry() {
    const worry = unprocessed[currentWorryIndex];
    if (!worry) return;
    setWorries((prev) =>
      prev.map((w) =>
        w.id === worry.id
          ? {
              ...w,
              processed: true,
              stillRelevant: true,
              solvable: solvableAnswer ?? undefined,
              actionStep: actionStep.trim() || undefined,
              worstCasePercent: worstCase,
            }
          : w
      )
    );
    advanceToNext();
  }

  function advanceToNext() {
    resetProcessingState();
    const nextIndex = currentWorryIndex + 1;
    if (nextIndex >= unprocessed.length) {
      if (timerRef.current) clearInterval(timerRef.current);
      setSessionPhase("complete");
    } else {
      setCurrentWorryIndex(nextIndex);
    }
  }

  function endSession() {
    if (timerRef.current) clearInterval(timerRef.current);
    setSessionPhase("idle");
  }

  /* ── Stats ─────────────────────────────────────────── */

  function getStats() {
    const last7 = new Date();
    last7.setDate(last7.getDate() - 7);
    const last7Str = last7.toISOString().split("T")[0];
    const recent = worries.filter((w) => w.date >= last7Str && w.processed);
    const total = recent.length;
    const notRelevant = recent.filter((w) => w.stillRelevant === false).length;
    const pct = total > 0 ? Math.round((notRelevant / total) * 100) : 0;
    return { total, notRelevant, pct };
  }

  const stats = getStats();
  const todayProcessed = todayWorries.filter((w) => w.processed);
  const todayNotRelevant = todayProcessed.filter((w) => w.stillRelevant === false).length;

  function formatTime(s: number) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  /* ── Render ────────────────────────────────────────── */

  if (!loaded) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 text-center">
        Worry Time Scheduler
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-8">
        A CBT-based worry postponement tool. Park your worries during the day, then process them
        in a scheduled session with guided prompts. Research shows most worries resolve on their own.
      </p>

      <AdSlot position="above-tool" />

      {/* ── Tool Card ── */}
      <div className="bg-white dark:bg-night-800 rounded-2xl shadow-lg border border-sand-200 dark:border-neutral-700 p-6 sm:p-8 mb-8">

        {/* Tab bar */}
        <div className="flex border-b border-sand-200 dark:border-neutral-700 mb-6">
          {([
            { id: "setup" as Tab, label: "Setup", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
            { id: "park" as Tab, label: "Park It", icon: "M12 4v16m8-8H4", badge: unprocessed.length },
            { id: "session" as Tab, label: "Worry Time", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
          ]).map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 -mb-px transition-colors ${
                tab === t.id
                  ? "border-sage-600 text-sage-700 dark:text-sage-400"
                  : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
              }`}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={t.icon} />
              </svg>
              {t.label}
              {t.badge !== undefined && t.badge > 0 && (
                <span className="ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                  {t.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* ── Setup Tab ── */}
        {tab === "setup" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Schedule Your Worry Time
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Pick a consistent daily time to process your worries. Late afternoon or early evening works well — not right before bed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                  Daily worry time
                </label>
                <input
                  type="time"
                  value={settings.time}
                  onChange={(e) => setSettings((s) => ({ ...s, time: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm focus:outline-none focus:ring-2 focus:ring-sage-400"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                  Session length
                </label>
                <div className="flex gap-2">
                  {[15, 20, 30].map((d) => (
                    <button
                      key={d}
                      onClick={() => setSettings((s) => ({ ...s, duration: d }))}
                      className={`flex-1 py-3 rounded-xl text-sm font-medium border transition-colors ${
                        settings.duration === d
                          ? "bg-sage-600 text-white border-sage-600"
                          : "bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 border-sand-200 dark:border-neutral-600 hover:border-sage-400"
                      }`}
                    >
                      {d} min
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats card */}
            {stats.total > 0 && (
              <div className="bg-sage-50/50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-sage-800 dark:text-sage-300 mb-2">Your 7-Day Insight</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-sage-700 dark:text-sage-400">{stats.total}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Worries parked</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-sage-700 dark:text-sage-400">{stats.pct}%</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Resolved on their own</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-sage-700 dark:text-sage-400">{stats.total - stats.notRelevant}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Needed attention</p>
                  </div>
                </div>
                {stats.pct > 0 && (
                  <p className="text-xs text-sage-600 dark:text-sage-400 mt-3 text-center">
                    {stats.pct >= 50
                      ? "Most of your worries resolved before you even got to them. Your brain is learning that worrying in advance is often unnecessary."
                      : "You are building awareness of your worry patterns. Keep practicing — the insight grows over time."}
                  </p>
                )}
              </div>
            )}

            <div className="bg-sand-50 dark:bg-night-900 rounded-xl p-4 border border-sand-200 dark:border-neutral-700">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <strong>How it works:</strong> Throughout the day, use the <strong>Park It</strong> tab to jot down worries as they come up instead of engaging with them. Then during your scheduled <strong>Worry Time</strong>, go through each one with guided prompts. You will likely find that many worries have already resolved.
              </p>
            </div>
          </div>
        )}

        {/* ── Park It Tab ── */}
        {tab === "park" && (
          <div className="space-y-5">
            <div>
              <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                Park a Worry
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Notice a worry? Write it down here and let it go for now. You will come back to it during your scheduled worry time.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={newWorry}
                onChange={(e) => setNewWorry(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") parkWorry(); }}
                placeholder="What are you worrying about right now?"
                className="flex-1 px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                aria-label="Enter a worry to park"
              />
              <button
                onClick={parkWorry}
                disabled={!newWorry.trim()}
                className={`px-5 py-3 rounded-xl text-sm font-semibold transition-colors shrink-0 ${
                  newWorry.trim()
                    ? "bg-amber-500 hover:bg-amber-600 text-white"
                    : "bg-amber-200 dark:bg-amber-900 text-amber-400 dark:text-amber-700 cursor-not-allowed"
                }`}
              >
                Park It
              </button>
            </div>

            {/* Today's parked worries */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-3">
                Today&apos;s Parked Worries ({todayWorries.length})
              </h3>
              {todayWorries.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-sm text-neutral-400 dark:text-neutral-500">No worries parked today. That can be a good thing.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {todayWorries.map((w) => (
                    <div
                      key={w.id}
                      className={`flex items-start gap-3 px-4 py-3 rounded-xl border transition-colors ${
                        w.processed
                          ? "bg-sand-50/50 dark:bg-night-900/50 border-sand-200 dark:border-neutral-700 opacity-60"
                          : "bg-white dark:bg-night-700 border-sand-200 dark:border-neutral-600"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm ${w.processed ? "line-through text-neutral-400 dark:text-neutral-500" : "text-neutral-700 dark:text-neutral-200"}`}>
                          {w.text}
                        </p>
                        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">
                          {w.timestamp}
                          {w.processed && w.stillRelevant === false && " — resolved on its own"}
                          {w.processed && w.stillRelevant === true && " — addressed"}
                        </p>
                      </div>
                      {!w.processed && (
                        <button
                          onClick={() => deleteWorry(w.id)}
                          className="text-neutral-300 dark:text-neutral-600 hover:text-crisis-500 transition-colors shrink-0 mt-0.5"
                          aria-label="Delete worry"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {unprocessed.length > 0 && (
              <button
                onClick={() => { setTab("session"); startSession(); }}
                className="w-full py-3 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-sm transition-colors"
              >
                Start Worry Time ({unprocessed.length} {unprocessed.length === 1 ? "worry" : "worries"} to process)
              </button>
            )}
          </div>
        )}

        {/* ── Worry Time Session Tab ── */}
        {tab === "session" && (
          <div className="space-y-5">
            {/* Idle state */}
            {sessionPhase === "idle" && (
              <div className="text-center space-y-4 py-4">
                <h2 className="text-lg font-serif font-bold text-neutral-800 dark:text-neutral-100">
                  Worry Time Session
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Your scheduled worry time: <strong>{settings.time}</strong> for <strong>{settings.duration} minutes</strong>
                </p>
                {unprocessed.length > 0 ? (
                  <button
                    onClick={startSession}
                    className="px-8 py-3.5 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold transition-colors"
                  >
                    Start Session ({unprocessed.length} {unprocessed.length === 1 ? "worry" : "worries"})
                  </button>
                ) : (
                  <div className="bg-sage-50/50 dark:bg-sage-950/20 rounded-xl p-5">
                    <p className="text-sm text-sage-700 dark:text-sage-400">
                      No unprocessed worries today. Go to the <strong>Park It</strong> tab to add worries throughout the day, then come back here during your worry time.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Processing a worry */}
            {sessionPhase === "processing" && unprocessed[currentWorryIndex] && (
              <div className="space-y-5">
                {/* Session header */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    Worry {currentWorryIndex + 1} of {unprocessed.length}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400">{formatTime(sessionSeconds)}</span>
                    <button
                      onClick={endSession}
                      className="text-xs text-neutral-400 hover:text-crisis-600 transition-colors"
                    >
                      End session
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-1.5 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-sage-500 rounded-full transition-all"
                    style={{ width: `${((currentWorryIndex) / unprocessed.length) * 100}%` }}
                  />
                </div>

                {/* The worry */}
                <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                    Parked at {unprocessed[currentWorryIndex].timestamp}
                  </p>
                  <p className="text-neutral-800 dark:text-neutral-100 font-medium">
                    {unprocessed[currentWorryIndex].text}
                  </p>
                </div>

                {/* Step 1: Still relevant? */}
                {relevantAnswer === null && (
                  <div className="text-center space-y-3">
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                      Is this worry still bothering you right now?
                    </p>
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={handleNotRelevant}
                        className="px-6 py-2.5 rounded-xl bg-sage-100 dark:bg-sage-900/40 text-sage-700 dark:text-sage-300 font-medium text-sm hover:bg-sage-200 dark:hover:bg-sage-900/60 transition-colors"
                      >
                        No, it resolved
                      </button>
                      <button
                        onClick={handleStillRelevant}
                        className="px-6 py-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-medium text-sm hover:bg-amber-200 dark:hover:bg-amber-900/60 transition-colors"
                      >
                        Yes, still worried
                      </button>
                    </div>
                  </div>
                )}

                {/* Steps 2-4: Process the worry */}
                {relevantAnswer === true && (
                  <div className="space-y-5">
                    {/* Solvable? */}
                    <div>
                      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                        Is this worry about something you can take action on?
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSolvableAnswer(true)}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                            solvableAnswer === true
                              ? "bg-sage-600 text-white border-sage-600"
                              : "bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 border-sand-200 dark:border-neutral-600 hover:border-sage-400"
                          }`}
                        >
                          Yes, solvable
                        </button>
                        <button
                          onClick={() => setSolvableAnswer(false)}
                          className={`flex-1 py-2.5 rounded-xl text-sm font-medium border transition-colors ${
                            solvableAnswer === false
                              ? "bg-sage-600 text-white border-sage-600"
                              : "bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 border-sand-200 dark:border-neutral-600 hover:border-sage-400"
                          }`}
                        >
                          No, unsolvable
                        </button>
                      </div>
                    </div>

                    {/* Action step or acceptance */}
                    {solvableAnswer === true && (
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">
                          What is one small action step you can take?
                        </label>
                        <input
                          type="text"
                          value={actionStep}
                          onChange={(e) => setActionStep(e.target.value)}
                          placeholder="e.g. Send that email, make the appointment, talk to..."
                          className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400"
                        />
                      </div>
                    )}

                    {solvableAnswer === false && (
                      <div className="bg-sky-50/50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                        <p className="text-sm text-sky-700 dark:text-sky-400 leading-relaxed">
                          This worry is about something outside your control. Can you practice accepting uncertainty about this for now? You have acknowledged the worry — you do not need to solve it to let it go.
                        </p>
                      </div>
                    )}

                    {/* Worst case likelihood */}
                    {solvableAnswer !== null && (
                      <div>
                        <label className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                          <span>How likely is the worst-case scenario?</span>
                          <span className="font-bold text-neutral-800 dark:text-neutral-100">{worstCase}%</span>
                        </label>
                        <input
                          type="range" min={0} max={100} value={worstCase}
                          onChange={(e) => setWorstCase(Number(e.target.value))}
                          className="w-full accent-sage-600"
                          aria-label="Worst case likelihood"
                        />
                        <div className="flex justify-between text-xs text-neutral-400">
                          <span>Not at all likely</span><span>Certain</span>
                        </div>
                      </div>
                    )}

                    {/* Finish this worry */}
                    {solvableAnswer !== null && (
                      <button
                        onClick={handleFinishWorry}
                        className="w-full py-3 rounded-xl bg-sage-600 hover:bg-sage-700 text-white font-semibold text-sm transition-colors"
                      >
                        {currentWorryIndex + 1 < unprocessed.length ? "Next Worry" : "Finish Session"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Session complete */}
            {sessionPhase === "complete" && (
              <div className="space-y-5 text-center" aria-live="polite">
                <div className="w-14 h-14 rounded-full bg-sage-100 dark:bg-sage-900/40 flex items-center justify-center mx-auto">
                  <svg className="w-7 h-7 text-sage-600 dark:text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl font-serif font-bold text-sage-700 dark:text-sage-400">Worry Time Complete</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Session length: {formatTime(sessionSeconds)}
                </p>

                {/* Session stats */}
                {todayProcessed.length > 0 && (
                  <div className="bg-sand-50 dark:bg-night-900 rounded-xl p-5 text-left space-y-3">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">{todayProcessed.length}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">Worries processed</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-sage-600 dark:text-sage-400">{todayNotRelevant}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">Already resolved</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{todayProcessed.length - todayNotRelevant}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">Needed attention</p>
                      </div>
                    </div>
                    {todayNotRelevant > 0 && (
                      <p className="text-sm text-sage-600 dark:text-sage-400 text-center">
                        {Math.round((todayNotRelevant / todayProcessed.length) * 100)}% of today&apos;s worries resolved on their own.
                        This is your brain learning that most worries don&apos;t need immediate attention.
                      </p>
                    )}
                  </div>
                )}

                <div className="flex gap-3 justify-center">
                  <button
                    onClick={() => { setSessionPhase("idle"); setTab("park"); }}
                    className="px-6 py-2.5 rounded-xl bg-sage-600 text-white font-medium text-sm hover:bg-sage-700 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <AdSlot position="below-tool" />

      {/* ── How to Use ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          How to Use This Tool
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          <li><strong>Set your worry time</strong> — In the Setup tab, pick a daily time (late afternoon works well) and session length (15-30 min).</li>
          <li><strong>Park worries throughout the day</strong> — When a worry pops up, go to the Park It tab and write it down. Tell yourself: &quot;I&apos;ll deal with this during worry time.&quot;</li>
          <li><strong>Start your session at the scheduled time</strong> — The Worry Time tab walks you through each parked worry with guided questions.</li>
          <li><strong>For each worry, ask yourself</strong> — Is it still bothering me? Is it solvable? What is one action step? How likely is the worst case?</li>
          <li><strong>Notice the pattern</strong> — Over time, you will see that many worries resolve on their own before you ever get to worry time. This builds confidence in your ability to let worries go.</li>
        </ol>
      </section>

      {/* ── Educational Content ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          What Is the Worry Time Technique?
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
          <p>
            The worry time technique (also called worry postponement or stimulus control for worry) is a <strong>cognitive behavioral therapy (CBT) strategy</strong> specifically designed for people who struggle with chronic worrying and generalized anxiety. Instead of trying to suppress worries — which research shows actually makes them worse — you give yourself <strong>permission to worry, but only at a specific scheduled time</strong>.
          </p>
          <p>
            The technique was developed within the CBT framework for <strong>generalized anxiety disorder (GAD)</strong> and has been studied extensively. A key study by Borkovec, Wilkinson, Folensbee, and Lerman (1983) found that participants who postponed their worrying to a designated period experienced a <strong>significant reduction in anxiety and worry frequency</strong> compared to those who tried to control their worrying in the moment. More recent research published in <em>Behaviour Research and Therapy</em> (2015) confirmed that worry postponement reduces both the frequency and intensity of worry episodes.
          </p>
          <p>
            The technique works through several mechanisms. First, it <strong>breaks the habit loop</strong> of responding to every anxious thought with immediate engagement. Second, it creates <strong>temporal distance</strong> between the trigger and the response, which allows the anxiety to naturally subside. Third, it provides <strong>concrete evidence</strong> that most worries resolve on their own — research suggests that approximately <strong>85% of the things people worry about</strong> never actually happen, and of the 15% that do, 79% of people handle them better than they expected (LaLeche, 2019).
          </p>

          <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
            Tips for Success
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Be consistent</strong> — Same time every day. Consistency trains your brain to postpone worry automatically.</li>
            <li><strong>Write it down, then let it go</strong> — The act of writing tells your brain &quot;I won&apos;t forget this,&quot; which makes it easier to disengage.</li>
            <li><strong>Keep worry time away from bedtime</strong> — At least 2 hours before sleep. Worry time should not bleed into rest time.</li>
            <li><strong>If worry time feels too long, that&apos;s a good sign</strong> — It means you are running out of things to worry about.</li>
            <li><strong>Combine with other techniques</strong> — Box breathing before worry time, or the cognitive distortion identifier during it, can make sessions even more effective.</li>
          </ul>
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
            <div key={i} className="border border-sand-200 dark:border-neutral-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-sand-50 dark:hover:bg-night-700 transition-colors"
                aria-expanded={openFaq === i}
              >
                <h3 className="text-sm sm:text-base font-semibold text-neutral-700 dark:text-neutral-200 pr-4">{faq.question}</h3>
                <svg className={`w-5 h-5 text-neutral-400 transition-transform shrink-0 ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-5 pb-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {REFLECTION_PROMPTS["worry-time-scheduler"] && (
        <ReflectionPrompts
          prompts={REFLECTION_PROMPTS["worry-time-scheduler"].prompts}
          toolName={REFLECTION_PROMPTS["worry-time-scheduler"].toolName}
        />
      )}

      {/* ── Related Tools ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "/cognitive-distortion-identifier", label: "Cognitive Distortion Identifier", desc: "Identify thinking errors in your thoughts" },
            { href: "/cbt-thought-record", label: "CBT Thought Record", desc: "7-column thought diary worksheet" },
            { href: "/box-breathing-exercise", label: "Box Breathing Exercise", desc: "Visual guided breathing for calm" },
            { href: "/five-senses-grounding", label: "5-4-3-2-1 Grounding", desc: "Sensory grounding for anxiety" },
            { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Test", desc: "7-question anxiety screening" },
            { href: "/coping-skills-randomizer", label: "Coping Skills Randomizer", desc: "Random healthy coping strategy" },
          ].map((tool) => (
            <Link key={tool.href} href={tool.href} className="block p-4 rounded-xl border border-sand-200 dark:border-neutral-700 hover:border-sage-400 dark:hover:border-sage-600 hover:bg-sage-50 dark:hover:bg-sage-950/20 transition-colors">
              <p className="font-semibold text-sm text-neutral-700 dark:text-neutral-200">{tool.label}</p>
              <p className="text-xs text-neutral-400 dark:text-neutral-500">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="mb-8">
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Disclaimer</h2>
          <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
            This tool is for educational and wellness purposes only. It is not therapy, not a substitute for professional mental health care, and not a treatment for any condition. If you are experiencing persistent, uncontrollable worry or anxiety, please consult a qualified mental health professional. Generalized anxiety disorder is highly treatable.
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

      <div className="text-center mb-6">
        <p className="text-xs text-neutral-400 dark:text-neutral-500">
          Your privacy matters. Your worry log is saved only in your browser&apos;s local storage on this device. Nothing is sent to any server, collected, or shared.
        </p>
      </div>

      <ToolReviewerBio />

      <section className="mt-8 mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">Authoritative Sources</h2>
        <ul className="space-y-1 text-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <a href="https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              American Psychological Association — Cognitive Behavioral Therapy
            </a>
          </li>
          <li>
            <a href="https://adaa.org/understanding-anxiety/generalized-anxiety-disorder-gad" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              Anxiety and Depression Association of America — Generalized Anxiety Disorder
            </a>
          </li>
          <li>
            <a href="https://www.nimh.nih.gov/health/topics/generalized-anxiety-disorder-gad" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              National Institute of Mental Health — Generalized Anxiety Disorder
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

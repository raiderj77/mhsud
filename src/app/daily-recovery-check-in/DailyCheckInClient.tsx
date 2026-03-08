"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── types ─────────────────────────────────────────────── */

interface CheckIn {
  date: string; // YYYY-MM-DD
  mood: number;
  craving: number;
  sleep: number;
  stress: number;
  connection: number;
  physical: number;
  gratitude: string;
  goal: string;
}

interface DimConfig {
  key: keyof Omit<CheckIn, "date" | "gratitude" | "goal">;
  label: string;
  question: string;
  lowLabel: string;
  highLabel: string;
}

interface Props {
  faqData: { question: string; answer: string }[];
}

type View = "form" | "dashboard";
type TrendRange = 7 | 30;

/* ── constants ─────────────────────────────────────────── */

const STORAGE_KEY = "mct-recovery-checkins";

const DIMENSIONS: DimConfig[] = [
  { key: "mood", label: "Mood", question: "How are you feeling overall?", lowLabel: "Struggling", highLabel: "Great" },
  { key: "craving", label: "Cravings", question: "How manageable are your cravings?", lowLabel: "Intense", highLabel: "None" },
  { key: "sleep", label: "Sleep", question: "How well did you sleep last night?", lowLabel: "Terrible", highLabel: "Excellent" },
  { key: "stress", label: "Stress", question: "How calm or stressed are you?", lowLabel: "Extreme", highLabel: "Calm" },
  { key: "connection", label: "Connection", question: "How connected do you feel to others?", lowLabel: "Isolated", highLabel: "Connected" },
  { key: "physical", label: "Physical", question: "How does your body feel today?", lowLabel: "Poor", highLabel: "Strong" },
];

const today = () => new Date().toISOString().split("T")[0];

/* ── helpers ────────────────────────────────────────────── */

function loadCheckins(): CheckIn[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveCheckins(entries: CheckIn[]) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(entries)); } catch {}
}

function scoreColor(val: number): string {
  if (val <= 3) return "bg-crisis-500";
  if (val <= 6) return "bg-amber-400";
  return "bg-sage-500";
}

function scoreTextColor(val: number): string {
  if (val <= 3) return "text-crisis-600 dark:text-crisis-400";
  if (val <= 6) return "text-amber-600 dark:text-amber-400";
  return "text-sage-600 dark:text-sage-400";
}

function calcOverall(entry: CheckIn): number {
  const sum = entry.mood + entry.craving + entry.sleep + entry.stress + entry.connection + entry.physical;
  return Math.round((sum / 6) * 10) / 10;
}

function calcStreak(entries: CheckIn[]): { current: number; longest: number } {
  if (entries.length === 0) return { current: 0, longest: 0 };
  const dates = new Set(entries.map((e) => e.date));
  let current = 0;
  const d = new Date();
  // check if today exists
  const todayStr = today();
  if (!dates.has(todayStr)) {
    // check yesterday — if yesterday exists, streak is still alive (hasn't checked in yet today)
    const yesterday = new Date(d);
    yesterday.setDate(yesterday.getDate() - 1);
    const yStr = yesterday.toISOString().split("T")[0];
    if (!dates.has(yStr)) {
      // no check-in today or yesterday — streak is 0
      // but still compute longest
      return { current: 0, longest: computeLongest(entries) };
    }
    // count backward from yesterday
    const cursor = new Date(yesterday);
    while (dates.has(cursor.toISOString().split("T")[0])) {
      current++;
      cursor.setDate(cursor.getDate() - 1);
    }
  } else {
    // count backward from today
    const cursor = new Date(d);
    while (dates.has(cursor.toISOString().split("T")[0])) {
      current++;
      cursor.setDate(cursor.getDate() - 1);
    }
  }
  return { current, longest: Math.max(current, computeLongest(entries)) };
}

function computeLongest(entries: CheckIn[]): number {
  if (entries.length === 0) return 0;
  const sorted = entries.map((e) => e.date).sort();
  let longest = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i - 1]);
    const curr = new Date(sorted[i]);
    const diff = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);
    if (diff === 1) { run++; longest = Math.max(longest, run); }
    else if (diff > 1) { run = 1; }
  }
  return longest;
}

function getEntriesForRange(entries: CheckIn[], days: number): CheckIn[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const cutoffStr = cutoff.toISOString().split("T")[0];
  return entries.filter((e) => e.date >= cutoffStr).sort((a, b) => a.date.localeCompare(b.date));
}

function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/* ── component ─────────────────────────────────────────── */

export function DailyCheckInClient({ faqData }: Props) {
  const [entries, setEntries] = useState<CheckIn[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState<View>("form");
  const [trendRange, setTrendRange] = useState<TrendRange>(7);

  /* form state */
  const [mood, setMood] = useState(5);
  const [craving, setCraving] = useState(5);
  const [sleep, setSleep] = useState(5);
  const [stress, setStress] = useState(5);
  const [connection, setConnection] = useState(5);
  const [physical, setPhysical] = useState(5);
  const [gratitude, setGratitude] = useState("");
  const [goal, setGoal] = useState("");

  /* load from localStorage on mount */
  useEffect(() => {
    const data = loadCheckins();
    setEntries(data);
    const todayEntry = data.find((e) => e.date === today());
    if (todayEntry) {
      setMood(todayEntry.mood);
      setCraving(todayEntry.craving);
      setSleep(todayEntry.sleep);
      setStress(todayEntry.stress);
      setConnection(todayEntry.connection);
      setPhysical(todayEntry.physical);
      setGratitude(todayEntry.gratitude);
      setGoal(todayEntry.goal);
      setView("dashboard");
    }
    setLoaded(true);
  }, []);

  /* ── save check-in ──────────────────────────────────── */

  const handleSave = useCallback(() => {
    const entry: CheckIn = { date: today(), mood, craving, sleep, stress, connection, physical, gratitude: gratitude.trim(), goal: goal.trim() };
    const updated = entries.filter((e) => e.date !== today());
    updated.push(entry);
    updated.sort((a, b) => a.date.localeCompare(b.date));
    setEntries(updated);
    saveCheckins(updated);
    setView("dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [mood, craving, sleep, stress, connection, physical, gratitude, goal, entries]);

  const handleEdit = () => setView("form");

  const handleClearAll = () => {
    if (!confirm("This will permanently delete all your check-in history. This cannot be undone. Continue?")) return;
    setEntries([]);
    saveCheckins([]);
    setMood(5); setCraving(5); setSleep(5); setStress(5); setConnection(5); setPhysical(5);
    setGratitude(""); setGoal("");
    setView("form");
  };

  /* ── computed ────────────────────────────────────────── */

  const todayEntry = entries.find((e) => e.date === today());
  const streak = calcStreak(entries);
  const trendEntries = getEntriesForRange(entries, trendRange);
  const overallToday = todayEntry ? calcOverall(todayEntry) : 0;

  /* slider setters map */
  const setters: Record<string, (v: number) => void> = {
    mood: setMood, craving: setCraving, sleep: setSleep,
    stress: setStress, connection: setConnection, physical: setPhysical,
  };
  const values: Record<string, number> = { mood, craving, sleep, stress, connection, physical };

  if (!loaded) {
    return (
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center py-20 text-neutral-400 dark:text-neutral-500">Loading...</div>
      </main>
    );
  }

  /* ── render ──────────────────────────────────────────── */

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3 text-center">
        Daily Recovery Check-In
      </h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-center max-w-xl mx-auto mb-2 leading-relaxed">
        A quick daily wellness check to track how you are doing in recovery. Takes under 2 minutes.
        Your data saves in your browser so you can see trends over time.
      </p>
      <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mb-8">
        Data is stored in your browser only. It is never sent anywhere.
      </p>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Last reviewed: March 2026</p>

      <AdSlot position="daily-top" />

      {/* ─── CHECK-IN FORM ─────────────────────────────── */}
      {view === "form" && (
        <section className="card p-6 sm:p-8 mb-8" aria-label="Daily check-in form">
          <h2 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1 text-center">
            {todayEntry ? "Edit Today\u2019s Check-In" : "Today\u2019s Check-In"}
          </h2>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mb-6">
            {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
          </p>

          {/* sliders */}
          <div className="space-y-6 mb-8">
            {DIMENSIONS.map((dim) => {
              const val = values[dim.key];
              return (
                <div key={dim.key}>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300" htmlFor={`slider-${dim.key}`}>
                      {dim.question}
                    </label>
                    <span className={`text-lg font-bold ${scoreTextColor(val)}`}>{val}</span>
                  </div>
                  <input
                    id={`slider-${dim.key}`}
                    type="range"
                    min={1}
                    max={10}
                    value={val}
                    onChange={(e) => setters[dim.key](Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer accent-sage-600 bg-sand-200 dark:bg-night-700"
                  />
                  <div className="flex justify-between text-[10px] text-neutral-400 dark:text-neutral-500 mt-0.5">
                    <span>{dim.lowLabel}</span>
                    <span>{dim.highLabel}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* text inputs */}
          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="gratitude" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 block mb-1">
                One thing you are grateful for today
              </label>
              <input
                id="gratitude"
                type="text"
                value={gratitude}
                onChange={(e) => setGratitude(e.target.value)}
                placeholder="e.g., A good conversation with a friend"
                maxLength={200}
                className="w-full px-3 py-2.5 rounded-lg border border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-500"
              />
            </div>
            <div>
              <label htmlFor="goal" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 block mb-1">
                One goal for today
              </label>
              <input
                id="goal"
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g., Call my sponsor, go to a meeting"
                maxLength={200}
                className="w-full px-3 py-2.5 rounded-lg border border-sand-200 dark:border-neutral-700 bg-white dark:bg-night-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-500"
              />
            </div>
          </div>

          <div className="text-center">
            <button onClick={handleSave} className="btn-primary text-base px-10 py-3">
              {todayEntry ? "Update Check-In" : "Save Check-In"}
            </button>
          </div>
        </section>
      )}

      {/* ─── DASHBOARD ─────────────────────────────────── */}
      {view === "dashboard" && todayEntry && (
        <div>
          {/* streak + overall */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="card p-4 text-center">
              <p className="text-3xl font-bold text-sage-600 dark:text-sage-400">{streak.current}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Day Streak</p>
              {streak.longest > streak.current && (
                <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1">Best: {streak.longest} days</p>
              )}
            </div>
            <div className="card p-4 text-center">
              <p className={`text-3xl font-bold ${scoreTextColor(Math.round(overallToday))}`}>{overallToday}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Overall Today</p>
              <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1">Average of 6 scores</p>
            </div>
          </div>

          {/* today snapshot */}
          <section className="card p-5 sm:p-6 mb-6" aria-label="Today's scores">
            <h2 className="font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Today &mdash; {formatDateShort(todayEntry.date)}
            </h2>
            <div className="space-y-3 mb-4">
              {DIMENSIONS.map((dim) => {
                const val = todayEntry[dim.key] as number;
                return (
                  <div key={dim.key} className="flex items-center gap-3">
                    <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 w-20 shrink-0">{dim.label}</span>
                    <div className="flex-1 bg-sand-200 dark:bg-night-700 rounded-full h-3">
                      <div className={`h-3 rounded-full transition-all ${scoreColor(val)}`} style={{ width: `${val * 10}%` }} />
                    </div>
                    <span className={`text-sm font-bold w-6 text-right ${scoreTextColor(val)}`}>{val}</span>
                  </div>
                );
              })}
            </div>

            {/* gratitude & goal */}
            {todayEntry.gratitude && (
              <div className="bg-sage-50 dark:bg-sage-950/30 rounded-lg p-3 mb-2">
                <p className="text-xs font-semibold text-sage-700 dark:text-sage-400 mb-0.5">Grateful for:</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{todayEntry.gratitude}</p>
              </div>
            )}
            {todayEntry.goal && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-0.5">Today&rsquo;s goal:</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{todayEntry.goal}</p>
              </div>
            )}

            <div className="mt-4 text-center">
              <button onClick={handleEdit} className="text-sm text-sage-600 dark:text-sage-400 font-medium hover:underline">
                Edit Today&rsquo;s Check-In
              </button>
            </div>
          </section>

          {/* trend chart */}
          {entries.length > 1 && (
            <section className="card p-5 sm:p-6 mb-6" aria-label="Trend chart">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-serif font-bold text-neutral-800 dark:text-neutral-100">Trends</h2>
                <div className="flex gap-1">
                  {([7, 30] as TrendRange[]).map((r) => (
                    <button
                      key={r}
                      onClick={() => setTrendRange(r)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                        trendRange === r
                          ? "bg-sage-600 text-white"
                          : "bg-sand-100 dark:bg-night-800 text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {r}d
                    </button>
                  ))}
                </div>
              </div>

              {trendEntries.length === 0 ? (
                <p className="text-sm text-neutral-400 dark:text-neutral-500 text-center py-4">
                  No entries in the last {trendRange} days.
                </p>
              ) : (
                <>
                  {/* overall bar chart */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">Overall Wellness</p>
                    <div className="flex items-end gap-1" style={{ height: "120px" }}>
                      {trendEntries.map((entry) => {
                        const overall = calcOverall(entry);
                        const pct = (overall / 10) * 100;
                        const isToday = entry.date === today();
                        return (
                          <div key={entry.date} className="flex-1 flex flex-col items-center justify-end h-full min-w-0">
                            <span className={`text-[9px] font-bold mb-1 ${scoreTextColor(Math.round(overall))}`}>
                              {overall}
                            </span>
                            <div
                              className={`w-full rounded-t transition-all ${isToday ? "ring-2 ring-sage-400" : ""} ${scoreColor(Math.round(overall))}`}
                              style={{ height: `${Math.max(pct, 5)}%` }}
                              title={`${formatDateShort(entry.date)}: ${overall}/10`}
                            />
                            <span className="text-[8px] text-neutral-400 dark:text-neutral-500 mt-1 truncate w-full text-center">
                              {trendRange <= 7 || trendEntries.length <= 10
                                ? formatDateShort(entry.date).replace(/\s/, "\n")
                                : ""}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* dimension averages */}
                  <div>
                    <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                      {trendRange}-Day Averages
                    </p>
                    <div className="space-y-2">
                      {DIMENSIONS.map((dim) => {
                        const avg = trendEntries.length > 0
                          ? Math.round((trendEntries.reduce((s, e) => s + (e[dim.key] as number), 0) / trendEntries.length) * 10) / 10
                          : 0;
                        return (
                          <div key={dim.key} className="flex items-center gap-3">
                            <span className="text-xs text-neutral-500 dark:text-neutral-400 w-20 shrink-0">{dim.label}</span>
                            <div className="flex-1 bg-sand-200 dark:bg-night-700 rounded-full h-2">
                              <div className={`h-2 rounded-full ${scoreColor(Math.round(avg))}`} style={{ width: `${avg * 10}%` }} />
                            </div>
                            <span className={`text-xs font-bold w-8 text-right ${scoreTextColor(Math.round(avg))}`}>{avg}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </section>
          )}

          {/* history */}
          {entries.length > 1 && (
            <section className="card p-5 sm:p-6 mb-6" aria-label="Check-in history">
              <h2 className="font-serif font-bold text-neutral-800 dark:text-neutral-100 mb-3">History</h2>
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {[...entries].reverse().map((entry) => {
                  const overall = calcOverall(entry);
                  const isToday = entry.date === today();
                  return (
                    <details key={entry.date} className={`rounded-lg border ${isToday ? "border-sage-300 dark:border-sage-700 bg-sage-50/50 dark:bg-sage-950/20" : "border-sand-200 dark:border-neutral-700"}`}>
                      <summary className="flex items-center justify-between p-3 cursor-pointer select-none hover:bg-sand-50 dark:hover:bg-night-800 rounded-lg transition-colors">
                        <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                          {formatDateShort(entry.date)} {isToday && <span className="text-xs text-sage-600 dark:text-sage-400">(today)</span>}
                        </span>
                        <span className={`text-sm font-bold ${scoreTextColor(Math.round(overall))}`}>{overall}</span>
                      </summary>
                      <div className="px-3 pb-3 space-y-1.5">
                        {DIMENSIONS.map((dim) => (
                          <div key={dim.key} className="flex items-center gap-2 text-xs">
                            <span className="text-neutral-400 dark:text-neutral-500 w-16">{dim.label}</span>
                            <div className="flex-1 bg-sand-200 dark:bg-night-700 rounded-full h-1.5">
                              <div className={`h-1.5 rounded-full ${scoreColor(entry[dim.key] as number)}`} style={{ width: `${(entry[dim.key] as number) * 10}%` }} />
                            </div>
                            <span className={`font-bold w-4 text-right ${scoreTextColor(entry[dim.key] as number)}`}>{entry[dim.key]}</span>
                          </div>
                        ))}
                        {entry.gratitude && <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2"><strong>Grateful:</strong> {entry.gratitude}</p>}
                        {entry.goal && <p className="text-xs text-neutral-500 dark:text-neutral-400"><strong>Goal:</strong> {entry.goal}</p>}
                      </div>
                    </details>
                  );
                })}
              </div>
            </section>
          )}

          {/* data management */}
          <div className="text-center mb-8 print:hidden">
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-2">
              {entries.length} check-in{entries.length !== 1 ? "s" : ""} saved in your browser
            </p>
            <button
              onClick={handleClearAll}
              className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-crisis-600 dark:hover:text-crisis-400 transition-colors"
            >
              Clear all data
            </button>
          </div>
        </div>
      )}

      <AdSlot position="daily-mid" />

      {/* ─── EDUCATIONAL CONTENT ───────────────────────── */}
      <section className="prose-custom mb-12">
        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Why Daily Check-Ins Matter in Recovery
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          <strong>Self-awareness is a superpower in recovery.</strong> When you are in the middle of a
          difficult day, it is hard to see patterns. But when you track your mood, cravings, sleep, and
          stress over time, patterns become visible: you might notice that your cravings spike after two
          consecutive nights of poor sleep, or that your mood drops on days when your connection score is low.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          These patterns are <strong>early warning signs</strong>. Research published in the <em>Journal of
          Substance Abuse Treatment</em> found that self-monitoring is one of the strongest predictors of
          successful behavior change. People who track their daily experience are more likely to catch
          warning signs early and intervene before a full relapse.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          The check-in itself is also therapeutic. Taking 2 minutes to honestly assess how you are doing
          forces you to slow down, notice your internal state, and name what you are feeling. This is a
          form of mindfulness that strengthens the very skills that protect against relapse.
        </p>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Understanding Your Trends
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
          <strong>Look for patterns, not individual numbers.</strong> A single day with a mood score of 3
          is not a crisis — everyone has bad days. What matters is the trend: are your averages stable,
          improving, or declining over 7 to 30 days?
        </p>
        <ul className="space-y-2 text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
          <li className="flex gap-2"><span className="text-sage-500 mt-0.5">&#9679;</span> <strong>Sleep and mood</strong> are closely linked. If your sleep score drops, watch your mood and craving scores over the next few days.</li>
          <li className="flex gap-2"><span className="text-sage-500 mt-0.5">&#9679;</span> <strong>Connection scores</strong> below 4 for multiple days may indicate isolation, one of the strongest relapse triggers.</li>
          <li className="flex gap-2"><span className="text-sage-500 mt-0.5">&#9679;</span> <strong>Rising craving scores</strong> (lower numbers mean stronger cravings) are a direct signal to activate your coping toolkit.</li>
          <li className="flex gap-2"><span className="text-sage-500 mt-0.5">&#9679;</span> <strong>Overall wellness below 5</strong> for several consecutive days means it is time to reach out for support.</li>
        </ul>

        <h2 className="font-serif text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Making the Most of Your Check-In
        </h2>
        <ol className="space-y-2 text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 list-decimal list-inside">
          <li><strong>Same time every day.</strong> Pick a consistent time and set a phone reminder. Consistency builds the habit.</li>
          <li><strong>Be honest.</strong> No one sees your scores. The only person this data serves is you. Inflated scores help no one.</li>
          <li><strong>Share your trends.</strong> Show your 7-day chart to your counselor, sponsor, or therapist. It gives them real data to work with.</li>
          <li><strong>Act on patterns.</strong> If you see a trend, do something about it. Use the HALT Check-In, try a coping skill, or call someone.</li>
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
              <span className="text-neutral-500 dark:text-neutral-400">— Quick check for Hungry, Angry, Lonely, Tired</span>
            </li>
            <li>
              <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Relapse Prevention Plan
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Build a written plan with triggers and coping strategies</span>
            </li>
            <li>
              <Link href="/coping-skills-randomizer" className="text-sage-600 dark:text-sage-400 hover:underline font-medium">
                Coping Skills Randomizer
              </Link>{" "}
              <span className="text-neutral-500 dark:text-neutral-400">— Get a random healthy coping skill when you need one</span>
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

      {REFLECTION_PROMPTS["daily-recovery-check-in"] && (
        <ReflectionPrompts
          prompts={REFLECTION_PROMPTS["daily-recovery-check-in"].prompts}
          toolName={REFLECTION_PROMPTS["daily-recovery-check-in"].toolName}
        />
      )}

      {/* ─── YMYL FOOTER ──────────────────────────────── */}
      <footer className="space-y-4 text-sm text-neutral-500 dark:text-neutral-400 mb-8">
        <div className="bg-sand-100 dark:bg-night-800 rounded-xl p-5 border border-sand-200 dark:border-neutral-700">
          <p className="font-semibold text-neutral-700 dark:text-neutral-300 mb-1">Clinical Disclaimer</p>
          <p className="leading-relaxed">
            This tool is for self-reflection and personal tracking only. It is not a clinical assessment,
            medical device, or substitute for professional care. If you notice concerning trends in your
            scores, please reach out to a qualified healthcare professional or counselor.
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

        <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
          Your check-in data is stored in your browser&rsquo;s localStorage. It is never sent to any server.
          Clearing your browser data will erase your history.
        </p>
      </footer>
    </main>
  );
}

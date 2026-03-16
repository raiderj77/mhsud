"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

/* ── Types ────────────────────────────────────────────── */

type Dimension = "hungry" | "angry" | "lonely" | "tired";

interface DimensionConfig {
  key: Dimension;
  label: string;
  question: string;
  lowLabel: string;
  highLabel: string;
  icon: string;
  copingSuggestions: string[];
  encouragement: string;
}

const DIMENSIONS: DimensionConfig[] = [
  {
    key: "hungry",
    label: "Hungry",
    question: "How physically nourished do you feel right now?",
    lowLabel: "Starving",
    highLabel: "Well-fed",
    icon: "H",
    copingSuggestions: [
      "Eat a balanced meal or snack right now",
      "Drink a full glass of water — thirst often feels like hunger",
      "Think about when you last ate — if it has been more than 4 hours, eat something",
      "Keep easy, healthy snacks available (nuts, fruit, granola bars)",
    ],
    encouragement: "Your physical needs are met — that is a strong foundation for your recovery today.",
  },
  {
    key: "angry",
    label: "Angry",
    question: "How much frustration or resentment are you carrying?",
    lowLabel: "Very angry",
    highLabel: "At peace",
    icon: "A",
    copingSuggestions: [
      "Call your sponsor or a supportive person and talk it through",
      "Write in a journal — get the feelings out of your head and onto paper",
      "Take a 10-minute walk to physically move through the emotion",
      "Try a breathing exercise: breathe in for 4, hold for 4, out for 4",
    ],
    encouragement: "You are in a peaceful place emotionally — that takes real work in recovery. Well done.",
  },
  {
    key: "lonely",
    label: "Lonely",
    question: "How connected do you feel to other people?",
    lowLabel: "Very isolated",
    highLabel: "Well-connected",
    icon: "L",
    copingSuggestions: [
      "Reach out to someone right now — a text or call counts",
      "Attend a meeting (in person or online) today",
      "Go to a public place like a coffee shop or library",
      "Remember: feeling lonely does not mean you are alone — connection is a phone call away",
    ],
    encouragement: "You are feeling connected to others — that social support is one of the strongest protectors in recovery.",
  },
  {
    key: "tired",
    label: "Tired",
    question: "How rested and energized do you feel?",
    lowLabel: "Exhausted",
    highLabel: "Well-rested",
    icon: "T",
    copingSuggestions: [
      "Take a 20-minute nap if possible — even a short rest helps",
      "Plan to go to bed early tonight",
      "Reduce caffeine after noon — it may be disrupting your sleep",
      "Step outside for fresh air and sunlight — it naturally boosts alertness",
    ],
    encouragement: "You are well-rested — good sleep is one of the most underrated tools in recovery.",
  },
];

type VulnLevel = "low" | "moderate" | "elevated" | "high";

function getVulnerabilityLevel(total: number): { level: VulnLevel; label: string; description: string } {
  if (total >= 17) return { level: "low", label: "Low Vulnerability", description: "You are in a solid place right now. Keep doing what you are doing — your basic needs are met and your recovery foundation is strong today." };
  if (total >= 13) return { level: "moderate", label: "Moderate Vulnerability", description: "Some areas need attention. Address the low-scoring dimensions before they build up. Small actions now can prevent bigger struggles later." };
  if (total >= 9) return { level: "elevated", label: "Elevated Vulnerability", description: "Several vulnerability factors are present. This is a signal to slow down, take care of your basic needs, and reach out to your support system. Now is not the time to test your willpower." };
  return { level: "high", label: "High Vulnerability", description: "Multiple HALT factors are active. Please take immediate action: eat something, rest if you can, and call someone you trust. If you are experiencing cravings or thoughts of using, contact SAMHSA at 1-800-662-4357 or call/text 988." };
}

const LEVEL_COLORS: Record<VulnLevel, { bg: string; text: string; border: string; fill: string }> = {
  low: { bg: "bg-sage-50 dark:bg-sage-950/30", text: "text-sage-700 dark:text-sage-400", border: "border-sage-200 dark:border-sage-800", fill: "bg-sage-500" },
  moderate: { bg: "bg-amber-50 dark:bg-amber-950/30", text: "text-amber-700 dark:text-amber-400", border: "border-amber-200 dark:border-amber-800", fill: "bg-amber-500" },
  elevated: { bg: "bg-orange-50 dark:bg-orange-950/30", text: "text-orange-700 dark:text-orange-400", border: "border-orange-200 dark:border-orange-800", fill: "bg-orange-500" },
  high: { bg: "bg-crisis-50 dark:bg-crisis-950/30", text: "text-crisis-700 dark:text-crisis-400", border: "border-crisis-200 dark:border-crisis-800", fill: "bg-crisis-500" },
};

/* ── Radar Chart (SVG) ────────────────────────────────── */

function RadarChart({ scores }: { scores: Record<Dimension, number> }) {
  const cx = 100, cy = 100, maxR = 75;
  // Axes: top=H, right=A, bottom=L, left=T
  const axes: { key: Dimension; angle: number }[] = [
    { key: "hungry", angle: -90 },
    { key: "angry", angle: 0 },
    { key: "lonely", angle: 90 },
    { key: "tired", angle: 180 },
  ];

  function toXY(angle: number, radius: number) {
    const rad = (angle * Math.PI) / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  }

  // Grid levels (1-5)
  const gridLevels = [1, 2, 3, 4, 5];

  // Data polygon
  const dataPoints = axes.map((a) => {
    const r = (scores[a.key] / 5) * maxR;
    return toXY(a.angle, r);
  });
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";

  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-[280px] mx-auto" role="img" aria-label={`HALT radar chart. Hungry: ${scores.hungry}, Angry: ${scores.angry}, Lonely: ${scores.lonely}, Tired: ${scores.tired}`}>
      {/* Grid polygons */}
      {gridLevels.map((level) => {
        const r = (level / 5) * maxR;
        const pts = axes.map((a) => toXY(a.angle, r));
        const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";
        return <path key={level} d={path} fill="none" stroke="currentColor" className="text-sand-200 dark:text-neutral-700" strokeWidth={level === 5 ? 1.5 : 0.5} />;
      })}

      {/* Axis lines */}
      {axes.map((a) => {
        const end = toXY(a.angle, maxR);
        return <line key={a.key} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="currentColor" className="text-sand-300 dark:text-neutral-600" strokeWidth={0.5} />;
      })}

      {/* Data polygon */}
      <path d={dataPath} fill="currentColor" className="text-sage-500/25 dark:text-sage-400/20" />
      <path d={dataPath} fill="none" stroke="currentColor" className="text-sage-600 dark:text-sage-400" strokeWidth={2} strokeLinejoin="round" />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={axes[i].key} cx={p.x} cy={p.y} r={4} fill="currentColor" className="text-sage-600 dark:text-sage-400" />
      ))}

      {/* Axis labels */}
      {axes.map((a) => {
        const labelR = maxR + 18;
        const pos = toXY(a.angle, labelR);
        return (
          <text
            key={a.key + "-label"}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-neutral-600 dark:fill-neutral-300 text-[11px] font-semibold"
          >
            {a.key.charAt(0).toUpperCase() + a.key.slice(1)}
          </text>
        );
      })}

      {/* Score values next to data points */}
      {axes.map((a) => {
        const scoreR = (scores[a.key] / 5) * maxR + 12;
        const pos = toXY(a.angle, scoreR);
        return (
          <text
            key={a.key + "-score"}
            x={pos.x}
            y={pos.y}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-sage-700 dark:fill-sage-300 text-[10px] font-bold"
          >
            {scores[a.key]}
          </text>
        );
      })}
    </svg>
  );
}

/* ── Main Component ───────────────────────────────────── */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function HALTClient({ faqData }: Props) {
  const [scores, setScores] = useState<Record<Dimension, number>>({ hungry: 3, angry: 3, lonely: 3, tired: 3 });
  const [showResults, setShowResults] = useState(false);
  const [shareMessage, setShareMessage] = useState("");

  const total = scores.hungry + scores.angry + scores.lonely + scores.tired;
  const vuln = getVulnerabilityLevel(total);
  const colors = LEVEL_COLORS[vuln.level];
  const lowDimensions = DIMENSIONS.filter((d) => scores[d.key] <= 2);
  const highDimensions = DIMENSIONS.filter((d) => scores[d.key] >= 4);

  const handleScore = (key: Dimension, value: number) => {
    setScores((prev) => ({ ...prev, [key]: value }));
    setShowResults(false);
  };

  const handleCheckIn = () => setShowResults(true);
  const handleReset = () => { setScores({ hungry: 3, angry: 3, lonely: 3, tired: 3 }); setShowResults(false); };
  const handlePrint = useCallback(() => window.print(), []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/halt-check-in";
    if (mode === "blank") {
      if (navigator.share) {
        try { await navigator.share({ title: "HALT Check-In", text: "Free daily recovery check-in. Rate Hungry, Angry, Lonely, Tired and see your vulnerability level.", url }); return; } catch { /* cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }
    const summary = `HALT Check-In Results\nHungry: ${scores.hungry}/5 | Angry: ${scores.angry}/5 | Lonely: ${scores.lonely}/5 | Tired: ${scores.tired}/5\nOverall: ${vuln.label} (${total}/20)\n\nDo your own check-in: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "HALT Check-In", text: summary }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [scores, vuln.label, total]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Original</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Recovery</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          HALT Check-In
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          <strong>H</strong>ungry. <strong>A</strong>ngry. <strong>L</strong>onely. <strong>T</strong>ired. These four states are the most common relapse triggers. Rate each one right now — it takes less than a minute.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "100% Private" },
            { icon: "\u23F1", text: "Under 60 Seconds" },
            { icon: "\uD83D\uDD01", text: "Use Daily" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last reviewed: March 2026</p>
      </header>

      <AdSlot position="halt-top" className="mb-6" />

      {/* Check-In Card */}
      <div className="card p-6 sm:p-8 mb-6">
        <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">How are you right now?</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Rate each dimension from 1 (struggling) to 5 (doing well).</p>

        <div className="space-y-6">
          {DIMENSIONS.map((dim) => (
            <div key={dim.key}>
              <div className="flex items-center justify-between mb-1">
                <label className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sage-100 dark:bg-sage-900/40 text-sage-700 dark:text-sage-400 text-xs font-bold mr-2">{dim.icon}</span>
                  {dim.label}
                </label>
                <span className="text-sm font-bold text-sage-600 dark:text-sage-400">{scores[dim.key]}/5</span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 ml-8">{dim.question}</p>
              <div className="flex items-center gap-2 ml-8">
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 w-16 text-right shrink-0">{dim.lowLabel}</span>
                <div className="flex gap-1.5 flex-1 justify-center">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      onClick={() => handleScore(dim.key, val)}
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl text-sm font-bold transition-all ${
                        scores[dim.key] === val
                          ? "bg-sage-600 dark:bg-sage-500 text-white shadow-md scale-110"
                          : "bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                      }`}
                      aria-label={`${dim.label}: ${val}`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 w-16 shrink-0">{dim.highLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleCheckIn}
          className="w-full mt-8 py-3 rounded-xl bg-sage-600 hover:bg-sage-700 dark:bg-sage-500 dark:hover:bg-sage-600 text-white font-semibold text-base transition-colors"
        >
          Check In
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div className="animate-fade-in space-y-6" aria-live="polite">
          {/* Radar Chart */}
          <div className="card p-6 sm:p-8">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4 text-center">Your HALT Profile</h2>
            <RadarChart scores={scores} />
          </div>

          {/* Vulnerability Level */}
          <div className={`card p-6 sm:p-8 border ${colors.border}`}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-3 h-3 rounded-full ${colors.fill}`} />
              <h3 className={`font-serif text-lg font-semibold ${colors.text}`}>{vuln.label}</h3>
              <span className={`ml-auto text-sm font-bold ${colors.text}`}>{total}/20</span>
            </div>

            {/* Score bar */}
            <div className="w-full h-3 rounded-full bg-sand-100 dark:bg-night-700 mb-4 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${colors.fill}`}
                style={{ width: `${(total / 20) * 100}%` }}
              />
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{vuln.description}</p>
          </div>

          {/* Coping Suggestions for low dimensions */}
          {lowDimensions.length > 0 && (
            <div className="card p-6 sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Areas That Need Attention</h3>
              <div className="space-y-5">
                {lowDimensions.map((dim) => (
                  <div key={dim.key} className="bg-warm-50 dark:bg-warm-950/20 rounded-xl p-4 border border-warm-200 dark:border-warm-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-warm-200 dark:bg-warm-800 text-warm-700 dark:text-warm-300 text-xs font-bold">{dim.icon}</span>
                      <p className="font-semibold text-warm-800 dark:text-warm-200">
                        {dim.label} — {scores[dim.key]}/5
                      </p>
                    </div>
                    <p className="text-xs text-warm-600 dark:text-warm-400 mb-3">Try one of these right now:</p>
                    <ul className="space-y-1.5">
                      {dim.copingSuggestions.map((s, i) => (
                        <li key={i} className="text-sm text-neutral-600 dark:text-neutral-300 flex gap-2">
                          <span className="text-warm-500 mt-0.5 shrink-0">&#x2022;</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Encouragement for high dimensions */}
          {highDimensions.length > 0 && (
            <div className="card p-6 sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Strengths Right Now</h3>
              <div className="space-y-3">
                {highDimensions.map((dim) => (
                  <div key={dim.key} className="bg-sage-50 dark:bg-sage-950/20 rounded-xl p-4 border border-sage-200 dark:border-sage-800">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sage-200 dark:bg-sage-800 text-sage-700 dark:text-sage-300 text-xs font-bold">{dim.icon}</span>
                      <p className="font-semibold text-sage-800 dark:text-sage-200">
                        {dim.label} — {scores[dim.key]}/5
                      </p>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 ml-9">{dim.encouragement}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button onClick={handleReset} className="btn-secondary text-sm flex-1 min-w-[120px]">
              New Check-In
            </button>
            <button onClick={handlePrint} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Print Results
            </button>
            <button onClick={() => handleShare("results")} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Share Results
            </button>
            <button onClick={() => handleShare("blank")} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Share Tool
            </button>
          </div>
          {shareMessage && (
            <p className="text-center text-sm font-medium text-sage-600 dark:text-sage-400 animate-fade-in">{shareMessage}</p>
          )}

          {/* Reflection */}
          {REFLECTION_PROMPTS["halt-check-in"] && (
            <>
              <ReflectionPrompts
                prompts={REFLECTION_PROMPTS["halt-check-in"].prompts}
                toolName={REFLECTION_PROMPTS["halt-check-in"].toolName}
              />
              <ReflectionSummary
                toolName={REFLECTION_PROMPTS["halt-check-in"].toolName}
                toolUrl="https://mindchecktools.com/halt-check-in"
                score={`${total}/20`}
                severityLabel={vuln.label}
                scoreRange="4-20 range"
                interpretation={vuln.description}
                suggestion={lowDimensions.length > 0 ? `Focus on addressing: ${lowDimensions.map(d => d.label).join(", ")}.` : "Your basic needs are met. Keep doing what you are doing."}
                reflectionPrompts={REFLECTION_PROMPTS["halt-check-in"].prompts}
              />
            </>
          )}

          <AdSlot position="halt-results" className="mt-6" />
        </div>
      )}

      {/* Educational Content */}
      <section className="mt-12 space-y-8 print:hidden">
        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does HALT Stand For in Recovery?
          </h2>
          <div className="prose-custom">
            <p>
              HALT is one of the most widely recognized acronyms in addiction recovery. It stands for <strong>Hungry, Angry, Lonely, Tired</strong> — four basic physical and emotional states that significantly increase the risk of relapse. The concept is used across 12-step programs, SMART Recovery, and many other recovery frameworks.
            </p>
            <p>
              The idea behind HALT is simple but powerful: when your basic needs are not met, your ability to cope with cravings, stress, and difficult emotions is compromised. Most people in recovery did not relapse because they suddenly decided to use — they relapsed because they were running on empty and did not recognize it in time.
            </p>
            <p>
              Research supports this. Studies on self-regulation show that willpower and emotional control are <strong>finite resources</strong> that depend on physical health, emotional balance, and social connection. When one or more HALT factors are present, the cognitive resources needed to maintain recovery are depleted — making it harder to resist impulsive decisions.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How Does the HALT Check-In Work?
          </h2>
          <div className="prose-custom">
            <p>
              Many recovery counselors and sponsors recommend making HALT a daily habit. Here is how to incorporate it into your routine:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li><strong>Morning check-in:</strong> Start your day by honestly assessing each HALT dimension. Address any needs before they build up.</li>
              <li><strong>Craving response:</strong> When you notice cravings, immediately run through HALT. Often, the craving is actually your body telling you it needs food, rest, or connection.</li>
              <li><strong>Before decisions:</strong> Before making any significant decision — especially ones related to recovery — check your HALT status. Decisions made while hungry, angry, lonely, or tired tend to be decisions you regret.</li>
              <li><strong>Evening reflection:</strong> At the end of each day, reflect on how HALT factors influenced your mood and behavior. Over time, patterns become clear.</li>
            </ul>
            <p>
              You can also use the <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">Sobriety Calculator</Link> to track your recovery days alongside daily HALT check-ins, or the <Link href="/health-recovery-timeline" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">Health Recovery Timeline</Link> to see how your body is healing.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            When Should You Use a HALT Check-In?
          </h2>
          <div className="prose-custom">
            <p>
              <strong>Hungry:</strong> Low blood sugar impairs judgment, increases irritability, and makes emotional regulation harder. Many people in early recovery are still learning to eat regularly — substance use often disrupted normal eating patterns.
            </p>
            <p>
              <strong>Angry:</strong> Unprocessed anger and resentment create emotional pressure that substances once relieved. Learning to identify, express, and process anger in healthy ways is one of the most important recovery skills.
            </p>
            <p>
              <strong>Lonely:</strong> Isolation is one of the strongest predictors of relapse. Recovery requires connection — whether through meetings, a sponsor, sober friends, family, or community. Even brief social interaction can reduce the urge to use.
            </p>
            <p>
              <strong>Tired:</strong> Sleep deprivation reduces willpower, emotional regulation, and impulse control. It also increases anxiety and depression. In early recovery, disrupted sleep is common — making rest an especially important area to monitor.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What to Do After Your HALT Check-In
          </h2>
          <div className="prose-custom">
            <p>
              Once you identify which HALT factors are elevated, take immediate action to address them. Even small steps can reduce vulnerability significantly.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li><strong>If Hungry:</strong> Eat something nutritious. Keep easy, healthy snacks available. In recovery, regular meals help stabilize mood and energy.</li>
              <li><strong>If Angry:</strong> Name the feeling out loud. Call a sponsor, trusted friend, or counselor. Write about it. Physical activity like walking can help discharge the energy.</li>
              <li><strong>If Lonely:</strong> Reach out to someone — even a brief text or phone call. Attend a meeting, visit a coffee shop, or spend time in a public space. Connection does not have to be deep to be helpful.</li>
              <li><strong>If Tired:</strong> Rest if you can. If not, reduce your commitments for the day and avoid making important decisions. Even a 20-minute nap or quiet break can help restore capacity.</li>
            </ul>
            <p>
              The goal is not perfection — it is awareness. By regularly checking in with HALT, you build the habit of noticing what you need before a craving or emotional crisis takes over.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 print:hidden">
        <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <details key={i} className="card p-5 group">
              <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-neutral-800 dark:text-neutral-100">
                <span className="pr-4">{faq.question}</span>
                <svg className="w-5 h-5 text-neutral-400 group-open:rotate-180 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Disclaimer + Crisis Resources */}
      <footer className="mt-12 space-y-4 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="bg-sand-50 dark:bg-night-800 rounded-2xl p-5 space-y-2">
          <p className="font-semibold text-neutral-500 dark:text-neutral-400">About This Tool</p>
          <p>
            The HALT Check-In is a self-reflection tool based on the HALT concept widely used in recovery programs.
            It is for educational and self-awareness purposes only. It is <strong>not</strong> a clinical assessment,
            medical advice, or a substitute for professional support. If you are struggling with substance use or
            experiencing cravings, please reach out to a qualified professional.
          </p>
          <p>
            All responses are processed entirely in your browser. Nothing is stored, transmitted, or accessible to anyone — including us.
          </p>
          <ToolReviewerBio />
        </div>

        <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-800 rounded-2xl p-5">
          <p className="font-semibold text-warm-700 dark:text-warm-300 mb-2">Need Help Now?</p>
          <ul className="space-y-1 text-warm-600 dark:text-warm-400">
            <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357 (free, confidential, 24/7)</li>
            <li><strong>988 Suicide & Crisis Lifeline:</strong> Call or text 988</li>
            <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
          </ul>
          <p className="mt-2">
            <Link href="/crisis-resources" className="text-warm-700 dark:text-warm-300 underline hover:no-underline">
              View all crisis resources →
            </Link>
          </p>
        </div>

        <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
          <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
          </Link>
        </div>
      </footer>
    </div>
  );
}

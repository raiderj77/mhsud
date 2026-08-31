"use client";

import { useState, useCallback, type KeyboardEvent } from "react";
import Link from "next/link";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";
import {
  PRIVATE_SHARE_COPIED_MESSAGE,
  PRIVATE_SHARE_NOTICE,
  sharePrivateToolLink,
} from "@/lib/privateToolSharing";


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
}

const DIMENSIONS: DimensionConfig[] = [
  {
    key: "hungry",
    label: "Hungry",
    question: "How physically nourished do you feel right now?",
    lowLabel: "Very hungry",
    highLabel: "Well-fed",
    icon: "H",
    copingSuggestions: [
      "Consider food or water if that is appropriate for you",
      "Follow any nutrition or medical guidance you have received",
      "Choose an option that fits your health needs and available resources",
    ],
  },
  {
    key: "angry",
    label: "Angry",
    question: "How much frustration or resentment are you carrying?",
    lowLabel: "Very angry",
    highLabel: "At peace",
    icon: "A",
    copingSuggestions: [
      "Pause and name what you are feeling without judging it",
      "Contact a trusted support person or counselor",
      "Choose a familiar, low-risk calming activity that is safe for you",
      "If anger could lead to harm, step away and seek immediate support",
    ],
  },
  {
    key: "lonely",
    label: "Lonely",
    question: "How connected do you feel to other people?",
    lowLabel: "Very isolated",
    highLabel: "Well-connected",
    icon: "L",
    copingSuggestions: [
      "Consider contacting a safe person by text or phone",
      "Join a recovery-support meeting if that is already part of your plan",
      "Spend time around safe people if that feels helpful",
      "Seek professional support if loneliness is persistent or distressing",
    ],
  },
  {
    key: "tired",
    label: "Tired",
    question: "How rested and energized do you feel?",
    lowLabel: "Exhausted",
    highLabel: "Well-rested",
    icon: "T",
    copingSuggestions: [
      "Rest when it is safe and practical",
      "Reduce nonessential demands if you can",
      "Follow any sleep plan you made with a health professional",
      "Seek professional guidance for persistent or severe sleep problems",
    ],
  },
];

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

  const lowDimensions = DIMENSIONS.filter((d) => scores[d.key] <= 2);

  const handleScore = (key: Dimension, value: number) => {
    setScores((prev) => ({ ...prev, [key]: value }));
    setShowResults(false);
  };

  const handleRadioKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    key: Dimension,
    value: number,
  ) => {
    let nextValue: number | null = null;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") nextValue = Math.max(1, value - 1);
    if (event.key === "ArrowRight" || event.key === "ArrowUp") nextValue = Math.min(5, value + 1);
    if (event.key === "Home") nextValue = 1;
    if (event.key === "End") nextValue = 5;
    if (nextValue === null) return;

    event.preventDefault();
    handleScore(key, nextValue);
    document.getElementById(`halt-${key}-${nextValue}`)?.focus();
  };

  const handleCheckIn = () => setShowResults(true);
  const handleReset = () => { setScores({ hungry: 3, angry: 3, lonely: 3, tired: 3 }); setShowResults(false); };
  const handlePrint = useCallback(() => window.print(), []);

  const handleShare = useCallback(async () => {
    const outcome = await sharePrivateToolLink({
      toolName: "HALT Check-In",
      canonicalPath: "/halt-check-in",
    });
    if (outcome === "copied") {
      setShareMessage(PRIVATE_SHARE_COPIED_MESSAGE);
      setTimeout(() => setShareMessage(""), 2500);
    }
  }, []);

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
          <strong>H</strong>ungry. <strong>A</strong>ngry. <strong>L</strong>onely. <strong>T</strong>ired. Use this brief reflection to notice basic needs that may deserve attention right now.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\uD83D\uDD12", text: "Answers Stay Local" },
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


      {/* Check-In Card */}
      <div className="card p-4 sm:p-8 mb-6">
        <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">How are you right now?</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Rate each dimension from 1 (struggling) to 5 (doing well).</p>
        <p className="mb-6 rounded-xl border border-sand-200 bg-sand-50 p-4 text-sm leading-relaxed text-neutral-600 dark:border-night-700 dark:bg-night-800 dark:text-neutral-300">
          This original 1-5 reflection is not a validated assessment and has no clinical cutoff. Your ratings cannot estimate relapse risk.
        </p>

        <div className="space-y-6">
          {DIMENSIONS.map((dim) => (
            <div key={dim.key}>
              <div className="flex items-center justify-between mb-1">
                <span id={`halt-${dim.key}-label`} className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sage-100 dark:bg-sage-900/40 text-sage-700 dark:text-sage-400 text-xs font-bold mr-2">{dim.icon}</span>
                  {dim.label}
                </span>
                <span className="text-sm font-bold text-sage-600 dark:text-sage-400">{scores[dim.key]}/5</span>
              </div>
              <p id={`halt-${dim.key}-question`} className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 ml-8">{dim.question}</p>
              <div
                role="radiogroup"
                aria-labelledby={`halt-${dim.key}-label`}
                aria-describedby={`halt-${dim.key}-question`}
                className="w-full max-w-[280px] mx-auto sm:ml-8 sm:mr-0"
              >
                <div className="grid grid-cols-2 gap-2 mb-1 px-1">
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400">{dim.lowLabel}</span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400 text-right">{dim.highLabel}</span>
                </div>
                <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
                  {[1, 2, 3, 4, 5].map((val) => (
                    <button
                      key={val}
                      id={`halt-${dim.key}-${val}`}
                      type="button"
                      onClick={() => handleScore(dim.key, val)}
                      onKeyDown={(event) => handleRadioKeyDown(event, dim.key, val)}
                      role="radio"
                      aria-checked={scores[dim.key] === val}
                      tabIndex={scores[dim.key] === val ? 0 : -1}
                      className={`min-h-[44px] min-w-[44px] w-full rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-600 focus-visible:ring-offset-2 ${
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
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4 text-center">Your Current Ratings</h2>
            <RadarChart scores={scores} />
          </div>

          <div className="card border border-sand-200 p-6 sm:p-8 dark:border-night-700">
            <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Reflection only, not a risk score</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              These four ratings are shown separately because the combined total and category cutoffs have not been validated. Use the display to notice a need you may want to address, not to predict relapse or make a treatment decision.
            </p>
          </div>

          {/* Coping Suggestions for low dimensions */}
          {lowDimensions.length > 0 && (
            <div className="card p-6 sm:p-8">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Needs You Marked as Difficult</h3>
              <div className="space-y-5">
                {lowDimensions.map((dim) => (
                  <div key={dim.key} className="bg-warm-50 dark:bg-warm-950/20 rounded-xl p-4 border border-warm-200 dark:border-warm-800">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-warm-200 dark:bg-warm-800 text-warm-700 dark:text-warm-300 text-xs font-bold">{dim.icon}</span>
                      <p className="font-semibold text-warm-800 dark:text-warm-200">
                        {dim.label}, {scores[dim.key]}/5
                      </p>
                    </div>
                    <p className="text-xs text-warm-600 dark:text-warm-400 mb-3">Optional ideas to consider:</p>
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

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button onClick={handleReset} className="btn-secondary text-sm flex-1 min-w-[120px]">
              New Check-In
            </button>
            <button onClick={handlePrint} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Print Results
            </button>
            <button onClick={handleShare} className="btn-secondary text-sm flex-1 min-w-[120px] print:hidden">
              Share Tool Link
            </button>
          </div>
          <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 print:hidden">
            {PRIVATE_SHARE_NOTICE}
          </p>
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
            </>
          )}

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
              HALT stands for <strong>Hungry, Angry, Lonely, Tired</strong>. A 2023 SAMHSA counseling guide presents it as a memory aid for noticing basic needs and choosing an appropriate response before an impulse becomes overwhelming.
            </p>
            <p>
              Read the public-domain <a href="https://www.ncbi.nlm.nih.gov/books/NBK601489/box/ch2.b11/" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">SAMHSA TIP 65 HALT guidance</a>.
            </p>
            <p>
              HALT itself has not been established as a validated relapse-prediction scale. A 2026 peer-reviewed mini-review describes scientific research on HALT as scant and calls for direct evaluation. This page therefore uses HALT only for reflection and does not assign a risk category. <a href="https://pubmed.ncbi.nlm.nih.gov/41583901/" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline hover:no-underline">Read the review on PubMed</a>.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How Does the HALT Check-In Work?
          </h2>
          <div className="prose-custom">
            <p>
              You can use HALT when it feels useful, such as during stress or a craving. There is no validated schedule or frequency for this check-in.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li><strong>Pause:</strong> Notice whether hunger, anger, loneliness, or tiredness is present.</li>
              <li><strong>Choose:</strong> Consider one small response that fits the need and your circumstances.</li>
              <li><strong>Seek support:</strong> If cravings or distress feel hard to manage, contact a trusted support person or qualified professional rather than relying on this tool.</li>
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
              <strong>Hungry:</strong> Notice whether food or hydration may be a current need. Follow any nutrition or medical guidance you have received.
            </p>
            <p>
              <strong>Angry:</strong> Notice what you are feeling and consider a safe way to pause, express it, or ask for support.
            </p>
            <p>
              <strong>Lonely:</strong> Consider whether connecting with a safe person, group, or community would be helpful.
            </p>
            <p>
              <strong>Tired:</strong> Notice fatigue and consider rest when it is safe and practical. Persistent sleep problems deserve professional guidance.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What to Do After Your HALT Check-In
          </h2>
          <div className="prose-custom">
            <p>
              If a rating helps you notice a need, consider one small, practical response. The rating does not measure relapse risk or prove that any action will change a craving.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600 dark:text-neutral-300">
              <li><strong>If Hungry:</strong> Consider food or water if appropriate for you.</li>
              <li><strong>If Angry:</strong> Pause, name the feeling, or contact a trusted person or counselor.</li>
              <li><strong>If Lonely:</strong> Consider contacting a safe person or recovery-support group.</li>
              <li><strong>If Tired:</strong> Rest when safe and practical, or seek help for ongoing sleep problems.</li>
            </ul>
            <p>
              This check-in is optional and educational. If you are experiencing cravings, thoughts of using, or a crisis, contact professional or crisis support rather than relying on a score.
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
            Your ratings are processed in this browser and are not automatically sent to MindCheck Tools. Printing can create a copy on your device or printer; sharing sends only the tool name and canonical page link.
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
          <Link href="/how-to-talk-to-your-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
            Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
          </Link>
        </div>
      </footer>
    </div>
  );
}

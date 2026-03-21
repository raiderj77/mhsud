"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";
import EmailCapture from "@/components/EmailCapture";


// ── Data ────────────────────────────────────────────────────────────────

const QUESTIONS = [
  // Anxiety subscale (1-18)
  "I\u2019m afraid that I will lose my partner\u2019s love.",
  "I often worry that my partner will not want to stay with me.",
  "I often worry that my partner doesn\u2019t really love me.",
  "I worry that romantic partners won\u2019t care about me as much as I care about them.",
  "I often wish that my partner\u2019s feelings for me were as strong as my feelings for him or her.",
  "I worry a lot about my relationships.",
  "When my partner is out of sight, I worry that he or she might become interested in someone else.",
  "When I show my feelings for romantic partners, I\u2019m afraid they will not feel the same about me.",
  "I rarely worry about my partner leaving me.",
  "My romantic partner makes me doubt myself.",
  "I do not often worry about being abandoned.",
  "I find that my partner(s) don\u2019t want to get as close as I would like.",
  "Sometimes romantic partners change their feelings about me for no apparent reason.",
  "My desire to be very close sometimes scares people away.",
  "I\u2019m afraid that once a romantic partner gets to know me, he or she won\u2019t like who I really am.",
  "It makes me mad that I don\u2019t get the affection and support I need from my partner.",
  "I worry that I won\u2019t measure up to other people.",
  "My partner only seems to notice me when I\u2019m angry.",
  // Avoidance subscale (19-36)
  "I prefer not to show a partner how I feel deep down.",
  "I feel comfortable sharing my private thoughts and feelings with my partner.",
  "I find it difficult to allow myself to depend on romantic partners.",
  "I am very comfortable being close to romantic partners.",
  "I don\u2019t feel comfortable opening up to romantic partners.",
  "I prefer not to be too close to romantic partners.",
  "I get uncomfortable when a romantic partner wants to be very close.",
  "I find it relatively easy to get close to my partner.",
  "It\u2019s not difficult for me to get close to my partner.",
  "I usually discuss my problems and concerns with my partner.",
  "It helps to turn to my romantic partner in times of need.",
  "I tell my partner just about everything.",
  "I talk things over with my partner.",
  "I am nervous when partners get too close to me.",
  "I feel comfortable depending on romantic partners.",
  "I find it easy to depend on romantic partners.",
  "It\u2019s easy for me to be affectionate with my partner.",
  "My partner really understands me and my needs.",
];

const OPTIONS = [
  { label: "Strongly Disagree", shortLabel: "1", value: 1 },
  { label: "Disagree", shortLabel: "2", value: 2 },
  { label: "Slightly Disagree", shortLabel: "3", value: 3 },
  { label: "Neutral", shortLabel: "4", value: 4 },
  { label: "Slightly Agree", shortLabel: "5", value: 5 },
  { label: "Agree", shortLabel: "6", value: 6 },
  { label: "Strongly Agree", shortLabel: "7", value: 7 },
];

// Zero-indexed reverse-scored items (items 3,15 for Anxiety; 19,22,25,27,29,31,33,35 for Avoidance)
const REVERSE_ITEMS = new Set([2, 14, 18, 21, 24, 26, 28, 30, 32, 34]);

function reverseScore(index: number, value: number): number {
  return REVERSE_ITEMS.has(index) ? 8 - value : value;
}

interface AttachmentStyle {
  key: string;
  label: string;
  description: string;
  suggestion: string;
}

const STYLES: Record<string, AttachmentStyle> = {
  secure: {
    key: "secure",
    label: "Secure",
    description: "Your responses suggest a secure attachment pattern. You tend to feel comfortable with emotional closeness and interdependence in relationships, and you generally do not worry excessively about being abandoned or unloved.",
    suggestion: "Continue nurturing your relationships with open communication. Your comfort with closeness and trust is a strength that supports healthy connections.",
  },
  preoccupied: {
    key: "preoccupied",
    label: "Preoccupied",
    description: "Your responses suggest a preoccupied attachment pattern. You may desire a high level of closeness and emotional intimacy but tend to worry about whether your partner truly loves you or might leave.",
    suggestion: "Consider exploring these patterns with a therapist or counselor. Building self-awareness about relationship anxiety can help you develop more balanced expectations and communication strategies.",
  },
  dismissing: {
    key: "dismissing",
    label: "Dismissing-Avoidant",
    description: "Your responses suggest a dismissing-avoidant attachment pattern. You may value independence highly and tend to suppress or minimize attachment needs. You may feel uncomfortable with too much emotional closeness.",
    suggestion: "Consider reflecting on how emotional distance serves you and when it might limit your connections. A therapist experienced in attachment can help you explore these patterns at a comfortable pace.",
  },
  fearful: {
    key: "fearful",
    label: "Fearful-Avoidant",
    description: "Your responses suggest a fearful-avoidant attachment pattern. You may desire close relationships but simultaneously fear rejection or getting hurt, which can lead to mixed feelings about intimacy.",
    suggestion: "Speaking with a mental health professional experienced in attachment can be especially helpful. Fearful-avoidant patterns often respond well to therapy approaches that build trust and emotional safety gradually.",
  },
};

const STYLE_COLORS: Record<string, { text: string; bg: string; bar: string; ring: string }> = {
  secure:      { text: "text-sage-700 dark:text-sage-400",     bg: "bg-sage-50 dark:bg-sage-950/30",     bar: "from-sage-400 to-sage-600",     ring: "ring-sage-300 dark:ring-sage-700" },
  preoccupied: { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30",     bar: "from-warm-400 to-warm-600",     ring: "ring-warm-300 dark:ring-warm-700" },
  dismissing:  { text: "text-warm-700 dark:text-warm-400",     bg: "bg-warm-50 dark:bg-warm-950/30",     bar: "from-warm-400 to-warm-600",     ring: "ring-warm-300 dark:ring-warm-700" },
  fearful:     { text: "text-orange-700 dark:text-orange-400", bg: "bg-orange-50 dark:bg-orange-950/30", bar: "from-orange-400 to-orange-600", ring: "ring-orange-300 dark:ring-orange-700" },
};

function getAttachmentStyle(anxietyMean: number, avoidanceMean: number): AttachmentStyle {
  const highAnxiety = anxietyMean > 3.5;
  const highAvoidance = avoidanceMean > 3.5;
  if (!highAnxiety && !highAvoidance) return STYLES.secure;
  if (highAnxiety && !highAvoidance) return STYLES.preoccupied;
  if (!highAnxiety && highAvoidance) return STYLES.dismissing;
  return STYLES.fearful;
}

// ── Component ───────────────────────────────────────────────────────────

interface Props {
  faqData: { question: string; answer: string }[];
}

export function AttachmentStyleClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(36).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showScoring, setShowScoring] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);

  // Scoring
  const scored = answers.map((a, i) => (a !== null ? reverseScore(i, a) : null));
  const anxietyItems = scored.slice(0, 18);
  const avoidanceItems = scored.slice(18, 36);
  const anxietyMean = anxietyItems.every((a) => a !== null)
    ? anxietyItems.reduce<number>((s, a) => s + a!, 0) / 18
    : 0;
  const avoidanceMean = avoidanceItems.every((a) => a !== null)
    ? avoidanceItems.reduce<number>((s, a) => s + a!, 0) / 18
    : 0;

  const allAnswered = answers.every((a) => a !== null);
  const style = getAttachmentStyle(anxietyMean, avoidanceMean);
  const colors = STYLE_COLORS[style.key];
  const progress = (answers.filter((a) => a !== null).length / 36) * 100;
  const furthestAnswered = answers.findLastIndex((a) => a !== null);

  function handleAnswer(qi: number, value: number) {
    const next = [...answers];
    next[qi] = value;
    setAnswers(next);
    if (qi < 35) {
      setTimeout(() => {
        questionRefs.current[qi + 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }

  function handleSubmit() {
    setShowResults(true);
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }

  function handleReset() {
    setAnswers(Array(36).fill(null));
    setShowResults(false);
    setShowScoring(false);
    setExpandedFaq(null);
    setShareMessage("");
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  const handleShare = useCallback(async (mode: "results" | "blank") => {
    const url = "https://mindchecktools.com/attachment-style-quiz";

    if (mode === "blank") {
      const shareData = {
        title: "Attachment Style Quiz (ECR-R) \u2014 Free & Private",
        text: "Take a free, private attachment style quiz based on the ECR-R. Your answers never leave your browser.",
        url,
      };
      if (navigator.share) {
        try { await navigator.share(shareData); return; } catch { /* user cancelled */ }
      }
      await navigator.clipboard.writeText(url);
      setShareMessage("Link copied!");
      setTimeout(() => setShareMessage(""), 2500);
      return;
    }

    const summary = `Attachment Style Quiz (ECR-R) Results\nStyle: ${style.label}\nAnxiety: ${anxietyMean.toFixed(2)}/7 \u2014 Avoidance: ${avoidanceMean.toFixed(2)}/7\n\nThis is a self-reflection tool, not a diagnosis. Take the quiz: ${url}`;
    if (navigator.share) {
      try { await navigator.share({ title: "My Attachment Style Results", text: summary }); return; } catch { /* user cancelled */ }
    }
    await navigator.clipboard.writeText(summary);
    setShareMessage("Results copied!");
    setTimeout(() => setShareMessage(""), 2500);
  }, [anxietyMean, avoidanceMean, style.label]);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Validated</span>
          <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Public Domain</span>
        </div>
        <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          Attachment Style Quiz (ECR-R)
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
          A validated 36-item questionnaire that measures attachment-related anxiety and avoidance in close relationships. Your answers stay in your browser and are never stored.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            { icon: "\u{1F512}", text: "100% Private" },
            { icon: "\u23F1", text: "~5 Minutes" },
            { icon: "\u{1F4CB}", text: "36 Questions" },
          ].map((b) => (
            <span key={b.text} className="badge bg-sage-50/80 dark:bg-sage-950/20 text-sage-700 dark:text-sage-400">
              {b.icon} {b.text}
            </span>
          ))}
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Last updated: March 16, 2026</p>
      </header>

      {/* Disclaimer Gate */}
      {!accepted && (
        <DisclaimerGate
          toolName="ECR-R"
          toolDescription="This quiz uses the Experiences in Close Relationships - Revised (ECR-R), a validated 36-item attachment style questionnaire developed by Fraley, Waller, and Brennan (2000). It is in the public domain."
          onAccept={() => setAccepted(true)}
        />
      )}

      {/* Questionnaire */}
      {accepted && !showResults && (
        <div className="animate-fade-in">
          {/* Progress */}
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-sage-600 dark:text-sage-400">
                {answers.filter((a) => a !== null).length} of 36 answered
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Rate each statement <strong>1\u20137</strong>
              </span>
            </div>
            <div className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sage-400 to-sage-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {QUESTIONS.map((q, qi) => {
              const isReachable = qi <= furthestAnswered + 1;
              return (
                <div
                  key={qi}
                  ref={(el) => { questionRefs.current[qi] = el; }}
                  className={`card p-5 transition-all duration-300 ${
                    isReachable ? "opacity-100" : "opacity-30 pointer-events-none"
                  } ${
                    answers[qi] !== null
                      ? "border-sage-200 dark:border-sage-800"
                      : ""
                  }`}
                >
                  <div className="flex gap-3 items-start">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all ${
                      answers[qi] !== null
                        ? "bg-sage-500 text-white"
                        : "bg-sand-100 dark:bg-night-700 text-neutral-400"
                    }`}>
                      {answers[qi] !== null ? "\u2713" : qi + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-medium text-neutral-800 dark:text-neutral-100 leading-relaxed mb-3">
                        {q}
                      </p>
                      <div className="grid grid-cols-7 gap-1">
                        {OPTIONS.map((opt) => (
                          <button
                            key={opt.value}
                            onClick={() => handleAnswer(qi, opt.value)}
                            title={opt.label}
                            className={`p-2 min-h-[44px] rounded-xl border-2 text-center transition-all text-sm leading-tight ${
                              answers[qi] === opt.value
                                ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold"
                                : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-600 dark:text-neutral-300 hover:border-sage-300 dark:hover:border-sage-700"
                            }`}
                          >
                            {opt.shortLabel}
                          </button>
                        ))}
                      </div>
                      <div className="flex justify-between text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 px-1">
                        <span>Strongly Disagree</span>
                        <span>Strongly Agree</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit */}
          <div className="flex gap-3 mt-6">
            <button onClick={handleSubmit} disabled={!allAnswered} className="btn-primary flex-1 text-base py-4">
              View My Results
            </button>
            <button onClick={handleReset} className="btn-secondary px-5">
              Reset
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      {showResults && (
        <div ref={resultsRef} className="animate-fade-in" aria-live="polite">
          {/* Printable Results Area */}
          <div ref={printRef} id="printable-results">
            {/* Attachment Style Card */}
            <div className="card overflow-hidden mb-5">
              <div className={`${colors.bg} p-6 sm:p-8 text-center`}>
                <p className={`text-xs font-semibold uppercase tracking-widest ${colors.text} mb-2`}>Your Attachment Style</p>
                <p className={`font-serif text-4xl sm:text-5xl font-bold ${colors.text} leading-none mb-3`}>{style.label}</p>
                <div className="flex justify-center gap-6 mt-4">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${colors.text} mb-1`}>Anxiety</p>
                    <p className={`font-serif text-2xl font-bold ${colors.text}`}>{anxietyMean.toFixed(2)}</p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">of 7</p>
                  </div>
                  <div className="w-px bg-current opacity-20" />
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wider ${colors.text} mb-1`}>Avoidance</p>
                    <p className={`font-serif text-2xl font-bold ${colors.text}`}>{avoidanceMean.toFixed(2)}</p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">of 7</p>
                  </div>
                </div>
              </div>

              {/* 2x2 Quadrant Grid */}
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3 text-center">Attachment Style Map</p>
                <div className="max-w-xs mx-auto">
                  <div className="text-center text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 mb-1">HIGH ANXIETY</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <div className={`p-3 rounded-lg text-center text-xs font-medium transition-all ${
                      style.key === "fearful"
                        ? `${STYLE_COLORS.fearful.bg} ${STYLE_COLORS.fearful.text} ring-2 ${STYLE_COLORS.fearful.ring} font-bold`
                        : "bg-sand-50 dark:bg-night-700 text-neutral-400 dark:text-neutral-500"
                    }`}>
                      <span className="block text-[10px] uppercase tracking-wider mb-0.5">Fearful-</span>Avoidant
                    </div>
                    <div className={`p-3 rounded-lg text-center text-xs font-medium transition-all ${
                      style.key === "preoccupied"
                        ? `${STYLE_COLORS.preoccupied.bg} ${STYLE_COLORS.preoccupied.text} ring-2 ${STYLE_COLORS.preoccupied.ring} font-bold`
                        : "bg-sand-50 dark:bg-night-700 text-neutral-400 dark:text-neutral-500"
                    }`}>
                      <span className="block text-[10px] uppercase tracking-wider mb-0.5">&nbsp;</span>Preoccupied
                    </div>
                    <div className={`p-3 rounded-lg text-center text-xs font-medium transition-all ${
                      style.key === "dismissing"
                        ? `${STYLE_COLORS.dismissing.bg} ${STYLE_COLORS.dismissing.text} ring-2 ${STYLE_COLORS.dismissing.ring} font-bold`
                        : "bg-sand-50 dark:bg-night-700 text-neutral-400 dark:text-neutral-500"
                    }`}>
                      <span className="block text-[10px] uppercase tracking-wider mb-0.5">Dismissing-</span>Avoidant
                    </div>
                    <div className={`p-3 rounded-lg text-center text-xs font-medium transition-all ${
                      style.key === "secure"
                        ? `${STYLE_COLORS.secure.bg} ${STYLE_COLORS.secure.text} ring-2 ${STYLE_COLORS.secure.ring} font-bold`
                        : "bg-sand-50 dark:bg-night-700 text-neutral-400 dark:text-neutral-500"
                    }`}>
                      <span className="block text-[10px] uppercase tracking-wider mb-0.5">&nbsp;</span>Secure
                    </div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400">HIGH AVOIDANCE</span>
                    <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400">LOW AVOIDANCE</span>
                  </div>
                  <div className="text-center text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 mt-1">LOW ANXIETY</div>
                </div>
              </div>

              {/* Subscale Bars */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">Anxiety Subscale</span>
                    <span className={`text-sm font-bold ${anxietyMean > 3.5 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"}`}>
                      {anxietyMean.toFixed(2)} {anxietyMean > 3.5 ? "(High)" : "(Low)"}
                    </span>
                  </div>
                  <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${anxietyMean > 3.5 ? "from-warm-400 to-warm-600" : "from-sage-400 to-sage-600"} rounded-full transition-all duration-700`}
                      style={{ width: `${(anxietyMean / 7) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                    <span>1 \u2014 Low</span>
                    <span className="text-[10px]">\u25BC 3.5 cutoff</span>
                    <span>7 \u2014 High</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">Avoidance Subscale</span>
                    <span className={`text-sm font-bold ${avoidanceMean > 3.5 ? "text-warm-600 dark:text-warm-400" : "text-sage-600 dark:text-sage-400"}`}>
                      {avoidanceMean.toFixed(2)} {avoidanceMean > 3.5 ? "(High)" : "(Low)"}
                    </span>
                  </div>
                  <div className="h-2 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${avoidanceMean > 3.5 ? "from-warm-400 to-warm-600" : "from-sage-400 to-sage-600"} rounded-full transition-all duration-700`}
                      style={{ width: `${(avoidanceMean / 7) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
                    <span>1 \u2014 Low</span>
                    <span className="text-[10px]">\u25BC 3.5 cutoff</span>
                    <span>7 \u2014 High</span>
                  </div>
                </div>
              </div>

              {/* Description & Suggestion */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-4">
                <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">{style.description}</p>
                <div className="bg-sand-50 dark:bg-night-700 rounded-xl p-4">
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <strong>What you can consider next:</strong> {style.suggestion}
                  </p>
                </div>
                <div className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                  <p className="text-xs text-warm-700 dark:text-warm-400 leading-relaxed">
                    <strong>Important reminder:</strong> Attachment styles are patterns, not fixed traits. They can shift over time through new experiences and personal growth. This tool is for self-reflection and education only \u2014 it is not a clinical assessment.
                  </p>
                </div>
              </div>
            </div>

            {/* Print-only footer */}
            <div className="hidden print:block text-center text-xs text-neutral-400 mt-4 pb-4 border-t border-neutral-200 pt-3">
              <p>ECR-R Attachment Style Quiz from mindchecktools.com \u2014 {new Date().toLocaleDateString()}</p>
              <p>This is a self-reflection tool, not a diagnosis. Consult a healthcare professional.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-5">
            <button onClick={handleReset} className="btn-primary flex-1 text-base py-4">
              Start Over
            </button>
            <button
              onClick={handlePrint}
              className="btn-secondary px-5 py-4 flex items-center gap-2"
              title="Print your results"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span className="hidden sm:inline">Print</span>
            </button>
          </div>

          {/* Share Buttons */}
          <div className="card p-4 mb-8">
            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">Share</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleShare("results")}
                className="btn-secondary text-sm px-4 py-2.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Copy My Results
              </button>
              <button
                onClick={() => handleShare("blank")}
                className="btn-secondary text-sm px-4 py-2.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Blank Quiz
              </button>
            </div>
            {shareMessage && (
              <p className="text-xs text-sage-600 dark:text-sage-400 font-medium mt-2 animate-fade-in">
                {"\u2713"} {shareMessage}
              </p>
            )}
          </div>

          {/* Download Reflection Summary */}
          <ReflectionSummary
            toolName="ECR-R Attachment Style Quiz"
            toolUrl="https://mindchecktools.com/attachment-style-quiz"
            score={Number(anxietyMean.toFixed(2))}
            severityLabel={style.label}
            scoreRange={`Anxiety: ${anxietyMean.toFixed(2)}/7 \u2014 Avoidance: ${avoidanceMean.toFixed(2)}/7`}
            interpretation={style.description}
            suggestion={style.suggestion}
            reflectionPrompts={REFLECTION_PROMPTS["attachment-style-quiz"]?.prompts ?? []}
            responses={QUESTIONS.map((q, i) => ({
              question: q,
              answer: `${answers[i]} \u2014 ${OPTIONS[(answers[i] ?? 1) - 1]?.label}${REVERSE_ITEMS.has(i) ? " (R)" : ""}`,
            }))}
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


          {/* Reflection Prompts */}
          {REFLECTION_PROMPTS["attachment-style-quiz"] && (
            <ReflectionPrompts
              toolName="ECR-R Attachment Style Quiz"
              prompts={REFLECTION_PROMPTS["attachment-style-quiz"].prompts}
            />
          )}

          {/* How Scoring Works */}
          <div className="card overflow-hidden mb-5">
            <button
              onClick={() => setShowScoring(!showScoring)}
              className="w-full p-5 flex justify-between items-center text-left"
            >
              <span className="font-serif text-base font-semibold text-neutral-800 dark:text-neutral-100">
                How this score is calculated
              </span>
              <svg className={`w-5 h-5 text-neutral-400 transition-transform ${showScoring ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showScoring && (
              <div className="px-5 pb-5 space-y-3 animate-fade-in">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  The ECR-R measures two independent dimensions of adult attachment:
                </p>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-sand-50 dark:bg-night-700">
                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-1">Anxiety (Items 1\u201318)</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Measures fear of rejection and abandonment in relationships. Items 9 and 11 are reverse-scored. Your mean: <strong>{anxietyMean.toFixed(2)}</strong></p>
                  </div>
                  <div className="p-3 rounded-lg bg-sand-50 dark:bg-night-700">
                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-1">Avoidance (Items 19\u201336)</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">Measures discomfort with closeness and dependence. Items 20, 22, 26\u201331, 33\u201336 are reverse-scored. Your mean: <strong>{avoidanceMean.toFixed(2)}</strong></p>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  A mean score above 3.5 on either subscale is classified as &ldquo;High&rdquo; on that dimension. The combination of high/low anxiety and high/low avoidance determines one of four attachment styles.
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-2">
                  Scoring follows Fraley, Waller, &amp; Brennan (2000). The 3.5 midpoint cutoff is commonly used in research but is not a clinical threshold.
                </p>
              </div>
            )}
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6 mb-5">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need Support Right Now?</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are struggling with relationship patterns or emotional well-being, support is available:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988 \u2014 available 24/7", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", color: "text-warm-600 dark:text-warm-400" },
                { label: "SAMHSA Helpline (US)", detail: "1-800-662-4357 \u2014 free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
                { label: "International Resources", detail: "Visit findahelpline.com for your country", color: "text-sage-600 dark:text-sage-400" },
              ].map((r) => (
                <div key={r.label} className="p-3.5 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700">
                  <p className={`text-sm font-semibold ${r.color}`}>{r.label}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 text-center">
            <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="text-sm font-medium text-sage-600 dark:text-sage-400 hover:underline">
              Ready to take the next step? Here&apos;s how to bring your results to your doctor &rarr;
            </Link>
          </div>

          <AdSlot position="Below Results" className="mb-8" />

          {/* FAQ */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqData.map((faq, i) => (
                <div key={i} className="card overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full p-4 flex justify-between items-center text-left gap-3"
                  >
                    <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 flex-1">{faq.question}</span>
                    <svg className={`w-4 h-4 text-neutral-400 transition-transform flex-shrink-0 ${expandedFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedFaq === i && (
                    <div className="px-4 pb-4 animate-fade-in">
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <AdSlot position="Mid Content" className="mb-8" />

          {/* What Research Is This Based On? */}
          <section className="mb-8">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">What Research Is This Based On?</h2>
            <div className="card p-5 sm:p-6">
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <li>
                  Fraley, R. C., Waller, N. G., &amp; Brennan, K. A. (2000). An item response theory analysis of self-report measures of adult attachment.{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/10707340/" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PubMed</a>
                </li>
                <li>
                  Brennan, K. A., Clark, C. L., &amp; Shaver, P. R. (1998). Self-report measurement of adult attachment: An integrative overview. In J. A. Simpson &amp; W. S. Rholes (Eds.), <em>Attachment theory and close relationships</em> (pp. 46\u201376). Guilford Press.
                </li>
                <li>
                  Fraley, R. C. (2012). Information on the Experiences in Close Relationships\u2014Revised (ECR-R).{" "}
                  <a href="https://labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">labs.psychology.illinois.edu</a>
                </li>
              </ul>
            </div>
          </section>

          {/* Related Tools */}
          <section className="mb-8">
            <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Mental Health Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "Attachment Style Test for Couples", desc: "ECR-R with relationship-focused context", href: "/attachment-style-test-for-couples" },
                { name: "UCLA Loneliness Scale", desc: "20-item measure of subjective loneliness", href: "/ucla-loneliness-scale" },
                { name: "Rosenberg Self-Esteem Scale", desc: "10-item global self-esteem measure", href: "/rosenberg-self-esteem-scale" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot position="Footer" className="mb-8" />

          {/* Attribution */}
          <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 text-center">
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
              The ECR-R was developed by R. Chris Fraley, Niels G. Waller, and Kelly A. Brennan. It is in the public domain and available for use without permission from Dr. Fraley&apos;s lab at the University of Illinois.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              This tool is for educational purposes only. It is not medical advice, a diagnosis, or a treatment recommendation.
            </p>
            <ToolReviewerBio />
          </footer>
        </div>
      )}
    </div>
  );
}

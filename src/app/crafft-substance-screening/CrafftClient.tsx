"use client";

import { useState } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

/* ================================================================== */
/*  Data                                                               */
/* ================================================================== */

interface PartAItem {
  id: string;
  text: string;
  gates: boolean; // whether this item gates Part B
}

const PART_A: PartAItem[] = [
  {
    id: "alcohol",
    text: "During the past 12 months, did you drink any alcohol (more than a few sips)?",
    gates: true,
  },
  {
    id: "cannabis",
    text: "During the past 12 months, did you use any marijuana (weed, oil, or edibles) or hashish?",
    gates: true,
  },
  {
    id: "other",
    text: "During the past 12 months, did you use anything else to get high (like other drugs, over-the-counter or prescription medications not prescribed to you, or things you sniff or huff)?",
    gates: true,
  },
  {
    id: "nicotine",
    text: "During the past 12 months, did you use any nicotine or tobacco products (including e-cigarettes, vapes, cigarettes, cigars, hookah, or chewing tobacco)?",
    gates: false, // +N = informational only, does not gate Part B
  },
];

interface CrafftItem {
  id: string;
  letter: string;
  keyword: string;
  text: string;
}

const CRAFFT_ITEMS: CrafftItem[] = [
  {
    id: "car",
    letter: "C",
    keyword: "Car",
    text: "Have you ever ridden in a CAR driven by someone (including yourself) who was \"high\" or had been using alcohol or drugs?",
  },
  {
    id: "relax",
    letter: "R",
    keyword: "Relax",
    text: "Do you ever use alcohol or drugs to RELAX, feel better about yourself, or fit in?",
  },
  {
    id: "alone",
    letter: "A",
    keyword: "Alone",
    text: "Do you ever use alcohol or drugs while you are by yourself, or ALONE?",
  },
  {
    id: "forget",
    letter: "F",
    keyword: "Forget",
    text: "Do you ever FORGET things you did while using alcohol or drugs?",
  },
  {
    id: "friends",
    letter: "F",
    keyword: "Friends/Family",
    text: "Do your FRIENDS or FAMILY ever tell you that you should cut down on your drinking or drug use?",
  },
  {
    id: "trouble",
    letter: "T",
    keyword: "Trouble",
    text: "Have you ever gotten into TROUBLE while you were using alcohol or drugs?",
  },
];

/* ================================================================== */
/*  Component                                                          */
/* ================================================================== */

interface Props {
  faqData: { question: string; answer: string }[];
}

export function CrafftClient({ faqData }: Props) {
  const [partAAnswers, setPartAAnswers] = useState<Record<string, boolean>>({});
  const [partBAnswers, setPartBAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  /* Derived */
  const allPartAAnswered = PART_A.every((q) => partAAnswers[q.id] !== undefined);
  const anyGatingYes = PART_A.some((q) => q.gates && partAAnswers[q.id] === true);
  const nicotineYes = partAAnswers.nicotine === true;

  // Which Part B questions to show
  const visiblePartB = anyGatingYes ? CRAFFT_ITEMS : CRAFFT_ITEMS.slice(0, 1); // all 6 or just Car
  const allPartBAnswered = visiblePartB.every((q) => partBAnswers[q.id] !== undefined);
  const allAnswered = allPartAAnswered && allPartBAnswered;

  // Score = count of "Yes" in Part B (only scored items)
  const score = visiblePartB.reduce((sum, q) => sum + (partBAnswers[q.id] === true ? 1 : 0), 0);
  const isPositive = score >= 2;

  function handlePartA(id: string, value: boolean) {
    setPartAAnswers((prev) => ({ ...prev, [id]: value }));
    // If gating answers change, clear Part B answers that may no longer be visible
    const item = PART_A.find((q) => q.id === id);
    if (item?.gates) {
      setPartBAnswers({});
    }
  }

  function handlePartB(id: string, value: boolean) {
    setPartBAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit() {
    if (!allAnswered) return;
    setShowResults(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRetake() {
    setPartAAnswers({});
    setPartBAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ================================================================ */
  /*  Results                                                          */
  /* ================================================================ */
  if (showResults) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
          Your CRAFFT Results
        </h1>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-8">
          Substance use screening · Ages 12–21 · CRAFFT 2.1+N
        </p>

        {/* Score Card */}
        <div className={`p-6 rounded-xl border-2 mb-8 ${
          isPositive
            ? "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800"
            : "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800"
        }`}>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-xl font-bold ${
              isPositive
                ? "text-amber-700 dark:text-amber-300"
                : "text-green-700 dark:text-green-300"
            }`}>
              {isPositive ? "Higher Risk — Positive Screen" : "Lower Risk"}
            </h2>
            <span className={`text-2xl font-bold ${
              isPositive
                ? "text-amber-700 dark:text-amber-300"
                : "text-green-700 dark:text-green-300"
            }`}>
              {score} / {visiblePartB.length}
            </span>
          </div>
          <div className="w-full h-3 bg-white/50 dark:bg-black/20 rounded-full overflow-hidden mb-4">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${visiblePartB.length > 0 ? (score / visiblePartB.length) * 100 : 0}%`,
                backgroundColor: isPositive ? "#f59e0b" : "#22c55e",
              }}
            />
          </div>
          <p className={`text-sm leading-relaxed ${
            isPositive
              ? "text-amber-700 dark:text-amber-300"
              : "text-green-700 dark:text-green-300"
          }`}>
            {isPositive
              ? "Your answers suggest that your use of alcohol or drugs might be putting you at risk. This doesn't mean you're in trouble — it means that talking to someone you trust could be really helpful. A parent, school counselor, doctor, or other trusted adult can help you think through what's going on."
              : score === 1
                ? "Your overall score is below the screening threshold, which is a positive sign. However, you did answer \"Yes\" to one question — take a look at which one it was and think about whether it's something worth paying attention to."
                : "Your answers suggest a lower level of risk right now. That's good news. Keep making safe choices, and remember that this screening is always here if things change."
            }
          </p>
        </div>

        <AdSlot position="results-top" />

        {/* CRAFFT Mnemonic Breakdown */}
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Your Answers: C-R-A-F-F-T
        </h2>
        <div className="space-y-3 mb-8">
          {visiblePartB.map((item) => {
            const answered = partBAnswers[item.id];
            const isYes = answered === true;
            return (
              <div key={item.id} className={`p-4 rounded-xl border flex items-start gap-4 ${
                isYes
                  ? "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800"
                  : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
              }`}>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
                  isYes
                    ? "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                    : "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
                }`}>
                  {item.letter}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-neutral-700 dark:text-neutral-200">
                      {item.keyword}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      isYes
                        ? "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                        : "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
                    }`}>
                      {isYes ? "Yes" : "No"}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Car safety note */}
        {partBAnswers.car === true && (
          <div className="mb-8 p-4 rounded-xl border-2 bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800">
            <h3 className="text-base font-bold text-red-700 dark:text-red-300 mb-2">
              Important Safety Note
            </h3>
            <p className="text-sm text-red-700 dark:text-red-300 leading-relaxed">
              Riding in a car with a driver who has been using alcohol or drugs is one of the leading causes of death for young people. Please never get in a car with an impaired driver. It is always okay to call a parent, another trusted adult, or a rideshare service instead — even if it feels awkward in the moment. Your safety is more important.
            </p>
          </div>
        )}

        {/* Nicotine note */}
        {nicotineYes && (
          <div className="mb-8 p-4 rounded-xl border bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
            <h3 className="text-base font-bold text-blue-700 dark:text-blue-300 mb-2">
              About Nicotine &amp; Vaping
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed mb-2">
              You indicated that you have used nicotine or tobacco products in the past 12 months. Nicotine is highly addictive, and the younger you start, the harder it can be to quit. Vaping and e-cigarettes are not safe alternatives to smoking — they still deliver nicotine and other chemicals that can affect your developing brain and lungs.
            </p>
            <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
              If you want to quit or cut down, free help is available: text DITCHVAPE to 88709, call 1-800-QUIT-NOW (1-800-784-8669), or visit teen.smokefree.gov.
            </p>
          </div>
        )}

        {/* Positive screen follow-up */}
        {isPositive && (
          <div className="mb-8 p-5 rounded-xl border-2 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
            <h2 className="text-lg font-bold text-amber-700 dark:text-amber-300 mb-2">
              What You Can Do Next
            </h2>
            <p className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed mb-3">
              A positive CRAFFT screen means it could be helpful to talk to someone. Here are some options:
            </p>
            <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5">•</span>
                <span><strong>Talk to a trusted adult</strong> — a parent, school counselor, coach, or family member</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5">•</span>
                <span><strong>Talk to your doctor</strong> — they can help privately and without judgment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5">•</span>
                <span><strong>Text HOME to 741741</strong> — free, confidential Crisis Text Line (24/7)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5">•</span>
                <span><strong>Call or text 988</strong> — Suicide &amp; Crisis Lifeline (24/7)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="shrink-0 mt-0.5">•</span>
                <span><strong>Call 1-800-662-4357</strong> — SAMHSA National Helpline for treatment referrals (24/7)</span>
              </li>
            </ul>
          </div>
        )}

        {/* Part A Summary */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Part A: Past 12 Months
          </h2>
          <div className="space-y-2">
            {PART_A.map((q) => {
              const val = partAAnswers[q.id];
              return (
                <div key={q.id} className={`p-3 rounded-lg border text-sm flex items-center justify-between ${
                  val
                    ? "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800"
                    : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
                }`}>
                  <span className="text-neutral-700 dark:text-neutral-200 pr-4 text-xs leading-relaxed">
                    {q.id === "alcohol" ? "Alcohol" : q.id === "cannabis" ? "Cannabis" : q.id === "other" ? "Other substances" : "Nicotine/tobacco"}
                    {q.id === "nicotine" && <span className="text-neutral-400 dark:text-neutral-500"> (+N)</span>}
                  </span>
                  <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    val
                      ? "bg-amber-200 dark:bg-amber-800 text-amber-800 dark:text-amber-200"
                      : "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300"
                  }`}>
                    {val ? "Yes" : "No"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <AdSlot position="results-middle" />

        {/* Score Guide */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Score Guide
          </h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-lg text-center bg-green-50 dark:bg-green-950/30">
              <p className="text-xs font-bold text-green-700 dark:text-green-300">Lower Risk</p>
              <p className="text-xs text-green-700 dark:text-green-300">0–1</p>
            </div>
            <div className="p-3 rounded-lg text-center bg-amber-50 dark:bg-amber-950/30">
              <p className="text-xs font-bold text-amber-700 dark:text-amber-300">Higher Risk</p>
              <p className="text-xs text-amber-700 dark:text-amber-300">2+ (positive screen)</p>
            </div>
          </div>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2 text-center">
            Score is based on Part B (CRAFFT) questions only. Part A and the nicotine question are not scored.
          </p>
        </div>

        {/* Related Tools */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-3">
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/depression-test-for-teens" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">Depression Test for Teens →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">PHQ-9 with teen-specific info and resources</p>
            </Link>
            <Link href="/gad-7-anxiety-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">GAD-7 Anxiety Self-Check →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">7-item validated anxiety screener</p>
            </Link>
            <Link href="/audit-alcohol-test" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">AUDIT Alcohol Screen →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Detailed alcohol use screening (adults)</p>
            </Link>
            <Link href="/dast-10-drug-screening" className="block p-3 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg hover:border-sage-400 dark:hover:border-sage-600 transition-colors">
              <span className="text-sm font-semibold text-sage-700 dark:text-sage-400">DAST-10 Drug Screen →</span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">10-item drug screening (adults)</p>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          <button onClick={() => window.print()} className="px-5 py-2.5 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors text-sm font-medium">
            Print Results
          </button>
          <button onClick={handleRetake} className="px-5 py-2.5 bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-lg hover:bg-sand-100 dark:hover:bg-night-700 transition-colors text-sm font-medium">
            Retake Screening
          </button>
        </div>

        {/* Educational Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none mb-10">
          <h2>About the CRAFFT</h2>
          <p>
            The CRAFFT was developed by Dr. John R. Knight and colleagues at the Center for Adolescent Substance Abuse Research (CeASAR) at Boston Children&apos;s Hospital and Harvard Medical School. It was first published in 1999 and has been updated several times, with version 2.1+N being the most current. It is the most widely studied and recommended adolescent substance use screening tool in the world.
          </p>
          <p>
            The American Academy of Pediatrics (AAP) recommends that all adolescents be screened for substance use annually using a validated tool like the CRAFFT. The screening is designed to be brief, non-judgmental, and easy to understand for young people ages 12-21.
          </p>
          <h2>How the CRAFFT Works</h2>
          <p>
            The CRAFFT uses a two-part structure. <strong>Part A</strong> asks about recent substance use (past 12 months) to determine which Part B questions are relevant. If you haven&apos;t used alcohol, marijuana, or other drugs in the past year, you only need to answer the &ldquo;Car&rdquo; question about riding with impaired drivers — an important safety question for all young people regardless of personal use.
          </p>
          <p>
            If you have used any substances, <strong>Part B</strong> asks all six CRAFFT questions. Each &ldquo;Yes&rdquo; answer adds one point to your score. The six questions were carefully chosen because research shows they are the best predictors of substance-related problems in young people. A score of 2 or higher suggests a pattern that may benefit from a conversation with a healthcare provider.
          </p>
          <h2>Why the CRAFFT Matters</h2>
          <p>
            Substance use during adolescence carries unique risks because the brain continues developing until around age 25. Alcohol, drugs, and nicotine can affect brain development, learning, memory, and decision-making in ways that are different from adult use. Early identification of risky patterns gives young people the best chance of avoiding long-term problems. The CRAFFT is not about punishment or labels — it is about helping young people make informed decisions about their health and safety.
          </p>
        </div>

        {/* YMYL Disclaimer */}
        <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
          <p className="font-semibold mb-1">Clinical Disclaimer</p>
          <p>
            The CRAFFT is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a substance use problem. A positive screen (score of 2+) suggests that further conversation with a trusted adult or healthcare provider may be helpful. Always consult a qualified healthcare professional for substance use concerns. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
        </div>

        <ToolReviewerBio />

        {/* Crisis Resources — youth-specific */}
        <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
            Need to Talk to Someone?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
            <div>
              <p className="font-bold">Crisis Text Line</p>
              <p>Text HOME to 741741 · 24/7 · Free</p>
            </div>
            <div>
              <p className="font-bold">988 Suicide &amp; Crisis Lifeline</p>
              <p>Call or text 988 · 24/7</p>
            </div>
            <div>
              <p className="font-bold">SAMHSA National Helpline</p>
              <p>1-800-662-4357 · 24/7</p>
            </div>
            <div>
              <p className="font-bold">Teen Line</p>
              <p>Text TEEN to 839863 or call 1-800-852-8336</p>
            </div>
          </div>
          <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">
            If you are under 18 and in crisis, you can also reach the Crisis Text Line by texting HOME to 741741. A trained counselor will respond.
          </p>
        </div>

        <p className="text-xs text-center text-neutral-400 dark:text-neutral-500 mb-10">
          Your responses were scored entirely in your browser. Nothing was stored or transmitted.
        </p>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-lg">
                <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-sage-700 dark:hover:text-sage-400 transition-colors list-none flex items-center justify-between">
                  {faq.question}
                  <span className="ml-2 text-neutral-400 group-open:rotate-180 transition-transform">▾</span>
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

  /* ================================================================ */
  /*  Assessment Form                                                  */
  /* ================================================================ */
  const totalQuestions = PART_A.length + (allPartAAnswered ? visiblePartB.length : 0);
  const answeredCount = Object.keys(partAAnswers).length + Object.keys(partBAnswers).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
        CRAFFT Screening
      </h1>
      <p className="text-center text-neutral-500 dark:text-neutral-400 mb-2 max-w-2xl mx-auto">
        A quick, confidential check-in about alcohol, drugs, and safety — designed for young people ages 12–21.
      </p>
      <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-8">
        ~2 minutes · Yes/No questions · Completely private · CRAFFT 2.1+N
      </p>

      <AdSlot position="tool-top" />

      {/* Reassurance */}
      <div className="mb-8 p-4 bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 rounded-xl">
        <p className="text-sm text-sage-700 dark:text-sage-300 text-center leading-relaxed">
          No judgment here. Your answers are private — they stay in your browser and are never saved or shared with anyone. Not your parents, not your school, not us.
        </p>
      </div>

      {/* Progress */}
      {totalQuestions > 0 && (
        <div className="mb-6">
          <div className="flex justify-between text-xs text-neutral-400 dark:text-neutral-500 mb-1">
            <span>{answeredCount} of {totalQuestions} answered</span>
            <span>{Math.round((answeredCount / totalQuestions) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-sand-200 dark:bg-neutral-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-sage-500 rounded-full transition-all duration-300"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Part A */}
      <div className="mb-8">
        <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
          Part A: Past 12 Months
        </h2>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-4">
          Answer Yes or No to each question.
        </p>
        <div className="space-y-3">
          {PART_A.map((q, idx) => (
            <div
              key={q.id}
              className={`p-4 rounded-xl border transition-colors ${
                partAAnswers[q.id] !== undefined
                  ? "bg-white dark:bg-night-800 border-sage-200 dark:border-sage-800"
                  : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  partAAnswers[q.id] !== undefined
                    ? "bg-sage-500 text-white"
                    : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
                }`}>
                  {partAAnswers[q.id] !== undefined ? "✓" : idx + 1}
                </span>
                <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                  {q.text}
                  {q.id === "nicotine" && (
                    <span className="ml-1 text-xs text-neutral-400 dark:text-neutral-500">(+N)</span>
                  )}
                </p>
              </div>
              <div className="flex gap-2 ml-10">
                <button
                  onClick={() => handlePartA(q.id, true)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    partAAnswers[q.id] === true
                      ? "bg-sage-600 text-white"
                      : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                  }`}
                >
                  Yes
                </button>
                <button
                  onClick={() => handlePartA(q.id, false)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    partAAnswers[q.id] === false
                      ? "bg-sage-600 text-white"
                      : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                  }`}
                >
                  No
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part B — appears after all Part A answered */}
      {allPartAAnswered && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-1">
            Part B: CRAFFT Questions
          </h2>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-4">
            {anyGatingYes
              ? "Answer Yes or No to each of the six CRAFFT questions."
              : "Since you answered \"No\" to alcohol, cannabis, and other substances, only the safety question below is needed."
            }
          </p>
          <div className="space-y-3">
            {visiblePartB.map((q) => (
              <div
                key={q.id}
                className={`p-4 rounded-xl border transition-colors ${
                  partBAnswers[q.id] !== undefined
                    ? "bg-white dark:bg-night-800 border-sage-200 dark:border-sage-800"
                    : "bg-white dark:bg-night-800 border-sand-200 dark:border-neutral-700"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    partBAnswers[q.id] !== undefined
                      ? "bg-sage-100 dark:bg-sage-900/40 text-sage-700 dark:text-sage-300"
                      : "bg-sand-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400"
                  }`}>
                    {q.letter}
                  </span>
                  <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    {q.text}
                  </p>
                </div>
                <div className="flex gap-2 ml-10">
                  <button
                    onClick={() => handlePartB(q.id, true)}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      partBAnswers[q.id] === true
                        ? "bg-sage-600 text-white"
                        : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handlePartB(q.id, false)}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      partBAnswers[q.id] === false
                        ? "bg-sage-600 text-white"
                        : "bg-sand-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-sage-100 dark:hover:bg-sage-900/30"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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
            Please answer all questions to continue
          </p>
        )}
      </div>

      {/* YMYL Disclaimer */}
      <div className="mb-6 p-4 bg-sand-100 dark:bg-night-800 border border-sand-200 dark:border-neutral-700 rounded-xl text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        <p className="font-semibold mb-1">Clinical Disclaimer</p>
        <p>
          The CRAFFT is a screening tool for educational and self-reflection purposes. It is not a clinical assessment and cannot determine whether you have a substance use problem. A positive screen (score of 2+) suggests that further conversation with a trusted adult or healthcare provider may be helpful. Always consult a qualified healthcare professional for substance use concerns. Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
        </p>
      </div>

      {/* Crisis Resources */}
      <div className="mb-6 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl">
        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
          Need to Talk to Someone?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-700 dark:text-amber-300">
          <div>
            <p className="font-bold">Crisis Text Line</p>
            <p>Text HOME to 741741 · 24/7 · Free</p>
          </div>
          <div>
            <p className="font-bold">988 Suicide &amp; Crisis Lifeline</p>
            <p>Call or text 988 · 24/7</p>
          </div>
          <div>
            <p className="font-bold">SAMHSA National Helpline</p>
            <p>1-800-662-4357 · 24/7</p>
          </div>
          <div>
            <p className="font-bold">Teen Line</p>
            <p>Text TEEN to 839863 or call 1-800-852-8336</p>
          </div>
        </div>
        <p className="text-xs text-amber-600 dark:text-amber-400 mt-2">
          If you are under 18 and in crisis, you can also reach the Crisis Text Line by texting HOME to 741741.
        </p>
      </div>

      <p className="text-xs text-center text-neutral-400 dark:text-neutral-500">
        Your responses are scored entirely in your browser. Nothing is stored or transmitted.
      </p>
    </div>
  );
}

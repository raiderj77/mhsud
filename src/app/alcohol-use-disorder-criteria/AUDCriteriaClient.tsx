"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { DisclaimerGate } from "@/components/DisclaimerGate";
import { ReflectionPrompts } from "@/components/ReflectionPrompts";
import { ReflectionSummary } from "@/components/ReflectionSummary";
import { ScreeningDirectoryLinks } from "@/components/ScreeningDirectoryLinks";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import {
  AUD_CRITERIA_ITEMS,
  AUD_CRITERIA_RANGES,
  countAudCriteria,
  getAudCriteriaRange,
  hasWithdrawalFlag,
} from "@/lib/audCriteriaScoring.mjs";
import {
  PRIVATE_SHARE_COPIED_MESSAGE,
  PRIVATE_SHARE_NOTICE,
  sharePrivateToolLink,
} from "@/lib/privateToolSharing";
import { REFLECTION_PROMPTS } from "@/lib/reflectionPrompts";

const TOOL_NAME = "Alcohol Use Disorder Criteria Self-Check";
const TOOL_PATH = "/alcohol-use-disorder-criteria";
const LAST_REVIEWED = "November 26, 2026";
const WITHDRAWAL_NOTE = "You reported withdrawal symptoms. If you drink heavily, do not stop suddenly without medical guidance. Alcohol withdrawal can be medically serious. Talk to a clinician or call SAMHSA's National Helpline (1-800-662-4357) for guidance first.";

const RELATED_TOOLS = [
  { name: "Full AUDIT", description: "10-question WHO alcohol screen", href: "/audit-alcohol-test" },
  { name: "AUDIT-C", description: "3-question alcohol screen", href: "/audit-c-alcohol-screen" },
  { name: "CUDIT-R Cannabis Screen", description: "8-question cannabis screen", href: "/cudit-r-cannabis-screening" },
];

const HEADING = "font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100";
const BODY = "text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed";
const LINK = "underline text-sage-700 dark:text-sage-400";

interface Props {
  faqData: { question: string; answer: string }[];
}

export function AUDCriteriaClient({ faqData }: Props) {
  const [accepted, setAccepted] = useState(false);
  const [answers, setAnswers] = useState<(boolean | null)[]>(() => AUD_CRITERIA_ITEMS.map(() => null));
  const [showResults, setShowResults] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const answered = answers.filter((answer) => answer !== null).length;
  const count = countAudCriteria(answers);
  const range = count === null ? undefined : getAudCriteriaRange(count);
  const withdrawal = hasWithdrawalFlag(answers);
  const resultsHeadingRef = useCallback((heading: HTMLHeadingElement | null) => {
    heading?.focus();
  }, []);

  function handleAnswer(index: number, value: boolean) {
    setAnswers((previous) => previous.map((answer, position) => position === index ? value : answer));
  }

  function handleReset() {
    setAnswers(AUD_CRITERIA_ITEMS.map(() => null));
    setShowResults(false);
    setShareMessage("");
    document.getElementById("aud-criteria-title")?.focus();
  }

  async function handleShare(mode: "share" | "copy") {
    const outcome = await sharePrivateToolLink({
      toolName: "Alcohol Use Disorder Criteria Self-Check",
      canonicalPath: "/alcohol-use-disorder-criteria",
      mode,
    });
    setShareMessage(outcome === "copied" ? PRIVATE_SHARE_COPIED_MESSAGE : "");
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {["Educational Self-Check", "~2 Minutes", "11 Questions"].map((badge) => (
            <span key={badge} className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">{badge}</span>
          ))}
        </div>
        <h1 id="aud-criteria-title" tabIndex={-1} className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
          {TOOL_NAME}
        </h1>
        <p className={BODY}>
          An Original Educational Tool for adults 18 and older. Count the statements that apply to your drinking in the past 12 months. Your answers and count are processed locally in your browser.
        </p>
        <ToolReviewerBio lastReviewed={LAST_REVIEWED} />
      </header>

      {!accepted && (
        <DisclaimerGate
          toolName={TOOL_NAME}
          toolDescription="This original educational self-check uses MindCheck Tools' own words for the 11 criteria clinicians use. The DSM-5 is a clinical manual. This self-check is separate from that manual, contains no reproduced DSM text, and cannot diagnose any condition."
          onAccept={() => setAccepted(true)}
        />
      )}

      {accepted && !showResults && (
        <div className="mb-8">
          <div className="sticky top-14 z-10 bg-sand-50/90 dark:bg-night-900/90 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 mb-4">
            <p role="status" className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-2">
              {answered} of {AUD_CRITERIA_ITEMS.length} answered
            </p>
            <div aria-hidden="true" className="h-1 bg-sand-200 dark:bg-night-700 rounded-full overflow-hidden">
              <div className="h-full bg-sage-500" style={{ width: `${answered / AUD_CRITERIA_ITEMS.length * 100}%` }} />
            </div>
          </div>

          <div className="space-y-3">
            {AUD_CRITERIA_ITEMS.map((item, index) => (
              <section key={item.criterion} aria-labelledby={`aud-criterion-${item.criterion}`} className="card p-5 scroll-mt-32">
                <h2 id={`aud-criterion-${item.criterion}`} className={HEADING}>{item.criterion}. {item.label}</h2>
                <p id={`aud-statement-${item.criterion}`} className={`${BODY} mt-1 mb-3`}>{item.text}</p>
                <div role="group" aria-labelledby={`aud-statement-${item.criterion}`} className="grid grid-cols-2 gap-2">
                  {[true, false].map((value) => (
                    <button
                      key={String(value)}
                      type="button"
                      aria-pressed={answers[index] === value}
                      onClick={() => handleAnswer(index, value)}
                      className={`p-2.5 min-h-[44px] rounded-xl border-2 text-sm scroll-mt-32 ${answers[index] === value
                        ? "border-sage-400 dark:border-sage-600 bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-300 font-semibold"
                        : "border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 text-neutral-700 dark:text-neutral-300 hover:border-sage-400"}`}
                    >
                      {value ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <button type="button" onClick={() => setShowResults(true)} disabled={count === null} className="btn-primary flex-1 py-4">View My Results</button>
            <button type="button" onClick={handleReset} className="btn-secondary px-5">Reset</button>
          </div>
        </div>
      )}

      {showResults && range && count !== null && (
        <div className="mb-8">
          <section className="card overflow-hidden mb-5">
            <div className="bg-sage-50 dark:bg-sage-950/30 p-6 sm:p-8 text-center">
              <h2 ref={resultsHeadingRef} tabIndex={-1} className={`${HEADING} scroll-mt-24`}>Your self-check count</h2>
              <p className="font-serif text-5xl font-bold text-sage-700 dark:text-sage-400 my-2">{count} of 11</p>
              <p className="font-semibold text-neutral-800 dark:text-neutral-100">{range.level}</p>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              {withdrawal && (
                <aside aria-labelledby="aud-withdrawal-heading" className="bg-warm-50 dark:bg-warm-950/20 border border-warm-200 dark:border-warm-900 rounded-xl p-4">
                  <h3 id="aud-withdrawal-heading" className={HEADING}>Alcohol withdrawal safety</h3>
                  <p className={`${BODY} mt-2`}>{WITHDRAWAL_NOTE}</p>
                </aside>
              )}
              <p className={BODY}>{range.description}</p>
              <p className={`${BODY} bg-warm-50 dark:bg-warm-950/20 rounded-xl p-4`}>
                Counting criteria at home is a recognition step. A diagnosis requires a clinician&apos;s interview, and clinicians also weigh timing, context, and other conditions.
              </p>
              <p className={`${BODY} bg-sand-50 dark:bg-night-700 rounded-xl p-4`}>
                <strong>What you can consider next.</strong> {range.suggestion}
              </p>
              <Link href="/audit-alcohol-test" className="block bg-sage-50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4 hover:border-sage-400">
                <p className="text-sm font-semibold text-sage-700 dark:text-sage-400">Take the full AUDIT</p>
                <p className={BODY}>10-question WHO alcohol screen</p>
              </Link>
              <Link href="/signs-of-alcoholism" className="block card p-4 hover:border-sage-400">
                <p className="text-sm font-semibold text-sage-700 dark:text-sage-400">Read the 11 signs in plain language</p>
              </Link>
              <p className={BODY}>Your answers and count are processed locally in your browser. <Link href="/privacy" className={LINK}>Privacy policy</Link></p>
            </div>
          </section>

          <section className="card p-5 sm:p-6 mb-5">
            <h2 className={`${HEADING} mb-4`}>Your Response Summary</h2>
            <dl className="divide-y divide-sand-100 dark:divide-neutral-700">
              {AUD_CRITERIA_ITEMS.map((item, index) => (
                <div key={item.criterion} className="flex justify-between items-start gap-3 py-2.5">
                  <dt className={BODY}>{item.criterion}. {item.label}</dt>
                  <dd className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{answers[index] ? "Yes" : "No"}</dd>
                </div>
              ))}
            </dl>
          </section>

          <details className="card mb-5">
            <summary className={`${HEADING} p-5 cursor-pointer`}>How this count works</summary>
            <div className="px-5 pb-5 space-y-3">
              <p className={BODY}>Each Yes adds one to the count. Clinicians use the ranges below only after confirming criteria in a professional interview.</p>
              <ul className="space-y-2">
                {AUD_CRITERIA_RANGES.map((band) => (
                  <li key={band.key} className={`${BODY} rounded-lg p-3 ${band.key === range.key ? "bg-sage-50 dark:bg-sage-950/30 font-semibold" : ""}`}>
                    {band.min}–{band.max} · {band.level}
                  </li>
                ))}
              </ul>
            </div>
          </details>

          <ScreeningDirectoryLinks />

          <div className="flex gap-3 my-6">
            <button type="button" onClick={handleReset} className="btn-primary flex-1 py-4">Start Over</button>
            <button type="button" onClick={() => window.print()} className="btn-secondary px-5 py-4">Print</button>
          </div>

          <section className="card p-4 mb-8">
            <h2 className={`${HEADING} mb-3`}>Share</h2>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => handleShare("share")} className="btn-secondary min-h-[44px] px-4">Share Tool Link</button>
              <button type="button" onClick={() => handleShare("copy")} className="btn-secondary min-h-[44px] px-4">Copy Tool Link</button>
            </div>
            <p className={`${BODY} mt-2`}>{PRIVATE_SHARE_NOTICE}</p>
            <p role="status" className={BODY}>{shareMessage}</p>
          </section>

          <ReflectionSummary
            toolName={TOOL_NAME}
            toolUrl={`https://mindchecktools.com${TOOL_PATH}`}
            score={`${count} of 11`}
            severityLabel={range.level}
            scoreRange={`${range.min}–${range.max}`}
            interpretation={withdrawal ? `${WITHDRAWAL_NOTE} ${range.description}` : range.description}
            suggestion={range.suggestion}
            reflectionPrompts={REFLECTION_PROMPTS["alcohol-use-disorder-criteria"]?.prompts ?? []}
            responses={AUD_CRITERIA_ITEMS.map((item, index) => ({
              question: item.label,
              answer: answers[index] ? "Yes" : "No",
            }))}
          />

          {REFLECTION_PROMPTS["alcohol-use-disorder-criteria"] && (
            <ReflectionPrompts
              toolName={TOOL_NAME}
              prompts={REFLECTION_PROMPTS["alcohol-use-disorder-criteria"].prompts}
            />
          )}
        </div>
      )}

      <section className="my-8">
        <h2 className={`${HEADING} mb-4`}>Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqData.map(({ question, answer }) => (
            <details key={question} className="card">
              <summary className="p-4 min-h-[44px] cursor-pointer text-sm font-semibold text-neutral-800 dark:text-neutral-100">{question}</summary>
              <p className={`${BODY} px-4 pb-4`}>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className={`${HEADING} mb-4`}>What Research Is This Based On?</h2>
        <ul className={`card p-5 sm:p-6 space-y-2 ${BODY}`}>
          <li><a href="https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-use-disorder" className={LINK}>NIAAA: Alcohol Use Disorder</a></li>
          <li><a href="https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol" className={LINK}>NIAAA: Core Resource on Alcohol</a></li>
          <li><Link href="/signs-of-alcoholism" className={LINK}>The 11 signs, explained in plain language</Link></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className={`${HEADING} mb-4`}>Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {RELATED_TOOLS.map(({ name, description, href }) => (
            <Link key={href} href={href} className="card p-4 hover:border-sage-400">
              <p className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-1">{name}</p>
              <p className={BODY}>{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="card p-5 sm:p-6 mb-5">
        <h2 className={`${HEADING} mb-2`}>Need Support Right Now?</h2>
        <p className={`${BODY} mb-4`}>In immediate danger, call your local emergency number (911 in the U.S.).</p>
        <ul className="space-y-2">
          {[
            { name: "SAMHSA National Helpline (U.S.)", label: "Call 1-800-662-4357", href: "tel:+18006624357" },
            { name: "988 Suicide & Crisis Lifeline (U.S.)", label: "Call 988", href: "tel:988" },
            { name: "Crisis Text Line (U.S.)", label: "Text HOME to 741741", href: "sms:741741" },
            { name: "International support", label: "Visit findahelpline.com", href: "https://findahelpline.com" },
          ].map(({ name, label, href }) => (
            <li key={name} className="rounded-xl border border-sand-200 dark:border-neutral-700 px-4 pt-3">
              <p className={BODY}>{name}</p>
              <a href={href} className={`${LINK} text-sm inline-flex items-center min-h-[44px]`}>{label}</a>
            </li>
          ))}
        </ul>
      </section>

      <div className="card p-4 mb-8 bg-sage-50 dark:bg-sage-950/20">
        <Link href="/how-to-talk-to-your-doctor-about-mental-health" className={`${LINK} text-sm inline-flex items-center min-h-[44px]`}>
          How to bring your results to your doctor
        </Link>
      </div>

      <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6">
        <p className={`${BODY} mb-2`}>
          This self-check uses MindCheck Tools&apos; own plain-language wording for the 11 DSM-5-TR criteria for alcohol use disorder. It does not reproduce DSM-5-TR text, and a count here is not a diagnosis.
        </p>
        <p className={BODY}>This tool is for educational purposes only. It cannot provide medical advice, a diagnosis, or a treatment recommendation.</p>
        <ToolReviewerBio lastReviewed={LAST_REVIEWED} />
      </footer>
    </div>
  );
}

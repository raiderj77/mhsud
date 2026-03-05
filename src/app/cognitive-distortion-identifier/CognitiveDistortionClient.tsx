"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AdSlot } from "@/components/AdSlot";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";

/* ── Distortion data ─────────────────────────────────── */

interface Distortion {
  id: string;
  name: string;
  description: string;
  example: string;
  reframePrompt: string;
  reframeExample: string;
}

const DISTORTIONS: Distortion[] = [
  {
    id: "all-or-nothing",
    name: "All-or-Nothing Thinking",
    description: "Seeing things in black-and-white categories. If a situation is anything less than perfect, you see it as a total failure.",
    example: '"I made one mistake on the presentation, so the whole thing was a disaster."',
    reframePrompt: "Is there a middle ground between total success and total failure?",
    reframeExample: '"The presentation wasn\'t perfect, but most of it went well and people asked good questions."',
  },
  {
    id: "overgeneralization",
    name: "Overgeneralization",
    description: "Taking one negative event and seeing it as a never-ending pattern of defeat. Using words like \"always\" or \"never.\"",
    example: '"I got rejected from that job. I\'ll never get hired anywhere."',
    reframePrompt: "Is this truly a pattern, or is it one event? What evidence contradicts \"always\" or \"never\"?",
    reframeExample: '"This one application didn\'t work out, but I\'ve been hired before and I have skills that employers value."',
  },
  {
    id: "mental-filter",
    name: "Mental Filter",
    description: "Focusing exclusively on one negative detail and ignoring everything positive, like a drop of ink that discolors an entire glass of water.",
    example: '"I got great feedback from 9 people but one person said it was average. The whole project must be mediocre."',
    reframePrompt: "What are you filtering out? What would the full picture look like?",
    reframeExample: '"9 out of 10 people gave positive feedback. That one average review doesn\'t cancel out the rest."',
  },
  {
    id: "disqualifying-positive",
    name: "Disqualifying the Positive",
    description: "Rejecting positive experiences by insisting they \"don't count\" for some reason. Maintaining a negative belief even when everyday experiences contradict it.",
    example: '"They only said I did a good job because they felt sorry for me."',
    reframePrompt: "If someone else received this positive feedback, would you dismiss it the same way?",
    reframeExample: '"People complimented my work. I can accept that at face value instead of looking for hidden motives."',
  },
  {
    id: "mind-reading",
    name: "Mind Reading",
    description: "Assuming you know what other people are thinking without evidence. Concluding that someone is reacting negatively to you without checking.",
    example: '"My friend didn\'t text back. She must be mad at me."',
    reframePrompt: "Do you have actual evidence for what they're thinking? What are other possible explanations?",
    reframeExample: '"My friend might be busy, tired, or just forgot. I don\'t actually know what she\'s thinking."',
  },
  {
    id: "fortune-telling",
    name: "Fortune Telling",
    description: "Predicting that things will turn out badly and treating that prediction as an established fact, before the event even happens.",
    example: '"I know I\'m going to fail this exam. There\'s no point in even studying."',
    reframePrompt: "Can you really predict the future? What has happened in similar situations before?",
    reframeExample: '"I don\'t know for sure how the exam will go. If I study, I give myself a better chance."',
  },
  {
    id: "magnification-minimization",
    name: "Magnification / Minimization",
    description: "Blowing negative things out of proportion (magnification) or shrinking positive things until they seem tiny (minimization).",
    example: '"My small mistake was catastrophic (magnification), but my promotion was no big deal (minimization)."',
    reframePrompt: "Are you making something bigger or smaller than it really is? How would a friend see this?",
    reframeExample: '"The mistake was minor and fixable. The promotion was a real achievement that I earned."',
  },
  {
    id: "emotional-reasoning",
    name: "Emotional Reasoning",
    description: "Assuming that your negative emotions reflect the way things really are. \"I feel it, therefore it must be true.\"",
    example: '"I feel like a failure, so I must be a failure."',
    reframePrompt: "Are feelings facts? What evidence exists outside of how you feel right now?",
    reframeExample: '"I feel discouraged right now, but feeling like a failure doesn\'t mean I am one. Feelings change."',
  },
  {
    id: "should-statements",
    name: "Should Statements",
    description: "Using \"should,\" \"must,\" or \"ought to\" to motivate yourself or others. When directed at yourself, these create guilt; when directed at others, frustration.",
    example: '"I should be further ahead in life by now. I shouldn\'t feel this way."',
    reframePrompt: "What if you replaced \"should\" with \"I'd prefer\" or \"It would be nice if\"?",
    reframeExample: '"I\'d prefer to be further ahead, but I\'m doing the best I can with where I am right now."',
  },
  {
    id: "labeling",
    name: "Labeling",
    description: "Attaching a fixed, global label to yourself or others instead of describing the behavior. An extreme form of overgeneralization.",
    example: '"I\'m an idiot" instead of "I made a mistake on that one task."',
    reframePrompt: "Are you labeling the whole person instead of the specific behavior? What would be more accurate?",
    reframeExample: '"I made a mistake on that task. That doesn\'t define my entire intelligence or worth."',
  },
  {
    id: "personalization",
    name: "Personalization",
    description: "Taking responsibility for events that are not entirely under your control. Blaming yourself for things that aren't your fault.",
    example: '"My child is struggling in school. I must be a terrible parent."',
    reframePrompt: "Are there other factors involved? Is this entirely within your control?",
    reframeExample: '"Many factors affect my child\'s school experience. I\'m doing my best and can look into extra support."',
  },
  {
    id: "catastrophizing",
    name: "Catastrophizing",
    description: "Expecting the worst-case scenario. Taking a small problem and imagining it snowballing into a complete disaster.",
    example: '"I have a headache. What if it\'s a brain tumor? What if I\'m dying?"',
    reframePrompt: "What is the most likely outcome? What is the evidence for and against the worst case?",
    reframeExample: '"Headaches are common and usually harmless. If it persists, I can see a doctor. No need to jump to the worst case."',
  },
  {
    id: "blaming",
    name: "Blaming",
    description: "Holding other people entirely responsible for your emotional pain, or the opposite — blaming yourself for everyone else's problems.",
    example: '"It\'s my partner\'s fault I\'m unhappy. If they changed, I\'d feel better."',
    reframePrompt: "What part of this is within your control? Can you take responsibility for your own feelings without taking on everyone else's?",
    reframeExample: '"My partner\'s behavior affects me, but my happiness is also influenced by my own choices and perspective."',
  },
  {
    id: "fallacy-of-fairness",
    name: "Fallacy of Fairness",
    description: "Believing that everything should be measured by fairness, and feeling resentful when others don't agree with your idea of what's fair.",
    example: '"It\'s not fair that I work this hard and don\'t get recognized, while others get praise for less."',
    reframePrompt: "Is fairness a fact or an expectation? What can you do regardless of whether things feel fair?",
    reframeExample: '"I wish my work were recognized more, but I can advocate for myself and focus on what I can control."',
  },
  {
    id: "fallacy-of-change",
    name: "Fallacy of Change",
    description: "Expecting that other people will change to suit your needs if you just pressure or wait long enough. Your happiness depends on them changing.",
    example: '"If my partner would just stop doing that one thing, I\'d finally be happy."',
    reframePrompt: "Can you control other people's behavior? What changes are within your own power?",
    reframeExample: '"I can communicate what I need, but I can\'t force someone to change. I can work on my own responses."',
  },
  {
    id: "always-being-right",
    name: "Always Being Right",
    description: "Feeling continually on trial to prove that your opinions and actions are correct. Being wrong is unthinkable, so you go to any length to prove you're right.",
    example: '"I don\'t care if this argument is hurting our relationship. I need them to admit I was right."',
    reframePrompt: "Is being right more important than the relationship or your peace of mind? Can two perspectives both have validity?",
    reframeExample: '"Being right about this point isn\'t worth damaging the relationship. We can both have valid perspectives."',
  },
];

/* ── Types ────────────────────────────────────────────── */

interface Props {
  faqData: { question: string; answer: string }[];
}

type AppStep = "write" | "identify" | "reframe" | "complete";

/* ── Component ────────────────────────────────────────── */

export function CognitiveDistortionClient({ faqData }: Props) {
  const [appStep, setAppStep] = useState<AppStep>("write");
  const [thought, setThought] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [balancedThought, setBalancedThought] = useState("");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const reframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (appStep === "reframe") {
      setTimeout(() => reframeRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [appStep]);

  function toggleDistortion(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function handleReset() {
    setAppStep("write");
    setThought("");
    setSelected(new Set());
    setBalancedThought("");
    setExpandedCard(null);
  }

  const selectedDistortions = DISTORTIONS.filter((d) => selected.has(d.id));

  /* ── Step indicator ────────────────────────────────── */

  const STEP_LABELS = ["Write", "Identify", "Reframe"];
  const stepNumbers: Record<AppStep, number> = { write: 0, identify: 1, reframe: 2, complete: 3 };
  const currentStepNum = stepNumbers[appStep];

  function StepIndicator() {
    return (
      <div className="flex items-center justify-center gap-2 mb-6">
        {STEP_LABELS.map((label, i) => {
          const done = currentStepNum > i;
          const active = currentStepNum === i;
          return (
            <div key={label} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    done
                      ? "bg-sage-600 text-white"
                      : active
                      ? "bg-sage-600 text-white ring-2 ring-offset-2 ring-sage-400 dark:ring-offset-night-800"
                      : "bg-sand-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500"
                  }`}
                >
                  {done ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className={`text-[10px] sm:text-xs font-medium ${active ? "text-sage-700 dark:text-sage-400" : "text-neutral-400 dark:text-neutral-500"}`}>
                  {label}
                </span>
              </div>
              {i < STEP_LABELS.length - 1 && (
                <div className={`w-8 sm:w-14 h-0.5 mb-5 ${done ? "bg-sage-400 dark:bg-sage-600" : "bg-sand-200 dark:bg-neutral-700"}`} />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  /* ── Render ────────────────────────────────────────── */

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 text-center">
        Cognitive Distortion Identifier
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl mx-auto mb-8">
        A free CBT-based educational tool. Write down a negative thought, identify which thinking patterns may apply, and practice reframing it with a more balanced perspective.
      </p>

      <AdSlot position="above-tool" />

      {/* ── Tool Card ── */}
      <div className="bg-white dark:bg-night-800 rounded-2xl shadow-lg border border-sand-200 dark:border-neutral-700 p-6 sm:p-8 mb-8">
        <StepIndicator />

        {/* ── Step 1: Write ── */}
        {appStep === "write" && (
          <div className="space-y-5">
            <div>
              <label htmlFor="thought-input" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                What negative thought is on your mind?
              </label>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3">
                Write it exactly as it sounds in your head. Don&apos;t filter or soften it.
              </p>
              <textarea
                id="thought-input"
                value={thought}
                onChange={(e) => setThought(e.target.value)}
                rows={4}
                placeholder='e.g. "I always mess everything up. Nobody actually likes me."'
                className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 resize-none"
              />
            </div>
            <button
              onClick={() => setAppStep("identify")}
              disabled={thought.trim().length === 0}
              className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                thought.trim().length > 0
                  ? "bg-sage-600 hover:bg-sage-700 text-white"
                  : "bg-sage-200 dark:bg-sage-900 text-sage-400 dark:text-sage-700 cursor-not-allowed"
              }`}
            >
              Next: Identify Distortions
            </button>
          </div>
        )}

        {/* ── Step 2: Identify ── */}
        {appStep === "identify" && (
          <div className="space-y-5">
            {/* User's thought */}
            <div className="bg-sand-50 dark:bg-night-900 rounded-xl p-4 border border-sand-200 dark:border-neutral-700">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">Your thought</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-200 italic">&ldquo;{thought}&rdquo;</p>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Read through the 16 common cognitive distortions below. <strong>Select every one that might apply</strong> to your thought. Most thoughts involve more than one.
            </p>

            {/* Distortion cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DISTORTIONS.map((d) => {
                const isSelected = selected.has(d.id);
                const isExpanded = expandedCard === d.id;
                return (
                  <div
                    key={d.id}
                    className={`rounded-xl border-2 transition-all ${
                      isSelected
                        ? "border-sage-500 dark:border-sage-500 bg-sage-50/50 dark:bg-sage-950/20"
                        : "border-sand-200 dark:border-neutral-700 hover:border-sand-300 dark:hover:border-neutral-600"
                    }`}
                  >
                    <button
                      onClick={() => toggleDistortion(d.id)}
                      className="w-full text-left px-4 py-3 flex items-start gap-3"
                      aria-pressed={isSelected}
                    >
                      {/* Checkbox */}
                      <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-sage-600 border-sage-600"
                          : "border-neutral-300 dark:border-neutral-600"
                      }`}>
                        {isSelected && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">{d.name}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">{d.description}</p>
                      </div>
                    </button>
                    {/* Expand for example */}
                    <div className="px-4 pb-3">
                      <button
                        onClick={() => setExpandedCard(isExpanded ? null : d.id)}
                        className="text-xs text-sage-600 dark:text-sage-400 hover:underline"
                      >
                        {isExpanded ? "Hide example" : "Show example"}
                      </button>
                      {isExpanded && (
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1.5 italic bg-sand-50 dark:bg-night-900 rounded-lg p-2.5">
                          {d.example}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setAppStep("write")}
                className="px-5 py-2.5 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
              >
                Back
              </button>
              <div className="text-sm text-neutral-400 dark:text-neutral-500">
                {selected.size} selected
              </div>
              <button
                onClick={() => setAppStep("reframe")}
                disabled={selected.size === 0}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  selected.size > 0
                    ? "bg-sage-600 hover:bg-sage-700 text-white"
                    : "bg-sage-200 dark:bg-sage-900 text-sage-400 dark:text-sage-700 cursor-not-allowed"
                }`}
              >
                Next: Reframe
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: Reframe ── */}
        {appStep === "reframe" && (
          <div ref={reframeRef} className="space-y-6">
            {/* Original thought */}
            <div className="bg-sand-50 dark:bg-night-900 rounded-xl p-4 border border-sand-200 dark:border-neutral-700">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">Your original thought</p>
              <p className="text-sm text-neutral-700 dark:text-neutral-200 italic">&ldquo;{thought}&rdquo;</p>
            </div>

            {/* Identified distortions with reframe prompts */}
            <div>
              <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-3">
                Distortions you identified ({selectedDistortions.length}):
              </h3>
              <div className="space-y-4">
                {selectedDistortions.map((d) => (
                  <div key={d.id} className="bg-sage-50/50 dark:bg-sage-950/20 border border-sage-200 dark:border-sage-800 rounded-xl p-4">
                    <p className="text-sm font-semibold text-sage-700 dark:text-sage-400 mb-1">{d.name}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      <strong>Ask yourself:</strong> {d.reframePrompt}
                    </p>
                    <div className="bg-white/60 dark:bg-night-900/60 rounded-lg p-3">
                      <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-0.5">Example of a balanced thought:</p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">{d.reframeExample}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Write balanced thought */}
            <div>
              <label htmlFor="balanced-thought" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">
                Now, how might you rethink this?
              </label>
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3">
                Using the reframing prompts above, write a more balanced version of your original thought. It doesn&apos;t have to be positive — just more accurate and fair.
              </p>
              <textarea
                id="balanced-thought"
                value={balancedThought}
                onChange={(e) => setBalancedThought(e.target.value)}
                rows={4}
                placeholder="Write your balanced thought here..."
                className="w-full px-4 py-3 rounded-xl border border-sand-200 dark:border-neutral-600 bg-sand-50 dark:bg-night-900 text-neutral-800 dark:text-neutral-200 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 resize-none"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setAppStep("identify")}
                className="px-5 py-2.5 rounded-xl text-sm font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setAppStep("complete")}
                disabled={balancedThought.trim().length === 0}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  balancedThought.trim().length > 0
                    ? "bg-sage-600 hover:bg-sage-700 text-white"
                    : "bg-sage-200 dark:bg-sage-900 text-sage-400 dark:text-sage-700 cursor-not-allowed"
                }`}
              >
                Finish
              </button>
            </div>
          </div>
        )}

        {/* ── Complete ── */}
        {appStep === "complete" && (
          <div className="space-y-6" aria-live="polite">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-sage-100 dark:bg-sage-900/40 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-sage-600 dark:text-sage-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-2xl font-serif font-bold text-sage-700 dark:text-sage-400 mb-2">
                Nice Work
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                You identified thinking patterns and practiced reframing. This is a core CBT skill that gets easier with practice.
              </p>
            </div>

            {/* Summary */}
            <div className="bg-sand-50 dark:bg-night-900 rounded-xl p-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">Original thought</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">&ldquo;{thought}&rdquo;</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
                  Distortions identified ({selectedDistortions.length})
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedDistortions.map((d) => (
                    <span key={d.id} className="inline-block px-3 py-1 rounded-full text-xs bg-sage-100 dark:bg-sage-900/40 text-sage-700 dark:text-sage-400 border border-sage-200 dark:border-sage-800">
                      {d.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">Balanced thought</p>
                <p className="text-sm text-sage-700 dark:text-sage-400 font-medium">&ldquo;{balancedThought}&rdquo;</p>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-sage-600 text-white font-medium text-sm hover:bg-sage-700 transition-colors"
              >
                Try Another Thought
              </button>
            </div>
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
          <li><strong>Write your thought</strong> — Enter a negative or distressing thought exactly as it sounds in your head. Don&apos;t soften or edit it.</li>
          <li><strong>Identify distortions</strong> — Read through the 16 common cognitive distortions. Select every one that might apply to your thought. Most thoughts involve 2-4 distortions.</li>
          <li><strong>Expand examples</strong> — Click &quot;Show example&quot; on any card to see how that distortion sounds in real life.</li>
          <li><strong>Reframe your thought</strong> — For each distortion you selected, the tool provides a reframing question and an example of a balanced alternative. Use these prompts to write your own balanced thought.</li>
          <li><strong>Review your work</strong> — The summary shows your original thought, the distortions you found, and your new balanced perspective side by side.</li>
        </ol>
      </section>

      {/* ── Educational Content ── */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          What Are Cognitive Distortions?
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-4">
          <p>
            Cognitive distortions are <strong>systematic errors in thinking</strong> that cause you to perceive reality inaccurately. They were first identified and catalogued by psychiatrist <strong>Aaron Beck</strong> in the 1960s as part of his development of cognitive therapy, and later expanded by psychologist <strong>David Burns</strong> in his influential book <em>Feeling Good: The New Mood Therapy</em> (1980). Cognitive distortions are not a sign of weakness or mental illness — everyone experiences them. They become a problem when they are frequent, automatic, and unchallenged, leading to persistent negative emotions like anxiety, depression, and low self-esteem.
          </p>
          <p>
            The core idea behind <strong>cognitive behavioral therapy (CBT)</strong> is that your thoughts influence your emotions, which in turn influence your behavior. When your thinking is distorted, your emotions and actions follow suit. For example, if you automatically think &quot;I always fail at everything&quot; (overgeneralization), you are likely to feel hopeless and avoid trying new things. By learning to recognize these thinking patterns, you can interrupt the cycle and replace distorted thoughts with more balanced, accurate ones.
          </p>
          <p>
            This tool is based on the CBT thought record technique, which is one of the most evidence-based exercises in psychotherapy. A 2012 meta-analysis published in <em>Cognitive Therapy and Research</em> found that identifying and challenging cognitive distortions was associated with significant reductions in depression and anxiety symptoms. Importantly, you do not need to replace negative thoughts with positive ones — the goal is <strong>accuracy and balance</strong>, not forced positivity.
          </p>

          <h3 className="font-serif text-lg font-bold text-neutral-800 dark:text-neutral-100">
            How Cognitive Distortions Relate to Mental Health
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Depression</strong> — often involves all-or-nothing thinking, labeling, mental filter, and disqualifying the positive</li>
            <li><strong>Anxiety</strong> — often involves catastrophizing, fortune telling, and magnification</li>
            <li><strong>Low self-esteem</strong> — often involves labeling, should statements, and personalization</li>
            <li><strong>Relationship conflict</strong> — often involves mind reading, blaming, and always being right</li>
            <li><strong>Addiction and recovery</strong> — often involves emotional reasoning, all-or-nothing thinking, and fortune telling</li>
          </ul>
          <p>
            Learning to spot these patterns is a skill that improves with practice. The more you use tools like this, the more naturally you will begin to catch distorted thoughts in real time — before they spiral into overwhelming emotions.
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
            <div key={i} className="border border-sand-200 dark:border-neutral-700 rounded-xl overflow-hidden">
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
            { href: "/five-senses-grounding", label: "5-4-3-2-1 Grounding", desc: "Sensory grounding for anxiety" },
            { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Test", desc: "7-question anxiety screening" },
            { href: "/phq-9-depression-test", label: "PHQ-9 Depression Test", desc: "9-question depression screening" },
            { href: "/coping-skills-randomizer", label: "Coping Skills Randomizer", desc: "Random healthy coping strategy" },
            { href: "/rosenberg-self-esteem-scale", label: "Self-Esteem Scale", desc: "Rosenberg self-esteem check" },
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
            This tool is for educational and self-reflection purposes only. It is not therapy, not a substitute for professional mental health care, and not a treatment for any condition. If you are struggling with persistent negative thoughts, anxiety, or depression, please consult a qualified mental health professional.
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
            <a href="https://beckinstitute.org/about/aaron-t-beck-md/" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              Beck Institute — Aaron T. Beck, MD: Founder of Cognitive Therapy
            </a>
          </li>
          <li>
            <a href="https://feelinggood.com/about/" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              David Burns, MD — Feeling Good: The New Mood Therapy
            </a>
          </li>
          <li>
            <a href="https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral" className="underline hover:text-sage-600 dark:hover:text-sage-400" target="_blank" rel="noopener noreferrer">
              American Psychological Association — What Is Cognitive Behavioral Therapy?
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

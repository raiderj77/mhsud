"use client";

import { useState } from "react";

interface Props {
  prompts: string[];
  toolName: string;
}

/**
 * Collapsible "Reflect on Your Results" section.
 * Displayed after screening results on all tool pages.
 * Toggle is keyboard-accessible (Space + Enter) with aria-expanded.
 */
export function ReflectionPrompts({ prompts, toolName }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const id = "reflection-prompts";

  return (
    <section aria-label="Reflection prompts" className="card overflow-hidden mb-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full p-5 flex justify-between items-center text-left min-h-[44px] gap-3"
      >
        <span className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-sage-500 dark:text-sage-400 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <span className="font-serif text-base font-semibold text-neutral-800 dark:text-neutral-100">
            Reflect on Your Results
          </span>
        </span>
        <svg
          className={`w-5 h-5 text-neutral-400 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        id={id}
        role="region"
        aria-label={`Reflection questions for the ${toolName}`}
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-5 pb-5">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 leading-relaxed">
            Take a moment to consider these questions. There are no right or wrong answers — they are meant to help you make sense of your results.
          </p>

          <ol className="space-y-3">
            {prompts.map((prompt, i) => (
              <li
                key={i}
                className="flex gap-3 items-start text-[15px] text-neutral-700 dark:text-neutral-200 leading-relaxed"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-50 dark:bg-sage-950/30 text-sage-600 dark:text-sage-400 text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{prompt}</span>
              </li>
            ))}
          </ol>

          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-5 leading-relaxed border-t border-sand-200 dark:border-neutral-700 pt-4">
            These questions are for personal reflection only. If your results concern you, please share them with a qualified healthcare provider.
          </p>
        </div>
      </div>
    </section>
  );
}

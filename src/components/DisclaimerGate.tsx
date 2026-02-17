"use client";

import { useState } from "react";

interface DisclaimerGateProps {
  toolName: string;
  toolDescription: string;
  onAccept: () => void;
}

export function DisclaimerGate({ toolName, toolDescription, onAccept }: DisclaimerGateProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="card p-6 sm:p-8 animate-fade-in">
      <div className="flex gap-3 items-start mb-5">
        <div className="w-9 h-9 rounded-full bg-warm-50 dark:bg-warm-950/40 flex items-center justify-center flex-shrink-0 text-lg">
          ⚠️
        </div>
        <div>
          <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-1.5">
            Before you begin
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {toolDescription}
          </p>
        </div>
      </div>

      <div className="bg-sand-50 dark:bg-night-700 border border-sand-200 dark:border-neutral-600 rounded-xl p-5 mb-6">
        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 mb-2">Please understand:</p>
        <ul className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed space-y-1.5 list-disc pl-5">
          <li>This is <strong>not a diagnosis</strong> and does not replace professional evaluation.</li>
          <li>Results are <strong>educational only</strong> — they describe symptom levels, not clinical conditions.</li>
          <li>Only a qualified healthcare professional can diagnose or treat conditions.</li>
          <li>Your answers are processed <strong>entirely in your browser</strong> and are never stored or transmitted.</li>
          <li>If you are in <strong>immediate danger</strong> or having thoughts of self-harm, please contact emergency services or a crisis hotline now.</li>
        </ul>
      </div>

      <label className={`flex items-start gap-3 cursor-pointer p-4 rounded-xl border-2 transition-all mb-6 ${
        checked
          ? "border-sage-400 dark:border-sage-600 bg-sage-50/50 dark:bg-sage-950/20"
          : "border-sand-200 dark:border-neutral-600"
      }`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="mt-0.5 w-5 h-5 accent-sage-600 rounded cursor-pointer"
        />
        <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          I understand that the <strong>{toolName}</strong> is a screening tool for educational purposes only, not a diagnosis or treatment recommendation. I understand I should seek professional help for any mental health concerns.
        </span>
      </label>

      <button
        onClick={() => checked && onAccept()}
        disabled={!checked}
        className="btn-primary w-full text-base py-4"
      >
        Begin Self-Check
      </button>
    </div>
  );
}

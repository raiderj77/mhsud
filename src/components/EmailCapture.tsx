"use client";

import { useState } from "react";

interface Props {
  toolName: string;
}

export function EmailCapture({ toolName }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: toolName }),
      });
      const data = await res.json();
      setStatus(data.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="card p-5 sm:p-6 mb-5">
      <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
        Get occasional mental health resources
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
        We send a small number of emails on mental health topics — coping strategies,
        when to seek help, and how to use screening tools effectively. No results, no diagnosis,
        no spam.
      </p>

      {status === "success" ? (
        <p className="text-sm font-medium text-sage-700 dark:text-sage-400 py-2">
          ✓ You&apos;re subscribed. Unsubscribe anytime from any email.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col sm:flex-row gap-2">
            <label htmlFor="email-capture-input" className="sr-only">
              Email address
            </label>
            <input
              id="email-capture-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              disabled={status === "loading"}
              className="flex-1 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 px-4 py-2.5 text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 dark:focus:ring-sage-600 min-h-[44px] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading" || email.length === 0}
              className="inline-flex items-center justify-center bg-sage-600 hover:bg-sage-700 disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors min-h-[44px] whitespace-nowrap"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </div>

          {status === "error" && (
            <p className="text-xs text-crisis-600 dark:text-crisis-400 mt-2">
              Something went wrong — please try again.
            </p>
          )}

          <p className="text-[11px] text-neutral-400 dark:text-neutral-500 leading-relaxed mt-3">
            By subscribing you agree to receive occasional resource emails. We never sell or share
            your information, and we don&apos;t email your screening results. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  );
}

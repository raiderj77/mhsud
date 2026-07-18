"use client";

import Link from "next/link";
import { useState } from "react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ email, consent, website }),
      });
      const data = await response.json();
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
        We send a small number of emails on mental health topics, coping strategies,
        when to seek help, and how to use screening tools effectively. No results, no diagnosis,
        no spam.
      </p>

      {status === "success" ? (
        <p className="text-sm font-medium text-sage-700 dark:text-sage-400 py-2" role="status">
          You&apos;re subscribed. Unsubscribe anytime from any email.
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="absolute -left-[10000px]" aria-hidden="true">
            <label htmlFor="email-capture-website">Website</label>
            <input
              id="email-capture-website"
              name="website"
              type="text"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <label htmlFor="email-capture-input" className="sr-only">
              Email address
            </label>
            <input
              id="email-capture-input"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="your@email.com"
              required
              maxLength={254}
              autoComplete="email"
              disabled={status === "loading"}
              className="flex-1 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700 px-4 py-2.5 text-sm text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-sage-400 dark:focus:ring-sage-600 min-h-[44px] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === "loading" || email.length === 0 || !consent}
              className="inline-flex items-center justify-center bg-sage-600 hover:bg-sage-700 disabled:opacity-60 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors min-h-[44px] whitespace-nowrap"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </div>

          <label className="mt-3 flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-300">
            <input
              type="checkbox"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
              required
              disabled={status === "loading"}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-sand-300 text-sage-600 focus:ring-sage-500"
            />
            <span>
              I agree to receive occasional resource emails. I can unsubscribe at any time. See the{" "}
              <Link href="/privacy" className="underline hover:text-sage-700 dark:hover:text-sage-300">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          {status === "error" && (
            <p className="text-xs text-crisis-600 dark:text-crisis-400 mt-2" role="alert">
              Something went wrong. Check your email and consent, then try again.
            </p>
          )}

          <p className="text-[11px] text-neutral-400 dark:text-neutral-500 leading-relaxed mt-3">
            We send only your email address to our email provider. We do not send the tool you used,
            your answers, score, diagnosis, or crisis information.
          </p>
        </form>
      )}
    </div>
  );
}

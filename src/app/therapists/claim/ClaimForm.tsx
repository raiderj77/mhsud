"use client";

import { useState, type FormEvent } from "react";

export default function ClaimForm({ slug }: { slug: string }) {
  const [workEmail, setWorkEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [reference, setReference] = useState("");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    setReference("");
    try {
      const response = await fetch("/therapists/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, workEmail }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setWorkEmail("");
      setReference(result.reference);
    } catch {
      setError("The claim could not be started. Check your work email and try again.");
    } finally {
      setBusy(false);
    }
  }

  const subject = encodeURIComponent(`Therapist listing claim ${reference}`);
  const body = encodeURIComponent(`Claim reference: ${reference}\nListing: https://mindchecktools.com/therapists/${slug}`);

  return (
    <div className="mt-6">
      <form method="post" action="/therapists/api/claim" onSubmit={submit} className="space-y-3 rounded-lg border border-neutral-400 p-4">
        <label htmlFor="therapist-work-email" className="block font-medium">Work email</label>
        <input id="therapist-work-email" required type="email" autoComplete="email" maxLength={254}
          value={workEmail} onChange={event => { setWorkEmail(event.target.value); setReference(""); }}
          readOnly={busy}
          className="block min-h-[44px] w-full rounded-lg border border-neutral-400 bg-white px-3 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50" />
        <button type="submit" disabled={busy} className="min-h-[44px] rounded-lg bg-neutral-900 px-4 text-white disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900">
          {busy ? "Starting claim…" : "Start claim"}
        </button>
      </form>
      {error && <p className="mt-3 text-red-800 dark:text-red-300" role="alert">{error}</p>}
      <div aria-live="polite">
        {reference && (
          <section className="mt-4 rounded-lg border border-neutral-400 p-4">
            <h2 className="text-xl font-semibold">Claim reference {reference}</h2>
            <p className="mt-2">Email this reference from your work account to request manual review. The form issues a reference and does not save the claim.</p>
            <a className="mt-2 inline-flex min-h-[44px] items-center underline" href={`mailto:hello@mindchecktools.com?subject=${subject}&body=${body}`}>
              Open claim email
            </a>
          </section>
        )}
      </div>
    </div>
  );
}

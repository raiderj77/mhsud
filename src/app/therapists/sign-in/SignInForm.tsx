"use client";

import { useState, type FormEvent } from "react";

export default function SignInForm() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/therapists/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      setMessage(response.ok ? result.message : result.error);
    } catch {
      setMessage("Sign-in could not be started. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="mt-4 space-y-3" method="post" action="/therapists/api/auth/sign-in" onSubmit={submit}>
      <label className="block">
        Work email
        <input className="block min-h-[44px] w-full rounded border px-3 dark:bg-neutral-900" type="email"
          name="email" autoComplete="email" maxLength={254} required />
      </label>
      <button className="min-h-[44px] rounded border px-4" disabled={busy}>Send sign-in link</button>
      <p role="status">{message}</p>
    </form>
  );
}

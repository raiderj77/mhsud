"use client";

import { useState, type FormEvent } from "react";
import type { PublicProfile } from "@/lib/professionalServer";

const control = "block min-h-[44px] w-full rounded border px-3 dark:bg-neutral-900";
const button = "min-h-[44px] rounded border px-4 disabled:opacity-60";

export function SignOutButton() {
  const [error, setError] = useState("");
  async function signOut(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    try {
      const response = await fetch("/therapists/api/auth/sign-out", { method: "POST" });
      if (!response.ok) throw new Error();
      window.location.replace("/therapists/sign-in");
    } catch {
      setError("Sign-out could not be completed. Try again.");
    }
  }

  return (
    <form onSubmit={signOut} action="/therapists/api/auth/sign-out" method="post">
      <button className={button}>Sign out</button>
      <p role="status">{error}</p>
    </form>
  );
}

export default function DashboardForm({ overlay }: { overlay: PublicProfile }) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [hasWebsite, setHasWebsite] = useState(Boolean(overlay.website));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = (name: string) => String(form.get(name) ?? "");
    const lines = (name: string) => text(name).split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    const website = text("website").trim();
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/therapists/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: overlay.slug,
          phone: text("phone"),
          ...(website ? { website } : {}),
          bio: text("bio"),
          insurances: lines("insurances"),
          languages: lines("languages"),
          sessionFee: text("sessionFee"),
          telehealth: form.has("telehealth"),
          acceptingNew: form.has("acceptingNew"),
        }),
      });
      const result = await response.json();
      if (response.ok) setHasWebsite(Boolean(result.website));
      setMessage(response.ok ? "Listing saved." : result.error);
    } catch {
      setMessage("The listing could not be saved. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} action="/therapists/api/profile" method="post">
      <fieldset disabled={busy} className="space-y-3">
        <label className="block">Phone<input className={control} name="phone" type="tel" maxLength={32} defaultValue={overlay.phone} /></label>
        <label className="block">Website (HTTPS)<input className={control} name="website" type="url" maxLength={200} defaultValue={overlay.website} required={hasWebsite} pattern="https://.+" /></label>
        <label className="block">Bio<textarea className={control} name="bio" rows={5} maxLength={1200} defaultValue={overlay.bio} /></label>
        <label className="block">Insurance accepted (one per line, up to 12)<textarea className={control} name="insurances" rows={4} defaultValue={overlay.insurances.join("\n")} /></label>
        <label className="block">Languages (one per line, up to 12)<textarea className={control} name="languages" rows={4} defaultValue={overlay.languages.join("\n")} /></label>
        <label className="block">Session fee<input className={control} name="sessionFee" maxLength={60} defaultValue={overlay.session_fee} /></label>
        <label className="flex min-h-[44px] items-center gap-2"><input name="telehealth" type="checkbox" defaultChecked={overlay.telehealth} /> Offers telehealth</label>
        <label className="flex min-h-[44px] items-center gap-2"><input name="acceptingNew" type="checkbox" defaultChecked={overlay.accepting_new} /> Accepting new patients</label>
        <button className={button}>Save listing</button>
      </fieldset>
      <p role="status">{message}</p>
    </form>
  );
}

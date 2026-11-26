"use client";

import { useState, type FormEvent } from "react";
import { profileStrength } from "@/lib/professionalCore.mjs";
import type { OwnerProfile } from "@/lib/professionalServer";

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

export default function DashboardForm({ overlay, staleBefore }: { overlay: OwnerProfile; staleBefore: number }) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [hasWebsite, setHasWebsite] = useState(Boolean(overlay.website));
  const [saved, setSaved] = useState(overlay);
  const [uploadMessage, setUploadMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const strength = profileStrength(saved);
  const needsConfirmation = Math.min(Date.parse(saved.fee_confirmed_at), Date.parse(saved.availability_confirmed_at)) <= staleBefore;

  async function confirmDetails() {
    setBusy(true);
    setMessage("");
    try {
      const response = await fetch("/therapists/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: overlay.slug, confirmDetails: true }),
      });
      if (!response.ok) throw new Error();
      setSaved(await response.json());
      setMessage("Fee and availability confirmed.");
    } catch {
      setMessage("Confirmation could not be saved. Try again.");
    } finally {
      setBusy(false);
    }
  }

  async function uploadPhoto(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    form.set("slug", overlay.slug);
    setUploading(true);
    setUploadMessage("");
    try {
      const response = await fetch("/therapists/api/profile-photo", { method: "POST", body: form });
      if (!response.ok) throw new Error();
      const { path } = await response.json();
      setSaved(previous => ({ ...previous, photo_path: path }));
      setUploadMessage("Photo saved.");
    } catch {
      setUploadMessage("Photo upload failed. Choose a JPEG or PNG image up to 2 MB and try again.");
    } finally {
      setUploading(false);
    }
  }

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
          public_email: text("publicEmail"),
          show_phone: form.has("showPhone"),
          show_email: form.has("showEmail"),
          specialties: lines("specialties"),
          approaches: lines("approaches"),
          populations: lines("populations"),
          years_in_practice: text("years") === "" ? "" : Number(text("years")),
          education: text("education"),
          office_area: text("officeArea"),
          in_person: form.has("inPerson"),
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
      if (response.ok) {
        setHasWebsite(Boolean(result.website));
        setSaved(result);
      }
      setMessage(response.ok ? "Listing saved." : result.error);
    } catch {
      setMessage("The listing could not be saved. Try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <section aria-label="Profile strength">
        <p>Profile strength {strength.percent}%</p>
        <progress aria-label="Profile strength" max={100} value={strength.percent} />
        {strength.missing.length > 0 && <p>Missing {strength.missing.join(", ")}</p>}
      </section>
      {needsConfirmation && (
        <section aria-label="Confirm listing details">
          <p>Check your saved fee and availability. If both are current, confirm them here.</p>
          <button type="button" className={button} disabled={busy || uploading} onClick={confirmDetails}>Confirm saved fee and availability</button>
        </section>
      )}
      <form onSubmit={uploadPhoto} action="/therapists/api/profile-photo" method="post" encType="multipart/form-data">
        <fieldset disabled={busy || uploading} className="space-y-2">
          <label className="block">Public profile photo (JPEG or PNG, up to 2 MB)
            <input type="file" className={control} name="photo" accept="image/jpeg,image/png" required />
          </label>
          <p>Use an image you have permission to publish. Remove private metadata, such as location, before uploading.</p>
          <button className={button}>{saved.photo_path ? "Replace photo" : "Upload photo"}</button>
        </fieldset>
        <p role="status">{uploadMessage}</p>
      </form>
      <form onSubmit={submit} action="/therapists/api/profile" method="post">
      <fieldset disabled={busy || uploading} className="space-y-3">
        <label className="block">Public phone<input className={control} name="phone" type="tel" maxLength={32} defaultValue={overlay.phone} /></label>
        <label className="flex min-h-[44px] items-center gap-2"><input name="showPhone" type="checkbox" defaultChecked={overlay.show_phone} /> Show phone on public profile</label>
        <label className="block">Public email<input className={control} name="publicEmail" type="email" maxLength={254} defaultValue={overlay.public_email} /></label>
        <label className="flex min-h-[44px] items-center gap-2"><input name="showEmail" type="checkbox" defaultChecked={overlay.show_email} /> Show email on public profile</label>
        <label className="block">Website (HTTPS)<input className={control} name="website" type="url" maxLength={200} defaultValue={overlay.website} required={hasWebsite} pattern="https://.+" /></label>
        <label className="block">Bio<textarea className={control} name="bio" rows={5} maxLength={1200} defaultValue={overlay.bio} /></label>
        {([
          ["specialties", "Specialties"], ["approaches", "Treatment approaches"], ["populations", "Populations served"],
        ] as const).map(([name, label]) => (
          <label key={name} className="block">{label} (one per line, up to 12)
            <textarea className={control} name={name} rows={3} defaultValue={overlay[name].join("\n")} />
          </label>
        ))}
        <label className="block">Years in practice<input className={control} name="years" type="number" min={0} max={100} defaultValue={overlay.years_in_practice ?? ""} /></label>
        <label className="block">Education<input className={control} name="education" maxLength={240} defaultValue={overlay.education} /></label>
        <label className="block">Office service area<input className={control} name="officeArea" maxLength={120} defaultValue={overlay.office_area} /></label>
        <label className="block">Insurance accepted (one per line, up to 12)<textarea className={control} name="insurances" rows={4} defaultValue={overlay.insurances.join("\n")} /></label>
        <label className="block">Languages (one per line, up to 12)<textarea className={control} name="languages" rows={4} defaultValue={overlay.languages.join("\n")} /></label>
        <label className="block">Session fee<input className={control} name="sessionFee" maxLength={60} defaultValue={overlay.session_fee} /></label>
        <label className="flex min-h-[44px] items-center gap-2"><input name="telehealth" type="checkbox" defaultChecked={overlay.telehealth} /> Offers telehealth</label>
        <label className="flex min-h-[44px] items-center gap-2"><input name="inPerson" type="checkbox" defaultChecked={overlay.in_person} /> Offers in-person visits</label>
        <label className="flex min-h-[44px] items-center gap-2"><input name="acceptingNew" type="checkbox" defaultChecked={overlay.accepting_new} /> Accepting new patients</label>
        <button className={button}>Save listing</button>
      </fieldset>
      <p role="status">{message}</p>
      </form>
    </>
  );
}

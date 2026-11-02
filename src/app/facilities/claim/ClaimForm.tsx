"use client";

import { useState } from "react";

interface ClaimResponse {
  reference: string;
  segment: string;
  facilityName: string | null;
  status: string;
  eligibility: "eligible" | "manual-review" | "not-eligible";
  reasons: string[];
  nextStep: string;
  error?: string;
}

const ELIGIBILITY_LABELS: Record<ClaimResponse["eligibility"], string> = {
  eligible: "Eligible for paid tiers (license/certification check passed on the data we hold)",
  "manual-review": "Manual verification required before paid tiers",
  "not-eligible": "Not eligible for paid tiers yet",
};

export default function ClaimForm({ initialFacilityPath }: { initialFacilityPath: string }) {
  const [segment, setSegment] = useState<"sud" | "sober">("sud");
  const [operatorName, setOperatorName] = useState("");
  const [operatorRole, setOperatorRole] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [workPhone, setWorkPhone] = useState("");
  const [facilityPath, setFacilityPath] = useState(initialFacilityPath);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [narrCertified, setNarrCertified] = useState(false);
  const [affiliateName, setAffiliateName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ClaimResponse | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/facilities/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          segment,
          operatorName,
          operatorRole,
          workEmail,
          workPhone,
          facilityPath: segment === "sud" ? facilityPath : "",
          licenseNumber: segment === "sud" ? licenseNumber : "",
          narrCertified: segment === "sober" ? narrCertified : false,
          affiliateName: segment === "sober" ? affiliateName : "",
        }),
      });
      const data = (await res.json()) as ClaimResponse;
      if (!res.ok) throw new Error(data.error ?? "The claim could not be assessed.");
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "The claim could not be assessed.");
    } finally {
      setBusy(false);
    }
  }

  const mailto = result
    ? `mailto:hello@mindchecktools.com?subject=${encodeURIComponent(
        `Listing claim ${result.reference}`,
      )}&body=${encodeURIComponent(
        [
          `Claim reference: ${result.reference}`,
          `Segment: ${result.segment === "sober" ? "Sober living home" : "SUD treatment program"}`,
          `Name: ${operatorName}`,
          `Role: ${operatorRole}`,
          `Work email: ${workEmail}`,
          `Work phone: ${workPhone}`,
          result.facilityName ? `Facility: ${result.facilityName}` : `Facility page: ${facilityPath}`,
          segment === "sud" && licenseNumber ? `License/application number: ${licenseNumber}` : "",
          segment === "sober" ? `NARR affiliate certification declared: ${narrCertified ? `yes — ${affiliateName}` : "no"}` : "",
          "",
          "I confirm this message contains no personal information about anyone seeking treatment.",
        ]
          .filter(Boolean)
          .join("\n"),
      )}`
    : null;

  const inputCls = "mt-1 block w-full rounded-lg border border-slate-400 px-3 py-2";

  return (
    <div>
      <form onSubmit={submit} className="space-y-4 rounded-lg border border-slate-300 p-4">
        <fieldset>
          <legend className="font-medium text-slate-900">What are you claiming?</legend>
          <div className="mt-2 space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="segment"
                checked={segment === "sud"}
                onChange={() => setSegment("sud")}
              />
              A substance use treatment program (licensed)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="segment"
                checked={segment === "sober"}
                onChange={() => setSegment("sober")}
              />
              A sober living / recovery residence
            </label>
          </div>
        </fieldset>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="font-medium text-slate-900">
              Your name
            </label>
            <input id="cf-name" required value={operatorName} onChange={(e) => setOperatorName(e.target.value)} className={inputCls} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="cf-role" className="font-medium text-slate-900">
              Your role (owner, director, marketing, …)
            </label>
            <input id="cf-role" required value={operatorRole} onChange={(e) => setOperatorRole(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label htmlFor="cf-email" className="font-medium text-slate-900">
              Work email
            </label>
            <input id="cf-email" type="email" required value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} className={inputCls} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="cf-phone" className="font-medium text-slate-900">
              Work phone (optional)
            </label>
            <input id="cf-phone" type="tel" value={workPhone} onChange={(e) => setWorkPhone(e.target.value)} className={inputCls} autoComplete="tel" />
          </div>
        </div>

        {segment === "sud" ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-path" className="font-medium text-slate-900">
                Your directory page path (from the directory)
              </label>
              <input id="cf-path" value={facilityPath} onChange={(e) => setFacilityPath(e.target.value)} className={inputCls} placeholder="/facilities/ca/los-angeles/program-name" />
            </div>
            <div>
              <label htmlFor="cf-license" className="font-medium text-slate-900">
                State license / application number (optional, speeds verification)
              </label>
              <input id="cf-license" value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} className={inputCls} />
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <label className="flex items-start gap-2">
              <input type="checkbox" checked={narrCertified} onChange={(e) => setNarrCertified(e.target.checked)} className="mt-1" />
              <span>
                This home is currently certified by a NARR state affiliate. (Paid tiers for
                sober living require certification; uncertified homes can hold a free
                operator-listed page marked &ldquo;certification not verified.&rdquo;)
              </span>
            </label>
            <div>
              <label htmlFor="cf-affiliate" className="font-medium text-slate-900">
                Certifying affiliate (for example CCAPP, GARR, NCARR)
              </label>
              <input id="cf-affiliate" value={affiliateName} onChange={(e) => setAffiliateName(e.target.value)} className={inputCls} />
            </div>
          </div>
        )}

        <button type="submit" disabled={busy} className="inline-flex min-h-[44px] items-center rounded-lg bg-sage-700 px-5 py-2 font-medium text-white disabled:opacity-60">
          {busy ? "Checking…" : "Check eligibility and start the claim"}
        </button>
        <p className="text-sm text-slate-600">
          Business contact details only. Never enter personal information about anyone seeking
          treatment — claims have no field for it, by design.
        </p>
      </form>

      {error && (
        <p role="alert" className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">
          {error}
        </p>
      )}

      {result && (
        <section className="mt-6 rounded-lg border border-sage-700 bg-sage-50 p-4" aria-live="polite">
          <h2 className="text-xl font-semibold text-slate-900">
            Claim {result.reference} — status: pending
          </h2>
          <p className="mt-1 font-medium text-slate-900">{ELIGIBILITY_LABELS[result.eligibility]}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-800">
            {result.reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="mt-2 text-slate-800">{result.nextStep}</p>
          {mailto && (
            <a href={mailto} className="mt-3 inline-flex min-h-[44px] items-center rounded-lg bg-sage-700 px-5 py-2 font-medium text-white">
              Send the claim email to complete the claim
            </a>
          )}
          <p className="mt-2 text-sm text-slate-600">
            In this first release, claims are recorded by email and this website stores nothing
            you entered. The reference above ties your email to this eligibility result.
          </p>
        </section>
      )}
    </div>
  );
}

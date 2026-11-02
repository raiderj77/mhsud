"use client";

import { useState } from "react";
import Link from "next/link";
import { FindingsList, type Finding } from "@/components/FacilityDirectory";

interface CheckResult {
  name: string;
  city: string;
  state: string;
  zip: string;
  phone: string | null;
  path: string;
  hasLicenseMatch: boolean;
  findings: Finding[];
}

interface CheckResponse {
  retrievedAt: string;
  matchCount: number;
  results: CheckResult[];
  error?: string;
}

export default function CheckTool({ states }: { states: Array<{ code: string; name: string }> }) {
  const [name, setName] = useState("");
  const [state, setState] = useState("CA");
  const [city, setCity] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<CheckResponse | null>(null);

  async function run(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    setResponse(null);
    try {
      const qs = new URLSearchParams({ name, state });
      if (city.trim()) qs.set("city", city.trim());
      const res = await fetch(`/facilities/api/check?${qs.toString()}`);
      const data = (await res.json()) as CheckResponse;
      if (!res.ok) throw new Error(data.error ?? "The check could not be run.");
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "The check could not be run.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <form onSubmit={run} className="space-y-4 rounded-lg border border-slate-300 p-4">
        <div>
          <label htmlFor="fc-name" className="font-medium text-slate-900">
            Program name (as licensed or as listed)
          </label>
          <input
            id="fc-name"
            name="facilityName"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-slate-400 px-3 py-2"
            autoComplete="organization"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fc-state" className="font-medium text-slate-900">
              State
            </label>
            <select
              id="fc-state"
              name="facilityState"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-slate-400 px-3 py-2"
            >
              {states.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="fc-city" className="font-medium text-slate-900">
              City (optional, narrows results)
            </label>
            <input
              id="fc-city"
              name="facilityCity"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-slate-400 px-3 py-2"
              autoComplete="address-level2"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={busy}
          className="inline-flex min-h-[44px] items-center rounded-lg bg-sage-700 px-5 py-2 font-medium text-white disabled:opacity-60"
        >
          {busy ? "Checking…" : "Run the free check"}
        </button>
        <p className="text-sm text-slate-600">
          This form asks only for a business&rsquo;s public name and location. Do not enter
          personal information about anyone seeking treatment — the check never needs it.
        </p>
      </form>

      {error && (
        <p role="alert" className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4 text-red-900">
          {error}
        </p>
      )}

      {response && response.matchCount === 0 && (
        <div className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4">
          <h2 className="text-lg font-semibold text-slate-900">
            No matching program in the federal directory
          </h2>
          <p className="mt-1 text-slate-800">
            We found no program with that name in {state} in the SAMHSA National Directory (2024
            edition, retrieved {response.retrievedAt}). The directory only includes programs that
            hold state approval and responded to the federal survey, so a missing program is
            invisible in the main federal locator. If this is your program,{" "}
            <Link className="underline" href="/facilities/claim">
              claim your listing
            </Link>{" "}
            and a Listing Sprint intake starts with getting the record created through
            SAMHSA&rsquo;s written channels. If the name differs from the licensed name, try the
            licensed name.
          </p>
        </div>
      )}

      {response &&
        response.results.map((r) => (
          <section key={r.path} className="mt-8">
            <h2 className="text-2xl font-semibold text-slate-900">
              {r.name} — {r.city}, {r.state} {r.zip}
            </h2>
            <p className="mt-1 text-slate-700">
              Federal directory phone: {r.phone ?? "none on file"} · California license match:{" "}
              {r.hasLicenseMatch ? "found" : "not shown for this record"} ·{" "}
              <Link className="underline" href={r.path}>
                View the directory page
              </Link>
            </p>
            <div className="mt-4">
              <FindingsList findings={r.findings} />
            </div>
            <p className="mt-4 text-slate-800">
              This check covers the sources listed above — the ones we actually hold. It does not
              claim to have checked any source it does not name. A Listing Sprint adds the
              remaining channels (including your map and search profiles) with filings through
              each provider&rsquo;s written channels.{" "}
              <Link className="underline" href="/facilities/pricing">
                See the Sprint scope and pricing
              </Link>
              .
            </p>
          </section>
        ))}
    </div>
  );
}

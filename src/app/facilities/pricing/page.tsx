import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PRICING } from "@/lib/facilitiesCore.mjs";
import { PurchaseCta } from "@/components/FacilityDirectory";

export const metadata: Metadata = {
  ...createMetadata({
    path: "/facilities/pricing",
    title: "Listing Service Pricing — Flat Fees",
    description:
      "Flat-fee pricing for the treatment program listing service: free listing check, $99 Listing Sprint and $49/month Directory Care per location; $49 Sprint and $29/month for certified sober living homes.",
  }),
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "2026-11-01";

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <p className="text-sm text-slate-600">Last updated {LAST_UPDATED}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">Pricing — flat fees only</h1>
      <p className="mt-4 text-lg text-slate-800">
        Every price below is a flat fee for listing work on one location. Fees never vary with
        how many people contact a program, and paying never changes a program&rsquo;s position,
        order, or visibility in the public directory. That structure is deliberate: this is a
        listing-administration service, not a referral service.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-left text-slate-800">
          <thead>
            <tr>
              <th className="border border-slate-300 px-3 py-2">Service</th>
              <th className="border border-slate-300 px-3 py-2">Treatment program (per location)</th>
              <th className="border border-slate-300 px-3 py-2">Sober living home (per home)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-slate-300 px-3 py-2 font-medium">
                Free Listing Check
              </th>
              <td className="border border-slate-300 px-3 py-2">$0</td>
              <td className="border border-slate-300 px-3 py-2">$0</td>
            </tr>
            <tr>
              <th className="border border-slate-300 px-3 py-2 font-medium">
                Listing Audit &amp; Fix Sprint (one-time)
              </th>
              <td className="border border-slate-300 px-3 py-2">${PRICING.sud.sprint}</td>
              <td className="border border-slate-300 px-3 py-2">${PRICING.sober.sprint}</td>
            </tr>
            <tr>
              <th className="border border-slate-300 px-3 py-2 font-medium">
                Directory Care (monthly, no contract)
              </th>
              <td className="border border-slate-300 px-3 py-2">${PRICING.sud.careMonthly}/mo</td>
              <td className="border border-slate-300 px-3 py-2">${PRICING.sober.careMonthly}/mo</td>
            </tr>
            <tr>
              <th className="border border-slate-300 px-3 py-2 font-medium">
                Each additional location (same operator)
              </th>
              <td className="border border-slate-300 px-3 py-2">
                Sprint ${PRICING.sud.extraSprint} · Care ${PRICING.sud.extraCareMonthly}/mo
              </td>
              <td className="border border-slate-300 px-3 py-2">
                Sprint ${PRICING.sober.extraSprint} · Care ${PRICING.sober.extraCareMonthly}/mo
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">What the Sprint covers</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-800">
        <li>Every finding from the free check, worked to a filed correction or a prepared packet.</li>
        <li>Federal directory corrections filed through SAMHSA&rsquo;s written channels with your sign-off on the exact data.</li>
        <li>State roster mismatches prepared as a correction packet for the license holder to file.</li>
        <li>Map and search profile check: claim status, name/address/phone, hours, service categories.</li>
        <li>Channels that can only be fixed by phone are delivered as a prepared call script plus data sheet for your staff, reported as &ldquo;ready for your call,&rdquo; never as fixed.</li>
        <li>The Sprint promises filings with dates on record — not instant appearance, which is each directory&rsquo;s own schedule.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">What Directory Care covers</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-800">
        <li>Monthly re-check of the same channels against your canonical record, with a plain-language drift report: what changed, what we filed, what needs your call.</li>
        <li>Refresh watch: when the annual federal directory update or a new state roster is published, your record in it is verified and flagged if it regressed.</li>
        <li>Your claimed directory page kept current, including operator-set availability notes that are date-stamped and expire automatically.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">Who can buy</h2>
      <p className="mt-3 text-slate-800">
        Paid tiers require verification of legal status first: a state license match for
        treatment programs, and current NARR-affiliate certification for sober living homes.
        Verification covers legal status and certification only — we do not evaluate quality of
        care, and a paid badge never means a program is recommended. Services pause and badges
        are removed if a license or certification lapses or a credible complaint is upheld.{" "}
        <Link className="underline" href="/facilities/claim">
          Start with a claim
        </Link>{" "}
        to run the verification, or{" "}
        <Link className="underline" href="/facilities/check">
          run the free check
        </Link>{" "}
        first.
      </p>

      <div className="mt-8 space-y-6">
        <PurchaseCta
          label="Buy a Listing Sprint — treatment program"
          priceNote={`$${PRICING.sud.sprint} one-time per location, after a verified license match.`}
        />
        <PurchaseCta
          label="Buy a Listing Sprint — sober living home"
          priceNote={`$${PRICING.sober.sprint} one-time per home, after NARR-affiliate certification is verified.`}
        />
      </div>
    </div>
  );
}

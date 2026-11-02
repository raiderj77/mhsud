import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createMetadata({
    path: "/sober-living",
    title: "Sober Living Homes — Certification & Listings",
    description:
      "How sober living homes are listed and verified: no national registry exists, so listing starts with NARR-affiliate certification or an operator claim. Flat-fee listing services for certified homes.",
  }),
  robots: { index: false, follow: true },
};

const LAST_UPDATED = "2026-11-01";

// Registry links are static and were verified against the organizations'
// own sites / the NARR affiliate directory when this page was written.
const AFFILIATES = [
  {
    state: "All states",
    name: "NARR — National Alliance for Recovery Residences, affiliate directory",
    url: "https://narronline.org/affiliates/",
    note: "The national list of state affiliates that certify recovery residences to the NARR Standard.",
  },
  {
    state: "California",
    name: "CCAPP — California Consortium of Addiction Programs and Professionals",
    url: "https://ccapp.us",
    note: "California's NARR affiliate. California has no state license or registry for sober living homes; CCAPP certification is voluntary.",
  },
  {
    state: "Georgia",
    name: "GARR — Georgia Association of Recovery Residences",
    url: "https://thegarrnetwork.org",
    note: "Georgia's NARR affiliate. Georgia does not license sober living homes; GARR certification is voluntary.",
  },
  {
    state: "North Carolina",
    name: "NCARR — North Carolina Association of Recovery Residences",
    url: "https://ncarr.org",
    note: "North Carolina's NARR affiliate and its certified-home registry.",
  },
  {
    state: "Vermont",
    name: "VTARR — Vermont Alliance for Recovery Residences",
    url: "https://narronline.org/affiliates/",
    note: "Vermont's NARR affiliate — listed in the NARR affiliate directory (link goes to the directory).",
  },
];

export default function SoberLivingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <p className="text-sm text-slate-600">Last updated {LAST_UPDATED}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Sober living homes: certification first, listings second
      </h1>
      <p className="mt-4 text-lg text-slate-800">
        There is no national registry of sober living homes, and most states do not license them
        — in California, the state health department states plainly that it does not license,
        certify, or investigate sober living homes. So this directory does not publish a bulk
        list of homes it cannot verify. Instead:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-800">
        <li>
          <strong>Certified homes</strong> — homes certified by a NARR state affiliate — are the
          verified seed of the sober living directory, and the only homes eligible for paid
          listing services.
        </li>
        <li>
          <strong>Operator-claimed homes</strong> — an operator can claim a basic page through
          the{" "}
          <Link className="underline" href="/facilities/claim">
            claim flow
          </Link>
          . Uncertified homes are always labeled &ldquo;operator-listed — certification not
          verified,&rdquo; and are never presented as vetted or recommended.
        </li>
        <li>
          <strong>People looking for a home</strong> contact homes directly using the
          home&rsquo;s own phone number or website. This site never takes messages, waitlist
          requests, or personal information from people seeking housing.
        </li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">Certification registries</h2>
      <p className="mt-3 text-slate-800">
        Certification is run by state affiliates of the National Alliance for Recovery
        Residences (NARR), applying the NARR Standard. Levels run from Level I (peer-run) to
        Level IV (clinically integrated). To check or start certification, use your
        state&rsquo;s affiliate:
      </p>
      <ul className="mt-4 space-y-3">
        {AFFILIATES.map((a) => (
          <li key={a.name} className="rounded-lg border border-slate-300 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">{a.state}</p>
            <a className="mt-1 block text-lg font-semibold text-sage-800 underline" href={a.url} rel="noopener noreferrer">
              {a.name}
            </a>
            <p className="mt-1 text-slate-700">{a.note}</p>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">Listing services for certified homes</h2>
      <p className="mt-3 text-slate-800">
        For a certified home, the listing problems are the same shape as a treatment
        program&rsquo;s: stale map profiles, wrong phone numbers, a certification listing that
        does not match the home&rsquo;s own site. The same flat-fee service applies, priced for
        sober living economics: a $49 Listing Sprint and $29/month Directory Care per home —
        see{" "}
        <Link className="underline" href="/facilities/pricing">
          pricing
        </Link>
        . Fees are flat and never depend on how many people contact the home; paying never
        changes how a home is ordered or shown. Verification covers certification status only —
        never quality of care.
      </p>
      <p className="mt-3 text-slate-800">
        Operate a home?{" "}
        <Link className="underline" href="/facilities/claim">
          Claim your listing
        </Link>{" "}
        — certified or not, claiming is free.
      </p>
    </div>
  );
}

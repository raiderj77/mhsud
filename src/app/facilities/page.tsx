import { DirectoryContext } from "@/components/DirectoryContext";
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, SITE_URL } from "@/lib/metadata";
import { getDirectoryIndex, getAllFacilities } from "@/lib/facilities";
import { ProvenanceNote } from "@/components/FacilityDirectory";

const PAGE_PATH = "/facilities";
const LAST_UPDATED = "2026-11-01";

export const metadata: Metadata = {
  ...createMetadata({
    path: PAGE_PATH,
    title: "Treatment Program Directory & Listing Check",
    description:
      "A public directory of substance use treatment programs built from the SAMHSA National Directory and state licensing rosters, with a free listing check and flat-fee correction service for operators.",
  }),
  robots: { index: true, follow: true },
};

export default async function FacilitiesHubPage() {
  const index = getDirectoryIndex();
  const facilities = await getAllFacilities();
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <p className="text-sm text-slate-600">Last updated {LAST_UPDATED}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Treatment program directory &amp; listing accuracy service
      </h1>
      <p className="mt-4 text-lg text-slate-800">
        This directory lists {index.totals.facilities.toLocaleString()} substance use treatment
        programs across {index.totals.states} states and territories, built from the federal
        SAMHSA directory and state licensing rosters. This is a dated snapshot, not a live availability service. A program may
        move, change its phone number, or change services after the source was collected.
        Confirm current details with the program directly.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">For program operators</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-slate-800">
        <li>
          <strong>Run the free listing check.</strong> Enter your program&rsquo;s name and state
          and see exactly what the federal directory and — in California — the state licensing
          roster say about you, side by side, with the mismatches named.{" "}
          <Link className="underline" href="/facilities/check">
            Start the free check
          </Link>
          .
        </li>
        <li>
          <strong>Claim your listing.</strong> Claiming is free and never changes how your page
          is ordered or shown.{" "}
          <Link className="underline" href="/facilities/claim">
            How claiming works
          </Link>
          .
        </li>
        <li>
          <strong>If the check finds problems, a Listing Sprint files the fixes.</strong> One
          flat fee per location — $99 for a treatment program — covering correction filings
          through the written channels each directory provides. Monthly Directory Care ($49 per
          location) re-checks every source each month, including each new federal refresh and
          state roster release.{" "}
          <Link className="underline" href="/facilities/pricing">
            See pricing
          </Link>
          .
        </li>
      </ol>
      <p className="mt-3 text-slate-800">
        Every price on this service is a flat fee for listing work. Fees never vary with how many
        people contact a program, and paying never changes a program&rsquo;s position in this
        directory. We verify legal-status records — licensing for treatment programs,
        certification for sober living homes — before selling services. We do not evaluate
        quality of care, and we do not steer people toward any program.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">For people looking for treatment</h2>
      <p className="mt-3 text-slate-800">
        Browse the directory below to find a program&rsquo;s own phone number and website, then
        contact the program directly. This site does not take messages, bookings, or personal
        information from people seeking treatment, and it does not recommend one program over
        another. If you need help right now, call or text <strong>988</strong> (Suicide &amp;
        Crisis Lifeline) or the SAMHSA National Helpline at <strong>1-800-662-4357</strong>.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">Sober living homes</h2>
      <p className="mt-3 text-slate-800">
        There is no national registry of sober living homes, so this directory does not pretend
        to list them all. Certified homes (through a NARR state affiliate) and operator-claimed
        homes are handled on the{" "}
        <Link className="underline" href="/sober-living">
          sober living page
        </Link>
        .
      </p>

      <DirectoryContext facilities={facilities} />
      <h2 className="mt-8 text-2xl font-semibold text-slate-900">Browse programs by state</h2>
      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
        {index.states.map((s) => (
          <li key={s.code}>
            <Link
              className="block rounded-lg border border-slate-300 px-3 py-2 text-slate-800 hover:bg-slate-50"
              href={`/facilities/${s.code.toLowerCase()}`}
            >
              {s.name} — {s.facilityCount.toLocaleString()} programs
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <ProvenanceNote />
      </div>
      <p className="mt-6 text-sm text-slate-600">
        Directory data retrieved {index.generatedAt}. Service description page: {SITE_URL}
        {PAGE_PATH}.
      </p>
    </div>
  );
}

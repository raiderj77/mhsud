import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getDirectoryIndex, getFacility } from "@/lib/facilities";
import { computeFindings } from "@/lib/facilitiesCore.mjs";
import { FindingsList, ProvenanceNote, PurchaseCta } from "@/components/FacilityDirectory";

interface Params {
  params: Promise<{ state: string; city: string; slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { state, city, slug } = await params;
  const facility = await getFacility(state, city, slug);
  if (!facility) return {};
  return {
    ...createMetadata({
      path: `/facilities/report/${state}/${city}/${slug}`,
      title: `Listing Audit Snapshot — ${facility.name}`,
      description: `Free listing-audit snapshot for ${facility.name} (${facility.city}, ${facility.state}): what the SAMHSA directory and state roster records show, and where they disagree.`,
    }),
    robots: { index: false, follow: false },
  };
}

export default async function ReportPage({ params }: Params) {
  const { state, city, slug } = await params;
  const facility = await getFacility(state, city, slug);
  if (!facility) notFound();
  const index = getDirectoryIndex();
  const findings = computeFindings(facility, { retrievedAt: index.generatedAt });
  const lic = facility.license;

  const rows: Array<{ field: string; samhsa: string; roster: string }> = [
    { field: "Program name", samhsa: facility.name, roster: lic ? lic.rosterFacilityName : "—" },
    {
      field: "Phone",
      samhsa: facility.phone ?? "none on file",
      roster: lic ? (lic.rosterPhone ?? "none on file") : "—",
    },
    { field: "Street address", samhsa: facility.street1, roster: lic ? lic.rosterStreet1 : "—" },
    {
      field: "License / certification status",
      samhsa: "State-approved for directory inclusion (per SAMHSA)",
      roster: lic
        ? `${lic.applicationType}, program code ${lic.programCode}, expiration on file ${lic.licenseExpiration ?? "not shown"}`
        : "No matched record in the data we hold",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 print:max-w-none">
      <p className="text-sm text-slate-600 print:hidden">
        <Link className="underline" href={facility.path}>
          ← Back to the directory page
        </Link>
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Listing audit snapshot: {facility.name}
      </h1>
      <p className="mt-2 text-slate-700">
        {facility.city}, {facility.stateName} · Snapshot generated from sources retrieved{" "}
        {index.generatedAt} · Free preview — the paid Listing Sprint adds the filing work
        described below. To save this report, use your browser&rsquo;s print function (Save as
        PDF).
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">What each source says</h2>
      <div className="mt-3 overflow-x-auto">
        <table className="w-full border-collapse text-left text-slate-800">
          <thead>
            <tr>
              <th className="border border-slate-300 px-3 py-2">Field</th>
              <th className="border border-slate-300 px-3 py-2">SAMHSA National Directory (2024)</th>
              <th className="border border-slate-300 px-3 py-2">
                {facility.state === "CA" ? "CA DHCS roster" : "State roster"}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.field}>
                <th className="border border-slate-300 px-3 py-2 font-medium">{r.field}</th>
                <td className="border border-slate-300 px-3 py-2">{r.samhsa}</td>
                <td className="border border-slate-300 px-3 py-2">{r.roster}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">Findings</h2>
      <div className="mt-4">
        <FindingsList findings={findings} />
      </div>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">What a Listing Sprint does with this</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-800">
        <li>
          Files corrections with SAMHSA through its written update channels, with the
          operator&rsquo;s sign-off on the exact data, and keeps the filed dates on record. The
          Sprint promises <em>filing</em>, not instant appearance — SAMHSA applies corrections on
          its own schedule.
        </li>
        <li>
          Prepares the state-roster correction packet for anything only the license holder can
          file with the state.
        </li>
        <li>
          Works the program&rsquo;s map and search profiles: claim status, name/address/phone,
          hours, and service categories checked against the canonical record.
        </li>
        <li>
          Any channel whose only fix path is a phone call is delivered as a prepared call script
          with the exact data sheet for the program&rsquo;s own staff, and reported honestly as
          &ldquo;ready for your call&rdquo; — never marked fixed.
        </li>
        <li>
          One flat fee per location. The fee never depends on how many people contact the
          program, and paying never changes the program&rsquo;s position in this directory.
        </li>
      </ul>
      <div className="mt-6 print:hidden">
        <PurchaseCta
          label="Start a Listing Sprint for this location — $99"
          priceNote="One-time flat fee for one treatment-program location, after a verified license match. See the claim page to start verification."
        />
      </div>

      <div className="mt-10">
        <ProvenanceNote facility={facility} />
      </div>
    </div>
  );
}

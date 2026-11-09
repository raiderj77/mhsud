import Link from "next/link";
import type { Facility } from "@/lib/facilities";
import { getDirectoryIndex } from "@/lib/facilities";

export interface Finding {
  id: string;
  kind: "mismatch" | "gap" | "note";
  title: string;
  detail: string;
  fix: string;
}

const KIND_STYLES: Record<Finding["kind"], string> = {
  mismatch: "border-red-300 bg-red-50",
  gap: "border-amber-300 bg-amber-50",
  note: "border-slate-300 bg-slate-50",
};

const KIND_LABELS: Record<Finding["kind"], string> = {
  mismatch: "Mismatch found",
  gap: "Gap found",
  note: "Worth knowing",
};

export function FindingsList({ findings }: { findings: Finding[] }) {
  return (
    <div className="space-y-4">
      {findings.map((f) => (
        <article key={f.id} className={`rounded-lg border p-4 ${KIND_STYLES[f.kind]}`}>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {KIND_LABELS[f.kind]}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{f.title}</h3>
          <p className="mt-1 text-slate-800">{f.detail}</p>
          <p className="mt-2 text-sm text-slate-700">
            <strong>How it gets fixed:</strong> {f.fix}
          </p>
        </article>
      ))}
    </div>
  );
}

export function ProvenanceNote({ facility }: { facility?: Facility }) {
  const index = getDirectoryIndex();
  const samhsa = index.sources.find((s) => s.id === "samhsa");
  return (
    <aside className="rounded-lg border border-slate-300 bg-white p-4 text-sm text-slate-700">
      <h2 className="text-base font-semibold text-slate-900">Where this information comes from</h2>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>
          {samhsa?.label} — retrieved {samhsa?.retrievedAt}. {samhsa?.note}
        </li>
        {facility?.state === "CA" && (
          <li>
            California DHCS SUD Recovery Treatment Facilities roster — retrieved{" "}
            {index.sources.find((s) => s.id === "ca-dhcs")?.retrievedAt}. License data is the
            state&rsquo;s record; MindCheck Tools reports matches and mismatches, it does not
            issue or renew licenses.
          </li>
        )}
      </ul>
      {facility && <p className="mt-2">Dataset generated {index.generatedAt}. {facility.state === "CA" ? (facility.license ? "California DHCS roster record matched; current status not independently verified." : "No California DHCS roster match found; this does not prove the program is unlicensed.") : "State licensing not cross-checked; SAMHSA record only."}</p>}
      <p className="mt-2">
        Listing information is republished from public registries and is not independently
        verified by MindCheck Tools. MindCheck Tools is not affiliated with{" "}
        {facility ? facility.name : "any listed program"} and does not recommend one program over
        another. We check legal-status records (licensing and certification) — we do not evaluate
        quality of care.
      </p>
      <p className="mt-2">
        If you are looking for treatment for yourself or someone else, contact the program
        directly using the phone number or website shown here. This directory does not take
        messages, bookings, or personal information from people seeking treatment.
      </p>
    </aside>
  );
}

export function ClaimCta({ facility }: { facility: Facility }) {
  const claimHref = `/facilities/claim?facility=${encodeURIComponent(facility.path)}`;
  return (
    <aside className="rounded-lg border border-sage-700 bg-sage-50 p-4">
      <h2 className="text-lg font-semibold text-slate-900">Is this your program?</h2>
      <p className="mt-1 text-slate-800">
        Operators can run a free listing check on this page&rsquo;s data, claim the listing, and —
        once a license match is verified — buy a flat-fee Listing Sprint to file corrections.
        Claiming never changes how this page is ordered or shown to the public.
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <Link
          href={claimHref}
          className="inline-flex min-h-[44px] items-center rounded-lg bg-sage-700 px-4 py-2 font-medium text-white"
        >
          Claim this listing
        </Link>
        <Link
          href={`/facilities/report${facility.path.replace("/facilities", "")}`}
          className="inline-flex min-h-[44px] items-center rounded-lg border border-sage-700 px-4 py-2 font-medium text-sage-800"
        >
          See the free audit snapshot
        </Link>
      </div>
    </aside>
  );
}

/**
 * Purchase CTA with the checkout gate. Stripe products are a separate owner
 * decision; until NEXT_PUBLIC_FACILITY_SERVICES_ORDER_URL is set, every
 * purchase button renders disabled and no checkout exists.
 */
export function PurchaseCta({ label, priceNote }: { label: string; priceNote: string }) {
  const orderUrl = process.env.NEXT_PUBLIC_FACILITY_SERVICES_ORDER_URL;
  if (orderUrl) {
    return (
      <div>
        <a
          href={orderUrl}
          className="inline-flex min-h-[44px] items-center rounded-lg bg-sage-700 px-5 py-2 font-medium text-white"
        >
          {label}
        </a>
        <p className="mt-1 text-sm text-slate-600">{priceNote}</p>
      </div>
    );
  }
  return (
    <div>
      <button
        type="button"
        disabled
        aria-disabled="true"
        className="inline-flex min-h-[44px] cursor-not-allowed items-center rounded-lg bg-slate-300 px-5 py-2 font-medium text-slate-600"
      >
        {label} — checkout not open yet
      </button>
      <p className="mt-1 text-sm text-slate-600">
        {priceNote} Checkout opens after the service terms complete legal review. To ask about
        opening dates, email{" "}
        <a className="underline" href="mailto:hello@mindchecktools.com">
          hello@mindchecktools.com
        </a>
        .
      </p>
    </div>
  );
}

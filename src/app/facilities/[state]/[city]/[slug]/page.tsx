import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getDirectoryIndex, getFacility } from "@/lib/facilities";
import { ClaimCta, ProvenanceNote } from "@/components/FacilityDirectory";

interface Params {
  params: Promise<{ state: string; city: string; slug: string }>;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { state, city, slug } = await params;
  const facility = await getFacility(state, city, slug);
  if (!facility) return {};
  return {
    ...createMetadata({
      path: facility.path,
      title: `${facility.name} — ${facility.city}, ${facility.state}`,
      description: `Public listing record for ${facility.name} in ${facility.city}, ${facility.stateName}: address, phone, services, and payment options from the SAMHSA National Directory. Contact the program directly.`,
    }),
    robots: { index: false, follow: true },
  };
}

function FactList({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <ul className="mt-1 list-disc pl-5 text-slate-800">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function FacilityPage({ params }: Params) {
  const { state, city, slug } = await params;
  const facility = await getFacility(state, city, slug);
  if (!facility) notFound();
  const index = getDirectoryIndex();
  const tel = facility.phone ? facility.phone.replace(/[^0-9+]/g, "") : null;
  const intakeTel = facility.intakePhone ? facility.intakePhone.replace(/[^0-9+]/g, "") : null;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <Link className="underline" href="/facilities">
          Directory
        </Link>{" "}
        /{" "}
        <Link className="underline" href={`/facilities/${facility.state.toLowerCase()}`}>
          {facility.stateName}
        </Link>{" "}
        /{" "}
        <Link
          className="underline"
          href={`/facilities/${facility.state.toLowerCase()}/${facility.citySlug}`}
        >
          {facility.city}
        </Link>{" "}
        / {facility.name}
      </nav>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">{facility.name}</h1>
      {facility.dba && <p className="mt-1 text-slate-700">Also listed as: {facility.dba}</p>}
      <p className="mt-2 text-lg text-slate-800">
        {facility.street1}
        {facility.street2 ? `, ${facility.street2}` : ""}
        <br />
        {facility.city}, {facility.state} {facility.zip}
      </p>

      <div className="mt-4 space-y-1 text-lg">
        {facility.phone && (
          <p>
            Phone:{" "}
            <a className="font-semibold underline" href={`tel:${tel}`}>
              {facility.phone}
            </a>
          </p>
        )}
        {facility.intakePhone && facility.intakePhone !== facility.phone && (
          <p>
            Intake:{" "}
            <a className="font-semibold underline" href={`tel:${intakeTel}`}>
              {facility.intakePhone}
            </a>
          </p>
        )}
        {facility.website ? (
          <p>
            Website:{" "}
            <a className="underline" href={facility.website} rel="noopener noreferrer">
              {facility.website}
            </a>
          </p>
        ) : (
          <p className="text-slate-600">
            No website address in the directory record — call the program directly.
          </p>
        )}
      </div>
      <p className="mt-2 text-sm text-slate-600">
        This page shows the program&rsquo;s own public contact details. Contact the program
        directly — MindCheck Tools does not relay messages or take personal information from
        people seeking treatment.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-slate-900">What the record shows</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FactList title="Type of care" items={facility.careTypes} />
        <FactList title="Service settings" items={facility.settings} />
        <FactList title="Payment and funding accepted" items={facility.payment} />
        <FactList title="Groups served" items={facility.groupsServed} />
        <FactList title="Languages and accessibility" items={facility.languages} />
        <FactList title="Ages served" items={facility.agesServed} />
      </div>
      {facility.ownership && (
        <p className="mt-4 text-slate-800">
          <strong>Organization type:</strong> {facility.ownership}
        </p>
      )}

      {facility.license && (
        <section className="mt-8 rounded-lg border border-slate-300 p-4">
          <h2 className="text-xl font-semibold text-slate-900">California licensing record</h2>
          <ul className="mt-2 space-y-1 text-slate-800">
            <li>
              <strong>Status on file:</strong> {facility.license.applicationType} (DHCS roster)
            </li>
            <li>
              <strong>Program code:</strong> {facility.license.programCode}
            </li>
            {facility.license.licenseExpiration && (
              <li>
                <strong>Expiration on file:</strong> {facility.license.licenseExpiration}
              </li>
            )}
            {facility.license.treatmentCapacity && (
              <li>
                <strong>Treatment capacity on file:</strong> {facility.license.treatmentCapacity}
              </li>
            )}
            <li>
              <strong>Legal entity:</strong> {facility.license.legalEntityName}
            </li>
          </ul>
          <p className="mt-2 text-sm text-slate-600">
            Roster retrieved {index.generatedAt}. A roster match verifies a legal-status record
            exists. It is not a judgment about quality of care.
          </p>
        </section>
      )}

      <div className="mt-8">
        <ClaimCta facility={facility} />
      </div>
      <div className="mt-6">
        <ProvenanceNote facility={facility} />
      </div>
    </div>
  );
}

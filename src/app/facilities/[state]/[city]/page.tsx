import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getDirectoryIndex, getStateFacilities } from "@/lib/facilities";

interface Params {
  params: Promise<{ state: string; city: string }>;
}

async function resolve(params: Params["params"]) {
  const { state, city } = await params;
  const index = getDirectoryIndex();
  const summary = index.states.find((s) => s.code === state.toUpperCase());
  if (!summary) return null;
  const citySummary = summary.cities.find((c) => c.slug === city);
  if (!citySummary) return null;
  const all = (await getStateFacilities(summary.code)) ?? [];
  const facilities = all.filter((f) => f.citySlug === city);
  return { summary, citySummary, facilities };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const r = await resolve(params);
  if (!r) return {};
  return {
    ...createMetadata({
      path: `/facilities/${r.summary.code.toLowerCase()}/${r.citySummary.slug}`,
      title: `Substance Use Treatment Programs in ${r.citySummary.name}, ${r.summary.code}`,
      description: `${r.citySummary.count} substance use treatment programs in ${r.citySummary.name}, ${r.summary.name}, listed from the SAMHSA National Directory. Contact each program directly.`,
    }),
    robots: { index: false, follow: true },
  };
}

export default async function CityPage({ params }: Params) {
  const r = await resolve(params);
  if (!r) notFound();
  const { summary, citySummary, facilities } = r;
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <Link className="underline" href="/facilities">
          Directory
        </Link>{" "}
        /{" "}
        <Link className="underline" href={`/facilities/${summary.code.toLowerCase()}`}>
          {summary.name}
        </Link>{" "}
        / {citySummary.name}
      </nav>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Treatment programs in {citySummary.name}, {summary.code}
      </h1>
      <p className="mt-4 text-slate-800">
        Contact each program directly — this directory does not take messages or personal
        information from people seeking treatment, and programs are listed in alphabetical
        order, never by payment.
      </p>
      <ul className="mt-6 space-y-3">
        {facilities.map((f) => (
          <li key={f.slug} className="rounded-lg border border-slate-300 p-4">
            <Link className="text-lg font-semibold text-sage-800 underline" href={f.path}>
              {f.name}
            </Link>
            <p className="mt-1 text-slate-700">
              {f.street1}
              {f.street2 ? `, ${f.street2}` : ""}, {f.city}, {f.state} {f.zip}
            </p>
            {f.phone && (
              <p className="mt-1 text-slate-700">
                Phone:{" "}
                <a className="underline" href={`tel:${f.phone.replace(/[^0-9+]/g, "")}`}>
                  {f.phone}
                </a>
              </p>
            )}
            {f.settings.length > 0 && (
              <p className="mt-1 text-sm text-slate-600">{f.settings.slice(0, 4).join(" · ")}</p>
            )}
            {f.license && (
              <p className="mt-1 text-sm text-slate-600">
                CA license record matched ({f.license.applicationType})
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

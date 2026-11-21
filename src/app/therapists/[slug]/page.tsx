import Link from "next/link";
import { TherapistBreadcrumbs } from "@/components/TherapistBreadcrumbs";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { getTherapist, therapistSnapshot } from "@/lib/therapists";
import { LICENSE_NOTE, REGISTRY_URL, therapistPath } from "@/lib/therapistsCore.mjs";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const provider = getTherapist((await params).slug);
  if (!provider) notFound();
  return createMetadata({
    path: therapistPath(provider.slug),
    title: `${provider.name}, ${provider.city}, CA`,
    description: `Public provider registry listing for ${provider.name} in ${provider.city}, California.`,
  });
}

export default async function TherapistPage({ params }: Props) {
  const provider = getTherapist((await params).slug);
  if (!provider) notFound();

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-8 text-neutral-900 dark:text-neutral-50">
      <TherapistBreadcrumbs name={provider.name} />
      <h1 className="mt-3 break-words text-3xl font-bold">{provider.name}</h1>
      <p className="mt-2 text-lg text-neutral-800 dark:text-neutral-200">{provider.city}, California</p>
      <section className="mt-6 rounded-lg border border-neutral-400 p-4">
        <h2 className="text-xl font-semibold">What the registry shows</h2>
        <dl className="mt-3 space-y-3">
          <div><dt className="font-medium">Provider specialties</dt><dd>{provider.specialties.join(", ")}</dd></div>
          {provider.credential && <div><dt className="font-medium">Credentials on file</dt><dd>{provider.credential}</dd></div>}
          <div><dt className="font-medium">National Provider Identifier (NPI)</dt><dd>{provider.npi}</dd></div>
        </dl>
        <p className="mt-4 font-medium">Unclaimed listing</p>
        <p className="mt-1 text-neutral-700 dark:text-neutral-300">{LICENSE_NOTE}</p>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          Confirm current license status before making an appointment. Contact the provider directly for availability and services.
        </p>
        <a href={`${REGISTRY_URL}/provider-view/${provider.npi}`} rel="noreferrer" className="mt-2 inline-flex min-h-[44px] items-center underline">
          View the source registry record
        </a>
        {therapistSnapshot.generatedAt && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400">Data retrieved {therapistSnapshot.generatedAt}</p>
        )}
      </section>
      <Link href={`/therapists/claim?provider=${encodeURIComponent(provider.slug)}`} className="mt-4 inline-flex min-h-[44px] items-center underline">
        Claim this listing
      </Link>
    </article>
  );
}

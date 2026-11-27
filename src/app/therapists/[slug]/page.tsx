import Link from "next/link";
import { TherapistBreadcrumbs } from "@/components/TherapistBreadcrumbs";
import { notFound } from "next/navigation";
import { createMetadata, SITE_URL } from "@/lib/metadata";
import { getTherapist, therapistSnapshot } from "@/lib/therapists";
import { getProfileOverlay, profilePhotoUrl, type PublicProfile } from "@/lib/professionalServer";
import { LICENSE_NOTE, REGISTRY_URL, therapistPath } from "@/lib/therapistsCore.mjs";
import { ProfileContact, ProfileShare } from "../ProfileActions";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const provider = getTherapist((await params).slug);
  if (!provider) notFound();
  const profile = await getProfileOverlay(provider.slug);
  const path = therapistPath(provider.slug);
  const image = { url: `${SITE_URL}${path}/card`, width: 1200, height: 630, alt: provider.name };
  return createMetadata({
    path,
    title: profile && provider.credential
      ? `${provider.name}, ${provider.credential}, ${provider.city}, CA`
      : `${provider.name}, ${provider.city}, CA`,
    description: `Public provider registry listing for ${provider.name} in ${provider.city}, California.`,
    ...(profile ? { openGraph: { images: [image] }, twitter: { images: [image] } } : {}),
  });
}

function ContactCard({ profile }: { profile: PublicProfile }) {
  return (
    <section className="mt-6 space-y-3 rounded-lg border border-neutral-400 p-4">
      <h2 className="text-xl font-semibold">Contact and availability</h2>
      <ProfileContact slug={profile.slug} phone={profile.phone} email={profile.public_email} website={profile.website} />
      {profile.bio && <p className="whitespace-pre-wrap break-words">{profile.bio}</p>}
      {([
        ["Specialties", profile.specialties],
        ["Treatment approaches", profile.approaches],
        ["Populations served", profile.populations],
      ] as const).map(([label, items]) => items.length > 0 && (
        <div key={label}><h3 className="font-medium">{label}</h3><ul className="list-disc pl-5">
          {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul></div>
      ))}
      {profile.insurances.length > 0 && (
        <div><h3 className="font-medium">Insurance accepted</h3><ul className="list-disc pl-5">
          {profile.insurances.map((item, index) => <li key={index}>{item}</li>)}
        </ul></div>
      )}
      {profile.languages.length > 0 && (
        <div><h3 className="font-medium">Languages</h3><ul className="list-disc pl-5">
          {profile.languages.map((item, index) => <li key={index}>{item}</li>)}
        </ul></div>
      )}
      {profile.session_fee && <p>Session fee {profile.session_fee}</p>}
      {profile.telehealth && <p>Offers telehealth</p>}
      {profile.in_person && <p>Offers in-person visits</p>}
      {profile.office_area && <p>Service area {profile.office_area}</p>}
      {profile.years_in_practice !== null && <p>Years in practice {profile.years_in_practice}</p>}
      {profile.education && <p>Education {profile.education}</p>}
      {profile.accepting_new && <p><span className="inline-flex items-center rounded-full bg-navy px-3 py-1 text-sm font-medium text-white">Accepting new patients</span></p>}
    </section>
  );
}

export default async function TherapistPage({ params }: Props) {
  const provider = getTherapist((await params).slug);
  if (!provider) notFound();
  const overlay = await getProfileOverlay(provider.slug);
  const photo = overlay && profilePhotoUrl(overlay);

  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-8 text-neutral-900 dark:text-neutral-50">
      <TherapistBreadcrumbs name={provider.name} />
      <h1 className="mt-3 break-words text-3xl font-bold">{provider.name}</h1>
      <p className="mt-2 text-lg text-neutral-800 dark:text-neutral-200">{provider.city}, California</p>
      {photo && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt="" width={160} height={160} referrerPolicy="no-referrer"
          className="mt-4 aspect-square rounded-lg object-cover" />
      )}
      {overlay && <ContactCard profile={overlay} />}
      {overlay && <ProfileShare slug={provider.slug} url={`${SITE_URL}${therapistPath(provider.slug)}`} />}
      <section className="mt-6 rounded-lg border border-neutral-400 p-4">
        <h2 className="text-xl font-semibold">What the registry shows</h2>
        <dl className="mt-3 space-y-3">
          <div><dt className="font-medium">Provider specialties</dt><dd>{provider.specialties.join(", ")}</dd></div>
          {provider.credential && <div><dt className="font-medium">Credentials on file</dt><dd>{provider.credential}</dd></div>}
          {overlay && Boolean(provider.registryLicenseNumbers?.length) && (
            <div><dt className="font-medium">California license numbers reported to the registry</dt>
              <dd>{provider.registryLicenseNumbers?.join(", ")}</dd>
            </div>
          )}
          <div><dt className="font-medium">National Provider Identifier (NPI)</dt><dd>{provider.npi}</dd></div>
        </dl>
        <p className="mt-4">
          <span className={overlay
            ? "inline-flex items-center rounded-full bg-navy px-3 py-1 text-sm font-medium text-white"
            : "inline-flex items-center rounded-full border border-neutral-400 px-3 py-1 text-sm font-medium"}>
            {overlay ? "Claimed listing" : "Unclaimed listing"}
          </span>
        </p>
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
      {!overlay && <Link href={`/therapists/claim?provider=${encodeURIComponent(provider.slug)}`} className="mt-4 inline-flex min-h-[44px] items-center underline">
        Claim this listing
      </Link>}
    </article>
  );
}

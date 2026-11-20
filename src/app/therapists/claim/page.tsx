import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { getTherapist } from "@/lib/therapists";
import ClaimForm from "./ClaimForm";

export const metadata = {
  ...createMetadata({
    path: "/therapists/claim",
    title: "Claim a California Therapist Listing",
    description: "Start a claim for your own therapist directory listing.",
  }),
  robots: { index: false, follow: true },
};

export default async function ClaimPage({ searchParams }: { searchParams: Promise<{ provider?: string }> }) {
  const { provider } = await searchParams;
  const listing = provider ? getTherapist(provider) : undefined;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 text-neutral-900 dark:text-neutral-50">
      <Link className="underline" href="/therapists">California therapist directory</Link>
      <h1 className="mt-3 text-3xl font-bold">Claim your therapist listing</h1>
      {listing ? (
        <>
          <p className="mt-3">Listing for {listing.name} in {listing.city}, California.</p>
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">
            This form is for providers claiming their own listing. Enter only your work email.
            All claims require manual review.
          </p>
          <ClaimForm slug={listing.slug} />
        </>
      ) : <p className="mt-3">Choose your listing from the directory to start a claim.</p>}
    </div>
  );
}

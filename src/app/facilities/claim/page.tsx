import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ClaimForm from "./ClaimForm";

export const metadata: Metadata = {
  ...createMetadata({
    path: "/facilities/claim",
    title: "Claim Your Program's Listing",
    description:
      "For treatment program and sober living operators: claim your directory listing, verify license or certification status, and see paid-tier eligibility instantly.",
  }),
  robots: { index: false, follow: true },
};

interface PageProps {
  searchParams: Promise<{ facility?: string }>;
}

export default async function ClaimPage({ searchParams }: PageProps) {
  const { facility } = await searchParams;
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900">Claim your listing</h1>
      <p className="mt-4 text-lg text-slate-800">
        Claiming is free. It tells us you operate the listing, unlocks the full listing check for
        your program, and starts the verification paid tiers require: a state license match for
        treatment programs, or current NARR-affiliate certification for sober living homes.
        Claiming never changes how a page is ordered or displayed, and we verify legal status
        only — never quality of care.
      </p>
      <p className="mt-3 text-slate-800">
        Only business contact details are collected here, and only from the operator. This
        service never collects personal information from people seeking treatment; they contact
        programs directly, off this platform.
      </p>
      <div className="mt-6">
        <ClaimForm initialFacilityPath={facility ?? ""} />
      </div>
    </div>
  );
}

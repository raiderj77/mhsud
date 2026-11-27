import Link from "next/link";
import { redirect } from "next/navigation";
import { getTherapist } from "@/lib/therapists";
import { getClaimsByEmail, getOverlaysByEmail, getSessionUser, isProfessionalBackendConfigured } from "@/lib/professionalServer";
import DashboardForm, { SignOutButton } from "./DashboardForm";
import { SharePanel } from "./SharePanel";
import { ProfileStats } from "./ProfileStats";

export const dynamic = "force-dynamic";
export const metadata = { title: "Therapist dashboard", robots: { index: false, follow: false } };

const statusLabels = { pending: "Pending review", approved: "Approved", rejected: "Rejected" };

export default async function DashboardPage() {
  if (!isProfessionalBackendConfigured()) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8">
        <h1 className="rounded-lg bg-navy px-5 py-6 text-3xl font-bold text-white">Therapist dashboard</h1>
        <p className="mt-4">The professional dashboard opens shortly.</p>
      </div>
    );
  }

  const user = await getSessionUser(false);
  if (!user?.email) redirect("/therapists/sign-in");
  const email = user.email.toLowerCase();
  const [overlays, claims] = await Promise.all([getOverlaysByEmail(email), getClaimsByEmail(email)]);
  const staleBefore = Date.now() - 90 * 24 * 60 * 60 * 1000;

  return (
    <div className="mx-auto max-w-2xl space-y-4 px-4 py-8">
      <h1 className="rounded-lg bg-navy px-5 py-6 text-3xl font-bold text-white">Therapist dashboard</h1>
      <SignOutButton />
      {overlays.map(overlay => {
        const listing = getTherapist(overlay.slug);
        if (!listing) return null;
        return (
          <section key={overlay.slug} className="space-y-3 rounded-lg border p-4">
            <h2 className="rounded-md bg-navy px-4 py-3 text-xl font-semibold text-white">{listing.name}, {listing.city}</h2>
            <Link className="inline-flex min-h-[44px] items-center underline" href={`/therapists/${listing.slug}`}>View public listing</Link>
            <DashboardForm overlay={overlay} staleBefore={staleBefore} />
            <SharePanel slug={listing.slug} />
            <ProfileStats slug={listing.slug} />
          </section>
        );
      })}
      {!overlays.length && claims.length > 0 && (
        <ul className="space-y-2">
          {claims.map(claim => <li key={claim.reference}>{statusLabels[claim.status]} · {claim.reference}</li>)}
        </ul>
      )}
      {!overlays.length && !claims.length && (
        <>
          <p>No listing is linked to this email yet</p>
          <Link className="inline-flex min-h-[44px] items-center underline" href="/therapists">California therapist directory</Link>
        </>
      )}
    </div>
  );
}

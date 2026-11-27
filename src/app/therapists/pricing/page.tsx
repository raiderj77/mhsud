import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PRICES } from "@/lib/therapistsCore.mjs";

export const metadata = createMetadata({
  path: "/therapists/pricing",
  title: "California Therapist Listing Services and Pricing",
  description: "Free basic listings and flat-fee listing services for California therapists.",
});

export default function TherapistPricingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 text-neutral-900 dark:text-neutral-50">
      <div className="rounded-lg bg-navy px-5 py-6 text-white print:bg-transparent print:text-neutral-900">
        <Link href="/therapists" className="underline">California therapist directory</Link>
        <h1 className="mt-3 text-3xl font-bold">Therapist listing services and pricing</h1>
        <p className="mt-3 text-neutral-100 print:text-neutral-700">
          Checkout is closed pending attorney review. The verified profile also requires an independent license check.
        </p>
      </div>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {PRICES.map(item => (
          <li key={item.name} className="rounded-lg border border-neutral-400 p-4">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="mt-2 font-medium">{item.price}</p>
            {item.annual && (
              <p className="mt-1 text-neutral-700 dark:text-neutral-300">or {item.annual} (two months free on annual)</p>
            )}
            {item.paid && (
              <button type="button" disabled className="mt-3 min-h-[44px] rounded-lg bg-neutral-200 px-4 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                Checkout unavailable<span className="sr-only"> for {item.name}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
      <p className="mt-6 font-medium">{"Founding rate: subscribe at today's price and keep it for as long as your subscription stays active."}</p>
    </div>
  );
}

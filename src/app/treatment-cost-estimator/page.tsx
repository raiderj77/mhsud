import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata = createMetadata({ path: "/treatment-cost-estimator", title: "Treatment Cost Planning: Questions for Providers and Insurers", description: "Prepare a comparable treatment-cost estimate from provider and insurer information. No invented national prices, coverage guarantees or personalized treatment recommendations." });

export default function TreatmentCostPage() {
  return <article className="prose-mh max-w-3xl mx-auto px-4 sm:px-6 py-10">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Treatment cost planning", url: `${SITE_URL}/treatment-cost-estimator` }])) }} />
    <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-tight mb-5">Treatment cost planning: ask for a comparable estimate</h1>
    <p>A useful estimate needs information from the provider and, when applicable, your insurer. This page helps adults organize those questions. It does not calculate a medical need, recommend a level of care, quote current prices or determine insurance benefits.</p>
    <p>The earlier calculator used price ranges without a documented dataset and observation date. Those ranges have been removed rather than presented as current national prices.</p>
    <h2>Ask about the same scope</h2>
    <p><a href="https://alcoholtreatment.niaaa.nih.gov/what-to-know/costs-and-insurance" rel="noreferrer">NIAAA explains that treatment prices vary with provider, setting, services and individual needs</a>. Ask which services an estimate includes, the unit being charged, and whether any services are billed separately. Contact your insurer directly about coverage and your share of costs. A directory listing is not confirmation of coverage.</p>
    <h2>A comparison you can make privately</h2>
    <p>This is an original planning checklist, not an insurance or clinical assessment. Keep any personal notes on a device or paper you control; do not send health records to this site.</p>
    <ul>
      <li>Record the provider, date and who supplied the estimate.</li>
      <li>Write the period covered: one visit, a week, a month or another defined period.</li>
      <li>Separate quoted charges, insurer-confirmed coverage and amounts still unknown.</li>
      <li>List exclusions and questions to resolve before making a commitment.</li>
      <li>Ask when the quote expires and how changes in services affect the amount.</li>
    </ul>
    <p>For more questions on availability, costs and care, consult <a href="https://alcoholtreatment.niaaa.nih.gov/how-to-find-alcohol-treatment/10-questions-for-alcohol-treatment-programs" rel="noreferrer">NIAAA&apos;s questions for alcohol treatment programs</a>. Price alone cannot establish whether a service fits your needs.</p>
    <h2>Support and limits</h2>
    <p>For treatment information, call SAMHSA at <a href="tel:18006624357">1-800-662-4357</a>. For immediate danger, use emergency services. U.S. crisis support: call or text <a href="tel:988">988</a> or text HOME to <a href="sms:741741">741741</a>. See <Link href="/crisis-resources">crisis and international resources</Link>.</p>
    <p>Source alignment checked September 26, 2026 by Codex as an editorial aid, not a clinical, legal, insurance or financial review. No new review by Jason Ramirez is claimed. This page collects no answers. See <Link href="/methodology">methodology</Link> and <Link href="/privacy">privacy</Link>.</p>
  </article>;
}

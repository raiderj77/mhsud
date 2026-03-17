import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/treatment-cost-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "treatment-cost-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/treatment-cost-guide",
  title: "Addiction Treatment Costs: What to Expect and How to Pay",
  description:
    "Treatment costs range from free to $30,000+. Learn the cost of detox, inpatient, outpatient, and how insurance, Medicaid, and sliding scale options work.",
  keywords: [
    "addiction treatment cost",
    "rehab cost",
    "how much is rehab",
    "treatment cost estimator",
    "can I afford rehab",
    "insurance covers addiction treatment",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Does insurance cover addiction treatment?",
    answer:
      "Yes. Under the Affordable Care Act (ACA) and the Mental Health Parity and Addiction Equity Act, most health insurance plans are required to cover substance use disorder treatment at the same level as other medical conditions. This includes Marketplace plans, employer-sponsored insurance, Medicaid, and Medicare. Coverage typically includes detox, inpatient, outpatient, and medication-assisted treatment. However, specific coverage levels, copays, and network restrictions vary by plan. Contact your insurer directly or ask the treatment facility to verify your benefits before admission.",
  },
  {
    question: "How much does rehab cost without insurance?",
    answer:
      "Without insurance, treatment costs vary widely by level of care. Outpatient programs may cost $1,000\u2013$10,000 for a course of treatment. Intensive outpatient programs (IOP) typically range from $3,000\u2013$15,000. Residential (inpatient) programs range from $5,000\u2013$30,000 or more for a 30-day stay, with luxury facilities charging significantly more. Medical detox costs $250\u2013$800 per day. However, many facilities offer sliding scale fees, payment plans, and scholarship programs. State-funded programs and SAMHSA grant-funded facilities may offer treatment at no cost.",
  },
  {
    question: "What is the cheapest way to get treatment?",
    answer:
      "The most affordable options include: state-funded treatment programs (often free or very low cost), SAMHSA-funded facilities, community health centers with behavioral health services, 12-step programs like AA and NA (free), and SMART Recovery meetings (free). Medicaid covers addiction treatment in all 50 states. Many private facilities offer sliding scale fees based on income. Telehealth options have also expanded access to affordable outpatient counseling. Use SAMHSA\u2019s treatment locator at findtreatment.gov or call 1-800-662-4357 to find free or low-cost options near you.",
  },
  {
    question: "Is addiction treatment worth the cost?",
    answer:
      "From a purely economic perspective, research consistently shows that addiction treatment saves money. NIDA estimates that every dollar invested in treatment yields a $4\u2013$7 return in reduced drug-related crime, criminal justice costs, and theft. When healthcare savings are included, the return can exceed 12:1. At the individual level, the cost of untreated addiction \u2014 in healthcare, legal fees, lost income, and relationship damage \u2014 almost always exceeds the cost of treatment. Treatment also significantly reduces risk of overdose, the leading cause of accidental death in the United States.",
  },
];

export default function TreatmentCostGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Addiction Treatment Costs: What to Expect and How to Pay", description: "Treatment costs range from free to $30,000+. Learn the cost of detox, inpatient, outpatient, and how insurance, Medicaid, and sliding scale options work.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Treatment Cost Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Addiction Treatment Costs: What to Expect and How to Pay
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Cost is one of the most common barriers to seeking addiction treatment &mdash; and one of the most misunderstood. Treatment costs range from free to over $30,000, depending on the level of care, duration, and setting. But the cost of not treating a substance use disorder is almost always higher: the National Institute on Drug Abuse (NIDA) estimates that untreated addiction costs the United States over $600 billion annually in healthcare, criminal justice, and lost productivity.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational purposes only and does not constitute medical or mental health advice. Treatment costs vary by location, provider, and individual circumstances. Always verify costs and coverage directly with treatment providers and your insurance company.
            </p>
          </div>

          <section>
            <h2>Treatment costs by level of care</h2>
            <p>
              Addiction treatment exists on a continuum of care, from outpatient counseling to full residential programs. Understanding the cost range for each level helps you evaluate options realistically. The <Link href="/treatment-cost-estimator" className="text-sage-600 dark:text-sage-400 underline">treatment cost estimator</Link> can help you explore these ranges based on your specific situation.
            </p>
            <ul>
              <li><strong>Outpatient treatment ($1,000&ndash;$10,000):</strong> Typically involves individual counseling, group therapy, and possibly medication management on a schedule of 1&ndash;3 sessions per week. You continue living at home and can often maintain work or school. This is the most affordable and flexible option, appropriate for mild to moderate substance use disorders.</li>
              <li><strong>Intensive outpatient programs / IOP ($3,000&ndash;$15,000):</strong> More structured than standard outpatient, with 9&ndash;20 hours of programming per week, usually over 8&ndash;12 weeks. Sessions typically occur in the morning or evening, allowing you to maintain some daily responsibilities.</li>
              <li><strong>Partial hospitalization / PHP ($7,000&ndash;$20,000):</strong> Sometimes called &quot;day treatment,&quot; this involves 5&ndash;7 days per week of structured programming for 4&ndash;8 hours per day. You return home or to a sober living environment at night.</li>
              <li><strong>Residential / inpatient ($5,000&ndash;$30,000+):</strong> Full-time treatment in a structured living environment, typically for 28&ndash;90 days. Includes 24/7 support, individual and group therapy, medical monitoring, and life skills programming. Luxury and executive facilities can cost $50,000&ndash;$100,000+.</li>
              <li><strong>Medical detox ($250&ndash;$800 per day):</strong> Medically supervised withdrawal management, typically lasting 3&ndash;10 days depending on the substance. This is often the first step before entering a treatment program and is medically necessary for alcohol and benzodiazepine dependence.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How insurance covers addiction treatment</h2>
            <p>
              Two landmark federal laws ensure that most insurance plans cover addiction treatment:
            </p>
            <ul>
              <li><strong>Mental Health Parity and Addiction Equity Act (2008):</strong> Requires insurers to cover substance use disorder treatment at the same level as other medical conditions. This means copays, deductibles, and visit limits for addiction treatment cannot be more restrictive than those for physical health conditions.</li>
              <li><strong>Affordable Care Act (2010):</strong> Made substance use disorder treatment one of the 10 essential health benefits that all ACA-compliant plans must cover. This includes Marketplace plans, Medicaid expansion plans, and plans sold to small businesses.</li>
            </ul>
            <p>
              In practice, this means most people with health insurance have coverage for some level of addiction treatment. However, coverage varies significantly between plans. Key questions to ask your insurer include:
            </p>
            <ul>
              <li>What levels of care are covered (outpatient, IOP, residential, detox)?</li>
              <li>Is prior authorization required?</li>
              <li>What is my copay or coinsurance for behavioral health services?</li>
              <li>Are there in-network treatment facilities near me?</li>
              <li>How many days of residential treatment are covered?</li>
              <li>Is medication-assisted treatment (MAT) covered?</li>
            </ul>
            <p>
              Most treatment facilities have admissions staff who will verify your insurance benefits at no cost before you commit to treatment.
            </p>
          </section>

          <section>
            <h2>Medicaid and state-funded options</h2>
            <p>
              Medicaid covers addiction treatment in all 50 states. In states that expanded Medicaid under the ACA, adults earning up to 138% of the federal poverty level qualify for coverage that includes substance use disorder services.
            </p>
            <p>
              Even in states that did not expand Medicaid, state-funded treatment programs exist. Every state receives federal block grants from SAMHSA specifically for substance use treatment services. These programs serve people who are uninsured, underinsured, or unable to pay.
            </p>
            <p>
              To find state-funded treatment options, call SAMHSA&apos;s National Helpline at 1-800-662-4357 or visit findtreatment.gov. The helpline is free, confidential, available 24/7, and available in English and Spanish.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Sliding scale and financial assistance</h2>
            <p>
              Many treatment facilities offer financial flexibility beyond insurance:
            </p>
            <ul>
              <li><strong>Sliding scale fees:</strong> Costs are adjusted based on your income and ability to pay. Some community health centers and nonprofit treatment programs use this model.</li>
              <li><strong>Payment plans:</strong> Many residential facilities offer payment plans that allow you to spread the cost over months or years, often with no interest.</li>
              <li><strong>Scholarship and grant programs:</strong> Some treatment centers maintain scholarship funds for individuals who cannot afford treatment. Ask about these during the intake process.</li>
              <li><strong>Employee Assistance Programs (EAP):</strong> Many employers offer confidential EAP benefits that include free short-term counseling and referrals to treatment programs, often covering the first several sessions at no cost.</li>
              <li><strong>Free support groups:</strong> Programs like Alcoholics Anonymous, Narcotics Anonymous, and SMART Recovery are free and available in most communities. While not a substitute for clinical treatment in all cases, they provide valuable ongoing support.</li>
            </ul>
          </section>

          <section>
            <h2>The cost of not getting treatment</h2>
            <p>
              When evaluating treatment costs, it is important to weigh them against the cost of continued substance use. NIDA research shows that untreated substance use disorders generate enormous costs at both the individual and societal level:
            </p>
            <ul>
              <li><strong>Healthcare:</strong> Alcohol-related emergency department visits cost an average of $3,000&ndash;$5,000 each. Chronic conditions caused by substance use (liver disease, cardiovascular disease, mental health disorders) generate ongoing costs.</li>
              <li><strong>Legal system:</strong> A single DUI costs $10,000&ndash;$25,000 in fines, legal fees, and increased insurance premiums. Drug-related charges can be far higher.</li>
              <li><strong>Lost income:</strong> Substance use disorders reduce earning potential through missed work, job loss, and impaired career advancement.</li>
              <li><strong>Relationships:</strong> Divorce, family court, and custody proceedings are among the most expensive consequences of untreated addiction.</li>
            </ul>
            <p>
              By contrast, NIDA estimates that every dollar invested in addiction treatment yields a return of $4&ndash;$7 in reduced drug-related crime alone. When healthcare savings are included, the return can exceed 12 to 1. The <Link href="/treatment-cost-estimator" className="text-sage-600 dark:text-sage-400 underline">treatment cost estimator</Link> can help you compare treatment costs against the cost of continued use.
            </p>
          </section>

          <section>
            <h2>How to get started</h2>
            <p>
              If cost has been preventing you from seeking treatment, here are practical next steps:
            </p>
            <ul>
              <li>Call SAMHSA&apos;s helpline (1-800-662-4357) to learn about free and low-cost options in your area</li>
              <li>Contact your insurance company to understand your behavioral health benefits</li>
              <li>Ask treatment facilities about financial assistance, sliding scale fees, and payment plans</li>
              <li>Look into Medicaid eligibility if you are uninsured</li>
              <li>Consider starting with free resources (AA, NA, SMART Recovery) while exploring treatment options</li>
            </ul>
            <p>
              If you are unsure whether your drinking or substance use warrants treatment, the <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT alcohol screening</Link> or <Link href="/dast-10-drug-screening" className="text-sage-600 dark:text-sage-400 underline">DAST-10 drug screening</Link> can provide a structured assessment to share with a healthcare provider.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Estimate your treatment costs</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. Explore costs for different levels of care and financial assistance options.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/treatment-cost-estimator" className="btn-primary text-sm">Open the Treatment Cost Estimator</Link>
              <Link href="/audit-alcohol-test" className="btn-primary text-sm">Take the AUDIT Screening</Link>
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

          {/* FAQ */}
          <section className="not-prose mt-12">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">Frequently Asked Questions</h2>
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="card mb-2 group">
                <summary className="p-4 cursor-pointer flex justify-between items-center text-sm font-semibold text-neutral-700 dark:text-neutral-200 list-none">
                  {faq.question}
                  <svg className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </section>

          {/* Related Tools */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/treatment-cost-estimator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Treatment Cost Estimator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Estimate costs for different levels of addiction treatment</p>
              </Link>
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-developed alcohol use screening assessment</p>
              </Link>
              <Link href="/dast-10-drug-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Drug Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated drug use screening assessment</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-are-substance-use-disorders" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Are Substance Use Disorders?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding addiction as a medical condition</p>
              </Link>
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Stages of Change in Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">The 5 stages of change model for addiction recovery</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

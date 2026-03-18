import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/money-saved-recovery-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "money-saved-recovery-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/money-saved-recovery-guide",
  title: "Money Saved in Recovery: How Sobriety Changes Your Finances",
  description:
    "See how much money you save by not drinking or using. A recovery calculator shows the financial impact of sobriety.",
  keywords: [
    "money saved sobriety",
    "cost of drinking calculator",
    "how much do I spend on alcohol",
    "sobriety savings",
    "recovery calculator",
    "financial benefits of sobriety",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How much does the average person spend on alcohol?",
    answer:
      "Bureau of Labor Statistics data shows the average American household spends approximately $500\u2013$600 per month on alcoholic beverages, including bars, restaurants, and retail purchases. For individuals with alcohol use disorder, spending often exceeds $1,000 per month when factoring in increased consumption and associated costs like late-night food or transportation.",
  },
  {
    question: "Does sobriety really save money?",
    answer:
      "Yes. Direct savings from not purchasing alcohol are substantial, but hidden savings are even larger: reduced healthcare expenses, lower insurance premiums, fewer legal costs, and improved work performance leading to better income. Most people in recovery report noticeable financial improvement within the first few months.",
  },
  {
    question: "What are the hidden costs of drinking?",
    answer:
      "Hidden costs include DUI charges ($10,000\u2013$25,000 on average), increased health insurance premiums, medical costs for alcohol-related conditions, lost wages from missed work, relationship costs such as therapy or divorce, and impulse purchases made while intoxicated. These hidden costs often exceed the direct cost of alcohol by two to five times.",
  },
  {
    question: "How do I calculate my savings?",
    answer:
      "Estimate your average daily or weekly spending on alcohol before getting sober, then multiply by the number of days since your sobriety date. The MindCheck Tools money saved in recovery calculator does this automatically. Enter your sobriety date and estimated previous spending to see your total savings instantly. Your data stays in your browser.",
  },
];

export default function MoneySavedRecoveryGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Money Saved in Recovery: How Sobriety Changes Your Finances", description: "See how much money you save by not drinking or using. A recovery calculator shows the financial impact of sobriety.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Money Saved in Recovery", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Money Saved in Recovery: How Sobriety Changes Your Finances
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            One of the most immediate and tangible benefits of sobriety is financial. The average American household spends $500&ndash;$600 per month on alcohol, according to Bureau of Labor Statistics data &mdash; and that figure only captures what is spent at the register. When you add in DUIs, healthcare costs, lost productivity, and impulse spending, the true cost of drinking or substance use can be staggering. A recovery savings calculator makes these numbers visible, turning an abstract benefit into concrete motivation.
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
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>How much does drinking really cost?</h2>
            <p>
              The direct cost of alcohol is straightforward to calculate: the price of what you buy multiplied by how often you buy it. For a person who drinks two glasses of wine per night at home, that might be $200&ndash;$300 per month. For someone who frequents bars or drinks heavily, the figure can easily reach $800&ndash;$1,500 per month.
            </p>
            <p>
              But the direct purchase price is only the beginning. The Bureau of Labor Statistics Consumer Expenditure Survey shows that alcohol represents one of the largest discretionary spending categories for American households. When you factor in related spending &mdash; rideshares after drinking, late-night food orders, hangover remedies, and increased tobacco use &mdash; the true monthly cost often doubles.
            </p>
            <p>
              The <Link href="/money-saved-recovery-calculator" className="text-sage-600 dark:text-sage-400 underline">money saved in recovery calculator</Link> helps you put a specific number on what sobriety is saving you. Enter your sobriety date, your estimated previous daily or weekly spending, and instantly see your total savings to date.
            </p>
          </section>

          <section>
            <h2>The hidden costs most people overlook</h2>
            <p>The true financial toll of substance use extends far beyond the purchase price. These hidden costs are often the ones that cause the most long-term financial damage:</p>
            <ul>
              <li><strong>DUI charges:</strong> A single DUI costs an average of $10,000&ndash;$25,000 when you include fines, legal fees, increased insurance premiums, ignition interlock devices, and potential lost income. Multiple offenses can exceed $50,000.</li>
              <li><strong>Healthcare costs:</strong> Alcohol-related medical conditions &mdash; liver disease, cardiovascular problems, injuries from falls or accidents &mdash; generate significant out-of-pocket expenses even with insurance. The CDC estimates that excessive alcohol use costs the US $249 billion annually in healthcare spending.</li>
              <li><strong>Lost productivity:</strong> Hangovers, sick days, reduced focus, and impaired decision-making at work all translate to lower earnings over time. One study estimated that alcohol-related productivity losses cost the US economy $179 billion per year.</li>
              <li><strong>Insurance premiums:</strong> DUIs and alcohol-related health conditions increase both auto and health insurance premiums, sometimes for years after the incident.</li>
              <li><strong>Relationship costs:</strong> Couples therapy, divorce proceedings, and the financial fallout of damaged relationships are rarely factored into the cost of drinking but can be among the largest expenses.</li>
              <li><strong>Impulse spending:</strong> Alcohol impairs judgment and lowers inhibitions, leading to unplanned purchases, gambling, and financial decisions you would not make sober.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How a recovery savings calculator works</h2>
            <p>
              The concept is simple but powerful: take what you used to spend on alcohol or substances per day (or per week), multiply it by the number of days since your sobriety date, and you have your total savings. The <Link href="/money-saved-recovery-calculator" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools money saved in recovery calculator</Link> does this math automatically and displays your savings in real time.
            </p>
            <p>
              What makes this tool useful is not the math itself &mdash; it is the visibility. Seeing a specific dollar amount grow over time provides a concrete, positive reinforcement for sobriety. Research on behavioral economics shows that making abstract benefits tangible significantly increases motivation for behavior change (Thaler &amp; Sunstein, 2008).
            </p>
            <p>
              The calculator runs entirely in your browser. Your data is never stored or transmitted, and no account is required.
            </p>
          </section>

          <section>
            <h2>Financial recovery as a motivator</h2>
            <p>
              For many people in recovery, financial improvement is one of the first tangible signs that things are getting better. While emotional and physical recovery can feel slow and uneven, the bank account does not lie. Within the first month of sobriety, most people notice meaningful differences in their available cash.
            </p>
            <p>
              This financial clarity extends beyond simple savings. People in recovery often report:
            </p>
            <ul>
              <li><strong>Better budgeting:</strong> Without the cognitive impairment and impulsivity associated with substance use, financial decisions improve.</li>
              <li><strong>Reduced debt:</strong> Money that previously went to drinking can be redirected toward paying down credit cards, medical bills, or legal fees accumulated during active use.</li>
              <li><strong>Improved earning potential:</strong> Better attendance, focus, and performance at work can lead to raises, promotions, or the ability to pursue better employment.</li>
              <li><strong>Rebuilt credit:</strong> Consistent bill payment and reduced debt gradually improve credit scores that may have suffered during active addiction.</li>
              <li><strong>Emergency savings:</strong> For the first time in years, many people in recovery can build a financial cushion.</li>
            </ul>
            <p>
              The <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline">sobriety calculator</Link> tracks your time in recovery alongside these financial gains, providing a comprehensive picture of your progress.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What to do with your savings</h2>
            <p>
              Having a plan for the money you save in recovery can reinforce the positive cycle. Financial experts who work with people in recovery often recommend this prioritization:
            </p>
            <ul>
              <li><strong>Build a small emergency fund:</strong> Even $500&ndash;$1,000 in savings reduces stress and decreases the likelihood that a financial emergency becomes a relapse trigger.</li>
              <li><strong>Pay down high-interest debt:</strong> Credit cards and payday loans accumulated during active use often carry interest rates that compound the financial damage.</li>
              <li><strong>Invest in recovery:</strong> Therapy, support group resources, healthy activities, and self-care are investments with high returns.</li>
              <li><strong>Reward milestones:</strong> Using some savings to celebrate 30, 60, or 90 days with a meaningful (non-substance-related) experience reinforces the connection between sobriety and a better life.</li>
            </ul>
          </section>

          <section>
            <h2>The cost of not getting help</h2>
            <p>
              If you are still weighing whether to pursue recovery, the financial perspective can be clarifying. The National Institute on Drug Abuse (NIDA) estimates that substance use disorders cost the United States over $600 billion annually in healthcare, criminal justice, and lost productivity. At the individual level, that translates to tens of thousands of dollars per year in direct and indirect costs.
            </p>
            <p>
              Meanwhile, the cost of treatment &mdash; while significant &mdash; is typically a fraction of the cost of continued use. The <Link href="/treatment-cost-estimator" className="text-sage-600 dark:text-sage-400 underline">treatment cost estimator</Link> can help you understand what different levels of care cost and what financial assistance may be available.
            </p>
            <p>
              If you are concerned about your drinking patterns, a structured screening like the <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT alcohol screening</Link> can provide useful information to share with a healthcare provider.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">See how much you&apos;ve saved</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. Enter your sobriety date and spending to see your total savings.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/money-saved-recovery-calculator" className="btn-primary text-sm">Open the Savings Calculator</Link>
              <Link href="/sobriety-calculator" className="btn-primary text-sm">Track Your Sobriety Days</Link>
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
              <Link href="/money-saved-recovery-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Money Saved in Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Calculate how much you have saved since getting sober</p>
              </Link>
              <Link href="/sobriety-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Sobriety Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Track your sobriety days, weeks, and months</p>
              </Link>
              <Link href="/treatment-cost-estimator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Treatment Cost Estimator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Estimate costs for different levels of addiction treatment</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/sobriety-calculator-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Why Tracking Sober Days Matters</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">The psychology behind counting sobriety milestones</p>
              </Link>
              <Link href="/blog/quit-drinking-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Happens When You Stop Drinking</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Hour-by-hour timeline of alcohol recovery</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

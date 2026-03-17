import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/withdrawal-symptoms-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "withdrawal-symptoms-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/withdrawal-symptoms-guide",
  title: "Withdrawal Symptoms: What to Expect and When to Seek Medical Help",
  description:
    "Withdrawal symptoms vary by substance and can range from uncomfortable to life-threatening. Learn what to expect, typical timelines, and when medical supervision is essential.",
  keywords: [
    "withdrawal symptoms",
    "alcohol withdrawal timeline",
    "drug withdrawal symptoms",
    "detox symptoms",
    "withdrawal timeline",
    "is withdrawal dangerous",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How long does withdrawal last?",
    answer:
      "Withdrawal duration depends on the substance, how long and how heavily it was used, and individual factors. Alcohol withdrawal typically peaks at 24\u201372 hours and resolves within 5\u20137 days for acute symptoms. Opioid withdrawal peaks at 1\u20133 days and resolves in about a week. Post-acute withdrawal symptoms (PAWS) \u2014 including mood instability, sleep disruption, and cravings \u2014 can persist for weeks to months.",
  },
  {
    question: "Is withdrawal dangerous?",
    answer:
      "Withdrawal from alcohol and benzodiazepines can be life-threatening and should always involve medical supervision. Seizures, delirium tremens (DTs), and cardiovascular complications are the primary risks. Opioid withdrawal is extremely uncomfortable but rarely fatal on its own, though dehydration and complications can occur. Stimulant withdrawal is generally not medically dangerous but can produce severe depression.",
  },
  {
    question: "Can I detox at home?",
    answer:
      "It depends on the substance and severity. Home detox from alcohol or benzodiazepines is medically inadvisable due to seizure risk. Mild cannabis or stimulant withdrawal may be manageable at home with support. A healthcare provider can assess your situation and recommend the appropriate level of care \u2014 from outpatient monitoring to medically supervised detox.",
  },
  {
    question: "What is post-acute withdrawal syndrome (PAWS)?",
    answer:
      "PAWS refers to withdrawal symptoms that persist beyond the acute phase \u2014 typically lasting weeks to months after the substance is cleared from your system. Common PAWS symptoms include mood swings, anxiety, irritability, sleep disturbance, difficulty concentrating, and intermittent cravings. PAWS is thought to result from the brain gradually rebalancing neurotransmitter systems that adapted to chronic substance use.",
  },
];

export default function WithdrawalSymptomsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Withdrawal Symptoms: What to Expect and When to Seek Medical Help", description: "Learn what withdrawal symptoms look like for different substances, typical timelines, and when medical supervision is essential.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Withdrawal Symptoms Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Withdrawal Symptoms: What to Expect and When to Seek Medical Help
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            When your body has adapted to regular substance use and that substance is reduced or stopped, withdrawal symptoms occur. These symptoms are your nervous system recalibrating &mdash; and depending on the substance, they can range from mildly uncomfortable to medically dangerous. Understanding what to expect and when to seek help can make the difference between a safe transition and a medical emergency.
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

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational purposes only and does not constitute medical or mental health advice. <strong>Withdrawal from alcohol and benzodiazepines can be life-threatening.</strong> Always consult a qualified healthcare professional before stopping any substance.
            </p>
          </div>

          <section>
            <h2>What causes withdrawal symptoms?</h2>
            <p>
              Repeated substance use causes the brain to adapt by adjusting its own neurotransmitter production and receptor sensitivity. When the substance is removed, the brain is temporarily in a state of imbalance &mdash; overexcited or underregulated depending on the substance class. This imbalance produces withdrawal symptoms.
            </p>
            <p>
              Physical dependence (the body&apos;s adaptation to a substance) is distinct from addiction (compulsive use despite consequences), though they often co-occur. Someone taking prescribed benzodiazepines daily for months will develop physical dependence and may experience withdrawal even without addiction.
            </p>
          </section>

          <section>
            <h2>Withdrawal timelines by substance</h2>

            <h3>Alcohol withdrawal</h3>
            <ul>
              <li><strong>6&ndash;12 hours:</strong> Tremors, anxiety, nausea, sweating, elevated heart rate</li>
              <li><strong>12&ndash;24 hours:</strong> Symptoms intensify; hallucinations possible in heavy drinkers</li>
              <li><strong>24&ndash;72 hours:</strong> Peak risk period for seizures and delirium tremens (DTs)</li>
              <li><strong>5&ndash;7 days:</strong> Acute symptoms typically resolve</li>
              <li><strong>Weeks&ndash;months:</strong> Post-acute withdrawal (anxiety, sleep disruption, cravings)</li>
            </ul>
            <p><strong>Alcohol withdrawal can be fatal.</strong> Anyone with a history of heavy daily drinking should detox under medical supervision.</p>

            <h3>Opioid withdrawal</h3>
            <ul>
              <li><strong>8&ndash;24 hours (short-acting):</strong> Muscle aches, anxiety, sweating, runny nose, yawning</li>
              <li><strong>1&ndash;3 days:</strong> Peak symptoms &mdash; nausea, vomiting, diarrhea, abdominal cramps, dilated pupils</li>
              <li><strong>5&ndash;7 days:</strong> Acute symptoms subside</li>
              <li><strong>Weeks&ndash;months:</strong> Insomnia, irritability, cravings, depression</li>
            </ul>

            <h3>Benzodiazepine withdrawal</h3>
            <ul>
              <li><strong>1&ndash;4 days:</strong> Rebound anxiety, insomnia, irritability</li>
              <li><strong>1&ndash;2 weeks:</strong> Peak symptoms &mdash; tremors, panic, seizure risk</li>
              <li><strong>Weeks&ndash;months:</strong> Protracted withdrawal can last months; gradual taper essential</li>
            </ul>
            <p><strong>Never stop benzodiazepines abruptly.</strong> Medical supervision and gradual tapering are required.</p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How the MindCheck Tools withdrawal timeline helps</h2>
            <p>
              The <Link href="/withdrawal-timeline" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools withdrawal timeline</Link> provides a substance-specific, day-by-day overview of what withdrawal symptoms to expect and when. It helps you understand what is happening in your body and when the worst is typically over.
            </p>
            <p>
              The timeline is informational &mdash; it does not replace medical guidance. But knowing that your symptoms are expected and temporary can reduce panic and help you prepare. You can also share the timeline with a support person so they know what to watch for.
            </p>
            <p>
              If you are tracking your progress after stopping, the <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline">sobriety calculator</Link> shows how many days you have completed, and the <Link href="/health-recovery-timeline" className="text-sage-600 dark:text-sage-400 underline">health recovery timeline</Link> shows the physical improvements happening at each stage.
            </p>
          </section>

          <section>
            <h2>Post-acute withdrawal syndrome (PAWS)</h2>
            <p>
              After acute withdrawal resolves, many people experience a longer phase of symptoms known as post-acute withdrawal syndrome. PAWS can last weeks to months and includes:
            </p>
            <ul>
              <li>Mood swings and emotional instability</li>
              <li>Anxiety and irritability that come in waves</li>
              <li>Sleep disturbances (insomnia, vivid dreams)</li>
              <li>Difficulty concentrating and thinking clearly</li>
              <li>Intermittent cravings that can feel sudden and intense</li>
              <li>Low energy and motivation</li>
            </ul>
            <p>
              PAWS is not a sign of failure &mdash; it is the brain gradually rebalancing. Understanding that these symptoms are temporary and expected helps prevent them from triggering relapse. The <Link href="/withdrawal-timeline" className="text-sage-600 dark:text-sage-400 underline">withdrawal timeline tool</Link> includes PAWS information for each substance.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>When to seek medical help immediately</h2>
            <p>Go to an emergency room or call 911 if you or someone you know is experiencing:</p>
            <ul>
              <li>Seizures or convulsions</li>
              <li>Severe confusion, disorientation, or hallucinations</li>
              <li>Chest pain or irregular heartbeat</li>
              <li>High fever (above 101&deg;F / 38.3&deg;C)</li>
              <li>Severe vomiting or diarrhea leading to dehydration</li>
              <li>Suicidal thoughts or self-harm urges</li>
              <li>Loss of consciousness</li>
            </ul>
            <p>
              For non-emergency support, SAMHSA&apos;s National Helpline (1-800-662-4357) provides free, confidential referrals to local treatment facilities, support groups, and community-based organizations 24/7.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Understand what to expect during withdrawal</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/withdrawal-timeline" className="btn-primary text-sm">View the Withdrawal Timeline</Link>
              <Link href="/health-recovery-timeline" className="btn-primary text-sm">See Health Recovery Milestones</Link>
            </div>
          </div>

          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

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

          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/withdrawal-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Withdrawal Timeline</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Day-by-day withdrawal symptom expectations</p>
              </Link>
              <Link href="/health-recovery-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Health Recovery Timeline</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Physical improvements after quitting</p>
              </Link>
              <Link href="/sobriety-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Sobriety Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Track your sobriety milestones</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/quit-drinking-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Happens When You Stop Drinking</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Hour-by-hour alcohol recovery timeline</p>
              </Link>
              <Link href="/blog/relapse-prevention-plan-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Build a Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Prepare for high-risk situations in recovery</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

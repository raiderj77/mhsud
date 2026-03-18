import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/health-recovery-timeline-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "health-recovery-timeline-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/health-recovery-timeline-guide",
  title: "Health Recovery After Quitting: What Happens to Your Body",
  description:
    "Your body starts healing within hours of your last drink or use. See the timeline of physical health improvements in recovery.",
  keywords: [
    "health recovery after quitting alcohol",
    "body recovery after quitting drugs",
    "how long to recover from alcohol",
    "health benefits of sobriety",
    "recovery timeline",
    "body healing after sobriety",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How long does it take for the liver to recover?",
    answer:
      "For fatty liver disease, significant improvement can occur within 2\u20134 weeks of abstinence, with full reversal often possible within 2\u20133 months. More advanced liver disease may take 6\u201312 months. Cirrhosis is generally not fully reversible, though stopping alcohol prevents further damage and may improve function.",
  },
  {
    question: "Will my brain recover after quitting?",
    answer:
      "Yes, in most cases. Brain imaging shows cognitive function, memory, and brain volume begin improving within weeks and continue for months to years. Some improvements are noticeable within 2 weeks, with more substantial recovery at 3\u20136 months. The extent depends on duration and severity of use, age, and overall health.",
  },
  {
    question: "When will I start feeling better after quitting?",
    answer:
      "Most people notice improvements in sleep, energy, and mental clarity within 1\u20132 weeks. The first 72 hours can be physically uncomfortable due to withdrawal. After that, improvements come in waves: better sleep by week 1\u20132, improved mood by weeks 2\u20134, and noticeable skin and energy changes by month 1\u20132. Consult a provider before stopping.",
  },
  {
    question: "Do all health effects reverse?",
    answer:
      "Not all effects are fully reversible, but most improve significantly with sustained sobriety. Fatty liver disease, blood pressure, sleep disruption, and immune suppression typically reverse with abstinence. Conditions like cirrhosis or neuropathy may only partially improve. The earlier you stop, the more reversible the damage tends to be.",
  },
];

export default function HealthRecoveryTimelineGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Health Recovery After Quitting: What Happens to Your Body", description: "Your body starts healing within hours of your last drink or use. See the timeline of physical health improvements in recovery.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Health Recovery Timeline", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Health Recovery After Quitting: What Happens to Your Body
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Your body begins healing within hours of your last drink or use. Blood pressure starts to normalize within 20 minutes. Blood sugar stabilizes within a day. Nerve endings begin regenerating within 48 hours. The timeline of physical recovery is one of the most encouraging aspects of sobriety &mdash; and understanding it can provide powerful motivation during the difficult early days of recovery.
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
              This article is for informational purposes only and does not constitute medical or mental health advice. Alcohol and benzodiazepine withdrawal can be medically dangerous. Always consult a healthcare provider before stopping use of any substance.
            </p>
          </div>

          <section>
            <h2>The first 24 hours: your body starts responding</h2>
            <p>
              The human body is remarkably resilient, and recovery begins almost immediately. Within 20 minutes of your last drink, your heart rate and blood pressure begin to normalize as your body is no longer processing a depressant. This is measurable &mdash; not metaphorical.
            </p>
            <p>
              Within 8&ndash;12 hours, blood alcohol levels drop to zero and the body begins to clear acetaldehyde, the toxic byproduct of alcohol metabolism that contributes to hangover symptoms and long-term organ damage. Blood sugar levels, which alcohol disrupts by interfering with glucose production in the liver, start to stabilize.
            </p>
            <p>
              By the 24-hour mark, your body has cleared the last of the alcohol and is beginning its repair processes in earnest. However, this is also when withdrawal symptoms may begin for heavy or long-term drinkers &mdash; a reminder that medical supervision during detox is important. The <Link href="/withdrawal-timeline" className="text-sage-600 dark:text-sage-400 underline">withdrawal timeline tool</Link> can help you understand what to expect.
            </p>
          </section>

          <section>
            <h2>Days 2 through 7: the hardest stretch with real progress</h2>
            <p>
              At 48 hours, nerve endings that were suppressed by chronic alcohol use begin to regenerate. This is why many people in early recovery report heightened sensitivity to touch, sound, and light &mdash; the nervous system is &quot;waking up&quot; after being dampened.
            </p>
            <p>
              By 72 hours, the body has substantially completed its acute detoxification process. The liver is actively clearing stored toxins, and the digestive system begins to recover from alcohol&apos;s inflammatory effects on the stomach lining and intestines.
            </p>
            <p>
              By the end of the first week, most people notice significant improvements in sleep quality. While alcohol may help you fall asleep faster, it severely disrupts REM sleep &mdash; the restorative phase critical for memory consolidation and emotional regulation. According to the National Institute on Alcohol Abuse and Alcoholism (NIAAA), sleep architecture typically begins normalizing within 5&ndash;7 days of abstinence.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Weeks 2 through 4: visible changes emerge</h2>
            <p>
              The second through fourth weeks of sobriety bring changes that are often visible to others, not just felt internally:
            </p>
            <ul>
              <li><strong>Skin improvement:</strong> Alcohol dehydrates skin and dilates blood vessels, causing redness and puffiness. Within 2&ndash;3 weeks of sobriety, hydration improves and facial puffiness typically reduces noticeably.</li>
              <li><strong>Weight changes:</strong> Alcohol contains 7 calories per gram (nearly as much as fat) and is often consumed alongside high-calorie mixers and late-night food. Many people see weight changes within the first month, though individual results vary.</li>
              <li><strong>Digestive improvement:</strong> Acid reflux, bloating, and irregular bowel movements often improve significantly as the stomach lining heals and the gut microbiome begins to rebalance.</li>
              <li><strong>Mood stabilization:</strong> While early recovery often involves mood swings, by weeks 2&ndash;4, neurotransmitter levels (particularly GABA and glutamate) begin to rebalance, and baseline mood typically improves.</li>
              <li><strong>Liver fat reduction:</strong> Studies published in the journal <em>Hepatology</em> show that liver fat can decrease by up to 15&ndash;20% within one month of abstinence in people with alcohol-related fatty liver disease.</li>
            </ul>
            <p>
              The <Link href="/health-recovery-timeline" className="text-sage-600 dark:text-sage-400 underline">health recovery timeline tool</Link> helps you track these improvements against your own sobriety date, showing you exactly where you are in the healing process.
            </p>
          </section>

          <section>
            <h2>Months 1 through 3: cognitive function rebounds</h2>
            <p>
              One of the most significant improvements during this period is cognitive recovery. Chronic alcohol use impairs the prefrontal cortex, affecting decision-making, impulse control, working memory, and attention. Research using neuroimaging has shown measurable improvements in brain volume and function within 2&ndash;3 months of sobriety.
            </p>
            <p>
              Specific cognitive improvements during this period include:
            </p>
            <ul>
              <li><strong>Improved concentration and attention span:</strong> The ability to focus on tasks for extended periods returns as the brain heals.</li>
              <li><strong>Better short-term memory:</strong> The hippocampus, which is particularly vulnerable to alcohol damage, shows recovery of function.</li>
              <li><strong>Clearer thinking:</strong> The persistent &quot;brain fog&quot; that many heavy drinkers experience gradually lifts.</li>
              <li><strong>Emotional regulation:</strong> The ability to manage emotions without being overwhelmed improves as the amygdala and prefrontal cortex recover their normal functioning relationship.</li>
            </ul>
            <p>
              The immune system also strengthens during this period. According to the CDC, chronic alcohol use weakens immune function, increasing susceptibility to infections. After 2&ndash;3 months of sobriety, immune markers typically return to normal ranges.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Six months to one year: major health milestones</h2>
            <p>
              At the six-month mark, many of the body&apos;s systems have substantially recovered. Liver function tests often return to normal ranges. Blood pressure and cholesterol levels improve. The risk of alcohol-related cancers begins to decrease, though this continues over many years.
            </p>
            <p>
              At one year, the health benefits are substantial:
            </p>
            <ul>
              <li><strong>Heart disease risk:</strong> Research published in the <em>European Heart Journal</em> indicates that cardiovascular risk begins declining within months of stopping heavy drinking, with significant reduction by the one-year mark.</li>
              <li><strong>Cancer risk:</strong> The International Agency for Research on Cancer (IARC) lists alcohol as a Group 1 carcinogen. While cancer risk reduction takes years to fully materialize, the process begins as soon as you stop drinking.</li>
              <li><strong>Liver recovery:</strong> For those with fatty liver or early-stage liver disease, substantial healing has typically occurred. The liver can regenerate up to 75% of its mass.</li>
              <li><strong>Brain volume:</strong> MRI studies show measurable increases in brain volume and cortical thickness after one year of sobriety.</li>
            </ul>
            <p>
              Beyond one year, the body continues to heal. The <Link href="/health-recovery-timeline" className="text-sage-600 dark:text-sage-400 underline">health recovery timeline</Link> extends through multiple years to show the ongoing benefits of sustained sobriety.
            </p>
          </section>

          <section>
            <h2>A note on withdrawal safety</h2>
            <p>
              While the health recovery timeline is encouraging, it is critical to understand that the process of stopping alcohol or certain substances can itself be medically dangerous. Alcohol withdrawal can cause seizures, delirium tremens, and other life-threatening complications. Benzodiazepine withdrawal carries similar risks.
            </p>
            <p>
              If you drink heavily or have been using for an extended period, please consult a healthcare provider before stopping. Medical detox programs can manage withdrawal safely and comfortably. SAMHSA&apos;s National Helpline (1-800-662-4357) can help you find detox services in your area.
            </p>
            <p>
              For a better understanding of your current drinking patterns, the <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT alcohol screening</Link> provides a validated assessment you can share with your healthcare provider. The <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline">sobriety calculator</Link> can track your progress once you begin.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">See your recovery timeline</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Enter your sobriety date and see exactly where you are in the healing process. Free, private, no account needed.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/health-recovery-timeline" className="btn-primary text-sm">Open the Health Recovery Timeline</Link>
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
              <Link href="/health-recovery-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Health Recovery Timeline</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Track physical health improvements after quitting</p>
              </Link>
              <Link href="/withdrawal-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Withdrawal Timeline</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand withdrawal symptoms and their duration</p>
              </Link>
              <Link href="/sobriety-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Sobriety Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Track your sobriety days, weeks, and months</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/quit-drinking-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Happens When You Stop Drinking</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Hour-by-hour timeline of alcohol recovery</p>
              </Link>
              <Link href="/blog/withdrawal-symptoms-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Understanding Withdrawal Symptoms</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What to expect during substance withdrawal</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

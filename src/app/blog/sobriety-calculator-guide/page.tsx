import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/sobriety-calculator-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "sobriety-calculator-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/sobriety-calculator-guide",
  title: "Sobriety Calculator: Why Tracking Your Sober Days Matters",
  description:
    "Tracking sobriety time reinforces recovery motivation. Learn why counting sober days helps, what milestones mean, and how to use a free sobriety calculator.",
  keywords: [
    "sobriety calculator",
    "sober day counter",
    "sobriety tracker",
    "how long have I been sober",
    "sobriety milestones",
    "recovery day counter",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Why does counting sober days help recovery?",
    answer:
      "Tracking sobriety provides concrete, visible evidence of progress that counteracts the distorted thinking common in early recovery \u2014 specifically the belief that nothing is changing. Research on goal-setting shows that measurable progress markers increase motivation and self-efficacy. Milestones also serve as natural reflection points to assess how far you have come.",
  },
  {
    question: "What if I relapse and my counter resets?",
    answer:
      "A relapse does not erase the skills, neural pathways, or self-knowledge you built during your sober time. Many people in long-term recovery experienced setbacks along the way. The counter is a tool, not a judgment. If you relapse, the most important step is reconnecting with your support system and resuming your recovery plan as soon as possible.",
  },
  {
    question: "What are the major sobriety milestones?",
    answer:
      "Common milestones include 24 hours, 1 week, 30 days, 90 days, 6 months, 1 year, and annual anniversaries. Each carries significance: 30 days marks a full cycle without use, 90 days is often when acute post-withdrawal symptoms resolve, and 1 year is a major psychological milestone. Any amount of sober time counts and is worth recognizing.",
  },
  {
    question: "Is a sobriety calculator the same as a sobriety app?",
    answer:
      "A sobriety calculator is typically a simple tool that counts days from your sobriety date. Full sobriety apps often include additional features like daily check-ins, community support, mood tracking, and milestone badges. The MindCheck Tools sobriety calculator is a free, private, no-account-needed counter that runs entirely in your browser.",
  },
];

export default function SobrietyCalculatorGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Sobriety Calculator: Why Tracking Your Sober Days Matters", description: "Learn why counting sober days helps recovery, what milestones mean, and how to use a free sobriety calculator.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Sobriety Calculator Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Sobriety Calculator: Why Tracking Your Sober Days Matters
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Recovery from alcohol or substance use is measured in days lived differently. A sobriety calculator is a simple tool that counts the time since your last use &mdash; turning an abstract commitment into something concrete and visible. Whether you are on day one or day one thousand, tracking your progress reinforces the reality that change is happening, even when it does not feel like it.
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
            <h2>What is a sobriety calculator?</h2>
            <p>
              A sobriety calculator is a tool that takes a single input &mdash; your sobriety or quit date &mdash; and calculates the exact number of days, weeks, months, and years since that date. It transforms an internal commitment into an external, measurable number.
            </p>
            <p>
              The concept is rooted in recovery culture, where &quot;counting days&quot; has been a cornerstone of programs like Alcoholics Anonymous since the 1930s. Modern research supports the practice: goal-tracking and visible progress markers are consistently associated with higher motivation and better adherence to behavior change (Harkin et al., 2016).
            </p>
          </section>

          <section>
            <h2>Why tracking sobriety time matters</h2>
            <p>Counting sober days serves several psychological functions in recovery:</p>
            <ul>
              <li><strong>Concrete evidence of progress:</strong> Early recovery often feels like nothing is changing. A number that increases every day provides objective proof that it is.</li>
              <li><strong>Accountability anchor:</strong> Knowing your count creates a small but meaningful barrier to impulsive use &mdash; the thought of resetting to zero carries real weight.</li>
              <li><strong>Milestone motivation:</strong> Reaching 30, 60, 90 days, or a year creates natural moments to reflect, celebrate, and recommit.</li>
              <li><strong>Identity reinforcement:</strong> Over time, the accumulating days help shift self-perception from &quot;someone trying to quit&quot; to &quot;someone living in recovery.&quot;</li>
              <li><strong>Communication tool:</strong> Sharing milestones with a sponsor, therapist, or support group strengthens social bonds and accountability.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How the MindCheck Tools sobriety calculator works</h2>
            <p>
              The <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools sobriety calculator</Link> is free, private, and requires no account. Enter your sobriety date and instantly see your total days, weeks, and months sober. Your data stays in your browser and is never stored or transmitted.
            </p>
            <p>
              Unlike app-based trackers that require downloads and accounts, this is a simple, focused tool designed to answer one question: how long have I been sober? You can bookmark it and return anytime to check your count.
            </p>
            <p>
              If you are also interested in how much money you have saved since getting sober, the <Link href="/money-saved-recovery-calculator" className="text-sage-600 dark:text-sage-400 underline">money saved in recovery calculator</Link> provides that perspective. And the <Link href="/health-recovery-timeline" className="text-sage-600 dark:text-sage-400 underline">health recovery timeline</Link> shows physical improvements at each milestone.
            </p>
          </section>

          <section>
            <h2>Understanding sobriety milestones</h2>
            <p>While every sober day matters, certain milestones carry particular significance:</p>
            <ul>
              <li><strong>24 hours:</strong> The first full day. For many, the hardest single day. Completing it is a real accomplishment.</li>
              <li><strong>1 week:</strong> Acute withdrawal symptoms from alcohol typically peak and begin to subside.</li>
              <li><strong>30 days:</strong> A full cycle without use. Sleep, appetite, and mood often begin to stabilize.</li>
              <li><strong>90 days:</strong> Post-acute withdrawal symptoms (PAWS) often improve. Many treatment programs use 90 days as a benchmark.</li>
              <li><strong>6 months:</strong> Cognitive function, emotional regulation, and energy levels continue to improve.</li>
              <li><strong>1 year:</strong> A major psychological milestone. The risk of relapse decreases substantially after the first year.</li>
            </ul>
            <p>
              These milestones are averages and guidelines, not guarantees. Everyone&apos;s recovery timeline is different. The <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline">sobriety calculator</Link> tracks your individual journey regardless of where you fall on these benchmarks.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What if you relapse?</h2>
            <p>
              Relapse is common in recovery &mdash; the National Institute on Drug Abuse (NIDA) estimates that 40&ndash;60% of people in recovery experience relapse at some point, comparable to relapse rates for other chronic conditions like hypertension or asthma.
            </p>
            <p>
              If your counter resets, that does not erase the growth, skills, and self-knowledge you built during your sober time. A relapse is information, not a verdict. It tells you something about your triggers, your support needs, or your current coping strategies that can be addressed.
            </p>
            <p>
              The most important thing after a relapse is reconnecting with your support system &mdash; whether that is a therapist, sponsor, support group, or trusted person in your life. The <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 underline">relapse prevention plan builder</Link> can help you prepare for high-risk situations.
            </p>
          </section>

          <section>
            <h2>When to seek professional help</h2>
            <p>A sobriety calculator is a motivational tool, not a substitute for professional support. Consider reaching out to a professional if:</p>
            <ul>
              <li>You are experiencing strong cravings that feel unmanageable</li>
              <li>You have relapsed multiple times despite wanting to stop</li>
              <li>You are experiencing withdrawal symptoms (which can be medically dangerous with alcohol and benzodiazepines)</li>
              <li>Depression, anxiety, or suicidal thoughts are co-occurring with substance use</li>
              <li>Your substance use is affecting your relationships, work, or ability to function</li>
            </ul>
            <p>
              SAMHSA&apos;s National Helpline (1-800-662-4357) provides free, confidential referrals 24/7. You can also use the <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT alcohol screening</Link> or <Link href="/dast-10-drug-screening" className="text-sage-600 dark:text-sage-400 underline">DAST-10 drug screening</Link> to get a structured picture of your use patterns.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to see how far you&apos;ve come?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. Enter your sobriety date and see your progress instantly.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/sobriety-calculator" className="btn-primary text-sm">Open the Sobriety Calculator</Link>
              <Link href="/money-saved-recovery-calculator" className="btn-primary text-sm">See Money Saved in Recovery</Link>
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
              <Link href="/sobriety-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Sobriety Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Track your sobriety days, weeks, and months</p>
              </Link>
              <Link href="/money-saved-recovery-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Money Saved in Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">See how much you have saved since getting sober</p>
              </Link>
              <Link href="/health-recovery-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Health Recovery Timeline</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Physical health improvements after quitting</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/daily-recovery-checkin-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "daily-recovery-checkin-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/daily-recovery-checkin-guide",
  title: "Daily Recovery Check-Ins: Why Structured Self-Reflection Supports Sobriety",
  description:
    "Daily check-ins help you track mood, cravings, and gratitude in recovery. Learn why self-monitoring supports sobriety and how to build a sustainable check-in routine.",
  keywords: [
    "daily recovery check-in",
    "recovery journal",
    "daily sobriety check",
    "recovery self-reflection",
    "morning recovery routine",
    "recovery accountability",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "When is the best time to do a recovery check-in?",
    answer:
      "Both morning and evening check-ins have value. Morning check-ins set intentions \u2014 what you are committed to, challenges you anticipate, and what you are grateful for. Evening check-ins provide reflection on how the day went, what cravings arose, and what you want to adjust. If you only do one, choose whichever time you are most likely to do consistently.",
  },
  {
    question: "What should I include in a daily check-in?",
    answer:
      "An effective check-in covers five core areas: mood, sleep quality, craving intensity on a 0\u201310 scale, gratitude (at least one thing you appreciate), and one specific recovery action for the day. You can also track social connection, physical health, and triggers. The MindCheck Tools daily recovery check-in provides a guided template covering all of these areas.",
  },
  {
    question: "How does self-monitoring help recovery?",
    answer:
      "Self-monitoring \u2014 regularly tracking your behavior, thoughts, and feelings \u2014 is one of the most well-supported behavior change techniques. Burke et al. (2011) found it to be the single most effective component of behavioral interventions. In recovery, it increases awareness of patterns, creates daily accountability, and provides early warning signs when things are heading in a risky direction.",
  },
  {
    question: "Do I need to do this forever?",
    answer:
      "There is no requirement to do daily check-ins forever, but many people in long-term recovery find ongoing self-reflection valuable. In early recovery, daily check-ins are most important because internal awareness is still developing. Over time, you may reduce frequency to weekly or adjust the format. The key is maintaining some structured self-reflection as recovery evolves.",
  },
];

export default function DailyRecoveryCheckinGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Daily Recovery Check-Ins: Why Structured Self-Reflection Supports Sobriety", description: "Learn why daily check-ins support recovery and how to build a sustainable self-monitoring routine.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Daily Recovery Check-In Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Daily Recovery Check-Ins: Why Structured Self-Reflection Supports Sobriety
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            A daily check-in is a structured moment to pause and assess how you are doing &mdash; your mood, your cravings, your gratitude, and your intentions. It takes less than five minutes, but the research on self-monitoring suggests it may be one of the most impactful things you can do for your recovery each day. The <Link href="/daily-recovery-check-in" className="text-sage-600 dark:text-sage-400 underline">daily recovery check-in tool</Link> provides a guided template that makes this practice simple and consistent.
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
            <h2>The research behind self-monitoring</h2>
            <p>
              Self-monitoring &mdash; the practice of systematically tracking your own behavior, thoughts, and feelings &mdash; is one of the most well-supported strategies in behavioral science. A comprehensive meta-analysis by Burke et al. (2011) found that self-monitoring is the single most effective component of behavioral interventions across a wide range of health behaviors, including substance use.
            </p>
            <p>
              The mechanism is straightforward: awareness precedes change. When you regularly check in with yourself, you notice patterns that would otherwise remain invisible. You see that your cravings spike on certain days, that poor sleep predicts difficult mornings, that isolation precedes your hardest moments. This awareness transforms recovery from a reactive process &mdash; responding to crises as they arise &mdash; to a proactive one, where you can anticipate and prepare for challenges before they escalate.
            </p>
            <p>
              Daily check-ins also create a form of self-accountability. When you commit to answering honest questions about your state each day, you are less able to drift into denial or minimization &mdash; two patterns that commonly precede relapse.
            </p>
          </section>

          <section>
            <h2>What to track in your daily check-in</h2>
            <p>
              An effective daily check-in does not need to be long or complicated. The <Link href="/daily-recovery-check-in" className="text-sage-600 dark:text-sage-400 underline">daily recovery check-in tool</Link> covers five core areas that research and clinical practice have identified as most important:
            </p>
            <ul>
              <li><strong>Mood:</strong> How are you feeling emotionally right now? Not a general &quot;fine,&quot; but a specific label &mdash; anxious, hopeful, irritable, calm, sad, grateful. Emotional granularity (the ability to name your emotions specifically) is associated with better emotional regulation and lower relapse risk.</li>
              <li><strong>Sleep quality:</strong> How well did you sleep last night? Sleep disruption is one of the most reliable predictors of increased craving intensity and emotional reactivity. Tracking it daily helps you see the pattern before it becomes a crisis.</li>
              <li><strong>Craving intensity:</strong> On a scale of 0 to 10, how strong are your urges today? Tracking craving intensity over time reveals patterns &mdash; when cravings tend to peak, what triggers them, and whether they are trending up or down.</li>
              <li><strong>Gratitude:</strong> What is one thing you appreciate today? Gratitude practice has demonstrated effects on mood, stress, and overall well-being. In recovery, it counters the negativity bias that can make sobriety feel like deprivation rather than liberation.</li>
              <li><strong>One recovery action:</strong> What is one specific thing you are doing for your recovery today? This creates a daily commitment that is concrete and actionable &mdash; attending a meeting, calling your sponsor, exercising, practicing a coping skill.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Morning check-ins vs. evening check-ins</h2>
            <p>
              Both morning and evening check-ins serve important but different purposes, and many people in recovery find value in doing both:
            </p>
            <h3>Morning check-ins</h3>
            <p>
              A morning check-in sets the tone for the day. It is forward-looking: How am I feeling right now? What challenges might I face today? What am I committed to doing for my recovery? What am I grateful for? Morning check-ins are particularly valuable because they create intentionality &mdash; you start the day with a plan rather than drifting into reactive mode.
            </p>
            <h3>Evening check-ins</h3>
            <p>
              An evening check-in is reflective. It looks back at the day: How did it go? What cravings or triggers came up? How did I handle them? What went well? What do I want to do differently tomorrow? Evening check-ins are where pattern recognition happens &mdash; over time, your responses create a record that reveals your personal rhythm of vulnerability and strength.
            </p>
            <p>
              If you are only going to do one, choose the time of day when you are most likely to be consistent. Consistency matters more than timing. A check-in you do every day at 9 PM is more valuable than a morning check-in you skip three days a week.
            </p>
          </section>

          <section>
            <h2>Consistency matters more than perfection</h2>
            <p>
              The most common barrier to maintaining a daily check-in practice is perfectionism. People skip a day, feel guilty, and then abandon the practice entirely. This all-or-nothing pattern is particularly common in recovery, where the stakes feel high and any imperfection can trigger shame.
            </p>
            <p>
              The reality is that a check-in practice with occasional missed days is still enormously valuable. Research on habit formation suggests that consistency, not perfection, drives behavior change. If you miss a day, simply resume the next day without self-judgment.
            </p>
            <p>
              Some practical strategies for maintaining consistency:
            </p>
            <ul>
              <li><strong>Anchor it to an existing habit:</strong> Do your check-in right after brushing your teeth, right after your morning coffee, or right before bed &mdash; linking it to something you already do every day.</li>
              <li><strong>Keep it brief:</strong> A check-in that takes two minutes is more sustainable than one that takes twenty. You can always go deeper on days when you have more time or need more reflection.</li>
              <li><strong>Use a tool:</strong> The <Link href="/daily-recovery-check-in" className="text-sage-600 dark:text-sage-400 underline">daily recovery check-in</Link> provides structure so you do not have to decide what to reflect on each day &mdash; the template is ready.</li>
              <li><strong>Track your streak gently:</strong> Notice how many consecutive days you have checked in, but do not treat a broken streak as failure. The <Link href="/sobriety-calculator" className="text-sage-600 dark:text-sage-400 underline">sobriety calculator</Link> can help you track broader recovery milestones alongside daily practices.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>How daily check-ins connect to other recovery tools</h2>
            <p>
              A daily check-in is most powerful when it connects to your broader recovery ecosystem. It serves as a daily touchpoint that can trigger the use of other tools when needed:
            </p>
            <ul>
              <li>If your check-in reveals high craving intensity, use the <Link href="/urge-surfing-timer" className="text-sage-600 dark:text-sage-400 underline">urge surfing timer</Link> or the <Link href="/coping-skills-randomizer" className="text-sage-600 dark:text-sage-400 underline">coping skills randomizer</Link>.</li>
              <li>If you notice you are Hungry, Angry, Lonely, or Tired, the <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 underline">HALT check-in</Link> helps you address those vulnerability states directly.</li>
              <li>If your mood has been consistently low, consider taking the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 depression screener</Link> to see whether professional support may be helpful.</li>
              <li>If you notice patterns in your triggers, revisit your <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 underline">relapse prevention plan</Link> to update it with what you have learned.</li>
            </ul>
            <p>
              The check-in is not the whole recovery plan &mdash; it is the daily practice that keeps you aware of where you are so you can use the right tools at the right time.
            </p>
          </section>

          <section>
            <h2>Beyond early recovery: evolving your practice</h2>
            <p>
              Daily check-ins are most critical in the first year of recovery, when self-awareness is still developing and relapse risk is highest. But many people in long-term recovery continue some form of structured self-reflection indefinitely &mdash; adjusting the format as their needs change.
            </p>
            <p>
              In early recovery, a check-in might focus heavily on cravings, triggers, and daily survival. Over time, the focus may shift toward emotional growth, relationship quality, purpose, and life satisfaction. The practice evolves, but the principle remains the same: regular, honest self-reflection supports sustained well-being.
            </p>
            <p>
              Some people transition from daily to weekly check-ins after the first year. Others keep the daily practice but simplify it to just three questions: How am I feeling? What am I grateful for? What am I doing for my recovery today? There is no single right approach &mdash; the best check-in is the one you actually do.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Start your daily check-in</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and takes less than five minutes. A guided template for mood, cravings, gratitude, and intentions.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/daily-recovery-check-in" className="btn-primary text-sm">Open the Daily Check-In</Link>
              <Link href="/halt-check-in" className="btn-primary text-sm">Try the HALT Check-In</Link>
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
              <Link href="/daily-recovery-check-in" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Daily Recovery Check-In</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided daily check-in for mood, cravings, and gratitude</p>
              </Link>
              <Link href="/halt-check-in" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">HALT Check-In</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick check for hunger, anger, loneliness, and tiredness</p>
              </Link>
              <Link href="/sobriety-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Sobriety Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Track your sober days and recovery milestones</p>
              </Link>
              <Link href="/relapse-prevention-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Build a personalized relapse prevention strategy</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/halt-checkin-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">HALT: The Recovery Check-In That Prevents Relapse</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How the HALT framework helps prevent relapse</p>
              </Link>
              <Link href="/blog/sobriety-calculator-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Why Tracking Sober Days Matters</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">The psychology behind counting days in recovery</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

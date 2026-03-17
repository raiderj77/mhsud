import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/halt-checkin-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "halt-checkin-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/halt-checkin-guide",
  title: "HALT: The Recovery Check-In That Prevents Relapse",
  description:
    "HALT stands for Hungry, Angry, Lonely, Tired — four vulnerability states that increase relapse risk. Learn how this simple check-in works.",
  keywords: [
    "HALT recovery",
    "HALT check-in",
    "hungry angry lonely tired",
    "relapse prevention HALT",
    "HALT acronym recovery",
    "HALT self-check",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What does HALT stand for?",
    answer:
      "HALT stands for Hungry, Angry, Lonely, and Tired \u2014 four basic physical and emotional states that increase vulnerability to relapse. The acronym serves as a quick self-check: when you feel a craving or an urge to use, pause and ask whether you are experiencing one or more of these states. Often, addressing the underlying need (eating, processing emotions, connecting with someone, or resting) reduces or eliminates the craving.",
  },
  {
    question: "How does HALT prevent relapse?",
    answer:
      "HALT works through a concept called interoceptive awareness \u2014 the ability to recognize and correctly interpret your body\u2019s internal signals. In early recovery, many people have difficulty distinguishing between a craving and a basic unmet need. The HALT framework provides a simple, concrete checklist that helps you identify what you actually need in the moment. By addressing the real need (food, emotional processing, connection, or rest), the craving often resolves on its own. This aligns with Marlatt and Gordon\u2019s relapse prevention model, which emphasizes identifying and managing high-risk situations.",
  },
  {
    question: "When should I do a HALT check-in?",
    answer:
      "The most important time to use HALT is when you feel a craving, urge, or emotional disturbance that you cannot immediately explain. However, many people in recovery find it helpful to do regular preventive check-ins \u2014 for example, at set times during the day (morning, midday, and evening) or whenever they notice their mood shifting. The goal is to catch vulnerability states before they escalate. The MindCheck Tools HALT check-in tool provides a quick, structured way to do this daily.",
  },
  {
    question: "Is HALT evidence-based?",
    answer:
      "HALT originated in 12-step recovery culture and has been widely used in clinical settings for decades. While the acronym itself is not a formally validated clinical instrument, the underlying principles are well-supported by research. Marlatt and Gordon\u2019s relapse prevention model identifies negative emotional states, interpersonal conflict, and social pressure as the three highest-risk categories for relapse \u2014 all of which map directly to HALT states. Research on interoceptive awareness, emotional regulation, and sleep deprivation further supports the importance of monitoring these basic needs in recovery.",
  },
];

export default function HaltCheckinGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "HALT: The Recovery Check-In That Prevents Relapse", description: "HALT stands for Hungry, Angry, Lonely, Tired — four vulnerability states that increase relapse risk. Learn how this simple check-in works.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "HALT Check-In Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            HALT: The Recovery Check-In That Prevents Relapse
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            HALT is one of the simplest and most practical tools in recovery. The acronym stands for Hungry, Angry, Lonely, Tired &mdash; four basic states that increase vulnerability to relapse. When a craving hits, the practice is straightforward: pause and ask yourself, &quot;Am I hungry, angry, lonely, or tired right now?&quot; Then address the actual need. It sounds almost too simple to work &mdash; but decades of clinical use and supporting research suggest it is one of the most effective daily practices in recovery.
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
            <h2>Where HALT comes from</h2>
            <p>
              HALT originated in Alcoholics Anonymous and the broader 12-step recovery community, where it has been taught as a practical relapse prevention technique for decades. The exact origin is difficult to trace &mdash; like many recovery concepts, it emerged organically from the collective wisdom of people living in recovery.
            </p>
            <p>
              The framework gained clinical credibility through its alignment with Marlatt and Gordon&apos;s relapse prevention model, published in the 1980s, which identified negative emotional states, interpersonal conflict, and social pressure as the three highest-risk categories for relapse. Each of the four HALT states maps directly to these evidence-based risk categories.
            </p>
            <p>
              Today, HALT is used not only in 12-step programs but in cognitive behavioral therapy (CBT), dialectical behavior therapy (DBT), and many residential and outpatient treatment programs. The <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 underline">HALT check-in tool</Link> provides a quick, structured way to practice this technique daily.
            </p>
          </section>

          <section>
            <h2>Hungry: when your body sends the wrong signal</h2>
            <p>
              Hunger is the most physiologically straightforward HALT state, but its effects on recovery are often underestimated. When blood sugar drops, the brain experiences a cascade of effects that directly undermine the skills needed for recovery:
            </p>
            <ul>
              <li><strong>Decision fatigue:</strong> Low blood sugar impairs the prefrontal cortex, the brain region responsible for impulse control, planning, and rational decision-making. This is the same region that helps you resist cravings.</li>
              <li><strong>Mood disruption:</strong> Hunger triggers irritability, anxiety, and difficulty concentrating &mdash; states that can easily be misinterpreted as cravings or emotional distress.</li>
              <li><strong>Habitual association:</strong> For many people in recovery, hunger was historically addressed with substances rather than food. The brain may default to these old patterns when hungry.</li>
            </ul>
            <p>
              The solution is practical: maintain regular eating patterns, carry snacks, and learn to recognize early hunger cues before they escalate. Many treatment programs emphasize nutrition as a foundational element of recovery for exactly this reason.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Angry: unprocessed emotions as relapse triggers</h2>
            <p>
              Anger is one of the most common relapse triggers, not because the emotion itself is harmful, but because many people in recovery lack healthy ways to process it. During active addiction, substances served as the primary emotional regulation tool. In sobriety, anger and resentment can build without an outlet.
            </p>
            <p>
              Research on emotional regulation in addiction recovery shows that:
            </p>
            <ul>
              <li><strong>Suppressed anger increases relapse risk:</strong> Pushing anger down without processing it creates internal tension that the brain may attempt to resolve through substance use.</li>
              <li><strong>Resentment is cumulative:</strong> Small unaddressed frustrations can accumulate into a generalized state of agitation that makes any craving harder to resist.</li>
              <li><strong>Anger often masks other emotions:</strong> Hurt, fear, shame, and grief frequently present as anger. Addressing the underlying emotion is more effective than managing the anger alone.</li>
            </ul>
            <p>
              Healthy responses to the &quot;A&quot; in HALT include talking to a sponsor or trusted person, journaling, physical exercise, and using CBT techniques to examine the thought patterns behind the anger. The <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 underline">HALT check-in tool</Link> helps you identify anger early, before it escalates to a high-risk state.
            </p>
          </section>

          <section>
            <h2>Lonely: isolation as a relapse pathway</h2>
            <p>
              Loneliness is arguably the most dangerous HALT state for long-term recovery. Social isolation is consistently identified as one of the strongest predictors of relapse, and it is also one of the most common experiences in early recovery &mdash; especially when sobriety requires distancing from old social circles centered around substance use.
            </p>
            <p>
              The connection between loneliness and relapse is well-documented:
            </p>
            <ul>
              <li><strong>Reduced accountability:</strong> Without social connection, the natural accountability that comes from being seen and known by others disappears.</li>
              <li><strong>Emotional vacuum:</strong> Loneliness creates an emotional void that substances previously filled. Without alternative sources of connection, the pull toward use intensifies.</li>
              <li><strong>Distorted thinking:</strong> Isolation allows distorted thoughts (&quot;No one cares,&quot; &quot;What&apos;s the point?&quot;) to go unchallenged.</li>
              <li><strong>Loss of purpose:</strong> Social connection provides meaning and motivation. Without it, the daily effort of recovery can feel pointless.</li>
            </ul>
            <p>
              Addressing loneliness in recovery requires proactive effort: attending meetings or support groups, calling a sponsor, volunteering, or simply being in the physical presence of others. The <Link href="/daily-recovery-check-in" className="text-sage-600 dark:text-sage-400 underline">daily recovery check-in</Link> includes connection prompts that help you stay aware of your social needs.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Tired: how sleep deprivation undermines recovery</h2>
            <p>
              Fatigue is the most underappreciated HALT state. Sleep deprivation impairs virtually every cognitive function needed for successful recovery, and sleep problems are extremely common in early sobriety as the brain recalibrates its natural sleep-wake cycle.
            </p>
            <p>
              Research on sleep and addiction recovery shows that:
            </p>
            <ul>
              <li><strong>Impaired impulse control:</strong> Sleep deprivation reduces activity in the prefrontal cortex by up to 60%, severely compromising the ability to resist urges and make sound decisions.</li>
              <li><strong>Heightened emotional reactivity:</strong> Tired people are more emotionally reactive and less able to regulate emotions &mdash; a combination that makes cravings harder to manage.</li>
              <li><strong>Increased stress hormones:</strong> Lack of sleep elevates cortisol levels, creating a physiological stress state that the brain may interpret as a signal to seek relief through substances.</li>
              <li><strong>Cognitive distortion:</strong> Fatigue promotes black-and-white thinking, catastrophizing, and hopelessness &mdash; thought patterns that increase relapse risk.</li>
            </ul>
            <p>
              Sleep hygiene practices &mdash; consistent bedtime, avoiding screens before sleep, limiting caffeine, and creating a restful environment &mdash; are essential recovery practices, not luxuries. If sleep problems persist beyond the first few weeks of sobriety, consulting a healthcare provider is important.
            </p>
          </section>

          <section>
            <h2>How to practice the HALT check-in</h2>
            <p>
              The power of HALT is in its simplicity. Here is how to use it effectively:
            </p>
            <ul>
              <li><strong>Schedule regular check-ins:</strong> Do not wait for a craving to use HALT. Check in with yourself at set times &mdash; morning, midday, and evening &mdash; to catch vulnerability states before they escalate.</li>
              <li><strong>Use it reactively when needed:</strong> When a craving, urge, or sudden mood shift occurs, immediately pause and run through the four letters. Am I Hungry? Angry? Lonely? Tired?</li>
              <li><strong>Address the need, not the craving:</strong> If you identify a HALT state, address that specific need directly. Eat something. Call someone. Talk about what is bothering you. Take a nap or go to bed early.</li>
              <li><strong>Notice patterns:</strong> Over time, you may notice that certain HALT states are more common triggers for you personally. This awareness helps you build targeted prevention strategies.</li>
              <li><strong>Combine with other tools:</strong> HALT works well alongside the <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 underline">relapse prevention plan</Link> and the <Link href="/coping-skills-randomizer" className="text-sage-600 dark:text-sage-400 underline">coping skills randomizer</Link>.</li>
            </ul>
            <p>
              The <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 underline">HALT check-in tool</Link> provides a structured digital version of this practice that you can use daily in under a minute.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Try a HALT check-in now</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and takes less than a minute. Check in with your hunger, anger, loneliness, and tiredness levels.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/halt-check-in" className="btn-primary text-sm">Open the HALT Check-In</Link>
              <Link href="/daily-recovery-check-in" className="btn-primary text-sm">Daily Recovery Check-In</Link>
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
              <Link href="/halt-check-in" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">HALT Check-In</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick daily check-in for hunger, anger, loneliness, and tiredness</p>
              </Link>
              <Link href="/daily-recovery-check-in" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Daily Recovery Check-In</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Comprehensive daily check-in for recovery</p>
              </Link>
              <Link href="/relapse-prevention-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Build a personalized relapse prevention strategy</p>
              </Link>
              <Link href="/coping-skills-randomizer" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Coping Skills Randomizer</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Get a random evidence-based coping skill when you need one</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/relapse-prevention-plan-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Build a Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Step-by-step guide to building your relapse prevention toolkit</p>
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

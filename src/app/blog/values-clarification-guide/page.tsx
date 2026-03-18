import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/values-clarification-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "values-clarification-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/values-clarification-guide",
  title: "Values Clarification: How Knowing What Matters Guides Better Decisions",
  description:
    "Values clarification helps you identify what truly matters to you. Learn how it's used in ACT therapy, recovery, and life decision-making.",
  keywords: [
    "values clarification",
    "values card sort",
    "personal values exercise",
    "ACT values",
    "what are my values",
    "values in recovery",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is the difference between values and goals?",
    answer:
      "Values are ongoing directions you want to move in, like honesty, connection, or health. Goals are specific destinations along those directions, like running a 5K. You complete a goal and move on; a value is never finished. This distinction matters because values keep you oriented even when specific goals fail or change.",
  },
  {
    question: "How are values used in addiction recovery?",
    answer:
      "Values reframe recovery from what you are giving up to what you are moving toward. When cravings arise, connecting with values like family, health, or integrity creates motivation more compelling than willpower alone. ACT-based recovery programs use values as a foundation for building a meaningful life that makes substance use less appealing.",
  },
  {
    question: "Can your values change over time?",
    answer:
      "Yes. Values evolve with life experience and changing circumstances. What mattered most at 20 may shift by 40. Major life events like becoming a parent, experiencing illness, or entering recovery often prompt reassessment. Periodic values clarification \u2014 yearly or after major changes \u2014 helps ensure daily actions align with what currently matters most.",
  },
  {
    question: "What is a values card sort?",
    answer:
      "A values card sort involves sorting cards naming core values (family, creativity, independence, health) into categories: very important, important, and not important. Comparing and prioritizing forces genuine choices about what matters most, which is more revealing than picking from a list. The MindCheck Tools values card sort offers this exercise in a free digital format.",
  },
];

export default function ValuesClarificationGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Values Clarification: How Knowing What Matters Guides Better Decisions", description: "Learn how values clarification works, how it is used in ACT therapy and recovery, and how a values card sort exercise can help.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Values Clarification Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Values Clarification: How Knowing What Matters Guides Better Decisions
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Most people can list what they want &mdash; a better job, less stress, stronger relationships. But fewer people can articulate why those things matter to them, or what underlying values drive those desires. Values clarification is the process of identifying what truly matters to you &mdash; not what you think should matter, but what actually does &mdash; and using that knowledge to guide decisions, set priorities, and live with greater intention.
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
              This article is for informational and educational purposes only and does not constitute medical or mental health advice. Values clarification exercises are self-reflection tools, not a substitute for professional therapy. Consult a qualified mental health professional for personalized guidance.
            </p>
          </div>

          <section>
            <h2>What is values clarification?</h2>
            <p>
              Values clarification is a structured process for identifying, examining, and prioritizing your core personal values. It originated in humanistic psychology through the work of Carl Rogers and Abraham Maslow in the mid-20th century, who emphasized that psychological well-being depends on living in alignment with your authentic self.
            </p>
            <p>
              The concept was formalized as a therapeutic technique by Louis Raths, Merrill Harmin, and Sidney Simon in the 1960s, and later became a central component of Acceptance and Commitment Therapy (ACT), developed by Steven Hayes in the 1980s. In ACT, values are considered the foundation for meaningful action &mdash; the &quot;why&quot; behind the &quot;what&quot; of behavior change.
            </p>
            <p>
              Unlike goal-setting (which focuses on specific outcomes), values clarification focuses on ongoing directions. A value like &quot;connection&quot; is not something you achieve and check off &mdash; it is a quality you bring to relationships throughout your life. This distinction is what makes values so powerful for sustained motivation and psychological flexibility.
            </p>
          </section>

          <section>
            <h2>Values versus goals: why the distinction matters</h2>
            <p>
              One of the most important concepts in values work is the difference between values and goals. Understanding this distinction changes how you approach motivation, setbacks, and life decisions.
            </p>
            <ul>
              <li><strong>Values are directions; goals are destinations.</strong> &quot;Being a loving parent&quot; is a value. &quot;Attending my child&apos;s school play on Friday&quot; is a goal that expresses that value.</li>
              <li><strong>Goals can be completed; values cannot.</strong> You can finish a marathon (goal), but you never finish &quot;valuing health&quot; (value). Values provide ongoing motivation that survives any individual success or failure.</li>
              <li><strong>Goals can fail; values persist.</strong> If you fail to run the marathon, your value of health remains intact and continues to guide your next action. This makes values more resilient than goals as motivational anchors.</li>
            </ul>
            <p>
              In practice, values generate goals. When you know you value &quot;creativity,&quot; specific goals flow naturally: take a painting class, write for 30 minutes each morning, redesign the living room. The goals may change, but the underlying value keeps generating new ones.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How values clarification works in recovery</h2>
            <p>
              Values clarification is particularly powerful in addiction recovery because it reframes the entire project of recovery from something negative (what you are giving up) to something positive (what you are moving toward).
            </p>
            <p>
              When recovery is defined solely by abstinence, motivation can feel fragile &mdash; especially when cravings are strong or life gets difficult. But when recovery is anchored to values like family, integrity, health, or personal growth, it becomes about building a meaningful life rather than just avoiding a substance.
            </p>
            <p>
              ACT-based approaches to addiction treatment use values as the motivational foundation. Research by Wilson and Murrell (2004) demonstrated that values-based interventions increase treatment engagement and reduce dropout rates in substance use programs. When clients connect their recovery efforts to their deepest values, they are more likely to persist through discomfort.
            </p>
            <p>
              The <Link href="/values-card-sort" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools values card sort</Link> can help you identify your top values and begin connecting them to concrete recovery behaviors. You can also integrate your values into your <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 underline">relapse prevention plan</Link> as a motivational anchor for high-risk moments.
            </p>
          </section>

          <section>
            <h2>The values card sort technique</h2>
            <p>
              The values card sort is one of the most widely used values clarification exercises in therapy. Originally developed as a physical card exercise, it involves sorting a set of value cards into three categories: very important, important, and not important.
            </p>
            <p>
              The power of the card sort lies in the sorting process itself. Rather than asking you to pick values from a list (which tends to produce socially desirable answers), the card sort forces you to compare values against each other and make difficult choices about priority. When you hold &quot;career success&quot; and &quot;family&quot; in your hands and have to put one in a higher category, you learn something real about yourself.
            </p>
            <p>
              The <Link href="/values-card-sort" className="text-sage-600 dark:text-sage-400 underline">values card sort tool</Link> provides this exercise in a digital format. You sort values by dragging them into categories, and the tool summarizes your top values at the end. The exercise typically takes 10&ndash;15 minutes and can be revisited whenever you want to check in with your priorities.
            </p>
            <p>
              After completing the card sort, the next step is to assess how well your daily life aligns with your stated values. If you ranked &quot;health&quot; as a top value but spend zero time on physical activity, that gap is worth exploring &mdash; not with judgment, but with curiosity about what is getting in the way.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Values and psychological flexibility</h2>
            <p>
              In ACT, values are one of six core processes that together create psychological flexibility &mdash; the ability to be present, open to your experience, and engaged in valued action even in the face of difficult thoughts and feelings.
            </p>
            <p>
              Psychological inflexibility (being rigid, avoidant, or disconnected from values) is associated with a wide range of mental health difficulties, including depression, anxiety, substance use, and chronic pain. Research by Kashdan and Rottenberg (2010) found that psychological flexibility is a stronger predictor of well-being than the absence of negative emotions.
            </p>
            <p>
              Values provide the motivational engine for psychological flexibility. When you are clear about what matters, you can tolerate discomfort in service of those values rather than organizing your life around avoiding pain. This is the core of ACT&apos;s approach: not feeling better, but living better.
            </p>
          </section>

          <section>
            <h2>How to use values in daily life</h2>
            <p>
              Identifying your values is the starting point, not the endpoint. The real work is translating values into consistent action. Here are practical ways to live more values-aligned:
            </p>
            <ul>
              <li><strong>Morning values check-in:</strong> Before starting your day, ask: &quot;What is one thing I can do today that aligns with my top value?&quot;</li>
              <li><strong>Decision filter:</strong> When facing a difficult choice, ask: &quot;Which option is most consistent with my values?&quot;</li>
              <li><strong>Weekly review:</strong> At the end of each week, reflect on which values you lived out and which you neglected.</li>
              <li><strong>Values-based goals:</strong> Set specific, measurable goals that express your top 3&ndash;5 values.</li>
              <li><strong>Craving response:</strong> When a craving arises, ask: &quot;What value am I moving toward by not acting on this?&quot;</li>
            </ul>
            <p>
              The <Link href="/readiness-to-change" className="text-sage-600 dark:text-sage-400 underline">readiness to change assessment</Link> can help you understand where you are in the change process and how values can support your next steps.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>When to seek professional support</h2>
            <p>
              Values clarification is a useful self-reflection exercise for anyone, but professional guidance can be especially valuable if:
            </p>
            <ul>
              <li>You feel disconnected from what matters to you or struggle to identify any values</li>
              <li>You know your values but consistently act against them (which may indicate avoidance patterns)</li>
              <li>You are in recovery and want to build a values-based relapse prevention plan</li>
              <li>You are experiencing depression, anxiety, or a sense of meaninglessness</li>
              <li>Major life transitions have left you uncertain about your direction</li>
            </ul>
            <p>
              An ACT therapist can guide you through deeper values work and help you build the psychological flexibility to act on your values even when it is difficult. SAMHSA&apos;s National Helpline (1-800-662-4357) provides free, confidential referrals to local treatment and support services.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Discover what matters most to you</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. Sort your values and see your priorities.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/values-card-sort" className="btn-primary text-sm">Start the Values Card Sort</Link>
              <Link href="/readiness-to-change" className="btn-primary text-sm">Check Your Readiness to Change</Link>
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
              <Link href="/values-card-sort" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Values Card Sort</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Identify and prioritize your core values</p>
              </Link>
              <Link href="/readiness-to-change" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Readiness to Change</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Assess your stage of change</p>
              </Link>
              <Link href="/relapse-prevention-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Build your personalized prevention strategy</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">The Stages of Change in Addiction Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand the 5 stages of change model</p>
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

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/adhd-teens-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "adhd-teens-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/adhd-teens-guide",
  title: "ADHD in Teenagers: Signs, Challenges, and How to Get Help",
  description:
    "ADHD affects ~9.8% of US children ages 3-17. Learn how ADHD looks different in teens, why it is often missed in girls, academic and social impacts, and how to get screened.",
  keywords: [
    "ADHD in teenagers",
    "teen ADHD symptoms",
    "ADHD test for teens",
    "signs of ADHD in teens",
    "ADHD adolescent",
    "teen ADHD screening",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can ADHD develop in the teenage years?",
    answer:
      "ADHD is present from childhood but can appear to develop in the teenage years because symptoms were previously mild or compensated for. The increased demands of middle and high school \u2014 more complex assignments, less structure, greater self-management \u2014 often reveal ADHD that was manageable earlier. The environment changed enough to make existing symptoms disruptive.",
  },
  {
    question: "How is ADHD different in teens vs young children?",
    answer:
      "In young children, ADHD often presents as visible hyperactivity \u2014 running, climbing, inability to sit still. In teenagers, hyperactivity shifts inward: restlessness, fidgeting, and difficulty relaxing. The dominant teen challenges are executive function deficits \u2014 time management, planning, organization, and emotional regulation. Teens may also struggle with impulse control and motivation for non-rewarding tasks.",
  },
  {
    question: "Should I get my teenager tested for ADHD?",
    answer:
      "Consider a professional evaluation if your teenager consistently struggles with organization, time management, emotional regulation, or focus in ways that interfere with school or relationships \u2014 and these patterns trace back to childhood. The MindCheck Tools ADHD test for teens can identify whether patterns are consistent with ADHD, but only a qualified professional can make an official evaluation.",
  },
  {
    question: "Can ADHD be managed without medication?",
    answer:
      "Yes, though the best approach depends on severity. Non-medication strategies include cognitive-behavioral therapy for executive function skills, organizational coaching, environmental modifications, regular exercise, and school accommodations (504 plans or IEPs). For moderate to severe ADHD, research shows medication combined with behavioral strategies produces the best outcomes. This decision should be made collaboratively with a healthcare provider.",
  },
];

export default function AdhdTeensGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "ADHD in Teenagers: Signs, Challenges, and How to Get Help", description: "ADHD affects ~9.8% of US children ages 3-17. Learn how ADHD presents in teens and how to get screened.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "ADHD in Teenagers Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            ADHD in Teenagers: Signs, Challenges, and How to Get Help
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            ADHD (attention-deficit/hyperactivity disorder) affects approximately 9.8% of U.S. children ages 3&ndash;17, according to the CDC. But ADHD in teenagers often looks very different from the hyperactive child bouncing off the walls. In adolescence, symptoms shift toward executive function challenges &mdash; difficulty with time management, planning, emotional regulation, and motivation &mdash; that can be mistaken for laziness, defiance, or simply &quot;not trying hard enough.&quot; This guide is for parents and teens who want to understand what ADHD looks like in the teenage years and what steps to take next.
          </p>
        </header>

        <div className="prose-mh space-y-8">
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
              This article is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation. Only a qualified healthcare provider can evaluate for ADHD.
            </p>
          </div>

          <section>
            <h2>How ADHD looks different in teenagers</h2>
            <p>
              When most people picture ADHD, they imagine a young child who cannot sit still. But ADHD changes as the brain develops. In teenagers, the most visible symptoms often shift from external hyperactivity to internal executive function struggles:
            </p>
            <ul>
              <li><strong>Time blindness:</strong> Difficulty estimating how long tasks will take, chronic lateness, and leaving assignments until the last minute &mdash; not because they do not care, but because their internal sense of time is unreliable</li>
              <li><strong>Planning and prioritization:</strong> Struggling to break large projects into steps, difficulty knowing where to start, and trouble distinguishing urgent from important</li>
              <li><strong>Emotional dysregulation:</strong> Intense emotional reactions that seem disproportionate, difficulty recovering from frustration, rejection sensitivity, and mood swings that may be mistaken for typical teen behavior or mood disorders</li>
              <li><strong>Motivation for non-preferred tasks:</strong> ADHD brains struggle with tasks that are not immediately interesting or rewarding. This looks like procrastination or laziness but is actually a neurological difference in dopamine-driven motivation</li>
              <li><strong>Working memory challenges:</strong> Forgetting instructions, losing track of assignments, misplacing belongings, and difficulty holding multiple pieces of information in mind simultaneously</li>
              <li><strong>Restlessness rather than hyperactivity:</strong> Instead of running around, teens may fidget, feel internally driven, have difficulty relaxing, or talk excessively</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Why ADHD in teen girls is often missed</h2>
            <p>
              ADHD in teenage girls is significantly underidentified. Girls are more likely to present with the inattentive type of ADHD rather than the hyperactive-impulsive type, which means their symptoms are less disruptive and less likely to be flagged by teachers.
            </p>
            <p>
              Girls with ADHD often develop social masking strategies &mdash; working twice as hard to keep up, internalizing their struggles, and presenting as &quot;good students&quot; who are simply not reaching their potential. The result is that many girls with ADHD are not identified until adolescence or adulthood, after years of anxiety, low self-esteem, and the exhaustion of compensating.
            </p>
            <p>
              Common signs of ADHD in teen girls include: difficulty sustaining focus during lectures or reading, seeming to daydream frequently, disorganized notebooks and backpacks, chronic difficulty turning in homework despite completing it, social difficulties related to impulsivity or difficulty reading social cues, and intense emotional responses that may be attributed to hormones or personality rather than ADHD.
            </p>
          </section>

          <section>
            <h2>ADHD is not just about school</h2>
            <p>
              While academic struggles are often the most visible sign, ADHD affects far more than grades:
            </p>
            <ul>
              <li><strong>Friendships:</strong> Impulsivity, difficulty with turn-taking in conversations, and emotional intensity can strain peer relationships. Teens with ADHD may also struggle with social timing &mdash; interrupting, missing social cues, or dominating conversations</li>
              <li><strong>Self-esteem:</strong> Years of hearing &quot;you&apos;re so smart, if you would just try harder&quot; takes a toll. Many teens with ADHD internalize the belief that they are lazy or stupid, despite evidence of their intelligence</li>
              <li><strong>Family relationships:</strong> Homework battles, forgotten chores, and impulsive behavior create conflict. Parents may feel frustrated, and teens may feel misunderstood</li>
              <li><strong>Substance use risk:</strong> Research indicates that untreated ADHD increases the risk of substance experimentation in adolescence. Teens may self-medicate with nicotine, cannabis, or alcohol. Importantly, appropriate ADHD management appears to reduce this risk</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Co-occurring conditions in teens with ADHD</h2>
            <p>
              ADHD rarely exists in isolation. Research shows high rates of co-occurring conditions in adolescents with ADHD:
            </p>
            <ul>
              <li><strong>Anxiety:</strong> Approximately 30% of teens with ADHD also meet criteria for an anxiety disorder. The constant effort of compensating for ADHD symptoms creates chronic stress</li>
              <li><strong>Depression:</strong> An estimated 15&ndash;20% of teens with ADHD experience depression. This may result from years of academic struggles, social difficulties, and internalized feelings of inadequacy</li>
              <li><strong>Learning disabilities:</strong> ADHD frequently co-occurs with specific learning disabilities in reading, writing, or math, which can compound academic challenges</li>
              <li><strong>Sleep disorders:</strong> Difficulty falling asleep, restless sleep, and delayed sleep phase syndrome are common in teens with ADHD and can worsen daytime symptoms</li>
            </ul>
            <p>
              The <Link href="/adhd-test-for-teens" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools ADHD screening for teens</Link> can help identify ADHD-consistent patterns, while the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> and <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> can screen for co-occurring anxiety and depression.
            </p>
          </section>

          <section>
            <h2>How to get your teenager screened</h2>
            <p>
              A self-screening tool like the <Link href="/adhd-test-for-teens" className="text-sage-600 dark:text-sage-400 underline">ADHD test for teens</Link> is a helpful starting point for understanding whether your teenager&apos;s patterns are consistent with ADHD. It is free, private, and takes under five minutes.
            </p>
            <p>
              However, only a qualified professional can make an official evaluation for ADHD. Here is what the evaluation process typically involves:
            </p>
            <ul>
              <li><strong>Clinical interview:</strong> A detailed developmental history from parents and the teen, covering symptoms across settings (home, school, social)</li>
              <li><strong>Rating scales:</strong> Standardized questionnaires completed by parents, teachers, and sometimes the teen themselves</li>
              <li><strong>Rule-out assessment:</strong> Evaluating whether symptoms are better explained by anxiety, depression, learning disabilities, sleep disorders, or other conditions</li>
              <li><strong>Neuropsychological testing:</strong> Sometimes recommended to assess executive function, working memory, and processing speed in detail</li>
            </ul>
            <p>
              Professionals who evaluate for ADHD include psychologists, psychiatrists, developmental pediatricians, and neuropsychologists. Your teen&apos;s pediatrician can often provide an initial screening and referral.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Supporting a teenager with ADHD</h2>
            <p>If your teen has been identified with ADHD, or if you suspect ADHD, these strategies can help:</p>
            <ul>
              <li><strong>External structure:</strong> Visual schedules, checklists, timers, and calendar apps compensate for executive function challenges</li>
              <li><strong>Break tasks into smaller steps:</strong> &quot;Clean your room&quot; is overwhelming; &quot;put all clothes in the hamper&quot; is manageable</li>
              <li><strong>Prioritize sleep:</strong> ADHD and sleep problems are bidirectional. Consistent sleep schedules, screen limits before bed, and a calming bedtime routine make a measurable difference</li>
              <li><strong>Exercise regularly:</strong> Physical activity improves attention, mood, and executive function in teens with ADHD</li>
              <li><strong>School accommodations:</strong> A 504 plan or IEP can provide extended time on tests, preferential seating, reduced homework load, and other supports</li>
              <li><strong>Avoid the &quot;lazy&quot; label:</strong> ADHD is not a character flaw. Reframing challenges as neurological differences rather than willful behavior reduces shame and improves the parent-teen relationship</li>
              <li><strong>Consider therapy:</strong> CBT adapted for ADHD helps teens develop practical skills for organization, time management, and emotional regulation</li>
            </ul>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Screen for ADHD patterns</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. For parents and teens.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/adhd-test-for-teens" className="btn-primary text-sm">Take the Teen ADHD Screening</Link>
              <Link href="/asrs-adhd-screening" className="btn-primary text-sm">Adult ADHD Screening (ASRS)</Link>
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
              <Link href="/adhd-test-for-teens" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Teen ADHD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">ADHD screening designed for teenagers</p>
              </Link>
              <Link href="/asrs-adhd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ASRS ADHD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Adult ADHD screening (ages 18+)</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for co-occurring depression</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for co-occurring anxiety</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/adult-adhd-signs" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Adult ADHD Signs</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Signs you might have missed</p>
              </Link>
              <Link href="/blog/what-is-adhd-in-adults" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Is ADHD in Adults?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Symptoms, diagnosis, and treatment</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

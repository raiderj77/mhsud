import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/adhd-adults-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "adhd-adults-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/adhd-adults-guide",
  title: "ADHD Test for Adults: How to Know If You Should Get Screened",
  description:
    "Most adults with ADHD were not diagnosed in childhood. Learn the common signs of adult ADHD, why late diagnosis is increasingly common, and how the ASRS screening works.",
  keywords: [
    "ADHD test adults",
    "adult ADHD screening",
    "do I have ADHD",
    "adult ADHD symptoms",
    "ADHD self-test",
    "ADHD assessment adults",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can you develop ADHD as an adult?",
    answer:
      "ADHD originates during brain development and does not develop for the first time in adulthood. However, many adults were never identified in childhood \u2014 particularly those with the predominantly inattentive presentation, which lacks hyperactive behaviors that prompt referrals. What looks like \u201cdeveloping ADHD as an adult\u201d is usually a lifelong condition becoming visible as life demands exceed compensatory strategies.",
  },
  {
    question: "What does adult ADHD look like?",
    answer:
      "Adult ADHD often looks different from childhood stereotypes. Common presentations include chronic disorganization, difficulty finishing projects, time blindness, emotional reactivity, internal restlessness, difficulty sustaining attention in meetings, and impulsive decisions. Many adults describe being told they are \u201csmart but lazy\u201d or \u201cnot reaching their potential\u201d \u2014 a pattern of underperformance relative to ability.",
  },
  {
    question: "Should I get tested for ADHD as an adult?",
    answer:
      "Consider an assessment if you recognize a persistent pattern of inattention, disorganization, impulsivity, or emotional reactivity that interferes with work, relationships, or daily functioning. If you have always struggled with time management and organization despite genuinely trying, and these struggles trace back to childhood, a screening is a reasonable starting point. The ASRS-v1.1 takes under five minutes.",
  },
  {
    question: "Is ADHD overdiagnosed in adults?",
    answer:
      "The evidence suggests the opposite. Epidemiological studies estimate 2.5\u20134.4% of adults have ADHD, yet most remain unidentified. Underdiagnosis is particularly common in women, people of color, and those with inattentive presentations or high IQ who compensated through childhood. A careful professional evaluation remains important to distinguish ADHD from overlapping conditions like anxiety, depression, and sleep disorders.",
  },
];

export default function AdhdAdultsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "ADHD Test for Adults: How to Know If You Should Get Screened", description: "Most adults with ADHD were not diagnosed in childhood. Learn the common signs, why late diagnosis is common, and how ASRS screening works.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "ADHD Test for Adults", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            ADHD Test for Adults: How to Know If You Should Get Screened
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Most adults living with ADHD were never identified in childhood. They made it through school, maybe through college, maybe through decades of career and family life &mdash; often labeled &quot;lazy,&quot; &quot;disorganized,&quot; or &quot;not living up to their potential.&quot; For many, the possibility of ADHD only surfaces in their 30s, 40s, or even 50s, often triggered by a child&apos;s assessment or a moment of recognition in a social media post. If you are wondering whether you should get screened for ADHD as an adult, this guide will help you understand what to look for and how to take the next step.
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
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
            </p>
          </div>

          <section>
            <h2>Why most adults with ADHD were never identified</h2>
            <p>
              ADHD awareness has expanded dramatically, but for decades the condition was understood almost exclusively as a childhood problem &mdash; specifically, a problem of hyperactive boys disrupting classrooms. This narrow framing left out enormous groups of people:
            </p>
            <ul>
              <li><strong>Primarily inattentive presentation:</strong> Formerly called ADD, this form of ADHD involves difficulty sustaining attention, disorganization, and distractibility without the hyperactive behavior that prompts teacher referrals. These children often daydream quietly, lose homework, and underperform without anyone flagging a neurological cause.</li>
              <li><strong>Girls and women:</strong> ADHD in girls tends to present with inattention rather than hyperactivity, and is often attributed to anxiety, being &quot;spacey,&quot; or not trying hard enough. Research indicates that girls with ADHD are identified at approximately half the rate of boys.</li>
              <li><strong>High-IQ compensators:</strong> Intelligent children with ADHD often develop compensatory strategies &mdash; hyperfocusing during tests, using deadline pressure as a motivator, relying on natural ability rather than executive function. These strategies mask the condition until demands exceed the person&apos;s capacity to compensate, sometimes not until graduate school, a demanding career, or parenthood.</li>
              <li><strong>People of color:</strong> Research consistently shows that Black and Hispanic children are significantly less likely to receive an ADHD assessment than white children, even when they display identical symptoms. This underidentification carries into adulthood.</li>
            </ul>
            <p>
              If you were never assessed as a child, that does not mean you do not have ADHD. It may mean that the system was not equipped to recognize your particular presentation.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Common signs of ADHD in adults</h2>
            <p>
              Adult ADHD looks different from the childhood stereotype. Physical hyperactivity often diminishes or transforms into internal restlessness, and the primary impairments shift toward executive function challenges that affect work, relationships, and daily life. Common indicators include:
            </p>
            <ul>
              <li><strong>Chronic disorganization:</strong> Not occasional mess &mdash; a persistent pattern of cluttered spaces, lost items, forgotten appointments, and difficulty maintaining systems even when you set them up</li>
              <li><strong>Difficulty finishing projects:</strong> Starting with enthusiasm, then losing momentum as the novelty fades. A trail of unfinished books, abandoned hobbies, and half-completed tasks</li>
              <li><strong>Time blindness:</strong> Consistently misjudging how long tasks take, running late despite genuine effort, losing track of time during activities, and struggling with long-term planning</li>
              <li><strong>Emotional reactivity:</strong> Intense, fast emotional responses that feel disproportionate. Quick frustration, sensitivity to criticism, and difficulty letting go of slights. ADHD-related emotional dysregulation is increasingly recognized as a core feature, not just a secondary symptom</li>
              <li><strong>Internal restlessness:</strong> A sense of mental buzzing, difficulty sitting still in meetings, need for constant stimulation, or feeling driven to keep moving. In adults, this often replaces the obvious physical hyperactivity seen in children</li>
              <li><strong>Job-hopping and career instability:</strong> Changing jobs, careers, or educational paths more frequently than peers, often driven by boredom, interpersonal conflict, or underperformance</li>
              <li><strong>Relationship difficulties:</strong> Forgetting important dates, appearing to not listen during conversations, difficulty following through on commitments, and impulsive statements that damage relationships</li>
              <li><strong>Underperformance relative to ability:</strong> A persistent gap between what you know you are capable of and what you actually accomplish. The &quot;I&apos;m smart but I can&apos;t get it together&quot; experience</li>
            </ul>
            <p>
              The <Link href="/adhd-test-adults" className="text-sage-600 dark:text-sage-400 underline">adult ADHD screening</Link> can help you evaluate whether these patterns are consistent enough to warrant a professional assessment.
            </p>
          </section>

          <section>
            <h2>The &quot;but I graduated college&quot; problem</h2>
            <p>
              One of the most common reasons adults dismiss the possibility of ADHD is that they managed to succeed in school. &quot;If I had ADHD, how did I get through college?&quot; The answer, for many, is compensatory effort.
            </p>
            <p>
              People with ADHD and high cognitive ability often develop elaborate workarounds: pulling all-nighters because they cannot start work in advance, using the adrenaline of an approaching deadline as a substitute for dopamine-driven motivation, choosing majors and careers where they can hyperfocus, or relying on a structured partner or assistant to handle the organizational demands they cannot manage alone.
            </p>
            <p>
              These strategies work &mdash; until they do not. Common tipping points include:
            </p>
            <ul>
              <li>Graduate school or career advancement that demands sustained, self-directed effort without external structure</li>
              <li>Becoming a parent, which adds massive executive function demands on top of existing ones</li>
              <li>A partner who is no longer willing to compensate for organizational deficits</li>
              <li>Aging, which naturally reduces the cognitive resources available for compensation</li>
              <li>Burnout from years of expending twice the effort to accomplish what seems easy for others</li>
            </ul>
            <p>
              If any of these resonate, ADHD assessment may be worth pursuing regardless of your educational history.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>ADHD often first identified through a child&apos;s assessment</h2>
            <p>
              A surprisingly common path to adult ADHD identification begins with a child&apos;s evaluation. A parent takes their child for an ADHD assessment, listens to the clinician describe the symptoms, and realizes: &quot;Wait, I do all of those things.&quot;
            </p>
            <p>
              This is not coincidental. ADHD has a strong genetic component &mdash; heritability is estimated at 74%, making it one of the most heritable psychiatric conditions. If your child has ADHD, there is a significant probability that a biological parent does as well. The child&apos;s assessment creates a mirror in which the parent can finally see their own patterns clearly.
            </p>
            <p>
              If you are in this situation, the <Link href="/adhd-test-adults" className="text-sage-600 dark:text-sage-400 underline">adult ADHD screening</Link> is a reasonable next step. It takes under five minutes, is completely private, and can help you determine whether your own patterns warrant professional evaluation.
            </p>
          </section>

          <section>
            <h2>Co-occurring conditions that complicate the picture</h2>
            <p>
              ADHD in adults rarely exists alone. Research indicates high rates of co-occurring conditions:
            </p>
            <ul>
              <li><strong>Anxiety (approximately 47%):</strong> Many adults with ADHD develop anxiety as a consequence of living in a world that demands executive function skills they struggle to maintain. The anxiety is often secondary &mdash; driven by fear of forgetting something important, missing a deadline, or being &quot;found out&quot; as disorganized.</li>
              <li><strong>Depression (approximately 38%):</strong> Chronic underachievement, relationship difficulties, and the shame of repeatedly failing to meet commitments can lead to depression. Depression in adults with ADHD often has a strong component of demoralization &mdash; &quot;I know what I should do, I just cannot make myself do it.&quot;</li>
              <li><strong>Substance use:</strong> Adults with undiagnosed ADHD are more likely to develop problematic substance use, often as a form of self-medication. Stimulants like caffeine and nicotine can temporarily improve focus, while alcohol may quiet the internal restlessness.</li>
              <li><strong>Sleep disorders:</strong> ADHD is strongly associated with delayed sleep phase, insomnia, and poor sleep quality. Sleep deprivation, in turn, worsens every ADHD symptom. This bidirectional relationship means that sleep must be addressed as part of any ADHD management plan.</li>
            </ul>
            <p>
              These co-occurring conditions can mask ADHD, mimicking its symptoms or providing alternative explanations that satisfy clinicians who do not look further. A thorough assessment considers the full picture. The <Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21</Link> and <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> can help identify co-occurring depression, anxiety, and stress.
            </p>
          </section>

          <section>
            <h2>How adult ADHD screening works</h2>
            <p>
              The World Health Organization developed the Adult ADHD Self-Report Scale (ASRS-v1.1) as a screening tool for adult ADHD. It is one of the most widely used and best-validated screening instruments for this purpose. The full scale includes 18 questions that assess both inattentive and hyperactive-impulsive symptoms in an adult context.
            </p>
            <p>
              A screening is not an assessment. It identifies whether your symptom patterns are consistent with ADHD and whether a comprehensive evaluation is warranted. A positive screening result means &quot;this is worth investigating further with a professional,&quot; not &quot;you have ADHD.&quot;
            </p>
            <p>
              A comprehensive adult ADHD assessment typically involves:
            </p>
            <ul>
              <li>A clinical interview covering current symptoms and childhood history</li>
              <li>Rating scales completed by the individual and, ideally, someone who knows them well</li>
              <li>Ruling out other conditions that can mimic ADHD (thyroid disorders, sleep apnea, anxiety, depression, substance use)</li>
              <li>Assessment of functional impairment across domains (work, relationships, daily living)</li>
            </ul>
            <p>
              Evaluation can be conducted by psychiatrists, psychologists, neuropsychologists, and some primary care providers. Wait times can be long, so starting with a screening helps you determine whether to pursue the process.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Screen for adult ADHD</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. Takes under 5 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/adhd-test-adults" className="btn-primary text-sm">Take the Adult ADHD Screening</Link>
              <Link href="/asrs-adhd-screening" className="btn-primary text-sm">ASRS ADHD Screening</Link>
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
              <Link href="/adhd-test-adults" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Adult ADHD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">ADHD screening designed for adults</p>
              </Link>
              <Link href="/asrs-adhd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ASRS ADHD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-recommended Adult ADHD Self-Report Scale</p>
              </Link>
              <Link href="/dass-21-depression-anxiety-stress" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for depression, anxiety, and stress</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for co-occurring depression</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-is-adhd-in-adults" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Is ADHD in Adults</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Overview of adult ADHD symptoms and management</p>
              </Link>
              <Link href="/blog/what-does-asrs-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your ASRS Score Mean</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Interpreting ASRS screening results</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

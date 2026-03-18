import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/anxiety-teens-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "anxiety-teens-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/anxiety-teens-guide",
  title: "Anxiety in Teenagers: How to Recognize It and What Actually Helps",
  description:
    "About 32% of teens have an anxiety disorder. Learn how anxiety presents in adolescents, the role of social media, evidence-based approaches, and how a free screening can help.",
  keywords: [
    "teen anxiety",
    "anxiety in teenagers",
    "signs of anxiety in teens",
    "teenage anxiety symptoms",
    "anxiety test for teens",
    "adolescent anxiety",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is anxiety normal for teenagers?",
    answer:
      "Some anxiety is normal during adolescence \u2014 worrying before a test or feeling nervous about a first date are age-appropriate responses. Anxiety becomes a concern when it is persistent, disproportionate, and interferes with daily functioning like school attendance, friendships, or activities they used to enjoy. About 32% of adolescents meet criteria for an anxiety disorder.",
  },
  {
    question: "How much anxiety is too much for a teen?",
    answer:
      "The line between normal worry and an anxiety disorder comes down to intensity, duration, and functional impact. If anxiety causes a teen to avoid school, drop activities, withdraw from friends, or experience frequent physical symptoms like stomachaches and headaches, it has likely crossed into clinical territory. A screening tool can help identify whether professional evaluation is warranted.",
  },
  {
    question: "Does social media cause teen anxiety?",
    answer:
      "Social media does not single-handedly cause anxiety disorders, but research shows it can amplify existing vulnerabilities through social comparison, FOMO, cyberbullying, sleep disruption from late-night use, and reduced in-person connection. The APA recommends monitoring social media use and having open conversations about its effects rather than blanket bans.",
  },
  {
    question: "What helps a teenager with anxiety?",
    answer:
      "Cognitive-behavioral therapy (CBT), including gradual exposure to feared situations, is the most effective approach. Family involvement matters \u2014 parents can learn to avoid accommodating avoidance while providing support. Lifestyle factors help too: regular physical activity, adequate sleep, and limited caffeine. For moderate to severe cases, SSRIs may be discussed alongside therapy. The first step is an open conversation and professional evaluation.",
  },
];

export default function AnxietyTeensGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Anxiety in Teenagers: How to Recognize It and What Actually Helps", description: "About 32% of teens have an anxiety disorder. Learn how anxiety presents in adolescents, the role of social media, and evidence-based approaches.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Anxiety in Teenagers", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Anxiety in Teenagers: How to Recognize It and What Actually Helps
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Approximately 32% of adolescents have an anxiety disorder, according to the National Institute of Mental Health &mdash; making anxiety the most common mental health condition among teenagers. Social anxiety is especially prevalent in this age group. Yet anxiety in teens is frequently dismissed as shyness, perfectionism, or &quot;just being a teenager.&quot; Understanding what adolescent anxiety actually looks like is essential for getting teens the support they need before avoidance patterns become entrenched.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you or your teen are in crisis</p>
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
            <h2>How anxiety presents in teenagers</h2>
            <p>
              Anxiety in adolescents often does not look like what adults imagine. While an anxious adult might describe persistent worry, a teen&apos;s anxiety more commonly manifests through behaviors that can be mistaken for other issues:
            </p>
            <ul>
              <li><strong>Avoidance:</strong> School refusal, dropping extracurricular activities, declining invitations, avoiding new situations. Avoidance is the hallmark behavioral sign of anxiety &mdash; the teen is not being lazy or defiant, they are trying to escape situations that feel overwhelming.</li>
              <li><strong>Physical complaints:</strong> Stomachaches, headaches, nausea, muscle tension, rapid heartbeat, and dizziness. Many anxious teens end up in the pediatrician&apos;s office for physical symptoms before anyone considers anxiety.</li>
              <li><strong>Perfectionism:</strong> Spending excessive time on assignments, refusing to turn in work that is not &quot;perfect,&quot; catastrophizing about grades, or becoming paralyzed by fear of failure.</li>
              <li><strong>Reassurance-seeking:</strong> Repeatedly asking parents, teachers, or friends for confirmation that things will be okay, that they did not make a mistake, or that people are not upset with them.</li>
              <li><strong>Sleep disturbance:</strong> Difficulty falling asleep due to racing thoughts, nightmares, or waking up anxious. Sleep problems and anxiety create a reinforcing cycle in adolescents.</li>
              <li><strong>Irritability:</strong> Like depression, anxiety in teens often presents as irritability and short-temperedness rather than visible worry. The teen may snap at family members or have a low frustration tolerance.</li>
            </ul>
          </section>

          <section>
            <h2>What drives teen anxiety?</h2>
            <p>
              Adolescence is inherently a period of heightened anxiety risk. The brain is undergoing significant development &mdash; the amygdala (threat detection) matures before the prefrontal cortex (rational regulation) &mdash; creating a neurological imbalance that literally makes teens more reactive to perceived threats. Add environmental pressures, and it is easy to see why anxiety peaks during this stage:
            </p>
            <ul>
              <li><strong>Academic pressure:</strong> Competitive college admissions, standardized testing, GPA tracking from freshman year, and heavy course loads create chronic performance anxiety.</li>
              <li><strong>Social media and peer comparison:</strong> Teens are exposed to curated versions of their peers&apos; lives constantly. The comparison is relentless, and the feedback loop &mdash; likes, comments, followers &mdash; ties social standing to quantifiable metrics.</li>
              <li><strong>Identity formation:</strong> Teens are actively figuring out who they are across multiple dimensions: gender, sexuality, values, beliefs, and social identity. Uncertainty in any of these areas can fuel anxiety.</li>
              <li><strong>Future uncertainty:</strong> Climate anxiety, economic concerns, and an awareness of global instability contribute to a pervasive sense that the future is unpredictable and possibly threatening.</li>
              <li><strong>Family dynamics:</strong> Parental conflict, divorce, financial stress, or a parent&apos;s own mental health challenges all increase a teen&apos;s anxiety risk.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Social media&apos;s role in teen anxiety</h2>
            <p>
              The relationship between social media and teen anxiety deserves specific attention because it is both pervasive and nuanced. Social media does not single-handedly &quot;cause&quot; anxiety disorders, but research shows it can amplify anxiety through several mechanisms:
            </p>
            <ul>
              <li><strong>Social comparison:</strong> Teens compare their real lives to curated highlight reels, creating a persistent sense of inadequacy. This is especially damaging for appearance-related anxiety.</li>
              <li><strong>Cyberbullying:</strong> Unlike in-person bullying, cyberbullying follows teens home. There is no escape, and the audience can be vast. About 37% of students between ages 12&ndash;17 report being cyberbullied.</li>
              <li><strong>FOMO (fear of missing out):</strong> Seeing peers at events or gatherings in real time creates acute anxiety about social exclusion.</li>
              <li><strong>Sleep disruption:</strong> Blue light exposure and the stimulating nature of social media interfere with sleep onset. Late-night scrolling is common among anxious teens who use their phones to self-soothe.</li>
              <li><strong>Reduced in-person connection:</strong> Time spent on social media displaces face-to-face interaction, which is more effective at building genuine social skills and reducing social anxiety.</li>
            </ul>
            <p>
              The American Psychological Association recommends that parents monitor social media use, have ongoing conversations about its effects, and model healthy technology habits rather than imposing blanket bans that may backfire.
            </p>
          </section>

          <section>
            <h2>How screening helps identify when anxiety has crossed a line</h2>
            <p>
              The <Link href="/anxiety-test-for-teens" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools anxiety screening for teens</Link> is a free, private self-assessment that helps identify whether a teen&apos;s anxiety has moved beyond normal developmental worry into something that warrants professional attention. It takes a few minutes, runs entirely in the browser, and stores no data.
            </p>
            <p>
              An anxiety screening provides structure. Instead of an abstract conversation about &quot;are you anxious?&quot; it asks specific, concrete questions about symptoms and their frequency. This makes it easier for teens who may struggle to articulate what they are feeling &mdash; and for parents who may not know the right questions to ask.
            </p>
            <p>
              If the screening suggests elevated anxiety, you can bring the results to a pediatrician or mental health professional. For teens who may also be experiencing social anxiety specifically, the <Link href="/spin-social-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">SPIN social anxiety screening</Link> provides a more targeted assessment. And if anxiety feels acute in the moment, the <Link href="/box-breathing-exercise" className="text-sage-600 dark:text-sage-400 underline">box breathing exercise</Link> offers an immediate, evidence-based calming technique.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What actually helps teens with anxiety</h2>
            <p>
              Anxiety is one of the most treatable mental health conditions, especially in adolescents. Evidence-based approaches include:
            </p>
            <ul>
              <li><strong>Cognitive-behavioral therapy (CBT):</strong> The gold-standard approach for anxiety. CBT helps teens identify anxious thought patterns, challenge cognitive distortions, and gradually face feared situations through exposure. Numerous studies show CBT produces significant improvement in 60&ndash;80% of anxious youth.</li>
              <li><strong>Exposure therapy:</strong> A core component of CBT, exposure involves gradually and systematically confronting feared situations rather than avoiding them. Avoidance makes anxiety worse over time; exposure teaches the brain that the feared outcome is either unlikely or manageable.</li>
              <li><strong>Family involvement:</strong> Parents play a critical role. Family accommodation &mdash; when parents help their teen avoid anxiety-provoking situations &mdash; is well-intentioned but reinforces the anxiety cycle. Learning to support without accommodating is one of the most impactful things parents can do.</li>
              <li><strong>Lifestyle supports:</strong> Regular physical activity (at least 30 minutes most days), consistent sleep schedules, limited caffeine, and mindfulness or relaxation techniques all reduce anxiety baseline.</li>
              <li><strong>Medication:</strong> For moderate to severe anxiety, SSRIs may be recommended alongside therapy. Medication alone is less effective than medication combined with CBT.</li>
            </ul>
            <p>
              The most important message: anxiety does not have to define a teen&apos;s adolescence. With the right support, most teens see significant improvement. The key is recognizing the problem and seeking help early, before avoidance patterns become deeply entrenched.
            </p>
          </section>

          <section>
            <h2>What parents can do today</h2>
            <p>
              Supporting an anxious teen requires a balance of empathy and gentle encouragement to face difficult situations:
            </p>
            <ul>
              <li><strong>Validate, then encourage.</strong> &quot;I can see this feels really scary. I believe you. And I also believe you can handle it.&quot;</li>
              <li><strong>Avoid enabling avoidance.</strong> It feels compassionate to let your teen skip the party, stay home from school, or avoid the presentation. But each accommodation teaches the brain that avoidance is the solution.</li>
              <li><strong>Take the <Link href="/anxiety-test-for-teens" className="text-sage-600 dark:text-sage-400 underline">teen anxiety screening</Link> together.</strong> It creates a shared starting point and removes the stigma of &quot;something being wrong.&quot;</li>
              <li><strong>Manage your own anxiety.</strong> Anxious parents are more likely to have anxious children. Modeling healthy coping matters more than most advice.</li>
              <li><strong>Seek professional help early.</strong> Do not wait until anxiety has caused significant school avoidance or social isolation. Early intervention produces the best outcomes.</li>
              <li><strong>Protect sleep.</strong> Establish phone-free bedtime routines. Charging devices outside the bedroom reduces nighttime scrolling.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check in on your teen&apos;s anxiety</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. Takes under 5 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/anxiety-test-for-teens" className="btn-primary text-sm">Take the Teen Anxiety Screening</Link>
              <Link href="/box-breathing-exercise" className="btn-primary text-sm">Try Box Breathing</Link>
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
              <Link href="/anxiety-test-for-teens" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Teen Anxiety Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Anxiety screening designed for adolescents</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated anxiety screening for adults and older teens</p>
              </Link>
              <Link href="/spin-social-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">SPIN Social Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Social phobia screening inventory</p>
              </Link>
              <Link href="/box-breathing-exercise" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Box Breathing Exercise</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided 4-4-4-4 breathing for immediate calm</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/anxiety-coping-strategies" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Anxiety Coping Strategies</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Evidence-based techniques for managing anxiety symptoms</p>
              </Link>
              <Link href="/blog/social-anxiety-vs-introversion" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Social Anxiety vs. Introversion</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding the key differences</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

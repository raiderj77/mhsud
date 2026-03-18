import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/burnout-parents-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "burnout-parents-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/burnout-parents-guide",
  title: "Parental Burnout: When the Demands of Parenting Become Overwhelming",
  description:
    "Parental burnout affects an estimated 5-20% of parents. Learn the three dimensions, risk factors, how it differs from regular stress, and strategies for recovery.",
  keywords: [
    "parental burnout",
    "parent burnout",
    "burned out parent",
    "parenting burnout symptoms",
    "overwhelmed parent",
    "burnout test parents",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is parental burnout a real condition?",
    answer:
      "Yes. Parental burnout is a well-researched psychological condition identified by researchers Roskam and Mikolajczak at the University of Louvain. It has its own validated assessment instrument, the Parental Burnout Assessment (PBA), and is established as a measurable syndrome with three dimensions: exhaustion in the parenting role, emotional distancing from children, and loss of parenting efficacy.",
  },
  {
    question: "How is parental burnout different from regular parenting stress?",
    answer:
      "Regular parenting stress is temporary and situation-specific \u2014 a difficult week or sleep regression. Parental burnout is persistent exhaustion, emotional numbness toward your children, and a feeling that you have lost yourself as a parent. The key distinction is duration and the presence of emotional distancing: burned-out parents feel they are running on empty with no recovery in sight.",
  },
  {
    question: "Does parental burnout mean I'm a bad parent?",
    answer:
      "No. Parental burnout is about unsustainable demands exceeding available resources, not personal failure. Research suggests that parents who care deeply about doing a good job are often more vulnerable precisely because they invest so much. Recognizing burnout is a sign of self-awareness that ultimately benefits both you and your children.",
  },
  {
    question: "Can parental burnout affect my children?",
    answer:
      "Research indicates that parental burnout can affect children through increased parental neglect and conflict behaviors. Burned-out parents may become emotionally unavailable, more irritable, or inconsistent. However, recognizing and addressing burnout early can prevent these effects. Seeking support is one of the most protective things you can do for your children.",
  },
];

export default function BurnoutParentsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Parental Burnout: When the Demands of Parenting Become Overwhelming", description: "Parental burnout affects 5-20% of parents. Learn the three dimensions, risk factors, and strategies for recovery.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Parental Burnout Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Parental Burnout: When the Demands of Parenting Become Overwhelming
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Most parents feel overwhelmed sometimes. But for an estimated 5&ndash;20% of parents, the demands of parenting become so chronically exhausting that they cross into something more serious: parental burnout. This is not the same as having a hard week or feeling tired after a sleepless night. Parental burnout is a distinct psychological syndrome &mdash; identified and validated by researchers Roskam and Mikolajczak in 2018 &mdash; that involves persistent exhaustion, emotional distancing from your children, and a loss of confidence in your role as a parent. If you are feeling this way, you are not a bad parent. You are a parent whose resources have been depleted beyond what is sustainable.
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
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>What is parental burnout</h2>
            <p>
              Parental burnout is distinct from occupational burnout. While workplace burnout stems from job-related stressors, parental burnout is rooted specifically in the parenting role. Researchers identified three core dimensions:
            </p>
            <ul>
              <li><strong>Exhaustion in the parenting role:</strong> A deep, pervasive fatigue connected to being a parent. Not just physical tiredness, but emotional and cognitive depletion that makes even routine parenting tasks feel overwhelming</li>
              <li><strong>Emotional distancing from children:</strong> A protective withdrawal where you go through the motions of parenting without feeling emotionally present. You may notice that you interact with your children on autopilot or feel numb when they need emotional connection</li>
              <li><strong>Loss of parenting efficacy:</strong> A sense that you are no longer a good parent &mdash; that you have lost the ability to do the job well. This contrasts sharply with the parent you used to be or the parent you want to be</li>
            </ul>
            <p>
              These three dimensions parallel the Maslach model of occupational burnout (exhaustion, depersonalization, reduced accomplishment), but they are specific to the parenting context.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Risk factors for parental burnout</h2>
            <p>
              Parental burnout does not happen because you are weak or incapable. It happens when demands chronically outweigh resources. Research has identified several key risk factors:
            </p>
            <ul>
              <li><strong>Perfectionism:</strong> Parents who hold themselves to unrealistically high standards are significantly more vulnerable. The gap between the idealized parent they want to be and the exhausted parent they actually are creates chronic distress</li>
              <li><strong>Lack of support:</strong> Parenting without a co-parent, extended family, or community support dramatically increases burnout risk. Isolation is one of the strongest predictors</li>
              <li><strong>Children with special needs:</strong> Parents of children with disabilities, chronic illness, behavioral challenges, or neurodevelopmental conditions face additional demands that increase burnout vulnerability</li>
              <li><strong>Single parenting:</strong> Carrying the full weight of parenting responsibilities without a partner to share the load amplifies every other risk factor</li>
              <li><strong>Financial stress:</strong> Money stress adds a constant layer of anxiety to every parenting decision and limits access to support resources like childcare, therapy, and respite</li>
              <li><strong>Mental load:</strong> The invisible cognitive labor of tracking appointments, managing schedules, anticipating needs, and keeping the household running falls disproportionately on one parent &mdash; usually mothers. The <Link href="/mental-load-calculator" className="text-sage-600 dark:text-sage-400 underline">mental load calculator</Link> can help you understand this invisible burden</li>
            </ul>
          </section>

          <section>
            <h2>How parental burnout differs from depression</h2>
            <p>
              Parental burnout and depression share some symptoms &mdash; fatigue, emotional numbness, withdrawal &mdash; but they are not the same thing. Parental burnout is context-specific: the exhaustion and detachment are connected to the parenting role. A burned-out parent may function well at work and enjoy hobbies but feel depleted the moment they walk through the door at home.
            </p>
            <p>
              Depression, by contrast, tends to affect all areas of life. Depressed parents may lose interest in work, relationships, and activities across the board, not just parenting.
            </p>
            <p>
              That said, parental burnout and depression can co-occur, and untreated parental burnout may increase the risk of developing depression over time. If you are unsure whether what you are experiencing is burnout, depression, or both, the <Link href="/burnout-test-parents" className="text-sage-600 dark:text-sage-400 underline">parental burnout screening</Link> and the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 depression screening</Link> can help you distinguish between them.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Signs that you may be experiencing parental burnout</h2>
            <p>Common indicators include:</p>
            <ul>
              <li>Feeling like you have nothing left to give your children by the end of the day &mdash; or by midmorning</li>
              <li>Going through the motions of parenting without feeling connected</li>
              <li>Snapping at your children over small things and then feeling guilty</li>
              <li>Fantasizing about escaping your life or wishing you had not become a parent</li>
              <li>Comparing yourself to other parents and always coming up short</li>
              <li>Physical exhaustion that rest does not fix</li>
              <li>Losing interest in activities you used to enjoy with your children</li>
              <li>Feeling resentful toward your partner, your children, or both</li>
              <li>Difficulty remembering the last time you felt like yourself</li>
            </ul>
          </section>

          <section>
            <h2>Strategies for recovery from parental burnout</h2>
            <ul>
              <li><strong>Lower the bar:</strong> Perfectionism is one of the strongest drivers of parental burnout. Good enough parenting is genuinely good enough. Your children need a present parent more than a perfect one</li>
              <li><strong>Redistribute the mental load:</strong> If you have a co-parent, explicitly name and divide the invisible labor. Use shared calendars, lists, and task ownership rather than defaulting to one person managing everything</li>
              <li><strong>Build micro-breaks into your day:</strong> Even five minutes of solitude &mdash; a locked bathroom door, a walk to the mailbox, noise-canceling headphones during naptime &mdash; provides necessary recovery</li>
              <li><strong>Accept help without guilt:</strong> Let grandparents babysit. Accept the neighbor&apos;s offer to watch the kids. Use screen time when you need a break. These are not failures</li>
              <li><strong>Connect with other parents:</strong> Honest conversation with parents who understand can reduce the isolation that fuels burnout. Avoid social media comparisons that make things worse</li>
              <li><strong>Seek therapy:</strong> A therapist can help you identify which specific factors are driving your burnout and develop targeted strategies. Look for someone experienced with parental stress, family systems, or burnout</li>
              <li><strong>Prioritize sleep:</strong> Sleep deprivation amplifies every other burnout symptom. If possible, take turns with nighttime duties, go to bed earlier, or nap when you can</li>
            </ul>
          </section>

          <section>
            <h2>When to seek professional help</h2>
            <p>Reach out to a mental health professional if:</p>
            <ul>
              <li>You feel emotionally numb toward your children most of the time</li>
              <li>You are having thoughts of harming yourself or your children</li>
              <li>Burnout is co-occurring with depression or anxiety</li>
              <li>You are using substances to cope with parenting stress</li>
              <li>Your relationship with your partner is breaking down under the strain</li>
              <li>You feel unable to meet your children&apos;s basic needs</li>
            </ul>
            <p>
              The <Link href="/burnout-test-parents" className="text-sage-600 dark:text-sage-400 underline">parental burnout screening</Link> can help you articulate what you are experiencing. It is free, private, takes under five minutes, and can give you a structured picture to bring to a professional.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check your burnout level</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/burnout-test-parents" className="btn-primary text-sm">Take the Parental Burnout Check</Link>
              <Link href="/mental-load-calculator" className="btn-primary text-sm">Mental Load Calculator</Link>
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
              <Link href="/burnout-test-parents" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Parental Burnout Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Burnout screening tailored for parents</p>
              </Link>
              <Link href="/mental-load-calculator" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Mental Load Calculator</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Assess invisible cognitive labor</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated depression screening</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated anxiety screening</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/burnout-symptoms-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Burnout Symptoms Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">General burnout signs and WHO definition</p>
              </Link>
              <Link href="/blog/depression-vs-anxiety" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression vs. Anxiety</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding the difference</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

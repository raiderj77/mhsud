import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/substance-abuse-parents-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "substance-abuse-parents-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/substance-abuse-parents-guide",
  title: "Substance Use Screening for Parents: Honest Assessment Without Judgment",
  description:
    "Parents face unique substance use pressures including sleep deprivation, stress, and cultural normalization. Learn how to privately screen your patterns without shame and find confidential support.",
  keywords: [
    "parent substance use",
    "substance abuse test parents",
    "am I drinking too much as a parent",
    "parenting and alcohol",
    "substance use screening parents",
    "parent drinking problem",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is it normal to drink to cope with parenting stress?",
    answer:
      "Using alcohol to manage parenting stress is extremely common, but common does not mean risk-free. Research from the American Academy of Pediatrics indicates that parents \u2014 particularly mothers \u2014 have seen rising rates of alcohol use since 2016, accelerated during the pandemic. Occasional use and problematic use exist on a spectrum. The key questions are whether your use is escalating over time, whether you feel you need to drink to get through parenting tasks, and whether you have tried to cut back but found it difficult. A screening can help you understand where you fall on that spectrum without judgment.",
  },
  {
    question: "How does parental substance use affect children?",
    answer:
      "The Adverse Childhood Experiences (ACEs) study identified household substance use as one of the ten original ACE categories associated with long-term health consequences. Children in homes with parental substance use may experience inconsistent caregiving, emotional unavailability, attachment disruption, and increased anxiety. They are statistically more likely to develop substance use patterns themselves. However, outcomes depend heavily on the severity of use, the presence of other protective factors, and whether the parent seeks support. Recognizing patterns early and taking action is one of the most protective things a parent can do.",
  },
  {
    question: "Will screening lead to involvement with child protective services?",
    answer:
      "The MindCheck Tools substance use screening is completely private. It runs entirely in your browser, does not collect personal information, and does not store or transmit your answers. No one \u2014 including this website \u2014 can see your results. Self-screening is not a reportable event. It is a personal tool to help you evaluate your own patterns privately. If you decide to seek professional help afterward, conversations with therapists and counselors are protected by confidentiality laws, with very limited exceptions related to imminent danger to a child.",
  },
  {
    question: "Where can parents get confidential help?",
    answer:
      "SAMHSA\u2019s National Helpline (1-800-662-4357) is free, confidential, and available 24/7 in English and Spanish. They provide referrals to local treatment facilities, support groups, and community-based organizations. Many therapists specialize in parental substance use and offer telehealth appointments for privacy and convenience. Mutual support groups like SMART Recovery have online meetings available at any hour. Your primary care provider can also discuss your concerns confidentially. Remember that seeking help is an act of responsible parenting, not a failure.",
  },
];

export default function SubstanceAbuseParentsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Substance Use Screening for Parents: Honest Assessment Without Judgment", description: "Parents face unique substance use pressures. Learn how to privately screen your patterns without shame and find confidential support.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Substance Use Screening for Parents", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Substance Use Screening for Parents: Honest Assessment Without Judgment
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Parenting is one of the most demanding roles a person can hold &mdash; and one of the least supported. Sleep deprivation, relentless stress, financial pressure, identity loss, and cultural messages that normalize drinking as a parenting coping mechanism create a perfect storm for substance use to quietly escalate. If you are a parent wondering whether your drinking or substance use has crossed a line, you are not alone. This guide is about giving you the space to honestly evaluate your patterns &mdash; privately, without shame, and with clear next steps if you want them.
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
            <h2>Why parents are uniquely vulnerable to substance use</h2>
            <p>
              Parenting involves a set of stressors that overlap in ways few other life experiences match. Understanding these pressures is not about making excuses &mdash; it is about recognizing the context that makes substance use escalation so common among parents.
            </p>
            <ul>
              <li><strong>Sleep deprivation:</strong> Chronic sleep loss &mdash; especially in the early years &mdash; impairs judgment, emotional regulation, and impulse control. Parents operating on fragmented sleep are neurologically more vulnerable to reaching for substances to manage their state.</li>
              <li><strong>Unrelenting stress without recovery:</strong> Unlike a demanding job, parenting has no weekends, no PTO, and no clock-out time. The absence of genuine recovery periods creates chronic stress that compounds over months and years.</li>
              <li><strong>&quot;Mommy wine culture&quot; and normalization:</strong> Social media, greeting cards, T-shirts, and playdate culture have normalized heavy drinking among parents &mdash; particularly mothers. &quot;Wine o&apos;clock,&quot; &quot;mama needs her juice,&quot; and &quot;it&apos;s five o&apos;clock somewhere&quot; messaging frames alcohol as a harmless parenting reward. This cultural normalization makes it harder to recognize when casual use has become problematic.</li>
              <li><strong>Isolation:</strong> New parents and stay-at-home parents often experience profound social isolation. Loneliness is a well-documented risk factor for substance use across all populations, and parents are not exempt.</li>
              <li><strong>Loss of identity:</strong> Many parents describe losing themselves in the parenting role &mdash; their interests, friendships, career identity, and sense of self get compressed or eliminated. Substances can fill the void where a sense of self used to be.</li>
              <li><strong>Financial pressure:</strong> The cost of raising children creates persistent financial stress that compounds every other stressor. Financial anxiety is one of the most consistent predictors of increased alcohol and substance use.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>What substance use looks like in a parenting context</h2>
            <p>
              Functional impairment from substance use may look different for parents than for other populations. Traditional screening questions often focus on workplace performance, legal problems, or physical health consequences. But for parents, the signs may be more subtle:
            </p>
            <ul>
              <li>Consistently drinking after the children go to bed &mdash; and finding it difficult to skip a night</li>
              <li>Using substances specifically to cope with the stress, frustration, or boredom of parenting</li>
              <li>Hiding the amount you use from your partner or family members</li>
              <li>Feeling irritable or anxious if you cannot use at your usual time</li>
              <li>Planning activities around when you will be able to drink or use</li>
              <li>Driving with children after having &quot;just a couple&quot;</li>
              <li>Using substances to manage the emotional weight of parenting a child with special needs, behavioral challenges, or health issues</li>
              <li>Noticing that your tolerance has increased &mdash; you need more to achieve the same effect</li>
            </ul>
            <p>
              None of these patterns automatically indicate a substance use disorder. But they are worth examining honestly. The <Link href="/substance-abuse-test-parents" className="text-sage-600 dark:text-sage-400 underline">substance use screening for parents</Link> helps you evaluate these patterns in a structured, private way &mdash; no account required, no data stored, and no one sees your results.
            </p>
          </section>

          <section>
            <h2>The connection between parental substance use and children&apos;s wellbeing</h2>
            <p>
              This section is not included to add guilt. Guilt is rarely a useful motivator and often makes substance use worse. But understanding the impact on children can clarify the stakes and motivate change.
            </p>
            <p>
              The landmark Adverse Childhood Experiences (ACEs) study identified household substance use as one of the ten original ACE categories. Each ACE a child accumulates increases their statistical risk for physical health problems, mental health conditions, and substance use in adulthood. This is not destiny &mdash; it is probability, and it can be changed.
            </p>
            <p>
              Parental substance use affects children through several pathways:
            </p>
            <ul>
              <li><strong>Attachment disruption:</strong> Children need consistent, emotionally available caregivers to form secure attachments. Substance use can create periods of emotional unavailability that disrupt this process.</li>
              <li><strong>Modeling behavior:</strong> Children learn coping strategies by watching their parents. If the primary model for managing stress is reaching for a drink or a substance, children internalize that pattern.</li>
              <li><strong>Unpredictability:</strong> Even when use is not severe, it can create subtle inconsistencies in parenting &mdash; mood shifts, altered patience levels, or changes in responsiveness that children pick up on.</li>
              <li><strong>Intergenerational patterns:</strong> Research consistently shows that children of parents with substance use concerns are 2&ndash;4 times more likely to develop similar patterns themselves. Breaking this cycle is one of the most powerful things a parent can do.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Shame is the biggest barrier to honest assessment</h2>
            <p>
              If you feel resistance to looking honestly at your substance use, that is completely normal. Shame and stigma are the primary reasons parents avoid self-assessment and delay seeking help.
            </p>
            <p>
              Parents &mdash; especially mothers &mdash; face a double bind. Society normalizes heavy drinking as a parenting coping mechanism, then punishes parents who develop problems from doing exactly what the culture encouraged. The fear of being seen as a &quot;bad parent,&quot; of losing custody, of being judged by other parents, keeps many people stuck in patterns they want to change.
            </p>
            <p>
              The <Link href="/substance-abuse-test-parents" className="text-sage-600 dark:text-sage-400 underline">substance use screening for parents</Link> exists precisely because of this barrier. It is designed for parents to evaluate their own patterns privately, without creating a record, without involving anyone else, and without judgment. Your answers stay in your browser. No one &mdash; not your partner, your doctor, your employer, or this website &mdash; ever sees them.
            </p>
            <p>
              This screening is about your wellbeing AND your children&apos;s wellbeing. Recognizing that something may need to change is not a failure &mdash; it is responsible parenting.
            </p>
          </section>

          <section>
            <h2>Steps you can take after screening</h2>
            <p>
              Regardless of your screening results, here are constructive next steps:
            </p>
            <ul>
              <li><strong>If your results suggest low risk:</strong> Continue to monitor your patterns. Periodic self-assessment helps you stay aware of gradual changes that might otherwise go unnoticed.</li>
              <li><strong>If your results suggest moderate risk:</strong> Consider talking to your primary care provider. You can also explore the <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT alcohol screening</Link> or the <Link href="/cage-aid-substance-abuse-screening" className="text-sage-600 dark:text-sage-400 underline">CAGE-AID screening</Link> for additional perspective.</li>
              <li><strong>If your results suggest higher risk:</strong> Reach out to SAMHSA&apos;s National Helpline (1-800-662-4357) for free, confidential referrals. Many treatment programs offer telehealth and flexible scheduling specifically for parents.</li>
              <li><strong>Assess the broader impact:</strong> The <Link href="/family-impact-assessment" className="text-sage-600 dark:text-sage-400 underline">family impact assessment</Link> can help you understand how substance use may be affecting your family system as a whole.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Screen your substance use patterns privately</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. Your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/substance-abuse-test-parents" className="btn-primary text-sm">Take the Parent Substance Use Screening</Link>
              <Link href="/family-impact-assessment" className="btn-primary text-sm">Family Impact Assessment</Link>
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
              <Link href="/substance-abuse-test-parents" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Substance Use Screening for Parents</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Private substance use screening designed for parents</p>
              </Link>
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-developed alcohol use screening</p>
              </Link>
              <Link href="/cage-aid-substance-abuse-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CAGE-AID Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick substance use screening tool</p>
              </Link>
              <Link href="/family-impact-assessment" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Family Impact Assessment</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand how substance use affects your family</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/family-impact-addiction-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Family Impact of Addiction</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How substance use affects family systems</p>
              </Link>
              <Link href="/blog/what-are-substance-use-disorders" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Understanding Substance Use Disorders</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What substance use disorders are and how they develop</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

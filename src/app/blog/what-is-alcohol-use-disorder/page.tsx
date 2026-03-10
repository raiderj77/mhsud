import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-is-alcohol-use-disorder`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-is-alcohol-use-disorder")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-is-alcohol-use-disorder",
  title: "What Is Alcohol Use Disorder (AUD)?",
  description:
    "Alcohol use disorder is a medical condition involving loss of control over drinking despite negative consequences. Learn the symptoms, risk factors, and evidence-based treatments.",
  keywords: [
    "what is alcohol use disorder",
    "AUD symptoms",
    "alcohol use disorder treatment",
    "alcohol dependence explained",
    "signs of alcohol use disorder",
    "DSM-5 alcohol use disorder",
    "AUD vs alcoholism",
    "alcohol use disorder causes",
    "AUD screening",
    "alcohol use disorder risk factors",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is alcohol use disorder a choice?",
    answer:
      "No. AUD is recognized as a medical condition by the American Medical Association, the American Society of Addiction Medicine, and the DSM-5. Research demonstrates measurable changes in brain structure and function associated with AUD. While initial drinking involves choice, the development of AUD involves neurobiological processes that reduce control over use.",
  },
  {
    question: "Can someone with AUD ever drink moderately again?",
    answer:
      "For mild AUD, moderation may be a realistic goal for some people, and research on controlled drinking programs supports this for certain presentations. For moderate-to-severe AUD \u2014 particularly with significant physiological dependence \u2014 abstinence is typically the safer and more sustainable goal. This is an individual decision best made with professional guidance.",
  },
  {
    question: "How long does it take to recover from AUD?",
    answer:
      "Recovery is not a fixed timeline. Early recovery (the first year) carries the highest relapse risk. Many people experience significant improvements in health, relationships, and functioning within months of reducing or stopping drinking. Long-term recovery is common \u2014 SAMHSA estimates that approximately 22 million Americans are in recovery from AUD and other substance use disorders.",
  },
  {
    question: "Does AUD run in families?",
    answer:
      "Yes. Genetic factors account for approximately 40\u201360% of AUD risk. Having a parent or sibling with AUD meaningfully increases vulnerability, though it does not determine outcome. Many people with strong family histories of AUD never develop the condition, and many people without family history do.",
  },
];

export default function WhatIsAlcoholUseDisorderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Is Alcohol Use Disorder (AUD)?", description: "Alcohol use disorder is a medical condition involving loss of control over drinking despite negative consequences. Learn the symptoms, risk factors, and evidence-based treatments.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Is Alcohol Use Disorder (AUD)?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">12 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Is Alcohol Use Disorder (AUD)?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Alcohol use disorder (AUD) is a medical condition characterized by an impaired ability to stop or control alcohol use despite adverse social, occupational, or health consequences. It exists on a spectrum from mild to severe and affects approximately 28.9 million Americans aged 12 and older &mdash; about 10.2% of the population (SAMHSA, 2023). AUD is not a moral failing or lack of willpower. It involves changes in brain chemistry and function that make controlling alcohol use genuinely difficult.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Important notice */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <strong className="text-amber-800 dark:text-amber-400">Important:</strong> This article is for educational purposes only. It is not a substitute for professional evaluation, diagnosis, or treatment. If you are concerned about your relationship with alcohol, please consult a qualified healthcare professional or certified substance use counselor.
            </p>
          </div>

          {/* Section 1: AUD vs Alcoholism */}
          <section>
            <h2>AUD vs. &ldquo;Alcoholism&rdquo;: What&apos;s the Difference?</h2>
            <p>
              The term &ldquo;alcoholism&rdquo; is commonly used but is not a clinical diagnosis. The DSM-5 replaced the previous categories of &ldquo;alcohol abuse&rdquo; and &ldquo;alcohol dependence&rdquo; with a single diagnosis &mdash; <strong>alcohol use disorder</strong> &mdash; in 2013. This shift reflected research showing that these conditions exist on a continuum rather than as distinct categories.
            </p>
            <p>
              AUD is diagnosed on a spectrum of severity:
            </p>
            <ul>
              <li><strong>Mild AUD:</strong> 2&ndash;3 criteria met</li>
              <li><strong>Moderate AUD:</strong> 4&ndash;5 criteria met</li>
              <li><strong>Severe AUD:</strong> 6 or more criteria met</li>
            </ul>
            <p>
              This spectrum model means that AUD includes a wide range of experiences &mdash; from someone whose drinking is causing early-stage problems at work or in relationships, to someone with decades of heavy use and physical dependence.
            </p>
          </section>

          {/* Section 2: DSM-5 Criteria */}
          <section>
            <h2>DSM-5 Criteria for Alcohol Use Disorder</h2>
            <p>
              AUD is diagnosed when at least 2 of the following 11 criteria are present within a 12-month period:
            </p>
            <ol>
              <li>Drinking more or for longer than intended</li>
              <li>Persistent desire or unsuccessful efforts to cut down or control drinking</li>
              <li>Spending a lot of time obtaining, using, or recovering from alcohol</li>
              <li>Craving &mdash; a strong desire or urge to drink</li>
              <li>Failure to fulfill major role obligations at work, school, or home due to drinking</li>
              <li>Continued drinking despite persistent social or interpersonal problems caused by alcohol</li>
              <li>Giving up or reducing important activities because of drinking</li>
              <li>Using alcohol in physically hazardous situations</li>
              <li>Continued drinking despite knowing it&apos;s worsening a physical or psychological problem</li>
              <li><strong>Tolerance</strong> &mdash; needing significantly more to achieve the same effect</li>
              <li><strong>Withdrawal</strong> &mdash; experiencing withdrawal symptoms or drinking to avoid them</li>
            </ol>
            <p>
              Tolerance and withdrawal (criteria 10&ndash;11) specifically indicate physiological dependence &mdash; a more severe presentation that typically warrants medical supervision during any reduction in drinking.
            </p>
          </section>

          {/* Section 3: Screening */}
          <section>
            <h2>How Is AUD Screened?</h2>
            <p>
              The <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT (Alcohol Use Disorders Identification Test)</Link> is the WHO&apos;s gold-standard screening tool for alcohol use problems. A score of 8 or higher indicates hazardous or harmful use; 20 or higher suggests possible dependence.
            </p>
            <p>
              The <Link href="/audit-c-alcohol-screen" className="text-sage-600 dark:text-sage-400 underline">AUDIT-C</Link> is a briefer 3-question version focused on consumption patterns. The <Link href="/cage-aid-substance-abuse-screening" className="text-sage-600 dark:text-sage-400 underline">CAGE-AID</Link> is a simple 4-question screen used widely in clinical settings.
            </p>
            <p>
              Screening tools identify a pattern worth paying attention to. Diagnosis requires a clinical evaluation.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4: Causes */}
          <section>
            <h2>What Causes Alcohol Use Disorder?</h2>
            <p>
              AUD has no single cause. It develops through a complex interaction of factors:
            </p>
            <p>
              <strong>Genetic factors</strong> account for approximately 40&ndash;60% of the risk for AUD (NIAAA, 2021). Having a first-degree relative with AUD meaningfully increases risk.
            </p>
            <p>
              <strong>Neurobiological factors:</strong> Alcohol affects multiple neurotransmitter systems &mdash; GABA, glutamate, dopamine, and opioid pathways. With repeated heavy use, the brain adapts to alcohol&apos;s presence, leading to tolerance and withdrawal when use stops.
            </p>
            <p>
              <strong>Psychological factors:</strong> Anxiety, depression, PTSD, and trauma history all significantly increase risk. Many people with AUD describe initially using alcohol to manage emotional pain &mdash; a pattern that becomes self-reinforcing over time.
            </p>
            <p>
              <strong>Environmental factors:</strong> Early initiation of drinking (before age 15), access to alcohol, peer drinking norms, and chronic stress all elevate risk.
            </p>
            <p>
              <strong>Social factors:</strong> Social isolation, lack of structured activity, and environments where heavy drinking is normalized.
            </p>
            <p>
              None of these factors cause AUD on their own. They interact &mdash; and the presence of multiple risk factors substantially increases vulnerability.
            </p>
          </section>

          {/* Section 5: AUD and Mental Health */}
          <section>
            <h2>The Relationship Between AUD and Mental Health</h2>
            <p>
              AUD and mental health conditions co-occur at high rates:
            </p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Co-occurring Condition</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Prevalence in AUD</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Source</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Any mood disorder</td><td className="py-2 pr-4">~40%</td><td className="py-2">SAMHSA, 2020</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Major depression</td><td className="py-2 pr-4">~30&ndash;35%</td><td className="py-2">Grant et al., 2004</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Anxiety disorder</td><td className="py-2 pr-4">~37%</td><td className="py-2">SAMHSA, 2020</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">PTSD</td><td className="py-2 pr-4">~25&ndash;52%</td><td className="py-2">Brady et al., 2004</td></tr>
                  <tr><td className="py-2 pr-4">Bipolar disorder</td><td className="py-2 pr-4">~42% lifetime</td><td className="py-2">Regier et al., 1990</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              This co-occurrence runs in both directions. Mental health conditions increase risk for AUD (self-medication), and heavy alcohol use worsens depression, anxiety, and PTSD symptoms &mdash; creating a reinforcing cycle that makes both conditions harder to treat.
            </p>
            <p>
              Effective treatment addresses both simultaneously. Treating only the AUD without addressing underlying mental health conditions leads to higher relapse rates (Quello et al., 2005).
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6: Signs */}
          <section>
            <h2>Signs That Alcohol Use May Be a Problem</h2>
            <p>
              You don&apos;t need to meet full AUD criteria for alcohol to be worth examining in your life. Consider reaching out if:
            </p>
            <ul>
              <li>You often drink more than you planned</li>
              <li>You&apos;ve tried to cut back and struggled</li>
              <li>You think about drinking frequently</li>
              <li>Alcohol is your primary coping tool for stress, anxiety, or sleep</li>
              <li>People who care about you have expressed concern</li>
              <li>You&apos;ve experienced consequences (work, relationship, health) but continued drinking</li>
              <li>You feel uncomfortable going long periods without drinking</li>
              <li>Your tolerance has noticeably increased over time</li>
            </ul>
            <p>
              The <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT</Link> can help you look at your pattern more systematically. A score in the hazardous or harmful range is worth taking seriously &mdash; not as a verdict, but as information.
            </p>
          </section>

          {/* Section 7: Treatment */}
          <section>
            <h2>How Is Alcohol Use Disorder Treated?</h2>
            <p>
              AUD has multiple effective treatment options. The best approach depends on severity, personal preferences, co-occurring conditions, and what&apos;s been tried before.
            </p>

            <h3>Medical Detox</h3>
            <p>
              For people with significant physical dependence, medically supervised withdrawal is the essential first step. Alcohol withdrawal can be medically serious &mdash; unlike withdrawal from most other substances, it can cause seizures and, in severe cases, be life-threatening. Please consult a healthcare provider before significantly reducing or stopping heavy, long-term alcohol use.
            </p>

            <h3>Medications</h3>
            <p>
              Three medications are FDA-approved for AUD:
            </p>
            <ul>
              <li><strong>Naltrexone</strong> &mdash; reduces cravings and the rewarding effects of alcohol. Available as a daily pill or monthly injection (Vivitrol). Strong evidence base.</li>
              <li><strong>Acamprosate</strong> &mdash; reduces withdrawal-related discomfort and protects sobriety. Typically started after detox.</li>
              <li><strong>Disulfiram (Antabuse)</strong> &mdash; creates an unpleasant physical reaction if alcohol is consumed. Effective for people with high motivation and external support.</li>
            </ul>
            <p>
              Medications for AUD are significantly underutilized &mdash; only about 8% of people with AUD receive any pharmacological treatment (Mark et al., 2009).
            </p>

            <h3>Psychotherapy</h3>
            <p>
              <strong>Cognitive Behavioral Therapy (CBT)</strong> for substance use disorders targets triggers, coping skills, and relapse prevention. Well-established evidence base.
            </p>
            <p>
              <strong>Motivational Enhancement Therapy (MET)</strong> is particularly effective for people ambivalent about change &mdash; it meets people where they are rather than requiring readiness to stop.
            </p>
            <p>
              <strong>12-Step facilitation and peer support</strong> (AA, SMART Recovery) &mdash; strong evidence for peer support as an ongoing recovery resource, particularly for maintaining long-term sobriety.
            </p>

            <h3>Level of Care</h3>
            <p>
              AUD treatment occurs across a spectrum of intensity:
            </p>
            <ul>
              <li><strong>Outpatient counseling</strong> &mdash; weekly sessions while continuing daily life</li>
              <li><strong>Intensive Outpatient Programs (IOP)</strong> &mdash; typically 9&ndash;12 hours/week of structured programming</li>
              <li><strong>Partial Hospitalization (PHP)</strong> &mdash; near-daily programming without overnight stay</li>
              <li><strong>Residential/inpatient treatment</strong> &mdash; 24/7 structured environment; appropriate for severe presentations or unsafe home environments</li>
            </ul>
            <p>
              The right level of care depends on your specific situation &mdash; a counselor or physician can help you determine what makes sense.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. Screening tools may indicate the need for further assessment &mdash; they do not confirm or rule out any condition.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or struggling with substance use and need immediate support:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7 treatment referral)</li>
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check your relationship with alcohol</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/audit-alcohol-test" className="btn-primary text-sm">Take the AUDIT Alcohol Screen</Link>
              <Link href="/audit-c-alcohol-screen" className="btn-primary text-sm">Take the AUDIT-C (Quick Screen)</Link>
              <Link href="/cage-aid-substance-abuse-screening" className="btn-primary text-sm">Take the CAGE-AID Screen</Link>
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
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO gold-standard alcohol use screening</p>
              </Link>
              <Link href="/audit-c-alcohol-screen" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT-C Quick Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">3-question alcohol consumption screen</p>
              </Link>
              <Link href="/cage-aid-substance-abuse-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CAGE-AID Substance Abuse Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">4-question substance use screening</p>
              </Link>
              <Link href="/health-recovery-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Health Recovery Timeline</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Track what happens when you stop drinking</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-does-audit-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your AUDIT Score Mean?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Score ranges, risk zones, and next steps</p>
              </Link>
              <Link href="/blog/quit-drinking-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Happens When You Stop Drinking</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Hour-by-hour and week-by-week recovery timeline</p>
              </Link>
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">The Stages of Change in Addiction Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding the 5 stages of change model</p>
              </Link>
              <Link href="/blog/relapse-prevention-plan-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Build a Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Step-by-step guide to relapse prevention</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

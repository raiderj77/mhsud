import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-are-substance-use-disorders`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-are-substance-use-disorders")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-are-substance-use-disorders",
  title: "What Are Substance Use Disorders? Signs, Diagnosis, and Treatment",
  description:
    "Substance use disorder is a medical condition, not a moral failure. Learn what it is, how it\u2019s diagnosed, what the warning signs are, and what treatment looks like.",
  keywords: [
    "what is substance use disorder",
    "substance use disorder symptoms",
    "alcohol use disorder",
    "drug use disorder",
    "addiction explained",
    "substance abuse signs",
    "SUD treatment",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is substance use disorder a choice?",
    answer:
      "The initial decision to use a substance involves choice. The development of SUD does not \u2014 it is the result of neurobiological changes that impair the very decision-making systems that would allow someone to simply choose to stop. This is why willpower alone is often insufficient and why SUD is classified as a chronic medical condition rather than a moral failure.",
  },
  {
    question: "Can someone recover without formal treatment?",
    answer:
      "Yes. Research shows that the majority of people who resolve substance use disorders do so without formal treatment \u2014 through natural recovery, life changes, peer support, or informal support networks (Kelly et al., 2017). However, formal treatment significantly improves outcomes for moderate and severe SUD, and medications for alcohol and opioid use disorder save lives. Formal treatment is strongly recommended at moderate-to-severe severity.",
  },
  {
    question: "What\u2019s the difference between physical dependence and addiction?",
    answer:
      "Physical dependence refers to the physiological adaptation to a substance \u2014 tolerance and withdrawal \u2014 which can occur with many medications even when used exactly as prescribed. A patient taking prescribed opioids long-term may develop physical dependence without having SUD. SUD requires the full pattern of impaired control, social impairment, risky use, and craving \u2014 not just physical dependence.",
  },
  {
    question: "How do I help someone I care about who has SUD?",
    answer:
      "The most evidence-based approach for family members is CRAFT (Community Reinforcement and Family Training) \u2014 significantly more effective than confrontation, ultimatums, or Al-Anon approaches alone at getting a loved one into treatment (Miller et al., 1999). SAMHSA\u2019s helpline (1-800-662-4357) can provide referrals for family support services.",
  },
];

export default function WhatAreSubstanceUseDisordersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Are Substance Use Disorders? Signs, Diagnosis, and Treatment", description: "Substance use disorder is a medical condition, not a moral failure. Learn what it is, how it\u2019s diagnosed, and what treatment looks like.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Are Substance Use Disorders?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">18 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Are Substance Use Disorders? Signs, Diagnosis, and Treatment
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Substance use disorder (SUD) is a medical condition characterized by a problematic pattern of substance use &mdash; alcohol, drugs, or misused medications &mdash; causing clinically significant impairment or distress. It is diagnosed when at least two of eleven criteria are present within a 12-month period, and it ranges in severity from mild to severe. Substance use disorder is not a moral failing, a character weakness, or a choice. It is a chronic brain condition that responds to evidence-based treatment.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>The Language Has Changed &mdash; And It Matters</h2>
            <p>
              The language used to describe problematic substance use has shifted significantly in clinical practice, and for good reason.
            </p>
            <p>
              <strong>&ldquo;Addiction&rdquo;</strong> is a common term but carries significant stigma &mdash; it is often used to imply that the person is fundamentally flawed or chose their condition. In clinical settings, <strong>substance use disorder (SUD)</strong> is the preferred term. It is medical, precise, and non-judgmental.
            </p>
            <p>
              <strong>&ldquo;Substance abuse&rdquo;</strong> is now considered outdated and stigmatizing in clinical contexts &mdash; it implies that the person is doing something wrong rather than struggling with a medical condition.
            </p>
            <p>
              <strong>&ldquo;Dependence&rdquo;</strong> specifically refers to the physiological adaptation to a substance &mdash; tolerance and withdrawal &mdash; which can occur with many medications even when used exactly as prescribed, without any problematic relationship with the substance.
            </p>
            <p>
              Language matters because stigma is one of the strongest barriers to treatment-seeking. People who believe they are &ldquo;addicts&rdquo; with a character flaw are less likely to seek help than people who understand they have a treatable medical condition.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>What Substances Can Cause SUD?</h2>
            <p>Substance use disorder can involve any substance with abuse potential. The DSM-5 recognizes SUDs for the following substance classes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Alcohol</strong> &mdash; the most prevalent SUD in the US; affects approximately 14.5 million adults annually (SAMHSA, 2023)</li>
              <li><strong>Cannabis</strong> &mdash; increasingly relevant as potency and prevalence have risen</li>
              <li><strong>Stimulants</strong> &mdash; cocaine, methamphetamine, prescription amphetamines</li>
              <li><strong>Opioids</strong> &mdash; heroin, fentanyl, prescription opioids (oxycodone, hydrocodone, morphine)</li>
              <li><strong>Sedatives, hypnotics, and anxiolytics</strong> &mdash; prescription benzodiazepines (Xanax, Valium, Ativan), Z-drugs (Ambien), barbiturates</li>
              <li><strong>Tobacco/nicotine</strong></li>
              <li><strong>Hallucinogens</strong> &mdash; LSD, psilocybin, PCP</li>
              <li><strong>Inhalants</strong></li>
              <li><strong>Caffeine</strong> (mild, rarely clinically significant)</li>
            </ul>
            <p>The same diagnostic criteria apply across all substance classes. The specific risks, withdrawal profiles, and treatment approaches differ substantially by substance.</p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>The DSM-5 Criteria: How SUD Is Diagnosed</h2>
            <p>
              The DSM-5 replaced the previous &ldquo;abuse/dependence&rdquo; binary with a single diagnosis &mdash; substance use disorder &mdash; rated mild, moderate, or severe based on how many of 11 criteria are met in a 12-month period.
            </p>
            <p><strong>Impaired control (4 criteria):</strong></p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Using more of the substance or for longer than intended</li>
              <li>Persistent desire or unsuccessful efforts to cut down or control use</li>
              <li>Spending a great deal of time obtaining, using, or recovering from the substance</li>
              <li>Craving &mdash; a strong desire or urge to use</li>
            </ol>
            <p><strong>Social impairment (3 criteria):</strong></p>
            <ol className="list-decimal pl-5 space-y-2" start={5}>
              <li>Failure to fulfill major role obligations (work, school, home) due to use</li>
              <li>Continued use despite persistent social or interpersonal problems caused by use</li>
              <li>Giving up or reducing important activities because of use</li>
            </ol>
            <p><strong>Risky use (2 criteria):</strong></p>
            <ol className="list-decimal pl-5 space-y-2" start={8}>
              <li>Using in situations that are physically hazardous (driving, operating machinery)</li>
              <li>Continued use despite knowing it causes or worsens a physical or psychological problem</li>
            </ol>
            <p><strong>Pharmacological criteria (2 criteria):</strong></p>
            <ol className="list-decimal pl-5 space-y-2" start={10}>
              <li><strong>Tolerance</strong> &mdash; needing more of the substance to achieve the same effect, or noticeably reduced effect with the same amount</li>
              <li><strong>Withdrawal</strong> &mdash; characteristic withdrawal symptoms, or using to relieve or avoid withdrawal</li>
            </ol>
            <p><strong>Severity ratings:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Mild SUD:</strong> 2&ndash;3 criteria</li>
              <li><strong>Moderate SUD:</strong> 4&ndash;5 criteria</li>
              <li><strong>Severe SUD:</strong> 6 or more criteria</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>Early Warning Signs of Developing SUD</h2>
            <p>
              Substance use disorder rarely develops overnight. There is typically a progression from use to problematic use to disorder. Early warning signs &mdash; before full SUD criteria are met &mdash; are worth recognizing:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Using more than you planned, more often than intended</li>
              <li>Finding it difficult to keep to self-imposed limits</li>
              <li>Thinking about the substance more than you expected to</li>
              <li>Using in situations where you previously wouldn&rsquo;t have (alone, early in the day, at work)</li>
              <li>Finding that activities you previously enjoyed feel less appealing without the substance</li>
              <li>Noticing that you need more to get the same effect</li>
              <li>Using to manage emotions &mdash; to relax, to cope with stress, to feel normal</li>
              <li>Others expressing concern that you dismiss or minimize</li>
            </ul>
            <p>
              These are not diagnostic criteria &mdash; they are signals that a pattern is developing. The earlier intervention occurs in this trajectory, the easier change is.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Screening Tools: Where to Start</h2>
            <p>
              Several validated screening tools help identify whether substance use has crossed into problematic territory. The right tool depends on which substance is the concern:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Tool</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Covers</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Questions</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">Detail</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/audit-alcohol-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">AUDIT</Link></td>
                    <td className="py-2 pr-4">Alcohol only</td>
                    <td className="py-2 pr-4">10</td>
                    <td className="py-2">Comprehensive</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/audit-c-alcohol-screen" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">AUDIT-C</Link></td>
                    <td className="py-2 pr-4">Alcohol only</td>
                    <td className="py-2 pr-4">3</td>
                    <td className="py-2">Very brief</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/dast-10-drug-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">DAST-10</Link></td>
                    <td className="py-2 pr-4">Drugs (not alcohol)</td>
                    <td className="py-2 pr-4">10</td>
                    <td className="py-2">Comprehensive</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4"><Link href="/cage-aid-substance-abuse-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">CAGE-AID</Link></td>
                    <td className="py-2 pr-4">Both alcohol and drugs</td>
                    <td className="py-2 pr-4">4</td>
                    <td className="py-2">Brief gateway</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              If you&rsquo;re unsure which substance is the primary concern, the CAGE-AID is the broadest starting point. If you have concerns about both alcohol and drugs, taking the AUDIT and DAST-10 separately gives the most complete picture.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>The Neuroscience: Why Substance Use Disorder Is a Brain Condition</h2>
            <p>
              Understanding the neuroscience removes the moral framing that stigmatizes SUD and clarifies why willpower alone is usually insufficient for sustained recovery.
            </p>
            <p>
              <strong>The reward pathway:</strong> All addictive substances directly or indirectly activate the brain&rsquo;s mesolimbic dopamine system &mdash; the &ldquo;reward circuit.&rdquo; This system evolved to reinforce survival behaviors (eating, sex, social bonding). Addictive substances hijack this system, producing dopamine releases 2&ndash;10 times greater than natural rewards.
            </p>
            <p>
              <strong>Sensitization and tolerance:</strong> With repeated exposure, the reward system adapts. Tolerance develops &mdash; more of the substance is needed to produce the same effect. Natural rewards (food, social connection, achievement) become comparatively less rewarding. The brain&rsquo;s baseline dopamine tone shifts.
            </p>
            <p>
              <strong>The prefrontal cortex:</strong> Chronic heavy substance use produces measurable changes in prefrontal cortex function &mdash; the brain region responsible for judgment, impulse control, decision-making, and weighing long-term consequences against short-term reward. This is the neurological basis for the compulsive use that characterizes severe SUD: the decision-making machinery is impaired.
            </p>
            <p>
              <strong>Stress systems:</strong> Substance use activates stress pathways. In withdrawal, these stress systems are dysregulated &mdash; producing anxiety, irritability, and dysphoria that the substance temporarily relieves. This negative reinforcement loop (&ldquo;using to feel normal&rdquo;) is as powerful as the positive reinforcement of pleasure.
            </p>
            <p>
              This neurobiology explains why recovery is a process, not a decision. The brain changes that develop over years of heavy use don&rsquo;t reverse immediately. They do reverse &mdash; neuroplasticity means the brain continues to adapt &mdash; but it takes time and support.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>SUD and Mental Health: The Co-occurring Condition Reality</h2>
            <p>The co-occurrence of substance use disorders and mental health conditions is the rule, not the exception:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Approximately <strong>50% of people</strong> with a mental health disorder have a co-occurring SUD (SAMHSA, 2023)</li>
              <li>Approximately <strong>50% of people</strong> with SUD have a co-occurring mental health disorder</li>
            </ul>
            <p>Common patterns:</p>
            <p>
              <strong>Depression and alcohol:</strong> Alcohol is a CNS depressant that reliably worsens depression &mdash; particularly the days following drinking. Depression also increases risk of heavy drinking. Each makes the other harder to treat if addressed alone.
            </p>
            <p>
              <strong>Anxiety and alcohol/benzodiazepines:</strong> Alcohol and benzos provide acute anxiety relief &mdash; making them appealing self-medication tools &mdash; but worsen anxiety through rebound effects and worsen long-term anxiety course.
            </p>
            <p>
              <strong>PTSD and opioids/alcohol:</strong> Trauma survivors use substances to manage hyperarousal, nightmares, and emotional dysphoria at high rates. PTSD and SUD require integrated treatment addressing both.
            </p>
            <p>
              <strong>ADHD and stimulants/cannabis:</strong> Undiagnosed or undertreated ADHD creates dopamine dysregulation that drives self-medication with stimulants, cannabis, or other substances.
            </p>
            <p>
              Effective treatment addresses both the SUD and co-occurring mental health conditions &mdash; treating them separately produces worse outcomes than integrated care.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>Treatment for Substance Use Disorders</h2>
            <p>
              Substance use disorder is highly treatable. Long-term remission rates &mdash; defined as no SUD criteria in the past year &mdash; reach approximately 50% at 3 years post-treatment and continue to improve with time (NESARC, Kelly et al.).
            </p>

            <h3>Behavioral Treatments</h3>
            <p>
              <strong>Motivational Interviewing (MI):</strong> A collaborative, person-centered counseling style that resolves ambivalence about change and builds intrinsic motivation. Effective at every point in the treatment trajectory, from pre-contemplation through relapse prevention.
            </p>
            <p>
              <strong>Cognitive Behavioral Therapy (CBT) for SUD:</strong> Targets the thoughts, triggers, and coping patterns that maintain use. Particularly effective for identifying high-risk situations and building skills to navigate them without substances.
            </p>
            <p>
              <strong>Contingency Management:</strong> Uses positive reinforcement (rewards for negative drug tests or treatment attendance) to motivate early recovery behaviors. Among the most evidence-based behavioral interventions for stimulant use disorders specifically.
            </p>
            <p>
              <strong>12-Step Facilitation:</strong> Structured introduction to 12-step programs (AA, NA) and their community and accountability structures. The social support component of peer recovery communities is a powerful recovery resource.
            </p>
            <p>
              <strong>CRAFT (Community Reinforcement and Family Training):</strong> A highly evidence-based program for family members of people with SUD &mdash; teaches engagement strategies that are more effective than confrontation or enabling.
            </p>

            <h3>Medications</h3>
            <p><strong>Alcohol use disorder:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Naltrexone</strong> &mdash; reduces craving and the rewarding effects of alcohol; available oral or monthly injectable (Vivitrol)</li>
              <li><strong>Acamprosate</strong> &mdash; reduces protracted withdrawal symptoms; supports abstinence</li>
              <li><strong>Disulfiram</strong> &mdash; produces aversive reaction if alcohol is consumed; used for motivated patients with good social support</li>
              <li><strong>Gabapentin</strong> &mdash; emerging evidence for alcohol withdrawal and craving management</li>
            </ul>
            <p><strong>Opioid use disorder:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Buprenorphine</strong> (Suboxone, Subutex) &mdash; partial opioid agonist; reduces craving and withdrawal; dramatically reduces overdose risk</li>
              <li><strong>Methadone</strong> &mdash; full opioid agonist dispensed in licensed clinics; gold standard for severe OUD</li>
              <li><strong>Naltrexone</strong> &mdash; blocks opioid effects; effective for motivated patients after detox</li>
            </ul>
            <p><strong>Nicotine use disorder:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Varenicline (Chantix)</strong> &mdash; most effective single pharmacotherapy for smoking cessation</li>
              <li><strong>Bupropion</strong> &mdash; effective and FDA-approved</li>
              <li><strong>NRT (nicotine replacement therapy)</strong> &mdash; patches, gum, lozenge</li>
            </ul>
            <p>
              Medications for SUD are not &ldquo;replacing one addiction with another&rdquo; &mdash; this is a persistent stigma-driven misconception. Medications like buprenorphine for OUD restore normal function, prevent overdose death, and are associated with dramatically better long-term outcomes.
            </p>

            <h3>Recovery Support</h3>
            <p>
              Recovery is a long-term process, not a single treatment episode. Ongoing support structures &mdash; peer recovery communities, recovery housing, sober support networks, continuing care &mdash; are as important as formal treatment in sustained recovery.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              This article is for informational and educational purposes only. It cannot diagnose substance use disorder or any other condition. If you are concerned about your own or someone else&rsquo;s substance use, please consult a qualified healthcare professional or certified substance use counselor.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-5">
            <p className="text-sm text-red-900 dark:text-red-200 font-semibold mb-2">Crisis Resources</p>
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              If you or someone you know is in crisis related to substance use:
            </p>
            <ul className="text-sm text-red-800 dark:text-red-300 space-y-1">
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7 &mdash; treatment referral)</li>
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 p-6 text-center">
            <h2 className="text-lg font-semibold text-sage-900 dark:text-sage-100 mb-2">Take a Free Substance Use Screening</h2>
            <p className="text-sm text-sage-700 dark:text-sage-400 mb-4">
              Use our free, confidential screening tools to check your alcohol or drug use patterns.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/audit-alcohol-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">AUDIT Alcohol Screening</Link>
              <Link href="/dast-10-drug-screening" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">DAST-10 Drug Screening</Link>
              <Link href="/cage-aid-substance-abuse-screening" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">CAGE-AID Screening</Link>
            </div>
          </div>

          {/* Author Bio */}
          <AuthorBio />

          {/* FAQ */}
          <section>
            <h2>Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQ_DATA.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="cursor-pointer font-semibold text-neutral-900 dark:text-neutral-100 hover:text-orange-600 dark:hover:text-orange-400 transition">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-neutral-700 dark:text-neutral-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section>
            <h2>Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { href: "/audit-alcohol-test", label: "AUDIT Alcohol Screening" },
                { href: "/audit-c-alcohol-screen", label: "AUDIT-C Brief Alcohol Screen" },
                { href: "/dast-10-drug-screening", label: "DAST-10 Drug Screening" },
                { href: "/cage-aid-substance-abuse-screening", label: "CAGE-AID Screening" },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} className="block rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 hover:border-orange-300 dark:hover:border-orange-700 transition">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{tool.label}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Related Guides */}
          <section>
            <h2>Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter((p) =>
                ["what-is-alcohol-use-disorder", "what-does-audit-score-mean", "what-does-cage-aid-score-mean", "stages-of-change-recovery"].includes(p.slug)
              ).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 hover:border-orange-300 dark:hover:border-orange-700 transition">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{post.title}</span>
                  <span className="block text-xs text-neutral-500 dark:text-neutral-400 mt-1">{post.readTime}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

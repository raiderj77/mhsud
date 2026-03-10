import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-audit-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-audit-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-audit-score-mean",
  title: "What Does Your AUDIT Score Mean?",
  description:
    "AUDIT scores range from 0\u201340. Learn what each score zone means \u2014 from low risk to possible dependence \u2014 and what steps to take based on your results.",
  keywords: [
    "AUDIT score meaning",
    "AUDIT alcohol test results",
    "AUDIT score interpretation",
    "alcohol use screening",
    "AUDIT-C score",
    "hazardous alcohol use",
    "harmful alcohol use",
    "alcohol dependence screening",
    "WHO AUDIT test",
    "AUDIT score zones",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is an AUDIT score of 8 serious?",
    answer:
      "A score of 8 is the threshold for \u201Chazardous use\u201D \u2014 meaning your drinking pattern carries elevated risk. It\u2019s a meaningful signal worth paying attention to, but it\u2019s also the zone where brief support is most effective. This score range doesn\u2019t suggest dependence; it suggests a pattern worth addressing.",
  },
  {
    question: "Can I use the AUDIT to tell if I\u2019m an alcoholic?",
    answer:
      "The AUDIT screens for alcohol use patterns across a spectrum \u2014 from hazardous to possible dependence. It doesn\u2019t diagnose \u201Calcoholism\u201D or alcohol use disorder. A formal diagnosis requires a clinical evaluation using standardized criteria (DSM-5 or ICD-11). The AUDIT is a useful starting point for that conversation.",
  },
  {
    question: "Is it safe to stop drinking on my own if I score high?",
    answer:
      "If you\u2019ve been drinking heavily and regularly for an extended period, stopping abruptly can carry medical risks in some cases. Alcohol withdrawal can be serious \u2014 unlike withdrawal from most substances. If you\u2019re considering stopping, please speak with a healthcare provider first. They can assess your situation and recommend the safest approach.",
  },
  {
    question: "Can my AUDIT score change?",
    answer:
      "Yes. The AUDIT measures the past 12 months of drinking behavior, so your score will change as your behavior changes. Many people retake it after a period of changing their habits to track progress, or use it as a baseline before beginning a period of reflection or change.",
  },
  {
    question: "What\u2019s the difference between the AUDIT and CAGE?",
    answer:
      "The AUDIT measures patterns and consequences across a spectrum and is WHO-validated for broad use. The CAGE-AID is a simpler four-question screen asking about cutting down, annoyance at criticism, guilt, and eye-opener drinking. CAGE-AID casts a wider net (including drugs) and is faster, but less detailed than the AUDIT.",
  },
];

export default function WhatDoesAUDITScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your AUDIT Score Mean?", description: "AUDIT scores range from 0\u201340. Learn what each score zone means and what steps to take based on your results.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your AUDIT Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your AUDIT Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            AUDIT scores range from 0 to 40. Scores of 0–7 indicate low-risk alcohol use, 8–15 indicate hazardous use, 16–19 indicate harmful use, and 20 or higher suggest possible alcohol dependence. Each zone corresponds to a different level of recommended follow-up — from simple education to structured professional support.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What is the AUDIT?</h2>
            <p>
              The <strong>Alcohol Use Disorders Identification Test (AUDIT)</strong> was developed by the World Health Organization (WHO) in the 1980s as a standardized, cross-cultural screening tool for hazardous and harmful alcohol use. It has since been validated in over 50 countries and across diverse clinical settings (Babor et al., 2001).
            </p>
            <p>
              The AUDIT contains 10 questions across three domains:
            </p>
            <ul>
              <li><strong>Alcohol consumption</strong> (Questions 1–3): How much and how often you drink</li>
              <li><strong>Dependence symptoms</strong> (Questions 4–6): Signs of losing control over drinking</li>
              <li><strong>Alcohol-related harm</strong> (Questions 7–10): Consequences in your health and life</li>
            </ul>
            <p>
              Questions 1–8 are scored 0–4. Questions 9–10 are scored 0, 2, or 4. Total scores range from <strong>0 to 40</strong>.
            </p>
            <p>
              The AUDIT demonstrates sensitivity of 92% and specificity of 94% for hazardous drinking at a cutoff of 8 (Reinert &amp; Allen, 2007), making it one of the most psychometrically strong brief alcohol screening tools available.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>AUDIT score zones: what each level means</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Score</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Zone</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">What It Suggests</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Recommended Response</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">0–7</td><td className="py-2 pr-4">Low risk</td><td className="py-2 pr-4">Alcohol use within low-risk guidelines</td><td className="py-2">Education and alcohol awareness</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">8–15</td><td className="py-2 pr-4">Hazardous use</td><td className="py-2 pr-4">Drinking pattern elevates risk of harm</td><td className="py-2">Simple advice and brief counseling</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">16–19</td><td className="py-2 pr-4">Harmful use</td><td className="py-2 pr-4">Harm is likely already occurring</td><td className="py-2">Brief counseling; consider referral</td></tr>
                  <tr><td className="py-2 pr-4">20–40</td><td className="py-2 pr-4">Possible dependence</td><td className="py-2 pr-4">Signs suggest alcohol dependence may be present</td><td className="py-2">Referral for diagnostic evaluation</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              These zones are drawn from the WHO&apos;s original AUDIT guidelines (Babor et al., 2001) and are used by clinicians worldwide.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What does an AUDIT score of 0–7 mean?</h2>
            <p>
              A score of 0–7 indicates <strong>low-risk alcohol use</strong>. Your drinking pattern, as measured by the AUDIT, is within ranges that research associates with minimal health risk.
            </p>
            <p>
              &quot;Low risk&quot; doesn&apos;t mean &quot;zero risk&quot; — all alcohol use carries some physiological risk. But this score range suggests that the frequency, quantity, and consequences you reported don&apos;t indicate a clinical concern at this time.
            </p>
            <p>
              If you scored here and feel like something about your drinking doesn&apos;t sit right with you, trust that instinct. Screening tools capture patterns, not every individual experience. The <Link href="/audit-c-alcohol-screen" className="text-sage-600 dark:text-sage-400 underline">AUDIT-C</Link> — a three-question brief screen focusing on the consumption items — can give you a slightly different angle if you want to explore further.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>What does an AUDIT score of 8–15 mean?</h2>
            <p>
              A score of 8–15 indicates <strong>hazardous alcohol use</strong>. This means your drinking pattern is elevating your risk for future harm — physical, psychological, and social — even if significant harm hasn&apos;t occurred yet.
            </p>
            <p>
              Hazardous use is the zone where relatively brief interventions are most effective. Research on &quot;brief intervention&quot; — typically one to three structured counseling sessions focused on feedback, motivation, and setting goals — shows significant reduction in drinking behavior in hazardous drinkers (Kaner et al., 2018). This is the most evidence-supported intervention zone for the AUDIT.
            </p>
            <p>
              At this score range, you might recognize some patterns like:
            </p>
            <ul>
              <li>Drinking more than you planned more often than you&apos;d like</li>
              <li>Occasionally drinking in ways that felt slightly out of control</li>
              <li>Using alcohol to cope with stress, sleep, or difficult emotions</li>
              <li>Having some &quot;morning after&quot; regrets about how much you drank</li>
            </ul>
            <p>
              None of these experiences mean you&apos;re dependent on alcohol. They do mean this is a worthwhile moment to reflect — and that brief support can be meaningfully helpful.
            </p>
            <p>
              <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">Take the AUDIT Alcohol Use Screen →</Link>
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>What does an AUDIT score of 16–19 mean?</h2>
            <p>
              A score of 16–19 indicates <strong>harmful alcohol use</strong>. At this level, your drinking is likely already causing measurable harm — whether physical (liver strain, sleep disruption, cardiovascular risk), psychological (mood dysregulation, anxiety, memory effects), or social (relationship strain, work impact).
            </p>
            <p>
              The WHO distinguishes &quot;hazardous&quot; from &quot;harmful&quot; specifically on whether harm has already occurred. This score range suggests it has, or is very likely occurring.
            </p>
            <p>
              A score in this range warrants a conversation with a healthcare provider or certified counselor. You don&apos;t need to wait until things feel &quot;bad enough&quot; — this score is the signal that now is the right time. Brief counseling, structured support, and sometimes medical assessment (particularly for anyone who has been drinking heavily for a period of time) can make a significant difference.
            </p>
            <p>
              If you&apos;re currently thinking about cutting back, that&apos;s an enormously positive sign. Connecting with a professional can help you do that in a way that&apos;s both effective and safe.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What does an AUDIT score of 20–40 mean?</h2>
            <p>
              A score of 20 or higher suggests <strong>possible alcohol dependence</strong>. Items in the AUDIT that address loss of control, inability to stop once started, morning drinking, blackouts, and withdrawal symptoms are weighted toward the higher end of the scale. Scoring in this range means several of those items scored meaningfully.
            </p>
            <p>
              Alcohol dependence is a medical condition, not a character flaw. It involves physiological and psychological changes that make it genuinely difficult to reduce or stop drinking on your own — and attempting to do so abruptly can, in some cases, carry medical risk (withdrawal from alcohol can be medically serious, unlike withdrawal from most other substances).
            </p>
            <p>
              If you scored in this range, please reach out to a healthcare provider before making significant changes to your drinking. A physician can assess whether medical support during reduction is appropriate. Counseling and evidence-based treatments like medication-assisted treatment are also highly effective.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>Understanding the AUDIT-C: the brief companion screen</h2>
            <p>
              The <strong>AUDIT-C</strong> is the first three questions of the AUDIT, focusing on consumption only. It&apos;s used as a quick initial screen in many primary care settings.
            </p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">AUDIT-C Score</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Interpretation</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Men: 4 or higher</td><td className="py-2">Positive screen — suggests hazardous drinking</td></tr>
                  <tr><td className="py-2 pr-4">Women: 3 or higher</td><td className="py-2">Positive screen — suggests hazardous drinking</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              If you score positive on the AUDIT-C, the full 10-question AUDIT gives a more complete picture. <Link href="/audit-c-alcohol-screen" className="text-sage-600 dark:text-sage-400 underline">Take the AUDIT-C Quick Screen →</Link>
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>What&apos;s the difference between hazardous, harmful, and dependent use?</h2>
            <p>
              These terms come from the WHO&apos;s International Classification of Diseases (ICD) and are important for understanding what AUDIT scores represent.
            </p>
            <p>
              <strong>Hazardous use</strong> means a pattern of drinking that increases the risk of harm. No harm has necessarily occurred yet, but the pattern is high-risk.
            </p>
            <p>
              <strong>Harmful use</strong> means drinking that is actually causing damage — to physical health, mental health, or social functioning — even if the person does not feel dependent.
            </p>
            <p>
              <strong>Alcohol dependence</strong> is a syndrome involving physiological adaptation (tolerance and potential withdrawal), loss of control over drinking, and a compulsion to use. It is a diagnosable medical condition.
            </p>
            <p>
              The AUDIT screens across all three. A comprehensive clinical evaluation is needed to distinguish them reliably.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2>How does alcohol use affect mental health?</h2>
            <p>
              Alcohol and mental health have a complex, bidirectional relationship. Many people drink to manage anxiety, depression, or stress — but alcohol is a central nervous system depressant that reliably worsens anxiety and low mood over time, particularly during the day following heavy use.
            </p>
            <p>
              Research shows that approximately 37% of people with alcohol use disorder also have a co-occurring mental health condition (SAMHSA, 2020). If you&apos;ve been experiencing mood changes, anxiety, or sleep disruption, and you drink regularly, it can be valuable to look at both. Consider also taking the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 Depression Self-Check</Link> or the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 Anxiety Self-Check</Link> for additional context.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2>When should you talk to someone about your drinking?</h2>
            <p>
              You don&apos;t need to reach a crisis point to seek support. Consider reaching out to a counselor, certified substance use professional, or your primary care physician if:
            </p>
            <ul>
              <li>You&apos;ve been thinking about your drinking more than you&apos;d like</li>
              <li>You&apos;ve tried to cut back and found it harder than expected</li>
              <li>People close to you have expressed concern</li>
              <li>Drinking is affecting your work, health, or relationships</li>
              <li>You&apos;re using alcohol to cope with emotional pain, anxiety, or sleep issues</li>
              <li>You scored 8 or higher on the AUDIT</li>
            </ul>
            <p>
              The AUDIT is a starting point for reflection. Your own honest assessment of how alcohol is affecting your life matters more than any score.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. The AUDIT is a screening tool — it may indicate the need for further assessment but does not confirm or rule out any condition.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or struggling with substance use and need immediate support:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>SAMHSA National Helpline</strong> — <strong>1-800-662-4357</strong> (free, confidential, 24/7 — substance use and mental health)</li>
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> — Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> — Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Want to check your alcohol use?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The AUDIT takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/audit-alcohol-test" className="btn-primary text-sm">Take the Full AUDIT Screen</Link>
              <Link href="/audit-c-alcohol-screen" className="btn-primary text-sm">Take the AUDIT-C Quick Screen</Link>
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
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Use Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-validated 10-question alcohol screening</p>
              </Link>
              <Link href="/audit-c-alcohol-screen" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT-C Quick Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">3-question brief alcohol consumption screen</p>
              </Link>
              <Link href="/cage-aid-substance-abuse-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CAGE-AID Substance Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">4-question alcohol and drug use screen</p>
              </Link>
              <Link href="/dast-10-drug-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Drug Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10-question drug use screening tool</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/audit-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How the AUDIT works and why clinicians use it</p>
              </Link>
              <Link href="/blog/quit-drinking-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Happens When You Stop Drinking</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Hour-by-hour and week-by-week recovery timeline</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

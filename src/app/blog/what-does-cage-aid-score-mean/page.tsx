import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-cage-aid-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-cage-aid-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-cage-aid-score-mean",
  title: "What Does Your CAGE-AID Score Mean?",
  description:
    "CAGE-AID scores range from 0\u20134. A score of 2 or higher is a positive screen for alcohol or drug problems. Learn what each score means and what to do next.",
  keywords: [
    "CAGE-AID score meaning",
    "CAGE-AID results interpretation",
    "CAGE-AID positive screen",
    "substance use screening score",
    "CAGE-AID cutoff",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is the CAGE-AID the same as the original CAGE?",
    answer:
      "The original CAGE was developed for alcohol only. The CAGE-AID adapts the same four questions to include \u201cor drug use\u201d \u2014 making it applicable to any substance. Both versions use the same scoring and cutoff. The CAGE-AID is preferred when both alcohol and drug use are relevant to screen.",
  },
  {
    question: "I only drink occasionally. Can I still screen positive?",
    answer:
      "Yes. The CAGE-AID focuses on consequences and patterns rather than quantity or frequency. Someone who drinks rarely but has had significant consequences when they do drink \u2014 feeling guilty, being criticized by others, wanting to cut down \u2014 can score positive. The AUDIT captures quantity and frequency more directly if that\u2019s the relevant concern.",
  },
  {
    question: "What does \u201ceye-opener\u201d mean exactly?",
    answer:
      "The Eye-opener question asks whether you\u2019ve ever had a drink or used drugs first thing in the morning to steady your nerves, get rid of a hangover, or start the day. It\u2019s detecting whether the substance is being used to manage withdrawal symptoms or anxiety about the day \u2014 both indicators of physical or psychological dependence.",
  },
  {
    question: "Can I stop on my own without professional help?",
    answer:
      "For alcohol specifically, abrupt cessation after heavy daily use carries medical risk \u2014 alcohol withdrawal can cause seizures and requires medical supervision in some cases. For opioids, cannabis, and other substances, medical withdrawal management varies by substance. A healthcare provider can help you determine the safest approach. Motivational interviewing research also shows that professional support, even brief and infrequent, significantly improves outcomes compared to attempting change alone.",
  },
];

export default function WhatDoesCageAidScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your CAGE-AID Score Mean?", description: "CAGE-AID scores range from 0\u20134. A score of 2 or higher is a positive screen for alcohol or drug problems. Learn what each score means and what to do next.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your CAGE-AID Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your CAGE-AID Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            CAGE-AID scores range from 0 to 4. A score of <strong>2 or higher</strong> is the validated positive screen &mdash; it indicates that alcohol or drug use patterns warrant further evaluation. A score of 0&ndash;1 falls below the clinical threshold. The CAGE-AID is a brief four-question screen designed for primary care settings; a positive result is a flag for further assessment, not a diagnosis of substance use disorder.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What is the CAGE-AID?</h2>
            <p>
              The <strong>CAGE-AID</strong> (Cut down, Annoyed, Guilty, Eye-opener &mdash; Adapted to Include Drugs) is a four-question substance use screen developed by adapting the original CAGE alcohol screen (Ewing, 1984) to include drug use alongside alcohol. The adaptation was developed by Brown and Rounds (1995).
            </p>
            <p>Each letter in CAGE represents one question:</p>
            <ul>
              <li><strong>C &mdash; Cut down:</strong> Have you ever felt you should cut down on your drinking or drug use?</li>
              <li><strong>A &mdash; Annoyed:</strong> Have people annoyed you by criticizing your drinking or drug use?</li>
              <li><strong>G &mdash; Guilty:</strong> Have you ever felt bad or guilty about your drinking or drug use?</li>
              <li><strong>E &mdash; Eye-opener:</strong> Have you ever had a drink or used drugs first thing in the morning to steady your nerves or to get rid of a hangover?</li>
            </ul>
            <p>
              Each &quot;yes&quot; answer scores 1 point. The total ranges from 0&ndash;4.
            </p>
            <p>
              The CAGE-AID is one of the briefest validated substance use screens available &mdash; the four questions can be answered in under a minute. This makes it practical for routine primary care screening, though its brevity means it captures less detail than the AUDIT or DAST-10.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>CAGE-AID score interpretation</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Score</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Interpretation</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Recommended Response</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">0</td><td className="py-2 pr-4">No indicators present</td><td className="py-2">No action needed</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">1</td><td className="py-2 pr-4">One indicator &mdash; low concern</td><td className="py-2">Monitor; consider open conversation about use</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">2&ndash;3</td><td className="py-2 pr-4">Positive screen &mdash; moderate to significant concern</td><td className="py-2">Brief intervention; formal assessment recommended</td></tr>
                  <tr><td className="py-2 pr-4">4</td><td className="py-2 pr-4">Strong positive screen</td><td className="py-2">Prompt professional evaluation recommended</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              At the validated cutoff of 2, the CAGE-AID shows reasonable sensitivity for identifying problematic substance use in primary care populations. For alcohol specifically, the CAGE (without drug adaptation) shows approximately 71&ndash;93% sensitivity and 76&ndash;96% specificity depending on the study population and definition used (Dhalla &amp; Kopec, 2007).
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What each question is detecting</h2>
            <p>The CAGE-AID&apos;s four questions aren&apos;t random &mdash; each captures a distinct dimension of problematic substance use:</p>
            <p>
              <strong>Cut down (C):</strong> The desire to cut down is one of the earliest signs of a developing problem &mdash; it indicates awareness that use has become more than recreational. People who have no problematic relationship with a substance rarely feel the need to cut down; those who do often have noticed that their use is exceeding their own intended limits.
            </p>
            <p>
              <strong>Annoyed (A):</strong> When others &mdash; family members, partners, friends, colleagues &mdash; are commenting on someone&apos;s use, that&apos;s externally observable evidence of impact. The fact that their concern is experienced as annoying rather than welcomed reflects the ambivalence and defensiveness that characterize problematic use.
            </p>
            <p>
              <strong>Guilty (G):</strong> Guilt about substance use indicates that the person&apos;s own values and the behavior are in conflict &mdash; a sign that the use is outside what the person would endorse as acceptable. It also often reflects consequences that have occurred as a result of use.
            </p>
            <p>
              <strong>Eye-opener (E):</strong> Using in the morning to manage withdrawal symptoms or to function is a strong indicator of physical dependence. This single question has the highest positive predictive value of the four for identifying severe alcohol use disorder specifically.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>CAGE-AID vs. AUDIT vs. DAST-10: choosing the right tool</h2>
            <p>The CAGE-AID, AUDIT, and DAST-10 all screen for substance use problems but serve different purposes:</p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Tool</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Covers</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Questions</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">CAGE-AID</td><td className="py-2 pr-4">Alcohol + drugs</td><td className="py-2 pr-4">4</td><td className="py-2">Quick gateway screen; primary care</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">AUDIT</td><td className="py-2 pr-4">Alcohol only</td><td className="py-2 pr-4">10</td><td className="py-2">Detailed alcohol screening</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">AUDIT-C</td><td className="py-2 pr-4">Alcohol only</td><td className="py-2 pr-4">3</td><td className="py-2">Very brief alcohol screen</td></tr>
                  <tr><td className="py-2 pr-4 font-medium">DAST-10</td><td className="py-2 pr-4">Drugs only</td><td className="py-2 pr-4">10</td><td className="py-2">Detailed drug screening</td></tr>
                </tbody>
              </table>
            </div>
            <p>If you screened positive on the CAGE-AID, more detailed follow-up tools can clarify which substance is involved and the severity of the pattern:</p>
            <ul>
              <li>Primarily alcohol concern &rarr; <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT</Link> for full picture</li>
              <li>Primarily drug concern &rarr; <Link href="/dast-10-drug-screening" className="text-sage-600 dark:text-sage-400 underline">DAST-10</Link> for full picture</li>
              <li>Both &rarr; both tools</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Score of 0&ndash;1: below threshold</h2>
            <p>
              A score of 0 means no CAGE-AID indicators were endorsed. Your responses don&apos;t suggest a pattern of problematic substance use based on these four dimensions.
            </p>
            <p>
              A score of 0 does not rule out all substance use concerns &mdash; the CAGE-AID is brief and doesn&apos;t capture quantity/frequency information, and someone can use substances in physically risky amounts without yet experiencing the social/interpersonal indicators the CAGE captures. If quantity or frequency is a concern, the AUDIT is more sensitive for this.
            </p>
            <p>
              A score of 1 falls below the positive screen threshold but isn&apos;t without meaning &mdash; it suggests at least one dimension of problematic use may be emerging. A score of 1 on the Eye-opener question specifically warrants particular attention even as a single-item endorsement, given its strong association with dependence.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>Score of 2&ndash;3: positive screen</h2>
            <p>
              Two or three indicators represent a positive screen. Multiple dimensions of problematic use &mdash; desire to cut down, external concern from others, personal guilt, or morning use &mdash; have been endorsed.
            </p>
            <p>
              At this level, brief intervention &mdash; a structured, non-judgmental conversation with a clinician about use patterns, consequences, and goals &mdash; is well-supported by evidence. Motivational interviewing and brief intervention have demonstrated efficacy at reducing substance use in this score range (Bien et al., 1993). This doesn&apos;t require a specialty addiction program &mdash; primary care providers, general practitioners, and counselors can deliver effective brief intervention.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>Score of 4: strong positive screen</h2>
            <p>
              All four indicators are endorsed. This reflects a pattern that touches multiple dimensions of problematic use &mdash; felt need to cut down, external concern, personal guilt, and morning use. This combination strongly suggests evaluation by a substance use specialist or addiction medicine physician is warranted.
            </p>
            <p>
              A score of 4 &mdash; particularly with Eye-opener present &mdash; is consistent with moderate-to-severe substance use disorder. Effective, evidence-based treatment is available. Recovery is not only possible but common.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 — Co-occurring */}
          <section>
            <h2>Substance use, mental health, and the connection</h2>
            <p>
              Substance use and mental health conditions are deeply interconnected, and high CAGE-AID scores often co-occur with mental health symptoms worth assessing:
            </p>
            <ul>
              <li><strong>Depression:</strong> Both a risk factor for substance use (self-medication) and a common consequence</li>
              <li><strong>Anxiety:</strong> The short-term anxiolytic effects of alcohol make it a common anxiety coping tool &mdash; with significant long-term cost</li>
              <li><strong>PTSD:</strong> Alcohol and drug use are among the most common PTSD coping strategies; co-occurring rates are high</li>
            </ul>
            <p>
              If you scored positive on the CAGE-AID and have been struggling emotionally, consider also taking the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link>, <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link>, or <Link href="/pcl-5-ptsd-screening" className="text-sage-600 dark:text-sage-400 underline">PCL-5</Link>. Bringing a complete picture to a clinical conversation leads to more effective, integrated care.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              The CAGE-AID is an educational screening tool only. It cannot diagnose substance use disorder or any other condition. If you are concerned about your alcohol or drug use, please consult a qualified healthcare professional or certified substance use counselor.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are struggling with substance use and need immediate support:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Want a more detailed substance use picture?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Each screening takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/audit-alcohol-test" className="btn-primary text-sm">Take the AUDIT Alcohol Screening</Link>
              <Link href="/dast-10-drug-screening" className="btn-primary text-sm">Take the DAST-10 Drug Screening</Link>
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
              <Link href="/cage-aid-substance-abuse-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CAGE-AID Substance Use Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Brief 4-question alcohol and drug screen</p>
              </Link>
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO 10-item alcohol use screening tool</p>
              </Link>
              <Link href="/dast-10-drug-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DAST-10 Drug Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10-item drug use severity screening</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-does-audit-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your AUDIT Score Mean?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding alcohol screening score ranges</p>
              </Link>
              <Link href="/blog/dast-10-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Understanding the DAST-10</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Scoring, interpretation, and what your results mean</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

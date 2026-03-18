import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/phq-9-vs-gad-7`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "phq-9-vs-gad-7")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/phq-9-vs-gad-7",
  title: "PHQ-9 vs GAD-7: Which Should You Take?",
  description:
    "The PHQ-9 screens for depression, the GAD-7 for anxiety. Learn how they differ, when to take each, and why taking both together is often most useful.",
  keywords: [
    "PHQ-9 vs GAD-7",
    "PHQ-9 or GAD-7",
    "which depression anxiety screening",
    "difference PHQ-9 GAD-7",
    "should I take PHQ-9 or GAD-7",
    "depression vs anxiety screening",
    "PHQ-9 GAD-7 together",
    "combined depression anxiety screen",
    "PHQ-9 GAD-7 comparison",
    "mental health screening tools",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can I take both the PHQ-9 and GAD-7 on the same day?",
    answer:
      "Yes, this is exactly how they are designed to be used. Clinicians routinely administer both in a single appointment because taking them the same day gives you a snapshot of both depression and anxiety dimensions at the same point in time, producing a more complete clinical picture.",
  },
  {
    question: "If I score high on both, does that mean I have two separate diagnoses?",
    answer:
      "Not necessarily. High scores on both tools reflect significant symptom burden across depression and anxiety domains. Whether that represents two separate conditions, one condition with features of both, or something else entirely requires clinical evaluation. The scores guide further assessment but do not produce diagnoses on their own.",
  },
  {
    question: "My PHQ-9 is high but my GAD-7 is low. Is that unusual?",
    answer:
      "No, this is not unusual. Some people experience depression with relatively little overt anxiety, particularly melancholic presentations characterized more by emptiness and loss of interest than by agitation or worry. A primarily depressive picture with a lower anxiety score is a well-recognized clinical pattern.",
  },
  {
    question: "How often should I retake these screens?",
    answer:
      "There is no fixed schedule. Many people retake them when they notice a shift in how they are feeling, or before a clinical appointment. If you are in treatment, your provider may administer them monthly to track progress. Retaking more frequently than every two weeks does not yield meaningful new data since both tools assess that time window.",
  },
];

export default function PHQ9vsGAD7Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "PHQ-9 vs GAD-7: Which Should You Take?", description: "The PHQ-9 screens for depression, the GAD-7 for anxiety. Learn how they differ, when to take each, and why taking both together is often most useful.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "PHQ-9 vs GAD-7", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            PHQ-9 vs GAD-7: Which Should You Take?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Take the PHQ-9 if you&apos;re primarily experiencing low mood, loss of interest, low energy, or feelings of worthlessness. Take the GAD-7 if you&apos;re primarily experiencing persistent worry, restlessness, or tension that&apos;s hard to control. If you&apos;re unsure — or experiencing both — take both. The two tools together take under 10 minutes and give a more complete picture than either alone, which is why clinicians routinely administer them as a pair.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What each tool is designed for</h2>
            <p>
              The PHQ-9 and GAD-7 were developed by the same research team (Drs. Kroenke and Spitzer at Columbia University) specifically to work alongside each other in primary care settings. They share a similar format — past two weeks, 0–3 frequency rating — which makes them easy to compare directly.
            </p>
            <p>
              <strong>PHQ-9 (Patient Health Questionnaire-9)</strong>
            </p>
            <ul>
              <li>Screens for: Major depressive disorder</li>
              <li>Questions: 9 | Score range: 0–27 | Clinical cutoff: 10+</li>
              <li>Validated sensitivity/specificity: 88%/88% (Kroenke et al., 2001)</li>
            </ul>
            <p>
              <strong>GAD-7 (Generalized Anxiety Disorder 7-item scale)</strong>
            </p>
            <ul>
              <li>Screens for: Generalized anxiety disorder (and other anxiety disorders)</li>
              <li>Questions: 7 | Score range: 0–21 | Clinical cutoff: 10+</li>
              <li>Validated sensitivity/specificity: 89%/82% (Spitzer et al., 2006)</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2>How they differ: symptom by symptom</h2>
            <p>
              The tools share some overlapping symptoms — both include fatigue and difficulty concentrating — but their core items are distinct.
            </p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Symptom</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">PHQ-9</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">GAD-7</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Depressed mood / hopelessness</td><td className="py-2 pr-4">&#10003;</td><td className="py-2">—</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Loss of interest or pleasure</td><td className="py-2 pr-4">&#10003;</td><td className="py-2">—</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Sleep disturbance</td><td className="py-2 pr-4">&#10003;</td><td className="py-2">&#10003;</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Fatigue / low energy</td><td className="py-2 pr-4">&#10003;</td><td className="py-2">&#10003;</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Appetite changes</td><td className="py-2 pr-4">&#10003;</td><td className="py-2">—</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Feelings of worthlessness / guilt</td><td className="py-2 pr-4">&#10003;</td><td className="py-2">—</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Difficulty concentrating</td><td className="py-2 pr-4">&#10003;</td><td className="py-2">&#10003;</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Psychomotor changes</td><td className="py-2 pr-4">&#10003;</td><td className="py-2">—</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Thoughts of self-harm</td><td className="py-2 pr-4">&#10003;</td><td className="py-2">—</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Excessive worry, hard to control</td><td className="py-2 pr-4">—</td><td className="py-2">&#10003;</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Restlessness / on edge</td><td className="py-2 pr-4">—</td><td className="py-2">&#10003;</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Irritability</td><td className="py-2 pr-4">—</td><td className="py-2">&#10003;</td></tr>
                  <tr><td className="py-2 pr-4">Muscle tension</td><td className="py-2 pr-4">—</td><td className="py-2">&#10003;</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              The PHQ-9&apos;s unique items center on <strong>mood, anhedonia, and self-perception</strong> — the inward, withdrawing quality of depression. The GAD-7&apos;s unique items center on <strong>worry, arousal, and tension</strong> — the forward-scanning, vigilant quality of anxiety.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>When to take the PHQ-9</h2>
            <p>
              Take the PHQ-9 if you&apos;ve been noticing:
            </p>
            <ul>
              <li>Persistent sadness, emptiness, or hopelessness most days</li>
              <li>Loss of interest or enjoyment in things you used to care about</li>
              <li>Significantly lower energy than usual</li>
              <li>Changes in appetite or sleep that feel connected to your mood</li>
              <li>Feeling like a burden, or experiencing excessive guilt</li>
              <li>Difficulty doing tasks that used to be automatic</li>
              <li>Thoughts of death or self-harm</li>
            </ul>
            <p>
              The PHQ-9 is specifically calibrated to the nine DSM-5 criteria for major depressive disorder. If the primary weight you&apos;re carrying feels like sadness, emptiness, or a loss of self, the PHQ-9 is the right starting point.
            </p>
            <p>
              <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">Take the PHQ-9 Depression Self-Check →</Link>
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>When to take the GAD-7</h2>
            <p>
              Take the GAD-7 if you&apos;ve been noticing:
            </p>
            <ul>
              <li>Worry that feels excessive and difficult to switch off</li>
              <li>Restlessness — a sense of being unable to settle or relax</li>
              <li>Physical tension, particularly in your muscles, neck, or jaw</li>
              <li>A sense of dread or anticipation of things going wrong</li>
              <li>Irritability that feels tied to being constantly on alert</li>
              <li>Fatigue from being in a heightened state</li>
              <li>Trouble sleeping because your mind won&apos;t quiet down</li>
            </ul>
            <p>
              The GAD-7 captures the forward-focused, threat-anticipating nature of anxiety. If the primary experience is that your nervous system won&apos;t let you rest, the GAD-7 is the right tool.
            </p>
            <p>
              <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">Take the GAD-7 Anxiety Self-Check →</Link>
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Why taking both is usually best</h2>
            <p>
              Depression and anxiety co-occur in approximately 50% of cases (Kessler et al., 2003). More importantly, many people can&apos;t easily separate what they&apos;re feeling into &quot;this is depression&quot; and &quot;this is anxiety&quot; — and they shouldn&apos;t have to.
            </p>
            <p>
              Taking both tools together gives you and any clinician you speak with:
            </p>
            <ol>
              <li><strong>A clearer map of your symptoms</strong> — which dimension is higher, which is lower, whether both are elevated</li>
              <li><strong>Better treatment targeting</strong> — the relative severity of depression vs. anxiety informs both therapy approach and medication selection</li>
              <li><strong>A baseline to track</strong> — if you&apos;re beginning treatment, having both scores lets you measure change in both dimensions over time</li>
            </ol>
            <p>
              The combined administration takes about 8–10 minutes. Many primary care practices and mental health settings administer both as a standard intake package. You can replicate that process here in a few minutes.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>How to interpret your combined scores</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">PHQ-9 Score</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">GAD-7 Score</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">What It Suggests</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Below 10</td><td className="py-2 pr-4">Below 10</td><td className="py-2">Below clinical threshold on both; monitor if symptoms are new</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">10+</td><td className="py-2 pr-4">Below 10</td><td className="py-2">Primarily depressive presentation</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Below 10</td><td className="py-2 pr-4">10+</td><td className="py-2">Primarily anxiety presentation</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">10+</td><td className="py-2 pr-4">10+</td><td className="py-2">Significant co-occurring depression and anxiety</td></tr>
                  <tr><td className="py-2 pr-4">15+</td><td className="py-2 pr-4">15+</td><td className="py-2">Both moderately severe; prompt evaluation recommended</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              These are interpretive guides, not diagnostic categories. A clinician weighs many factors beyond scores.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>What if your scores don&apos;t match how you feel?</h2>
            <p>
              Both tools are validated but imperfect. Some reasons scores and experience might diverge:
            </p>
            <ul>
              <li><strong>Timing matters:</strong> Both tools ask about the past two weeks. A difficult period before that window won&apos;t be captured.</li>
              <li><strong>Somatic presentation:</strong> Some people experience emotional distress primarily through physical symptoms — pain, fatigue, GI issues — that screening questions may undercount.</li>
              <li><strong>Atypical presentations:</strong> Some forms of depression involve more irritability and agitation than sadness; these can look more like anxiety on screening tools.</li>
              <li><strong>Situational context:</strong> Major life stressors can produce elevated scores that don&apos;t represent a clinical disorder.</li>
            </ul>
            <p>
              Your lived experience is always more valid than a number. If your score seems low but you&apos;re struggling, or high but you feel relatively stable, bring both the number and your own description to a clinical conversation. The score is a starting point.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>Other screening tools to consider</h2>
            <p>
              Depending on what you&apos;re experiencing, other tools on MindCheck may give you a more complete picture:
            </p>
            <ul>
              <li><Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21</Link> — screens depression, anxiety, and stress together in one assessment</li>
              <li><Link href="/pcl-5-ptsd-screening" className="text-sage-600 dark:text-sage-400 underline">PCL-5</Link> — if you&apos;ve experienced trauma and recognize PTSD symptoms</li>
              <li><Link href="/asrs-adhd-screening" className="text-sage-600 dark:text-sage-400 underline">ASRS</Link> — if attention, focus, and organization difficulties are prominent</li>
              <li><Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT</Link> — if alcohol use and its effects are part of the picture</li>
              <li><Link href="/mdq-bipolar-screening" className="text-sage-600 dark:text-sage-400 underline">MDQ</Link> — if your mood shifts dramatically between high and low periods</li>
            </ul>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. Screening tools may indicate the need for further assessment — they do not confirm or rule out any condition.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> — Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> — Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> — <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Take both screens together</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Under 10 minutes total. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Check</Link>
              <Link href="/dass-21-depression-anxiety-stress" className="btn-primary text-sm">Take the DASS-21 (All Three)</Link>
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
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated anxiety symptom screening</p>
              </Link>
              <Link href="/dass-21-depression-anxiety-stress" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21 Depression, Anxiety &amp; Stress</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for all three in one sitting</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-does-phq-9-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your PHQ-9 Score Mean?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Score ranges, severity levels, and next steps</p>
              </Link>
              <Link href="/blog/what-does-gad-7-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your GAD-7 Score Mean?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Anxiety score interpretation and when to seek help</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-pss-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-pss-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-pss-score-mean",
  title: "What Does Your PSS Score Mean?",
  description:
    "PSS-10 scores range from 0\u201340. Learn what your Perceived Stress Scale score means, what the score ranges indicate, and practical steps to take based on your results.",
  keywords: [
    "PSS score meaning",
    "perceived stress scale results",
    "PSS-10 interpretation",
    "stress score meaning",
    "perceived stress scale cutoff",
    "high PSS score",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How often should I retake the PSS?",
    answer:
      "Monthly retesting provides a useful longitudinal picture, particularly during periods of change or stress reduction work. The PSS measures the past month, so weekly retesting would capture too much overlap. Many people use it quarterly as a general health check-in, or before and after a significant life change.",
  },
  {
    question: "My PSS score is high but I don\u2019t feel particularly stressed. Is that possible?",
    answer:
      "Yes. Some people have habituated to a high stress load and don\u2019t consciously register it as unusual anymore \u2014 stress has become the baseline. If you\u2019re endorsing feeling unable to control things or overwhelmed, that\u2019s meaningful even if you don\u2019t label it as \u201cstress.\u201d Physical symptoms like muscle tension, fatigue, sleep problems, and GI issues can also be stress manifestations.",
  },
  {
    question: "Is there a clinical cutoff for the PSS like there is for the PHQ-9?",
    answer:
      "No. Unlike the PHQ-9 or GAD-7, the PSS doesn\u2019t have a diagnostic cutoff because it doesn\u2019t screen for a specific clinical condition. The score ranges (low/moderate/high) are based on normative data \u2014 where you fall relative to the general population \u2014 rather than a disorder threshold. This makes the PSS more useful as a wellness monitor than a clinical screener.",
  },
];

export default function WhatDoesPssScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your PSS Score Mean?", description: "PSS-10 scores range from 0\u201340. Learn what your Perceived Stress Scale score means and practical steps based on your results.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your PSS Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">11 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your PSS Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            PSS-10 scores range from 0 to 40. Scores of <strong>0&ndash;13</strong> indicate low perceived stress, <strong>14&ndash;26</strong> indicate moderate perceived stress, and <strong>27&ndash;40</strong> indicate high perceived stress. The PSS is not a diagnostic tool &mdash; it measures your subjective sense of how stressful life has felt in the past month, and provides a baseline for tracking changes over time.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What Is the Perceived Stress Scale?</h2>
            <p>
              The <strong>Perceived Stress Scale (PSS)</strong> was developed by Dr. Sheldon Cohen and colleagues (1983) at Carnegie Mellon University. It is one of the most widely used measures of psychological stress in research and clinical settings &mdash; with over 19,000 citations in the scientific literature.
            </p>
            <p>
              The PSS measures <strong>perceived stress</strong> &mdash; not life events or objective stressors, but your subjective appraisal of how uncontrollable, unpredictable, and overwhelming life has seemed in the past month. This distinction matters: two people facing identical circumstances can have very different PSS scores based on how they are experiencing those circumstances.
            </p>
            <p>
              The most common version, the <strong>PSS-10</strong>, contains 10 items rated on a 5-point scale (0 = Never, 4 = Very Often). Four items are positively worded and reverse-scored before totaling. If you want to explore how life events contribute to your stress level, the <Link href="/holmes-rahe-stress-inventory" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">Holmes-Rahe Stress Inventory</Link> offers a complementary perspective.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>PSS-10 Score Ranges</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Score</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Stress Level</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">General Interpretation</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">0&ndash;13</td>
                    <td className="py-2 pr-4">Low</td>
                    <td className="py-2">Below-average perceived stress</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">14&ndash;26</td>
                    <td className="py-2 pr-4">Moderate</td>
                    <td className="py-2">Average range; some stress present</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">27&ndash;40</td>
                    <td className="py-2 pr-4">High</td>
                    <td className="py-2">Above-average perceived stress; health signal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These ranges are derived from normative data across large US adult samples (Cohen &amp; Williamson, 1988). The average score in the US adult population is approximately <strong>13&ndash;14</strong>, with women historically scoring slightly higher than men.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>PSS Score of 0&ndash;13: Low Perceived Stress</h2>
            <p>
              A score in the low range means you&rsquo;ve experienced life in the past month as relatively manageable, predictable, and within your control. Your stress response system has not been significantly activated by your perceived circumstances.
            </p>
            <p>
              This is the target range &mdash; not a state free from challenges, but a state where challenges feel proportionate to your ability to manage them. If you scored in this range but are here because something feels off, consider whether the PSS is capturing the right dimension. The PSS measures perceived stress broadly &mdash; it may not detect condition-specific concerns like anxiety or depression. The <Link href="/gad-7-anxiety-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">GAD-7</Link> and <Link href="/phq-9-depression-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PHQ-9</Link> address those specifically.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>PSS Score of 14&ndash;26: Moderate Perceived Stress</h2>
            <p>
              Moderate perceived stress is the most common range &mdash; most US adults fall here. It reflects a life that includes meaningful stressors that are being managed, but where the sense of control and predictability is imperfect.
            </p>
            <p>Within this range:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Lower moderate (14&ndash;18):</strong> Within normal life variation; stress-reduction practices can be beneficial but aren&rsquo;t urgently needed</li>
              <li><strong>Upper moderate (19&ndash;26):</strong> A meaningful stress load that is worth taking seriously. Chronic moderate stress in this range is associated with increased risk for burnout, depression, anxiety, and physical health effects over time</li>
            </ul>
            <p>
              If you&rsquo;re in the upper moderate range, lifestyle factors &mdash; sleep quality, exercise, social support, workload management &mdash; are the first-line intervention. If the stress has been sustained for more than a few months, or is tied to a specific life domain that isn&rsquo;t changing, a counselor or therapist can help.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>PSS Score of 27&ndash;40: High Perceived Stress</h2>
            <p>
              A high PSS score indicates that life has felt significantly uncontrollable, unpredictable, and overwhelming in the past month. This is above the average for US adults and is associated with meaningful health consequences when sustained.
            </p>
            <p>Research consistently links high perceived stress to:</p>
            <p><strong>Mental health:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Significantly elevated rates of depression and anxiety (Cohen et al., 1983; Hammen, 2005)</li>
              <li>Increased risk of burnout &mdash; particularly in high-demand occupational contexts</li>
              <li>Reduced cognitive performance &mdash; working memory, attention, and decision-making all degrade under chronic stress</li>
            </ul>
            <p><strong>Physical health:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Elevated cortisol and inflammatory markers (Cohen et al., 2012)</li>
              <li>Increased susceptibility to illness &mdash; perceived stress is one of the strongest predictors of common cold susceptibility in challenge studies</li>
              <li>Sleep disruption &mdash; high stress and poor sleep are bidirectionally linked</li>
              <li>Cardiovascular risk over time</li>
            </ul>
            <p>
              <strong>A high PSS score is a health signal.</strong> It doesn&rsquo;t mean you have a clinical disorder &mdash; but it does mean your current stress load is producing physiological effects that accumulate over time.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What the PSS Measures That Other Tools Don&rsquo;t</h2>
            <p>
              The PSS is distinct from condition-specific screening tools like the GAD-7 (anxiety) or PHQ-9 (depression) because it doesn&rsquo;t screen for a diagnosable condition. Instead, it measures <strong>perceived controllability and predictability</strong> &mdash; the subjective sense of being able to cope.
            </p>
            <p>This makes the PSS particularly useful for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Tracking stress over time</strong> &mdash; retaking the PSS monthly provides a longitudinal picture of how your stress load is changing</li>
              <li><strong>Identifying stress before it becomes clinical</strong> &mdash; PSS scores often elevate before full anxiety or depression criteria are met</li>
              <li><strong>Evaluating intervention effectiveness</strong> &mdash; stress management programs, therapy, and lifestyle changes can be measured with PSS re-assessment</li>
              <li><strong>Occupational and life transition monitoring</strong> &mdash; new jobs, caregiving demands, relationship changes, and other stressors show up reliably in PSS scores</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2>Why Perceived Stress Matters More Than Objective Stress</h2>
            <p>
              Two people can face the same objectively difficult circumstances &mdash; a health diagnosis, financial pressure, a difficult workplace &mdash; and experience very different levels of perceived stress. This isn&rsquo;t a matter of toughness or resilience deficits; it reflects the complex interaction of:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Appraisal:</strong> How the situation is interpreted (threat vs. challenge)</li>
              <li><strong>Resources:</strong> Perceived availability of coping tools, social support, and practical resources</li>
              <li><strong>Prior experience:</strong> History of managing similar situations successfully or unsuccessfully</li>
              <li><strong>Biological factors:</strong> Individual differences in stress reactivity &mdash; some nervous systems are more reactive than others</li>
            </ul>
            <p>
              The PSS measures the output of all these factors combined. Understanding your perceived stress level is useful precisely because it reflects your subjective experience &mdash; which is what affects your health &mdash; not just what&rsquo;s happening around you.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>Practical Steps for High PSS Scores</h2>
            <p>If your score is in the moderate-high or high range, consider these evidence-based approaches:</p>
            <p>
              <strong>Immediate:</strong> The most powerful short-term stress reduction techniques include slow diaphragmatic breathing (directly activates the parasympathetic system), brief mindfulness practices (10 minutes of focused attention significantly reduces perceived stress acutely), and physical movement (even a 10-minute walk reduces cortisol).
            </p>
            <p>
              <strong>Short-term:</strong> Sleep is the highest-leverage single intervention &mdash; sleep deprivation dramatically amplifies perceived stress. If sleep is disrupted, addressing it is often more impactful than adding stress management techniques on top of chronic sleep debt.
            </p>
            <p>
              <strong>Structural:</strong> Sustained high stress usually reflects a structural mismatch between demands and resources. Identifying which domains (work, caregiving, financial, relational) are driving the score &mdash; and whether any changes are possible in those domains &mdash; is more durable than coping skills alone.
            </p>
            <p>
              <strong>Professional support:</strong> If the PSS has been high for multiple months and lifestyle adjustments haven&rsquo;t shifted it, this is worth discussing with a therapist or counselor. Cognitive reappraisal strategies (changing how situations are interpreted) and problem-solving therapy both have evidence for reducing perceived stress.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2>PSS and Mental Health Screening</h2>
            <p>
              A high PSS score is often the first indicator that something worth investigating clinically may be developing. If your PSS is high, consider also screening for:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><Link href="/phq-9-depression-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PHQ-9 Depression Self-Check</Link> &mdash; sustained high stress is one of the strongest depression triggers</li>
              <li><Link href="/gad-7-anxiety-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">GAD-7 Anxiety Screening</Link> &mdash; anxiety and high perceived stress are closely related</li>
              <li><Link href="/dass-21-depression-anxiety-stress" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">DASS-21 Stress/Depression/Anxiety</Link> &mdash; provides scores on all three dimensions simultaneously</li>
            </ul>
            <p>
              Bringing both your PSS and these clinical screening results to a healthcare or mental health appointment gives a much richer picture than either alone.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment. The PSS is a research and wellness monitoring instrument &mdash; it does not diagnose any clinical condition.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-5">
            <p className="text-sm text-red-900 dark:text-red-200 font-semibold mb-2">Crisis Resources</p>
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="text-sm text-red-800 dark:text-red-300 space-y-1">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 p-6 text-center">
            <h2 className="text-lg font-semibold text-sage-900 dark:text-sage-100 mb-2">Take a Free Stress &amp; Mental Health Screening</h2>
            <p className="text-sm text-sage-700 dark:text-sage-400 mb-4">
              Use our free, confidential screening tools to check your stress, anxiety, and depression levels.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/dass-21-depression-anxiety-stress" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">DASS-21 Screening</Link>
              <Link href="/phq-9-depression-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">GAD-7 Anxiety Check</Link>
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
                { href: "/dass-21-depression-anxiety-stress", label: "DASS-21 Depression/Anxiety/Stress" },
                { href: "/phq-9-depression-test", label: "PHQ-9 Depression Self-Check" },
                { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Screening" },
                { href: "/holmes-rahe-stress-inventory", label: "Holmes-Rahe Stress Inventory" },
                { href: "/work-stress-check", label: "Work Stress Check" },
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
                ["mental-health-and-sleep", "work-stress-vs-burnout", "depression-vs-anxiety", "what-does-gad-7-score-mean"].includes(p.slug)
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

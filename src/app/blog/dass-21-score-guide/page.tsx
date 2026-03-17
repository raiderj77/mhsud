import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/dass-21-score-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "dass-21-score-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/dass-21-score-guide",
  title: "DASS-21 Score Guide: Understanding Your Depression, Anxiety, and Stress Scores",
  description:
    "DASS-21 scores range from 0\u201342 per subscale. Learn what your Depression, Anxiety, and Stress scores mean, how severity levels are classified, and what to do next.",
  keywords: [
    "DASS-21 score meaning",
    "DASS-21 interpretation",
    "DASS-21 scoring",
    "depression anxiety stress scale",
    "DASS-21 score ranges",
    "DASS-21 results",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is a normal DASS-21 score?",
    answer:
      "A \u201cnormal\u201d DASS-21 score falls in the lowest severity band for each subscale: 0\u20139 for Depression, 0\u20137 for Anxiety, and 0\u201314 for Stress. These ranges indicate that symptoms in that dimension are within the typical range for the general population. However, \u201cnormal\u201d on the DASS-21 does not mean you cannot benefit from support \u2014 it simply means your current symptom level in that area is not elevated.",
  },
  {
    question: "Is the DASS-21 the same as the PHQ-9?",
    answer:
      "No. The PHQ-9 is a 9-item screener focused exclusively on depression, aligned with DSM diagnostic criteria. The DASS-21 measures three separate dimensions \u2014 depression, anxiety, and stress \u2014 simultaneously with 21 items. The PHQ-9 is more commonly used in clinical settings for depression screening, while the DASS-21 provides a broader emotional profile across all three domains.",
  },
  {
    question: "How often should I take the DASS-21?",
    answer:
      "The DASS-21 asks about symptoms over the past week, so weekly or biweekly retesting is appropriate. Monthly check-ins are useful for general monitoring. Many people retake it before and after starting a new intervention \u2014 such as therapy, medication, or a lifestyle change \u2014 to track whether scores are shifting.",
  },
  {
    question: "Can the DASS-21 diagnose depression or anxiety?",
    answer:
      "No. The DASS-21 is a screening and research instrument, not a diagnostic tool. It can indicate elevated symptoms that may warrant further evaluation, but only a qualified mental health professional can make a clinical diagnosis based on a comprehensive assessment.",
  },
];

export default function Dass21ScoreGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "DASS-21 Score Guide: Understanding Your Depression, Anxiety, and Stress Scores", description: "DASS-21 scores range from 0\u201342 per subscale. Learn what your Depression, Anxiety, and Stress scores mean and what to do next.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "DASS-21 Score Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            DASS-21 Score Guide: Understanding Your Depression, Anxiety, and Stress Scores
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            The DASS-21 produces three separate scores &mdash; Depression (0&ndash;42), Anxiety (0&ndash;42), and Stress (0&ndash;42) &mdash; each classified into five severity levels from Normal to Extremely Severe. It is a screening tool, not a diagnostic instrument. Your scores indicate current symptom levels across these three emotional dimensions and can help guide conversations with a healthcare provider.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What Is the DASS-21?</h2>
            <p>
              The <strong>Depression Anxiety Stress Scales &mdash; 21 Items (DASS-21)</strong> is a self-report screening tool developed by Lovibond &amp; Lovibond (1995) at the University of New South Wales, Australia. It is a shortened version of the original 42-item DASS, designed to measure three related but distinct negative emotional states: depression, anxiety, and stress.
            </p>
            <p>
              The DASS-21 contains 21 items &mdash; seven for each subscale. Each item is rated on a 4-point scale (0 = Did not apply to me at all, 3 = Applied to me very much or most of the time) based on the past week. Because the DASS-21 is the short form, <strong>each subscale score is multiplied by 2</strong> to allow comparison with the full 42-item DASS norms. This means final subscale scores range from 0 to 42.
            </p>
            <p>
              Unlike single-dimension tools such as the <Link href="/phq-9-depression-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PHQ-9</Link> (depression only) or the <Link href="/gad-7-anxiety-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">GAD-7</Link> (anxiety only), the DASS-21 provides a profile across all three dimensions simultaneously. This can be especially useful when you&apos;re unsure which emotional state is most prominent.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>DASS-21 Score Ranges by Subscale</h2>
            <p>
              Each of the three subscales has its own severity thresholds. The ranges below reflect the doubled scores used with the 21-item version:
            </p>

            <h3>Depression Subscale</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Score</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">Severity</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">0&ndash;9</td>
                    <td className="py-2">Normal</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">10&ndash;13</td>
                    <td className="py-2">Mild</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">14&ndash;20</td>
                    <td className="py-2">Moderate</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">21&ndash;27</td>
                    <td className="py-2">Severe</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">28&ndash;42</td>
                    <td className="py-2">Extremely Severe</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Anxiety Subscale</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Score</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">Severity</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">0&ndash;7</td>
                    <td className="py-2">Normal</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">8&ndash;9</td>
                    <td className="py-2">Mild</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">10&ndash;14</td>
                    <td className="py-2">Moderate</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">15&ndash;19</td>
                    <td className="py-2">Severe</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">20&ndash;42</td>
                    <td className="py-2">Extremely Severe</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Stress Subscale</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Score</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">Severity</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">0&ndash;14</td>
                    <td className="py-2">Normal</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">15&ndash;18</td>
                    <td className="py-2">Mild</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">19&ndash;25</td>
                    <td className="py-2">Moderate</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">26&ndash;33</td>
                    <td className="py-2">Severe</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">34&ndash;42</td>
                    <td className="py-2">Extremely Severe</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Note that the severity thresholds differ across subscales. A score of 12 on the Depression subscale is mild, but a score of 12 on the Anxiety subscale is moderate. Always interpret each subscale using its own cutoffs.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 3 */}
          <section>
            <h2>What Each Subscale Measures</h2>
            <p>
              The three DASS-21 subscales target distinct aspects of emotional distress, though they are correlated with each other:
            </p>
            <p>
              <strong>Depression:</strong> Measures dysphoria, hopelessness, devaluation of life, self-deprecation, lack of interest or involvement, anhedonia (inability to experience pleasure), and inertia. This subscale captures the core features of low mood and motivational loss.
            </p>
            <p>
              <strong>Anxiety:</strong> Measures autonomic arousal (dry mouth, breathing difficulty, trembling, heart racing), skeletal muscle effects, situational anxiety, and subjective experience of anxious affect. This subscale emphasizes the physical and physiological symptoms of anxiety more than cognitive worry.
            </p>
            <p>
              <strong>Stress:</strong> Measures difficulty relaxing, nervous arousal, being easily agitated or irritable, over-reactivity, and impatience. This subscale captures a state of chronic non-specific arousal &mdash; the feeling of being wound up and unable to settle.
            </p>
            <p>
              Understanding which subscale is elevated can help you and your healthcare provider focus on the most relevant area. It&apos;s common for two or even all three subscales to be elevated simultaneously &mdash; depression, anxiety, and stress frequently co-occur.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2>How DASS-21 Scoring Works</h2>
            <p>
              Each of the 21 items is rated from 0 (Did not apply to me at all) to 3 (Applied to me very much or most of the time), based on the past week. The seven items for each subscale are summed, then <strong>the sum is multiplied by 2</strong> to produce the final score. This doubling allows direct comparison with the norms established for the full 42-item DASS.
            </p>
            <p>
              For example, if your raw Depression subscale sum is 8 (out of a possible 21), your final Depression score is 16 &mdash; which falls in the moderate range. You can take the <Link href="/dass-21-depression-anxiety-stress" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">DASS-21 screening</Link> on this site to have the scoring calculated automatically.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 5 */}
          <section>
            <h2>DASS-21 vs. PHQ-9 and GAD-7: When to Use Each</h2>
            <p>
              The <Link href="/phq-9-depression-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PHQ-9</Link> and <Link href="/gad-7-anxiety-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">GAD-7</Link> are the most widely used clinical screening tools for depression and anxiety, respectively. They are brief, well-validated, and closely aligned with DSM diagnostic criteria. If a clinician needs to screen for one specific condition, these tools are the standard.
            </p>
            <p>
              The DASS-21 offers a different advantage: <strong>it screens three dimensions at once</strong>. This is valuable when you&apos;re not sure what you&apos;re experiencing &mdash; when the emotional distress is diffuse and hard to categorize. It&apos;s also useful for tracking how depression, anxiety, and stress change relative to each other over time.
            </p>
            <p>
              Neither approach is superior. The PHQ-9 and GAD-7 are more specific; the DASS-21 is broader. Many people find it helpful to start with the DASS-21 for an overall picture, then follow up with the PHQ-9 or GAD-7 if a particular subscale is elevated.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2>What to Do With Your DASS-21 Results</h2>
            <p>
              <strong>Normal scores across all three subscales:</strong> Your current symptom levels are within the typical range. This doesn&apos;t mean life feels easy &mdash; just that the specific symptoms measured by the DASS-21 aren&apos;t elevated. If something still feels off, consider screening with a tool that measures a different dimension, such as the <Link href="/dass-21-depression-anxiety-stress" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">DASS-21</Link> stress subscale or a burnout-specific measure.
            </p>
            <p>
              <strong>Mild elevation in one or more subscales:</strong> Mild scores suggest symptoms are present but not significantly impairing function. Lifestyle factors &mdash; sleep, physical activity, social connection, workload &mdash; are the first-line response. Retaking the DASS-21 in 2&ndash;4 weeks can help determine whether the elevation is situational or persistent.
            </p>
            <p>
              <strong>Moderate to severe elevation:</strong> Scores in the moderate, severe, or extremely severe range indicate symptom levels that may be impacting daily functioning, relationships, or work. Consulting a healthcare provider or mental health professional is recommended. Bring your DASS-21 results to the appointment &mdash; they provide a concrete starting point for conversation.
            </p>
            <p>
              <strong>Extremely severe scores:</strong> Scores in the extremely severe range reflect significant distress. This is not a diagnosis, but it is a strong signal that professional evaluation is warranted. If you are experiencing thoughts of self-harm, please contact a crisis resource immediately.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 7 */}
          <section>
            <h2>Tracking Your Scores Over Time</h2>
            <p>
              One of the most valuable uses of the DASS-21 is longitudinal tracking. A single score is a snapshot; repeated scores reveal trends. Because the DASS-21 measures the past week, retaking it every 1&ndash;4 weeks provides meaningful data about whether your emotional state is improving, stable, or worsening.
            </p>
            <p>
              This is especially useful if you are:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Starting therapy or medication and want to track response</li>
              <li>Making lifestyle changes (exercise, sleep hygiene, stress reduction) and want to measure impact</li>
              <li>Going through a major life transition (job change, relationship change, loss) and want to monitor how you&apos;re coping</li>
              <li>Working with a healthcare provider who would benefit from seeing your symptom trajectory</li>
            </ul>
            <p>
              Save or print your results each time you take the screening. Patterns over weeks and months are far more informative than any single score.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2>Limitations of the DASS-21</h2>
            <p>
              The DASS-21 is a well-validated research instrument, but it has important limitations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>It is not a diagnostic tool.</strong> Elevated scores may indicate a clinical condition, but the DASS-21 cannot confirm or rule out a diagnosis. That requires professional evaluation.</li>
              <li><strong>It measures current symptoms only.</strong> The DASS-21 captures the past week. It does not assess lifetime history, pattern of episodes, or diagnostic context.</li>
              <li><strong>Anxiety subscale emphasis on physical symptoms.</strong> The DASS-21 Anxiety subscale focuses heavily on somatic arousal (trembling, heart racing, breathing difficulty). People whose anxiety is primarily cognitive (persistent worry without strong physical symptoms) may score lower than expected. The GAD-7 may be a better fit for generalized worry.</li>
              <li><strong>Self-report bias.</strong> Like all self-report screening tools, accuracy depends on honest and accurate self-assessment.</li>
            </ul>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment. The DASS-21 is a research and screening instrument &mdash; it does not diagnose depression, anxiety, or any clinical condition.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
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
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h2 className="text-lg font-semibold text-sage-900 dark:text-sage-100 mb-2">Take a Free DASS-21 Screening</h2>
            <p className="text-sm text-sage-700 dark:text-sage-400 mb-4">
              Use our free, confidential screening tools to check your depression, anxiety, and stress levels &mdash; all in one assessment.
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
                ["what-does-phq-9-score-mean", "what-does-gad-7-score-mean", "what-does-pss-score-mean", "depression-vs-anxiety"].includes(p.slug)
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

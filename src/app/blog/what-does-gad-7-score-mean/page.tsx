import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-gad-7-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-gad-7-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-gad-7-score-mean",
  title: "What Does Your GAD-7 Score Mean?",
  description:
    "GAD-7 scores range from 0\u201321. Learn what minimal, mild, moderate, and severe anxiety scores mean and when to seek professional support.",
  keywords: [
    "GAD-7 score meaning",
    "GAD-7 interpretation",
    "GAD-7 results",
    "GAD-7 anxiety scale",
    "what is a high GAD-7 score",
    "GAD-7 severity levels",
    "GAD-7 cutoff score",
    "generalized anxiety disorder screening",
    "anxiety screening score",
    "GAD-7 moderate severe",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is a GAD-7 score of 8 normal?",
    answer:
      "A score of 8 falls in the mild range and does not cross the clinical threshold. \u201CNormal\u201D varies widely \u2014 what matters most is whether these symptoms are affecting your daily life and whether they\u2019ve been persistent. Many people function well with mild anxiety; others find it significantly disruptive. Your experience matters more than the number.",
  },
  {
    question: "Can the GAD-7 detect panic disorder or social anxiety?",
    answer:
      "The GAD-7 was validated to detect several anxiety conditions, not just generalized anxiety disorder. Studies found sensitivity above 74% for panic disorder, social anxiety disorder, and PTSD at the cutoff of 10 (Spitzer et al., 2006). However, condition-specific tools like the SPIN (for social anxiety) may give additional insight for those presentations.",
  },
  {
    question: "My GAD-7 score went up since last time. Should I be worried?",
    answer:
      "An increase of 5 or more points is generally considered a clinically meaningful change. If your score has increased, that\u2019s worth paying attention to \u2014 particularly if other areas of your life are also feeling harder. Consider speaking with a healthcare provider, especially if the increase coincides with sustained stress or life changes.",
  },
  {
    question: "Can anxiety and depression occur together?",
    answer:
      "Yes \u2014 very commonly. Research suggests that approximately 50% of people with major depression also have a co-occurring anxiety disorder (Kessler et al., 2003). If you scored in the mild-to-moderate range on the GAD-7, taking the PHQ-9 as well can give you a more complete picture to share with a healthcare provider.",
  },
];

export default function WhatDoesGAD7ScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your GAD-7 Score Mean?", description: "GAD-7 scores range from 0\u201321. Learn what minimal, mild, moderate, and severe anxiety scores mean and when to seek professional support.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your GAD-7 Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your GAD-7 Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            GAD-7 scores range from 0 to 21. Scores of 0–4 indicate minimal anxiety, 5–9 indicate mild anxiety, 10–14 indicate moderate anxiety, and 15–21 indicate severe anxiety. A score of 10 or higher is the standard clinical threshold for further evaluation of generalized anxiety disorder — though severity, duration, and impact on daily functioning all matter alongside the number.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What is the GAD-7 and how is it scored?</h2>
            <p>
              The <strong>Generalized Anxiety Disorder 7-item scale (GAD-7)</strong> was developed by Drs. Spitzer, Kroenke, Williams, and L&ouml;we (2006) and is one of the most widely used anxiety screening tools in primary care settings globally. It measures how often you&apos;ve experienced seven anxiety-related symptoms over the past two weeks.
            </p>
            <p>
              Each question is scored 0–3:
            </p>
            <ul>
              <li><strong>0</strong> = Not at all</li>
              <li><strong>1</strong> = Several days</li>
              <li><strong>2</strong> = More than half the days</li>
              <li><strong>3</strong> = Nearly every day</li>
            </ul>
            <p>
              The seven items correspond to core diagnostic criteria for generalized anxiety disorder (GAD) as defined in the DSM-5. Your total score ranges from <strong>0 to 21</strong>.
            </p>
            <p>
              The GAD-7 demonstrates strong psychometric validity: a sensitivity of 89% and specificity of 82% for generalized anxiety disorder at a cutoff of 10, and sensitivity/specificity above 80% for panic disorder, social anxiety disorder, and PTSD (Spitzer et al., 2006).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>GAD-7 score ranges: what each level means</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Score</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Severity</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Clinical Approach</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">0–4</td><td className="py-2 pr-4">Minimal anxiety</td><td className="py-2">Monitor; no clinical action typically needed</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">5–9</td><td className="py-2 pr-4">Mild anxiety</td><td className="py-2">Consider watchful waiting; lifestyle support</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">10–14</td><td className="py-2 pr-4">Moderate anxiety</td><td className="py-2">Professional evaluation recommended</td></tr>
                  <tr><td className="py-2 pr-4">15–21</td><td className="py-2 pr-4">Severe anxiety</td><td className="py-2">Prompt professional evaluation strongly recommended</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              These ranges are drawn from the original validation study (Spitzer et al., 2006) and are used in clinical and research settings worldwide.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What does a GAD-7 score of 0–4 mean?</h2>
            <p>
              A score of 0–4 indicates <strong>minimal anxiety symptoms</strong>. The worry and tension the GAD-7 measures are either absent or occurring infrequently enough that they don&apos;t suggest a clinical concern.
            </p>
            <p>
              Anxiety is a normal part of human experience — everyone has moments of worry or unease. A minimal score means those moments haven&apos;t been clustering into a pattern over the past two weeks. If you took the screen during a relatively calm period but feel like something has changed recently, consider retaking it after two more weeks.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>What does a GAD-7 score of 5–9 mean?</h2>
            <p>
              A score of 5–9 indicates <strong>mild anxiety symptoms</strong>. You&apos;re experiencing some of the symptoms the GAD-7 measures — perhaps some restlessness, occasional worry that&apos;s hard to control, or mild physical tension — but not at a severity that typically indicates generalized anxiety disorder.
            </p>
            <p>
              At this level, clinicians often recommend monitoring symptoms over time. Strategies like regular exercise, sleep hygiene, mindfulness, and reducing caffeine intake can help mild anxiety symptoms, and research supports their effectiveness for this range (Hofmann et al., 2010).
            </p>
            <p>
              If mild anxiety has been persistent for several weeks, or if it&apos;s affecting your work or relationships even subtly, a brief check-in with a counselor or your primary care provider is worth considering.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>What does a GAD-7 score of 10–14 mean?</h2>
            <p>
              A score of 10–14 indicates <strong>moderate anxiety</strong> and crosses the clinical evaluation threshold used in most healthcare settings. At this level, anxiety symptoms are likely showing up meaningfully in your day-to-day life.
            </p>
            <p>
              Moderate anxiety might look like: excessive worry that&apos;s difficult to turn off, trouble sleeping because your mind won&apos;t quiet down, irritability, difficulty concentrating, or physical symptoms like muscle tension and headaches. The GAD-7 specifically measures whether these experiences feel out of proportion to what&apos;s actually happening around you — a hallmark of generalized anxiety disorder.
            </p>
            <p>
              A score in this range doesn&apos;t confirm a diagnosis. It does mean that a professional evaluation — with a therapist, psychologist, or primary care doctor — can give you a clearer picture and help you decide on next steps.
            </p>
            <p>
              <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">Take the GAD-7 Anxiety Self-Check →</Link>
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What does a GAD-7 score of 15–21 mean?</h2>
            <p>
              A score of 15–21 indicates <strong>severe anxiety symptoms</strong>. The GAD-7 items you&apos;re rating highest — excessive worry, inability to control worry, restlessness, easily fatigued, difficulty concentrating, irritability, muscle tension, or sleep disturbance — are occurring at the most frequent level across most of the scale.
            </p>
            <p>
              At this level, anxiety is very likely significantly impairing how you function. Research indicates that scores in the severe range are associated with substantial disruption in occupational and social functioning (Kroenke et al., 2007).
            </p>
            <p>
              Both evidence-based psychotherapy (particularly cognitive behavioral therapy) and medication (SSRIs and SNRIs) are effective for generalized anxiety disorder. The American Psychological Association and the National Institute of Mental Health both recognize CBT as a first-line treatment (APA, 2020). A mental health professional can help you understand which path makes the most sense for your situation.
            </p>
            <p>
              If you&apos;re scoring in the severe range, please don&apos;t wait to reach out. Anxiety responds well to treatment — and the sooner you connect with support, the sooner that can begin.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>How does the GAD-7 compare to other anxiety screens?</h2>
            <p>
              The GAD-7 is one of several validated anxiety screening tools. Understanding where it sits can help you interpret your results in context.
            </p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Tool</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Questions</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">What It Measures</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Clinical Cutoff</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">GAD-7</td>
                    <td className="py-2 pr-4">7</td>
                    <td className="py-2 pr-4">Generalized anxiety symptoms</td>
                    <td className="py-2">10+</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">GAD-2</td>
                    <td className="py-2 pr-4">2</td>
                    <td className="py-2 pr-4">Brief anxiety screen (first 2 items of GAD-7)</td>
                    <td className="py-2">3+</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21</Link> (Anxiety)</td>
                    <td className="py-2 pr-4">7</td>
                    <td className="py-2 pr-4">Anxiety symptoms (panic, physiological arousal)</td>
                    <td className="py-2">10+</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/spin-social-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">SPIN</Link></td>
                    <td className="py-2 pr-4">17</td>
                    <td className="py-2 pr-4">Social anxiety specifically</td>
                    <td className="py-2">19+</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4"><Link href="/k6-distress-scale" className="text-sage-600 dark:text-sage-400 underline">K6</Link></td>
                    <td className="py-2 pr-4">6</td>
                    <td className="py-2 pr-4">Broad nonspecific psychological distress</td>
                    <td className="py-2">13+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The GAD-7 is optimized for detecting generalized anxiety. If your score is high but the worry feels tied specifically to social situations, the <Link href="/spin-social-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">SPIN Social Anxiety Test</Link> may offer additional insight. If you&apos;re experiencing both anxiety and depression symptoms, the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> or <Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21</Link> can help you look at both dimensions.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>When should you seek help for anxiety?</h2>
            <p>
              Regardless of your GAD-7 score, consider reaching out to a mental health professional if:
            </p>
            <ul>
              <li>Anxiety has been present most days for two or more weeks</li>
              <li>Worry is difficult to control even when you know it&apos;s out of proportion</li>
              <li>Anxiety is interfering with work, relationships, or activities you normally enjoy</li>
              <li>You&apos;re using alcohol or other substances to manage anxious feelings</li>
              <li>Physical symptoms (heart racing, shortness of breath, muscle tension) are frequent</li>
              <li>You&apos;ve tried to manage on your own and haven&apos;t seen improvement</li>
            </ul>
            <p>
              The GAD-7 score is one data point. Your own sense of how much anxiety is disrupting your life is equally important information.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2>Does anxiety go away on its own?</h2>
            <p>
              Sometimes — and sometimes it doesn&apos;t. Research shows that mild anxiety symptoms can resolve with lifestyle changes and supportive coping. But generalized anxiety disorder, when untreated, often follows a chronic, waxing-and-waning course (Kessler et al., 2002).
            </p>
            <p>
              The encouraging news: anxiety disorders are among the most treatable mental health conditions. The National Institute of Mental Health estimates that effective treatment helps most people with anxiety disorders reduce their symptoms significantly (NIMH, 2023). Seeking support early generally leads to better outcomes than waiting.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. The GAD-7 is a screening tool — it may indicate the need for further assessment but does not confirm or rule out any condition.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis, overwhelmed, or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> — Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> — Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> — <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to check your anxiety symptoms?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The GAD-7 takes under 3 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Check</Link>
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
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
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated anxiety symptom screening</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
              <Link href="/spin-social-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">SPIN Social Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Social anxiety-specific screening tool</p>
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
              <Link href="/blog/gad-7-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Scale Explained</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What the GAD-7 measures and how doctors interpret scores</p>
              </Link>
              <Link href="/blog/social-anxiety-vs-introversion" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Social Anxiety vs Introversion</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding the difference and when to seek help</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

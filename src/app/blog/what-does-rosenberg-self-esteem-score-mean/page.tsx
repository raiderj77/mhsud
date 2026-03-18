import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-does-rosenberg-self-esteem-score-mean`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-does-rosenberg-self-esteem-score-mean")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-does-rosenberg-self-esteem-score-mean",
  title: "What Does Your Rosenberg Self-Esteem Scale Score Mean?",
  description:
    "Rosenberg Self-Esteem Scale scores range from 0\u201330. Learn what high and low scores mean, how self-esteem connects to mental health, and when to seek support.",
  keywords: [
    "Rosenberg self-esteem scale score meaning",
    "RSE score interpretation",
    "self-esteem score meaning",
    "low self-esteem score",
    "Rosenberg scale results",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is low self-esteem a mental health disorder?",
    answer:
      "Low self-esteem is not a diagnosable disorder in the DSM-5. It is, however, a core feature of several conditions (depression, social anxiety) and a significant risk factor for others. When low self-esteem causes distress or functional impairment \u2014 affecting relationships, work, or quality of life \u2014 it warrants clinical attention even without a specific diagnosis.",
  },
  {
    question: "Can self-esteem be too high?",
    answer:
      "Inflated or fragile self-esteem \u2014 self-worth that is grandiose, requires constant external validation, or responds to challenge with aggression or defensiveness \u2014 is associated with problems. True stable high self-esteem that isn\u2019t contingent on external validation or comparison is generally adaptive. The RSE doesn\u2019t distinguish these; very high scores are worth reflecting on qualitatively.",
  },
  {
    question: "Does self-esteem change across the lifespan?",
    answer:
      "Yes. Research shows self-esteem tends to be moderate in childhood, drops in adolescence (particularly for girls), rises through young and middle adulthood, peaks in the 50s and 60s, and then declines again in older age (Orth et al., 2018). Major life events, relationships, and mental health conditions all produce fluctuations within these developmental trends.",
  },
  {
    question: "My self-esteem score is low but I don\u2019t feel depressed. What should I do?",
    answer:
      "Low self-esteem without depression still warrants attention \u2014 it affects quality of life, relationship patterns, and occupational functioning, and creates vulnerability for future depression. A therapist can help explore where the self-esteem patterns developed and begin shifting them. Self-compassion practices (Neff, 2011) are also evidence-based and can be self-directed as a starting point.",
  },
];

export default function WhatDoesRosenbergSelfEsteemScoreMeanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Does Your Rosenberg Self-Esteem Scale Score Mean?", description: "Rosenberg Self-Esteem Scale scores range from 0\u201330. Learn what high and low scores mean and how self-esteem connects to mental health.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Does Your Rosenberg Self-Esteem Scale Score Mean?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">12 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Does Your Rosenberg Self-Esteem Scale Score Mean?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Rosenberg Self-Esteem Scale scores range from 0 to 30. Scores of <strong>15&ndash;25</strong> indicate normal self-esteem. Scores below 15 suggest low self-esteem that may benefit from support. Scores above 25 indicate high self-esteem. The scale measures global self-worth &mdash; your overall sense of value as a person &mdash; and is widely used in both research and clinical contexts to understand how self-esteem relates to mental health and wellbeing.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What Is the Rosenberg Self-Esteem Scale?</h2>
            <p>
              The <strong>Rosenberg Self-Esteem Scale (RSE or RSES)</strong> was developed by sociologist Dr. Morris Rosenberg (1965) and is one of the most widely used self-esteem measures in the world &mdash; cited in over 30,000 published research studies.
            </p>
            <p>
              The scale consists of 10 items, each rated on a 4-point scale from Strongly Disagree (0) to Strongly Agree (3). Five items are positively worded (&ldquo;I feel that I have a number of good qualities&rdquo;) and five are negatively worded (&ldquo;I feel that I do not have much to be proud of&rdquo;), with the negative items reverse-scored before totaling.
            </p>
            <p>
              The RSE measures <strong>global self-esteem</strong> &mdash; a person&rsquo;s overall sense of their own value and worth &mdash; rather than domain-specific self-confidence (athletic ability, academic performance, social skills). It captures the underlying appraisal of &ldquo;am I a worthwhile person?&rdquo; rather than &ldquo;am I good at specific things?&rdquo;
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>Rosenberg Score Ranges</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Score</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Self-Esteem Level</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">Interpretation</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">0&ndash;14</td>
                    <td className="py-2 pr-4">Low</td>
                    <td className="py-2">Below the normative range; clinical attention may be warranted</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">15&ndash;25</td>
                    <td className="py-2 pr-4">Normal</td>
                    <td className="py-2">Within the typical range for adults</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">26&ndash;30</td>
                    <td className="py-2 pr-4">High</td>
                    <td className="py-2">Above average; consider whether this is realistic vs. defensive</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              These ranges reflect normative data from large adult samples (Rosenberg, 1965; Schmitt &amp; Allik, 2005). The average RSE score across cultures is approximately <strong>22</strong> (Schmitt &amp; Allik, 2005), with some variation by country, age, and gender.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>Score of 15&ndash;25: Normal Self-Esteem</h2>
            <p>
              This range indicates self-esteem within the typical range for adults. People in this range generally hold a reasonably positive view of themselves, can acknowledge both strengths and limitations, and don&rsquo;t experience pervasive feelings of worthlessness or inferiority.
            </p>
            <p>
              Self-esteem in this range is not uniform or static &mdash; it fluctuates with circumstances, interpersonal feedback, and life events. Normal self-esteem doesn&rsquo;t mean an absence of self-doubt; it means that the underlying sense of personal worth is present even when specific areas of life are difficult.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>Score of 0&ndash;14: Low Self-Esteem</h2>
            <p>
              A score below 15 places you below the normative range for adults. This indicates a pattern of negative self-evaluation &mdash; a global sense that you lack worth, ability, or value relative to others.
            </p>
            <p>Low self-esteem at this level is clinically significant not because low self-esteem is itself a diagnosable condition, but because it is:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A <strong>core feature</strong> of major depressive disorder (DSM-5 criterion: feelings of worthlessness or excessive guilt)</li>
              <li>A <strong>risk factor</strong> for depression, anxiety, and eating disorders</li>
              <li>A <strong>consequence</strong> of depression, anxiety, and trauma &mdash; conditions that consistently erode the sense of self-worth</li>
              <li>Associated with <strong>poorer treatment outcomes</strong> when not addressed alongside other mental health concerns</li>
            </ul>
            <p>
              Low self-esteem is not a personality flaw or a fixed trait. It reflects a pattern of self-evaluation that developed in response to experiences &mdash; and it responds well to intervention.
            </p>
            <h3>Low Self-Esteem and Depression: The Relationship</h3>
            <p>The relationship between low self-esteem and depression is bidirectional:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Depression causes low self-esteem:</strong> Depressive thinking produces negative self-evaluations as a symptom (&ldquo;I&rsquo;m worthless,&rdquo; &ldquo;I&rsquo;m a burden&rdquo;)</li>
              <li><strong>Low self-esteem is a vulnerability for depression:</strong> People with chronically low self-esteem are more susceptible to depressive episodes, particularly after life setbacks</li>
            </ul>
            <p>
              This creates a cycle that therapy is well-positioned to interrupt. If your RSE score is low, taking the <Link href="/phq-9-depression-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PHQ-9</Link> is a useful next step &mdash; the two often co-occur, and knowing both scores helps focus clinical attention.
            </p>
            <h3>What Low Self-Esteem Feels Like</h3>
            <p>Beyond the numerical score, low self-esteem often manifests as:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Chronic self-criticism &mdash; an inner voice that is reliably harsh, dismissive, or contemptuous</li>
              <li>Difficulty accepting positive feedback &mdash; attributing compliments to luck or others&rsquo; error</li>
              <li>Comparison with others that almost always goes against you</li>
              <li>Avoiding challenges for fear of confirming inadequacy</li>
              <li>Apologizing excessively or shrinking in social and professional contexts</li>
              <li>Difficulty expressing needs or asserting yourself</li>
              <li>Feeling fundamentally different from or less than other people</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Score of 26&ndash;30: High Self-Esteem</h2>
            <p>
              Scores above 25 indicate above-average self-esteem. In most cases, high self-esteem is a positive attribute associated with resilience, better mental health outcomes, and effective social functioning.
            </p>
            <p>However, the RSE doesn&rsquo;t distinguish between two subtypes of high self-esteem that researchers have identified:</p>
            <p>
              <strong>Secure high self-esteem:</strong> A stable, non-defensive sense of self-worth that doesn&rsquo;t require external validation and isn&rsquo;t threatened by criticism or failure. Associated with good outcomes.
            </p>
            <p>
              <strong>Fragile or defensive high self-esteem:</strong> High self-esteem scores that mask underlying insecurity &mdash; maintained through external validation, grandiosity, or defensiveness when challenged. Associated with narcissistic traits and heightened sensitivity to criticism.
            </p>
            <p>
              If your high score feels fragile &mdash; easily destabilized by others&rsquo; opinions, requiring constant external validation to maintain &mdash; this is worth exploring with a therapist.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>Self-Esteem, Mental Health, and the Connection</h2>
            <p>
              Self-esteem doesn&rsquo;t operate in isolation. It intersects with several mental health conditions in clinically important ways:
            </p>
            <p>
              <strong>Depression:</strong> Low self-esteem is both a symptom and a risk factor. Nearly all people with clinical depression experience a reduced sense of self-worth during episodes.
            </p>
            <p>
              <strong>Anxiety:</strong> Particularly social anxiety &mdash; which is fundamentally organized around the fear of negative evaluation by others &mdash; is closely tied to low self-esteem and negative self-perception.
            </p>
            <p>
              <strong>Trauma and PTSD:</strong> Adverse experiences, particularly interpersonal trauma, often produce lasting damage to self-esteem. The shame and self-blame that frequently accompany trauma directly erode the sense of personal worth.
            </p>
            <p>
              <strong>Eating disorders:</strong> Body image dissatisfaction and self-worth contingent on weight and shape are central to most eating disorder presentations.
            </p>
            <p>If your RSE score is low and you&rsquo;ve been struggling emotionally, these screening tools can help map the broader picture:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><Link href="/phq-9-depression-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PHQ-9 Depression Self-Check</Link></li>
              <li><Link href="/gad-7-anxiety-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">GAD-7 Anxiety Screening</Link></li>
              <li><Link href="/pcl-5-ptsd-screening" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PCL-5 PTSD Screening</Link></li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2>Can Self-Esteem Improve?</h2>
            <p>
              Yes. Self-esteem is not fixed. It developed through experiences and relationships &mdash; and it can shift through new experiences and relationships, including therapeutic ones.
            </p>
            <p>Evidence-based approaches that improve self-esteem:</p>
            <p>
              <strong>Cognitive Behavioral Therapy (CBT):</strong> Specifically targets the negative self-evaluative beliefs (&ldquo;I&rsquo;m worthless,&rdquo; &ldquo;I&rsquo;m fundamentally flawed&rdquo;) that maintain low self-esteem. Cognitive restructuring and behavioral experiments (doing things to test negative predictions) are particularly effective.
            </p>
            <p>
              <strong>Self-Compassion Training:</strong> Dr. Kristin Neff&rsquo;s work on self-compassion offers an alternative to building self-esteem through comparison and achievement &mdash; instead, treating yourself with the same kindness you&rsquo;d offer a good friend. Research shows self-compassion is more robust and less contingent than self-esteem.
            </p>
            <p>
              <strong>Interpersonal Therapy (IPT):</strong> By improving the quality of key relationships and communication, IPT often produces improvements in self-esteem as a secondary outcome.
            </p>
            <p>
              <strong>Behavioral activation:</strong> For depression-related low self-esteem, re-engaging with meaningful activities produces both mood improvement and a renewed sense of competence and value.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment. Low self-esteem is a clinical concern when it significantly affects functioning, but a score alone does not indicate a diagnosable condition.
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
            <h2 className="text-lg font-semibold text-sage-900 dark:text-sage-100 mb-2">Take a Free Mental Health Screening</h2>
            <p className="text-sm text-sage-700 dark:text-sage-400 mb-4">
              Use our free, confidential screening tools to check your mental health and wellbeing.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/rosenberg-self-esteem-scale" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">Rosenberg Self-Esteem Scale</Link>
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
                { href: "/rosenberg-self-esteem-scale", label: "Rosenberg Self-Esteem Scale" },
                { href: "/phq-9-depression-test", label: "PHQ-9 Depression Self-Check" },
                { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Screening" },
                { href: "/pcl-5-ptsd-screening", label: "PCL-5 PTSD Screening" },
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
                ["what-does-phq-9-score-mean", "depression-vs-anxiety", "cognitive-distortions-list", "how-to-find-a-therapist"].includes(p.slug)
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

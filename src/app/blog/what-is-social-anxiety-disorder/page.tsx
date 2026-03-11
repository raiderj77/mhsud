import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-is-social-anxiety-disorder`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-is-social-anxiety-disorder")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-is-social-anxiety-disorder",
  title: "What Is Social Anxiety Disorder? Symptoms, Causes, and Treatment",
  description:
    "Social anxiety is more than shyness. Learn what social anxiety disorder actually is, how it differs from introversion, and what evidence-based treatments work.",
  keywords: [
    "what is social anxiety disorder",
    "social anxiety symptoms",
    "social phobia explained",
    "social anxiety vs shyness",
    "social anxiety treatment",
    "signs of social anxiety",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is social anxiety disorder the same as being introverted?",
    answer:
      "No. Introversion is a personality trait involving preference for less stimulation \u2014 introverts can enjoy social situations but find large amounts of them draining. Social anxiety disorder involves fear and avoidance driven by the anticipation of negative evaluation. Many introverts have no social anxiety; many people with social anxiety would love to be more socially engaged but find it too frightening.",
  },
  {
    question: "Can social anxiety develop in adulthood?",
    answer:
      "Social anxiety disorder most commonly begins in adolescence \u2014 median onset is around age 13 \u2014 but can develop or significantly worsen in adulthood, particularly after a humiliating social experience or during periods of social isolation. Pandemic-related social withdrawal in 2020\u20132021 significantly elevated social anxiety rates in adults who were previously unaffected.",
  },
  {
    question: "Does social anxiety get better with age?",
    answer:
      "Without treatment, social anxiety tends to persist and often worsens \u2014 the avoidance that provides short-term relief entrenches the disorder over time. With treatment, the prognosis is very good. Some people do experience modest natural improvement over decades, but waiting for natural resolution means years or decades of unnecessary limitation.",
  },
  {
    question: "Can children have social anxiety disorder?",
    answer:
      "Yes. Social anxiety is one of the most common anxiety disorders in children and adolescents. It often presents as school refusal, reluctance to participate in class, avoidance of social activities, or clinginess in younger children. Cognitive behavioral therapy adapted for children (with parent involvement) is effective. Early treatment is important \u2014 social anxiety during development can significantly impair academic, social, and identity development.",
  },
];

export default function WhatIsSocialAnxietyDisorderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Is Social Anxiety Disorder? Symptoms, Causes, and Treatment", description: "Social anxiety is more than shyness. Learn what social anxiety disorder actually is, how it differs from introversion, and what effective treatments work.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Is Social Anxiety Disorder?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">16 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Is Social Anxiety Disorder? Symptoms, Causes, and Treatment
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Social anxiety disorder (also called social phobia) is a marked, persistent fear of social or performance situations in which the person may be scrutinized by others. The fear centers on acting in a way that will be humiliating, embarrassing, or lead to rejection. Social anxiety disorder affects approximately 7.1% of US adults annually &mdash; making it the third most common mental health condition in the United States &mdash; and the average onset is age 13. It is highly treatable but significantly undertreated, with most people waiting over a decade before seeking help.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>Social Anxiety vs. Shyness vs. Introversion</h2>
            <p>These three terms are often conflated, but they describe meaningfully different experiences.</p>
            <p>
              <strong>Introversion</strong> is a personality trait &mdash; a preference for less stimulating environments and a tendency to recharge through solitude rather than social interaction. Introverts are not anxious about social situations; they simply prefer fewer of them. Introversion is not a problem requiring treatment.
            </p>
            <p>
              <strong>Shyness</strong> is a temperamental tendency toward inhibition and discomfort in new social situations &mdash; common, widely distributed, and not inherently impairing. Most shy people function well, form relationships, and navigate social demands without significant limitation.
            </p>
            <p><strong>Social anxiety disorder</strong> is a clinical condition defined by:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fear that is out of proportion to the actual social situation</li>
              <li>Recognition (usually) that the fear is excessive, but inability to control it through reasoning</li>
              <li>Significant distress or functional impairment &mdash; avoided promotions, limited relationships, restricted activities</li>
              <li>Persistence &mdash; the pattern has been present for six months or more</li>
            </ul>
            <p>
              The diagnostic threshold is impairment and distress. Many shy or introverted people never develop social anxiety disorder. Many people with social anxiety disorder wish they could engage more socially but find it impossible without overwhelming fear.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>What Social Anxiety Disorder Actually Feels Like</h2>
            <p>The clinical criteria describe the what; the subjective experience is worth understanding in full.</p>
            <p><strong>Before the situation (anticipatory anxiety):</strong></p>
            <p>
              People with social anxiety often begin dreading a social event days or weeks in advance. The mind generates detailed worst-case scenarios &mdash; what could go wrong, how they might embarrass themselves, how others might judge them. By the time the event arrives, the person is already exhausted from rehearsed worry.
            </p>
            <p><strong>During the situation:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Self-focused attention &mdash; mental resources shift from engaging with others to monitoring one&rsquo;s own performance (&ldquo;Am I saying the right thing? Does my face look weird? Can they tell I&rsquo;m nervous?&rdquo;)</li>
              <li>Physical symptoms that are often feared themselves: blushing, sweating, trembling, voice shaking, heart racing, difficulty finding words</li>
              <li>The fear of others noticing these symptoms creates a second layer of anxiety on top of the first</li>
              <li>Post-event processing &mdash; replaying the interaction afterward, cataloguing everything that went wrong</li>
            </ul>
            <p><strong>The core fear:</strong></p>
            <p>
              Social anxiety centers on the fear of <strong>negative evaluation</strong> &mdash; being judged, dismissed, humiliated, or rejected by others. This fear is not about the social situation itself but about what others will think. A person with social anxiety may be comfortable with close friends but terrified of acquaintances; comfortable in familiar contexts but panicked in new ones.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>Types of Social Anxiety Presentations</h2>
            <p>Social anxiety disorder exists on a spectrum, from situation-specific to generalized:</p>
            <p>
              <strong>Performance-specific social anxiety:</strong> Fear limited to performance situations &mdash; public speaking, eating in front of others, writing while observed. Outside these specific situations, the person functions with little difficulty.
            </p>
            <p>
              <strong>Generalized social anxiety disorder:</strong> Fear extends across most social interactions &mdash; meeting new people, conversations with acquaintances, asserting oneself, being the center of attention, initiating contact. This is the more common and more impairing presentation.
            </p>
            <p>
              <strong>Selective mutism:</strong> An extreme presentation, most common in children, involving inability to speak in specific social situations despite speaking normally in others.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>Common Situations That Trigger Social Anxiety</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Situation</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">What the Fear Centers On</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Public speaking or presentations</td>
                    <td className="py-2">Being evaluated, forgetting words, visibly nervous</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Meeting new people</td>
                    <td className="py-2">Making a bad impression, saying something awkward</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Attending parties or social events</td>
                    <td className="py-2">Not knowing what to say, standing out, being judged</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Eating or drinking in front of others</td>
                    <td className="py-2">Being observed, spilling, drawing attention</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Using public restrooms</td>
                    <td className="py-2">Being heard or judged</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Writing or working while observed</td>
                    <td className="py-2">Performance being evaluated</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Starting or returning phone calls</td>
                    <td className="py-2">Saying something wrong, being judged</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Asserting needs or disagreeing</td>
                    <td className="py-2">Fear of conflict, disapproval, or rejection</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Entering a room where people are already present</td>
                    <td className="py-2">Being watched, scrutinized</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The common thread across all of these: the belief that others are watching, evaluating, and likely to judge negatively &mdash; and that this judgment would be catastrophic.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>What Causes Social Anxiety Disorder?</h2>
            <p>Social anxiety disorder develops through a combination of factors:</p>
            <p>
              <strong>Biological:</strong> Heritability is estimated at approximately 30&ndash;40% (Stein et al., 2017). Neurobiological differences in amygdala reactivity &mdash; the threat-detection center &mdash; mean that social cues are processed as more threatening. The autonomic nervous system activates more readily in social evaluative contexts.
            </p>
            <p><strong>Developmental:</strong> Early experiences shape social anxiety risk. Relevant factors include:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Overprotective or critical parenting styles that model or reinforce social threat</li>
              <li>Peer rejection, bullying, or public humiliation experiences</li>
              <li>Anxious temperament in childhood (behavioral inhibition)</li>
              <li>Adverse childhood experiences (ACEs) that create generalized threat sensitivity</li>
            </ul>
            <p><strong>Cognitive:</strong> The maintaining mechanisms of social anxiety are well-understood. Clark and Wells (1995) identified the key cognitive features:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Self-focused attention:</strong> Attention turns inward during social situations, reducing access to objective information about how the interaction is actually going</li>
              <li><strong>Post-event processing:</strong> Ruminating over social interactions afterward, with a negative bias</li>
              <li><strong>Anticipatory processing:</strong> Pre-event mental catastrophizing</li>
              <li><strong>Safety behaviors:</strong> Actions taken to prevent feared outcomes (avoiding eye contact, over-preparing scripts, holding a glass to hide hand trembling) that paradoxically maintain the anxiety by preventing disconfirmation</li>
            </ul>
            <p>
              <strong>Maintenance:</strong> Social anxiety is self-perpetuating. Avoidance reduces short-term anxiety but prevents the learning that social situations are survivable. Safety behaviors prevent the feared catastrophe from being properly disconfirmed. The result is a disorder that rarely improves without targeted intervention.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>Social Anxiety and Co-occurring Conditions</h2>
            <p>Social anxiety disorder commonly co-occurs with other conditions:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Major depression:</strong> Approximately 40% co-occurrence; isolation, missed opportunities, and chronic self-criticism all contribute</li>
              <li><strong>Other anxiety disorders:</strong> GAD, panic disorder, and specific phobia are frequently comorbid</li>
              <li><strong>Alcohol use disorder:</strong> Alcohol is a powerful acute anxiolytic that is heavily used for social lubrication by people with social anxiety &mdash; at significant long-term cost. The co-occurrence rate is approximately 20%</li>
              <li><strong>ADHD:</strong> The impulsive statements, conversational difficulties, and social mistakes that ADHD can produce create real social consequences that then generate secondary social anxiety</li>
              <li><strong>Avoidant personality disorder:</strong> Overlapping significantly with generalized social anxiety disorder; often distinguished by severity and pervasiveness</li>
            </ul>
            <p>
              If depression or substance use concerns are present alongside social anxiety, the <Link href="/phq-9-depression-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PHQ-9</Link>, <Link href="/gad-7-anxiety-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">GAD-7</Link>, and <Link href="/audit-alcohol-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">AUDIT</Link> can help map those dimensions before a clinical appointment.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>The Alcohol Connection: Self-Medication and Risk</h2>
            <p>Social anxiety and alcohol use have a particularly important relationship worth addressing directly.</p>
            <p>
              Alcohol acutely reduces social anxiety &mdash; it lowers physiological arousal, reduces self-monitoring, and makes social interaction feel more manageable. For someone with significant social anxiety, it can feel like a solution.
            </p>
            <p>
              The problem: alcohol-assisted social interaction prevents the learning that social situations are manageable without it. Over time, the person may find they cannot function socially without drinking &mdash; a pattern that can evolve into alcohol use disorder. Research shows that people with social anxiety who drink regularly to manage social situations have significantly elevated rates of alcohol dependence (Buckner et al., 2008).
            </p>
            <p>
              If you&rsquo;ve been relying on alcohol to get through social situations, this is worth discussing with a clinician &mdash; both the anxiety and the drinking pattern deserve attention.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>Evidence-Based Treatment for Social Anxiety</h2>
            <p>Social anxiety disorder responds very well to treatment. The research is among the strongest in all of anxiety treatment.</p>

            <h3>Cognitive Behavioral Therapy (CBT)</h3>
            <p>CBT for social anxiety specifically targets the cognitive and behavioral maintaining mechanisms:</p>
            <p>
              <strong>Cognitive restructuring:</strong> Identifying and challenging the negative predictions (&ldquo;everyone will think I&rsquo;m boring&rdquo;) and post-event rumination that maintain the disorder. Behavioral experiments test these predictions against actual evidence.
            </p>
            <p>
              <strong>Exposure:</strong> Systematic, graduated exposure to feared social situations &mdash; from less to more difficult &mdash; allows the anxiety response to extinguish through habituation. Crucially, exposure without safety behaviors is required for the learning to occur.
            </p>
            <p>
              <strong>Attention retraining:</strong> Shifting attention from self-focused monitoring to externally focused engagement with others and the situation. This is one of the most powerful interventions for social anxiety specifically.
            </p>
            <p>
              <strong>Video feedback:</strong> Showing people a video of themselves in a social situation consistently produces dramatic reductions in self-perceived performance deficits &mdash; people are almost always significantly less noticeably anxious than they believe.
            </p>
            <p>
              Meta-analytic effect sizes for CBT in social anxiety disorder are approximately 0.7&ndash;1.0 &mdash; large and clinically meaningful (Mayo-Wilson et al., 2014).
            </p>

            <h3>Medication</h3>
            <p>
              <strong>SSRIs:</strong> Sertraline, paroxetine, and escitalopram are first-line pharmacological treatments. Paroxetine and sertraline have FDA approval specifically for social anxiety disorder.
            </p>
            <p>
              <strong>SNRIs:</strong> Venlafaxine has strong evidence for social anxiety and FDA approval.
            </p>
            <p>
              <strong>Beta-blockers:</strong> For performance-specific social anxiety (public speaking), propranolol reduces the physiological symptoms (trembling, racing heart) without affecting mental state. Not effective for generalized social anxiety.
            </p>
            <p>
              <strong>Benzodiazepines:</strong> Provide acute relief but carry dependence risk and don&rsquo;t address the underlying disorder. Not recommended for long-term social anxiety management.
            </p>
            <p>
              Combined medication and CBT produces better outcomes than either alone for many people with social anxiety disorder.
            </p>

            <h3>Group CBT</h3>
            <p>
              Group therapy for social anxiety has a unique advantage: the treatment context itself is the exposure. Being anxious in front of the group, practicing social skills in the group, and receiving disconfirmatory feedback from group members provides powerful in-session exposure that individual therapy cannot replicate. Group CBT is at least as effective as individual CBT for social anxiety in most studies.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              This article is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment. If social anxiety is limiting your life, please consult a qualified mental health professional.
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
            <h2 className="text-lg font-semibold text-sage-900 dark:text-sage-100 mb-2">Take a Free Anxiety Screening</h2>
            <p className="text-sm text-sage-700 dark:text-sage-400 mb-4">
              Use our free, confidential screening tools to check your anxiety and related symptoms.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/spin-social-anxiety-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">SPIN Social Anxiety Test</Link>
              <Link href="/gad-7-anxiety-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">GAD-7 Anxiety Check</Link>
              <Link href="/phq-9-depression-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">PHQ-9 Depression Check</Link>
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
                { href: "/spin-social-anxiety-test", label: "SPIN Social Anxiety Test" },
                { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Screening" },
                { href: "/phq-9-depression-test", label: "PHQ-9 Depression Self-Check" },
                { href: "/audit-alcohol-test", label: "AUDIT Alcohol Screening" },
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
                ["social-anxiety-vs-introversion", "what-is-anxiety", "what-does-gad-7-score-mean", "how-to-find-a-therapist"].includes(p.slug)
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

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/mental-health-and-sleep`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "mental-health-and-sleep")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/mental-health-and-sleep",
  title: "Mental Health and Sleep: How They Affect Each Other",
  description:
    "Poor sleep worsens mental health, and mental health conditions disrupt sleep. Learn how this bidirectional relationship works and what you can do to break the cycle.",
  keywords: [
    "mental health and sleep",
    "sleep and depression",
    "sleep and anxiety",
    "sleep deprivation mental health",
    "how sleep affects mental health",
    "insomnia and mental health",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How many hours of sleep do adults actually need?",
    answer:
      "The American Academy of Sleep Medicine and the CDC recommend 7\u20139 hours for adults 18\u201360, and 7\u20138 hours for adults 61+. Fewer than 7 hours is associated with significantly elevated rates of depression, anxiety, obesity, cardiovascular disease, and impaired immune function. The belief that some people are \u201cshort sleepers\u201d who thrive on 4\u20135 hours is largely a myth \u2014 genuine short sleepers are genetically very rare.",
  },
  {
    question: "Does alcohol really help sleep?",
    answer:
      "Alcohol helps with sleep onset \u2014 it has sedative properties that make falling asleep easier. However, it significantly worsens overall sleep quality. Alcohol suppresses REM sleep, causes fragmented sleep in the second half of the night as it metabolizes, and leads to next-day fatigue. Regular use as a sleep aid worsens sleep over time and carries significant addiction risk.",
  },
  {
    question: "Can I catch up on sleep over the weekend?",
    answer:
      "Partially. \u201cRecovery sleep\u201d on weekends does reduce some of the acute cognitive impairment from weekday sleep restriction. However, research shows it doesn\u2019t fully restore cognitive performance, and the weekend schedule shift (staying up later, sleeping later) disrupts the circadian system \u2014 a pattern called \u201csocial jetlag\u201d that is itself associated with worse mood and metabolic health.",
  },
  {
    question: "What time should I go to bed for mental health?",
    answer:
      "A consistent wake time is more important than bedtime. Waking at the same time every day \u2014 including weekends \u2014 is the single most powerful anchor for the circadian system. Going to bed when sleepy (rather than forcing sleep at a set time) combined with a consistent wake time produces the most stable sleep architecture. Morning light exposure (ideally outdoor) within 30\u201360 minutes of waking also powerfully anchors the circadian clock.",
  },
];

export default function MentalHealthAndSleepPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Mental Health and Sleep: How They Affect Each Other", description: "Poor sleep worsens mental health, and mental health conditions disrupt sleep. Learn how this bidirectional relationship works and what you can do to break the cycle.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Mental Health and Sleep", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">13 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Mental Health and Sleep: How They Affect Each Other
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Sleep and mental health have a bidirectional relationship &mdash; each powerfully affects the other. Poor sleep worsens symptoms of depression, anxiety, PTSD, bipolar disorder, ADHD, and substance use disorders. Mental health conditions, in turn, are among the leading causes of chronic insomnia. Understanding this relationship matters because sleep is often the highest-leverage, most underaddressed intervention available to people struggling with their mental health.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>Sleep and mental health are not separate problems</h2>
            <p>
              For a long time, clinicians treated mental health and sleep problems as a hierarchy: treat the depression, and the insomnia will follow. Research over the past two decades has dismantled this assumption.
            </p>
            <p>
              Sleep problems in people with depression or anxiety are <strong>not merely symptoms</strong> &mdash; they are independent maintaining factors. Studies show that people with depression who also have insomnia are more likely to relapse, less likely to respond to antidepressants, and more likely to experience suicidal ideation than those whose sleep is treated alongside their depression (Pigeon et al., 2008).
            </p>
            <p>
              This means sleep is a treatment target in its own right, not just a downstream symptom.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>How mental health affects sleep</h2>
            <p>Most mental health conditions disrupt sleep &mdash; but in different ways.</p>

            <h3>Depression and sleep</h3>
            <p>Depression is associated with characteristic sleep changes:</p>
            <ul>
              <li><strong>Insomnia</strong> &mdash; particularly early morning awakening (waking 2&ndash;3 hours before the intended time and unable to return to sleep)</li>
              <li><strong>Hypersomnia</strong> &mdash; oversleeping, difficulty getting out of bed, unrefreshing sleep; more common in atypical depression and bipolar depression</li>
              <li><strong>Reduced slow-wave sleep</strong> &mdash; the deepest, most restorative phase of sleep</li>
              <li><strong>Earlier REM onset</strong> &mdash; dreaming sleep begins unusually early, compressing restorative deep sleep</li>
              <li><strong>Increased REM intensity</strong> &mdash; more vivid, emotionally charged dreams</li>
            </ul>
            <p>
              Approximately <strong>75% of people with depression</strong> report insomnia symptoms (Ford &amp; Kamerow, 1989). More telling: insomnia significantly predicts new onset depression &mdash; people with chronic insomnia have <strong>2&ndash;3&times; the risk</strong> of developing depression over time.
            </p>

            <h3>Anxiety and sleep</h3>
            <p>Anxiety&apos;s hallmark relationship with sleep is difficulty falling asleep &mdash; driven by racing, ruminative thoughts at bedtime. Specific patterns include:</p>
            <ul>
              <li><strong>Sleep onset insomnia</strong> &mdash; taking more than 30 minutes to fall asleep due to worry or physiological arousal</li>
              <li><strong>Night awakenings</strong> with difficulty returning to sleep</li>
              <li><strong>Conditioned arousal</strong> &mdash; the bed becomes associated with alertness and worry rather than sleep</li>
              <li><strong>Nighttime amplification</strong> &mdash; intrusive thoughts and worries feel worse when there are no daytime distractions</li>
            </ul>
            <p>
              The hyperarousal that characterizes anxiety disorders extends into the night, keeping the nervous system too activated for sleep to begin.
            </p>

            <h3>PTSD and sleep</h3>
            <p>PTSD has among the most severe sleep disturbances of any mental health condition:</p>
            <ul>
              <li><strong>Nightmares</strong> &mdash; distressing, vivid nightmares replaying trauma or trauma-themed content; a core diagnostic criterion</li>
              <li><strong>Hyperarousal at night</strong> &mdash; the startle response doesn&apos;t turn off; sounds trigger awakening</li>
              <li><strong>Sleep avoidance</strong> &mdash; some people with PTSD deliberately stay awake to avoid nightmares</li>
              <li><strong>Insomnia of all types</strong> &mdash; difficulty falling asleep, staying asleep, and non-restorative sleep</li>
            </ul>
            <p>
              Sleep disturbance in PTSD is now treated as a primary symptom rather than secondary, particularly given the evidence for <strong>Imagery Rehearsal Therapy (IRT)</strong> &mdash; a specific intervention for trauma nightmares.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h3>Bipolar disorder and sleep</h3>
            <p>
              The relationship between sleep and bipolar disorder is exceptionally important because sleep disruption is not just a symptom &mdash; it is one of the most reliable <strong>triggers</strong> of mood episodes.
            </p>
            <ul>
              <li><strong>Mania:</strong> Characterized by dramatically reduced need for sleep; the person sleeps very little and doesn&apos;t feel tired. Mania is also triggered by sleep deprivation &mdash; the relationship runs in both directions.</li>
              <li><strong>Depression:</strong> Hypersomnia is common in bipolar depression; patients may sleep 10&ndash;12+ hours and still feel exhausted</li>
              <li><strong>Circadian disruption:</strong> People with bipolar disorder show fundamental dysregulation of circadian rhythms &mdash; the biological clock controlling sleep-wake cycles and many other physiological processes</li>
            </ul>
            <p>
              Sleep consistency is considered one of the highest clinical priorities in bipolar management. A single night of significant sleep deprivation can trigger a manic episode in vulnerable individuals.
            </p>

            <h3>ADHD and sleep</h3>
            <p>ADHD is associated with multiple sleep disturbances that are often underrecognized:</p>
            <ul>
              <li><strong>Delayed sleep phase</strong> &mdash; difficulty falling asleep before 1&ndash;2am, difficulty waking in the morning; highly prevalent</li>
              <li><strong>Difficulty &quot;shutting off&quot;</strong> &mdash; the racing, hyperactive mind continues at night</li>
              <li><strong>Restless sleep</strong> &mdash; frequent movement, non-restorative rest</li>
              <li><strong>Increased risk of sleep apnea and restless leg syndrome</strong></li>
            </ul>
            <p>
              Sleep deprivation dramatically worsens ADHD symptoms &mdash; attention, impulse control, and emotional regulation all deteriorate. This creates a self-perpetuating cycle: ADHD impairs sleep &rarr; poor sleep worsens ADHD &rarr; worsened ADHD creates more sleep problems.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>What sleep deprivation does to mental health</h2>
            <p>
              Even in people without pre-existing mental health conditions, sleep deprivation produces measurable psychological effects.
            </p>
            <p><strong>After one night of poor sleep:</strong></p>
            <ul>
              <li>Increased emotional reactivity &mdash; the amygdala (brain&apos;s threat response center) becomes 60% more reactive to negative stimuli (Yoo et al., 2007)</li>
              <li>Reduced prefrontal cortex regulation &mdash; the brain region that modulates emotional responses is less effective</li>
              <li>Increased anxiety, irritability, and low frustration tolerance</li>
              <li>Impaired working memory and attention</li>
            </ul>
            <p><strong>With chronic sleep restriction (less than 7 hours per night):</strong></p>
            <ul>
              <li>Cumulative cognitive impairment equivalent to total sleep deprivation</li>
              <li>Significantly elevated rates of depression and anxiety</li>
              <li>Disrupted stress hormone regulation (elevated cortisol)</li>
              <li>Impaired emotional memory processing &mdash; poor sleep prevents the brain from consolidating and resolving emotional experiences from the day</li>
            </ul>
            <p>
              <strong>The sleep-emotion link:</strong> During REM sleep, the brain processes emotionally significant memories and strips away the emotional charge &mdash; a mechanism that helps regulate mood over time. Disrupting REM sleep (through alcohol, sleep deprivation, or certain medications) impairs this process.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Improving sleep when mental health is a factor</h2>

            <h3>Cognitive Behavioral Therapy for Insomnia (CBT-I)</h3>
            <p>
              CBT-I is the <strong>first-line treatment</strong> for chronic insomnia &mdash; ahead of sleep medication in clinical guidelines from the American College of Physicians and the American Academy of Sleep Medicine. It produces durable improvement that persists after treatment ends, unlike sleep medication, which loses effectiveness with ongoing use.
            </p>
            <p>CBT-I components include:</p>
            <p>
              <strong>Sleep restriction therapy:</strong> Temporarily limiting time in bed to actual sleep time, building sleep pressure that consolidates sleep. Counterintuitive but highly effective.
            </p>
            <p>
              <strong>Stimulus control:</strong> Re-establishing the association between bed and sleep by reserving the bed only for sleep (and sex), not reading, screens, or worrying.
            </p>
            <p>
              <strong>Cognitive restructuring:</strong> Addressing inaccurate beliefs about sleep (&quot;I need 8 hours or tomorrow is ruined&quot;) that create performance anxiety around sleep.
            </p>
            <p>
              <strong>Relaxation techniques:</strong> Progressive muscle relaxation, diaphragmatic breathing, and mindfulness to reduce physiological arousal at bedtime.
            </p>
            <p>
              <strong>Sleep hygiene:</strong> Consistent wake time (the single most powerful anchor for the circadian system), limiting caffeine after noon, and managing light exposure.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h3>Addressing the mental health side</h3>
            <p>Because the relationship is bidirectional, treating the mental health condition also helps sleep. Specific interventions:</p>
            <ul>
              <li><strong>For depression:</strong> Exercise (morning is best for circadian regulation), morning light exposure, and antidepressants that have sedating rather than activating profiles (mirtazapine, trazodone) when insomnia is prominent</li>
              <li><strong>For anxiety:</strong> CBT for anxiety; reducing caffeine and alcohol; mindfulness practices that reduce cognitive arousal</li>
              <li><strong>For PTSD nightmares:</strong> Imagery Rehearsal Therapy; prazosin (an alpha-blocker with evidence for PTSD nightmares)</li>
              <li><strong>For bipolar disorder:</strong> Social rhythm therapy; strict sleep consistency as a primary mood-stability intervention; treating any sleep apnea aggressively</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h3>Sleep medication</h3>
            <p>
              Sleep medication (benzodiazepines, Z-drugs like zolpidem, melatonin receptor agonists) can be appropriate for short-term use &mdash; particularly during acute crises when sleep deprivation is itself a risk factor. However:
            </p>
            <ul>
              <li>Tolerance and dependence develop with regular benzodiazepine and Z-drug use</li>
              <li>These medications suppress REM sleep, potentially interfering with emotional processing</li>
              <li>Abrupt discontinuation after regular use can cause rebound insomnia and anxiety</li>
              <li><strong>Alcohol</strong> is widely used as a sleep aid but worsens sleep architecture &mdash; suppressing REM sleep and causing fragmented second-half sleep</li>
            </ul>
            <p>
              Medication should generally be paired with CBT-I rather than used as a standalone long-term solution.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation or treatment. If you are experiencing significant sleep disturbance or mental health symptoms, please consult a qualified healthcare professional.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Is something else going on alongside your sleep problems?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Each screening takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Check</Link>
              <Link href="/pcl-5-ptsd-screening" className="btn-primary text-sm">Take the PCL-5 PTSD Screening</Link>
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
              <Link href="/pcl-5-ptsd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PCL-5 PTSD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated PTSD symptom screening tool</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/sleep-and-mood" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How Sleep Affects Your Mood</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">The science behind the sleep-mood connection</p>
              </Link>
              <Link href="/blog/depression-vs-anxiety" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression vs. Anxiety: What&apos;s the Difference?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding overlapping mood and anxiety conditions</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

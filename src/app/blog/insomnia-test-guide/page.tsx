import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/insomnia-test-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "insomnia-test-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/insomnia-test-guide",
  title: "Insomnia Screening: Signs, Self-Assessment, and the Athens Insomnia Scale",
  description:
    "Chronic insomnia affects about 10% of adults. Learn the signs, how the Athens Insomnia Scale works as a validated self-assessment, and when to seek professional help.",
  keywords: [
    "insomnia test",
    "insomnia symptoms",
    "Athens Insomnia Scale",
    "can't sleep",
    "insomnia screening",
    "chronic insomnia",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What counts as insomnia?",
    answer:
      "The DSM-5 defines insomnia disorder as difficulty initiating or maintaining sleep, occurring at least 3 nights per week for 3 or more months, that causes significant distress or daytime impairment. Occasional sleep difficulty due to stress or schedule changes is common and does not meet the clinical threshold.",
  },
  {
    question: "Is the Athens Insomnia Scale clinically validated?",
    answer:
      "Yes. The Athens Insomnia Scale was developed by Soldatos et al. in 2000 and validated in multiple clinical populations. It is an 8-item questionnaire based on ICD-10 insomnia criteria. A score of 6 or higher indicates clinically significant insomnia, with strong internal consistency and test-retest reliability.",
  },
  {
    question: "Can insomnia cause depression?",
    answer:
      "Research suggests a bidirectional relationship. People with chronic insomnia have approximately twice the risk of developing depression. Insomnia also worsens existing depression and reduces antidepressant effectiveness. Treating insomnia with CBT-I has been shown to improve depressive symptoms even without direct depression treatment.",
  },
  {
    question: "What is CBT-I and how does it work?",
    answer:
      "CBT-I is a structured program addressing the thoughts, behaviors, and habits that perpetuate insomnia. Core components include sleep restriction, stimulus control, cognitive restructuring, and relaxation techniques. It is the recommended first-line treatment for chronic insomnia because it produces durable results that persist after treatment ends.",
  },
];

export default function InsomniaTestGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Insomnia Screening: Signs, Self-Assessment, and the Athens Insomnia Scale", description: "Chronic insomnia affects about 10% of adults. Learn the signs, how the Athens Insomnia Scale works as a validated self-assessment, and when to seek professional help.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Insomnia Screening Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Insomnia Screening: Signs, Self-Assessment, and the Athens Insomnia Scale
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Chronic insomnia affects roughly 10% of adults, and occasional insomnia symptoms &mdash; trouble falling asleep, staying asleep, or waking too early &mdash; affect 30&ndash;35%. If you&apos;ve been struggling with sleep, a validated self-assessment like the Athens Insomnia Scale can help you understand whether your difficulties may warrant professional attention.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What is insomnia?</h2>
            <p>
              Insomnia is more than a few bad nights. The DSM-5 defines insomnia disorder as difficulty initiating sleep, maintaining sleep, or early morning awakening that occurs at least 3 nights per week for 3 or more months and causes significant distress or impairment in daytime functioning &mdash; including fatigue, difficulty concentrating, mood disturbance, or reduced performance at work or school.
            </p>
            <p>
              Occasional sleep difficulties are normal, especially during stressful periods. What distinguishes insomnia disorder from ordinary poor sleep is <strong>persistence</strong> (3+ months), <strong>frequency</strong> (3+ nights per week), and <strong>functional impact</strong> (it meaningfully interferes with your day).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>How do the different types of insomnia present?</h2>
            <p>Insomnia is not a single experience. It tends to present in one or more of these patterns:</p>
            <ul>
              <li><strong>Sleep onset insomnia</strong> &mdash; difficulty falling asleep at the beginning of the night. You lie in bed for 30 minutes or more, mind racing or body unable to relax. This pattern is strongly associated with anxiety and hyperarousal.</li>
              <li><strong>Sleep maintenance insomnia</strong> &mdash; waking multiple times during the night and having difficulty returning to sleep. Often associated with chronic pain, medical conditions, or substance use.</li>
              <li><strong>Early morning awakening</strong> &mdash; waking 2&ndash;3 hours before the intended wake time and being unable to fall back asleep. This pattern has a well-documented association with depression.</li>
            </ul>
            <p>
              Many people experience more than one type simultaneously. All three types can be assessed using the{" "}
              <Link href="/athens-insomnia-scale" className="text-sage-600 dark:text-sage-400 underline">Athens Insomnia Scale</Link>.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What is the Athens Insomnia Scale?</h2>
            <p>
              The Athens Insomnia Scale (AIS) is an 8-item self-report questionnaire developed by Soldatos et al. in 2000, based on the International Classification of Diseases (ICD-10) criteria for insomnia. It is one of the most widely used validated insomnia screening instruments in clinical research and practice.
            </p>
            <p>The AIS covers eight domains:</p>
            <ul>
              <li><strong>Sleep induction</strong> &mdash; how long it takes to fall asleep</li>
              <li><strong>Awakenings during the night</strong> &mdash; frequency and difficulty returning to sleep</li>
              <li><strong>Early morning awakening</strong> &mdash; waking earlier than desired</li>
              <li><strong>Total sleep duration</strong> &mdash; whether total sleep time feels sufficient</li>
              <li><strong>Sleep quality</strong> &mdash; overall satisfaction with sleep</li>
              <li><strong>Well-being during the day</strong> &mdash; how rested and functional you feel</li>
              <li><strong>Functioning during the day</strong> &mdash; cognitive and physical performance</li>
              <li><strong>Sleepiness during the day</strong> &mdash; excessive daytime drowsiness</li>
            </ul>
            <p>
              Each item is scored 0&ndash;3, producing a total score of 0&ndash;24. A score of <strong>6 or higher</strong> indicates clinically significant insomnia. The AIS is not a diagnostic tool &mdash; it is a screening instrument that can help you and your healthcare provider determine whether further evaluation is appropriate.
            </p>
            <p>
              You can take the{" "}
              <Link href="/athens-insomnia-scale" className="text-sage-600 dark:text-sage-400 underline">Athens Insomnia Scale self-assessment</Link>{" "}
              on this site. It takes about 2 minutes, and your answers are scored in your browser &mdash; nothing is stored or transmitted.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>How are insomnia and mental health connected?</h2>
            <p>
              The relationship between insomnia and mental health is <strong>bidirectional</strong> &mdash; each worsens the other, creating a cycle that can be difficult to break without targeted intervention.
            </p>
            <p><strong>Insomnia increases the risk of mental health conditions:</strong></p>
            <ul>
              <li>People with persistent insomnia have approximately <strong>2 times the risk</strong> of developing depression compared to those who sleep well (Baglioni et al., 2011)</li>
              <li>Insomnia is associated with a <strong>3-fold increased risk</strong> of developing an anxiety disorder</li>
              <li>Chronic sleep deprivation impairs emotional regulation &mdash; the amygdala becomes hyperreactive to negative stimuli while prefrontal control weakens</li>
            </ul>
            <p><strong>Mental health conditions disrupt sleep:</strong></p>
            <ul>
              <li>Depression frequently presents with early morning awakening or hypersomnia</li>
              <li>Anxiety drives sleep onset insomnia through rumination and physiological hyperarousal</li>
              <li>PTSD causes nightmares, hypervigilance at night, and fragmented sleep</li>
            </ul>
            <p>
              This bidirectional relationship means that treating insomnia often improves mental health symptoms &mdash; and addressing mental health conditions often improves sleep. If you&apos;re experiencing both sleep difficulties and mood changes, tools like the{" "}
              <Link href="/sleep-and-mood-check" className="text-sage-600 dark:text-sage-400 underline">Sleep &amp; Mood Check</Link>{" "}
              and the{" "}
              <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 depression screening</Link>{" "}
              can help you understand the scope of what you&apos;re dealing with.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>What is CBT-I and why is it the first-line treatment?</h2>
            <p>
              Cognitive Behavioral Therapy for Insomnia (CBT-I) is the recommended first-line treatment for chronic insomnia by the American College of Physicians, the American Academy of Sleep Medicine, and the European Sleep Research Society. It is more effective than sleep medication over the long term because it addresses the <strong>underlying causes</strong> of insomnia rather than masking symptoms.
            </p>
            <p>CBT-I typically includes four core components:</p>
            <p>
              <strong>Sleep restriction:</strong> Temporarily limiting time in bed to match actual sleep time. This builds sleep pressure (homeostatic sleep drive) and consolidates fragmented sleep into a solid block. It is counterintuitive &mdash; spending less time in bed initially &mdash; but highly effective.
            </p>
            <p>
              <strong>Stimulus control:</strong> Re-establishing the association between bed and sleep. The bed is used only for sleep (not reading, watching screens, or worrying). If you can&apos;t fall asleep within about 20 minutes, you get up and return only when sleepy.
            </p>
            <p>
              <strong>Cognitive restructuring:</strong> Identifying and changing unhelpful beliefs about sleep, such as &quot;I must get 8 hours or I can&apos;t function&quot; or &quot;One bad night will ruin my week.&quot; These beliefs create performance anxiety that perpetuates insomnia.
            </p>
            <p>
              <strong>Relaxation training:</strong> Progressive muscle relaxation, diaphragmatic breathing, and mindfulness techniques that reduce the physiological arousal preventing sleep.
            </p>
            <p>
              CBT-I is typically delivered over 4&ndash;8 sessions with a trained therapist, though digital CBT-I programs have also shown effectiveness in clinical trials.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What can you do right now to improve sleep?</h2>
            <p>
              While CBT-I is the most effective approach for chronic insomnia, foundational sleep hygiene practices can help anyone sleeping poorly. These are not substitutes for professional help when insomnia is persistent, but they are a reasonable starting point:
            </p>
            <ul>
              <li><strong>Keep a consistent wake time</strong> &mdash; waking at the same time every day, including weekends, is the single most powerful anchor for your circadian system. A consistent wake time matters more than a fixed bedtime.</li>
              <li><strong>Create a cool, dark, quiet environment</strong> &mdash; optimal sleep temperature is typically 60&ndash;67&deg;F (15&ndash;19&deg;C). Blackout curtains and white noise can help.</li>
              <li><strong>Limit screens before bed</strong> &mdash; blue light from screens suppresses melatonin production. Stopping screen use 30&ndash;60 minutes before bed supports natural sleep onset.</li>
              <li><strong>Avoid caffeine after noon</strong> &mdash; caffeine has a half-life of 5&ndash;6 hours. An afternoon coffee can still be active in your system at midnight.</li>
              <li><strong>Get morning light exposure</strong> &mdash; 15&ndash;30 minutes of outdoor light in the morning helps regulate the circadian clock, improving both sleep onset and wake times.</li>
              <li><strong>Avoid alcohol as a sleep aid</strong> &mdash; alcohol speeds sleep onset but fragments sleep in the second half of the night, suppresses REM sleep, and worsens sleep quality overall.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2>When should you seek professional help?</h2>
            <p>Consider consulting a healthcare provider if:</p>
            <ul>
              <li>Sleep difficulties have persisted for more than 3 months</li>
              <li>Poor sleep is affecting your work, relationships, or daily functioning</li>
              <li>You&apos;re using alcohol, over-the-counter sleep aids, or other substances regularly to fall asleep</li>
              <li>You experience excessive daytime sleepiness, loud snoring, or gasping during sleep (which may indicate sleep apnea)</li>
              <li>Sleep problems are accompanied by significant mood changes, anxiety, or other mental health symptoms</li>
            </ul>
            <p>
              A validated self-assessment like the{" "}
              <Link href="/athens-insomnia-scale" className="text-sage-600 dark:text-sage-400 underline">Athens Insomnia Scale</Link>{" "}
              can be a useful starting point for that conversation &mdash; bringing your results to your provider gives them concrete information about the nature and severity of your sleep difficulties.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation or treatment. If you are experiencing persistent sleep difficulties or mental health symptoms, please consult a qualified healthcare professional.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">How is your sleep affecting you?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Take a free, private insomnia screening. Your answers are scored in your browser and never stored.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/athens-insomnia-scale" className="btn-primary text-sm">Take the Athens Insomnia Scale</Link>
              <Link href="/sleep-and-mood-check" className="btn-primary text-sm">Take the Sleep &amp; Mood Check</Link>
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
              <Link href="/athens-insomnia-scale" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Athens Insomnia Scale</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated 8-item insomnia self-assessment</p>
              </Link>
              <Link href="/sleep-and-mood-check" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Sleep &amp; Mood Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Explore the connection between your sleep and mood</p>
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
              <Link href="/blog/mental-health-and-sleep" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Mental Health and Sleep: How They Affect Each Other</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Deep dive into the bidirectional sleep-mental health relationship</p>
              </Link>
              <Link href="/blog/sleep-and-mood" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How Sleep Affects Your Mood</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">The science behind the sleep-mood connection</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

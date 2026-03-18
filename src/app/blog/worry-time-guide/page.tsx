import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/worry-time-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "worry-time-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/worry-time-guide",
  title: "Worry Time: How Scheduling Your Worries Reduces Anxiety",
  description:
    "Worry time is a CBT technique where you schedule 15-30 minutes daily for focused worrying and postpone worries outside that window. Learn how it reduces anxiety by 35-50%.",
  keywords: [
    "worry time",
    "scheduled worry time",
    "worry postponement",
    "anxiety technique worry time",
    "how to stop worrying",
    "worry time CBT",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Does worry time actually reduce anxiety?",
    answer:
      "Yes. Research by Borkovec and colleagues demonstrated that stimulus control for worry &mdash; the formal name for worry time &mdash; reduces generalized worry by 35&ndash;50% in controlled trials. By containing worry to a specific window, the brain learns that worry has a time and place, which reduces intrusive worrying during the rest of the day. Multiple studies have replicated these findings across clinical and non-clinical populations.",
  },
  {
    question: "How long should worry time last?",
    answer:
      "Most clinicians recommend 15&ndash;30 minutes. Shorter sessions may not give you enough time to process worries meaningfully, while longer sessions can become rumination rather than productive problem-solving. Start with 15 minutes and adjust based on what feels sufficient. The key is consistency &mdash; same time, same place, every day &mdash; so your brain learns the routine.",
  },
  {
    question: "What if I can't stop worrying outside of worry time?",
    answer:
      "This is normal, especially in the first week or two. When a worry arises outside your scheduled window, acknowledge it briefly, write it down, and remind yourself you will address it during worry time. The act of writing it down reassures your brain that the worry will not be forgotten. With practice, postponing gets easier as your brain adapts to the new pattern.",
  },
  {
    question: "Is worry time the same as journaling?",
    answer:
      "Not exactly. Journaling is an open-ended reflective practice that can cover emotions, events, and goals. Worry time is a structured CBT technique with specific rules: a fixed daily window, active postponement of worries outside that window, and focused engagement during the session. Some people use writing during worry time, but the technique can also involve sitting and thinking through worries mentally.",
  },
];

export default function WorryTimeGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Worry Time: How Scheduling Your Worries Reduces Anxiety", description: "Learn how scheduled worry time reduces anxiety by 35-50%, how to practice it, and why giving yourself permission to worry makes worrying less intrusive.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Worry Time Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Worry Time: How Scheduling Your Worries Reduces Anxiety
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            What if the best way to worry less was to schedule your worrying? Worry time &mdash; also called stimulus control for worry &mdash; is a cognitive behavioral therapy (CBT) technique where you designate a specific 15&ndash;30 minute period each day for focused worrying, and actively postpone any worries that arise outside that window. It sounds counterintuitive, but research shows it works: giving yourself permission to worry at a set time makes worrying less intrusive the rest of the day.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational and educational purposes only and does not constitute medical or mental health advice. Always consult a qualified healthcare professional for personalized guidance on anxiety or mental health concerns.
            </p>
          </div>

          <section>
            <h2>What is worry time and how does it work?</h2>
            <p>
              Worry time is a structured behavioral intervention developed from the stimulus control research of Thomas Borkovec and colleagues at Penn State University. The principle is straightforward: rather than trying to suppress or eliminate worry (which paradoxically increases it), you contain it within a predictable, bounded time period.
            </p>
            <p>
              The technique works through two mechanisms. First, it disrupts the pattern of constant, low-level worry that characterizes generalized anxiety by giving worries a designated outlet. Second, it leverages a psychological phenomenon called the Zeigarnik effect &mdash; unfinished tasks occupy the mind, but the act of writing a worry down and scheduling time to address it signals to the brain that the task is &quot;captured&quot; and can be set aside.
            </p>
            <p>
              Research by Borkovec et al. demonstrated that participants who practiced stimulus control for worry experienced a 35&ndash;50% reduction in generalized worry compared to control groups. This effect has been replicated across multiple studies and is now a standard component of CBT protocols for generalized anxiety disorder.
            </p>
          </section>

          <section>
            <h2>How to practice worry time: step by step</h2>
            <p>
              Setting up a worry time practice takes minimal effort, but consistency is what makes it effective. Here is how to get started:
            </p>
            <p>
              <strong>Step 1: Choose your time and place.</strong> Pick a consistent 15&ndash;30 minute window each day, ideally in the late afternoon or early evening &mdash; not right before bed, as this can interfere with sleep. Choose a specific location where you will sit and worry. This physical consistency helps your brain associate worry with that specific context.
            </p>
            <p>
              <strong>Step 2: Catch and postpone.</strong> Throughout the day, when a worry arises, notice it without engaging. Write it down briefly in a notebook, phone note, or the <Link href="/worry-time-scheduler" className="text-sage-600 dark:text-sage-400 underline">worry time scheduler</Link>. Then tell yourself: &quot;I will think about this during worry time.&quot; Return your attention to what you were doing.
            </p>
            <p>
              <strong>Step 3: Use your worry time fully.</strong> When your scheduled time arrives, sit down and review your list. For each worry, ask: Is this still bothering me? Is there anything I can actually do about it? If yes, write down one concrete action step. If no, acknowledge the worry and move on. Many worries will have lost their urgency by the time you revisit them &mdash; this is one of the most powerful parts of the technique.
            </p>
            <p>
              <strong>Step 4: Stop when time is up.</strong> When your window closes, stop worrying. If unfinished worries remain, they go on tomorrow&apos;s list. This boundary is essential &mdash; it teaches your brain that worry has limits.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Why the paradox works: giving yourself permission to worry</h2>
            <p>
              One of the most striking findings in anxiety research is that trying to suppress thoughts makes them more frequent and intense. This is known as the ironic process theory, described by Daniel Wegner in his classic &quot;white bear&quot; experiments &mdash; when people were told not to think about a white bear, they thought about it more than those who were given no instruction at all.
            </p>
            <p>
              Worry time sidesteps this paradox entirely. You are not telling yourself to stop worrying. You are telling yourself to worry later. This distinction matters because postponement does not trigger the rebound effect that suppression does. Your brain registers that the worry will be addressed, which reduces the urgency and allows you to disengage from the worry cycle.
            </p>
            <p>
              Over time, something remarkable happens: many people find that their worry list shrinks. When you review your captured worries during worry time, you discover that 50&ndash;80% of them no longer feel pressing. This repeated experience erodes the belief that every worry demands immediate attention &mdash; a core cognitive distortion in generalized anxiety.
            </p>
          </section>

          <section>
            <h2>Worry time and generalized anxiety disorder</h2>
            <p>
              Generalized anxiety disorder (GAD) is characterized by chronic, excessive worry about multiple areas of life &mdash; health, finances, relationships, work, and more. What distinguishes GAD from normal worry is that the worry feels uncontrollable, disproportionate to the actual situation, and persists for six months or longer.
            </p>
            <p>
              Worry time is particularly effective for GAD because it directly targets the &quot;uncontrollable&quot; dimension. People with GAD often believe they cannot control their worry, and this belief becomes self-reinforcing. Each time they successfully postpone a worry to their scheduled window, they gather evidence that worry is controllable &mdash; challenging the core belief that drives the disorder.
            </p>
            <p>
              If you suspect you may be experiencing generalized anxiety, the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 anxiety screening</Link> can help you assess the severity of your symptoms. Worry time works well as a self-management strategy alongside professional support.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Combining worry time with other anxiety tools</h2>
            <p>
              Worry time is most effective as part of a broader anxiety management toolkit. Several complementary techniques can enhance its benefits:
            </p>
            <ul>
              <li><strong>Box breathing:</strong> When a worry arises outside your scheduled window and you feel the urge to engage with it, use <Link href="/box-breathing-exercise" className="text-sage-600 dark:text-sage-400 underline">box breathing</Link> (4&ndash;4&ndash;4&ndash;4) to calm your nervous system before postponing the worry.</li>
              <li><strong>Thought records:</strong> During worry time, use a <Link href="/cbt-thought-record" className="text-sage-600 dark:text-sage-400 underline">CBT thought record</Link> to examine your most persistent worries for cognitive distortions like catastrophizing, fortune-telling, or probability overestimation.</li>
              <li><strong>The worry time scheduler:</strong> The <Link href="/worry-time-scheduler" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools worry time scheduler</Link> provides a structured digital space for capturing worries throughout the day and reviewing them during your scheduled session. It runs entirely in your browser with no data stored.</li>
            </ul>
            <p>
              The combination of behavioral containment (worry time), physiological regulation (breathing), and cognitive restructuring (thought records) addresses anxiety at multiple levels simultaneously, which is why CBT remains the gold-standard treatment for anxiety disorders.
            </p>
          </section>

          <section>
            <h2>Common mistakes and how to avoid them</h2>
            <p>
              Worry time is a simple technique, but there are common pitfalls that reduce its effectiveness:
            </p>
            <ul>
              <li><strong>Scheduling worry time right before bed.</strong> Engaging with worries at night can activate your stress response and interfere with sleep. Schedule your window at least 2&ndash;3 hours before bedtime.</li>
              <li><strong>Skipping days.</strong> Consistency is critical. If you skip your worry time, your brain loses trust in the system and reverts to worrying throughout the day. Even on low-worry days, sit down for your scheduled window &mdash; you can always end early.</li>
              <li><strong>Using worry time for rumination.</strong> The goal is productive engagement, not spiraling. For each worry, ask: &quot;Can I do something about this?&quot; If yes, identify one action. If no, practice acceptance and move to the next item.</li>
              <li><strong>Expecting instant results.</strong> Most people need 1&ndash;2 weeks of consistent practice before worry postponement becomes natural. The technique works, but it requires patience as your brain forms the new habit.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>When to seek professional support</h2>
            <p>
              Worry time is an effective self-management strategy for mild to moderate worry, but it is not a replacement for professional care when anxiety is severe or significantly impacting your daily life. Consider speaking with a therapist or counselor if:
            </p>
            <ul>
              <li>Your worry persists despite 2&ndash;3 weeks of consistent practice</li>
              <li>Anxiety is interfering with work, relationships, or daily activities</li>
              <li>You are experiencing physical symptoms like chronic muscle tension, headaches, or sleep disruption</li>
              <li>Worry is accompanied by panic attacks or avoidance behaviors</li>
              <li>You feel overwhelmed by the volume or intensity of your worries</li>
            </ul>
            <p>
              A trained CBT therapist can help you implement worry time within a comprehensive treatment plan and address underlying patterns that self-help alone may not reach. SAMHSA&apos;s National Helpline (1-800-662-4357) provides free, confidential referrals to local treatment facilities and support groups.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to schedule your worry time?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. Capture worries and review them on your schedule.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/worry-time-scheduler" className="btn-primary text-sm">Open the Worry Time Scheduler</Link>
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Screening</Link>
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
              <Link href="/worry-time-scheduler" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Worry Time Scheduler</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Schedule and contain your daily worrying</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Assess your anxiety symptom severity</p>
              </Link>
              <Link href="/box-breathing-exercise" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Box Breathing Exercise</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Calm your nervous system with 4-4-4-4 breathing</p>
              </Link>
              <Link href="/cbt-thought-record" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CBT Thought Record</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Challenge negative thinking patterns</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/cbt-thought-record-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CBT Thought Records Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How to challenge negative thinking patterns</p>
              </Link>
              <Link href="/blog/anxiety-coping-strategies" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Evidence-Based Anxiety Coping Strategies</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinical guide to managing anxiety symptoms</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

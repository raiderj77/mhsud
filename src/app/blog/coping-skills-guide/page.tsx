import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/coping-skills-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "coping-skills-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/coping-skills-guide",
  title: "Coping Skills for Recovery: Evidence-Based Techniques That Actually Work",
  description:
    "Coping skills are the bridge between recognizing a trigger and responding without using. Learn evidence-based behavioral, cognitive, mindfulness, and social coping strategies for recovery.",
  keywords: [
    "coping skills recovery",
    "healthy coping mechanisms",
    "coping strategies addiction",
    "coping skills list",
    "evidence-based coping",
    "recovery coping techniques",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What are healthy coping skills?",
    answer:
      "Healthy coping skills help you manage stress, cravings, and difficult emotions without causing harm. They include behavioral strategies like exercise and journaling, cognitive techniques like reframing thoughts, mindfulness practices like deep breathing, and social supports like peer groups. The key is addressing the underlying need rather than numbing it.",
  },
  {
    question: "How many coping skills do I need?",
    answer:
      "Research suggests maintaining at least five to ten coping skills. Not every skill works in every situation \u2014 a breathing exercise may help with mild anxiety but not an intense craving. Having options across behavioral, cognitive, mindfulness, and social categories ensures something fits the moment. The coping skills randomizer helps you discover new techniques.",
  },
  {
    question: "What is the difference between healthy and unhealthy coping?",
    answer:
      "Healthy coping addresses the root cause of distress and leaves you better off afterward. Unhealthy coping provides temporary relief but creates additional problems \u2014 substance use, emotional suppression, avoidance, and compulsive behaviors are common examples. The distinction is not always the behavior itself; even exercise becomes maladaptive if used compulsively to avoid emotions.",
  },
  {
    question: "Can coping skills replace therapy?",
    answer:
      "Coping skills complement therapy but do not replace professional support. Therapy helps you understand underlying patterns, process trauma, and develop personalized strategies with expert guidance. Coping skills provide practical daily management tools. The two work together \u2014 therapy builds the foundation, and coping skills maintain it. Professional support is strongly recommended in recovery.",
  },
];

export default function CopingSkillsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Coping Skills for Recovery: Evidence-Based Techniques That Actually Work", description: "Learn evidence-based behavioral, cognitive, mindfulness, and social coping strategies for addiction recovery.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Coping Skills Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Coping Skills for Recovery: Evidence-Based Techniques That Actually Work
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Coping skills are the bridge between recognizing a trigger and responding to it without using. When a craving hits or emotions spike, your ability to reach for a healthy strategy instead of a substance can determine whether recovery holds or falters. The good news is that coping skills are learnable, practicable, and backed by decades of clinical research &mdash; and you do not need to remember them all on your own. The <Link href="/coping-skills-randomizer" className="text-sage-600 dark:text-sage-400 underline">coping skills randomizer</Link> gives you a skill when you cannot think clearly.
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
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>Why coping skills matter in recovery</h2>
            <p>
              During active addiction, substances serve as the primary coping mechanism for stress, emotional pain, boredom, and social pressure. When that mechanism is removed in recovery, a gap opens. Without alternative strategies, the brain defaults to what it knows &mdash; and what it knows is substance use.
            </p>
            <p>
              Alan Marlatt&apos;s coping skills training research, developed alongside his relapse prevention model, demonstrated that people who learn and practice specific coping strategies have significantly better recovery outcomes than those who rely on willpower alone. The key finding: coping is a skill, not a trait. It can be taught, practiced, and strengthened over time.
            </p>
            <p>
              Effective coping is not about having one perfect strategy. It is about building a toolkit with enough variety that you always have something that fits the situation. Research suggests maintaining at least five to ten reliable strategies across different categories.
            </p>
          </section>

          <section>
            <h2>Behavioral coping skills: action-based strategies</h2>
            <p>
              Behavioral coping skills involve doing something physical or concrete to redirect your energy and attention. These are often the most accessible strategies, especially during intense cravings when cognitive techniques may feel impossible:
            </p>
            <ul>
              <li><strong>Physical exercise:</strong> Walking, running, lifting weights, or any movement that raises your heart rate. Exercise releases endorphins, reduces cortisol, and provides a natural mood boost. Even a 10-minute walk can reduce craving intensity.</li>
              <li><strong>Calling someone:</strong> Reaching out to a sponsor, therapist, friend, or family member. The act of verbalizing what you are experiencing often reduces its intensity and breaks the isolation that fuels cravings.</li>
              <li><strong>Journaling:</strong> Writing about what you are feeling, what triggered it, and what you need. This externalizes the internal experience and creates distance between the emotion and the urge to act on it.</li>
              <li><strong>Engaging in a task:</strong> Cleaning, cooking, organizing, building something &mdash; any absorbing activity that requires focus and provides a sense of accomplishment.</li>
              <li><strong>Changing your environment:</strong> Physically leaving a high-risk situation or location. Sometimes the simplest and most effective coping skill is removing yourself from the trigger.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Cognitive coping skills: changing how you think</h2>
            <p>
              Cognitive coping strategies, rooted in cognitive behavioral therapy (CBT), work by changing the thoughts and interpretations that drive emotional distress and cravings:
            </p>
            <ul>
              <li><strong>Cognitive reframing:</strong> Identifying a negative or distorted thought and examining whether it is accurate. For example, changing &quot;I will always feel this way&quot; to &quot;This craving is temporary and will pass.&quot;</li>
              <li><strong>Thought records:</strong> A structured CBT exercise where you write down the situation, the automatic thought, the emotion it triggered, evidence for and against the thought, and a more balanced alternative. The <Link href="/cbt-thought-record" className="text-sage-600 dark:text-sage-400 underline">CBT thought record tool</Link> walks you through this process.</li>
              <li><strong>Challenging cognitive distortions:</strong> Learning to recognize patterns like all-or-nothing thinking, catastrophizing, and emotional reasoning that distort your perception of reality and amplify distress.</li>
              <li><strong>Playing the tape forward:</strong> When romanticizing substance use, mentally &quot;playing the tape forward&quot; to the consequences &mdash; the hangover, the guilt, the damaged relationships, the setback to recovery.</li>
              <li><strong>Self-compassion:</strong> Treating yourself with the same kindness you would offer a friend who was struggling. Self-criticism increases shame, and shame is a major relapse trigger.</li>
            </ul>
          </section>

          <section>
            <h2>Mindfulness coping skills: staying present</h2>
            <p>
              Mindfulness-based coping strategies help you observe cravings and difficult emotions without reacting to them. The core principle is that cravings are temporary &mdash; they rise, peak, and pass, typically within 15 to 30 minutes:
            </p>
            <ul>
              <li><strong>Deep breathing:</strong> Slow, controlled breathing activates the parasympathetic nervous system, reducing the fight-or-flight response that often accompanies cravings. The <Link href="/box-breathing-exercise" className="text-sage-600 dark:text-sage-400 underline">box breathing exercise</Link> provides a guided technique.</li>
              <li><strong>Grounding (5-4-3-2-1):</strong> Name five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste. This anchors you in the present moment and interrupts the craving cycle.</li>
              <li><strong>Urge surfing:</strong> Rather than fighting a craving, observe it like a wave &mdash; notice where you feel it in your body, describe its intensity, and watch it rise and fall. The <Link href="/urge-surfing-timer" className="text-sage-600 dark:text-sage-400 underline">urge surfing timer</Link> guides you through this process.</li>
              <li><strong>Body scan meditation:</strong> Systematically noticing physical sensations throughout your body, which builds interoceptive awareness &mdash; the ability to recognize what your body is telling you.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Social coping skills: the power of connection</h2>
            <p>
              Addiction thrives in isolation, and recovery thrives in connection. Social coping strategies leverage the fundamental human need for belonging and support:
            </p>
            <ul>
              <li><strong>Mutual aid meetings:</strong> AA, NA, SMART Recovery, Refuge Recovery, and other groups provide structured peer support. The regularity and accountability of meetings are as important as the content.</li>
              <li><strong>Peer support:</strong> Connecting with others who understand your experience reduces shame and provides practical wisdom. A sponsor or recovery coach serves this role in many programs.</li>
              <li><strong>Family and relationship support:</strong> Healthy family involvement supports recovery. Family therapy, Al-Anon, and Nar-Anon can help families learn supportive behaviors.</li>
              <li><strong>Volunteering and service:</strong> Helping others provides purpose, reduces isolation, and activates the brain&apos;s reward system through prosocial behavior rather than substance use.</li>
            </ul>
            <p>
              The <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 underline">HALT check-in</Link> includes a &quot;Lonely&quot; component specifically designed to help you recognize when you need more social connection.
            </p>
          </section>

          <section>
            <h2>Not all coping is healthy: recognizing maladaptive patterns</h2>
            <p>
              It is important to distinguish between healthy and maladaptive coping. Maladaptive coping provides temporary relief but creates additional problems or prevents you from addressing the root cause of your distress:
            </p>
            <ul>
              <li><strong>Avoidance:</strong> Refusing to think about, talk about, or confront difficult situations. This delays resolution and often makes the problem worse.</li>
              <li><strong>Emotional suppression:</strong> Pushing down feelings rather than processing them. Suppressed emotions do not disappear &mdash; they build pressure until they emerge in unhealthy ways.</li>
              <li><strong>Substance use:</strong> The most obvious maladaptive coping strategy, and often the one that brought you to recovery in the first place.</li>
              <li><strong>Compulsive behaviors:</strong> Overeating, excessive shopping, gambling, or compulsive internet use can become substitute addictions if used as primary coping mechanisms.</li>
              <li><strong>Isolation:</strong> Withdrawing from others may feel like self-protection, but it removes the social support that buffers against relapse.</li>
            </ul>
            <p>
              The goal is not to never use avoidance or distraction &mdash; sometimes short-term distraction is a valid strategy. The problem is when maladaptive patterns become your default, replacing healthy coping rather than supplementing it.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Using the coping skills randomizer</h2>
            <p>
              One of the biggest challenges with coping skills is accessing them in the moment. When you are in distress &mdash; flooded with emotion, craving intensely, or feeling overwhelmed &mdash; the prefrontal cortex is impaired, making it harder to recall what you have learned. You know you have coping skills, but you cannot think of a single one.
            </p>
            <p>
              The <Link href="/coping-skills-randomizer" className="text-sage-600 dark:text-sage-400 underline">coping skills randomizer</Link> is designed for exactly this situation. It gives you a specific, evidence-based coping skill at the push of a button &mdash; removing the need to search your memory when your brain is least capable of doing so. Each suggested skill includes a brief explanation and instructions for how to use it.
            </p>
            <p>
              The randomizer draws from all four categories &mdash; behavioral, cognitive, mindfulness, and social &mdash; so you are exposed to a range of strategies over time. Many people find that trying skills they would not have chosen on their own leads to discovering new techniques that become reliable parts of their toolkit.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Need a coping skill right now?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The randomizer gives you an evidence-based coping strategy at the push of a button. Free, private, and instant.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/coping-skills-randomizer" className="btn-primary text-sm">Open the Coping Skills Randomizer</Link>
              <Link href="/urge-surfing-timer" className="btn-primary text-sm">Try Urge Surfing</Link>
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
              <Link href="/coping-skills-randomizer" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Coping Skills Randomizer</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Get a random evidence-based coping skill when you need one</p>
              </Link>
              <Link href="/halt-check-in" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">HALT Check-In</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Quick check for hunger, anger, loneliness, and tiredness</p>
              </Link>
              <Link href="/urge-surfing-timer" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Urge Surfing Timer</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided mindfulness exercise for riding out cravings</p>
              </Link>
              <Link href="/box-breathing-exercise" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Box Breathing Exercise</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided breathing technique for calming the nervous system</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/urge-surfing-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Urge Surfing: Ride Out Cravings</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How mindfulness helps you manage cravings without giving in</p>
              </Link>
              <Link href="/blog/relapse-prevention-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">The three stages of relapse and how to intervene early</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

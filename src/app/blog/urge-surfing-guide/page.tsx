import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/urge-surfing-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "urge-surfing-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/urge-surfing-guide",
  title: "Urge Surfing: How to Ride Out Cravings Without Giving In",
  description:
    "Urge surfing is a mindfulness technique for cravings. Learn how it works, why cravings peak and pass, and how a guided timer helps.",
  keywords: [
    "urge surfing",
    "how to handle cravings",
    "urge surfing technique",
    "mindfulness for cravings",
    "cravings recovery",
    "urge surfing meditation",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How long do cravings last?",
    answer:
      "Most cravings peak within 15\u201330 minutes and then naturally subside if you do not act on them. Research on substance cravings consistently shows that the intensity follows a wave-like pattern \u2014 rising, cresting, and falling. Some cravings may feel shorter (5\u201310 minutes) or longer (up to 45 minutes) depending on the trigger, but they are always temporary. The key insight of urge surfing is that no craving lasts forever.",
  },
  {
    question: "Does urge surfing actually work?",
    answer:
      "Yes. Urge surfing has been studied as part of Mindfulness-Based Relapse Prevention (MBRP), which has shown significant reductions in substance use and craving intensity in randomized controlled trials. A 2014 study by Bowen et al. found that MBRP participants had significantly lower rates of relapse compared to standard relapse prevention at 12-month follow-up. The technique works by changing your relationship to cravings rather than trying to suppress them.",
  },
  {
    question: "What if the urge doesn't go away?",
    answer:
      "If an urge feels persistent, it may be that you are fighting it rather than observing it. Resistance can intensify cravings. Try shifting your attention to the physical sensations themselves \u2014 where exactly in your body do you feel the urge? What does it feel like? Sometimes a craving will come in multiple waves. Each wave still peaks and passes. If cravings feel unmanageable, reach out to a therapist, sponsor, or call SAMHSA\u2019s helpline at 1-800-662-4357.",
  },
  {
    question: "Can urge surfing help with non-substance cravings?",
    answer:
      "Yes. Urge surfing has been applied to a wide range of compulsive behaviors including binge eating, gambling, compulsive shopping, and problematic internet use. The underlying principle is the same: cravings for any behavior follow the same wave pattern and will pass without action. Mindfulness-based approaches are now used across behavioral addictions, not just substance use disorders.",
  },
];

export default function UrgeSurfingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Urge Surfing: How to Ride Out Cravings Without Giving In", description: "Learn how urge surfing works, why cravings peak and pass, and how a guided timer helps you ride out urges.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Urge Surfing Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Urge Surfing: How to Ride Out Cravings Without Giving In
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Cravings feel permanent in the moment, but they are not. Every craving follows a predictable pattern &mdash; it rises, peaks, and falls like a wave. Urge surfing is a mindfulness technique developed by psychologist Alan Marlatt at the University of Washington that teaches you to ride that wave rather than be pulled under by it. Instead of fighting the craving or giving in, you observe it, breathe through it, and watch it pass.
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
              This article is for informational and educational purposes only and does not constitute medical or mental health advice. Always consult a qualified healthcare professional for personalized guidance on substance use or mental health concerns.
            </p>
          </div>

          <section>
            <h2>What is urge surfing?</h2>
            <p>
              Urge surfing is a mindfulness-based technique for managing cravings without acting on them. It was developed by Dr. Alan Marlatt, a pioneering researcher in addiction psychology at the University of Washington, as part of his work on relapse prevention in the 1980s and 1990s.
            </p>
            <p>
              The core metaphor is simple: a craving is like an ocean wave. It starts small, builds in intensity, reaches a peak, and then naturally subsides. Most people try to either suppress the wave (white-knuckling) or get swept away by it (giving in). Urge surfing offers a third option &mdash; you learn to sit on the surfboard and ride the wave through to the other side.
            </p>
            <p>
              The technique is a key component of Mindfulness-Based Relapse Prevention (MBRP), an evidence-based program that combines mindfulness meditation with cognitive-behavioral relapse prevention strategies. MBRP has been shown in randomized controlled trials to reduce substance use and craving intensity at follow-up periods of up to 12 months (Bowen et al., 2014).
            </p>
          </section>

          <section>
            <h2>Why cravings peak and pass</h2>
            <p>
              Understanding the neuroscience behind cravings makes urge surfing easier to trust. When you encounter a trigger &mdash; a place, person, emotion, or sensory cue associated with past substance use &mdash; your brain&apos;s reward pathways activate. Dopamine surges in the nucleus accumbens, creating an intense feeling of wanting.
            </p>
            <p>
              But this neurochemical response is temporary. Without reinforcement (meaning, without actually using the substance), the dopamine signal fades. The brain&apos;s prefrontal cortex &mdash; responsible for decision-making and impulse control &mdash; re-engages. Research consistently shows that most cravings peak within 15&ndash;30 minutes and then naturally diminish.
            </p>
            <p>
              Each time you ride out a craving without acting on it, you weaken the association between the trigger and the reward response. This is a process called extinction learning. Over time, the cravings become less frequent and less intense. Your brain literally rewires itself through the practice.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How to practice urge surfing: step by step</h2>
            <p>
              Urge surfing does not require any special equipment or training. You can practice it anywhere, anytime a craving arises. Here is the process:
            </p>
            <p>
              <strong>Step 1: Notice the urge.</strong> When a craving appears, pause and acknowledge it. Say to yourself, &quot;I am having a craving right now.&quot; This simple act of labeling creates cognitive distance between you and the urge. You are the observer, not the urge itself.
            </p>
            <p>
              <strong>Step 2: Locate it in your body.</strong> Cravings always have a physical component. Where do you feel it? Your chest, stomach, throat, jaw? What does it feel like &mdash; tightness, heat, restlessness, a gnawing sensation? Get curious about the physical experience rather than the story your mind is telling about it.
            </p>
            <p>
              <strong>Step 3: Breathe into it.</strong> Direct your breath toward the area where you feel the craving most intensely. Breathe slowly and steadily &mdash; in for four counts, out for six. You are not trying to make the craving go away. You are creating space around it.
            </p>
            <p>
              <strong>Step 4: Watch the wave.</strong> Observe how the sensations change moment to moment. The craving will fluctuate &mdash; intensifying, shifting location, easing, maybe surging again. Stay with it. Notice that it is not static. It is moving, changing, and eventually fading.
            </p>
            <p>
              <strong>Step 5: Let it pass.</strong> Within 15&ndash;30 minutes (often sooner), the craving will subside on its own. You did not fight it, and you did not feed it. You surfed it. The <Link href="/urge-surfing-timer" className="text-sage-600 dark:text-sage-400 underline">urge surfing timer</Link> can guide you through this process with timed intervals and gentle prompts.
            </p>
          </section>

          <section>
            <h2>How the urge surfing timer helps</h2>
            <p>
              Practicing urge surfing alone can be challenging, especially in the early stages of recovery when cravings feel overwhelming. The <Link href="/urge-surfing-timer" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools urge surfing timer</Link> provides structure and guidance during the process:
            </p>
            <ul>
              <li><strong>Timed intervals:</strong> The timer shows you exactly how long you have been sitting with the craving, reinforcing that time is passing and the peak will come.</li>
              <li><strong>Guided prompts:</strong> At key moments, the timer prompts you to check in with your body, adjust your breathing, and observe changes in intensity.</li>
              <li><strong>Visual evidence:</strong> Watching the timer count up provides concrete proof that you are getting through it &mdash; something that feels impossible to believe mid-craving.</li>
            </ul>
            <p>
              The timer is free, private, and runs entirely in your browser. No data is stored or transmitted. You can use it alongside other coping strategies from the <Link href="/coping-skills-randomizer" className="text-sage-600 dark:text-sage-400 underline">coping skills randomizer</Link> or pair it with a <Link href="/halt-check-in" className="text-sage-600 dark:text-sage-400 underline">HALT check-in</Link> to identify whether hunger, anger, loneliness, or tiredness is amplifying your craving.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>The evidence base for urge surfing</h2>
            <p>
              Urge surfing is not a folk remedy &mdash; it is grounded in established psychological research. The technique draws on two well-supported principles:
            </p>
            <ul>
              <li><strong>Classical conditioning and extinction:</strong> Cravings are conditioned responses to triggers. When the trigger occurs without the reward (substance use), the conditioned response gradually weakens. This is the same principle behind exposure therapy for phobias.</li>
              <li><strong>Mindfulness and metacognition:</strong> Mindfulness practices train the ability to observe internal experiences without reacting automatically. This engages the prefrontal cortex and reduces amygdala reactivity, giving you more control over impulsive responses.</li>
            </ul>
            <p>
              A landmark 2014 randomized controlled trial by Bowen et al., published in <em>JAMA Psychiatry</em>, compared MBRP (which includes urge surfing) to standard relapse prevention and 12-step programs. At 12-month follow-up, MBRP participants had significantly fewer days of substance use and significantly fewer heavy drinking days than both comparison groups.
            </p>
            <p>
              Additional studies have shown that even brief mindfulness interventions can reduce craving intensity in both substance use and behavioral addictions, including smoking, overeating, and gambling.
            </p>
          </section>

          <section>
            <h2>Common challenges and how to overcome them</h2>
            <p>
              Urge surfing sounds simple, but it is not easy &mdash; especially at first. Here are common obstacles and how to work through them:
            </p>
            <ul>
              <li><strong>&quot;I can&apos;t stop thinking about using.&quot;</strong> That is okay. Urge surfing does not require you to stop thinking about the substance. It asks you to shift attention from the thoughts to the physical sensations in your body. The thoughts will still be there, but they lose their power when you stop engaging with them.</li>
              <li><strong>&quot;The craving keeps getting stronger.&quot;</strong> This usually happens when you are unconsciously fighting the craving. Resistance amplifies intensity. Try softening your stance &mdash; &quot;This is uncomfortable, and it will pass&quot; rather than &quot;Make this stop.&quot;</li>
              <li><strong>&quot;I don&apos;t have 20 minutes to sit with this.&quot;</strong> Even 5 minutes of urge surfing can disrupt the automatic trigger-to-use pattern. You do not need to wait for the craving to fully pass &mdash; even partial surfing builds the skill.</li>
              <li><strong>&quot;It works sometimes but not always.&quot;</strong> Urge surfing is a skill that improves with practice. It is also one tool among many. Combine it with the strategies in your <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 underline">relapse prevention plan</Link> for a comprehensive approach.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>When to seek professional support</h2>
            <p>
              Urge surfing is a powerful self-management tool, but it is not a substitute for professional support when cravings are severe or persistent. Consider reaching out to a counselor, therapist, or addiction specialist if:
            </p>
            <ul>
              <li>Cravings are frequent and intense despite regular practice</li>
              <li>You are using substances to cope with trauma, grief, or other mental health concerns</li>
              <li>You have experienced multiple relapses</li>
              <li>You are experiencing withdrawal symptoms (which may require medical supervision)</li>
              <li>Co-occurring depression or anxiety is making cravings harder to manage</li>
            </ul>
            <p>
              SAMHSA&apos;s National Helpline (1-800-662-4357) provides free, confidential referrals to local treatment facilities and support groups, 24 hours a day, 7 days a week.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to ride out your next craving?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. The timer guides you through the process.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/urge-surfing-timer" className="btn-primary text-sm">Open the Urge Surfing Timer</Link>
              <Link href="/coping-skills-randomizer" className="btn-primary text-sm">Get a Coping Skill</Link>
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
              <Link href="/urge-surfing-timer" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Urge Surfing Timer</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided timer to ride out cravings</p>
              </Link>
              <Link href="/coping-skills-randomizer" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Coping Skills Randomizer</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Get a random evidence-based coping skill</p>
              </Link>
              <Link href="/halt-check-in" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">HALT Check-In</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Check for hunger, anger, loneliness, tiredness</p>
              </Link>
              <Link href="/relapse-prevention-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Build your personalized prevention strategy</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/relapse-prevention-plan-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Build a Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Prepare for high-risk situations in recovery</p>
              </Link>
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">The Stages of Change in Addiction Recovery</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand the 5 stages of change model</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

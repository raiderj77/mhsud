import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";

const ARTICLE_URL = `${SITE_URL}/blog/sleep-and-mood`;

export const metadata: Metadata = createMetadata({
  path: "/blog/sleep-and-mood",
  title: "How Sleep Affects Your Mood (and Why Poor Sleep Makes Everything Harder)",
  description:
    "The science behind the sleep-mood connection: why poor sleep worsens anxiety and depression, how to tell if sleep is affecting your mental health, and what to do about it.",
  keywords: [
    "how does sleep affect your mood", "signs poor sleep affecting mental health",
    "am i depressed or just tired", "sleep and depression connection explained",
    "can't sleep because of anxiety what to do", "why do i wake up anxious every morning",
    "sleeping too much sign of depression", "how sleep deprivation affects emotions",
    "sleep quality self assessment checklist", "does insomnia cause depression",
    "how many hours sleep to avoid depression", "sleep hygiene tips anxiety depression",
    "poor sleep mood swings irritability", "tired but can't sleep mind racing",
    "how to tell if sleep is affecting your mood",
  ],
});

const FAQ_DATA = [
  { question: "Does poor sleep cause depression, or does depression cause poor sleep?", answer: "Both. Research consistently shows a bidirectional relationship. Insomnia increases the risk of developing depression by roughly five times, and about 75% of people with depression experience insomnia. They reinforce each other in a cycle — poor sleep worsens mood, and low mood disrupts sleep. Breaking the cycle often requires addressing both sides." },
  { question: "Am I depressed or just not sleeping enough?", answer: "It can be hard to tell because sleep deprivation and depression share many symptoms — fatigue, difficulty concentrating, irritability, and low motivation. A useful (though imperfect) test: if you get several nights of genuinely good sleep and still feel persistently low, depression may be a factor. Either way, talking to a healthcare provider can help you sort it out." },
  { question: "How many hours of sleep do I need to protect my mental health?", answer: "Most research points to 7-9 hours for adults. Studies show that both sleeping less than 6 hours and more than 9 hours are associated with higher rates of depression and anxiety. However, individual needs vary — the best measure is whether you feel rested and can function well during the day." },
  { question: "Why do I feel anxious when I wake up in the morning?", answer: "Morning anxiety is common and has a physiological basis. Cortisol — your body's primary stress hormone — naturally peaks about 30-45 minutes after waking (called the cortisol awakening response). If you're already anxious or stressed, this natural spike can feel like a wave of dread. Poor sleep the night before amplifies the effect." },
  { question: "Can improving sleep actually reduce anxiety and depression symptoms?", answer: "Yes. A meta-analysis published in Sleep Medicine Reviews found that treating insomnia with cognitive behavioral therapy (CBT-I) produced significant improvements in depression, anxiety, and overall psychological well-being — even when those conditions weren't directly treated. Sleep is not the whole picture, but it is often a powerful lever." },
  { question: "Is sleeping too much a sign of depression?", answer: "It can be. While insomnia gets more attention, about 15% of people with depression experience hypersomnia — sleeping excessively and still feeling exhausted. If you're regularly sleeping 10+ hours and still feel tired, or if you're using sleep to escape how you feel, it's worth discussing with a healthcare provider." },
];

export default function SleepMoodPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "How Sleep Affects Your Mood (and Why Poor Sleep Makes Everything Harder)", description: "The science behind the sleep-mood connection — why poor sleep worsens anxiety and depression, and what to do about it.", url: ARTICLE_URL, datePublished: "2025-02-10", dateModified: new Date().toISOString().split("T")[0] })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Sleep & Mood Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">7 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How Sleep Affects Your Mood (and Why Poor Sleep Makes Everything Harder)
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            You already know you feel terrible after a bad night&apos;s sleep. But the relationship between sleep and mood goes far deeper than grogginess. Research shows that sleep and mental health are locked in a bidirectional cycle — each one powerfully shaping the other. This guide explains what the science says, how to recognize when sleep is undermining your mental health, and what you can actually do about it.
          </p>
          <div className="mt-6">
            <Link href="/sleep-and-mood-check" className="btn-primary text-sm">
              Take the Sleep &amp; Mood Self-Check →
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>The sleep-mood connection: it goes both ways</h2>
            <p>
              The relationship between sleep and mood is not one-directional. Poor sleep doesn&apos;t just make you cranky — it fundamentally alters how your brain processes emotions. And emotional distress doesn&apos;t just keep you up at night — it restructures your sleep architecture in ways that perpetuate the problem.
            </p>
            <p>
              A landmark meta-analysis from the American Psychological Association, covering over 50 years of research and more than 5,000 participants, found that sleep deprivation significantly reduces positive mood while increasing anxiety. Notably, the effects on anxiety were even stronger than the effects on general mood — meaning lost sleep hits your emotional stability particularly hard.
            </p>
            <p>
              On the other side, insomnia is one of the strongest predictors of developing depression. People with persistent insomnia are roughly five times more likely to develop depression than those who sleep well. And approximately 75% of people already experiencing depression report significant sleep disturbance. The two conditions feed each other in a cycle that can be difficult to break without intentional intervention.
            </p>
          </section>

          <section>
            <h2>What happens to your brain when you don&apos;t sleep</h2>
            <p>
              Sleep deprivation doesn&apos;t just make you tired — it changes how your brain functions at a neurological level. Brain imaging studies show that after just one night of poor sleep, the amygdala (your brain&apos;s threat-detection center) becomes roughly 60% more reactive to negative stimuli. At the same time, the prefrontal cortex — the region responsible for rational thinking and emotional regulation — becomes less connected to the amygdala.
            </p>
            <p>
              In practical terms, this means you literally lose some of your ability to regulate emotions when you&apos;re sleep-deprived. Small frustrations feel bigger. Anxious thoughts spiral more easily. The gap between a triggering event and your emotional reaction narrows, making it harder to pause, assess, and respond thoughtfully.
            </p>
            <p>
              Sleep also plays a critical role in processing emotional memories. During REM sleep, your brain integrates emotional experiences from the day, essentially stripping the emotional charge from memories while preserving the information. When REM sleep is disrupted — as it commonly is in both insomnia and depression — emotional memories remain &quot;raw,&quot; contributing to next-day irritability, anxiety, and mood instability.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Signs poor sleep is affecting your mental health</h2>
            <p>
              Not everyone connects their mood problems to their sleep. Here are patterns that suggest your sleep quality may be a significant factor in how you&apos;re feeling:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { sign: "You feel irritable or emotionally reactive in a way that feels disproportionate" },
                { sign: "You wake up anxious or with a sense of dread most mornings" },
                { sign: "Small setbacks that you'd normally handle feel overwhelming" },
                { sign: "You have difficulty concentrating, making decisions, or remembering things" },
                { sign: "You feel low or hopeless during the day but can't point to a clear reason" },
                { sign: "You rely on caffeine, alcohol, or naps just to get through the day" },
                { sign: "Your mood significantly improves after a rare night of good sleep" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-4 flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.sign}</p>
                </div>
              ))}
            </div>
            <p>
              If several of these resonate, sleep is likely playing a role in your mental health — even if it&apos;s not the only factor. The good news is that sleep is often one of the most actionable things you can address.
            </p>
          </section>

          <section>
            <h2>Am I depressed or just tired? How to tell</h2>
            <p>
              Sleep deprivation and depression share so many symptoms that distinguishing them can be genuinely difficult. Both cause fatigue, poor concentration, low motivation, irritability, and reduced interest in activities. This is not a coincidence — the neurological pathways involved overlap significantly.
            </p>
            <p>
              A few clues that may help you (and your healthcare provider) sort it out:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { label: "Recovery pattern", tired: "Good sleep restores your mood and energy", depressed: "Even well-rested days feel flat or heavy" },
                { label: "Interest in activities", tired: "You want to do things but lack energy", depressed: "You've lost interest even in things you used to enjoy" },
                { label: "Emotional range", tired: "Mostly irritable or foggy", depressed: "Persistent sadness, emptiness, or hopelessness" },
                { label: "Self-perception", tired: "You feel like yourself, just exhausted", depressed: "You feel worthless, guilty, or fundamentally different" },
                { label: "Duration", tired: "Tracks with sleep quality — better sleep, better mood", depressed: "Persists regardless of sleep improvements" },
              ].map((r) => (
                <div key={r.label} className="card p-3">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{r.label}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    <p className="text-sm text-neutral-600 dark:text-neutral-300"><span className="font-medium">Sleep-deprived:</span> {r.tired}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300"><span className="font-medium">Depression:</span> {r.depressed}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>
              Importantly, it doesn&apos;t have to be one or the other. Sleep deprivation can cause depressive symptoms, and depression can cause sleep deprivation. If you&apos;re unsure, a professional can help you untangle the causes — our <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 depression self-check</Link> can also help you reflect on whether depressive symptoms are present.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Why you can&apos;t sleep when you&apos;re anxious</h2>
            <p>
              If you&apos;ve ever lain in bed with your mind racing — tired but completely unable to fall asleep — you&apos;ve experienced the anxiety-insomnia loop firsthand. Anxiety activates your sympathetic nervous system (the &quot;fight or flight&quot; response), flooding your body with cortisol and adrenaline. These hormones are designed to keep you alert and ready for danger — the exact opposite of what you need to fall asleep.
            </p>
            <p>
              Making matters worse, the experience of not being able to sleep often generates its own anxiety. You start watching the clock, calculating how many hours you have left, worrying about how exhausted you&apos;ll be tomorrow — which creates more arousal, which makes sleep even harder. This meta-worry about sleep is a hallmark of chronic insomnia and is one of the primary targets of cognitive behavioral therapy for insomnia (CBT-I).
            </p>
            <p>
              Morning anxiety is another common pattern. Cortisol naturally peaks about 30-45 minutes after waking — a phenomenon called the cortisol awakening response. If you&apos;re already in an anxious state, this natural hormonal spike can feel like waking up to a wave of dread, even before anything stressful has happened. Poor sleep the night before amplifies this effect significantly.
            </p>
          </section>

          <section>
            <h2>The oversleeping side: when too much sleep signals a problem</h2>
            <p>
              While insomnia gets most of the attention, sleeping too much can also signal a mental health concern. Approximately 15% of people with depression experience hypersomnia — sleeping excessively (often 10+ hours) and still feeling exhausted. This is different from the occasional weekend sleep-in; it&apos;s a persistent pattern where sleep becomes an escape from emotional pain rather than genuine rest.
            </p>
            <p>
              Research also shows a U-shaped relationship between sleep duration and mental health outcomes. Both sleeping less than 6 hours and more than 9 hours on a regular basis are associated with higher rates of depression, anxiety, and overall psychological distress. The sweet spot for most adults is 7-9 hours — though individual needs genuinely vary.
            </p>
            <p>
              If you&apos;re regularly sleeping long hours and still feel tired, it&apos;s worth considering whether the quantity of sleep is masking a problem with quality — or whether the need to sleep is itself a symptom worth discussing with a healthcare provider.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Sleep hygiene tips specifically for anxiety and depression</h2>
            <p>
              Generic sleep hygiene advice (&quot;avoid screens before bed&quot;) is fine as far as it goes, but it often misses the specific challenges that anxiety and depression create. Here are strategies that address the overlap between sleep and mental health:
            </p>
            <p>
              <strong>Create a &quot;worry window&quot; earlier in the evening.</strong> Set aside 15-20 minutes (well before bed) to write down your worries and anything on your mind. The goal is not to solve problems but to externalize them so they&apos;re less likely to ambush you when your head hits the pillow.
            </p>
            <p>
              <strong>Stop watching the clock.</strong> Clock-watching during the night fuels sleep anxiety. Turn your clock around or move your phone out of arm&apos;s reach. Knowing it&apos;s 2:47 AM does not help you fall asleep — it only helps you calculate how terrible tomorrow will be.
            </p>
            <p>
              <strong>Get out of bed if you can&apos;t sleep.</strong> If you&apos;ve been lying awake for roughly 20 minutes, get up and do something low-stimulation (read, stretch, listen to calm audio) in dim light. Return to bed when you feel sleepy. This breaks the association between your bed and the frustration of not sleeping.
            </p>
            <p>
              <strong>Protect your wake-up time even more than your bedtime.</strong> A consistent wake time (even on weekends) is the single most powerful anchor for your circadian rhythm. Your body can adjust to a variable bedtime more easily than a variable wake time.
            </p>
            <p>
              <strong>Be cautious with naps.</strong> If you&apos;re depressed, long naps can feel like relief but often fragment nighttime sleep further. If you need to nap, keep it under 20-30 minutes and before 2 PM.
            </p>
            <p>
              <strong>Get morning light exposure.</strong> Bright light in the first 30-60 minutes after waking helps regulate your circadian rhythm and suppresses melatonin production at the right time. This is especially important if you experience morning anxiety or have difficulty feeling alert until midday.
            </p>
          </section>

          <section>
            <h2>When to talk to a professional about sleep and mood</h2>
            <p>
              Self-help strategies are a good starting point, but some sleep-mood problems require professional support. Consider reaching out to a healthcare provider if your sleep problems have persisted for more than a few weeks despite consistent effort; if you&apos;re experiencing symptoms of depression (persistent sadness, loss of interest, feelings of worthlessness) alongside poor sleep; if anxiety about sleep itself has become a major source of distress; if you suspect a sleep disorder like sleep apnea (snoring, gasping, daytime sleepiness despite adequate sleep time); or if you&apos;re using alcohol, cannabis, or sleep medications regularly just to fall asleep.
            </p>
            <p>
              Cognitive behavioral therapy for insomnia (CBT-I) is considered the first-line treatment for chronic insomnia — more effective than medication for long-term results. If your provider isn&apos;t familiar with CBT-I, you can ask for a referral to a sleep specialist or behavioral sleep medicine provider.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Want to check how your sleep and mood connect?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 2 minutes. Your answers never leave your browser.</p>
            <Link href="/sleep-and-mood-check" className="btn-primary text-sm">Take the Sleep &amp; Mood Self-Check</Link>
          </div>

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

          <AdSlot position="Blog In-Content 4" className="my-8" />

          {/* Related */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/work-stress-vs-burnout" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Work Stress vs. Clinical Burnout</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">The difference between everyday stress and burnout, and why online quizzes have limits</p>
              </Link>
              <Link href="/blog/gad-7-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Scale Guide</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">How clinicians use and interpret anxiety scores</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

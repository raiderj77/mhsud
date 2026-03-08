import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { SITE_AUTHOR } from "@/config/author";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/relapse-prevention-plan-guide`;

export const metadata: Metadata = createMetadata({
  path: "/blog/relapse-prevention-plan-guide",
  title: "How to Build a Relapse Prevention Plan",
  description:
    "Step-by-step guide to building a relapse prevention plan. Learn the three stages of relapse, identify triggers, and create your coping toolkit.",
  keywords: [
    "relapse prevention plan", "relapse prevention strategies", "how to prevent relapse",
    "relapse warning signs", "relapse triggers", "coping skills for recovery",
    "HALT check-in", "relapse prevention toolkit", "stages of relapse",
  ],
  openGraph: {
    type: "article",
  },
});

const POST_DATA = BLOG_POSTS.find((p) => p.slug === "relapse-prevention-plan-guide")!;

const FAQ_DATA = [
  {
    question: "What is the most common cause of relapse?",
    answer: "Research suggests that unmanaged stress is one of the most common contributors to relapse. Stress activates emotional and mental patterns that may lead to cravings. Other common factors include exposure to people or environments associated with past use, untreated mental health concerns, isolation, and overconfidence in recovery. A relapse prevention plan helps you identify your personal risk factors before they escalate.",
  },
  {
    question: "How do I know if I'm about to relapse?",
    answer: "Relapse rarely happens without warning. Early signs often appear in the emotional stage — increased irritability, anxiety, isolation, poor sleep, skipping meals, or neglecting self-care. In the mental stage, you may notice romanticizing past use, bargaining with yourself, or spending time around people or places connected to substance use. Recognizing these patterns early is exactly what a prevention plan is designed to help you do.",
  },
  {
    question: "What should I do if I relapse?",
    answer: "A relapse does not erase your progress or mean that recovery has failed. The most important step is to reach out immediately — call your sponsor, therapist, a trusted friend, or SAMHSA's helpline at 1-800-662-4357. Remove yourself from the situation, be honest about what happened, and reconnect with your support network. Many people in long-term recovery have experienced setbacks along the way. What matters is getting back on track as quickly as possible.",
  },
  {
    question: "How often should I update my prevention plan?",
    answer: "Your relapse prevention plan should be a living document. Review it at least once a month, and update it any time your circumstances change — a new job, a relationship change, a move, increased stress, or a shift in your emotional health. As you learn more about your patterns in recovery, your plan should evolve to reflect that understanding. Many people find it helpful to review their plan with a therapist or sponsor regularly.",
  },
  {
    question: "Does having a plan really help?",
    answer: "Yes. Research consistently shows that structured relapse prevention planning is associated with better outcomes in recovery. The Gorski model and cognitive-behavioral relapse prevention approaches have strong evidence behind them. Having a written plan means you do not have to rely on willpower or clear thinking in a moment of crisis — you already have a set of actions to follow. It turns abstract intention into concrete steps.",
  },
];

export default function RelapsePreventionPlanGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "How to Build a Relapse Prevention Plan", description: "Step-by-step guide to building a relapse prevention plan. Learn the three stages of relapse, identify triggers, and create your coping toolkit.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Relapse Prevention Plan Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How to Build a Relapse Prevention Plan
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Recovery is not a straight line. A relapse prevention plan gives you a concrete, personalized roadmap for recognizing warning signs early and responding before a setback becomes a crisis. Here&apos;s how to build one step by step.
          </p>
          <div className="mt-6">
            <Link href="/relapse-prevention-plan" className="btn-primary text-sm">Build Your Relapse Prevention Plan &rarr;</Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What a relapse prevention plan is and why it matters</h2>
            <p>
              A relapse prevention plan is a written, personalized document that outlines your triggers, warning signs, coping strategies, emergency contacts, and action steps for staying on track in recovery. Think of it as a safety net you build while you are thinking clearly — so it is ready when you are not.
            </p>
            <p>
              The concept was formalized by Terence Gorski, whose research on relapse prevention in the 1980s and 1990s established that relapse is not a random event. It follows a predictable pattern of stages, and each stage offers an opportunity to intervene. A good prevention plan maps directly to these stages, giving you specific actions for each one.
            </p>
            <p>
              Without a plan, recovery relies heavily on willpower and in-the-moment decision-making — both of which are compromised during stress, emotional distress, or cravings. With a plan, you have already decided what to do. You just have to follow the steps.
            </p>
          </section>

          <section>
            <h2>The three stages of relapse</h2>
            <p>
              According to the Gorski model, relapse unfolds in three stages. Understanding these stages is critical because the earlier you recognize where you are, the easier it is to course-correct.
            </p>
            <p>
              <strong>Emotional relapse</strong> is the earliest stage. You may not be thinking about using at all, but your emotions and behaviors are setting you up for vulnerability. Signs include bottling up feelings, isolating from others, skipping meetings or therapy, neglecting sleep and nutrition, and increased irritability or anxiety. At this stage, intervention is about self-care — eating well, sleeping enough, staying connected, and being honest about how you feel.
            </p>
            <p>
              <strong>Mental relapse</strong> is the internal tug-of-war. Part of you wants to stay in recovery, and part of you is thinking about using. You may find yourself romanticizing past use, remembering the highs while minimizing the consequences. You might start bargaining — &quot;just once,&quot; &quot;I can control it now,&quot; &quot;no one will know.&quot; You may seek out people or places associated with past use. This is the critical intervention window. Use your plan, call someone, and change your environment.
            </p>
            <p>
              <strong>Behavioral relapse</strong> is the act of using. Once this stage begins, the priority shifts to harm reduction and getting back into your support system as quickly as possible. A single episode does not erase your recovery — but it does require immediate, honest action.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Identifying your personal triggers</h2>
            <p>
              Triggers are the people, places, emotions, situations, times, and sensory experiences that activate cravings or push you toward old patterns. Everyone&apos;s triggers are different, which is why a generic plan is less effective than a personalized one.
            </p>
            <p>
              Consider these categories when building your list:
            </p>
            <ul>
              <li><strong>People</strong> — individuals you used with, people who create stress or conflict, or those who minimize your recovery</li>
              <li><strong>Places</strong> — bars, certain neighborhoods, a friend&apos;s house, or any location strongly associated with past use</li>
              <li><strong>Emotions</strong> — anger, loneliness, boredom, shame, anxiety, or even excitement and celebration</li>
              <li><strong>Situations</strong> — financial stress, relationship conflict, job loss, social pressure, or major life transitions</li>
              <li><strong>Times</strong> — weekends, evenings, holidays, anniversaries, or pay day</li>
              <li><strong>Sensory cues</strong> — specific smells, songs, or visual reminders connected to past use</li>
            </ul>
            <p>
              Write these down honestly. The goal is not to avoid every trigger forever — that is not realistic. The goal is to know what your triggers are so you are not blindsided by them.
            </p>
          </section>

          <section>
            <h2>Creating your warning signs list</h2>
            <p>
              Warning signs are the internal and external changes that indicate you may be moving through the stages of relapse. They are different from triggers — triggers are external events, while warning signs are your responses to those events.
            </p>
            <p>
              Common warning signs include withdrawing from friends and family, skipping recovery meetings, increased secrecy, returning to old routines associated with use, sudden mood swings, rationalizing or minimizing past consequences, poor self-care, and increased conflict in relationships.
            </p>
            <p>
              Ask people you trust — a sponsor, therapist, close friend, or family member — what changes they noticed in you before a past relapse or during difficult periods. Often, others can see patterns that are invisible to us from the inside.
            </p>
          </section>

          <section>
            <h2>Building a coping strategy toolkit</h2>
            <p>
              Your coping toolkit is the collection of healthy actions you can take when you notice a trigger or warning sign. Effective toolkits include a mix of strategies for different situations:
            </p>
            <ul>
              <li><strong>Physical</strong> — walking, exercise, deep breathing, progressive muscle relaxation</li>
              <li><strong>Social</strong> — calling a sponsor, attending a meeting, texting a sober friend</li>
              <li><strong>Cognitive</strong> — journaling, playing the tape forward (imagining the full consequences of using), challenging distorted thoughts</li>
              <li><strong>Behavioral</strong> — changing your environment, leaving a triggering situation, engaging in a safe activity</li>
              <li><strong>Emotional</strong> — naming the feeling, sitting with discomfort without acting on it (urge surfing), self-compassion exercises</li>
            </ul>
            <p>
              The key is to write these down in advance. During a craving, your ability to brainstorm new coping strategies is significantly reduced. A pre-written list removes the need to think creatively under pressure.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Emergency contacts and your support network</h2>
            <p>
              Every relapse prevention plan should include a list of people you can call when you are struggling. This is not a general contact list — it is a specific, prioritized list of people who understand your situation and are willing to help.
            </p>
            <p>
              Include your sponsor (if applicable), your therapist or counselor, two or three trusted friends or family members, and crisis resources. Keep SAMHSA&apos;s National Helpline (<strong>1-800-662-4357</strong>) and the 988 Suicide &amp; Crisis Lifeline on your list. These are free, confidential, and available 24/7. You can also visit <a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer">samhsa.gov</a> to find local treatment services.
            </p>
            <p>
              Store this list in your phone, keep a printed copy at home, and share it with someone you trust. When a crisis hits, you should not have to search for a number.
            </p>
          </section>

          <section>
            <h2>The HALT check-in as a daily prevention tool</h2>
            <p>
              HALT stands for Hungry, Angry, Lonely, Tired — four basic states that significantly increase vulnerability to relapse. The <Link href="/halt-check-in">HALT check-in</Link> is a simple daily practice: pause and ask yourself whether you are experiencing any of these four states, then take action to address them before they escalate.
            </p>
            <p>
              It sounds almost too simple to be effective, but that is exactly why it works. Most relapses do not begin with a dramatic event. They begin with accumulated neglect of basic needs — skipping meals, not sleeping enough, avoiding human connection, or pushing through exhaustion without rest. The HALT check-in catches these patterns early.
            </p>
            <p>
              Many people in recovery do a HALT check-in every morning and again in the late afternoon. It takes less than a minute and can be the difference between a manageable day and a dangerous one.
            </p>
          </section>

          <section>
            <h2>Safe activities and healthy routines</h2>
            <p>
              Boredom and unstructured time are among the most underestimated risk factors in recovery. A relapse prevention plan should include a list of safe, enjoyable activities you can turn to when you need to fill time or redirect your energy.
            </p>
            <p>
              These might include exercise, cooking, reading, attending a recovery meeting, volunteering, creative hobbies, spending time outdoors, or calling a friend. The goal is not to keep yourself so busy that you never have a quiet moment — it is to have options readily available when idle time starts to feel dangerous.
            </p>
            <p>
              Healthy routines around sleep, meals, and daily structure also serve as protective factors. When the basics are in place, you are better equipped to handle whatever the day brings.
            </p>
          </section>

          <section>
            <h2>What to do when a craving hits</h2>
            <p>
              Cravings are a normal part of recovery. They are uncomfortable, but they are temporary — most cravings peak and pass within 15 to 30 minutes if you do not act on them. Here are three evidence-based strategies:
            </p>
            <p>
              <strong>Play the tape forward.</strong> When a craving hits, your brain focuses on the relief of using. Deliberately think past that moment — what happens an hour later? The next morning? What are the consequences for your relationships, your health, your recovery? Playing the full tape often reduces the appeal significantly.
            </p>
            <p>
              <strong>Urge surfing.</strong> Developed by psychologist Alan Marlatt, urge surfing involves observing the craving without acting on it. Notice where you feel it in your body, watch its intensity rise and fall, and remind yourself that it will pass. You are not fighting the wave — you are riding it.
            </p>
            <p>
              <strong>Call someone.</strong> Pick up the phone and tell someone what you are experiencing. This is not weakness — it is one of the most effective relapse prevention strategies available. Connection breaks the isolation that cravings thrive on.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>What to do if relapse happens</h2>
            <p>
              If a relapse occurs, the single most important thing to understand is this: a relapse is not a failure. It does not mean recovery is over, and it does not erase the progress you have made. Addiction is a chronic condition, and setbacks are part of many people&apos;s recovery journeys.
            </p>
            <p>
              What matters is what you do next. Stop using immediately. Remove yourself from the situation. Call someone from your support network — your sponsor, therapist, or a crisis line. Be honest about what happened. Do not let shame keep you silent, because silence is where relapse grows.
            </p>
            <p>
              After stabilizing, review your prevention plan with a professional. What warning signs did you miss? What triggers were you not prepared for? What will you do differently? Use the experience as data, not as evidence of failure. Many people in long-term recovery will tell you that a setback taught them something essential about their own patterns.
            </p>
          </section>

          <section>
            <h2>Using the Relapse Prevention Plan Builder tool</h2>
            <p>
              Our <Link href="/relapse-prevention-plan">Relapse Prevention Plan Builder</Link> walks you through each of these components in a structured, guided format. It helps you identify your triggers, list your warning signs, build your coping toolkit, record your emergency contacts, and create a complete written plan — all in your browser, with nothing stored on our servers.
            </p>
            <p>
              Having a written plan matters. Research on relapse prevention consistently shows that structured, documented plans are more effective than mental notes or vague intentions. The act of writing forces clarity, and the finished document gives you something concrete to refer back to when things get hard.
            </p>
          </section>

          <section>
            <h2>The role of ongoing support</h2>
            <p>
              A relapse prevention plan is not a substitute for professional support — it is a complement to it. Ongoing therapy, recovery meetings, sponsorship, and peer support all strengthen the foundation that your plan is built on.
            </p>
            <p>
              Cognitive-behavioral therapy (CBT) and other evidence-based approaches can help you develop deeper skills for managing triggers and cravings. Recovery communities — whether 12-step, SMART Recovery, Refuge Recovery, or others — provide accountability, connection, and shared experience. A sponsor or mentor offers one-on-one guidance from someone who understands the recovery journey firsthand.
            </p>
            <p>
              Recovery is not something you do alone. Your plan is a tool, and your support network is the team that helps you use it.
            </p>
          </section>

          {/* Disclaimer */}
          <div className="card p-5 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose text-sm text-neutral-600 dark:text-neutral-400">
            <p className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p>This article is for educational purposes only. It is not a diagnosis or treatment recommendation. A relapse prevention plan is a self-help tool and does not replace professional care. Always consult a qualified healthcare professional for concerns about substance use or mental health.</p>
            <p className="mt-2">If you or someone you know is struggling with substance use, call SAMHSA&apos;s National Helpline: <strong>1-800-662-4357</strong> (free, confidential, 24/7). If you are in crisis, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline).</p>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to build your relapse prevention plan?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, guided step-by-step. Your answers never leave your browser.</p>
            <Link href="/relapse-prevention-plan" className="btn-primary text-sm">Build Your Plan Now</Link>
          </div>

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
                <div className="px-4 pb-4"><p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </section>

          {/* Related Tools */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/relapse-prevention-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan Builder</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">Guided tool to create your personalized prevention plan</p>
              </Link>
              <Link href="/halt-check-in" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">HALT Check-In</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">Daily Hungry, Angry, Lonely, Tired self-check</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/stages-of-change-recovery" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Stages of Change in Addiction Recovery</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">Understanding where you are in the recovery process</p>
              </Link>
              <Link href="/blog/quit-drinking-timeline" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Quit Drinking Timeline</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">What to expect when you stop drinking</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/trigger-identification-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "trigger-identification-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/trigger-identification-guide",
  title: "Trigger Identification: How to Recognize and Manage Relapse Triggers",
  description:
    "Triggers are people, places, emotions, or situations that increase the urge to use. Learn how to identify your personal triggers and develop specific coping responses.",
  keywords: [
    "relapse triggers",
    "trigger identification",
    "addiction triggers",
    "emotional triggers recovery",
    "how to identify triggers",
    "trigger management",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What are the most common relapse triggers?",
    answer:
      "Marlatt and Gordon\u2019s research found negative emotional states (stress, anger, boredom) account for roughly 35% of relapse episodes, followed by social pressure (20%), interpersonal conflict (16%), and positive emotional states like celebrations. Environmental cues such as places, sounds, or smells associated with past use are also powerful triggers.",
  },
  {
    question: "Can triggers go away over time?",
    answer:
      "Triggers can weaken through extinction \u2014 repeated exposure without the substance response gradually reduces their power. However, some triggers, particularly strong emotional states and environmental cues, can re-emerge unexpectedly even years into recovery. This is why ongoing awareness and coping strategies remain important throughout long-term recovery.",
  },
  {
    question: "How is a trigger different from a craving?",
    answer:
      "A trigger is the stimulus \u2014 the person, place, emotion, or situation that activates the desire to use. A craving is the response \u2014 the physical and psychological urge that follows. Trigger identification focuses on recognizing what sets off this chain reaction so you can intervene before cravings fully develop or escalate to substance use.",
  },
  {
    question: "Should I avoid all my triggers?",
    answer:
      "Avoidance is appropriate for some triggers (keeping substances out of your home, avoiding certain people), but it is not possible or healthy to avoid all triggers indefinitely. Effective recovery involves both avoidance of high-risk situations when possible and developing coping skills for triggers you cannot avoid \u2014 like stress, negative emotions, or social situations.",
  },
];

export default function TriggerIdentificationGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Trigger Identification: How to Recognize and Manage Relapse Triggers", description: "Learn how to identify your personal triggers and develop specific coping responses.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Trigger Identification Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Recovery</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Trigger Identification: How to Recognize and Manage Relapse Triggers
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            A trigger is anything that activates the urge to use a substance &mdash; a person, place, emotion, time of day, or sensory cue connected to past use. Triggers are deeply personal and often operate below conscious awareness. Learning to identify your specific triggers is one of the most practical skills in recovery, because you cannot manage what you have not named.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>Types of triggers</h2>
            <p>Triggers generally fall into four categories:</p>

            <h3>External triggers</h3>
            <ul>
              <li><strong>People:</strong> Drinking buddies, dealers, or anyone associated with past use</li>
              <li><strong>Places:</strong> Bars, neighborhoods, specific routes you drove while using</li>
              <li><strong>Things:</strong> Drug paraphernalia, specific brands of alcohol, even certain songs or smells</li>
              <li><strong>Times:</strong> Friday evening, payday, holidays, anniversaries of losses</li>
            </ul>

            <h3>Internal triggers</h3>
            <ul>
              <li><strong>Negative emotions:</strong> Stress, anger, loneliness, boredom, sadness, shame, anxiety</li>
              <li><strong>Positive emotions:</strong> Celebrations, feeling overconfident, wanting to reward yourself</li>
              <li><strong>Physical states:</strong> Pain, fatigue, hunger, insomnia</li>
              <li><strong>Cognitive patterns:</strong> Romanticizing past use, testing yourself (&quot;I can handle being around it&quot;), rationalizing (&quot;just one won&apos;t hurt&quot;)</li>
            </ul>

            <h3>Social triggers</h3>
            <ul>
              <li>Direct pressure to use (&quot;come on, have one drink&quot;)</li>
              <li>Indirect pressure (being at a party where everyone is drinking)</li>
              <li>Conflict with family, partner, or coworkers</li>
            </ul>

            <h3>Sensory triggers</h3>
            <ul>
              <li>The smell of alcohol or marijuana</li>
              <li>Music or shows associated with past use</li>
              <li>The sound of ice clinking in a glass or a can opening</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How the MindCheck Tools trigger identification worksheet helps</h2>
            <p>
              The <Link href="/trigger-identification-worksheet" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools trigger identification worksheet</Link> guides you through a structured process of naming your triggers across all four categories, rating their intensity, and planning specific coping responses for each one. It is free, private, and runs entirely in your browser.
            </p>
            <p>
              The value of writing triggers down (rather than just thinking about them) is supported by research on implementation intentions &mdash; specific &quot;if-then&quot; plans are significantly more effective than general intentions. The worksheet helps you create these: &quot;If I encounter [trigger], then I will [specific coping response].&quot;
            </p>
            <p>
              Once you have mapped your triggers, you can incorporate them into a <Link href="/relapse-prevention-plan" className="text-sage-600 dark:text-sage-400 underline">relapse prevention plan</Link> for a comprehensive safety net.
            </p>
          </section>

          <section>
            <h2>Managing triggers you cannot avoid</h2>
            <p>Some triggers are avoidable (keeping alcohol out of your home). Others are not (stress, family conflict, grief). For unavoidable triggers, evidence-based strategies include:</p>
            <ul>
              <li><strong>Urge surfing:</strong> Observe the craving without acting on it; it will peak and pass within 15&ndash;30 minutes</li>
              <li><strong>Grounding techniques:</strong> Use sensory awareness (the <Link href="/five-senses-grounding" className="text-sage-600 dark:text-sage-400 underline">5-4-3-2-1 grounding exercise</Link>) to interrupt the craving cycle</li>
              <li><strong>HALT check:</strong> Determine if the urge is actually driven by hunger, anger, loneliness, or tiredness</li>
              <li><strong>Play the tape forward:</strong> Instead of romanticizing the first use, mentally follow the sequence through to its typical consequences</li>
              <li><strong>Call someone:</strong> Cravings lose power when spoken aloud to a trusted person</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>When to seek professional help</h2>
            <p>Consider professional support if:</p>
            <ul>
              <li>You are encountering triggers frequently and your coping strategies feel insufficient</li>
              <li>Triggers are causing intense emotional responses (panic, rage, despair)</li>
              <li>You have trauma-related triggers that overwhelm your ability to cope</li>
              <li>You have relapsed despite identifying your triggers</li>
              <li>You are unsure how to distinguish triggers from normal discomfort</li>
            </ul>
            <p>
              A therapist trained in relapse prevention, CBT, or trauma-informed care can help you develop more sophisticated coping strategies and process the underlying experiences that power your triggers. The <Link href="/trigger-identification-worksheet" className="text-sage-600 dark:text-sage-400 underline">trigger identification worksheet</Link> is a useful starting point to bring to your first session.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Map your triggers and build coping responses</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/trigger-identification-worksheet" className="btn-primary text-sm">Start the Trigger Worksheet</Link>
              <Link href="/relapse-prevention-plan" className="btn-primary text-sm">Build Your Prevention Plan</Link>
            </div>
          </div>

          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

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

          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/trigger-identification-worksheet" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Trigger Identification Worksheet</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Map and categorize your personal triggers</p>
              </Link>
              <Link href="/relapse-prevention-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Build a comprehensive prevention plan</p>
              </Link>
              <Link href="/coping-skills-randomizer" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Coping Skills Randomizer</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Get a random evidence-based coping skill</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/relapse-prevention-plan-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Build a Relapse Prevention Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Step-by-step plan-building guide</p>
              </Link>
              <Link href="/blog/halt-checkin-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">HALT: The Recovery Check-In</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Hungry, Angry, Lonely, Tired vulnerability check</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

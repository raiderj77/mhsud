import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-is-anxiety`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-is-anxiety")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-is-anxiety",
  title: "What Is Anxiety? Symptoms, Types, and Treatment",
  description:
    "Anxiety is normal \u2014 but anxiety disorders are not just being worried. Learn the difference, how the main anxiety disorders are defined, and what evidence-based treatment looks like.",
  keywords: [
    "what is anxiety",
    "anxiety symptoms",
    "anxiety disorder types",
    "generalized anxiety disorder",
    "what causes anxiety",
    "anxiety treatment",
    "signs of anxiety disorder",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is anxiety genetic?",
    answer:
      "Anxiety has a meaningful genetic component \u2014 heritability estimates range from 30\u201350% depending on the disorder and study design. However, genetics is not destiny: environmental factors, early experiences, learned patterns, and treatment all significantly affect whether and how anxiously someone lives. Having an anxious parent or sibling increases risk but does not determine outcome.",
  },
  {
    question: "Can anxiety go away on its own?",
    answer:
      "Some acute anxiety tied to specific stressors does resolve as circumstances change. Established anxiety disorders are less likely to resolve without intervention \u2014 particularly because avoidance patterns become entrenched over time, and the disorder maintains itself through those patterns. Even mild anxiety disorders respond well to evidence-based treatment, and early intervention generally produces better outcomes.",
  },
  {
    question: "What\u2019s the difference between anxiety and stress?",
    answer:
      "Stress is typically a response to an identifiable external pressure \u2014 a deadline, a conflict, a difficult situation. It tends to resolve when the stressor is removed. Anxiety is an internal state that persists even when the external trigger is gone or absent \u2014 an anticipatory fear about what might happen. The two can overlap: chronic stress can trigger anxiety, and anxiety amplifies the response to stressors. But anxiety disorders involve a pattern of internal apprehension that persists across changing circumstances.",
  },
  {
    question: "Can anxiety cause physical symptoms?",
    answer:
      "Yes. Anxiety produces significant physical symptoms through the sympathetic nervous system: muscle tension, rapid heartbeat, shallow breathing, gastrointestinal symptoms, headaches, fatigue, and sweating. These are physiologically real \u2014 not \u201call in your head.\u201d Medically unexplained physical symptoms are sometimes the primary presentation of anxiety, particularly in people who don\u2019t identify emotional experience readily.",
  },
];

export default function WhatIsAnxietyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Is Anxiety? Symptoms, Types, and Treatment", description: "Anxiety is normal \u2014 but anxiety disorders are not just being worried. Learn the difference, the main anxiety disorder types, and what evidence-based treatment looks like.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Is Anxiety?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">14 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Is Anxiety? Symptoms, Types, and Treatment
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Anxiety is the body&apos;s natural response to perceived threat &mdash; a physiological and psychological state of heightened alertness and readiness. Anxiety disorders are clinical conditions where anxiety is excessive relative to actual threat, difficult to control, and significantly interferes with functioning. Anxiety disorders are the most common mental health conditions in the United States, affecting approximately 19.1% of adults annually (NIMH, 2023). They are highly treatable.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>Normal anxiety vs. anxiety disorder</h2>
            <p>
              Anxiety exists on a spectrum. At one end: helpful, adaptive anxiety that sharpens attention before a presentation, motivates preparation for a difficult conversation, or signals danger in genuinely risky situations. This is a feature of the nervous system, not a flaw.
            </p>
            <p>Anxiety becomes a <strong>disorder</strong> when:</p>
            <ul>
              <li>It is out of proportion to the actual threat</li>
              <li>It is difficult or impossible to control through reassurance or reason</li>
              <li>It persists across situations rather than resolving when circumstances change</li>
              <li>It causes significant distress or interferes with daily functioning (work, relationships, self-care)</li>
              <li>It lasts long enough to establish a clinical pattern (at least 6 months for most diagnoses)</li>
            </ul>
            <p>
              The key distinction is <strong>impairment</strong>. Almost everyone feels anxious sometimes. Anxiety disorders are defined by the extent to which anxiety limits how someone lives.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>The main anxiety disorders</h2>
            <p>The DSM-5 recognizes several distinct anxiety disorders, each with a different focus of fear or pattern of presentation.</p>

            <h3>Generalized Anxiety Disorder (GAD)</h3>
            <p>
              GAD is characterized by excessive, difficult-to-control worry about multiple domains of life &mdash; health, finances, work, relationships, everyday matters &mdash; present more days than not for at least 6 months.
            </p>
            <p>What distinguishes GAD from ordinary worry:</p>
            <ul>
              <li>The worry is persistent and hard to stop, even when the person tries</li>
              <li>Worry jumps between topics &mdash; when one concern is resolved, another takes its place</li>
              <li>Physical symptoms are common: muscle tension, fatigue, restlessness, sleep disturbance, irritability, difficulty concentrating</li>
            </ul>
            <p>
              The <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> is the validated standard screening tool for generalized anxiety disorder. GAD affects approximately 3.1% of US adults annually.
            </p>

            <h3>Panic Disorder</h3>
            <p>
              Panic disorder involves recurrent unexpected panic attacks &mdash; sudden surges of intense fear or discomfort that peak within minutes &mdash; accompanied by persistent concern about future attacks or significant behavioral changes to avoid them.
            </p>
            <p>
              A panic attack involves four or more of: racing heart, sweating, trembling, shortness of breath, choking sensation, chest pain, nausea, dizziness, chills or hot flashes, numbness/tingling, derealization, fear of losing control or going crazy, fear of dying.
            </p>
            <p>
              Panic attacks are not medically dangerous, though they feel extremely threatening. The fear of future panic attacks (anticipatory anxiety) often leads to extensive avoidance that significantly limits daily life.
            </p>

            <h3>Social Anxiety Disorder</h3>
            <p>
              Social anxiety is a marked, persistent fear of one or more social or performance situations &mdash; meeting new people, speaking in public, being observed eating or writing &mdash; driven by fear of scrutiny or humiliation.
            </p>
            <p>
              Social anxiety is more than shyness or introversion. The fear is disproportionate to the actual social risk, recognized as excessive by the person, and leads to avoidance or endurance with significant distress. It commonly impairs career advancement, relationships, and education.
            </p>
            <p>
              Social anxiety disorder affects approximately 7.1% of US adults annually &mdash; making it the third most common mental health disorder overall.
            </p>

            <h3>Specific Phobia</h3>
            <p>
              An intense, disproportionate fear of specific objects or situations &mdash; animals, heights, flying, blood/injury/injection, enclosed spaces, vomiting, among others. The person typically recognizes the fear as excessive but cannot control it through reason.
            </p>

            <h3>Agoraphobia</h3>
            <p>
              Fear and avoidance of situations where escape might be difficult or help unavailable during a panic attack &mdash; typically open spaces, crowds, public transport, being outside alone, or standing in line. Often develops as a complication of panic disorder.
            </p>

            <h3>Separation Anxiety Disorder</h3>
            <p>
              Previously considered a childhood disorder, separation anxiety is now recognized as occurring in adults as well &mdash; characterized by excessive fear about separation from attachment figures, often manifesting in relationship contexts.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What anxiety feels like</h2>
            <p>Clinical criteria describe symptoms, but anxiety&apos;s subjective experience often surprises people who haven&apos;t named what they&apos;re dealing with:</p>

            <p><strong>Cognitive symptoms:</strong></p>
            <ul>
              <li>Racing, looping thoughts that are difficult to interrupt</li>
              <li>Catastrophizing &mdash; automatically jumping to worst-case scenarios</li>
              <li>Difficulty concentrating; the mind keeps returning to worries</li>
              <li>Mental &quot;what if&quot; spirals that feel urgent but don&apos;t resolve</li>
              <li>Difficulty making decisions for fear of choosing wrong</li>
            </ul>

            <p><strong>Physical symptoms:</strong></p>
            <ul>
              <li>Muscle tension, often in the shoulders, jaw, or neck &mdash; often not consciously noticed</li>
              <li>Heart racing or palpitations</li>
              <li>Shallow or rapid breathing; sometimes hyperventilation</li>
              <li>Fatigue &mdash; anxiety is physically exhausting</li>
              <li>Gastrointestinal distress &mdash; nausea, stomach discomfort, irritable bowel</li>
              <li>Headaches</li>
              <li>Restlessness, the inability to relax</li>
            </ul>

            <p><strong>Behavioral symptoms:</strong></p>
            <ul>
              <li>Avoidance &mdash; of situations, conversations, sensations, or thoughts that trigger anxiety</li>
              <li>Reassurance-seeking &mdash; repeatedly asking others for confirmation that things are okay</li>
              <li>Overpreparation and checking</li>
              <li>Procrastination driven by overwhelm or fear of making errors</li>
            </ul>

            <p>
              The avoidance cycle is the central mechanism maintaining most anxiety disorders. Avoidance provides immediate relief &mdash; which reinforces the behavior &mdash; but prevents the learning that the feared situation was survivable.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>Anxiety and the body: the nervous system basics</h2>
            <p>
              Understanding anxiety&apos;s physiology helps demystify the experience. Anxiety activates the <strong>sympathetic nervous system</strong> &mdash; the body&apos;s threat-response system &mdash; triggering a cascade:
            </p>
            <ol>
              <li>The amygdala (threat detection center) identifies a potential danger</li>
              <li>The hypothalamus activates the HPA axis, releasing cortisol and adrenaline</li>
              <li>Heart rate increases (to pump blood to muscles), breathing accelerates (to intake more oxygen), digestion slows (non-essential in a threat)</li>
              <li>Attention narrows to the perceived threat</li>
            </ol>
            <p>
              This is the fight-or-flight response &mdash; evolved for physical danger, triggered by psychological threat in modern anxiety disorders. The physical symptoms of anxiety (racing heart, shallow breathing, muscle tension) are this system activating &mdash; uncomfortable but not dangerous.
            </p>
            <p>
              Recovery from anxiety involves activating the <strong>parasympathetic nervous system</strong> &mdash; the &quot;rest and digest&quot; counterpart. Slow diaphragmatic breathing is one of the most direct ways to trigger parasympathetic activation, which is why breathing exercises are standard in anxiety treatment.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Anxiety and co-occurring conditions</h2>
            <p>Anxiety disorders rarely occur in isolation:</p>
            <ul>
              <li><strong>Major depression</strong> co-occurs in approximately <strong>50&ndash;60%</strong> of anxiety disorder cases &mdash; the combination is particularly impairing and increases suicide risk</li>
              <li><strong>Other anxiety disorders</strong> &mdash; having one anxiety disorder significantly increases risk for others</li>
              <li><strong>Substance use</strong> &mdash; alcohol and cannabis are commonly used for self-regulation of anxiety; both worsen anxiety over time, particularly in the rebound period after use</li>
              <li><strong>ADHD</strong> &mdash; the overlap is substantial; ADHD-driven difficulty meeting obligations produces significant anxiety</li>
              <li><strong>Medical conditions</strong> &mdash; hyperthyroidism, cardiac arrhythmias, and other medical conditions can produce anxiety-like symptoms and should be ruled out</li>
            </ul>
            <p>
              If depression symptoms are present alongside anxiety, the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> gives a structured picture of that dimension alongside the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link>.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 — Treatment: Psychotherapy */}
          <section>
            <h2>Evidence-based treatments for anxiety</h2>

            <h3>Psychotherapy</h3>
            <p>
              <strong>Cognitive Behavioral Therapy (CBT):</strong> The most extensively researched treatment for anxiety disorders. CBT targets both the cognitive patterns (catastrophic thinking, probability overestimation) and behavioral patterns (avoidance) that maintain anxiety. Meta-analytic effect sizes for CBT across anxiety disorders range from 0.8 to 1.3 &mdash; large by any standard (Hofmann &amp; Smits, 2008).
            </p>
            <p>
              <strong>Exposure therapy:</strong> The behavioral core of anxiety treatment &mdash; systematic, graduated confrontation with feared situations or stimuli, which allows the anxiety response to extinguish through habituation. Works for specific phobias, social anxiety, panic disorder, and OCD (in the form of ERP specifically).
            </p>
            <p>
              <strong>Acceptance and Commitment Therapy (ACT):</strong> Rather than challenging anxious thoughts directly, ACT focuses on reducing the struggle against anxious experience and increasing engagement with valued activities despite anxiety. Growing evidence base, particularly for GAD.
            </p>
            <p>
              <strong>Mindfulness-Based Interventions:</strong> Mindfulness-Based Stress Reduction (MBSR) and Mindfulness-Based Cognitive Therapy (MBCT) have evidence for anxiety and depression prevention of recurrence.
            </p>

            <h3>Medication</h3>
            <p>
              <strong>SSRIs and SNRIs:</strong> First-line pharmacological treatment for most anxiety disorders. Work on the serotonin system; take 2&ndash;6 weeks for meaningful effect. Do not cause dependence with normal use.
            </p>
            <p>
              <strong>Buspirone:</strong> Effective for GAD specifically; non-addictive; takes several weeks to work.
            </p>
            <p>
              <strong>Benzodiazepines (Xanax, Ativan, Klonopin):</strong> Fast-acting and effective for acute anxiety &mdash; but carry significant risks of tolerance, dependence, and withdrawal with regular use. Not recommended as a long-term treatment for anxiety disorders. Particularly problematic for people with co-occurring substance use history.
            </p>
            <p>
              <strong>Beta-blockers (propranolol):</strong> Used for performance anxiety (public speaking, performance) specifically &mdash; reduce physiological symptoms without affecting mental state.
            </p>
          </section>

          {/* Section 7 — Lifestyle + When to seek help */}
          <section>
            <h3>Lifestyle</h3>
            <ul>
              <li><strong>Exercise:</strong> Consistent aerobic exercise produces robust reductions in anxiety comparable to medication for mild-to-moderate presentations (Stubbs et al., 2017)</li>
              <li><strong>Caffeine reduction:</strong> Caffeine directly activates the sympathetic nervous system and worsens anxiety symptoms, particularly in those predisposed</li>
              <li><strong>Alcohol:</strong> Short-term anxiolytic; worsens anxiety in the rebound period; long-term use worsens anxiety disorders</li>
              <li><strong>Sleep:</strong> Bidirectional relationship; poor sleep worsens anxiety; treating insomnia reduces anxiety</li>
              <li><strong>Diaphragmatic breathing:</strong> 4-7-8 breathing, box breathing, and similar techniques directly activate the parasympathetic system</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* When to seek help */}
          <section>
            <h2>When to seek help</h2>
            <p>Seek professional support if:</p>
            <ul>
              <li>Anxiety is affecting your work, relationships, or ability to do things you want to do</li>
              <li>You are avoiding situations because of anxiety</li>
              <li>Physical symptoms of anxiety are frequent or severe</li>
              <li>You are using alcohol, cannabis, or other substances to manage anxiety</li>
              <li>Anxiety has been persisting for months rather than resolving</li>
            </ul>
            <p>
              The <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> is a good starting point &mdash; it gives you a structured, validated snapshot to bring to any clinical conversation.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. If you are experiencing anxiety symptoms that are affecting your life, please consult a qualified healthcare professional.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Want to check where your anxiety falls?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Each screening takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Check</Link>
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
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
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated anxiety symptom screening</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
              <Link href="/spin-social-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">SPIN Social Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Social Phobia Inventory screening tool</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-is-generalized-anxiety-disorder" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Is Generalized Anxiety Disorder (GAD)?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Deep dive into GAD symptoms, causes, and treatments</p>
              </Link>
              <Link href="/blog/depression-vs-anxiety" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression vs. Anxiety: What&apos;s the Difference?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding how depression and anxiety overlap and differ</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

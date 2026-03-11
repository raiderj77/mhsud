import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/anxiety-vs-panic-attacks`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "anxiety-vs-panic-attacks")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/anxiety-vs-panic-attacks",
  title: "Anxiety vs. Panic Attacks: What\u2019s the Difference?",
  description:
    "Anxiety and panic attacks feel different and require different responses. Learn how to tell them apart, what causes each, and what to do when they happen.",
  keywords: [
    "anxiety vs panic attack",
    "difference between anxiety and panic attack",
    "what is a panic attack",
    "panic attack symptoms",
    "anxiety attack vs panic attack",
    "how to tell if you're having a panic attack",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can a panic attack actually hurt you?",
    answer:
      "No. Despite how terrifying they feel, panic attacks are not medically dangerous. The heart rate elevation, breathlessness, and chest tightness are driven by adrenaline \u2014 the same system that activates during vigorous exercise. They do not cause heart attacks, fainting, or other physical harm. The danger feels real because the nervous system is responding as though there is genuine threat, but there isn\u2019t.",
  },
  {
    question: "How do I know if I\u2019m having a panic attack or a heart attack?",
    answer:
      "Both can involve chest tightness, racing heart, breathlessness, and fear. Cardiac emergencies tend to involve persistent chest pressure (not just tightness), pain radiating to the arm, jaw, or back, and symptoms that worsen progressively rather than peaking and subsiding within minutes. If you are uncertain \u2014 especially if you have cardiac risk factors \u2014 seek medical attention. Misidentifying a panic attack as a heart attack is far preferable to the reverse.",
  },
  {
    question: "Do panic attacks get worse over time if untreated?",
    answer:
      "Panic attacks themselves don\u2019t necessarily worsen over time, but the behavioral consequences often do. Anticipatory anxiety \u2014 the fear of future attacks \u2014 tends to expand, and avoidance behaviors accumulate. The quality-of-life impact typically grows without treatment. Early CBT intervention breaks this trajectory effectively.",
  },
  {
    question: "Can panic attacks happen during sleep?",
    answer:
      "Yes. Nocturnal panic attacks wake a person from sleep \u2014 usually in non-REM sleep \u2014 with the full physiological signature of a panic attack. They are particularly disorienting because there is no obvious trigger. They respond to the same treatments as daytime panic attacks.",
  },
];

export default function AnxietyVsPanicAttacksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Anxiety vs. Panic Attacks: What\u2019s the Difference?", description: "Anxiety and panic attacks feel different and require different responses. Learn how to tell them apart, what causes each, and what to do when they happen.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Anxiety vs. Panic Attacks", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">14 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Anxiety vs. Panic Attacks: What&rsquo;s the Difference?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Anxiety and panic attacks are related but distinct experiences. Anxiety is a sustained state of worry, tension, and apprehension &mdash; it builds gradually and is usually connected to an identifiable concern. A panic attack is a sudden, intense surge of physiological fear &mdash; it peaks within minutes, is often unexpected, and can occur without any obvious trigger. Understanding the difference matters because they feel different, they&rsquo;re driven by different mechanisms, and the most effective responses differ too.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>The Key Differences at a Glance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Feature</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Anxiety</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">Panic Attack</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4 font-medium">Onset</td>
                    <td className="py-2 pr-4">Gradual buildup</td>
                    <td className="py-2">Sudden, peaks within 10 minutes</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4 font-medium">Duration</td>
                    <td className="py-2 pr-4">Sustained &mdash; hours or longer</td>
                    <td className="py-2">Typically 5&ndash;20 minutes; resolves</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4 font-medium">Trigger</td>
                    <td className="py-2 pr-4">Usually identifiable worry or situation</td>
                    <td className="py-2">Often unexpected, no obvious trigger</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4 font-medium">Primary experience</td>
                    <td className="py-2 pr-4">Mental &mdash; worry, dread, tension</td>
                    <td className="py-2">Physical &mdash; heart racing, breathlessness, terror</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4 font-medium">Sense of control</td>
                    <td className="py-2 pr-4">Reduced but present</td>
                    <td className="py-2">Can feel completely out of control</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4 font-medium">After it ends</td>
                    <td className="py-2 pr-4">Continues at lower level</td>
                    <td className="py-2">Exhaustion; relatively rapid resolution</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Fear of dying</td>
                    <td className="py-2 pr-4">Uncommon</td>
                    <td className="py-2">Common during peak</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2>What Anxiety Feels Like</h2>
            <p>Anxiety is the body&rsquo;s sustained alert response &mdash; the sense that something bad might happen, held continuously across time. It has both cognitive and physical components.</p>
            <p><strong>Cognitive features of anxiety:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Worry &mdash; persistent, difficult-to-interrupt thoughts about possible negative outcomes</li>
              <li>Anticipatory dread &mdash; a generalized sense that things will go wrong</li>
              <li>Difficulty concentrating on anything except the source of worry</li>
              <li>Catastrophizing &mdash; the mind automatically generates worst-case scenarios</li>
              <li>Rumination &mdash; looping the same concerns repeatedly without resolution</li>
            </ul>
            <p><strong>Physical features of anxiety:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Muscle tension, often in the shoulders, neck, or jaw</li>
              <li>Fatigue &mdash; anxiety is physically exhausting to sustain</li>
              <li>Restlessness, difficulty sitting still</li>
              <li>Sleep disruption &mdash; difficulty falling asleep, staying asleep</li>
              <li>Gastrointestinal symptoms &mdash; nausea, stomach tightness, loose bowels</li>
              <li>Headaches</li>
              <li>Shallow breathing</li>
            </ul>
            <p>
              Anxiety is a state you&rsquo;re in for an extended period &mdash; it fluctuates in intensity but doesn&rsquo;t peak sharply and then resolve quickly the way a panic attack does.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What a Panic Attack Feels Like</h2>
            <p>
              A panic attack is a sudden, intense surge of terror with prominent physical symptoms, peaking within 10 minutes. The DSM-5 defines a panic attack as a discrete period of intense fear or discomfort reaching a peak within minutes, during which four or more of the following occur:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Racing or pounding heart (palpitations)</li>
              <li>Sweating</li>
              <li>Trembling or shaking</li>
              <li>Shortness of breath or feeling smothered</li>
              <li>Feeling of choking</li>
              <li>Chest pain or discomfort</li>
              <li>Nausea or stomach distress</li>
              <li>Dizziness, unsteadiness, lightheadedness, or faintness</li>
              <li>Chills or hot flashes</li>
              <li>Numbness or tingling sensations</li>
              <li>Feelings of unreality or detachment from yourself (derealization or depersonalization)</li>
              <li>Fear of losing control or &ldquo;going crazy&rdquo;</li>
              <li>Fear of dying</li>
            </ol>
            <p>
              The physical intensity is the hallmark. Many people experiencing their first panic attack believe they are having a heart attack or dying. The chest tightness, racing heart, and breathlessness are physiologically real &mdash; the sympathetic nervous system activating at full intensity &mdash; even though there is no actual cardiac emergency.
            </p>
            <p>
              <strong>After a panic attack:</strong> A period of exhaustion typically follows. The adrenaline surge that drove the attack takes time to metabolize. Most people feel drained, shaky, and sometimes embarrassed for an hour or more after.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>Expected vs. Unexpected Panic Attacks</h2>
            <p>The DSM-5 distinguishes two types of panic attacks based on context:</p>
            <p>
              <strong>Expected (cued) panic attacks:</strong> Occur in response to an identifiable trigger &mdash; a specific feared object or situation. Someone with a dog phobia who encounters a dog and has a panic attack is having an expected panic attack.
            </p>
            <p>
              <strong>Unexpected (uncued) panic attacks:</strong> Occur without an apparent trigger &mdash; seemingly out of nowhere, sometimes during sleep, not associated with any obvious external cue. Unexpected panic attacks are the defining feature of panic disorder.
            </p>
            <p>
              Most people with anxiety experience both types. Unexpected panic attacks are particularly distressing because they can&rsquo;t be attributed to a situation &mdash; which creates anticipatory anxiety about when the next one will strike.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>&ldquo;Anxiety Attack&rdquo; &mdash; Is That a Thing?</h2>
            <p>
              &ldquo;Anxiety attack&rdquo; is a colloquial term not recognized as a clinical diagnosis. It&rsquo;s used in different ways by different people:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Some use it interchangeably with &ldquo;panic attack&rdquo;</li>
              <li>Some use it to describe a more severe anxiety episode &mdash; more intense than baseline anxiety but not as acute as a panic attack</li>
              <li>Some use it to describe anxiety specifically triggered by an identifiable stressor</li>
            </ul>
            <p>
              Clinically, the relevant distinction is between generalized anxiety (prolonged, diffuse apprehension) and panic attacks (acute, intense, time-limited physiological surges). If you&rsquo;ve been using &ldquo;anxiety attack&rdquo; to describe what happens to you, consider whether the description of a panic attack &mdash; sudden onset, physical intensity, peaks within minutes &mdash; fits better.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What Causes Panic Attacks</h2>
            <p>
              Panic attacks originate in the brain&rsquo;s threat-detection system &mdash; specifically the amygdala&rsquo;s &ldquo;false alarm&rdquo; activation of the fight-or-flight response in the absence of actual danger.
            </p>
            <p>Several factors can trigger or predispose:</p>
            <p>
              <strong>Physiological triggers:</strong> Caffeine, stimulants, sleep deprivation, hormonal changes, hypoglycemia, and some medications can all trigger panic attacks in predisposed individuals. Exercise-induced cardiac sensations (racing heart, breathlessness) can trigger panic attacks in people already primed to fear those sensations.
            </p>
            <p>
              <strong>Psychological triggers:</strong> Stress, anxiety, and trauma can lower the threshold for amygdala activation. People with PTSD are particularly prone to panic attacks triggered by trauma reminders.
            </p>
            <p>
              <strong>Interoceptive sensitivity:</strong> People prone to panic attacks often have heightened sensitivity to internal bodily sensations &mdash; noticing their own heartbeat, breathing, or dizziness more acutely than average. A racing heart noticed during mild exercise can spiral into a panic attack through an escalating loop: notice sensation &rarr; interpret as dangerous &rarr; anxiety increases &rarr; sensation intensifies &rarr; more fear.
            </p>
            <p>
              <strong>The catastrophic misinterpretation cycle:</strong> Clark&rsquo;s (1986) cognitive model of panic identifies catastrophic misinterpretation of bodily sensations as the maintaining mechanism &mdash; a racing heart is interpreted as a heart attack, which increases anxiety, which makes the heart race faster, which confirms the fear. Breaking this cycle is the target of treatment.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>Panic Disorder: When Panic Attacks Become a Pattern</h2>
            <p>A single panic attack is not a disorder. <strong>Panic disorder</strong> is diagnosed when:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Recurrent unexpected panic attacks occur</li>
              <li>At least one attack is followed by one month or more of:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Persistent worry about future attacks (&ldquo;anticipatory anxiety&rdquo;)</li>
                  <li>Significant behavioral change to avoid situations associated with attacks (such as avoiding exercise because it produces a racing heart)</li>
                </ul>
              </li>
            </ol>
            <p>
              The behavioral change driven by anticipatory anxiety is often what causes the most impairment. People with panic disorder may avoid exercise, caffeine, crowded places, or driving &mdash; any situation associated with the physiological sensations of panic &mdash; in ways that significantly restrict daily life.
            </p>
            <p>
              If panic disorder progresses to avoidance of situations where escape would be difficult, <strong>agoraphobia</strong> may develop alongside it.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>What to Do During a Panic Attack</h2>
            <p>Panic attacks are not dangerous &mdash; though they feel intensely threatening. They always resolve. Knowing what to do during one reduces their intensity and duration.</p>
            <p>
              <strong>1. Recognize what&rsquo;s happening.</strong> Labeling the experience &mdash; &ldquo;this is a panic attack, not a heart attack&rdquo; &mdash; activates the prefrontal cortex and dampens amygdala reactivity. The thought &ldquo;I&rsquo;m dying&rdquo; and the thought &ldquo;this is a panic attack&rdquo; produce different physiological responses.
            </p>
            <p>
              <strong>2. Slow your breathing.</strong> Hyperventilation (rapid, shallow breathing) reduces CO2 levels and worsens panic symptoms &mdash; dizziness, tingling, breathlessness. Slow exhalation (breathe in for 4 counts, out for 6&ndash;8 counts) raises CO2 and activates the parasympathetic system.
            </p>
            <p>
              <strong>3. Don&rsquo;t flee.</strong> If the panic attack occurs in a specific situation, leaving reinforces the association between that situation and panic. Where possible, stay until the attack passes &mdash; this is the behavioral principle of exposure.
            </p>
            <p>
              <strong>4. Ride it out.</strong> Panic attacks always resolve. They peak within 10 minutes and are physiologically incapable of sustained escalation &mdash; the adrenaline metabolizes. Knowing the ceiling exists changes the experience.
            </p>
            <p>
              <strong>5. Avoid reassurance-seeking immediately after.</strong> Repeatedly checking that you&rsquo;re okay (pulse, symptoms) extends the focus on bodily sensations that maintains the cycle.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2>Treatment for Panic and Anxiety</h2>
            <p>
              <strong>Cognitive Behavioral Therapy (CBT):</strong> First-line treatment for both anxiety and panic disorder. For panic specifically, CBT addresses the catastrophic misinterpretation cycle through psychoeducation, cognitive restructuring, and interoceptive exposure (deliberately inducing mild panic sensations in a controlled way to break the fear-of-sensations pattern).
            </p>
            <p>
              <strong>Exposure therapy:</strong> For panic disorder with agoraphobia, graduated exposure to avoided situations is central. For anxiety, exposure to feared situations and outcomes reduces avoidance and habituates the anxiety response.
            </p>
            <p>
              <strong>Medication:</strong> SSRIs are first-line; SNRIs also effective. Benzodiazepines provide acute relief but are not recommended as long-term treatment. Beta-blockers reduce physiological symptoms for specific performance situations.
            </p>
            <p>
              <strong>Mindfulness-Based Approaches:</strong> Reduce the reactivity to internal sensations and thoughts that drives both anxiety and panic; particularly useful as maintenance and relapse prevention.
            </p>
            <p>
              If you&rsquo;ve been experiencing anxiety symptoms, the <Link href="/gad-7-anxiety-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">GAD-7</Link> is a validated starting point for understanding your current anxiety level. The <Link href="/phq-9-depression-test" className="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300">PHQ-9</Link> is worth taking alongside it &mdash; anxiety and depression frequently co-occur.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              This article is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment. If you are experiencing frequent panic attacks or anxiety that is significantly affecting your life, please consult a qualified mental health professional.
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
              Use our free, confidential screening tools to check your anxiety level.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/gad-7-anxiety-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">GAD-7 Anxiety Check</Link>
              <Link href="/phq-9-depression-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">PHQ-9 Depression Check</Link>
              <Link href="/dass-21-depression-anxiety-stress" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">DASS-21 Screening</Link>
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
                { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Screening" },
                { href: "/phq-9-depression-test", label: "PHQ-9 Depression Self-Check" },
                { href: "/dass-21-depression-anxiety-stress", label: "DASS-21 Screening" },
                { href: "/spin-social-anxiety-test", label: "SPIN Social Anxiety Test" },
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
                ["what-is-anxiety", "what-is-generalized-anxiety-disorder", "what-does-gad-7-score-mean", "anxiety-coping-strategies"].includes(p.slug)
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

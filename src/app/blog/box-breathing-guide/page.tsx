import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/box-breathing-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "box-breathing-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/box-breathing-guide",
  title: "Box Breathing: A Simple Technique for Anxiety, Stress, and Panic",
  description:
    "Box breathing (4-4-4-4) activates your parasympathetic nervous system to reduce anxiety, stress, and panic. Learn the technique, the science behind it, and when to use it.",
  keywords: [
    "box breathing",
    "box breathing technique",
    "4-4-4-4 breathing",
    "breathing exercises for anxiety",
    "box breathing for panic",
    "tactical breathing",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How does box breathing reduce anxiety?",
    answer:
      "Box breathing activates the parasympathetic nervous system through the vagus nerve by slowing each breathing cycle. This shifts your body from fight-or-flight to rest-and-digest dominance, reducing cortisol, lowering heart rate and blood pressure, and increasing heart rate variability. The counting component also redirects attention away from anxious thoughts.",
  },
  {
    question: "How many rounds of box breathing should I do?",
    answer:
      "Most people notice a calming effect within 3&ndash;5 rounds (approximately 2&ndash;3 minutes). For acute anxiety or panic, 5&ndash;10 rounds is recommended. There is no upper limit. Navy SEALs reportedly practice for 5&ndash;10 minutes before high-stress situations. Starting with 4 rounds and adjusting based on how you feel is a reasonable approach.",
  },
  {
    question: "Can box breathing help with panic attacks?",
    answer:
      "Yes. Box breathing can help during a panic attack, though it works best when practiced regularly beforehand. During a panic attack, the breath-holding phases may feel uncomfortable. If so, simplify to slow inhale (4 seconds) and extended exhale (6&ndash;8 seconds) without holds. The key mechanism &mdash; slowing the breathing rate &mdash; still activates the parasympathetic response.",
  },
  {
    question: "Is box breathing the same as 4-7-8 breathing?",
    answer:
      "No. Box breathing uses equal intervals (4-4-4-4): inhale 4, hold 4, exhale 4, hold 4. The 4-7-8 technique uses asymmetric intervals: inhale 4, hold 7, exhale 8. Both slow the breathing rate to activate the parasympathetic nervous system. The 4-7-8 method emphasizes extended exhale for sleep, while box breathing&apos;s equal structure is easier to learn and remember.",
  },
];

export default function BoxBreathingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Box Breathing: A Simple Technique for Anxiety, Stress, and Panic", description: "Learn the box breathing technique (4-4-4-4), the science behind how it calms anxiety, and when to use it for stress, panic, and sleep.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Box Breathing Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Box Breathing: A Simple Technique for Anxiety, Stress, and Panic
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Box breathing is a controlled breathing pattern that uses four equal phases &mdash; inhale for 4 seconds, hold for 4, exhale for 4, hold for 4 &mdash; to activate your body&apos;s natural calming response. Used by Navy SEALs under the name &quot;tactical breathing,&quot; it is one of the simplest and most effective techniques for reducing anxiety, managing stress, and interrupting panic in real time. You can learn it in minutes and practice it anywhere.
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
            <h2>What is box breathing?</h2>
            <p>
              Box breathing is a controlled breathing technique that uses a four-phase pattern, each phase lasting the same number of seconds (typically 4). The four phases form a &quot;box&quot; or square pattern: breathe in, hold, breathe out, hold. Each side of the box is equal in length.
            </p>
            <p>
              The technique has been used for decades in military and first-responder training under the name &quot;tactical breathing&quot; or &quot;combat breathing.&quot; Navy SEALs and Special Operations personnel use it before and during high-stress operations to maintain composure and decision-making clarity. It has since been adopted widely in clinical psychology, corporate wellness, and sports performance.
            </p>
            <p>
              What makes box breathing especially practical is its simplicity. Unlike meditation practices that require training, quiet environments, or extended time, box breathing can be done in 2&ndash;3 minutes, in any setting, without anyone around you noticing. The <Link href="/box-breathing-exercise" className="text-sage-600 dark:text-sage-400 underline">box breathing exercise</Link> provides a visual guide to help you maintain the timing.
            </p>
          </section>

          <section>
            <h2>The science: how slow breathing calms the nervous system</h2>
            <p>
              Box breathing works by directly engaging the parasympathetic nervous system &mdash; the branch of your autonomic nervous system responsible for &quot;rest and digest&quot; functions. The primary pathway is the vagus nerve, which runs from the brainstem to the abdomen and acts as a brake on the stress response.
            </p>
            <p>
              When you breathe slowly and rhythmically, you stimulate vagal afferent fibers in the lungs and diaphragm. This sends signals to the brainstem that reduce sympathetic (fight-or-flight) activation. Heart rate slows, blood pressure decreases, and cortisol production is dampened. A 2017 study by Ma et al. published in <em>Frontiers in Psychology</em> found that diaphragmatic breathing significantly reduced cortisol levels and increased sustained attention in healthy adults.
            </p>
            <p>
              The hold phases in box breathing add an additional benefit. Breath retention increases carbon dioxide levels slightly, which stimulates the vagus nerve more strongly and promotes vasodilation (widening of blood vessels). The overall effect is a measurable increase in heart rate variability (HRV) &mdash; a key marker of stress resilience and emotional regulation capacity.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How to practice box breathing: the 4-4-4-4 method</h2>
            <p>
              Here is the step-by-step process. You can practice sitting, standing, or lying down.
            </p>
            <p>
              <strong>Step 1: Inhale (4 seconds).</strong> Breathe in slowly through your nose for a count of 4. Focus on filling your lungs from the bottom up &mdash; your belly should expand before your chest rises. This is diaphragmatic breathing, which maximizes vagal stimulation.
            </p>
            <p>
              <strong>Step 2: Hold (4 seconds).</strong> Gently hold your breath for a count of 4. Keep your body relaxed &mdash; do not clamp your throat or tense your shoulders. This pause allows oxygen exchange in the alveoli and mildly increases CO2, which further stimulates the vagus nerve.
            </p>
            <p>
              <strong>Step 3: Exhale (4 seconds).</strong> Release the breath slowly and evenly through your mouth or nose for a count of 4. A controlled exhale is the most important phase &mdash; it is during exhalation that parasympathetic activation is strongest.
            </p>
            <p>
              <strong>Step 4: Hold (4 seconds).</strong> After exhaling completely, hold for another count of 4 before beginning the next cycle. This second hold completes the &quot;box&quot; and gives your system a moment of stillness before the next inhale.
            </p>
            <p>
              Repeat for 3&ndash;5 rounds to start. The <Link href="/box-breathing-exercise" className="text-sage-600 dark:text-sage-400 underline">guided box breathing exercise</Link> provides visual pacing so you do not need to count manually, which makes it easier to focus on the sensations rather than the numbers.
            </p>
          </section>

          <section>
            <h2>When to use box breathing</h2>
            <p>
              Box breathing is versatile enough for both planned and reactive use. Here are the most common and effective applications:
            </p>
            <ul>
              <li><strong>Before stressful situations:</strong> Practice 5&ndash;10 rounds before a presentation, difficult conversation, medical appointment, or job interview. Pre-activating the parasympathetic system builds a buffer against the anticipated stress response.</li>
              <li><strong>During a panic or anxiety spike:</strong> When anxiety surges unexpectedly, box breathing provides something concrete to do immediately. The counting requirement redirects attention from catastrophic thoughts to a physical task.</li>
              <li><strong>For sleep:</strong> Practice in bed to transition your nervous system from daytime arousal to sleep-ready calm. Some people find 3&ndash;4 rounds sufficient to fall asleep faster.</li>
              <li><strong>After triggering events:</strong> Following a conflict, upsetting news, or trauma reminder, box breathing helps downregulate the stress response before it escalates into a sustained anxiety state.</li>
              <li><strong>As a daily practice:</strong> Regular practice (even when not anxious) increases your baseline HRV and stress resilience over time. Many practitioners do 5 minutes each morning.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Box breathing vs. other breathing techniques</h2>
            <p>
              Several controlled breathing techniques are used in clinical practice. Understanding the differences helps you choose the right one for your situation:
            </p>
            <ul>
              <li><strong>Box breathing (4-4-4-4):</strong> Equal-phase pattern. Best for general stress reduction, pre-event calm, and situations requiring clear thinking. The symmetry makes it easy to learn and remember.</li>
              <li><strong>4-7-8 breathing:</strong> Inhale 4 seconds, hold 7, exhale 8. The extended hold and exhale create a stronger parasympathetic response, making it particularly effective for sleep and deep relaxation. However, the longer hold can feel uncomfortable for people with respiratory issues or during acute panic.</li>
              <li><strong>Diaphragmatic breathing:</strong> Slow belly breathing without specific counts. More accessible for beginners but less structured, which can make it harder to maintain during acute anxiety when you need something concrete to focus on.</li>
              <li><strong>Physiological sigh:</strong> A double inhale followed by a long exhale, studied by Andrew Huberman at Stanford. Rapidly reduces arousal in a single breath cycle. Useful when you need immediate calm but do not have time for multiple rounds of box breathing.</li>
            </ul>
            <p>
              All controlled breathing techniques work through similar mechanisms. Box breathing&apos;s advantage is its simplicity, memorability, and adaptability across different situations and stress levels.
            </p>
          </section>

          <section>
            <h2>Pairing box breathing with other anxiety tools</h2>
            <p>
              Box breathing is powerful on its own, but it becomes even more effective when combined with complementary techniques:
            </p>
            <ul>
              <li><strong>Grounding:</strong> After calming your nervous system with box breathing, use the <Link href="/five-senses-grounding" className="text-sage-600 dark:text-sage-400 underline">5-4-3-2-1 grounding exercise</Link> to anchor yourself in the present moment. The combination addresses both physiological arousal and cognitive dissociation.</li>
              <li><strong>Anxiety screening:</strong> If you find yourself needing box breathing frequently, the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 anxiety screening</Link> can help you assess whether your anxiety levels warrant professional support.</li>
              <li><strong>Urge surfing:</strong> For substance cravings, start with box breathing to calm the body, then transition to <Link href="/urge-surfing-timer" className="text-sage-600 dark:text-sage-400 underline">urge surfing</Link> to observe the craving without acting on it.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>When to seek professional support</h2>
            <p>
              Box breathing is an excellent self-regulation tool, but it is not a substitute for professional care when anxiety is persistent or severe. Consider reaching out to a therapist or healthcare provider if:
            </p>
            <ul>
              <li>You experience panic attacks more than occasionally</li>
              <li>Anxiety is interfering with work, relationships, or daily functioning</li>
              <li>You are avoiding situations or places due to fear or anxiety</li>
              <li>Physical symptoms like chest tightness, dizziness, or shortness of breath are frequent</li>
              <li>Self-management tools alone are not providing sufficient relief</li>
            </ul>
            <p>
              A qualified mental health professional can determine whether your symptoms may indicate an anxiety disorder and develop a treatment plan that may include CBT, medication, or both. SAMHSA&apos;s National Helpline (1-800-662-4357) provides free, confidential referrals to local treatment facilities and support groups.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to try box breathing?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. The guided exercise provides visual pacing for each phase.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/box-breathing-exercise" className="btn-primary text-sm">Start Box Breathing</Link>
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
              <Link href="/box-breathing-exercise" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Box Breathing Exercise</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided 4-4-4-4 breathing with visual pacing</p>
              </Link>
              <Link href="/five-senses-grounding" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">5-4-3-2-1 Grounding</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Sensory grounding for anxiety and dissociation</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Assess your anxiety symptom severity</p>
              </Link>
              <Link href="/urge-surfing-timer" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Urge Surfing Timer</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided timer to ride out cravings</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/grounding-techniques-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Grounding Techniques: The 5-4-3-2-1 Method</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How sensory grounding calms anxiety and dissociation</p>
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

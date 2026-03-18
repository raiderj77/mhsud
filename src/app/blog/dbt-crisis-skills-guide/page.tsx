import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/dbt-crisis-skills-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "dbt-crisis-skills-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/dbt-crisis-skills-guide",
  title: "DBT Crisis Survival Skills: What to Do When You Can\u2019t Think Straight",
  description:
    "DBT crisis survival skills like TIPP and ACCEPTS help you get through acute distress without making things worse. Learn the key techniques and how to use them.",
  keywords: [
    "DBT crisis skills",
    "distress tolerance skills",
    "TIPP skills DBT",
    "crisis survival skills",
    "DBT for crisis",
    "DBT distress tolerance",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is TIPP in DBT?",
    answer:
      "TIPP stands for Temperature, Intense exercise, Paced breathing, and Progressive relaxation. These four physiological interventions bring down extreme emotional arousal quickly. Temperature uses cold water on the face to trigger the dive reflex. Intense exercise burns off adrenaline. Paced breathing activates the parasympathetic nervous system. Progressive relaxation releases muscle tension.",
  },
  {
    question: "Are DBT crisis skills only for people with BPD?",
    answer:
      "No. While DBT was originally developed for borderline personality disorder, crisis survival skills are now used across depression, anxiety, PTSD, substance use disorders, and eating disorders. Anyone who experiences intense, overwhelming emotions can benefit from these skills. They are taught in many general therapy settings, not just specialized DBT programs.",
  },
  {
    question: "What is the difference between crisis skills and coping skills?",
    answer:
      "Crisis skills target acute, high-intensity distress when emotions are so overwhelming that clear thinking is impaired. They are short-term survival strategies, not long-term solutions. Coping skills are broader, covering ongoing stress management, emotional regulation, and daily wellness. Crisis skills get you through the moment; coping skills build a more sustainable relationship with your emotions.",
  },
  {
    question: "Can I learn DBT skills without a therapist?",
    answer:
      "You can learn and practice individual DBT skills on your own through books, workbooks, and guided tools. Many people find self-study helpful for distress tolerance and mindfulness. However, the full DBT program \u2014 individual therapy, skills group, phone coaching, and therapist consultation \u2014 is most effective with professional guidance for complex conditions. Self-study is a reasonable starting point.",
  },
];

export default function DbtCrisisSkillsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "DBT Crisis Survival Skills: What to Do When You Can\u2019t Think Straight", description: "Learn DBT crisis survival skills including TIPP, ACCEPTS, and self-soothe with senses. These distress tolerance techniques help you survive acute emotional crises.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "DBT Crisis Skills Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            DBT Crisis Survival Skills: What to Do When You Can&apos;t Think Straight
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            There are moments when emotions become so intense that rational thinking shuts down. You cannot problem-solve, you cannot see the bigger picture, and every option feels terrible. DBT crisis survival skills &mdash; developed by Marsha Linehan as part of Dialectical Behavior Therapy &mdash; are designed specifically for these moments. They are not long-term solutions. They are bridge strategies to help you survive acute distress without making things worse.
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
              This article is for informational and educational purposes only and does not constitute medical or mental health advice. Always consult a qualified healthcare professional for personalized guidance on mental health concerns. If you are in immediate danger, call 911 or go to your nearest emergency room.
            </p>
          </div>

          <section>
            <h2>What are DBT crisis survival skills?</h2>
            <p>
              Crisis survival skills are one category within the distress tolerance module of Dialectical Behavior Therapy (DBT). DBT, created by psychologist Marsha Linehan at the University of Washington, was originally developed for individuals with borderline personality disorder but has since been validated for a wide range of conditions including depression, anxiety, PTSD, eating disorders, and substance use disorders.
            </p>
            <p>
              DBT includes four modules: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness. Crisis survival skills fall under distress tolerance &mdash; the module focused on getting through painful moments without resorting to destructive behaviors. The fundamental philosophy is: you cannot always change the situation, but you can survive it without making it worse.
            </p>
            <p>
              The <Link href="/dbt-crisis-skills" className="text-sage-600 dark:text-sage-400 underline">DBT crisis skills tool</Link> provides guided access to each skill category so you can quickly find the right technique when you need it most.
            </p>
          </section>

          <section>
            <h2>TIPP: the fastest way to change your emotional state</h2>
            <p>
              TIPP is the go-to skill when your emotional intensity is at its peak &mdash; a 9 or 10 out of 10. Each letter represents a physiological intervention that works within minutes:
            </p>
            <p>
              <strong>T &mdash; Temperature.</strong> Submerge your face in cold water or hold ice packs to your cheeks and forehead for 30 seconds. This triggers the mammalian dive reflex, which automatically slows heart rate and redirects blood flow to vital organs. It is one of the fastest ways to reduce extreme emotional arousal. If you cannot submerge your face, holding ice cubes in your hands or placing a cold pack on the back of your neck achieves a similar effect.
            </p>
            <p>
              <strong>I &mdash; Intense exercise.</strong> Engage in vigorous physical activity for 10&ndash;20 minutes. Running, jumping jacks, fast walking, or even doing burpees in your living room. Intense exercise burns off the adrenaline and cortisol flooding your system during acute distress, and releases endorphins that naturally shift your mood.
            </p>
            <p>
              <strong>P &mdash; Paced breathing.</strong> Slow your breathing rate to 5&ndash;6 breaths per minute. Breathe in for 4 seconds and out for 6&ndash;8 seconds, making the exhale longer than the inhale. This activates the parasympathetic nervous system via the vagus nerve, directly counteracting the fight-or-flight response. <Link href="/box-breathing-exercise" className="text-sage-600 dark:text-sage-400 underline">Box breathing</Link> is one effective pacing method.
            </p>
            <p>
              <strong>P &mdash; Progressive (Paired muscle) relaxation.</strong> Systematically tense and release muscle groups throughout your body, starting from your feet and working upward. Tense each muscle group for 5 seconds, then release for 10 seconds. This technique directly addresses the muscle tension that accompanies emotional distress.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>ACCEPTS: distraction that works</h2>
            <p>
              When emotions are intense but not at a crisis peak (a 6&ndash;8 out of 10), ACCEPTS provides structured distraction strategies. The goal is not to avoid your feelings permanently &mdash; it is to create enough distance to prevent impulsive actions while the emotional wave passes. Each letter represents a distraction category:
            </p>
            <ul>
              <li><strong>Activities:</strong> Engage in absorbing tasks &mdash; cleaning, cooking, exercising, playing a game, doing a puzzle. Activities that require focus occupy the cognitive resources that would otherwise feed rumination.</li>
              <li><strong>Contributing:</strong> Do something for someone else. Send an encouraging text, volunteer, help a neighbor, or donate. Contributing shifts attention outward and activates reward circuits associated with prosocial behavior.</li>
              <li><strong>Comparisons:</strong> Compare your current situation to times when you have coped with something difficult before, or to people who are facing greater hardship. This is not about minimizing your pain &mdash; it is about accessing perspective when perspective feels impossible.</li>
              <li><strong>Emotions:</strong> Generate a different emotion intentionally. Watch a funny video, listen to upbeat music, read something inspiring, or look at photos of good memories. Emotions are not permanent states &mdash; you can shift them with deliberate input.</li>
              <li><strong>Pushing away:</strong> Mentally push the distressing situation away temporarily. Visualize putting the problem in a box and placing it on a shelf. You are not denying it exists &mdash; you are choosing to return to it when you are in a better emotional state to handle it.</li>
              <li><strong>Thoughts:</strong> Replace distressing thoughts with neutral mental tasks. Count backward from 100 by 7s, recite song lyrics, list state capitals, or describe a process step by step. Occupying working memory reduces rumination.</li>
              <li><strong>Sensations:</strong> Create strong physical sensations to interrupt the emotional experience. Hold ice, snap a rubber band on your wrist, take a cold shower, eat something with a strong flavor (sour candy, hot sauce). The <Link href="/five-senses-grounding" className="text-sage-600 dark:text-sage-400 underline">5-4-3-2-1 grounding exercise</Link> uses a related sensory approach.</li>
            </ul>
          </section>

          <section>
            <h2>Self-soothe with the five senses</h2>
            <p>
              Self-soothing is the practice of providing comfort to yourself through gentle, pleasant sensory experiences. It is the opposite of the intense sensory input used in crisis-level grounding &mdash; here, the goal is to calm and nurture rather than alert and redirect.
            </p>
            <ul>
              <li><strong>Vision:</strong> Look at beautiful images, nature, art, or anything visually pleasing. Watch a sunset, look at photos of loved ones, or light a candle and watch the flame.</li>
              <li><strong>Hearing:</strong> Listen to soothing music, nature sounds, rain, or a calming podcast. Avoid content that is emotionally activating.</li>
              <li><strong>Smell:</strong> Use scented candles, essential oils, fresh flowers, or bake something fragrant. Lavender and chamomile scents have been associated with reduced anxiety in research studies.</li>
              <li><strong>Taste:</strong> Have a warm cup of tea, a piece of chocolate, or a favorite comfort food. Eat slowly and mindfully, savoring each bite.</li>
              <li><strong>Touch:</strong> Wrap yourself in a soft blanket, take a warm bath or shower, pet an animal, or use a weighted blanket. Gentle pressure activates the parasympathetic nervous system.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>IMPROVE the moment</h2>
            <p>
              IMPROVE is a set of cognitive and behavioral strategies for making an unbearable moment more bearable. These skills work well when physical TIPP interventions have brought your arousal down enough to think more clearly:
            </p>
            <ul>
              <li><strong>Imagery:</strong> Visualize a safe, peaceful place in vivid detail. Imagine a positive outcome. Use mental rehearsal to see yourself getting through this.</li>
              <li><strong>Meaning:</strong> Find purpose or meaning in the suffering. This is not toxic positivity &mdash; it is recognizing that difficult experiences can lead to growth, empathy, or motivation for change.</li>
              <li><strong>Prayer or connection:</strong> Connect with a higher power, spiritual practice, or sense of something larger than yourself. For non-religious individuals, this can mean connecting with nature, community, or personal values.</li>
              <li><strong>Relaxation:</strong> Engage in deliberate relaxation &mdash; progressive muscle relaxation, gentle stretching, yoga, or slow breathing.</li>
              <li><strong>One thing in the moment:</strong> Focus entirely on the present task. Do not think about the past or future. Just be here, doing this one thing, right now.</li>
              <li><strong>Vacation:</strong> Take a brief mental or physical vacation. Step outside for 10 minutes, go for a walk, or simply sit somewhere different. Changing your physical environment can shift your emotional state.</li>
              <li><strong>Encouragement:</strong> Talk to yourself the way you would talk to a friend in crisis. &quot;You can get through this. This feeling is temporary. You have survived hard things before.&quot;</li>
            </ul>
          </section>

          <section>
            <h2>How crisis skills fit with other DBT modules</h2>
            <p>
              Crisis survival skills are designed for acute moments. They are not meant to be your only strategy. In the full DBT framework, they complement three other skill modules:
            </p>
            <ul>
              <li><strong>Mindfulness</strong> teaches present-moment awareness and non-judgmental observation of thoughts and emotions. It is the foundation for all other DBT skills.</li>
              <li><strong>Emotion regulation</strong> provides tools for understanding, labeling, and changing emotional responses over time. These are preventive skills that reduce the frequency of crises.</li>
              <li><strong>Interpersonal effectiveness</strong> teaches communication, boundary-setting, and relationship management skills that reduce interpersonally-triggered crises.</li>
            </ul>
            <p>
              Think of crisis skills as the emergency toolkit and the other modules as the maintenance program. The <Link href="/dbt-crisis-skills" className="text-sage-600 dark:text-sage-400 underline">DBT crisis skills tool</Link> provides quick guided access to the distress tolerance skills when you need them in the moment, while the other modules are best explored with a therapist or through a structured DBT skills workbook.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>When to seek professional support</h2>
            <p>
              Crisis survival skills are powerful self-management tools, but some situations require professional support beyond self-help:
            </p>
            <ul>
              <li>You are experiencing suicidal thoughts or urges to self-harm &mdash; call 988 or go to your nearest emergency room</li>
              <li>Emotional crises are happening frequently (multiple times per week)</li>
              <li>You are using substances to cope with distress</li>
              <li>Relationships are being seriously affected by emotional intensity</li>
              <li>You have a history of trauma that contributes to emotional overwhelm</li>
              <li>Self-help strategies are not sufficient to manage your symptoms</li>
            </ul>
            <p>
              A therapist trained in DBT can provide the full treatment program &mdash; including individual therapy, skills group, phone coaching, and consultation team &mdash; which has been shown in randomized controlled trials to be significantly more effective than the skills alone. If you also experience thoughts of self-harm, a <Link href="/safety-plan" className="text-sage-600 dark:text-sage-400 underline">safety plan</Link> can provide structured guidance for keeping yourself safe. SAMHSA&apos;s National Helpline (1-800-662-4357) provides free, confidential referrals.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Need a crisis skill right now?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. The tool guides you through TIPP, ACCEPTS, and more.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/dbt-crisis-skills" className="btn-primary text-sm">Open DBT Crisis Skills</Link>
              <Link href="/safety-plan" className="btn-primary text-sm">Create a Safety Plan</Link>
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
              <Link href="/dbt-crisis-skills" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DBT Crisis Skills</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided access to TIPP, ACCEPTS, and more</p>
              </Link>
              <Link href="/safety-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Safety Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Create your personal crisis safety plan</p>
              </Link>
              <Link href="/five-senses-grounding" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">5-4-3-2-1 Grounding</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Sensory grounding for anxiety and dissociation</p>
              </Link>
              <Link href="/box-breathing-exercise" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Box Breathing Exercise</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Calm your nervous system with 4-4-4-4 breathing</p>
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
              <Link href="/blog/safety-planning-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Safety Planning Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Step-by-step guide to creating your crisis plan</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

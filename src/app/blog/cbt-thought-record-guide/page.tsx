import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/cbt-thought-record-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "cbt-thought-record-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/cbt-thought-record-guide",
  title: "CBT Thought Records: How to Challenge Negative Thinking Patterns",
  description:
    "A thought record is a core CBT tool for identifying and challenging negative thinking. Learn the 7-column method and how to use it.",
  keywords: [
    "CBT thought record",
    "thought record worksheet",
    "cognitive behavioral therapy worksheet",
    "challenging negative thoughts",
    "thought diary CBT",
    "CBT techniques",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How often should I fill out a thought record?",
    answer:
      "Most CBT therapists recommend completing a thought record whenever you notice a strong negative emotion \u2014 especially in the early weeks of practice. This might mean one to three records per day. Over time, the process becomes more automatic and you may not need to write every one down. The goal is to internalize the skill of catching and challenging automatic thoughts so it becomes a mental habit.",
  },
  {
    question: "What is the difference between a thought record and a thought diary?",
    answer:
      "The terms are often used interchangeably, but a thought diary is usually a simpler format \u2014 recording situations, thoughts, and emotions without the structured challenge columns. A thought record (sometimes called a dysfunctional thought record) includes the full process: identifying evidence for and against the thought, generating an alternative, and re-rating the emotion. The thought record is the more complete and clinically effective version.",
  },
  {
    question: "Do thought records work for anxiety?",
    answer:
      "Yes. Thought records are highly effective for anxiety. Anxiety is driven by overestimation of threat and underestimation of coping ability \u2014 both of which are cognitive distortions that thought records are designed to address. Meta-analyses consistently show that CBT (which relies heavily on thought records) is the first-line evidence-based treatment for generalized anxiety disorder, social anxiety, panic disorder, and specific phobias.",
  },
  {
    question: "Can I do CBT on my own without a therapist?",
    answer:
      "Self-guided CBT (including thought records) can be helpful for mild to moderate symptoms. Research supports bibliotherapy (workbook-based CBT) for depression and anxiety. However, a therapist provides accountability, helps identify blind spots in your thinking, and can tailor techniques to your specific patterns. If your symptoms are moderate to severe, or if you have been struggling for more than a few weeks, working with a trained CBT therapist is recommended.",
  },
];

export default function CbtThoughtRecordGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "CBT Thought Records: How to Challenge Negative Thinking Patterns", description: "Learn the 7-column thought record method from CBT and how to use it to challenge negative automatic thoughts.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "CBT Thought Record Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            CBT Thought Records: How to Challenge Negative Thinking Patterns
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Negative thoughts feel like facts, but they are not. Cognitive Behavioral Therapy (CBT) is built on a powerful insight: your emotions are driven not by events themselves, but by how you interpret those events. The thought record is the foundational CBT tool for catching those automatic interpretations, examining them against evidence, and replacing them with more balanced perspectives.
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
              This article is for informational and educational purposes only and does not constitute medical or mental health advice. CBT thought records are a self-help tool, not a substitute for professional evaluation or therapy. If you are experiencing persistent depression or anxiety, consult a qualified mental health professional.
            </p>
          </div>

          <section>
            <h2>What is a thought record?</h2>
            <p>
              A thought record (also called a dysfunctional thought record or DTR) is a structured worksheet developed by psychiatrist Aaron Beck in the 1960s as a core component of Cognitive Behavioral Therapy. It is a systematic method for identifying, examining, and challenging the automatic negative thoughts that drive emotional distress.
            </p>
            <p>
              The premise is straightforward: when something upsetting happens, you do not react to the event itself &mdash; you react to what you think the event means. A thought record helps you slow down that automatic process, separate the event from the interpretation, and check whether your interpretation is accurate or distorted.
            </p>
            <p>
              Decades of research have established CBT as one of the most effective psychological treatments available. A comprehensive meta-analysis by Hofmann et al. (2012) found CBT effective across over 200 studies for depression (with a number needed to treat of approximately 4), anxiety disorders, PTSD, OCD, eating disorders, and substance use disorders.
            </p>
          </section>

          <section>
            <h2>The 7-column thought record method</h2>
            <p>
              The classic thought record uses seven columns that walk you through the complete process of identifying and restructuring a negative thought. Here is how each column works:
            </p>
            <p>
              <strong>Column 1: Situation.</strong> Describe what happened, where, and when. Be specific and factual. &quot;My boss did not say good morning when I arrived at work on Tuesday.&quot; Not &quot;My boss hates me.&quot;
            </p>
            <p>
              <strong>Column 2: Automatic thought.</strong> What went through your mind in that moment? Write the thought exactly as it occurred: &quot;She&apos;s going to fire me,&quot; &quot;I must have done something wrong,&quot; &quot;Nobody at this job likes me.&quot;
            </p>
            <p>
              <strong>Column 3: Emotions.</strong> Name the emotions you felt and rate their intensity from 0&ndash;100. For example: Anxiety (85), Sadness (60), Shame (40). Being precise about emotions helps track whether the thought record process is actually shifting how you feel.
            </p>
            <p>
              <strong>Column 4: Evidence for the thought.</strong> What facts support this thought? Not feelings, not assumptions &mdash; observable evidence. &quot;She walked past without making eye contact.&quot;
            </p>
            <p>
              <strong>Column 5: Evidence against the thought.</strong> What facts contradict this thought? &quot;She gave me positive feedback last week. She was on her phone when she walked in. She often skips greetings when she is running late.&quot;
            </p>
            <p>
              <strong>Column 6: Alternative thought.</strong> Based on all the evidence, what is a more balanced interpretation? &quot;She was probably distracted. Her not saying good morning is not evidence that she is unhappy with my work.&quot;
            </p>
            <p>
              <strong>Column 7: Re-rate emotions.</strong> How do you feel now? Anxiety (35), Sadness (20), Shame (10). The emotions do not disappear &mdash; but they typically reduce significantly when the distorted thought is replaced with a balanced one.
            </p>
            <p>
              The <Link href="/cbt-thought-record" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools thought record</Link> guides you through each of these columns in a simple, private digital format.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Why thought records work: the neuroscience</h2>
            <p>
              When a triggering event occurs, the amygdala (the brain&apos;s threat detection center) fires before the prefrontal cortex (the rational, analytical part of the brain) can fully process what has happened. This is why automatic thoughts feel so true &mdash; they arrive with the full force of an emotional reaction before you have had time to think critically.
            </p>
            <p>
              A thought record deliberately engages the prefrontal cortex. By writing down evidence for and against a thought, you are activating analytical processing that would otherwise be bypassed. Neuroimaging studies have shown that CBT actually changes brain activity patterns &mdash; reducing amygdala reactivity and strengthening prefrontal cortex regulation over time (Porto et al., 2009).
            </p>
            <p>
              This means thought records are not just a coping technique &mdash; they are a form of neural retraining. With consistent practice, the gap between trigger and response widens, and you develop the ability to catch distorted thoughts before they spiral into full emotional episodes.
            </p>
          </section>

          <section>
            <h2>Common cognitive distortions to watch for</h2>
            <p>
              As you practice thought records, you will begin to notice patterns in your thinking. These recurring patterns are called cognitive distortions &mdash; systematic errors in reasoning that skew your interpretation of events. Some of the most common include:
            </p>
            <ul>
              <li><strong>All-or-nothing thinking:</strong> Seeing things in black and white categories. &quot;If I&apos;m not perfect, I&apos;m a failure.&quot;</li>
              <li><strong>Catastrophizing:</strong> Jumping to the worst possible outcome. &quot;I made a mistake, so I&apos;ll definitely get fired.&quot;</li>
              <li><strong>Mind reading:</strong> Assuming you know what others are thinking. &quot;Everyone at the party thought I was boring.&quot;</li>
              <li><strong>Emotional reasoning:</strong> Treating feelings as facts. &quot;I feel anxious, so something bad must be about to happen.&quot;</li>
              <li><strong>Overgeneralization:</strong> Drawing broad conclusions from single events. &quot;I failed this exam, so I&apos;ll never succeed academically.&quot;</li>
              <li><strong>Should statements:</strong> Rigid rules about how things must be. &quot;I should be able to handle this without help.&quot;</li>
            </ul>
            <p>
              The <Link href="/cognitive-distortion-identifier" className="text-sage-600 dark:text-sage-400 underline">cognitive distortion identifier</Link> can help you recognize which patterns show up most frequently in your thinking.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>How to use the MindCheck Tools thought record</h2>
            <p>
              The <Link href="/cbt-thought-record" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools thought record</Link> is a free, private digital tool that walks you through the 7-column process step by step. It is designed to be used whenever you notice a strong negative emotion and want to examine the thought behind it.
            </p>
            <p>
              The tool runs entirely in your browser &mdash; nothing is stored on a server, no account is needed, and your entries are completely private. You can save or print your completed record to share with a therapist or keep for your own reference.
            </p>
            <p>
              For the best results, try to complete a thought record as close to the triggering event as possible, while the thought and emotion are still fresh. Over time, you will start recognizing your most common distortions and generating alternative thoughts more quickly &mdash; even without writing them down.
            </p>
          </section>

          <section>
            <h2>When to seek professional support</h2>
            <p>
              Thought records are a powerful self-help tool, but they work best as part of a broader approach to mental health. Consider working with a CBT therapist if:
            </p>
            <ul>
              <li>Your negative thoughts are persistent and feel impossible to challenge on your own</li>
              <li>You are experiencing symptoms of depression or anxiety that interfere with daily functioning</li>
              <li>You find yourself stuck on the same distortions despite repeated thought records</li>
              <li>You are dealing with trauma, grief, or complex mental health concerns</li>
              <li>Self-help strategies have not provided sufficient relief after several weeks</li>
            </ul>
            <p>
              You can also use the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 depression screening</Link> or <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 anxiety screening</Link> to get a structured picture of your current symptoms and share the results with a healthcare provider.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to challenge a negative thought?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and no account needed. Walk through the 7-column method step by step.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/cbt-thought-record" className="btn-primary text-sm">Open the Thought Record</Link>
              <Link href="/cognitive-distortion-identifier" className="btn-primary text-sm">Identify Your Distortions</Link>
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
              <Link href="/cbt-thought-record" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">CBT Thought Record</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Walk through the 7-column thought record</p>
              </Link>
              <Link href="/cognitive-distortion-identifier" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Cognitive Distortion Identifier</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Identify patterns in your thinking</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for generalized anxiety disorder</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for depression symptoms</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/cognitive-distortions-list" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">15 Cognitive Distortions That Fuel Anxiety</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Learn to recognize common thinking errors</p>
              </Link>
              <Link href="/blog/anxiety-coping-strategies" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Evidence-Based Anxiety Coping Strategies</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated techniques for managing anxiety</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

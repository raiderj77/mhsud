import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/depression-vs-anxiety`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "depression-vs-anxiety")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/depression-vs-anxiety",
  title: "Depression vs. Anxiety: What's the Difference?",
  description:
    "Depression and anxiety share symptoms but have key differences. Learn what distinguishes them, how they overlap, and how each is identified and treated.",
  keywords: [
    "depression vs anxiety",
    "difference between depression and anxiety",
    "anxiety and depression symptoms",
    "co-occurring depression anxiety",
    "PHQ-9 vs GAD-7",
    "depression and anxiety overlap",
    "CBT for depression and anxiety",
    "DASS-21 screening",
    "generalized anxiety disorder",
    "major depressive disorder",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can you have depression and anxiety at the same time?",
    answer:
      "Yes, and it is common. Approximately 50% of people with major depression also meet criteria for an anxiety disorder. The two conditions share neurobiological mechanisms and respond to many of the same treatments, including CBT and SSRIs, which is why clinicians often screen for and address both together.",
  },
  {
    question: "Which comes first, depression or anxiety?",
    answer:
      "Research suggests anxiety disorders more frequently precede depression. Chronic anxiety can be emotionally exhausting and eventually contribute to depressive symptoms. However, this pattern varies individually \u2014 either can appear first, and sometimes they develop simultaneously. Screening for both provides the clearest picture.",
  },
  {
    question: "Is it possible to have anxiety symptoms without an anxiety disorder?",
    answer:
      "Yes. Anxiety symptoms exist on a spectrum. Clinical anxiety disorders represent the end where worry is excessive, uncontrollable, and causing significant impairment. Many people experience distressing anxiety without meeting full diagnostic criteria. Both ends of the spectrum can benefit from professional support and coping strategies.",
  },
  {
    question: "How long does it take to treat depression and anxiety?",
    answer:
      "Many people see meaningful improvement within 8\u201316 weeks of beginning CBT or appropriate medication. More severe or long-standing cases may take longer. Relapses can occur, which is why developing sustainable coping strategies alongside acute treatment is an important part of recovery.",
  },
];

export default function DepressionVsAnxietyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Depression vs. Anxiety: What\u2019s the Difference?", description: "Depression and anxiety share symptoms but have key differences. Learn what distinguishes them, how they overlap, and how each is identified and treated.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Depression vs. Anxiety", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Depression vs. Anxiety: What&apos;s the Difference?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Depression and anxiety are distinct conditions with different core features, but they overlap substantially in symptoms and frequently occur together. Depression is primarily characterized by persistent low mood, loss of pleasure, and low energy. Anxiety is primarily characterized by excessive worry, fear, and heightened arousal. When both are present — which happens in roughly 50% of cases — the combined impact on functioning is typically greater than either alone.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Why this distinction matters</h2>
            <p>
              Many people experience both low mood and worry and aren&apos;t sure which — if either — they might be dealing with. The terms &quot;depressed&quot; and &quot;anxious&quot; are used casually in everyday language, which can make it hard to know when experiences cross into clinical territory.
            </p>
            <p>
              Understanding the difference matters because depression and anxiety have different core features even when they share symptoms. Treatment approaches differ — particularly when it comes to medication. Knowing which condition is driving your experience can help you seek the right support more efficiently, and recognizing co-occurrence helps you and your care team develop a more complete treatment plan.
            </p>
          </section>

          <section>
            <h2>What is depression?</h2>
            <p>
              <strong>Major depressive disorder (MDD)</strong> is a mood disorder characterized by persistent low mood and/or loss of interest or pleasure (anhedonia) occurring most of the time for at least two weeks, accompanied by several other symptoms.
            </p>
            <p>
              The core diagnostic criteria (DSM-5) require five or more of the following, including at least one of the first two:
            </p>
            <ol>
              <li>Depressed mood most of the day, nearly every day</li>
              <li>Loss of interest or pleasure in most activities (anhedonia)</li>
              <li>Significant weight loss or gain; changes in appetite</li>
              <li>Insomnia or hypersomnia</li>
              <li>Psychomotor slowing (moving more slowly) or agitation</li>
              <li>Fatigue or loss of energy</li>
              <li>Feelings of worthlessness or excessive guilt</li>
              <li>Difficulty concentrating</li>
              <li>Recurrent thoughts of death or suicide</li>
            </ol>
            <p>
              Depression tends to have a <strong>slowing, withdrawing quality</strong> — it pulls energy inward and downward. Many people describe it as heaviness, numbness, or a fog.
            </p>
          </section>

          <section>
            <h2>What is anxiety?</h2>
            <p>
              <strong>Generalized anxiety disorder (GAD)</strong> — the most common anxiety disorder — is characterized by excessive, difficult-to-control worry about multiple areas of life, occurring more days than not for at least six months, accompanied by physical and cognitive symptoms.
            </p>
            <p>
              The core diagnostic criteria (DSM-5) include worry plus three or more of:
            </p>
            <ol>
              <li>Restlessness or feeling keyed up or on edge</li>
              <li>Easily fatigued</li>
              <li>Difficulty concentrating or mind going blank</li>
              <li>Irritability</li>
              <li>Muscle tension</li>
              <li>Sleep disturbance</li>
            </ol>
            <p>
              Anxiety tends to have an <strong>activating, vigilant quality</strong> — the nervous system is in a heightened state, scanning for threat. Many people describe it as feeling &quot;wired but tired,&quot; or like their brain won&apos;t slow down.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Depression vs. anxiety: symptom comparison</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Symptom</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Depression</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Anxiety</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Low mood / sadness</td><td className="py-2 pr-4">Core feature</td><td className="py-2">Sometimes present</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Excessive worry</td><td className="py-2 pr-4">Rarely primary</td><td className="py-2">Core feature</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Loss of interest</td><td className="py-2 pr-4">Core feature (anhedonia)</td><td className="py-2">Sometimes present</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Low energy / fatigue</td><td className="py-2 pr-4">Core feature</td><td className="py-2">Present (from arousal)</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Sleep disruption</td><td className="py-2 pr-4">Insomnia and hypersomnia</td><td className="py-2">Mostly insomnia</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Difficulty concentrating</td><td className="py-2 pr-4">Common</td><td className="py-2">Common</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Irritability</td><td className="py-2 pr-4">Common</td><td className="py-2">Common</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Physical symptoms (tension, GI)</td><td className="py-2 pr-4">Less typical</td><td className="py-2">Common</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Fear of the future</td><td className="py-2 pr-4">Sometimes</td><td className="py-2">Core feature</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Feelings of hopelessness</td><td className="py-2 pr-4">Core feature</td><td className="py-2">Less common</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Restlessness / agitation</td><td className="py-2 pr-4">Sometimes</td><td className="py-2">Core feature</td></tr>
                  <tr><td className="py-2 pr-4">Thoughts of death</td><td className="py-2 pr-4">Present in moderate-severe</td><td className="py-2">Less common</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              <strong>Key distinction:</strong> Depression is more about the past and present — dwelling, emptiness, absence of positive emotion. Anxiety is more about the future — anticipating danger, &quot;what if&quot; thinking, inability to relax.
            </p>
          </section>

          <section>
            <h2>How do they overlap?</h2>
            <p>
              Depression and anxiety co-occur in approximately <strong>50% of cases</strong> (Kessler et al., 2003). When someone has both, the symptom picture can look like:
            </p>
            <ul>
              <li>Exhaustion that is both the heaviness of depression and the depletion from chronic anxiety</li>
              <li>Sleep disruption that includes both difficulty falling asleep (anxiety-driven) and wanting to sleep excessively (depression-driven)</li>
              <li>Difficulty concentrating that comes from both low arousal and intrusive worry</li>
              <li>Social withdrawal driven by both loss of interest (depression) and avoidance of feared situations (anxiety)</li>
            </ul>
            <p>
              This overlap is why many people find it difficult to tell which is &quot;driving&quot; their experience — and why screening for both, rather than one, is clinically valuable.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>How are they screened and identified?</h2>
            <p>
              Two of the most widely used validated screening tools are the <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> (for depression) and the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> (for anxiety). They were designed separately but are frequently administered together precisely because of the high co-occurrence rate.
            </p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Tool</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Conditions Screened</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Questions</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Score Range</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Clinical Cutoff</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link></td>
                    <td className="py-2 pr-4">Major depressive disorder</td>
                    <td className="py-2 pr-4">9</td>
                    <td className="py-2 pr-4">0–27</td>
                    <td className="py-2">10+</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4"><Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link></td>
                    <td className="py-2 pr-4">Generalized anxiety disorder</td>
                    <td className="py-2 pr-4">7</td>
                    <td className="py-2 pr-4">0–21</td>
                    <td className="py-2">10+</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4"><Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21</Link></td>
                    <td className="py-2 pr-4">Depression, anxiety, stress</td>
                    <td className="py-2 pr-4">21</td>
                    <td className="py-2 pr-4">0–21 per scale</td>
                    <td className="py-2">Varies by scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The <Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21</Link> is a useful single instrument if you want to screen for depression, anxiety, and stress together in one sitting.
            </p>
          </section>

          <section>
            <h2>How are depression and anxiety treated?</h2>
            <p>
              Both conditions are highly treatable. There is significant overlap in treatment approaches, which is helpful when they co-occur.
            </p>

            <h3>Psychotherapy</h3>
            <p>
              <strong>Cognitive Behavioral Therapy (CBT)</strong> is the most extensively studied and most effective psychotherapy for both depression and anxiety. It works by identifying and changing patterns of thinking and behavior that maintain symptoms (Hofmann et al., 2012).
            </p>
            <p>
              For anxiety specifically, CBT typically includes exposure-based techniques — gradually facing feared situations rather than avoiding them. For depression, behavioral activation is often central — systematically re-engaging with activities that were sources of meaning or pleasure.
            </p>

            <h3>Medication</h3>
            <p>
              <strong>SSRIs (selective serotonin reuptake inhibitors)</strong> are first-line medication for both major depression and generalized anxiety disorder. This includes medications like sertraline, escitalopram, and fluoxetine. This overlap is one reason medication management may be somewhat simpler when both conditions are present.
            </p>
            <p>
              Medication decisions depend on many factors beyond just the condition — including your medical history, other medications, pregnancy status, and personal preferences. This is a conversation to have with a psychiatrist or your primary care physician.
            </p>

            <h3>Lifestyle factors</h3>
            <p>
              Both depression and anxiety respond to the same lifestyle interventions:
            </p>
            <ul>
              <li><strong>Regular aerobic exercise</strong> — meta-analyses demonstrate effect sizes comparable to antidepressants for mild-to-moderate depression (Schuch et al., 2016)</li>
              <li><strong>Sleep consistency</strong> — irregular sleep worsens both conditions</li>
              <li><strong>Social connection</strong> — isolation amplifies both</li>
              <li><strong>Reduced alcohol use</strong> — alcohol disrupts sleep architecture and worsens both mood and anxiety over time</li>
              <li><strong>Stress reduction practices</strong> (mindfulness, yoga, etc.) — strong evidence for anxiety, moderate for depression</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>When should you get screened?</h2>
            <p>
              You don&apos;t need to know which condition you might have before seeking screening or support. If you&apos;ve been feeling persistently off — whether that&apos;s sad, worried, empty, exhausted, or something you can&apos;t quite name — taking both the PHQ-9 and GAD-7 together takes less than 10 minutes and can give you useful, structured information to bring to a healthcare provider.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. Screening tools may indicate the need for further assessment — they do not confirm or rule out any condition.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> — Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> — Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> — <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Not sure if it&apos;s depression, anxiety, or both?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Each screening takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Check</Link>
              <Link href="/dass-21-depression-anxiety-stress" className="btn-primary text-sm">Take the DASS-21 (All Three)</Link>
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
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated anxiety symptom screening</p>
              </Link>
              <Link href="/dass-21-depression-anxiety-stress" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21 Depression, Anxiety &amp; Stress</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for all three in one sitting</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/depression-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How the PHQ-9 works, USPSTF guidelines, and next steps</p>
              </Link>
              <Link href="/blog/gad-7-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Scale Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What the GAD-7 measures and how doctors interpret scores</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

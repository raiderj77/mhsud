import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-is-generalized-anxiety-disorder`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-is-generalized-anxiety-disorder")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-is-generalized-anxiety-disorder",
  title: "What Is Generalized Anxiety Disorder (GAD)?",
  description:
    "Generalized anxiety disorder is characterized by persistent, difficult-to-control worry about multiple areas of life. Learn the symptoms, causes, and treatments.",
  keywords: [
    "what is generalized anxiety disorder",
    "GAD symptoms",
    "generalized anxiety disorder treatment",
    "GAD causes",
    "anxiety disorder explained",
    "GAD vs normal worry",
    "generalized anxiety disorder DSM-5",
    "GAD screening",
    "GAD-7 anxiety test",
    "chronic worry disorder",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can GAD go away on its own?",
    answer:
      "Mild anxiety symptoms can improve with lifestyle changes and reduced stress. Clinical GAD, however, tends to follow a chronic, waxing-and-waning course without treatment (Kessler et al., 2002). Most people with untreated GAD continue to experience significant symptoms over time, though severity fluctuates. Treatment substantially improves outcomes.",
  },
  {
    question: "Is GAD the same as being a worrier?",
    answer:
      "Not exactly. Many people identify as \u201Cworriers\u201D without meeting criteria for GAD. The clinical distinction is the degree to which worry is excessive, difficult to control, and causing impairment. Someone who worries but functions well without significant distress likely doesn\u2019t meet GAD criteria.",
  },
  {
    question: "Can children have GAD?",
    answer:
      "Yes. GAD is one of the most common anxiety disorders in children and adolescents. In children, the DSM-5 requires only one associated symptom (vs. three for adults), and the worry often centers on school performance, punctuality, catastrophic events, and social acceptance.",
  },
  {
    question: "Is GAD a lifelong condition?",
    answer:
      "Not necessarily. With effective treatment, many people experience significant or full remission. Long-term follow-up studies show that CBT effects are maintained years after treatment ends (Durham et al., 2003). Some people do experience recurrence, particularly during stressful periods \u2014 but having effective coping tools makes those episodes more manageable.",
  },
];

export default function WhatIsGeneralizedAnxietyDisorderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Is Generalized Anxiety Disorder (GAD)?", description: "Generalized anxiety disorder is characterized by persistent, difficult-to-control worry about multiple areas of life. Learn the symptoms, causes, and treatments.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Is Generalized Anxiety Disorder (GAD)?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">11 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Is Generalized Anxiety Disorder (GAD)?
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Generalized anxiety disorder (GAD) is a mental health condition characterized by persistent, excessive worry about multiple areas of daily life &mdash; work, health, finances, relationships, or everyday responsibilities &mdash; that is difficult to control and present more days than not for at least six months. GAD affects approximately 5.7% of US adults at some point in their lives and is one of the most common anxiety disorders seen in primary care settings (Kessler et al., 2005).
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Important notice */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <strong className="text-amber-800 dark:text-amber-400">Important:</strong> This article is for educational purposes only. It is not a substitute for professional evaluation, diagnosis, or treatment. If you are struggling with anxiety, please consult a qualified healthcare professional.
            </p>
          </div>

          {/* Section 1: GAD vs Everyday Worry */}
          <section>
            <h2>How Is GAD Different from Everyday Worry?</h2>
            <p>
              Everyone worries. Worry becomes a clinical concern when it has several specific characteristics that distinguish it from ordinary, adaptive anxiety.
            </p>
            <p>
              <strong>Ordinary worry</strong> tends to be:
            </p>
            <ul>
              <li>Tied to a specific, real problem</li>
              <li>Proportionate to the actual situation</li>
              <li>Resolved when the problem is resolved or passes</li>
              <li>Manageable with normal coping</li>
            </ul>
            <p>
              <strong>GAD-type worry</strong> tends to be:
            </p>
            <ul>
              <li>Widespread &mdash; jumping between topics and domains</li>
              <li>Difficult to control even when you recognize it&apos;s excessive</li>
              <li>Persistent regardless of whether real problems are present</li>
              <li>Accompanied by physical symptoms (muscle tension, fatigue, sleep disruption)</li>
              <li>Causing meaningful impairment in daily functioning</li>
            </ul>
            <p>
              The key clinical distinction is <strong>control and proportionality</strong>. The person with GAD typically knows their worry is excessive &mdash; they aren&apos;t misreading their circumstances &mdash; but they find it genuinely difficult to stop or redirect.
            </p>
          </section>

          {/* Section 2: Symptoms */}
          <section>
            <h2>GAD Symptoms</h2>
            <p>
              According to the DSM-5, GAD is diagnosed when a person experiences excessive anxiety and worry, occurring more days than not for at least six months, about multiple events or activities, plus at least three of the following six symptoms:
            </p>
            <ol>
              <li><strong>Restlessness</strong> or feeling keyed up or on edge</li>
              <li><strong>Being easily fatigued</strong></li>
              <li><strong>Difficulty concentrating</strong> or mind going blank</li>
              <li><strong>Irritability</strong></li>
              <li><strong>Muscle tension</strong></li>
              <li><strong>Sleep disturbance</strong> &mdash; difficulty falling or staying asleep, or restless unsatisfying sleep</li>
            </ol>
            <p>
              The anxiety, worry, or physical symptoms must cause clinically significant distress or impairment in social, occupational, or other important areas of functioning.
            </p>

            <h3>Common Physical Symptoms</h3>
            <p>
              GAD produces significant physical symptoms that are often the reason people first seek medical attention:
            </p>
            <ul>
              <li>Chronic muscle tension, particularly in the neck, shoulders, and jaw</li>
              <li>Headaches &mdash; often tension-type</li>
              <li>GI symptoms &mdash; nausea, irritable bowel, stomach upset</li>
              <li>Fatigue that doesn&apos;t resolve with rest</li>
              <li>Heart palpitations</li>
              <li>Sweating and trembling during periods of heightened anxiety</li>
              <li>Sleep difficulty &mdash; typically taking a long time to fall asleep due to worry</li>
            </ul>
          </section>

          {/* Section 3: Who Gets GAD */}
          <section>
            <h2>Who Gets GAD?</h2>
            <p>
              GAD is the most common anxiety disorder seen in primary care, affecting roughly twice as many women as men (Kessler et al., 2005). It can develop at any age, though two common onset periods are late adolescence/early adulthood and midlife.
            </p>
            <p>
              Risk factors include:
            </p>
            <ul>
              <li><strong>Family history</strong> &mdash; GAD has a moderate genetic component</li>
              <li><strong>Temperament</strong> &mdash; people with a history of behavioral inhibition or negative affectivity are at higher risk</li>
              <li><strong>Chronic stress</strong> &mdash; ongoing life stressors without adequate coping or support</li>
              <li><strong>Trauma history</strong> &mdash; adverse childhood experiences increase risk</li>
              <li><strong>Other mental health conditions</strong> &mdash; GAD commonly co-occurs with depression, other anxiety disorders, and substance use disorders</li>
            </ul>
            <p>
              GAD often has an insidious onset &mdash; it frequently develops gradually rather than after a discrete triggering event.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4: How Common */}
          <section>
            <h2>How Common Is GAD?</h2>
            <ul>
              <li>Lifetime prevalence in the US: approximately <strong>5.7%</strong> (Kessler et al., 2005)</li>
              <li>12-month prevalence: approximately <strong>3.1%</strong></li>
              <li>Point prevalence in primary care: approximately <strong>7&ndash;8%</strong></li>
              <li>Women are diagnosed at approximately <strong>twice the rate</strong> of men</li>
              <li>Median age of onset: approximately <strong>30 years</strong> (though range is wide)</li>
              <li>Only <strong>43.2%</strong> of people with GAD receive any treatment (ADAA, 2023)</li>
            </ul>
            <p>
              GAD tends to be a chronic condition &mdash; without treatment, it typically waxes and wanes rather than fully resolving. With appropriate treatment, the majority of people experience significant improvement.
            </p>
          </section>

          {/* Section 5: Screening and Diagnosis */}
          <section>
            <h2>How Is GAD Screened and Diagnosed?</h2>
            <p>
              <strong>Screening</strong> uses validated self-report tools. The <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> is the most widely used and validated brief screen, producing a score from 0&ndash;21. A score of 10 or higher suggests a clinical level of anxiety warranting evaluation.
            </p>
            <p>
              <strong>Diagnosis</strong> requires a clinical evaluation by a qualified mental health professional or physician. This typically involves:
            </p>
            <ul>
              <li>Structured or semi-structured clinical interview</li>
              <li>Review of symptom history and duration</li>
              <li>Assessment of functional impairment</li>
              <li>Ruling out medical conditions that can cause anxiety symptoms (hyperthyroidism, cardiac conditions, etc.)</li>
              <li>Ruling out other mental health conditions that better explain the presentation</li>
            </ul>
            <p>
              GAD is frequently missed in primary care because patients often present with physical complaints &mdash; fatigue, headaches, GI symptoms &mdash; rather than anxiety. If you&apos;ve had these symptoms evaluated medically without finding a clear cause, anxiety is worth exploring.
            </p>
          </section>

          {/* Section 6: GAD vs Other Anxiety Disorders */}
          <section>
            <h2>GAD vs. Other Anxiety Disorders</h2>
            <p>
              GAD is one of several anxiety disorders, and distinguishing between them matters for treatment.
            </p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Condition</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Core Feature</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Different from GAD</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">GAD</td><td className="py-2 pr-4">Excessive worry about multiple domains</td><td className="py-2">The worry is generalized, not tied to one trigger</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Panic Disorder</td><td className="py-2 pr-4">Recurrent unexpected panic attacks</td><td className="py-2">Fear of the attacks themselves; often situational</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Social Anxiety</td><td className="py-2 pr-4">Fear of social situations and evaluation</td><td className="py-2">Worry is specifically about embarrassment/judgment</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Specific Phobia</td><td className="py-2 pr-4">Fear of specific objects or situations</td><td className="py-2">Fear is circumscribed to one trigger</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Health Anxiety</td><td className="py-2 pr-4">Excessive worry about having an illness</td><td className="py-2">Worry is primarily health-focused</td></tr>
                  <tr><td className="py-2 pr-4">OCD</td><td className="py-2 pr-4">Intrusive thoughts + compulsive behaviors</td><td className="py-2">Thoughts are ego-dystonic; rituals provide relief</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              These conditions frequently co-occur and can overlap in presentation. A clinical evaluation sorts through the picture more reliably than any screening tool alone.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 7: Treatment */}
          <section>
            <h2>How Is GAD Treated?</h2>
            <p>
              GAD responds well to treatment. The two primary evidence-based approaches are psychotherapy and medication, often used in combination.
            </p>

            <h3>Psychotherapy</h3>
            <p>
              <strong>Cognitive Behavioral Therapy (CBT)</strong> is the gold standard psychological treatment for GAD. It targets two core processes: the content of worrying thoughts (cognitive restructuring) and the behaviors that maintain anxiety, particularly avoidance and reassurance-seeking. Meta-analyses show effect sizes of 0.80&ndash;1.01 compared to control conditions (Cuijpers et al., 2014).
            </p>
            <p>
              <strong>Acceptance and Commitment Therapy (ACT)</strong> focuses on changing the relationship to anxious thoughts rather than their content &mdash; learning to hold worry lightly rather than treating it as a command. Growing evidence base for anxiety disorders.
            </p>
            <p>
              <strong>Worry Postponement and Scheduled Worry Time:</strong> A specific behavioral technique where worry is deliberately postponed to a designated daily time window, breaking the pattern of continuous background worrying. Surprisingly well-supported in research.
            </p>

            <h3>Medication</h3>
            <p>
              <strong>SSRIs and SNRIs</strong> are first-line pharmacological treatment for GAD. Escitalopram, sertraline, duloxetine, and venlafaxine all have FDA approval or strong evidence for GAD. Onset of benefit typically takes 2&ndash;4 weeks.
            </p>
            <p>
              <strong>Buspirone</strong> is a non-addictive anxiolytic specifically approved for GAD, useful for people who cannot use SSRIs/SNRIs.
            </p>
            <p>
              <strong>Benzodiazepines</strong> are sometimes used short-term for acute anxiety but are not recommended for ongoing GAD treatment due to tolerance, dependence risk, and lack of long-term efficacy.
            </p>

            <h3>Lifestyle</h3>
            <ul>
              <li><strong>Regular aerobic exercise</strong> &mdash; reduces anxiety symptoms with effect sizes comparable to medication in some studies (Stonerock et al., 2015)</li>
              <li><strong>Consistent sleep schedule</strong> &mdash; irregular sleep dramatically worsens anxiety</li>
              <li><strong>Caffeine reduction</strong> &mdash; caffeine directly stimulates the physiological anxiety response</li>
              <li><strong>Mindfulness-based practices</strong> &mdash; Mindfulness-Based Stress Reduction (MBSR) has a growing evidence base for anxiety</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8: When to Seek Help */}
          <section>
            <h2>When to Seek Help</h2>
            <p>
              If you recognize GAD symptoms in yourself &mdash; persistent worry that&apos;s hard to control, physical symptoms, significant impact on your daily life &mdash; a conversation with a mental health professional or your primary care physician is the right next step.
            </p>
            <p>
              You don&apos;t need to have had GAD for years before seeking support. Early intervention is associated with better outcomes and prevents the secondary effects of chronic anxiety (avoidance patterns, social withdrawal, co-occurring depression).
            </p>
            <p>
              Start by taking the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 Anxiety Self-Check</Link> &mdash; it takes two minutes and gives you a structured snapshot to bring to any clinical conversation.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. Screening tools may indicate the need for further assessment &mdash; they do not confirm or rule out any condition.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check your anxiety level</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Check</Link>
              <Link href="/dass-21-depression-anxiety-stress" className="btn-primary text-sm">Take the DASS-21 (Depression, Anxiety &amp; Stress)</Link>
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
              <Link href="/dass-21-depression-anxiety-stress" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21 Depression, Anxiety &amp; Stress</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for all three in one sitting</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for depression &mdash; commonly co-occurs with GAD</p>
              </Link>
              <Link href="/spin-social-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">SPIN Social Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for social anxiety disorder</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-does-gad-7-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Does Your GAD-7 Score Mean?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Anxiety score interpretation and when to seek help</p>
              </Link>
              <Link href="/blog/depression-vs-anxiety" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression vs. Anxiety: What&apos;s the Difference?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How depression and anxiety differ and overlap</p>
              </Link>
              <Link href="/blog/anxiety-coping-strategies" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Evidence-Based Anxiety Coping Strategies</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated techniques for managing anxiety</p>
              </Link>
              <Link href="/blog/social-anxiety-vs-introversion" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Social Anxiety vs Introversion</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding the difference</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-is-bipolar-disorder`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-is-bipolar-disorder")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-is-bipolar-disorder",
  title: "What Is Bipolar Disorder? Types, Symptoms, and Treatment",
  description:
    "Bipolar disorder is widely misunderstood and frequently misdiagnosed. Learn what it actually is, how bipolar I and II differ, and what evidence-based treatment looks like.",
  keywords: [
    "what is bipolar disorder",
    "bipolar disorder symptoms",
    "bipolar I vs bipolar II",
    "bipolar disorder treatment",
    "signs of bipolar disorder",
    "bipolar disorder explained",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Can bipolar disorder be mild?",
    answer:
      "Yes. Cyclothymic disorder represents a milder end of the bipolar spectrum. Even within bipolar I and II, severity varies widely \u2014 some people have infrequent episodes with long stable periods, while others experience rapid cycling. Severity can change across the lifespan and with treatment.",
  },
  {
    question: "Is bipolar disorder lifelong?",
    answer:
      "Bipolar disorder is considered lifelong \u2014 it does not go away. However, with effective treatment and lifestyle management, most people achieve long periods of stability and lead full, meaningful lives. Medication adherence is one of the strongest predictors of positive long-term outcome.",
  },
  {
    question: "Is creativity linked to bipolar disorder?",
    answer:
      "Research shows elevated rates of bipolar spectrum conditions among creative professionals and some link between hypomania and creative productivity. However, the depressive phase and impaired judgment of mania cause enormous suffering. Treatment that reduces episodes preserves the ability to live and function, not flattens creativity.",
  },
  {
    question: "How is bipolar disorder different from borderline personality disorder?",
    answer:
      "Both involve mood instability and impulsivity. In bipolar disorder, mood episodes are sustained for days to months and tied to sleep and energy changes. In BPD, mood shifts are faster, reactive to interpersonal triggers, and embedded in chronic relationship instability. Co-occurrence requires careful differential diagnosis.",
  },
];

export default function WhatIsBipolarDisorderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "What Is Bipolar Disorder? Types, Symptoms, and Treatment", description: "Bipolar disorder is widely misunderstood and frequently misdiagnosed. Learn what it actually is, how bipolar I and II differ, and what evidence-based treatment looks like.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Is Bipolar Disorder?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">14 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Is Bipolar Disorder? Types, Symptoms, and Treatment
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Bipolar disorder is a mood disorder characterized by episodes of unusually elevated or expansive mood (mania or hypomania) that alternate with episodes of depression. It is not simply &quot;mood swings&quot; &mdash; episodes last days to months and cause significant functional impairment. Bipolar disorder affects approximately 2.8% of US adults annually (NIMH, 2023), is highly heritable, and is one of the most commonly misdiagnosed mental health conditions &mdash; with the average time from symptom onset to correct diagnosis exceeding nine years.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>Bipolar disorder vs. mood swings: a critical distinction</h2>
            <p>
              The phrase &quot;bipolar&quot; has entered casual speech as a synonym for being moody or inconsistent. This misuse obscures a serious medical condition and contributes to the underdiagnosis and stigma that many people with bipolar disorder experience.
            </p>
            <p>Bipolar disorder is <strong>not:</strong></p>
            <ul>
              <li>Having highs and lows throughout a day</li>
              <li>Feeling irritable sometimes and happy other times</li>
              <li>Being sensitive or emotionally reactive</li>
            </ul>
            <p>Bipolar disorder <strong>is:</strong></p>
            <ul>
              <li>Distinct, sustained episodes of abnormally elevated mood (or depression) lasting days to months</li>
              <li>Episodes severe enough to impair functioning, require hospitalization, or involve psychosis</li>
              <li>A recurring pattern across a lifetime, not a personality trait</li>
            </ul>
            <p>
              The difference is duration, severity, and functional impact &mdash; not the fact that mood varies.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>Types of bipolar disorder</h2>
            <p>The bipolar spectrum includes several distinct diagnoses:</p>

            <h3>Bipolar I Disorder</h3>
            <p>
              Defined by the presence of at least one <strong>manic episode</strong> lasting at least 7 days (or less if hospitalization is required). Depressive episodes are common but not required for the diagnosis.
            </p>
            <p>
              Mania in bipolar I is severe &mdash; it typically causes major functional impairment, and psychotic features (delusions, hallucinations) occur in approximately 50% of manic episodes. Hospitalization during manic episodes is common.
            </p>

            <h3>Bipolar II Disorder</h3>
            <p>
              Defined by at least one <strong>hypomanic episode</strong> (a milder, less impairing form of mania lasting at least 4 days) and at least one major depressive episode, with no history of full mania.
            </p>
            <p>
              Bipolar II is frequently mistaken for unipolar depression because the hypomanic episodes &mdash; periods of elevated energy, reduced sleep, increased productivity &mdash; often feel good to the person experiencing them and may not be identified as symptoms. The depressive episodes, however, are often severe and are what typically brings people to treatment.
            </p>
            <p>
              <strong>Bipolar II is not milder than Bipolar I</strong> &mdash; its depressive burden is often equal or greater, and it is associated with high rates of suicide.
            </p>

            <h3>Cyclothymic Disorder</h3>
            <p>
              A milder but chronic form of the bipolar spectrum &mdash; numerous periods of hypomanic symptoms and depressive symptoms over at least 2 years, without meeting full criteria for bipolar I or II episodes. Often described as a persistent instability that doesn&apos;t reach full episode thresholds.
            </p>

            <h3>Other Specified Bipolar and Related Disorders</h3>
            <p>
              Includes presentations that don&apos;t fit neatly into the above categories &mdash; for instance, hypomanic episodes of shorter duration than 4 days, or presentations that emerge from substance use or a medical condition.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>What mania looks like</h2>
            <p>
              A manic episode involves a distinct period of abnormally elevated, expansive, or irritable mood and abnormally increased goal-directed activity or energy, present for most of the day nearly every day for at least one week.
            </p>
            <p>During a manic episode, three or more of the following are present (four if mood is only irritable):</p>
            <ul>
              <li><strong>Inflated self-esteem or grandiosity</strong> &mdash; feelings of special ability, importance, or mission</li>
              <li><strong>Decreased need for sleep</strong> &mdash; feeling rested after 2&ndash;3 hours; often not tired at all</li>
              <li><strong>More talkative than usual</strong> &mdash; pressured speech that&apos;s difficult to interrupt</li>
              <li><strong>Racing thoughts</strong> &mdash; flight of ideas, thoughts moving faster than speech</li>
              <li><strong>Distractibility</strong> &mdash; attention jumping to external stimuli</li>
              <li><strong>Increased goal-directed activity</strong> &mdash; starting multiple projects, hypersexuality, increased social or occupational activity</li>
              <li><strong>Risky behavior</strong> &mdash; spending sprees, sexual indiscretions, reckless driving, poor business investments</li>
            </ul>
            <p>
              Mania feels different from inside and outside. From inside, it often feels positive initially &mdash; a state of unusual clarity, capability, and energy. From outside, the behavioral changes are often alarming. The grandiosity and impaired judgment that characterize severe mania prevent the person from recognizing that anything is wrong &mdash; a phenomenon called <strong>anosognosia</strong> (lack of insight into one&apos;s own condition).
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>What hypomania looks like</h2>
            <p>
              Hypomania involves the same symptom types as mania but at reduced severity and duration (at least 4 days). By definition, hypomania doesn&apos;t cause the severe functional impairment of mania &mdash; the person can often continue working and managing relationships.
            </p>
            <p>
              This is precisely why hypomania is so often missed. Many people with bipolar II describe hypomanic states as their best, most productive periods &mdash; when they need less sleep, have more energy, feel socially confident, and get more done. What appears positive from the inside is, in the context of the full bipolar picture, a symptom.
            </p>
            <p>Key features that distinguish hypomania from simply &quot;feeling good&quot;:</p>
            <ul>
              <li>The change in mood and activity is observable by others</li>
              <li>It represents a clear departure from the person&apos;s baseline</li>
              <li>The person is more active, talkative, and energetic than usual in a distinctly recognizable way</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2>The depressive phase</h2>
            <p>
              The depressive episodes of bipolar disorder are often clinically indistinguishable from unipolar major depression &mdash; they involve the same symptoms of persistent low mood, anhedonia, fatigue, sleep changes, and cognitive slowing. This is the primary reason bipolar disorder is so frequently misdiagnosed as unipolar depression.
            </p>
            <p>What makes the depressive phase of bipolar disorder particularly dangerous:</p>
            <ul>
              <li>Suicide risk is substantially elevated &mdash; bipolar disorder carries a lifetime suicide attempt rate of approximately 25&ndash;50% and accounts for approximately 25% of completed suicides (Goodwin &amp; Jamison, 2007)</li>
              <li>Antidepressants given without a mood stabilizer can trigger manic or hypomanic episodes and worsen long-term course</li>
              <li>The depressive phase is often the longest phase &mdash; particularly in bipolar II, where people spend far more time depressed than elevated</li>
            </ul>
            <p>
              If you&apos;ve been treated for depression and responses to antidepressants have been mixed, activating, or seemingly made things worse, this history is important to discuss with a psychiatrist.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>Why bipolar disorder is so often misdiagnosed</h2>
            <p>
              The average delay from onset to correct diagnosis is <strong>9.5 years</strong> (Hirschfeld et al., 2003). During that period, the most common erroneous diagnosis is unipolar major depression. Contributing factors:
            </p>
            <ol>
              <li><strong>People seek help during depression</strong> &mdash; the depressive phase is when people feel bad enough to go to a doctor; hypomanic or manic phases often don&apos;t motivate treatment-seeking</li>
              <li><strong>Collateral history isn&apos;t gathered</strong> &mdash; without asking specifically about periods of elevated mood, reduced sleep, or increased energy, the history of elevated mood episodes is missed</li>
              <li><strong>Hypomania doesn&apos;t look like a problem</strong> &mdash; to either the person or, often, their clinician</li>
              <li><strong>Screening tools for depression don&apos;t detect mania</strong> &mdash; the PHQ-9 and similar tools capture current depressive state but don&apos;t probe for bipolar history</li>
            </ol>
            <p>
              The <Link href="/mdq-bipolar-screening" className="text-sage-600 dark:text-sage-400 underline">MDQ Bipolar Screening</Link> was designed specifically to address this gap &mdash; it asks about the full history of elevated mood symptoms in a systematic way.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>What causes bipolar disorder?</h2>
            <p>
              Bipolar disorder has a strong genetic basis &mdash; heritability is estimated at 60&ndash;80%, among the highest of any psychiatric condition (McGuffin et al., 2003). First-degree relatives of someone with bipolar I have approximately 10 times the population risk.
            </p>
            <p>Beyond genetics, multiple factors contribute:</p>
            <ul>
              <li><strong>Neurobiological:</strong> Disruptions in circadian rhythm regulation, dopamine and serotonin systems, and stress response circuits</li>
              <li><strong>Psychological:</strong> Stressful life events often trigger first episodes in genetically predisposed individuals</li>
              <li><strong>Sleep disruption:</strong> A bidirectional relationship &mdash; sleep disruption triggers episodes, and episodes disrupt sleep; sleep is one of the most powerful modulators of bipolar course</li>
              <li><strong>Substance use:</strong> Cannabis, stimulants, and alcohol can all trigger or worsen mood episodes in people with bipolar disorder</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 — Treatment */}
          <section>
            <h2>Evidence-based treatment for bipolar disorder</h2>
            <p>
              Bipolar disorder is highly treatable. The goal of treatment is mood stabilization &mdash; reducing the frequency, severity, and duration of both manic and depressive episodes.
            </p>

            <h3>Mood stabilizers (first-line medications)</h3>
            <p>
              <strong>Lithium:</strong> Remains the best-studied and most effective long-term treatment for bipolar I disorder. The only medication with strong evidence for reducing <strong>suicide risk</strong> specifically in bipolar disorder (Cipriani et al., 2013). Requires regular blood monitoring.
            </p>
            <p>
              <strong>Valproate (Depakote):</strong> Effective for acute mania and prevention; widely used. Requires blood monitoring; contraindicated in pregnancy.
            </p>
            <p>
              <strong>Lamotrigine:</strong> Particularly effective for the depressive phase and prevention of depressive recurrence in bipolar II. Requires slow titration to reduce rash risk.
            </p>
            <p>
              <strong>Atypical antipsychotics:</strong> Quetiapine, lurasidone, cariprazine, and others have FDA indications for acute mania and/or bipolar depression.
            </p>

            <h3>Psychotherapy for bipolar disorder</h3>
            <p>
              Medication is necessary but rarely sufficient alone. Evidence-based psychosocial interventions include:
            </p>
            <p>
              <strong>Psychoeducation:</strong> Understanding the illness &mdash; recognizing early warning signs of episodes, understanding triggers, building a wellness plan &mdash; is the foundation of long-term management. Highly effective at reducing relapse rates.
            </p>
            <p>
              <strong>Interpersonal and Social Rhythm Therapy (IPSRT):</strong> Focuses on regularizing daily routines (especially sleep/wake cycles) and improving interpersonal functioning. Targets the circadian dysregulation central to bipolar disorder.
            </p>
            <p>
              <strong>Family-Focused Therapy:</strong> Involves family members in psychoeducation and communication training. Particularly effective for younger adults where family environment is a key trigger.
            </p>
            <p>
              <strong>CBT adapted for bipolar disorder:</strong> Addresses the cognitive patterns that contribute to episode relapse and helps with medication adherence.
            </p>

            <h3>What to avoid</h3>
            <ul>
              <li><strong>Antidepressants without mood stabilizers:</strong> Can trigger mania and worsen long-term course</li>
              <li><strong>Stimulants and cocaine:</strong> Strong mania triggers</li>
              <li><strong>Heavy alcohol use:</strong> Disrupts sleep, interacts with medications, and worsens mood stability</li>
              <li><strong>Sleep deprivation:</strong> One of the most reliable mania triggers; sleep protection is a clinical priority</li>
            </ul>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. Bipolar disorder diagnosis requires a comprehensive evaluation by a qualified mental health professional.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Wondering if bipolar disorder might apply to you?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The MDQ screening takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/mdq-bipolar-screening" className="btn-primary text-sm">Take the MDQ Bipolar Screening</Link>
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
              <Link href="/mdq-bipolar-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">MDQ Bipolar Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated screening for bipolar spectrum disorders</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated depression symptom screening</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/bipolar-vs-depression" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Bipolar Disorder vs Depression: Key Differences</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Why misdiagnosis happens and which screening tools can help</p>
              </Link>
              <Link href="/blog/depression-vs-anxiety" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Depression vs. Anxiety: What&apos;s the Difference?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understanding overlapping mood and anxiety conditions</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

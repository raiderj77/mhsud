import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/bpd-symptoms-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "bpd-symptoms-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/bpd-symptoms-guide",
  title: "Understanding BPD: Symptoms, Screening, and Treatment",
  description:
    "Borderline personality disorder is one of the most misunderstood mental health conditions. Learn the DSM-5 criteria, how to screen for BPD, and why recovery is possible.",
  keywords: [
    "BPD symptoms", "borderline personality disorder", "BPD screening",
    "BPD vs bipolar", "signs of BPD", "borderline personality disorder test",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  { question: "Is BPD curable?", answer: "BPD is not typically described as 'curable' in the way an infection can be cured, but it is very treatable. Long-term studies show that many people with BPD experience significant improvement over time. Research published in the American Journal of Psychiatry found that nearly 85% of people with BPD achieved remission within 10 years, meaning they no longer met the diagnostic criteria. With evidence-based treatment like dialectical behavior therapy (DBT), many people see meaningful improvement within one to two years." },
  { question: "What causes borderline personality disorder?", answer: "There is no single cause of BPD. Research suggests it develops from a combination of genetic vulnerability, brain differences in areas that regulate emotion and impulse control, and environmental factors — particularly invalidating or traumatic experiences during childhood. Not everyone who experiences childhood adversity develops BPD, and not everyone with BPD has a history of trauma, but the combination of biological sensitivity and environmental stress appears to be the most common pathway." },
  { question: "How is BPD different from bipolar disorder?", answer: "The emotional instability in BPD and the mood episodes in bipolar disorder can look similar on the surface, but they differ in important ways. BPD mood shifts are typically rapid — lasting hours rather than days — and are usually triggered by interpersonal events such as perceived rejection or conflict. Bipolar mood episodes (mania and depression) tend to last days, weeks, or even months, and often occur without a clear external trigger. The two conditions can co-occur, which is why professional assessment is important for accurate identification." },
  { question: "Can men have borderline personality disorder?", answer: "Yes. BPD affects people of all genders. Approximately 75% of those diagnosed with BPD are women, but researchers believe this statistic reflects referral and diagnostic bias rather than actual prevalence. Men with BPD are more likely to be misidentified as having antisocial personality disorder, substance use disorders, or intermittent explosive disorder. Studies using community samples rather than clinical populations have found roughly equal rates of BPD across genders." },
];

export default function BpdSymptomsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Understanding BPD: Symptoms, Screening, and Treatment", description: "Borderline personality disorder is one of the most misunderstood mental health conditions. Learn the DSM-5 criteria, how to screen for BPD, and why recovery is possible.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "BPD Symptoms Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Understanding Borderline Personality Disorder (BPD): Symptoms, Screening, and Treatment
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Borderline personality disorder (BPD) is one of the most misunderstood and stigmatized conditions in mental health. People with BPD are often mislabeled as &quot;manipulative&quot; or &quot;attention-seeking&quot; &mdash; language that causes real harm and discourages people from seeking help. The reality is that BPD is a treatable condition rooted in emotional sensitivity, and recovery is not only possible but common. This guide explains what BPD actually is, how it is identified, and what effective treatment looks like.
          </p>
          <div className="mt-6">
            <Link href="/msi-bpd-screening" className="btn-primary text-sm">
              Take the MSI-BPD Screening &rarr;
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is borderline personality disorder?</h2>
            <p>
              Borderline personality disorder is a mental health condition characterized by a persistent pattern of emotional instability, difficulty with self-image, impulsive behavior, and turbulent interpersonal relationships. It affects approximately 1.6% of the general population, though some researchers believe the true prevalence may be higher because BPD is frequently misidentified as depression, bipolar disorder, or other conditions.
            </p>
            <p>
              BPD typically emerges in adolescence or early adulthood. About 75% of those who receive a BPD diagnosis are women, although growing evidence suggests this gender gap reflects referral and diagnostic bias rather than actual differences in prevalence. Men with BPD symptoms are more likely to receive alternative diagnoses such as antisocial personality disorder or substance use disorders.
            </p>
            <p>
              The name &quot;borderline&quot; is a historical artifact &mdash; it originally referred to the perceived boundary between neurosis and psychosis. The term is widely considered outdated and misleading, but it persists in clinical use. What matters more than the name is understanding what the condition actually involves and how it can be addressed.
            </p>
          </section>

          <section>
            <h2>How is BPD identified? The DSM-5 criteria</h2>
            <p>
              The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5) lists nine criteria for BPD. A person must meet at least five of the nine to receive a clinical identification. Only a qualified mental health professional can make this determination &mdash; no self-screening tool can replace a comprehensive evaluation.
            </p>
            <p>
              The nine DSM-5 criteria are:
            </p>
            <div className="not-prose my-4 space-y-2">
              {[
                { label: "1. Frantic efforts to avoid abandonment", desc: "Intense fear of being left behind, whether the threat is real or imagined. This can include desperate attempts to prevent someone from leaving." },
                { label: "2. Unstable relationships", desc: "A pattern of intense but unstable relationships, often swinging between idealization ('this person is perfect') and devaluation ('this person is terrible')." },
                { label: "3. Identity disturbance", desc: "A persistently unstable sense of self, including shifting goals, values, career plans, or sense of identity." },
                { label: "4. Impulsivity", desc: "Impulsive behavior in at least two areas that are potentially self-damaging, such as spending, substance use, reckless driving, or binge eating." },
                { label: "5. Self-harm or suicidal behavior", desc: "Recurrent suicidal gestures, threats, self-harming behavior, or persistent suicidal ideation." },
                { label: "6. Emotional instability", desc: "Intense mood shifts that typically last a few hours, rarely more than a few days. Emotional reactions are often triggered by interpersonal events." },
                { label: "7. Chronic emptiness", desc: "Persistent feelings of emptiness or hollowness that go beyond ordinary boredom." },
                { label: "8. Intense anger", desc: "Difficulty controlling anger, frequent displays of temper, or persistent feelings of anger that seem disproportionate to the situation." },
                { label: "9. Transient paranoia or dissociation", desc: "Stress-related paranoid thoughts or dissociative symptoms (feeling detached from reality) that come and go." },
              ].map((item, i) => (
                <div key={i} className="card p-4">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{item.label}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              It is important to recognize that many people experience some of these traits without having BPD. The distinction lies in the <strong>pervasiveness</strong>, <strong>intensity</strong>, and <strong>duration</strong> of these patterns, as well as the degree to which they cause significant distress or functional impairment.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How is BPD different from bipolar disorder?</h2>
            <p>
              BPD and bipolar disorder are frequently confused because both involve emotional instability, but the patterns are quite different. Understanding these differences matters because the conditions require different approaches.
            </p>
            <p>
              In BPD, emotional shifts are typically <strong>rapid</strong> &mdash; changing within hours, sometimes within minutes &mdash; and are usually <strong>triggered by interpersonal events</strong> such as perceived rejection, criticism, or abandonment. The emotional response may be intense, but it is often clearly connected to a relational event.
            </p>
            <p>
              In bipolar disorder, mood episodes (mania or depression) tend to last <strong>days, weeks, or even months</strong>. Manic episodes involve elevated energy, reduced need for sleep, grandiosity, and increased goal-directed activity &mdash; symptoms that are not characteristic of BPD. Bipolar episodes often occur without a clear external trigger.
            </p>
            <p>
              The two conditions can co-occur, which complicates identification. If you are unsure which pattern best describes your experience, a qualified mental health professional can help distinguish between them. Our <Link href="/msi-bpd-screening" className="text-sage-600 dark:text-sage-400 underline">MSI-BPD Screening</Link> can help you determine whether further evaluation for BPD may be warranted, while our <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> screens specifically for depressive symptoms.
            </p>
          </section>

          <section>
            <h2>Screening for BPD: The MSI-BPD</h2>
            <p>
              The McLean Screening Instrument for Borderline Personality Disorder (MSI-BPD) is a brief, validated screening tool consisting of 10 true/false questions. It was developed at McLean Hospital, a Harvard Medical School affiliate, specifically to identify individuals who may benefit from a more comprehensive BPD evaluation.
            </p>
            <p>
              A score of 7 or higher on the MSI-BPD suggests that further professional evaluation may be appropriate. The tool has demonstrated good sensitivity (correctly identifying people who have BPD) and specificity (correctly ruling out those who do not).
            </p>
            <p>
              It is critical to understand that the MSI-BPD is a <strong>screening tool, not a diagnostic instrument</strong>. A positive screen does not mean you have BPD &mdash; it means the pattern of your responses warrants a closer look by a qualified professional. You can take the <Link href="/msi-bpd-screening" className="text-sage-600 dark:text-sage-400 underline">MSI-BPD screening</Link> on our site. It runs entirely in your browser, and your answers are never stored or transmitted.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Understanding the stigma around BPD</h2>
            <p>
              BPD carries more stigma than almost any other mental health condition &mdash; and that stigma comes not only from the general public but sometimes from mental health professionals themselves. People with BPD have historically been labeled &quot;difficult,&quot; &quot;manipulative,&quot; or &quot;untreatable.&quot; These characterizations are not only inaccurate but actively harmful, discouraging people from seeking help and reducing the quality of care they receive.
            </p>
            <p>
              Research increasingly shows that BPD often develops in the context of <strong>invalidating environments</strong> &mdash; settings where a person&apos;s emotional responses were consistently dismissed, minimized, or punished during childhood. Childhood trauma, neglect, and emotional abuse are common (though not universal) in the histories of people with BPD. The condition reflects an interaction between biological sensitivity and environmental experience, not a character defect.
            </p>
            <p>
              Understanding this context is essential to reducing stigma. People with BPD are not choosing to be in pain. They developed patterns of coping with overwhelming emotions in environments that did not teach them healthier alternatives. With the right support and treatment, those patterns can change.
            </p>
          </section>

          <section>
            <h2>Treatment is effective: DBT and beyond</h2>
            <p>
              One of the most important facts about BPD is that <strong>treatment works</strong>. Dialectical behavior therapy (DBT), developed by psychologist Marsha Linehan at the University of Washington, is the gold standard treatment for BPD and has the strongest evidence base. DBT teaches four core skill modules: mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness.
            </p>
            <p>
              DBT was specifically designed for people who experience emotions intensely &mdash; a hallmark of BPD. It balances acceptance (&quot;your emotions are valid&quot;) with change (&quot;you can learn new ways to respond to them&quot;). Research consistently shows that DBT reduces self-harm, suicidal behavior, emergency department visits, and hospitalization while improving overall functioning and quality of life.
            </p>
            <p>
              Other evidence-based treatments for BPD include mentalization-based therapy (MBT), transference-focused psychotherapy (TFP), and schema-focused therapy. Each takes a somewhat different approach, but all have demonstrated effectiveness in clinical trials. You can learn more about DBT skills in our <Link href="/blog/dbt-skills-beginners" className="text-sage-600 dark:text-sage-400 underline">DBT Skills for Beginners guide</Link>.
            </p>
          </section>

          <section>
            <h2>Recovery is possible</h2>
            <p>
              Perhaps the most important message about BPD is that <strong>recovery is not only possible but common</strong>. Longitudinal studies tracking people with BPD over 10 to 16 years have found that the majority achieve remission &mdash; meaning they no longer meet the diagnostic criteria. Research published in the <em>American Journal of Psychiatry</em> found remission rates of approximately 85% at 10-year follow-up.
            </p>
            <p>
              Recovery does not necessarily mean that all emotional sensitivity disappears. Many people continue to experience intense emotions but develop the skills and self-awareness to manage them effectively. The pattern of crisis, instability, and impulsive behavior that defines BPD can and does change with time, support, and treatment.
            </p>
            <p>
              If you or someone you care about is struggling with symptoms that may be related to BPD, taking a screening is a reasonable first step. Our <Link href="/msi-bpd-screening" className="text-sage-600 dark:text-sage-400 underline">MSI-BPD Screening</Link> takes about two minutes and can help you decide whether to seek a professional evaluation. You can also create a <Link href="/safety-plan" className="text-sage-600 dark:text-sage-400 underline">Safety Plan</Link> if you are currently in distress.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <h3 className="font-serif text-lg font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment. If you have concerns about borderline personality disorder or any other mental health condition, please consult a qualified mental health professional.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <h3 className="font-serif text-lg font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
              If you or someone you know is in crisis, please reach out immediately:
            </p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
              <li><strong>988 Suicide and Crisis Lifeline:</strong> Call or text <strong>988</strong> (available 24/7)</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Could BPD symptoms apply to you?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The MSI-BPD is a validated 10-question screening tool that can help you decide whether to seek a professional evaluation. Free, private, and completed entirely in your browser.</p>
            <Link href="/msi-bpd-screening" className="btn-primary text-sm">Take the MSI-BPD Screening</Link>
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
              <Link href="/msi-bpd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">MSI-BPD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated 10-question borderline personality disorder screening tool</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for depression symptoms with the PHQ-9 questionnaire</p>
              </Link>
              <Link href="/safety-plan" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Safety Plan</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Create a personalized safety plan for moments of crisis</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/dbt-skills-beginners" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DBT Skills for Beginners</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Learn the core skills of dialectical behavior therapy</p>
              </Link>
              <Link href="/blog/bipolar-vs-depression" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Bipolar Disorder vs Depression</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Understand the key differences between bipolar disorder and depression</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

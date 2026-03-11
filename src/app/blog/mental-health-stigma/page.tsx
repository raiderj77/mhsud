import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/mental-health-stigma`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "mental-health-stigma")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/mental-health-stigma",
  title: "Mental Health Stigma: What It Is, Why It Persists, and How to Fight It",
  description:
    "Stigma is one of the biggest barriers to mental health care. Learn what mental health stigma is, where it comes from, how it causes harm, and what actually reduces it.",
  keywords: [
    "mental health stigma",
    "stigma and mental illness",
    "reducing mental health stigma",
    "why people don't seek mental health help",
    "self-stigma",
    "mental health discrimination",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Does talking about mental health more openly actually reduce stigma?",
    answer:
      "Yes \u2014 but with nuance. Disclosure and contact-based approaches are the most effective stigma reduction methods. However, the way mental health is discussed matters: media portrayals that sensationalize violence, use stigmatizing language, or focus on the most extreme cases can increase stigma even while raising awareness. Humanizing, recovery-focused narratives from real people are what produce measurable attitude change.",
  },
  {
    question: "Is stigma worse in some cultures than others?",
    answer:
      "Yes. Stigma varies significantly across cultural contexts \u2014 shaped by values around independence, family honor, religious beliefs about mental illness, and the degree to which emotional expression is culturally encouraged or discouraged. This doesn\u2019t mean stigma is a fixed cultural feature \u2014 attitudes shift over time and through deliberate effort within every community.",
  },
  {
    question: "Can stigma cause physical harm?",
    answer:
      "Yes. The chronic stress of discrimination and stigma \u2014 including anticipating being stigmatized \u2014 is associated with measurable physiological stress responses. The isolation produced by stigma removes social support that buffers mental health. And the delay in treatment caused by stigma means mental health conditions worsen, producing functional, relational, and sometimes physical health consequences. Stigma is not just feelings \u2014 it has measurable health costs.",
  },
];

export default function MentalHealthStigmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Mental Health Stigma: What It Is, Why It Persists, and How to Fight It", description: "Stigma is one of the biggest barriers to mental health care. Learn what it is, where it comes from, how it causes harm, and what actually reduces it.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Mental Health Stigma", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">14 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Mental Health Stigma: What It Is, Why It Persists, and How to Fight It
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Mental health stigma is a set of negative attitudes, beliefs, and behaviors directed toward people with mental health conditions &mdash; including the internalized version that people with mental health conditions direct toward themselves. Stigma is one of the most significant barriers to mental health treatment: research consistently shows it delays help-seeking, reduces treatment engagement, worsens outcomes, and causes harm that is independent of the mental health condition itself. It is also addressable &mdash; and understanding it is the first step.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What Mental Health Stigma Is</h2>
            <p>
              Sociologist Erving Goffman (1963) defined stigma as a deeply discrediting attribute that reduces a person &ldquo;from a whole and usual person to a tainted, discounted one.&rdquo; Applied to mental health, stigma operates through three interconnected mechanisms:
            </p>
            <p>
              <strong>Public stigma:</strong> The negative attitudes and stereotypes that the general public holds about people with mental health conditions &mdash; that they are dangerous, unpredictable, weak, or responsible for their condition.
            </p>
            <p>
              <strong>Self-stigma:</strong> The internalization of those public stigmas by people with mental health conditions themselves &mdash; leading to shame, reduced self-worth, and the belief that one doesn&rsquo;t deserve help or is &ldquo;crazy.&rdquo;
            </p>
            <p>
              <strong>Structural stigma:</strong> Policies and institutional practices that disadvantage people with mental health conditions &mdash; inadequate insurance coverage for mental health care, discrimination in employment and housing, underfunding of mental health research relative to physical health.
            </p>
            <p>
              All three forms cause harm, but self-stigma is often the most immediately damaging &mdash; it is the one that lives inside the person and shapes their willingness to seek help, engage with treatment, and disclose their condition.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>The Numbers: How Stigma Affects Help-Seeking</h2>
            <p>The gap between mental health need and mental health treatment is striking:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Approximately <strong>57% of US adults</strong> with a mental illness received no treatment in the past year (SAMHSA, 2023)</li>
              <li>Stigma is consistently identified as one of the top reasons &mdash; alongside cost and access &mdash; that people don&rsquo;t seek mental health care</li>
              <li>The average delay between first onset of mental health symptoms and first treatment contact is <strong>11 years</strong> (Wang et al., 2005)</li>
              <li>People with depression wait an average of <strong>6&ndash;8 years</strong> before seeking treatment</li>
              <li>People with anxiety disorders wait an average of <strong>9&ndash;23 years</strong> before treatment</li>
            </ul>
            <p>
              These delays have real consequences: untreated mental health conditions worsen over time, become more entrenched, and produce broader functional impairment. What might have been a mild depression treated early becomes years of unnecessarily impaired functioning.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>Common Stigmatizing Myths &mdash; and the Reality</h2>
            <h3>&ldquo;Mental illness means someone is dangerous&rdquo;</h3>
            <p>
              <strong>Reality:</strong> People with mental health conditions are significantly more likely to be victims of violence than perpetrators. The small elevated risk of violence associated with some severe mental health conditions &mdash; primarily untreated psychosis &mdash; is dwarfed by the far greater violence risk associated with substance use, poverty, and social marginalization. Attributing violence primarily to mental illness is both inaccurate and harmful.
            </p>
            <h3>&ldquo;Mental illness is a sign of weakness&rdquo;</h3>
            <p>
              <strong>Reality:</strong> Mental health conditions are medical conditions with biological, psychological, and social causes. They occur in people across all demographics, personality types, and levels of resilience. Developing depression, anxiety, or PTSD is not evidence of weakness &mdash; it is evidence of being human in a world that sometimes produces overwhelming experiences.
            </p>
            <h3>&ldquo;People with mental health conditions can&rsquo;t recover&rdquo;</h3>
            <p>
              <strong>Reality:</strong> Recovery &mdash; defined as living a meaningful, self-determined life &mdash; is the expected outcome for most people who receive appropriate treatment. Major depressive disorder responds to treatment in 60&ndash;80% of cases. PTSD has evidence-based treatments with large effect sizes. Even schizophrenia &mdash; among the most severe mental health conditions &mdash; is associated with meaningful recovery and functional improvement in most people with access to quality care.
            </p>
            <h3>&ldquo;Therapy is for people who are falling apart&rdquo;</h3>
            <p>
              <strong>Reality:</strong> Therapy is as appropriate for maintenance and growth as it is for crisis. Athletes work with coaches when performing well; therapy is no different. The people who benefit most from therapy are often those who engage before a crisis, not after.
            </p>
            <h3>&ldquo;If you were really struggling, you&rsquo;d look like it&rdquo;</h3>
            <p>
              <strong>Reality:</strong> Mental health conditions are often invisible. Many people with significant depression, anxiety, OCD, or PTSD are highly functional in public contexts while struggling intensely in private. &ldquo;But they seem fine&rdquo; is one of the most common and harmful responses to mental health disclosure.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>Self-Stigma: The Internalized Barrier</h2>
            <p>Self-stigma develops when someone absorbs public stereotypes about mental illness and applies them to themselves. Common self-stigmatizing beliefs:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>&ldquo;I should be able to handle this on my own&rdquo;</li>
              <li>&ldquo;Needing help means I&rsquo;m weak&rdquo;</li>
              <li>&ldquo;I&rsquo;m broken&rdquo;</li>
              <li>&ldquo;If people knew, they would think less of me&rdquo;</li>
              <li>&ldquo;I don&rsquo;t deserve help &mdash; others have it worse&rdquo;</li>
              <li>&ldquo;Therapists will judge me&rdquo;</li>
            </ul>
            <p>
              Self-stigma is not a character flaw &mdash; it is a predictable outcome of absorbing cultural messages about mental illness. But it is also addressable.
            </p>
            <p>Research by Patrick Corrigan (2007) identifies several evidence-based approaches that reduce self-stigma:</p>
            <p>
              <strong>Disclosure:</strong> Selectively disclosing a mental health condition to trusted others &mdash; and finding that the response is acceptance rather than rejection &mdash; powerfully disconfirms the feared consequences of self-stigma.
            </p>
            <p>
              <strong>Peer contact:</strong> Connecting with others who have mental health conditions and are living full, functional lives provides powerful evidence against stigmatizing stereotypes.
            </p>
            <p>
              <strong>Cognitive reframing:</strong> Challenging the stigmatizing self-beliefs directly &mdash; similar to the cognitive work done in CBT.
            </p>
            <p>
              <strong>Self-compassion:</strong> Treating one&rsquo;s mental health struggle with the same compassion one would offer a close friend.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>Who Is Most Affected by Mental Health Stigma?</h2>
            <p>Stigma is not evenly distributed. Several groups face elevated barriers:</p>
            <p>
              <strong>Men:</strong> Cultural norms around masculinity in many communities discourage emotional expression and help-seeking. Men are significantly less likely to seek mental health treatment than women, and more likely to die by suicide. The phrase &ldquo;man up&rdquo; and its equivalents directly encode stigma into gender identity.
            </p>
            <p>
              <strong>Communities of color:</strong> In many communities, mental health stigma intersects with cultural values around strength, self-reliance, distrust of healthcare systems (historically grounded in real experiences of medical racism), and lack of culturally competent care options.
            </p>
            <p>
              <strong>People with substance use disorders:</strong> Substance use disorders carry particularly intense stigma &mdash; framed as moral failure rather than medical condition. This stigma is embedded even in clinical language (&ldquo;addict,&rdquo; &ldquo;abuser&rdquo;) and significantly delays treatment-seeking.
            </p>
            <p>
              <strong>Older adults:</strong> Mental health conditions are often attributed to &ldquo;normal aging&rdquo; in older adults, both by the individuals themselves and by healthcare providers. Stigma intersects with generation-specific attitudes toward mental health care.
            </p>
            <p>
              <strong>Healthcare and helping profession workers:</strong> Stigma in medical culture means that healthcare workers &mdash; who experience high rates of burnout, depression, anxiety, and PTSD &mdash; often face professional consequences if they disclose mental health struggles, creating dangerous silence around provider wellbeing.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What Actually Reduces Stigma</h2>
            <p>Research on stigma reduction identifies what works &mdash; and some approaches work better than others.</p>
            <p><strong>What works:</strong></p>
            <p>
              <strong>Contact-based education:</strong> Direct, humanizing contact with people who have mental health conditions &mdash; hearing personal stories, putting a face to the diagnosis &mdash; is the most evidence-based stigma reduction approach. Abstract education about mental health statistics is less effective than personal narrative.
            </p>
            <p>
              <strong>Recovery-focused messaging:</strong> Framing mental health conditions as treatable, recoverable conditions rather than permanent, defining identities shifts the public narrative toward hope and help-seeking.
            </p>
            <p>
              <strong>Language change:</strong> Moving from person-first language (&ldquo;a person with schizophrenia&rdquo; rather than &ldquo;a schizophrenic&rdquo;) reflects and reinforces the humanity of people with mental health conditions. Avoiding terms like &ldquo;crazy,&rdquo; &ldquo;psycho,&rdquo; and casual misuse of clinical terms (&ldquo;I&rsquo;m so OCD&rdquo;) reduces normalization of stigmatizing language.
            </p>
            <p>
              <strong>Open institutional disclosure:</strong> When public figures, institutions, and workplaces openly discuss mental health &mdash; normalizing both the conditions and the treatment &mdash; this produces measurable reductions in individual stigma.
            </p>
            <p><strong>What doesn&rsquo;t work as well:</strong></p>
            <p>
              Purely information-based campaigns without contact components produce smaller and less durable stigma reductions. Fear-based messaging (&ldquo;mental illness is dangerous&rdquo;) reliably increases stigma even when intended to raise awareness.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>If Stigma Has Been Keeping You From Getting Help</h2>
            <p>
              Recognizing stigma &mdash; including your own internalized version &mdash; for what it is can be a step toward separating it from your decision-making.
            </p>
            <p>A few questions worth sitting with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>If a close friend described to you exactly what you&rsquo;re experiencing, would you tell them they should be able to handle it alone?</li>
              <li>If you had a physical medical condition with the same functional impact as what you&rsquo;re experiencing, would you delay treatment?</li>
              <li>What specifically are you afraid would happen if you sought help &mdash; and how likely is that, really?</li>
            </ul>
            <p>
              The mental health conditions described on this site &mdash; depression, anxiety, PTSD, ADHD, OCD, substance use disorders &mdash; are not signs of weakness or failure. They are medical conditions that millions of people navigate with appropriate support. You deserve that support too.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              This article is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment. If you are experiencing a mental health condition, please consult a qualified healthcare professional &mdash; regardless of what anyone, including yourself, thinks about that choice.
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
            <h2 className="text-lg font-semibold text-sage-900 dark:text-sage-100 mb-2">Take a Free Mental Health Screening</h2>
            <p className="text-sm text-sage-700 dark:text-sage-400 mb-4">
              Use our free, confidential screening tools &mdash; no account needed, results are instant and private.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">GAD-7 Anxiety Check</Link>
              <Link href="/audit-alcohol-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">AUDIT Alcohol Screening</Link>
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
                { href: "/phq-9-depression-test", label: "PHQ-9 Depression Self-Check" },
                { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety Screening" },
                { href: "/audit-alcohol-test", label: "AUDIT Alcohol Screening" },
                { href: "/pcl-5-ptsd-screening", label: "PCL-5 PTSD Screening" },
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
                ["how-to-talk-to-doctor-about-mental-health", "how-to-find-a-therapist", "when-should-i-see-a-therapist", "depression-vs-anxiety"].includes(p.slug)
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

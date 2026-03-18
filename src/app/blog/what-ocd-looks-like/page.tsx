import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-ocd-looks-like`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-ocd-looks-like")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-ocd-looks-like",
  title: "OCD Myths vs Reality: What OCD Really Looks Like",
  description:
    "What OCD actually looks like beyond the stereotypes. Learn about subtypes, the anxiety cycle, ERP treatment, and the OCI-R screening tool.",
  keywords: [
    "what does OCD look like", "OCD myths vs reality", "OCD subtypes",
    "obsessive compulsive disorder signs", "OCD intrusive thoughts",
    "ERP therapy OCD", "OCI-R screening", "pure O OCD",
    "OCD vs OCPD", "harm OCD", "contamination OCD",
    "scrupulosity OCD", "OCD anxiety cycle", "OCD compulsions",
    "OCD reassurance seeking",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Is being organized the same as having OCD?",
    answer:
      "No. Enjoying organization is a personality preference. OCD involves unwanted intrusive thoughts that cause significant distress and compulsive behaviors performed to reduce that distress. The key difference is motivation: OCD is driven by fear and anxiety, not satisfaction or preference for tidiness.",
  },
  {
    question: "What are intrusive thoughts?",
    answer:
      "Intrusive thoughts are unwanted, involuntary thoughts, images, or urges that pop into your mind. Nearly everyone experiences them. In OCD, these thoughts get stuck \u2014 the person assigns excessive meaning to them and feels compelled to perform rituals to neutralize the anxiety. Having an intrusive thought does not mean you want to act on it.",
  },
  {
    question: "Can OCD be cured?",
    answer:
      "There is no cure for OCD, but it is highly treatable. Exposure and Response Prevention (ERP) is the gold-standard treatment and significantly reduces symptoms for most people. Many individuals achieve substantial improvement with ERP, and SSRIs may also be recommended as part of a comprehensive treatment plan.",
  },
  {
    question: "What is ERP therapy?",
    answer:
      "Exposure and Response Prevention is a specialized CBT approach for OCD. It involves gradually exposing a person to obsession triggers while resisting the compulsive response. Over time, the brain learns the feared outcome does not occur and anxiety naturally decreases without the compulsion.",
  },
  {
    question: "Is OCD an anxiety disorder?",
    answer:
      "The DSM-5 moved OCD into its own category called Obsessive-Compulsive and Related Disorders. While anxiety remains central to OCD, the reclassification reflects its unique obsession-compulsion cycle and distinct neurobiological characteristics that separate it from other anxiety conditions.",
  },
];

export default function WhatOCDLooksLikePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "OCD Myths vs Reality: What OCD Really Looks Like", description: "What OCD actually looks like beyond the stereotypes. Learn about subtypes, the anxiety cycle, ERP treatment, and the OCI-R screening tool.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What OCD Really Looks Like", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            OCD Myths vs Reality: What OCD Really Looks Like
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            &quot;I&apos;m so OCD about my desk.&quot; You&apos;ve probably heard someone say this — or something like it. But obsessive-compulsive disorder is not a personality quirk or a preference for neatness. It&apos;s a chronic mental health condition that affects roughly 2&ndash;3% of the population and can be profoundly disabling when left untreated. Here&apos;s what OCD actually looks like, beyond the stereotypes.
          </p>
          <div className="mt-6">
            <Link href="/oci-r-ocd-screening" className="btn-primary text-sm">
              Take the OCI-R OCD Self-Check &rarr;
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 dark:border-amber-400 p-6 rounded-r">
            <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Clinical Disclaimer</p>
            <p className="text-amber-700 dark:text-amber-400 text-sm">
              This article provides educational information about obsessive-compulsive disorder. It is not a substitute for professional medical advice or assessment. If you are experiencing a mental health crisis, call or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline, or call SAMHSA&apos;s National Helpline at <strong>1-800-662-4357</strong> for free, confidential treatment referral and information.
            </p>
          </div>

          <section>
            <h2>Common Myths About OCD</h2>
            <p>
              Misconceptions about OCD are widespread, and they do real harm. When people treat OCD as a quirky personality trait, it minimizes the experience of those who live with the condition and can delay people from seeking help.
            </p>
            <p>
              <strong>Myth: OCD is just being neat or organized.</strong> While contamination and symmetry are real OCD subtypes, many people with OCD have obsessions that have nothing to do with cleanliness. Someone with harm OCD may be tormented by intrusive thoughts about hurting a loved one. Someone with scrupulosity OCD may spend hours in religious or moral rumination. Neatness is not the defining feature — distress is.
            </p>
            <p>
              <strong>Myth: Everyone is &quot;a little OCD.&quot;</strong> Preferring a clean kitchen or organizing your bookshelf by color is not OCD. OCD involves intrusive, unwanted thoughts that cause significant anxiety and compulsive behaviors that a person feels driven to perform even when they recognize the behaviors are excessive. The difference is not degree — it&apos;s kind.
            </p>
            <p>
              <strong>Myth: OCD is a personality quirk you can just stop.</strong> OCD is a neurobiological condition. Brain imaging studies show differences in activity in the orbitofrontal cortex, anterior cingulate cortex, and basal ganglia in people with OCD. Telling someone with OCD to &quot;just stop&quot; is like telling someone with asthma to &quot;just breathe normally.&quot;
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>What OCD Actually Is: The Obsession-Compulsion Cycle</h2>
            <p>
              OCD operates through a cycle that repeats and reinforces itself. Understanding this cycle is essential for understanding why OCD is so difficult to manage without proper treatment.
            </p>
            <p>
              The cycle begins with an <strong>intrusive thought, image, or urge</strong> (the obsession). This triggers intense <strong>anxiety or distress</strong>. To relieve that distress, the person performs a <strong>compulsion</strong> — a behavior or mental act intended to neutralize the threat or reduce the anxiety. The compulsion provides temporary relief, which reinforces the cycle. The brain learns: &quot;The compulsion made the anxiety go away, so the threat must have been real.&quot; The next time the intrusive thought appears, the anxiety is just as strong — or stronger.
            </p>
            <p>
              This is why reassurance-seeking, one of the most common compulsions, ultimately makes OCD worse rather than better. Each time someone asks &quot;Are you sure I didn&apos;t leave the stove on?&quot; and receives reassurance, the brain gets a momentary hit of relief — but it also reinforces the idea that the worry was legitimate and that external reassurance is necessary to feel safe.
            </p>
          </section>

          <section>
            <h2>The Distress Component: Why OCD Thoughts Are Ego-Dystonic</h2>
            <p>
              A critical feature of OCD that often goes unmentioned is that obsessive thoughts are <strong>ego-dystonic</strong> — they conflict with the person&apos;s values, identity, and desires. A parent with harm OCD who has intrusive thoughts about hurting their child is horrified by those thoughts precisely because they love their child deeply. A person with scrupulosity OCD who obsesses about committing a sin does so because their faith matters profoundly to them.
            </p>
            <p>
              This is what makes OCD so painful. The thoughts attack what the person cares about most. The distress is not about the content of the thought itself — it&apos;s about what the person fears the thought says about them. Understanding this distinction is essential for anyone trying to support someone with OCD.
            </p>
          </section>

          <section>
            <h2>Common OCD Subtypes</h2>
            <p>
              OCD manifests in many forms. While the underlying mechanism (obsession &rarr; anxiety &rarr; compulsion &rarr; temporary relief) is the same, the content of obsessions and compulsions varies widely. Here are some of the most common subtypes:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { name: "Contamination OCD", desc: "Fear of germs, illness, or contamination. Compulsions often include excessive handwashing, cleaning, or avoidance of perceived contaminants." },
                { name: "Harm OCD", desc: "Unwanted intrusive thoughts about harming oneself or others. Compulsions may include avoidance of sharp objects, constant checking, or mental review for reassurance." },
                { name: "Symmetry and Ordering", desc: "Intense need for things to be symmetrical, even, or arranged in a specific way. Distress occurs when things feel 'not right' rather than from a specific feared outcome." },
                { name: "Checking OCD", desc: "Persistent doubt about whether something was done correctly — locks, stoves, emails. Compulsions involve repeated checking, sometimes dozens of times." },
                { name: "Pure-O (Intrusive Thoughts)", desc: "Characterized by distressing obsessions without visible compulsions. However, compulsions are usually present as mental rituals — rumination, mental reviewing, silent counting, or internal reassurance-seeking." },
                { name: "Scrupulosity", desc: "Obsessive concern about morality, religious purity, or ethics. Compulsions may include excessive praying, confession, or seeking reassurance about one's moral character." },
              ].map((s) => (
                <div key={s.name} className="card p-4">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{s.name}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{s.desc}</p>
                </div>
              ))}
            </div>
            <p>
              These subtypes are not mutually exclusive. Many people with OCD experience symptoms across multiple categories, and the focus of obsessions can shift over time.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>How OCD Differs from OCPD</h2>
            <p>
              Obsessive-compulsive disorder (OCD) and obsessive-compulsive personality disorder (OCPD) sound similar but are fundamentally different conditions. People with <strong>OCD</strong> experience their obsessions as unwanted and distressing — they recognize that their thoughts and behaviors are excessive. People with <strong>OCPD</strong>, by contrast, view their perfectionism and rigid standards as reasonable and even desirable.
            </p>
            <p>
              OCPD is characterized by a pervasive pattern of preoccupation with orderliness, perfectionism, and control. Unlike OCD, OCPD does not involve intrusive thoughts or the obsession-compulsion cycle. A person with OCPD may insist on doing things &quot;the right way&quot; because they genuinely believe their way is correct, while a person with OCD performs compulsions because they are terrified of what might happen if they don&apos;t.
            </p>
          </section>

          <section>
            <h2>How OCD Differs from General Anxiety</h2>
            <p>
              OCD and generalized anxiety disorder (GAD) both involve excessive worry, but the nature of that worry differs. <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">Generalized anxiety</Link> tends to involve realistic concerns (finances, health, relationships) that are blown out of proportion. OCD obsessions, by contrast, are often bizarre, taboo, or clearly irrational — and the person usually recognizes this, which adds to the distress.
            </p>
            <p>
              Another key difference is the compulsion component. While anxiety may lead to avoidance or worry, OCD drives specific, repetitive behaviors or mental acts that the person feels compelled to perform in response to the obsession. If the worry doesn&apos;t come with a ritualized response, it may indicate anxiety rather than OCD — though only a qualified professional can make that determination.
            </p>
          </section>

          <section>
            <h2>The OCI-R Screening Tool and Its 6 Subscales</h2>
            <p>
              The <Link href="/oci-r-ocd-screening" className="text-sage-600 dark:text-sage-400 underline">Obsessive-Compulsive Inventory &ndash; Revised (OCI-R)</Link> is a widely used, validated screening tool that measures OCD symptom severity across six subscales:
            </p>
            <ol>
              <li><strong>Washing</strong> &mdash; contamination-related cleaning behaviors</li>
              <li><strong>Checking</strong> &mdash; repeated verification behaviors</li>
              <li><strong>Ordering</strong> &mdash; need for symmetry and specific arrangements</li>
              <li><strong>Obsessing</strong> &mdash; unwanted intrusive thoughts</li>
              <li><strong>Hoarding</strong> &mdash; difficulty discarding items</li>
              <li><strong>Neutralizing</strong> &mdash; mental or behavioral acts to undo thoughts</li>
            </ol>
            <p>
              The OCI-R consists of 18 items and takes only a few minutes to complete. A total score of 21 or above may indicate symptoms consistent with OCD and suggests that a professional evaluation could be helpful. It is a screening tool, not a diagnostic instrument — a high score does not mean you have OCD, and a low score does not rule it out.
            </p>
          </section>

          <section>
            <h2>ERP: The Gold-Standard Treatment for OCD</h2>
            <p>
              Exposure and Response Prevention (ERP) is the most effective evidence-based treatment for OCD. ERP works by breaking the obsession-compulsion cycle. Under the guidance of a trained therapist, the person is gradually exposed to the thoughts, images, or situations that trigger their obsessions — and then practices resisting the compulsive response.
            </p>
            <p>
              Over time, this process — called habituation — teaches the brain that the anxiety naturally decreases on its own without the compulsion. The feared outcome does not occur, and the obsession loses its power. Research consistently shows that ERP can reduce OCD symptoms by 50&ndash;70% for most people who complete treatment.
            </p>
            <p>
              ERP is not easy. It requires deliberately facing what feels most threatening, which is why working with a therapist who specializes in OCD and ERP is important. The <a href="https://iocdf.org/find-help/" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">International OCD Foundation (IOCDF)</a> maintains a directory of OCD specialists that can help you find a qualified provider.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Why Reassurance-Seeking Doesn&apos;t Help</h2>
            <p>
              One of the most counterintuitive aspects of OCD is that reassurance — something that feels helpful in the moment — actually maintains and strengthens the disorder. When a person with OCD asks &quot;Did I lock the door?&quot; or &quot;Am I a bad person?&quot; and receives reassurance, the relief is temporary. The doubt returns, often stronger, because the brain has learned that it needs external validation to feel safe.
            </p>
            <p>
              This is why loved ones of people with OCD are often encouraged to learn about the condition and, with professional guidance, practice not providing reassurance — even though it feels unkind in the moment. Supporting someone with OCD means helping them build tolerance for uncertainty, not eliminating uncertainty for them.
            </p>
          </section>

          <section>
            <h2>How OCD Impacts Daily Life</h2>
            <p>
              OCD can consume hours of a person&apos;s day. Some people spend 3&ndash;8 hours daily engaged in compulsions or trapped in obsessive thought loops. The condition can affect every area of life: work performance suffers when checking rituals take precedence over tasks; relationships strain when a partner doesn&apos;t understand why reassurance never seems to be enough; social activities are avoided because they trigger obsessions.
            </p>
            <p>
              The shame and secrecy that often accompany OCD add another layer of difficulty. Many people with OCD — particularly those with taboo intrusive thoughts — suffer in silence for years before seeking help, fearing that their thoughts mean something terrible about who they are. On average, it takes 14&ndash;17 years from symptom onset for a person with OCD to receive appropriate treatment.
            </p>
          </section>

          <section>
            <h2>Prevalence: OCD Is More Common Than You Think</h2>
            <p>
              OCD affects an estimated 2&ndash;3% of the global population — roughly 1 in 40 adults. It occurs across all ages, genders, and cultural backgrounds, though symptoms often begin in childhood or early adulthood. Despite its prevalence, OCD remains widely misunderstood, which contributes to delays in screening and treatment.
            </p>
            <p>
              If you recognize yourself in any of the descriptions above, you are not alone — and effective help exists. The first step may be as simple as taking a brief screening to reflect on your experiences.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check your OCD symptoms</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The OCI-R is a clinically validated screening tool. Free, private, and takes about 3 minutes. Your answers never leave your browser.</p>
            <Link href="/oci-r-ocd-screening" className="btn-primary text-sm">Take the OCI-R OCD Self-Check</Link>
          </div>

          <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 dark:border-red-400 p-6 rounded-r">
            <p className="font-semibold text-red-800 dark:text-red-300 mb-2">Emergency Resources</p>
            <p className="text-red-700 dark:text-red-400 text-sm">
              If you are experiencing a mental health crisis or having thoughts of harming yourself or others:
            </p>
            <ul className="text-red-700 dark:text-red-400 text-sm mt-2 space-y-1">
              <li>&bull; Call or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline (available 24/7)</li>
              <li>&bull; Call SAMHSA&apos;s National Helpline at <strong>1-800-662-4357</strong> for free, confidential treatment referral</li>
              <li>&bull; Go to the nearest emergency room or call 911</li>
              <li>&bull; Contact the Crisis Text Line by texting HOME to 741741</li>
            </ul>
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
              <Link href="/oci-r-ocd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">OCI-R OCD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">18-item clinically validated OCD symptom self-check</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Clinically validated generalized anxiety screening tool</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/cognitive-distortions-list" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Cognitive Distortions List</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Common thinking patterns that contribute to anxiety and OCD</p>
              </Link>
              <Link href="/blog/gad-7-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Assessment Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How clinicians use and interpret anxiety screening scores</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

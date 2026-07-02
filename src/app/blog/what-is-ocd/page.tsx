import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/what-is-ocd`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "what-is-ocd")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/what-is-ocd",
  title: "What Is OCD? Symptoms, Misconceptions, and Treatment",
  description:
    "OCD is widely misunderstood. It is not about being neat or particular. Learn what obsessive-compulsive disorder actually is, how it works, and what effective treatment looks like.",
  keywords: [
    "what is OCD",
    "OCD symptoms",
    "obsessive compulsive disorder explained",
    "OCD vs neat",
    "OCD treatment",
    "how OCD works",
    "intrusive thoughts OCD",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "I have intrusive thoughts about harming someone. Does that mean I\u2019m dangerous?",
    answer:
      "No. Intrusive harm thoughts are a common OCD presentation that arise because the person finds them horrifying and contrary to their values. Research confirms people with harm OCD are not at elevated risk of acting on these thoughts. The distress they cause is evidence of how contrary they are to who you are.",
  },
  {
    question: "Is OCD an anxiety disorder?",
    answer:
      "The DSM-5 moved OCD into its own category, Obsessive-Compulsive and Related Disorders. While anxiety remains central to the OCD cycle, the reclassification reflects OCD\u2019s distinct neurobiology and the fact that ERP, not standard anxiety management, is the appropriate treatment approach.",
  },
  {
    question: "Can OCD get better on its own without treatment?",
    answer:
      "OCD rarely remits without treatment. Avoidance and compulsion patterns tend to entrench over time without intervention. OCD does fluctuate with stress and life changes, but effective treatment through ERP produces durable improvement rather than just temporary symptom relief.",
  },
  {
    question: "How long does OCD treatment take?",
    answer:
      "Most people see significant improvement with ERP over 12\u201320 sessions, shorter than many expect. More chronic or severe presentations may require longer treatment. Applying ERP principles independently after formal therapy is important for preventing relapse long-term.",
  },
];

export default function WhatIsOcdPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...articleJsonLd({ title: "What Is OCD? Symptoms, Misconceptions, and Treatment", description: "OCD is widely misunderstood and not about being neat. Learn what obsessive-compulsive disorder actually is, how it works, and what effective treatment looks like.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate }), author: { "@type": "Organization", "name": "Your Friendly Developer LLC" }, reviewedBy: { "@type": "Organization", "name": "Your Friendly Developer LLC" } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "What Is OCD?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">14 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            What Is OCD? Symptoms, Misconceptions, and Treatment
          </h1>
          <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools &middot; Your Friendly Developer LLC
    </p>
    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
      <span>
        Published:{" "}
        <time dateTime={POST_DATA.publishedDate}>
          {new Date(POST_DATA.publishedDate + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
      <span>
        Last reviewed:{" "}
        <time dateTime={POST_DATA.modifiedDate}>
          {new Date(POST_DATA.modifiedDate + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Obsessive-compulsive disorder (OCD) is a mental health condition characterized by intrusive, unwanted thoughts (obsessions) that cause significant distress, and repetitive behaviors or mental acts (compulsions) performed to reduce that distress. OCD affects approximately 1.2% of US adults annually (NIMH, 2023). It is frequently misunderstood, often misdiagnosed, and one of the most treatable conditions in psychiatry when the correct intervention, Exposure and Response Prevention, is applied.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>What OCD Is Not</h2>
            <p>
              Before defining OCD, it&rsquo;s worth clearing up the most pervasive misconceptions, because misunderstanding OCD causes real harm by delaying appropriate treatment.
            </p>
            <p>
              <strong>&ldquo;I&rsquo;m so OCD about my desk being neat.&rdquo;</strong> No. Preferring order and tidiness is a personality trait, not a disorder. OCD is not characterized by preference for neatness. Many people with OCD have no organizing compulsions at all.
            </p>
            <p><strong>OCD is not:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Liking things clean or organized</li>
              <li>Being a perfectionist</li>
              <li>Double-checking a lock once before leaving</li>
              <li>Being particular about routines</li>
              <li>Worrying about normal life concerns</li>
            </ul>
            <p><strong>OCD is:</strong></p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Intrusive, unwanted thoughts that feel deeply distressing and ego-dystonic (contrary to the person&rsquo;s values and sense of self)</li>
              <li>Compulsive behaviors or mental rituals performed not because they feel good but because they temporarily reduce unbearable anxiety</li>
              <li>A pattern that typically consumes more than one hour per day and significantly impairs functioning</li>
            </ul>
            <p>
              The casual misuse of &ldquo;OCD&rdquo; as a personality descriptor both trivializes a serious condition and causes people with actual OCD to doubt whether their experience is real or severe enough to warrant help.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2>The OCD Cycle: How It Actually Works</h2>
            <p>OCD operates through a specific, self-reinforcing cycle:</p>
            <p><strong>1. Trigger:</strong> An internal thought, image, or impulse arises, or an external situation triggers one.</p>
            <p><strong>2. Obsession:</strong> The thought is interpreted as meaningful, dangerous, or revealing of something terrible. The person cannot dismiss it the way most people dismiss passing thoughts.</p>
            <p><strong>3. Anxiety:</strong> The interpretation of the thought as threatening produces intense anxiety, shame, or disgust.</p>
            <p><strong>4. Compulsion:</strong> To reduce the anxiety, the person performs a behavior (washing, checking, arranging) or mental act (counting, praying, mentally reviewing, thought-suppression). This works, anxiety decreases temporarily.</p>
            <p><strong>5. Reinforcement:</strong> The relief from the compulsion teaches the brain that the compulsion was necessary. The intrusive thought returns with more urgency. The cycle tightens.</p>
            <p>
              The compulsion is the key: it provides short-term relief but maintains and strengthens the OCD long-term. This is why effective OCD treatment, Exposure and Response Prevention, focuses specifically on breaking the compulsion, not just managing the obsession.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>Types of OCD: The Symptom Dimensions</h2>
            <p>
              OCD presents across several distinct but often overlapping symptom dimensions. These are not separate disorders but different manifestations of the same underlying process.
            </p>
            <h3>Contamination OCD</h3>
            <p>
              Fear of contamination, by germs, chemicals, disease, or &ldquo;moral&rdquo; contamination, driving compulsive washing, cleaning, or avoidance. This is the most publicly recognized OCD presentation, but it&rsquo;s only one of many.
            </p>
            <h3>Harm OCD</h3>
            <p>
              Intrusive thoughts about harming oneself or others, not desired thoughts, but ego-dystonic thoughts the person finds horrifying. Compulsions include checking that harm didn&rsquo;t occur, seeking reassurance, and mental review. <strong>Important:</strong> Intrusive harm thoughts in OCD are not impulses the person wants to act on. People with harm OCD are not dangerous, they are typically deeply caring people who are horrified by the thoughts precisely because harming others is contrary to their values.
            </p>
            <h3>Symmetry and Ordering OCD</h3>
            <p>
              A compulsive need for objects to be arranged symmetrically, perfectly, or &ldquo;just right&rdquo;, often accompanied by a vague sense that something bad will happen if things aren&rsquo;t arranged correctly, or simply an intolerable feeling of incompleteness that only resolves when everything is &ldquo;right.&rdquo;
            </p>
            <h3>Checking OCD</h3>
            <p>
              Repeated checking of locks, appliances, or completed actions (sent email, turned off the stove) driven by doubt (&ldquo;Did I really do it?&rdquo;) and fear of catastrophic consequences from negligence. Reassurance-seeking is a form of checking compulsion.
            </p>
            <h3>Intrusive Thoughts OCD (Pure O)</h3>
            <p>
              &ldquo;Pure O&rdquo; is an informal term for OCD presentations dominated by obsessions with less visible behavioral compulsions. Common content: sexual thoughts that feel repugnant, blasphemous thoughts for religious people, intrusive doubts about one&rsquo;s sexual orientation or identity, or harm thoughts as described above. Mental compulsions (reviewing, neutralizing, analyzing) replace overt behavioral ones.
            </p>
            <p>
              The &ldquo;Pure O&rdquo; label is somewhat misleading, virtually all OCD involves compulsions, but they may be entirely mental rather than behavioral.
            </p>
            <h3>Relationship OCD (ROCD)</h3>
            <p>
              Persistent, intrusive doubting about romantic relationships, &ldquo;Do I really love them? Are they really the right person? What if I don&rsquo;t feel enough?&rdquo;, driving reassurance-seeking, comparison, and mental review. ROCD causes significant distress and relationship impairment.
            </p>
            <h3>Scrupulosity</h3>
            <p>
              OCD focused on religion, morality, or ethics, fear of sinning, doing something immoral, or being a fundamentally bad person. Common in religious contexts but also occurs in secular form as hypermorality.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h2>Intrusive Thoughts: What Everyone Has, What OCD Does Differently</h2>
            <p>
              Intrusive thoughts, unwanted, distressing thoughts about harm, sexuality, contamination, or taboo subjects, are a <strong>universal human experience</strong>. Research by Rachman and de Silva (1978) found that approximately 94% of people report having intrusive thoughts with content similar to clinical OCD obsessions.
            </p>
            <p>What distinguishes OCD from the normal experience of intrusive thoughts:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-900 dark:text-neutral-100">Normal intrusive thoughts</th>
                    <th className="text-left py-2 font-semibold text-neutral-900 dark:text-neutral-100">OCD obsessions</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700 dark:text-neutral-300">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Pass quickly without significant distress</td>
                    <td className="py-2">Produce intense distress that persists</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Don&rsquo;t feel meaningful or revealing</td>
                    <td className="py-2">Feel like they reveal something terrible about you</td>
                  </tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800">
                    <td className="py-2 pr-4">Don&rsquo;t trigger behavioral responses</td>
                    <td className="py-2">Trigger compulsions to neutralize distress</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Occasional</td>
                    <td className="py-2">Frequent, often daily</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The thought is not the problem, it&rsquo;s what happens next. In OCD, intrusive thoughts are fused with identity (&ldquo;this thought reveals who I really am&rdquo;) and treated as requiring an urgent response. In people without OCD, the same thought passes without meaningful impact.
            </p>
            <p>
              This distinction is crucial because people with harm OCD or sexual intrusive thoughts often feel profound shame and fear that having the thought means they want to act on it. They don&rsquo;t. The horror the thought provokes is itself evidence of how contrary it is to their actual values.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>OCD Diagnosis: What It Requires</h2>
            <p>DSM-5 criteria for OCD require:</p>
            <ol className="list-decimal pl-5 space-y-2">
              <li><strong>Obsessions</strong>, recurrent, persistent thoughts, urges, or images that are experienced as intrusive and unwanted, and cause marked anxiety</li>
              <li><strong>Compulsions</strong>, repetitive behaviors or mental acts performed in response to obsessions, aimed at reducing anxiety or preventing a feared outcome</li>
              <li><strong>Time:</strong> Obsessions and compulsions take more than 1 hour per day, OR cause significant distress or functional impairment</li>
              <li><strong>Not better explained</strong> by another condition or substance</li>
            </ol>
            <p>
              The OCI-R is a validated research instrument that screens for OCD symptom severity across six dimensions. It is used in clinical and research settings to assess symptom patterns.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What Makes OCD Treatment Different</h2>
            <p>
              OCD requires specialized treatment, not just general CBT or anxiety management. Understanding why explains the treatment approach.
            </p>
            <p><strong>Why general anxiety management doesn&rsquo;t work for OCD (and can make it worse):</strong></p>
            <p>
              Standard anxiety management, relaxation, distraction, cognitive reassurance, functions as a compulsion in OCD. It reduces anxiety in the moment, which reinforces the OCD cycle. Breathing exercises and relaxation don&rsquo;t teach the brain that the obsessional thought is harmless, they just provide another avenue of relief that maintains the disorder.
            </p>
            <p><strong>Exposure and Response Prevention (ERP), the gold standard:</strong></p>
            <p>
              ERP works by systematically confronting feared triggers (exposure) while deliberately refraining from compulsions (response prevention). Over repeated trials, the anxiety naturally decreases through habituation, and the brain learns that the feared outcome doesn&rsquo;t occur and that the anxiety is tolerable without the compulsion.
            </p>
            <p>
              ERP is uncomfortable by design, it requires tolerating the anxiety rather than neutralizing it. This is the mechanism of change. A therapist trained in ERP guides this process carefully, starting from less distressing situations and building up.
            </p>
            <p>
              <strong>The key message:</strong> If you&rsquo;ve been in therapy for OCD but the therapist hasn&rsquo;t used ERP, or if the work has focused primarily on understanding why you have the thoughts rather than practicing tolerating them, it may not have been OCD-specific treatment. Finding an ERP-trained therapist is essential.
            </p>
            <p>
              The International OCD Foundation maintains a therapist directory at <strong>iocdf.org</strong>, this is the most reliable way to find clinicians with verified OCD specialization.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>Medication for OCD</h2>
            <p>SSRIs are the first-line pharmacological treatment for OCD, typically at higher doses than used for depression:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Fluvoxamine (Luvox):</strong> FDA-approved specifically for OCD</li>
              <li><strong>Fluoxetine, sertraline, paroxetine:</strong> FDA-approved for OCD</li>
              <li><strong>Clomipramine (Anafranil):</strong> A tricyclic antidepressant with the longest evidence base for OCD; effective but more side effects</li>
            </ul>
            <p>
              Medication typically reduces symptom severity by approximately 40&ndash;60%, meaningful but partial. Most clinicians recommend ERP alongside medication rather than medication alone for OCD.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-5">
            <p className="text-sm text-amber-900 dark:text-amber-200 font-semibold mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              This article is for informational and educational purposes only. It is not a substitute for professional evaluation, diagnosis, or treatment. OCD diagnosis and treatment planning requires a qualified mental health professional experienced in OCD assessment.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-5">
            <p className="text-sm text-red-900 dark:text-red-200 font-semibold mb-2">Crisis Resources</p>
            <p className="text-sm text-red-800 dark:text-red-300 mb-2">
              If you are in crisis or having thoughts of self-harm, please reach out now:
            </p>
            <ul className="text-sm text-red-800 dark:text-red-300 space-y-1">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong>, Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong>, Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong>, <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="rounded-lg bg-sage-50 dark:bg-sage-950/30 border border-sage-200 dark:border-sage-800 p-6 text-center">
            <h2 className="text-lg font-semibold text-sage-900 dark:text-sage-100 mb-2">Check in on your mental health</h2>
            <p className="text-sm text-sage-700 dark:text-sage-400 mb-4">
              Free, private screenings for depression and anxiety. Results stay in your browser.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="inline-block rounded-md bg-sage-600 px-5 py-2 text-sm font-medium text-white hover:bg-sage-700 transition">GAD-7 Anxiety Check</Link>
            </div>
          </div>

          {/* Author Bio */}
          <div className="card p-5 sm:p-6 mb-8 border-sage-200 dark:border-sage-800 bg-sage-50/50 dark:bg-sage-950/20">
  <div className="flex gap-4 items-start">
    <div className="w-12 h-12 rounded-full bg-sage-100 dark:bg-sage-900 flex items-center justify-center flex-shrink-0">
      <span className="text-sage-600 dark:text-sage-400 text-lg">&#x1F4BB;</span>
    </div>
    <div>
      <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-1">
        MindCheck Tools, Your Friendly Developer LLC
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
        Publisher and maintainer of free, evidence-based mental health screening tools for adults.
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
        Content reviewed for clinical accuracy against authoritative sources including NIMH, APA, CDC, and WHO.
      </p>
    </div>
  </div>
</div>

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
                ["what-ocd-looks-like", "what-is-anxiety", "how-to-find-a-therapist"].includes(p.slug)
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

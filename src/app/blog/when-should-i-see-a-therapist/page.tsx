import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/when-should-i-see-a-therapist`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "when-should-i-see-a-therapist")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/when-should-i-see-a-therapist",
  title: "When Should I See a Therapist? 10 Signs",
  description:
    "Not sure if therapy is for you? These 10 signs suggest it may be time to talk to a mental health professional \u2014 and what to expect when you do.",
  keywords: [
    "when to see a therapist",
    "do I need therapy",
    "signs you need a therapist",
    "should I see a therapist",
    "how to know if you need mental health help",
    "finding a therapist",
    "therapy for anxiety",
    "therapy for depression",
    "first therapy session",
    "types of therapists",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How do I know if I need a therapist or a psychiatrist?",
    answer:
      "Therapists provide talk therapy; psychiatrists primarily manage medication. Most people start with a therapist, who can refer you to a psychiatrist if medication seems appropriate. If you\u2019re experiencing severe symptoms that significantly impair functioning, a psychiatrist evaluation may be the right first call.",
  },
  {
    question: "What if I\u2019ve tried therapy before and it didn\u2019t help?",
    answer:
      "Therapeutic fit matters enormously. Research suggests that the quality of the therapeutic relationship (often called the \u201Ctherapeutic alliance\u201D) is one of the strongest predictors of outcome \u2014 sometimes more than the specific technique used. If therapy hasn\u2019t worked before, try a different therapist before concluding therapy doesn\u2019t work for you.",
  },
  {
    question: "Is it okay to see a therapist if nothing is really wrong?",
    answer:
      "Absolutely. Many people use therapy proactively \u2014 to build resilience, understand patterns, improve relationships, or prepare for a major life transition. There\u2019s no minimum threshold of suffering required to benefit from support.",
  },
  {
    question: "How long does therapy take?",
    answer:
      "It depends entirely on what you\u2019re working on and what kind of therapy is used. Some people resolve a specific issue in 6\u201312 sessions. Others benefit from ongoing support over years. Your therapist should discuss goals and expected timelines with you early on, and the plan should be revisited regularly.",
  },
  {
    question: "Can I do therapy online?",
    answer:
      "Yes. Telehealth therapy has expanded dramatically and is now covered by most major insurance plans. Research consistently shows that online therapy produces outcomes comparable to in-person sessions for most conditions (Luo et al., 2020).",
  },
];

export default function WhenShouldISeeATherapistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "When Should I See a Therapist? 10 Signs", description: "Not sure if therapy is for you? These 10 signs suggest it may be time to talk to a mental health professional \u2014 and what to expect when you do.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "When Should I See a Therapist?", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            When Should I See a Therapist? 10 Signs
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            You should consider seeing a therapist when emotional distress is affecting your daily functioning, relationships, work, or quality of life — or when you feel stuck and self-directed coping hasn&apos;t helped. Therapy isn&apos;t only for crisis situations. Research consistently shows that early intervention produces better outcomes than waiting until symptoms become severe (Wang et al., 2005, <em>American Journal of Psychiatry</em>).
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>The biggest misconception about therapy</h2>
            <p>
              Most people wait too long.
            </p>
            <p>
              Research from the Harvard Medical School found that the average delay between first experiencing mental health symptoms and seeking treatment is <strong>11 years</strong> (Wang et al., 2005). That&apos;s not because people don&apos;t want help — it&apos;s because most people aren&apos;t sure their situation is &quot;bad enough&quot; to warrant it.
            </p>
            <p>
              The truth is that therapy isn&apos;t reserved for crisis. It&apos;s a space for anyone who wants support in navigating life — whether that&apos;s managing a specific challenge, processing a difficult experience, improving relationships, or simply understanding themselves better.
            </p>
            <p>
              You don&apos;t need to be in crisis to benefit from therapy. You just need to be a person with a mind.
            </p>
          </section>

          {/* Section 2 — Signs 1-3 */}
          <section>
            <h2>10 signs it may be time to see a therapist</h2>

            <h3>1. You feel overwhelmed more often than not</h3>
            <p>
              Everyone has difficult weeks. But if you&apos;ve been feeling overwhelmed, anxious, sad, or emotionally exhausted for two or more weeks — and it doesn&apos;t seem to be tied to a specific, passing event — that pattern is worth taking seriously.
            </p>
            <p>
              Persistent overwhelm is one of the most common signals that emotions need more support than everyday coping provides. A therapist can help you understand what&apos;s driving it and build strategies to manage it more effectively.
            </p>

            <h3>2. Your emotions are affecting your daily life</h3>
            <p>
              Struggling to get out of bed. Dreading going to work. Withdrawing from people you care about. Losing interest in activities you used to enjoy.
            </p>
            <p>
              When emotional states start shaping your behavior in ways that feel limiting or involuntary, that&apos;s a sign they&apos;re exceeding your current capacity to manage them alone. This isn&apos;t weakness — it&apos;s information. The <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9 Depression Self-Check</Link> and <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 Anxiety Self-Check</Link> can help you understand whether the pattern you&apos;re experiencing aligns with recognized clinical thresholds.
            </p>

            <h3>3. You&apos;re using substances more to cope</h3>
            <p>
              Drinking more to relax, using substances to manage stress, sleep, or social situations — when the frequency or quantity creeps upward as a coping mechanism, that&apos;s a signal worth paying attention to.
            </p>
            <p>
              This isn&apos;t a judgment about substance use itself. It&apos;s about noticing whether a behavior is becoming load-bearing in a way that concerns you. A counselor can help you examine what&apos;s underneath it without shame or pressure. Consider also taking the <Link href="/audit-alcohol-test" className="text-sage-600 dark:text-sage-400 underline">AUDIT Alcohol Use Screen</Link> for more clarity.
            </p>
          </section>

          {/* Section 3 — Signs 4-5 */}
          <section>
            <h3>4. You&apos;re experiencing physical symptoms without a clear cause</h3>
            <p>
              Stress and emotional distress don&apos;t stay neatly contained to the mind. They show up in the body: persistent headaches, GI problems, chronic fatigue, frequent illness, muscle tension, or unexplained pain.
            </p>
            <p>
              When physical symptoms accompany emotional distress and a medical workup doesn&apos;t explain them, therapy — particularly cognitive behavioral approaches — has strong evidence for reducing somatic symptoms linked to stress and anxiety (Hofmann et al., 2012).
            </p>

            <h3>5. Something traumatic has happened</h3>
            <p>
              You don&apos;t have to wait to see whether trauma &quot;sticks&quot; before reaching out for support. Early intervention after traumatic events is associated with reduced risk of developing PTSD (Kearns et al., 2012).
            </p>
            <p>
              Trauma takes many forms — not just the dramatic, obvious kind. Grief, a difficult relationship ending, a medical diagnosis, job loss, childhood experiences — all of these can have lasting psychological impact. If something happened and you&apos;re not okay, that&apos;s enough reason to seek support.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 — Signs 6-7 */}
          <section>
            <h3>6. Your relationships feel harder than they should</h3>
            <p>
              Recurring conflict with a partner, difficulty setting limits with family, isolation from friends, or feeling fundamentally misunderstood in close relationships — these are some of the most common reasons people seek therapy, and some of the areas where it produces the clearest results.
            </p>
            <p>
              Therapy provides a space to look at relational patterns with curiosity rather than shame, and to build skills that change how you show up in the relationships that matter most.
            </p>

            <h3>7. You&apos;re experiencing persistent grief or loss</h3>
            <p>
              Grief follows a different timeline for everyone. If you&apos;re still struggling significantly months after a loss — whether that&apos;s a person, a relationship, a job, or an identity — and the grief isn&apos;t softening, complicated grief can benefit from professional support.
            </p>
            <p>
              Research shows that untreated complicated grief can persist for years and increases risk for depression, anxiety, and health complications (Shear et al., 2011). You don&apos;t have to grieve alone.
            </p>
          </section>

          {/* Section 5 — Signs 8-10 */}
          <section>
            <h3>8. You have thoughts that frighten you</h3>
            <p>
              Intrusive thoughts, thoughts of self-harm, thoughts that feel out of character, persistent dark thoughts — any thought that scares you is worth bringing to a professional. Intrusive thoughts are extremely common and do not mean you will act on them. But they also deserve skilled attention, not isolation.
            </p>
            <p>
              If you are having thoughts of hurting yourself or others, please use the crisis resources at the bottom of this page right now.
            </p>

            <h3>9. You&apos;re struggling with something you&apos;ve been struggling with for a while</h3>
            <p>
              If there&apos;s a pattern in your life — the same recurring relationship dynamic, the same self-sabotage, the same emotional response to certain triggers — that&apos;s been showing up for years without changing, therapy is specifically designed for exactly that.
            </p>
            <p>
              Patterns that feel hardwired often have understandable origins. A skilled therapist helps you see those origins clearly enough to make different choices.
            </p>

            <h3>10. You just have a sense that something isn&apos;t right</h3>
            <p>
              Sometimes there&apos;s no clear symptom or crisis — just a persistent feeling that something is off, that you&apos;re not fully okay, that you want to understand yourself better.
            </p>
            <p>
              That&apos;s enough. You don&apos;t have to justify or prove a need for support. Curiosity about your own mind is one of the most valid reasons to seek therapy there is.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>&quot;But I don&apos;t think my problems are serious enough&quot;</h2>
            <p>
              This is one of the most common reasons people delay seeking help. And it&apos;s understandable — nobody wants to feel like they&apos;re making a big deal out of nothing.
            </p>
            <p>
              Here&apos;s the reframe: therapy doesn&apos;t require your problems to meet a severity threshold. It&apos;s a service for human beings who want support. You wouldn&apos;t wait until a minor injury became serious before treating it. You don&apos;t have to wait until you&apos;re in crisis to take care of your mental health.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2>What to expect when you first see a therapist</h2>
            <p>
              The first session (often called an intake or initial assessment) is primarily about getting to know each other. Your therapist will ask about what brought you in, your background, what you&apos;re hoping to work on, and relevant history. You don&apos;t have to have polished answers — bringing what&apos;s true is enough.
            </p>
            <p>
              You won&apos;t be judged for what you share. The therapeutic relationship is built on confidentiality (with narrow legal exceptions your therapist will explain), non-judgment, and your goals.
            </p>
            <p>
              Many people feel both relief and awkwardness in the first session. Both are completely normal.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Section 8 */}
          <section>
            <h2>How to find a therapist</h2>
            <p>
              <strong>Insurance:</strong> Check your insurance provider&apos;s directory for in-network mental health providers. Many insurers now include telehealth options.
            </p>
            <p>
              <strong>Psychology Today Directory:</strong> <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">psychologytoday.com/us/therapists</a> — searchable by location, specialty, insurance, and approach.
            </p>
            <p>
              <strong>Open Path Collective:</strong> Reduced-cost therapy for individuals earning under $100K. Sessions typically $30–$80.
            </p>
            <p>
              <strong>Community mental health centers:</strong> Often offer sliding-scale fees based on income.
            </p>
            <p>
              <strong>Your primary care physician:</strong> Can provide referrals and is often the fastest entry point into the mental health system.
            </p>
            <p>
              <strong>Employee Assistance Programs (EAPs):</strong> If your employer offers one, EAPs typically provide 3–8 free sessions with no cost to you.
            </p>
            <p>
              Don&apos;t let a single unanswered phone call or a two-week wait for an appointment become a reason to give up. Persistence in this process pays off.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2>What type of therapist should you see?</h2>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Provider Type</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Credentials</th>
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">What They Do</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Prescribe Meds?</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Psychologist</td><td className="py-2 pr-4">PhD / PsyD</td><td className="py-2 pr-4">Assessment, therapy, testing</td><td className="py-2">No (most states)</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Licensed Counselor</td><td className="py-2 pr-4">LPC / LCPC</td><td className="py-2 pr-4">Individual/group therapy</td><td className="py-2">No</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Social Worker</td><td className="py-2 pr-4">LCSW</td><td className="py-2 pr-4">Therapy, case management</td><td className="py-2">No</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Marriage &amp; Family Therapist</td><td className="py-2 pr-4">LMFT</td><td className="py-2 pr-4">Relational therapy</td><td className="py-2">No</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4">Psychiatrist</td><td className="py-2 pr-4">MD / DO</td><td className="py-2 pr-4">Diagnosis, medication management</td><td className="py-2">Yes</td></tr>
                  <tr><td className="py-2 pr-4">Primary Care Physician</td><td className="py-2 pr-4">MD / DO</td><td className="py-2 pr-4">Initial evaluation, medication referral</td><td className="py-2">Yes</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              For most people starting therapy, an LPC, LCSW, or psychologist is the right starting point. If you think medication may be part of your treatment, your therapist can refer you to a prescriber once they know you better.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. If you are experiencing distress, a qualified mental health professional can help you determine the right next steps.
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
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Not sure where you stand?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">A quick screening can help you understand your symptoms. Free, private, and your answers never leave your browser.</p>
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
              <Link href="/audit-alcohol-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">AUDIT Alcohol Use Screen</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO-validated alcohol use screening</p>
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
              <Link href="/blog/cognitive-distortions-list" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Cognitive Distortions: 15 Thinking Errors</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Common thinking patterns that fuel anxiety and depression</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

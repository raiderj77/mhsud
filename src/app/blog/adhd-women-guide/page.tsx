import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/adhd-women-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "adhd-women-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/adhd-women-guide",
  title: "ADHD in Women: Why It Goes Undiagnosed and What to Do About It",
  description:
    "Women with ADHD are diagnosed 5-10 years later than men on average. Learn why ADHD presents differently in women, the role of hormones, and how to get screened.",
  keywords: [
    "ADHD in women",
    "women ADHD symptoms",
    "ADHD test women",
    "female ADHD",
    "undiagnosed ADHD women",
    "ADHD women vs men",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "Why is ADHD underdiagnosed in women?",
    answer:
      "ADHD research historically focused on hyperactive boys, creating diagnostic criteria that miss the predominantly inattentive presentation more common in women. Women also develop sophisticated masking strategies \u2014 overcompensation, excessive planning, perfectionism \u2014 that hide symptoms. Additionally, clinicians often attribute ADHD symptoms in women to anxiety or depression, leading to misdiagnosis rather than missed diagnosis.",
  },
  {
    question: "Can ADHD symptoms get worse during perimenopause?",
    answer:
      "Yes. Estrogen supports dopamine production in the brain, and dopamine is the primary neurotransmitter affected in ADHD. As estrogen levels decline during perimenopause, many women experience a significant worsening of ADHD symptoms \u2014 particularly difficulty concentrating, memory problems, and emotional regulation challenges. Women diagnosed with ADHD earlier may need medication adjustments during this transition.",
  },
  {
    question: "Is ADHD in women different from ADHD in men?",
    answer:
      "The underlying neurobiology is the same, but the presentation often differs. Women are more likely to have the inattentive presentation (difficulty focusing, disorganization, forgetfulness) rather than the hyperactive-impulsive type. Women also report higher rates of emotional dysregulation, rejection sensitivity, and internalized symptoms like shame and anxiety compared to men with ADHD.",
  },
  {
    question: "What does undiagnosed ADHD look like in adult women?",
    answer:
      "Common signs include chronic feelings of being overwhelmed, difficulty maintaining routines despite extensive planning, time blindness, emotional reactivity that feels disproportionate, a pattern of starting projects but not finishing them, and a persistent sense that you are not living up to your potential. Many undiagnosed women describe feeling like they are \u201cfaking\u201d competence and exhausted from the effort.",
  },
];

export default function AdhdWomenGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "ADHD in Women: Why It Goes Undiagnosed and What to Do About It", description: "Women with ADHD are diagnosed 5-10 years later than men on average. Learn why ADHD presents differently in women and how to get screened.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "ADHD in Women Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            ADHD in Women: Why It Goes Undiagnosed and What to Do About It
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Women with ADHD are diagnosed on average five to ten years later than men. Many are not identified until their 30s, 40s, or later &mdash; often only after a child receives a screening or after years of being treated for anxiety and depression that never fully responded to standard approaches. The problem is not that ADHD is rare in women. It is that the way ADHD presents in women does not match the stereotype most people &mdash; including many clinicians &mdash; still carry.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
            </p>
          </div>

          <section>
            <h2>Why ADHD looks different in women</h2>
            <p>
              The image most people hold of ADHD &mdash; a hyperactive boy who cannot sit still in class &mdash; was shaped by decades of research conducted primarily on male children. This created diagnostic criteria and clinical expectations that systematically miss the way ADHD manifests in girls and women.
            </p>
            <p>
              Women with ADHD are more likely to present with the predominantly inattentive type. Rather than external hyperactivity, they experience internal chaos: racing thoughts, difficulty prioritizing, chronic disorganization, and an overwhelming sense that they cannot keep up with the demands of daily life. From the outside, they may appear to be functioning well. Internally, the effort required to maintain that appearance is exhausting.
            </p>
            <p>
              Key differences in how ADHD tends to present in women include:
            </p>
            <ul>
              <li><strong>Internal rather than external symptoms:</strong> Daydreaming instead of disrupting class, mental restlessness instead of physical hyperactivity</li>
              <li><strong>Masking through overcompensation:</strong> Excessive list-making, rigid routines, and perfectionism developed to compensate for executive function deficits</li>
              <li><strong>Emotional dysregulation:</strong> Intense emotional reactions, rejection sensitivity, and mood swings that are often attributed to anxiety or personality rather than ADHD</li>
              <li><strong>Time blindness:</strong> Chronic lateness, underestimating how long tasks take, and difficulty planning ahead</li>
              <li><strong>Social masking:</strong> Mimicking socially expected behaviors to fit in, which is exhausting and often leads to burnout</li>
            </ul>
          </section>

          <section>
            <h2>The misdiagnosis cycle: anxiety, depression, and what gets missed</h2>
            <p>
              Women with undiagnosed ADHD frequently seek help for symptoms that are downstream effects of their ADHD rather than the root cause. The chronic stress of managing undiagnosed ADHD produces genuine anxiety. The sense of falling short despite enormous effort produces real depressive symptoms. So clinicians treat what they see &mdash; anxiety and depression &mdash; without investigating what is driving them.
            </p>
            <p>
              This creates a frustrating pattern: medications for anxiety or depression may partially help but never fully resolve the problem, because the underlying ADHD remains unaddressed. Many women describe years of therapy and medication changes before someone finally asks the right questions about attention, executive function, and childhood behavior.
            </p>
            <p>
              A <Link href="/adhd-test-women" className="text-sage-600 dark:text-sage-400 underline">screening designed for women&apos;s ADHD symptoms</Link> can help identify patterns that standard screening may miss. If you have been treated for anxiety or depression without full improvement, ADHD is worth exploring as a contributing factor.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How hormones affect ADHD symptoms across the lifespan</h2>
            <p>
              One of the most important and underrecognized factors in women&apos;s ADHD is the role of hormones. Estrogen supports dopamine production and receptor sensitivity in the brain. Since ADHD is fundamentally a dopamine regulation issue, estrogen fluctuations directly affect symptom severity.
            </p>
            <p>
              This creates predictable patterns across the hormonal lifecycle:
            </p>
            <ul>
              <li><strong>Premenstrual phase:</strong> Many women with ADHD report significant symptom worsening in the week before their period, when estrogen drops. Concentration, emotional regulation, and executive function may deteriorate noticeably</li>
              <li><strong>Pregnancy:</strong> Rising estrogen during pregnancy can temporarily improve ADHD symptoms for some women, while the cognitive demands of pregnancy worsen them for others</li>
              <li><strong>Postpartum:</strong> The dramatic estrogen drop after delivery, combined with sleep deprivation and the executive function demands of newborn care, can trigger severe ADHD symptom escalation. This is frequently misidentified as postpartum depression alone</li>
              <li><strong>Perimenopause and menopause:</strong> As estrogen declines permanently, ADHD symptoms often intensify significantly. Women who managed their ADHD through compensatory strategies may find those strategies suddenly insufficient, leading to first-time screening in their 40s or 50s</li>
            </ul>
          </section>

          <section>
            <h2>The &quot;gifted&quot; woman trap: when intelligence masks ADHD</h2>
            <p>
              High-functioning women with ADHD face a particular challenge: their intelligence and work ethic can mask their ADHD for decades. They develop elaborate compensatory systems &mdash; multiple calendars, reminder apps, meticulous routines, and sheer force of will &mdash; that allow them to perform at a high level. From the outside, they look successful. From the inside, they are running on fumes.
            </p>
            <p>
              This compensation tends to work until life complexity exceeds the capacity of their systems. Common tipping points include:
            </p>
            <ul>
              <li>Transitioning from structured school environments to the self-directed demands of a career</li>
              <li>Managing a household while maintaining professional responsibilities</li>
              <li>Having children, which exponentially increases the executive function demands of daily life</li>
              <li>Hormonal changes during perimenopause that reduce the neurochemical support for their strategies</li>
            </ul>
            <p>
              When the system breaks down, these women often experience a crisis &mdash; burnout, relationship problems, career difficulties, or severe anxiety &mdash; that finally leads to screening. The relief of finally understanding why everything has been so hard can be profound.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Emotional dysregulation and rejection sensitivity</h2>
            <p>
              Emotional dysregulation is one of the most impactful but least discussed aspects of ADHD in women. While not included in the formal diagnostic criteria, research increasingly recognizes it as a core feature of the condition.
            </p>
            <p>
              Women with ADHD often experience emotions more intensely than their neurotypical peers. Joy, frustration, sadness, and anger can arrive suddenly, feel overwhelming, and be difficult to modulate. This is not a character flaw &mdash; it reflects differences in how the ADHD brain regulates emotional responses.
            </p>
            <p>
              Rejection Sensitive Dysphoria (RSD), while not a formal clinical term, describes a pattern that many women with ADHD recognize immediately: an intense, visceral emotional response to perceived criticism or rejection. A casual comment from a coworker, a friend not returning a text promptly, or constructive feedback from a manager can trigger an emotional reaction that feels wildly disproportionate to the situation.
            </p>
            <p>
              This emotional intensity is often what leads women to seek help &mdash; and what leads clinicians to misidentify their symptoms as anxiety, depression, or borderline personality traits rather than ADHD.
            </p>
          </section>

          <section>
            <h2>Getting screened and what to do with your results</h2>
            <p>
              If the patterns described in this article resonate with your experience, a structured ADHD screening is a useful next step. The <Link href="/adhd-test-women" className="text-sage-600 dark:text-sage-400 underline">ADHD screening for women</Link> on MindCheck Tools is free, private, and takes under ten minutes. It runs entirely in your browser and your answers are never stored.
            </p>
            <p>
              A screening is not an assessment. It identifies whether your symptom patterns are consistent with ADHD and whether further evaluation by a qualified professional is warranted. If your results suggest elevated ADHD symptoms, consider these next steps:
            </p>
            <ul>
              <li>Seek evaluation from a clinician experienced with adult ADHD &mdash; specifically one who understands how ADHD presents in women</li>
              <li>Bring your screening results to the appointment as a conversation starter</li>
              <li>Prepare a list of symptoms across settings (work, home, relationships) and across your lifespan</li>
              <li>If you are also experiencing anxiety or depression, mention this &mdash; a thorough evaluation should consider whether ADHD may be the underlying factor</li>
            </ul>
            <p>
              You can also take the <Link href="/asrs-adhd-screening" className="text-sage-600 dark:text-sage-400 underline">ASRS ADHD Screening</Link> for a complementary perspective. If anxiety or depression are also concerns, the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> and <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> can help clarify the full picture.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Take a free, private ADHD screening</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Designed with women&apos;s symptoms in mind. No account required.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/adhd-test-women" className="btn-primary text-sm">ADHD Screening for Women</Link>
              <Link href="/asrs-adhd-screening" className="btn-primary text-sm">ASRS ADHD Screening</Link>
            </div>
          </div>

          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

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

          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/asrs-adhd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ASRS ADHD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">WHO Adult ADHD Self-Report Scale</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Screen for anxiety that may co-occur with ADHD</p>
              </Link>
              <Link href="/phq-9-depression-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PHQ-9 Depression Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Depression screening often co-occurring with ADHD</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/adult-adhd-signs" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Adult ADHD Signs</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Common signs of ADHD in adults you may have missed</p>
              </Link>
              <Link href="/blog/what-is-adhd-in-adults" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What Is ADHD in Adults?</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Overview of adult ADHD presentations and screening</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/how-to-find-a-therapist`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "how-to-find-a-therapist")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/how-to-find-a-therapist",
  title: "How to Find a Therapist: A Step-by-Step Guide",
  description:
    "Finding a therapist is harder than it should be. Here\u2019s a practical, step-by-step guide for finding one that fits your needs, budget, and insurance \u2014 without the runaround.",
  keywords: [
    "how to find a therapist",
    "finding a therapist",
    "therapist near me",
    "how to choose a therapist",
    "therapy for the first time",
    "affordable therapy",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How long does therapy take?",
    answer:
      "It depends entirely on what you\u2019re working on. Brief CBT for a specific phobia or situational anxiety might be 8\u201316 sessions. Trauma-focused work often runs 16\u201324 sessions. Long-term psychodynamic work may continue for years. Many people check in periodically over their lives rather than completing a single course of treatment. Ask your therapist at the outset what they expect the work to look like.",
  },
  {
    question: "What if I try a therapist and don\u2019t like them?",
    answer:
      "This is normal and expected. Research suggests it takes some people 2\u20133 tries to find a therapist they connect with. A first session that doesn\u2019t feel right doesn\u2019t mean therapy won\u2019t help \u2014 it may mean that particular therapist isn\u2019t the right fit. It\u2019s completely acceptable to say \u201cI don\u2019t think this is the right fit for me\u201d and try someone else.",
  },
  {
    question: "Should I see a therapist or a psychiatrist?",
    answer:
      "A therapist provides counseling and psychotherapy. A psychiatrist is a medical doctor who can prescribe medication and often focuses on medication management. For many conditions (depression, anxiety), the research supports combining psychotherapy and medication as more effective than either alone. If you might need medication, start with your primary care physician or seek a psychiatrist referral; if you want to begin with therapy alone, a therapist is the right starting point.",
  },
  {
    question: "Is online therapy as good as in-person?",
    answer:
      "For most conditions, research shows comparable outcomes between telehealth and in-person therapy (Berryhill et al., 2019). Telehealth significantly improves access for people in rural areas, those with transportation barriers, and those with scheduling constraints. In-person has advantages for some presentations \u2014 particularly trauma work that involves significant somatic (body-based) components. Either is a legitimate choice.",
  },
];

export default function HowToFindATherapistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "How to Find a Therapist: A Step-by-Step Guide", description: "Finding a therapist is harder than it should be. Here\u2019s a practical guide for finding one that fits your needs, budget, and insurance.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "How to Find a Therapist", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">12 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            How to Find a Therapist: A Step-by-Step Guide
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Finding a therapist involves three main steps: clarifying what you&apos;re looking for, identifying candidates through directories or referrals, and vetting them through a brief consultation call. The process takes effort, but it&apos;s manageable. Most people who struggle to start therapy get stuck at the first step &mdash; not knowing where to begin &mdash; rather than at any inherent barrier to access.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          {/* Section 1 */}
          <section>
            <h2>Step 1: Clarify what you&apos;re looking for</h2>
            <p>
              Before opening a directory, it helps to answer three questions. You don&apos;t need to have perfect answers &mdash; even rough answers narrow your search significantly.
            </p>

            <h3>What are you dealing with?</h3>
            <p>Being specific helps you find someone with relevant expertise. Common starting points:</p>
            <ul>
              <li>Depression, low mood, lack of motivation</li>
              <li>Anxiety, worry, panic attacks</li>
              <li>Trauma or PTSD</li>
              <li>Relationship or couples issues</li>
              <li>ADHD or focus/productivity struggles</li>
              <li>Substance use or recovery</li>
              <li>Life transitions, grief, major decisions</li>
              <li>&quot;I just feel off and want to talk to someone&quot; &mdash; this is entirely valid</li>
            </ul>
            <p>
              If you&apos;re not sure, taking a quick screening is useful before your first appointment. The <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> and <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> take two minutes each and give you language to describe what you&apos;re experiencing.
            </p>

            <h3>What type of therapy?</h3>
            <p>You don&apos;t need to know this going in &mdash; most therapists will explain their approach and help you find the right fit. But if you&apos;ve done some reading, common options include:</p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Approach</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">CBT</td><td className="py-2">Depression, anxiety, phobias, OCD</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">DBT</td><td className="py-2">Emotional regulation, self-harm, BPD</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">EMDR</td><td className="py-2">Trauma, PTSD</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">ERP</td><td className="py-2">OCD specifically</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">CPT</td><td className="py-2">Trauma, PTSD</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">Psychodynamic</td><td className="py-2">Relationship patterns, long-term personal growth</td></tr>
                  <tr><td className="py-2 pr-4 font-medium">ACT</td><td className="py-2">Anxiety, depression, values-based work</td></tr>
                </tbody>
              </table>
            </div>
            <p>If you&apos;re not sure, CBT is the most broadly evidence-based starting point for most common presentations.</p>

            <h3>What are your practical constraints?</h3>
            <ul>
              <li><strong>Insurance:</strong> Do you have coverage? Are you willing to pay out-of-pocket?</li>
              <li><strong>Format:</strong> In-person, online/telehealth, or either?</li>
              <li><strong>Frequency:</strong> Weekly, bi-weekly?</li>
              <li><strong>Demographics:</strong> Do you have preferences about therapist gender, cultural background, or experience with a specific identity or community?</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2>Step 2: Find candidates</h2>

            <h3>Start with your insurance (if you have it)</h3>
            <p>
              Call the member services number on the back of your insurance card and ask for a list of in-network therapists. Alternatively, log into your insurance company&apos;s website and use their provider directory &mdash; filter by specialty, location, and whether they&apos;re accepting new patients.
            </p>
            <p>
              <strong>Insider tip:</strong> Call the insurance-listed therapists directly rather than booking through the portal. Provider directories are notoriously outdated &mdash; therapists move, retire, or stop accepting insurance without the records being updated. Calling confirms current availability and insurance status.
            </p>

            <h3>Psychology Today Directory</h3>
            <p>
              Psychology Today&apos;s therapist directory is the largest and most comprehensive in the US. You can filter by location (in-person or telehealth), insurance accepted, issues treated, treatment approach, therapist demographics, and cost per session for self-pay.
            </p>
            <p>
              Each therapist has a profile describing their background, approach, and specialties. Read several profiles to develop a sense of fit before reaching out.
            </p>

            <h3>Specialized directories</h3>
            <ul>
              <li><strong>International OCD Foundation</strong> &mdash; essential for finding ERP-trained therapists</li>
              <li><strong>EMDRIA</strong> &mdash; for finding EMDR-trained clinicians for trauma</li>
              <li><strong>SAMHSA&apos;s findtreatment.gov</strong> &mdash; database for substance use and mental health treatment programs</li>
              <li><strong>Open Path Collective</strong> &mdash; network of therapists offering sessions for $30&ndash;$80 to those who qualify</li>
            </ul>

            <h3>Ask for referrals</h3>
            <p>
              Your primary care physician is a good starting point &mdash; they often have relationships with local therapists and can make a warm referral. Ask specifically: &quot;Can you refer me to someone who specializes in [depression/anxiety/trauma]?&quot;
            </p>
            <p>
              Friends who have been in therapy can be valuable sources &mdash; not necessarily to see the same therapist, but to understand what the search process looked like.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2>Step 3: Vet your candidates</h2>

            <h3>Verify credentials</h3>
            <p>Therapists hold different types of licenses depending on their training. Common ones in the US:</p>
            <div className="not-prose my-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 pr-4 font-semibold text-neutral-700 dark:text-neutral-200">Credential</th>
                    <th className="text-left py-2 font-semibold text-neutral-700 dark:text-neutral-200">What It Means</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">LCSW</td><td className="py-2">Licensed Clinical Social Worker &mdash; master&apos;s level, clinical training</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">LPC / LPCC</td><td className="py-2">Licensed Professional Counselor &mdash; master&apos;s level</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">LMFT</td><td className="py-2">Licensed Marriage and Family Therapist</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">PhD / PsyD</td><td className="py-2">Doctoral-level psychologist &mdash; can conduct testing; PsyD is practice-focused</td></tr>
                  <tr className="border-b border-neutral-100 dark:border-neutral-800"><td className="py-2 pr-4 font-medium">MD (Psychiatrist)</td><td className="py-2">Medical doctor &mdash; prescribes medication; may or may not do therapy</td></tr>
                  <tr><td className="py-2 pr-4 font-medium">CADC / LADC</td><td className="py-2">Certified/Licensed Alcohol and Drug Counselor &mdash; substance use specialist</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              All licensed therapists in the US must meet state licensing requirements including supervised practice hours. You can verify any therapist&apos;s license through your state&apos;s licensing board website.
            </p>
            <p>
              <strong>Life coaches are not therapists</strong> &mdash; they are unregulated, have no clinical training requirement, and cannot assess or address mental health conditions. This distinction matters.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          {/* Section 4 */}
          <section>
            <h3>Schedule a consultation call</h3>
            <p>Most therapists offer a free 10&ndash;20 minute consultation call before booking a first session. Use it. Questions worth asking:</p>
            <ul>
              <li>&quot;Do you have experience working with [your specific concern]?&quot;</li>
              <li>&quot;What&apos;s your general approach or theoretical orientation?&quot;</li>
              <li>&quot;Are you currently accepting new clients?&quot;</li>
              <li>&quot;What are your fees, and do you accept [your insurance / offer sliding scale]?&quot;</li>
              <li>&quot;How long do you typically work with clients &mdash; brief work or longer-term?&quot;</li>
            </ul>

            <h3>Trust your initial sense of fit</h3>
            <p>
              Research consistently shows that the <strong>therapeutic alliance</strong> &mdash; the quality of the relationship between therapist and client &mdash; is one of the strongest predictors of outcome, across all treatment approaches (Wampold &amp; Imel, 2015). More than the specific technique used, feeling understood, respected, and heard by your therapist predicts whether therapy helps.
            </p>
            <p>
              First sessions are a two-way evaluation. You are assessing whether this person can help you, not auditioning for their caseload.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2>What to expect from the first session</h2>
            <p>First sessions are assessment-focused. Your therapist will ask about:</p>
            <ul>
              <li>What brings you in now (the presenting concern)</li>
              <li>History &mdash; when symptoms started, what has changed</li>
              <li>Personal and family history relevant to your concern</li>
              <li>What you&apos;re hoping to get from therapy</li>
            </ul>
            <p>
              You don&apos;t need to have everything figured out or be able to explain yourself perfectly. &quot;I&apos;ve been feeling really off and I&apos;m not sure why&quot; is a completely appropriate answer. A skilled therapist will help you articulate what&apos;s happening through the conversation.
            </p>
            <p>
              At the end of the first session, you should have a sense of the therapist&apos;s initial thinking about your situation and what the work might look like. Ask if you&apos;re unsure.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          {/* Section 6 */}
          <section>
            <h2>What to do if you can&apos;t afford therapy</h2>
            <p>Cost is a real barrier. Options if private-pay therapy isn&apos;t accessible:</p>
            <p>
              <strong>Sliding scale fees:</strong> Many therapists offer income-based reduced rates. Ask directly: &quot;Do you offer a sliding scale?&quot; Open Path Collective is a network of therapists offering sessions for $30&ndash;$80 to those who qualify.
            </p>
            <p>
              <strong>Community mental health centers:</strong> Federally Qualified Health Centers (FQHCs) and community mental health centers provide therapy on a sliding scale based on income. Use SAMHSA&apos;s facility locator at findtreatment.gov to find one near you.
            </p>
            <p>
              <strong>Training clinics:</strong> Graduate programs in psychology, counseling, and social work offer therapy provided by supervised graduate students &mdash; typically free or very low cost. Quality is generally good; sessions are supervised by licensed clinicians.
            </p>
            <p>
              <strong>Employee Assistance Programs (EAPs):</strong> Many employers offer free short-term counseling (typically 3&ndash;8 sessions) through an EAP. Check with HR.
            </p>
            <p>
              <strong>Group therapy:</strong> Significantly less expensive than individual therapy, often covered by insurance, and evidence-based for many conditions. Particularly effective for social anxiety, grief, and substance use recovery.
            </p>
          </section>

          {/* Section 7 — intentionally lightweight to hit the ad placement */}
          <section>
            <h2>Before your first appointment</h2>
            <p>
              If you&apos;re planning to discuss mood or anxiety concerns, taking a brief screening before your appointment gives you structured language and a baseline score to share. The <Link href="/phq-9-depression-test" className="text-sage-600 dark:text-sage-400 underline">PHQ-9</Link> and <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> each take under two minutes. Bringing your results to a first session can accelerate the initial assessment and help your therapist understand the scope of what you&apos;re experiencing.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          {/* Clinical Disclaimer */}
          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is for educational purposes only. It is not a substitute for professional evaluation, and nothing here should be interpreted as a diagnosis or treatment recommendation. If you are experiencing a mental health crisis, please contact the resources listed below rather than waiting for a therapy appointment.
            </p>
          </div>

          {/* Crisis Resources */}
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">Crisis Resources</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              If you are in crisis or having thoughts of self-harm, please reach out now &mdash; don&apos;t wait for a therapy appointment:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Not sure what to tell a therapist? Start with a screening.</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Each takes under 5 minutes. Free, private, and your answers never leave your browser.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/phq-9-depression-test" className="btn-primary text-sm">Take the PHQ-9 Depression Check</Link>
              <Link href="/gad-7-anxiety-test" className="btn-primary text-sm">Take the GAD-7 Anxiety Check</Link>
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
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/when-should-i-see-a-therapist" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">When Should I See a Therapist? 10 Signs</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Signs it may be time to talk to a mental health professional</p>
              </Link>
              <Link href="/blog/how-to-talk-to-doctor-about-mental-health" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">How to Talk to Your Doctor About Mental Health</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What to say, how to prepare, and what to expect</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/burnout-nurses-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "burnout-nurses-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/burnout-nurses-guide",
  title: "Nurse Burnout: Why It Happens, How It Feels, and What to Do About It",
  description:
    "Nursing burnout affects over 60% of nurses. Learn the unique stressors nurses face, warning signs, and evidence-based strategies for protecting your well-being.",
  keywords: [
    "nurse burnout",
    "nursing burnout",
    "burnout in nursing",
    "nurse burnout symptoms",
    "nursing burnout statistics",
    "burnout test for nurses",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How common is burnout among nurses?",
    answer:
      "The American Nurses Foundation reported that over 60% of nurses experienced burnout in 2022\u20132023, with ICU and emergency department nurses reporting the highest rates. The COVID-19 pandemic intensified existing stressors like mandatory overtime and short staffing, but nursing burnout was widespread well before the pandemic due to systemic issues.",
  },
  {
    question: "What is the difference between nurse burnout and compassion fatigue?",
    answer:
      "Burnout results from chronic workplace stress \u2014 workload, staffing, and administrative demands. Compassion fatigue is the emotional cost of absorbing patients\u2019 suffering. They frequently co-occur in nursing but require different responses: burnout needs systemic and boundary interventions, while compassion fatigue needs emotional processing and dedicated self-care strategies.",
  },
  {
    question: "Should I leave nursing if I am burned out?",
    answer:
      "Leaving is valid, but explore other options first: changing units or specialties, reducing hours, pursuing advanced practice roles, or transitioning to non-bedside positions like case management, education, or informatics. Therapy and peer support can help clarify whether burnout stems from nursing itself or your current work environment specifically.",
  },
  {
    question: "Can nurse managers prevent burnout on their unit?",
    answer:
      "Research shows that nurse manager leadership style significantly impacts unit-level burnout. Managers who advocate for safe staffing, offer scheduling flexibility, recognize contributions, and create psychological safety for voicing concerns have units with measurably lower burnout rates. However, managers are also constrained by organizational resources and broader institutional culture.",
  },
];

export default function BurnoutNursesGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Nurse Burnout: Why It Happens, How It Feels, and What to Do About It", description: "Nursing burnout affects over 60% of nurses. Learn the unique stressors, warning signs, and strategies for nurses.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Nurse Burnout Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">9 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Nurse Burnout: Why It Happens, How It Feels, and What to Do About It
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Nursing is one of the most trusted and essential professions in healthcare. It is also one of the most emotionally and physically demanding. Burnout among nurses has reached levels that the World Health Organization and the U.S. Surgeon General have called a crisis &mdash; threatening not just nurse well-being but patient safety and healthcare system stability. If you are a nurse feeling exhausted, detached, or questioning whether you can keep going, this guide is for you.
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
              This article is for informational purposes only and does not constitute medical or mental health advice. Always consult a qualified mental health professional for diagnosis and treatment.
            </p>
          </div>

          <section>
            <h2>Why nurses are especially vulnerable to burnout</h2>
            <p>Several factors converge to make nursing one of the highest-burnout professions:</p>
            <ul>
              <li><strong>12-hour shifts and mandatory overtime:</strong> Long shifts with insufficient breaks are physically and cognitively taxing</li>
              <li><strong>Unsafe nurse-to-patient ratios:</strong> When staffing is inadequate, nurses cannot provide the care they know patients need</li>
              <li><strong>Emotional labor:</strong> Nurses manage their own emotions while supporting patients and families through some of the worst moments of their lives</li>
              <li><strong>Physical demands:</strong> Lifting, standing for hours, and exposure to infectious diseases take a cumulative toll</li>
              <li><strong>Administrative burden:</strong> Documentation, charting requirements, and electronic health record systems consume time that could go to patient care</li>
              <li><strong>Moral distress:</strong> Being asked to follow policies or accept conditions that conflict with professional values and patient welfare</li>
              <li><strong>Workplace violence:</strong> Nurses experience verbal and physical aggression from patients at higher rates than nearly any other profession</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Signs of nurse burnout</h2>
            <p>Burnout in nursing often looks like:</p>
            <ul>
              <li>Counting the hours until your shift ends before it starts</li>
              <li>Feeling emotionally flat or numb with patients you once cared deeply about</li>
              <li>Persistent fatigue that does not improve with days off</li>
              <li>Calling in sick more frequently or dreading going to work</li>
              <li>Increased errors, near-misses, or difficulty concentrating during tasks</li>
              <li>Cynicism about the healthcare system, coworkers, or your own purpose</li>
              <li>Bringing work stress home &mdash; snapping at family, withdrawing from relationships</li>
              <li>Using alcohol or substances to decompress after shifts</li>
              <li>Seriously considering leaving nursing</li>
            </ul>
          </section>

          <section>
            <h2>How the MindCheck Tools burnout screening for nurses helps</h2>
            <p>
              The <Link href="/burnout-test-for-nurses" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools burnout test for nurses</Link> is a free, private screening that measures burnout across emotional exhaustion, depersonalization, and reduced personal accomplishment. It takes under five minutes and runs entirely in your browser &mdash; no login, no data stored.
            </p>
            <p>
              Naming burnout is the first step toward addressing it. The screening gives you a structured picture of where you stand, which you can bring to your EAP, a therapist, or a trusted colleague. If you are also concerned about compassion fatigue specifically, the <Link href="/compassion-fatigue-test" className="text-sage-600 dark:text-sage-400 underline">compassion fatigue test</Link> focuses on that dimension.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Strategies for managing nurse burnout</h2>
            <ul>
              <li><strong>Use your EAP:</strong> Sessions are confidential and typically free &mdash; your employer does not learn specifics</li>
              <li><strong>Set boundaries around overtime:</strong> Saying no to extra shifts is not selfish; it is sustainable</li>
              <li><strong>Connect with peers:</strong> Peer support programs and debriefing after difficult cases reduce isolation</li>
              <li><strong>Protect sleep:</strong> Shift work disrupts circadian rhythms; consistent sleep hygiene is critical</li>
              <li><strong>Explore lateral moves:</strong> Different units, outpatient settings, or non-bedside roles (education, informatics) can restore engagement</li>
              <li><strong>Advocate for systemic change:</strong> Through your union, shared governance committees, or nursing leadership</li>
            </ul>
          </section>

          <section>
            <h2>When to seek professional help</h2>
            <p>Reach out to a mental health professional if:</p>
            <ul>
              <li>Burnout is affecting your patient care or clinical judgment</li>
              <li>You are experiencing symptoms of depression or anxiety alongside burnout</li>
              <li>You are using substances to cope</li>
              <li>You feel trapped and cannot see a way forward</li>
              <li>You are having thoughts of self-harm</li>
            </ul>
            <p>
              The <Link href="/burnout-test-for-nurses" className="text-sage-600 dark:text-sage-400 underline">nurse burnout screening</Link> can help you articulate what you are experiencing when words feel hard to find.
            </p>
          </section>

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check your burnout level</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/burnout-test-for-nurses" className="btn-primary text-sm">Take the Nurse Burnout Check</Link>
              <Link href="/compassion-fatigue-test" className="btn-primary text-sm">Compassion Fatigue Test</Link>
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
              <Link href="/burnout-test-for-nurses" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Nurse Burnout Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Burnout screening tailored for nurses</p>
              </Link>
              <Link href="/compassion-fatigue-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Compassion Fatigue Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Secondary traumatic stress screening</p>
              </Link>
              <Link href="/burnout-test-for-healthcare-workers" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Healthcare Worker Burnout Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">General healthcare professional screening</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/burnout-symptoms-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Burnout Symptoms Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">General burnout signs and WHO definition</p>
              </Link>
              <Link href="/blog/compassion-fatigue-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Compassion Fatigue Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Signs and recovery for caregivers and helpers</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

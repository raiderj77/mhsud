import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/burnout-teachers-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "burnout-teachers-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/burnout-teachers-guide",
  title: "Teacher Burnout: Signs, Causes, and Strategies for Educators",
  description:
    "NEA surveys show 55%+ of educators have considered leaving the profession. Learn the unique causes of teacher burnout, warning signs, and evidence-based strategies for recovery.",
  keywords: [
    "teacher burnout",
    "burnout in teaching",
    "educator burnout",
    "teacher burnout symptoms",
    "teacher burnout statistics",
    "burnout test teachers",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How common is teacher burnout?",
    answer:
      "Teacher burnout is widespread. National Education Association surveys found that 55% or more of educators have considered leaving the profession earlier than planned. The rate increased sharply after 2020, but teacher burnout was a significant issue well before the pandemic due to chronic underfunding, growing class sizes, and expanding responsibilities.",
  },
  {
    question: "Is teacher burnout worse than in other professions?",
    answer:
      "Research suggests that teachers experience burnout at rates comparable to or higher than healthcare workers and first responders. Teaching combines emotional labor, lack of autonomy, high public accountability, and relatively low compensation &mdash; a combination that creates particularly high burnout risk. The Gallup State of the American Workplace report has consistently ranked K-12 educators among the most burned-out occupational groups.",
  },
  {
    question: "Can I recover from burnout and stay in teaching?",
    answer:
      "Yes, many educators recover from burnout while remaining in the profession. Recovery often requires both individual strategies (boundary-setting, therapy, self-care) and structural changes (switching schools, grade levels, or roles). Some teachers find renewed engagement by moving into mentoring, curriculum development, or instructional coaching. The key is identifying which specific factors are driving your burnout.",
  },
  {
    question: "What can school administrators do about teacher burnout?",
    answer:
      "Administrators can reduce teacher burnout by protecting planning time, limiting non-instructional duties, providing meaningful professional development rather than compliance-driven training, creating systems for addressing student behavior that do not fall entirely on individual teachers, offering schedule flexibility where possible, and fostering a culture where asking for help is normalized rather than stigmatized.",
  },
];

export default function BurnoutTeachersGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Teacher Burnout: Signs, Causes, and Strategies for Educators", description: "NEA surveys show 55%+ of educators have considered leaving. Learn the unique causes of teacher burnout and strategies for recovery.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Teacher Burnout Guide", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Teacher Burnout: Signs, Causes, and Strategies for Educators
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Teaching has always been demanding. But in recent years, educators across the country have reported levels of exhaustion, frustration, and emotional depletion that go far beyond normal job stress. National Education Association surveys found that more than 55% of educators are now considering leaving the profession earlier than planned. This is not a personal failing &mdash; it is a systemic crisis. If you are a teacher feeling burned out, this guide explains why it is happening and what you can do about it.
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
            <h2>What makes teaching uniquely burnout-prone</h2>
            <p>
              Teaching shares some burnout drivers with other helping professions, but several factors make it uniquely difficult to sustain over a career:
            </p>
            <ul>
              <li><strong>Lack of autonomy:</strong> Teachers are often required to follow scripted curricula, standardized testing mandates, and administrative directives with little input into the decisions that shape their daily work</li>
              <li><strong>Behavior management without support:</strong> Managing classroom behavior is emotionally draining, especially when administrators do not provide adequate support systems or consequences</li>
              <li><strong>Emotional labor with students:</strong> Teachers serve as de facto counselors, mentors, and sometimes the most stable adults in students&apos; lives &mdash; a role that carries enormous emotional weight</li>
              <li><strong>Lack of administrative support:</strong> When teachers feel unsupported by school leadership, burnout accelerates. Top-down mandates without resources to implement them create chronic frustration</li>
              <li><strong>Low pay relative to demands:</strong> Teachers earn significantly less than other professionals with comparable education levels. The Economic Policy Institute found that teachers earn about 26% less than comparable workers</li>
              <li><strong>Politicization of education:</strong> Curriculum battles, book bans, and public criticism of teachers have created a hostile environment in many communities</li>
              <li><strong>Expanding responsibilities:</strong> Teachers are increasingly expected to handle social-emotional learning, trauma-informed care, technology integration, individualized education plans, and parent communication &mdash; all without additional time or compensation</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>The summer myth and year-round emotional depletion</h2>
            <p>
              One of the most persistent misconceptions about teaching is that summers off make up for the stress of the school year. This misunderstanding minimizes the reality of teacher burnout in several ways.
            </p>
            <p>
              First, teachers work 10 to 12 months of emotional and cognitive depletion. The school year is not simply long hours &mdash; it is sustained emotional labor, hypervigilance for student safety, and constant cognitive switching between instruction, behavior management, assessment, and communication. This kind of work produces cumulative fatigue that two months cannot fully reverse.
            </p>
            <p>
              Second, many teachers spend summers completing required professional development, attending trainings, planning curriculum, working second jobs to supplement their income, or managing summer school. The idea of a full two-month break is a myth for most educators.
            </p>
            <p>
              Third, research on burnout recovery shows that the effects of chronic occupational stress do not reset with time off alone. Without structural changes, teachers return to the same conditions that caused burnout in the first place.
            </p>
          </section>

          <section>
            <h2>Signs of burnout in teachers</h2>
            <p>Teacher burnout often shows up as:</p>
            <ul>
              <li>Sunday evening dread that starts earlier and earlier in the weekend</li>
              <li>Feeling emotionally disconnected from students you once cared deeply about</li>
              <li>Loss of creativity in lesson planning &mdash; defaulting to worksheets or busy work</li>
              <li>Persistent fatigue that weekends and breaks do not resolve</li>
              <li>Increased irritability with students, parents, or colleagues</li>
              <li>Counting the days until the next break, retirement, or the end of your career</li>
              <li>Physical symptoms: headaches, insomnia, frequent illness, digestive issues</li>
              <li>Cynicism about education as a whole &mdash; feeling that nothing you do matters</li>
              <li>Guilt about not being the teacher you want to be, combined with inability to do more</li>
            </ul>
            <p>
              If these patterns sound familiar, the <Link href="/burnout-test-for-teachers" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools burnout screening for teachers</Link> can help you assess where you stand. It is free, private, and takes under five minutes.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Strategies for managing teacher burnout</h2>
            <p>
              Recovery from teacher burnout requires both individual coping strategies and, ideally, systemic changes. Here are evidence-based approaches:
            </p>
            <ul>
              <li><strong>Set boundaries around work hours:</strong> Grading and email at home erode the separation between work and rest. Designate specific times for work tasks and protect the rest</li>
              <li><strong>Find your people:</strong> Connect with colleagues who understand the reality of teaching. Peer support is one of the strongest protective factors against burnout</li>
              <li><strong>Use available mental health resources:</strong> Many districts offer Employee Assistance Programs (EAPs) with free confidential counseling sessions</li>
              <li><strong>Advocate through your union or professional organization:</strong> Collective action on class sizes, planning time, and workload has more impact than individual complaints</li>
              <li><strong>Consider a lateral move:</strong> Switching grade levels, subjects, schools, or moving into instructional coaching, curriculum development, or school counseling can restore engagement</li>
              <li><strong>Practice self-compassion:</strong> You cannot pour from an empty cup. Acknowledging your limits is not giving up &mdash; it is self-preservation</li>
              <li><strong>Explore therapy:</strong> A therapist who understands occupational burnout can help you develop coping strategies specific to your situation</li>
            </ul>
          </section>

          <section>
            <h2>When to seek professional help</h2>
            <p>Consider talking to a mental health professional if:</p>
            <ul>
              <li>Burnout is affecting your relationships outside of work</li>
              <li>You are experiencing symptoms of depression or anxiety alongside burnout</li>
              <li>You are using alcohol or substances to cope with work stress</li>
              <li>You feel trapped with no visible path forward</li>
              <li>You are having thoughts of self-harm</li>
            </ul>
            <p>
              The <Link href="/burnout-test-for-teachers" className="text-sage-600 dark:text-sage-400 underline">teacher burnout screening</Link> can give you a structured picture of what you are experiencing to bring to a therapist, your EAP, or a trusted colleague. You can also explore the <Link href="/dass-21-depression-anxiety-stress" className="text-sage-600 dark:text-sage-400 underline">DASS-21</Link> if you are concerned about depression, anxiety, or stress more broadly.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Check your burnout level</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/burnout-test-for-teachers" className="btn-primary text-sm">Take the Teacher Burnout Check</Link>
              <Link href="/burnout-assessment-tool" className="btn-primary text-sm">General Burnout Assessment</Link>
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
              <Link href="/burnout-test-for-teachers" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Teacher Burnout Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Burnout screening tailored for educators</p>
              </Link>
              <Link href="/burnout-assessment-tool" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Burnout Assessment Tool</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">General burnout screening</p>
              </Link>
              <Link href="/dass-21-depression-anxiety-stress" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DASS-21 Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Depression, anxiety, and stress assessment</p>
              </Link>
              <Link href="/work-stress-check" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Work Stress Check</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Evaluate your occupational stress level</p>
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
              <Link href="/blog/work-stress-vs-burnout" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Work Stress vs. Burnout</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">How to tell the difference</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

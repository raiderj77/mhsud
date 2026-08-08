import type { Metadata } from "next";
import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";
import {
  createMetadata,
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  SITE_URL,
} from "@/lib/metadata";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/worry-time-guide`;
const POST_DATA = BLOG_POSTS.find((post) => post.slug === "worry-time-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/worry-time-guide",
  title: "Worry Time: Scheduled Worry Guide & Free Private Tool",
  description:
    "Learn what worry time and worry postponement mean, how to try the exercise, what randomized studies found, and how to use a private browser-based scheduler.",
  keywords: [
    "worry time",
    "scheduled worry time",
    "worry postponement",
    "worry time CBT",
    "worry time exercise",
    "worry time scheduler",
  ],
  openGraph: {
    type: "article",
    title: "Worry Time: Scheduled Worry Guide & Free Private Tool",
    description:
      "A source-checked guide to worry postponement, including evidence limits, practical steps, privacy notes, and a free browser-based scheduler.",
    url: ARTICLE_URL,
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is worry time?",
    answer:
      "Worry time, also called scheduled worry or worry postponement, is a structured exercise. You briefly note worries that arise during the day and return to them during a planned, time-limited review period. It is an educational self-help exercise, not a diagnosis or a replacement for care.",
  },
  {
    question: "Does worry postponement reduce anxiety?",
    answer:
      "The research is mixed. A small 2024 waitlist-controlled trial reported lower worry scores for participants with generalized anxiety disorder who received a two-session metacognitive intervention. A larger 2016 randomized online trial found no advantage over recording worries alone. Neither study proves that a self-guided web tool treats anxiety.",
  },
  {
    question: "How long should scheduled worry time last?",
    answer:
      "Public self-help guidance and research protocols use different durations, commonly about 10 to 30 minutes. Evidence does not establish one best duration for everyone. Choose a bounded period that feels manageable, and stop if the exercise increases distress.",
  },
  {
    question: "Does the MindCheck Tools scheduler keep my entries private?",
    answer:
      "The scheduler saves worry text and settings in this browser's local storage and is not configured to send those entries to MindCheck Tools application servers, analytics, or advertising systems. Anyone with access to the same browser profile may be able to read them, and device sync, backups, extensions, screenshots, and copies are outside that boundary.",
  },
];

const SOURCE_LINK_CLASS = "underline hover:text-sage-600 dark:hover:text-sage-400";

export default function WorryTimeGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "Worry Time: Scheduled Worry Guide & Free Private Tool",
              description:
                "A source-checked guide to worry postponement, including mixed research findings, practical steps, safety limits, and privacy notes.",
              url: ARTICLE_URL,
              datePublished: POST_DATA.publishedDate,
              dateModified: POST_DATA.modifiedDate,
            })
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: "Worry Time Guide", url: ARTICLE_URL },
            ])
          ),
        }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">7 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Worry Time and Worry Postponement: A Source-Checked Guide
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Published March 17, 2026 · Updated August 8, 2026
          </p>
        </header>

        <AnswerBlock
          what="Worry time is a structured exercise that sets a short period for revisiting worries recorded earlier in the day."
          who="Adults looking for a bounded educational practice, with the option to use a private browser-based scheduler."
          bottomLine="Authoritative self-help services describe the technique, but randomized evidence is mixed. It is not treatment, diagnosis, or emergency care."
          lastUpdated="2026-08-08"
        />

        <p className="mb-8 text-sm text-neutral-600 dark:text-neutral-300">
          Quarantined editorial draft. A named clinical/editorial review is required before any future publication.
        </p>

        <div className="prose-mh space-y-8">
          <section className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <h2 className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-2">Educational, not individualized care</h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              This guide cannot tell whether the exercise is appropriate for you or whether you have an anxiety disorder. Stop if it increases distress. For persistent or disruptive worry, consider speaking with a qualified healthcare professional.
            </p>
          </section>

          <section>
            <h2>What is scheduled worry time?</h2>
            <p>
              Worry time, worry postponement, and scheduled worry are names used for a structured exercise: notice a worry, make a brief note, return attention to the present task when possible, and review the note during a planned period later.
            </p>
            <p>
              The NHS includes worry time in its public self-help guidance and suggests separating worries that can lead to a practical action from hypothetical concerns that cannot be acted on now. That is a description of a coping exercise, not proof that every person will benefit.
            </p>
            <p>
              <a href="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/tackling-your-worries/" className={SOURCE_LINK_CLASS} target="_blank" rel="noopener noreferrer">Read the NHS worry-time guidance</a>
            </p>
          </section>

          <section>
            <h2>What does the research show?</h2>
            <p>The available studies do not support a guaranteed outcome, and they do not establish that this website&apos;s self-guided scheduler is a treatment.</p>
            <div className="not-prose grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-sage-700 dark:text-sage-400 mb-2">Positive signal, limited study</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  A 2024 waitlist-controlled trial enrolled people with generalized anxiety disorder or hypochondriasis. The two-session metacognitive intervention produced lower worry scores in the GAD group, while effects for hypochondriasis were limited. The study was small and used more support than a standalone web page.
                </p>
              </div>
              <div className="card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-sage-700 dark:text-sage-400 mb-2">Null online finding</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  A 2016 randomized online trial asked 996 adults to record worries; 361 completed the study. Adding a 30-minute worry-postponement period did not reduce worry or subjective health complaints more than recording worries alone.
                </p>
              </div>
            </div>
            <p>The most accurate conclusion is that worry postponement is a recognized educational exercise with mixed research findings, especially when delivered online without clinical support.</p>
          </section>

          <section>
            <h2>How to try the exercise</h2>
            <ol>
              <li><strong>Choose a bounded review period.</strong> Public guidance and studies use different durations, often 10 to 30 minutes. There is no proven best duration for everyone.</li>
              <li><strong>Record only a brief reminder.</strong> Do not add identifying details you would not want another person using the same device to see.</li>
              <li><strong>Return to the present task when you can.</strong> Postponement may feel difficult, and difficulty does not mean you are doing it incorrectly.</li>
              <li><strong>Review for possible action.</strong> If something can be acted on safely, write one small next step. If it cannot be acted on now, acknowledge that limit rather than forcing a solution.</li>
              <li><strong>Stop at the endpoint.</strong> End early if the exercise becomes repetitive, overwhelming, or more distressing.</li>
            </ol>
          </section>

          <section>
            <h2>Private browser-based option</h2>
            <p>
              The MindCheck Tools scheduler stores entries in this browser&apos;s localStorage. It does not automatically send worry text, action notes, or session details to MindCheck Tools analytics, advertising systems, or an application database. Anyone with the same browser profile may be able to read them. A copy or screenshot you create is controlled by your device and any extension, sync, backup, or sharing service you use.
            </p>
            <div className="not-prose card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800">
              <h2 className="font-serif text-xl font-semibold text-sage-800 dark:text-sage-300 mb-2">Try the free Worry Time Scheduler</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">No account or email is required. Clear the log or site data when finished if you use a shared device.</p>
              <Link href="/worry-time-scheduler" className="btn-primary inline-flex min-h-11 items-center text-sm">Open the private scheduler</Link>
            </div>
          </section>

          <section>
            <h2>When to stop or seek support</h2>
            <p>Stop the exercise if it makes worry more intense, turns into an unbounded review, or interferes with sleep or daily responsibilities. A qualified professional can help assess persistent worry in the context of your health, circumstances, and goals.</p>
            <p>
              If you might act on thoughts of harming yourself or someone else, or you are in immediate danger, use emergency help now. In the United States, call or text <strong>988</strong>; elsewhere, use your local emergency number or crisis service. MindCheck Tools is not a crisis service.
            </p>
            <p><Link href="/crisis-resources" className="underline font-semibold text-crisis-800 dark:text-crisis-200">View U.S. and international crisis resources</Link></p>
          </section>

          <section>
            <h2>Related educational tools</h2>
            <ul>
              <li><Link href="/cbt-thought-record" className="underline">CBT thought record</Link> for a structured look at a specific thought; browser-local and non-diagnostic.</li>
              <li><Link href="/cognitive-distortion-identifier" className="underline">Cognitive distortion identifier</Link> for educational pattern recognition, not diagnosis.</li>
              <li><Link href="/how-to-talk-to-your-doctor-about-mental-health" className="underline">How to talk with a healthcare professional</Link> if worry is persistent or affecting daily life.</li>
            </ul>
          </section>

          <section>
            <h2>Frequently asked questions</h2>
            <div className="not-prose space-y-3">
              {FAQ_DATA.map((item) => (
                <details key={item.question} className="card p-4">
                  <summary className="cursor-pointer font-semibold text-neutral-800 dark:text-neutral-100">{item.question}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section>
            <h2>Sources</h2>
            <ul>
              <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11303915/" className={SOURCE_LINK_CLASS} target="_blank" rel="noopener noreferrer">Krzikalla et al. (2024), randomized waitlist-controlled trial of worry postponement</a></li>
              <li><a href="https://pubmed.ncbi.nlm.nih.gov/26511764/" className={SOURCE_LINK_CLASS} target="_blank" rel="noopener noreferrer">Versluis et al. (2016), randomized online worry-postponement trial</a></li>
              <li><a href="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/tackling-your-worries/" className={SOURCE_LINK_CLASS} target="_blank" rel="noopener noreferrer">NHS Every Mind Matters, Tackling your worries</a></li>
              <li><a href="https://www.nimh.nih.gov/health/topics/generalized-anxiety-disorder-gad" className={SOURCE_LINK_CLASS} target="_blank" rel="noopener noreferrer">National Institute of Mental Health, Generalized Anxiety Disorder</a></li>
            </ul>
          </section>
        </div>
      </article>
    </>
  );
}

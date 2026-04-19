import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { SpinClient } from "../spin-social-anxiety-test/SpinClient";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/social-anxiety-test-college`;

export const metadata: Metadata = createMetadata({
  path: "/social-anxiety-test-college",
  title: "Social Anxiety Test for Students — Free SPIN",
  description:
    "Free social anxiety screening for college students using the SPIN. Private, instant results.",
  keywords: [
    "social anxiety test college students", "social anxiety screening students",
    "spin social anxiety college", "social phobia test students", "college social anxiety quiz",
    "social anxiety disorder test", "social anxiety self-assessment", "college student anxiety test",
    "fear of public speaking test", "social phobia screening", "spin questionnaire",
    "am i socially anxious", "social anxiety in college", "college mental health screening",
    "free social anxiety test",
  ],
  openGraph: {
    title: "Social Anxiety Test for Students — Free SPIN",
    description: "Free, private social anxiety screening for college students using the clinically validated SPIN. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is social anxiety the same as being shy?",
    answer: "No. Shyness is a personality trait — it may cause mild discomfort in social situations but does not significantly impair daily life. Social anxiety disorder (SAD) involves intense, persistent fear of being judged, embarrassed, or humiliated in social situations. It causes avoidance behaviors that interfere with academics, relationships, and daily functioning. Many shy people function well socially; people with SAD often cannot.",
  },
  {
    question: "Why is social anxiety so common in college?",
    answer: "College is a perfect storm for social anxiety. You are surrounded by new people, expected to participate in class discussions, navigate group projects, attend social events, and build a new social network — all while being evaluated constantly. The pressure to fit in, combined with the loss of familiar support systems from home, can trigger or worsen social anxiety symptoms.",
  },
  {
    question: "Can social anxiety affect my grades?",
    answer: "Yes, significantly. Social anxiety can prevent students from participating in class discussions, asking professors for help, attending office hours, working effectively in group projects, or even attending classes with participation requirements. Students with untreated social anxiety are more likely to underperform academically, switch majors to avoid presentations, or drop out entirely.",
  },
  {
    question: "How can I participate in class if I have social anxiety?",
    answer: "Start small. Prepare one question or comment before class so you are not improvising. Sit near the front where you are less aware of others watching. Email your professor about your anxiety — most are understanding and may offer alternatives. Some students find that participating early in a discussion, before anxiety builds, is easier than waiting. Campus counseling centers can also teach specific coping strategies.",
  },
  {
    question: "Do treatments for social anxiety actually work?",
    answer: "Yes. Cognitive behavioral therapy (CBT) is highly effective for social anxiety, with research showing significant improvement in 50-75% of people. Exposure therapy — gradually facing feared situations in a structured way — is a core component. Medications like SSRIs can also help. Many students see meaningful improvement within one semester of treatment.",
  },
  {
    question: "Should I tell my professors about my social anxiety?",
    answer: "You are not required to, but it can help. Many professors will offer accommodations like alternative participation methods, advance notice of being called on, or the option to present to a smaller group. Your campus disability services office can also arrange formal accommodations. You do not need to share your full diagnosis — a brief explanation is sufficient.",
  },
  {
    question: "Where can college students get help for social anxiety?",
    answer: "Most colleges offer free or low-cost counseling through their campus counseling center. Many also have group therapy specifically for social anxiety, which has the added benefit of practicing social skills in a safe environment. If your campus resources have long wait times, ask about community referrals or online therapy options covered by student health insurance.",
  },
  {
    question: "Can I overcome social anxiety?",
    answer: "Yes. Social anxiety is one of the most treatable mental health conditions. With proper support — therapy, gradual exposure, and sometimes medication — most people experience significant improvement. It does not mean you will become an extrovert, but you can reach a point where anxiety no longer controls your decisions or limits your life.",
  },
];

export default function SocialAnxietyTestCollegePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Social Anxiety Test for Students — Free SPIN",
              description: "A free, private social anxiety screening tool for college students using the clinically validated Social Phobia Inventory (SPIN).",
              url: TOOL_URL,
              datePublished: "2026-03-05",
              dateModified: "2026-03-05",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "SPIN Social Anxiety Test", url: `${SITE_URL}/spin-social-anxiety-test` },
              { name: "Social Anxiety Test for Students", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">
            Clinically Validated (SPIN)
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
            College Students
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Social Anxiety Test for College Students
        </h1>

        {/* Warm Empathetic Intro */}
        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You signed up for college expecting new friendships, exciting classes, and the
            best years of your life. Instead, you&apos;re skipping classes because
            participation counts toward your grade. You eat lunch alone because the dining
            hall feels overwhelming. You&apos;ve turned down invitations so many times that
            people stopped asking. And every time you rehearse a simple conversation in your
            head fifteen times before having it, you wonder why something so easy for everyone
            else feels impossible for you.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Social anxiety isn&apos;t shyness and it isn&apos;t introversion — it&apos;s a
            real condition that affects 12-15% of college students and can quietly derail your
            academic and social life if left unaddressed. This free, private screening uses
            the <strong>SPIN (Social Phobia Inventory)</strong>, a validated clinical tool.
            It is <strong>not a diagnosis</strong>, but it can help you understand what
            you&apos;re dealing with and take the next step.
          </p>
        </div>

        {/* Prominent CTA */}
        <div className="mb-10">
          <a
            href="#screening"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-base hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Start the Social Anxiety Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 5 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        {/* Why This Matters */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why This Matters
          </h2>
          <div className="grid gap-4">
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">12–15% of students</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Social anxiety disorder affects an estimated 12–15% of college students, making
                it one of the most common mental health conditions on campus.
                <span className="text-slate-500 dark:text-slate-400"> — Journal of American College Health</span>
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">Academic impact</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Students with social anxiety are more likely to avoid class participation, drop
                courses with presentation requirements, struggle with group projects, and
                underperform relative to their actual ability.
                <span className="text-slate-500 dark:text-slate-400"> — Anxiety and Depression Association of America</span>
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 mb-1">Avoidance cycle</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Social anxiety creates a self-reinforcing cycle: avoiding feared situations provides
                short-term relief but increases long-term anxiety. The fewer social experiences you
                have, the more threatening they feel.
                <span className="text-slate-500 dark:text-slate-400"> — Cognitive Behaviour Therapy</span>
              </p>
            </div>
          </div>
        </div>

        {/* What To Expect */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            What To Expect
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5">
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                This screening uses the <strong>SPIN (Social Phobia Inventory)</strong>, a
                17-item questionnaire used by clinicians to assess fear, avoidance, and
                physiological symptoms in social situations.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Shyness vs. social anxiety disorder:</strong> Shyness is a temperament trait. Social anxiety disorder is a clinical condition involving intense fear of judgment that significantly impairs daily functioning. This screening helps distinguish between normal nervousness and something that may need professional attention.</p>
                <p><strong>Making friends and dating:</strong> Social anxiety does not mean you do not want connection — it means the process of connecting feels threatening. Many students with SAD desperately want friendships and relationships but feel paralyzed by the fear of rejection or embarrassment.</p>
                <p><strong>Class participation:</strong> For students with social anxiety, mandatory participation can feel like torture rather than engagement. The fear of saying something wrong in front of peers can be intense enough to cause physical symptoms — racing heart, sweating, trembling, or going blank.</p>
                <p><strong>Exposure therapy works:</strong> The gold-standard treatment involves gradually, systematically facing feared social situations. This does not mean being thrown into your worst nightmare — it means building confidence through small, manageable steps with professional guidance.</p>
                <p><strong>Campus resources:</strong> Most colleges offer free counseling, social anxiety support groups, and disability accommodations. You are paying for these services through your tuition — use them.</p>
                <p><strong>Your privacy:</strong> Everything happens in your browser. Nothing is stored, transmitted, or visible to your school or anyone else.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Screening Tool */}
      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the SPIN Social Anxiety Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer each question based on how you&apos;ve been feeling over the past week.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A social anxiety screening tailored for college students covering classroom participation, campus social situations, and peer interaction."
          who="College students who avoid social situations, dread class participation, or feel intense anxiety around peers."
          bottomLine="Social anxiety is one of the most common issues among college students — and one of the most treatable. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>

      <section className="sr-only">
        <h2>What Is the College Social Anxiety Screening?</h2>
        <h2>How Is the Social Anxiety Test Scored?</h2>
        <h2>What Do My Social Anxiety Results Mean?</h2>
      </section>
<SpinClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        {/* Next Steps */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Your Next Steps
          </h2>
          <div className="space-y-4">
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Visit your campus counseling center</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Most colleges offer free or low-cost counseling sessions. Many have therapists
                who specialize in anxiety and offer <strong>social anxiety groups</strong> — which
                are especially effective because you practice social skills in a safe environment
                with peers who understand exactly what you&apos;re going through.
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Request accommodations</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Your campus <strong>disability services office</strong> can arrange accommodations
                like alternative participation methods, advance notice before being called on, or
                presenting to smaller groups. You deserve the same chance to succeed as every other
                student.
              </p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Start with one small step</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                Recovery doesn&apos;t require dramatic gestures. Say hi to one person in class.
                Ask one question during office hours. Attend one club meeting. Small exposures
                build confidence over time — and each one proves your anxiety wrong.
              </p>
            </div>
          </div>
        </div>

        {/* Crisis Resources */}
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Crisis Resources
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>
              <strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential
            </li>
            <li>
              <strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7
            </li>
          </ul>
        </div>

        {/* Clinical Disclaimer */}
        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified
            healthcare professional can assess social anxiety disorder or related conditions. Your responses
            are processed entirely in your browser and are never stored or transmitted. Always consult a
            qualified healthcare professional for medical advice.
          </p>
        </div>

        {/* Author Bio */}
        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by a Certified Drug and Alcohol Counselor (CADC-II).
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026
          </p>
        </div>

        {/* Internal Links */}
        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/spin-social-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            SPIN Social Anxiety Test →
          </Link>
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">
            GAD-7 Anxiety Test →
          </Link>
          <Link href="/stress-test-college-students" className="text-sky-600 dark:text-sky-400 hover:underline">
            Stress Test for College Students →
          </Link>
        </div>
      </div>
    </>
  );
}

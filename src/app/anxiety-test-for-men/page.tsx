import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { GAD7Client } from "../gad-7-anxiety-test/GAD7Client";

const TOOL_URL = `${SITE_URL}/anxiety-test-for-men`;

export const metadata: Metadata = createMetadata({
  path: "/anxiety-test-for-men",
  title: "Anxiety Test for Men — Free GAD-7 Screening",
  description: "Free anxiety screening for men using the validated GAD-7. Private, instant results. No signup.",
  keywords: [
    "anxiety test for men", "male anxiety screening", "men anxiety quiz",
    "do men get anxiety", "anxiety symptoms in men", "men mental health test",
    "male anxiety symptoms", "anxiety and anger men", "free anxiety test men",
    "men mental health screening", "anxiety in men signs",
  ],
  openGraph: {
    title: "Anxiety Test for Men — Free GAD-7 Screening",
    description: "Free, private anxiety screening for men using the validated GAD-7. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Do men get anxiety?",
    answer: "Yes. Anxiety disorders affect roughly 1 in 10 men, though actual rates are likely higher because men significantly underreport symptoms. Men are socialized to suppress vulnerability, which means anxiety often goes unrecognized and untreated. Men are also less likely to seek help — not because they do not need it, but because cultural norms around masculinity frame help-seeking as weakness. Anxiety in men is real, common, and treatable.",
  },
  {
    question: "How does anxiety look different in men?",
    answer: "Men with anxiety are less likely to say 'I feel anxious' and more likely to show anger, irritability, restlessness, risk-taking, workaholism, substance use, or physical symptoms (headaches, muscle tension, GI problems, chest tightness). Many men experience anxiety as a constant need to stay busy, an inability to relax, or a sense that something bad is about to happen. Insomnia, difficulty concentrating, and relationship conflict are also common presentations.",
  },
  {
    question: "Why don't men talk about anxiety?",
    answer: "Traditional masculinity norms teach men to be stoic, self-reliant, and in control. Admitting to anxiety can feel like admitting to weakness, which creates a double bind: the anxiety itself is distressing, and the shame of having it makes it worse. Many men also lack the emotional vocabulary to identify what they are experiencing as anxiety. They may describe themselves as 'stressed' or 'frustrated' rather than 'anxious.' Breaking this silence is the first step toward getting help.",
  },
  {
    question: "Can anxiety cause anger in men?",
    answer: "Yes. Anger is one of the most common masks for anxiety in men. When the nervous system is in a chronic state of fight-or-flight, the 'fight' response can manifest as irritability, short temper, road rage, or explosive outbursts. If you find yourself getting angry more easily than you used to, or if the intensity of your anger seems disproportionate to the situation, underlying anxiety may be a contributing factor.",
  },
  {
    question: "Does anxiety affect physical health in men?",
    answer: "Significantly. Chronic anxiety increases risk for cardiovascular disease, high blood pressure, digestive problems, chronic pain, weakened immune function, and sexual health issues including erectile dysfunction. Men are more likely than women to experience anxiety primarily through physical symptoms, which means they may seek medical help for the physical effects without realizing anxiety is the root cause. Treating the anxiety often improves these physical symptoms.",
  },
  {
    question: "What if I don't want to do therapy?",
    answer: "Therapy is not the only option, though it is highly effective. Other evidence-based approaches include regular vigorous exercise (shown to reduce anxiety by 20-30%), mindfulness and meditation practices, reducing alcohol and caffeine, improving sleep habits, and in some cases, medication prescribed by a doctor. Many men find that structured approaches — exercise routines, breathing techniques, or apps — feel more comfortable than talk therapy. Start with whatever feels accessible.",
  },
  {
    question: "What are other ways men manage anxiety?",
    answer: "Effective strategies for men include: intense physical exercise (running, weight training, martial arts), breathing techniques like box breathing, limiting alcohol and caffeine, maintaining a consistent sleep schedule, spending time outdoors, connecting with trusted friends (even if you don't label it as 'support'), reducing news and social media exposure, and setting boundaries at work. Many men find that physical approaches to anxiety are more intuitive than psychological ones — and both are valid.",
  },
  {
    question: "Is this screening accurate for men?",
    answer: "The GAD-7 has been validated across genders and is widely used in clinical settings for men. However, because men tend to underreport emotional symptoms and may not recognize anxiety in themselves, scores may underestimate actual severity. If your score seems low but the descriptions on this page resonate, trust your experience and consider talking to a healthcare provider anyway.",
  },
];

export default function AnxietyTestForMenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Anxiety Test for Men — GAD-7 Screening", description: "A free, private anxiety screening tool for men using the clinically validated GAD-7.", url: TOOL_URL, datePublished: "2026-03-05", dateModified: "2026-03-05" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "GAD-7 Anxiety Test", url: `${SITE_URL}/gad-7-anxiety-test` }, { name: "Anxiety Test for Men", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (GAD-7)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">Men&apos;s Mental Health</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Anxiety Test for Men</h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            You might not call it anxiety. Maybe it&apos;s the constant tension in your shoulders,
            the short fuse, the nights you can&apos;t sleep, the drink you need to unwind, or the
            feeling that no matter how much you do, it&apos;s never enough. Men often experience
            anxiety differently — and because of that, it goes unrecognized and untreated.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Taking two minutes to check in with yourself is not weakness. This free screening uses
            the <strong>GAD-7</strong>, the same tool your doctor uses. It is <strong>not a
            diagnosis</strong>, but it might put a name to what you&apos;ve been dealing with — and
            that&apos;s a starting point.
          </p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-colors shadow-sm">Start the Anxiety Screening</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 2 minutes. Completely private — nothing is stored or shared.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">1 in 10 men</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">are affected by anxiety disorders — and the true number is likely much higher due to underreporting.<span className="text-slate-500 dark:text-slate-400"> — NIMH</span></p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">4x suicide rate</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Men die by suicide at nearly 4 times the rate of women. Untreated mental health conditions, including anxiety, are a major contributing factor.<span className="text-slate-500 dark:text-slate-400"> — CDC / AFSP</span></p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1">Half as likely</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Men are roughly half as likely as women to seek treatment for anxiety — not because they need it less, but because stigma prevents them from reaching out.<span className="text-slate-500 dark:text-slate-400"> — APA</span></p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding Anxiety in Men</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>Anxiety in men often hides behind other behaviors. Where women might describe feeling worried or nervous, men are more likely to exhibit anger, irritability, risk-taking, workaholism, or increased substance use. A man may drink to &quot;take the edge off&quot; without realizing the edge is anxiety. He may work 60-hour weeks not because he loves his job, but because slowing down means facing the racing thoughts.</p>
            <p>Physical symptoms are also prominent in men with anxiety: chronic muscle tension, headaches, digestive problems, chest tightness, elevated blood pressure, and sexual dysfunction. Many men end up in their doctor&apos;s office for these physical complaints without anxiety ever being discussed as a potential cause.</p>
            <p>The masculinity-anxiety paradox is real: the pressure to appear strong and in control is itself a major source of anxiety, while the same pressure prevents men from seeking help. This creates a cycle where anxiety feeds on its own concealment. Breaking that cycle does not require a dramatic gesture — it can start with a two-minute screening on your phone.</p>
            <p>Men who do seek treatment for anxiety respond just as well as anyone else. Exercise, therapy (particularly CBT), medication, and lifestyle changes are all effective. Many men find that addressing anxiety improves not just their mental health but their physical health, relationships, and work performance.</p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the GAD-7 Anxiety Screening</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve been feeling over the past two weeks.</p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: March 16, 2026
      </p>
      <section className="sr-only">
        <h2>What Is Anxiety Screening for Men?</h2>
        <h2>How Is the Anxiety Test Scored?</h2>
        <h2>What Do My Anxiety Screening Results Mean?</h2>
      </section>
<GAD7Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified healthcare professional can assess anxiety disorders. Your responses are processed entirely in your browser and are never stored or transmitted.</p></div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026 by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">GAD-7 Anxiety Test →</Link>
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">PHQ-9 Depression Test →</Link>
          <Link href="/box-breathing-exercise" className="text-sky-600 dark:text-sky-400 hover:underline">Box Breathing Exercise →</Link>
        </div>
      </div>
    </>
  );
}

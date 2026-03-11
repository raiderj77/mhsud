import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { GAD7Client } from "../gad-7-anxiety-test/GAD7Client";

const TOOL_URL = `${SITE_URL}/anxiety-test-for-teens`;

export const metadata: Metadata = createMetadata({
  path: "/anxiety-test-for-teens",
  title: "Anxiety Test for Teens — Free GAD-7 Screening",
  description: "Free teen anxiety screening using the validated GAD-7. Private, instant results. No signup.",
  keywords: [
    "anxiety test for teens", "teen anxiety screening", "teenage anxiety quiz",
    "adolescent anxiety test", "do i have anxiety teen", "gad-7 for teens",
    "teen anxiety symptoms", "social anxiety test teens", "free anxiety test teenagers",
    "teen mental health screening", "anxiety self-assessment teens",
  ],
  openGraph: {
    title: "Anxiety Test for Teens — Free GAD-7 Screening",
    description: "Free, private anxiety screening for teens using the validated GAD-7. Instant results, no signup required.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is anxiety normal for teenagers?",
    answer: "Some anxiety is a normal part of adolescence — worrying before a test, feeling nervous at a party, or stressing about the future are common experiences. However, when anxiety becomes constant, overwhelming, or starts interfering with school, friendships, sleep, or daily activities, it may be more than normal stress. About 1 in 3 teenagers will meet criteria for an anxiety disorder by age 18. The difference between normal worry and an anxiety disorder is intensity, duration, and impact on functioning.",
  },
  {
    question: "How is teen anxiety different from adult anxiety?",
    answer: "Teen anxiety often shows up differently than in adults. Teens may experience more physical symptoms (stomachaches, headaches, muscle tension), school avoidance or refusal, intense social fears, perfectionism, reassurance-seeking, irritability, or difficulty sleeping. Social media and constant digital connectivity add unique stressors that previous generations did not face. Teens may also have difficulty naming what they feel as 'anxiety' — they may just say they feel 'stressed' or 'overwhelmed.'",
  },
  {
    question: "What causes anxiety in teenagers?",
    answer: "Teen anxiety results from a combination of factors: genetics (anxiety runs in families), brain development (the prefrontal cortex is still maturing), environmental stressors (academic pressure, social dynamics, family conflict), social media exposure, trauma or adverse experiences, and sometimes physical health factors. The adolescent brain is wired to be more reactive to perceived threats, which means teens genuinely experience anxiety more intensely than many adults realize.",
  },
  {
    question: "Should I tell my parents about my anxiety?",
    answer: "If you feel safe doing so, yes. Many parents want to help but do not realize their teen is struggling. You can start with something like: 'I've been feeling really anxious lately, and I think I might need to talk to someone.' If talking to parents feels too hard, consider a school counselor, trusted teacher, another family member, or the Crisis Text Line (text HOME to 741741). You do not have to handle this alone.",
  },
  {
    question: "Can anxiety affect school performance?",
    answer: "Absolutely. Anxiety can cause difficulty concentrating, test anxiety (blanking out despite knowing the material), avoidance of participation, perfectionism that slows work to a crawl, or school avoidance altogether. Many teens with anxiety are seen as 'not trying hard enough' when they are actually trying too hard and hitting a wall. If anxiety is affecting your grades, accommodations may be available through your school's counseling office.",
  },
  {
    question: "What if my score is high?",
    answer: "A high score suggests you may be experiencing significant anxiety symptoms. This is not a diagnosis, but it is a signal worth taking seriously. Next steps: talk to a trusted adult, contact your school counselor, or ask a parent to help you schedule an appointment with a therapist or your doctor. If you are in crisis, text HOME to 741741 (Crisis Text Line) or call/text 988. Remember: anxiety is one of the most treatable mental health conditions — most teens improve significantly with the right support.",
  },
  {
    question: "Where can teens get help for anxiety?",
    answer: "School counselors are often the easiest first step. Your pediatrician or family doctor can also screen for anxiety and make referrals. Many therapists specialize in teen anxiety and offer evidence-based treatments like CBT (cognitive behavioral therapy). Teens can also reach the Crisis Text Line by texting HOME to 741741, or call/text 988 for the Suicide and Crisis Lifeline. The Trevor Project (1-866-488-7386) supports LGBTQ+ youth specifically.",
  },
  {
    question: "Is this screening confidential?",
    answer: "Yes, completely. This screening runs entirely in your browser — no data is stored on any server, no one can see your answers, and nothing is transmitted to your school, parents, or anyone else. Your results are only visible to you on your screen. If you clear your browser or close the page, the results are gone.",
  },
];

export default function AnxietyTestForTeensPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Anxiety Test for Teens — GAD-7 Screening", description: "A free, private anxiety screening tool for teenagers using the clinically validated GAD-7.", url: TOOL_URL, datePublished: "2026-03-05", dateModified: "2026-03-11" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "GAD-7 Anxiety Test", url: `${SITE_URL}/gad-7-anxiety-test` }, { name: "Anxiety Test for Teens", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (GAD-7)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300">Ages 12+</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Anxiety Test for Teens</h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            If your brain feels like it never shuts off — always worrying about school, friendships,
            the future, what people think, what you said wrong, what might go wrong — you&apos;re not
            overreacting. Anxiety is the most common mental health challenge for teens, affecting
            roughly 1 in 3 adolescents. And it&apos;s not just &quot;stress&quot; — it can feel like
            your chest is tight, your stomach is in knots, and your mind is racing even when nothing
            specific is wrong.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This free screening uses the <strong>GAD-7</strong>, the same tool therapists and doctors
            use, to help you understand what you&apos;re experiencing. It is <strong>not a
            diagnosis</strong>, but it can give you words for what you&apos;re feeling — and that
            matters.
          </p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-sky-600 text-white font-semibold text-base hover:bg-sky-700 transition-colors shadow-sm">Start the Anxiety Screening</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 2 minutes. Completely private — nothing is stored or shared.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">1 in 3 teens</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">will experience an anxiety disorder by age 18. It is the most common mental health condition in adolescents.<span className="text-slate-500 dark:text-slate-400"> — NIMH</span></p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">80% untreated</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">The majority of teens with anxiety disorders never receive treatment, despite anxiety being one of the most treatable conditions.<span className="text-slate-500 dark:text-slate-400"> — Anxiety &amp; Depression Association of America</span></p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-sky-700 dark:text-sky-300 mb-1">Highly treatable</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">CBT (cognitive behavioral therapy) is effective for 60-80% of teens with anxiety. Most teens improve significantly within 8-16 sessions.<span className="text-slate-500 dark:text-slate-400"> — APA</span></p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding Anxiety in Teens</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>Teenage anxiety is not the same as being a &quot;worrier.&quot; It is a real, physiological response — your nervous system firing threat signals even when there is no immediate danger. For many teens, this shows up as constant worry, physical symptoms like headaches and stomachaches, difficulty sleeping, irritability, trouble concentrating, avoidance of social situations, or panic attacks.</p>
            <p>Social media adds a dimension of anxiety that no previous generation has faced. The constant comparison, fear of missing out, cyberbullying, and pressure to present a perfect life online can significantly amplify anxiety symptoms. Research shows a correlation between heavy social media use and increased anxiety in adolescents.</p>
            <p>Academic pressure is another major driver. The emphasis on grades, test scores, college admissions, and extracurricular activities creates an environment where many teens feel they can never do enough. Perfectionism — the belief that anything less than perfect is failure — is closely linked to anxiety and is increasingly common among high-achieving teens.</p>
            <p>The good news: anxiety is one of the most treatable mental health conditions. CBT, in particular, has strong evidence for helping teens identify anxious thoughts, challenge them, and gradually face feared situations. Many teens see significant improvement. The first step is recognizing that what you are feeling has a name and that help is available.</p>
          </div>
        </div>

        {/* The Comparison Trap */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The Comparison Trap: Social Media and Your Developing Brain
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Your brain is still developing its prefrontal cortex — the part responsible for
              evaluating information rationally and regulating emotions. At the same time, the
              dopamine-seeking reward system is fully active. Social media algorithms are
              designed to exploit exactly this combination: they feed you content that triggers
              emotional reactions (comparison, envy, outrage, FOMO) because that keeps you
              scrolling. Your brain is wired to respond to these triggers more intensely than
              an adult&apos;s.
            </p>
            <p>
              The &quot;highlight reel&quot; effect — seeing everyone else&apos;s best moments
              while experiencing your own unfiltered reality — creates a distorted sense of what
              is normal. Research shows that teens who spend more than 3 hours daily on social
              media have double the risk of anxiety and depression symptoms. Notification anxiety
              (the stress of constant alerts), sleep disruption from late-night scrolling, and
              cyberbullying compound the effect. Reducing screen time — even by 30 minutes a day
              — has measurable benefits.
            </p>
          </div>
        </div>

        {/* When Anxiety Looks Like Something Else */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            When Anxiety Looks Like Something Else
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Teen anxiety often gets mislabeled by adults who don&apos;t recognize what
              they&apos;re seeing. The result: the wrong problem gets addressed while the
              anxiety underneath goes untreated.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-600">
                    <th className="py-2 pr-4 font-semibold text-slate-900 dark:text-white">What adults see</th>
                    <th className="py-2 font-semibold text-slate-900 dark:text-white">What may actually be happening</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 pr-4">&quot;Defiance&quot; or school refusal</td>
                    <td className="py-3">Avoidance of anxiety-triggering situations (presentations, social interactions, tests)</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 pr-4">&quot;Laziness&quot; or procrastination</td>
                    <td className="py-3">Paralysis from perfectionism or fear of failure</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 pr-4">&quot;Attention-seeking&quot;</td>
                    <td className="py-3">Somatic complaints (headaches, stomachaches) that are real physical anxiety symptoms</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-3 pr-4">&quot;Not paying attention&quot; (ADHD?)</td>
                    <td className="py-3">Racing anxious thoughts making concentration impossible</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">&quot;Attitude problem&quot; or anger</td>
                    <td className="py-3">Fight response to overwhelming anxiety — irritability is anxiety&apos;s bodyguard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Talking to Adults About Anxiety */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            How to Talk to Adults About Your Anxiety
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Telling someone you&apos;re struggling is hard — especially when &quot;I&apos;m
              fine&quot; has been your default for months. You don&apos;t need to have it all
              figured out before you say something. Here are some ways to start:
            </p>
            <div className="space-y-3">
              <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">To a parent</h3>
                <p className="text-sm">
                  &quot;I&apos;ve been feeling really anxious lately — not just normal stressed,
                  but like it&apos;s hard to function. I think I might need to talk to someone
                  about it.&quot;
                </p>
              </div>
              <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">To a school counselor</h3>
                <p className="text-sm">
                  &quot;I&apos;ve been having trouble with worry and it&apos;s affecting my
                  schoolwork. Can we talk about what options are available?&quot;
                </p>
              </div>
              <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">If talking feels impossible</h3>
                <p className="text-sm">
                  Write it down. Show them this page. Text HOME to 741741 (Crisis Text Line) and
                  talk to a trained counselor first. You don&apos;t have to get the words perfect
                  — you just have to get them out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the GAD-7 Anxiety Screening</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve been feeling over the past two weeks.</p>
        </div>
        <GAD7Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Your Next Steps</h2>
          <div className="space-y-4">
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Prefer texting?</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300"><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong> to connect with a trained counselor. Free, confidential, 24/7.</p>
            </div>
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">LGBTQ+ teens</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300"><strong>The Trevor Project:</strong> Call <strong>1-866-488-7386</strong> or text START to <strong>678-678</strong>. Trained counselors who understand. Free, confidential, 24/7.</p>
            </div>
          </div>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential</li>
            <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified healthcare professional can assess anxiety disorders. Your responses are processed entirely in your browser and are never stored or transmitted.</p></div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Reviewed by <a href="/about/jason-ramirez">a Certified Drug and Alcohol Counselor (CADC-II)</a> with 11 years of clinical experience.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026 by a Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/gad-7-anxiety-test" className="text-sky-600 dark:text-sky-400 hover:underline">GAD-7 Anxiety Test →</Link>
          <Link href="/depression-test-for-teens" className="text-sky-600 dark:text-sky-400 hover:underline">Depression Test for Teens →</Link>
          <Link href="/five-senses-grounding" className="text-sky-600 dark:text-sky-400 hover:underline">5-4-3-2-1 Grounding →</Link>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";

const ARTICLE_URL = `${SITE_URL}/blog/cognitive-distortions-list`;

export const metadata: Metadata = createMetadata({
  path: "/blog/cognitive-distortions-list",
  title: "Cognitive Distortions: 15 Thinking Errors That Fuel Anxiety",
  description:
    "Learn about 15 common cognitive distortions, how they fuel anxiety, and how CBT can help you reframe them. Includes examples and alternatives.",
  keywords: [
    "cognitive distortions list", "cognitive distortions examples", "thinking errors anxiety",
    "CBT cognitive distortions", "all or nothing thinking", "catastrophizing examples",
    "emotional reasoning", "should statements", "mental filter cognitive distortion",
    "cognitive behavioral therapy thinking errors", "reframe negative thoughts",
    "anxiety thought patterns", "cognitive distortion identifier", "overgeneralization",
    "jumping to conclusions cognitive distortion",
  ],
});

const FAQ_DATA = [
  {
    question: "Are cognitive distortions the same as lying to yourself?",
    answer:
      "No. Cognitive distortions are not intentional deception — they are automatic thinking patterns that your brain defaults to, often outside your awareness. Everyone experiences them. They develop as mental shortcuts shaped by past experiences, stress, and emotional states. Recognizing them is not about blaming yourself for &quot;wrong&quot; thinking; it is about noticing patterns so you can evaluate your thoughts more accurately.",
  },
  {
    question: "Can cognitive distortions cause depression?",
    answer:
      "Cognitive distortions do not directly cause depression, but research suggests they play a significant role in maintaining and worsening depressive symptoms. Aaron Beck&apos;s cognitive model of depression proposes that distorted thinking patterns reinforce negative beliefs about oneself, the world, and the future — a pattern he called the &quot;cognitive triad.&quot; Addressing these distortions through cognitive-behavioral therapy (CBT) is one of the most effective approaches for reducing depressive symptoms.",
  },
  {
    question: "How do I stop thinking in cognitive distortions?",
    answer:
      "You cannot eliminate cognitive distortions entirely — they are a normal part of human thinking. The goal is to become better at noticing them and choosing whether to accept the thought at face value or examine it more carefully. Techniques include keeping a thought record, asking yourself &quot;What is the evidence for and against this thought?&quot;, and practicing generating alternative explanations. Working with a therapist trained in CBT can accelerate this process significantly.",
  },
  {
    question: "What is CBT?",
    answer:
      "Cognitive-behavioral therapy (CBT) is a structured, evidence-based form of psychotherapy that focuses on the relationship between thoughts, feelings, and behaviors. Developed by Aaron Beck in the 1960s, CBT helps people identify and challenge unhelpful thinking patterns (like cognitive distortions) and develop more balanced ways of interpreting situations. It is one of the most extensively researched forms of therapy, with strong evidence for effectiveness in screening and addressing anxiety, depression, and many other conditions.",
  },
  {
    question: "Do cognitive distortions go away?",
    answer:
      "Cognitive distortions tend to decrease in frequency and intensity with practice, but they rarely disappear completely. Think of it like physical fitness — you build the skill of catching and reframing distorted thoughts over time, but the tendency toward certain patterns may resurface during stress, fatigue, or emotional difficulty. The goal is not perfection but greater awareness and flexibility in how you respond to your own thinking.",
  },
];

export default function CognitiveDistortionsListPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "Cognitive Distortions: 15 Thinking Errors That Fuel Anxiety", description: "Learn about 15 common cognitive distortions from CBT, how they fuel anxiety, and how to reframe them with examples and alternative thoughts.", url: ARTICLE_URL, datePublished: "2026-03-05", dateModified: "2026-03-05" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "Cognitive Distortions List", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Cognitive Distortions: 15 Thinking Errors That Fuel Anxiety
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Your brain is wired to protect you — but sometimes that wiring misfires. Cognitive distortions are automatic thinking patterns that twist how you interpret reality, often making situations feel worse than they are. This guide covers 15 common distortions, with real-world examples and reframed alternatives to help you start noticing them in your own thinking.
          </p>
          <div className="mt-6">
            <Link href="/cognitive-distortion-identifier" className="btn-primary text-sm">
              Try the Cognitive Distortion Identifier →
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 dark:border-amber-400 p-6 rounded-r">
            <p className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Clinical Disclaimer</p>
            <p className="text-amber-700 dark:text-amber-400 text-sm">
              This article provides educational information about cognitive distortions based on cognitive-behavioral therapy research. It is not a substitute for professional medical advice or treatment. If you are experiencing a mental health crisis, call or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline, or call SAMHSA&apos;s National Helpline at <strong>1-800-662-4357</strong> for free, confidential treatment referral and information.
            </p>
          </div>

          <section>
            <h2>What Are Cognitive Distortions?</h2>
            <p>
              Cognitive distortions are systematic errors in thinking that cause you to perceive reality inaccurately. The concept was developed by psychiatrist Aaron Beck in the 1960s as part of his pioneering work on{" "}
              <a href="https://beckinstitute.org/about/aaron-t-beck-md/" target="_blank" rel="noopener noreferrer">
                cognitive-behavioral therapy (CBT)
              </a>. Beck observed that his patients with depression and anxiety consistently interpreted events through distorted mental filters — and that these filters were predictable and categorizable.
            </p>
            <p>
              Later, psychologist David Burns popularized the concept in his 1980 book <em>Feeling Good</em>, expanding Beck&apos;s original categories into the list of common distortions widely used in clinical practice today.
            </p>
            <p>
              The key insight of Beck&apos;s model: it is not events themselves that cause emotional distress, but your <em>interpretation</em> of those events. Two people can experience the same situation and have completely different emotional responses based on the thinking patterns they apply to it.
            </p>
          </section>

          <section>
            <h2>How Cognitive Distortions Develop</h2>
            <p>
              Cognitive distortions are not signs of weakness or low intelligence. They develop through normal psychological processes, including early life experiences that shape core beliefs about yourself and the world, repeated exposure to stressful or threatening environments, evolutionary survival mechanisms that prioritize detecting threats over accuracy, and reinforcement — once a thinking pattern produces a strong emotional response, your brain tends to repeat it.
            </p>
            <p>
              In other words, your brain defaults to these patterns because at some point they served a purpose. The problem is that they often outlive their usefulness and start creating distress where none is warranted.
            </p>
          </section>

          <section>
            <h2>Why Our Brains Default to Distorted Thinking</h2>
            <p>
              From an evolutionary perspective, the brain&apos;s negativity bias made sense. Overreacting to a rustling bush (even if it was just the wind) kept our ancestors alive. Underreacting to an actual predator did not. This means our brains are wired to err on the side of threat detection — to catastrophize, overgeneralize from bad experiences, and jump to negative conclusions.
            </p>
            <p>
              In modern life, this same wiring gets applied to emails from your boss, social media interactions, and ambiguous text messages. The survival mechanism is the same; the context has changed dramatically.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>The 15 Common Cognitive Distortions</h2>
            <p>
              Below are 15 cognitive distortions commonly identified in CBT. For each, you will find a brief definition, a relatable example thought, and a reframed alternative.
            </p>

            <h3>1. All-or-Nothing Thinking</h3>
            <p>
              Seeing things in black-and-white categories with no middle ground. If something is not perfect, it is a total failure.
            </p>
            <p><em>&quot;I made one mistake in my presentation, so the whole thing was a disaster.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;The presentation had a rough moment, but most of it went well. One mistake does not erase the rest.&quot;</p>

            <h3>2. Overgeneralization</h3>
            <p>
              Drawing broad conclusions from a single event, often using words like &quot;always&quot; or &quot;never.&quot;
            </p>
            <p><em>&quot;I got rejected from that job. I never get anything I apply for.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;This application did not work out. That does not predict every future application.&quot;</p>

            <h3>3. Mental Filter</h3>
            <p>
              Focusing exclusively on one negative detail while ignoring everything positive about a situation.
            </p>
            <p><em>&quot;My manager gave me great feedback but mentioned one area to improve — clearly they think I am not good enough.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;They highlighted strengths and one growth area. That is balanced feedback, not criticism.&quot;</p>

            <h3>4. Disqualifying the Positive</h3>
            <p>
              Dismissing positive experiences by insisting they &quot;don&apos;t count&quot; for some reason.
            </p>
            <p><em>&quot;They only complimented my work to be polite. They did not really mean it.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;There is no evidence they were being insincere. I can accept the compliment at face value.&quot;</p>

            <h3>5. Jumping to Conclusions</h3>
            <p>
              Making negative interpretations without evidence. This includes two sub-types:
            </p>
            <p>
              <strong>Mind Reading:</strong> Assuming you know what others are thinking.
            </p>
            <p><em>&quot;My friend has not texted back — she is obviously angry at me.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;She might be busy. I do not have enough information to know why she has not responded.&quot;</p>
            <p>
              <strong>Fortune Telling:</strong> Predicting things will turn out badly.
            </p>
            <p><em>&quot;There is no point in applying — I will definitely not get in.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;I cannot predict the outcome. The only way to find out is to try.&quot;</p>

            <AdSlot position="Blog In-Content 2" className="my-8" />

            <h3>6. Magnification and Minimization</h3>
            <p>
              Exaggerating the importance of negative events (magnification) or shrinking the significance of positive ones (minimization).
            </p>
            <p><em>&quot;That awkward thing I said at the party was humiliating — but the fact that everyone laughed at my jokes does not matter.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;I had one awkward moment, but I also connected well with people. Both are real.&quot;</p>

            <h3>7. Emotional Reasoning</h3>
            <p>
              Assuming that because you feel something, it must be true. &quot;I feel it, therefore it is.&quot;
            </p>
            <p><em>&quot;I feel stupid, so I must actually be stupid.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;Feeling stupid does not make me stupid. Feelings are not facts.&quot;</p>

            <h3>8. Should Statements</h3>
            <p>
              Holding yourself (or others) to rigid rules about how things &quot;should&quot; be, creating guilt and frustration.
            </p>
            <p><em>&quot;I should be further ahead in my career by now.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;I would like to be further along, but my timeline is my own. Comparing to an arbitrary standard is not helpful.&quot;</p>

            <h3>9. Labeling</h3>
            <p>
              Attaching a fixed, global label to yourself or others based on a single behavior.
            </p>
            <p><em>&quot;I forgot to reply to that email. I am so irresponsible.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;I forgot one email. That is a behavior, not a character trait.&quot;</p>

            <h3>10. Personalization</h3>
            <p>
              Blaming yourself for external events that are not entirely within your control.
            </p>
            <p><em>&quot;My kid got a bad grade — I must be a terrible parent.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;Many factors affect a child&apos;s performance. This is not entirely about my parenting.&quot;</p>

            <AdSlot position="Blog In-Content 3" className="my-8" />

            <h3>11. Catastrophizing</h3>
            <p>
              Jumping to the worst-case scenario and treating it as the most likely outcome.
            </p>
            <p><em>&quot;I have a headache — what if it is something serious? What if I cannot work?&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;Headaches are common and usually benign. I can see a doctor if it persists, but jumping to the worst case is not warranted right now.&quot;</p>

            <h3>12. Blaming</h3>
            <p>
              Holding others entirely responsible for your emotional pain, or conversely, blaming yourself for everything.
            </p>
            <p><em>&quot;I would not be so unhappy if my partner tried harder.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;My partner&apos;s behavior affects me, but my happiness is also influenced by my own choices and thinking patterns.&quot;</p>

            <h3>13. Fallacy of Fairness</h3>
            <p>
              Believing that everything should be fair, and feeling resentful when it is not.
            </p>
            <p><em>&quot;I worked just as hard as they did — it is not fair that they got promoted and I did not.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;I can feel disappointed without assuming the process was unfair. Many factors go into these decisions.&quot;</p>

            <h3>14. Fallacy of Change</h3>
            <p>
              Expecting that other people will change if you pressure them enough, and basing your happiness on that expectation.
            </p>
            <p><em>&quot;If I just explain it clearly enough, they will finally understand and change their behavior.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;I can communicate my needs, but I cannot control whether someone else changes. I can focus on what is within my control.&quot;</p>

            <h3>15. Always Being Right</h3>
            <p>
              Prioritizing being right over everything else, including the feelings of others and the relationship itself.
            </p>
            <p><em>&quot;I do not care how they feel about it — I need to prove that I am right.&quot;</em></p>
            <p><strong>Reframe:</strong> &quot;Being right is less important than being kind. I can hold my perspective without needing to win the argument.&quot;</p>
          </section>

          <section>
            <h2>How Cognitive Distortions Connect to Anxiety and Depression</h2>
            <p>
              Cognitive distortions are not just abstract thinking errors — they have real consequences for mental health. In anxiety, distortions like catastrophizing, fortune telling, and mind reading create a constant sense of threat. Your brain treats imagined worst-case scenarios as if they are happening right now, activating the stress response and keeping you in a state of heightened alertness.
            </p>
            <p>
              In depression, distortions like mental filtering, disqualifying the positive, and labeling reinforce feelings of hopelessness and worthlessness. When you systematically filter out evidence that contradicts your negative self-view, the depression deepens because the world genuinely <em>seems</em> as bleak as you feel.
            </p>
            <p>
              This is why cognitive distortions are a central focus in evidence-based therapy. Disrupting these patterns can interrupt the cycles that maintain anxiety and depressive symptoms. If you are curious about your own anxiety levels, the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7 anxiety self-check</Link> may be a useful starting point.
            </p>
          </section>

          <section>
            <h2>How CBT Addresses Cognitive Distortions</h2>
            <p>
              Cognitive-behavioral therapy works by helping you become aware of your distorted thinking patterns, evaluate them against evidence, and practice generating more balanced alternatives. This is not about &quot;positive thinking&quot; — it is about <em>accurate</em> thinking.
            </p>
            <p>
              Common CBT techniques for working with cognitive distortions include thought records (writing down the situation, your automatic thought, the distortion type, and an alternative interpretation), behavioral experiments (testing whether your predictions actually come true), and Socratic questioning (a therapist guiding you to examine your beliefs through targeted questions rather than simply telling you what to think).
            </p>
            <p>
              Research consistently shows that CBT is one of the most effective approaches for anxiety and depression. The{" "}
              <a href="https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral" target="_blank" rel="noopener noreferrer">
                American Psychological Association
              </a>{" "}
              recognizes CBT as a first-line treatment for multiple conditions, with decades of clinical evidence supporting its effectiveness.
            </p>
          </section>

          <section>
            <h2>Using the Cognitive Distortion Identifier Tool</h2>
            <p>
              If reading through this list made you recognize patterns in your own thinking, you are not alone. Most people regularly engage in several of these distortions without realizing it. Our free <Link href="/cognitive-distortion-identifier" className="text-sage-600 dark:text-sage-400 underline">Cognitive Distortion Identifier</Link> can help you explore which patterns may show up most in your thinking.
            </p>
            <p>
              The tool is not a clinical assessment — it is a self-reflection exercise designed to build awareness. All of your responses are processed in your browser and are never stored or sent to a server. It takes about five minutes and may give you a useful starting point for conversations with a therapist or for your own personal growth.
            </p>
          </section>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Identify your thinking patterns</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">The Cognitive Distortion Identifier is a free self-reflection tool. Private, takes about 5 minutes, and your answers never leave your browser.</p>
            <Link href="/cognitive-distortion-identifier" className="btn-primary text-sm">Try the Cognitive Distortion Identifier</Link>
          </div>

          <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500 dark:border-red-400 p-6 rounded-r">
            <p className="font-semibold text-red-800 dark:text-red-300 mb-2">Emergency Resources</p>
            <p className="text-red-700 dark:text-red-400 text-sm">
              If you are experiencing a mental health crisis or having thoughts of harming yourself or others:
            </p>
            <ul className="text-red-700 dark:text-red-400 text-sm mt-2 space-y-1">
              <li>Call or text <strong>988</strong> for the Suicide &amp; Crisis Lifeline (available 24/7)</li>
              <li>Call SAMHSA&apos;s National Helpline at <strong>1-800-662-4357</strong> for free, confidential treatment referral</li>
              <li>Go to the nearest emergency room or call 911</li>
              <li>Contact the Crisis Text Line by texting HOME to 741741</li>
            </ul>
          </div>

          {/* Author Bio */}
          <AuthorBio />

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
              <Link href="/cognitive-distortion-identifier" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Cognitive Distortion Identifier</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">Explore which thinking patterns show up most in your daily life</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Self-Check</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">A clinically validated screening tool for generalized anxiety</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-ocd-looks-like" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">What OCD Actually Looks Like</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">Beyond the stereotypes: understanding obsessive-compulsive patterns</p>
              </Link>
              <Link href="/blog/dbt-skills-beginners" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DBT Skills for Beginners</p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">An introduction to dialectical behavior therapy skills</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

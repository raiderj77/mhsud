import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/dbt-skills-beginners`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "dbt-skills-beginners")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/dbt-skills-beginners",
  title: "DBT Skills for Everyday Life: A Beginner's Guide",
  description:
    "Learn the 4 DBT skill modules — mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness — in plain language.",
  keywords: [
    "DBT skills for beginners", "dialectical behavior therapy skills", "DBT mindfulness skills",
    "DBT distress tolerance", "DBT emotion regulation", "DBT interpersonal effectiveness",
    "TIPP DBT skill", "DEAR MAN DBT", "DBT vs CBT", "DBT crisis survival skills",
    "DBT PLEASE skills", "opposite action DBT", "DBT for anxiety", "DBT for depression",
    "Marsha Linehan DBT",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  { question: "Do I need to have BPD to use DBT?", answer: "No. DBT was originally developed for borderline personality disorder, but research shows it is effective for anxiety, depression, eating disorders, substance use, PTSD, and everyday emotional overwhelm. You do not need any specific screening result to benefit from learning and practicing DBT skills in your daily life." },
  { question: "What is the difference between DBT and CBT?", answer: "CBT focuses primarily on identifying and changing unhelpful thought patterns. DBT includes cognitive-behavioral techniques but adds acceptance-based strategies from mindfulness practice and a strong emphasis on building skills for managing intense emotions. CBT focuses on change; DBT balances change with acceptance. DBT also includes structured skills training as a core component." },
  { question: "Can I learn DBT on my own?", answer: "You can learn and practice individual DBT skills using books, workbooks, and online resources. Many people find significant benefit from self-guided practice. However, comprehensive DBT includes individual therapy, a skills group, phone coaching, and a consultation team. The full model is most effective for complex difficulties. Self-guided practice is a helpful starting point." },
  { question: "What does TIPP stand for in DBT?", answer: "TIPP stands for Temperature (cold water or ice to activate the dive reflex), Intense exercise (burning off stress hormones through vigorous activity), Paced breathing (slowing your exhale to activate the parasympathetic nervous system), and Progressive muscle relaxation (tensing and releasing muscle groups). These skills are designed for acute crisis moments when emotions feel overwhelming." },
  { question: "How long does DBT take to work?", answer: "A standard comprehensive DBT program runs about one year with weekly therapy and skills group sessions. Many people notice improvements in managing emotions within the first few months of consistent practice. Building lasting habits takes time. Self-guided practice has no fixed timeline \u2014 you may notice benefits as soon as you apply skills consistently to real-life situations." },
];

export default function DbtSkillsBeginnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "DBT Skills for Everyday Life: A Beginner's Guide", description: "Learn the 4 DBT skill modules — mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness — in plain language.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "DBT Skills for Beginners", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            DBT Skills for Everyday Life: A Beginner&apos;s Guide
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Dialectical behavior therapy sounds clinical and complicated, but the skills at its core are surprisingly practical. Originally developed for people in severe emotional pain, DBT skills have since proven useful for anyone who wants to manage stress, handle difficult emotions, and communicate more effectively. This guide breaks down all four DBT skill modules in plain language — no therapy degree required.
          </p>
          <div className="mt-6">
            <Link href="/dbt-crisis-skills" className="btn-primary text-sm">
              Try the DBT Crisis Skills Cards &rarr;
            </Link>
          </div>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What is DBT?</h2>
            <p>
              Dialectical behavior therapy (DBT) is a type of cognitive-behavioral treatment developed in the late 1980s by psychologist Marsha Linehan at the University of Washington. It was originally created to help individuals with borderline personality disorder (BPD) — particularly those experiencing chronic suicidal thoughts and self-harm — who were not responding well to standard treatments.
            </p>
            <p>
              Since then, DBT has been adapted for a much broader range of concerns. Research supported by the <a href="https://www.nimh.nih.gov/health/topics/borderline-personality-disorder" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">National Institute of Mental Health (NIMH)</a> and other institutions has shown DBT to be effective for depression, anxiety, eating disorders, substance use, and PTSD, among other conditions. The <a href="https://behavioraltech.org/resources/faqs/dialectical-behavior-therapy-dbt/" target="_blank" rel="noopener noreferrer" className="text-sage-600 dark:text-sage-400 underline">Linehan Institute at Behavioral Tech</a> continues to advance training and research in DBT worldwide.
            </p>
            <p>
              At its heart, DBT is a skills-based approach. While the full treatment model includes individual therapy, group skills training, phone coaching, and a therapist consultation team, the skills themselves can be learned and practiced by anyone — and many people find them transformative even outside of formal therapy.
            </p>
          </section>

          <section>
            <h2>The &quot;dialectical&quot; concept: acceptance AND change</h2>
            <p>
              The word &quot;dialectical&quot; refers to the balance between two things that seem opposite but are both true. In DBT, the core dialectic is <strong>acceptance and change</strong>. You can accept yourself as you are right now and still work to change behaviors that are causing you suffering. These are not contradictions — they work together.
            </p>
            <p>
              This is what sets DBT apart from many other approaches. Pure change-based therapies can feel invalidating to someone in deep emotional pain. Pure acceptance can feel stagnant. DBT holds both at the same time: &quot;I am doing the best I can, and I can do better.&quot; This synthesis is the foundation upon which all four skill modules are built.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>Module 1: Mindfulness</h2>
            <p>
              Mindfulness is the foundation of all DBT skills. It is the practice of paying attention to the present moment, on purpose, without judgment. In DBT, mindfulness is broken into six specific skills organized into two groups:
            </p>
            <p>
              <strong>&quot;What&quot; skills — what you do:</strong>
            </p>
            <div className="not-prose my-4 space-y-2">
              {[
                { label: "Observe", desc: "Notice what is happening inside and around you — sensations, thoughts, emotions, sounds — without trying to change anything. Simply watch." },
                { label: "Describe", desc: "Put words to what you observe. Instead of 'I feel terrible,' try 'I notice a tightness in my chest and a thought that says I can't handle this.'" },
                { label: "Participate", desc: "Throw yourself fully into the current activity. When you are washing dishes, wash dishes. When you are in a conversation, be in the conversation." },
              ].map((item, i) => (
                <div key={i} className="card p-4">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{item.label}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              <strong>&quot;How&quot; skills — how you do it:</strong>
            </p>
            <div className="not-prose my-4 space-y-2">
              {[
                { label: "Non-judgmentally", desc: "Let go of evaluations like 'good' or 'bad.' Describe facts instead. A thought is just a thought, not evidence of failure." },
                { label: "One-mindfully", desc: "Do one thing at a time with your full attention. When your mind wanders, gently bring it back." },
                { label: "Effectively", desc: "Do what works in the situation rather than what 'should' work or what feels fair. Focus on your goals, not on being right." },
              ].map((item, i) => (
                <div key={i} className="card p-4">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{item.label}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              <strong>Everyday application:</strong> The next time you feel overwhelmed, pause and spend 30 seconds simply observing what you notice in your body. Describe it silently to yourself without adding judgments. This small act creates space between a stimulus and your response — and that space is where better decisions live. You can also practice mindful breathing with our <Link href="/box-breathing-exercise" className="text-sage-600 dark:text-sage-400 underline">Box Breathing Exercise</Link>.
            </p>
          </section>

          <section>
            <h2>Module 2: Distress tolerance</h2>
            <p>
              Distress tolerance skills are designed for crisis moments — times when emotions are so intense that you feel you cannot cope. The goal is not to make the pain go away but to survive the moment without making things worse. These are sometimes called crisis survival skills.
            </p>
            <p>
              Key distress tolerance skills include:
            </p>
            <div className="not-prose my-4 space-y-2">
              {[
                { label: "TIPP", desc: "Temperature (cold water on your face to trigger the dive reflex), Intense exercise, Paced breathing (long slow exhales), and Progressive muscle relaxation. These directly change your body chemistry in moments of acute distress." },
                { label: "STOP", desc: "Stop (freeze, don't react), Take a step back (physically or mentally), Observe (what is happening inside and around you), and Proceed mindfully (act with awareness rather than impulse)." },
                { label: "ACCEPTS", desc: "Activities, Contributing, Comparisons, Emotions (opposite), Pushing away, Thoughts (other), and Sensations. Seven categories of distraction to get through a crisis moment." },
                { label: "IMPROVE the Moment", desc: "Imagery, Meaning, Prayer or spiritual practice, Relaxation, One thing in the moment, Vacation (brief mental break), and Encouragement (self-talk). Ways to make a painful moment slightly more bearable." },
              ].map((item, i) => (
                <div key={i} className="card p-4">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{item.label}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              <strong>Everyday application:</strong> You do not need to be in a full-blown crisis to use these skills. Stuck in traffic and feeling your frustration escalate? Try paced breathing. Received a hurtful message and want to fire back immediately? Use STOP. Waiting for medical test results and spiraling with worry? Try ACCEPTS. You can explore these techniques interactively with our <Link href="/dbt-crisis-skills" className="text-sage-600 dark:text-sage-400 underline">DBT Crisis Survival Skills Cards</Link>.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>Module 3: Emotion regulation</h2>
            <p>
              While distress tolerance is about surviving a crisis, emotion regulation is about the longer game — understanding your emotions, reducing your vulnerability to intense emotional reactions, and changing emotions you want to change.
            </p>
            <p>
              Core emotion regulation skills include:
            </p>
            <div className="not-prose my-4 space-y-2">
              {[
                { label: "Understanding emotions", desc: "Learning what emotions do, why they exist, and how to name them accurately. Emotions are not random — they carry information. Identifying an emotion precisely ('I feel ashamed' vs. 'I feel bad') is the first step toward managing it." },
                { label: "Checking the facts", desc: "Before acting on an emotion, check whether it fits the facts of the situation. Ask: What event triggered this feeling? What are my interpretations? Are there other possible interpretations? Is the intensity of my emotion proportional to the actual situation?" },
                { label: "Opposite action", desc: "When an emotion does not fit the facts or is not effective, act opposite to the urge the emotion creates. If shame tells you to hide, show up. If anger says attack, step back gently. If fear says avoid, approach. This works because emotions and actions reinforce each other." },
                { label: "PLEASE skills", desc: "Reduce emotional vulnerability by taking care of your body: treat PhysicaL illness, balance Eating, Avoid mood-altering substances, balance Sleep, and get Exercise. When your body is depleted, every emotion hits harder." },
              ].map((item, i) => (
                <div key={i} className="card p-4">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{item.label}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              <strong>Everyday application:</strong> The next time you feel a strong emotional reaction, try checking the facts before responding. Ask yourself: &quot;Is my interpretation the only possible one?&quot; and &quot;Is the intensity of what I feel matched to the actual threat?&quot; This simple practice can prevent countless unnecessary arguments, anxiety spirals, and shame episodes.
            </p>
          </section>

          <section>
            <h2>Module 4: Interpersonal effectiveness</h2>
            <p>
              Interpersonal effectiveness skills help you navigate relationships — asking for what you need, saying no, and maintaining both self-respect and the relationship. DBT organizes these skills into three memorable acronyms:
            </p>
            <div className="not-prose my-4 space-y-2">
              {[
                { label: "DEAR MAN", desc: "For getting what you want: Describe the situation factually, Express your feelings using 'I' statements, Assert what you need clearly, Reinforce by explaining the positive outcome, stay Mindful (don't get sidetracked), Appear confident (even if you don't feel it), and Negotiate (be willing to give to get)." },
                { label: "GIVE", desc: "For maintaining the relationship: be Gentle (no attacks or threats), act Interested (listen actively), Validate the other person's feelings and perspective, use an Easy manner (keep it light when possible)." },
                { label: "FAST", desc: "For keeping your self-respect: be Fair to yourself and the other person, no Apologies for having a valid need, Stick to your values, be Truthful (don't exaggerate or minimize)." },
              ].map((item, i) => (
                <div key={i} className="card p-4">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{item.label}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              <strong>Everyday application:</strong> Before a difficult conversation — asking your boss for a raise, setting a boundary with a family member, or resolving a conflict with a partner — walk through DEAR MAN in advance. Write out what you want to describe, express, and assert. Decide where you are willing to negotiate. This preparation turns emotionally charged conversations into structured, effective communication.
            </p>
          </section>

          <section>
            <h2>How DBT differs from CBT</h2>
            <p>
              Both DBT and cognitive behavioral therapy (CBT) are evidence-based treatments, and they share common ground — both help people identify and change patterns that cause suffering. However, there are important differences.
            </p>
            <p>
              CBT focuses primarily on changing unhelpful thoughts and behaviors. The underlying assumption is that if you change how you think, you change how you feel. DBT includes this cognitive-behavioral approach but adds a critical layer: <strong>acceptance</strong>. Sometimes you cannot think your way out of an emotion. Sometimes the most effective thing is to accept the pain, tolerate the distress, and ride the wave without making it worse.
            </p>
            <p>
              DBT also places greater emphasis on <strong>skills training</strong> as a core component, not an add-on. The four modules — mindfulness, distress tolerance, emotion regulation, and interpersonal effectiveness — are taught systematically and practiced between sessions. CBT may incorporate skills, but it does not typically follow DBT&apos;s structured skills curriculum.
            </p>
            <p>
              Finally, DBT was specifically designed for people who experience emotions intensely. If you have been told you are &quot;too sensitive&quot; or &quot;too emotional,&quot; DBT&apos;s validation-based approach may feel more aligned with your experience than a purely change-focused model.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Who benefits from DBT?</h2>
            <p>
              While DBT was created for borderline personality disorder, research now supports its use across a wide range of conditions and populations. People who may benefit from DBT skills include those experiencing:
            </p>
            <div className="not-prose my-4 space-y-2">
              {[
                { desc: "Intense or rapidly shifting emotions that feel difficult to control" },
                { desc: "Chronic anxiety, depression, or stress that hasn't responded fully to other approaches" },
                { desc: "Difficulty managing anger or frustration in relationships" },
                { desc: "Substance use or other impulsive behaviors used to cope with emotional pain" },
                { desc: "Eating disorders or body image struggles" },
                { desc: "PTSD or complex trauma responses" },
                { desc: "A pattern of rocky relationships or difficulty setting boundaries" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-mono font-bold text-sage-600 dark:text-sage-400 w-4 flex-shrink-0">{i + 1}</span>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.desc}</p>
                </div>
              ))}
            </div>
            <p>
              You do not need a specific screening result to learn and practice DBT skills. If you struggle with emotional intensity, impulsive reactions, or interpersonal conflict, these skills may be useful tools in your daily life.
            </p>
          </section>

          <section>
            <h2>Using the DBT Crisis Skills Cards tool</h2>
            <p>
              If you want to start practicing distress tolerance skills right away, our <Link href="/dbt-crisis-skills" className="text-sage-600 dark:text-sage-400 underline">DBT Crisis Survival Skills Cards</Link> tool provides quick, interactive reference cards for the major crisis survival techniques — including TIPP, STOP, and ACCEPTS. Each card explains the skill in simple terms and walks you through how to use it in the moment.
            </p>
            <p>
              The tool runs entirely in your browser. Nothing is stored or transmitted. You can also pair it with our <Link href="/box-breathing-exercise" className="text-sage-600 dark:text-sage-400 underline">Box Breathing Exercise</Link> for guided paced breathing — one of the core components of the TIPP skill.
            </p>
          </section>

          {/* Clinical Disclaimer */}
          <div className="card p-6 sm:p-8 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose">
            <h3 className="font-serif text-lg font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
              This article is for educational purposes only. It is not a substitute for professional medical advice, screening, or treatment. The information here is not intended to diagnose any condition. DBT skills described in this guide are general educational content and should not replace guidance from a qualified mental health provider.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
              <strong>If you or someone you know is in crisis:</strong>
            </p>
            <ul className="text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
              <li><strong>988 Suicide and Crisis Lifeline:</strong> Call or text <strong>988</strong> (available 24/7)</li>
              <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to practice DBT skills?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Our DBT Crisis Survival Skills Cards give you quick-reference guides for TIPP, STOP, ACCEPTS, and more. Free, private, runs entirely in your browser.</p>
            <Link href="/dbt-crisis-skills" className="btn-primary text-sm">Explore DBT Crisis Skills Cards</Link>
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
              <Link href="/dbt-crisis-skills" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DBT Crisis Survival Skills Cards</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Interactive reference cards for distress tolerance techniques</p>
              </Link>
              <Link href="/box-breathing-exercise" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Box Breathing Exercise</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Guided paced breathing for stress relief and emotional regulation</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/cognitive-distortions-list" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Cognitive Distortions List</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Common thinking patterns that affect mood and behavior</p>
              </Link>
              <Link href="/blog/relapse-prevention-plan-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Relapse Prevention Plan Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Build a personalized plan for maintaining recovery</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

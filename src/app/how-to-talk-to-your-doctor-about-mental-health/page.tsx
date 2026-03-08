import type { Metadata } from "next";
import Link from "next/link";
import {
  createMetadata,
  articleJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
  SITE_URL,
} from "@/lib/metadata";
import { ToolReviewerBio } from "@/components/ToolReviewerBio";
import { AdSlot } from "@/components/AdSlot";

const PAGE_URL = `${SITE_URL}/how-to-talk-to-your-doctor-about-mental-health`;

const FAQ_DATA = [
  {
    question: "What should I say to my doctor about depression?",
    answer:
      "You can start with something like: 'I have been feeling down and low-energy for the past few weeks, and it is affecting my ability to function at work and at home. I took a PHQ-9 online and scored [X]. I would like to talk about what that means and what I can do.' Your doctor will ask follow-up questions from there — you do not need to have a perfect explanation prepared.",
  },
  {
    question: "How do I bring up anxiety with my doctor?",
    answer:
      "Try: 'I have been dealing with a lot of worry and nervousness that feels hard to control. It is affecting my sleep and my ability to concentrate. I took a GAD-7 screening and scored [X].' Naming the specific symptoms and how long they have lasted gives your doctor the most helpful information.",
  },
  {
    question: "Can I share my screening results with my doctor?",
    answer:
      "Yes — many doctors already use screening tools like the PHQ-9 and GAD-7 in their practice. Bringing your self-check results gives them a concrete starting point. You can download a reflection summary from any tool on this site to bring to your appointment.",
  },
  {
    question: "What if my doctor dismisses my mental health concerns?",
    answer:
      "If you feel dismissed, you have every right to advocate for yourself. You can say: 'This is really affecting my quality of life and I would like to explore this further.' If your provider is not receptive, consider seeking a second opinion or asking for a referral to a mental health specialist. Your concerns are valid.",
  },
  {
    question: "Do I need a referral to see a therapist?",
    answer:
      "In most US states, you do not need a referral to see a therapist — you can contact a therapist directly. Some insurance plans may require a referral for coverage purposes, so check with your provider. Psychology Today, the SAMHSA treatment locator (findtreatment.gov), and your insurance directory are good places to search.",
  },
  {
    question: "What happens at a first therapy appointment?",
    answer:
      "The first session is typically an intake or assessment. Your therapist will ask about what brought you in, your history, your current symptoms, your goals, and your support system. You do not need to share everything in the first session. It is also okay to ask the therapist questions about their approach, experience, and how they typically work.",
  },
  {
    question: "How do I talk about suicidal thoughts with a doctor?",
    answer:
      "If you are having thoughts of suicide, it is important to tell your doctor directly. You might say: 'I have been having thoughts about not wanting to be alive, and I want to talk about it.' Doctors are trained to respond to this without judgment. If you are in immediate danger, call or text 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room.",
  },
  {
    question: "Is what I tell my doctor about mental health confidential?",
    answer:
      "Yes — doctor-patient confidentiality protects what you share in a medical appointment. There are narrow exceptions: if there is an imminent risk to your life or someone else's, or in cases of suspected child or elder abuse. Outside those situations, your doctor cannot share your mental health information without your written consent.",
  },
];

const HOW_TO_STEPS = [
  "Take a screening self-check to organize your thoughts (PHQ-9 for depression, GAD-7 for anxiety, AUDIT for alcohol use)",
  "Download your reflection summary from the tool page to bring to the appointment",
  "Write down your main symptoms, how long they have lasted, and how they affect your daily life",
  "List any current medications, supplements, and recent life changes",
  "Prepare one or two sentences to start the conversation — see the scripts below",
];

export const metadata: Metadata = createMetadata({
  path: "/how-to-talk-to-your-doctor-about-mental-health",
  title: "How to Talk to Your Doctor About Mental Health",
  description:
    "Preparing to discuss mental health with a doctor or therapist? Get exact language, what to bring, and how to use screening results.",
});

export default function DoctorGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "How to Talk to Your Doctor About Your Mental Health",
              description:
                "Preparing to discuss mental health with a doctor or therapist? Get exact language, what to bring, and how to use screening results.",
              url: PAGE_URL,
              datePublished: "2026-03-07",
              dateModified: new Date().toISOString().split("T")[0],
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
              { name: "Guides", url: SITE_URL },
              { name: "How to Talk to Your Doctor", url: PAGE_URL },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Prepare for a Mental Health Appointment",
            description:
              "Steps to organize your thoughts, screening results, and questions before talking to a doctor or therapist about mental health.",
            step: HOW_TO_STEPS.map((text, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              text,
            })),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Guide</span>
            <span className="badge bg-sand-100 dark:bg-night-700 text-neutral-500 dark:text-neutral-400">Evidence-Based</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">
            How to Talk to Your Doctor About Your Mental Health
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl">
            Starting the conversation about mental health can feel intimidating. This guide gives you exact language, practical steps, and everything you need to make that appointment productive.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-3">Last updated: March 7, 2026</p>
        </header>

        <div className="prose-mh space-y-10">
          {/* Intro */}
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            If you have taken a mental health screening and are wondering what to do next, you are already further along than most people get. The hardest part is often not the appointment itself — it is deciding to bring it up. This page gives you the words, the preparation steps, and the context so you can walk in feeling ready.
          </p>

          {/* Section 1: Before Your Appointment */}
          <section>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Before Your Appointment: How to Prepare
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              Preparation reduces anxiety about the conversation and helps your provider give you better care. You do not need to have everything figured out — the goal is to give your doctor enough context to help you.
            </p>

            <div className="card p-5 sm:p-6 mb-4">
              <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                Steps to Prepare
              </h3>
              <ol className="space-y-3">
                {HOW_TO_STEPS.map((step, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-100 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Using a screening tool before your appointment is one of the most effective ways to organize your thoughts. The{" "}
              <Link href="/phq-9-depression-test" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PHQ-9</Link> covers depression symptoms, the{" "}
              <Link href="/gad-7-anxiety-test" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">GAD-7</Link> covers anxiety, and the{" "}
              <Link href="/audit-alcohol-test" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">AUDIT</Link> screens for alcohol-related concerns. Each tool on this site lets you download a reflection summary to bring to your appointment.
            </p>
          </section>

          {/* Section 2: Exact Language to Use */}
          <section>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Exact Language You Can Use With Your Doctor
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              You do not need to have it all figured out. Here are words that work — feel free to use them exactly as written, or adapt them to your situation.
            </p>

            <div className="space-y-4">
              <blockquote className="border-l-4 border-sage-300 dark:border-sage-700 pl-4 py-2 bg-sage-50/30 dark:bg-sage-950/10 rounded-r-lg">
                <p className="text-[15px] text-neutral-700 dark:text-neutral-200 italic leading-relaxed">
                  &ldquo;I have been feeling down and having trouble with sleep and energy for about three weeks. It is affecting my work and relationships. I took a PHQ-9 online and scored [X] — I would like to discuss what that means for me.&rdquo;
                </p>
              </blockquote>

              <blockquote className="border-l-4 border-sage-300 dark:border-sage-700 pl-4 py-2 bg-sage-50/30 dark:bg-sage-950/10 rounded-r-lg">
                <p className="text-[15px] text-neutral-700 dark:text-neutral-200 italic leading-relaxed">
                  &ldquo;I am not sure if what I am experiencing is depression or just stress, but it has been going on for a while and I wanted to ask about it.&rdquo;
                </p>
              </blockquote>

              <blockquote className="border-l-4 border-sage-300 dark:border-sage-700 pl-4 py-2 bg-sage-50/30 dark:bg-sage-950/10 rounded-r-lg">
                <p className="text-[15px] text-neutral-700 dark:text-neutral-200 italic leading-relaxed">
                  &ldquo;I have been worrying constantly and it is hard to control. My anxiety is making it difficult to focus at work and I am having trouble sleeping. I took a GAD-7 and scored in the moderate range.&rdquo;
                </p>
              </blockquote>

              <blockquote className="border-l-4 border-sage-300 dark:border-sage-700 pl-4 py-2 bg-sage-50/30 dark:bg-sage-950/10 rounded-r-lg">
                <p className="text-[15px] text-neutral-700 dark:text-neutral-200 italic leading-relaxed">
                  &ldquo;I have been drinking more than usual and I am concerned about it. I took an alcohol screening and the results suggest I should talk to someone.&rdquo;
                </p>
              </blockquote>

              <blockquote className="border-l-4 border-warm-300 dark:border-warm-700 pl-4 py-2 bg-warm-50/30 dark:bg-warm-950/10 rounded-r-lg">
                <p className="text-[15px] text-neutral-700 dark:text-neutral-200 italic leading-relaxed">
                  &ldquo;I have been having thoughts that scare me and I want to tell someone about them. I need help.&rdquo;
                </p>
              </blockquote>
            </div>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4 leading-relaxed">
              The specific details matter less than the act of speaking up. Your doctor is trained to guide the conversation once you open the door.
            </p>
          </section>

          <AdSlot position="Below Results" className="my-8" />

          {/* Section 3: What to Expect */}
          <section>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              What to Expect at the Appointment
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              Your doctor may ask follow-up questions about your symptoms, how long they have lasted, and how they affect your daily life. This is normal and part of understanding your situation — it does not mean they doubt you.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              They may administer a formal screening tool during the visit. If you already took the PHQ-9 or GAD-7, let them know — they may still want you to complete it in their office for documentation purposes, and that is fine.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              Your doctor may refer you to a specialist — a psychiatrist, psychologist, or therapist. This is a positive outcome, not a negative one. It means they are connecting you with someone who has specific expertise in the area you need support with.
            </p>
            <div className="card p-4 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800">
              <p className="text-sm text-sage-700 dark:text-sage-400 leading-relaxed">
                <strong>Confidentiality:</strong> What you share with your doctor is protected by doctor-patient privilege. They cannot share your mental health information with employers, family members, or anyone else without your written consent, except in narrow circumstances involving imminent safety risks.
              </p>
            </div>
          </section>

          {/* Section 4: If Nervous */}
          <section>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              If You Are Nervous or Have Had Bad Experiences
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              It is completely normal to feel anxious about discussing mental health — especially if you have had negative experiences with healthcare in the past. Here are some things that may help:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "It is okay to say: \"I have had a hard time talking about this before\" — this tells your provider to be especially thoughtful.",
                "You can request a longer appointment specifically for mental health concerns. Many offices offer 30- or 45-minute appointments.",
                "You can bring someone with you for support — a partner, friend, or family member — if that would make you feel more comfortable.",
                "Telehealth appointments are an option if in-person visits feel too overwhelming. Many providers now offer video visits for mental health.",
                "If your provider is not receptive, that reflects on them, not on you. You have the right to seek a second opinion or request a different provider.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  <span className="text-sage-500 mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 5: Talking to a Therapist */}
          <section>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Talking to a Therapist for the First Time
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              Seeing a therapist is different from a doctor visit. While a primary care doctor can prescribe medication and evaluate your overall health, a therapist provides ongoing support through conversation-based treatment (psychotherapy). You do not need a referral in most states — you can contact a therapist directly.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              The first session is typically an intake. Your therapist will ask about what brought you in, your background, and what you hope to get out of therapy. You do not need to share your entire life story in the first meeting. Many people start with: &ldquo;I have been struggling with [symptom] and I want to learn how to manage it better.&rdquo;
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              It is okay if the first therapist is not the right fit. Research consistently shows that the therapeutic relationship — feeling safe, understood, and respected — is the most important factor in therapy outcomes. If something feels off after 2–3 sessions, it is completely appropriate to try someone else.
            </p>
            <div className="card p-4 bg-sand-50 dark:bg-night-700">
              <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                <strong>Finding a therapist:</strong> Your insurance provider directory, <a href="https://findtreatment.gov" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400">findtreatment.gov</a> (SAMHSA), and <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" className="underline text-sage-600 dark:text-sage-400">NAMI</a> can help you locate therapists in your area. Many therapists offer sliding-scale fees for uninsured clients.
              </p>
            </div>
          </section>

          <AdSlot position="Mid Content" className="my-8" />

          {/* Section 6: After the Appointment */}
          <section>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              After the Appointment: Tracking Your Progress
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              One appointment is a beginning, not a conclusion. Tracking how you feel over time helps you — and your provider — understand what is working and what might need to change.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              Retaking screening tools periodically is one of the simplest ways to monitor progress. The{" "}
              <Link href="/phq-9-depression-test" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">PHQ-9</Link> and{" "}
              <Link href="/gad-7-anxiety-test" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">GAD-7</Link> are designed to be retaken every 2–4 weeks. Comparing scores over time gives both you and your provider a concrete picture of change.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              The{" "}
              <Link href="/daily-recovery-check-in" className="underline text-sage-600 dark:text-sage-400 hover:text-sage-800 dark:hover:text-sage-300">Daily Recovery Check-In</Link>{" "}
              tool can help you track mood, sleep, and cravings on a daily basis. Bringing a week or two of check-in data to your next appointment gives your provider significantly more information than memory alone.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              If you feel dismissed, unheard, or worse after starting treatment, speak up. It is important to communicate honestly with your provider about what is and is not working. If the relationship is not productive after giving it a fair chance, seeking a second opinion is always an option.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {FAQ_DATA.map((faq, i) => (
                <div key={i}>
                  <h3 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Tools */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { name: "PHQ-9 Depression Self-Check", description: "9-question validated depression screening tool", href: "/phq-9-depression-test" },
                { name: "GAD-7 Anxiety Self-Check", description: "7-question validated anxiety screening tool", href: "/gad-7-anxiety-test" },
                { name: "AUDIT Alcohol Screening", description: "10-item WHO alcohol use screening tool", href: "/audit-alcohol-test" },
                { name: "Daily Recovery Check-In", description: "Track mood, sleep, and cravings daily", href: "/daily-recovery-check-in" },
                { name: "Relapse Prevention Plan", description: "Build a personalized relapse prevention strategy", href: "/relapse-prevention-plan" },
                { name: "PHQ-9 Score Interpretation", description: "Understand what your PHQ-9 score means", href: "/phq-9-score-interpretation" },
              ].map((t) => (
                <Link key={t.name} href={t.href} className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                  <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">{t.name}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed">{t.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <AdSlot position="Footer" className="my-8" />

          {/* Crisis Resources */}
          <div className="card p-5 sm:p-6">
            <h2 className="font-serif text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Need support now?</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              If you are in crisis or need immediate help, these resources are available 24/7:
            </p>
            <div className="space-y-2.5">
              {[
                { label: "988 Suicide & Crisis Lifeline (US)", detail: "Call or text 988", color: "text-crisis-600 dark:text-crisis-400" },
                { label: "SAMHSA Helpline (US)", detail: "1-800-662-4357 — free referrals 24/7", color: "text-sage-600 dark:text-sage-400" },
                { label: "Crisis Text Line (US)", detail: "Text HOME to 741741", color: "text-warm-600 dark:text-warm-400" },
              ].map((r) => (
                <div key={r.label} className="p-3.5 rounded-xl border border-sand-200 dark:border-neutral-700 bg-sand-50 dark:bg-night-700">
                  <p className={`text-sm font-semibold ${r.color}`}>{r.label}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-0.5">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-sand-200 dark:border-neutral-700 pt-6 mt-10 text-center">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed mb-2">
            This guide is for educational purposes only. It is not medical advice or a substitute for professional care. The suggestions on this page are intended to help you prepare for a conversation with a healthcare provider — they are not clinical recommendations.
          </p>
          <ToolReviewerBio />
        </footer>
      </div>
    </>
  );
}

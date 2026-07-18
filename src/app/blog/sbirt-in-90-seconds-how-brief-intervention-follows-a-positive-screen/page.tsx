import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/sbirt-in-90-seconds-how-brief-intervention-follows-a-positive-screen`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "sbirt-in-90-seconds-how-brief-intervention-follows-a-positive-screen")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/sbirt-in-90-seconds-how-brief-intervention-follows-a-positive-screen",
  title: "SBIRT in 90 Seconds: How Brief Intervention Follows a Positive Screen",
  description: "SBIRT stands for Screening, Brief Intervention, and Referral to Treatment. After a positive screen for risky alcohol or drug use, a trained provider spends roughly 5 to 15 minutes discussing the results, offering feedback, and gauging the person's re",
  keywords: ["sbirt in 90 seconds: how brief intervention follows a positive screen"],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How do I interpret AUDIT or DAST-10 scores in an SBIRT workflow?",
    answer:
      "A: Most programs use tiered cutoffs. On the AUDIT, scores of 8 to 15 typically indicate moderate risk suited to brief intervention. Scores of 16 to 19 suggest brief intervention plus ongoing monitoring. Scores of 20 or higher usually warrant referral for full assessment. DAST-10 scores of 3 or higher generally flag the need for further evaluation. These cutoffs are guides, not fixed rules. Local protocols vary, so always follow your program's adopted thresholds.",
  },
  {
    question: "When should a positive screen lead straight to referral instead of brief intervention?",
    answer:
      "A: Refer immediately when the screen shows high-severity risk, signs of dependence, injection drug use, prior overdose, suicidal ideation, or co-occurring untreated mental health symptoms. Also refer if the person has already tried brief intervention without change or asks directly for treatment. Brief intervention fits low to moderate risk situations where motivational conversation and feedback might be enough. When in doubt, err toward referral. A licensed clinician can always step someone back down to a lighter level of care.",
  },
  {
    question: "What are the main limitations of SBIRT screening tools?",
    answer:
      "A: Screening tools measure risk indicators, not diagnoses. They rely on self-report, so results can be skewed by memory, honesty, or discomfort disclosing use. They also miss context like trauma history, medication interactions, or polysubstance patterns unless the interviewer probes further. A single score is a snapshot, not a full clinical picture. That is why SBIRT pairs screening with a conversation and, when scores are elevated, a referral to someone qualified to do a complete evaluation.",
  },
  {
    question: "Are these tools validated for all populations?",
    answer:
      "A: No. The AUDIT was originally validated in adult primary care populations and works well there, but performs less consistently in adolescents, older adults, and some cultural groups without adapted versions. DAST-10 has similar constraints. Pregnant patients, people with cognitive impairment, and non-native language speakers may need modified tools or extra clinical judgment. Always check whether the specific version you're using has validation data for the population in front of you before relying on the cutoff score alone.",
  },
  {
    question: "What is a common misuse pattern with SBIRT in practice?",
    answer:
      "A: A frequent error is treating a positive screen as a diagnosis and telling someone they \"have a substance use disorder\" based on the score alone. Another is skipping the brief intervention conversation entirely and jumping straight to a referral handout, which undermines the motivational, patient-centered purpose of SBIRT. Rushing the feedback step or using judgmental language also reduces effectiveness. The tool works best when screening, conversation, and referral each get their intended attention.",
  },
  {
    question: "Can brief intervention alone resolve a substance use problem?",
    answer:
      "A: Sometimes, especially for lower-risk use where a short conversation increases awareness and motivation to cut back. But brief intervention is not a substitute for treatment when risk is moderate to severe. It is designed as an early, low-intensity touchpoint. If follow-up screenings stay elevated, or the person reports continued or worsening use, that is a signal to move toward a referral for full assessment rather than repeating brief intervention indefinitely.",
  },
  {
    question: "Does a positive screen mean something is legally or medically wrong with me?",
    answer:
      "A: No. A positive screen only means your answers fell into a range where a trained provider should ask more questions. It is not a medical diagnosis, a legal record, or proof of a disorder. Screening tools are designed to catch possible risk early, and many people who screen positive do not meet criteria for a substance use disorder after full evaluation. If you have concerns about a screening result, talk to a licensed clinician for clarity.",
  },
];

export default function SbirtIn90SecondsHowBriefInterventionFollowsAPositiveScreenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "SBIRT in 90 Seconds: How Brief Intervention Follows a Positive Screen", description: "SBIRT stands for Screening, Brief Intervention, and Referral to Treatment. After a positive screen for risky alcohol or drug use, a trained provider spends roughly 5 to 15 minutes discussing the results, offering feedback, and gauging the person's re", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "SBIRT in 90 Seconds: How Brief Intervention Follows a Positive Screen", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">11 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            SBIRT in 90 Seconds: How Brief Intervention Follows a Positive Screen
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            SBIRT stands for Screening, Brief Intervention, and Referral to Treatment. After a positive screen for risky alcohol or drug use, a trained provider spends roughly 5 to 15 minutes discussing the results, offering feedback, and gauging the person&apos;s readiness to change. Higher-risk results lead to a referral for a full evaluation by a licensed clinician.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong>, Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong>, Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong>, <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This article is educational. Screening tools are starting points, not diagnoses. Only a licensed clinician can diagnose a substance use disorder. If a screen suggests risk, see a primary care physician, licensed therapist, or addiction medicine provider.
            </p>
          </div>

          <section>
            <h2>What Does SBIRT Actually Stand For?</h2>
            <p>
              <strong>SBIRT</strong> is a public health approach used in medical and behavioral health settings to catch risky substance use early. It has three parts: a quick screen, a short conversation called a brief intervention, and, when needed, a referral to treatment. SAMHSA developed and promotes this model as a tool for early identification, not diagnosis.
            </p>
            <p>
              The screening step usually takes two to five minutes. Tools like the AUDIT (Alcohol Use Disorders Identification Test, developed by the World Health Organization) or the DAST-10 (Drug Abuse Screening Test) place people in scored risk zones that range from low risk up to possible dependence (AUDIT) or severe risk (DAST-10). A positive score does not mean someone has a substance use disorder. It means the score is high enough that a trained person should follow up. That follow-up is the brief intervention, and it is where most of the actual &quot;90 seconds to a few minutes&quot; work happens in busy settings like primary care or emergency departments.
            </p>
          </section>

          <section>
            <h2>What Happens in the First 90 Seconds After a Positive Screen?</h2>
            <p>
              <strong>Answer capsule:</strong> The first moments after a positive screen focus on permission and feedback. The provider asks if they can share the results, states the score in plain terms, and connects it to health risks. This short opening sets the tone for the rest of the conversation and avoids triggering defensiveness.
            </p>
            <p>
              This opening follows a format many counselors call &quot;ask, share, ask.&quot; First, the provider asks permission: &quot;Would it be okay if I shared what your screening showed?&quot; This respects autonomy and lowers resistance. Second, the provider shares the score without judgment: &quot;Your answers put you in a range we associate with higher risk for health problems.&quot; Third, the provider asks an open question: &quot;What are your thoughts on that?&quot;
            </p>
            <p>
              This structure matters because SBIRT is rooted in motivational interviewing, a counseling style described by Miller and Rollnick that emphasizes collaboration over confrontation. A rushed lecture in the first 90 seconds tends to shut people down. A short, respectful opening keeps the door open for the next few minutes of conversation.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How Long Does a Full Brief Intervention Take?</h2>
            <p>
              <strong>Answer capsule:</strong> A full brief intervention typically runs 5 to 15 minutes, though some models compress it into as little as 3 to 5 minutes in fast-paced settings. The length depends on the setting, the risk level, and how much the person wants to engage. Longer conversations happen when risk is higher or motivation is mixed.
            </p>
            <p>
              SAMHSA&apos;s SBIRT framework describes this step as brief, structured feedback paired with advice. It is not therapy. It is a focused conversation that includes personalized feedback on the screening score, a clear but non-judgmental statement about health risk, and a discussion of options. Providers often use the FRAMES model here: Feedback, Responsibility (the choice is theirs), Advice, Menu of options, Empathy, and Self-efficacy (belief they can change). This model is widely cited in SBIRT training materials distributed through SAMHSA-funded programs.
            </p>
            <p>
              For someone in the moderate-risk range, the conversation might end with a simple plan, like cutting back on drinking days or trying a self-monitoring app. For someone in the high-risk range, the conversation shifts toward referral.
            </p>
          </section>

          <section>
            <h2>How Does a Counselor Decide Between Brief Advice and Referral?</h2>
            <p>
              <strong>Answer capsule:</strong> The decision rests mainly on the screening score and risk category, not on gut feeling alone. Low-risk scores usually call for brief education. Moderate scores call for brief intervention and follow-up. High-risk scores, or any signs of dependence, call for referral to a licensed clinician for a full diagnostic assessment.
            </p>
            <p>
              Screening tools are built with cut-off scores for this exact purpose. On the AUDIT, a score of 8 or higher out of 40 generally signals risky drinking, while scores of 20 or higher suggest possible alcohol dependence and a stronger need for referral, according to the WHO&apos;s AUDIT manual. These numbers are guides, not diagnoses. A validated screening tool can suggest that someone&apos;s drinking pattern carries risk, but only a licensed clinician can confirm whether that pattern meets criteria for a substance use disorder under DSM-5-TR.
            </p>
            <p>
              As a CADC-II, my role in this moment is to have the conversation, document the score, and make the referral. I do not diagnose. If a person&apos;s score, physical signs, or self-report suggest withdrawal risk, co-occurring mental health concerns, or possible dependence, the next stop is a licensed clinician, physician, or a program that can complete a full biopsychosocial assessment under something like the ASAM Criteria, 4th Edition, which providers use to match people to the right level of care.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What Does &quot;Referral to Treatment&quot; Actually Look Like?</h2>
            <p>
              <strong>Answer capsule:</strong> Referral means connecting the person to a specific next step, not just handing them a pamphlet. This might be a same-day warm handoff to a counselor, a scheduled intake appointment, or a call to a local treatment locator line. The goal is to remove barriers between the screen and the next real conversation.
            </p>
            <p>
              A strong referral has a name, a phone number, and, when possible, a specific appointment time attached to it. Research summarized in SAMHSA&apos;s SBIRT materials points to warm handoffs, meaning the patient meets the receiving counselor or program on the same visit, as more effective than a printed referral sheet alone. In practice, this might mean walking a patient down the hall to meet a behavioral health counselor embedded in a clinic, or dialing a treatment locator line together before the patient leaves.
            </p>
            <p>
              For higher acuity situations, referral may include medical evaluation for withdrawal risk or a conversation about medication options a prescriber may consider, such as naltrexone, acamprosate, disulfiram, buprenorphine, or methadone. These are decisions for a prescriber, not a brief intervention conversation, but naming them as real options helps reduce stigma and opens the door to the next step.
            </p>
          </section>

          <section>
            <h2>Does SBIRT Work for Every Substance, Not Just Alcohol?</h2>
            <p>
              <strong>Answer capsule:</strong> SBIRT was first built around alcohol screening but has since expanded to cover tobacco and other drugs, including opioids and stimulants. The core structure stays the same: screen, brief conversation, refer if needed. Different substances may call for different screening tools and slightly different risk thresholds.
            </p>
            <p>
              SAMHSA is the primary federal champion of the SBIRT model, and the National Institute on Drug Abuse (NIDA) and NIAAA (National Institute on Alcohol Abuse and Alcoholism) publish the screening tools most often used inside it for their respective focus areas. For drug use beyond alcohol, tools like the DAST-10 or the NIDA Quick Screen help identify risk levels. For opioids specifically, providers often layer in questions about withdrawal history and prior overdose, since these carry direct safety implications. In many programs, a positive screen for opioid misuse moves more quickly toward referral, reflecting the overdose risk documented in the CDC&apos;s ongoing overdose surveillance data.
            </p>
          </section>

          <section>
            <h2>What Should Someone Do If They Get a Positive Screen Themselves?</h2>
            <p>
              <strong>Answer capsule:</strong> A positive result on a self-administered screen, like one taken online or during a routine checkup, is a signal to talk with a doctor, counselor, or licensed treatment provider. It is not a diagnosis and not a reason for panic. It simply means the pattern of use is worth a closer, professional look.
            </p>
            <p>
              If you have taken a screening tool like the AUDIT or DAST-10 on a site like this one and scored in the moderate or high-risk range, the most useful next step is a conversation with a primary care provider or a licensed substance use counselor. Bring the score with you. Ask directly what it means and what a full assessment involves. A clinician can look at the whole picture, including physical health, mental health, and history, before offering any conclusions about diagnosis or treatment options.
            </p>
          </section>

          <section>
            <h2>Important: this isn&apos;t medical advice</h2>
            <p>
              This article is educational. Screening tools are starting points, not diagnoses. Only a licensed clinician can diagnose a substance use disorder, depression, or anxiety disorder. If a screen suggests risk, see a primary care physician, licensed therapist, or addiction medicine provider. CADC-II credentialed counselors like the author of this site work within scope of practice; we screen, refer, and provide counseling, not diagnose or prescribe.
            </p>
          </section>

          <section className="not-prose">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-3">Sources</h2>
            <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400 list-disc pl-5">
              <li>SAMHSA, SBIRT: Screening, Brief Intervention, and Referral to Treatment</li>
              <li>World Health Organization, AUDIT: The Alcohol Use Disorders Identification Test, Guidelines for Use in Primary Care</li>
              <li>Miller, W.R. and Rollnick, S., Motivational Interviewing</li>
              <li>American Society of Addiction Medicine, ASAM Criteria, 4th Edition</li>
              <li>National Institute on Drug Abuse (NIDA), Screening Tools and Resources</li>
              <li>National Institute on Alcohol Abuse and Alcoholism (NIAAA)</li>
              <li>Centers for Disease Control and Prevention (CDC), Drug Overdose Surveillance Data</li>
              <li>American Psychiatric Association, DSM-5-TR</li>
            </ul>
          </section>

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
        </div>
      </article>
    </>
  );
}

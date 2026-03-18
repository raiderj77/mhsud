import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/ace-score-meaning`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "ace-score-meaning")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/ace-score-meaning",
  title: "ACE Scores: What Childhood Experiences Mean for Health",
  description:
    "What your ACE score means, how adverse childhood experiences affect health, and why resilience matters more than the number. Evidence-based guide.",
  keywords: [
    "ACE score meaning", "adverse childhood experiences", "ACE questionnaire",
    "ACE score interpretation", "childhood trauma and health", "ACE study",
    "resilience and ACEs", "trauma-informed care", "ACE score health risks",
    "CDC Kaiser ACE study",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "What is a high ACE score?",
    answer: "An ACE score of 4 or higher is generally considered high and associated with significantly increased risk for heart disease, depression, substance use disorders, and suicide attempts. However, any score above 0 may indicate adversity worth exploring. The ACE score is a screening tool, not a diagnosis — it identifies potential risk, not certainty of outcome.",
  },
  {
    question: "Does a high ACE score mean I'll get sick?",
    answer: "No. A high ACE score indicates increased statistical risk but does not determine your individual health outcome. Many people with high scores lead healthy, fulfilling lives. Protective factors like supportive relationships, therapy, community connection, and healthy coping strategies significantly buffer the impact of adverse childhood experiences. Your score describes what happened to you, not what will happen.",
  },
  {
    question: "Can ACE impacts be reversed?",
    answer: "While you cannot change what happened in childhood, the effects of ACEs can be meaningfully addressed through evidence-based approaches. Trauma-focused therapy (EMDR, CPT, somatic experiencing), supportive relationships, mindfulness, physical activity, and community connection all help reduce long-term health impacts. The brain retains capacity for healing throughout life, a concept known as neuroplasticity.",
  },
  {
    question: "Should I take the ACE questionnaire?",
    answer: "The ACE questionnaire is a useful self-reflection tool for understanding how childhood experiences may affect your current health. It is a brief, 10-item screening that takes only a few minutes. If reflecting on childhood adversity feels distressing, consider completing it with a therapist. Your answers are processed entirely in your browser and are never stored or transmitted.",
  },
  {
    question: "What is trauma-informed care?",
    answer: "Trauma-informed care recognizes the widespread impact of trauma and integrates that understanding into policies and practices. Rather than asking 'What is wrong with you?' it asks 'What happened to you?' Core principles include safety, trustworthiness, peer support, collaboration, and empowerment. It does not require trauma disclosure — it creates environments where healing is supported regardless of history.",
  },
];

export default function ACEScoreMeaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "ACE Scores: What Your Childhood Experiences Mean for Your Health", description: "What your ACE score means, how adverse childhood experiences affect health, and why resilience matters more than the number.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "ACE Score Meaning", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            ACE Scores: What Your Childhood Experiences Mean for Your Health
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Adverse childhood experiences (ACEs) can shape long-term health outcomes — but they do not define your future. Here&apos;s what the research says, what your ACE score may indicate, and why resilience matters more than the number.
          </p>
          <div className="mt-6">
            <Link href="/ace-questionnaire" className="btn-primary text-sm">Take the ACE Self-Check &rarr;</Link>
          </div>
        </header>

        {/* Trauma / Content Warning */}
        <div className="card p-5 bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800 not-prose text-sm text-neutral-600 dark:text-neutral-400 mb-10">
          <p className="font-semibold text-rose-800 dark:text-rose-400 mb-2">Content Warning</p>
          <p>This article discusses childhood abuse, neglect, and household dysfunction. If you are currently in crisis or find this content distressing, please reach out for support. Call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), text <strong>HOME</strong> to <strong>741741</strong> (Crisis Text Line), or call SAMHSA&apos;s National Helpline at <strong>1-800-662-4357</strong> (free, confidential, 24/7). You can return to this article whenever you feel ready.</p>
        </div>

        <div className="prose-mh space-y-8">
          <section>
            <h2>What Are ACEs?</h2>
            <p>
              Adverse childhood experiences (ACEs) are potentially traumatic events that occur before the age of 18. The term comes from a landmark study conducted by the <a href="https://www.cdc.gov/aces/" target="_blank" rel="noopener noreferrer">Centers for Disease Control and Prevention (CDC)</a> and Kaiser Permanente in the late 1990s. That study identified 10 categories of childhood adversity that are associated with increased risk for a wide range of health problems later in life.
            </p>
            <p>
              The 10 ACE categories fall into three groups:
            </p>
            <p><strong>Abuse (3 categories):</strong></p>
            <ul>
              <li><strong>Physical abuse</strong> — being hit, beaten, kicked, or physically harmed by a parent or household adult</li>
              <li><strong>Emotional abuse</strong> — being regularly put down, sworn at, humiliated, or made to feel afraid of physical harm</li>
              <li><strong>Sexual abuse</strong> — any sexual contact or conduct with a household adult or person at least 5 years older</li>
            </ul>
            <p><strong>Neglect (2 categories):</strong></p>
            <ul>
              <li><strong>Physical neglect</strong> — not having enough to eat, having to wear dirty clothes, or lacking protection or adequate care</li>
              <li><strong>Emotional neglect</strong> — feeling unloved, unsupported, or that family members did not look out for each other</li>
            </ul>
            <p><strong>Household dysfunction (5 categories):</strong></p>
            <ul>
              <li><strong>Substance use in the household</strong> — living with someone who had a problem with alcohol or used substances</li>
              <li><strong>Mental health challenges in the household</strong> — living with someone who experienced depression, mental health conditions, or who attempted suicide</li>
              <li><strong>Witnessing domestic violence</strong> — seeing or hearing a mother or stepmother being physically harmed</li>
              <li><strong>Parental separation or divorce</strong> — parents separating or divorcing during childhood</li>
              <li><strong>Incarceration of a household member</strong> — a household member going to prison</li>
            </ul>
            <p>
              Each category counts as one point, regardless of how many times the experience occurred. The total number of categories experienced (0 to 10) is your ACE score.
            </p>
          </section>

          <section>
            <h2>The Original CDC-Kaiser ACE Study</h2>
            <p>
              The original ACE study, published in 1998 by Dr. Vincent Felitti and Dr. Robert Anda, surveyed more than 17,000 adults enrolled in a Kaiser Permanente health plan in San Diego. Participants completed questionnaires about childhood experiences and provided detailed medical histories.
            </p>
            <p>
              The findings were striking. Nearly two-thirds of participants reported at least one ACE, and more than one in five reported three or more. The study revealed a powerful dose-response relationship: as the number of ACE categories increased, so did the risk for a wide range of health and social problems. This relationship held even after controlling for factors like age, sex, race, and education.
            </p>
            <p>
              The study was groundbreaking because it connected childhood adversity — previously considered a social issue — directly to leading causes of death and disease in adults. It transformed how researchers and clinicians understand the relationship between early life experiences and long-term health.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>What Each ACE Category Covers</h2>
            <p>
              The ACE questionnaire asks about specific experiences that occurred during your first 18 years of life. Each question corresponds to one of the 10 categories listed above. The questions are designed to be straightforward and answerable with a yes or no response.
            </p>
            <p>
              It is important to understand what the ACE questionnaire does <em>not</em> capture. The original 10-item tool does not include experiences such as bullying, community violence, racism, poverty, foster care placement, or the death of a parent. Expanded ACE questionnaires exist that address some of these additional adversities, but the original 10 categories remain the most widely studied and validated.
            </p>
            <p>
              Your ACE score reflects the <em>breadth</em> of adversity — how many different types of experiences you had — not the severity, frequency, or duration of any single experience. Two people with the same ACE score may have had very different childhoods.
            </p>
          </section>

          <section>
            <h2>How ACE Scores Relate to Health Outcomes</h2>
            <p>
              The CDC-Kaiser study established a dose-response relationship between ACE scores and health outcomes. This means that as the number of ACE categories increases, the likelihood of experiencing certain health problems also increases — in a graded, step-by-step pattern.
            </p>
            <p>
              This relationship is not about any single ACE causing a specific disease. Instead, chronic childhood adversity can affect brain development, immune function, hormonal systems, and the way the body responds to stress over time. Prolonged activation of the stress response — sometimes called toxic stress — can alter biological systems in ways that increase vulnerability to both physical and mental health conditions decades later.
            </p>
            <p>
              However, increased risk is not the same as certainty. Many people with high ACE scores do not develop the associated health conditions, and many people with low or zero ACE scores do. ACE scores identify patterns across populations, not predictions for individuals.
            </p>
          </section>

          <section>
            <h2>Specific Health Risks by ACE Score</h2>
            <p>
              Research from the original study and subsequent investigations has identified the following associations for individuals with an ACE score of 4 or higher, compared to those with an ACE score of 0:
            </p>
            <div className="not-prose my-6 space-y-2">
              {[
                { risk: "Heart disease", detail: "Approximately 2x increased risk of ischemic heart disease" },
                { risk: "Depression", detail: "Approximately 4.6x increased risk of depressive episodes" },
                { risk: "Substance use", detail: "Approximately 4-12x increased risk of alcohol or drug use problems" },
                { risk: "Suicide attempts", detail: "Approximately 12x increased risk of attempted suicide" },
                { risk: "Smoking", detail: "Approximately 2.2x increased risk of current smoking" },
                { risk: "Chronic conditions", detail: "Increased risk of diabetes, cancer, stroke, COPD, and liver disease" },
              ].map((item) => (
                <div key={item.risk} className="flex items-start gap-3 p-3 card">
                  <span className="text-sm font-semibold text-sage-600 dark:text-sage-400 w-32 flex-shrink-0">{item.risk}</span>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.detail}</p>
                </div>
              ))}
            </div>
            <p>
              These statistics describe population-level trends. They do not predict what will happen to any specific person. Many factors — including genetics, environment, relationships, and access to support — influence whether increased risk translates into actual health outcomes.
            </p>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>ACE Scores Are NOT Destiny</h2>
            <p>
              This is the most important section of this article. <strong>Your ACE score is not a life sentence.</strong> It describes what happened to you as a child — it does not determine what will happen to you as an adult.
            </p>
            <p>
              The ACE study was designed to identify risk factors across large populations. It was never intended to predict individual outcomes. Many people with high ACE scores live long, healthy, connected lives. Resilience — the ability to adapt and recover from adversity — is real, measurable, and buildable at any age.
            </p>
            <p>
              Neuroscience research has shown that the brain retains significant capacity for change and healing throughout life, a property known as neuroplasticity. The effects of early adversity, while real, are not permanent or irreversible. With the right support and resources, people can and do recover.
            </p>
            <p>
              If you have a high ACE score, the appropriate response is not fear — it is awareness. Awareness creates the opportunity to seek support, build protective factors, and make informed choices about your health and well-being.
            </p>
          </section>

          <section>
            <h2>What Protects Against ACE Impact</h2>
            <p>
              Research has identified several protective factors that can buffer the impact of adverse childhood experiences. These factors can be developed and strengthened at any stage of life:
            </p>
            <ul>
              <li><strong>Supportive relationships</strong> — having at least one stable, caring adult during childhood is one of the most powerful protective factors. In adulthood, strong social connections continue to provide resilience</li>
              <li><strong>Community connection</strong> — belonging to a community — whether through faith, cultural groups, volunteer work, or neighborhood ties — provides meaning, identity, and mutual support</li>
              <li><strong>Therapy and counseling</strong> — evidence-based approaches such as trauma-focused cognitive behavioral therapy, EMDR, and somatic experiencing can help process and integrate adverse experiences</li>
              <li><strong>Healthy coping strategies</strong> — regular physical activity, mindfulness and meditation, creative expression, and adequate sleep all support nervous system regulation and stress recovery</li>
              <li><strong>Education and economic stability</strong> — access to education and stable employment provides resources and a sense of agency that supports well-being</li>
              <li><strong>Self-compassion</strong> — understanding that childhood adversity was not your fault, and treating yourself with the same kindness you would offer a friend, is a foundational step in healing</li>
            </ul>
          </section>

          <section>
            <h2>The Role of Trauma-Informed Care</h2>
            <p>
              Trauma-informed care is an approach that recognizes the widespread impact of trauma and integrates that understanding into every level of service delivery. Rather than asking &quot;What is wrong with you?&quot; it asks &quot;What happened to you?&quot;
            </p>
            <p>
              The core principles of trauma-informed care, as outlined by <a href="https://www.samhsa.gov/trauma-violence" target="_blank" rel="noopener noreferrer">SAMHSA</a>, include safety, trustworthiness and transparency, peer support, collaboration and mutuality, empowerment and choice, and cultural humility. These principles apply across healthcare settings, schools, workplaces, and social services.
            </p>
            <p>
              Trauma-informed care does not require you to disclose your history. It creates environments where people with adverse experiences are more likely to feel safe, respected, and supported — whether or not they share their story. If you are seeking professional help, looking for providers or organizations that practice trauma-informed care can make a meaningful difference in your experience.
            </p>
          </section>

          <section>
            <h2>Intergenerational Trauma</h2>
            <p>
              Research increasingly shows that the effects of adverse childhood experiences can be passed from one generation to the next. This is known as intergenerational or transgenerational trauma. It can occur through several pathways:
            </p>
            <ul>
              <li><strong>Behavioral patterns</strong> — parents who experienced adversity may, without support, repeat patterns of stress, conflict, or disconnection in their own families</li>
              <li><strong>Epigenetic changes</strong> — emerging research suggests that chronic stress can alter gene expression in ways that may be transmitted to offspring, potentially affecting stress response systems</li>
              <li><strong>Environmental factors</strong> — poverty, housing instability, and community violence often persist across generations, creating ongoing exposure to adversity</li>
            </ul>
            <p>
              The good news is that intergenerational transmission of trauma is not inevitable. When a person addresses their own adverse experiences — through therapy, supportive relationships, or community resources — they can interrupt the cycle and create a different environment for the next generation. Healing is not only personal; it is generational.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <section>
            <h2>Using the ACE Questionnaire Tool</h2>
            <p>
              The ACE questionnaire is a brief, 10-item self-report screening tool. Each question asks about a specific category of adverse experience that may have occurred before your 18th birthday. You answer yes or no to each question, and the total number of &quot;yes&quot; responses is your ACE score.
            </p>
            <p>
              The questionnaire takes only a few minutes to complete. On this site, your answers are processed entirely in your browser — nothing is stored, transmitted, or recorded. You can take the screening privately and use the results to inform a conversation with a healthcare professional if you choose.
            </p>
            <p>
              It is worth noting that the ACE questionnaire is a screening tool, not a clinical assessment. It may indicate areas that could benefit from further exploration with a qualified professional. A screening result is a starting point, not a conclusion.
            </p>
            <div className="mt-4">
              <Link href="/ace-questionnaire" className="text-sage-600 dark:text-sage-400 font-semibold text-sm hover:underline">Take the ACE Questionnaire &rarr;</Link>
            </div>
          </section>

          <section>
            <h2>What to Do With Your Score</h2>
            <p>
              If you have taken the ACE questionnaire, here are some constructive next steps — regardless of your score:
            </p>
            <ul>
              <li><strong>Practice self-compassion</strong> — whatever your score, acknowledge that childhood adversity was not your fault. Many people carry unnecessary shame about experiences that were beyond their control</li>
              <li><strong>Consider professional support</strong> — if your score is 4 or higher, or if reflecting on these experiences brings up significant distress, connecting with a trauma-informed therapist can be valuable. You do not need a crisis to benefit from professional support</li>
              <li><strong>Explore support groups</strong> — peer support from others with similar experiences can reduce isolation and provide practical strategies for healing. Many communities offer both in-person and online groups</li>
              <li><strong>Screen for related concerns</strong> — adverse childhood experiences are associated with increased risk for PTSD, depression, and substance use. Taking additional screening tools like the <Link href="/pcl-5-ptsd-screening">PCL-5 PTSD screening</Link> can provide a more complete picture of your current well-being</li>
              <li><strong>Build protective factors</strong> — invest in relationships, physical health, stress management, and community connection. These factors actively counteract the long-term effects of childhood adversity</li>
              <li><strong>Share with a provider</strong> — if you feel comfortable, sharing your ACE score with your healthcare provider can help them understand your health history more fully and offer appropriate support</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <div className="card p-5 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 not-prose text-sm text-neutral-600 dark:text-neutral-400">
            <p className="font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p>This article is for educational purposes only. It is not a diagnosis or treatment recommendation. The ACE questionnaire is a screening tool, not a diagnostic instrument. A screening result may indicate the presence of risk factors, but only a qualified healthcare professional can provide a clinical evaluation.</p>
            <p className="mt-2">If you or someone you know is struggling, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), text <strong>HOME</strong> to <strong>741741</strong> (Crisis Text Line), or call SAMHSA&apos;s National Helpline: <strong>1-800-662-4357</strong> (free, confidential, 24/7).</p>
          </div>

          {/* CTA */}
          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Ready to take the ACE questionnaire?</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, takes about 3 minutes. Your answers never leave your browser.</p>
            <Link href="/ace-questionnaire" className="btn-primary text-sm">Take the ACE Self-Check</Link>
          </div>

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
                <div className="px-4 pb-4"><p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </section>

          {/* Related Tools */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/ace-questionnaire" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">ACE Questionnaire</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">10-item adverse childhood experiences screening</p>
              </Link>
              <Link href="/pcl-5-ptsd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PCL-5 PTSD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">20-item validated PTSD symptom checklist</p>
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/ptsd-screening-guide" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">PTSD Screening Guide</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">When and why to get screened for PTSD</p>
              </Link>
              <Link href="/blog/dbt-skills-beginners" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">DBT Skills for Beginners</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Dialectical behavior therapy skills overview</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

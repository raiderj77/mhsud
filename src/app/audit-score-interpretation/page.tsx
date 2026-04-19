import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/audit-score-interpretation`;

const FAQ_DATA = [
  { question: "What does an AUDIT score of 8 mean?", answer: "An AUDIT score of 8 is the internationally recognized cutoff for hazardous alcohol use. It means your drinking patterns may be placing you at risk for alcohol-related harm, even if you have not yet experienced significant consequences. At this level, healthcare providers typically recommend brief intervention \u2014 a short, structured conversation about reducing drinking-related risks. A score of 8 does not mean you have alcohol use disorder, but it does suggest that your relationship with alcohol deserves closer attention." },
  { question: "What does an AUDIT score of 20 or higher mean?", answer: "A score of 20\u201340 on the AUDIT falls in the possible dependence range. This suggests a pattern of drinking that may involve physical or psychological reliance on alcohol, loss of control over consumption, and continued use despite negative consequences. At this level, a comprehensive professional evaluation is strongly recommended. Effective treatment options exist, including counseling, medication-assisted approaches, and peer support programs. Contact SAMHSA at 1-800-662-4357 for free, confidential guidance." },
  { question: "Is an AUDIT score of 7 considered safe?", answer: "An AUDIT score of 0\u20137 falls in the low-risk range, suggesting that your current drinking patterns are unlikely to cause alcohol-related harm based on the screening criteria. However, \u201clow risk\u201d does not mean \u201cno risk.\u201d The AUDIT measures patterns over the past year, and individual risk depends on factors like medications, health conditions, family history, and context (such as driving). If you have concerns about your drinking, discussing them with a provider is always appropriate regardless of your score." },
  { question: "How is the AUDIT different from the CAGE questionnaire?", answer: "The AUDIT is a 10-item tool developed by the World Health Organization that covers three domains: consumption patterns, drinking behaviors, and alcohol-related consequences. The CAGE is a much shorter 4-item tool focused primarily on dependence indicators. The AUDIT is generally considered more comprehensive and better at identifying hazardous and harmful drinking before dependence develops, while the CAGE is better at detecting more severe alcohol problems. Many clinicians prefer the AUDIT for its broader sensitivity." },
  { question: "Can medications or health conditions affect my AUDIT score?", answer: "The AUDIT asks about actual drinking behavior and consequences, so medications do not directly change your answers. However, certain medications (such as some pain relievers, sedatives, or antibiotics) can intensify the effects of alcohol, meaning that even moderate drinking could produce consequences that elevate your score. Health conditions like liver disease, diabetes, or mental health conditions can also mean that lower levels of drinking carry higher risk than the AUDIT alone might suggest." },
  { question: "What does an AUDIT score of 16 mean?", answer: "An AUDIT score of 16\u201319 falls in the harmful drinking range. This suggests that alcohol is actively causing physical, psychological, or social harm in your life. People in this range frequently report relationship problems, missed responsibilities, blackouts, or health issues connected to drinking. Brief intervention alone may not be sufficient at this level \u2014 healthcare providers often recommend more structured counseling or treatment. Speaking with a professional about your options is a proactive step." },
  { question: "How often should I retake the AUDIT alcohol screening?", answer: "The AUDIT measures drinking patterns over the past 12 months, so retaking it more frequently than every 3\u20136 months may not show meaningful change. If you have recently made changes to your drinking habits, waiting at least 3 months before retaking allows enough time for new patterns to establish. Clinicians sometimes use the shorter AUDIT-C (first 3 questions only) for more frequent check-ins between full screenings." },
  { question: "Does a high AUDIT score mean I am an alcoholic?", answer: "The AUDIT does not assign labels like \u201calcoholic.\u201d It is a screening tool that measures the risk level associated with your drinking patterns across a spectrum from low risk to possible dependence. A high score indicates that your drinking patterns carry elevated risk and that professional evaluation would be beneficial. Many people with elevated AUDIT scores benefit from brief interventions or moderate changes without needing intensive treatment. Only a comprehensive clinical assessment can determine whether someone meets criteria for alcohol use disorder." },
];

export const metadata: Metadata = createMetadata({
  path: "/audit-score-interpretation",
  title: "AUDIT Score Interpretation: What Your Score Means",
  description:
    "Understand your AUDIT alcohol screening score. Learn what each risk level means, when to seek help, and how to discuss your results with a healthcare provider.",
});

export default function AUDITScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "AUDIT Score Interpretation: What Your Results Mean",
              description: "Understand your AUDIT alcohol screening score. Learn what each risk level means, when to seek help, and how to discuss your results with a healthcare provider.",
              url: TOOL_URL,
              datePublished: "2025-06-01",
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
              { name: "AUDIT Self-Check", url: `${SITE_URL}/audit-alcohol-test` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guide explaining AUDIT alcohol screening scores, risk zones, and recommended interventions for each level."
          who="Anyone who has completed the AUDIT and wants to understand what their score means clinically."
          bottomLine="Your AUDIT score maps to specific WHO-recommended intervention levels. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>


      <ScoreInterpretationLayout
        testName="AUDIT"
        testAbbreviation="AUDIT"
        toolPageHref="/audit-alcohol-test"
        blogGuideHref="/blog/audit-guide"
        lastUpdated="March 14, 2026"
        intro={[
          "The AUDIT (Alcohol Use Disorders Identification Test) is a 10-item screening instrument developed by the World Health Organization (WHO) to identify individuals whose alcohol consumption may be putting their health at risk. It is one of the most widely used and validated alcohol screening tools globally, designed to detect hazardous and harmful drinking patterns before they progress to severe dependence.",
          "The AUDIT covers three domains: alcohol consumption (questions 1\u20133), drinking behavior and dependence indicators (questions 4\u20136), and alcohol-related consequences (questions 7\u201310). Scores range from 0 to 40, with higher scores indicating greater risk. Unlike many screening tools, the AUDIT was specifically designed for cross-cultural use and has been validated in primary care, emergency departments, and community settings across dozens of countries.",
        ]}
        scoreRanges={[
          { range: "0\u20137", label: "Low Risk", meaning: "Current drinking patterns are unlikely to cause alcohol-related harm", nextStep: "Continue monitoring; no clinical intervention typically recommended", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "8\u201315", label: "Hazardous", meaning: "Drinking patterns that increase the risk of harm to yourself or others", nextStep: "Brief intervention recommended \u2014 a structured conversation about reducing risk", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "16\u201319", label: "Harmful", meaning: "Alcohol is actively causing physical, psychological, or social harm", nextStep: "Brief intervention plus continued monitoring; consider more structured support", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
          { range: "20\u201340", label: "Possible Dependence", meaning: "Patterns consistent with alcohol dependence requiring professional evaluation", nextStep: "Comprehensive professional evaluation is strongly recommended; effective help is available", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
        ]}
        cannotTellYou={[
          "The AUDIT is a screening tool \u2014 not a clinical assessment. It identifies risk levels based on self-reported drinking patterns, but it cannot account for your full medical history, genetic predisposition, medication interactions, or the personal context surrounding your alcohol use. A screening score is the beginning of a conversation, not a conclusion.",
          "Alcohol risk is also highly individual. Two people with identical AUDIT scores may face very different levels of actual risk based on their weight, liver health, mental health, family history, and whether they take medications that interact with alcohol. The AUDIT provides a useful framework for reflection, but a healthcare provider can help you interpret your results in the context of your unique situation.",
        ]}
        scoreBands={[
          {
            heading: "AUDIT Score 0\u20137: Low Risk",
            paragraphs: [
              "A score of 0\u20137 suggests that your current alcohol consumption patterns fall within the low-risk range as defined by WHO guidelines. People in this range are typically drinking within recommended limits and have not experienced significant alcohol-related consequences over the past year. A score of 0 indicates abstinence from alcohol.",
              "If you scored in this range and feel comfortable with your relationship with alcohol, no specific action is needed. Continue to be mindful of situations where drinking might increase \u2014 social pressure, stress, life transitions \u2014 and be aware that recommended limits may be lower than many people assume. The National Institute on Alcohol Abuse and Alcoholism defines low-risk drinking as no more than 4 drinks on any single day and no more than 14 per week for men, or 3 drinks per day and 7 per week for women.",
            ],
          },
          {
            heading: "AUDIT Score 8\u201315: Hazardous Drinking",
            paragraphs: [
              "A score of 8\u201315 falls in the hazardous range, meaning your drinking patterns carry an increased risk of harm even if you have not yet experienced major consequences. Hazardous drinking includes patterns like binge drinking (consuming 6 or more standard drinks on one occasion), drinking more than intended, or drinking frequently enough that tolerance has increased over time.",
              "The WHO recommends brief intervention for people in this range \u2014 a short, evidence-based conversation with a healthcare provider about your drinking patterns and their potential risks. Research consistently shows that brief interventions of even 5\u201315 minutes can lead to meaningful reductions in alcohol consumption. You might also consider tracking your drinks for a few weeks to build awareness of your actual patterns versus your perception of them.",
            ],
          },
          {
            heading: "AUDIT Score 16\u201319: Harmful Drinking",
            paragraphs: [
              "A score of 16\u201319 indicates harmful drinking \u2014 a pattern in which alcohol is actively causing damage to your physical health, mental well-being, relationships, or ability to meet responsibilities. People in this range often report memory blackouts, injuries while drinking, failed attempts to cut down, guilt or remorse about drinking, or others expressing concern about their alcohol use.",
              "At this level, brief intervention alone may not be sufficient. Healthcare providers often recommend more structured support, which can include regular counseling sessions, participation in a support group, or referral to a substance use treatment program. If you scored in this range, speaking with a healthcare provider about your options is a proactive step that can prevent further harm. You can also contact SAMHSA at 1-800-662-4357 for free, confidential treatment referrals.",
            ],
          },
          {
            heading: "AUDIT Score 20\u201340: Possible Dependence",
            paragraphs: [
              "A score of 20\u201340 suggests patterns consistent with alcohol dependence \u2014 a condition characterized by impaired control over drinking, preoccupation with alcohol, continued use despite harmful consequences, and in some cases physical tolerance and withdrawal symptoms. This is the highest risk category on the AUDIT and warrants professional evaluation.",
              "If you scored in this range, please know that alcohol dependence is a well-understood medical condition with effective treatments. Options include behavioral therapies (such as cognitive behavioral therapy and motivational interviewing), medication-assisted treatment (naltrexone, acamprosate, disulfiram), and peer support programs. Attempting to stop drinking abruptly after prolonged heavy use can be medically dangerous \u2014 a healthcare provider can help you develop a safe plan. Contact SAMHSA at 1-800-662-4357 or the 988 Suicide & Crisis Lifeline if you need immediate support.",
            ],
          },
        ]}
        factorsAffecting={[
          "Honesty and recall accuracy \u2014 underreporting drinking is common and can lower your score below your actual risk level",
          "Definition of a \u201cstandard drink\u201d \u2014 many people underestimate drink sizes; a standard drink is 12 oz beer, 5 oz wine, or 1.5 oz spirits",
          "Cultural norms \u2014 drinking that is socially accepted in your community may still carry medical risk",
          "Biological sex and body weight \u2014 alcohol affects people differently based on body composition and enzyme levels",
          "Medications \u2014 many common medications (pain relievers, antidepressants, sedatives) interact dangerously with alcohol",
          "Mental health \u2014 anxiety, depression, trauma, and other conditions often co-occur with problematic drinking",
          "Time frame interpretation \u2014 the AUDIT asks about the past year, and people may anchor on recent weeks rather than the full 12 months",
        ]}
        doctorConversation={[
          "Bringing your AUDIT score to a healthcare appointment can make it easier to start a conversation about alcohol \u2014 a topic that many people find uncomfortable to raise on their own. Many providers routinely screen for alcohol use, so presenting your results proactively shows self-awareness and can lead to a more productive discussion.",
          "You might say: \u201cI took an alcohol screening called the AUDIT and scored [your score]. I wanted to understand what that means and whether there is anything I should be thinking about regarding my drinking patterns.\u201d",
          "Your provider can help put your score in context by considering your medical history, current medications, family history, and overall health. If your score suggests hazardous or harmful drinking, your provider can discuss practical strategies for reducing risk \u2014 from simple behavioral changes to more structured support. Remember that healthcare providers are trained to discuss these topics without judgment.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the AUDIT", description: "Free, private 10-question alcohol use self-check", href: "/audit-alcohol-test" },
          { name: "DAST-10 Drug Screening", description: "10-question validated drug use screening tool", href: "/dast-10-drug-screening" },
          { name: "CAGE-AID Substance Screening", description: "Quick 4-question substance use screening", href: "/cage-aid-substance-test" },
        ]}
        sources={[
          { text: "Saunders, J. B., Aasland, O. G., Babor, T. F., De La Fuente, J. R., & Grant, M. (1993). Development of the AUDIT: WHO collaborative project on early detection of persons with harmful alcohol consumption. Addiction, 88(6), 791\u2013804.", url: "https://pubmed.ncbi.nlm.nih.gov/8329970/" },
          { text: "Reinert, D. F., & Allen, J. P. (2007). The Alcohol Use Disorders Identification Test: an update of research findings. Alcohol Clin Exp Res, 31(2), 185\u2013199.", url: "https://pubmed.ncbi.nlm.nih.gov/17250609/" },
          { text: "World Health Organization \u2014 AUDIT: The Alcohol Use Disorders Identification Test (Guidelines for Use in Primary Care)", url: "https://www.who.int/publications/i/item/WHO-MSD-MSB-01.6a" },
          { text: "National Institute on Alcohol Abuse and Alcoholism \u2014 Drinking levels defined", url: "https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/moderate-binge-drinking" },
        ]}
      />
    </>
  );
}

import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/dast-10-score-interpretation`;

const FAQ_DATA = [
  { question: "What does a DAST-10 score of 3 mean?", answer: "A DAST-10 score of 3 falls in the moderate range (3\u20135), suggesting a moderate level of problems related to drug use over the past 12 months. At this level, you may be experiencing some negative consequences from drug use \u2014 whether social, occupational, or health-related \u2014 that are beginning to form a pattern. This score typically prompts a recommendation for further evaluation or brief counseling to explore your drug use patterns in more depth." },
  { question: "What does a DAST-10 score of 1 mean?", answer: "A DAST-10 score of 1\u20132 falls in the low-level range, indicating that while you endorsed one or two items related to drug use, the overall pattern suggests a relatively low level of drug-related problems. This might mean occasional use without major consequences, or a single episode that prompted a \u201cyes\u201d answer. Monitoring is typically recommended, along with brief education about risks. If you have concerns, speaking with a healthcare provider is always appropriate." },
  { question: "Does a DAST-10 score of 0 mean I have no drug problems?", answer: "A DAST-10 score of 0 means you answered \u201cno\u201d to all 10 items, indicating no reported drug-related problems over the past 12 months. For most people, this accurately reflects an absence of problematic drug use. However, the DAST-10 relies on honest self-reporting, and some people may minimize their drug use or not recognize certain patterns as problematic. If you have concerns about your substance use despite a score of 0, discussing them with a provider is still worthwhile." },
  { question: "What drugs does the DAST-10 screen for?", answer: "The DAST-10 asks about \u201cdrug use\u201d broadly, covering any non-medical use of prescription medications, over-the-counter drugs used in excess, and illicit substances. This includes cannabis, cocaine, stimulants (methamphetamine, unprescribed Adderall), opioids (heroin, fentanyl, misused prescription painkillers), sedatives (benzodiazepines, barbiturates), hallucinogens, inhalants, and others. The DAST-10 does not screen for alcohol use \u2014 the AUDIT is the companion tool for that." },
  { question: "How accurate is the DAST-10 as a drug screening tool?", answer: "The DAST-10 has strong psychometric properties. Research shows good internal consistency (Cronbach\u2019s alpha of 0.86) and strong concurrent validity with more comprehensive substance use assessments. It has a sensitivity of approximately 95% and specificity of 68% for identifying drug use disorders at a cutoff of 3. Like all screening tools, it is designed to cast a wide net \u2014 some people with elevated scores may not have a substance use disorder, and professional evaluation provides the definitive picture." },
  { question: "Can prescription medications affect my DAST-10 score?", answer: "The DAST-10 specifically asks about drug use \u201cother than for medical purposes.\u201d If you are taking medications exactly as prescribed by your doctor, those should not count toward your score. However, if you are taking more than prescribed, using someone else\u2019s prescription, or combining medications in ways not directed by your provider, those behaviors would be captured by the screening. If you are unsure whether your medication use counts, erring on the side of honesty gives the most accurate result." },
  { question: "What does a DAST-10 score of 6 or higher mean?", answer: "A DAST-10 score of 6\u20138 indicates a substantial level of drug-related problems, while a score of 9\u201310 indicates a severe level. At these levels, drug use is likely causing significant harm across multiple areas of your life \u2014 health, relationships, finances, employment, or legal standing. Intensive assessment and structured treatment are strongly recommended. Effective treatment options include behavioral therapies, medication-assisted treatment for certain substances, and peer support programs. Contact SAMHSA at 1-800-662-4357 for free, confidential help." },
  { question: "How often should I retake the DAST-10?", answer: "The DAST-10 asks about drug use over the past 12 months, so retaking it more frequently than every 3\u20136 months is unlikely to show meaningful change. If you have recently made changes to your substance use patterns, waiting at least 3 months allows enough time for new behaviors to be reflected in your answers. Clinicians may use the DAST-10 at intake and then at regular intervals to track treatment progress." },
];

export const metadata: Metadata = createMetadata({
  path: "/dast-10-score-interpretation",
  title: "DAST-10 Score Interpretation: What Your Score Means",
  description:
    "Understand your DAST-10 drug screening score. Learn what each level means, which substances are covered, and when to seek professional support.",
});

export default function DAST10ScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "DAST-10 Score Interpretation: What Your Results Mean",
              description: "Understand your DAST-10 drug screening score. Learn what each level means, which substances are covered, and when to seek professional support.",
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
              { name: "DAST-10 Self-Check", url: `${SITE_URL}/dast-10-drug-screening` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guide explaining DAST-10 drug screening scores, severity levels, and recommended intervention intensity for each range."
          who="Anyone who has completed the DAST-10 and wants to understand what their score indicates clinically."
          bottomLine="Your DAST-10 score maps to a recommended intervention level from brief counseling to intensive treatment. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>


      <ScoreInterpretationLayout
        testName="DAST-10"
        testAbbreviation="DAST-10"
        toolPageHref="/dast-10-drug-screening"
        blogGuideHref="/blog/dast-10-guide"
        lastUpdated="March 7, 2026"
        intro={[
          "The DAST-10 (Drug Abuse Screening Test \u2014 10-item version) is a brief, validated screening instrument developed by Dr. Harvey Skinner at the Centre for Addiction and Mental Health in Toronto. It is a shortened version of the original 28-item DAST, designed to quickly identify individuals who may be experiencing problems related to drug use. The DAST-10 is widely used in primary care, emergency departments, substance use treatment programs, and community health settings.",
          "The screening consists of 10 yes/no questions about drug use over the past 12 months, producing a total score between 0 and 10. \u201cDrug use\u201d refers to any non-medical use of prescription medications, over-the-counter drugs used beyond recommended doses, and illicit substances. Alcohol is excluded from this screening \u2014 the AUDIT is the companion tool for alcohol use. Your score maps to five severity levels that guide recommended next steps.",
        ]}
        scoreRanges={[
          { range: "0", label: "No Problems Reported", meaning: "No drug-related problems identified based on your responses", nextStep: "No clinical action needed; continue to be mindful of substance use", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "1\u20132", label: "Low Level", meaning: "Minor or isolated drug-related concerns over the past year", nextStep: "Monitor your patterns; consider brief education about substance use risks", colorClass: "bg-sage-50/30 dark:bg-sage-950/10", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "3\u20135", label: "Moderate", meaning: "A pattern of drug-related problems that may be affecting your well-being", nextStep: "Further evaluation recommended; consider speaking with a healthcare provider or counselor", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "6\u20138", label: "Substantial", meaning: "Significant drug-related problems affecting multiple areas of your life", nextStep: "Intensive assessment strongly recommended; structured treatment options are available", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
          { range: "9\u201310", label: "Severe", meaning: "Severe drug-related problems requiring immediate professional attention", nextStep: "Please reach out for professional support as soon as possible; you deserve help", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
        ]}
        cannotTellYou={[
          "The DAST-10 is a screening tool \u2014 not a clinical assessment. It identifies the level of drug-related problems you report, but it cannot determine whether you meet criteria for a substance use disorder. That determination requires a comprehensive professional evaluation that considers your history, patterns of use, physical health, mental health, social functioning, and motivation for change.",
          "The DAST-10 also cannot distinguish between different substances or account for the complexity of polysubstance use. Someone who uses cannabis occasionally and someone who misuses prescription opioids daily might score similarly if their pattern of consequences is comparable. The context behind each \u201cyes\u201d answer matters enormously, and that context is something a screening tool alone cannot capture.",
        ]}
        scoreBands={[
          {
            heading: "DAST-10 Score 0: No Drug-Related Problems Reported",
            paragraphs: [
              "A DAST-10 score of 0 means you answered \u201cno\u201d to all 10 questions, indicating that you did not report any drug-related problems over the past 12 months. This is the most common score among the general population and suggests that drug use is not currently a concern for you.",
              "No further action is needed. If your circumstances change in the future \u2014 for instance, if you begin taking a new medication with misuse potential, or if life stressors lead to new substance use patterns \u2014 retaking the DAST-10 can help you check in with yourself objectively.",
            ],
          },
          {
            heading: "DAST-10 Score 1\u20132: Low-Level Problems",
            paragraphs: [
              "A score of 1\u20132 indicates a low level of drug-related problems. You may have endorsed items related to occasional use that has caused minor consequences, or you may have recognized emerging patterns that prompted a \u201cyes\u201d answer on one or two questions. At this level, most people have not experienced major life disruptions from drug use, but the screening has flagged an area worth monitoring.",
              "Brief education about substance use risks is typically recommended at this level. This might include learning about the specific risks of the substance you use, understanding how tolerance develops, and recognizing early warning signs that use is escalating. If you have any concerns about your drug use, even at this low level, speaking with a healthcare provider can provide clarity and reassurance.",
            ],
          },
          {
            heading: "DAST-10 Score 3\u20135: Moderate Problems",
            paragraphs: [
              "A score of 3\u20135 indicates a moderate level of drug-related problems. At this level, drug use has likely produced a noticeable pattern of negative consequences \u2014 whether health-related (withdrawal symptoms, medical issues), social (relationship strain, conflict with family), occupational (missed work, reduced performance), or psychological (guilt, inability to stop using, using to cope with emotional distress).",
              "Further evaluation by a healthcare provider or substance use counselor is the standard recommendation at this level. This does not necessarily mean you need intensive treatment \u2014 for many people in the moderate range, brief interventions such as motivational interviewing, cognitive behavioral strategies, or structured self-help programs can be highly effective. The key is getting an accurate picture of your situation from a professional who can tailor recommendations to your needs.",
            ],
          },
          {
            heading: "DAST-10 Score 6\u20138: Substantial Problems",
            paragraphs: [
              "A score of 6\u20138 indicates substantial drug-related problems affecting multiple domains of your life. People in this range typically report several concurrent consequences of drug use: loss of control over how much or how often they use, failure to meet responsibilities, relationship breakdown, health problems, financial strain, or legal issues. Drug use has likely moved from a choice to a compulsion.",
              "Intensive assessment and structured treatment are strongly recommended at this level. Treatment options include outpatient counseling, intensive outpatient programs (IOP), residential treatment, medication-assisted treatment (for opioid or alcohol use disorders), and peer support programs. Many people at this level benefit from a combination of approaches. Contact SAMHSA at 1-800-662-4357 for free, confidential treatment referrals available 24/7.",
            ],
          },
          {
            heading: "DAST-10 Score 9\u201310: Severe Problems",
            paragraphs: [
              "A score of 9\u201310 indicates severe drug-related problems that are pervasive and acutely harmful. People in this range have endorsed nearly every indicator of problematic drug use, suggesting that substance use has become a central organizing factor in their lives, often at the expense of health, safety, relationships, and fundamental well-being.",
              "If you scored in this range, please reach out for help as soon as possible. Substance use disorders at this severity level are medical conditions, not moral failings, and they respond to evidence-based treatment. Depending on the substances involved, medically supervised detoxification may be an important first step. Contact SAMHSA at 1-800-662-4357 for immediate, free, confidential guidance. If you are in crisis, the 988 Suicide & Crisis Lifeline (call or text 988) is available 24/7.",
            ],
          },
        ]}
        factorsAffecting={[
          "Honesty and self-awareness \u2014 minimizing or not recognizing problematic patterns is common and can lower your score below your actual risk level",
          "Definition of \u201cdrug use\u201d \u2014 some people do not realize that misusing prescription medications or using over-the-counter drugs in excess counts as drug use",
          "Recency bias \u2014 the DAST-10 asks about the past 12 months, but people often anchor on the most recent weeks rather than the full year",
          "Polysubstance use \u2014 using multiple substances may produce consequences that are harder to attribute to any single drug",
          "Mental health conditions \u2014 anxiety, depression, PTSD, and other conditions often co-occur with substance use and can influence both use patterns and responses",
          "Social desirability \u2014 even in a private, anonymous online screening, some people answer in ways that present themselves more favorably",
          "Cultural context \u2014 what constitutes \u201cproblematic\u201d drug use varies across communities, which can affect how you interpret questions",
        ]}
        doctorConversation={[
          "Discussing drug use with a healthcare provider can feel uncomfortable, but providers are trained to approach substance use conversations without judgment. Bringing your DAST-10 score gives you a concrete, neutral starting point that takes some of the pressure off of having to explain your situation from scratch.",
          "You might say: \u201cI completed a drug use screening called the DAST-10 and scored [your score]. I have some concerns about [describe your main concern \u2014 e.g., how often I\u2019m using, the consequences I\u2019m seeing, whether my medication use has become problematic]. I would like to understand what my score means and what options might be available.\u201d",
          "Your provider can help by conducting a more thorough assessment, screening for co-occurring mental health conditions (which is very common with substance use), checking for physical health effects, and discussing treatment options that fit your readiness and circumstances. Everything you share with your provider is protected by confidentiality laws, including 42 CFR Part 2, which provides additional privacy protections specifically for substance use treatment records.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the DAST-10", description: "Free, private 10-question drug use self-check", href: "/dast-10-drug-screening" },
          { name: "AUDIT Alcohol Screening", description: "10-question validated alcohol use screening tool", href: "/audit-alcohol-test" },
          { name: "CAGE-AID Substance Screening", description: "Quick 4-question substance use screening", href: "/cage-aid-substance-test" },
        ]}
        sources={[
          { text: "Skinner, H. A. (1982). The Drug Abuse Screening Test. Addictive Behaviors, 7(4), 363\u2013371.", url: "https://pubmed.ncbi.nlm.nih.gov/7183189/" },
          { text: "Yudko, E., Lozhkina, O., & Fouts, A. (2007). A comprehensive review of the psychometric properties of the DAST. J Subst Abuse Treat, 32(2), 189\u2013198.", url: "https://pubmed.ncbi.nlm.nih.gov/17306727/" },
          { text: "SAMHSA \u2014 Substance Abuse and Mental Health Services Administration", url: "https://www.samhsa.gov/" },
          { text: "National Institute on Drug Abuse \u2014 Screening and assessment tools chart", url: "https://nida.nih.gov/nidamed-medical-health-professionals/screening-tools-resources/chart-screening-tools" },
        ]}
      />
    </>
  );
}

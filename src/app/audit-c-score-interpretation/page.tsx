import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/audit-c-score-interpretation`;

const FAQ_DATA = [
  { question: "What does an AUDIT-C score of 4 mean?", answer: "An AUDIT-C score of 4 is considered a positive screen for unhealthy alcohol use in men (the threshold is 3 for women). This does not mean you have an alcohol use disorder \u2014 it means your drinking pattern may carry health risks that are worth discussing with a healthcare provider. Many people who screen positive on the AUDIT-C are drinking at levels that could be reduced with brief intervention or a simple conversation with their doctor." },
  { question: "Why are AUDIT-C thresholds different for men and women?", answer: "Biological differences in how men and women metabolize alcohol account for the different thresholds. Women generally have lower body water content and produce less of the enzyme alcohol dehydrogenase, which means the same amount of alcohol produces higher blood alcohol concentrations and greater organ exposure in women. Research has established that a cutoff of 3 for women and 4 for men provides the best balance of sensitivity and specificity for identifying unhealthy drinking patterns." },
  { question: "What is the difference between the AUDIT-C and the full AUDIT?", answer: "The AUDIT-C consists of the first three questions of the full 10-question AUDIT (Alcohol Use Disorders Identification Test) developed by the World Health Organization. It focuses specifically on consumption patterns: how often you drink, how many drinks on a typical occasion, and how often you have six or more drinks. The full AUDIT adds seven questions about dependence symptoms and alcohol-related harm. The AUDIT-C is widely used as a brief initial screen, with the full AUDIT recommended for more detailed assessment." },
  { question: "Can I have a normal AUDIT-C score and still drink too much?", answer: "Yes. The AUDIT-C is a screening tool with known limitations. It may not capture binge drinking episodes that happen infrequently, drinking patterns that have recently changed, or the use of alcohol alongside medications or substances that interact with it. If you have concerns about your relationship with alcohol, those concerns are valid regardless of your screening score. Speaking with a healthcare provider can provide more personalized guidance." },
  { question: "Does a positive AUDIT-C screen mean I am an alcoholic?", answer: "No. A positive AUDIT-C screen indicates that your drinking pattern may carry health risks \u2014 it is not a label or a determination of any condition. Many people who screen positive are engaging in hazardous or harmful drinking that falls short of a clinical alcohol use disorder. The AUDIT-C identifies a spectrum of risk, and the appropriate next step varies widely. For some, a brief conversation about drinking goals is sufficient. For others, further evaluation may be recommended." },
  { question: "What is considered one standard drink?", answer: "In the United States, one standard drink contains approximately 14 grams (0.6 ounces) of pure alcohol. This is roughly equivalent to: 12 ounces of regular beer (5% alcohol), 5 ounces of wine (12% alcohol), or 1.5 ounces of distilled spirits (40% alcohol). Craft beers, large pours of wine, and mixed cocktails often contain more than one standard drink, which means people frequently underestimate their consumption without realizing it." },
  { question: "How is the AUDIT-C used in healthcare settings?", answer: "The AUDIT-C is one of the most widely used alcohol screening tools in primary care, emergency departments, and military healthcare systems. It is typically administered as part of routine health screenings. When a patient screens positive, providers may conduct a brief intervention \u2014 a short, evidence-based conversation about drinking patterns and goals \u2014 or recommend a full AUDIT assessment. Research shows that screening and brief intervention (SBI) can reduce alcohol consumption by 13\u201334% in people who drink at hazardous levels." },
  { question: "What does an AUDIT-C score of 0 mean?", answer: "An AUDIT-C score of 0 indicates that you reported no alcohol consumption. This could mean you abstain from alcohol entirely, or that you have not consumed alcohol during the time period referenced by the questions. A score of 0 requires no follow-up related to alcohol use." },
];

export const metadata: Metadata = createMetadata({
  path: "/audit-c-score-interpretation",
  title: "AUDIT-C Score Interpretation: What It Means",
  description:
    "Understand your AUDIT-C alcohol screening score. Learn what positive and negative screens mean, gender-specific thresholds, and when to talk to a provider.",
});

export default function AUDITCScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "AUDIT-C Score Interpretation: What Your Results Mean",
              description: "Understand your AUDIT-C alcohol screening score. Learn what positive and negative screens mean, gender-specific thresholds, and when to talk to a provider.",
              url: TOOL_URL,
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
              { name: "AUDIT-C Alcohol Screen", url: `${SITE_URL}/audit-c-alcohol-screen` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guide explaining AUDIT-C scores, gender-specific thresholds, and what positive and negative results mean."
          who="Anyone who has completed the AUDIT-C screening and wants to understand their score and next steps."
          bottomLine="AUDIT-C thresholds differ by gender — understand what your specific score indicates. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>


      <ScoreInterpretationLayout
        testName="AUDIT-C"
        testAbbreviation="AUDIT-C"
        toolPageHref="/audit-c-alcohol-screen"
        lastUpdated="March 7, 2026"
        intro={[
          "The AUDIT-C (Alcohol Use Disorders Identification Test \u2014 Consumption) is a brief three-question alcohol screening tool derived from the full 10-question AUDIT developed by the World Health Organization. It is one of the most widely validated and commonly used alcohol screening instruments in primary care, emergency departments, and population health settings worldwide.",
          "The three questions ask about: (1) how often you have a drink containing alcohol, (2) how many standard drinks you have on a typical drinking day, and (3) how often you have six or more drinks on one occasion. Each question is scored from 0 to 4, producing a total score between 0 and 12. The AUDIT-C uses different thresholds for men and women to account for biological differences in alcohol metabolism.",
          "A positive AUDIT-C screen does not mean you have an alcohol use disorder. It indicates that your pattern of alcohol consumption may carry health risks and that a conversation with a healthcare provider could be helpful. Many people who screen positive benefit from a brief intervention \u2014 a short, non-judgmental discussion about drinking patterns and personal goals.",
        ]}
        scoreRanges={[
          { range: "0", label: "Abstinent", meaning: "No alcohol consumption reported", nextStep: "No follow-up needed related to alcohol use", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "1\u20132 (women) / 1\u20133 (men)", label: "Low Risk", meaning: "Alcohol consumption within lower-risk levels", nextStep: "Continue monitoring; be aware of standard drink sizes and guidelines", colorClass: "bg-sage-50/30 dark:bg-sage-950/10", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "3+ (women) / 4+ (men)", label: "Positive Screen", meaning: "Drinking pattern may carry health risks; further conversation recommended", nextStep: "Consider discussing your drinking pattern with a healthcare provider", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "7\u201312", label: "Higher Risk", meaning: "Heavy alcohol consumption that is strongly associated with health consequences", nextStep: "Speaking with a healthcare professional is strongly encouraged; further assessment may be appropriate", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
        ]}
        cannotTellYou={[
          "The AUDIT-C is a screening tool \u2014 not a clinical assessment. A three-question screen cannot determine whether someone has an alcohol use disorder, alcohol dependence, or any specific condition. It identifies patterns of consumption that may carry risk, but the meaning of that risk depends on your full health context, medications, family history, and individual circumstances.",
          "Your score also reflects a snapshot of your recent drinking pattern. Alcohol use can fluctuate based on social circumstances, stress, holidays, life changes, and many other factors. A single screening score does not capture the full picture of your relationship with alcohol over time. If your score does not feel representative of your typical pattern, retaking the screening at a different time can provide additional context.",
        ]}
        scoreBands={[
          {
            heading: "AUDIT-C Score 0: No Alcohol Use Reported",
            paragraphs: [
              "A score of 0 on the AUDIT-C indicates that you did not report any alcohol consumption. This may mean you abstain from alcohol entirely, are in recovery from an alcohol use problem, choose not to drink for personal or health reasons, or simply did not drink during the period covered by the questions.",
              "No further alcohol-related follow-up is indicated based on this score. If you are in recovery and would like support, SAMHSA\u2019s National Helpline (1-800-662-4357) provides free referrals 24 hours a day, 7 days a week.",
            ],
          },
          {
            heading: "AUDIT-C Score 1\u20132 (Women) or 1\u20133 (Men): Low-Risk Drinking",
            paragraphs: [
              "Scores in the low-risk range suggest that your current drinking pattern is below the thresholds associated with increased health risk in research studies. The National Institute on Alcohol Abuse and Alcoholism (NIAAA) defines moderate drinking as up to 1 drink per day for women and up to 2 drinks per day for men, which generally aligns with scores in this range.",
              "Even at lower levels of consumption, it is worth being aware of factors that could change your risk profile. These include taking medications that interact with alcohol (including over-the-counter pain relievers, antihistamines, and many prescription medications), having a family history of alcohol use problems, being pregnant or planning to become pregnant, or having certain health conditions. No amount of alcohol is considered completely risk-free by current medical consensus.",
            ],
          },
          {
            heading: "AUDIT-C Score 3+ (Women) or 4+ (Men): Positive Screen",
            paragraphs: [
              "A positive AUDIT-C screen means your reported alcohol consumption exceeds the thresholds that research has identified as carrying increased health risk. This is the most common result seen in screening programs and encompasses a wide range of drinking patterns \u2014 from slightly above the threshold to heavy daily consumption.",
              "At this level, a brief intervention is the evidence-based recommendation. Brief intervention is a structured, non-judgmental conversation (typically 5\u201315 minutes) in which a healthcare provider discusses your drinking pattern, provides information about health risks, and helps you set personal goals if you choose to make changes. Research consistently shows that brief intervention reduces alcohol consumption by 13\u201334% in people drinking at hazardous levels.",
              "A positive screen does not mean you need to stop drinking entirely or that you have a clinical condition. It means the conversation is worth having. Many people find that simply becoming aware of how much they are actually drinking \u2014 especially when they learn what counts as a standard drink \u2014 leads to natural, self-directed adjustments.",
            ],
          },
          {
            heading: "AUDIT-C Score 7\u201312: Heavy Alcohol Consumption",
            paragraphs: [
              "Scores in the 7\u201312 range indicate heavy alcohol consumption that is strongly associated with health consequences including liver disease, cardiovascular problems, increased cancer risk, mental health effects, and impaired functioning in work and relationships. At this level, the full 10-question AUDIT is often recommended for a more comprehensive assessment of alcohol-related harm and dependence symptoms.",
              "If you scored in this range, speaking with a healthcare provider is strongly encouraged. Effective support exists across a spectrum \u2014 from outpatient counseling and medication-assisted treatment to intensive programs. The right approach depends on your individual situation, and a provider can help you explore options without judgment. If you are experiencing withdrawal symptoms when you stop drinking (tremors, sweating, anxiety, insomnia), please seek medical attention, as alcohol withdrawal can be medically serious.",
            ],
          },
          {
            heading: "Understanding Gender-Specific Thresholds",
            paragraphs: [
              "The AUDIT-C uses different cutoff scores for men and women because of well-documented biological differences in alcohol metabolism. Women generally have a higher proportion of body fat and lower proportion of body water than men of similar weight, which results in higher blood alcohol concentrations from the same amount of alcohol. Women also tend to produce less alcohol dehydrogenase, the enzyme that breaks down alcohol in the stomach and liver.",
              "These biological differences mean that women experience alcohol-related health consequences at lower levels of consumption and after shorter periods of heavy drinking compared to men. The different thresholds are not a social judgment \u2014 they reflect physiological reality and help ensure the screening tool is equally accurate for both groups.",
            ],
          },
        ]}
        factorsAffecting={[
          "Social context \u2014 people tend to underestimate consumption in social settings where heavy drinking is normalized",
          "Pour size awareness \u2014 many drinks served at bars, restaurants, and homes exceed standard drink sizes (e.g., a large wine pour may be 8\u201310 oz rather than 5 oz)",
          "Recall accuracy \u2014 estimating \u201ctypical\u201d consumption can be difficult when drinking patterns are variable",
          "Recent changes \u2014 the AUDIT-C reflects recent patterns; if your drinking has recently increased or decreased, the score may not reflect your long-term pattern",
          "Craft and high-ABV beverages \u2014 craft beers (7\u201312% ABV) and cocktails with multiple spirits contain significantly more alcohol per serving than standard drinks",
          "Medications and health conditions \u2014 these do not change your score but can significantly change the health impact of the same consumption level",
        ]}
        doctorConversation={[
          "Alcohol use is one of the most common topics in primary care, and healthcare providers are trained to discuss it without judgment. Many offices already use the AUDIT-C as part of routine health screenings, so your doctor is likely familiar with the scoring system.",
          "You might say: \"I completed an AUDIT-C screening online and scored [your score]. I wanted to discuss whether my drinking pattern is something I should be paying more attention to.\" This is a straightforward, low-pressure way to start the conversation.",
          "If you are concerned about your drinking but not sure whether you want to make changes, that is completely normal and worth saying out loud. A good provider will meet you where you are. Brief intervention research shows that even one conversation about alcohol use can lead to meaningful reductions in consumption. You do not need to have a crisis to benefit from the conversation.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the AUDIT-C", description: "Free, private 3-question brief alcohol screen", href: "/audit-c-alcohol-screen" },
          { name: "Full AUDIT Self-Check", description: "10-question WHO alcohol use screening tool", href: "/audit-alcohol-screen" },
          { name: "CAGE Questionnaire", description: "4-question alcohol screening tool", href: "/cage-questionnaire" },
        ]}
        sources={[
          { text: "Bush, K., et al. (1998). The AUDIT alcohol consumption questions (AUDIT-C): An effective brief screening test for problem drinking. Archives of Internal Medicine, 158(16), 1789\u20131795.", url: "https://pubmed.ncbi.nlm.nih.gov/9738608/" },
          { text: "Bradley, K. A., et al. (2007). AUDIT-C as a brief screen for alcohol misuse in primary care. Alcoholism: Clinical and Experimental Research, 31(7), 1208\u20131217.", url: "https://pubmed.ncbi.nlm.nih.gov/17451397/" },
          { text: "NIAAA \u2014 Drinking Levels Defined.", url: "https://www.niaaa.nih.gov/alcohol-health/overview-alcohol-consumption/moderate-binge-drinking" },
          { text: "SAMHSA \u2014 Screening, Brief Intervention, and Referral to Treatment (SBIRT).", url: "https://www.samhsa.gov/sbirt" },
        ]}
      />
    </>
  );
}

import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import AnswerBlock from "@/components/AnswerBlock";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";

const TOOL_URL = `${SITE_URL}/ace-score-interpretation`;

const FAQ_DATA = [
  { question: "What does an ACE score of 4 mean?", answer: "An ACE score of 4 means you reported four types of adverse childhood experiences out of the ten categories measured. Research by the original CDC-Kaiser Permanente study found that a score of 4 or higher is associated with significantly increased risks for certain health conditions later in life \u2014 including heart disease, depression, and substance use. However, an ACE score is not destiny. Many people with high ACE scores lead healthy, fulfilling lives, especially when protective factors like supportive relationships, community connection, and access to resources are present." },
  { question: "Is a high ACE score a life sentence?", answer: "Absolutely not. While the ACE study demonstrated a dose-response relationship between adverse childhood experiences and later health outcomes, this reflects population-level trends \u2014 not individual certainty. Resilience research consistently shows that protective factors such as a stable caring adult, community belonging, access to mental health support, and developing coping skills can buffer the effects of early adversity. Your ACE score describes what happened to you, not who you are or what your future holds." },
  { question: "Can my ACE score change over time?", answer: "Your ACE score itself does not change because it measures experiences that occurred during childhood (before age 18). The ten questions refer to events that either happened or did not happen during that period. However, what can change is how those experiences affect you. Therapy, supportive relationships, self-care practices, and community resources can all reduce the ongoing impact of childhood adversity on your physical and mental health." },
  { question: "What are protective factors against ACEs?", answer: "Protective factors are conditions that buffer the impact of adverse childhood experiences. Key protective factors identified in research include: having at least one stable, caring adult relationship during childhood; feeling a sense of belonging in school or community; developing emotional regulation and problem-solving skills; access to mental health services when needed; and safe, stable housing and economic security. These factors can be strengthened at any point in life, not just during childhood." },
  { question: "Does an ACE score of 0 mean I had a perfect childhood?", answer: "Not necessarily. The ACE questionnaire measures ten specific categories of adversity \u2014 abuse, neglect, and household dysfunction. It does not capture every difficult experience a child might face, such as bullying, racism, community violence, poverty, serious childhood illness, loss of a close friend, or natural disasters. An ACE score of 0 means none of the ten specific categories applied, but it does not measure the full spectrum of childhood challenges." },
  { question: "Should I share my ACE score with my doctor?", answer: "Sharing your ACE score with a healthcare provider can be valuable. Trauma-informed care is increasingly recognized as a best practice in healthcare settings. Your ACE score gives your provider important context about your background that may be relevant to both physical and mental health. You are never obligated to share, and you can choose how much detail to provide. Simply saying \u201cI completed an ACE screening and scored [your score]\u201d is a perfectly fine starting point." },
  { question: "Are ACE scores validated for all populations?", answer: "The original ACE study was conducted with a predominantly white, middle-class, insured population at Kaiser Permanente in San Diego. Since then, the ACE framework has been studied across diverse populations and countries. However, some researchers note that the standard ten questions may not capture adversities more prevalent in certain communities \u2014 such as racism, community violence, immigration-related trauma, or poverty. Expanded ACE questionnaires exist that include these additional categories." },
  { question: "What is the connection between ACE scores and substance use?", answer: "The original ACE study found a strong graded relationship between ACE scores and later substance use. For example, individuals with an ACE score of 4 or more were approximately 5 times more likely to have used illicit drugs and 7 times more likely to identify as having an alcohol use problem compared to those with an ACE score of 0. Researchers believe that substance use can develop as a coping mechanism for unresolved pain from childhood adversity. This understanding is central to trauma-informed approaches to recovery." },
];

export const metadata: Metadata = createMetadata({
  path: "/ace-score-interpretation",
  title: "ACE Score Interpretation: What Your Score Means",
  description:
    "Understand your ACE score from the Adverse Childhood Experiences questionnaire. Learn what each range means, protective factors, and why your score is not destiny.",
});

export default function ACEScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "ACE Score Interpretation: What Your Results Mean",
              description: "Understand your ACE score from the Adverse Childhood Experiences questionnaire. Learn what each range means, protective factors, and why your score is not destiny.",
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
              { name: "ACE Questionnaire", url: `${SITE_URL}/ace-questionnaire` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guide that explains what ACE scores mean, how they relate to health outcomes, and what resilience factors can help."
          who="Anyone who has completed the ACE questionnaire and wants to understand their score in context."
          bottomLine="A high ACE score does not predict your future — resilience and protective factors matter. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <ScoreInterpretationLayout
        testName="ACE"
        testAbbreviation="ACE"
        toolPageHref="/ace-questionnaire"
        blogGuideHref="/blog/ace-score-meaning"
        lastUpdated="March 7, 2026"
        intro={[
          "The ACE (Adverse Childhood Experiences) questionnaire is a 10-item screening tool based on the landmark CDC-Kaiser Permanente ACE Study conducted by Drs. Vincent Felitti and Robert Anda in the late 1990s. That study, which surveyed over 17,000 adults, revealed a powerful connection between childhood adversity and health outcomes later in life. Your ACE score reflects how many categories of adverse experiences you reported from your childhood.",
          "Each of the ten questions asks about a specific type of adversity that may have occurred before age 18: physical abuse, emotional abuse, sexual abuse, physical neglect, emotional neglect, and five categories of household dysfunction (domestic violence, substance use in the household, mental illness in the household, parental separation or divorce, and incarceration of a household member). Each yes answer counts as one point, producing a total score between 0 and 10.",
          "It is important to understand from the outset that your ACE score is not a prediction, a label, or a measure of your worth. It is a research-based way to understand one dimension of your early life experiences. The same research that identified the risks associated with ACEs has also identified powerful protective factors that can change outcomes at any age.",
        ]}
        scoreRanges={[
          { range: "0", label: "No ACEs Reported", meaning: "None of the ten categories of adverse childhood experiences were endorsed", nextStep: "No specific follow-up needed based on this screening", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "1\u20133", label: "Some Adversity", meaning: "One to three categories of childhood adversity were reported", nextStep: "Be aware of the connection between childhood experiences and adult health; consider exploring support if these experiences still affect you", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "4+", label: "High ACE Score", meaning: "Four or more categories of childhood adversity \u2014 associated with increased health risks in research", nextStep: "Consider speaking with a trauma-informed healthcare provider; protective factors and support can make a meaningful difference", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
        ]}
        cannotTellYou={[
          "Your ACE score cannot predict your future. The ACE study identified population-level associations between childhood adversity and later health outcomes, but individual paths vary enormously. Many people with high ACE scores live long, healthy, fulfilling lives. Many people with low ACE scores face health challenges. A number on a screening tool does not define your trajectory.",
          "The ACE questionnaire also cannot capture the severity, duration, or context of what you experienced. Two people with the same ACE score may have had very different childhoods. It does not measure protective factors \u2014 the supportive relationships, coping skills, and community resources that research shows can profoundly buffer the effects of early adversity. Your score is one piece of a much larger picture.",
        ]}
        scoreBands={[
          {
            heading: "ACE Score 0: No Adverse Childhood Experiences Reported",
            paragraphs: [
              "An ACE score of 0 means you did not endorse any of the ten specific categories of childhood adversity measured by the questionnaire. This does not necessarily mean your childhood was free from all challenges \u2014 the ACE questionnaire measures specific categories and does not capture experiences like bullying, poverty, racism, community violence, serious illness, or the loss of a close friend or family member.",
              "If your score is 0 and you feel well, this screening confirms that these particular risk factors were not part of your early experience. If you are struggling despite a score of 0, remember that the ACE questionnaire has a limited scope. Many other life experiences can affect mental and physical health, and seeking support is always appropriate regardless of your score.",
            ],
          },
          {
            heading: "ACE Score 1\u20133: Some Childhood Adversity",
            paragraphs: [
              "An ACE score of 1 to 3 indicates that you experienced some categories of childhood adversity. The original ACE study found a graded dose-response relationship \u2014 meaning that each additional ACE was associated with incrementally higher risks for certain health outcomes. However, at these levels, the increased risk is relatively modest, and many individuals with scores in this range report good overall health and functioning.",
              "If you scored in this range, it may be helpful to reflect on whether these childhood experiences continue to affect your current well-being. Some people process early adversity naturally through supportive relationships and life experience. Others find that certain patterns \u2014 difficulty trusting others, heightened stress responses, relationship challenges \u2014 have roots in childhood experiences they have not fully addressed. There is no right or wrong way to respond to your score. If these experiences still affect you, speaking with a counselor or therapist can be valuable.",
            ],
          },
          {
            heading: "ACE Score 4+: High Adversity \u2014 But Not a Life Sentence",
            paragraphs: [
              "An ACE score of 4 or higher was identified in the original study as a significant threshold. At this level, the research found substantially increased risks for conditions including heart disease, cancer, chronic lung disease, liver disease, depression, substance use problems, and suicide attempts. These findings reflect the profound impact that chronic childhood stress can have on developing brains and bodies through what researchers call toxic stress \u2014 prolonged activation of the body\u2019s stress response systems without adequate buffering from supportive adults.",
              "However \u2014 and this is critical \u2014 your ACE score is not your destiny. The same body of research that identified these risks has also identified powerful protective factors. Resilience is not a fixed trait you either have or do not have. It is a set of processes and resources that can be developed and strengthened at any age. Trauma-informed therapy, stable relationships, community connection, physical activity, mindfulness practices, and access to healthcare can all meaningfully reduce the long-term impact of childhood adversity.",
              "If you scored 4 or higher, consider reaching out to a trauma-informed healthcare provider. You can share your ACE score as a starting point for conversation. Trauma-informed care recognizes that what happened to you is not your fault, that healing is possible, and that understanding the connection between childhood experiences and current health is empowering rather than limiting.",
            ],
          },
          {
            heading: "Protective Factors: What Buffers the Impact of ACEs",
            paragraphs: [
              "Research on resilience has identified several key protective factors that can reduce the health impact of adverse childhood experiences. These include: having at least one stable, caring adult during childhood; a sense of belonging and connection in school or community; the development of emotional regulation and social skills; access to concrete support in times of need; and knowledge of parenting and child development for those who become parents.",
              "The encouraging news is that many protective factors can be built or strengthened at any point in life. Adults who experienced childhood adversity can benefit from forming secure relationships, engaging in therapy, developing mindfulness and self-regulation skills, joining supportive communities, and addressing physical health proactively. The brain retains plasticity throughout life, meaning that new experiences and new patterns of connection can literally reshape neural pathways formed during difficult childhoods.",
              "Organizations like the CDC, SAMHSA, and state health departments have developed resources specifically for adults who have experienced ACEs. Trauma-informed approaches are increasingly available in healthcare, counseling, and community settings. Asking for support is not a sign of weakness \u2014 it is an evidence-based strategy for improving long-term outcomes.",
            ],
          },
        ]}
        factorsAffecting={[
          "Memory and recall \u2014 some childhood experiences may be difficult to remember clearly, potentially leading to under-reporting",
          "Current emotional state \u2014 how you feel today can influence which childhood memories are most accessible",
          "Definition interpretation \u2014 different people may interpret terms like \u201cneglect\u201d or \u201cabuse\u201d differently based on cultural and personal context",
          "The ten-item scope \u2014 the standard ACE questionnaire does not capture all forms of childhood adversity (bullying, racism, poverty, community violence, etc.)",
          "Threshold vs. severity \u2014 the ACE score counts categories, not frequency or severity; a single incident and years of repeated experience both count as one point",
          "Protective factors are not measured \u2014 your score does not reflect the supportive relationships, coping skills, or resources that may have buffered these experiences",
        ]}
        doctorConversation={[
          "Bringing your ACE score to a healthcare appointment can open an important conversation about the connection between your childhood experiences and your current health. Many healthcare providers are now trained in trauma-informed care and understand the significance of ACE scores in the context of overall health.",
          "You might say: \"I completed an ACE questionnaire and my score was [your score]. I have been learning about how childhood experiences can affect adult health, and I wanted to discuss whether this might be relevant to anything I am experiencing.\" You do not need to share details of specific experiences unless you choose to.",
          "If your provider is not familiar with ACE scores, you can briefly explain that it is a validated research tool from the CDC-Kaiser Permanente study that measures categories of childhood adversity. The key message is that you are being proactive about understanding how your early experiences may connect to your current well-being \u2014 and that is a powerful step regardless of how the conversation unfolds.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the ACE Questionnaire", description: "Free, private 10-question adverse childhood experiences self-check", href: "/ace-questionnaire" },
          { name: "PHQ-9 Depression Self-Check", description: "9-question validated depression screening tool", href: "/phq-9-depression-test" },
          { name: "AUDIT Alcohol Self-Check", description: "10-question WHO alcohol use screening tool", href: "/audit-alcohol-screen" },
        ]}
        sources={[
          { text: "Felitti, V. J., et al. (1998). Relationship of childhood abuse and household dysfunction to many of the leading causes of death in adults. American Journal of Preventive Medicine, 14(4), 245\u2013258.", url: "https://pubmed.ncbi.nlm.nih.gov/9635069/" },
          { text: "CDC \u2014 Adverse Childhood Experiences (ACEs): Preventing early trauma to improve adult health.", url: "https://www.cdc.gov/aces/" },
          { text: "Hughes, K., et al. (2017). The effect of multiple adverse childhood experiences on health: a systematic review and meta-analysis. The Lancet Public Health, 2(8), e356\u2013e366.", url: "https://pubmed.ncbi.nlm.nih.gov/29253477/" },
          { text: "SAMHSA \u2014 Trauma-Informed Care in Behavioral Health Services.", url: "https://www.samhsa.gov/nctic" },
        ]}
      />
    </>
  );
}

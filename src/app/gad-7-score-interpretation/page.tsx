import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";

const TOOL_URL = `${SITE_URL}/gad-7-score-interpretation`;

const FAQ_DATA = [
  { question: "What does a GAD-7 score of 10 mean?", answer: "A GAD-7 score of 10 places you at the beginning of the moderate anxiety range (10\u201314). Research shows that a score of 10 is the most commonly used clinical cutoff for identifying generalized anxiety disorder in primary care. At this level, anxiety symptoms are likely interfering with your concentration, sleep, or daily routine. It does not confirm an anxiety disorder \u2014 only a professional evaluation can determine that \u2014 but it does suggest that speaking with a healthcare provider would be a reasonable next step." },
  { question: "What does a GAD-7 score of 15 mean?", answer: "A score of 15 or higher on the GAD-7 falls in the severe anxiety range (15\u201321). This suggests that anxiety symptoms have been frequent and intense over the past two weeks, potentially affecting work, relationships, and physical health. People in this range often report persistent worry that feels uncontrollable, muscle tension, restlessness, and difficulty sleeping. Speaking with a healthcare professional is strongly encouraged at this level." },
  { question: "Is a GAD-7 score of 5 normal?", answer: "A GAD-7 score of 5 sits at the lower end of the mild anxiety range (5\u20139). Some degree of anxiety is a normal part of life, and a score of 5 suggests you are experiencing low-level symptoms that may not require professional intervention. However, if these symptoms persist for more than a few weeks or begin to worsen, monitoring and possibly speaking with a provider can help prevent escalation." },
  { question: "How often should I retake the GAD-7 anxiety screening?", answer: "The GAD-7 measures anxiety symptoms over the past two weeks, so retaking it every 2\u20134 weeks is a practical interval for tracking changes. Clinicians frequently use serial GAD-7 scores to monitor whether treatment is working. A drop of 5 or more points is generally considered a clinically meaningful improvement." },
  { question: "Can stress cause a high GAD-7 score without having an anxiety disorder?", answer: "Yes. The GAD-7 measures the frequency of anxiety symptoms, not the cause. Acute stressors \u2014 job loss, relationship conflict, financial pressure, health concerns \u2014 can elevate your score temporarily without indicating a chronic anxiety disorder. This is why the screening asks about the past two weeks specifically. If your high score coincides with a stressful period, retaking it after the stressor resolves can provide a clearer picture." },
  { question: "What is the difference between the GAD-7 and the PHQ-9?", answer: "The GAD-7 screens for generalized anxiety symptoms (excessive worry, restlessness, irritability, difficulty relaxing), while the PHQ-9 screens for depressive symptoms (low mood, loss of interest, fatigue, hopelessness). Anxiety and depression frequently co-occur, so many clinicians administer both tools together. Taking both screenings can give a more complete view of your emotional well-being." },
  { question: "Does a low GAD-7 score mean I do not have anxiety?", answer: "Not necessarily. The GAD-7 is designed to screen for generalized anxiety disorder specifically. Other anxiety conditions \u2014 such as social anxiety, panic disorder, specific phobias, or PTSD \u2014 may not be fully captured by the GAD-7. If you experience anxiety symptoms that feel significant but your GAD-7 score is low, discussing your specific symptoms with a healthcare provider is still worthwhile." },
  { question: "What does a GAD-7 score of 0 mean?", answer: "A GAD-7 score of 0 means you reported no anxiety symptoms at all over the past two weeks. This falls in the minimal range and suggests that anxiety is not currently a concern for you. No further action is needed, but you can retake the screening any time your situation changes." },
];

export const metadata: Metadata = createMetadata({
  path: "/gad-7-score-interpretation",
  title: "GAD-7 Score Interpretation: What Your Score Means",
  description:
    "Understand your GAD-7 anxiety score. Learn what each range means, when to seek help, and how to talk to your doctor about anxiety screening results.",
});

export default function GAD7ScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "GAD-7 Score Interpretation: What Your Results Mean",
              description: "Understand your GAD-7 anxiety score. Learn what each range means, when to seek help, and how to talk to your doctor about anxiety screening results.",
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
              { name: "GAD-7 Self-Check", url: `${SITE_URL}/gad-7-anxiety-test` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />

      <ScoreInterpretationLayout
        testName="GAD-7"
        testAbbreviation="GAD-7"
        toolPageHref="/gad-7-anxiety-test"
        blogGuideHref="/blog/gad-7-guide"
        lastUpdated="March 7, 2026"
        intro={[
          "The GAD-7 (Generalized Anxiety Disorder 7-item scale) is a brief, validated screening tool developed by Drs. Spitzer, Kroenke, Williams, and L\u00f6we. Originally designed for primary care settings, it has become one of the most widely used anxiety measures in clinical practice, research, and community health programs worldwide. Your score reflects the frequency of anxiety symptoms over the past two weeks.",
          "Each of the seven questions is scored from 0 (not at all) to 3 (nearly every day), producing a total between 0 and 21. The score maps to four severity levels that clinicians and researchers use to guide recommendations. The GAD-7 has strong psychometric properties, with a sensitivity of 89% and specificity of 82% for identifying generalized anxiety disorder at a cutoff of 10.",
        ]}
        scoreRanges={[
          { range: "0\u20134", label: "Minimal", meaning: "Few or no anxiety symptoms reported over the past two weeks", nextStep: "Continue monitoring your well-being; no clinical action typically needed", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "5\u20139", label: "Mild", meaning: "Some anxiety symptoms present but generally manageable day to day", nextStep: "Monitor over the next few weeks; consider lifestyle adjustments and stress management", colorClass: "bg-sage-50/30 dark:bg-sage-950/10", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "10\u201314", label: "Moderate", meaning: "Anxiety symptoms that may be noticeably affecting daily functioning", nextStep: "Consider scheduling an appointment with a healthcare provider for further evaluation", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "15\u201321", label: "Severe", meaning: "Frequent, intense anxiety symptoms requiring prompt attention", nextStep: "Speaking with a healthcare professional is strongly encouraged; effective treatments exist", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
        ]}
        cannotTellYou={[
          "The GAD-7 is a screening tool \u2014 not a clinical assessment. A single self-reported score cannot capture the full picture of your mental health. It does not account for medical conditions that mimic anxiety (such as thyroid disorders or cardiac arrhythmias), your personal history, coping strategies, or the specific context of your life circumstances.",
          "Your score can fluctuate based on recent events, caffeine intake, sleep quality, and even the time of day. A high score during a stressful period may not reflect your baseline anxiety level, and a low score does not rule out an anxiety condition that presents differently from generalized anxiety. Screening tools open the door to conversation \u2014 they do not close the case.",
        ]}
        scoreBands={[
          {
            heading: "GAD-7 Score 0\u20134: Minimal Anxiety",
            paragraphs: [
              "A score in the 0\u20134 range suggests that you reported few or no anxiety symptoms over the past two weeks. People in this range typically describe feeling generally calm and able to manage daily stressors without persistent worry or physical tension. Normal, situational anxiety \u2014 such as nervousness before a presentation \u2014 would not typically push your score above this range.",
              "If you feel well and your score confirms that, no further action is needed. Continue engaging in habits that support your mental health: regular physical activity, adequate sleep, meaningful social connection, and activities that bring you fulfillment. If you notice a shift in your anxiety level in the future, retaking the GAD-7 can help you identify changes early.",
            ],
          },
          {
            heading: "GAD-7 Score 5\u20139: Mild Anxiety",
            paragraphs: [
              "A score of 5\u20139 suggests mild anxiety symptoms that are present but not severely disrupting your daily life. You may notice increased worry about several things, occasional difficulty relaxing, or mild restlessness. Many people in this range describe feeling \u201con edge\u201d without a clear reason, or finding that worries linger longer than they used to.",
              "At this level, self-monitoring and lifestyle strategies are typically the first line of response. Regular exercise has strong evidence for reducing anxiety symptoms \u2014 even 20\u201330 minutes of moderate activity several times per week can make a measurable difference. Mindfulness practices, sleep hygiene improvements, and limiting caffeine and alcohol may also help. If symptoms persist beyond 2\u20134 weeks, consider speaking with a healthcare provider.",
            ],
          },
          {
            heading: "GAD-7 Score 10\u201314: Moderate Anxiety",
            paragraphs: [
              "A score of 10\u201314 crosses the clinical cutoff most commonly used to identify possible generalized anxiety disorder. At this level, anxiety is likely affecting your ability to concentrate, your sleep quality, your productivity at work, or your relationships. You may notice physical symptoms such as muscle tension, headaches, gastrointestinal discomfort, or fatigue alongside the psychological worry.",
              "Research published in the Archives of Internal Medicine found that a GAD-7 cutoff of 10 provides the optimal balance of sensitivity and specificity for identifying generalized anxiety disorder. If you scored in this range, scheduling an appointment with a healthcare provider is a reasonable and proactive step. You can bring your GAD-7 results to provide context for the conversation.",
            ],
          },
          {
            heading: "GAD-7 Score 15\u201321: Severe Anxiety",
            paragraphs: [
              "A score of 15\u201321 indicates severe anxiety symptoms that are pervasive and significantly impairing daily functioning. People in this range often describe constant, uncontrollable worry, severe difficulty concentrating, marked restlessness or feeling keyed up, irritability, muscle tension, and sleep disturbance. Physical symptoms such as rapid heartbeat, sweating, trembling, and shortness of breath may also be present.",
              "If you scored in this range, reaching out to a healthcare professional is strongly encouraged. Effective evidence-based treatments exist for anxiety, including cognitive behavioral therapy (CBT), which has the strongest research support, as well as medication options when appropriate. You do not need to manage these symptoms alone. If you are in crisis, contact the 988 Suicide & Crisis Lifeline (call or text 988) or SAMHSA at 1-800-662-4357.",
            ],
          },
        ]}
        factorsAffecting={[
          "Caffeine and stimulant intake \u2014 caffeine can directly trigger or worsen anxiety symptoms, inflating your score",
          "Sleep deprivation \u2014 even one or two nights of poor sleep can significantly increase anxiety levels",
          "Recent stressful events \u2014 job changes, financial pressure, relationship conflict, or health scares can temporarily elevate symptoms",
          "Physical health conditions \u2014 thyroid disorders, cardiac arrhythmias, chronic pain, and hormonal changes can produce anxiety-like symptoms",
          "Medication and substance use \u2014 some medications, alcohol withdrawal, and recreational substances can increase anxiety",
          "Time of day \u2014 anxiety symptoms often peak in the morning for many people, which may affect how you answer",
          "Interpretation style \u2014 people differ in how literally they interpret frequency-based questions, which can shift scores by several points",
        ]}
        doctorConversation={[
          "Bringing your GAD-7 score to a healthcare appointment gives your provider immediate, structured context about your anxiety symptoms. Many primary care offices already use the GAD-7 as a routine screening tool, so your doctor will likely recognize the scoring system and understand what each range implies clinically.",
          "You might say: \u201cI completed a GAD-7 anxiety screening and scored [your score]. I have been noticing [describe your main symptoms \u2014 e.g., persistent worry, difficulty sleeping, tension] for about [how long]. I would like to understand what this might mean and whether any next steps make sense.\u201d",
          "Your provider may ask follow-up questions about specific triggers, physical symptoms, family history, and how anxiety is affecting your work and relationships. There is no wrong way to start this conversation. The fact that you completed a screening and are seeking information is itself a sign of proactive self-care.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the GAD-7", description: "Free, private 7-question anxiety self-check", href: "/gad-7-anxiety-test" },
          { name: "PHQ-9 Depression Self-Check", description: "9-question validated depression screening tool", href: "/phq-9-depression-test" },
          { name: "DASS-21 Scale", description: "Measures depression, anxiety, and stress together", href: "/dass-21-depression-anxiety-stress" },
        ]}
        sources={[
          { text: "Spitzer, R. L., Kroenke, K., Williams, J. B., & L\u00f6we, B. (2006). A brief measure for assessing generalized anxiety disorder: the GAD-7. Arch Intern Med, 166(10), 1092\u20131097.", url: "https://pubmed.ncbi.nlm.nih.gov/16717171/" },
          { text: "L\u00f6we, B., Decker, O., M\u00fcller, S., et al. (2008). Validation and standardization of the GAD-7 in the general population. Med Care, 46(3), 266\u2013274.", url: "https://pubmed.ncbi.nlm.nih.gov/18388841/" },
          { text: "National Institute of Mental Health \u2014 Anxiety disorders overview", url: "https://www.nimh.nih.gov/health/topics/anxiety-disorders" },
        ]}
      />
    </>
  );
}

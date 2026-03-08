import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";

const TOOL_URL = `${SITE_URL}/pcl-5-score-interpretation`;

const FAQ_DATA = [
  { question: "What does a PCL-5 score of 33 mean?", answer: "A PCL-5 score of 33 falls just above the commonly used clinical cutoff of 31–33 for probable PTSD. This suggests you may be experiencing significant post-traumatic stress symptoms that warrant further evaluation by a mental health professional. It does not confirm a PTSD assessment — only a clinician can make that determination after a comprehensive interview." },
  { question: "What is a good score on the PCL-5?", answer: "Lower scores on the PCL-5 indicate fewer post-traumatic stress symptoms. A score in the 0–10 range suggests minimal symptoms. However, there is no single 'good' or 'bad' score — the PCL-5 is a screening tool that measures symptom severity at a point in time. What matters most is how your symptoms affect your daily functioning and quality of life." },
  { question: "What is the clinical cutoff for PTSD on the PCL-5?", answer: "The most widely cited clinical cutoff for the PCL-5 is 31–33 points out of 80. A score at or above this threshold suggests a probable positive screen for PTSD. Some studies use 31, others use 33, depending on the population being studied. Your provider will consider your full clinical picture alongside the score." },
  { question: "How is the PCL-5 scored?", answer: "The PCL-5 contains 20 items, each rated from 0 (not at all) to 4 (extremely), based on how much you have been bothered by each symptom in the past month. The total score ranges from 0 to 80. Scores can also be broken into four symptom clusters: intrusion, avoidance, negative changes in cognition and mood, and changes in arousal and reactivity." },
  { question: "Can my PCL-5 score change over time?", answer: "Yes — PCL-5 scores frequently change over time, especially with treatment. A reduction of 10 or more points is generally considered a clinically meaningful change, and a reduction of 5–9 points is considered a reliable change. Many clinicians use repeated PCL-5 assessments to track treatment progress over weeks or months." },
  { question: "Is the PCL-5 the same as a PTSD assessment?", answer: "No. The PCL-5 is a self-report screening tool, not a clinical assessment. A formal PTSD evaluation typically involves a structured clinical interview, such as the Clinician-Administered PTSD Scale (CAPS-5), along with a review of your history, functioning, and symptom timeline. The PCL-5 can indicate that further evaluation may be helpful, but it cannot confirm or rule out PTSD on its own." },
  { question: "What are the four PTSD symptom clusters measured by the PCL-5?", answer: "The PCL-5 maps onto four DSM-5 symptom clusters: (1) Intrusion symptoms such as flashbacks and nightmares (items 1–5), (2) Avoidance of trauma-related thoughts or situations (items 6–7), (3) Negative changes in cognition and mood such as blame, detachment, or inability to feel positive emotions (items 8–14), and (4) Changes in arousal and reactivity such as hypervigilance, irritability, or difficulty sleeping (items 15–20)." },
  { question: "Should I see a therapist if my PCL-5 score is above 31?", answer: "A score above 31 suggests that your trauma-related symptoms may be significant enough to benefit from professional support. Evidence-based treatments for PTSD, such as Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and EMDR, have strong research support. Speaking with a trauma-informed therapist is a reasonable next step — you can share your screening results to help frame the conversation." },
];

export const metadata: Metadata = createMetadata({
  path: "/pcl-5-score-interpretation",
  title: "PCL-5 Score Interpretation: What Your Score Means",
  description:
    "Understand your PCL-5 PTSD screening score. Learn what each range means, the clinical cutoff, and how to discuss results with your provider.",
});

export default function PCL5ScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "PCL-5 Score Interpretation: What Your Results Mean",
              description: "Understand your PCL-5 PTSD screening score. Learn what each range means, the clinical cutoff, and how to discuss results with your provider.",
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
              { name: "PCL-5 PTSD Screening", url: `${SITE_URL}/pcl-5-ptsd-screening` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />

      <ScoreInterpretationLayout
        testName="PCL-5"
        testAbbreviation="PCL-5"
        toolPageHref="/pcl-5-ptsd-screening"
        lastUpdated="March 7, 2026"
        intro={[
          "The PCL-5 (PTSD Checklist for DSM-5) is a 20-item self-report screening tool developed by the National Center for PTSD. It measures the severity of post-traumatic stress symptoms as defined by the DSM-5. The PCL-5 is widely used in VA medical centers, research studies, and community mental health settings to screen for probable PTSD and to monitor symptom change over time.",
          "Each of the 20 items asks how much you have been bothered by a specific PTSD symptom during the past month, rated from 0 (not at all) to 4 (extremely). The total score ranges from 0 to 80. Scores are mapped to severity levels that help guide whether further clinical evaluation may be warranted.",
          "The PCL-5 aligns with the four DSM-5 symptom clusters: intrusion (re-experiencing the trauma), avoidance of trauma-related stimuli, negative changes in cognition and mood, and changes in arousal and reactivity. Understanding which clusters contribute most to your total score can provide additional insight into your symptom profile.",
        ]}
        scoreRanges={[
          { range: "0–10", label: "Minimal", meaning: "Few or no post-traumatic stress symptoms reported over the past month", nextStep: "Continue monitoring your well-being; retake if circumstances change", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "11–20", label: "Mild", meaning: "Some trauma-related symptoms present but generally below clinical threshold", nextStep: "Monitor over the coming weeks; consider talking to someone if symptoms persist", colorClass: "bg-sage-50/30 dark:bg-sage-950/10", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "21–30", label: "Moderate", meaning: "Noticeable trauma-related symptoms that may be affecting daily functioning", nextStep: "Consider scheduling an appointment with a mental health provider for evaluation", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "31–50", label: "Probable PTSD Symptoms", meaning: "Score meets or exceeds the clinical cutoff (31–33) suggesting probable PTSD", nextStep: "Speaking with a trauma-informed mental health professional is strongly encouraged", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
          { range: "51–80", label: "Severe", meaning: "High symptom severity across multiple PTSD symptom clusters", nextStep: "Please reach out to a mental health professional as soon as possible; effective help is available", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
        ]}
        cannotTellYou={[
          "The PCL-5 is a screening tool — not a clinical assessment. A self-report score cannot capture the complexity of trauma and its impact on your life. It does not evaluate the nature of the traumatic event, your personal history, your coping resources, or the full context behind your answers.",
          "Your score may fluctuate based on recent triggers, sleep quality, anniversaries of traumatic events, and current stressors. A high score on one occasion does not define you, and a low score does not mean trauma has no impact on your life. The PCL-5 is a starting point for understanding your symptoms — not a definitive conclusion.",
        ]}
        scoreBands={[
          {
            heading: "PCL-5 Score 0–10: Minimal Post-Traumatic Stress Symptoms",
            paragraphs: [
              "A score in the 0–10 range suggests that you reported few or no PTSD symptoms over the past month. People in this range typically describe manageable stress levels, with any trauma-related thoughts or feelings being infrequent and not significantly disruptive to daily life.",
              "If you feel well and your score confirms that, no immediate action is needed. Continue engaging in healthy routines — regular sleep, physical activity, social connection, and stress management. If you have experienced trauma in the past, being aware of potential triggers and having a plan for support can be helpful even when symptoms are minimal.",
            ],
          },
          {
            heading: "PCL-5 Score 11–20: Mild Post-Traumatic Stress Symptoms",
            paragraphs: [
              "A score of 11–20 suggests mild trauma-related symptoms that are present but below the clinical threshold typically used for a probable PTSD screen. You may be experiencing occasional intrusive thoughts, some avoidance of reminders, mild sleep difficulties, or intermittent irritability related to past experiences.",
              "At this level, monitoring is often the primary recommendation. Pay attention to whether symptoms are stable, improving, or worsening over time. Self-care strategies — grounding techniques, mindfulness, regular exercise, and maintaining supportive relationships — can be helpful. If symptoms persist beyond a few weeks or begin to interfere with work, relationships, or daily functioning, consider speaking with a mental health professional.",
            ],
          },
          {
            heading: "PCL-5 Score 21–30: Moderate Post-Traumatic Stress Symptoms",
            paragraphs: [
              "A score of 21–30 indicates moderate PTSD symptoms that are approaching the clinical cutoff. At this level, trauma-related difficulties may be noticeable in your daily life — increased hypervigilance, difficulty concentrating, emotional numbness, avoidance of certain situations, or disturbed sleep patterns.",
              "While this score falls below the standard clinical cutoff of 31–33, it is close enough to warrant attention. If these symptoms feel persistent or are affecting your quality of life, scheduling an appointment with a mental health provider is a reasonable step. Early intervention for trauma-related symptoms often leads to better outcomes.",
            ],
          },
          {
            heading: "PCL-5 Score 31–50: Probable PTSD Symptom Level",
            paragraphs: [
              "A score of 31–50 meets or exceeds the widely used clinical cutoff of 31–33, suggesting a probable positive screen for PTSD. At this level, you are likely experiencing significant symptoms across multiple clusters — intrusive memories or flashbacks, active avoidance of trauma reminders, persistent negative beliefs or emotions, and heightened reactivity or arousal.",
              "Research-supported treatments for PTSD include Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and Eye Movement Desensitization and Reprocessing (EMDR). These approaches have strong evidence for reducing PTSD symptoms. Connecting with a trauma-informed therapist is strongly encouraged. You can share your PCL-5 results to provide context for the conversation.",
            ],
          },
          {
            heading: "PCL-5 Score 51–80: Severe Post-Traumatic Stress Symptoms",
            paragraphs: [
              "A score of 51–80 indicates severe PTSD symptoms that are likely pervasive and significantly impairing your ability to function in work, relationships, and daily activities. People in this range often describe feeling overwhelmed by intrusive memories, intense avoidance behaviors, profound emotional numbing or detachment, and a persistent sense of danger or hyperarousal.",
              "If you scored in this range, please consider reaching out to a mental health professional as soon as possible. Effective, evidence-based treatments exist even for severe PTSD. If you are in crisis, contact the 988 Suicide & Crisis Lifeline (call or text 988) or the SAMHSA National Helpline (1-800-662-4357). You do not have to face this alone.",
            ],
          },
        ]}
        factorsAffecting={[
          "Proximity to the traumatic event — symptoms are often highest in the weeks and months following a trauma",
          "Anniversary reactions — symptoms may spike around the date of the traumatic event or related milestones",
          "Recent triggers — exposure to reminders of the trauma (news stories, locations, sensory cues) can temporarily elevate scores",
          "Sleep quality — poor sleep amplifies hyperarousal symptoms and can increase your total score",
          "Substance use — alcohol and other substances can temporarily numb symptoms or increase them depending on the substance and timing",
          "Co-occurring conditions — depression, anxiety, traumatic brain injury, and chronic pain frequently co-occur with PTSD and can influence scores",
          "Social support — isolation and lack of support may worsen symptoms, while strong connections can buffer them",
        ]}
        doctorConversation={[
          "Bringing your PCL-5 score to a healthcare appointment gives your provider a structured starting point for understanding your symptoms. Many mental health providers and VA clinicians are familiar with the PCL-5 and use it regularly in clinical practice.",
          "You might say: \"I completed a PCL-5 screening online and scored [your score]. I have been experiencing [describe your main symptoms — sleep problems, flashbacks, avoidance, irritability] for about [how long]. I wanted to discuss whether further evaluation would be helpful.\"",
          "You do not need to disclose the details of your trauma in the first conversation if you are not ready. Simply sharing your symptoms and screening score gives your provider enough information to begin discussing next steps, which might include a comprehensive assessment, therapy referral, or other support options.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the PCL-5", description: "Free, private 20-question PTSD self-check", href: "/pcl-5-ptsd-screening" },
          { name: "PHQ-9 Depression Self-Check", description: "9-question validated depression screening tool", href: "/phq-9-depression-test" },
          { name: "GAD-7 Anxiety Self-Check", description: "7-question validated anxiety screening tool", href: "/gad-7-anxiety-test" },
        ]}
        sources={[
          { text: "Weathers, F. W., Litz, B. T., Keane, T. M., Palmieri, P. A., Marx, B. P., & Schnurr, P. P. (2013). The PTSD Checklist for DSM-5 (PCL-5). National Center for PTSD.", url: "https://www.ptsd.va.gov/professional/assessment/adult-sr/ptsd-checklist.asp" },
          { text: "Bovin, M. J., et al. (2016). Psychometric properties of the PTSD Checklist for DSM-5 (PCL-5) in veterans. Psychological Assessment, 28(11), 1379–1391.", url: "https://pubmed.ncbi.nlm.nih.gov/26653052/" },
          { text: "National Center for PTSD — Using the PCL-5", url: "https://www.ptsd.va.gov/professional/assessment/adult-sr/ptsd-checklist.asp" },
        ]}
      />
    </>
  );
}

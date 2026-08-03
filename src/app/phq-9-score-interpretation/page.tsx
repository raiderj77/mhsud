import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/phq-9-score-interpretation`;

const FAQ_DATA = [
  { question: "What does a PHQ-9 score of 10 mean?", answer: "A PHQ-9 score of 10 falls in the moderate symptom range and is a commonly studied cutoff for considering further professional evaluation. It does not mean you have depression, and the score alone cannot determine treatment. A clinician considers symptoms, functioning, safety, history, possible medical causes, and your preferences." },
  { question: "What does a PHQ-9 score of 15 mean?", answer: "A score of 15 falls in the moderately severe symptom range (15–19), based on self-reported symptoms during the past two weeks. Consider seeking a professional evaluation. A clinician can assess your individual context and discuss options; the score alone cannot diagnose depression or determine treatment." },
  { question: "Is a PHQ-9 score of 5 something to worry about?", answer: "A PHQ-9 score of 5 falls at the boundary between minimal (0–4) and mild (5–9) symptom ranges. The number alone cannot determine whether care is needed. Consider how long symptoms have lasted, whether they are worsening, how they affect daily life, and whether there are any safety concerns." },
  { question: "Can I retake the PHQ-9 to see if my score changes?", answer: "Yes. The PHQ-9 asks about the past two weeks, so a later score may change as symptoms and circumstances change. If you use repeated scores to track symptoms or care, ask a healthcare professional how often to repeat it and how to interpret changes in context." },
  { question: "How accurate is the PHQ-9 as a depression screening tool?", answer: "The PHQ-9 is one of the most extensively validated depression screening instruments in clinical research. Studies show sensitivity of 88% and specificity of 88% for detecting major depressive disorder at a cutoff of 10. However, no screening tool is perfect, false positives and false negatives occur, which is why professional follow-up is important." },
  { question: "Does a high PHQ-9 score mean I have clinical depression?", answer: "A high PHQ-9 score does not confirm a clinical assessment of depression. The PHQ-9 is a screening tool that identifies people who may benefit from further evaluation. Many factors, grief, medical conditions, life circumstances, sleep deprivation, can elevate your score without indicating a depressive disorder. A healthcare provider considers your full context." },
  { question: "What should I do if my PHQ-9 score is high?", answer: "If your PHQ-9 score is in the moderate (10–14), moderately severe (15–19), or severe (20–27) range, consider scheduling an appointment with a healthcare provider. You can bring your screening results to give them context. If you are in crisis, contact the 988 Suicide & Crisis Lifeline (call or text 988) or SAMHSA at 1-800-662-4357." },
  { question: "What does question 9 on the PHQ-9 mean?", answer: "Question 9 asks about thoughts of self-harm or that you would be better off dead. Any positive response to this question is taken seriously in clinical settings, regardless of total score. If you endorsed this item, please reach out to a crisis resource: call or text 988 for the Suicide & Crisis Lifeline." },
];

export const metadata: Metadata = createMetadata({
  path: "/phq-9-score-interpretation",
  title: "PHQ-9 Score Interpretation: What Your Score Means",
  description:
    "Understand PHQ-9 symptom ranges, their limits, and when to consider professional evaluation. A score cannot diagnose depression or determine treatment.",
});

export default function PHQ9ScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "PHQ-9 Score Interpretation: What Your Results Mean",
              description: "Understand PHQ-9 symptom ranges, their limits, and when to consider professional evaluation. A score cannot diagnose depression or determine treatment.",
              url: TOOL_URL,
              datePublished: "2025-06-01",
              dateModified: "2026-08-02",
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
              { name: "PHQ-9 Self-Check", url: `${SITE_URL}/phq-9-depression-test` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guide to the PHQ-9's published symptom ranges, commonly studied cutoff, limits, and professional follow-up considerations."
          who="Adults who completed the PHQ-9 and want context for the score before discussing symptoms with a qualified healthcare professional."
          bottomLine="A score summarizes self-reported symptom frequency. It cannot diagnose depression or determine treatment; individual clinical context and safety matter."
          lastUpdated="2026-08-02"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <div className="border-l-4 border-sage-200 dark:border-sage-800 pl-4 my-6">
  <div className="flex flex-col gap-1">
    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
      Published by MindCheck Tools
    </p>
    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mt-1">
      <span>
        Published:{" "}
        <time dateTime="2025-01-01">
          {new Date("2025-01-01T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
      <span>
        Last reviewed:{" "}
        <time dateTime="2026-08-02">
          {new Date("2026-08-02T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </span>
    </div>
  </div>
</div>
      </div>


      <ScoreInterpretationLayout
        testName="PHQ-9"
        testAbbreviation="PHQ-9"
        toolPageHref="/phq-9-depression-test"
        lastUpdated="August 2, 2026"
        intro={[
          "The PHQ-9 (Patient Health Questionnaire-9) is a published nine-item depression screening instrument developed by Drs. Spitzer, Williams, and Kroenke. It summarizes the frequency of self-reported depression-related symptoms over the past two weeks.",
          "Each of the nine questions is scored from 0 (not at all) to 3 (nearly every day), producing a total between 0 and 27. The score maps to five published symptom ranges: none/minimal (0\u20134), mild (5\u20139), moderate (10\u201314), moderately severe (15\u201319), and severe (20\u201327). These ranges do not diagnose depression or determine treatment.",
          "Clinicians may use repeated PHQ-9 scores as one part of monitoring symptoms during care. Any change needs to be interpreted with symptoms, functioning, safety, history, and other clinical context. A healthcare professional can advise whether and when repeating the questionnaire is useful for you.",
          "Below, you will find explanations of each symptom range, the limits of a score, factors that can affect results, and questions to discuss with a healthcare provider.",
        ]}
        scoreRanges={[
          { range: "0–4", label: "Minimal", meaning: "Few or no depressive symptoms reported over the past two weeks", nextStep: "Continue monitoring your well-being; retake if things change", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "5–9", label: "Mild", meaning: "Some depressive symptoms present but generally manageable", nextStep: "Monitor over the next few weeks; consider speaking with a provider if symptoms persist", colorClass: "bg-sage-50/30 dark:bg-sage-950/10", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "10–14", label: "Moderate", meaning: "Noticeable depressive symptoms that may be affecting daily functioning", nextStep: "Consider scheduling an appointment with a healthcare provider for further evaluation", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "15–19", label: "Moderately Severe", meaning: "Significant depressive symptoms affecting multiple areas of daily life", nextStep: "Speaking with a healthcare professional is strongly encouraged; active support is available", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
          { range: "20–27", label: "Severe", meaning: "Severe depressive symptoms requiring prompt attention", nextStep: "Please reach out to a healthcare professional as soon as possible; you deserve support", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
        ]}
        cannotTellYou={[
          "The PHQ-9 is a screening tool, not a clinical assessment. A single score from a self-check cannot capture the full picture of your mental health. It does not account for your medical history, life circumstances, personality, coping resources, or the context behind your answers.",
          "Your score can change from week to week based on sleep, stress, physical illness, and recent events. A high score on one occasion does not define you, and a low score does not guarantee the absence of depression. Screening tools are a starting point for reflection and conversation, not an endpoint.",
        ]}
        scoreBands={[
          {
            heading: "PHQ-9 Score 0–4: Minimal or No Depressive Symptoms",
            paragraphs: [
              "A score in the 0\u20134 range suggests that you reported few or no depressive symptoms over the past two weeks. People in this range typically describe feeling generally well, with normal variations in mood and energy that do not significantly interfere with daily life.",
              "A minimal-range score does not rule out a mental health concern and cannot determine whether care is needed. Consider your functioning, how long symptoms have lasted, changes over time, and any safety concerns.",
              "If you remain concerned despite a low score, symptoms worsen, or daily life is affected, consider speaking with a qualified healthcare professional. Seek urgent help for immediate safety concerns regardless of the total score.",
            ],
          },
          {
            heading: "PHQ-9 Score 5–9: Mild Depressive Symptoms",
            paragraphs: [
              "A score of 5–9 suggests mild depressive symptoms. You may be noticing low mood, reduced interest, or changes in sleep or energy that are present but not yet severely disrupting your life. Many people in this range describe feeling 'off' without being able to pinpoint exactly why.",
              "The score alone cannot determine what action or treatment is appropriate. If symptoms persist, worsen, affect daily life, or raise safety concerns, consider a professional evaluation so your individual context can be assessed.",
            ],
          },
          {
            heading: "PHQ-9 Score 10\u201314: Moderate Depressive Symptoms",
            paragraphs: [
              "A score of 10\u201314 falls in the moderate symptom range. A score of 10 is a commonly studied screening cutoff for considering further evaluation, but the number alone cannot establish a diagnosis, functional impact, or treatment plan.",
              "Research shows that a PHQ-9 score of 10 has the best balance of sensitivity and specificity for identifying major depression. If you scored in this range, scheduling an appointment with a healthcare provider is a reasonable next step. You can bring your screening results to help frame the conversation.",
              "A healthcare professional can review symptoms, functioning, safety, medical history, possible alternative causes, and your preferences before discussing whether any care options are appropriate.",
            ],
          },
          {
            heading: "PHQ-9 Score 15–19: Moderately Severe Depressive Symptoms",
            paragraphs: [
              "A score in the 15–19 range suggests that depressive symptoms are significantly impacting your quality of life. People in this range often report difficulty maintaining daily responsibilities, withdrawal from relationships, persistent feelings of worthlessness or guilt, and changes in sleep and appetite that feel hard to manage.",
              "This range is a reason to seek professional evaluation. A clinician can consider symptoms, functioning, safety, history, other possible causes, and your preferences before discussing options. The score alone cannot determine whether therapy, medication, or another approach is appropriate.",
            ],
          },
          {
            heading: "PHQ-9 Score 20\u201327: Severe Depressive Symptoms",
            paragraphs: [
              "A score of 20\u201327 indicates severe depressive symptoms that are pervasive and significantly impairing daily functioning. People in this range often describe feeling overwhelmed, unable to complete basic tasks, and experiencing hopelessness or helplessness that feels constant.",
              "If you scored in this range, consider seeking prompt professional evaluation. A clinician can assess safety, functioning, history, possible alternative causes, and your preferences. Treatment decisions require individual clinical context and cannot be made from a PHQ-9 score alone.",
              "If you are in crisis or having thoughts of self-harm, contact the 988 Suicide & Crisis Lifeline (call or text 988) or SAMHSA National Helpline (1-800-662-4357) immediately. You do not need to face this alone.",
            ],
          },
        ]}
        factorsAffecting={[
          "Time of day, mood often varies throughout the day, with many people feeling worse in the morning",
          "Sleep quality, poor sleep in the days before the screening can elevate your score significantly",
          "Recent stressful events, a major life change, loss, or conflict may temporarily increase symptoms",
          "Physical illness, chronic pain, hormonal changes, thyroid disorders, and infections can mimic depressive symptoms",
          "Medication side effects, some medications can affect mood, energy, and sleep patterns",
          "Substance use, alcohol, cannabis, and other substances can worsen or mask depressive symptoms",
          "How literally you interpret questions, some people over- or under-report based on their interpretation style",
        ]}
        doctorConversation={[
          "Bringing your PHQ-9 score to a healthcare appointment gives your provider a concrete starting point. Many primary care offices already use the PHQ-9, so your doctor will likely be familiar with the scoring system and what each range means clinically.",
          "You might say: \"I took a PHQ-9 screening online and scored [your score]. I have been feeling [describe your main symptoms] for about [how long]. I wanted to talk about what this might mean and whether there is anything I should do.\"",
          "There is no wrong way to bring it up. The fact that you took a screening and are asking questions shows self-awareness, that alone is a positive step. Your provider can help determine whether further evaluation, therapy, medication, lifestyle changes, or some combination is most appropriate for your situation.",
          "If you feel uncomfortable raising mental health concerns directly, you can also frame the conversation around specific symptoms: sleep problems, persistent fatigue, or difficulty concentrating. Many primary care physicians are experienced at recognizing when these symptoms point to depression and can guide the conversation from there.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the PHQ-9", description: "Free, private 9-question depression self-check", href: "/phq-9-depression-test" },
          { name: "GAD-7 Anxiety Self-Check", description: "7-question validated anxiety screening tool", href: "/gad-7-anxiety-test" },
          { name: "DASS-21 Scale", description: "Measures depression, anxiety, and stress together", href: "/dass-21-depression-anxiety-stress" },
        ]}
        sources={[
          { text: "Kroenke, K., Spitzer, R. L., & Williams, J. B. (2001). The PHQ-9: validity of a brief depression severity measure. J Gen Intern Med, 16(9), 606–613.", url: "https://pubmed.ncbi.nlm.nih.gov/11556941/" },
          { text: "Manea, L., Gilbody, S., & McMillan, D. (2012). Optimal cut-off score for diagnosing depression with the PHQ-9. CMAJ, 184(3), E191–E196.", url: "https://pubmed.ncbi.nlm.nih.gov/22184363/" },
          { text: "National Institute of Mental Health, Depression overview", url: "https://www.nimh.nih.gov/health/topics/depression" },
        ]}
      />
    </>
  );
}

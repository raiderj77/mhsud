import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/phq-9-score-interpretation`;

const FAQ_DATA = [
  { question: "What does a PHQ-9 score of 10 mean?", answer: "A PHQ-9 score of 10 falls in the moderate range, suggesting you may be experiencing depressive symptoms that are affecting your daily life. This is the threshold at which many clinicians consider further evaluation and discuss treatment options. It does not mean you have depression — only a professional assessment can determine that." },
  { question: "What does a PHQ-9 score of 15 mean?", answer: "A score of 15 on the PHQ-9 falls in the moderately severe range (15–19). This suggests significant depressive symptoms over the past two weeks. At this level, healthcare providers typically recommend active treatment, which may include therapy, medication, or a combination. Speaking with a professional is strongly encouraged." },
  { question: "Is a PHQ-9 score of 5 something to worry about?", answer: "A PHQ-9 score of 5 falls at the boundary between minimal (0–4) and mild (5–9) symptom levels. It suggests you may be experiencing some low-level depressive symptoms. While this is generally not cause for alarm, monitoring your mood over the coming weeks and retaking the screening can help you decide if further support would be helpful." },
  { question: "Can I retake the PHQ-9 to see if my score changes?", answer: "Yes — the PHQ-9 measures symptoms over the past two weeks, so your score can change as your circumstances change. Retaking it every 2–4 weeks is a good way to track trends. Clinicians often use repeated PHQ-9 scores to monitor treatment progress." },
  { question: "How accurate is the PHQ-9 as a depression screening tool?", answer: "The PHQ-9 is one of the most extensively validated depression screening instruments in clinical research. Studies show sensitivity of 88% and specificity of 88% for detecting major depressive disorder at a cutoff of 10. However, no screening tool is perfect — false positives and false negatives occur, which is why professional follow-up is important." },
  { question: "Does a high PHQ-9 score mean I have clinical depression?", answer: "A high PHQ-9 score does not confirm a clinical assessment of depression. The PHQ-9 is a screening tool that identifies people who may benefit from further evaluation. Many factors — grief, medical conditions, life circumstances, sleep deprivation — can elevate your score without indicating a depressive disorder. A healthcare provider considers your full context." },
  { question: "What should I do if my PHQ-9 score is high?", answer: "If your PHQ-9 score is in the moderate (10–14), moderately severe (15–19), or severe (20–27) range, consider scheduling an appointment with a healthcare provider. You can bring your screening results to give them context. If you are in crisis, contact the 988 Suicide & Crisis Lifeline (call or text 988) or SAMHSA at 1-800-662-4357." },
  { question: "What does question 9 on the PHQ-9 mean?", answer: "Question 9 asks about thoughts of self-harm or that you would be better off dead. Any positive response to this question is taken seriously in clinical settings, regardless of total score. If you endorsed this item, please reach out to a crisis resource: call or text 988 for the Suicide & Crisis Lifeline." },
];

export const metadata: Metadata = createMetadata({
  path: "/phq-9-score-interpretation",
  title: "PHQ-9 Score Interpretation: What Your Score Means",
  description:
    "Understand your PHQ-9 depression score. See what each range means, when to seek help, and how to discuss results with your doctor.",
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
              description: "Understand your PHQ-9 depression score. See what each range means, when to seek help, and how to discuss results with your doctor.",
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
              { name: "PHQ-9 Self-Check", url: `${SITE_URL}/phq-9-depression-test` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guide explaining PHQ-9 depression scores, severity levels, clinical cutoffs, and recommended actions for each range."
          who="Anyone who has completed the PHQ-9 and wants to understand what their depression score means clinically."
          bottomLine="PHQ-9 scores range from minimal to severe depression — scores of 10 or above warrant professional follow-up. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>


      <ScoreInterpretationLayout
        testName="PHQ-9"
        testAbbreviation="PHQ-9"
        toolPageHref="/phq-9-depression-test"
        blogGuideHref="/blog/phq-9-guide"
        lastUpdated="March 14, 2026"
        intro={[
          "The PHQ-9 (Patient Health Questionnaire-9) is a nine-item depression screening instrument developed by Drs. Spitzer, Williams, and Kroenke. It is one of the most widely used depression screening tools in primary care, research, and community settings worldwide. Your score reflects the frequency of depressive symptoms over the past two weeks.",
          "Each of the nine questions is scored from 0 (not at all) to 3 (nearly every day), producing a total between 0 and 27. The score maps to five severity levels used in clinical research to guide next steps: none/minimal (0\u20134), mild (5\u20139), moderate (10\u201314), moderately severe (15\u201319), and severe (20\u201327).",
          "Clinicians use the PHQ-9 both as an initial screening tool and as a progress measure during treatment. A drop of 5 or more points from one administration to the next is generally considered a clinically meaningful improvement. Because the PHQ-9 asks about the past two weeks, it can be readministered every 2\u20134 weeks to track changes over time \u2014 making it valuable for patients and providers working together toward recovery.",
          "Understanding your score is the first step. Below, you will find detailed explanations of each score range, guidance on what to do next, factors that can affect your results, and tips for discussing your score with a healthcare provider.",
        ]}
        scoreRanges={[
          { range: "0–4", label: "Minimal", meaning: "Few or no depressive symptoms reported over the past two weeks", nextStep: "Continue monitoring your well-being; retake if things change", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "5–9", label: "Mild", meaning: "Some depressive symptoms present but generally manageable", nextStep: "Monitor over the next few weeks; consider speaking with a provider if symptoms persist", colorClass: "bg-sage-50/30 dark:bg-sage-950/10", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "10–14", label: "Moderate", meaning: "Noticeable depressive symptoms that may be affecting daily functioning", nextStep: "Consider scheduling an appointment with a healthcare provider for further evaluation", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "15–19", label: "Moderately Severe", meaning: "Significant depressive symptoms affecting multiple areas of daily life", nextStep: "Speaking with a healthcare professional is strongly encouraged; active support is available", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
          { range: "20–27", label: "Severe", meaning: "Severe depressive symptoms requiring prompt attention", nextStep: "Please reach out to a healthcare professional as soon as possible; you deserve support", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
        ]}
        cannotTellYou={[
          "The PHQ-9 is a screening tool — not a clinical assessment. A single score from a self-check cannot capture the full picture of your mental health. It does not account for your medical history, life circumstances, personality, coping resources, or the context behind your answers.",
          "Your score can change from week to week based on sleep, stress, physical illness, and recent events. A high score on one occasion does not define you, and a low score does not guarantee the absence of depression. Screening tools are a starting point for reflection and conversation — not an endpoint.",
        ]}
        scoreBands={[
          {
            heading: "PHQ-9 Score 0–4: Minimal or No Depressive Symptoms",
            paragraphs: [
              "A score in the 0\u20134 range suggests that you reported few or no depressive symptoms over the past two weeks. People in this range typically describe feeling generally well, with normal variations in mood and energy that do not significantly interfere with daily life.",
              "If you feel well and your score confirms that, no further action is needed. Continue engaging in habits that support your mental health \u2014 regular sleep, physical activity, social connection, and activities you enjoy. If you notice changes in the future, retaking the PHQ-9 can help you catch emerging patterns early.",
              "Even with a minimal score, it can be valuable to establish a baseline. Knowing what your typical PHQ-9 score looks like when you feel well makes future changes easier to spot. Some people find it helpful to retake the screening periodically \u2014 for example, during transitions like starting a new job, moving, or experiencing a loss.",
            ],
          },
          {
            heading: "PHQ-9 Score 5–9: Mild Depressive Symptoms",
            paragraphs: [
              "A score of 5–9 suggests mild depressive symptoms. You may be noticing low mood, reduced interest, or changes in sleep or energy that are present but not yet severely disrupting your life. Many people in this range describe feeling 'off' without being able to pinpoint exactly why.",
              "At this level, monitoring is the most common recommendation. Pay attention to whether symptoms persist, worsen, or fluctuate. Lifestyle adjustments — improved sleep hygiene, exercise, stress management, and social support — can be particularly effective for mild symptoms. If symptoms last more than two weeks, consider speaking with a healthcare provider.",
            ],
          },
          {
            heading: "PHQ-9 Score 10\u201314: Moderate Depressive Symptoms",
            paragraphs: [
              "A score of 10\u201314 is the clinical threshold at which many providers begin to discuss further evaluation and potential treatment options. At this level, depressive symptoms are likely affecting your daily functioning \u2014 work productivity, relationships, self-care, or the ability to experience pleasure.",
              "Research shows that a PHQ-9 score of 10 has the best balance of sensitivity and specificity for identifying major depression. If you scored in this range, scheduling an appointment with a healthcare provider is a reasonable next step. You can bring your screening results to help frame the conversation.",
              "At the moderate level, evidence-based options include psychotherapy (particularly cognitive behavioral therapy and interpersonal therapy), lifestyle modifications, and in some cases medication. Many people at this level respond well to therapy alone. Your provider can help determine which approach fits your situation and preferences.",
            ],
          },
          {
            heading: "PHQ-9 Score 15–19: Moderately Severe Depressive Symptoms",
            paragraphs: [
              "A score in the 15–19 range suggests that depressive symptoms are significantly impacting your quality of life. People in this range often report difficulty maintaining daily responsibilities, withdrawal from relationships, persistent feelings of worthlessness or guilt, and changes in sleep and appetite that feel hard to manage.",
              "Healthcare providers typically recommend active treatment at this level — which may include psychotherapy (particularly cognitive behavioral therapy), medication, or a combination. Speaking with a professional is strongly encouraged. You do not have to manage these feelings alone, and effective help is available.",
            ],
          },
          {
            heading: "PHQ-9 Score 20\u201327: Severe Depressive Symptoms",
            paragraphs: [
              "A score of 20\u201327 indicates severe depressive symptoms that are pervasive and significantly impairing daily functioning. People in this range often describe feeling overwhelmed, unable to complete basic tasks, and experiencing hopelessness or helplessness that feels constant.",
              "If you scored in this range, please consider reaching out to a healthcare professional as soon as possible. Effective treatments exist even for severe depression. A combination of psychotherapy and medication has the strongest evidence base for severe depression, and many people experience meaningful improvement within weeks of beginning treatment.",
              "If you are in crisis or having thoughts of self-harm, contact the 988 Suicide & Crisis Lifeline (call or text 988) or SAMHSA National Helpline (1-800-662-4357) immediately. You do not need to face this alone.",
            ],
          },
        ]}
        factorsAffecting={[
          "Time of day — mood often varies throughout the day, with many people feeling worse in the morning",
          "Sleep quality — poor sleep in the days before the screening can elevate your score significantly",
          "Recent stressful events — a major life change, loss, or conflict may temporarily increase symptoms",
          "Physical illness — chronic pain, hormonal changes, thyroid disorders, and infections can mimic depressive symptoms",
          "Medication side effects — some medications can affect mood, energy, and sleep patterns",
          "Substance use — alcohol, cannabis, and other substances can worsen or mask depressive symptoms",
          "How literally you interpret questions — some people over- or under-report based on their interpretation style",
        ]}
        doctorConversation={[
          "Bringing your PHQ-9 score to a healthcare appointment gives your provider a concrete starting point. Many primary care offices already use the PHQ-9, so your doctor will likely be familiar with the scoring system and what each range means clinically.",
          "You might say: \"I took a PHQ-9 screening online and scored [your score]. I have been feeling [describe your main symptoms] for about [how long]. I wanted to talk about what this might mean and whether there is anything I should do.\"",
          "There is no wrong way to bring it up. The fact that you took a screening and are asking questions shows self-awareness \u2014 that alone is a positive step. Your provider can help determine whether further evaluation, therapy, medication, lifestyle changes, or some combination is most appropriate for your situation.",
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
          { text: "National Institute of Mental Health — Depression overview", url: "https://www.nimh.nih.gov/health/topics/depression" },
        ]}
      />
    </>
  );
}

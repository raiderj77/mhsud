import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";

const TOOL_URL = `${SITE_URL}/mdq-score-interpretation`;

const FAQ_DATA = [
  { question: "What does a positive MDQ screen mean?", answer: "A positive MDQ screen means you met all three criteria: 7 or more 'yes' answers in Part 1 (symptom questions), confirmation in Part 2 that several symptoms occurred during the same time period, and reporting moderate or serious functional impairment in Part 3. This suggests your symptom pattern is consistent with a bipolar spectrum condition and that a comprehensive evaluation by a mental health professional is recommended. A positive screen is not a bipolar assessment." },
  { question: "What does a negative MDQ screen mean?", answer: "A negative screen means you did not meet all three MDQ criteria. This could mean you endorsed fewer than 7 symptoms, that your symptoms did not co-occur during the same period, or that they did not cause significant impairment. A negative screen does not rule out bipolar disorder — the MDQ has moderate sensitivity and may miss some cases, particularly bipolar II disorder, where hypomanic episodes can be subtle and harder to self-identify." },
  { question: "How is the MDQ scored?", answer: "The MDQ uses a three-part screening approach. Part 1 asks 13 yes/no questions about manic and hypomanic symptoms (7 or more 'yes' needed). Part 2 asks whether several of those symptoms happened during the same time period ('yes' needed). Part 3 asks about the level of impairment caused by those symptoms ('moderate' or 'serious' needed). All three parts must be positive for an overall positive screen." },
  { question: "Can the MDQ detect bipolar II disorder?", answer: "The MDQ was originally designed to screen for bipolar I disorder and has higher sensitivity for detecting manic episodes than hypomanic episodes. Research shows the MDQ may miss up to 40–50% of bipolar II cases because hypomanic episodes are often experienced as positive or productive rather than problematic, making them harder to self-identify. If you suspect bipolar II, discussing your concerns with a clinician is recommended even if your MDQ screen is negative." },
  { question: "What is the difference between bipolar I and bipolar II?", answer: "Bipolar I involves full manic episodes — periods of abnormally elevated mood, energy, and activity that last at least 7 days or require hospitalization. Bipolar II involves hypomanic episodes (shorter and less severe than full mania) alternating with major depressive episodes. Both are serious conditions that benefit from professional evaluation and treatment. The MDQ is more sensitive to bipolar I patterns." },
  { question: "Should I see a psychiatrist if my MDQ is positive?", answer: "A positive MDQ screen suggests that evaluation by a mental health professional — ideally a psychiatrist or psychologist experienced with mood disorders — is a reasonable next step. You can share your MDQ results with your primary care doctor first if that feels more comfortable. A comprehensive bipolar evaluation includes a detailed mood history, family history, assessment of episode timing and duration, and ruling out other conditions." },
  { question: "Can depression medication trigger bipolar symptoms?", answer: "In some cases, antidepressant medication can trigger manic or hypomanic episodes in people with unrecognized bipolar disorder. This is one reason accurate screening is important — if bipolar disorder is present, treatment approaches differ significantly from those used for unipolar depression. If you have experienced mood elevation, decreased need for sleep, or unusual energy after starting an antidepressant, discuss this with your prescriber." },
  { question: "How accurate is the MDQ as a bipolar screening tool?", answer: "In clinical settings, the MDQ has a sensitivity of approximately 73% and specificity of approximately 90% for bipolar spectrum disorders. In community samples, sensitivity may be lower (around 28%) due to the subtlety of hypomanic symptoms. The MDQ works best as an initial screening tool in clinical populations and should always be followed by professional evaluation for a definitive determination." },
];

export const metadata: Metadata = createMetadata({
  path: "/mdq-score-interpretation",
  title: "MDQ Bipolar Score Interpretation: What It Means",
  description:
    "Understand your MDQ bipolar screening results. Learn what a positive or negative screen means, MDQ scoring, and when to seek evaluation.",
});

export default function MDQScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "MDQ Bipolar Score Interpretation: What Your Results Mean",
              description: "Understand your MDQ bipolar screening results. Learn what a positive or negative screen means, MDQ scoring, and when to seek evaluation.",
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
              { name: "MDQ Bipolar Screening", url: `${SITE_URL}/mdq-bipolar-screening` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />

      <ScoreInterpretationLayout
        testName="MDQ"
        testAbbreviation="MDQ"
        toolPageHref="/mdq-bipolar-screening"
        lastUpdated="March 7, 2026"
        intro={[
          "The MDQ (Mood Disorder Questionnaire) is a brief screening tool designed to help identify individuals who may have a bipolar spectrum condition. Developed by Dr. Robert Hirschfeld and colleagues, the MDQ is one of the most widely used bipolar screening instruments in both clinical and research settings. It is not a continuous scoring tool — instead, it uses a three-part criteria system to determine whether your symptom pattern warrants further evaluation.",
          "Unlike screeners that produce a single numerical score, the MDQ evaluates three dimensions: symptom endorsement (Part 1), symptom co-occurrence (Part 2), and functional impairment (Part 3). All three parts must meet their respective thresholds for the screen to be considered positive. This multi-part approach helps reduce false positives by ensuring that endorsed symptoms actually cluster together and cause real-world problems.",
          "The MDQ focuses primarily on manic and hypomanic symptoms — periods of unusually elevated mood, energy, decreased need for sleep, rapid speech, racing thoughts, and impulsive behavior. It does not directly assess depressive episodes, though depression is a major component of bipolar disorder. Understanding the MDQ's scope helps you interpret your results in context.",
        ]}
        scoreRanges={[
          { range: "Part 1: < 7 'yes'", label: "Criterion Not Met", meaning: "Fewer than 7 manic/hypomanic symptoms endorsed — first criterion for positive screen not met", nextStep: "Screen is negative based on Part 1 alone; monitor if mood concerns persist", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "Part 1: 7+ 'yes'", label: "Criterion Met", meaning: "7 or more manic/hypomanic symptoms endorsed — first criterion met, Parts 2 and 3 still needed", nextStep: "Continue to Parts 2 and 3 to determine overall screen result", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "Part 2: 'Yes'", label: "Co-occurrence Confirmed", meaning: "Several symptoms occurred together during the same time period", nextStep: "Second criterion met; Part 3 result determines final screen outcome", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "Part 3: Moderate/Serious", label: "Impairment Confirmed", meaning: "Symptoms caused moderate or serious problems in functioning", nextStep: "If all three parts are positive, screen is positive — professional evaluation recommended", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
          { range: "All 3 parts positive", label: "Positive Screen", meaning: "Symptom pattern is consistent with a bipolar spectrum condition", nextStep: "A comprehensive mood disorder evaluation by a mental health professional is strongly recommended", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
        ]}
        cannotTellYou={[
          "The MDQ is a screening tool — not a clinical assessment. A positive screen does not mean you have bipolar disorder, and a negative screen does not mean you do not. The MDQ measures self-reported symptoms at a single point in time and cannot account for your complete mood history, family background, medical conditions, or the nuanced clinical judgment required to distinguish bipolar disorder from other conditions.",
          "The MDQ is better at detecting bipolar I disorder (which involves full manic episodes) than bipolar II disorder (which involves subtler hypomanic episodes). Many people experience hypomanic episodes as pleasant or productive rather than problematic, which can lead to underreporting on the MDQ. If you have concerns about mood instability, discussing them with a clinician is valuable regardless of your screening result.",
        ]}
        scoreBands={[
          {
            heading: "Negative Screen: Symptom Pattern Less Consistent With Bipolar Disorder",
            paragraphs: [
              "A negative MDQ screen means that one or more of the three criteria were not met. This could mean you endorsed fewer than 7 symptoms in Part 1, that your symptoms did not co-occur during the same time period (Part 2), or that they did not cause moderate or serious impairment (Part 3). In any of these cases, the overall screen is negative.",
              "A negative screen suggests that your current self-reported symptom pattern is less consistent with a bipolar spectrum condition as measured by this tool. However, the MDQ has known limitations — particularly in detecting bipolar II disorder, where hypomanic episodes may be short-lived, subjectively positive, and harder to recognize in retrospect. Research shows the MDQ misses approximately 27–50% of bipolar cases depending on the population.",
              "If you have ongoing concerns about mood swings, periods of unusually high energy followed by crashes, impulsive behavior during elevated mood states, or a family history of bipolar disorder, discussing these with a mental health professional is still worthwhile — even with a negative screen. Your lived experience is important clinical information.",
            ],
          },
          {
            heading: "Positive Screen: Symptom Pattern Consistent With Bipolar Spectrum",
            paragraphs: [
              "A positive MDQ screen means all three criteria were met: you endorsed 7 or more manic/hypomanic symptoms, those symptoms co-occurred during the same time period, and they caused moderate or serious functional impairment. This pattern is consistent with a bipolar spectrum condition and warrants a comprehensive evaluation by a qualified mental health professional.",
              "A positive screen on the MDQ has a specificity of approximately 90% in clinical settings, meaning false positives are relatively uncommon. If your screen was positive, there is a meaningful statistical basis for pursuing a full diagnostic evaluation. A comprehensive assessment will include a detailed mood history (both highs and lows), family history review, timeline of episodes, functional impairment assessment, and consideration of other conditions that could explain your symptoms.",
              "Bipolar disorder is a treatable condition. Evidence-based approaches include mood stabilizing medications, psychotherapy (particularly psychoeducation, CBT, and interpersonal/social rhythm therapy), and lifestyle strategies. Many people with bipolar disorder lead full and productive lives with appropriate support. Getting an accurate assessment is the essential first step toward effective management.",
            ],
          },
        ]}
        factorsAffecting={[
          "Recall bias — the MDQ asks about lifetime experiences, and accurately remembering past mood episodes can be difficult",
          "Perception of hypomanic episodes — many people experience hypomania as positive (high energy, productivity, confidence) and may not endorse those periods as 'problems'",
          "Current mood state — your current mood can influence how you recall and report past experiences",
          "Co-occurring substance use — alcohol, stimulants, and other substances can produce mood symptoms that overlap with bipolar features",
          "Cultural factors — norms around emotional expression and how symptoms are described vary across cultures",
          "Co-occurring conditions — anxiety, ADHD, borderline personality features, and hormonal conditions can produce mood instability that overlaps with bipolar symptoms",
          "Medication effects — certain medications (corticosteroids, antidepressants, stimulants) can trigger mood elevation that may be difficult to distinguish from bipolar symptoms",
        ]}
        doctorConversation={[
          "Bringing your MDQ results to a healthcare appointment provides a useful framework for discussing mood-related concerns. Many psychiatrists and primary care physicians are familiar with the MDQ and its interpretation.",
          "You might say: \"I completed a Mood Disorder Questionnaire online and my screen was [positive/negative]. I have been concerned about [describe your main concerns — mood swings, periods of high energy followed by lows, impulsive behavior, sleep pattern changes]. I wanted to discuss whether a bipolar evaluation might be appropriate.\"",
          "Be prepared to discuss specific examples of mood episodes — times when your energy, sleep, or behavior was notably different from your baseline. Information about how long episodes lasted, what triggered them, and how they affected your functioning is particularly valuable. If you have a family history of bipolar disorder or mood disorders, sharing that is also helpful. Your provider may recommend a comprehensive mood disorder evaluation, which will look at both the elevated and depressive sides of your mood history.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the MDQ", description: "Free, private bipolar screening self-check", href: "/mdq-bipolar-screening" },
          { name: "PHQ-9 Depression Self-Check", description: "9-question validated depression screening tool", href: "/phq-9-depression-test" },
          { name: "DASS-21 Scale", description: "Measures depression, anxiety, and stress together", href: "/dass-21-depression-anxiety-stress" },
        ]}
        sources={[
          { text: "Hirschfeld, R. M., et al. (2000). Development and validation of a screening instrument for bipolar spectrum disorder: the Mood Disorder Questionnaire. Am J Psychiatry, 157(11), 1873–1875.", url: "https://pubmed.ncbi.nlm.nih.gov/11058490/" },
          { text: "Hirschfeld, R. M., et al. (2003). Screening for bipolar disorder in the community. J Clin Psychiatry, 64(1), 53–59.", url: "https://pubmed.ncbi.nlm.nih.gov/12590624/" },
          { text: "National Institute of Mental Health — Bipolar Disorder overview", url: "https://www.nimh.nih.gov/health/topics/bipolar-disorder" },
        ]}
      />
    </>
  );
}

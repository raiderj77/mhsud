import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";
import AnswerBlock from "@/components/AnswerBlock";

const TOOL_URL = `${SITE_URL}/dass-21-score-interpretation`;

const FAQ_DATA = [
  { question: "What does a DASS-21 depression score of 14 mean?", answer: "A DASS-21 depression score of 14 (after multiplying by 2) falls in the moderate range (14\u201320). This suggests you may be experiencing depressive symptoms such as persistent low mood, lack of motivation, or difficulty finding meaning in activities. It does not confirm a clinical condition \u2014 only a qualified professional can make that determination after a comprehensive evaluation." },
  { question: "How do I calculate my DASS-21 subscale scores?", answer: "The DASS-21 has three subscales: depression (items 3, 5, 10, 13, 16, 17, 21), anxiety (items 2, 4, 7, 9, 15, 19, 20), and stress (items 1, 6, 8, 11, 12, 14, 18). Add the scores for each subscale separately, then multiply each total by 2. This converts your DASS-21 scores to their DASS-42 equivalents, which are used in the published severity ranges." },
  { question: "What is the difference between the DASS-21 and the DASS-42?", answer: "The DASS-42 is the original 42-item version, while the DASS-21 is a shorter 21-item version that takes roughly half the time to complete. Both measure the same three constructs \u2014 depression, anxiety, and stress. DASS-21 scores are multiplied by 2 to align with the original DASS-42 scoring thresholds used in clinical research." },
  { question: "Can the DASS-21 tell me if I have an anxiety disorder?", answer: "No. The DASS-21 is a screening tool, not a clinical assessment. The anxiety subscale measures symptoms of physiological arousal, panic, and fear, but it cannot distinguish between generalized anxiety disorder, panic disorder, social anxiety, or other conditions. A mental health professional can use the DASS-21 results alongside other information to help guide further evaluation." },
  { question: "Why does the DASS-21 measure depression, anxiety, and stress separately?", answer: "Depression, anxiety, and stress often overlap but are distinct experiences. The DASS-21 was specifically designed to discriminate between these three emotional states. Separating them helps identify which areas are most affected \u2014 for example, someone might score normal on depression but moderate on stress, pointing toward targeted coping strategies rather than a one-size-fits-all approach." },
  { question: "Is a high DASS-21 stress score the same as being stressed at work?", answer: "Not exactly. The DASS-21 stress subscale measures chronic emotional tension, irritability, difficulty relaxing, nervous arousal, and being easily agitated. While workplace stress can certainly contribute to a high score, the scale captures a broader pattern of sustained emotional reactivity that goes beyond any single stressor." },
  { question: "How often should I retake the DASS-21?", answer: "The DASS-21 measures symptoms over the past week, so your scores can shift as your circumstances change. Retaking it every 2\u20134 weeks is a reasonable approach if you are tracking your well-being. Clinicians sometimes administer the DASS-21 at regular intervals to monitor treatment progress across all three dimensions." },
  { question: "What should I do if all three DASS-21 subscale scores are elevated?", answer: "If your depression, anxiety, and stress scores are all in the moderate, severe, or extremely severe range, it suggests you may be experiencing significant emotional distress across multiple dimensions. Speaking with a healthcare provider is strongly encouraged. You can bring your subscale scores to the appointment to help frame the conversation. If you are in crisis, contact the 988 Suicide & Crisis Lifeline (call or text 988)." },
];

export const metadata: Metadata = createMetadata({
  path: "/dass-21-score-interpretation",
  title: "DASS-21 Score Interpretation: What Scores Mean",
  description:
    "Understand your DASS-21 depression, anxiety, and stress scores. See what each subscale range means and when to seek professional support.",
});

export default function DASS21ScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "DASS-21 Score Interpretation: What Your Results Mean",
              description: "Understand your DASS-21 depression, anxiety, and stress scores. See what each subscale range means and when to seek professional support.",
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
              { name: "DASS-21 Scale", url: `${SITE_URL}/dass-21-depression-anxiety-stress` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guide explaining DASS-21 scores across all three subscales with severity levels and recommended next steps."
          who="Anyone who has completed the DASS-21 and wants to understand their depression, anxiety, and stress scores."
          bottomLine="DASS-21 severity levels range from normal to extremely severe on each subscale independently. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>


      <ScoreInterpretationLayout
        testName="DASS-21"
        testAbbreviation="DASS-21"
        toolPageHref="/dass-21-depression-anxiety-stress"
        lastUpdated="March 7, 2026"
        intro={[
          "The DASS-21 (Depression Anxiety Stress Scales \u2014 21-item version) is a well-validated self-report instrument developed by Lovibond and Lovibond at the University of New South Wales. Unlike single-construct screeners, the DASS-21 measures three related but distinct emotional states \u2014 depression, anxiety, and stress \u2014 giving you a broader picture of your emotional well-being in a single screening.",
          "The DASS-21 contains 21 items divided equally across three 7-item subscales. Each item is scored from 0 (did not apply to me at all) to 3 (applied to me very much or most of the time) based on the past week. Because the DASS-21 is the short form of the original 42-item DASS, each subscale total is multiplied by 2 to produce a final score that maps to published severity thresholds.",
          "Your DASS-21 results give you three separate scores \u2014 one for depression, one for anxiety, and one for stress. Each subscale is interpreted independently using its own set of ranges. This means you could score normal on one subscale and severe on another, which is useful information for understanding exactly where you may need the most support.",
        ]}
        scoreRanges={[
          { range: "0\u20139", label: "Normal (Depression)", meaning: "Depression symptoms within the typical range for the general population", nextStep: "Continue monitoring; no specific action needed", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "10\u201313", label: "Mild (Depression)", meaning: "Slightly elevated depressive symptoms that may be worth noting", nextStep: "Monitor over the coming weeks; consider lifestyle adjustments", colorClass: "bg-sage-50/30 dark:bg-sage-950/10", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "14\u201320", label: "Moderate (Depression)", meaning: "Notable depressive symptoms that may be affecting daily functioning", nextStep: "Consider speaking with a healthcare provider for further evaluation", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "21\u201327", label: "Severe (Depression)", meaning: "Significant depressive symptoms requiring attention", nextStep: "Speaking with a healthcare professional is strongly encouraged", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
          { range: "28+", label: "Extremely Severe (Depression)", meaning: "Very high depressive symptoms requiring prompt support", nextStep: "Please reach out to a healthcare professional as soon as possible", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
          { range: "0\u20137", label: "Normal (Anxiety)", meaning: "Anxiety symptoms within the typical range for the general population", nextStep: "Continue monitoring; no specific action needed", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "8\u20139", label: "Mild (Anxiety)", meaning: "Slightly elevated anxiety symptoms that may be worth noting", nextStep: "Monitor over the coming weeks; consider relaxation or grounding techniques", colorClass: "bg-sage-50/30 dark:bg-sage-950/10", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "10\u201314", label: "Moderate (Anxiety)", meaning: "Notable anxiety symptoms such as physiological arousal or worry affecting daily life", nextStep: "Consider speaking with a healthcare provider for further evaluation", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "15\u201319", label: "Severe (Anxiety)", meaning: "Significant anxiety symptoms that may include panic, fear, or physical tension", nextStep: "Speaking with a healthcare professional is strongly encouraged", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
          { range: "20+", label: "Extremely Severe (Anxiety)", meaning: "Very high anxiety symptoms requiring prompt support", nextStep: "Please reach out to a healthcare professional as soon as possible", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
          { range: "0\u201314", label: "Normal (Stress)", meaning: "Stress symptoms within the typical range for the general population", nextStep: "Continue monitoring; no specific action needed", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "15\u201318", label: "Mild (Stress)", meaning: "Slightly elevated stress symptoms such as irritability or difficulty relaxing", nextStep: "Monitor over the coming weeks; consider stress management techniques", colorClass: "bg-sage-50/30 dark:bg-sage-950/10", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "19\u201325", label: "Moderate (Stress)", meaning: "Notable stress symptoms that may be affecting your ability to cope with daily demands", nextStep: "Consider speaking with a healthcare provider or counselor", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
          { range: "26\u201333", label: "Severe (Stress)", meaning: "Significant stress symptoms including persistent tension and agitation", nextStep: "Speaking with a healthcare professional is strongly encouraged", colorClass: "bg-orange-50/50 dark:bg-orange-950/20", textColorClass: "text-orange-700 dark:text-orange-400" },
          { range: "34+", label: "Extremely Severe (Stress)", meaning: "Very high stress symptoms requiring prompt support", nextStep: "Please reach out to a healthcare professional as soon as possible", colorClass: "bg-crisis-50/50 dark:bg-crisis-950/20", textColorClass: "text-crisis-700 dark:text-crisis-400" },
        ]}
        cannotTellYou={[
          "The DASS-21 is a screening tool \u2014 not a clinical assessment. It cannot tell you whether you have a depressive disorder, an anxiety disorder, or a clinical stress condition. These are complex determinations that require a trained professional who considers your history, context, and the full picture of your life.",
          "Your subscale scores reflect how you felt over the past week. A single week of elevated scores may reflect a temporary reaction to stressful events, poor sleep, physical illness, or other transient factors. Similarly, a low score during a good week does not rule out an underlying concern. Screening tools are a starting point for reflection \u2014 not a conclusion.",
        ]}
        scoreBands={[
          {
            heading: "DASS-21 Depression Subscale: What Each Range Means",
            paragraphs: [
              "The depression subscale of the DASS-21 focuses on dysphoria, hopelessness, devaluation of life, self-deprecation, lack of interest or involvement, anhedonia (inability to experience pleasure), and inertia. These items were designed to distinguish depression from anxiety and stress, focusing on what researchers call the low positive affect dimension.",
              "A normal score (0\u20139) suggests that depressive symptoms are within the expected range for the general population. A mild score (10\u201313) indicates slightly elevated symptoms that are worth monitoring. A moderate score (14\u201320) suggests depressive symptoms that may be noticeably affecting your motivation, energy, and ability to enjoy activities. Severe (21\u201327) and extremely severe (28+) scores indicate significant depressive experiences that warrant prompt professional attention.",
            ],
          },
          {
            heading: "DASS-21 Anxiety Subscale: What Each Range Means",
            paragraphs: [
              "The anxiety subscale measures autonomic arousal (dry mouth, breathing difficulty, heart pounding), skeletal muscle effects (trembling), situational anxiety, and subjective experiences of anxious affect and panic. This subscale aligns closely with what researchers call physiological hyperarousal, distinguishing it from the worry-focused construct measured by tools like the GAD-7.",
              "A normal score (0\u20137) suggests typical anxiety levels. A mild score (8\u20139) may reflect minor physical tension or situational nervousness. A moderate score (10\u201314) suggests more persistent anxiety symptoms that could include noticeable physical sensations, restlessness, or situational avoidance. Severe (15\u201319) and extremely severe (20+) scores indicate intense anxiety experiences that may significantly interfere with daily functioning and warrant professional support.",
            ],
          },
          {
            heading: "DASS-21 Stress Subscale: What Each Range Means",
            paragraphs: [
              "The stress subscale assesses difficulty relaxing, nervous arousal, being easily upset or agitated, irritability, over-reactivity, and impatience. Rather than measuring specific stressors in your life, it captures your overall level of chronic non-specific arousal \u2014 essentially, how wound up and on edge you feel as a baseline.",
              "A normal stress score (0\u201314) suggests your emotional tension is within the typical range. A mild score (15\u201318) may indicate that you are running at a slightly elevated baseline of tension. A moderate score (19\u201325) suggests persistent difficulty relaxing, frequent irritability, or a sense of being overwhelmed that is affecting your daily experience. Severe (26\u201333) and extremely severe (34+) scores indicate a high level of chronic agitation that may be affecting relationships, work performance, and physical health.",
            ],
          },
          {
            heading: "Understanding Patterns Across DASS-21 Subscales",
            paragraphs: [
              "One of the most valuable aspects of the DASS-21 is the ability to compare your three subscale scores. Some people find that all three are elevated together, which may indicate a broad pattern of emotional distress. Others discover that one subscale is significantly higher than the others, which can help focus where to direct attention and resources.",
              "For example, someone with high stress but normal depression and anxiety might benefit most from stress management strategies like progressive muscle relaxation, time management, or boundary-setting. Someone with high depression and normal stress might find more value in behavioral activation or addressing anhedonia. Sharing the full three-subscale profile with a healthcare provider gives them a more nuanced picture than any single score.",
            ],
          },
        ]}
        factorsAffecting={[
          "Recency of stressful events \u2014 the DASS-21 measures the past week, so a single difficult event can significantly shift all three scores",
          "Sleep quality and duration \u2014 poor sleep affects mood, anxiety, and stress reactivity simultaneously",
          "Physical health \u2014 chronic pain, illness, or hormonal changes can elevate depression and stress scores",
          "Caffeine and stimulant use \u2014 these can inflate the anxiety subscale through physiological arousal",
          "Time of day \u2014 fatigue in the evening versus morning alertness can influence how you rate symptoms",
          "Cultural background \u2014 how you interpret and express emotional experiences can vary across cultures",
          "Current medications \u2014 some medications affect mood, energy, and anxiety levels as side effects",
        ]}
        doctorConversation={[
          "The DASS-21 gives you three scores to share with your healthcare provider, which is more information than a single-construct screener provides. Bring your depression, anxiety, and stress scores together so your provider can see the full pattern.",
          "You might say: \"I completed a DASS-21 screening and my scores were [depression score] for depression, [anxiety score] for anxiety, and [stress score] for stress. I have been feeling [describe your main symptoms] and wanted to discuss whether further evaluation would be helpful.\"",
          "Because the DASS-21 separates three dimensions, it can help your provider understand which areas are most affected. This can guide the conversation toward the most relevant next steps \u2014 whether that involves therapy, lifestyle changes, further assessment, or some combination tailored to your specific pattern of results.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the DASS-21", description: "Free, private depression-anxiety-stress self-check", href: "/dass-21-depression-anxiety-stress" },
          { name: "PHQ-9 Depression Self-Check", description: "Focused 9-question depression screening tool", href: "/phq-9-depression-test" },
          { name: "GAD-7 Anxiety Self-Check", description: "7-question validated anxiety screening tool", href: "/gad-7-anxiety-test" },
        ]}
        sources={[
          { text: "Lovibond, S. H., & Lovibond, P. F. (1995). Manual for the Depression Anxiety Stress Scales (2nd ed.). Psychology Foundation of Australia.", url: "https://www2.psy.unsw.edu.au/dass/" },
          { text: "Henry, J. D., & Crawford, J. R. (2005). The short-form version of the DASS: Construct validity and normative data. British Journal of Clinical Psychology, 44(2), 227\u2013239.", url: "https://pubmed.ncbi.nlm.nih.gov/16004657/" },
          { text: "Osman, A., et al. (2012). The Depression Anxiety Stress Scales\u201421 (DASS-21): Further examination of dimensions, reliability, and correlates. Journal of Clinical Psychology, 68(12), 1322\u20131338.", url: "https://pubmed.ncbi.nlm.nih.gov/22930477/" },
        ]}
      />
    </>
  );
}

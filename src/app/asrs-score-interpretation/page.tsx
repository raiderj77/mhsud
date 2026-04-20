import type { Metadata } from "next";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { ScoreInterpretationLayout } from "@/components/ScoreInterpretationLayout";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorByline } from "@/components/AuthorByline";

const TOOL_URL = `${SITE_URL}/asrs-score-interpretation`;

const FAQ_DATA = [
  { question: "What does a positive ASRS screen mean?", answer: "A positive screen on the ASRS v1.1 means that 4 or more of your 6 Part A responses fell in the shaded (positive) range on the scoring sheet. This suggests that your symptoms are consistent with adult ADHD and that a comprehensive evaluation by a qualified professional may be helpful. A positive screen is not an ADHD assessment — it indicates that further evaluation is warranted." },
  { question: "What does a negative ASRS screen mean?", answer: "A negative screen means fewer than 4 of your 6 Part A items fell in the positive range. This suggests that your current symptoms are less consistent with an ADHD pattern. However, a negative screen does not rule out ADHD entirely — some people with ADHD may not score positive on the screener due to coping strategies, symptom variability, or differences in how they interpret the questions." },
  { question: "How is the ASRS v1.1 scored?", answer: "The ASRS v1.1 Part A has 6 items, each rated on a 5-point frequency scale (never, rarely, sometimes, often, very often). Each item has a specific threshold — for some items, 'sometimes' is the cutoff, while for others it is 'often.' If 4 or more items meet or exceed their individual thresholds, the screen is considered positive. This is a threshold-based approach, not a continuous total score." },
  { question: "Is the ASRS the same as an ADHD assessment?", answer: "No. The ASRS is a brief self-report screening tool developed by the World Health Organization. A comprehensive ADHD evaluation typically includes a detailed clinical interview, assessment of childhood symptoms, collateral information from family or partners, and ruling out other conditions that can mimic ADHD symptoms (such as anxiety, depression, sleep disorders, or thyroid conditions). The ASRS identifies people who may benefit from that full evaluation." },
  { question: "Can adults develop ADHD or is it only a childhood condition?", answer: "According to current research and the DSM-5, ADHD is a neurodevelopmental condition with onset in childhood. However, many adults were never identified as children — especially women and people who developed strong coping strategies. The ASRS screens for current adult symptoms, but a full evaluation will also explore whether symptoms were present before age 12, even if they were not recognized at the time." },
  { question: "What should I do if my ASRS screen is positive?", answer: "If your ASRS screen is positive, consider scheduling an appointment with a healthcare provider who has experience evaluating ADHD in adults. Bring your screening results and be prepared to discuss how your symptoms affect work, relationships, and daily functioning. You might also consider keeping a symptom journal for 1–2 weeks beforehand to provide concrete examples." },
  { question: "Can anxiety or depression cause a false positive on the ASRS?", answer: "Yes — concentration difficulties, restlessness, forgetfulness, and difficulty completing tasks are symptoms of both ADHD and other conditions including anxiety, depression, sleep disorders, and thyroid dysfunction. This is why a comprehensive evaluation is important after a positive screen. A qualified clinician will consider the full picture and rule out alternative explanations for your symptoms." },
  { question: "How accurate is the ASRS as an ADHD screener?", answer: "Research shows that the ASRS v1.1 Part A has a sensitivity of approximately 68.7% and a specificity of 99.5% for adult ADHD when validated against clinical interviews. This means it is very good at avoiding false positives (high specificity) but may miss some true cases (moderate sensitivity). A negative screen does not rule out ADHD, and a positive screen strongly suggests further evaluation is worthwhile." },
];

export const metadata: Metadata = createMetadata({
  path: "/asrs-score-interpretation",
  title: "ASRS ADHD Score Interpretation: What It Means",
  description:
    "Understand your ASRS ADHD screening results. Learn what a positive or negative screen means and when to seek a full evaluation.",
});

export default function ASRSScoreInterpretationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: "ASRS ADHD Score Interpretation: What Your Results Mean",
              description: "Understand your ASRS ADHD screening results. Learn what a positive or negative screen means and when to seek a full evaluation.",
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
              { name: "ASRS ADHD Screening", url: `${SITE_URL}/asrs-adhd-screening` },
              { name: "Score Interpretation", url: TOOL_URL },
            ])
          ),
        }}
      />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="A guide explaining ASRS ADHD screening scores, what each range means, and recommended next steps."
          who="Anyone who has completed the ASRS screening and wants to understand their score in clinical context."
          bottomLine="Your ASRS score helps identify whether ADHD evaluation is warranted — it is not a diagnosis by itself. This tool is for informational purposes only. Not a substitute for professional mental health treatment."
          lastUpdated="2026-03-20"
        />
      </div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-4">
        <AuthorByline publishedDate="2025-01-01" modifiedDate="2026-03-20" />
      </div>


      <ScoreInterpretationLayout
        testName="ASRS v1.1"
        testAbbreviation="ASRS"
        toolPageHref="/asrs-adhd-screening"
        lastUpdated="March 7, 2026"
        intro={[
          "The ASRS v1.1 (Adult ADHD Self-Report Scale) is a screening tool developed in conjunction with the World Health Organization (WHO) to help identify adults who may have attention-deficit/hyperactivity disorder. Unlike many mental health screeners that produce a continuous numerical score, the ASRS uses a threshold-based approach to determine whether your symptom pattern is consistent with adult ADHD.",
          "The ASRS consists of two parts. Part A contains 6 items that are the most predictive of ADHD — these form the screener. Part B contains 12 additional items that provide supplementary information but are not used in the primary screening decision. Your screen result is determined by how many of the 6 Part A items fall in the positive range.",
          "Each of the 6 Part A items has a specific cutoff point. Depending on the item, the threshold for a positive response may be 'sometimes,' 'often,' or 'very often.' If 4 or more of the 6 items meet or exceed their individual thresholds, the screen is considered positive — meaning further evaluation for ADHD is recommended.",
        ]}
        scoreRanges={[
          { range: "0–3 items positive", label: "Negative Screen", meaning: "Fewer than 4 Part A items met the threshold — symptoms are less consistent with ADHD", nextStep: "No immediate follow-up indicated based on screening alone; monitor if concerns persist", colorClass: "bg-sage-50/50 dark:bg-sage-950/20", textColorClass: "text-sage-700 dark:text-sage-400" },
          { range: "4–6 items positive", label: "Positive Screen", meaning: "4 or more Part A items met the threshold — symptom pattern is consistent with adult ADHD", nextStep: "A comprehensive ADHD evaluation by a qualified professional is recommended", colorClass: "bg-warm-50/50 dark:bg-warm-950/20", textColorClass: "text-warm-700 dark:text-warm-400" },
        ]}
        cannotTellYou={[
          "The ASRS is a screening tool — not a clinical assessment. A positive screen does not mean you have ADHD, and a negative screen does not mean you do not. The ASRS measures a snapshot of current symptoms and cannot evaluate the full context needed for an ADHD determination: childhood onset, duration, impairment across settings, and the absence of other explanations.",
          "Many conditions share symptoms with ADHD — anxiety, depression, sleep disorders, thyroid dysfunction, and even high stress levels can produce concentration difficulties, restlessness, and forgetfulness. The ASRS helps identify people who may benefit from a thorough evaluation, but it cannot distinguish between these possibilities on its own.",
        ]}
        scoreBands={[
          {
            heading: "Negative Screen (0–3 Items Positive): Symptoms Less Consistent With ADHD",
            paragraphs: [
              "A negative screen means that fewer than 4 of your 6 Part A responses reached the positive threshold. This suggests that your current symptom pattern is less consistent with adult ADHD as measured by this screener. Most people in this category will not meet criteria for ADHD upon further evaluation.",
              "However, a negative screen does not definitively rule out ADHD. Some adults with ADHD — particularly those who have developed strong compensatory strategies, those with the predominantly inattentive presentation, or those who underreport symptoms — may screen negative despite having the condition. If you have significant concerns about attention, organization, or impulsivity that are affecting your life, discussing them with a healthcare provider is still reasonable regardless of your screening result.",
              "If your concerns persist, consider tracking your symptoms over a few weeks. Note specific situations where attention, organization, time management, or impulsivity cause problems. This information can be valuable if you decide to pursue a professional evaluation later.",
            ],
          },
          {
            heading: "Positive Screen (4–6 Items Positive): Symptoms Consistent With Adult ADHD",
            paragraphs: [
              "A positive screen means that 4 or more of your 6 Part A responses met or exceeded the item-specific threshold. This indicates that your symptom pattern is consistent with adult ADHD and that a comprehensive evaluation by a qualified clinician is recommended.",
              "A positive ASRS screen has very high specificity (approximately 99.5%), meaning false positives are rare. If you screened positive, there is a strong statistical basis for pursuing a full evaluation. A comprehensive assessment will include a detailed clinical interview, review of childhood history, assessment of impairment across multiple life domains (work, relationships, daily tasks), and consideration of other conditions that might explain your symptoms.",
              "Treatment options for adult ADHD are well-established and include behavioral strategies, organizational coaching, psychotherapy (particularly CBT adapted for ADHD), and medication. Many adults report significant improvements in functioning and quality of life after receiving appropriate support. Getting evaluated is the first step.",
            ],
          },
        ]}
        factorsAffecting={[
          "Current stress levels — high stress can temporarily impair concentration and increase restlessness, mimicking ADHD symptoms",
          "Sleep quality — chronic sleep deprivation produces attention and executive function deficits very similar to ADHD",
          "Anxiety or depression — these conditions frequently co-occur with ADHD and can also independently cause concentration problems",
          "Caffeine and stimulant use — regular caffeine consumption may partially mask ADHD symptoms or create new ones",
          "How you interpret frequency words — 'sometimes' and 'often' are subjective, and different people set different internal thresholds",
          "Medication side effects — some medications (antihistamines, certain antidepressants, blood pressure medications) can affect attention and focus",
          "Life transitions — starting a new job, becoming a parent, or other major changes can unmask ADHD symptoms that were previously managed",
        ]}
        doctorConversation={[
          "Bringing your ASRS results to a healthcare appointment gives your provider a structured starting point. Many primary care physicians and psychiatrists are familiar with the ASRS and use it as part of their ADHD evaluation process.",
          "You might say: \"I completed an ASRS ADHD screener online and had a [positive/negative] result. I have been noticing [describe your main concerns — difficulty focusing, disorganization, impulsivity, restlessness] for [how long]. I am wondering if an ADHD evaluation might be helpful.\"",
          "Be prepared to discuss how your symptoms affect your work, relationships, and daily responsibilities. Your provider may also ask about your childhood — whether you had trouble with attention, organization, or impulsivity growing up, even if you were never formally evaluated. Bringing school records or asking a family member about your childhood behavior can be helpful, though it is not required for the initial conversation.",
        ]}
        faqs={FAQ_DATA}
        relatedTools={[
          { name: "Take the ASRS", description: "Free, private 6-question adult ADHD self-check", href: "/asrs-adhd-screening" },
          { name: "PHQ-9 Depression Self-Check", description: "9-question validated depression screening tool", href: "/phq-9-depression-test" },
          { name: "GAD-7 Anxiety Self-Check", description: "7-question validated anxiety screening tool", href: "/gad-7-anxiety-test" },
        ]}
        sources={[
          { text: "Kessler, R. C., et al. (2005). The World Health Organization Adult ADHD Self-Report Scale (ASRS): a short screening scale for use in the general population. Psychological Medicine, 35(2), 245–256.", url: "https://pubmed.ncbi.nlm.nih.gov/15841682/" },
          { text: "Kessler, R. C., et al. (2007). Validity of the World Health Organization Adult ADHD Self-Report Scale (ASRS) Screener in a representative sample of health plan members. Int J Methods Psychiatr Res, 16(2), 52–65.", url: "https://pubmed.ncbi.nlm.nih.gov/17623385/" },
          { text: "National Institute of Mental Health — Attention-Deficit/Hyperactivity Disorder in Adults", url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" },
        ]}
      />
    </>
  );
}

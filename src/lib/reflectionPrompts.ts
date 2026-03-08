/**
 * Reflection prompts displayed after screening results.
 * Each tool gets 4–6 unique, YMYL-safe questions that encourage
 * self-reflection without providing clinical advice.
 *
 * Keyword strategy: prompts contain under-utilized long-tail phrases
 * like "what to do after [test]", "next steps after [screening]",
 * and "how to talk about [condition] symptoms".
 */

export interface ReflectionPromptSet {
  /** Display name shown in the section header */
  toolName: string;
  /** Prompts shown in the collapsible section */
  prompts: string[];
  /** 2 search-optimized FAQ entries derived from the prompts */
  faqEntries: { question: string; answer: string }[];
}

export const REFLECTION_PROMPTS: Record<string, ReflectionPromptSet> = {
  /* ─── Depression ─────────────────────────────────────────────── */

  "phq-9-depression-test": {
    toolName: "PHQ-9 Depression Self-Check",
    prompts: [
      "Which of the nine areas felt most true for you right now — and has that changed recently?",
      "Have these feelings been present for a specific stretch of time, or do they come and go with certain situations?",
      "Is there someone in your life you feel comfortable talking to about how you have been feeling?",
      "What has helped you feel even slightly better in the past when you noticed similar feelings?",
      "What would feel like one small, manageable step toward feeling better this week?",
      "If you could share one thing about your mood with a healthcare provider, what would it be?",
    ],
    faqEntries: [
      { question: "What should I do after taking the PHQ-9 depression self-check?", answer: "After completing the PHQ-9, take a moment to reflect on which symptoms feel most relevant to your daily life. Consider writing down your score and any patterns you notice so you can share them with a healthcare provider. The reflection prompts on this page can help you organize your thoughts before an appointment." },
      { question: "How can I use my PHQ-9 results to talk to my doctor about depression?", answer: "You can download or print your results using the button on this page and bring them to your next appointment. Many doctors use the PHQ-9 in clinical settings, so sharing your self-check score gives them a helpful starting point. You might say: 'I took a PHQ-9 online and scored [X] — I would like to discuss what that means for me.'" },
    ],
  },

  "ces-d-depression-scale": {
    toolName: "CES-D Depression Scale",
    prompts: [
      "Which symptoms on the CES-D felt most persistent over the past week?",
      "Have you noticed whether your mood shifts at certain times of day or in certain environments?",
      "Are there activities you used to enjoy that feel harder to engage with lately?",
      "How has your energy level affected your ability to carry out daily responsibilities?",
      "What kind of support — from friends, family, or professionals — might help right now?",
    ],
    faqEntries: [
      { question: "What do my CES-D depression scale results mean for me?", answer: "The CES-D measures depressive symptoms over the past week. A higher score suggests more frequent symptoms, but it is a screening tool — not a clinical assessment. Reflect on which specific items resonated most and consider discussing persistent patterns with a healthcare provider." },
      { question: "Should I see a doctor after taking the CES-D depression screening?", answer: "If your score falls in the moderate or high range, or if you have noticed depressive symptoms lasting two weeks or more, it is worth speaking with a healthcare provider. You can bring your CES-D results to give them context about what you have been experiencing." },
    ],
  },

  /* ─── Anxiety ────────────────────────────────────────────────── */

  "gad-7-anxiety-test": {
    toolName: "GAD-7 Anxiety Self-Check",
    prompts: [
      "Which worries or anxious feelings from the past two weeks feel most difficult to control?",
      "Do your anxiety symptoms tend to be worse at certain times of day, or in specific situations like work or social settings?",
      "How is anxiety affecting your sleep, concentration, or relationships right now?",
      "Have you tried anything in the past that helped you manage anxious feelings — even temporarily?",
      "If you could reduce one source of worry this week, which would make the biggest difference?",
    ],
    faqEntries: [
      { question: "What should I do after taking the GAD-7 anxiety test?", answer: "After completing the GAD-7, reflect on which worries feel most out of your control. Consider whether anxiety is affecting your daily functioning — sleep, work, or relationships. If your score suggests moderate or higher anxiety, or if symptoms have lasted several weeks, speaking with a healthcare provider can help you explore next steps." },
      { question: "How do I know if my GAD-7 anxiety score means I need professional help?", answer: "The GAD-7 is a screening tool, not a clinical assessment. Scores of 10 or above suggest moderate anxiety that may benefit from professional support. However, even lower scores warrant attention if anxiety is interfering with your quality of life. Trust your own sense of whether your worry feels manageable." },
    ],
  },

  "spin-social-anxiety-test": {
    toolName: "SPIN Social Anxiety Self-Check",
    prompts: [
      "Which social situations from the questionnaire cause you the most distress in your daily life?",
      "Do you tend to avoid certain activities or events because of social anxiety — and how does that avoidance affect you?",
      "Have you noticed whether your social anxiety has changed over the past year — gotten better, worse, or stayed the same?",
      "Is there a social situation you wish you could handle more comfortably?",
      "What is one small social interaction you could practice this week that feels slightly outside your comfort zone?",
    ],
    faqEntries: [
      { question: "What does my SPIN social anxiety test score mean?", answer: "The SPIN measures how much social situations cause you fear, avoidance, and physical symptoms. Higher scores suggest greater social anxiety. Reflect on which specific situations feel most limiting and whether avoidance is affecting your work, relationships, or well-being." },
      { question: "Is social anxiety something I should talk to a therapist about?", answer: "If social anxiety is causing you to avoid situations that matter to you — work presentations, friendships, everyday interactions — speaking with a therapist can help. Cognitive behavioral therapy (CBT) is one of the most effective approaches for social anxiety and can be accessed without a referral in most areas." },
    ],
  },

  /* ─── Alcohol & Substance Use ────────────────────────────────── */

  "audit-alcohol-test": {
    toolName: "AUDIT Alcohol Screening",
    prompts: [
      "What prompted you to take this alcohol screening today?",
      "Have you noticed any patterns in when or where you drink most — certain days, situations, or emotions?",
      "Has anyone in your life expressed concern about your drinking, and how did that conversation feel?",
      "What would your typical week look like if your drinking habits were different?",
      "If you decided to make one change to your relationship with alcohol, what feels most realistic right now?",
    ],
    faqEntries: [
      { question: "What should I do after taking the AUDIT alcohol screening?", answer: "After completing the AUDIT, reflect honestly on whether your drinking patterns are causing problems you might be minimizing. Consider whether alcohol is affecting your health, relationships, work, or mood. If your score suggests hazardous or harmful drinking, speaking with a healthcare provider about your results is a good next step." },
      { question: "Does a high AUDIT score mean I have an alcohol problem?", answer: "A high AUDIT score does not provide a clinical assessment — it indicates that your drinking patterns may be placing you at risk. Many people score in the hazardous range without realizing it. The score is a starting point for honest reflection and, if needed, a conversation with a professional who can help you evaluate your relationship with alcohol." },
    ],
  },

  "audit-c-alcohol-screen": {
    toolName: "AUDIT-C Quick Alcohol Screen",
    prompts: [
      "How does your drinking frequency compare to what you expected before taking this screening?",
      "Are there specific situations — stress, socializing, boredom — that tend to increase how much you drink?",
      "How would you describe your relationship with alcohol right now — comfortable, concerning, or somewhere in between?",
      "What would cutting back look like for you in practical terms this week?",
    ],
    faqEntries: [
      { question: "What does my AUDIT-C alcohol screening score indicate?", answer: "The AUDIT-C is a brief, 3-question screening that identifies potentially hazardous drinking. A score of 3 or higher for women, or 4 or higher for men, suggests patterns worth examining more closely. Consider taking the full AUDIT for a more detailed picture." },
      { question: "Is the AUDIT-C accurate enough to rely on?", answer: "The AUDIT-C is validated as a quick screening tool used widely in primary care settings. While it is not a comprehensive assessment, research shows it is effective at identifying people who may benefit from further evaluation. If your score concerns you, the full AUDIT provides more detail." },
    ],
  },

  "dast-10-drug-screening": {
    toolName: "DAST-10 Drug Use Screening",
    prompts: [
      "What prompted you to take this drug use screening today — curiosity, concern, or something else?",
      "Have you noticed any patterns in your drug use — particular times, places, or emotional states that trigger it?",
      "How has drug use affected your daily responsibilities, relationships, or how you feel about yourself?",
      "Is there someone you trust enough to have an honest conversation about your substance use?",
      "If you imagined your life six months from now with different habits, what would you want it to look like?",
    ],
    faqEntries: [
      { question: "What do my DAST-10 drug screening results mean?", answer: "The DAST-10 screens for problems related to drug use over the past 12 months. Higher scores suggest a greater degree of problems associated with drug use. This is not a clinical assessment — it helps you reflect on whether substance use is affecting your life in ways you may want to address." },
      { question: "Should I see a counselor after a high DAST-10 score?", answer: "If your DAST-10 score falls in the moderate or substantial range, speaking with a substance use counselor can be a helpful next step. SAMHSA's helpline (1-800-662-4357) provides free, confidential referrals 24/7. Many people find that early conversations prevent problems from worsening." },
    ],
  },

  "cage-aid-substance-abuse-screening": {
    toolName: "CAGE-AID Substance Use Screening",
    prompts: [
      "Were any of the four CAGE-AID questions harder to answer honestly than you expected?",
      "Have you ever felt the need to cut down on your substance use — and what happened when you tried?",
      "How do you feel when others comment on or question your use of alcohol or drugs?",
      "What role does substance use play in your daily routine right now?",
      "What would reaching out for support look like for you — a friend, a hotline, or a professional?",
    ],
    faqEntries: [
      { question: "What does a positive CAGE-AID substance screening result mean?", answer: "Answering yes to two or more CAGE-AID questions suggests a pattern that may indicate a substance use concern. This brief screening does not provide a clinical assessment but highlights areas worth exploring further with a healthcare provider or counselor." },
      { question: "How accurate is the CAGE-AID for detecting substance use problems?", answer: "The CAGE-AID is a widely used clinical screening tool adapted from the original CAGE questionnaire. It is designed to flag potential substance use concerns quickly, not to replace a comprehensive evaluation. If your results concern you, a professional assessment can provide more clarity." },
    ],
  },

  "who-assist-substance-screening": {
    toolName: "WHO ASSIST Substance Screening",
    prompts: [
      "Which substance or substances from the screening are you most concerned about right now?",
      "How has your substance use changed over the past year — increased, decreased, or stayed about the same?",
      "Have you experienced any health problems, social difficulties, or legal issues related to substance use?",
      "What would motivate you most to make a change — health, relationships, finances, or something else?",
      "What is one realistic step you could take this week to reduce potential harm from substance use?",
    ],
    faqEntries: [
      { question: "What does the WHO ASSIST substance screening measure?", answer: "The ASSIST (Alcohol, Smoking, and Substance Involvement Screening Test) was developed by the World Health Organization to detect substance use and related problems across multiple substance categories. It provides a risk score for each substance, helping you understand which areas may need attention." },
      { question: "What should I do if my ASSIST score shows high risk?", answer: "A high-risk ASSIST score for any substance suggests that your use may be causing significant harm. The WHO recommends speaking with a healthcare professional about your results. SAMHSA's helpline (1-800-662-4357) can connect you with local treatment options at no cost." },
    ],
  },

  "crafft-substance-screening": {
    toolName: "CRAFFT Substance Screening",
    prompts: [
      "Were any of the CRAFFT questions about riding in a car, using to relax, or using alone especially relevant to you?",
      "How do your friends or peers influence your decisions about substance use?",
      "Have you noticed substance use affecting your school, work, or family relationships?",
      "Is there an adult you trust enough to talk to about what you are going through?",
      "What activities or interests help you feel good without substances?",
    ],
    faqEntries: [
      { question: "What does the CRAFFT substance screening test for?", answer: "The CRAFFT is a brief screening tool designed for adolescents and young adults to identify substance use-related risks. Each letter in CRAFFT stands for a key risk behavior: Car, Relax, Alone, Forget, Friends, Trouble. Two or more positive answers suggest a pattern worth discussing with a trusted adult or healthcare provider." },
      { question: "Is the CRAFFT only for teenagers or can adults take it?", answer: "The CRAFFT was developed and validated primarily for people ages 12–21. While adults can take it, other screening tools like the AUDIT, DAST-10, or CAGE-AID may be more appropriate for adults. If you are over 21, consider trying one of those tools for a more applicable screening." },
    ],
  },

  /* ─── PTSD ───────────────────────────────────────────────────── */

  "pcl-5-ptsd-screening": {
    toolName: "PCL-5 PTSD Screening",
    prompts: [
      "Are there specific situations, places, or people that tend to trigger the symptoms you reported?",
      "How are these experiences affecting your daily life right now — your sleep, work, or relationships?",
      "Do you currently have any support in place — a therapist, counselor, doctor, or trusted person?",
      "Have you noticed whether certain coping strategies help more than others when symptoms are intense?",
      "What would it mean to you to feel even slightly more in control of these experiences?",
    ],
    faqEntries: [
      { question: "What should I do after taking the PCL-5 PTSD screening?", answer: "After completing the PCL-5, reflect on which symptom clusters — intrusion, avoidance, negative changes in thinking, or heightened reactivity — are most present in your life. If your score is 31 or above, or if symptoms are significantly affecting your daily functioning, consider reaching out to a trauma-informed therapist or your healthcare provider." },
      { question: "Does a high PCL-5 score mean I have PTSD?", answer: "A PCL-5 score of 31 or above suggests symptoms consistent with PTSD, but only a qualified professional can provide a clinical evaluation. Many people experience trauma-related symptoms without meeting the full criteria for PTSD. Regardless of your score, if these symptoms are affecting your quality of life, professional support can help." },
    ],
  },

  "pc-ptsd-5-screening": {
    toolName: "PC-PTSD-5 Quick PTSD Screen",
    prompts: [
      "Which of the five areas — nightmares, avoidance, hypervigilance, numbness, or guilt — feels most present in your life right now?",
      "How long have you been experiencing these symptoms — weeks, months, or longer?",
      "Have you spoken with anyone about the experiences that may be contributing to these symptoms?",
      "What helps you feel safest or most grounded when symptoms are at their worst?",
    ],
    faqEntries: [
      { question: "What does a positive PC-PTSD-5 screening result mean?", answer: "Answering yes to three or more PC-PTSD-5 questions suggests you may be experiencing symptoms consistent with post-traumatic stress. This brief screening is commonly used in primary care to identify people who may benefit from a more comprehensive PTSD evaluation like the PCL-5." },
      { question: "Should I take the full PCL-5 after the PC-PTSD-5?", answer: "If your PC-PTSD-5 results suggest potential PTSD symptoms, taking the full PCL-5 can give you a more detailed picture of which symptom clusters are most active. You can also bring both sets of results to a healthcare provider to help guide the conversation." },
    ],
  },

  /* ─── ADHD ───────────────────────────────────────────────────── */

  "asrs-adhd-screening": {
    toolName: "ASRS ADHD Self-Check",
    prompts: [
      "Which ADHD-related symptoms — inattention, hyperactivity, or impulsivity — feel most disruptive in your daily life?",
      "How long have you been noticing these patterns — are they recent, or have they been present since childhood?",
      "How are these symptoms affecting your work performance, relationships, or ability to complete daily tasks?",
      "Have you developed any strategies or workarounds that help you manage focus or restlessness?",
      "What would getting a professional ADHD evaluation mean to you — relief, answers, or something else?",
    ],
    faqEntries: [
      { question: "What should I do after taking the ASRS ADHD screening?", answer: "The ASRS is a starting point for understanding whether ADHD symptoms may be affecting your life. If your results suggest elevated symptoms, consider scheduling an evaluation with a psychiatrist, psychologist, or primary care provider experienced with ADHD. Bring your screening results to give them context." },
      { question: "Can adults have ADHD even if they were never assessed as children?", answer: "Yes — many adults discover they have ADHD later in life, especially if their symptoms were misattributed to laziness, anxiety, or depression. Adult ADHD is underrecognized, and getting evaluated can lead to strategies, accommodations, or treatments that significantly improve daily functioning." },
    ],
  },

  /* ─── Bipolar ────────────────────────────────────────────────── */

  "mdq-bipolar-screening": {
    toolName: "MDQ Bipolar Screening",
    prompts: [
      "Which experiences from the questionnaire — elevated mood, racing thoughts, decreased need for sleep — felt most familiar to you?",
      "Have you noticed distinct periods when your mood, energy, or behavior was noticeably different from your usual baseline?",
      "How have these mood shifts affected your relationships, work, or decision-making?",
      "Has anyone close to you ever commented on sudden changes in your behavior or energy level?",
      "What concerns or questions would you want to bring to a healthcare provider about your mood patterns?",
    ],
    faqEntries: [
      { question: "What does a positive MDQ bipolar screening result mean?", answer: "A positive MDQ result means you endorsed several experiences associated with manic or hypomanic episodes and that these experiences caused some level of impairment. This does not mean you have bipolar disorder — only a comprehensive clinical evaluation can determine that. The MDQ helps identify people who may benefit from further assessment." },
      { question: "Should I see a psychiatrist if my MDQ bipolar screening is positive?", answer: "If your MDQ results are positive, speaking with a psychiatrist or mental health professional experienced with mood disorders is a good next step. Bipolar disorder is often misidentified as depression alone, so an accurate evaluation can lead to more appropriate and effective support." },
    ],
  },

  /* ─── OCD ────────────────────────────────────────────────────── */

  "oci-r-ocd-screening": {
    toolName: "OCI-R OCD Screening",
    prompts: [
      "Which types of obsessions or compulsions from the questionnaire feel most distressing or time-consuming in your daily life?",
      "How much time do you estimate you spend on obsessive thoughts or compulsive behaviors each day?",
      "Do these patterns interfere with your work, relationships, or activities you value?",
      "Have your OCD-like symptoms changed in intensity over time — during stress, life changes, or particular situations?",
      "What would it feel like to have more control over these intrusive thoughts or repetitive behaviors?",
    ],
    faqEntries: [
      { question: "What does my OCI-R OCD screening score mean?", answer: "The OCI-R measures the severity of obsessive-compulsive symptoms across six categories: washing, checking, ordering, obsessing, hoarding, and neutralizing. A total score of 21 or above suggests clinically significant OCD symptoms. However, only a professional trained in OCD can provide a thorough evaluation." },
      { question: "What type of therapy works best for OCD symptoms?", answer: "Exposure and Response Prevention (ERP) is considered the gold standard treatment for OCD and is a specific type of cognitive behavioral therapy. If your screening suggests elevated OCD symptoms, look for a therapist who specializes in ERP. The International OCD Foundation maintains a provider directory." },
    ],
  },

  /* ─── Multi-Condition ────────────────────────────────────────── */

  "dass-21-depression-anxiety-stress": {
    toolName: "DASS-21 Depression, Anxiety & Stress Scale",
    prompts: [
      "Which of the three domains — depression, anxiety, or stress — showed the highest score, and does that match how you have been feeling?",
      "Are these symptoms mostly triggered by specific circumstances, or do they feel present most of the time?",
      "How are depression, anxiety, and stress each affecting different parts of your life — work, relationships, physical health?",
      "What coping strategies have you found helpful for managing any of these three areas?",
      "If you could address one of the three areas first, which would make the biggest difference in your daily well-being?",
    ],
    faqEntries: [
      { question: "What do my DASS-21 depression, anxiety, and stress scores mean?", answer: "The DASS-21 provides separate scores for depression, anxiety, and stress, each rated from normal to extremely severe. This helps you understand which emotional domain is most active. Since these conditions often overlap, the DASS-21 is useful for seeing the full picture rather than focusing on one area alone." },
      { question: "Is the DASS-21 better than the PHQ-9 or GAD-7 for screening?", answer: "The DASS-21 measures three areas simultaneously (depression, anxiety, stress), while the PHQ-9 focuses on depression and the GAD-7 on anxiety. If you are unsure which area is most relevant, the DASS-21 provides a broader overview. For deeper assessment of one specific area, the PHQ-9 or GAD-7 may be more targeted." },
    ],
  },

  /* ─── Well-Being & Distress ──────────────────────────────────── */

  "who-5-wellbeing-index": {
    toolName: "WHO-5 Well-Being Index",
    prompts: [
      "Which aspects of well-being — cheerfulness, calm, energy, restful sleep, or engagement — feel most lacking right now?",
      "How has your sense of well-being changed over the past month compared to the past two weeks?",
      "What activities or relationships tend to increase your overall sense of well-being?",
      "Are there specific barriers preventing you from doing things that usually make you feel good?",
      "What is one small thing you could do tomorrow to nurture your well-being?",
    ],
    faqEntries: [
      { question: "What does a low WHO-5 well-being score mean?", answer: "A WHO-5 score below 13 out of 25 suggests low well-being and may indicate possible depression or burnout. The WHO-5 is used worldwide as a quick well-being check and can help you decide whether to explore your emotional health further with a professional." },
      { question: "How often should I retake the WHO-5 well-being index?", answer: "The WHO-5 measures well-being over the past two weeks, so retaking it every 2–4 weeks can help you track changes over time. This is especially useful if you are making lifestyle changes, starting therapy, or going through a stressful period." },
    ],
  },

  "k6-distress-scale": {
    toolName: "K6 Psychological Distress Scale",
    prompts: [
      "Which types of distress — nervousness, hopelessness, restlessness, sadness, effort, or worthlessness — felt strongest over the past month?",
      "How is psychological distress affecting your ability to function at work, at home, or in your relationships?",
      "Have you experienced this level of distress before, or does this feel different from your usual baseline?",
      "What resources or support systems do you currently have in place for managing distress?",
    ],
    faqEntries: [
      { question: "What does a high K6 psychological distress score indicate?", answer: "A K6 score of 13 or above suggests serious psychological distress and is often used as a threshold for identifying people who may benefit from professional mental health support. The K6 does not specify which condition is present — it measures overall emotional strain across multiple dimensions." },
      { question: "Is the K6 distress scale used by doctors and researchers?", answer: "Yes — the K6 is widely used in population health surveys, primary care, and research settings. It was developed by Kessler et al. and is endorsed by organizations worldwide for quickly assessing psychological distress levels in community and clinical populations." },
    ],
  },

  /* ─── Eating Disorders ───────────────────────────────────────── */

  "scoff-eating-disorder-screening": {
    toolName: "SCOFF Eating Disorder Screening",
    prompts: [
      "Were any of the five SCOFF questions harder to answer honestly than you expected?",
      "How does your relationship with food and body image affect your daily mood and energy?",
      "Have you noticed changes in your eating habits during stressful periods?",
      "Is there someone you trust enough to talk to about concerns related to eating or body image?",
      "What would a healthier relationship with food look like for you?",
    ],
    faqEntries: [
      { question: "What does a positive SCOFF eating disorder screening mean?", answer: "Answering yes to two or more SCOFF questions suggests possible disordered eating patterns that may warrant professional evaluation. The SCOFF screens for anorexia nervosa, bulimia nervosa, and related conditions. It is a starting point, not a clinical assessment." },
      { question: "What kind of professional should I see about eating disorder concerns?", answer: "If your SCOFF results concern you, consider speaking with a therapist who specializes in eating disorders, a registered dietitian with eating disorder experience, or your primary care provider. The National Eating Disorders Association (NEDA) helpline (1-800-931-2237) offers free support and referrals." },
    ],
  },

  /* ─── Autism ─────────────────────────────────────────────────── */

  "aq-10-autism-screening": {
    toolName: "AQ-10 Autism Screening",
    prompts: [
      "Which aspects of social interaction or communication from the questionnaire felt most relevant to your experiences?",
      "Have you always felt different from your peers in how you process social situations, sensory input, or routines?",
      "How do your tendencies around patterns, routines, or focus affect your daily life — positively or negatively?",
      "What accommodations or strategies have you naturally developed to navigate social or sensory challenges?",
      "What would understanding more about your neurodevelopmental profile mean to you?",
    ],
    faqEntries: [
      { question: "What does my AQ-10 autism screening score mean?", answer: "A score of 6 or above on the AQ-10 suggests autistic traits that may warrant a more comprehensive evaluation. The AQ-10 is a brief screening used in clinical settings to identify adults who might benefit from a full autism assessment. It does not confirm or rule out autism on its own." },
      { question: "How do I get a formal autism evaluation as an adult?", answer: "Adult autism evaluations are typically conducted by psychologists or psychiatrists with experience in neurodevelopmental conditions. Ask your primary care provider for a referral, or search for autism evaluation centers in your area. Wait times can vary, so starting the process early is helpful." },
    ],
  },

  /* ─── Stress & Burnout ───────────────────────────────────────── */

  "burnout-assessment-tool": {
    toolName: "Burnout Assessment Tool",
    prompts: [
      "Which dimension of burnout — exhaustion, mental distance, cognitive impairment, or emotional impairment — resonated most with your current experience?",
      "Can you identify specific aspects of your work or life that are contributing most to feelings of burnout?",
      "How has burnout affected your performance, relationships, or physical health?",
      "What boundaries or changes — even small ones — could you realistically set this week to protect your energy?",
      "When was the last time you felt truly recharged, and what made that possible?",
    ],
    faqEntries: [
      { question: "What should I do after getting a high burnout assessment score?", answer: "A high burnout score signals that your current demands are exceeding your resources. Reflect on which specific areas — workload, lack of control, values mismatch — are the biggest contributors. Consider talking with your supervisor about workload, setting clearer boundaries, and consulting a therapist if burnout is affecting your mental health." },
      { question: "Is burnout the same as depression, or are they different?", answer: "Burnout and depression share symptoms like fatigue and low motivation, but burnout is specifically tied to chronic workplace or role-related stress. Depression tends to be more pervasive across all life areas. However, prolonged burnout can lead to depression. If you are unsure, taking both the burnout assessment and the PHQ-9 can help clarify the picture." },
    ],
  },

  "work-stress-check": {
    toolName: "Work Stress Self-Check",
    prompts: [
      "Which work stressors — workload, relationships, control, or recognition — feel most pressing right now?",
      "How is work stress showing up in your body — tension, headaches, sleep problems, or changes in appetite?",
      "Are there aspects of your work environment you can change, and which feel outside your control?",
      "What does a manageable workday look like for you, and how far is your current reality from that?",
      "What is one conversation or boundary that could reduce your work stress this week?",
    ],
    faqEntries: [
      { question: "How do I know if my work stress level is too high?", answer: "If work stress is affecting your sleep, physical health, relationships outside of work, or your ability to enjoy non-work activities, your stress level may be exceeding what is sustainable. The work stress self-check helps you identify which specific areas are contributing most so you can take targeted action." },
      { question: "What is the difference between normal work stress and chronic work stress?", answer: "Normal work stress is temporary and tied to specific events like deadlines or presentations. Chronic work stress persists over weeks or months and can lead to burnout, anxiety, or depression. If your stress feels constant rather than situational, it may be time to evaluate your workload, boundaries, or work environment." },
    ],
  },

  "holmes-rahe-stress-inventory": {
    toolName: "Holmes-Rahe Stress Inventory",
    prompts: [
      "Looking at the life events you checked, how many occurred in the past 12 months — and were you surprised by the total?",
      "Which recent life changes have been the most emotionally demanding, even if they were positive events?",
      "How are you currently coping with the cumulative stress from these life events?",
      "What support systems — friends, family, professionals — are available to you during this period of change?",
      "What is one proactive step you could take to protect your health during a high-stress period?",
    ],
    faqEntries: [
      { question: "What does my Holmes-Rahe stress inventory score mean for my health?", answer: "The Holmes-Rahe scale assigns point values to common life events. A score above 300 suggests a high risk of stress-related illness within the next two years, based on the original research. Scores between 150–299 indicate moderate risk. This is a general indicator, not a prediction — many protective factors can reduce your actual risk." },
      { question: "Can positive life events cause stress too?", answer: "Yes — the Holmes-Rahe inventory includes positive events like marriage, pregnancy, job promotions, and vacations because all significant life changes require adaptation, which creates physiological stress. Understanding that even good changes demand energy can help you plan recovery time and support." },
    ],
  },

  /* ─── Sleep, Mood & Mental Load ──────────────────────────────── */

  "sleep-and-mood-check": {
    toolName: "Sleep & Mood Reflection",
    prompts: [
      "What patterns do you notice between your sleep quality and how you feel emotionally the next day?",
      "Are there specific habits — screen time, caffeine, worry — that you think affect your sleep most?",
      "How does poor sleep affect your patience, focus, or motivation during the day?",
      "What has helped you sleep better in the past, even if you are not doing it consistently now?",
      "What is one realistic change to your bedtime routine you could try this week?",
    ],
    faqEntries: [
      { question: "How does sleep affect mental health and mood?", answer: "Sleep and mood are deeply connected. Poor sleep increases irritability, reduces emotional resilience, and worsens symptoms of anxiety and depression. Conversely, improving sleep quality is one of the most effective ways to support mental health. Even small changes — consistent wake times, reducing screen exposure — can make a noticeable difference." },
      { question: "Should I talk to a doctor about sleep problems affecting my mood?", answer: "If poor sleep is a recurring pattern that is affecting your mood, energy, or ability to function, speaking with a healthcare provider is worthwhile. Sleep disorders like insomnia or sleep apnea are treatable, and addressing them often improves mood and mental health symptoms significantly." },
    ],
  },

  "athens-insomnia-scale": {
    toolName: "Athens Insomnia Scale",
    prompts: [
      "Which aspect of sleep — falling asleep, staying asleep, or waking too early — is most disrupted for you?",
      "How long have your insomnia symptoms been present — days, weeks, or months?",
      "How is poor sleep affecting your daytime functioning, mood, or ability to concentrate?",
      "Have you tried any sleep hygiene strategies — and which ones helped even a little?",
      "What worries or thoughts tend to keep you awake at night?",
    ],
    faqEntries: [
      { question: "What does my Athens Insomnia Scale score mean?", answer: "The Athens Insomnia Scale measures sleep difficulty over the past month. A score of 6 or above suggests clinically significant insomnia. The scale examines sleep onset, nighttime awakenings, early morning awakening, sleep quality, and daytime impact — giving you a comprehensive view of how sleep is affecting you." },
      { question: "What is the most effective treatment for insomnia?", answer: "Cognitive Behavioral Therapy for Insomnia (CBT-I) is considered the first-line treatment, recommended over sleep medications by major medical organizations. CBT-I addresses the thoughts and behaviors that perpetuate insomnia and has lasting effects. Ask your healthcare provider about CBT-I programs or apps." },
    ],
  },

  "mental-load-calculator": {
    toolName: "Mental Load Calculator",
    prompts: [
      "Which categories of mental load — household, emotional, financial, or logistics — feel heaviest for you?",
      "How does carrying this mental load affect your stress level, mood, and relationships?",
      "Are there specific tasks you handle that others in your household could share or take on?",
      "What would it feel like to have even 20% of your mental load redistributed?",
      "What is one concrete conversation you could have this week about sharing responsibilities more evenly?",
    ],
    faqEntries: [
      { question: "What is mental load and why does it affect mental health?", answer: "Mental load refers to the invisible cognitive work of managing a household or family — remembering appointments, planning meals, tracking supplies, coordinating schedules. Research shows that an unequal distribution of mental load contributes to stress, burnout, and relationship dissatisfaction, particularly for women and primary caregivers." },
      { question: "How can I reduce my mental load?", answer: "Start by making invisible tasks visible — list everything you manage and discuss redistribution with your partner or household members. Use shared calendars, delegate with full ownership (not just execution), and let go of standards that create unnecessary work. If mental load is causing significant stress, a therapist can help you set boundaries." },
    ],
  },

  /* ─── Self-Esteem, Loneliness, Resilience ────────────────────── */

  "rosenberg-self-esteem-scale": {
    toolName: "Rosenberg Self-Esteem Scale",
    prompts: [
      "Which statements about yourself — positive or negative — felt most strongly true when you answered?",
      "How does your self-esteem fluctuate in different contexts — at work, in relationships, or when alone?",
      "Can you identify specific experiences or messages that have shaped how you feel about yourself?",
      "What qualities or accomplishments do others recognize in you that you find hard to see in yourself?",
      "What is one kind thing you could say to yourself today that you would easily say to a friend?",
    ],
    faqEntries: [
      { question: "What does my Rosenberg Self-Esteem Scale score mean?", answer: "The Rosenberg scale measures global self-esteem on a range from 0 to 30. Scores below 15 suggest low self-esteem. Low self-esteem is not a condition itself, but it is associated with depression, anxiety, and difficulty in relationships. Understanding your baseline can help you track progress as you work on self-perception." },
      { question: "Can low self-esteem be improved with therapy?", answer: "Yes — low self-esteem responds well to therapy, particularly cognitive behavioral therapy (CBT), which helps identify and challenge negative self-beliefs. Self-compassion practices and mindfulness have also shown significant benefits. Improvement is gradual but achievable with consistent effort and support." },
    ],
  },

  "ucla-loneliness-scale": {
    toolName: "UCLA Loneliness Scale",
    prompts: [
      "Which aspects of loneliness from the questionnaire resonated most — lack of companionship, feeling left out, or emotional isolation?",
      "Is your loneliness primarily about the quantity of relationships, the quality, or both?",
      "How has loneliness affected your motivation to reach out to others or participate in social activities?",
      "Are there connections in your life that could deepen if you invested more time or vulnerability?",
      "What is one small step you could take this week to feel more connected — even briefly?",
    ],
    faqEntries: [
      { question: "What does my UCLA Loneliness Scale score indicate?", answer: "Higher scores on the UCLA Loneliness Scale indicate greater feelings of loneliness and social isolation. Loneliness is increasingly recognized as a significant public health concern associated with depression, anxiety, cardiovascular disease, and cognitive decline. Your score helps you understand the extent of social disconnection you are experiencing." },
      { question: "How can I reduce feelings of loneliness?", answer: "Research suggests that quality of connections matters more than quantity. Focus on deepening existing relationships rather than adding new ones. Volunteering, joining interest-based groups, and being open about your feelings can help. If loneliness is persistent and affecting your mental health, a therapist can help address underlying barriers to connection." },
    ],
  },

  "brief-resilience-scale": {
    toolName: "Brief Resilience Scale",
    prompts: [
      "How do you typically respond to stressful events — do you bounce back quickly, or does recovery take time?",
      "What personal strengths or resources help you get through difficult periods?",
      "Are there specific situations where your resilience feels strong, and others where it feels depleted?",
      "What has a past experience of overcoming adversity taught you about yourself?",
      "What is one thing you could do regularly to build your capacity to handle stress?",
    ],
    faqEntries: [
      { question: "What does a low resilience score on the Brief Resilience Scale mean?", answer: "A low resilience score suggests you may find it harder to bounce back from stressful events. Resilience is not a fixed trait — it can be developed through practices like building social connections, developing problem-solving skills, maintaining physical health, and learning stress management techniques." },
      { question: "Can resilience be improved over time?", answer: "Yes — research consistently shows that resilience is a skill that can be strengthened. Regular exercise, strong social connections, mindfulness practices, adequate sleep, and cognitive reframing all contribute to greater resilience. Therapy, particularly CBT, can also help build resilience by changing how you respond to adversity." },
    ],
  },

  /* ─── ACE & Family ───────────────────────────────────────────── */

  "ace-questionnaire": {
    toolName: "ACE (Adverse Childhood Experiences) Questionnaire",
    prompts: [
      "How did it feel to reflect on these childhood experiences — was anything surprising or difficult to acknowledge?",
      "Have you noticed connections between your childhood experiences and your current emotional patterns or relationships?",
      "What protective factors — supportive adults, skills, or inner strengths — helped you through difficult childhood experiences?",
      "Are there areas of your life today where the effects of childhood adversity still show up?",
      "What kind of support — therapy, community, self-care — might help you process these experiences?",
    ],
    faqEntries: [
      { question: "What does my ACE score mean for my health?", answer: "ACE scores reflect the number of adverse childhood experiences you endorsed. Research by Felitti et al. (1998) found that higher ACE scores correlate with increased risk for chronic health conditions, mental health challenges, and substance use. However, an ACE score is not a destiny — protective factors, resilience, and support significantly modify outcomes." },
      { question: "Should I see a therapist about my ACE score?", answer: "If your ACE score is 4 or higher, or if reflecting on childhood experiences brought up strong emotions, working with a trauma-informed therapist can be very helpful. Therapies like EMDR and trauma-focused CBT are specifically designed to help people process and heal from adverse childhood experiences." },
    ],
  },

  "family-impact-assessment": {
    toolName: "Family Impact Assessment",
    prompts: [
      "Which areas of family life — communication, trust, financial stability, or emotional safety — feel most affected?",
      "How has substance use or mental health challenges in your family changed the dynamics between family members?",
      "What role do you feel you play in your family system — caretaker, mediator, the one who keeps things together?",
      "What boundaries would help protect your own well-being while still supporting your family?",
      "What kind of family support — counseling, a support group, or honest conversations — might help right now?",
    ],
    faqEntries: [
      { question: "How does a family member's substance use affect the whole family?", answer: "Substance use affects the entire family system, not just the individual using. Common effects include disrupted communication, financial strain, emotional volatility, trust erosion, and role reversal (children taking on adult responsibilities). The Family Impact Assessment helps you identify which specific areas are most affected in your situation." },
      { question: "What support is available for families affected by substance use?", answer: "Al-Anon and Nar-Anon offer free support groups specifically for families affected by a loved one's substance use. Family therapy can help improve communication and establish healthy boundaries. SAMHSA's helpline (1-800-662-4357) can also connect families with local resources and guidance." },
    ],
  },

  /* ─── Recovery Tools ─────────────────────────────────────────── */

  "sobriety-calculator": {
    toolName: "Sobriety Calculator",
    prompts: [
      "What motivated you to start counting your sober days, and how has that motivation evolved?",
      "What has been the most unexpected benefit of your sobriety journey so far?",
      "What has been the hardest part — and how have you navigated it?",
      "Who or what has provided the most support during your recovery?",
      "What would you tell someone who is on day one of their sobriety journey?",
    ],
    faqEntries: [
      { question: "Why is tracking sober days helpful in recovery?", answer: "Tracking sober days provides tangible evidence of progress, which is especially meaningful during early recovery when daily challenges can feel overwhelming. Milestones create a sense of accomplishment, and research shows that visual progress tracking increases motivation and commitment to behavior change." },
      { question: "What should I do if I relapse after tracking my sobriety?", answer: "A relapse does not erase your progress or the skills you built. Many people in recovery experience setbacks before achieving long-term sobriety. Reset your counter without shame, reflect on what triggered the relapse, and consider reaching out to a counselor or support group. SAMHSA's helpline (1-800-662-4357) is available 24/7." },
    ],
  },

  "money-saved-recovery-calculator": {
    toolName: "Money Saved in Recovery Calculator",
    prompts: [
      "Were you surprised by how much money substance use was costing you?",
      "What would you most like to do with the money you are saving in recovery?",
      "How does seeing the financial impact of recovery affect your motivation to continue?",
      "What other costs — emotional, relational, professional — have decreased since you started recovery?",
    ],
    faqEntries: [
      { question: "How much money can you save by quitting drinking or drug use?", answer: "The amount varies widely based on your previous habits, but many people save hundreds to thousands of dollars per month. The recovery savings calculator helps you see your personal financial impact based on your specific substance, frequency, and spending patterns." },
      { question: "Does tracking money saved in recovery help with motivation?", answer: "Yes — research on behavior change shows that connecting actions to tangible, visible outcomes increases motivation. Seeing a concrete dollar amount grow over time reinforces the benefits of sobriety in a way that complements emotional and health-related motivations." },
    ],
  },

  "health-recovery-timeline": {
    toolName: "Health Recovery Timeline",
    prompts: [
      "Which health improvements on the timeline are you most looking forward to experiencing?",
      "Have you already noticed any physical or mental health changes since reducing or stopping use?",
      "How does understanding the timeline of recovery affect your patience with the process?",
      "What health goals would you like to set for yourself over the next three months?",
    ],
    faqEntries: [
      { question: "How long does it take for your body to recover after quitting alcohol or drugs?", answer: "Recovery timelines vary by substance and individual factors, but many positive changes begin within hours to days. Liver function, cardiovascular health, sleep quality, and cognitive function improve progressively over weeks and months. The health recovery timeline shows you what to expect at each stage based on published research." },
      { question: "What physical health improvements happen first after quitting?", answer: "In the first week, most people notice improved sleep, better hydration, reduced blood pressure, and improved appetite. Within 2–4 weeks, liver enzymes begin normalizing and energy levels increase. Within 3–6 months, significant improvements in immune function, skin health, and cognitive clarity are common." },
    ],
  },

  "bac-calculator": {
    toolName: "BAC (Blood Alcohol Content) Calculator",
    prompts: [
      "Were you surprised by the estimated BAC based on your typical drinking pattern?",
      "How does knowing your estimated BAC change how you think about your drinking on a typical night out?",
      "At what point in an evening do you typically stop drinking — and is that before or after impairment begins?",
      "What strategies could you use to keep your BAC at a lower, safer level?",
    ],
    faqEntries: [
      { question: "How accurate is an online BAC calculator?", answer: "Online BAC calculators provide estimates based on the Widmark formula, which accounts for weight, sex, number of drinks, and time elapsed. However, individual factors like metabolism, food intake, medications, and tolerance mean that actual BAC can vary. These calculators are educational tools, not substitutes for a breathalyzer or blood test." },
      { question: "What BAC level is considered legally impaired?", answer: "In most US states, a BAC of 0.08% is the legal limit for driving. However, impairment begins well below this level — at 0.02% you may experience altered mood and relaxed judgment, and at 0.05% motor coordination and judgment are measurably affected. There is no safe BAC level for driving." },
    ],
  },

  "standard-drinks-calculator": {
    toolName: "Standard Drinks Calculator",
    prompts: [
      "Were you surprised to learn how many standard drinks are in your typical beverage choices?",
      "How does understanding standard drink equivalents change your view of your drinking habits?",
      "Are there specific drinks or situations where you tend to consume more standard drinks than you realized?",
      "What guidelines for low-risk drinking feel realistic for your lifestyle?",
    ],
    faqEntries: [
      { question: "What counts as one standard drink?", answer: "In the US, one standard drink contains about 14 grams of pure alcohol — equivalent to 12 oz of regular beer (5% ABV), 5 oz of wine (12% ABV), or 1.5 oz of distilled spirits (40% ABV). Many common servings actually contain more than one standard drink, which is why a calculator can be eye-opening." },
      { question: "How many standard drinks per week is considered low risk?", answer: "The NIAAA defines low-risk drinking as no more than 14 drinks per week for men and 7 per week for women, with no more than 4 per occasion for men and 3 for women. Newer research from the Canadian Centre on Substance Use and Addiction suggests even lower limits for optimal health." },
    ],
  },

  "halt-check-in": {
    toolName: "HALT Check-In",
    prompts: [
      "Which of the four HALT states — Hungry, Angry, Lonely, or Tired — do you experience most often before a craving or emotional low?",
      "How quickly can you usually recognize when you are in a HALT state?",
      "What quick actions can you take for each HALT state before it escalates?",
      "How has checking in with HALT helped you avoid reactive decisions?",
    ],
    faqEntries: [
      { question: "What does HALT stand for and why is it used in recovery?", answer: "HALT stands for Hungry, Angry, Lonely, and Tired — four basic states that increase vulnerability to relapse and poor decision-making. HALT is widely used in recovery programs because addressing these physical and emotional needs reduces the intensity of cravings and emotional reactivity." },
      { question: "How often should I do a HALT check-in?", answer: "Ideally, check in with HALT at least once daily, and whenever you notice increased stress, cravings, or emotional volatility. Many people find it helpful to do HALT check-ins at transition points in their day — morning, after work, and before bed. The more regularly you practice, the more automatic self-awareness becomes." },
    ],
  },

  "withdrawal-timeline": {
    toolName: "Withdrawal Timeline",
    prompts: [
      "Which withdrawal symptoms are you most concerned about or currently experiencing?",
      "Do you have medical support available during the withdrawal process?",
      "What comfort measures or coping strategies have you prepared for the most difficult days?",
      "Who can you call for support if withdrawal symptoms become overwhelming?",
    ],
    faqEntries: [
      { question: "How long do withdrawal symptoms last?", answer: "Withdrawal timelines vary significantly by substance. Alcohol withdrawal typically peaks at 24–72 hours and resolves within 5–7 days. Opioid withdrawal peaks at 36–72 hours and lasts 7–10 days. Benzodiazepine withdrawal can last weeks to months. Individual factors like duration of use and overall health also affect the timeline." },
      { question: "Is it dangerous to quit alcohol or drugs without medical supervision?", answer: "Withdrawal from alcohol, benzodiazepines, and certain other substances can be medically dangerous and potentially life-threatening. If you have been using heavily or for a long period, medical supervision during withdrawal is strongly recommended. SAMHSA's helpline (1-800-662-4357) can help you find medically supervised detox programs." },
    ],
  },

  "treatment-cost-estimator": {
    toolName: "Treatment Cost Estimator",
    prompts: [
      "Were the estimated treatment costs higher or lower than you expected?",
      "How does understanding the cost breakdown help you plan for getting help?",
      "Are there financial barriers to treatment — and have you explored insurance coverage, sliding scale options, or free programs?",
      "What is the cost of NOT getting treatment — in health, relationships, and lost potential?",
    ],
    faqEntries: [
      { question: "How much does mental health or substance use treatment cost?", answer: "Treatment costs vary widely: outpatient therapy typically ranges from $100–250 per session (often covered by insurance), intensive outpatient programs $5,000–10,000, and residential treatment $10,000–30,000+. Many options exist for reducing costs including insurance coverage, sliding scale fees, state-funded programs, and SAMHSA-funded treatment centers." },
      { question: "Can I get free or low-cost mental health treatment?", answer: "Yes — SAMHSA's treatment locator (findtreatment.gov) lists free and low-cost options. Community mental health centers offer sliding scale fees. Many therapists offer reduced rates for uninsured clients. State Medicaid programs cover mental health and substance use treatment in all 50 states." },
    ],
  },

  "relapse-prevention-plan": {
    toolName: "Relapse Prevention Plan Builder",
    prompts: [
      "What are your three most common triggers — and which one catches you off guard most often?",
      "What early warning signs have you noticed before previous relapses or close calls?",
      "Who are the people you can call when you feel yourself slipping — and do they know they are on your list?",
      "What healthy coping strategies have worked for you, and which ones do you want to strengthen?",
      "What does your ideal daily routine look like in recovery — and how close is your current routine to that?",
    ],
    faqEntries: [
      { question: "Why is a relapse prevention plan important in recovery?", answer: "A relapse prevention plan provides a concrete, personalized strategy for maintaining sobriety when challenges arise. Research shows that people with written plans are significantly more likely to sustain recovery because they have pre-planned responses to triggers, cravings, and high-risk situations rather than relying on willpower alone." },
      { question: "What should a relapse prevention plan include?", answer: "An effective plan includes: personal triggers (people, places, emotions), early warning signs, coping strategies for each trigger, emergency contacts, daily healthy habits, and a crisis plan for high-risk moments. The plan should be reviewed and updated regularly as your recovery evolves." },
    ],
  },

  "readiness-to-change": {
    toolName: "Readiness to Change Assessment",
    prompts: [
      "Where do you honestly feel you are in the stages of change — precontemplation, contemplation, preparation, action, or maintenance?",
      "What would need to happen for you to move one stage forward?",
      "What are the pros and cons of making a change right now in your life?",
      "What past attempts at change have taught you about what works and what does not?",
      "What support would help you take the next step?",
    ],
    faqEntries: [
      { question: "What are the stages of change in recovery?", answer: "The Transtheoretical Model identifies five stages: Precontemplation (not yet considering change), Contemplation (thinking about change), Preparation (planning to change), Action (actively making changes), and Maintenance (sustaining changes over time). Understanding your current stage helps you set realistic goals and find appropriate support." },
      { question: "What if I am not ready to change yet?", answer: "Being in the precontemplation or contemplation stage is a normal part of the change process — not a failure. Most people cycle through stages multiple times before making lasting changes. Exploring your ambivalence honestly, learning about the effects of your behavior, and keeping the door open for future change are all meaningful steps." },
    ],
  },

  /* ─── Worksheets & Exercises ─────────────────────────────────── */

  "trigger-identification-worksheet": {
    toolName: "Trigger Identification Worksheet",
    prompts: [
      "Which triggers surprised you — were there patterns you had not consciously recognized before?",
      "How do emotional triggers (stress, loneliness, boredom) differ from situational triggers (places, people, times) for you?",
      "For your top three triggers, what is one specific coping strategy you could use for each?",
      "How can you modify your environment or routine to reduce exposure to your strongest triggers?",
    ],
    faqEntries: [
      { question: "Why is identifying triggers important for recovery?", answer: "Triggers are people, places, emotions, or situations that increase the urge to use substances or engage in unhealthy behaviors. Identifying your personal triggers is a foundational step in recovery because it allows you to prepare coping responses in advance rather than reacting impulsively in the moment." },
      { question: "What are common triggers for substance use relapse?", answer: "Common triggers include: stress, negative emotions (anger, loneliness, boredom), social pressure, being in places associated with past use, celebrations, financial problems, relationship conflict, and physical pain. Triggers are highly individual, which is why a personal identification exercise is more valuable than a general list." },
    ],
  },

  "coping-skills-randomizer": {
    toolName: "Coping Skills Randomizer",
    prompts: [
      "Which coping skills that came up have you tried before — and which are new to you?",
      "Do you tend to rely on one type of coping (distraction, physical activity, social connection) more than others?",
      "What coping skills work best for you when stress is high versus when it is moderate?",
      "What barriers prevent you from using coping skills when you need them most?",
    ],
    faqEntries: [
      { question: "What are healthy coping skills for stress and anxiety?", answer: "Healthy coping skills include physical activity, deep breathing exercises, grounding techniques, journaling, talking to a trusted person, spending time in nature, creative expression, and mindfulness meditation. The most effective coping toolkit includes a variety of strategies since different situations call for different approaches." },
      { question: "Why is it important to have multiple coping strategies?", answer: "No single coping skill works in every situation. Physical exercise may be ideal at home but impractical during a meeting. Having 5–10 go-to strategies means you always have an option available. The coping skills randomizer helps you discover new techniques beyond your usual patterns." },
    ],
  },

  "daily-recovery-check-in": {
    toolName: "Daily Recovery Check-In",
    prompts: [
      "What patterns do you notice in your daily check-ins over the past week — are certain days consistently harder?",
      "How does checking in daily affect your awareness of your emotional state?",
      "What does a good recovery day look like for you, and what makes it possible?",
      "How can your daily check-in information help you in conversations with your counselor or sponsor?",
    ],
    faqEntries: [
      { question: "Why is a daily check-in important in recovery?", answer: "Daily check-ins build self-awareness, which is one of the strongest predictors of sustained recovery. By consistently monitoring your mood, cravings, sleep, and overall well-being, you can spot warning signs early and take proactive steps before a crisis develops." },
      { question: "What should a daily recovery check-in include?", answer: "An effective daily check-in covers: current mood, craving intensity, sleep quality, HALT status (Hungry, Angry, Lonely, Tired), gratitude or positive moments, and any triggers encountered. Keeping it brief (2–3 minutes) makes it sustainable as a daily habit." },
    ],
  },

  "urge-surfing-timer": {
    toolName: "Urge Surfing Timer",
    prompts: [
      "What did you notice about the intensity of your craving as you practiced urge surfing — did it peak and then decrease?",
      "How does observing a craving without acting on it change your relationship with urges?",
      "What physical sensations do you notice in your body when a craving is at its peak?",
      "How might regular urge surfing practice build your confidence in managing future cravings?",
    ],
    faqEntries: [
      { question: "What is urge surfing and how does it help with cravings?", answer: "Urge surfing is a mindfulness technique developed by Dr. Alan Marlatt that involves observing a craving as a wave — it builds, peaks, and naturally subsides without you needing to act on it. Research shows that cravings typically last 15–30 minutes. By riding the wave rather than fighting it, you build confidence that cravings are temporary and manageable." },
      { question: "How long do cravings last if you do not act on them?", answer: "Most cravings peak within 15–20 minutes and begin to subside within 30 minutes if you do not act on them. This is why the urge surfing technique is so effective — it helps you stay present through the peak until the natural decline occurs. With practice, cravings become shorter and less intense over time." },
    ],
  },

  "box-breathing-exercise": {
    toolName: "Box Breathing Exercise",
    prompts: [
      "How did your body feel before and after the box breathing exercise — did you notice any shifts in tension or heart rate?",
      "In what situations during your typical day could box breathing be most helpful?",
      "How does controlled breathing compare to other stress management techniques you have tried?",
      "What would a regular breathing practice — even 2 minutes per day — look like in your schedule?",
    ],
    faqEntries: [
      { question: "How does box breathing reduce anxiety and stress?", answer: "Box breathing activates the parasympathetic nervous system, which counteracts the fight-or-flight stress response. The structured 4-4-4-4 pattern (inhale, hold, exhale, hold) slows heart rate, lowers blood pressure, and reduces cortisol levels. Research shows measurable anxiety reduction within 2–5 minutes of practice." },
      { question: "When is the best time to practice box breathing?", answer: "Box breathing is effective any time stress or anxiety spikes: before meetings, during conflict, when cravings arise, or before sleep. Many people also benefit from a scheduled daily practice — morning or evening — to build a baseline of calm. The technique is discreet enough to use anywhere without others noticing." },
    ],
  },

  "five-senses-grounding": {
    toolName: "5-4-3-2-1 Grounding Exercise",
    prompts: [
      "Which of your five senses was easiest to engage during grounding — and which was hardest?",
      "How did shifting your attention to sensory details change the intensity of what you were feeling?",
      "In what situations — anxiety, dissociation, overwhelm — do you think grounding would help you most?",
      "What personalized sensory anchors (a specific scent, texture, or sound) could you keep accessible for grounding?",
    ],
    faqEntries: [
      { question: "What is the 5-4-3-2-1 grounding technique and when should I use it?", answer: "The 5-4-3-2-1 technique is a sensory grounding exercise that redirects your attention from anxious or intrusive thoughts to the present moment. You identify 5 things you see, 4 you can touch, 3 you hear, 2 you smell, and 1 you taste. It is especially helpful during panic attacks, dissociation, flashbacks, or intense anxiety." },
      { question: "Does grounding actually work for anxiety and panic attacks?", answer: "Yes — grounding techniques are evidence-based tools recommended by therapists for managing acute anxiety, panic, and trauma-related symptoms. By engaging the senses, grounding interrupts the anxiety feedback loop and brings your nervous system back to the present. Many people notice relief within minutes of practicing." },
    ],
  },

  "cognitive-distortion-identifier": {
    toolName: "Cognitive Distortion Identifier",
    prompts: [
      "Which cognitive distortions — all-or-nothing thinking, catastrophizing, mind reading — do you recognize in your own thought patterns?",
      "How do these distorted thoughts affect your mood, decisions, and relationships?",
      "Can you think of a recent situation where you caught yourself using one of these thinking patterns?",
      "What would a more balanced version of your most frequent distorted thought sound like?",
      "How might recognizing these patterns change how you respond to stressful situations?",
    ],
    faqEntries: [
      { question: "What are cognitive distortions and how do they affect mental health?", answer: "Cognitive distortions are automatic, biased patterns of thinking that reinforce negative emotions. Common examples include catastrophizing (assuming the worst), all-or-nothing thinking, and personalization (blaming yourself for everything). These distortions are a central focus of cognitive behavioral therapy because changing them leads to significant improvements in mood and behavior." },
      { question: "How can I stop cognitive distortions?", answer: "You do not need to stop thoughts entirely — the goal is to recognize them and reframe them. When you notice a distorted thought, ask yourself: 'What is the evidence for and against this thought?' and 'What would I say to a friend thinking this?' With practice, you develop the habit of catching distortions before they spiral into strong negative emotions." },
    ],
  },

  "safety-plan": {
    toolName: "Safety Plan",
    prompts: [
      "Do the warning signs you identified feel comprehensive — are there early signs you might be missing?",
      "Are the coping strategies in your plan ones you can realistically access during a crisis?",
      "Have you shared this safety plan with someone you trust — a friend, family member, or therapist?",
      "Is your environment set up to support your safety — have you considered reducing access to means?",
      "When do you plan to review and update this safety plan next?",
    ],
    faqEntries: [
      { question: "What is a safety plan and who should have one?", answer: "A safety plan is a personalized, prioritized list of coping strategies and resources for use during a crisis. Originally developed by Stanley and Brown (2012), it is recommended for anyone experiencing suicidal thoughts, self-harm urges, or emotional crises. Having a plan in advance reduces the need to make decisions during the most difficult moments." },
      { question: "What should a mental health safety plan include?", answer: "A comprehensive safety plan includes: personal warning signs, internal coping strategies (things you can do alone), people and social settings that provide distraction, people you can call for help, professionals and crisis lines (988 Suicide & Crisis Lifeline), and steps to make your environment safe. Review and update it regularly." },
    ],
  },

  "cbt-thought-record": {
    toolName: "CBT Thought Record",
    prompts: [
      "What situation triggered the negative thought you recorded — and how intense was the emotion on a scale of 1–10?",
      "What evidence supports the negative thought — and what evidence challenges it?",
      "After completing the thought record, did the intensity of the emotion change?",
      "What patterns do you notice in the types of situations or thoughts that recur most often?",
      "How could you use thought records regularly to build awareness of your thinking patterns?",
    ],
    faqEntries: [
      { question: "What is a CBT thought record and how do I use it?", answer: "A CBT thought record is a structured worksheet used in cognitive behavioral therapy to examine and challenge negative automatic thoughts. You record the triggering situation, the automatic thought, the emotion it caused, evidence for and against the thought, and a more balanced alternative. With practice, this process becomes more automatic." },
      { question: "How often should I fill out a CBT thought record?", answer: "Start by completing a thought record whenever you notice a strong negative emotion or unhelpful thought pattern. Many therapists recommend 1–3 per week during active CBT treatment. Over time, the process of examining thoughts becomes more automatic and you may need written records less frequently." },
    ],
  },

  "worry-time-scheduler": {
    toolName: "Worry Time Scheduler",
    prompts: [
      "How does scheduling a specific time to worry change how much you worry throughout the rest of the day?",
      "Which worries feel productive (leading to problem-solving) and which feel unproductive (circular and repetitive)?",
      "What strategies help you postpone worry when it comes up outside your scheduled worry time?",
      "Has structured worry time helped you realize that some concerns feel less urgent when you return to them later?",
    ],
    faqEntries: [
      { question: "What is worry time and does it actually help with anxiety?", answer: "Worry time is a CBT technique where you designate a specific 15–30 minute period each day to focus on your worries. Outside that window, you postpone worry to the scheduled time. Research shows this reduces overall worry frequency and duration because it gives the brain a structured alternative to constant, uncontrolled worrying." },
      { question: "How do I set up an effective worry time routine?", answer: "Choose a consistent 15–30 minute window (not before bed). When worries arise outside this time, write them down and postpone. During worry time, review your list — many worries will have resolved or feel less urgent. For remaining worries, distinguish between solvable problems (make an action plan) and unsolvable concerns (practice acceptance)." },
    ],
  },

  "values-card-sort": {
    toolName: "Values Card Sort",
    prompts: [
      "Were you surprised by which values rose to the top — or did they confirm what you already felt?",
      "How well does your daily life align with the values you identified as most important?",
      "Are there values you ranked highly that you feel you are neglecting — and what would honoring them look like?",
      "How could your top values guide decisions you are currently facing?",
      "What is one action you could take this week that aligns with your most important value?",
    ],
    faqEntries: [
      { question: "Why is knowing your personal values important for mental health?", answer: "Living in alignment with your core values is strongly associated with greater life satisfaction, reduced anxiety, and improved decision-making. When your daily actions conflict with your values, it creates internal tension that contributes to stress and dissatisfaction. Values clarification is a key component of Acceptance and Commitment Therapy (ACT)." },
      { question: "How do I use my values to make better decisions?", answer: "When facing a decision, ask yourself which option better aligns with your top 3–5 values. This does not eliminate difficulty, but it provides a clear framework. For example, if 'family' and 'health' are top values, a decision about work-life balance becomes clearer. Values act as a compass, not a rulebook." },
    ],
  },

  "msi-bpd-screening": {
    toolName: "MSI-BPD Borderline Personality Disorder Screening",
    prompts: [
      "Which of the ten areas felt most relevant to your current experience — and has that changed over time?",
      "Have you noticed patterns in your closest relationships that you would like to understand better?",
      "When you experience intense emotions, what has helped you feel more grounded in the past?",
      "Is there someone in your life — a friend, family member, or professional — you feel safe talking to about these experiences?",
      "What would feel like one small, manageable step toward better understanding yourself this week?",
      "If you could share one thing about your emotional experiences with a mental health professional, what would it be?",
    ],
    faqEntries: [
      { question: "What should I do after taking the MSI-BPD screening?", answer: "After completing the MSI-BPD, take a moment to reflect on which items felt most relevant to your daily life. Consider writing down your score and any patterns you notice so you can share them with a mental health professional. The reflection prompts on this page can help you organize your thoughts before seeking further evaluation." },
      { question: "How can I use my MSI-BPD results to talk to a therapist about borderline personality disorder?", answer: "You can download or print your results using the button on this page and bring them to your next appointment. You might say: 'I took an MSI-BPD screening online and scored [X] — I would like to discuss what that means for me.' A qualified professional can help determine whether a comprehensive evaluation is appropriate." },
    ],
  },

  "dbt-crisis-skills": {
    toolName: "DBT Crisis Survival Skills",
    prompts: [
      "Which DBT crisis skills — TIPP, distraction, self-soothing, or pros and cons — felt most accessible to you?",
      "How quickly were you able to notice a shift in your emotional intensity after using a skill?",
      "Which skills would you want to have memorized for moments when you cannot access your phone or a guide?",
      "How could you practice these skills during lower-stress moments so they become second nature during crises?",
    ],
    faqEntries: [
      { question: "What are DBT crisis survival skills?", answer: "DBT (Dialectical Behavior Therapy) crisis survival skills are techniques designed to help you tolerate intense emotions without making the situation worse. Key skills include TIPP (Temperature, Intense exercise, Paced breathing, Progressive relaxation), distraction through activities, self-soothing with the five senses, and weighing pros and cons of crisis behavior." },
      { question: "When should I use DBT crisis skills versus regular coping skills?", answer: "DBT crisis skills are specifically designed for high-intensity moments when your emotional distress is a 7 out of 10 or higher. They are not meant for everyday stress — they are emergency tools for when you feel overwhelmed, at risk of self-harm, or in danger of acting impulsively. For everyday stress, regular coping skills and mindfulness are more appropriate." },
    ],
  },
};

import fs from 'fs';
import path from 'path';

const appDir = 'C:/Users/jason/empire/mhsud/src/app';
const YMYL_DISCLAIMER = 'This tool is for informational purposes only. Not a substitute for professional mental health treatment.';

// Skip these directories
const SKIP = new Set([
  'about', 'privacy', 'terms', 'contact', 'blog', 'cookies',
  'accessibility', 'disclaimer', 'do-not-sell', 'crisis-resources',
  'how-to-talk-to-your-doctor-about-mental-health', 'page.tsx'
]);

// Already has AnswerBlock
const ALREADY_DONE = new Set([
  'audit-alcohol-test', 'gad-7-anxiety-test', 'phq-9-depression-test'
]);

// Tool descriptions map - what/who/bottomLine for each tool
const toolData = {
  'ace-questionnaire': {
    what: 'A 10-question screening based on the CDC-Kaiser ACE Study that counts categories of adverse childhood experiences before age 18.',
    who: 'Adults who want to understand how childhood adversity may relate to their current health and wellbeing.',
    bottomLine: 'Your ACE score is one data point, not a destiny. ' + YMYL_DISCLAIMER,
  },
  'ace-score-interpretation': {
    what: 'A guide that explains what ACE scores mean, how they relate to health outcomes, and what resilience factors can help.',
    who: 'Anyone who has completed the ACE questionnaire and wants to understand their score in context.',
    bottomLine: 'A high ACE score does not predict your future — resilience and protective factors matter. ' + YMYL_DISCLAIMER,
  },
  'adhd-test-adults': {
    what: 'A free ASRS-based ADHD screening for adults that assesses attention, hyperactivity, and executive function symptoms.',
    who: 'Adults who suspect they may have ADHD and want a validated self-screening before talking to a provider.',
    bottomLine: 'This screening indicates whether ADHD symptoms are present — only a clinician can diagnose ADHD. ' + YMYL_DISCLAIMER,
  },
  'adhd-test-for-teens': {
    what: 'An ASRS-based ADHD screening adapted for teenagers that covers attention, impulsivity, and hyperactivity symptoms.',
    who: 'Teens or parents of teens who want to check whether ADHD symptoms warrant further professional evaluation.',
    bottomLine: 'Teen ADHD often looks different from the childhood presentation — share results with a healthcare provider. ' + YMYL_DISCLAIMER,
  },
  'adhd-test-women': {
    what: 'An ADHD screening designed to highlight symptoms commonly underdiagnosed in women, including inattentive-type presentations.',
    who: 'Women who suspect they may have ADHD, especially those whose symptoms were missed in childhood.',
    bottomLine: 'ADHD in women is frequently missed because symptoms present differently — discuss results with your provider. ' + YMYL_DISCLAIMER,
  },
  'alcohol-screening-for-college-students': {
    what: 'An AUDIT-based alcohol screening tailored for college students with campus-specific context and resources.',
    who: 'College students who want to evaluate their drinking patterns against evidence-based risk thresholds.',
    bottomLine: 'College drinking norms can mask risky patterns — your score reflects clinical risk levels. ' + YMYL_DISCLAIMER,
  },
  'alcohol-screening-for-women': {
    what: 'An AUDIT-based alcohol screening with gender-specific thresholds and health information for women.',
    who: 'Women who want to assess their alcohol use with screening thresholds calibrated for female physiology.',
    bottomLine: 'Women metabolize alcohol differently — lower thresholds reflect real biological risk differences. ' + YMYL_DISCLAIMER,
  },
  'alcohol-screening-military': {
    what: 'An AUDIT-based alcohol screening with military-specific context, culture considerations, and veteran resources.',
    who: 'Active duty service members and veterans who want a private alcohol use assessment with relevant support resources.',
    bottomLine: 'Military culture can normalize heavy drinking — this screening uses clinical thresholds to assess risk. ' + YMYL_DISCLAIMER,
  },
  'am-i-an-alcoholic-quiz': {
    what: 'The WHO AUDIT screening presented in a direct, accessible format to help you evaluate your relationship with alcohol.',
    who: 'Anyone asking themselves whether their drinking has become a problem and wanting an honest, evidence-based check.',
    bottomLine: 'Alcohol use disorder exists on a spectrum — your score shows where you fall on validated clinical measures. ' + YMYL_DISCLAIMER,
  },
  'am-i-depressed-quiz': {
    what: 'A PHQ-9-based depression screening in accessible quiz format that measures symptom severity over the past two weeks.',
    who: 'Anyone wondering whether what they are feeling might be depression and wanting a quick validated check.',
    bottomLine: 'Depression is common and treatable — a high score means talking to a professional could help. ' + YMYL_DISCLAIMER,
  },
  'anxiety-test-for-men': {
    what: 'A GAD-7-based anxiety screening that highlights how anxiety often manifests differently in men, including irritability and physical symptoms.',
    who: 'Men who may be experiencing anxiety but are unsure because their symptoms do not match stereotypical presentations.',
    bottomLine: 'Anxiety in men often shows up as anger, restlessness, or physical symptoms rather than worry. ' + YMYL_DISCLAIMER,
  },
  'anxiety-test-for-teens': {
    what: 'A GAD-7-based anxiety screening adapted for teenagers with age-appropriate language and context.',
    who: 'Teens or parents of teens who want to check whether anxiety symptoms are clinically significant.',
    bottomLine: 'Some anxiety is normal in adolescence — this screening helps distinguish typical stress from clinical levels. ' + YMYL_DISCLAIMER,
  },
  'anxiety-test-for-women': {
    what: 'A GAD-7-based anxiety screening with context on how anxiety uniquely affects women, including hormonal and social factors.',
    who: 'Women experiencing anxiety symptoms who want a validated screening with gender-specific health context.',
    bottomLine: 'Women are twice as likely to be diagnosed with anxiety disorders — early screening leads to better outcomes. ' + YMYL_DISCLAIMER,
  },
  'aq-10-autism-screening': {
    what: 'The AQ-10, a brief 10-question autism screening tool developed by the Autism Research Centre at Cambridge University.',
    who: 'Adults who want a quick initial screening for autism spectrum traits before seeking a comprehensive evaluation.',
    bottomLine: 'The AQ-10 is a brief screener, not a diagnosis — a full evaluation by a specialist is needed for autism diagnosis. ' + YMYL_DISCLAIMER,
  },
  'asrs-adhd-screening': {
    what: 'The Adult Self-Report Scale (ASRS), a WHO-developed 18-question ADHD screening used in clinical practice worldwide.',
    who: 'Adults who want to take the standard clinical ADHD screening tool used by healthcare providers.',
    bottomLine: 'The ASRS is widely used in clinical settings — share your results with a healthcare provider for next steps. ' + YMYL_DISCLAIMER,
  },
  'asrs-score-interpretation': {
    what: 'A guide explaining ASRS ADHD screening scores, what each range means, and recommended next steps.',
    who: 'Anyone who has completed the ASRS screening and wants to understand their score in clinical context.',
    bottomLine: 'Your ASRS score helps identify whether ADHD evaluation is warranted — it is not a diagnosis by itself. ' + YMYL_DISCLAIMER,
  },
  'athens-insomnia-scale': {
    what: 'The Athens Insomnia Scale, a validated 8-item screening that measures insomnia severity based on ICD-10 diagnostic criteria.',
    who: 'Anyone experiencing sleep difficulties who wants to assess whether their insomnia symptoms reach clinical levels.',
    bottomLine: 'Chronic insomnia affects both mental and physical health — discuss persistent sleep problems with your doctor. ' + YMYL_DISCLAIMER,
  },
  'attachment-style-quiz': {
    what: 'An attachment style assessment that identifies your primary attachment pattern: secure, anxious, avoidant, or fearful-avoidant.',
    who: 'Anyone curious about how their attachment style may influence their relationships and emotional responses.',
    bottomLine: 'Attachment styles can shift with awareness and effort — understanding yours is the first step. ' + YMYL_DISCLAIMER,
  },
  'attachment-style-test-for-couples': {
    what: 'An attachment style assessment designed for partners to take together, showing how their styles interact in the relationship.',
    who: 'Couples who want to understand how their attachment patterns may be creating friction or strengthening their bond.',
    bottomLine: 'Understanding each partner\'s attachment style can transform conflict into connection. ' + YMYL_DISCLAIMER,
  },
  'audit-c-alcohol-screen': {
    what: 'The AUDIT-C, a 3-question brief alcohol screening used in primary care to identify hazardous drinking patterns.',
    who: 'Anyone who wants a quick validated check of their alcohol consumption against clinical risk thresholds.',
    bottomLine: 'The AUDIT-C is a brief initial screen — a positive result suggests taking the full AUDIT for a more detailed assessment. ' + YMYL_DISCLAIMER,
  },
  'audit-c-score-interpretation': {
    what: 'A guide explaining AUDIT-C scores, gender-specific thresholds, and what positive and negative results mean.',
    who: 'Anyone who has completed the AUDIT-C screening and wants to understand their score and next steps.',
    bottomLine: 'AUDIT-C thresholds differ by gender — understand what your specific score indicates. ' + YMYL_DISCLAIMER,
  },
  'audit-score-interpretation': {
    what: 'A guide explaining AUDIT alcohol screening scores, risk zones, and recommended interventions for each level.',
    who: 'Anyone who has completed the AUDIT and wants to understand what their score means clinically.',
    bottomLine: 'Your AUDIT score maps to specific WHO-recommended intervention levels. ' + YMYL_DISCLAIMER,
  },
  'bac-calculator': {
    what: 'A blood alcohol content estimator that calculates approximate BAC based on drinks consumed, body weight, gender, and time elapsed.',
    who: 'Anyone who wants to estimate their current blood alcohol level to make informed decisions.',
    bottomLine: 'BAC calculators provide estimates only — actual impairment varies by individual and many other factors. ' + YMYL_DISCLAIMER,
  },
  'big-five-personality-test': {
    what: 'A personality assessment measuring the Big Five traits: openness, conscientiousness, extraversion, agreeableness, and neuroticism.',
    who: 'Anyone interested in understanding their personality profile using the most widely researched trait model in psychology.',
    bottomLine: 'The Big Five model describes tendencies, not fixed categories — traits exist on a spectrum. ' + YMYL_DISCLAIMER,
  },
  'bipolar-test-young-adults': {
    what: 'An MDQ-based bipolar screening tailored for young adults, when bipolar disorder most commonly first appears.',
    who: 'Young adults experiencing mood swings, energy fluctuations, or impulsive behavior who want to screen for bipolar disorder.',
    bottomLine: 'Bipolar disorder often first appears in late teens to mid-twenties — early detection leads to better management. ' + YMYL_DISCLAIMER,
  },
  'box-breathing-exercise': {
    what: 'A guided box breathing timer with visual and audio cues that walks you through the 4-4-4-4 breathing technique.',
    who: 'Anyone experiencing stress or anxiety who wants an immediate, evidence-based calming exercise.',
    bottomLine: 'Box breathing activates the parasympathetic nervous system and can reduce acute stress in minutes. ' + YMYL_DISCLAIMER,
  },
  'bpd-screening-for-young-adults': {
    what: 'A borderline personality disorder screening adapted for young adults with age-appropriate context and resources.',
    who: 'Young adults experiencing emotional instability, relationship difficulties, or identity confusion who want to screen for BPD.',
    bottomLine: 'BPD is treatable, especially when identified early — share results with a mental health provider. ' + YMYL_DISCLAIMER,
  },
  'bpd-test-for-women': {
    what: 'A BPD screening with context on why borderline personality disorder is more frequently diagnosed in women.',
    who: 'Women experiencing intense emotions, unstable relationships, or identity issues who want a validated BPD screening.',
    bottomLine: 'BPD is highly treatable with DBT and other therapies — a screening is the first step toward support. ' + YMYL_DISCLAIMER,
  },
  'brief-resilience-scale': {
    what: 'The Brief Resilience Scale (BRS), a 6-item validated tool that measures your ability to bounce back from stress and adversity.',
    who: 'Anyone who wants to assess their resilience level and understand how well they recover from difficult experiences.',
    bottomLine: 'Resilience is a skill that can be strengthened — your score reflects current capacity, not a fixed trait. ' + YMYL_DISCLAIMER,
  },
  'burnout-assessment-tool': {
    what: 'A burnout screening that measures exhaustion, cynicism, and reduced professional efficacy across your work life.',
    who: 'Working professionals who feel chronically depleted and want to assess whether they are experiencing clinical burnout.',
    bottomLine: 'Burnout is a recognized occupational phenomenon — high scores indicate it is time to address workload and recovery. ' + YMYL_DISCLAIMER,
  },
  'burnout-test-for-healthcare-workers': {
    what: 'A burnout screening tailored for healthcare professionals with context specific to clinical care environments.',
    who: 'Doctors, nurses, therapists, and other healthcare workers experiencing exhaustion, compassion fatigue, or detachment.',
    bottomLine: 'Healthcare worker burnout affects patient care — addressing your wellbeing is not selfish, it is essential. ' + YMYL_DISCLAIMER,
  },
  'burnout-test-for-nurses': {
    what: 'A burnout screening specifically designed for nurses, addressing the unique stressors of bedside and clinical nursing.',
    who: 'Nurses at any level who feel emotionally or physically exhausted and want to assess their burnout risk.',
    bottomLine: 'Nursing burnout is widespread and not a personal failure — your results can guide a conversation with your supervisor or EAP. ' + YMYL_DISCLAIMER,
  },
  'burnout-test-for-teachers': {
    what: 'A burnout screening for educators covering classroom stress, administrative burden, and emotional exhaustion.',
    who: 'Teachers and educators who feel depleted and want to measure how their work stress compares to burnout thresholds.',
    bottomLine: 'Teacher burnout is a systemic issue — understanding your score is the first step toward sustainable change. ' + YMYL_DISCLAIMER,
  },
  'burnout-test-parents': {
    what: 'A parental burnout screening that measures exhaustion, emotional distancing, and contrast with previous parenting self.',
    who: 'Parents who feel overwhelmed, disconnected, or no longer like themselves and want to know if it qualifies as burnout.',
    bottomLine: 'Parental burnout is real and common — recognizing it is the first step to getting support. ' + YMYL_DISCLAIMER,
  },
  'cage-aid-substance-abuse-screening': {
    what: 'The CAGE-AID, a 4-question screening that detects potential substance use problems across alcohol and drugs.',
    who: 'Anyone who wants a quick initial check of whether their substance use patterns may be concerning.',
    bottomLine: 'Two or more positive answers on the CAGE-AID suggest further evaluation is warranted. ' + YMYL_DISCLAIMER,
  },
  'caregiver-burnout-assessment': {
    what: 'A burnout screening for caregivers that measures the unique physical, emotional, and social toll of caring for others.',
    who: 'Family caregivers and professional caretakers who feel exhausted, isolated, or resentful and want to assess their burnout level.',
    bottomLine: 'Caregiver burnout is extremely common — you cannot pour from an empty cup. ' + YMYL_DISCLAIMER,
  },
  'cbt-thought-record': {
    what: 'A guided CBT thought record worksheet that walks you through identifying, challenging, and reframing negative thought patterns.',
    who: 'Anyone practicing cognitive behavioral therapy skills who wants a structured tool for examining unhelpful thoughts.',
    bottomLine: 'Thought records are a core CBT skill — regular practice can change how you respond to distressing situations. ' + YMYL_DISCLAIMER,
  },
  'ces-d-depression-scale': {
    what: 'The CES-D (Center for Epidemiologic Studies Depression Scale), a 20-item validated depression screening used in research and clinical settings.',
    who: 'Adults who want a comprehensive depression symptom assessment using a widely researched screening instrument.',
    bottomLine: 'The CES-D measures depressive symptoms over the past week — a high score warrants professional follow-up. ' + YMYL_DISCLAIMER,
  },
  'cognitive-distortion-identifier': {
    what: 'A tool that helps you identify common cognitive distortions like catastrophizing, all-or-nothing thinking, and mind reading in your own thought patterns.',
    who: 'Anyone working on CBT skills who wants to recognize which thinking traps they fall into most often.',
    bottomLine: 'Identifying cognitive distortions is the first step to challenging them — awareness creates space for change. ' + YMYL_DISCLAIMER,
  },
  'compassion-fatigue-test': {
    what: 'A compassion fatigue screening that measures the emotional cost of caring for others in distress, combining burnout and secondary trauma.',
    who: 'Helping professionals, caregivers, and anyone in a caring role who feels emotionally drained by others\' suffering.',
    bottomLine: 'Compassion fatigue is an occupational hazard of caring — early recognition prevents deeper burnout. ' + YMYL_DISCLAIMER,
  },
  'coping-skills-randomizer': {
    what: 'A tool that randomly suggests evidence-based coping skills from categories like grounding, self-soothing, distraction, and movement.',
    who: 'Anyone feeling overwhelmed who needs a quick coping strategy but cannot think of one in the moment.',
    bottomLine: 'Having a go-to list of coping skills builds resilience — save the ones that work for you. ' + YMYL_DISCLAIMER,
  },
  'crafft-substance-screening': {
    what: 'The CRAFFT, a 6-question substance use screening validated for adolescents and young adults under 21.',
    who: 'Teens and young adults who want to assess whether their substance use patterns may be risky.',
    bottomLine: 'The CRAFFT is the most widely recommended substance screening for youth — a score of 2 or more suggests further evaluation. ' + YMYL_DISCLAIMER,
  },
  'daily-recovery-check-in': {
    what: 'A structured daily check-in tool for people in addiction recovery, tracking mood, cravings, sleep, and recovery activities.',
    who: 'Anyone in substance use recovery who wants a simple daily accountability and self-monitoring tool.',
    bottomLine: 'Daily check-ins help catch warning signs early — consistency matters more than perfection. ' + YMYL_DISCLAIMER,
  },
  'dass-21-depression-anxiety-stress': {
    what: 'The DASS-21, a 21-item screening that simultaneously measures depression, anxiety, and stress severity on three separate scales.',
    who: 'Anyone who wants to assess depression, anxiety, and stress levels together using a single validated instrument.',
    bottomLine: 'The DASS-21 provides three separate scores — you may score differently on each subscale. ' + YMYL_DISCLAIMER,
  },
  'dass-21-score-interpretation': {
    what: 'A guide explaining DASS-21 scores across all three subscales with severity levels and recommended next steps.',
    who: 'Anyone who has completed the DASS-21 and wants to understand their depression, anxiety, and stress scores.',
    bottomLine: 'DASS-21 severity levels range from normal to extremely severe on each subscale independently. ' + YMYL_DISCLAIMER,
  },
  'dast-10-drug-screening': {
    what: 'The DAST-10, a validated 10-question screening that assesses the degree of drug use problems in the past 12 months.',
    who: 'Adults concerned about their drug use patterns who want a standardized, evidence-based assessment.',
    bottomLine: 'The DAST-10 measures drug-related problems on a severity scale — higher scores indicate more significant concerns. ' + YMYL_DISCLAIMER,
  },
  'dast-10-score-interpretation': {
    what: 'A guide explaining DAST-10 drug screening scores, severity levels, and recommended intervention intensity for each range.',
    who: 'Anyone who has completed the DAST-10 and wants to understand what their score indicates clinically.',
    bottomLine: 'Your DAST-10 score maps to a recommended intervention level from brief counseling to intensive treatment. ' + YMYL_DISCLAIMER,
  },
  'dbt-crisis-skills': {
    what: 'A guided DBT crisis survival skills tool with TIPP, STOP, and distress tolerance techniques for managing intense emotions.',
    who: 'Anyone in emotional crisis who needs structured, step-by-step DBT skills to get through the moment safely.',
    bottomLine: 'Crisis skills are for surviving the moment without making it worse — they are not long-term solutions. ' + YMYL_DISCLAIMER,
  },
  'depression-screening-for-men': {
    what: 'A depression screening that highlights how depression often presents differently in men, including anger and risk-taking.',
    who: 'Men who may be experiencing depression but whose symptoms do not match the typical sad-and-tearful stereotype.',
    bottomLine: 'Male depression often looks like irritability, aggression, or withdrawal rather than sadness. ' + YMYL_DISCLAIMER,
  },
  'depression-screening-for-veterans': {
    what: 'A PHQ-9-based depression screening with military-specific context and veteran resources including VA services.',
    who: 'Veterans and active duty service members who want to screen for depression with relevant support information.',
    bottomLine: 'Depression is the most common mental health condition among veterans — screening is a sign of strength. ' + YMYL_DISCLAIMER,
  },
  'depression-test-for-men': {
    what: 'A PHQ-9-based depression test that addresses how depression uniquely manifests in men with context on male-typical symptoms.',
    who: 'Men who suspect they may be depressed and want a screening that accounts for male-pattern depression symptoms.',
    bottomLine: 'Men are less likely to be diagnosed with depression but more likely to die by suicide — screening matters. ' + YMYL_DISCLAIMER,
  },
  'depression-test-for-new-moms': {
    what: 'The Edinburgh Postnatal Depression Scale (EPDS), a validated screening specifically designed for postpartum depression.',
    who: 'New mothers experiencing mood changes, anxiety, or difficulty bonding who want to screen for postpartum depression.',
    bottomLine: 'Postpartum depression affects up to 1 in 5 mothers and is highly treatable — you are not failing as a parent. ' + YMYL_DISCLAIMER,
  },
  'depression-test-for-seniors': {
    what: 'The Geriatric Depression Scale (GDS), a validated screening designed for older adults that accounts for age-related symptom differences.',
    who: 'Older adults or their family members who want to screen for depression using a tool designed for the senior population.',
    bottomLine: 'Depression in older adults is often mistaken for normal aging — it is not, and it is treatable. ' + YMYL_DISCLAIMER,
  },
  'depression-test-for-teens': {
    what: 'A PHQ-A-based depression screening adapted for adolescents with age-appropriate language and teen-specific resources.',
    who: 'Teens or parents of teens who want to check whether depressive symptoms warrant professional evaluation.',
    bottomLine: 'Teen depression is common and treatable — early screening can prevent years of suffering. ' + YMYL_DISCLAIMER,
  },
  'do-i-have-ptsd-quiz': {
    what: 'A PC-PTSD-5-based screening in accessible quiz format that assesses PTSD symptoms following a traumatic event.',
    who: 'Anyone who has experienced trauma and wonders whether their symptoms may be consistent with PTSD.',
    bottomLine: 'PTSD is treatable with evidence-based therapies — a positive screen means talking to a professional can help. ' + YMYL_DISCLAIMER,
  },
  'drug-screening-teens': {
    what: 'A CRAFFT-based substance screening designed for teens that assesses drug and alcohol use risk in adolescents.',
    who: 'Teens or parents of teens who want to evaluate whether adolescent substance use has reached concerning levels.',
    bottomLine: 'Teen brains are especially vulnerable to substance effects — early screening enables early intervention. ' + YMYL_DISCLAIMER,
  },
  'eating-disorder-test-athletes': {
    what: 'An eating disorder screening tailored for athletes that accounts for sport-specific risk factors like weight pressure and overtraining.',
    who: 'Athletes, coaches, or sports parents concerned about disordered eating patterns in competitive sports environments.',
    bottomLine: 'Athletes face unique eating disorder risks from sport culture — recognizing the signs early protects long-term health. ' + YMYL_DISCLAIMER,
  },
  'family-impact-assessment': {
    what: 'An assessment that measures how a family member\'s substance use is affecting family members\' wellbeing, relationships, and daily functioning.',
    who: 'Family members living with a loved one\'s addiction who want to understand and validate the impact on their own lives.',
    bottomLine: 'Addiction affects the whole family — your wellbeing matters too, and support is available for you. ' + YMYL_DISCLAIMER,
  },
  'five-senses-grounding': {
    what: 'A guided 5-4-3-2-1 grounding exercise that uses all five senses to bring you back to the present moment during anxiety or dissociation.',
    who: 'Anyone experiencing anxiety, panic, or dissociation who needs an immediate grounding technique.',
    bottomLine: 'The 5-senses technique works by redirecting attention from internal distress to external sensory reality. ' + YMYL_DISCLAIMER,
  },
  'gad-7-score-interpretation': {
    what: 'A guide explaining GAD-7 anxiety scores, severity levels, clinical cutoffs, and recommended next steps for each range.',
    who: 'Anyone who has completed the GAD-7 and wants to understand what their anxiety score means clinically.',
    bottomLine: 'A score of 10 or above on the GAD-7 indicates moderate anxiety warranting clinical follow-up. ' + YMYL_DISCLAIMER,
  },
  'grief-assessment': {
    what: 'A grief assessment that distinguishes between normal grief and prolonged grief disorder using validated screening criteria.',
    who: 'Anyone who has experienced a significant loss and is wondering whether their grief may have become prolonged or complicated.',
    bottomLine: 'Grief has no timeline, but prolonged grief disorder is a recognized condition with effective treatments. ' + YMYL_DISCLAIMER,
  },
  'halt-check-in': {
    what: 'A HALT check-in tool that helps you identify if you are Hungry, Angry, Lonely, or Tired — four common relapse and mood triggers.',
    who: 'Anyone in recovery or managing mental health who wants a quick check on basic needs that affect emotional stability.',
    bottomLine: 'HALT triggers are the most common relapse precursors — checking in regularly builds self-awareness. ' + YMYL_DISCLAIMER,
  },
  'health-recovery-timeline': {
    what: 'A timeline showing the physical health improvements that occur at each stage of sobriety from 24 hours to 15 years.',
    who: 'Anyone in recovery from alcohol or substance use who wants to see the tangible health benefits of continued sobriety.',
    bottomLine: 'Your body begins healing within hours of stopping — every day sober brings measurable improvements. ' + YMYL_DISCLAIMER,
  },
  'holmes-rahe-stress-inventory': {
    what: 'The Holmes-Rahe Stress Inventory, a validated tool that measures accumulated life change stress by summing Life Change Units from major events.',
    who: 'Anyone who has experienced multiple life changes recently and wants to understand their cumulative stress level.',
    bottomLine: 'High life-change scores are associated with increased illness risk — awareness helps you take preventive action. ' + YMYL_DISCLAIMER,
  },
  'k6-distress-scale': {
    what: 'The Kessler K6, a brief 6-item validated screening for serious psychological distress used in population health surveys worldwide.',
    who: 'Anyone who wants a quick general mental health check using the tool used in national health surveillance.',
    bottomLine: 'The K6 is a broad distress measure — a high score indicates you may benefit from professional support. ' + YMYL_DISCLAIMER,
  },
  'loneliness-test-seniors': {
    what: 'A loneliness assessment adapted for older adults that measures social isolation and its impact on health and wellbeing.',
    who: 'Seniors or their family members who are concerned about social isolation and its health effects.',
    bottomLine: 'Loneliness in older adults is a serious health risk comparable to smoking — connection is medicine. ' + YMYL_DISCLAIMER,
  },
  'mdq-bipolar-screening': {
    what: 'The Mood Disorder Questionnaire (MDQ), a validated screening for bipolar spectrum disorders used in clinical practice.',
    who: 'Anyone who has experienced periods of unusually elevated mood, energy, or impulsivity and wants to screen for bipolar disorder.',
    bottomLine: 'The MDQ screens for lifetime manic or hypomanic episodes — a positive result warrants professional evaluation. ' + YMYL_DISCLAIMER,
  },
  'mdq-score-interpretation': {
    what: 'A guide explaining MDQ bipolar screening scores, what a positive screen means, and recommended follow-up steps.',
    who: 'Anyone who has completed the MDQ and wants to understand their results in clinical context.',
    bottomLine: 'A positive MDQ screen does not confirm bipolar disorder — it indicates further evaluation is recommended. ' + YMYL_DISCLAIMER,
  },
  'mental-load-calculator': {
    what: 'A calculator that quantifies the invisible mental load of managing household tasks, schedules, and emotional labor.',
    who: 'Anyone who feels overwhelmed by household management and wants to see the actual scope of their mental load.',
    bottomLine: 'Making the mental load visible is the first step to redistributing it more equitably. ' + YMYL_DISCLAIMER,
  },
  'money-saved-recovery-calculator': {
    what: 'A calculator that shows how much money you have saved by not spending on substances since your sobriety date.',
    who: 'Anyone in recovery who wants a concrete, motivating reminder of the financial benefit of their sobriety.',
    bottomLine: 'The financial savings of recovery are real and significant — let the numbers reinforce your commitment. ' + YMYL_DISCLAIMER,
  },
  'msi-bpd-screening': {
    what: 'The McLean Screening Instrument for BPD, a 10-item validated screening for borderline personality disorder.',
    who: 'Adults who experience emotional instability, relationship difficulties, or identity confusion and want to screen for BPD.',
    bottomLine: 'The MSI-BPD is a well-validated screening tool — a positive result indicates further evaluation by a specialist. ' + YMYL_DISCLAIMER,
  },
  'ocd-test-teens': {
    what: 'An OCD screening adapted for teenagers that covers common adolescent obsession and compulsion themes.',
    who: 'Teens or parents of teens who are concerned about repetitive thoughts or behaviors that may indicate OCD.',
    bottomLine: 'Teen OCD often goes unrecognized because kids hide their rituals — early screening enables early treatment. ' + YMYL_DISCLAIMER,
  },
  'oci-r-ocd-screening': {
    what: 'The OCI-R (Obsessive-Compulsive Inventory-Revised), an 18-item validated screening for OCD symptom severity.',
    who: 'Anyone experiencing intrusive thoughts or compulsive behaviors who wants to assess OCD symptom severity.',
    bottomLine: 'OCD is highly treatable with ERP therapy — a high score means treatment could significantly improve your quality of life. ' + YMYL_DISCLAIMER,
  },
  'pc-ptsd-5-screening': {
    what: 'The PC-PTSD-5, a brief 5-item validated screening for PTSD used in primary care and VA settings.',
    who: 'Anyone who has experienced trauma and wants a quick initial screening for post-traumatic stress disorder.',
    bottomLine: 'The PC-PTSD-5 is designed to identify those who may benefit from further PTSD evaluation. ' + YMYL_DISCLAIMER,
  },
  'pcl-5-ptsd-screening': {
    what: 'The PCL-5, a comprehensive 20-item PTSD screening that maps directly to DSM-5 diagnostic criteria.',
    who: 'Anyone who has experienced trauma and wants a detailed assessment of PTSD symptom severity across all four symptom clusters.',
    bottomLine: 'The PCL-5 is the gold standard PTSD self-report — scores of 31-33 or above suggest probable PTSD. ' + YMYL_DISCLAIMER,
  },
  'pcl-5-score-interpretation': {
    what: 'A guide explaining PCL-5 PTSD screening scores, symptom clusters, and clinical cutoff thresholds.',
    who: 'Anyone who has completed the PCL-5 and wants to understand what their score means across the four PTSD symptom clusters.',
    bottomLine: 'Your PCL-5 score reflects PTSD symptom severity — the four cluster scores show which symptoms are most active. ' + YMYL_DISCLAIMER,
  },
  'phq-4-anxiety-depression-screen': {
    what: 'The PHQ-4, an ultra-brief 4-question screening that simultaneously checks for both anxiety and depression.',
    who: 'Anyone who wants the quickest possible validated check for both anxiety and depression symptoms.',
    bottomLine: 'The PHQ-4 takes under a minute — a positive result on either subscale suggests taking the full GAD-7 or PHQ-9. ' + YMYL_DISCLAIMER,
  },
  'phq-9-score-interpretation': {
    what: 'A guide explaining PHQ-9 depression scores, severity levels, clinical cutoffs, and recommended actions for each range.',
    who: 'Anyone who has completed the PHQ-9 and wants to understand what their depression score means clinically.',
    bottomLine: 'PHQ-9 scores range from minimal to severe depression — scores of 10 or above warrant professional follow-up. ' + YMYL_DISCLAIMER,
  },
  'postpartum-depression-test': {
    what: 'The Edinburgh Postnatal Depression Scale (EPDS), a 10-item screening specifically validated for postpartum mood disorders.',
    who: 'New parents in the postpartum period who are experiencing mood changes, anxiety, or difficulty coping.',
    bottomLine: 'Postpartum depression is common, not a character flaw, and highly treatable with proper support. ' + YMYL_DISCLAIMER,
  },
  'ptsd-test-first-responders': {
    what: 'A PCL-5-based PTSD screening tailored for first responders with context on cumulative trauma exposure in emergency services.',
    who: 'Police, firefighters, EMTs, and dispatchers who have experienced repeated traumatic incidents on the job.',
    bottomLine: 'First responders face cumulative trauma — screening is a professional responsibility, not a weakness. ' + YMYL_DISCLAIMER,
  },
  'ptsd-test-veterans': {
    what: 'A PCL-5-based PTSD screening with military-specific context, combat trauma considerations, and VA resources.',
    who: 'Veterans and active duty service members who want to screen for PTSD with relevant military support resources.',
    bottomLine: 'PTSD affects an estimated 11-20% of veterans — the VA offers free, confidential PTSD treatment. ' + YMYL_DISCLAIMER,
  },
  'readiness-to-change': {
    what: 'A readiness to change assessment based on the Stages of Change model that identifies where you are in the change process.',
    who: 'Anyone considering a behavioral change who wants to understand their current stage of motivation and readiness.',
    bottomLine: 'Knowing your stage of change helps you choose the right strategies — there is no wrong place to start. ' + YMYL_DISCLAIMER,
  },
  'relapse-prevention-plan': {
    what: 'A structured relapse prevention planning tool that helps you identify triggers, warning signs, and coping strategies.',
    who: 'Anyone in recovery from substance use who wants to build a personalized, written relapse prevention plan.',
    bottomLine: 'A written relapse prevention plan is one of the strongest tools in recovery — build yours now. ' + YMYL_DISCLAIMER,
  },
  'rosenberg-self-esteem-scale': {
    what: 'The Rosenberg Self-Esteem Scale, a 10-item validated measure of global self-esteem used widely in psychology research.',
    who: 'Anyone who wants to assess their overall self-esteem using the most widely used self-esteem measure in the field.',
    bottomLine: 'Self-esteem is not fixed — understanding where you are now is the starting point for building confidence. ' + YMYL_DISCLAIMER,
  },
  'safety-plan': {
    what: 'A guided safety planning tool based on the Stanley-Brown Safety Plan that creates a personalized crisis response strategy.',
    who: 'Anyone who experiences suicidal thoughts or emotional crises and wants a structured plan for staying safe.',
    bottomLine: 'A safety plan can be life-saving — complete it when you are calm and keep it accessible. ' + YMYL_DISCLAIMER,
  },
  'scoff-eating-disorder-screening': {
    what: 'The SCOFF, a 5-question eating disorder screening that identifies potential anorexia nervosa and bulimia nervosa.',
    who: 'Anyone concerned about their eating behaviors or relationship with food who wants a quick validated screening.',
    bottomLine: 'Two or more positive answers on the SCOFF suggest further evaluation for an eating disorder. ' + YMYL_DISCLAIMER,
  },
  'sleep-and-mood-check': {
    what: 'A tool that helps you track the relationship between your sleep quality and mood patterns over time.',
    who: 'Anyone who suspects their sleep is affecting their mental health and wants to track the connection.',
    bottomLine: 'Sleep and mood are deeply connected — tracking both helps identify patterns you can address. ' + YMYL_DISCLAIMER,
  },
  'sobriety-calculator': {
    what: 'A sobriety calculator that counts your clean days, weeks, months, and years from your sobriety date.',
    who: 'Anyone in recovery who wants to track their sobriety milestone and celebrate their progress.',
    bottomLine: 'Every day counts — whether it is day 1 or day 1,000, your recovery journey matters. ' + YMYL_DISCLAIMER,
  },
  'social-anxiety-test-college': {
    what: 'A social anxiety screening tailored for college students covering classroom participation, campus social situations, and peer interaction.',
    who: 'College students who avoid social situations, dread class participation, or feel intense anxiety around peers.',
    bottomLine: 'Social anxiety is one of the most common issues among college students — and one of the most treatable. ' + YMYL_DISCLAIMER,
  },
  'spin-social-anxiety-test': {
    what: 'The SPIN (Social Phobia Inventory), a 17-item validated screening for social anxiety disorder severity.',
    who: 'Anyone who experiences significant anxiety in social situations and wants to assess the severity of their social phobia.',
    bottomLine: 'The SPIN measures social anxiety across fear, avoidance, and physiological domains. ' + YMYL_DISCLAIMER,
  },
  'standard-drinks-calculator': {
    what: 'A calculator that converts your actual drinks into standard drink equivalents based on alcohol percentage and volume.',
    who: 'Anyone who wants to accurately count their alcohol consumption in standard drink units for health guidelines.',
    bottomLine: 'Most people underestimate their intake — one glass of wine or beer may equal more than one standard drink. ' + YMYL_DISCLAIMER,
  },
  'stress-test-college-students': {
    what: 'A stress assessment tailored for college students covering academic, social, financial, and identity-related stressors.',
    who: 'College students who feel overwhelmed and want to evaluate whether their stress level has reached concerning thresholds.',
    bottomLine: 'College stress is real and measurable — high scores mean it is time to use campus support resources. ' + YMYL_DISCLAIMER,
  },
  'substance-abuse-test-parents': {
    what: 'A substance use screening for parents that addresses the unique pressures, shame, and barriers to treatment that parents face.',
    who: 'Parents who are worried about their substance use and want a private, judgment-free assessment.',
    bottomLine: 'Being a good parent and having a substance use problem can coexist — getting help is the strongest parenting move. ' + YMYL_DISCLAIMER,
  },
  'treatment-cost-estimator': {
    what: 'An estimator that calculates approximate costs for different levels of mental health and substance use treatment.',
    who: 'Anyone considering treatment who needs a general sense of what different treatment options may cost.',
    bottomLine: 'Treatment costs vary widely — this provides estimates to help you plan, not exact quotes. ' + YMYL_DISCLAIMER,
  },
  'trigger-identification-worksheet': {
    what: 'A structured worksheet for identifying personal triggers, emotional responses, and effective coping strategies.',
    who: 'Anyone in recovery or managing mental health who wants to map their triggers and build a response plan.',
    bottomLine: 'Knowing your triggers before they happen gives you the power to choose a different response. ' + YMYL_DISCLAIMER,
  },
  'ucla-loneliness-scale': {
    what: 'The UCLA Loneliness Scale, a 20-item validated measure of subjective loneliness and social isolation.',
    who: 'Anyone who feels disconnected or isolated and wants to measure their loneliness using a validated research tool.',
    bottomLine: 'Loneliness is a health risk factor as serious as smoking — recognizing it is the first step to addressing it. ' + YMYL_DISCLAIMER,
  },
  'urge-surfing-timer': {
    what: 'A guided urge surfing timer based on mindfulness principles that helps you ride out cravings without acting on them.',
    who: 'Anyone in recovery experiencing cravings who wants a structured technique to wait them out.',
    bottomLine: 'Cravings typically peak and pass within 15-30 minutes — urge surfing teaches you to ride the wave. ' + YMYL_DISCLAIMER,
  },
  'values-card-sort': {
    what: 'An interactive values card sort exercise that helps you identify and rank your core personal values.',
    who: 'Anyone in therapy, recovery, or personal growth who wants to clarify what matters most to them.',
    bottomLine: 'Living in alignment with your values improves mental health — knowing what they are comes first. ' + YMYL_DISCLAIMER,
  },
  'who-5-wellbeing-index': {
    what: 'The WHO-5 Wellbeing Index, a 5-item screening from the World Health Organization that measures subjective psychological wellbeing.',
    who: 'Anyone who wants a brief, validated check on their overall mental wellbeing using a WHO standard tool.',
    bottomLine: 'The WHO-5 is positive-framed — a low score indicates reduced wellbeing that may warrant further screening. ' + YMYL_DISCLAIMER,
  },
  'who-assist-substance-screening': {
    what: 'The WHO ASSIST, a comprehensive substance screening covering tobacco, alcohol, cannabis, and eight other substance categories.',
    who: 'Anyone who uses any substances and wants a thorough, WHO-validated assessment of risk across all substance types.',
    bottomLine: 'The ASSIST scores each substance separately — you may have different risk levels for different substances. ' + YMYL_DISCLAIMER,
  },
  'withdrawal-timeline': {
    what: 'A timeline showing expected withdrawal symptoms and their duration for alcohol, opioids, benzodiazepines, and stimulants.',
    who: 'Anyone considering stopping substance use who wants to understand what withdrawal may look like and how long it lasts.',
    bottomLine: 'Some withdrawals can be medically dangerous — always consult a healthcare provider before stopping abruptly. ' + YMYL_DISCLAIMER,
  },
  'work-stress-check': {
    what: 'A workplace stress assessment that measures job-related stressors, burnout risk, and work-life balance indicators.',
    who: 'Working professionals who feel their job stress has become unmanageable and want to assess the severity.',
    bottomLine: 'Chronic work stress damages both mental and physical health — your score can guide a conversation with HR or a therapist. ' + YMYL_DISCLAIMER,
  },
  'worry-time-scheduler': {
    what: 'A CBT-based worry scheduling tool that helps you contain worry by setting aside dedicated time for it rather than worrying all day.',
    who: 'Anyone with chronic worry or generalized anxiety who wants a structured technique to reduce anxious rumination.',
    bottomLine: 'Scheduled worry time paradoxically reduces total worry by giving your brain a designated outlet. ' + YMYL_DISCLAIMER,
  },
};

let updated = 0;
let skipped = 0;
let errors = [];

const dirs = fs.readdirSync(appDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && !SKIP.has(d.name) && !ALREADY_DONE.has(d.name))
  .map(d => d.name)
  .sort();

for (const dir of dirs) {
  const pagePath = path.join(appDir, dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;

  const content = fs.readFileSync(pagePath, 'utf-8');

  // Skip if already has AnswerBlock
  if (content.includes('AnswerBlock')) {
    skipped++;
    continue;
  }

  // Skip if no tool data
  if (!toolData[dir]) {
    console.log(`SKIP (no data): ${dir}`);
    skipped++;
    continue;
  }

  const { what, who, bottomLine } = toolData[dir];

  // Add import
  let newContent = content;

  // Find the right place to add the import - after the last existing import
  const importLines = content.match(/^import .+$/gm);
  if (importLines && importLines.length > 0) {
    const lastImport = importLines[importLines.length - 1];
    if (!content.includes("import AnswerBlock")) {
      newContent = newContent.replace(lastImport, lastImport + '\nimport AnswerBlock from "@/components/AnswerBlock";');
    }
  }

  // Build the AnswerBlock JSX
  const answerBlock = `      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-6">
        <AnswerBlock
          what="${what.replace(/"/g, '\\"')}"
          who="${who.replace(/"/g, '\\"')}"
          bottomLine="${bottomLine.replace(/"/g, '\\"')}"
          lastUpdated="2026-03-20"
        />
      </div>\n`;

  // Try pattern 1: before sr-only section
  const srOnlyPattern = /(\s*<section className="sr-only">)/;
  const srOnlyMatch = newContent.match(srOnlyPattern);

  if (srOnlyMatch) {
    newContent = newContent.replace(srOnlyMatch[0], '\n' + answerBlock + srOnlyMatch[0]);
    fs.writeFileSync(pagePath, newContent, 'utf-8');
    updated++;
    console.log(`UPDATED (sr-only): ${dir}`);
  } else {
    // Try pattern 2: ScoreInterpretationLayout
    const scoreLayoutPattern = /(\s*<ScoreInterpretationLayout)/;
    const scoreMatch = newContent.match(scoreLayoutPattern);

    if (scoreMatch) {
      newContent = newContent.replace(scoreMatch[0], '\n' + answerBlock + scoreMatch[0]);
      fs.writeFileSync(pagePath, newContent, 'utf-8');
      updated++;
      console.log(`UPDATED (score-layout): ${dir}`);
    } else {
      errors.push(dir);
      console.log(`ERROR (no pattern match): ${dir}`);
    }
  }
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped, ${errors.length} errors`);
if (errors.length > 0) {
  console.log('Errors:', errors.join(', '));
}

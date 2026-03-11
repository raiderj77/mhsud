import { NextResponse } from "next/server";

export async function GET() {
  const content = `# MindCheck Tools — Complete Reference

> Free, private mental health and substance use self-checks.
> All scoring happens in your browser. No accounts, no data collection.

## About
MindCheck Tools provides validated, evidence-based mental health screening
instruments as free, private web tools. All scoring happens client-side.
Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See [author credentials](https://mindchecktools.com/about/jason-ramirez).

---

## Depression & Mood

### PHQ-9 Depression Self-Check
- URL: https://mindchecktools.com/phq-9-depression-test
- 9 questions, scores 0–27
- Validated depression screener used worldwide by clinicians
- Developed by Drs. Spitzer, Williams & Kroenke. Public domain.

### CES-D Depression Scale
- URL: https://mindchecktools.com/ces-d-depression-scale
- 20-item NIMH depression screener covering mood, guilt, hopelessness, appetite, and sleep. Cutoff 16+.

### DASS-21 Depression/Anxiety/Stress
- URL: https://mindchecktools.com/dass-21-depression-anxiety-stress
- 21 questions, three simultaneous subscales: depression, anxiety, and stress with separate severity ratings.

### WHO-5 Well-Being Index
- URL: https://mindchecktools.com/who-5-wellbeing-index
- 5-item WHO positive wellbeing measure. Percentage score 0–100. Below 50% suggests further evaluation.

### K6 Psychological Distress Scale
- URL: https://mindchecktools.com/k6-distress-scale
- 6-item nonspecific psychological distress measure used in national health surveys. Score 13+ = serious distress.

### MDQ Bipolar Screening
- URL: https://mindchecktools.com/mdq-bipolar-screening
- 3-part Mood Disorder Questionnaire for bipolar spectrum disorders. Assesses symptoms, co-occurrence, and functional impact.

### PHQ-4 Quick Screen
- URL: https://mindchecktools.com/phq-4-anxiety-depression-screen
- 4-item ultra-brief combined anxiety and depression screener.

---

## Anxiety & Stress

### GAD-7 Anxiety Self-Check
- URL: https://mindchecktools.com/gad-7-anxiety-test
- 7 questions, scores 0–21
- Validated generalized anxiety screener. Developed by Drs. Spitzer, Kroenke, Williams & Löwe.

### SPIN Social Anxiety Test
- URL: https://mindchecktools.com/spin-social-anxiety-test
- 17-item Social Phobia Inventory with Fear, Avoidance, and Physiological subscales. Cutoff 19+.

### Holmes-Rahe Stress Inventory
- URL: https://mindchecktools.com/holmes-rahe-stress-inventory
- 43-item life stress checklist. Scored in Life Change Units with three risk tiers.

---

## PTSD & Trauma

### PCL-5 PTSD Screening
- URL: https://mindchecktools.com/pcl-5-ptsd-screening
- 20-item PTSD Checklist developed by the National Center for PTSD. DSM-5 aligned.

### PC-PTSD-5 PTSD Screen
- URL: https://mindchecktools.com/pc-ptsd-5-screening
- 5-item VA brief PTSD screen with trauma exposure gate question. Cutoff 3+.

### ACE Questionnaire
- URL: https://mindchecktools.com/ace-questionnaire
- 10-item Adverse Childhood Experiences questionnaire from the CDC-Kaiser study. Score 0–10 with resilience framing.

---

## Substance Use

### AUDIT Alcohol Use Screen
- URL: https://mindchecktools.com/audit-alcohol-test
- 10-item WHO Alcohol Use Disorders Identification Test. Gold standard alcohol screening. Public domain.

### AUDIT-C Quick Screen
- URL: https://mindchecktools.com/audit-c-alcohol-screen
- 3-item brief alcohol screen used in primary care. Faster version of the full AUDIT.

### DAST-10 Drug Screening
- URL: https://mindchecktools.com/dast-10-drug-screening
- 10-item validated drug use screening test. Reflects on drug use patterns and impact.

### CAGE-AID Substance Use Screen
- URL: https://mindchecktools.com/cage-aid-substance-abuse-screening
- 4-item validated screen for both alcohol and drug use concerns.

### WHO ASSIST Substance Screening
- URL: https://mindchecktools.com/who-assist-substance-screening
- Comprehensive WHO screening covering 10 substance categories. Per-substance risk scores 0–39.

### CRAFFT Screening for Teens
- URL: https://mindchecktools.com/crafft-substance-screening
- Validated substance use screening for ages 12–21 (CRAFFT 2.1+N). Includes nicotine screening. Cutoff 2+.

### BAC Calculator
- URL: https://mindchecktools.com/bac-calculator
- Estimate blood alcohol content using the Widmark formula. Shows effects, legal status, and time until sober.

### Standard Drinks Calculator
- URL: https://mindchecktools.com/standard-drinks-calculator
- Calculate standard drinks in any beverage. 16 presets with visual comparison.

---

## Other Conditions

### ASRS ADHD Screening
- URL: https://mindchecktools.com/asrs-adhd-screening
- 6-item WHO-developed Adult ADHD Self-Report Scale using research-validated thresholds.

### OCI-R OCD Screening
- URL: https://mindchecktools.com/oci-r-ocd-screening
- 18-item OCD Inventory with 6 subscales: Hoarding, Checking, Ordering, Neutralizing, Washing, Obsessing.

### SCOFF Eating Disorder Screen
- URL: https://mindchecktools.com/scoff-eating-disorder-screening
- 5-item validated screener for anorexia, bulimia, and other eating disorders.

### AQ-10 Autism Spectrum Screen
- URL: https://mindchecktools.com/aq-10-autism-screening
- 10-item autism spectrum screening for adults. Developed at the University of Cambridge.

### MSI-BPD Borderline Personality Disorder Screening
- URL: https://mindchecktools.com/msi-bpd-screening
- 10-item McLean Screening Instrument for BPD by Zanarini et al. (2003). Cutoff 7+.

### Attachment Style Quiz
- URL: https://mindchecktools.com/attachment-style-quiz
- 36-item ECR-R (Experiences in Close Relationships - Revised). Two subscales: Anxiety and Avoidance. Four attachment styles.

### Big Five Personality Test
- URL: https://mindchecktools.com/big-five-personality-test
- 50-item IPIP-NEO-50 personality assessment. Measures Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.

### Rosenberg Self-Esteem Scale
- URL: https://mindchecktools.com/rosenberg-self-esteem-scale
- 10-item global self-esteem measure. Score 0–30. Below 15 suggests low self-esteem.

### UCLA Loneliness Scale
- URL: https://mindchecktools.com/ucla-loneliness-scale
- 20-item measure of subjective loneliness. Score 20–80. Cutoff 44+ for elevated loneliness.

### Athens Insomnia Scale
- URL: https://mindchecktools.com/athens-insomnia-scale
- 8-item ICD-10 insomnia severity measure. Cutoff 6+ for insomnia (93% sensitivity).

### Brief Resilience Scale
- URL: https://mindchecktools.com/brief-resilience-scale
- 6-item measure of ability to bounce back from stress. Score 1–5. Low resilience below 3.00.

---

## Stress, Burnout & Well-Being

### Work Stress & Burnout Check
- URL: https://mindchecktools.com/work-stress-check
- 12 questions on work demands, control, support, and recovery.

### Burnout Assessment Tool
- URL: https://mindchecktools.com/burnout-assessment-tool
- Original burnout screener covering exhaustion, cynicism, and efficacy.

### Mental Load Calculator
- URL: https://mindchecktools.com/mental-load-calculator
- 24 questions on how planning, remembering, and organizing is distributed at home.

### Sleep & Mood Reflection
- URL: https://mindchecktools.com/sleep-and-mood-check
- Explore how sleep quality, habits, and mood affect each other.

---

## Recovery Tools (Substance Use & Addiction)

### Sobriety Calculator
- URL: https://mindchecktools.com/sobriety-calculator
- Track days sober, milestone badges, and money saved. Date saves locally.

### Money Saved in Recovery
- URL: https://mindchecktools.com/money-saved-recovery-calculator
- Calculate savings from not drinking or using. Preset averages by substance with projections.

### Health Recovery Timeline
- URL: https://mindchecktools.com/health-recovery-timeline
- Interactive timeline of body recovery after quitting. Covers alcohol, nicotine, and opioids.

### HALT Check-In
- URL: https://mindchecktools.com/halt-check-in
- Daily recovery check-in based on HALT (Hungry, Angry, Lonely, Tired). Vulnerability level with coping suggestions.

### Withdrawal Timeline
- URL: https://mindchecktools.com/withdrawal-timeline
- Phase-by-phase withdrawal symptoms for alcohol, opioids, benzos, stimulants, meth, cannabis, and nicotine.

### Treatment Cost Estimator
- URL: https://mindchecktools.com/treatment-cost-estimator
- Estimated costs for outpatient, IOP, residential rehab, detox, MAT, and sober living. Insurance info included.

### Relapse Prevention Plan Builder
- URL: https://mindchecktools.com/relapse-prevention-plan
- Build a personalized plan. Identify triggers, warning signs, coping strategies, emergency contacts, and craving action plan.

### Urge Surfing Timer
- URL: https://mindchecktools.com/urge-surfing-timer
- Guided mindfulness timer for riding out cravings. Based on Alan Marlatt's technique.

### Readiness to Change Assessment
- URL: https://mindchecktools.com/readiness-to-change
- 15 statements based on Prochaska & DiClemente's Stages of Change model with stage-specific next steps.

### Trigger Identification Worksheet
- URL: https://mindchecktools.com/trigger-identification-worksheet
- Identify personal triggers across 6 categories: people, places, emotions, situations, times, sensory cues.

### Coping Skills Randomizer
- URL: https://mindchecktools.com/coping-skills-randomizer
- 51 evidence-based coping skills across 6 categories with instructions. Filter by category, save favorites.

### Daily Recovery Check-In
- URL: https://mindchecktools.com/daily-recovery-check-in
- Daily wellness check tracking mood, cravings, sleep, stress, connection. 7 and 30-day trends with streak counter.

### Family Impact Assessment
- URL: https://mindchecktools.com/family-impact-assessment
- 18 questions for families concerned about a loved one's substance use. 7 domains including finances, relationships, safety.

---

## Mindfulness & CBT Tools

### Box Breathing Exercise
- URL: https://mindchecktools.com/box-breathing-exercise
- Guided box breathing for stress and anxiety regulation.

### 5-4-3-2-1 Grounding
- URL: https://mindchecktools.com/five-senses-grounding
- Five senses grounding technique for anxiety and dissociation.

### Cognitive Distortion Identifier
- URL: https://mindchecktools.com/cognitive-distortion-identifier
- Identify thinking errors that fuel anxiety and depression.

### Safety Plan
- URL: https://mindchecktools.com/safety-plan
- Personalized safety planning tool for crisis prevention.

### CBT Thought Record
- URL: https://mindchecktools.com/cbt-thought-record
- Structured thought record for challenging negative automatic thoughts.

### Worry Time Scheduler
- URL: https://mindchecktools.com/worry-time-scheduler
- Schedule contained worry time to reduce intrusive thoughts.

### Values Card Sort
- URL: https://mindchecktools.com/values-card-sort
- Identify core personal values for use in ACT and motivational work.

### DBT Crisis Skills Cards
- URL: https://mindchecktools.com/dbt-crisis-skills
- DBT distress tolerance and emotion regulation skills for crisis moments.

---

## Targeted Screenings (Demographic-Specific Pages)

### Depression
- [Depression Test for Teens](https://mindchecktools.com/depression-test-for-teens): PHQ-9 with teen-specific context and youth crisis resources.
- [Depression Test for Seniors](https://mindchecktools.com/depression-test-for-seniors): PHQ-9 with late-life depression context and eldercare resources.
- [Depression Test for New Moms](https://mindchecktools.com/depression-test-for-new-moms): PHQ-9 with postpartum depression info and PSI helpline.
- [Depression Test for Veterans](https://mindchecktools.com/depression-screening-for-veterans): PHQ-9 with veteran PTSD, transition, and VA resources.
- [Depression Test for Men](https://mindchecktools.com/depression-test-for-men): PHQ-9 with male depression presentation and help-seeking barriers.
- [Am I Depressed? Quiz](https://mindchecktools.com/am-i-depressed-quiz): Conversational entry point using PHQ-9.
- [Postpartum Depression Test](https://mindchecktools.com/postpartum-depression-test): Postpartum-focused depression screening.

### Anxiety
- [Anxiety Test for Women](https://mindchecktools.com/anxiety-test-for-women): GAD-7 with hormonal factors and life stages.
- [Anxiety Test for Teens](https://mindchecktools.com/anxiety-test-for-teens): GAD-7 with teen anxiety stats and social media impact.
- [Anxiety Test for Men](https://mindchecktools.com/anxiety-test-for-men): GAD-7 with info on how anxiety manifests in men.
- [Social Anxiety Test for College Students](https://mindchecktools.com/social-anxiety-test-college): SPIN with college context and campus resources.

### PTSD
- [PTSD Test for Veterans](https://mindchecktools.com/ptsd-test-veterans): PCL-5 with combat PTSD stats and VA treatment info.
- [PTSD Test for First Responders](https://mindchecktools.com/ptsd-test-first-responders): PCL-5 for police, firefighters, EMTs with cumulative trauma context.
- [Do I Have PTSD? Quiz](https://mindchecktools.com/do-i-have-ptsd-quiz): Conversational entry point using PCL-5.

### ADHD
- [ADHD Test for Adults](https://mindchecktools.com/adhd-test-adults): ASRS with adult ADHD underdiagnosis info.
- [ADHD Test for Women](https://mindchecktools.com/adhd-test-women): ASRS with masking, hormonal effects, and late diagnosis.
- [ADHD Test for Teens](https://mindchecktools.com/adhd-test-for-teens): ASRS with adolescent-specific context and school impact.

### Substance Use
- [Alcohol Screening for College Students](https://mindchecktools.com/alcohol-screening-for-college-students): AUDIT with college drinking stats and campus resources.
- [Alcohol Screening for Military](https://mindchecktools.com/alcohol-screening-military): AUDIT with military drinking culture and VA resources.
- [Drug Screening for Teens](https://mindchecktools.com/drug-screening-teens): CRAFFT for ages 12–21.
- [Substance Screening for Parents](https://mindchecktools.com/substance-abuse-test-parents): CAGE-AID with parenting impact and family treatment.
- [Am I an Alcoholic? Quiz](https://mindchecktools.com/am-i-an-alcoholic-quiz): Conversational entry point using AUDIT.

### Other Conditions
- [OCD Test for Teens](https://mindchecktools.com/ocd-test-teens): OCI-R with teen OCD info and ERP treatment resources.
- [Bipolar Test for Young Adults](https://mindchecktools.com/bipolar-test-young-adults): MDQ with onset age and misdiagnosis info.
- [BPD Test for Women](https://mindchecktools.com/bpd-test-for-women): MSI-BPD with women-specific BPD presentation.
- [BPD Screening for Young Adults](https://mindchecktools.com/bpd-screening-for-young-adults): MSI-BPD with adolescent/young adult onset context.
- [Attachment Style Test for Couples](https://mindchecktools.com/attachment-style-test-for-couples): ECR-R with couples dynamics and communication context.
- [Eating Disorder Test for Athletes](https://mindchecktools.com/eating-disorder-test-athletes): SCOFF with RED-S info and sport-specific risks.
- [Loneliness Test for Seniors](https://mindchecktools.com/loneliness-test-seniors): UCLA Loneliness Scale with senior isolation stats.
- [Grief Assessment](https://mindchecktools.com/grief-assessment): Grief screening and resources.
- [Compassion Fatigue Test](https://mindchecktools.com/compassion-fatigue-test): Compassion fatigue screening for caregivers and helpers.

### Burnout & Stress
- [Burnout Test for Nurses](https://mindchecktools.com/burnout-test-for-nurses): Burnout assessment with nursing-specific compassion fatigue context.
- [Burnout Test for Healthcare Workers](https://mindchecktools.com/burnout-test-for-healthcare-workers): Burnout assessment with post-pandemic and moral injury context.
- [Burnout Test for Teachers](https://mindchecktools.com/burnout-test-for-teachers): Burnout assessment with teacher emotional labor and systemic causes.
- [Burnout Test for Parents](https://mindchecktools.com/burnout-test-parents): Parental burnout covering exhaustion, detachment, and guilt.
- [Caregiver Burnout Assessment](https://mindchecktools.com/caregiver-burnout-assessment): Burnout screening for family caregivers.
- [Stress Test for College Students](https://mindchecktools.com/stress-test-college-students): DASS-21 with college stress stats and campus resources.

---

## Score Interpretation Guides

- [PHQ-9 Score Interpretation](https://mindchecktools.com/phq-9-score-interpretation)
- [GAD-7 Score Interpretation](https://mindchecktools.com/gad-7-score-interpretation)
- [AUDIT Score Interpretation](https://mindchecktools.com/audit-score-interpretation)
- [AUDIT-C Score Interpretation](https://mindchecktools.com/audit-c-score-interpretation)
- [DAST-10 Score Interpretation](https://mindchecktools.com/dast-10-score-interpretation)
- [PCL-5 Score Interpretation](https://mindchecktools.com/pcl-5-score-interpretation)
- [ASRS Score Interpretation](https://mindchecktools.com/asrs-score-interpretation)
- [MDQ Score Interpretation](https://mindchecktools.com/mdq-score-interpretation)
- [DASS-21 Score Interpretation](https://mindchecktools.com/dass-21-score-interpretation)
- [ACE Score Interpretation](https://mindchecktools.com/ace-score-interpretation)

---

## Blog & Educational Guides

- [Blog Index](https://mindchecktools.com/blog)
- [Cognitive Distortions: 15 Thinking Errors That Fuel Anxiety](https://mindchecktools.com/blog/cognitive-distortions-list)
- [What Happens When You Stop Drinking: A Timeline](https://mindchecktools.com/blog/quit-drinking-timeline)
- [DBT Skills for Everyday Life: A Beginner's Guide](https://mindchecktools.com/blog/dbt-skills-beginners)
- [PHQ-9 Guide](https://mindchecktools.com/blog/phq-9-guide)
- [GAD-7 Guide](https://mindchecktools.com/blog/gad-7-guide)
- [AUDIT Guide](https://mindchecktools.com/blog/audit-guide)
- [DAST-10 Guide](https://mindchecktools.com/blog/dast-10-guide)
- [Work Stress vs Burnout](https://mindchecktools.com/blog/work-stress-vs-burnout)
- [Sleep and Mood](https://mindchecktools.com/blog/sleep-and-mood)
- [Depression Screening Guide](https://mindchecktools.com/blog/depression-screening-guide)
- [Anxiety Coping Strategies](https://mindchecktools.com/blog/anxiety-coping-strategies)
- [PTSD Screening Guide](https://mindchecktools.com/blog/ptsd-screening-guide)
- [ACE Score Meaning](https://mindchecktools.com/blog/ace-score-meaning)
- [Adult ADHD Signs](https://mindchecktools.com/blog/adult-adhd-signs)
- [Bipolar vs Depression](https://mindchecktools.com/blog/bipolar-vs-depression)
- [Eating Disorder Signs](https://mindchecktools.com/blog/eating-disorder-signs)
- [Helping a Family Member with Addiction](https://mindchecktools.com/blog/helping-family-member-addiction)
- [Loneliness & Mental Health](https://mindchecktools.com/blog/loneliness-mental-health)
- [Relapse Prevention Plan Guide](https://mindchecktools.com/blog/relapse-prevention-plan-guide)
- [Seasonal Affective Disorder](https://mindchecktools.com/blog/seasonal-affective-disorder)
- [Social Anxiety vs Introversion](https://mindchecktools.com/blog/social-anxiety-vs-introversion)
- [Stages of Change in Recovery](https://mindchecktools.com/blog/stages-of-change-recovery)
- [What OCD Looks Like](https://mindchecktools.com/blog/what-ocd-looks-like)
- [How to Talk to Your Doctor About Mental Health](https://mindchecktools.com/how-to-talk-to-your-doctor-about-mental-health)

---

## Site Information

- [About](https://mindchecktools.com/about): About MindCheck Tools and clinical reviewer credentials.
- [Crisis Resources](https://mindchecktools.com/crisis-resources): Full list of crisis resources and international helplines.
- [Privacy Policy](https://mindchecktools.com/privacy)
- [Terms of Use](https://mindchecktools.com/terms)
- [Cookie Policy](https://mindchecktools.com/cookies)
- [Accessibility Statement](https://mindchecktools.com/accessibility)
- [Disclaimer](https://mindchecktools.com/disclaimer)
- [Contact](https://mindchecktools.com/contact)

---

## Privacy & Data

All screening answers are processed in the browser using client-side JavaScript. No server, no database, no way to see responses. Analytics and advertising may be present but never have access to screening responses. No answer data ever leaves the user's device.

## Crisis Resources

If you are in crisis, help is available 24/7:
- **988 Suicide & Crisis Lifeline:** Call or text 988
- **Crisis Text Line:** Text HOME to 741741
- **SAMHSA National Helpline:** 1-800-662-4357 (free, confidential)

## Clinical Disclaimer

All tools are for educational and self-reflection purposes only. They are not a diagnosis, medical advice, or treatment recommendation. Always consult a qualified healthcare professional for mental health concerns.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

import { NextResponse } from "next/server";

export async function GET() {
  const content = `# MindCheck Tools — Complete Reference

> Free, private mental health and substance use self-checks.
> All scoring happens in your browser. No accounts, no data collection.

## About
MindCheck Tools provides validated, evidence-based mental health screening
instruments as free, private web tools. All scoring happens client-side.
Reviewed by Jason Ramirez, a Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.

## Screening Tools

### PHQ-9 Depression Self-Check
- URL: https://mindchecktools.com/phq-9-depression-test
- 9 questions, scores 0-27
- Validated depression screener used worldwide by clinicians
- Developed by Drs. Spitzer, Williams & Kroenke
- Public domain

### GAD-7 Anxiety Self-Check
- URL: https://mindchecktools.com/gad-7-anxiety-test
- 7 questions, scores 0-21
- Validated generalized anxiety screener
- Developed by Drs. Spitzer, Kroenke, Williams & Löwe

### AUDIT Alcohol Use Screen
- URL: https://mindchecktools.com/audit-alcohol-test
- 10 questions, scores 0-40
- Developed by the World Health Organization
- Public domain

### DAST-10 Drug Screening
- URL: https://mindchecktools.com/dast-10-drug-screening
- 10 questions
- Screens for drug abuse/dependence

### PCL-5 PTSD Screening
- URL: https://mindchecktools.com/pcl-5-ptsd-screening
- 20 questions
- Based on DSM-5 PTSD criteria

### ASRS ADHD Screening
- URL: https://mindchecktools.com/asrs-adhd-screening
- Adult ADHD Self-Report Scale

### DASS-21 Depression/Anxiety/Stress
- URL: https://mindchecktools.com/dass-21-depression-anxiety-stress
- 21 questions, three simultaneous subscales

### CES-D Depression Scale
- URL: https://mindchecktools.com/ces-d-depression-scale
- 20-item NIMH depression screener

### MDQ Bipolar Screening
- URL: https://mindchecktools.com/mdq-bipolar-screening
- 3-part bipolar spectrum screening

### SPIN Social Anxiety Test
- URL: https://mindchecktools.com/spin-social-anxiety-test
- 17-item Social Phobia Inventory

## Blog & Education
- URL: https://mindchecktools.com/blog
- 23+ evidence-based guides on mental health topics

## Legal
- Privacy: https://mindchecktools.com/privacy
- Terms: https://mindchecktools.com/terms
- Contact: hello@mindchecktools.com

## Crisis Resources
If you are in crisis: call or text 988 (Suicide & Crisis Lifeline)
SAMHSA National Helpline: 1-800-662-4357
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

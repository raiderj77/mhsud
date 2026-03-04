import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { SCOFFClient } from "./SCOFFClient";

const TOOL_URL = `${SITE_URL}/scoff-eating-disorder-screening`;

export const metadata: Metadata = createMetadata({
  path: "/scoff-eating-disorder-screening",
  title: "SCOFF Eating Disorder Screening | Free Self-Check",
  description:
    "Take the free SCOFF eating disorder screening. 5 questions, 1 minute. Validated screener for anorexia, bulimia, and other eating disorders. Private, instant results.",
  keywords: [
    "scoff", "eating disorder test", "eating disorder screening",
    "scoff questionnaire", "do i have an eating disorder", "eating disorder quiz",
    "anorexia test", "bulimia screening", "binge eating test",
    "eating disorder self-test", "scoff screening tool", "eating disorder check",
    "free eating disorder test", "eating habits screening",
    "eating disorder assessment",
  ],
  openGraph: {
    title: "SCOFF Eating Disorder Screening | Free Self-Check",
    description: "Take the free SCOFF eating disorder screening. 5 questions, 1 minute. Validated screener for eating disorders.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What are eating disorders?", answer: "Eating disorders are serious mental health conditions characterized by persistent disturbances in eating behaviors and related thoughts and emotions. They affect people of all ages, genders, races, and body types. The most commonly recognized types include anorexia nervosa (restriction of food intake leading to significantly low body weight), bulimia nervosa (cycles of binge eating followed by compensatory behaviors such as purging), binge eating disorder (recurrent episodes of eating large amounts without compensatory behaviors), ARFID (avoidant/restrictive food intake disorder), and OSFED (other specified feeding or eating disorders). Eating disorders have the highest mortality rate of any mental health condition." },
  { question: "What does the SCOFF screen for?", answer: "The SCOFF questionnaire screens for possible eating disorders by asking about five key behaviors and attitudes: making yourself sick (purging), feeling you have lost control over eating, significant weight loss, believing you are fat when others say you are thin (body image distortion), and food dominating your life. The name SCOFF is an acronym of the key words: Sick, Control, One stone, Fat, Food. A score of 2 or more positive answers suggests a possible eating disorder and the need for further professional evaluation." },
  { question: "Can men have eating disorders?", answer: "Yes. Eating disorders affect all genders. Research suggests that approximately 1 in 3 people with an eating disorder is male. Men and boys may be underidentified because eating disorders have historically been perceived as conditions that primarily affect women. Males may also present differently, with a greater focus on muscularity, exercise, and body composition rather than thinness. The SCOFF is appropriate for screening regardless of gender." },
  { question: "What are the signs that someone may have an eating disorder?", answer: "Warning signs include preoccupation with food, weight, calories, or dieting; skipping meals or making excuses to avoid eating; withdrawal from social activities involving food; frequent checking in the mirror for perceived flaws; excessive or rigid exercise routines; evidence of purging behaviors; significant weight changes; development of food rituals (cutting food into small pieces, eating in a specific order); and expressing shame or guilt about eating. Not all people with eating disorders display visible signs, which is why screening tools like the SCOFF are valuable." },
  { question: "Is 5 questions enough to screen for eating disorders?", answer: "The SCOFF was specifically designed to be brief while maintaining good screening accuracy. Research by Morgan et al. (1999) showed that the SCOFF has a sensitivity of approximately 84.6% and specificity of approximately 89.6% for detecting eating disorders. While no screening tool is perfect, the SCOFF's brevity makes it practical for wide use — the most important quality of a screening tool is that people actually complete it. A positive screen should always be followed by a comprehensive professional evaluation." },
  { question: "What should I do after a positive SCOFF screen?", answer: "A positive screen (score of 2 or more) means your responses are consistent with patterns seen in eating disorders, and further evaluation by a qualified healthcare professional is recommended. This does not confirm an eating disorder — it identifies the need for a more thorough assessment. Good starting points include your primary care provider, the National Alliance for Eating Disorders Helpline (1-866-662-1235), or the SAMHSA helpline (1-800-662-4357). If you are in crisis, call or text 988." },
  { question: "Is the SCOFF accurate?", answer: "The SCOFF has been validated in multiple studies across different populations. Its sensitivity of approximately 84.6% means it correctly identifies about 85 out of 100 people who have an eating disorder, while its specificity of approximately 89.6% means it correctly identifies about 90 out of 100 people who do not. Like all screening tools, it can produce false positives (flagging an eating disorder when one is not present) and false negatives (missing an eating disorder). This is why a positive screen should always be followed by professional evaluation." },
];

export default function SCOFFPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "SCOFF Eating Disorder Screening Questionnaire",
              description: "A free online implementation of the SCOFF questionnaire, a validated 5-item screening tool for eating disorders including anorexia, bulimia, and binge eating disorder.",
              url: TOOL_URL,
              datePublished: "2025-01-01",
              dateModified: new Date().toISOString().split("T")[0],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQ_DATA)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "SCOFF Eating Disorder Screening", url: TOOL_URL },
            ])
          ),
        }}
      />

      <SCOFFClient faqData={FAQ_DATA} />
    </>
  );
}

import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AQ10Client } from "./AQ10Client";

const TOOL_URL = `${SITE_URL}/aq-10-autism-screening`;

export const metadata: Metadata = createMetadata({
  path: "/aq-10-autism-screening",
  title: "AQ-10 Autism Spectrum Screening",
  description:
    "Take the free AQ-10 autism spectrum screening. 10 questions, 2 minutes. Validated screener for autism traits in adults. Private, instant results.",
  keywords: [
    "aq-10", "autism test", "autism screening", "autism spectrum test",
    "aq-10 questionnaire", "do i have autism", "autism quiz",
    "autism self-test", "adult autism screening", "autism spectrum quotient",
    "asperger test", "autism traits test", "free autism test",
    "autism assessment", "neurodivergent screening",
  ],
  openGraph: {
    title: "AQ-10 Autism Spectrum Screening",
    description: "Take the free AQ-10 autism spectrum screening. 10 questions, 2 minutes. Validated screener for autism traits in adults.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is autism spectrum condition?", answer: "Autism spectrum condition (also called autism spectrum disorder or ASD) is a neurodevelopmental difference that affects how a person perceives and interacts with the world. It involves differences in social communication, sensory processing, and patterns of behavior or interests. Autism is a spectrum, meaning it presents very differently from person to person. Some autistic people need significant daily support, while others live independently and may not receive identification until adulthood. Autism is not an illness or something that needs to be cured \u2014 it is a natural variation in how human brains develop and function." },
  { question: "Can adults be autistic without knowing it?", answer: "Yes. Many autistic adults were not identified in childhood, particularly those who learned to mask or camouflage their autistic traits to fit social expectations. This is especially common among women, people of color, and those with high intellectual ability. Late identification is increasingly recognized \u2014 many adults seek assessment in their 30s, 40s, or later after learning more about autism. Common experiences that prompt adults to seek assessment include lifelong social difficulties, sensory sensitivities, burnout from masking, or recognizing autistic traits after a child or family member is identified." },
  { question: "What does the AQ-10 measure?", answer: "The AQ-10 measures traits associated with the autism spectrum across several domains: social skills, attention switching, attention to detail, communication, and imagination. It asks about preferences and tendencies in everyday situations. A score of 6 or above suggests that autistic traits are present at a level where further professional assessment may be helpful. The AQ-10 is the abbreviated version of the full 50-item Autism Spectrum Quotient (AQ), designed as a quick screening tool recommended by NICE (National Institute for Health and Care Excellence) guidelines." },
  { question: "Is the AQ-10 accurate?", answer: "The AQ-10 was validated by Allison, Auyeung, and Baron-Cohen (2012) and is recommended by NICE guidelines as a first-step screening tool for adults. It has good sensitivity (identifying most autistic individuals) and reasonable specificity (correctly identifying most non-autistic individuals). However, like all screening tools, it can produce false positives and false negatives. People who have learned to mask autistic traits may score lower than expected. The AQ-10 is a screening tool, not a comprehensive assessment \u2014 a positive screen should always be followed by a full evaluation with a qualified professional." },
  { question: "What should I do after a positive AQ-10 screen?", answer: "A positive screen (score of 6 or above) means your responses are consistent with patterns commonly seen in autistic adults, and a comprehensive evaluation may be helpful. Good next steps include: speaking with your primary care provider and requesting a referral for autism assessment; contacting the Autism Society helpline (1-800-328-8476) for guidance on finding evaluators in your area; seeking a psychologist, psychiatrist, or neuropsychologist who specializes in adult autism assessment. A comprehensive assessment typically involves a detailed developmental history, standardized testing, and clinical interview. Many adults find that understanding themselves through the lens of autism \u2014 regardless of formal identification \u2014 can be validating and helpful." },
  { question: "What is the difference between autism and ADHD?", answer: "Autism and ADHD are both neurodevelopmental conditions, but they involve different core features. Autism primarily involves differences in social communication, sensory processing, and a tendency toward focused interests and routines. ADHD primarily involves differences in attention regulation, impulse control, and executive functioning. However, there is significant overlap \u2014 research suggests that 50-70% of autistic individuals also have ADHD traits, and many people are identified with both. The AQ-10 screens specifically for autism traits, while the ASRS screens for ADHD traits. If you relate to both sets of experiences, exploring both may be worthwhile." },
  { question: "Where can I get evaluated for autism as an adult?", answer: "Adult autism assessment is typically conducted by psychologists, psychiatrists, or neuropsychologists who specialize in neurodevelopmental conditions. Start by asking your primary care provider for a referral. The Autism Society helpline (1-800-328-8476) can help locate specialists in your area. University-affiliated autism research centers often offer adult assessments. Some practitioners offer telehealth assessments. Wait times can be long (months to over a year in some areas), so it's worth getting on a waiting list early. A comprehensive evaluation typically involves clinical interview, developmental history, standardized measures, and sometimes input from family members. The cost varies; some insurance plans cover autism assessment for adults." },
];

export default function AQ10Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "AQ-10 Autism Spectrum Screening Questionnaire",
              description: "A free online implementation of the AQ-10 (Autism Spectrum Quotient - 10 item), a validated screening tool for autism spectrum traits in adults developed by Simon Baron-Cohen et al. at the Autism Research Centre, University of Cambridge.",
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
              { name: "AQ-10 Autism Screening", url: TOOL_URL },
            ])
          ),
        }}
      />

      <AQ10Client faqData={FAQ_DATA} />
    </>
  );
}

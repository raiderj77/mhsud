import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { HealthTimelineClient } from "./HealthTimelineClient";

const TOOL_URL = `${SITE_URL}/health-recovery-timeline`;

export const metadata: Metadata = createMetadata({
  path: "/health-recovery-timeline",
  title: "Health Recovery Timeline After Quitting",
  description:
    "See what happens to your body after you stop drinking, smoking, or using drugs. Interactive timeline based on medical research. Free, private, instant.",
  keywords: [
    "what happens when you stop drinking timeline",
    "body recovery after quitting alcohol", "health benefits of sobriety timeline",
    "quit smoking timeline", "quitting alcohol timeline",
    "body after quitting drinking", "nicotine recovery timeline",
    "health recovery from alcohol", "opioid recovery timeline",
    "body healing after quitting smoking",
  ],
  openGraph: {
    title: "Health Recovery Timeline After Quitting",
    description: "See what happens to your body after you stop drinking, smoking, or using. Interactive timeline based on medical research.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "How long does it take for your body to recover from alcohol?", answer: "Recovery from alcohol follows a gradual timeline. Within 24 hours, blood sugar begins normalizing. Within the first week, sleep quality starts improving. By 2-3 weeks, blood pressure starts normalizing and liver fat begins reducing. By 1 month, skin appearance improves. By 3 months, liver function shows measurable improvement. By 1 year, liver inflammation is substantially reduced. Full recovery of certain organs can take years, and some effects of long-term heavy use may not be completely reversible. However, significant health improvement begins within days of stopping." },
  { question: "What happens when you quit smoking?", answer: "The body begins recovering from smoking remarkably quickly. Within 20 minutes, heart rate drops to normal. Within 12 hours, carbon monoxide levels in the blood normalize. Between 2 weeks and 3 months, circulation and lung function improve. By 1-9 months, coughing and shortness of breath decrease. By 1 year, heart disease risk is halved. By 5 years, stroke risk drops to non-smoker levels. By 10 years, lung cancer death risk is about half that of a current smoker. By 15 years, heart disease risk equals that of someone who never smoked." },
  { question: "Is it dangerous to stop drinking suddenly?", answer: "For people with significant alcohol dependence, stopping suddenly (going 'cold turkey') can be medically dangerous and in rare cases fatal. Alcohol withdrawal can cause seizures, delirium tremens (DTs), and other serious complications. This is why medical supervision is recommended when stopping heavy alcohol use. A healthcare provider can assess withdrawal risk and may recommend a medically supervised detox with medications to manage symptoms safely. If you drink heavily and want to stop, please consult a healthcare provider first. SAMHSA's helpline (1-800-662-4357) can help connect you with appropriate resources." },
  { question: "How long does opioid recovery take?", answer: "Physical withdrawal from opioids typically peaks at 1-3 days and acute symptoms subside within about a week. However, full recovery is a longer process. Sleep patterns may take a month to normalize. Brain chemistry continues rebalancing for about 3 months. Cognitive function improves over 6 months. Hormonal balance may take up to a year to fully restore. Post-acute withdrawal symptoms (PAWS) such as mood swings, sleep difficulties, and cravings can persist for months. Medication-assisted treatment (MAT) with medications like buprenorphine or naltrexone is considered the gold standard for opioid use disorder and can significantly support recovery." },
  { question: "Does your brain recover after substance use?", answer: "Yes, the brain has remarkable ability to heal and rewire itself (neuroplasticity). Research using brain imaging shows that many changes caused by substance use begin reversing after abstinence. Dopamine receptor density, which decreases with chronic substance use, begins recovering within months. Cognitive functions like attention, memory, and decision-making improve progressively. The speed and extent of recovery depends on the substance, duration and severity of use, and individual factors. Some recovery occurs within weeks, while full neurological recovery may take 1-2 years or longer for some individuals." },
  { question: "Is this timeline the same for everyone?", answer: "No. This timeline shows general patterns based on medical research, but individual experiences vary considerably. Factors that influence recovery speed include: age, overall health, genetics, how long and how heavily the substance was used, co-occurring health conditions, nutrition and exercise habits, and whether recovery is supported by medical care and social support. Some people experience faster recovery, while others may take longer. The timelines shown are based on averages from published research and should be treated as general guides rather than exact predictions." },
];

export default function HealthTimelinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Health Recovery Timeline",
              description: "An interactive visual timeline showing what happens to your body after you stop using alcohol, cigarettes, or opioids. Based on medical research. Shows which health milestones you have already reached.",
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
              { name: "Health Recovery Timeline", url: TOOL_URL },
            ])
          ),
        }}
      />

            <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the Health Recovery Timeline?</h2>
        <h2>How Does the Health Recovery Timeline Work?</h2>
        <h2>What Do My Recovery Timeline Results Mean?</h2>
      </section>
<HealthTimelineClient faqData={FAQ_DATA} />
    </>
  );
}

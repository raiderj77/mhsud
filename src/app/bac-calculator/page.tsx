import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { BACClient } from "./BACClient";

const TOOL_URL = `${SITE_URL}/bac-calculator`;

export const metadata: Metadata = createMetadata({
  path: "/bac-calculator",
  title: "BAC Calculator — Blood Alcohol Estimator",
  description:
    "Estimate your blood alcohol content with our free BAC calculator. Enter drinks, weight, and time for an instant estimate. Never drive impaired.",
  keywords: [
    "bac calculator", "blood alcohol calculator", "blood alcohol content calculator",
    "how drunk am i calculator", "when will i be sober calculator",
    "alcohol calculator", "bac estimator", "drunk calculator",
    "bac level calculator", "alcohol blood level calculator",
    "standard drink calculator", "blood alcohol level",
  ],
  openGraph: {
    title: "BAC Calculator — Blood Alcohol Estimator",
    description: "Estimate your blood alcohol content. See BAC level, effects, and time until sober. Free, private, instant.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is blood alcohol content (BAC)?", answer: "Blood alcohol content (BAC) is the percentage of alcohol in your bloodstream by weight. A BAC of 0.08% means there are 0.08 grams of alcohol per 100 milliliters of blood. BAC is the standard legal measure used to determine intoxication. In all 50 U.S. states, the legal limit for driving is 0.08% for adults 21 and over (lower for commercial drivers and those under 21). BAC is affected by many factors including body weight, biological sex, food intake, rate of drinking, medications, and individual metabolism." },
  { question: "How is BAC calculated?", answer: "This calculator uses the Widmark formula, the most widely used method for estimating BAC. The formula accounts for the amount of alcohol consumed (in standard drinks), body weight, biological sex (which affects body water percentage — males average about 68% water, females about 55%), and the time elapsed since drinking began. The body metabolizes alcohol at approximately 0.015% per hour. The formula is: BAC = (alcohol in grams \u00d7 100) / (body weight in grams \u00d7 body water constant) \u2212 (0.015 \u00d7 hours). This provides an estimate — actual BAC can vary significantly based on individual factors." },
  { question: "What is a standard drink?", answer: "In the United States, a standard drink contains approximately 14 grams (0.6 oz) of pure alcohol. This is equivalent to: 12 oz of regular beer (about 5% alcohol), 5 oz of wine (about 12% alcohol), or 1.5 oz of distilled spirits (about 40% alcohol / 80 proof). Many drinks served at bars and restaurants contain more than one standard drink. A large glass of wine (8 oz) is about 1.6 standard drinks. A pint of craft beer at 7% is about 1.5 standard drinks. A strong cocktail can contain 2-3 standard drinks." },
  { question: "How long does it take to sober up?", answer: "The body metabolizes alcohol at a relatively constant rate of approximately 0.015% BAC per hour (roughly one standard drink per hour), though this varies between individuals. There is no way to speed up this process — coffee, cold showers, and food do not lower your BAC faster. They may make you feel more alert, but your BAC and impairment level remain the same. The only thing that lowers BAC is time. For example, if your BAC reaches 0.08%, it would take approximately 5.3 hours to return to 0.00%. If your BAC reaches 0.15%, it would take approximately 10 hours." },
  { question: "Why is BAC different for men and women?", answer: "Biological sex affects BAC primarily because of differences in body composition. On average, people assigned male at birth have a higher percentage of body water (approximately 68%) compared to people assigned female at birth (approximately 55%). Since alcohol distributes through body water, the same amount of alcohol results in a higher concentration (higher BAC) in a body with less water. Additionally, research suggests differences in the enzyme alcohol dehydrogenase, which breaks down alcohol in the stomach. These are averages — individual variation exists within both groups." },
  { question: "What factors affect BAC besides weight and sex?", answer: "Many factors influence actual BAC beyond what this calculator can account for: food in the stomach (eating slows alcohol absorption significantly), rate of drinking (faster drinking raises BAC higher), medications (many drugs interact dangerously with alcohol), liver health and enzyme levels, age (older adults generally reach higher BAC), hydration level, body fat percentage, genetics, and tolerance (which affects perceived impairment but not actual BAC). Because of these variables, this calculator provides an estimate only and should never be used to determine if it is safe to drive." },
  { question: "What are signs of alcohol poisoning?", answer: "Alcohol poisoning is a medical emergency. Signs include: unconsciousness or inability to be awakened, vomiting while unconscious (risk of choking), slow or irregular breathing (fewer than 8 breaths per minute), seizures, hypothermia (low body temperature, pale or blue-tinged skin), and confusion or stupor. If someone shows any of these signs, call 911 immediately. Do not leave them alone, do not give them coffee or food, and turn them on their side to prevent choking if they vomit. Alcohol poisoning can be fatal — it is always better to call for help than to wait." },
];

export default function BACCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "BAC Calculator — Blood Alcohol Content Estimator",
              description: "A free BAC calculator using the Widmark formula. Estimates blood alcohol content based on sex, weight, drinks consumed, and time elapsed. Includes effects at each BAC level and estimated time until sober.",
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
              { name: "BAC Calculator", url: TOOL_URL },
            ])
          ),
        }}
      />

      <BACClient faqData={FAQ_DATA} />
    </>
  );
}

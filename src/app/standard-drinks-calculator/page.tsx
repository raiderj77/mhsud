import type { Metadata } from "next";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { StandardDrinksClient } from "./StandardDrinksClient";

const TOOL_URL = `${SITE_URL}/standard-drinks-calculator`;

export const metadata: Metadata = createMetadata({
  path: "/standard-drinks-calculator",
  title: "Standard Drinks Calculator",
  description:
    "Find out how many standard drinks are in your beverage. Enter type, size, and alcohol percentage for an instant count. Free and clinically informed.",
  keywords: [
    "standard drinks calculator", "how many drinks is that",
    "what is a standard drink", "standard drink calculator",
    "alcohol serving size calculator", "how many standard drinks",
    "standard drink equivalent", "drink size calculator",
    "alcohol units calculator", "number of standard drinks",
    "how much is one drink of alcohol", "standard drink size",
  ],
  openGraph: {
    title: "Standard Drinks Calculator",
    description: "Calculate how many standard drinks are in your beverage. Many common drinks contain more than one standard drink.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  { question: "What is a standard drink?", answer: "In the United States, a standard drink contains approximately 14 grams (0.6 fluid ounces) of pure alcohol. This is equivalent to 12 ounces of regular beer at 5% alcohol, 5 ounces of wine at 12% alcohol, or 1.5 ounces of distilled spirits at 40% alcohol (80 proof). The standard drink measurement was established by the National Institute on Alcohol Abuse and Alcoholism (NIAAA) to provide a consistent way to measure alcohol consumption regardless of beverage type. Many other countries use different standard drink sizes — for example, the UK uses 8 grams and Australia uses 10 grams." },
  { question: "Why do standard drinks matter?", answer: "Standard drinks matter because they allow you to accurately track how much alcohol you are actually consuming. Without understanding standard drinks, it is easy to significantly underestimate intake. For example, a single large glass of wine at a restaurant (8 oz, 14% ABV) contains about 1.9 standard drinks — nearly double what most people count as 'one drink.' Dietary guidelines, BAC calculations, screening tools like the AUDIT, and medical recommendations all use standard drinks as their unit of measurement. Accurately counting standard drinks is essential for understanding your relationship with alcohol." },
  { question: "How many standard drinks are in common beverages?", answer: "Many popular drinks contain significantly more than one standard drink. A pint of craft IPA (16 oz, 7%) is about 1.9 standard drinks. A large pour of wine (8 oz, 13%) is about 1.7. A Long Island Iced Tea can contain 3-4 standard drinks. A 16 oz malt liquor (8%) is about 2.1. A margarita made with 2 oz of tequila is about 1.3, but restaurant margaritas are often larger. Even a 'regular' pint of draft beer (16 oz, 5%) is 1.3 standard drinks — not one. This is why many people underestimate their alcohol consumption." },
  { question: "How do I calculate standard drinks?", answer: "The formula is: (volume in ounces) \u00d7 (alcohol percentage as decimal) \u00d7 (29.5735 mL per oz) \u00d7 (0.789 g/mL density of alcohol) \u00f7 14 grams. A simpler approximation: multiply the volume in ounces by the ABV percentage, then divide by 0.6. For example, a 16 oz beer at 6%: 16 \u00d7 0.06 = 0.96 oz of pure alcohol, divided by 0.6 = 1.6 standard drinks. This calculator does the math for you." },
  { question: "What are the NIAAA guidelines for moderate drinking?", answer: "The NIAAA defines moderate drinking as up to 1 standard drink per day for women and up to 2 standard drinks per day for men. Binge drinking is defined as consuming 4 or more standard drinks for women, or 5 or more for men, within about 2 hours. Heavy drinking is defined as more than 3 drinks on any day or 7 per week for women, and more than 4 on any day or 14 per week for men. These guidelines assume accurate counting of standard drinks — which is why understanding what constitutes a standard drink is so important." },
  { question: "Are standard drinks the same in every country?", answer: "No. Different countries define a standard drink differently. In the US, it is 14 grams of pure alcohol. In the UK, a 'unit' contains 8 grams. In Australia, a standard drink is 10 grams. In Canada and some European countries, it is 13.6 grams. In Japan, it is 19.75 grams. This means that drinking guidelines also differ by country. If you are using a health resource or screening tool, check which country's standard drink definition it uses. This calculator uses the US standard of 14 grams." },
];

export default function StandardDrinksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolPageJsonLd({
              name: "Standard Drinks Calculator",
              description: "A free calculator that shows how many US standard drinks (14g pure alcohol) are in any beverage based on container size and alcohol percentage. Includes presets for common drinks showing that many contain more than one standard drink.",
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
              { name: "Standard Drinks Calculator", url: TOOL_URL },
            ])
          ),
        }}
      />

      <StandardDrinksClient faqData={FAQ_DATA} />
    </>
  );
}

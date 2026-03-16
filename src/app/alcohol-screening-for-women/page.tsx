import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AUDITClient } from "../audit-alcohol-test/AUDITClient";

const TOOL_URL = `${SITE_URL}/alcohol-screening-for-women`;

export const metadata: Metadata = createMetadata({
  path: "/alcohol-screening-for-women",
  title: "Alcohol Use Screening for Women — Free AUDIT",
  description:
    "Women develop alcohol-related health problems faster and at lower consumption levels than men. The screening thresholds are different too. Free validated AUDIT screening with context on women and alcohol risk.",
  keywords: [
    "alcohol screening women", "alcohol use test women", "drinking problems women",
    "AUDIT-C women threshold", "female alcohol use disorder", "women and alcohol risk",
    "women drinking test", "alcohol screening for women free", "women alcohol health risks",
    "wine culture women", "alcohol and breast cancer", "women AUD screening",
  ],
  openGraph: {
    title: "Alcohol Use Screening for Women — Free AUDIT",
    description: "Free, private alcohol screening for women using the WHO's clinically validated AUDIT. Context on why alcohol risk is different for women.",
    url: TOOL_URL,
    type: "website",
  },
});

const FAQ_DATA = [
  {
    question: "Is one drink a day actually a problem for women?",
    answer: "The evidence has shifted. Earlier research suggested cardiovascular benefits from light drinking, but more recent studies using stronger methodology suggest the protective effect was overstated. The dose-response relationship between alcohol and breast cancer exists even at one drink per day. Current guidance is that any alcohol use carries some risk — for women with elevated breast cancer risk, even light drinking deserves consideration.",
  },
  {
    question: "Why is the AUDIT-C cutoff lower for women?",
    answer: "The lower threshold (≥3 vs ≥4) reflects that the same drinking pattern carries higher health risk in women due to pharmacokinetic differences and faster disease progression. Using the male cutoff for women would miss women with clinically significant hazardous drinking patterns.",
  },
  {
    question: "What does treatment look like for women with AUD?",
    answer: "Medications — naltrexone, acamprosate — are equally effective for women as men. Women often benefit from treatment programs that address the higher rates of trauma, depression, and anxiety comorbidity common in women with AUD. SAMHSA's treatment locator at findtreatment.gov can filter for women-specific programs.",
  },
  {
    question: "Why do women develop alcohol problems faster than men?",
    answer: "This is called 'telescoping.' Women have lower total body water, so the same amount of alcohol produces higher blood alcohol concentration. Women also have lower levels of gastric alcohol dehydrogenase, meaning more alcohol enters the bloodstream per drink. These biological differences mean women develop liver disease, cardiomyopathy, and dependence at lower consumption levels and over shorter time periods.",
  },
  {
    question: "Does alcohol affect women's hormones?",
    answer: "Yes. Alcohol disrupts estrogen metabolism and can worsen premenstrual symptoms. Many women notice increased alcohol sensitivity in the luteal phase — the week or two before menstruation. Some women increase drinking premenstrually as self-medication for mood symptoms without recognizing the pattern. Alcohol also affects fertility and can worsen menopausal symptoms.",
  },
  {
    question: "Is 'wine culture' actually a problem?",
    answer: "The normalization of daily wine drinking as self-care and stress relief — 'mommy wine culture,' wine-themed merchandise, social media — has contributed to a measurable increase in heavy drinking among women. Between 2001 and 2013, heavy drinking in women increased 58%. Wine is alcohol; a standard glass is 5 oz at 12% ABV. Home pours are typically 6–8 oz, making each glass 1.2–1.6 standard drinks.",
  },
];

export default function AlcoholScreeningForWomenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Alcohol Use Screening for Women — AUDIT", description: "A free, private alcohol screening tool for women using the WHO's clinically validated AUDIT questionnaire.", url: TOOL_URL, datePublished: "2026-03-10", dateModified: "2026-03-10" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "AUDIT Alcohol Test", url: `${SITE_URL}/audit-alcohol-test` }, { name: "Alcohol Use Screening for Women", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">WHO Validated (AUDIT)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300">Women&apos;s Health</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Alcohol Use Screening for Women
        </h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
            Most people don&apos;t know that women and men process alcohol differently at a biological
            level — and that the same number of drinks produces meaningfully higher blood alcohol
            concentration in women. Or that women develop liver disease, cardiomyopathy, and alcohol
            dependence at lower consumption levels and over shorter time periods than men. Or that the
            clinical screening tools use <strong>different positive thresholds for women</strong>{" "}
            specifically because of this.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            This page gives you that context — and a free, validated alcohol screening calibrated to
            those differences. It is <strong>not a diagnosis</strong>, just an honest check-in with
            yourself.
          </p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-pink-600 text-white font-semibold text-base hover:bg-pink-700 transition-colors shadow-sm">
            Start the Alcohol Screening
          </a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            Takes about 3 minutes. Completely private — nothing is stored or shared.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Why Women&apos;s Alcohol Risk Is Different
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              <strong>Body composition:</strong> Women have lower total body water (approximately 52%
              vs 61% in men), so the same amount of alcohol distributes in less fluid — producing
              higher blood alcohol concentration per drink at the same body weight.
            </p>
            <p>
              <strong>Enzyme differences:</strong> Women have lower levels of gastric alcohol
              dehydrogenase, the enzyme that begins breaking down alcohol before it reaches the
              bloodstream. More alcohol enters circulation per drink.
            </p>
            <p>
              <strong>Telescoping:</strong> This is the clinical term for the accelerated progression
              of alcohol use disorder in women. Women develop dependence, liver disease, and
              neurological damage at lower consumption levels and over shorter periods than men
              drinking the same amounts. A woman drinking heavily for three years may show liver
              damage comparable to a man who has drunk heavily for ten.
            </p>
            <p>
              <strong>Breast cancer:</strong> Alcohol is a known carcinogen with a dose-response
              relationship with breast cancer risk. Even moderate drinking — approximately one drink
              per day — is associated with elevated breast cancer risk. This applies specifically to
              women and is underemphasized in standard public health messaging.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The AUDIT-C Threshold Difference
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              The AUDIT-C — a widely used 3-question brief alcohol screen — uses different positive
              thresholds by sex:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-600">
                    <th className="text-left py-2 pr-4 font-semibold"></th>
                    <th className="text-left py-2 px-4 font-semibold">Men</th>
                    <th className="text-left py-2 pl-4 font-semibold">Women</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-400">
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 pr-4 font-medium">AUDIT-C positive screen</td>
                    <td className="py-2 px-4">&ge; 4</td>
                    <td className="py-2 pl-4">&ge; 3</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Reason</td>
                    <td className="py-2 px-4">Standard risk threshold</td>
                    <td className="py-2 pl-4">Lower threshold reflects faster progression and elevated health risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Using the male threshold for women produces false negatives — missing women with
              hazardous drinking patterns that carry real health risk.
            </p>
            <p>
              When completing any alcohol screen, use the actual standard drink definitions:{" "}
              <strong>12 oz regular beer (5% ABV), 5 oz wine (12% ABV), or 1.5 oz spirits (40%
              ABV)</strong>. Home pours are typically larger — a standard wine glass poured at home is
              often 6–8 oz, not 5 oz.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The Fastest-Growing Heavy-Drinking Population
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              This is a public health trend worth understanding directly. Between 2001 and 2013, heavy
              drinking in women increased by 58% (Grant et al., 2017). The COVID-19 pandemic
              accelerated this further — high-risk drinking in women increased by 41% during lockdowns
              (Pollard et al., 2020).
            </p>
            <p>
              The drivers are real: targeted alcohol marketing to women, normalization of &quot;wine
              culture&quot; as self-care, dual-income household stress, reduced social constraints on
              drinking. The downstream consequences — liver disease, breast cancer, AUD — are now
              appearing in clinical populations.
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Alcohol and Women&apos;s Mental Health
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              <strong>Anxiety and depression:</strong> Women are more likely than men to use alcohol to
              manage negative emotional states. Alcohol provides short-term relief from anxiety and
              depression while reliably worsening both conditions over time — particularly in the days
              following drinking. This creates a self-reinforcing cycle that can be difficult to
              recognize from the inside.
            </p>
            <p>
              <strong>Trauma history:</strong> Women have significantly higher rates of sexual trauma
              and interpersonal violence than men. PTSD and alcohol use disorder co-occur at high rates
              in women — the drinking often beginning as self-medication for trauma symptoms. Effective
              treatment must address both. The{" "}
              <Link href="/pcl-5-ptsd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">
                PCL-5 PTSD screening
              </Link>{" "}
              takes 5 minutes if that&apos;s relevant context.
            </p>
            <p>
              <strong>Menstrual cycle sensitivity:</strong> Many women notice increased alcohol
              sensitivity in the luteal phase — the week or two before menstruation — when estrogen
              drops. Some women increase drinking premenstrually as self-medication for mood symptoms,
              without recognizing the pattern.
            </p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
            Take the AUDIT Alcohol Screening
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Answer based on your actual intake — not an idealized version. Clinical usefulness depends
            on honest answers.
          </p>
        </div>
              <p className="text-sm text-gray-500 mt-6 mb-0 text-center">
        Last updated: <time dateTime="2026-03-16">March 16, 2026</time>
      </p>
      <section className="sr-only">
        <h2>What Is the Alcohol Screening for Women?</h2>
        <h2>How Is the Alcohol Screen Scored?</h2>
        <h2>What Do My Alcohol Screening Results Mean?</h2>
      </section>
<AUDITClient faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            What to Do With Your Results
          </h2>
          <div className="space-y-3">
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Score 0–7:</strong> Low risk range. No clinical concern from this screening.
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Score 8–15:</strong> Hazardous use range. Brief intervention and monitoring
                recommended. Worth discussing with your primary care physician.
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Score 16–19:</strong> Harmful use range. Professional evaluation recommended.
              </p>
            </div>
            <div className="bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-800 rounded-xl p-4">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <strong>Score 20+:</strong> Probable dependence range. Please seek professional
                support. SAMHSA&apos;s helpline (1-800-662-4357) provides free confidential treatment
                referrals 24/7.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
            For a 2-minute brief screen:{" "}
            <Link href="/audit-c-alcohol-screen" className="text-sky-600 dark:text-sky-400 hover:underline">
              Take the AUDIT-C →
            </Link>{" "}
            — remember the positive threshold for women is &ge;3, not &ge;4.
          </p>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential</li>
            <li><strong>Crisis Text Line:</strong> Text <strong>HOME</strong> to <strong>741741</strong> — free, 24/7</li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            This screening tool is for informational and educational purposes only. It is not a
            diagnostic tool and should not be used as a substitute for professional evaluation,
            diagnosis, or treatment.
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Reviewed by Jason Ramirez, CADC-II — Certified Drug and Alcohol Counselor with 11 years of clinical experience. See <a href='/about/jason-ramirez'>author credentials</a>.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Last reviewed: March 2026
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/audit-alcohol-test" className="text-sky-600 dark:text-sky-400 hover:underline">AUDIT Alcohol Test →</Link>
          <Link href="/audit-c-alcohol-screen" className="text-sky-600 dark:text-sky-400 hover:underline">AUDIT-C Quick Screen →</Link>
          <Link href="/anxiety-test-for-women" className="text-sky-600 dark:text-sky-400 hover:underline">Anxiety Test for Women →</Link>
          <Link href="/pcl-5-ptsd-screening" className="text-sky-600 dark:text-sky-400 hover:underline">PCL-5 PTSD Screening →</Link>
        </div>
      </div>
    </>
  );
}

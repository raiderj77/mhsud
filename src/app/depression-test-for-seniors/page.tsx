import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, toolPageJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { PHQ9Client } from "../phq-9-depression-test/PHQ9Client";

const TOOL_URL = `${SITE_URL}/depression-test-for-seniors`;

export const metadata: Metadata = createMetadata({
  path: "/depression-test-for-seniors",
  title: "Depression Test for Seniors — Free PHQ-9 Screen",
  description: "Free depression screening for older adults using the PHQ-9. Private, instant results. No signup.",
  keywords: [
    "depression test for seniors", "elderly depression screening", "senior depression quiz",
    "geriatric depression test", "depression older adults", "phq-9 elderly",
    "senior mental health test", "depression in aging", "elderly depression symptoms",
    "late life depression screening", "depression test older adults",
  ],
  openGraph: { title: "Depression Test for Seniors — Free PHQ-9 Screen", description: "Free, private depression screening for older adults using the PHQ-9. Instant results, no signup.", url: TOOL_URL, type: "website" },
});

const FAQ_DATA = [
  { question: "Is depression a normal part of aging?", answer: "No. Depression is not a normal or inevitable part of getting older, although it is common. About 7 million Americans aged 65 and older experience depression, yet it is frequently undiagnosed and untreated in this population. While older adults face unique challenges — retirement, loss of loved ones, health problems, reduced mobility — these life changes can trigger depression but do not make it 'normal.' Depression at any age is a treatable medical condition." },
  { question: "How is depression different in older adults?", answer: "Older adults with depression may not appear 'sad' in the traditional sense. Instead, they often present with fatigue, sleep changes, loss of appetite, unexplained physical pain, memory complaints, social withdrawal, irritability, or loss of interest in activities they once enjoyed. Depression in seniors can be mistaken for dementia, normal aging, or simply 'slowing down.' Physical complaints are especially common and may lead doctors to focus on medical conditions without screening for depression." },
  { question: "Can medications cause depression in seniors?", answer: "Yes. Several medications commonly prescribed to older adults can contribute to depressive symptoms, including some blood pressure medications (beta-blockers), corticosteroids, benzodiazepines, certain pain medications, and some Parkinson's drugs. Polypharmacy (taking multiple medications) increases this risk. If you suspect a medication may be affecting your mood, talk to your doctor — never stop medications without medical guidance." },
  { question: "Does loneliness cause depression in seniors?", answer: "Social isolation and loneliness are among the strongest risk factors for depression in older adults. Retirement, loss of a spouse or friends, reduced mobility, hearing or vision loss, and geographic distance from family can all contribute to isolation. Research shows that social isolation in seniors carries health risks equivalent to smoking 15 cigarettes per day. Maintaining social connections — even through phone calls, community programs, or online — is protective." },
  { question: "What are warning signs of depression in seniors?", answer: "Watch for: withdrawal from activities, persistent sadness or emptiness, changes in sleep or appetite, unexplained physical complaints, difficulty concentrating or making decisions, fatigue, neglecting personal care, increased alcohol use, expressing hopelessness or being a burden, and giving away possessions. In seniors, depression symptoms often overlap with medical conditions, making screening tools like this one especially valuable." },
  { question: "Can depression cause memory problems in older adults?", answer: "Yes. Depression can cause significant cognitive difficulties in older adults, sometimes called 'pseudodementia.' Depressive symptoms can impair concentration, memory, processing speed, and decision-making in ways that closely mimic early dementia. The critical difference is that cognitive symptoms caused by depression typically improve with treatment. If you or a loved one is experiencing both mood and memory changes, evaluation for both depression and cognitive decline is important." },
  { question: "Where can seniors get help for depression?", answer: "Start with your primary care provider, who can screen for depression and make referrals. The Eldercare Locator (1-800-677-1116) connects seniors to local resources including mental health services. Many communities offer senior centers with social activities. Telehealth therapy is available for those with mobility challenges. Medicare covers depression screening and mental health services. If you are in crisis, call or text 988." },
  { question: "Is online screening accurate for older adults?", answer: "The PHQ-9 has been validated for use with older adults and is widely used in geriatric settings. However, seniors who experience depression primarily through physical symptoms rather than emotional ones may score lower than their actual level of impairment. If you or your loved one relates to the descriptions on this page, a follow-up with a healthcare provider is worthwhile regardless of the score." },
];

export default function DepressionTestForSeniorsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolPageJsonLd({ name: "Depression Test for Seniors — PHQ-9 Screening", description: "A free, private depression screening tool for older adults using the PHQ-9.", url: TOOL_URL, datePublished: "2026-03-05", dateModified: "2026-03-11" })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "PHQ-9 Depression Test", url: `${SITE_URL}/phq-9-depression-test` }, { name: "Depression Test for Seniors", url: TOOL_URL }])) }} />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-800 dark:bg-sage-900/40 dark:text-sage-300">Clinically Validated (PHQ-9)</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">Older Adults 65+</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Depression Test for Seniors</h1>

        <div className="mb-6">
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">Depression is not a normal part of aging — but it affects about 7 million older Americans. If you or someone you love has been feeling persistently sad, withdrawing from activities, sleeping too much or too little, or just not feeling like themselves, this free screening can help make sense of what&apos;s happening.</p>
          <p className="text-lg text-slate-600 dark:text-slate-300">This uses the <strong>PHQ-9</strong>, the same tool doctors use. It is <strong>not a diagnosis</strong>, but it can start an important conversation with a healthcare provider.</p>
        </div>

        <div className="mb-10">
          <a href="#screening" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-600 text-white font-semibold text-base hover:bg-amber-700 transition-colors shadow-sm">Start the Depression Screening</a>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Takes about 3 minutes. Completely private — nothing is stored or shared.</p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Why This Matters</h2>
          <div className="grid gap-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">7 million affected</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">About 7 million U.S. adults aged 65+ experience depression — yet most do not receive treatment.<span className="text-slate-500 dark:text-slate-400"> — CDC / NIMH</span></p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">Often missed</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Depression in seniors is frequently mistaken for normal aging, grief, or early dementia — leading to widespread underdiagnosis.<span className="text-slate-500 dark:text-slate-400"> — American Geriatrics Society</span></p>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-1">Highly treatable</p>
              <p className="text-sm text-slate-700 dark:text-slate-300">Depression in older adults responds well to treatment — therapy, medication, or both. Treatment improves quality of life, physical health, and cognitive function.<span className="text-slate-500 dark:text-slate-400"> — APA</span></p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Understanding Depression in Older Adults</h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>Depression in older adults is both underdiagnosed and undertreated. This happens because symptoms often differ from younger adults — seniors may not report feeling &quot;sad&quot; but instead experience persistent fatigue, unexplained pain, memory difficulties, sleep problems, or loss of interest in things they used to enjoy. Family members may attribute these changes to aging itself.</p>
            <p>Major risk factors for late-life depression include chronic illness (heart disease, diabetes, cancer, Parkinson&apos;s), chronic pain, loss of a spouse or close friends, social isolation, reduced mobility, caregiving stress, and polypharmacy (side effects from multiple medications). Retirement and the loss of professional identity can also trigger depression.</p>
            <p>The relationship between depression and dementia is complex. Depression can cause cognitive symptoms that mimic dementia (called pseudodementia), and depression is also a risk factor for developing actual dementia. Getting an accurate diagnosis matters because depression-related cognitive decline is often reversible with treatment.</p>
            <p>The good news: depression in older adults is highly treatable. Both therapy (especially CBT and problem-solving therapy) and antidepressant medication are effective. Social engagement, physical activity (even gentle exercise like walking), and community involvement are also protective. Medicare covers annual depression screening and mental health treatment.</p>
          </div>
        </div>

        {/* Vascular Depression: A Geriatric-Specific Risk */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Vascular Depression: When Cardiovascular Health Affects Mood
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Geriatric psychiatry has identified a subtype of late-life depression called
              <strong> vascular depression</strong>, caused by small-vessel disease in the brain.
              Conditions like hypertension, diabetes, and atherosclerosis can damage the tiny
              blood vessels that supply brain regions responsible for mood regulation. Brain
              imaging studies show that older adults with these white matter changes are
              significantly more likely to develop depression — even without a prior history.
            </p>
            <p>
              Vascular depression tends to present differently: more psychomotor slowing (moving
              and thinking slowly), less guilt or self-blame, and poorer response to standard
              antidepressants alone. It responds better when cardiovascular risk factors are also
              managed — making blood pressure control, blood sugar management, and physical
              activity part of the approach. If you or a loved one developed depression for the
              first time after age 60, vascular factors are worth discussing with a doctor.
            </p>
          </div>
        </div>

        {/* The Retirement Identity Crisis */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            The Retirement Identity Crisis
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Retirement is often framed as a reward, but for many older adults it triggers an
              identity crisis that can lead to depression. Work provides structure, social
              connection, a sense of purpose, and a clear role in the world. When that disappears
              — sometimes abruptly — the void can be disorienting. Studies show that depression
              risk increases in the first two years after retirement, particularly for people
              whose identity was closely tied to their career.
            </p>
            <p>
              The loss is compounded when it coincides with other transitions: children moving
              away, a spouse&apos;s declining health, or moving to a new community. The solution
              is not to &quot;stay busy&quot; — it is to rebuild a sense of meaning. Volunteering,
              mentoring, part-time work, creative pursuits, or community involvement can provide
              the structure and purpose that work once filled. Recognizing that this adjustment
              period is real — and that struggling with it does not mean you are ungrateful — is
              an important first step.
            </p>
          </div>
        </div>

        {/* When Grief Becomes Depression */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            When Grief Becomes Depression in Older Adults
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300">
            <p>
              Older adults face a unique grief pattern that clinicians call <strong>bereavement
              overload</strong> — the accumulation of multiple losses in a compressed timeframe.
              The death of a spouse, siblings, lifelong friends, and peers can arrive in rapid
              succession, leaving little time to process each loss before the next one comes.
              This cumulative grief differs from a single bereavement and carries a higher risk
              of tipping into clinical depression.
            </p>
            <p>
              Grief and depression share symptoms — sadness, sleep disruption, appetite changes,
              withdrawal. The key differences: grief tends to come in waves tied to reminders of
              the person, while depression is more persistent and pervasive. Grief preserves
              self-esteem; depression often brings feelings of worthlessness. When grief lingers
              beyond 12 months with undiminished intensity and begins to impair daily functioning,
              it may have evolved into prolonged grief disorder, major depression, or both —
              conditions that benefit from targeted professional support.
            </p>
          </div>
        </div>
      </div>

      <div id="screening">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Take the PHQ-9 Depression Screening</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">Answer each question based on how you&apos;ve been feeling over the past two weeks.</p>
        </div>
        <PHQ9Client faqData={FAQ_DATA} />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Your Next Steps</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Eldercare Locator</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">Call <strong>1-800-677-1116</strong> to connect with local aging services, including mental health resources, in your area. Free, confidential.</p>
            </div>
          </div>
        </div>

        <div className="bg-crisis-50 dark:bg-crisis-950/30 border border-crisis-200 dark:border-crisis-800 rounded-xl p-5 mb-8">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Crisis Resources</h2>
          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>988 Suicide &amp; Crisis Lifeline:</strong> Call or text <strong>988</strong> — free, 24/7, confidential</li>
            <li><strong>Eldercare Locator:</strong> <strong>1-800-677-1116</strong></li>
            <li><strong>SAMHSA National Helpline:</strong> <strong>1-800-662-4357</strong> — free referrals, 24/7</li>
          </ul>
        </div>

        <div className="mb-6"><p className="text-sm text-slate-500 dark:text-slate-400 italic">This screening tool is for educational purposes only — it is not a diagnosis. Only a qualified healthcare professional can diagnose depression. Your responses are processed entirely in your browser and are never stored or transmitted.</p></div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-8">
          <p className="text-sm text-slate-600 dark:text-slate-400">Reviewed by <a href="/about/jason-ramirez">a Certified Drug and Alcohol Counselor (CADC-II)</a> with 11 years of clinical experience.</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Last reviewed: March 2026 by a Certified Drug and Alcohol Counselor (CADC-II) with 11 years of clinical experience.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-8 text-sm">
          <Link href="/phq-9-depression-test" className="text-sky-600 dark:text-sky-400 hover:underline">PHQ-9 Depression Test →</Link>
          <Link href="/loneliness-test-seniors" className="text-sky-600 dark:text-sky-400 hover:underline">Loneliness Test for Seniors →</Link>
          <Link href="/athens-insomnia-scale" className="text-sky-600 dark:text-sky-400 hover:underline">Athens Insomnia Scale →</Link>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, articleJsonLd, faqJsonLd, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";
import { AdSlot } from "@/components/AdSlot";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { BLOG_POSTS } from "@/lib/blog";

const ARTICLE_URL = `${SITE_URL}/blog/ocd-teens-guide`;
const POST_DATA = BLOG_POSTS.find((p) => p.slug === "ocd-teens-guide")!;

export const metadata: Metadata = createMetadata({
  path: "/blog/ocd-teens-guide",
  title: "OCD in Teenagers: What It Looks Like and How to Get Help",
  description:
    "OCD often first appears in adolescence. Learn the real symptoms beyond stereotypes, how ERP treatment works, what parents should know, and how a free screening can help.",
  keywords: [
    "OCD in teenagers",
    "teen OCD symptoms",
    "OCD test for teens",
    "signs of OCD in teens",
    "adolescent OCD",
    "teenage OCD",
  ],
  openGraph: {
    type: "article",
    publishedTime: POST_DATA.publishedDate,
    modifiedTime: POST_DATA.modifiedDate,
  },
});

const FAQ_DATA = [
  {
    question: "How common is OCD in teenagers?",
    answer:
      "OCD affects approximately 1\u20132% of children and adolescents, making it one of the more common psychiatric conditions in youth. The average age of onset is 19, but symptoms frequently begin earlier \u2014 about half of all people with OCD develop symptoms before age 18. Boys tend to develop OCD earlier than girls. Because OCD is often hidden due to shame, actual prevalence may be higher than reported.",
  },
  {
    question: "Is my teen\u2019s perfectionism actually OCD?",
    answer:
      "Perfectionism alone is not OCD. The distinguishing factor is whether the perfectionism is driven by intrusive, unwanted thoughts (obsessions) and whether the teen performs repetitive behaviors or mental rituals (compulsions) to reduce the distress those thoughts cause. A teen who wants their essay to be excellent has high standards. A teen who rewrites the same sentence 30 times because they fear something terrible will happen if it is not \u201cjust right\u201d may have OCD. The key markers are distress, time consumption (typically 1+ hours daily), and inability to stop despite wanting to.",
  },
  {
    question: "What is ERP and does it work for teen OCD?",
    answer:
      "Exposure and Response Prevention (ERP) is the gold-standard treatment for OCD. It involves gradually and systematically exposing the person to situations that trigger obsessions while preventing the compulsive response. Over time, the brain learns that the feared outcome does not occur and that anxiety naturally decreases without rituals. ERP has strong research support for adolescents, with studies showing 60\u201380% of teens experience significant improvement. It can be challenging but is highly effective when delivered by a trained therapist.",
  },
  {
    question: "Should parents accommodate OCD rituals?",
    answer:
      "No, though this recommendation comes with compassion. Family accommodation \u2014 participating in rituals, providing excessive reassurance, or modifying family routines around OCD \u2014 is well-intentioned but reinforces the disorder. Research shows that higher family accommodation is associated with more severe OCD symptoms. Instead, parents should work with their teen\u2019s therapist to learn how to support without accommodating. This does not mean being harsh or dismissive. It means gently refusing to participate in compulsions while validating the teen\u2019s distress.",
  },
];

export default function OcdTeensGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: "OCD in Teenagers: What It Looks Like and How to Get Help", description: "OCD often first appears in adolescence. Learn the real symptoms, how ERP treatment works, and what parents should know.", url: ARTICLE_URL, datePublished: POST_DATA.publishedDate, dateModified: POST_DATA.modifiedDate })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ_DATA)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: "OCD in Teenagers", url: ARTICLE_URL }])) }} />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">Education</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">10 min read</span>
          </div>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            OCD in Teenagers: What It Looks Like and How to Get Help
          </h1>
          <AuthorByline publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Obsessive-compulsive disorder often first appears during adolescence, with about half of all cases beginning before age 18. But OCD in teenagers is widely misunderstood &mdash; it is not about being neat, organized, or particular. It is about distressing intrusive thoughts and compulsions performed to reduce overwhelming anxiety. The mean delay from symptom onset to treatment is 7&ndash;10 years. Early screening and recognition can save a teenager years of unnecessary suffering.
          </p>
        </header>

        <div className="prose-mh space-y-8">
          <div className="card p-5 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 not-prose">
            <p className="text-sm font-semibold text-red-800 dark:text-red-400 mb-2">If you or your teen are in crisis</p>
            <ul className="mt-2 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li><strong>988 Suicide &amp; Crisis Lifeline</strong> &mdash; Call or text <strong>988</strong> (US, 24/7)</li>
              <li><strong>Crisis Text Line</strong> &mdash; Text <strong>HOME</strong> to <strong>741741</strong> (free, 24/7)</li>
              <li><strong>SAMHSA National Helpline</strong> &mdash; <strong>1-800-662-4357</strong> (free, confidential, 24/7)</li>
            </ul>
          </div>

          <div className="card p-5 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 not-prose">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-400 mb-2">Clinical Disclaimer</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This screening tool is for informational and educational purposes only. It is not a diagnostic tool and should not be used as a substitute for professional evaluation, diagnosis, or treatment.
            </p>
          </div>

          <section>
            <h2>What OCD actually looks like in teenagers</h2>
            <p>
              OCD involves two components: <strong>obsessions</strong> (intrusive, unwanted thoughts, images, or urges that cause significant distress) and <strong>compulsions</strong> (repetitive behaviors or mental acts performed to reduce the anxiety caused by obsessions). In teenagers, common presentations include:
            </p>
            <ul>
              <li><strong>Contamination fears:</strong> Excessive handwashing, avoiding public surfaces, fear of germs or illness. Hands may be raw or chapped from washing. The teen may refuse to touch doorknobs, shared items, or other people.</li>
              <li><strong>&quot;Just right&quot; compulsions:</strong> Needing things to feel, look, or sound a certain way. Rewriting sentences until they are &quot;perfect,&quot; tapping or touching in specific patterns, or arranging objects symmetrically &mdash; not from preference, but from an overwhelming sense that something terrible will happen if it is not &quot;right.&quot;</li>
              <li><strong>Intrusive violent or sexual thoughts:</strong> Among the most distressing OCD subtypes, and extremely common. Teens may have unwanted thoughts about harming someone they love or intrusive sexual imagery that feels deeply wrong to them. These thoughts are ego-dystonic &mdash; they go against the teen&apos;s values and desires &mdash; which is precisely what makes them so distressing. Having these thoughts does not mean the teen wants to act on them.</li>
              <li><strong>Reassurance-seeking:</strong> Constantly asking parents or others for confirmation: &quot;Did I lock the door?&quot; &quot;Am I a bad person?&quot; &quot;Are you sure I did not do something wrong?&quot; This can look like neediness but is actually a compulsion.</li>
              <li><strong>Perfectionism that paralyzes:</strong> Beyond normal high standards, OCD-driven perfectionism involves spending hours on assignments, erasing and rewriting repeatedly, being unable to submit work, or refusing to start tasks out of fear they cannot be done perfectly.</li>
              <li><strong>Ritualistic behaviors:</strong> Counting, checking, repeating phrases, mental reviewing, touching things in a specific order or number of times. These rituals may be invisible to others (mental compulsions) or visible but misinterpreted as &quot;quirks.&quot;</li>
            </ul>
          </section>

          <section>
            <h2>Why OCD is not about being neat or organized</h2>
            <p>
              One of the most damaging misconceptions about OCD is that it is about liking things clean or organized. Phrases like &quot;I&apos;m so OCD about my desk&quot; trivialize a serious condition and make it harder for teens who actually have OCD to recognize their symptoms and seek help.
            </p>
            <p>
              The defining characteristic of OCD is <strong>distress</strong>. People with OCD do not enjoy their rituals. They perform compulsions because the anxiety of not doing them feels unbearable. OCD is the fourth most common mental health condition, and it can be profoundly disabling. The World Health Organization has ranked it among the top ten most disabling illnesses worldwide.
            </p>
            <p>
              In teenagers, OCD can consume hours of each day, interfere with homework, disrupt friendships, cause significant family conflict, and lead to depression when the teen feels trapped by their own mind. Many teens hide their symptoms out of shame, believing they are &quot;crazy&quot; or that their thoughts mean something terrible about who they are.
            </p>
          </section>

          <AdSlot position="Blog In-Content 1" className="my-8" />

          <section>
            <h2>How screening helps catch OCD early</h2>
            <p>
              The <Link href="/ocd-test-teens" className="text-sage-600 dark:text-sage-400 underline">MindCheck Tools OCD screening for teens</Link> is a free, private self-assessment that helps identify OCD symptom patterns. It takes just a few minutes, runs entirely in the browser, and no data is stored or shared.
            </p>
            <p>
              Early identification matters enormously with OCD. The mean delay from symptom onset to receiving appropriate treatment is 7&ndash;10 years. During that delay, OCD patterns become more entrenched, academic and social functioning deteriorate, and comorbid conditions like depression often develop. A screening tool cannot provide a clinical assessment, but it can prompt the conversation that leads to one.
            </p>
            <p>
              The <Link href="/oci-r-ocd-screening" className="text-sage-600 dark:text-sage-400 underline">OCI-R screening</Link> is another validated tool available for older teens and adults. If anxiety is also present &mdash; which is common with OCD &mdash; the <Link href="/gad-7-anxiety-test" className="text-sage-600 dark:text-sage-400 underline">GAD-7</Link> can help identify the broader anxiety picture.
            </p>
          </section>

          <section>
            <h2>ERP: the gold-standard treatment for teen OCD</h2>
            <p>
              Exposure and Response Prevention (ERP) is the most effective evidence-based treatment for OCD in both teens and adults. Understanding how it works can reduce the fear around seeking help:
            </p>
            <ul>
              <li><strong>How it works:</strong> ERP involves gradually and systematically exposing the teen to situations, thoughts, or objects that trigger obsessions &mdash; while preventing the compulsive response. For example, a teen with contamination OCD might touch a doorknob and then resist the urge to wash their hands.</li>
              <li><strong>Why it works:</strong> Through repeated exposure, the brain learns two things: (1) the feared outcome does not occur, and (2) anxiety naturally decreases on its own without performing the compulsion. This process is called habituation.</li>
              <li><strong>Effectiveness:</strong> Studies consistently show that 60&ndash;80% of adolescents with OCD experience significant improvement with ERP. It is the most effective treatment available, outperforming medication alone.</li>
              <li><strong>What it requires:</strong> ERP is challenging. It involves deliberately facing distressing thoughts and situations. A qualified therapist guides the process at a pace the teen can tolerate, building from less distressing exposures to more difficult ones.</li>
              <li><strong>Finding a provider:</strong> Not all therapists are trained in ERP. Look for a provider who specifically lists ERP or OCD treatment in their specialties. The International OCD Foundation (IOCDF) maintains a provider directory.</li>
            </ul>
          </section>

          <AdSlot position="Blog In-Content 2" className="my-8" />

          <section>
            <h2>What parents need to know about family accommodation</h2>
            <p>
              Family accommodation is one of the most important concepts for parents of teens with OCD. Accommodation means participating in or facilitating OCD rituals, even with good intentions:
            </p>
            <ul>
              <li>Answering reassurance questions (&quot;Yes, your hands are clean enough&quot;)</li>
              <li>Modifying family routines around the teen&apos;s OCD (avoiding certain places, changing how you prepare food)</li>
              <li>Performing rituals on the teen&apos;s behalf (checking locks, providing excessive washing supplies)</li>
              <li>Waiting for the teen to complete rituals before the family can proceed</li>
              <li>Allowing excessive time for compulsions (letting them be late to school for rituals)</li>
            </ul>
            <p>
              Research consistently shows that higher family accommodation is associated with more severe OCD symptoms. This does not mean parents caused the OCD. It means that well-intentioned accommodation inadvertently reinforces the OCD cycle by teaching the brain that the compulsion was &quot;necessary.&quot;
            </p>
            <p>
              Reducing accommodation should be done gradually and with therapeutic guidance. The goal is not to be harsh or dismissive. It is to gently and compassionately refuse to participate in the OCD cycle while validating the teen&apos;s distress: &quot;I can see this is really hard for you. I love you, and I&apos;m not going to help the OCD stay in charge.&quot;
            </p>
          </section>

          <section>
            <h2>When to seek professional help</h2>
            <p>
              Seek evaluation from a mental health professional if your teen:
            </p>
            <ul>
              <li>Spends an hour or more daily on obsessive thoughts or compulsive behaviors</li>
              <li>Has rituals that interfere with school, friendships, or family life</li>
              <li>Is distressed by intrusive thoughts they cannot control</li>
              <li>Avoids situations, places, or people because of obsessive fears</li>
              <li>Has physical signs like raw hands from washing, thinning hair from pulling, or skin damage from picking</li>
              <li>Expresses shame about their thoughts or behaviors</li>
              <li>Shows signs of depression alongside OCD symptoms</li>
            </ul>
            <p>
              The <Link href="/ocd-test-teens" className="text-sage-600 dark:text-sage-400 underline">teen OCD screening</Link> provides a structured starting point you can bring to a provider. Remember: OCD is highly treatable with the right approach. The sooner treatment begins, the better the outcomes.
            </p>
          </section>

          <AdSlot position="Blog In-Content 3" className="my-8" />

          <div className="card p-6 sm:p-8 bg-sage-50 dark:bg-sage-950/20 border-sage-200 dark:border-sage-800 not-prose text-center">
            <h3 className="font-serif text-lg font-semibold text-sage-700 dark:text-sage-400 mb-2">Screen for OCD symptoms</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Free, private, no account required. Takes under 5 minutes.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/ocd-test-teens" className="btn-primary text-sm">Take the Teen OCD Screening</Link>
              <Link href="/oci-r-ocd-screening" className="btn-primary text-sm">OCI-R OCD Screening</Link>
            </div>
          </div>

          <AuthorBio publishedDate={POST_DATA.publishedDate} modifiedDate={POST_DATA.modifiedDate} />

          <section className="not-prose mt-12">
            <h2 className="font-serif text-heading font-bold text-neutral-900 dark:text-neutral-50 mb-5">Frequently Asked Questions</h2>
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="card mb-2 group">
                <summary className="p-4 cursor-pointer flex justify-between items-center text-sm font-semibold text-neutral-700 dark:text-neutral-200 list-none">
                  {faq.question}
                  <svg className="w-4 h-4 text-neutral-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </section>

          <section className="not-prose mt-10">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Tools</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/ocd-test-teens" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Teen OCD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">OCD screening designed for adolescents</p>
              </Link>
              <Link href="/oci-r-ocd-screening" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">OCI-R OCD Screening</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Validated OCD screening for adults and older teens</p>
              </Link>
              <Link href="/gad-7-anxiety-test" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">GAD-7 Anxiety Test</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Generalized anxiety screening</p>
              </Link>
            </div>
          </section>

          <section className="not-prose mt-6">
            <h3 className="font-serif text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-4">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/what-ocd-looks-like" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">OCD Myths vs. Reality</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What OCD really looks like beyond the stereotypes</p>
              </Link>
              <Link href="/blog/what-does-oci-r-score-mean" className="card p-4 hover:border-sage-300 dark:hover:border-sage-700 transition-colors">
                <p className="text-sm font-semibold text-sage-600 dark:text-sage-400 mb-1">Understanding OCI-R Scores</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">What your OCI-R score means and next steps</p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";
import { AuthorBio } from "@/components/AuthorBio";
import { AuthorByline } from "@/components/AuthorByline";
import { AUTHOR_SCHEMA } from "@/config/author";
import {
  breadcrumbJsonLd,
  createMetadata,
  faqJsonLd,
  SITE_NAME,
  SITE_URL,
} from "@/lib/metadata";

const PAGE_PATH = "/recommended-reading";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PUBLISHED_DATE = "2026-08-17";
const UPDATED_DATE = "2026-08-17";
const BOOKSHOP_AFFILIATE_ID = "127434";

const BOOKS = [
  {
    category: "Practical coping skills",
    title: "Mind Over Mood",
    edition: "Second edition",
    authors: ["Dennis Greenberger", "Christine A. Padesky"],
    publisher: "Guilford Press",
    year: "2015",
    isbn: "9781462520428",
    audience: "Adults who want a structured introduction to cognitive-behavioral skills and worksheets.",
    reason:
      "The current publisher edition is written by credentialed clinical psychologists and organizes practical exercises in a step-by-step workbook.",
    boundary:
      "This is an educational skills workbook. It is not a diagnosis, a treatment plan, or a promise that a particular approach will work for you.",
    sourceUrl:
      "https://www.guilford.com/books/Mind-Over-Mood/Greenberger-Padesky/9781462520428",
  },
  {
    category: "Practical coping skills",
    title: "The Dialectical Behavior Therapy Skills Workbook",
    edition: "Second edition",
    authors: ["Matthew McKay", "Jeffrey C. Wood", "Jeffrey Brantley"],
    publisher: "New Harbinger Publications",
    year: "2019",
    isbn: "9781684034581",
    audience: "Adults interested in learning mindfulness, distress-tolerance, emotion-regulation, and interpersonal skills.",
    reason:
      "The publisher identifies the authors' clinical backgrounds and describes a revised workbook focused on four practical DBT skill areas.",
    boundary:
      "Reading or completing a workbook is not the same as receiving dialectical behavior therapy from a qualified professional.",
    sourceUrl:
      "https://www.newharbinger.com/9781684034604/the-dialectical-behavior-therapy-skills-workbook/",
  },
  {
    category: "Recovery education",
    title: "Finding Your Best Self",
    edition: "Revised edition: Recovery from Addiction, Trauma, or Both",
    authors: ["Lisa M. Najavits"],
    publisher: "Guilford Press",
    year: "2019",
    isbn: "9781462539895",
    audience: "Adults seeking recovery-oriented reflection exercises related to addiction, trauma, or both.",
    reason:
      "The author is a researcher and clinician specializing in trauma and addiction, and the book includes reflection questions and practical tools.",
    boundary:
      "This book is not crisis care and does not replace trauma-informed or substance-use care from a qualified professional.",
    sourceUrl:
      "https://www.guilford.com/books/Finding-Your-Best-Self/Lisa-Najavits/9781462539895",
  },
  {
    category: "Family and caregivers",
    title: "Beyond Addiction",
    edition: "Tenth-anniversary edition: How Science and Kindness Help People Change",
    authors: ["Jeffrey Foote", "Carrie Wilkens", "Nicole Kosanke", "Stephanie Higgs"],
    publisher: "Scribner",
    year: "2014",
    isbn: "9781476709482",
    audience: "Family members and friends supporting an adult affected by substance use or another compulsive behavior.",
    reason:
      "The publisher describes practical family guidance grounded in motivational and behavioral approaches rather than confrontation or shame.",
    boundary:
      "No book can guarantee that another person will change. It is not a substitute for safety planning, crisis help, or professional support.",
    sourceUrl:
      "https://www.simonandschuster.com/books/Beyond-Addiction/Jeffrey-Foote/9781476709482",
  },
  {
    category: "Helping professionals",
    title: "Motivational Interviewing",
    edition: "Fourth edition: Helping People Change and Grow",
    authors: ["William R. Miller", "Stephen Rollnick"],
    publisher: "Guilford Press",
    year: "2023",
    isbn: "9781462552795",
    audience: "Counselors, educators, healthcare workers, coaches, and students learning a professional communication approach.",
    reason:
      "This is the current professional guide from the originators of motivational interviewing, with updated evidence, ethics, and practice examples.",
    boundary:
      "This is a practitioner and course text. Buying or reading it does not provide a credential or replace supervised training.",
    sourceUrl:
      "https://www.guilford.com/books/Motivational-Interviewing/Miller-Rollnick/9781462552795",
  },
  {
    category: "Navigating care",
    title: "You Are Not Alone",
    edition: "The NAMI Guide to Navigating Mental Health, 2025 paperback",
    authors: ["Ken Duckworth"],
    publisher: "Zando",
    year: "2025",
    isbn: "9781638930976",
    audience: "Adults and families looking for a plain-language overview of mental-health care, recovery, and lived experience.",
    reason:
      "NAMI describes the guide as combining professional information with the experiences of people and families who have navigated mental-health care.",
    boundary:
      "The guide offers general information, not individualized medical advice. Current crisis and care resources remain more important when help is urgent.",
    sourceUrl:
      "https://zandoprojects.com/books/you-are-not-alone-paperback",
  },
] as const;

const FAQS = [
  {
    question: "How did MindCheck Tools select these mental-health and recovery books?",
    answer:
      "We checked the exact edition, publisher, author background, intended audience, claims, safety limits, and current Bookshop availability. We favored practical books with reputable source records and excluded cure claims, diagnostic products, supplements, and fear-based recommendations.",
  },
  {
    question: "Are these books a substitute for therapy or professional care?",
    answer:
      "No. They are general educational resources. A book cannot diagnose you, provide individualized care, replace emergency help, or determine which treatment is appropriate for you.",
  },
  {
    question: "Does MindCheck Tools earn money from these links?",
    answer:
      "MindCheck Tools may earn a commission when a visitor buys through a Bookshop.org link. The selections are reviewed independently, and the affiliate relationship does not affect assessments, results, crisis resources, or access to free site content.",
  },
  {
    question: "Does clicking a book link share my assessment answers or score?",
    answer:
      "No. MindCheck Tools does not add an assessment, condition, answer, score, result, email address, or user identifier to a Bookshop link. Links use a no-referrer policy, but Bookshop.org is a separate service with its own privacy and cookie practices.",
  },
];

export const metadata: Metadata = createMetadata({
  path: PAGE_PATH,
  title: "Mental Health & Recovery Books",
  description:
    "Six independently reviewed mental-health and recovery books, with exact editions, selection reasons, safety limits, and a clear affiliate disclosure.",
  keywords: [
    "mental health books",
    "recovery books",
    "mental health workbook",
    "addiction recovery books",
    "books for families affected by addiction",
    "motivational interviewing book",
  ],
});

function collectionJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#webpage`,
    name: "Mental Health and Recovery Books",
    description:
      "An independently reviewed list of six general educational books about coping skills, recovery, family support, professional practice, and navigating care.",
    url: PAGE_URL,
    datePublished: PUBLISHED_DATE,
    dateModified: UPDATED_DATE,
    reviewedBy: AUTHOR_SCHEMA,
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: BOOKS.length,
      itemListElement: BOOKS.map((book, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Book",
          name: book.title,
          bookEdition: book.edition,
          isbn: book.isbn,
          author: book.authors.map((name) => ({ "@type": "Person", name })),
          publisher: { "@type": "Organization", name: book.publisher },
          datePublished: book.year,
        },
      })),
    },
  };
}

const externalLinkClass =
  "inline-flex min-h-[44px] items-center rounded-lg px-4 py-2 text-sm font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2";

export default function RecommendedReadingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Recommended reading", url: PAGE_URL },
            ]),
          ),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <span className="badge bg-sage-50 dark:bg-sage-950/30 text-sage-700 dark:text-sage-400">
            Independently reviewed resource list
          </span>
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mt-4 mb-4">
            Mental Health and Recovery Books
          </h1>
          <AuthorByline publishedDate={PUBLISHED_DATE} modifiedDate={UPDATED_DATE} />
          <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            These six books offer practical education about coping skills, recovery, family support,
            professional communication, and navigating care. We checked the exact editions and explain
            both why each book may be useful and what it cannot do.
          </p>
        </header>

        <AnswerBlock
          what="A six-book educational reading list with exact editions, source links, and safety limits."
          who="Adults, families, educators, counselors, and other helping professionals seeking general information."
          bottomLine="Use books as learning aids, not diagnoses, treatment plans, emergency help, or personalized recommendations."
          lastUpdated={UPDATED_DATE}
        />

        <aside
          aria-labelledby="affiliate-disclosure-heading"
          className="rounded-xl border-2 border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 p-5 sm:p-6 mb-10"
        >
          <h2 id="affiliate-disclosure-heading" className="font-serif text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">
            Affiliate disclosure
          </h2>
          <p className="text-base leading-relaxed text-neutral-800 dark:text-neutral-200 mb-2">
            MindCheck Tools may earn a commission if you buy through a Bookshop.org link. We choose
            resources independently, and affiliate relationships do not affect our assessments, results,
            crisis resources, or free educational content.
          </p>
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            Prices and availability can change. The source link on each card goes to the publisher or
            sponsoring organization; the Bookshop link is the commission-earning link.
          </p>
        </aside>

        <section aria-labelledby="book-list-heading" className="mb-12">
          <h2 id="book-list-heading" className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3">
            Which books made the first list?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
            A shorter list is easier to review honestly. Each entry names a specific edition and ISBN so
            readers can distinguish it from older or different versions.
          </p>

          <div className="grid grid-cols-1 gap-6">
            {BOOKS.map((book) => {
              const affiliateUrl = `https://bookshop.org/a/${BOOKSHOP_AFFILIATE_ID}/${book.isbn}`;
              return (
                <article key={book.isbn} className="card p-5 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sage-700 dark:text-sage-400 mb-2">
                    {book.category}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-1">{book.edition}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                    By {book.authors.join(", ")} &middot; {book.publisher}, {book.year} &middot; ISBN {book.isbn}
                  </p>

                  <dl className="space-y-4 mb-5">
                    <div>
                      <dt className="font-semibold text-neutral-900 dark:text-neutral-100">Who might find it useful?</dt>
                      <dd className="mt-1 text-neutral-700 dark:text-neutral-300 leading-relaxed">{book.audience}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-neutral-900 dark:text-neutral-100">Why it is here</dt>
                      <dd className="mt-1 text-neutral-700 dark:text-neutral-300 leading-relaxed">{book.reason}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-neutral-900 dark:text-neutral-100">Important limit</dt>
                      <dd className="mt-1 text-neutral-700 dark:text-neutral-300 leading-relaxed">{book.boundary}</dd>
                    </div>
                  </dl>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={book.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      referrerPolicy="no-referrer"
                      className={`${externalLinkClass} border border-sage-300 dark:border-sage-700 text-sage-800 dark:text-sage-200 hover:bg-sage-50 dark:hover:bg-sage-950/30 focus-visible:outline-sage-700`}
                    >
                      Check the publisher source
                    </a>
                    <a
                      href={affiliateUrl}
                      target="_blank"
                      rel="sponsored nofollow noopener noreferrer"
                      referrerPolicy="no-referrer"
                      className={`${externalLinkClass} bg-sage-700 text-white hover:bg-sage-800 focus-visible:outline-sage-700`}
                    >
                      View this edition at Bookshop.org
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="prose-mh space-y-9">
          <section aria-labelledby="selection-heading">
            <h2 id="selection-heading">How do we choose a book?</h2>
            <p>
              We verify the exact title, edition, publisher, publication date, ISBN, author background,
              intended audience, and public availability. We look for a clear educational purpose and
              language that does not promise a cure, guaranteed outcome, diagnosis, or replacement for care.
            </p>
            <p>
              We exclude supplements, detoxes, diagnostic devices, coercive treatment pitches, fear-based
              selling, and books chosen because of an assessment answer or score. A commission never moves a
              book onto the list.
            </p>
          </section>

          <section aria-labelledby="not-personalized-heading">
            <h2 id="not-personalized-heading">Are these recommendations personalized?</h2>
            <p>
              No. Everyone sees the same six-book list. MindCheck Tools does not use an assessment answer,
              score, inferred condition, crisis interaction, browsing history, or personal profile to decide
              which book you see.
            </p>
            <p>
              If you want help choosing care rather than a book, see our general guide to{" "}
              <Link href="/how-to-talk-to-your-doctor-about-mental-health">
                talking with a healthcare professional about mental health
              </Link>.
            </p>
          </section>

          <section aria-labelledby="privacy-heading">
            <h2 id="privacy-heading">What happens when you click Bookshop.org?</h2>
            <p>
              You leave MindCheck Tools and enter a separate service with its own privacy, cookie, advertising,
              and purchase practices. Our link contains only the public MindCheck Tools affiliate number and the
              book&apos;s ISBN. It does not contain an assessment name, answer, score, result, condition, email address,
              or user identifier, and it uses a no-referrer policy.
            </p>
            <p>
              You can review the{" "}
              <a href="https://bookshop.org/info/privacy-notice" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer">
                Bookshop.org privacy notice
              </a>{" "}
              before visiting or purchasing. MindCheck Tools does not require a purchase to use any assessment,
              crisis resource, or educational page.
            </p>
          </section>

          <section aria-labelledby="limitations-heading">
            <h2 id="limitations-heading">What can a book not tell you?</h2>
            <p>
              A book cannot diagnose a mental-health or substance-use condition, assess immediate safety,
              account for your medical history, or decide which professional service is appropriate. Even a
              reputable workbook is general education, not individual clinical care.
            </p>
          </section>

          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading">Questions about this reading list</h2>
            {FAQS.map((faq) => (
              <div key={faq.question} className="mb-5">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </section>
        </div>

        <section
          aria-labelledby="urgent-help-heading"
          className="mt-12 rounded-xl border-2 border-crisis-200 dark:border-crisis-800 bg-crisis-50 dark:bg-crisis-950/30 p-5 sm:p-6"
        >
          <h2 id="urgent-help-heading" className="font-serif text-2xl font-bold text-crisis-800 dark:text-crisis-200 mb-3">
            Need help now?
          </h2>
          <p className="text-crisis-800 dark:text-crisis-200 leading-relaxed mb-3">
            A reading list is not crisis support. In the United States, call or text <strong>988</strong> for
            the Suicide &amp; Crisis Lifeline. You can also text <strong>HOME</strong> to <strong>741741</strong>
            or call the SAMHSA National Helpline at <strong>1-800-662-4357</strong>.
          </p>
          <Link
            href="/crisis-resources"
            className="inline-flex min-h-[44px] items-center font-semibold text-crisis-800 dark:text-crisis-200 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crisis-700"
          >
            View crisis resources and international options
          </Link>
        </section>

        <div className="mt-10">
          <AuthorBio publishedDate={PUBLISHED_DATE} modifiedDate={UPDATED_DATE} />
        </div>
      </article>
    </>
  );
}

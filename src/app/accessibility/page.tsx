import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/accessibility",
  title: "Accessibility Statement — MindCheck Tools",
  description:
    "MindCheck Tools accessibility statement. Our commitment to making mental health self-check tools usable by everyone, including people with disabilities.",
  keywords: [
    "accessibility statement", "web accessibility", "WCAG compliance",
    "accessible mental health tools", "screen reader compatible",
  ],
});

export default function AccessibilityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", url: SITE_URL }, { name: "Accessibility Statement", url: `${SITE_URL}/accessibility` }])) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-3">Accessibility Statement</h1>
          <p className="text-sm text-neutral-400 dark:text-neutral-500">Last updated: February 17, 2026</p>
        </header>

        <div className="prose-mh space-y-8">
          <section>
            <h2>Our commitment</h2>
            <p>
              MindCheck Tools is committed to making our mental health self-check tools accessible to everyone, including people with disabilities. We believe that mental health screening should be available to all people regardless of ability, and we work to ensure our site meets recognized accessibility standards.
            </p>
            <p>
              We recognize that people may be using our tools during difficult moments, and accessibility barriers should never stand between someone and the support they need.
            </p>
          </section>

          <section>
            <h2>Standards we follow</h2>
            <p>
              We aim to conform to the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> standard. WCAG is developed by the World Wide Web Consortium (W3C) and is the most widely adopted accessibility standard for web content. Level AA conformance addresses the most common barriers for users with disabilities.
            </p>
          </section>

          <section>
            <h2>What we&apos;ve done</h2>
            <p>
              We have taken the following steps to support accessibility across our site:
            </p>
            <p>
              <strong>Semantic HTML:</strong> Our pages use proper heading hierarchy (h1 through h4), landmark regions (nav, main, footer), and meaningful link text to support screen readers and assistive technology.
            </p>
            <p>
              <strong>Keyboard navigation:</strong> All interactive elements — including tool questions, buttons, toggles, and navigation — are accessible via keyboard. You can use Tab to move between elements and Enter or Space to activate them.
            </p>
            <p>
              <strong>Color contrast:</strong> We maintain a minimum contrast ratio of 4.5:1 for body text and 3:1 for large text in both light and dark modes, consistent with WCAG AA requirements.
            </p>
            <p>
              <strong>Dark mode:</strong> A system-aware dark mode is available to reduce eye strain and improve readability in low-light conditions. You can toggle it manually using the theme button in the navigation bar.
            </p>
            <p>
              <strong>Responsive design:</strong> Our site is fully responsive and usable on devices of all sizes, from mobile phones to desktop screens.
            </p>
            <p>
              <strong>No time limits:</strong> Our screening tools have no time limits. You can take as long as you need to complete any questionnaire.
            </p>
            <p>
              <strong>Clear language:</strong> We write screening results and educational content in plain language, avoiding unnecessary jargon. Where clinical terms are used (such as &quot;PHQ-9&quot; or &quot;GAD-7&quot;), we provide explanations.
            </p>
            <p>
              <strong>Focus management:</strong> When you complete a screening tool, focus is moved to the results section so screen readers announce your score and interpretation immediately.
            </p>
            <p>
              <strong>ARIA attributes:</strong> We use ARIA roles, labels, and states where native HTML semantics are insufficient — for example, on toggle switches in our cookie consent banner and progress indicators in our tools.
            </p>
            <p>
              <strong>No auto-play:</strong> Our site does not auto-play audio, video, or animations that cannot be paused. The only animation is a subtle pulse indicator on the homepage, which is purely decorative.
            </p>
          </section>

          <section>
            <h2>Known limitations</h2>
            <p>
              While we strive for full accessibility, we are aware of the following limitations:
            </p>
            <p>
              <strong>Third-party content:</strong> When advertising becomes active on our site, ad content is provided by third-party networks. We cannot guarantee that all ad content meets WCAG AA standards, though we will select ad partners with accessibility commitments where possible.
            </p>
            <p>
              <strong>External links:</strong> Our <Link href="/crisis-resources">crisis resources page</Link> links to external hotlines and organizations. We cannot control the accessibility of those external websites, though we link only to established, reputable services.
            </p>
            <p>
              <strong>Older browsers:</strong> Some accessibility features may not function fully in browsers that do not support modern CSS and JavaScript standards. We recommend using a current version of Chrome, Firefox, Safari, or Edge.
            </p>
          </section>

          <section>
            <h2>Assistive technology compatibility</h2>
            <p>
              Our site is designed to work with common assistive technologies including:
            </p>
            <p>
              Screen readers (such as NVDA, JAWS, VoiceOver, and TalkBack), screen magnifiers, speech recognition software, and keyboard-only navigation. If you encounter difficulties using our site with assistive technology, please let us know.
            </p>
          </section>

          <section>
            <h2>Feedback and contact</h2>
            <p>
              We take accessibility seriously and want to hear from you if you encounter any barriers while using our site. If you have difficulty accessing any part of MindCheck Tools, or if you have suggestions for improvement, please contact us:
            </p>
            <p>
              <strong>Email:</strong> accessibility@mindchecktools.com
            </p>
            <p>
              When reporting an issue, it is helpful (but not required) to include: the page URL where you experienced the issue, a description of what happened, the assistive technology or browser you were using, and what you expected to happen. We aim to respond to accessibility feedback within 5 business days and to resolve issues as quickly as possible.
            </p>
          </section>

          <section>
            <h2>Ongoing efforts</h2>
            <p>
              Accessibility is not a one-time project — it is an ongoing practice. We are committed to:
            </p>
            <p>
              Regularly testing our site with screen readers and keyboard-only navigation. Reviewing new content and features for accessibility before deployment. Monitoring WCAG guidelines for updates and incorporating new best practices. Responding promptly to accessibility feedback from our users.
            </p>
          </section>

          <section>
            <h2>Formal complaints</h2>
            <p>
              If you believe that MindCheck Tools has not adequately addressed an accessibility concern, you have the right to file a complaint with the appropriate regulatory body in your jurisdiction. In the United States, you may contact the Department of Justice, Civil Rights Division, at <strong>ada.gov</strong>. In the European Union, you may contact your national equality body or ombudsman.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

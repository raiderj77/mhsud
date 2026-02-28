import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, breadcrumbJsonLd, SITE_URL } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/contact",
  title: "Contact MindCheck Tools",
  description:
    "Get in touch with the MindCheck Tools team. Questions, feedback, or accessibility concerns — we're here to help.",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: SITE_URL },
              { name: "Contact", url: `${SITE_URL}/contact` },
            ])
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <header className="mb-10">
          <h1 className="font-serif text-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Have questions about our self-check tools, feedback on your experience, or suggestions for new screenings? We&apos;d love to hear from you.
          </p>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2>Get In Touch</h2>
            <div className="not-prose grid gap-4 sm:grid-cols-2">
              <div className="p-5 card">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">General Inquiries</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Questions, feedback, or tool suggestions</p>
                <a href="mailto:hello@mindchecktools.com" className="text-sage-600 dark:text-sage-400 text-sm font-medium hover:underline">
                  hello@mindchecktools.com
                </a>
              </div>
              <div className="p-5 card">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Privacy & Data</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Privacy-related questions or concerns</p>
                <a href="mailto:privacy@mindchecktools.com" className="text-sage-600 dark:text-sage-400 text-sm font-medium hover:underline">
                  privacy@mindchecktools.com
                </a>
              </div>
              <div className="p-5 card">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Accessibility</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Report accessibility issues or barriers</p>
                <a href="mailto:accessibility@mindchecktools.com" className="text-sage-600 dark:text-sage-400 text-sm font-medium hover:underline">
                  accessibility@mindchecktools.com
                </a>
              </div>
              <div className="p-5 card">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Technical Support</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Bug reports or technical issues</p>
                <a href="mailto:support@mindchecktools.com" className="text-sage-600 dark:text-sage-400 text-sm font-medium hover:underline">
                  support@mindchecktools.com
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2>Response Time</h2>
            <p>
              We aim to respond to all emails within <strong>48 hours</strong>. For urgent mental health concerns, please contact the resources below — they are available 24/7.
            </p>
          </section>

          <section>
            <h2>Crisis Resources</h2>
            <p>
              If you or someone you know is in crisis, please reach out to these free, confidential services:
            </p>
            <div className="not-prose space-y-3">
              <div className="p-4 card">
                <p className="font-semibold text-neutral-900 dark:text-neutral-50">988 Suicide & Crisis Lifeline</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Call or text <strong>988</strong> — Available 24/7</p>
              </div>
              <div className="p-4 card">
                <p className="font-semibold text-neutral-900 dark:text-neutral-50">Crisis Text Line</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Text <strong>HOME</strong> to <strong>741741</strong></p>
              </div>
              <div className="p-4 card">
                <p className="font-semibold text-neutral-900 dark:text-neutral-50">SAMHSA National Helpline</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Call <strong>1-800-662-4357</strong> — Free, confidential treatment referrals</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Frequently Asked Questions</h2>
            <div className="not-prose space-y-4">
              <div className="p-4 card">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Are MindCheck Tools free?</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Yes. All self-checks are completely free with no account required.</p>
              </div>
              <div className="p-4 card">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Is my data stored anywhere?</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">No. All screenings are scored entirely in your browser. Your answers are never sent to a server or stored anywhere.</p>
              </div>
              <div className="p-4 card">
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50 mb-1">Can I suggest a new screening tool?</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Absolutely. Email your suggestions to hello@mindchecktools.com and we&apos;ll consider adding it.</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Before You Contact Us</h2>
            <ul>
              <li>Check our <Link href="/about" className="text-sage-600 dark:text-sage-400 hover:underline">About page</Link> for information about how our tools work</li>
              <li>Review our <Link href="/privacy" className="text-sage-600 dark:text-sage-400 hover:underline">Privacy Policy</Link> for data-related questions</li>
              <li>See our <Link href="/terms" className="text-sage-600 dark:text-sage-400 hover:underline">Terms of Service</Link> for usage guidelines</li>
              <li>For bug reports, include: browser version, steps to reproduce, and screenshots if possible</li>
            </ul>
          </section>

          <p className="text-sm text-neutral-400 dark:text-neutral-500 pt-6 border-t border-neutral-200 dark:border-neutral-800">
            Thank you for using MindCheck Tools. We&apos;re committed to making mental health self-checks accessible, private, and free for everyone.
          </p>
        </div>
      </div>
    </>
  );
}

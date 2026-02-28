import Link from "next/link";
import { FooterCookieButton } from "./FooterCookieButton";

const TOOL_LINKS = [
  { href: "/phq-9-depression-test", label: "PHQ-9 Depression" },
  { href: "/gad-7-anxiety-test", label: "GAD-7 Anxiety" },
  { href: "/audit-alcohol-test", label: "AUDIT Alcohol" },
  { href: "/audit-c-alcohol-screen", label: "AUDIT-C Quick Screen" },
];

const INFO_LINKS = [
  { href: "/blog", label: "Blog & Guides" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/accessibility", label: "Accessibility" },
];

export function Footer() {
  return (
    <footer className="border-t border-sand-200 dark:border-neutral-800 bg-sand-100 dark:bg-night-950 mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <span className="font-serif font-bold text-neutral-800 dark:text-neutral-100">MindCheck Tools</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Free, private mental health self-checks. Your answers never leave your browser.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">Self-Checks</h4>
            <ul className="space-y-2">
              {TOOL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">Resources</h4>
            <ul className="space-y-2">
              {INFO_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-sand-200 dark:border-neutral-800 pt-6">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 leading-relaxed text-center max-w-2xl mx-auto">
            All tools on this site are for educational and self-reflection purposes only. They are not a diagnosis, medical advice, or treatment recommendation. Always consult a qualified healthcare professional for mental health concerns. Your responses are processed entirely in your browser and are never stored or transmitted.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-3">
            © {new Date().getFullYear()} MindCheck Tools. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
            <FooterCookieButton />
            <span className="text-neutral-300 dark:text-neutral-700">·</span>
            <Link href="/terms#do-not-sell" className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-sage-600 dark:hover:text-sage-400 transition-colors">
              Do Not Sell or Share My Personal Information
            </Link>
          </div>
          {/* Sister Sites */}
          <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-4">
            More Free Tools:{" "}
            <a href="https://fibertools.app" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">FiberTools</a>
            {" · "}
            <a href="https://creatorrevenuecalculator.com" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">Creator Revenue Calculator</a>
            {" · "}
            <a href="https://flipmycase.com" className="hover:text-sage-600 dark:hover:text-sage-400 transition-colors">FlipMyCase</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

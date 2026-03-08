import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CrisisBanner } from "@/components/CrisisBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { createMetadata, organizationJsonLd } from "@/lib/metadata";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  ...createMetadata({ path: "/" }),
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mindchecktools.com",
    siteName: "MindCheck Tools",
    title: "MindCheck Tools — Free, Private Mental Health Self-Checks",
    description:
      "Free, private mental health and substance use self-checks. Your screening answers are scored in your browser and never stored. PHQ-9, GAD-7, AUDIT, and more.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "MindCheck Tools — Free, Private Mental Health Self-Checks" }],
  },
  alternates: {
    canonical: "https://mindchecktools.com",
    languages: {
      "en": "https://mindchecktools.com",
      "x-default": "https://mindchecktools.com",
    },
  },
  other: {
    "google-adsense-account": "ca-pub-7171402107622932",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1b1e" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Cookiebot consent management.
          data-blockingmode="auto" handles script blocking via Cookiebot's own mechanism,
          so afterInteractive is safe — Cookiebot still blocks other scripts until consent.
          data-georegions handles EU/GB region-specific consent requirements.
        */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="a9a99ccb-4863-4e33-a895-a6d5642f408d"
          data-blockingmode="auto"
          data-georegions={"{'region':'GB,EU','cbid':'a9a99ccb-4863-4e33-a895-a6d5642f408d'}"}
          strategy="afterInteractive"
        />

        {/*
          FIX: gtag initialization with Consent Mode v2.
          The gtag/js script alone does NOT initialize tracking — the inline init is required.
          Consent defaults are set to 'denied' until Cookiebot grants permission (GDPR/CCPA compliant).
        */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
              gtag('js', new Date());
              gtag('config', 'G-XKHQN1NJ2Z', { anonymize_ip: true });
            `,
          }}
        />
        <Script
          id="gtag-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XKHQN1NJ2Z"
        />

        {/*
          FIX: Google AdSense — using Next.js Script component (lazyOnload).
          Previously used a bare <script> tag which bypassed Next.js script optimization
          and blocked page rendering. lazyOnload defers until after page is interactive,
          improving LCP and CLS Core Web Vitals scores.
        */}
        <Script
          id="adsense-script"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <ScrollToTop />
          {/* Dark mode flash prevention */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                try {
                  const t = localStorage.getItem('mh-theme');
                  if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              `,
            }}
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sage-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <CrisisBanner />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

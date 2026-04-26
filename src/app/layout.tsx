import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { headers } from "next/headers";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CrisisBanner } from "@/components/CrisisBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SwUpdateNotification } from "@/components/SwUpdateNotification";
import { OfflineIndicator } from "@/components/OfflineIndicator";
import { AppInstallPrompt } from "@/components/AppInstallPrompt";
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
  manifest: "/manifest.json",
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
  twitter: {
    card: "summary_large_image",
    title: "MindCheck Tools — Free, Private Mental Health Self-Checks",
    description:
      "Free, private mental health and substance use self-checks. Your screening answers are scored in your browser and never stored. PHQ-9, GAD-7, AUDIT, and more.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "MindCheck Tools — Free, Private Mental Health Self-Checks" }],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "https://mindchecktools.com",
      "x-default": "https://mindchecktools.com",
    },
  },
  verification: {
    google: "2ieYhzyPUNxUGKoS_QEQUvsuojYLusDJdHBsNIs6UCU",
  },
  other: {
    "google-adsense-account": "ca-pub-7171402107622932",
    "msvalidate.01": "C4C9B6256BDEDED169E4DE01CA953390",
    "p:domain_verify": "ecdd00e78a1c7734db06450b3540c3dc",
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
  // Read the Sec-GPC header server-side. If present, skip loading Cookiebot entirely
  // so the consent banner never renders — eliminating the flash-then-dismiss race.
  // Client-side navigator.globalPrivacyControl (no header) still handled by gpc-auto-decline.
  const gpcHeader = headers().get('sec-gpc') === '1';

  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <head>
        {/* DNS preconnect for critical third-party origins — reduces connection latency */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://consent.cookiebot.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fundingchoicesmessages.google.com" />
        <link rel="dns-prefetch" href="https://adservice.google.com" />

        {/*
          Preload critical heading font (Source Serif 4) so the real LCP element
          (hero H1) renders before the Cookiebot dialog can claim LCP.
          next/font already preloads these, but explicit hints with fetchpriority
          ensure they win the resource priority race against third-party scripts.
        */}
        <link
          rel="preload"
          href="/_next/static/media/13971731025ec697-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/*
          Cookiebot consent management — skipped entirely when Sec-GPC header is present.
          Skipping avoids the flash-then-dismiss race on GPC-enabled browsers: if Cookiebot
          never loads, its banner never renders. The client-side gpc-auto-decline script
          below handles the rarer case where navigator.globalPrivacyControl is set without
          the request header (e.g. older GPC extensions that don't send Sec-GPC).
          data-blockingmode="auto" handles script blocking; data-georegions gates EU/GB consent.
        */}
        {!gpcHeader && (
          <Script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="a9a99ccb-4863-4e33-a895-a6d5642f408d"
            data-blockingmode="auto"
            data-georegions={"{'region':'GB,EU','cbid':'a9a99ccb-4863-4e33-a895-a6d5642f408d'}"}
            strategy="afterInteractive"
          />
        )}

        {/*
          GPC client-side fallback: covers navigator.globalPrivacyControl when no Sec-GPC
          header was sent (e.g. older browser extensions). Only runs when Cookiebot loaded
          (i.e. gpcHeader was false). CookiebotOnLoad fires after Cookiebot initializes.
        */}
        {!gpcHeader && (
          <Script
            id="gpc-auto-decline"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('CookiebotOnLoad', function () {
                  try {
                    var gpcActive =
                      !!navigator.globalPrivacyControl ||
                      document.cookie.indexOf('empire_gpc=1') !== -1;
                    if (gpcActive && window.Cookiebot) {
                      window.Cookiebot.decline();
                    }
                  } catch (e) {}
                });
              `,
            }}
          />
        )}

        {/*
          FIX: gtag initialization with Consent Mode v2.
          The gtag/js script alone does NOT initialize tracking — the inline init is required.
          Consent defaults are set to 'denied' until Cookiebot grants permission (GDPR/CCPA compliant).
        */}
        {/*
          FIX: GTM deferred to lazyOnload — analytics does not need to block paint.
          Consent Mode v2 defaults are still set before any tracking fires.
        */}
        <Script
          id="gtag-init"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'wait_for_update': 500
              });
              gtag('js', new Date());
              gtag('config', 'G-XKHQN1NJ2Z', { anonymize_ip: true });
            `,
          }}
        />
        <Script
          id="gtag-script"
          strategy="lazyOnload"
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

        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window,document,"clarity","script","vsqobt7va0");
            `,
          }}
        />

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />

        {/* Person JSON-LD — YMYL credentialed reviewer (mindchecktools only) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Jason Ramirez, CADC-II",
            "jobTitle": "Certified Drug and Alcohol Counselor (CADC-II)",
            "worksFor": { "@type": "Organization", "name": "MindCheck Tools" },
            "url": "https://mindchecktools.com/about/jason-ramirez",
            "sameAs": [],
          }) }}
        />

        {/* PWA Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js').then(
                    function(registration) {
                      console.log('Service Worker registered successfully:', registration);
                    },
                    function(err) {
                      console.log('Service Worker registration failed:', err);
                    }
                  );
                });
              }
            `,
          }}
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
          <OfflineIndicator />
          <CrisisBanner />
          <SwUpdateNotification />
          <AppInstallPrompt />
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

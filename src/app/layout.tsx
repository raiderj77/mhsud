import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CrisisBanner } from "@/components/CrisisBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { createMetadata, organizationJsonLd } from "@/lib/metadata";

export const metadata: Metadata = {
  ...createMetadata({ path: "/" }),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mindchecktools.com",
    siteName: "MindCheck Tools",
    title: "MindCheck Tools — Free, Private Mental Health Self-Checks",
    description:
      "Free, private mental health and substance use self-checks. Your screening answers are scored in your browser and never stored. PHQ-9, GAD-7, AUDIT, and more.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Cookiebot CMP — must load before any other scripts */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="a9a99ccb-4863-4e33-a895-a6d5642f408d"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        {/* Cookiebot GCM integration — sets consent defaults and signals to Google */}
        <Script
          id="CookiebotCallback"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="a9a99ccb-4863-4e33-a895-a6d5642f408d"
          data-georegions={"{'region':'GB,EU','cbid':'a9a99ccb-4863-4e33-a895-a6d5642f408d'}"}
          strategy="beforeInteractive"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XKHQN1NJ2Z"
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7171402107622932"
          crossOrigin="anonymous"
        />
        {/* Preconnect + Google Fonts via CSS (no build-time fetch) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap"
          rel="stylesheet"
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

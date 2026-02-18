import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CrisisBanner } from "@/components/CrisisBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { createMetadata, organizationJsonLd } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ path: "/" });

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
        {/* Google Consent Mode v2 — must load BEFORE gtag */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent','default',{
                'analytics_storage':'denied',
                'ad_storage':'denied',
                'ad_user_data':'denied',
                'ad_personalization':'denied',
                'functionality_storage':'granted',
                'security_storage':'granted',
                'wait_for_update':500
              });
              gtag('js',new Date());
              gtag('config','G-XKHQN1NJ2Z',{send_page_view:true});
            `,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XKHQN1NJ2Z"
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
          <CrisisBanner />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}

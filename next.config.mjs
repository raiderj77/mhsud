/** @type {import('next').NextConfig} */
const quarantinedRedirects = [
  ["/depression-test-for-teens", "/phq-9-depression-test"],
  ["/depression-test-for-seniors", "/phq-9-depression-test"],
  ["/depression-test-for-new-moms", "/phq-9-depression-test"],
  ["/depression-screening-for-veterans", "/phq-9-depression-test"],
  ["/depression-test-for-men", "/phq-9-depression-test"],
  ["/depression-screening-for-men", "/phq-9-depression-test"],
  ["/am-i-depressed-quiz", "/phq-9-depression-test"],
  ["/anxiety-test-for-women", "/gad-7-anxiety-test"],
  ["/anxiety-test-for-teens", "/gad-7-anxiety-test"],
  ["/anxiety-test-for-men", "/gad-7-anxiety-test"],
  ["/ptsd-test-veterans", "/pcl-5-ptsd-screening"],
  ["/ptsd-test-first-responders", "/pcl-5-ptsd-screening"],
  ["/do-i-have-ptsd-quiz", "/pcl-5-ptsd-screening"],
  ["/adhd-test-adults", "/asrs-adhd-screening"],
  ["/adhd-test-women", "/asrs-adhd-screening"],
  ["/adhd-test-for-teens", "/asrs-adhd-screening"],
  ["/social-anxiety-test-college", "/spin-social-anxiety-test"],
  ["/alcohol-screening-for-college-students", "/audit-alcohol-test"],
  ["/alcohol-screening-for-women", "/audit-alcohol-test"],
  ["/alcohol-screening-military", "/audit-alcohol-test"],
  ["/am-i-an-alcoholic-quiz", "/audit-alcohol-test"],
  ["/drug-screening-teens", "/crafft-substance-screening"],
  ["/substance-abuse-test-parents", "/cage-aid-substance-abuse-screening"],
  ["/stress-test-college-students", "/dass-21-depression-anxiety-stress"],
  ["/dass-21-score-interpretation", "/dass-21-depression-anxiety-stress"],
  ["/dass-21-vs-phq-9-and-gad-7", "/dass-21-depression-anxiety-stress"],
  ["/ace-score-interpretation", "/ace-questionnaire"],
  ["/burnout-test-for-nurses", "/burnout-assessment-tool"],
  ["/burnout-test-for-healthcare-workers", "/burnout-assessment-tool"],
  ["/burnout-test-for-teachers", "/burnout-assessment-tool"],
  ["/burnout-test-parents", "/burnout-assessment-tool"],
  ["/loneliness-test-seniors", "/ucla-loneliness-scale"],
  ["/eating-disorder-test-athletes", "/scoff-eating-disorder-screening"],
  ["/bpd-test-for-women", "/msi-bpd-screening"],
  ["/bpd-screening-for-young-adults", "/msi-bpd-screening"],
  ["/attachment-style-test-for-couples", "/attachment-style-quiz"],
].map(([source, destination]) => ({ source, destination, permanent: true }));

// Preserve useful legacy article URLs by sending them to maintained pages with
// the same user intent. These must remain ahead of the generic blog catch-all.
const canonicalBlogRedirects = [
  ["/blog/audit-guide", "/audit-score-interpretation"],
  ["/blog/what-does-audit-score-mean", "/audit-score-interpretation"],
  ["/blog/quit-drinking-timeline", "/health-recovery-timeline"],
  ["/blog/gad-7-guide", "/gad-7-score-interpretation"],
  ["/blog/what-does-gad-7-score-mean", "/gad-7-score-interpretation"],
  ["/blog/anxiety-coping-strategies", "/five-senses-grounding"],
  ["/blog/phq-9-guide", "/phq-9-score-interpretation"],
  ["/blog/what-does-phq-9-score-mean", "/phq-9-score-interpretation"],
  ["/blog/depression-vs-anxiety", "/phq-9-vs-gad-7"],
  ["/blog/ace-score-meaning", "/ace-questionnaire"],
  ["/blog/dass-21-score-guide", "/dass-21-depression-anxiety-stress"],
  ["/blog/what-does-pcl-5-score-mean", "/pcl-5-score-interpretation"],
  ["/blog/what-does-asrs-score-mean", "/asrs-score-interpretation"],
  ["/blog/what-does-dass-21-score-mean", "/dass-21-depression-anxiety-stress"],
  ["/blog/what-does-ace-score-mean", "/ace-questionnaire"],
  ["/blog/what-does-pc-ptsd-5-score-mean", "/pc-ptsd-5-screening"],
  ["/blog/what-does-cage-aid-score-mean", "/cage-aid-substance-abuse-screening"],
  ["/blog/what-does-rosenberg-self-esteem-score-mean", "/rosenberg-self-esteem-scale"],
  ["/blog/phq-9-vs-gad-7", "/phq-9-vs-gad-7"],
].map(([source, destination]) => ({ source, destination, permanent: true }));

const nextConfig = {
  // Performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,


  // Aggressive image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  // Security & caching headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security
          // X-Frame-Options governs whether this site can be embedded. Ad
          // frames embedded by this site are controlled by CSP frame-src.
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-DNS-Prefetch-Control", value: "off" },
          { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "accelerometer=(), browsing-topics=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "form-action 'self'",
              "manifest-src 'self'",
              "worker-src 'self'",
              // Optional Google analytics and advertising services. This
              // domain allowlist is not represented as future-proof for
              // AdSense; the ad runtime remains gated until a separate
              // nonce-based strict-CSP migration passes report-only testing.
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://adservice.google.com https://www.googleadservices.com https://tpc.googlesyndication.com https://fundingchoicesmessages.google.com https://ep2.adtrafficquality.google",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self'",
              // AdSense ad images and tracking pixels
              "img-src 'self' data: https: https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://www.googletagmanager.com",
              // AdSense + Analytics connections
              "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://analytics.google.com https://pagead2.googlesyndication.com https://adservice.google.com https://fundingchoicesmessages.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
              // AdSense iframes (required for ad rendering)
              "frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://fundingchoicesmessages.google.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google",
            ].join("; "),
          },
        ],
      },
      {
        // Subscription responses can reveal whether an address was accepted
        // and must never be stored by a browser, CDN, or shared cache.
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "private, no-store, max-age=0, must-revalidate" },
          { key: "CDN-Cache-Control", value: "no-store" },
          { key: "Vercel-CDN-Cache-Control", value: "no-store" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        // Health content pages: no-referrer to prevent health URLs leaking to third parties
        source: "/:path(phq-9-depression-test|gad-7-anxiety-test|audit-alcohol-test|audit-c-alcohol-screen|cage-aid-substance-abuse-screening|dass-21-depression-anxiety-stress|pcl-5-ptsd-screening|pc-ptsd-5-screening|spin-social-anxiety-test|msi-bpd-screening|asrs-adhd-screening|scoff-eating-disorder-screening|aq-10-autism-screening|crafft-substance-screening|who-assist-substance-screening|ces-d-depression-scale|k6-distress-scale|phq-4-anxiety-depression-screen|postpartum-depression-test|ace-questionnaire|who-5-wellbeing-index|athens-insomnia-scale|holmes-rahe-stress-inventory|rosenberg-self-esteem-scale|ucla-loneliness-scale|brief-resilience-scale|big-five-personality-test|attachment-style-quiz|burnout-assessment-tool|compassion-fatigue-test|grief-assessment|mental-load-calculator|maternal-mental-health)",
        headers: [
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/(.*)\\.(js|css|woff2|woff|ttf|ico|png|jpg|svg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // The service-worker URL is stable, so it must never inherit the
        // immutable JavaScript policy used for fingerprinted build assets.
        source: "/service-worker.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "CDN-Cache-Control", value: "no-store" },
          { key: "Vercel-CDN-Cache-Control", value: "no-store" },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Common misspellings / variants
      { source: "/phq9", destination: "/phq-9-depression-test", permanent: true },
      { source: "/gad7", destination: "/gad-7-anxiety-test", permanent: true },
      { source: "/audit", destination: "/audit-alcohol-test", permanent: true },
      { source: "/depression-test", destination: "/phq-9-depression-test", permanent: true },
      { source: "/anxiety-test", destination: "/gad-7-anxiety-test", permanent: true },
      { source: "/dast-10-drug-screening", destination: "/audit-alcohol-test", permanent: true },
      { source: "/mdq-bipolar-screening", destination: "/blog/what-is-bipolar-disorder", permanent: true },
      { source: "/oci-r-ocd-screening", destination: "/blog/what-is-ocd", permanent: true },
      { source: "/ocd-test-teens", destination: "/blog/what-is-ocd", permanent: true },
      { source: "/bipolar-test-young-adults", destination: "/blog/what-is-bipolar-disorder", permanent: true },
      { source: "/blog/what-does-oci-r-score-mean", destination: "/blog/what-is-ocd", permanent: true },
      { source: "/mdq-score-interpretation", destination: "/blog/what-is-bipolar-disorder", permanent: true },
      { source: "/audit-vs-dast-10", destination: "/audit-alcohol-test", permanent: true },
      { source: "/dast-10-score-interpretation", destination: "/audit-alcohol-test", permanent: true },
      { source: "/blog/dast-10-guide", destination: "/audit-alcohol-test", permanent: true },
      ...quarantinedRedirects,
      ...canonicalBlogRedirects,
      {
        source: "/blog/how-to-talk-to-doctor-about-mental-health",
        destination: "/how-to-talk-to-your-doctor-about-mental-health",
        permanent: true,
      },
      { source: "/blog/:path*", destination: "/screening-tools", permanent: true },
      { source: "/blog", destination: "/screening-tools", permanent: true },
    ];
  },
};

export default nextConfig;

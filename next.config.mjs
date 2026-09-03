import { legacyBlogRedirects } from "./config/legacy-blog-routes.mjs";

export const retiredNonBlogNotFoundPaths = Object.freeze([
  "/depression-test-for-teens",
  "/anxiety-test-for-teens",
  "/adhd-test-for-teens",
  "/dast-10-drug-screening",
  "/audit-vs-dast-10",
  "/dast-10-score-interpretation",
]);

/** @type {import('next').NextConfig} */
const quarantinedRedirects = [
  ["/depression-test-for-seniors", "/phq-9-depression-test"],
  ["/depression-test-for-new-moms", "/phq-9-depression-test"],
  ["/depression-screening-for-veterans", "/phq-9-depression-test"],
  ["/depression-test-for-men", "/phq-9-depression-test"],
  ["/depression-screening-for-men", "/phq-9-depression-test"],
  ["/am-i-depressed-quiz", "/phq-9-depression-test"],
  ["/anxiety-test-for-women", "/gad-7-anxiety-test"],
  ["/anxiety-test-for-men", "/gad-7-anxiety-test"],
  ["/ptsd-test-veterans", "/pcl-5-ptsd-screening"],
  ["/ptsd-test-first-responders", "/pcl-5-ptsd-screening"],
  ["/do-i-have-ptsd-quiz", "/pcl-5-ptsd-screening"],
  ["/adhd-test-adults", "/asrs-adhd-screening"],
  ["/adhd-test-women", "/asrs-adhd-screening"],
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

const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
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
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self'",
              "img-src 'self' data: https:",
              "connect-src 'self'",
              "frame-src 'none'",
            ].join("; "),
          },
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          { key: "Cache-Control", value: "private, no-store, max-age=0, must-revalidate" },
          { key: "CDN-Cache-Control", value: "no-store" },
          { key: "Vercel-CDN-Cache-Control", value: "no-store" },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        // Health content pages use no-referrer so topic URLs are not disclosed
        // when a user follows an external link.
        source: "/:path(phq-9-depression-test|gad-7-anxiety-test|audit-alcohol-test|audit-c-alcohol-screen|cage-aid-substance-abuse-screening|dass-21-depression-anxiety-stress|pcl-5-ptsd-screening|pc-ptsd-5-screening|spin-social-anxiety-test|msi-bpd-screening|asrs-adhd-screening|scoff-eating-disorder-screening|aq-10-autism-screening|crafft-substance-screening|who-assist-substance-screening|ces-d-depression-scale|k6-distress-scale|phq-4-anxiety-depression-screen|postpartum-depression-test|ace-questionnaire|who-5-wellbeing-index|athens-insomnia-scale|holmes-rahe-stress-inventory|rosenberg-self-esteem-scale|ucla-loneliness-scale|brief-resilience-scale|big-five-personality-test|attachment-style-quiz|burnout-assessment-tool|compassion-fatigue-test|grief-assessment|mental-load-calculator|maternal-mental-health)",
        headers: [
          { key: "Referrer-Policy", value: "no-referrer" },
        ],
      },
      {
        source: "/(.*)\\.(js|css|woff2|woff|ttf|ico|png|jpg|svg)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/service-worker.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "CDN-Cache-Control", value: "no-store" },
          { key: "Vercel-CDN-Cache-Control", value: "no-store" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/phq9", destination: "/phq-9-depression-test", permanent: true },
      { source: "/gad7", destination: "/gad-7-anxiety-test", permanent: true },
      { source: "/audit", destination: "/audit-alcohol-test", permanent: true },
      { source: "/depression-test", destination: "/phq-9-depression-test", permanent: true },
      { source: "/anxiety-test", destination: "/gad-7-anxiety-test", permanent: true },
      ...quarantinedRedirects,
      // Next normalizes redirect objects in place, so hand it mutable copies
      // while the audited decision manifest remains immutable.
      ...legacyBlogRedirects.map((redirect) => ({ ...redirect })),
    ];
  },
};

export default nextConfig;

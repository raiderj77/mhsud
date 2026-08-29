// Temporary compatibility shim for the one retired /blog source file that
// remains as a source-level privacy-test fixture. All /blog URLs are still
// permanently redirected before filesystem routing. Remove this file with
// that final fixture in the privacy/analytics cleanup.
export const BLOG_POSTS = [
  {
    slug: "attachment-styles-guide",
    publishedDate: "2026-03-17",
    modifiedDate: "2026-03-17",
  },
] as const;

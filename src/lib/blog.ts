export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  toolSlug: string;
  date: string;
  readTime: string;
  status: "published" | "draft";
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "phq-9-guide",
    title: "PHQ-9 Explained: How Clinicians Use This Depression Questionnaire (and What It Can't Tell You)",
    excerpt: "Learn what the PHQ-9 measures, how healthcare providers interpret scores, and why this widely-used screener is only a starting point — not a diagnosis.",
    category: "Tool Guide",
    toolSlug: "/phq-9-depression-test",
    date: "2025-01-15",
    readTime: "8 min read",
    status: "published",
  },
  {
    slug: "gad-7-guide",
    title: "GAD-7 Anxiety Scale: What It Measures and How Doctors Interpret Scores",
    excerpt: "A plain-language guide to the GAD-7, the world's most commonly used anxiety screener — what it catches, what it misses, and what to do with your results.",
    category: "Tool Guide",
    toolSlug: "/gad-7-anxiety-test",
    date: "2025-01-20",
    readTime: "7 min read",
    status: "published",
  },
  {
    slug: "audit-guide",
    title: "AUDIT Alcohol Screening Tool: How It Works and Why Clinicians Use It",
    excerpt: "Understanding the WHO's AUDIT alcohol screening questionnaire — its origins, how it's scored, and what your results mean in context.",
    category: "Tool Guide",
    toolSlug: "/audit-alcohol-test",
    date: "2025-01-25",
    readTime: "9 min read",
    status: "published",
  },
  {
    slug: "work-stress-vs-burnout",
    title: "Work Stress vs. Burnout: How to Tell the Difference (and What Online Quizzes Can't Tell You)",
    excerpt: "Am I burned out or just stressed? The WHO-defined signs of clinical burnout vs. normal work stress, why online self-checks have limits, and when to talk to a professional.",
    category: "Education",
    toolSlug: "/work-stress-check",
    date: "2025-02-01",
    readTime: "6 min read",
    status: "published",
  },
  {
    slug: "sleep-and-mood",
    title: "How Sleep Affects Your Mood (and Why Poor Sleep Makes Everything Harder)",
    excerpt: "The science behind the sleep-mood connection — why poor sleep worsens anxiety and depression, how to tell if sleep is affecting your mental health, and what to do about it.",
    category: "Education",
    toolSlug: "/sleep-and-mood-check",
    date: "2025-02-10",
    readTime: "7 min read",
    status: "published",
  },
];

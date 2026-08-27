import type { Metadata } from "next";
import styles from "./awareness.module.css";

// Deliberately separate from the site's indexable production pages. Removing
// this gate requires a recorded, topic-qualified review and owner release approval.
export const metadata: Metadata = {
  robots: { index: false, follow: false, noimageindex: true, googleBot: { index: false, follow: false, noimageindex: true } },
  referrer: "no-referrer",
};

export default function AwarenessLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.editorial}>{children}</div>;
}

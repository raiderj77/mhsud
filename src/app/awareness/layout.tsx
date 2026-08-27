import type { Metadata } from "next";
import styles from "./awareness.module.css";

// Fail closed by default. Only an explicitly released article may override
// these robots directives in its own metadata. Privacy protections stay intact.
export const metadata: Metadata = {
  robots: { index: false, follow: false, noimageindex: true, googleBot: { index: false, follow: false, noimageindex: true } },
  referrer: "no-referrer",
};

export default function AwarenessLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.editorial}>{children}</div>;
}

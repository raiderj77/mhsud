"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { publicSectionHash } from "@/lib/publicSectionNavigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const fragment = window.location.hash;
    const hash = publicSectionHash(pathname, fragment);
    const isEvidenceSection = pathname === "/clinical-evidence" && /^#[a-z0-9-]+$/.test(fragment);
    const isTherapistListings = pathname === "/therapists" && fragment === "#listings";
    const target = isEvidenceSection || isTherapistListings ? fragment : hash;
    const section = target ? document.getElementById(target.slice(1)) : null;
    if (section) {
      section.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}

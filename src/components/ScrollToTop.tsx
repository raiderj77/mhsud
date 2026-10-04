"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { publicSectionHash } from "@/lib/publicSectionNavigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = publicSectionHash(pathname, window.location.hash);
    const section = hash ? document.getElementById(hash.slice(1)) : null;
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

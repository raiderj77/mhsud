"use client";

import { usePathname } from "next/navigation";

export function CreatorRevenueLink({
  className,
  href,
}: {
  className: string;
  href: string;
}) {
  const pathname = usePathname();
  const rel = pathname === "/" ? undefined : "nofollow";

  return (
    <a
      href={href}
      rel={rel}
      className={className}
    >
      Creator Revenue Calculator
    </a>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { PROFILE_EVENTS } from "@/lib/professionalCore.mjs";

const action = "inline-flex min-h-[44px] items-center rounded border px-3 underline";

function record(slug: string, event: typeof PROFILE_EVENTS[number]) {
  if ("globalPrivacyControl" in navigator && navigator.globalPrivacyControl === true) return;
  void fetch("/therapists/api/profile-events", {
    method: "POST",
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    referrerPolicy: "no-referrer",
    keepalive: true,
    body: JSON.stringify({ slug, event }),
  }).catch(() => {});
}

export function ProfileContact({ slug, phone, email, website }: {slug: string; phone: string; email: string; website: string}) {
  return (
    <div className="flex flex-wrap gap-2">
      {phone && <a className={action} href={`tel:${phone}`} onClick={() => record(slug, "call_tap")}>Call</a>}
      {email && <a className={action} href={`mailto:${email}`} onClick={() => record(slug, "email_tap")}>Email</a>}
      {website && <a className={action} href={website} rel="noreferrer nofollow" onClick={() => record(slug, "website_tap")}>Visit website</a>}
    </div>
  );
}

export function CopyText({ value, label, onCopy }: { value: string; label: string; onCopy?: () => void }) {
  const [message, setMessage] = useState("");
  return (
    <>
      <button type="button" className={action} onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setMessage("Copied.");
          onCopy?.();
        } catch {
          setMessage("Copy unavailable. You can select and copy the text or link.");
        }
      }}>{label}</button>
      <span role="status">{message}</span>
    </>
  );
}

export function ProfileShare({ slug, url }: { slug: string; url: string }) {
  const viewed = useRef<string>();
  const [canShare, setCanShare] = useState(false);
  useEffect(() => {
    if (viewed.current === slug) return;
    viewed.current = slug;
    record(slug, "view");
    setCanShare(typeof navigator.share === "function");
  }, [slug]);

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <CopyText value={url} label="Copy profile link" onCopy={() => record(slug, "share_copy")} />
      {canShare && <button type="button" className={action} onClick={() => void navigator.share({ url }).catch(() => {})}>Share profile</button>}
    </div>
  );
}

import { SITE_URL } from "@/lib/metadata";
import { profileQrPath } from "@/lib/profileQr";
import { therapistPath } from "@/lib/therapistsCore.mjs";
import { CopyText } from "../ProfileActions";

export function SharePanel({ slug }: { slug: string }) {
  const path = therapistPath(slug);
  const url = `${SITE_URL}${path}`;
  const badge = `<a href="${url}">Listed on MindCheck</a>`;
  const qrPath = profileQrPath(url);
  const qrFile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73" width="365" height="365" shape-rendering="crispEdges"><rect width="73" height="73" fill="white"/><path fill="black" d="${qrPath}"/></svg>`;
  return (
    <section className="space-y-3" aria-label="Your public profile">
      <h3 className="text-lg font-semibold">Your public profile</h3>
      <div className="flex flex-wrap items-center gap-2">
        <a href={url} className="inline-flex min-h-[44px] min-w-0 items-center break-all underline">{url}</a>
        <CopyText value={url} label="Copy profile link" />
      </div>
      <figure>
        <svg viewBox="0 0 73 73" className="h-56 w-56 max-w-full" role="img" aria-label="QR code for your public profile" shapeRendering="crispEdges">
          <rect width="73" height="73" fill="white" />
          <path fill="black" d={qrPath} />
        </svg>
      </figure>
      <a href={`data:image/svg+xml,${encodeURIComponent(qrFile)}`} download="mindcheck-profile-qr.svg" className="inline-flex min-h-[44px] items-center underline">
        Download QR code
      </a>
      <a href={`${path}/card`} download="mindcheck-profile.png" className="inline-flex min-h-[44px] items-center underline">
        Download profile card
      </a>
      <label className="block">Listed on MindCheck badge
        <textarea readOnly value={badge} rows={3} className="block w-full rounded border p-2 dark:bg-neutral-900" />
      </label>
      <CopyText value={badge} label="Copy badge snippet" />
    </section>
  );
}

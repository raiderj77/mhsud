import Link from "next/link";

export function LocalStorageNotice({ dataDescription }: { dataDescription: string }) {
  return (
    <div
      role="note"
      aria-label="Local device storage notice"
      className="max-w-2xl mx-auto px-4 sm:px-6 mt-5"
    >
      <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
        <strong>Stored on this device:</strong> This tool saves {dataDescription} in this browser so
        it remains available after a refresh. It is not intentionally sent to MindCheck Tools
        servers, but anyone with access to this browser profile may be able to read it. On a shared
        device, use a private window or clear the tool and browser site data when finished. See the{" "}
        <Link href="/privacy" className="font-semibold underline">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}

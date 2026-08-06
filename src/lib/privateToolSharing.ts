const SITE_URL = "https://mindchecktools.com";

export const PRIVATE_SHARE_NOTICE =
  "Sharing sends only the tool name and canonical page link. It never includes your answers, scores, severity, risk or category labels, ratings, or summaries.";

export const PRIVATE_SHARE_COPIED_MESSAGE =
  "Tool link copied. No answers or results included.";

type PrivateToolShareMode = "share" | "copy";

type PrivateToolShareOptions = {
  toolName: string;
  canonicalPath: `/${string}`;
  mode?: PrivateToolShareMode;
};

export type PrivateToolShareOutcome =
  | "shared"
  | "copied"
  | "cancelled"
  | "unavailable";

/**
 * Sends a deliberately minimal public payload to an OS share sheet or clipboard.
 * Never pass assessment state to this helper. Its API only accepts a public tool
 * name and canonical path so answers and result data cannot be included by callers.
 */
export async function sharePrivateToolLink({
  toolName,
  canonicalPath,
  mode = "share",
}: PrivateToolShareOptions): Promise<PrivateToolShareOutcome> {
  const canonicalUrl = new URL(canonicalPath, SITE_URL);
  canonicalUrl.search = "";
  canonicalUrl.hash = "";
  const url = canonicalUrl.toString();

  if (mode === "share" && typeof navigator.share === "function") {
    try {
      await navigator.share({ title: toolName, text: toolName, url });
      return "shared";
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return "cancelled";
      }
    }
  }

  if (typeof navigator.clipboard?.writeText !== "function") {
    return "unavailable";
  }

  try {
    await navigator.clipboard.writeText(`${toolName}\n${url}`);
    return "copied";
  } catch {
    return "unavailable";
  }
}

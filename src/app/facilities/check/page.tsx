import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { getDirectoryIndex } from "@/lib/facilities";
import CheckTool from "./CheckTool";

export const metadata: Metadata = {
  ...createMetadata({
    path: "/facilities/check",
    title: "Free Listing Check for Treatment Programs",
    description:
      "Free check for treatment program operators: see what the SAMHSA National Directory and your state licensing roster say about your program, and what does not match.",
  }),
  robots: { index: false, follow: true },
};

export default function CheckPage() {
  const index = getDirectoryIndex();
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900">Free listing check</h1>
      <p className="mt-4 text-lg text-slate-800">
        Enter your program&rsquo;s name and state. The check compares the record held in the
        SAMHSA National Directory (2024 edition) against the California DHCS licensing roster
        where a match exists, and names what is stale or mismatched — with the date each source
        was retrieved ({index.generatedAt}). No account, no fee, and no personal information
        about anyone seeking treatment is requested or accepted.
      </p>
      <div className="mt-6">
        <CheckTool states={index.states.map((s) => ({ code: s.code, name: s.name }))} />
      </div>
    </div>
  );
}

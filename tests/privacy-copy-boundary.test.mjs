import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const root = process.cwd();
const sourceExtensions = /\.(?:js|jsx|ts|tsx|mdx)$/i;

const forbiddenClaims = [
  ["absolute confidentiality", /\b(?:yes,\s*completely|completely confidential|completely private|totally private|fully private|100% private)\b/gi],
  ["unqualified private-by-design claim", /\bprivate by design\b/gi],
  ["absolute browser-processing claim", /\b(?:processed|scored|calculated|runs?|happens?) entirely in (?:your|the) browser\b/gi],
  ["absolute storage or transmission claim", /\bnever (?:stored|sent|transmitted|shared|uploaded|recorded)\b/gi],
  ["absolute device boundary", /\bnever leave(?:s)? (?:your|the) (?:browser|device)\b/gi],
  ["nothing stored or transmitted claim", /\bnothing (?:is|gets|will be)?\s*(?:stored|sent|transmitted|shared|uploaded|recorded)\b/gi],
  ["no data stored or transmitted claim", /\bno (?:data|answers?|responses?|results?|entries) (?:is|are) (?:stored|sent|transmitted|shared|uploaded|recorded|accessible)\b/gi],
  ["total invisibility claim", /\b(?:no one|nobody) can (?:see|access) (?:your )?(?:answers?|responses?|results?|data)\b|\bno way for anyone to (?:see|access) (?:your )?(?:answers?|responses?|results?|data)\b|\bonly you can see\b/gi],
  ["accessible-to-anyone claim", /\b(?:answers?|responses?|results?|data|entries) (?:are|is) accessible to anyone\b/gi],
  ["gone-on-close claim", /\b(?:answers?|responses?|results?|data|entries) (?:are|is) gone\b|\b(?:your|the) data is gone\b|\bwhen you close (?:this |the )?page[^.\n]{0,50}\bit(?:'|&apos;)s gone\b/gi],
  ["stays-in-browser claim", /\b(?:everything|answers?|responses?|results?|data|entries) (?:stay|stays) (?:in|on) (?:your|the) (?:browser|device)\b/gi],
  ["stored-or-sent-anywhere claim", /\b(?:answers?|responses?|results?|data|entries) (?:are|is) (?:not|never) (?:stored|sent) anywhere\b|\bnothing is (?:stored|sent) anywhere\b/gi],
  ["site anonymity claim", /\b(?:free,\s*)?(?:private\s*(?:,|and)\s*anonymous|anonymous\s*(?:,|and)\s*private|free,\s*anonymous)\b/gi],
];

function trackedSourceFiles() {
  return execFileSync("git", ["ls-files", "-z", "--", "src"], {
    cwd: root,
    encoding: "utf8",
  })
    .split("\0")
    .filter((file) => sourceExtensions.test(file));
}

async function exists(relativePath) {
  try {
    await access(path.join(root, relativePath));
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") return false;
    throw error;
  }
}

function lineNumberAt(source, index) {
  return source.slice(0, index).split("\n").length;
}

test("tracked public source contains no absolute confidentiality or transmission promises", async () => {
  const failures = [];

  for (const relativePath of trackedSourceFiles()) {
    if (!(await exists(relativePath))) continue;
    const source = await readFile(path.join(root, relativePath), "utf8");

    for (const [label, pattern] of forbiddenClaims) {
      pattern.lastIndex = 0;
      for (const match of source.matchAll(pattern)) {
        failures.push(`${relativePath}:${lineNumberAt(source, match.index)} [${label}] ${match[0]}`);
      }
    }
  }

  assert.deepEqual(failures, [], failures.join("\n"));
});

test("primary privacy surfaces state the complete local-processing boundary", async () => {
  for (const relativePath of ["src/app/privacy/page.tsx", "src/app/terms/page.tsx"]) {
    const source = await readFile(path.join(root, relativePath), "utf8");
    assert.match(source, /(?:questionnaire|screening) answers and scores are processed locally/i, relativePath);
    assert.match(source, /not intentionally sent to MindCheck Tools/i, relativePath);
    assert.match(source, /ordinary page requests[^.]*hosting records/i, relativePath);
    assert.match(source, /prints?|downloads?|copies?/i, relativePath);
    assert.match(source, /(?:device|browser) sync|sync or backup/i, relativePath);
    assert.match(source, /shared (?:browser|device)/i, relativePath);
  }
});

test("homepage gives the concise boundary without implying invisible page requests", async () => {
  const source = await readFile(path.join(root, "src/app/page.tsx"), "utf8");
  assert.match(source, /Screening answers and scores are processed locally/i);
  assert.match(source, /not intentionally sent to MindCheck Tools/i);
  assert.match(source, /ordinary (?:website|page) requests[^.]*hosting records/i);
});

/**
 * xlsx-lite.mjs — minimal, dependency-free XLSX reader for build-time ingest.
 *
 * Supports exactly what the SAMHSA National Directory workbook needs:
 * stored/deflated ZIP entries, shared strings, inline strings, numbers.
 * Not a general-purpose spreadsheet library; do not use at request time.
 */
import { inflateRawSync } from "node:zlib";

function findEndOfCentralDirectory(buf) {
  const min = Math.max(0, buf.length - 65558);
  for (let i = buf.length - 22; i >= min; i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) return i;
  }
  throw new Error("xlsx-lite: end of central directory not found");
}

function readZipEntries(buf) {
  const eocd = findEndOfCentralDirectory(buf);
  const count = buf.readUInt16LE(eocd + 10);
  let off = buf.readUInt32LE(eocd + 16);
  const entries = new Map();
  for (let n = 0; n < count; n++) {
    if (buf.readUInt32LE(off) !== 0x02014b50) throw new Error("xlsx-lite: bad central directory");
    const method = buf.readUInt16LE(off + 10);
    const compSize = buf.readUInt32LE(off + 20);
    const nameLen = buf.readUInt16LE(off + 28);
    const extraLen = buf.readUInt16LE(off + 30);
    const commentLen = buf.readUInt16LE(off + 32);
    const localOff = buf.readUInt32LE(off + 42);
    const name = buf.toString("utf8", off + 46, off + 46 + nameLen);
    entries.set(name, { method, compSize, localOff });
    off += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}

function extractEntry(buf, entries, name) {
  const entry = entries.get(name);
  if (!entry) return null;
  const off = entry.localOff;
  if (buf.readUInt32LE(off) !== 0x04034b50) throw new Error(`xlsx-lite: bad local header for ${name}`);
  const nameLen = buf.readUInt16LE(off + 26);
  const extraLen = buf.readUInt16LE(off + 28);
  const start = off + 30 + nameLen + extraLen;
  const data = buf.subarray(start, start + entry.compSize);
  if (entry.method === 0) return Buffer.from(data);
  if (entry.method === 8) return inflateRawSync(data);
  throw new Error(`xlsx-lite: unsupported compression method ${entry.method}`);
}

export function decodeXmlEntities(text) {
  return text
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function parseSharedStrings(xml) {
  const strings = [];
  const siRe = /<si>([\s\S]*?)<\/si>/g;
  let m;
  while ((m = siRe.exec(xml)) !== null) {
    const inner = m[1];
    let text = "";
    const tRe = /<t[^>]*>([\s\S]*?)<\/t>/g;
    let t;
    while ((t = tRe.exec(inner)) !== null) text += t[1];
    strings.push(decodeXmlEntities(text));
  }
  return strings;
}

function columnIndex(ref) {
  const letters = /^[A-Z]+/.exec(ref)?.[0] ?? "";
  let idx = 0;
  for (const ch of letters) idx = idx * 26 + (ch.charCodeAt(0) - 64);
  return idx - 1;
}

function parseSheet(xml, sharedStrings) {
  const rows = [];
  const rowRe = /<row[^>]*>([\s\S]*?)<\/row>/g;
  let rm;
  while ((rm = rowRe.exec(xml)) !== null) {
    const cells = [];
    const cellRe = /<c\s([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g;
    let cm;
    while ((cm = cellRe.exec(rm[1])) !== null) {
      const attrs = cm[1];
      const body = cm[2] ?? "";
      const ref = /\br="([A-Z]+\d+)"/.exec(attrs)?.[1] ?? "";
      const type = /\bt="(\w+)"/.exec(attrs)?.[1] ?? "n";
      let value = "";
      if (type === "s") {
        const v = /<v>([\s\S]*?)<\/v>/.exec(body)?.[1];
        value = v === undefined ? "" : sharedStrings[parseInt(v, 10)] ?? "";
      } else if (type === "inlineStr") {
        let text = "";
        const tRe = /<t[^>]*>([\s\S]*?)<\/t>/g;
        let t;
        while ((t = tRe.exec(body)) !== null) text += t[1];
        value = decodeXmlEntities(text);
      } else {
        const v = /<v>([\s\S]*?)<\/v>/.exec(body)?.[1];
        value = v === undefined ? "" : decodeXmlEntities(v);
      }
      const idx = ref ? columnIndex(ref) : cells.length;
      while (cells.length < idx) cells.push("");
      cells[idx] = value;
    }
    rows.push(cells);
  }
  return rows;
}

/**
 * Read an .xlsx buffer into { sheetName: string[][] }.
 */
export function readXlsx(buf) {
  const entries = readZipEntries(buf);
  const sharedXml = extractEntry(buf, entries, "xl/sharedStrings.xml");
  const sharedStrings = sharedXml ? parseSharedStrings(sharedXml.toString("utf8")) : [];

  const workbook = extractEntry(buf, entries, "xl/workbook.xml")?.toString("utf8") ?? "";
  const rels = extractEntry(buf, entries, "xl/_rels/workbook.xml.rels")?.toString("utf8") ?? "";
  const relTargets = new Map();
  for (const m of rels.matchAll(/<Relationship[^>]*Id="([^"]+)"[^>]*Target="([^"]+)"/g)) {
    relTargets.set(m[1], m[2]);
  }
  const sheets = {};
  for (const m of workbook.matchAll(/<sheet[^>]*name="([^"]+)"[^>]*r:id="([^"]+)"/g)) {
    const target = relTargets.get(m[2]);
    if (!target) continue;
    const path = target.startsWith("/") ? target.slice(1) : `xl/${target.replace(/^\/?xl\//, "")}`;
    const xml = extractEntry(buf, entries, path)?.toString("utf8");
    if (xml) sheets[decodeXmlEntities(m[1])] = parseSheet(xml, sharedStrings);
  }
  return sheets;
}

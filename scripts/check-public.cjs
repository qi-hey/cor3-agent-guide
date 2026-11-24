const { execFileSync } = require("node:child_process");
const { isIP } = require("node:net");
const { resolve } = require("node:path");

const root = resolve(__dirname, "..");
const required = new Set([
  ".gitignore",
  "AGENTS.md",
  "CHANGELOG.md",
  "LICENSE",
  "README.md",
  "guide.json",
  "scripts/check-public.cjs",
]);
const docPath = /^docs\/[a-z0-9]+(?:-[a-z0-9]+)*\.md$/;
const statuses = new Set(["verified", "partial", "unverified"]);
const privatePatterns = [
  ["email address", /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i],
  ["local path", /\b[a-z]:[\\/]|\/(?:Users|home)\/[^/\s]+\/|file:\/\//i],
  ["private identifier", /\b[a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12}\b/i],
  ["scheduled task identifier", /\bscheduled-task:command:/i],
  ["game account identifier", /\bFREEL[ _:-]+[a-z\d]{5,}\b/i],
  ["credential", /\b(?:gh[pousr]_[a-z\d]{20,}|github_pat_[a-z\d_]{20,}|eyJ[\w-]+\.[\w-]+\.[\w-]+)|\bAuthorization:\s*Bearer\s+\S+/i],
];

function git(...args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8" });
}

function readPublicIndex() {
  const files = new Map();
  for (const item of git("ls-files", "--stage", "-z").split("\0").filter(Boolean)) {
    const tab = item.indexOf("\t");
    const path = item.slice(tab + 1);
    const regularFile = /^100(?:644|755) [\da-f]+ 0$/.test(item.slice(0, tab));
    if (!regularFile || (!required.has(path) && !docPath.test(path))) {
      throw new Error("The Git index contains a file outside the public guide.");
    }

    const text = git("show", `:${path}`).replace(/\r\n/g, "\n");
    if (/[\0\uFFFD]/u.test(text)) throw new Error(`Expected UTF-8 text in ${path}.`);
    for (const [category, pattern] of privatePatterns) {
      if (pattern.test(text)) throw new Error(`Possible ${category} in ${path}.`);
    }
    for (const address of text.match(/\b\d{1,3}(?:\.\d{1,3}){3}\b/g) ?? []) {
      if (isIP(address)) throw new Error(`Real IP address in ${path}.`);
    }
    files.set(path, text);
  }
  for (const path of required) {
    if (!files.has(path)) throw new Error(`Missing required file ${path}.`);
  }
  return files;
}

function checkGuide(files) {
  const guide = JSON.parse(files.get("guide.json"));
  if (guide.schema_version !== 1 || guide.entrypoint !== "AGENTS.md" ||
      !Array.isArray(guide.entries) || !guide.entries.length) {
    throw new Error("Invalid guide.json index.");
  }
  const ids = new Set();
  for (const entry of guide.entries) {
    if (typeof entry.id !== "string" || !/^[a-z\d]+(?:-[a-z\d]+)*$/.test(entry.id) ||
        ids.has(entry.id) || !statuses.has(entry.status) || !docPath.test(entry.path)) {
      throw new Error("Invalid or duplicate task record in guide.json.");
    }
    const headings = files.get(entry.path)?.split("\n");
    if (typeof entry.section !== "string" || !headings?.includes(`## ${entry.section}`)) {
      throw new Error(`Missing guide section for ${entry.id}.`);
    }
    ids.add(entry.id);
  }
  return ids.size;
}

try {
  const files = readPublicIndex();
  const entries = checkGuide(files);
  console.log(`Checked ${files.size} public files and ${entries} guide entries.`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}

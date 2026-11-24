// Writes the plugin table in profile/README.md from the brand catalog, so the profile
// lists the same plugins, names and taglines as the plugins repo and its docs, and never
// falls behind them. Each plugin links its docs, and its Modrinth page once that's public
// (asked of Modrinth's API), or else its download page, as the plugins README does.
//
//   node scripts/profile.ts           # rewrite the table
//   node scripts/profile.ts --check   # fail if it's out of date (CI, weekly)
//
// Needs Node 24 and nothing else. The catalog is read from the brand repo's v1 releases
// through jsDelivr, as every other link to brand files is.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PROFILE = path.join(ROOT, "profile/README.md");
const BRAND = "https://cdn.jsdelivr.net/gh/xena-studios/brand@1";
const DOCS = "https://plugins.xenastudios.co";
const HEADERS = { "User-Agent": "xena-studios/.github profile script (github.com/xena-studios/.github)" };

interface Plugin { id: string; name: string; category: string; tagline: string; released: boolean }
interface Catalog { version: number; categories: string[]; plugins: Plugin[] }

async function json<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`${url}: ${res.status}`);
  return res.json() as Promise<T>;
}

/** Whether the plugin's Modrinth page is public: the API answers 404 for a draft or none. */
async function onModrinth(id: string): Promise<boolean> {
  const res = await fetch(`https://api.modrinth.com/v2/project/${id}`, { headers: HEADERS });
  if (res.status === 404) return false;
  if (!res.ok) throw new Error(`Modrinth ${id}: ${res.status}`);
  const project = (await res.json()) as { status: string };
  return ["approved", "archived"].includes(project.status);
}

const catalog = await json<Catalog>(`${BRAND}/tokens/plugins-catalog.json`);
if (catalog.version !== 1) throw new Error(`The brand catalog is version ${catalog.version}; this script reads version 1.`);

// The catalog is our own, but it's still data from the network written into a README:
// only take ids that are plain slugs, and names and taglines that can't break out of a
// table cell or into HTML.
const SLUG = /^[a-z][a-z0-9]{1,31}$/;
const TEXT = /^[^|<>\n\r`[\]]{1,120}$/;
for (const p of catalog.plugins) {
  if (!SLUG.test(p.id) || !TEXT.test(p.name) || !TEXT.test(p.tagline) || !TEXT.test(p.category)) {
    throw new Error(`The brand catalog has a plugin this script won't write into the profile: ${JSON.stringify(p).slice(0, 200)}`);
  }
}

// In the catalog's category order, as the plugins README lists them.
const plugins = catalog.categories.flatMap((c) => catalog.plugins.filter((p) => p.category === c && p.released));
const rows = await Promise.all(plugins.map(async (p) => {
  const get = (await onModrinth(p.id))
    ? `[Modrinth](https://modrinth.com/plugin/${p.id})`
    : `[Download](${DOCS}/${p.id}/download/)`;
  return `| <img src="${BRAND}/plugins/${p.id}/icon.png" width="40" alt=""> | **${p.name}** | ${p.tagline} | [Docs](${DOCS}/${p.id}/) · ${get} |`;
}));
const table = ["| | Plugin | | |", "|---|---|---|---|", ...rows].join("\n");

const START = "<!-- plugins:start: written by scripts/profile.ts from the brand catalog. Don't edit by hand. -->";
const END = "<!-- plugins:end -->";
const text = fs.readFileSync(PROFILE, "utf8");
const at = text.indexOf(START), to = text.indexOf(END);
if (at < 0 || to < 0) throw new Error(`profile/README.md has no ${START.slice(0, 20)}… ${END} markers.`);
const next = text.slice(0, at + START.length) + "\n" + table + "\n" + text.slice(to);

if (process.argv.includes("--check")) {
  if (next !== text) {
    console.error("The profile's plugin table is out of date with the brand catalog or Modrinth. Run node scripts/profile.ts and commit it.");
    process.exit(1);
  }
  console.log(`profile: ${plugins.length} plugins, up to date`);
} else {
  fs.writeFileSync(PROFILE, next);
  console.log(`profile: wrote ${plugins.length} plugins`);
}

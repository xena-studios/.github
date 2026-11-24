![Xena Studios on GitHub. XENA STUDIOS and the title "Xena Studios" over the Ion Blue planet horizon, with "Game servers, and the tools to run them."](https://cdn.jsdelivr.net/gh/xena-studios/brand@1/github/dotgithub-banner.png)

**Game servers, and the tools to run them.**

The [Xena Studios](https://xenastudios.co) organisation profile, and the defaults every repo shares.

| File | What it is |
|---|---|
| [`profile/README.md`](profile/README.md) | The profile shown at [github.com/xena-studios](https://github.com/xena-studios) |
| [`scripts/profile.ts`](scripts/profile.ts) | Writes the profile's plugin table from the brand catalog and Modrinth |
| [`renovate-config.json`](renovate-config.json) | Renovate settings every repo extends |
| [`SECURITY.md`](SECURITY.md), [`CONTRIBUTING.md`](CONTRIBUTING.md), [`SUPPORT.md`](SUPPORT.md), [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md) | Community files for every repo without its own |
| [Issue forms](.github/ISSUE_TEMPLATE), [PR template](.github/pull_request_template.md) | The same, for issues and pull requests |

## README layout

Every repo's README follows the same shape, so they read as one family:

1. **The banner,** the repo's brand file linked from the brand repo's v1 releases (`https://cdn.jsdelivr.net/gh/xena-studios/brand@1/...`, not a copy), with alt text that starts "<Name> by Xena Studios." and says what it shows. A repo with no banner starts with `# <Name>` instead, and never with both.
2. **The tagline,** in bold, on its own line: one short sentence, the same one the banner and the site use.
3. **Badges,** for released products only: the compact row from [the brand's badge guide](https://brand.xenastudios.co/badges).
4. **What it is,** in a paragraph that says it's by [Xena Studios](https://xenastudios.co) and links its site.
5. **Status,** as a `> **Status:**` line, for anything not generally available.
6. The repo's own sections, then, in this order and with these names: **`## Building`** (how to build and run it), **`## Contributing`** (who can, and where the guide is), **`## Licence`** (last, spelt the British way, as everything else is).

## Contributing

- Changes go through pull requests, and the `check` job has to pass. It validates the Renovate configs, since a mistake there stops Renovate across the org.
- CodeQL scans the profile script and the workflows on every pull request, and blocks a merge on a high-severity finding, as in the brand repo.
- Two more checks run on every pull request and every Monday, without blocking a merge: **links** (every link in every Markdown file and issue form still answers) and **profile** (the plugin table matches the brand catalog and Modrinth). On Monday, either failing opens an issue here, since nothing in this repo changed to cause it.
- Commits follow [Conventional Commits](https://www.conventionalcommits.org): `docs:`, `build:`, `ci:`.
- `renovate-config.json` is extended by every repo, so check a change is safe for all of them.
- The community files and issue forms are the defaults for every repo without its own, so they have to read right for each of them.
- Every image is a brand file, linked from the brand repo's v1 releases through jsDelivr (`cdn.jsdelivr.net/gh/xena-studios/brand@1/...`), as [its guide](https://brand.xenastudios.co/files#linking-files) says: nothing is copied here, so a brand release updates the profile. Browse them at [brand.xenastudios.co](https://brand.xenastudios.co).
- The plugin table is written by `node scripts/profile.ts` (Node 24, no install): add or rename a plugin in the brand catalog, release the brand, then run it. Everything else in the profile is written by hand, and follows [xenastudios.co](https://xenastudios.co).

## Licence

All rights reserved; see [LICENSE](LICENSE). The profile's images are the brand's, under [its licence](https://github.com/xena-studios/brand/blob/main/LICENSE). The code of conduct is the [Contributor Covenant](https://www.contributor-covenant.org) 2.1, under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

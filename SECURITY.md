# Security policy

This policy covers every Xena Studios repo without its own. [Raptor](https://github.com/xena-studios/raptor/blob/main/SECURITY.md) and the [plugins](https://github.com/xena-studios/plugins/blob/main/SECURITY.md) have their own.

## Reporting a vulnerability

**Don't open a public issue.** Instead, either:

- use **Security → Report a vulnerability** on the affected repo, or
- email [security@xenastudios.co](mailto:security@xenastudios.co).

Include the repo, the version or commit, steps to reproduce, and the impact.

**Our Minecraft servers** (MostWanted and Airfields) have private repos. Email [security@mostwantedmc.com](mailto:security@mostwantedmc.com) or [security@airfieldsmc.com](mailto:security@airfieldsmc.com) instead, and don't test on the live server.

## What to expect

- A reply within **72 hours**
- An assessment within **7 days**
- A fix as soon as it's ready, with an advisory where the project publishes releases
- Credit, if you'd like it

## Scope

| Repo | Covers |
|---|---|
| [neoskript](https://github.com/xena-studios/neoskript) | The plugin, its compiler and runtime, and the CLI |
| [website](https://github.com/xena-studios/website) | [xenastudios.co](https://xenastudios.co): its pages, headers and redirects |
| [brand](https://github.com/xena-studios/brand) | The scripts that build and sync the brand assets |
| [.github](https://github.com/xena-studios/.github) | The shared Renovate settings |
| [mostwanted-pack](https://github.com/xena-studios/mostwanted-pack), [airfields-pack](https://github.com/xena-studios/airfields-pack) | The published resource packs |

Out of scope: archived repos (such as AxVaults), problems in services we build on (GitHub, Cloudflare, Modrinth, Paper) unless we make them reachable, volume-only denial of service, scanner output without a demonstrated impact, and social engineering or physical attacks.

## Safe harbour

We won't take legal action over good-faith research that follows this policy, only tests systems you own or may test, and avoids privacy violations, data loss and harm to other people's servers and players.

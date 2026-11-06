# Security policy

This is the security policy for every [Xena Studios](https://github.com/xena-studios) repository that doesn't have its own. [Raptor](https://github.com/xena-studios/raptor/blob/main/SECURITY.md), the [plugins](https://github.com/xena-studios/plugins/blob/main/SECURITY.md) and [MostWanted](https://github.com/xena-studios/mostwanted/blob/main/SECURITY.md) have their own; follow theirs for those.

## Reporting a vulnerability

**Don't open a public issue for a security problem.**

- Use GitHub's private vulnerability reporting on the affected repository (its **Security** tab, then **Report a vulnerability**), or
- email **[contact@xenastudios.co](mailto:contact@xenastudios.co)** with "Security" in the subject.

Include the repository, the version or commit you tested, steps to reproduce, and the impact you believe it has.

## What to expect

- Acknowledgement within **72 hours**
- An initial assessment within **7 days**
- A fix as soon as one is ready, ahead of other work, with a GitHub security advisory where the project publishes releases
- Credit in the advisory and the release notes, if you'd like it

Fixes go into the newest release, or `main` for a project without releases.

## Scope

| Repository | In scope |
|---|---|
| [raptor](https://github.com/xena-studios/raptor) | Its own policy: [SECURITY.md](https://github.com/xena-studios/raptor/blob/main/SECURITY.md), reports to security@raptorpanel.net |
| [plugins](https://github.com/xena-studios/plugins) | Its own policy: [SECURITY.md](https://github.com/xena-studios/plugins/blob/main/SECURITY.md), which also covers [docs.xenastudios.co](https://docs.xenastudios.co) |
| [mostwanted](https://github.com/xena-studios/mostwanted) | Its own policy: [SECURITY.md](https://github.com/xena-studios/mostwanted/blob/main/SECURITY.md) |
| [neoskript](https://github.com/xena-studios/neoskript) | NeoSkript: the plugin, its compiler and runtime, and the CLI |
| [website](https://github.com/xena-studios/website) | [xenastudios.co](https://xenastudios.co): its pages, headers and redirects |
| [brand](https://github.com/xena-studios/brand) | The scripts that build and sync the brand assets |
| [.github](https://github.com/xena-studios/.github) | The shared Renovate settings every repository extends |

Out of scope:

- Archived repositories, such as AxVaults. They don't get fixes.
- Problems in the services we build on (GitHub, Cloudflare, Modrinth, Paper and others), unless something of ours makes them reachable. Report those to the service.
- Denial of service through volume alone
- Scanner output without a demonstrated impact, such as a missing header or an email DNS record
- Social engineering of Xena Studios people, or physical attacks

## Safe harbour

We won't pursue legal action against good-faith research that follows this policy, tests only on systems you own or have permission to test, and avoids privacy violations, data destruction and harm to other people's servers, players and data.

# Contributing

Thanks for helping out. This guide covers every Xena Studios repo without its own. [Raptor](https://github.com/xena-studios/raptor/blob/main/CONTRIBUTING.md), the [plugins](https://github.com/xena-studios/plugins/blob/main/CONTRIBUTING.md) and [MostWanted](https://github.com/xena-studios/mostwanted/blob/main/CONTRIBUTING.md) have their own.

Everyone follows the [code of conduct](https://github.com/xena-studios/.github/blob/main/CODE_OF_CONDUCT.md). Security problems go to the [security policy](https://github.com/xena-studios/.github/blob/main/SECURITY.md), never a public issue.

## Issues

Check the issue isn't already open, then use the form. For a bug, include the version or commit, what you did, what you expected and any errors. For questions, see [getting help](https://github.com/xena-studios/.github/blob/main/SUPPORT.md).

## Pull requests

1. Read the repo's README: it says how to build and test.
2. Branch from `main` (or fork) and keep to one change, with its tests and docs.
3. Open the PR and say what it changes and why. It merges once CI passes.

Commits follow [Conventional Commits](https://www.conventionalcommits.org): `feat:`, `fix:`, `docs:`, `build:`, `ci:`.

## Licences

Your contribution is licensed under the repo's licence. Repos that are all rights reserved, like the website and brand, can't take outside pull requests: open an issue instead.

## Dependencies

[Renovate](https://docs.renovatebot.com) opens update PRs on Monday mornings, and straight away for a known vulnerability. Shared settings are in [`renovate-config.json`](https://github.com/xena-studios/.github/blob/main/renovate-config.json).

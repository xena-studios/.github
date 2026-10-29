# Contributing

Thanks for helping with Xena Studios' projects. This is the guide for every [Xena Studios](https://github.com/xena-studios) repository that doesn't have its own. [Raptor](https://github.com/xena-studios/raptor/blob/main/CONTRIBUTING.md), the [plugins](https://github.com/xena-studios/plugins/blob/main/CONTRIBUTING.md) and [MostWanted](https://github.com/xena-studios/mostwanted/blob/main/CONTRIBUTING.md) have their own, with more detail.

Everyone taking part follows the [code of conduct](https://github.com/xena-studios/.github/blob/main/CODE_OF_CONDUCT.md). Security problems go to the [security policy](https://github.com/xena-studios/.github/blob/main/SECURITY.md), never to a public issue.

## Reporting a bug or asking for a feature

Open an issue on the project's repository, after checking it isn't there already. The issue forms ask for what's needed. For a bug, the version or commit, what you did, what you expected and any errors matter most. Questions that aren't bugs are best sent to [contact@xenastudios.co](mailto:contact@xenastudios.co).

## Building and testing

Each repository's README says what it needs, how to build and test it, and how it's laid out. Read it, and anything it points to, before changing the parts it describes.

## Pull requests

1. Fork the repo, or make a branch if you have access, from `main`.
2. Keep to one change, with its tests, and update the README or docs it affects.
3. Build and test it as the README describes, then open the PR and say what it changes and why.

Changes reach `main` through pull requests, once CI passes.

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org): `fix: ...`, `feat: ...`, `docs: ...`, `build: ...`, `ci: ...`, with a scope where the repository uses one.

## Licences

Each repository's licence is in its `LICENSE` file or its README. By contributing, you agree your contribution is licensed under that repository's licence. A repository that's all rights reserved, such as the website, has no licence to contribute under, so open an issue rather than a pull request there.

## Dependency updates

[Renovate](https://docs.renovatebot.com) opens dependency PRs on Monday mornings, using the org's shared settings in [`renovate-config.json`](https://github.com/xena-studios/.github/blob/main/renovate-config.json), plus each repository's own `renovate.json`. A dependency with a known vulnerability gets a PR straight away.

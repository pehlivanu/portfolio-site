# ADR 0004: Automated Code Quality Pipeline

**Date:** 2026-07-18
**Status:** Accepted

## Context

As the codebase matures, maintaining strict code quality, consistent formatting, and preventing broken code from entering the repository is paramount. Relying solely on developers to manually run linters or formatters before committing is error-prone. We need an automated gatekeeper that runs locally before code is pushed to remote.

## Decision

We integrated **Husky** to intercept Git hooks, combined with **lint-staged** to run **ESLint v10** and **Prettier** exclusively on staged files before every commit.

## Consequences

### Positive

1. **Guaranteed Quality:** No syntactically incorrect, poorly formatted, or lint-failing code can be successfully committed.
2. **Performance:** `lint-staged` ensures that the linter and formatter only run on files that have actually been modified, keeping the commit process blazingly fast.
3. **Consistency:** Enforces a unified styling standard across the entire codebase, eliminating "format wars" during code reviews.

### Negative

1. **Commit Friction:** Developers may experience occasional friction if they attempt to commit "work-in-progress" code that violates strict linting rules, forcing them to fix or bypass (`--no-verify`) the hook.
2. **Setup Overhead:** Requires initial configuration of Git hooks and ensuring all developers install the dependencies correctly via `prepare` scripts.

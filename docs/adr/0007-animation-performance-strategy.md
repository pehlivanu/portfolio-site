# ADR 0007: Animation Performance Strategy

**Date:** 2026-07-18
**Status:** Accepted

## Context

The portfolio heavily relies on complex UI animations to simulate an interactive IDE environment (drawers, file trees, hover states, scroll reveals). We selected **Framer Motion** for its declarative API and physics-based spring animations. However, importing the standard `motion` components globally introduces a massive footprint (approx. ~30-40kB gzipped) to the initial JavaScript payload. This directly harms Time To Interactive (TTI) and Largest Contentful Paint (LCP), negatively impacting Lighthouse performance scores.

## Decision

We will employ a **Strict Lazy-Loading Architecture** for Framer Motion using the `<LazyMotion>` provider and the `m` component specifically, rather than the standard `motion` component.

## Consequences

### Positive

1. **Dramatically Reduced Initial Payload:** The core animation engine (`domAnimation`) is split into a separate chunk and only downloaded dynamically when the browser is idle or when an animated component mounts.
2. **Maintained 100/100 Lighthouse Scores:** By deferring the execution of the animation library, the main thread remains unblocked during the critical rendering path.
3. **Seamless DX:** Developers continue to use the familiar declarative syntax (e.g., `<m.div animate={{ opacity: 1 }} />`), retaining the DX of Framer Motion without the performance penalty.

### Negative

1. **Initial Render Delay on Animations:** Animations that trigger immediately on page load may experience a micro-delay (milliseconds) while the `domAnimation` feature bundle is fetched. We mitigate this by ensuring critical "above the fold" layout elements do not rely solely on JS animations for their structural rendering.
2. **Refactor Overhead:** Enforcing this pattern required a codebase-wide refactoring to strip out `motion.*` imports and replace them with `m.*`, enforced via strict code review.

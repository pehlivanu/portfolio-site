# ADR 0006: Frontend Framework Upgrade (Next.js 16)

**Date:** 2026-07-18
**Status:** Accepted

## Context

The portfolio application requires a highly interactive, responsive, and performant user interface that mimics a complex desktop IDE. At the same time, it must be easily discoverable by search engines (SEO) and maintain a fast Time To First Byte (TTFB) to ensure a premium user experience. Traditional Single Page Applications (SPAs) built with Create React App (CRA) or Vite typically suffer from large initial JavaScript bundles, resulting in blank screens during parsing and poor SEO indexing.

## Decision

We have selected **Next.js 16 (App Router)** as the core frontend framework, leveraging **React Server Components (RSC)** and the **React Compiler**.

## Consequences

### Positive

1. **Zero-JavaScript Static Rendering:** The component tree is pre-compiled into static HTML, yielding a near-perfect TTFB and immediate first paint.
2. **Superior SEO:** Search engine crawlers receive fully populated HTML documents, eliminating the need for client-side JavaScript execution to index content.
3. **Reduced Client Bundle Size:** By defaulting to Server Components, heavy dependencies do not bloat the client. We only ship interactive logic via explicit `"use client"` directives.
4. **Unified Backend Logic:** Next.js Route Handlers allow us to keep serverless API logic (e.g., secure Nodemailer integrations) within the same monorepo, bypassing the need for a separate Express.js service.
5. **Native Memoization:** The React Compiler eliminates the need for manual `useMemo` and `useCallback` hooks, vastly improving developer velocity while guaranteeing optimal re-render cycles.

### Negative

1. **Increased Complexity:** Developers must strictly manage the boundary between Server and Client components, being mindful of where context providers and interactivity reside.
2. **Deployment Lock-in:** While Next.js can be self-hosted, its most advanced edge-caching and image-optimization features are deeply coupled with the Vercel deployment ecosystem.

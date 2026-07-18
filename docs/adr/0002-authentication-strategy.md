# ADR 0002: Authentication Strategy via NextAuth.js

**Date:** 2025-12-15
**Status:** Accepted

## Context

The application requires secure administration endpoints (e.g., managing contact submissions or generating restricted CVs). We need a secure, reliable, and easily maintainable authentication strategy that integrates seamlessly with Next.js 15 (App Router) and supports OAuth providers (like Google).

## Decision

We selected **NextAuth.js (v4 / Stable)** as the primary authentication and session management library.

## Consequences

### Positive

1. **Seamless Next.js Integration:** NextAuth is explicitly designed for Next.js, supporting both Edge runtime and Server Components, allowing us to protect routes at the middleware level without client-side redirects.
2. **Provider Ecosystem:** Out-of-the-box support for Google OAuth reduces the complexity of managing secure token handshakes and user credential storage.
3. **Security:** Handles CSRF protection, secure HTTP-only cookies, and session encryption automatically, drastically reducing the risk of security vulnerabilities compared to a custom JWT implementation.

### Negative

1. **Beta Instability:** NextAuth v5 is currently in Beta, meaning API signatures and documentation might change, requiring careful version pinning (`5.0.0-beta.31`).
2. **Configuration Complexity:** Configuring Edge-compatible database adapters and middleware in the App Router architecture requires advanced setup and strict typing overrides.

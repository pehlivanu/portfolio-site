# ADR 0005: Icon Library Migration (Lucide to React Icons)

**Date:** 2026-07-18
**Status:** Accepted

## Context

The project initially utilized `lucide-react` for its clean, consistent iconography. However, as the portfolio expanded to showcase highly specific technical projects, we required specialized brand icons (e.g., Next.js, Python, Java, Docker) that were not available in the Lucide set. This led to a fragmented approach where we mixed Lucide icons with custom SVGs, complicating maintenance and styling.

## Decision

We migrated the entire application from `lucide-react` to **React Icons** (`react-icons`), utilizing the `Lu` (Lucide) subset to maintain the original aesthetic while gaining access to thousands of other brand and utility icons.

## Consequences

### Positive

1. **Unified API:** All icons, whether utility UI elements or specific tech brands (via `react-icons/fa`, `react-icons/si`, etc.), are imported and styled using the exact same API and properties.
2. **Extensive Selection:** Immediate access to specialized icons without needing to manually hunt for, download, and clean raw SVGs.
3. **Bundle Optimization:** React Icons supports precise tree-shaking, ensuring only the specific icons imported are included in the final production build.

### Negative

1. **Refactoring Effort:** Required a comprehensive, codebase-wide replacement of all Lucide imports and component names.
2. **Dependency Size Risk:** If tree-shaking is improperly configured in the build toolchain, importing from root paths in React Icons can severely bloat the application bundle.

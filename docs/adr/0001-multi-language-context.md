# ADR 0001: Multi-language Support using React Context

**Date:** 2025-12-13
**Status:** Accepted

## Context

The portfolio requires internationalization (i18n) to support multiple languages (English, Romanian, German, French) to cater to diverse recruiters and clients. Many standard i18n libraries (e.g., `next-i18next`, `react-intl`) are heavy, require complex setup with the Next.js App Router, and often introduce unwanted dependencies into the client bundle.

## Decision

We decided to implement a custom, lightweight multi-language solution using native **React Context API** (`LanguageContext`) and a centralized localization dictionary, rather than pulling in a large third-party library.

## Consequences

### Positive

1. **Zero External Dependencies:** We avoid bloating `package.json` and the client bundle with massive i18n libraries.
2. **Total Control:** The custom implementation allows for instant, client-side language switching without triggering hard page reloads or complex routing redirects.
3. **Type Safety:** The localization dictionaries are statically typed via TypeScript, ensuring that missing translation keys are caught at compile-time rather than runtime.

### Negative

1. **Maintenance Overhead:** The development team is solely responsible for maintaining the `LanguageContext` and ensuring all new text is abstracted into the dictionary files.
2. **Lack of Advanced i18n Features:** Features like automatic pluralization, deep interpolation, and automatic localized routing (e.g., `/de/about`) are not supported out-of-the-box and would need to be built manually if required.

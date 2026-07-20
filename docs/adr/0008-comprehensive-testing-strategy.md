# ADR 0008: Comprehensive Testing Strategy (Unit & E2E)

**Date:** 2026-07-20
**Status:** Accepted

## Context

As the Antigravity IDE Portfolio has grown in complexity (managing multiple contexts, complex state, animations, and form submissions), ensuring that the application works flawlessly across updates is critical. We needed a structured, comprehensive approach to testing that verifies both granular component logic and high-level user workflows, without relying on fragile snapshot testing.

## Decision

We have adopted a dual-layered testing architecture:

1.  **Unit and Integration Testing (Jest & React Testing Library):**
    - **Focus:** Core business logic, individual component rendering, and isolated interactions.
    - **Tooling:** `Jest` for the test runner and assertions, combined with `@testing-library/react`.
    - **Interaction Simulation:** We enforce the use of `@testing-library/user-event` over basic `fireEvent` to accurately simulate complex user interactions (typing, clicking, pointer events) as they occur in a real browser.
    - **Time Control:** For components with time-delayed state changes (e.g., `TitleBar` boot sequences, `ContactForm` cooldowns), we use `jest.useFakeTimers()` in combination with `act()` and `jest.runOnlyPendingTimers()` to deterministically test state transitions without slow, flaky delays.
    - **Coverage Threshold:** We aim for high statement and line coverage (>90%), prioritizing critical user paths and complex logical branches.

2.  **End-to-End (E2E) Testing (Playwright):**
    - **Focus:** Full application workflows, cross-browser compatibility, and critical user journeys (e.g., navigating the IDE, filling out forms, changing themes/languages).
    - **Tooling:** `Playwright` is configured to run tests against a built version of the application or the dev server, simulating a real user in a headless browser environment.

## Consequences

### Positive

1.  **High Confidence:** The combination of detailed component interaction tests and full-flow E2E tests guarantees that UI updates or dependency bumps will not silently break the application.
2.  **Resilience against Flakiness:** By avoiding snapshot testing (which breaks on trivial styling changes) and using fake timers for asynchronous UI updates, the test suite remains fast and deterministic.
3.  **Real User Simulation:** Testing through `user-event` and Playwright ensures we are testing the application exactly as the user experiences it, finding accessibility and DOM structure issues early.

### Negative

1.  **Maintenance Overhead:** Writing comprehensive tests, particularly mocking contexts (Navigation, Theme, Language) and `next-auth`, requires additional boilerplate and maintenance.
2.  **Learning Curve:** Developers must understand the nuances of `act(...)`, fake timers, and proper DOM querying (`getByRole`, etc.) to write effective, warning-free tests.

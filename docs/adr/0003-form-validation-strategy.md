# ADR 0003: Form Validation with React Hook Form and Zod

**Date:** 2026-07-18
**Status:** Accepted

## Context

The contact form requires complex validation logic (e.g., proper email formatting, minimum message length, and preventing injection attacks). Historically, this was handled using basic controlled React state (`useState`) and manual validation functions. As the form grew in complexity and we introduced multi-language error messages, the manual state management became brittle, verbose, and prone to re-render performance issues.

## Decision

We implemented **React Hook Form** for form state management coupled with **Zod** for schema-based validation.

## Consequences

### Positive

1. **Performance:** React Hook Form embraces uncontrolled components and refs, drastically reducing the number of React re-renders triggered by keystrokes.
2. **Type Safety End-to-End:** Zod allows us to define a strict schema that automatically infers TypeScript interfaces. We can share this exact schema between the client-side form validation and the server-side API route validation.
3. **Developer Experience:** Handling complex validation rules, asynchronous checks, and dynamically localized error messages is significantly cleaner and requires far less boilerplate.

### Negative

1. **Learning Curve:** Developers accustomed to standard controlled inputs must adapt to the `register` and `Controller` patterns.
2. **Bundle Size:** Adds two new dependencies (`react-hook-form` and `zod`) to the client bundle, although their footprint is relatively small and highly optimized.

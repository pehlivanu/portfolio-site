# 📅 Project Management & Roadmap

This document outlines the development roadmap, organized by **Epics** and **User Stories**. It serves as a guide for the project's evolution from a spontaneous idea to a production-grade showcase.

---

## 📌 Epic 1: Core Foundation & Architecture
**Goal**: Establish a robust, scalable, and type-safe foundation using Next.js 15 and Tailwind CSS.

-   **Story 1.1**: Initialize Next.js 15 project with TypeScript and App Router. `[DONE]`
-   **Story 1.2**: Configure Tailwind CSS v4 with a custom theme provider for VS Code colors. `[DONE]`
-   **Story 1.3**: Set up the root layout structure (`IDELayout`) to mimic the VS Code window (Title Bar, Sidebar, Main Area, Status Bar). `[DONE]`
-   **Story 1.4**: Implement a global `NavigationContext` to manage state (active section, sidebar visibility, contact form status). `[DONE]`

## 📌 Epic 2: UI/UX Design System (The "Antigravity" Theme)
**Goal**: Create an immersive, pixel-perfect replica of the Antigravity IDE interface that feels native and responsive.

-   **Story 2.1**: **Sidebar & Activity Bar**: Create a navigation bar with interactive icons that switch active views. `[DONE]`
-   **Story 2.2**: **Status Bar**: Implement a dynamic footer showing real-time context (Git branch, Language, Cursor Position, Notifications). `[DONE]`
-   **Story 2.3**: **Explorer Panel**: Build a file-tree navigation component that links to different page sections. `[DONE]`
-   **Story 2.4**: **Mobile Responsiveness**: Design a mobile-first experience where the Sidebar becomes a bottom/side drawer and the layout adapts to small screens. `[DONE]`
-   **Story 2.5**: **Animations**: Use Framer Motion for smooth page transitions, hover effects, and "focus mode" interactions. `[DONE]`

## 📌 Epic 3: Content Sections
**Goal**: Display portfolio content in an engaging, readable, and interactive format.

-   **Story 3.1**: **Hero Section**: Design a striking landing view with animated typography ("Liviu .io") and a clear call to action. `[DONE]`
-   **Story 3.2**: **Experience Timeline**: Build an interactive timeline for career history.
    -   *Acceptance Criteria*: Expandable cards, "focus" blur effect on inactive items, bulleted job descriptions. `[DONE]`
-   **Story 3.3**: **Projects Carousel**: Create an infinite, circular scrolling carousel for project showcases.
    -   *Acceptance Criteria*: Snap scrolling, infinite loop illusion, hover effects on cards. `[DONE]`
-   **Story 3.4**: **Contact Form**: Develop a functional contact form with validation.
    -   *Acceptance Criteria*: Visual style matching "Experience" cards, success state updates the Status Bar. `[DONE]`

## 📌 Epic 4: Optimization & Performance
**Goal**: Ensure the application achieves top-tier performance scores and is accessible to all users.

-   **Story 4.1**: **Lighthouse Audit**: Analyze and fix issues to achieve 90+ scores in Performance, Accessibility, Best Practices, and SEO. `[TODO]`
-   **Story 4.2**: **SEO Implementation**: Add dynamic metadata, Open Graph tags, and a Sitemap for better search engine visibility. `[TODO]`
-   **Story 4.3**: **Asset Optimization**: Optimize images and fonts to minimize First Contentful Paint (FCP). `[TODO]`
-   **Story 4.4**: **Accessibility (a11y)**: Ensure full keyboard navigation support and proper ARIA labels for all interactive elements. `[TODO]`

## 📌 Epic 5: Testing & Quality Assurance
**Goal**: Guarantee code reliability and prevent regressions with a comprehensive testing suite.

-   **Story 5.1**: **Unit Testing Setup**: Configure Jest and React Testing Library. `[TODO]`
-   **Story 5.2**: **Component Tests**: Write unit tests for critical UI components (Hero, Experience, Projects). `[TODO]`
-   **Story 5.3**: **E2E Testing Setup**: Configure Playwright for end-to-end testing. `[TODO]`
-   **Story 5.4**: **Critical Flow Tests**: Write E2E tests for the Navigation flow and Contact Form submission. `[TODO]`

## 📌 Epic 6: Documentation & Maintainability
**Goal**: Ensure the project is easy to understand, contribute to, and maintain.

-   **Story 6.1**: **Project Documentation**: Create a comprehensive `README.md` and `PROJECT_MANAGEMENT.md`. `[IN PROGRESS]`
-   **Story 6.2**: **Code Documentation**: Add JSDoc comments to all exported components and hooks. `[TODO]`
-   **Story 6.3**: **Code Quality**: Enforce strict TypeScript rules (no `any`) and configure Prettier/ESLint for consistent formatting. `[TODO]`

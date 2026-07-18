# 🚀 Antigravity IDE Portfolio

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?style=flat-square&logo=framer)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)

A highly interactive, professional portfolio website designed to mimic the [**Antigravity IDE**](https://antigravity.google/) (Google's internal advanced coding environment). Built with the latest web technologies, it serves as a showcase of modern frontend development best practices, featuring a fully responsive design, immersive animations, and a unique "Developer Experience" (DX) for visitors.

**Live Demo:** [liviuionesi.com](https://liviuionesi.com)

---

## ✨ Key Features

- **🎨 Antigravity IDE Aesthetic**: A faithful recreation of the powerful Antigravity UI, including:
  - **Activity Bar**: Functional sidebar with navigation and external links.
  - **Explorer Panel**: File-tree navigation for project sections.
  - **Editor Area**: The main content area where "files" (sections) are displayed.
  - **Status Bar**: Real-time context awareness (Git branch, language, cursor position).
  - **Command Palette**: Fully functional search/command bar (accessible via UI).
- **📱 Fully Responsive**: Optimized for all devices. Mobile users get a native-app-like experience with specialized drawers and touch interactions.
- **⚡ High Performance**: Built on Next.js 16 App Router with React Compiler enabled and lazy-loaded Framer Motion for blazing fast load times.
- **🎭 Immersive Animations**: Powered by Framer Motion for smooth transitions, scroll-linked animations, and interactive hover effects.
- **🌍 Internationalization**: Built-in multi-language support (English, Romanian, German, French) managed cleanly via React Context.
- **📄 Printable CVs**: Dedicated `/cv` and `/cv-ats` routes specifically designed to be printed into beautiful visual or ATS-friendly PDF formats.
- **🔒 Secure Contact & Admin Portal**: Working contact form with Google Auth (via NextAuth), Nodemailer integration, and admin-protected features.
- **🛠️ Best Practices**:
  - **Type Safety**: Strict TypeScript implementation.
  - **Modern Styling**: Tailwind CSS v4 for utility-first, maintainable styling.
  - **Component Architecture**: Modular, reusable components with clear separation of concerns.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & React Compiler)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Authentication**: [NextAuth.js v5](https://next-auth.js.org/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email**: Nodemailer
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🧪 Quality & Automation

This project is built to "take care of itself" with a robust suite of automated quality gates:

- **Unit Testing**: A comprehensive suite of component tests running on **Jest** and **React Testing Library** guarantees UI reliability.
- **Continuous Maintenance**: **Dependabot** is configured (`.github/dependabot.yml`) to automatically submit grouped PRs for safe minor/patch dependency updates every week.
- **Code Quality Guardrails**: Pre-commit hooks powered by **Husky** and **lint-staged** automatically run **ESLint v10** and **Prettier** on staged files, guaranteeing that no poorly formatted or lint-failing code ever enters the repository.

## 💡 Why Next.js Over Standard React (Vite/CRA)?

While traditional Single Page Applications (SPAs) built with React and Vite/CRA are great for internal tools, this portfolio leverages the **Next.js App Router** for several critical architectural advantages:

1. **Zero-JavaScript Static Rendering**: Next.js pre-compiles the React component tree into static HTML at build time. The browser renders the page instantly before downloading a single byte of JavaScript, resulting in a perfect Time To First Byte (TTFB).
2. **Server Components (RSC)**: Components execute on the server by default. This keeps heavy dependencies off the client bundle—we only ship JavaScript for the specific interactive sections that require it via the `"use client"` directive.
3. **Built-in SEO & Metadata**: Unlike SPAs where crawlers must execute JavaScript to index content, Next.js serves fully populated HTML, making SEO, Open Graph tags, and semantic metadata work flawlessly out of the box.
4. **Unified API Routes**: Instead of spinning up and maintaining a separate Node.js/Express backend, Next.js allows serverless API routes to live directly alongside the frontend code.
5. **Advanced Optimizations**: Next.js automatically optimizes images, pre-fetches linked routes in the background, and seamlessly integrates the brand-new **React Compiler** to natively memoize the entire application without manual `useMemo` hooks.

### 🏆 Lighthouse & Performance Impact

Because of these architectural decisions (Server Components, Static Pre-rendering, and Lazy-loaded chunks), this application achieves **near-perfect 100/100 Lighthouse scores** across Performance, Accessibility, Best Practices, and SEO—even while hosted entirely on **Vercel's Free Tier** (Hobby plan).

**If this were built with standard Create React App (CRA):**

- **Performance** would drop significantly (estimated 50-70 range) because the browser would have to download, parse, and execute the entire monolithic JavaScript bundle (including heavy libraries like Framer Motion) before rendering a single pixel of the UI, resulting in a blank white screen during initial load.
- **SEO** would be virtually non-existent (estimated 40-50 range) because web crawlers would only see an empty `<div id="root"></div>` rather than the rich, semantic HTML structure generated at build time.

## 📂 Project Structure

```bash
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout (HTML/Body structure)
│   ├── page.tsx          # Main entry point (Home page)
│   └── globals.css       # Global styles and Tailwind directives
├── components/           # Reusable UI components
│   ├── layout/           # Structural components (Sidebar, TitleBar, Footer, etc.)
│   ├── sections/         # Page sections (Hero, Experience, Projects, Contact)
│   └── ui/               # Generic UI elements (Buttons, Inputs, Cards)
├── context/              # React Context providers (Navigation, Theme, Language)
├── data/                 # Static data files (Projects, Experience, multi-language support)
└── hooks/                # Custom React hooks (useScrollSpy, etc.)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed.
- npm, yarn, or pnpm.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/portfolio-site.git
    cd portfolio-site
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables:**
    Copy the sample environment file and configure it:

    ```bash
    cp .env.example .env.local
    ```

    _Update `.env.local` with your Google OAuth credentials, SMTP settings, and the Admin email._

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 💎 Commercial Use

This project is a premium template intended for sale.

- **Source Code**: Private / Commercial.
- **License**: Single-use or Multi-use commercial license (depending on purchase).
- **Resale**: Redistribution of the source code is strictly prohibited.

## 🎨 Customization

This template is designed to be easily customizable for your portfolio needs.

- **Theme Colors**: Edit `src/app/globals.css` to modify the CSS variables.
- **Content**: Update `src/data/` files to change the portfolio content and translations.

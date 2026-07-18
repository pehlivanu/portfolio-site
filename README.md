# 🚀 Antigravity IDE Portfolio

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-purple?style=flat-square&logo=framer)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat-square&logo=vercel)

A highly interactive, professional portfolio website designed to mimic the [**Antigravity IDE**](https://antigravity.google/) (Google's internal advanced coding environment). Built with the latest web technologies, it serves as a showcase of modern frontend development best practices, featuring a fully responsive design, immersive animations, and a unique "Developer Experience" (DX) for visitors.

**Live Demo:** [liviuionesi.vercel.app](https://liviuionesi.vercel.app)

---

## ✨ Key Features

- **🎨 Antigravity IDE Aesthetic**: A faithful recreation of the powerful Antigravity UI, including:
    - **Activity Bar**: Functional sidebar with navigation and external links.
    - **Explorer Panel**: File-tree navigation for project sections.
    - **Editor Area**: The main content area where "files" (sections) are displayed.
    - **Status Bar**: Real-time context awareness (Git branch, language, cursor position).
    - **Command Palette**: Fully functional search/command bar (accessible via UI).
- **📱 Fully Responsive**: Optimized for all devices. Mobile users get a native-app-like experience with specialized drawers and touch interactions.
- **⚡ High Performance**: Built on Next.js 15 App Router for server-side rendering and blazing fast load times.
- **🎭 Immersive Animations**: Powered by Framer Motion for smooth transitions, scroll-linked animations, and interactive hover effects.
- **🌍 Internationalization**: Built-in multi-language support (English, Romanian, German, French) managed cleanly via React Context.
- **📄 Printable CVs**: Dedicated `/cv` and `/cv-ats` routes specifically designed to be printed into beautiful visual or ATS-friendly PDF formats.
- **🔒 Secure Contact & Admin Portal**: Working contact form with Google Auth (via NextAuth), Nodemailer integration, and admin-protected features.
- **🛠️ Best Practices**:
    - **Type Safety**: Strict TypeScript implementation.
    - **Modern Styling**: Tailwind CSS v4 for utility-first, maintainable styling.
    - **Component Architecture**: Modular, reusable components with clear separation of concerns.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Authentication**: [NextAuth.js v5](https://next-auth.js.org/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email**: Nodemailer
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

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
    *Update `.env.local` with your Google OAuth credentials, SMTP settings, and the Admin email.*

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

-   **Theme Colors**: Edit `src/app/globals.css` to modify the CSS variables.
-   **Content**: Update `src/data/` files to change the portfolio content and translations.

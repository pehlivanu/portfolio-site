import NextAuth from "next-auth";

export const experience = [
  {
    id: 1,
    type: "senior",
    role: "Senior Software Developer",
    company: "DAT Group",
    companySize: "501-1,000 employees",
    industry: "Automotive Software",
    locationType: "Remote / Hybrid",
    websiteUrl: "https://www.dat.eu",
    period: "Sep 2020 - Mar 2026",
    summary: `Senior full-stack developer on the Costing Applications team behind SilverDAT 3 "calculate", the insurer-recognized standard for vehicle repair-cost calculation. Used industry-wide by workshops, dealers, appraisers, insurers, banks, and manufacturers across 70,000+ vehicle variants.`,
description: `*   Extended, maintained, and tested legacy Java EE services (SOA/SOAP monorepo with JavaScript/React frontends), adapting SoapUI and manual test suites as services evolved, and adding TestNG/Mockito coverage for changes.
*   Architected and owned new Spring Boot services end to end to replace legacy Java EE — clean N-Tier architecture with strict DTO-mapping, centralized error handling, and MDC-based distributed tracing — exposing contract-first, HATEOAS-compliant REST APIs (OpenAPI), backed by JUnit 5/MockMvc integration tests and Postman Collections with automated tests.
*   Managed the data layer with JPA/Hibernate: PostgreSQL replaced the legacy SQL databases (mainly Oracle SQL) and MongoDB introduced NoSQL to a previously SQL-only stack.
*   Rebuilt legacy JavaScript frontends as modern, responsive React/TypeScript components, optimizing the architecture with Effector (state management) and PrimeReact.
*   CI/CD: Built the legacy platform with Gradle on Jenkins and deployed to test and production; new services shipped via the Gradle Wrapper. Delivered to Azure Kubernetes (AKS) through build and release pipelines with Helm charts and NGINX ingress. Used Docker Compose for local development. Migrated source control from GitLab to Azure Repos. Legacy runs 6 releases/year on a Kanban board in Jira, while new services moved to continuous delivery.
*   Modernized the inherited Spring Boot parent build (OpenRewrite for automated version bumps past the BOM ceiling, a Renovate bot on Azure for dependency updates) and moved configuration from folder-based properties to Spring profiles.
*   Built an AI-augmented workflow across IntelliJ IDEA (CodeGPT on a local Azure LLM), Cursor, and Windsurf to document and analyze legacy code, extract requirements, and implement new services kept 100% SonarQube-clean.
*   Drove technical direction by prototyping and evaluating better approaches whenever I found one — proving them out in working code and running team workshops (REST/API-first design, modern React and Next.js, OpenRewrite for automated upgrades, Dependabot, and a Spring Cloud Gateway assessment to replace the custom DAT gateway).`,
    tech: [
      { category: "Backend", skills: ["Java 17+", "Jakarta EE", "Spring Boot 3+", "Spring Cloud", "REST APIs", "OpenAPI", "Microservices", "SOA / SOAP", "WSDL"] },
      { category: "Frontend", skills: ["JavaScript", "HTML", "CSS", "React", "TypeScript", "Effector", "PrimeReact"] },
      { category: "Databases", skills: ["PostgreSQL", "Oracle", "MongoDB", "H2", "JPA", "Hibernate", "JDBC"] },
      { category: "Testing", skills: ["TestNG", "Mockito", "JUnit 5", "MockMvc", "Testcontainers"] },
      { category: "CI/CD & DevOps", skills: ["Jenkins", "GitLab CI/CD", "Gradle", "Node.js", "npm", "Docker", "Azure", "Kubernetes (AKS)", "Helm", "NGINX Ingress", "OpenRewrite", "Renovate", "Dependabot"] },
      { category: "Tools", skills: ["IntelliJ IDEA", "Postman", "SoapUI", "SQL Developer", "Cursor", "Windsurf", "Azure OpenAI"] },
      { category: "Methodology", skills: ["Agile", "Kanban", "Jira"] },
    ],
  },
  {
    id: 2,
    type: "mid",
    role: "Fullstack Software Developer",
    company: "evia solutions GmbH",
    companySize: "51-200 employees",
    industry: "IT Services & Consulting",
    locationType: "On-site",
    websiteUrl: "https://www.evia.de",
    period: "Feb 2016 - Aug 2020",
    summary: `Developer and consultant at a cross-industry IT system house, delivering custom and standard software across the Banking, Insurance, and enterprise Microsoft domains. Worked in cross-functional Scrum and SAFe teams, from legacy Java EE maintenance to a greenfield microservices migration.`,
    description: `*   Maintained, extended, deployed, and tested insurance-broker portals for Wüstenrot & Württembergische — business-critical Java EE 8 applications (JSF/Spring/Hibernate, JSP) on IBM WebSphere 7 and 8.5 with IBM DB2 and LDAP/Active Directory, the stable revenue base that funded the company's growth from ~16 to 200+ employees — hardening them with penetration testing to OWASP standards and using Rational Application Developer 9.1 and iText for document and PDF generation (Apache Directory Studio, Postman, Eclipse, SVN, Cherwell).
*   Helped establish the new "Microsoft Delivery" practice as primary developer, building an employee-onboarding solution on SharePoint Online (digital contract creation, onboarding journey, task management) and automating enterprise business processes with Microsoft Flow and Logic Apps (Office 365, JSON).
*   Earned the Pega Certified System Architect (CSA) certification in BPM-oriented development and Microsoft 70-480 (HTML5, JavaScript & CSS3, incl. jQuery and AJAX) along the way.
*   Built Daimler DSS "Digital Sales Solutions" — a greenfield banking application digitizing automobile-credit applications across multiple countries — developing modern Micronaut / JEE 11 microservices (Oracle SQL, PostgreSQL 12, Docker) behind an Angular frontend, with REST/SOAP integration services (OpenAPI) for B2B data exchange.
*   Owned developer testing and QA (JUnit, SonarQube) and CI/CD to test and integration environments (Git, Jenkins), supported the test team's automated end-to-end suites (Protractor, Cucumber), and delivered in Scrum and then SAFe across frontend, test, and DevOps sub-teams (Jira, Confluence, MS Teams).`,
    tech: [
      { category: "Backend", skills: ["Java EE (JEE 8 / 11)", "Micronaut", "Spring", "Hibernate", "JSF", "JSP", "iText", "REST", "SOAP", "OpenAPI"] },
      { category: "Frontend", skills: ["Angular", "HTML5", "CSS3", "JavaScript", "jQuery", "AJAX"] },
      { category: "Databases", skills: ["Oracle SQL", "PostgreSQL", "IBM DB2", "LDAP / Active Directory"] },
      { category: "CI/CD & DevOps", skills: ["Git", "SVN", "Jenkins", "Maven", "Docker", "IBM WebSphere (7 / 8.5)"] },
      { category: "Testing & Quality", skills: ["JUnit", "SonarQube", "Protractor", "Cucumber", "OWASP / Penetration Testing"] },
      { category: "Tools", skills: ["IntelliJ IDEA", "Eclipse", "Rational Application Developer", "SharePoint", "Microsoft Flow", "Logic Apps", "Office 365", "Apache Directory Studio", "Postman", "Jira", "Confluence", "Cherwell", "MS Teams"] },
      { category: "Methodology", skills: ["Scrum", "SAFe", "BPM"] },
      { category: "Certifications", skills: ["Pega CSA", "Microsoft 70-480"] },
    ],
  },
  {
    id: 3,
    type: "junior",
    role: "Junior Software Developer",
    company: "PRODYNA AG",
    companySize: "201-500 employees",
    industry: "IT Consulting",
    locationType: "On-site / Travel",
    websiteUrl: "https://www.prodyna.com",
    period: "Nov 2014 - Jan 2016",
    summary: `Developer and consultant at an IT consultancy, embedded on-site with a major enterprise client to deliver their portal project end to end — from consulting and design through implementation and testing.`,
    description: `*   Developed and delivered a Liferay 6.0 portal solution, with a Java 6 EE and MySQL backend and a JSP, HTML, CSS, JavaScript, and AlloyUI frontend.
*   Deployed and tested the applications on Apache Tomcat, ran CI/CD with Jenkins and Maven, and integrated SonarQube into the build process to safeguard code quality.
*   Delivered in agile Scrum teams (Jira, Confluence), and earned the Oracle Certified Professional Java Programmer (OCPJP) and Oracle Certified Expert Java EE 6 Web Component Developer (OCE WCD) certifications during the role.`,
    tech: [
      { category: "Backend", skills: ["Java 6 EE", "Liferay 6.0", "JSP"] },
      { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "AlloyUI"] },
      { category: "Databases", skills: ["MySQL"] },
      { category: "CI/CD & DevOps", skills: ["Apache Tomcat", "Jenkins", "Maven"] },
      { category: "Testing & Quality", skills: ["SonarQube"] },
      { category: "Tools", skills: ["Jira", "Confluence"] },
      { category: "Methodology", skills: ["Scrum"] },
      { category: "Certifications", skills: ["OCPJP", "OCE WCD"] },
    ],
  },
  {
    id: 4,
    type: "intern",
    role: "Internship in Software Development",
    company: "Alpine Electronics R&D Europe",
    companySize: "1,000+ employees",
    industry: "Automotive Electronics",
    locationType: "On-site",
    websiteUrl: "https://www.alpine.de/",
    dualStudy: "ADV Böblingen",
    period: "Sep 2012 - Aug 2013",
    summary: `System Integration Intern in the OEM Car Infotainment division, developing software modules for the internal "Alpine Test Automation Framework".`,
    description: `*   Developed and extended the internal Alpine Test Automation Framework (C#, .NET 4.0) by building automated testing modules for hardware interfaces such as Bluetooth, RDS signal generators, MOST/CAN buses, climate chambers, and CD/DVD changer robots.
*   Designed and implemented the "Alpine Voltage Curve Editor" — which earned a top 1.0 grade as a final vocational thesis — and modernized the graphical user interfaces of multiple existing test modules using WPF and the MVVM pattern.
*   Ensured architectural robustness across the test framework by applying UML modeling and design patterns in SharpDevelop.`,
    tech: [
      { category: "Backend", skills: ["C#", ".NET 4.0", "UML", "Design Patterns", "SharpDevelop","StyleCop"] },
      { category: "Frontend & Mobile", skills: ["WPF", "MVVM", "Android SDK"] },
      { category: "Hardware & Protocols", skills: ["Bluetooth", "CAN", "MOST", "RDS"] },
    ],
  },
];

export const education = [
  {
    id: 1,
    type: "dual-study",
    studyField: "Dual Study",
    degree: "State-Certified Computer Scientist (Staatlich geprüfter Informatiker)",
    school: "Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)",
    url: "https://gds2.de",
    location: "Böblingen, Germany",
    year: "2011 - 2014",
    summary: "Intensive dual study program focusing on Software Engineering, Database Systems, and Project Management.",
    description: "3-year vocational training (Berufskolleg). Included a one-year practical internship at Alpine Electronics R&D Europe GmbH with the thesis: \"Alpine Voltage Curve Editor\" (Graded: Excellent / Sehr gut).",
    grade: "Passed with Commendation (Belobigung)",
  },
  {
    id: 2,
    type: "master",
    studyField: "Master",
    degree: "Master",
    school: "West University of Timișoara (Universitatea de Vest din Timișoara)",
    url: "https://info.uvt.ro/en/",
    location: "Timisoara, Romania",
    year: "2009 - 2011",
    summary: "Specialized training in Pedagogy and Didactics for Mathematics education.",
    description: "Advanced academic program focusing on complex mathematical models and educational methodologies. The first year of this Master's was completed abroad at the University of Stuttgart via the Erasmus program. Core coursework included: Vectorial Analysis, Advanced Algebra and Geometry, Iterative Methods, Statistical and Probabilistic Methods, and Educational Management Software.",
    grade: "7.70 / 10 (Year 1) & 7.66 / 10 (Year 2)",
  },
  {
    id: 3,
    type: "bachelor",
    studyField: "Bachelor",
    degree: "Bachelor",
    school: "West University of Timișoara (Universitatea de Vest din Timișoara)",
    url: "https://info.uvt.ro/en/",
    location: "Timisoara, Romania",
    year: "2006 - 2009",
    summary: "Dual major providing distinct foundations in both abstract Mathematics and Applied Computer Science.",
    description: "Dual-focus curriculum bridging theoretical mathematics with applied computer science and software engineering. Core coursework included: Data Structures, Artificial Intelligence, Database Systems, Computer Networks, Computational Geometry, Logical and Functional Programming, and Mathematical Modeling/Simulation.",
    grade: "10 / 10 (Final Exam) | 9.02 / 10 (Overall Average)",
  },
  {
    id: 4,
    type: "high-school",
    studyField: "College",
    degree: "High School Diploma (Baccalaureate)",
    school: "National College of Computer Science \"Spiru Haret\" Suceava",
    url: "https://www.cni-sv.ro/",
    location: "Suceava, Romania",
    year: "2002 - 2006",
    summary: "Intensive Computer Science and Mathematics curriculum.",
    description: "Profile: Mathematics & Computer Science (Intensive).",
    grade: "9.81 / 10",
  },
];

export const projects = [
  {
    id: 1,
    title: "Filmpire Microservices Platform",
    description:
      "An end-to-end enterprise microservices platform for movie discovery, managed from idea to delivery-ready product using a GitHub Project Kanban boards (Epics, Stories, Tasks). Eight independent Java 25 / Spring Boot 3.5 services including Spring Cloud (Eureka, API Gateway), backed by a hybrid PostgreSQL/MongoDB strategy and a Redis cache that falls back to the TMDB API. Integrates Spring AI (Whisper/GPT-4) over both REST and gRPC. Built to strict modern standards — record DTOs, constructor injection, virtual threads — and a rigorous test bar (JUnit 5, Testcontainers, 85% JaCoCo coverage) wired into GitHub Actions CI/CD. Deployed using Kubernetes on Minikube",
    tech: ["Java 25", "Spring Boot 3.5", "Spring Cloud", "PostgreSQL", "MongoDB", "Redis", "Spring AI", "gRPC", "REST", "JUnit 5", "Testcontainers", "JaCoCo", "GitHub Actions", "Docker", "Podman", "Kubernetes"],
    githubUrl: "https://github.com/pehlivanu/filmpire-microservices",
    deployUrl: "",
  },
  {
    id: 2,
    title: "Defense Asset Manager",
    description:
      "An enterprise-grade React 19 application for asset and personnel management in the defense sector, enforcing a strict Feature-Based (Domain-Driven) architecture to support SAFe delivery across multiple teams. Fully typed contract-first against OpenAPI 3.1 and built on Vite for instant HMR. Uses Zustand with Immer for immutable state, Mock Service Worker for offline REST mocking, and high-contrast Material UI v9 components, with safety-critical UX such as destructive-action confirmations.",
    tech: ["React 19", "Vite", "Zustand", "Material UI v9", "MSW", "OpenAPI 3.1", "TypeScript", "Vitest"],
    githubUrl: "https://github.com/pehlivanu/defense-asset-manager",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Antigravity IDE Portfolio",
    description:
      "A highly interactive developer portfolio that meticulously recreates the aesthetic of Google's Antigravity IDE — activity bar, file-tree explorer, editor area, live status bar and a working command palette — built on the Next.js 15 App Router with immersive Framer Motion micro-animations. Features automated CV generation to PDF in multiple templates and languages, plus a dynamic contact form that uses the Geolocation API to compute and display the physical distance between visitor and developer.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Geolocation API", "PDF Generation", "Framer Motion"],
    githubUrl: "https://github.com/pehlivanu/portfolio-site",
    deployUrl: "https://liviuionesi.vercel.app",
  },
  {
    id: 4,
    title: "Filmpire Frontend",
    description:
      "A modern, interactive movie-discovery application in React 17 and Redux Toolkit, serving as the dedicated frontend client for the 8-service Filmpire microservices backend. Integrates the TMDB API for browsing categories and managing favorites, and its defining feature is an Alan AI SDK integration providing a fully conversational voice interface. Quality enforced with Jest / React Testing Library and ESLint (Airbnb).",
    tech: ["React 17", "Material-UI", "Redux Toolkit", "Alan AI"],
    githubUrl: "https://github.com/pehlivanu/filmpire",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
  {
    id: 5,
    title: "Knowledge Base Platform",
    description:
      "An enterprise-ready localized documentation system built on Next.js 16 and React 19 Server Components for a minimal client payload. Acts as a static site generator that turns a simple collection of Markdown (.md) files into a complete wiki website. Features deep internationalization via next-intl handled at the middleware edge, with internal documentation secured behind custom edge middleware verifying HttpOnly cookies.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "next-intl", "Markdown"],
    githubUrl: "https://github.com/pehlivanu/knowledge-base-platform",
    deployUrl: "https://phenix-wiki.vercel.app",
  },
  {
    id: 6,
    title: "DevOps Toolchain Showcase",
    description:
      "A fully containerized, declarative CI/CD toolchain demonstrating enterprise DevOps practices, orchestrated via Podman Compose. A customized Jenkins server uses Docker-outside-of-Docker (DooD) to build and push application images through a multi-stage Jenkinsfile. Automates JaCoCo coverage reporting and artifact publishing to JFrog Artifactory, and uses custom Bash + curl + jq scripting to push test metrics to external ALM/MQC systems via REST APIs.",
    tech: ["Jenkins", "JFrog Artifactory", "Podman", "Gradle", "Java 17"],
    githubUrl: "https://github.com/pehlivanu/devops-toolchain-showcase",
    deployUrl: "",
  },
  {
    id: 7,
    title: "DevFlow - Full-Stack Q&A Platform",
    description:
      "A sophisticated, community-driven developer Q&A platform built natively on the Next.js 14 App Router with Server Actions in place of a separate API tier. Features a robust tagging system, global search across questions, answers, users and tags, and personalized recommendation feeds. An advanced reputation-and-badge engine gamifies participation, authentication runs through NextAuth.js (Google/GitHub OAuth + credentials) with end-to-end Zod validation, and the OpenAI API generates comprehensive AI answers and code snippets.",
    tech: ["Next.js 14", "TypeScript 5", "MongoDB Atlas", "Tailwind CSS", "OpenAI API", "NextAuth", "Zod"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 8,
    title: "Python GUI Automation Framework",
    description:
      "A resilient, cross-platform Python desktop application with a Tkinter GUI that controls and automates an Android application. Uses OpenCV template matching to visually detect and interact with dynamic on-device UI elements via the Android Debug Bridge (ADB), rather than any underlying API. Incorporates human-like interaction profiles — coordinate jitter and randomized timing — to evade bot-detection heuristics, and runs either from the GUI or headless as a Linux daemon.",
    tech: ["Python 3.10", "OpenCV", "Tkinter", "ADB", "Bash"],
    githubUrl: "https://github.com/pehlivanu/gui-automation-framework",
    deployUrl: "",
  },
  
  {
    id: 11,
    title: "Alana Windsurf",
    description:
      "A scalable full-stack web application on the Next.js 13+ App Router and React 18+. Provides comprehensive authentication via NextAuth.js — OAuth (Google, GitHub) plus secure email/password credentials — with data persisted in MongoDB through Mongoose. State is managed with React Context and useReducer, forms handled robustly with React Hook Form and Zod, and the UI styled with Material UI and Emotion.",
    tech: ["Next.js 13+", "React 18+", "Material UI", "NextAuth.js", "MongoDB", "Zod"],
    githubUrl: "https://github.com/pehlivanu/alana-windsurf",
    deployUrl: "",
  },
  {
    id: 12,
    title: "Payload E-Commerce Platform",
    description:
      "A comprehensive e-commerce solution pairing the Payload CMS framework with a static Next.js front-end. Ships a fully working backend with an enterprise-grade admin panel that manages both physical products and paywall-restricted content, integrated with Stripe webhooks for secure payment processing.",
    tech: ["Next.js", "Payload CMS", "Stripe", "React Hook Form"],
    githubUrl: "https://github.com/pehlivanu/e-commerce",
    deployUrl: "",
  },
];


export const linkedInProfile = {
  name: "Liviu Ionesi",
  headline: "Tech Lead | Senior Full-Stack Engineer | Java, Spring Boot, React, Next.js",
  location: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck, Germany",
  phone: "+49 1514 6966 832",
  address: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck",
  email: "ionesiliviu@yahoo.com",
  connections: "500+",
  about: "Technical Lead & Senior Full-Stack Engineer. Building the digital backbone of the Automotive and Fintech industries. With over 13 years of experience in engineering high-performance distributed systems, I specialize in technical leadership, modernizing legacy architectures, and delivering scalable, cloud-native solutions.",
  fullBio: `### **Technical Lead & Senior Full-Stack Engineer | Automotive & FinTech Specialist**

With over 13 years of experience in engineering high-performance distributed systems, I specialize in technical leadership, modernizing legacy architectures, and delivering scalable, cloud-native solutions. My career spans from developing critical automation frameworks at **Alpine Electronics** to driving the digital transformation of enterprise data platforms at **DAT Group**. I excel at guiding cross-functional teams to build robust software using modern tech stacks.

I bridge the gap between complex backend logic, intuitive frontend experiences, and strategic business goals. My core competencies include:

  * **Technical Leadership & Architecture**: Driving system design and advocating for the migration of monolithic **Java EE** applications to scalable **Microservices** (Spring Boot, Azure) and modern frontends (React/Next.js), significantly improving system resilience.
  * **Full-Stack Engineering Excellence**: Architecting and developing responsive, user-centric interfaces with **React, Next.js, and TypeScript**, seamlessly integrated with robust, secure **Java 21 / Spring Boot** APIs.
  * **DevOps & Quality Culture**: Championing **TDD**, **Clean Code** principles, and establishing CI/CD automation (Azure, GitHub Actions) to ensure high-quality, predictable software delivery. Mentoring engineering teams to elevate their technical standards.
  * **AI-Augmented Engineering**: Pioneering high-velocity software delivery by fusing enterprise-grade rigor (Epics, Agile/Scrum, CI/CD) with advanced AI-integrated workflows (Cursor, Windsurf). This approach accelerates greenfield development and streamlines the refactoring of complex legacy monoliths, effectively reducing technical debt.

---
*Currently seeking a Technical Lead role in Spring Boot and React ecosystems. Open to hybrid opportunities in the Stuttgart area or fully remote positions within Germany.*`,
  avatarUrl: "/images/linkedin-profile.png",
  skills: ["Java", "Spring Boot", "Spring Cloud", "React", "Next.js", "Azure", "Docker", "Kubernetes", "SQL/NoSQL", "IntelliJ IDEA", "AI Tools (Cursor, Windsurf, Antigravity, MCP)"],
  certifications: [
    { name: "Oracle Certified Professional, Java SE 6 Programmer", authority: "Oracle", url: "" },
    { name: "Oracle Certified Expert Java EE 6 Web Components Developer", authority: "Oracle", url: "" },
    { name: "Pega 7.1 Certified System Architect", authority: "Pegasystems", url: "https://pdn.pega.com/pega-academy/verify-certification?fname=Liviu-Lucian&lname=Ionesi" },
    { name: "The Complete Guide to Becoming a Software Architect", authority: "Udemy", url: "https://www.udemy.com/certificate/UC-5a84800c-8893-4d20-97ec-fa513267d795/" },
    { name: "Microservices Architecture - The Complete Guide", authority: "Udemy", url: "https://www.udemy.com/certificate/UC-52b76175-4ab7-464f-9117-baf905ac24c2/" },
    { name: "Spring Boot Microservices and Spring Cloud", authority: "Udemy", url: "http://ude.my/UC-70ca993d-e60a-436f-8673-739a57fe54da" },
    { name: "Azure DevOps Fundamentals for Beginners", authority: "Udemy", url: "https://www.udemy.com/certificate/UC-1ced9814-91c6-4ebc-b656-af2fbeeba0f9/" }
  ],
  languages: [
    { language: "German", proficiency: "Professional Proficiency" },
    { language: "English", proficiency: "Professional Proficiency" },
    { language: "Romanian", proficiency: "Native or Bilingual Proficiency" },
    { language: "French", proficiency: "Elementary Proficiency" }
  ]
};

export const about = {
  greeting: "~/developer/portfolio",
  name: "Liviu",
  suffix: ".io",
  lastName: "NESI",
  description: "Technical Lead & Senior Full-Stack Engineer. Building the digital backbone of the Automotive and Fintech industries. I specialize in Spring Boot microservices, React frontends, and driving high-velocity, enterprise-grade software delivery through AI-augmented workflows.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: "Projects, not just code",
  ctaSecondary: "Contact Me"
};

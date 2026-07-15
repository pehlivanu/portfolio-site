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
    summary: `Part of the Costing Applications team behind SilverDAT 3 "calculate" — the insurer-recognized repair cost calculation (Reparaturkostenkalkulation) standard, producing manufacturer-based repair, maintenance, and accident estimates across 70,000+ vehicle model variants (parts, labor values, paint systems, OEM repair manuals). Used by workshops, dealerships, appraisers, insurers, banks, and manufacturers.`,
    description: `*   Extended, maintained, fixed, and tested legacy Java EE services (SOA/SOAP monorepo with JavaScript/React frontends), running extensive manual and SoapUI test suites and adapting them as services evolved.
*   Architected and owned new Spring Boot services end to end to replace legacy Java EE components, enforcing clean N-Tier architecture with strict DTO-mapping, centralized error handling, and MDC-based distributed tracing for robust observability.
*   Specified and implemented contract-first, HATEOAS-compliant REST APIs with OpenAPI, enabling discoverable contracts and parallel frontend/backend work.
*   Managed the data layer with JPA and Hibernate in the new Spring Boot services, while the legacy application used a more direct JDBC-based approach — across PostgreSQL, Oracle (via SQL Developer) and MongoDB, plus H2 for in-memory testing.
*   Rebuilt legacy JavaScript applications in React and TypeScript as modern, responsive web apps and optimized the frontend architecture using Effector (state management) and PrimeReact components.
*   Ensured comprehensive test coverage by writing TestNG/Mockito unit tests for both newly added legacy code and modern services, alongside a suite of 200+ JUnit 5/MockMvc tests and Postman collections for full Spring-context integration.
*   CI/CD: built the legacy platform with Gradle on Jenkins (deploying to test and production) and new services with the Gradle Wrapper, shipped to Azure Kubernetes (AKS) via build/release pipelines and Helm charts (NGINX ingress), with Docker Compose/Testcontainers for local development; source control migrated from GitLab to Azure Repos. Delivered ~6 releases per year for the legacy platform in a Kanban workflow tracked in Jira.
*   Modernized the inherited Spring Boot parent build: upgrading past 3.0.10 was impossible manually (versions are managed by the Spring Boot BOM), so I prototyped an OpenRewrite Gradle plugin to bump the version automatically and a Renovate bot on Azure for third-party updates (Dependabot evaluated, rejected as paid); application code stayed unchanged while build and configuration moved from folder-based properties to Spring profiles.
*   Built an AI-augmented workflow across IntelliJ IDEA (CodeGPT on a local Azure LLM), Cursor, and Windsurf to document and analyze legacy code, extract requirements, design architecture, and implement new services kept 100% SonarQube-clean.
*   Assessed migrating the custom API gateway to Spring Cloud Gateway and documented it as unfeasible — it requires the reactive Spring WebFlux stack, while the existing gateways are servlet-based.`,
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
    summary: `Delivered critical digital solutions for the Insurance, Automotive, and Banking sectors. Collaborated in cross-functional SCRUM and SAFe teams.`,
    description: `*   **Banking Software Development (Daimler DSS)**: Fullstack development of a custom application for digital automobile credit applications in the **banking** sector. Backend development with **JEE 8** and **Oracle SQL**. Built modules for future **microservices** (Micronaut, PostgreSQL, Docker). **Test automation** with JUnit and SonarQube. **CI/CD** with **Jenkins** and Git. Collaboration in **SAFe** teams using **Jira** and **Confluence**.
*   **Legacy System Scaling**: Maintained and developed core **WebSphere Java EE (JSP)** applications. This critical work provided the stable revenue stream that supported the company's hyper-growth from 16 to 200+ employees.
*   **Backend Integration Services**: Developed high-performance **REST/SOAP** integration services for major **Banking** clients using **Java EE** and **Micronaut**, collaborating with external frontend teams for seamless B2B data exchange.
*   **Insurance Portals (W&W)**: Maintained and extended portals for insurance brokers using Java (JSF, Spring, Hibernate), IBM WebSphere, IBM DB2, LDAP. Security audits per **OWASP** standards.
*   **Microsoft Solutions**: Primary developer for the "Microsoft Delivery" unit. Implemented enterprise intranets and process automation using **SharePoint** and **Microsoft Flow**.
*   **Certifications**: **Pega CSA** (BPM), Microsoft Frontend (HTML5, CSS3, JavaScript).`,
    tech: [
      { category: "Backend", skills: ["Java EE", "Micronaut", "WebSphere"] },
      { category: "Databases", skills: ["Oracle SQL", "PostgreSQL"] },
      { category: "CI/CD & DevOps", skills: ["Docker", "Jenkins", "Git"] },
      { category: "Testing & Quality", skills: ["JUnit", "SonarQube"] },
      { category: "Other", skills: ["SharePoint", "Microsoft Flow"] },
      { category: "Methodology", skills: ["SAFe", "SCRUM"] },
      { category: "Certifications", skills: ["Pega CSA"] },
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
    summary: `Provided expert IT consultancy for enterprise portals.`,
    description: `*   **Enterprise Portals**: Developed and deployed complex **Liferay** portal solutions for large-scale clients, utilizing **Java EE**, **MySQL**, and **AlloyUI**.
*   **Agile Delivery**: Collaborated in SCRUM teams to deliver high-quality software increments, utilizing **Jira** and **Confluence** for transparent project tracking.
*   **Quality Assurance**: Integrated **SonarQube** into the build process to ensure code quality and maintainability from day one.
*   **Certifications Achieved**: Validated core expertise by earning **Oracle Certified Professional Java Programmer (OCPJP)** and **Oracle Certified Expert Web Component Developer (OCE WCD)**.`,
    tech: [
      { category: "Backend", skills: ["Java EE", "Liferay"] },
      { category: "Frontend", skills: ["AlloyUI"] },
      { category: "Databases", skills: ["MySQL"] },
      { category: "Quality", skills: ["SonarQube"] },
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
    period: "Sep 2012 - Aug 2014",
    summary: `Engineered critical test automation tools for next-gen automotive infotainment systems.`,
    description: `*   **Framework Development**: Designed and implemented the "Alpine Curve Editor" and other modules for the **Alpine Test Automation Tool**. Refactored the entire frontend using **MVC** pattern, rearranged the UI prototype, and significantly improved software quality using **StyleCop**.
*   **Innovation**: Developed a "Tablet Robot Interface Control" (TRIC) app using **Android SDK**, enabling remote control of industrial robots for touch-screen testing.
*   **Thesis Excellence**: Awarded top grade (1.0) for the thesis on "Alpine Curve Editor", recognizing the architectural robustness and utility of the tool.`,
    tech: [
      { category: "Backend", skills: ["C#", ".NET"] },
      { category: "Frontend & Mobile", skills: ["WPF", "MVC", "Android SDK"] },
      { category: "Quality", skills: ["StyleCop"] },
    ],
  },
];

export const education = [
  {
    id: 1,
    type: "dual-study",
    studyField: "Dual Study",
    degree: "Certified Computer Specialist",
    school: "GDS Schule 2",
    url: "https://gds2.de",
    location: "Böblingen, Germany",
    year: "2011 - 2014",
    summary: "Intensive dual study program focusing on Software Engineering, Database Systems, and Project Management.",
    description: `*   **Specialization**: Software Engineering, Database Systems, Project Management.
*   **Thesis**: "Alpine Curve Editor" - Graded **1.0 (Excellent)**.
*   **Key Courses**: C/Assembly (Intel 8085), Java (OO, Distributed Systems), SQL/JDBC, UML/Design Patterns, Linux, Robot-Programming.
*   **Certifications**: Cisco CCNA Exploration Modules 1-4.
*   **Awards**: Received Official Commendation ("Belobigung").`,
    grade: 'Practical Thesis: 1.0 ("sehr gut")',
  },
  {
    id: 2,
    type: "master",
    studyField: "Master",
    degree: "Master's Studies in Mathematics Teacher Education",
    school: "West University of Timisoara",
    url: "https://info.uvt.ro/en/",
    location: "Timisoara, Romania",
    year: "2009 - 2011",
    summary: "Specialized training in Pedagogy and Didactics for Mathematics education.",
    description: `*   **Goal**: Professional certification for teaching Mathematics.
*   **Focus**: Advanced Mathematics, Pedagogical Psychology, Curriculum Design.
*   **International Experience**: Completed 1st year via Erasmus scholarship in Stuttgart, Germany.`,
    grade: 'Average Grades: Year 1 (7.70/10), Year 2 (7.66/10)',
  },
  {
    id: 3,
    type: "bachelor",
    studyField: "Bachelor",
    degree: "Bachelor's Degree in Mathematics and Computer Science",
    school: "West University of Timisoara",
    url: "https://info.uvt.ro/en/",
    location: "Timisoara, Romania",
    year: "2006 - 2009",
    summary: "Dual major providing distinct foundations in both abstract Mathematics and Applied Computer Science.",
    description: `*   **Major**: Mathematics & Computer Science.
*   **Core Skills**: Advanced Calculus, Algebra, Algorithms, Data Structures, Operating Systems.`,
    grade: 'Overall Grade: 9.02/10 (Thesis: 10/10)',
  },
  {
    id: 4,
    type: "high-school",
    studyField: "College",
    degree: "Baccalaureate Diploma",
    school: "National College of Computer Science \"Spiru Haret\"",
    url: "https://www.cni-sv.ro/",
    location: "Suceava, Romania",
    year: "2002 - 2006",
    summary: "Intensive Computer Science and Mathematics curriculum.",
    description: `*   **Profile**: Mathematics & Computer Science (Intensive).`,
    grade: 'Baccalaureate Grade: 9.81/10 (German Abitur equivalent: 1.1)',
  },
];

export const projects = [
  {
    id: 1,
    title: "Filmpire Microservices",
    description: "Enterprise-grade microservices platform for movie discovery. Architected with 8 Spring Boot 3.5 backend services, Spring Cloud infrastructure (Eureka, API Gateway), Spring AI integration, and hybrid PostgreSQL/MongoDB storage.",
    tech: ["Java 25", "Spring Boot 3", "Spring Cloud", "PostgreSQL", "MongoDB", "Docker"],
    githubUrl: "https://github.com/pehlivanu/filmpire-microservices",
    deployUrl: "",
  },
  {
    id: 2,
    title: "Defense Asset Manager",
    description: "Enterprise React 19 application. Features Zustand + Immer state management, Material UI v9, OpenAPI 3.1 contract-first development, MSW mocking, and Podman deployment.",
    tech: ["TypeScript", "React 19", "Zustand", "Material UI", "OpenAPI", "Podman"],
    githubUrl: "https://github.com/pehlivanu/defense-asset-manager",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Portfolio Site",
    description: "Developer portfolio built as an IDE-themed experience. Features Next.js 15 App Router, TypeScript, Tailwind CSS v4, and Framer Motion animations.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Framer Motion", "React"],
    githubUrl: "https://github.com/pehlivanu/portfolio-site",
    deployUrl: "https://liviuionesi.vercel.app",
  },
  {
    id: 4,
    title: "Filmpire",
    description: "An immersive movie discovery app featuring voice command search (AI), category filtering, and a rich, responsive material design.",
    tech: ["React", "Material UI", "Redux Toolkit", "Alan AI", "TMDB API"],
    githubUrl: "https://github.com/pehlivanu/filmpire",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
  {
    id: 5,
    title: "Knowledge Base Platform",
    description: "A production-ready, localized knowledge management platform for 'Last Z Survival Shooter'. Built with Next.js 16 App Router, featuring Next-Intl localization, middleware authentication, and mobile-first responsiveness.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/pehlivanu/knowledge-base-platform",
    deployUrl: "https://phenix-wiki.vercel.app",
  },
  {
    id: 6,
    title: "DevOps Toolchain Showcase",
    description: "A comprehensive CI/CD toolchain showcase implementing a fully containerized environment. Integrates Podman Compose, Jenkins CI, JFrog Artifactory, Gradle, and simulated ALM/MQC via REST API.",
    tech: ["Java", "Jenkins", "Docker / Podman", "JFrog Artifactory", "Gradle", "Bash"],
    githubUrl: "https://github.com/pehlivanu/devops-toolchain-showcase",
    deployUrl: "",
  },
  {
    id: 7,
    title: "DevFlow",
    description: "A modern community platform for developers to share knowledge, featuring AI-powered recommendations and a responsive UI.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "Clerk Auth"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 8,
    title: "GUI Automation Framework",
    description: "A Python-based GUI automation tool for 'Last Z: Survival Shooter'. Features visual template matching to perform human-like interactions, automated ally assistance, and automated weapon collection using Tkinter and Bash.",
    tech: ["Python", "Tkinter", "GUI Automation", "Bash Scripting", "Linux"],
    githubUrl: "https://github.com/pehlivanu/gui-automation-framework",
    deployUrl: "https://phenix-wiki.vercel.app/en/docs/automation-app",
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

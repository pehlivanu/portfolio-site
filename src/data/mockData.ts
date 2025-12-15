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
    period: "Sep 2020 - Present",
    summary: `Driving the modernization of the "SilverDAT" ecosystem, the industry standard for automotive data and claims management.`,
    description: `*   **Architectural Innovation**: Shifted engineering strategy to fully **leverage the Spring Boot ecosystem** instead of maintaining complex "framework-agnostic" anti-patterns. Introduced **OpenRewrite** and **Renovate** for automated maintenance, and standardized on **JUnit 5 & MockMvc**. Promoted **Contract-First** development for parallel FE/BE work. Achieved **Continuous Delivery** for new projects, while optimizing the quarterly feature release cycle for legacy software.
*   **Engineering Excellence**: Advocated for **Monorepo** structures and **Java Modules** to organize legacy code, while promoting a "Unified Dashboard" approach over micro-frontends to ensure integrated testing and cohesion.
*   **API Management**: Advocated for standardizing public API management using **OpenAPI**, ensuring clear contracts and easier integration for partners.
*   **Frontend Revamp**: Rebuilt legacy JS applications using **React and TypeScript**, delivering a modern, responsive user experience for our clients.
*   **AI-Enhanced Modernization**: Leveraged AI tools to document, refactor, and optimize critical legacy Java EE components, while debugging and testing within **IntelliJ IDEA**.
*   **DevOps Integration**: Standardized local development using **Docker Compose** and **Testcontainers**, while advocating for standard **Kubernetes** backend deployments and **Vercel** for frontend.`,
    tech: ["Java 17+", "Spring Boot", "Spring Cloud", "React", "TypeScript", "Docker", "Kubernetes", "OpenRewrite", "Renovate", "JUnit 5", "MockMvc"],
  },
  {
    id: 2,
    type: "mid",
    role: "Mid Software Developer",
    company: "evia solutions GmbH",
    companySize: "51-200 employees",
    industry: "IT Services & Consulting",
    locationType: "On-site",
    websiteUrl: "https://www.evia.de",
    period: "Feb 2016 - Aug 2020",
    summary: `Delivered critical digital solutions for the Insurance and Automotive sectors.`,
    description: `*   **Legacy System Scaling**: Maintained and developed core **WebSphere Java EE (JSP)** applications. This critical work provided the stable revenue stream that supported the company's hyper-growth from 16 to 200+ employees.
*   **Backend Development**: Developed high-performance integration services for major **Banking** clients using **Java EE** and **Micronaut**, collaborating with external frontend teams for seamless B2B data exchange.
*   **Microsoft Solutions Implementation**: Served as the primary developer for the new "Microsoft Delivery" unit. Implemented enterprise intranets and process automation using **SharePoint** and **Microsoft Flow**, translating strategic requirements into functional automated workflows.
*   **Frontend Expertise & Certifications**: Got certified in BPM as **Pega CSA** and started my Microsoft certification path with frontend certification for **HTML5, CSS3, and JavaScript**. Applied this knowledge to maintain and enhance various web interfaces.`,
    tech: ["Java EE", "Micronaut", "WebSphere", "SharePoint", "Microsoft Flow", "Pega CSA", "HTML5/CSS3/JS"],
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
    tech: ["Java EE", "Liferay", "MySQL", "AlloyUI", "SonarQube", "OCPJP", "OCE WCD"],
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
    tech: ["C#", ".NET", "WPF", "MVC", "StyleCop", "Android SDK"],
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
*   **Certifications**: Cisco CCNA Exploration Modules 1-4.`,
  },
  {
    id: 2,
    type: "master",
    studyField: "Master",
    degree: "Master's Degree in Mathematics Teacher Education",
    school: "West University of Timisoara",
    url: "https://info.uvt.ro/en/",
    location: "Timisoara, Romania",
    year: "2009 - 2011",
    summary: "Specialized training in Pedagogy and Didactics for Mathematics education.",
    description: `*   **Goal**: Professional certification for teaching Mathematics.
*   **Focus**: Advanced Mathematics, Pedagogical Psychology, Curriculum Design.`,
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
  },
];

export const projects = [
  {
    id: 1,
    title: "DevFlow",
    description: "A modern community platform for developers to share knowledge, featuring AI-powered recommendations and a responsive UI.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "Clerk Auth"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 2,
    title: "Family Cash Card",
    description: "A secure, bank-grade REST API for managing family finances with granular Role-Based Access Control (RBAC) and audit logging.",
    tech: ["Spring Boot 3", "Java 17", "Spring Security", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/pehlivanu/familycashcard",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Runnerz",
    description: "A full-stack fitness tracking application showcasing the latest Spring Boot 3 features including JDBC Client and Docker Compose integration.",
    tech: ["Java 21", "Spring Boot 3", "PostgreSQL", "Docker", "Google Maps API"],
    githubUrl: "https://github.com/pehlivanu/runnerz",
    deployUrl: "",
  },
  {
    id: 4,
    title: "Filmpire",
    description: "An immersive movie discovery app featuring voice command search (AI), category filtering, and a rich, responsive material design.",
    tech: ["React", "Material UI", "Redux Toolkit", "Alan AI", "TMDB API"],
    githubUrl: "",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
];


export const linkedInProfile = {
  name: "Liviu Ionesi",
  headline: "Full Stack Developer | Java | Spring Boot | Next.js",
  location: "Kirchheim unter Teck, Germany",
  connections: "500+",
  about: "Building the digital backbone of the Automotive and Fintech industries. With over 13 years of experience engineering high-performance distributed systems, I specialize in modernizing legacy architectures and delivering scalable, cloud-native solutions.",
  fullBio: `### **Building the digital backbone of the Automotive and Fintech industries.**

With over 13 years of experience engineering high-performance distributed systems, I specialize in modernizing legacy architectures and delivering scalable, cloud-native solutions. My journey has taken me from developing critical test automation frameworks for **Alpine Electronics** to innovating in the digital transformation of automotive data platforms at **DAT Group**.

I bridge the gap between complex backend logic and intuitive frontend experiences. My expertise lies in:

  * **Architectural Modernization and Performance**: Advocating for the migration of monolithic **Java EE** systems to **Microservices** (Spring Boot, Azure) and best practices in frontend (Next.js), significantly improving system resilience and scalability.
  * **Full-Stack Excellence**: Crafting responsive, user-centric interfaces with **React, Next.js, and TypeScript**, backed by robust **Java 21** APIs.
  * **DevOps & Quality Culture**: Championing **TDD**, and a "Set and Forget" CI/CD automation philosophy (Azure, GitHub Actions, Vercel), mentoring teams to adopt **"Clean Code"** principles.
  * **Enterprise Vibe Coding**: Pioneering a new standard in software delivery by fusing enterprise-grade rigor (Epics, Stories, TDD, CI/CD) with the speed of AI-integrated IDEs (**Cursor, Windsurf, Antigravity**). I apply this not just to greenfield projects, but to modernize, document, and refactor complex legacy EE monoliths, ensuring continuous improvement and technical debt reduction.

---
*Currently seeking Remote or Hybrid opportunities where I can leverage my architectural insight and AI-enhanced workflow to solve complex engineering challenges.*`,
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
  description: "Senior Fullstack Architect & Engineer | Enterprise Vibe Coder. Building the digital backbone of the Automotive and Fintech industries. Pioneering a new standard in software delivery by fusing enterprise-grade rigor with the speed of AI-integrated IDEs.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: "Projects, not just code",
  ctaSecondary: "Contact Me"
};

export const experience = [
  {
    id: 1,
    type: "senior",
    role: "Senior Software Developer",
    company: "DAT Group",
    period: "Sep 2020 - Present",
    description: `
Spearheading the modernization of enterprise systems and pioneering AI-assisted development workflows.

*   **Legacy Maintenance & Modernization**: Maintained critical legacy systems (**Java EE SOA**, **Oracle SQL**, **JavaScript**) while progressively developing modern replacement services.
*   **Engineering Excellence**: Designed and implemented a flagship microservice recognized as the **"best documented, tested, and architected"** service in the company's history, setting a new standard for development quality.
*   **Architectural Analysis**: Analyzed the existing custom gateway implementation, identifying it as an architectural anti-pattern. Proposed a transition to standard **Spring Cloud** components to eliminate latency and complexity.
*   **Quality Assurance Champion**: Acted as the primary advocate for code quality. Resolved thousands of **SonarQube** issues and enforced strict **IntelliJ inspections**, significantly reducing technical debt.
    `,
    tech: ["Java 17+", "Spring Boot", "PrimeReact", "TypeScript", "Docker", "Azure", "Oracle SQL"],
  },
  {
    id: 2,
    type: "mid",
    role: "Software Developer",
    company: "evia",
    period: "Feb 2016 - Aug 2020",
    description: `
Delivered critical software solutions for the insurance and fintech sectors, focusing on stability and process automation.

*   **Microservices Adoption**: Pioneered the transition of legacy modules to microservice architectures using **Micronaut** and **Docker**, enhancing system scalability.
*   **Enterprise Java**: Maintained and expanded complex **Java EE** applications running on IBM WebSphere, ensuring high availability for insurance clients.
*   **Process Automation**: Developed custom intranet solutions and automated business workflows using **Microsoft SharePoint** and Power Automate.
*   **Agile Delivery**: Collaborated in cross-functional agile teams to deliver incremental value, utilizing Jira and Confluence for transparent project management.
    `,
    tech: ["Java EE", "Micronaut", "Angular", "SharePoint", "SQL", "IBM WebSphere"],
  },
  {
    id: 3,
    type: "junior",
    role: "Junior Software Developer & Consultant",
    company: "PRODYNA AG",
    period: "Nov 2014 - Jan 2016",
    description: `
Provided expert technical consultancy for enterprise portal solutions, bridging the gap between business requirements and technical implementation.

*   **Portal Development**: Engineered custom enterprise portals using **Liferay** and Java EE, tailoring solutions to specific client needs.
*   **Full Stack Implementation**: Developed end-to-end features using Java for backend logic and HTML/CSS/JavaScript for frontend customization.
*   **Quality Assurance**: Integrated **SonarQube** into the build process to maintain high code quality and reduce technical debt from the start.
    `,
    tech: ["Java EE", "Liferay", "MySQL", "JavaScript", "Jenkins", "Scrum"],
  },
  {
    id: 4,
    type: "intern",
    role: "Software Developer (Dual Studies)",
    company: "Alpine Electronics R&D Europe",
    period: "Sep 2012 - Aug 2014",
    description: `
Completed a rigorous Dual Studies program combining academic excellence with hands-on automotive software engineering.

*   **Test Automation**: Designed and built modular test automation frameworks for automotive infotainment systems using **C#** and **WPF**.
*   **UI Engineering**: Developed complex desktop user interfaces implementing the **MVVM** pattern for real-time data visualization and device control.
*   **Thesis Excellence**: Authored a top-grade thesis on software architecture and design patterns, documenting the development of critical testing tools.
    `,
    tech: ["C#", ".NET", "WPF", "UML", "Design Patterns", "Automotive"],
  },
];

export const education = [
  {
    id: 1,
    degree: "Dual Study in Computer Science (B.Sc. equiv.)",
    school: "ADV Böblingen",
    year: "2011 - 2014",
    description: "Intensive dual study program focusing on Software Engineering, Database Systems, and Project Management. Graduated with a thesis grade of 1.0 (Excellent)."
  },
  {
    id: 2,
    degree: "Master's in Computer Science",
    school: "West University of Timisoara",
    year: "2009 - 2011",
    description: "Advanced studies in Distributed Systems, Artificial Intelligence, and Software Architecture."
  },
  {
    id: 3,
    degree: "Bachelor's in Mathematics & Computer Science",
    school: "West University of Timisoara",
    year: "2006 - 2009",
    description: "Strong foundation in Algorithms, Data Structures, and Theoretical Computer Science."
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

export const hero = {
  greeting: "~/developer/portfolio",
  name: "Liviu",
  suffix: ".io",
  lastName: "IONESI",
  description: "Transitioning from robust Java EE architectures to the dynamic world of Spring Boot paired to performant UI frameworks and AI-accelerated prototyping.",
  ctaPrimary: "Projects, not just code",
  ctaSecondary: "Contact Me"
};

import { Experience, Education, Project, LinkedInProfile, AboutData } from '@/types/data';

export const experience: Experience[] = [
  {
    id: 1,
    type: "senior",
    role: "Senior Software Developer",
    company: "DAT Group",
    companySize: "501-1.000 Mitarbeiter",
    industry: "Automotive Software",
    locationType: "Remote / Hybrid",
    websiteUrl: "https://www.dat.eu",
    period: "Sep 2020 - Mär 2026",
    summary: `Senior Full-Stack-Entwickler im "Costing Applications"-Team hinter SilverDAT 3 "calculate", dem von Versicherern anerkannten Standard zur Kalkulation von Fahrzeugreparaturkosten. Die Anwendung wird branchenweit von Werkstätten, Händlern, Gutachtern, Versicherungen, Banken und Herstellern für über 70.000 Fahrzeugvarianten genutzt.`,
    description: `*   Wartung, Erweiterung und Testen von Legacy-Java-EE-Diensten (SOA/SOAP Monorepo mit JavaScript/React-Frontends). Anpassung von SoapUI und manuellen Testsuiten an veränderte Services sowie Integration von TestNG/Mockito zur Abdeckung neuer Änderungen.
*   Architektur und ganzheitliche Entwicklung neuer Spring Boot-Dienste zur Ablösung der Java-EE-Altsysteme — mit sauberer N-Tier-Architektur, striktem DTO-Mapping, zentraler Fehlerbehandlung und MDC-basiertem Distributed Tracing. Bereitstellung von contract-first, HATEOAS-konformen REST-APIs (OpenAPI), abgesichert durch JUnit 5/MockMvc-Integrationstests und automatisierte Postman-Collections.
*   Verwaltung der Datenschicht mit JPA/Hibernate: Ablösung der veralteten SQL-Datenbanken (hauptsächlich Oracle SQL) durch PostgreSQL und Einführung von MongoDB als erste NoSQL-Lösung im ehemals rein SQL-basierten Stack.
*   Modernisierung der Legacy-JavaScript-Frontends durch responsive React/TypeScript-Komponenten. Architektur-Optimierung mittels Effector (State Management) und PrimeReact.
*   CI/CD: Build der Legacy-Plattform via Gradle auf Jenkins mit Deployment in Test- und Produktionsumgebungen; neue Services werden über den Gradle Wrapper ausgeliefert. Bereitstellung auf Azure Kubernetes (AKS) via Build- und Release-Pipelines mit Helm Charts und NGINX Ingress. Docker Compose für die lokale Entwicklung. Migration der Quellcodeverwaltung von GitLab zu Azure Repos. Die Legacy-Anwendung läuft in einem 6-Release-Zyklus pro Jahr (Kanban in Jira), während die neuen Services auf Continuous Delivery umgestellt wurden.
*   Modernisierung des geerbten Spring-Boot-Parent-Builds (Einsatz von OpenRewrite für automatisierte Versionsupgrades jenseits des BOM-Limits, Renovate Bot auf Azure für Abhängigkeitsupdates) und Verlagerung der konventionellen Properties-Konfiguration hin zu Spring Profiles.
*   Implementierung eines KI-gestützten Workflows über IntelliJ IDEA (CodeGPT mit lokalem Azure LLM), Cursor und Windsurf zur Dokumentation und Analyse des Legacy-Codes, Extraktion von Anforderungen und Entwicklung neuer Services, die den SonarQube-Quality-Gates zu 100 % entsprechen.
*   Maßgebliche Mitgestaltung der technischen Ausrichtung durch Prototyping und Evaluierung neuer Lösungsansätze — Verifizierung direkt im Code sowie Durchführung von Team-Workshops (z. B. REST/API-first Design, modernes React und Next.js, OpenRewrite, Dependabot und Evaluierung von Spring Cloud Gateway als Ersatz für das DAT-eigene Gateway).`,
    tech: [
      { category: "Backend", skills: ["Java 17+", "Jakarta EE", "Spring Boot 3+", "Spring Cloud", "REST APIs", "OpenAPI", "Microservices", "SOA / SOAP", "WSDL"] },
      { category: "Frontend", skills: ["JavaScript", "HTML", "CSS", "React", "TypeScript", "Effector", "PrimeReact"] },
      { category: "Datenbanken", skills: ["PostgreSQL", "Oracle", "MongoDB", "H2", "JPA", "Hibernate", "JDBC"] },
      { category: "Testing", skills: ["TestNG", "Mockito", "JUnit 5", "MockMvc", "Testcontainers"] },
      { category: "CI/CD & DevOps", skills: ["Jenkins", "GitLab CI/CD", "Gradle", "Node.js", "npm", "Docker", "Azure", "Kubernetes (AKS)", "Helm", "NGINX Ingress", "OpenRewrite", "Renovate", "Dependabot"] },
      { category: "Tools", skills: ["IntelliJ IDEA", "Postman", "SoapUI", "SQL Developer", "Cursor", "Windsurf", "Azure OpenAI"] },
      { category: "Methodik", skills: ["Agile", "Kanban", "Jira"] },
    ],
  },
  {
    id: 2,
    type: "mid",
    role: "Softwareentwickler",
    company: "evia solutions GmbH",
    companySize: "51-200 Mitarbeiter",
    industry: "IT Services & Consulting",
    locationType: "Vor Ort",
    websiteUrl: "https://www.evia.de",
    period: "Feb 2016 - Aug 2020",
    summary: `Entwickler und Consultant in einem branchenübergreifenden IT-Systemhaus zur Bereitstellung von Individual- und Standardsoftware im Banken-, Versicherungs- und Microsoft-Enterprise-Umfeld. Tätigkeit in agilen Scrum- und SAFe-Teams — von der Wartung älterer Java EE-Systeme bis hin zur Neuentwicklung einer Microservices-Architektur auf der grünen Wiese.`,
    description: `*   Wartung, Erweiterung, Bereitstellung und Testen von Versicherungsmakler-Portalen für Wüstenrot & Württembergische — geschäftskritische Java EE 8-Anwendungen (JSF/Spring/Hibernate, JSP) auf IBM WebSphere 7 und 8.5 mit IBM DB2 und LDAP/Active Directory. Diese bildeten das stabile finanzielle Fundament für das Wachstum des Unternehmens von ~16 auf über 200 Mitarbeiter. Die Systeme wurden mittels Penetrationstests (OWASP-Standards) gehärtet. Zur Dokumenten- und PDF-Generierung kamen Rational Application Developer 9.1 und iText zum Einsatz (weitere Tools: Apache Directory Studio, Postman, Eclipse, SVN, Cherwell).
*   Unterstützung beim Aufbau des neuen Bereichs "Microsoft Delivery" als primärer Entwickler. Entwicklung einer Onboarding-Lösung für Mitarbeiter in SharePoint Online (digitale Vertragserstellung, Onboarding-Prozess, Aufgabenmanagement) sowie Automatisierung von Unternehmensprozessen mit Microsoft Flow und Logic Apps (Office 365, JSON).
*   Erwerb der Zertifizierungen "Pega Certified System Architect (CSA)" für BPM-orientierte Entwicklung und "Microsoft 70-480" (HTML5, JavaScript & CSS3, inkl. jQuery und AJAX).
*   Entwicklung der "Digital Sales Solutions" (DSS) für Daimler — eine neu konzipierte Banking-Anwendung zur Digitalisierung von Automobilkreditanträgen in mehreren Ländern. Implementierung moderner Micronaut / JEE 11 Microservices (Oracle SQL, PostgreSQL 12, Docker) hinter einem Angular-Frontend, unterstützt durch REST/SOAP-Integrationsdienste (OpenAPI) für den B2B-Datenaustausch.
*   Zuständig für Developer Testing, QA (JUnit, SonarQube) und CI/CD-Pipelines für Test- und Integrationsumgebungen (Git, Jenkins). Unterstützung des Test-Teams bei automatisierten End-to-End-Tests (Protractor, Cucumber) in Scrum- und später SAFe-Teams in enger Abstimmung mit Frontend-, Test- und DevOps-Abteilungen (Jira, Confluence, MS Teams).`,
    tech: [
      { category: "Backend", skills: ["Java EE (JEE 8 / 11)", "Micronaut", "Spring", "Hibernate", "JSF", "JSP", "iText", "REST", "SOAP", "OpenAPI"] },
      { category: "Frontend", skills: ["Angular", "HTML5", "CSS3", "JavaScript", "jQuery", "AJAX"] },
      { category: "Datenbanken", skills: ["Oracle SQL", "PostgreSQL", "IBM DB2", "LDAP / Active Directory"] },
      { category: "CI/CD & DevOps", skills: ["Git", "SVN", "Jenkins", "Maven", "Docker", "IBM WebSphere (7 / 8.5)"] },
      { category: "Testing & Qualität", skills: ["JUnit", "SonarQube", "Protractor", "Cucumber", "OWASP / Penetration Testing"] },
      { category: "Tools", skills: ["IntelliJ IDEA", "Eclipse", "Rational Application Developer", "SharePoint", "Microsoft Flow", "Logic Apps", "Office 365", "Apache Directory Studio", "Postman", "Jira", "Confluence", "Cherwell", "MS Teams"] },
      { category: "Methodik", skills: ["Scrum", "SAFe", "BPM"] },
      { category: "Zertifizierungen", skills: ["Pega CSA", "Microsoft 70-480"] },
    ],
  },
  {
    id: 3,
    type: "junior",
    role: "Junior Softwareentwickler",
    company: "PRODYNA AG",
    companySize: "201-500 Mitarbeiter",
    industry: "IT Consulting",
    locationType: "Vor Ort / Reisebereitschaft",
    websiteUrl: "https://www.prodyna.com",
    period: "Nov 2014 - Jan 2016",
    summary: `Entwickler und Consultant in einer IT-Beratung, mit Einsatz vor Ort bei einem Großkunden zur Umsetzung eines Portal-Projekts von der fachlichen Beratung über das Design bis hin zur Implementierung und zum Testen.`,
    description: `*   Entwicklung und Bereitstellung einer Liferay 6.0-Portallösung mit einem Backend in Java 6 EE und MySQL sowie einem Frontend aus JSP, HTML, CSS, JavaScript und AlloyUI.
*   Deployment und Testen der Anwendungen auf Apache Tomcat, Steuerung der CI/CD-Prozesse mittels Jenkins und Maven sowie Integration von SonarQube in den Build-Prozess zur Sicherstellung der Codequalität.
*   Arbeit in agilen Scrum-Teams (Jira, Confluence) und Erwerb der Zertifizierungen "Oracle Certified Professional Java Programmer (OCPJP)" sowie "Oracle Certified Expert Java EE 6 Web Component Developer (OCE WCD)".`,
    tech: [
      { category: "Backend", skills: ["Java 6 EE", "Liferay 6.0", "JSP"] },
      { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "AlloyUI"] },
      { category: "Datenbanken", skills: ["MySQL"] },
      { category: "CI/CD & DevOps", skills: ["Apache Tomcat", "Jenkins", "Maven"] },
      { category: "Testing & Qualität", skills: ["SonarQube"] },
      { category: "Tools", skills: ["Jira", "Confluence"] },
      { category: "Methodik", skills: ["Scrum"] },
      { category: "Zertifizierungen", skills: ["OCPJP", "OCE WCD"] },
    ],
  },
  {
    id: 4,
    type: "intern",
    role: "Praktikum in der Softwareentwicklung",
    company: "Alpine Electronics R&D Europe",
    companySize: "1.000+ Mitarbeiter",
    industry: "Automotive Electronics",
    locationType: "Vor Ort",
    websiteUrl: "https://www.alpine.de/",
    dualStudy: "ADV Böblingen",
    period: "Sep 2012 - Aug 2013",
    summary: `Praktikant im Bereich Systemintegration (Car Infotainment / OEM) zur Entwicklung von Softwaremodulen für das interne "Alpine Test Automation Framework".`,
    description: `*   Entwicklung und Erweiterung des internen Alpine Test Automation Frameworks (C#, .NET 4.0) durch den Bau automatisierter Testmodule für Hardwareschnittstellen wie Bluetooth, RDS-Signalgeneratoren, MOST/CAN-Busse, Klimakammern und CD/DVD-Wechsler-Roboter.
*   Design und Implementierung des "Alpine Voltage Curve Editor" — der als Abschlussarbeit mit der Bestnote (1,0) bewertet wurde — sowie Modernisierung der Benutzeroberflächen mehrerer bestehender Testmodule mittels WPF und dem MVVM-Pattern.
*   Sicherstellung der architektonischen Robustheit über das gesamte Test-Framework hinweg durch Anwendung von UML-Modellierung und Gang-of-Four Design Patterns (Singleton, Composite, Factory Method, Memento) in SharpDevelop.`,
    tech: [
      { category: "Backend", skills: ["C#", ".NET 4.0", "UML", "Design Patterns", "SharpDevelop","StyleCop"] },
      { category: "Frontend & Mobile", skills: ["WPF", "MVVM", "Android SDK"] },
      { category: "Hardware & Protokolle", skills: ["Bluetooth", "CAN", "MOST", "RDS"] },
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    type: "dual-study",
    studyField: "Ausbildung",
    degree: "Staatlich geprüfter Informatiker",
    school: "Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)",
    url: "https://gds2.de",
    location: "Böblingen, Deutschland",
    year: "2011 - 2014",
    summary: "Intensives duales Studium mit den Schwerpunkten Software Engineering, Datenbanksysteme und Projektmanagement.",
    description: "3-jähriges Berufskolleg. Beinhaltete ein einjähriges Betriebspraktikum bei der Alpine Electronics R&D Europe GmbH mit der Abschlussarbeit: \"Alpine Voltage Curve Editor\" (Note: sehr gut / 1,0).",
    grade: "Abgeschlossen mit Belobigung",
  },
  {
    id: 2,
    type: "master",
    studyField: "Master",
    degree: "Master",
    school: "West-Universität Temeswar (Universitatea de Vest din Timișoara)",
    url: "https://info.uvt.ro/en/",
    location: "Temeswar, Rumänien",
    year: "2009 - 2011",
    summary: "Spezialisierte Ausbildung in Pädagogik und Didaktik der Mathematik.",
    description: "Weiterführendes akademisches Programm mit Fokus auf komplexe mathematische Modelle und Bildungsmethodik. Das erste Jahr des Masters wurde im Rahmen des Erasmus-Programms im Ausland an der Universität Stuttgart absolviert. Zu den Kernfächern gehörten: Vektoranalysis, Höhere Algebra und Geometrie, Iterative Methoden, statistische und probabilistische Methoden sowie Software für Bildungsmanagement.",
    grade: "7,70 / 10 (Jahr 1) & 7,66 / 10 (Jahr 2)",
  },
  {
    id: 3,
    type: "bachelor",
    studyField: "Bachelor",
    degree: "Bachelor",
    school: "West-Universität Temeswar (Universitatea de Vest din Timișoara)",
    url: "https://info.uvt.ro/en/",
    location: "Temeswar, Rumänien",
    year: "2006 - 2009",
    summary: "Doppelstudium mit starken Grundlagen sowohl in abstrakter Mathematik als auch in angewandter Informatik.",
    description: "Curriculum mit doppeltem Schwerpunkt, das theoretische Mathematik mit angewandter Informatik und Software Engineering verbindet. Die Hauptfächer umfassten: Datenstrukturen, Künstliche Intelligenz, Datenbanksysteme, Computernetzwerke, algorithmische Geometrie, logische und funktionale Programmierung sowie mathematische Modellierung/Simulation.",
    grade: "10 / 10 (Abschlussprüfung) | 9,02 / 10 (Gesamtdurchschnitt)",
  },
  {
    id: 4,
    type: "high-school",
    studyField: "Gymnasium",
    degree: "Abitur (Bacalaureat)",
    school: "Nationalkolleg für Informatik „Spiru Haret“ Suceava",
    url: "https://www.cni-sv.ro/",
    location: "Suceava, Rumänien",
    year: "2002 - 2006",
    summary: "Intensiver Informatik- und Mathematik-Lehrplan.",
    description: "Profil: Mathematik & Informatik (Intensiv).",
    grade: "9,81 / 10",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Filmpire Microservices Platform",
    description:
      "Eine ganzheitliche Enterprise-Microservices-Plattform zur Entdeckung von Filmen, von der ersten Idee bis zum einsatzbereiten Produkt über GitHub Project Kanban-Boards (Epics, Stories, Tasks) gesteuert. Acht unabhängige Java 25 / Spring Boot 3.5 Services inklusive Spring Cloud (Eureka, API Gateway), unterstützt durch eine hybride PostgreSQL/MongoDB-Strategie und einen Redis-Cache mit Fallback auf die TMDB API. Integriert Spring AI (Whisper/GPT-4) sowohl über REST als auch gRPC. Nach strikten modernen Standards entwickelt — Record-DTOs, Constructor Injection, Virtual Threads — und mit hohen Qualitätsanforderungen (JUnit 5, Testcontainers, 85% JaCoCo Coverage) über GitHub Actions CI/CD abgesichert. Deployment via Kubernetes auf Minikube.",
    tech: ["Java 25", "Spring Boot 3.5", "Spring Cloud", "PostgreSQL", "MongoDB", "Redis", "Spring AI", "gRPC", "REST", "JUnit 5", "Testcontainers", "JaCoCo", "GitHub Actions", "Docker", "Podman", "Kubernetes"],
    githubUrl: "https://github.com/pehlivanu/filmpire-microservices",
    deployUrl: "",
  },
  {
    id: 2,
    title: "Defense Asset Manager",
    description:
      "Eine React 19 Enterprise-Anwendung für das Asset- und Personalmanagement im Verteidigungssektor. Setzt auf eine strikte Feature-basierte (Domain-Driven) Architektur, um eine SAFe-Bereitstellung über mehrere Teams hinweg zu unterstützen. Vollständig typisiert, Contract-First gegen OpenAPI 3.1 und auf Basis von Vite für sofortiges HMR. Verwendet Zustand mit Immer für Immutable State, Mock Service Worker für Offline-REST-Mocking sowie barrierefreie Material UI v9-Komponenten mit sicherheitskritischer UX (z. B. Bestätigungen bei destruktiven Aktionen).",
    tech: ["React 19", "Vite", "Zustand", "Material UI v9", "MSW", "OpenAPI 3.1", "TypeScript", "Vitest"],
    githubUrl: "https://github.com/pehlivanu/defense-asset-manager",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Antigravity IDE Portfolio",
    description:
      "Ein hochgradig interaktives Entwickler-Portfolio, das die Ästhetik der Google Antigravity IDE detailliert nachbildet — mit Activity Bar, Datei-Explorer, Editorbereich, Statusleiste und einer funktionierenden Command Palette. Basiert auf dem Next.js 15 App Router mit immersiven Framer Motion Mikro-Animationen. Bietet eine automatisierte PDF-Generierung des Lebenslaufs in mehreren Vorlagen und Sprachen sowie ein dynamisches Kontaktformular, das via Geolocation API die physische Entfernung zwischen dem Besucher und dem Entwickler berechnet.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Geolocation API", "PDF Generation", "Framer Motion"],
    githubUrl: "https://github.com/pehlivanu/portfolio-site",
    deployUrl: "https://www.liviuionesi.com",
  },
  {
    id: 4,
    title: "Filmpire Frontend",
    description:
      "Eine moderne, interaktive React 17-Anwendung für die Film-Suche, verwaltet mit Redux Toolkit. Dient als dedizierter Frontend-Client für das 8-Service Filmpire Microservices-Backend. Integriert die TMDB API zum Durchsuchen von Kategorien und Verwalten von Favoriten. Ein besonderes Highlight ist die Alan AI SDK-Integration, die eine vollständig konversationelle Sprachsteuerung ermöglicht. Qualitätssicherung durch Jest / React Testing Library und ESLint (Airbnb-Standard).",
    tech: ["React 17", "Material-UI", "Redux Toolkit", "Alan AI"],
    githubUrl: "https://github.com/pehlivanu/filmpire",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
/*
  {
    id: 5,
    title: "Knowledge Base Platform",
    description:
      "Ein lokalisierungsfähiges Dokumentationssystem im Enterprise-Format, basierend auf Next.js 16 und React 19 Server Components für minimale Client-Ladezeiten. Es fungiert als Static Site Generator, der eine einfache Sammlung von Markdown-Dateien (.md) in ein vollständiges Wiki verwandelt. Bietet tiefgehende Internationalisierung über next-intl mittels Edge-Middleware, wobei interne Dokumente durch eine Edge-Middleware-Überprüfung von HttpOnly-Cookies abgesichert sind.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "next-intl", "Markdown"],
    githubUrl: "https://github.com/pehlivanu/knowledge-base-platform",
    deployUrl: "https://phenix-wiki.vercel.app",
  },
*/
  {
    id: 6,
    title: "DevOps Toolchain Showcase",
    description:
      "Eine vollständig containerisierte CI/CD-Toolchain, die Enterprise-DevOps-Praktiken demonstriert und über Podman Compose orchestriert wird. Ein angepasster Jenkins-Server nutzt Docker-outside-of-Docker (DooD), um Applikationsimages über ein mehrstufiges Jenkinsfile zu bauen und zu pushen. Automatisiert das JaCoCo-Coverage-Reporting sowie das Artefakt-Publishing an JFrog Artifactory. Eigene Bash-, curl- und jq-Skripte übertragen Test-Metriken per REST-API an externe ALM/MQC-Systeme.",
    tech: ["Jenkins", "JFrog Artifactory", "Podman", "Gradle", "Java 17"],
    githubUrl: "https://github.com/pehlivanu/devops-toolchain-showcase",
    deployUrl: "",
  },
  {
    id: 7,
    title: "DevFlow - Full-Stack Q&A Platform",
    description:
      "Eine ausgeklügelte, Community-getriebene Q&A-Plattform für Entwickler, nativ auf dem Next.js 14 App Router entwickelt, die Server Actions anstelle eines separaten API-Layers verwendet. Verfügt über ein robustes Tagging-System, eine globale Suche über Fragen, Antworten, Benutzer und Tags sowie personalisierte Empfehlungs-Feeds. Eine Reputations- und Badge-Engine gamifiziert die Teilnahme. Die Authentifizierung erfolgt über NextAuth.js (Google/GitHub OAuth + Credentials) mit Ende-zu-Ende Zod-Validierung. Zusätzlich generiert die OpenAI API umfassende KI-Antworten und Code-Snippets.",
    tech: ["Next.js 14", "TypeScript 5", "MongoDB Atlas", "Tailwind CSS", "OpenAI API", "NextAuth", "Zod"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 8,
    title: "Python GUI Automation Framework",
    description:
      "Eine widerstandsfähige, plattformübergreifende Python-Desktop-Anwendung mit Tkinter-GUI zur Automatisierung und Steuerung einer Android-Anwendung. Nutzt OpenCV-Template-Matching zur visuellen Erkennung und Interaktion mit dynamischen UI-Elementen via Android Debug Bridge (ADB), ganz ohne vorausgesetzte APIs. Integriert menschenähnliche Interaktionsprofile – leichte Koordinaten-Varianz und zufälliges Timing –, um Bot-Erkennungssysteme zu umgehen. Lauffähig als GUI-Applikation oder headless als Linux-Daemon.",
    tech: ["Python 3.10", "OpenCV", "Tkinter", "ADB", "Bash"],
    githubUrl: "https://github.com/pehlivanu/gui-automation-framework",
    deployUrl: "",
  },
/*
  {
    id: 11,
    title: "Alana Windsurf",
    description:
      "Eine skalierbare Full-Stack-Webanwendung auf Basis des Next.js 13+ App Routers und React 18+. Bietet eine umfassende Authentifizierung über NextAuth.js — OAuth (Google, GitHub) sowie sichere E-Mail/Passwort-Credentials — mit Datenspeicherung in MongoDB via Mongoose. Das State-Management wird über React Context und useReducer abgewickelt. Formulare werden robust mittels React Hook Form und Zod validiert, und das UI-Styling erfolgt über Material UI und Emotion.",
    tech: ["Next.js 13+", "React 18+", "Material UI", "NextAuth.js", "MongoDB", "Zod"],
    githubUrl: "https://github.com/pehlivanu/alana-windsurf",
    deployUrl: "",
  },
  {
    id: 12,
    title: "Payload E-Commerce Platform",
    description:
      "Eine umfangreiche E-Commerce-Lösung, die das Payload CMS Framework mit einem statischen Next.js Frontend kombiniert. Umfasst ein voll funktionsfähiges Backend mit einem Enterprise-Admin-Panel, das sowohl physische Produkte als auch Paywall-geschützte Inhalte verwaltet. Sicher integriert mit Stripe-Webhooks zur reibungslosen Zahlungsabwicklung.",
    tech: ["Next.js", "Payload CMS", "Stripe", "React Hook Form"],
    githubUrl: "https://github.com/pehlivanu/e-commerce",
    deployUrl: "",
  },
*/
];

export const linkedInProfile: LinkedInProfile = {
  name: "Liviu Ionesi",
  headline: "Tech Lead | Senior Full-Stack Engineer | Java, Spring Boot, React, Next.js",
  location: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck, Deutschland",
  phone: "+49 1514 6966 832",
  address: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck",
  email: "ionesiliviu@yahoo.com",
  connections: "500+",
  about: "Technical Lead & Senior Full-Stack Engineer. Ich baue das digitale Rückgrat der Automobil- und Fintech-Branche. Mit über 13 Jahren Erfahrung in der Entwicklung hochgradig performanter, verteilter Systeme liegt mein Schwerpunkt auf technischer Leitung, der Modernisierung von Legacy-Architekturen und der Bereitstellung skalierbarer, Cloud-nativer Lösungen.",
  fullBio: `### **Technical Lead & Senior Full-Stack Engineer | Automotive & FinTech Specialist**

Mit über 13 Jahren Erfahrung in der Entwicklung hochperformanter verteilter Systeme bin ich auf technische Leitung, die Modernisierung veralteter Architekturen und die Bereitstellung skalierbarer, cloud-nativer Lösungen spezialisiert. Mein beruflicher Werdegang reicht von der Entwicklung kritischer Automatisierungs-Frameworks bei **Alpine Electronics** bis hin zur Vorantreibung der digitalen Transformation von Enterprise-Datenplattformen bei der **DAT Group**. Ich zeichne mich dadurch aus, funktionsübergreifende Teams anzuleiten, um mit modernen Technologie-Stacks robuste Software zu entwickeln.

Ich schließe die Lücke zwischen komplexer Backend-Logik, intuitiven Frontend-Erlebnissen und strategischen Geschäftszielen. Meine Kernkompetenzen umfassen:

  * **Technische Leitung & Architektur**: Systemdesign vorantreiben und die Migration monolithischer **Java EE**-Anwendungen hin zu skalierbaren **Microservices** (Spring Boot, Azure) und modernen Frontends (React/Next.js) befürworten, was die Systemausfallsicherheit deutlich verbessert.
  * **Full-Stack Engineering Exzellenz**: Entwurf und Entwicklung responsiver, nutzerzentrierter Schnittstellen mit **React, Next.js und TypeScript**, nahtlos integriert mit robusten, sicheren **Java 21 / Spring Boot** APIs.
  * **DevOps & Quality Culture**: Eintreten für **TDD**, **Clean Code** Prinzipien und Etablierung von CI/CD-Automatisierung (Azure, GitHub Actions), um eine qualitativ hochwertige, vorhersehbare Softwarebereitstellung zu gewährleisten. Mentoring von Entwicklerteams zur Anhebung ihrer technischen Standards.
  * **KI-gestütztes Engineering**: Wegbereiter für schnelle Softwarebereitstellung durch die Verschmelzung von Enterprise-Rigor (Epics, Agile/Scrum, CI/CD) mit fortschrittlichen, KI-integrierten Workflows (Cursor, Windsurf). Dieser Ansatz beschleunigt die Neuentwicklung und optimiert das Refactoring komplexer Legacy-Monolithen, wodurch technische Schulden effektiv abgebaut werden.

---
*Derzeit auf der Suche nach einer Rolle als Technical Lead im Spring Boot- und React-Ökosystem. Offen für Hybrid-Positionen im Großraum Stuttgart oder 100% Remote innerhalb Deutschlands.*`,
  avatarUrl: "/images/linkedin-profile.png",
  skills: ["Java", "Spring Boot", "Spring Cloud", "React", "Next.js", "Azure", "Docker", "Kubernetes", "SQL/NoSQL", "IntelliJ IDEA", "KI Tools (Cursor, Windsurf, Antigravity, MCP)"],
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
    { language: "Deutsch", proficiency: "Verhandlungssicher" },
    { language: "Englisch", proficiency: "Verhandlungssicher" },
    { language: "Rumänisch", proficiency: "Muttersprache" },
    { language: "Französisch", proficiency: "Grundkenntnisse" }
  ]
};

export const about: AboutData = {
  greeting: "~/developer/portfolio",
  name: "Liviu",
  suffix: ".io",
  lastName: "NESI",
  description: "Technical Lead & Senior Full-Stack Engineer. Ich baue das digitale Rückgrat der Automobil- und Fintech-Branche. Mein Fokus liegt auf Spring Boot-Microservices, React-Frontends und der Steuerung hochfrequenter Enterprise-Softwarebereitstellung durch KI-gestützte Workflows.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: "Projekte, nicht nur Code",
  ctaSecondary: "Kontaktieren Sie mich"
};

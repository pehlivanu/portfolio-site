export const experience = [
  {
    id: 1,
    type: "senior",
    role: "Senior Software Developer",
    company: "DAT Group",
    companySize: "501-1,000 Mitarbeiter",
    industry: "Automotive Software",
    locationType: "Remote / Hybrid",
    websiteUrl: "https://www.dat.eu",
    period: "Sep 2020 - Mar 2026",
    summary: `Teil des Teams Costing Applications hinter SilverDAT 3 „calculate" — dem von Kfz-Versicherungen anerkannten Standard zur Reparaturkostenkalkulation, der herstellerbasierte Kostenvoranschläge für Wartungs-, Verschleiß- und Unfallreparaturen über mehr als 70.000 Modellvarianten erstellt (Ersatzteile, Arbeitswerte, Lacksysteme, OEM-Reparaturanleitungen). Genutzt von Werkstätten, Autohäusern, Kfz-Sachverständigen, Versicherungen, Banken und Herstellern.`,
    description: `*   Erweiterung, Wartung und Test bestehender Java-EE-Services (SOA-/SOAP-Monorepo mit JavaScript/React-Frontends); Anpassung der SoapUI- und manuellen Testsuiten bei Service-Änderungen, ergänzt um TestNG-/Mockito-Abdeckung.
*   End-to-End-Architektur und -Verantwortung neuer Spring-Boot-Services als Ablösung von Java EE — Clean N-Tier-Architektur mit striktem DTO-Mapping, zentraler Fehlerbehandlung und verteiltem Tracing (MDC) — mit Contract-First-, HATEOAS-konformen REST-APIs (OpenAPI), abgesichert durch JUnit-5-/MockMvc-Integrationstests und Postman-Collections mit automatisierten Tests.
*   Verwaltung der Datenschicht mit JPA/Hibernate: PostgreSQL löste die bestehenden SQL-Datenbanken (v. a. Oracle SQL) ab, und MongoDB führte NoSQL in einen zuvor rein SQL-basierten Stack ein.
*   Neuaufbau von Legacy-JavaScript-Frontends zu modernen, reaktionsschnellen React-/TypeScript-Komponenten; Optimierung der Architektur mit Effector (State-Management) und PrimeReact.
*   CI/CD: Legacy-Plattform mit Gradle auf Jenkins gebaut und auf Test- und Produktivumgebungen ausgeliefert; neue Services über den Gradle Wrapper. Deployment nach Azure Kubernetes (AKS) über Build- und Release-Pipelines mit Helm-Charts und NGINX-Ingress. Docker Compose für die lokale Entwicklung. Versionsverwaltung von GitLab nach Azure Repos migriert. Legacy läuft mit 6 Releases/Jahr per Kanban in Jira, neue Services in Continuous Delivery.
*   Modernisierung des ererbten Spring-Boot-Parent-Builds (OpenRewrite für automatische Versions-Upgrades über die BOM-Grenze hinaus, Renovate-Bot auf Azure für Abhängigkeits-Updates); Umstellung der Konfiguration von ordnerbasierten Properties auf Spring-Profile.
*   Aufbau eines KI-gestützten Workflows über IntelliJ IDEA (CodeGPT mit lokalem Azure-LLM), Cursor und Windsurf zur Dokumentation und Analyse von Legacy-Code, Anforderungsextraktion und Implementierung neuer Services bei 100 % SonarQube-sauberem Code.
*   Prägung der technischen Ausrichtung: Wo ich einen besseren Weg fand, habe ich ihn per Prototyp im lauffähigen Code nachgewiesen und im Team-Workshop vorgestellt (REST-/API-First-Design, modernes React und Next.js, OpenRewrite für automatische Upgrades, Dependabot sowie eine Bewertung von Spring Cloud Gateway als Ablösung des DAT-eigenen Gateways).`,
    tech: [
      { category: "Backend", skills: ["Java 17+", "Jakarta EE", "Spring Boot 3+", "Spring Cloud", "REST-APIs", "OpenAPI", "Microservices", "SOA/SOAP", "WSDL"] },
      { category: "Frontend", skills: ["JavaScript", "HTML", "CSS", "React", "TypeScript", "Effector", "PrimeReact"] },
      { category: "Datenbanken", skills: ["PostgreSQL", "Oracle", "MongoDB", "H2", "JPA", "Hibernate", "JDBC"] },
      { category: "Testing", skills: ["TestNG", "Mockito", "JUnit 5", "MockMvc", "Testcontainers"] },
      { category: "CI/CD & DevOps", skills: ["Jenkins", "GitLab CI/CD", "Gradle", "Node.js", "Docker", "Azure", "Kubernetes (AKS)", "Helm", "NGINX Ingress", "OpenRewrite", "Renovate", "Dependabot"] },
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
    summary: `Bereitstellung kritischer digitaler Lösungen für die Versicherungs- und Automobilbranche.`,
    description: `*   **Skalierung von Legacy-Systemen**: Wartung und Entwicklung von **WebSphere Java EE (JSP)**-Kernanwendungen. Diese wichtige Arbeit sicherte den stabilen Umsatzstrom, der das Hyperwachstum des Unternehmens von 16 auf über 200 Mitarbeiter unterstützte.
*   **Backend-Entwicklung**: Entwicklung leistungsstarker Integrationsdienste für große **Bankenkunden** mit **Java EE** und **Micronaut** in Zusammenarbeit mit externen Frontend-Teams für nahtlosen B2B-Datenaustausch.
*   **Implementierung von Microsoft-Lösungen**: Fungierte als Hauptentwickler für die neue Einheit "Microsoft Delivery". Implementierung von Unternehmensintranets und Prozessautomatisierung mit **SharePoint** und **Microsoft Flow**, Übersetzung strategischer Anforderungen in funktionale automatisierte Workflows.
*   **Frontend-Expertise & Zertifizierungen**: Zertifizierung in BPM als **Pega CSA** und Beginn meines Microsoft-Zertifizierungspfades mit Frontend-Zertifizierung für **HTML5, CSS3 und JavaScript**. Anwendung dieses Wissens zur Wartung und Verbesserung verschiedener Web-Schnittstellen.`,
    tech: [
      { category: "Backend", skills: ["Java EE", "Micronaut", "WebSphere"] },
      { category: "Datenbanken", skills: ["Oracle SQL", "PostgreSQL"] },
      { category: "CI/CD & DevOps", skills: ["Docker", "Jenkins", "Git"] },
      { category: "Testing & Qualität", skills: ["JUnit", "SonarQube"] },
      { category: "Sonstiges", skills: ["SharePoint", "Microsoft Flow"] },
      { category: "Methodik", skills: ["SAFe", "SCRUM"] },
      { category: "Zertifizierungen", skills: ["Pega CSA"] },
    ],
  },
  {
    id: 3,
    type: "junior",
    role: "Junior Softwareentwickler",
    company: "PRODYNA AG",
    companySize: "201-500 Mitarbeiter",
    industry: "IT Consulting",
    locationType: "Vor Ort / Reisen",
    websiteUrl: "https://www.prodyna.com",
    period: "Nov 2014 - Jan 2016",
    summary: `Bereitstellung von Experten-IT-Beratung für Unternehmensportale.`,
    description: `*   **Unternehmensportale**: Entwicklung und Bereitstellung komplexer **Liferay**-Portallösungen für Großkunden unter Verwendung von **Java EE**, **MySQL** und **AlloyUI**.
*   **Agile Lieferung**: Zusammenarbeit in SCRUM-Teams zur Lieferung hochwertiger Software-Inkremente unter Verwendung von **Jira** und **Confluence** zur transparenten Projektverfolgung.
*   **Qualitätssicherung**: Integration von **SonarQube** in den Build-Prozess zur Sicherstellung von Codequalität und Wartbarkeit vom ersten Tag an.
*   **Erreichte Zertifizierungen**: Validierung der Kernkompetenzen durch Erlangung von **Oracle Certified Professional Java Programmer (OCPJP)** und **Oracle Certified Expert Web Component Developer (OCE WCD)**.`,
    tech: [
      { category: "Backend", skills: ["Java EE", "Liferay"] },
      { category: "Frontend", skills: ["AlloyUI"] },
      { category: "Datenbanken", skills: ["MySQL"] },
      { category: "Qualität", skills: ["SonarQube"] },
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
    period: "Sep 2012 - Aug 2014",
    summary: `Entwicklung kritischer Testautomatisierungstools für Infotainment-Systeme der nächsten Generation im Automobilbereich.`,
    description: `*   **Framework-Entwicklung**: Design und Implementierung des "Alpine Curve Editor" und anderer Module für das **Alpine Test Automation Tool**. Refactoring des gesamten Frontends unter Verwendung des **MVC**-Musters, Neuanordnung des UI-Prototyps und signifikante Verbesserung der Softwarequalität mit **StyleCop**.
*   **Innovation**: Entwicklung einer "Tablet Robot Interface Control" (TRIC)-App mit dem **Android SDK**, die die Fernsteuerung von Industrierobotern für Touchscreen-Tests ermöglicht.
*   **Thesis-Exzellenz**: Auszeichnung mit der Bestnote (1,0) für die Thesis über "Alpine Curve Editor" in Anerkennung der architektonischen Robustheit und Nützlichkeit des Tools.`,
    tech: [
      { category: "Backend", skills: ["C#", ".NET"] },
      { category: "Frontend & Mobile", skills: ["WPF", "MVC", "Android SDK"] },
      { category: "Qualität", skills: ["StyleCop"] },
    ],
  },
];

export const education = [
  {
    id: 1,
    type: "dual-study",
    studyField: "Ausbildung",
    degree: "Staatlich geprüfter Informatiker",
    school: "Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)",
    url: "https://gds2.de",
    location: "Böblingen, Deutschland",
    year: "2011 - 2014",
    summary: "Intensives duales Studium mit den Schwerpunkten Softwareentwicklung, Datenbanksysteme und Projektmanagement.",
    description: "3-jähriges Berufskolleg. Beinhaltete ein einjähriges Betriebspraktikum bei der Alpine Electronics R&D Europe GmbH mit der Praktikumsarbeit: \"Alpine Voltage Curve Editor\" (Note: sehr gut).",
    grade: "Mit Belobigung",
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
    summary: "Spezialisierte Ausbildung in Pädagogik und Didaktik für den Mathematikunterricht.",
    description: "Erweitertes akademisches Programm mit Schwerpunkt auf komplexen mathematischen Modellen und Lehrmethoden. Das erste Jahr dieses Masterstudiums wurde im Rahmen des Erasmus-Programms an der Universität Stuttgart absolviert. Schwerpunkte des Studiums: Vektoranalysis, höhere Algebra und Geometrie, iterative Methoden, Wahrscheinlichkeitstheorie und Lernsoftware/Bildungsmanagement.",
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
    summary: "Doppelstudium, das eine fundierte Basis in abstrakter Mathematik und angewandter Informatik bietet.",
    description: "Duales Studium, das theoretische Mathematik mit angewandter Informatik und Softwareentwicklung verbindet. Schwerpunkte des Studiums: Datenstrukturen, Künstliche Intelligenz, Datenbanksysteme, Rechnernetze, algorithmische Geometrie, logische und funktionale Programmierung sowie mathematische Modellierung und Simulation.",
    grade: "10 / 10 (Abschlussprüfung) | 9,02 / 10 (Gesamtdurchschnitt)",
  },
  {
    id: 4,
    type: "high-school",
    studyField: "Gymnasium",
    degree: "Abiturdiplom (Bacalaureat)",
    school: "Nationales Kollegium für Informatik \"Spiru Haret\" Suceava",
    url: "https://www.cni-sv.ro/",
    location: "Suceava, Rumänien",
    year: "2002 - 2006",
    summary: "Intensiver Lehrplan in Informatik und Mathematik.",
    description: "Profil: Mathematik & Informatik (Intensiv).",
    grade: "9,81 / 10",
  },
];

export const projects = [
  {
    id: 1,
    title: "Filmpire Microservices Platform",
    description:
      "Eine durchgängige Enterprise-Microservices-Plattform für die Filmentdeckung, verwaltet von der Idee bis zum lieferfertigen Produkt mithilfe von GitHub Projects Kanban-Boards (Epics, Stories, Tasks). Acht unabhängige Java 25 / Spring Boot 3.5 Services inklusive Spring Cloud (Eureka, API Gateway), unterstützt durch eine hybride PostgreSQL/MongoDB-Strategie und einen Redis-Cache als Fallback für die TMDB-API. Integriert Spring AI (Whisper/GPT-4) über REST und gRPC. Nach strengen modernen Standards entwickelt — Record-DTOs, Constructor-Injection, Virtual Threads — und mit einer rigorosen Testabdeckung (JUnit 5, Testcontainers, 85% JaCoCo-Coverage), integriert in GitHub Actions CI/CD. Bereitgestellt mit Kubernetes auf Minikube.",
    tech: ["Java 25", "Spring Boot 3.5", "Spring Cloud", "PostgreSQL", "MongoDB", "Redis", "Spring AI", "gRPC", "REST", "JUnit 5", "Testcontainers", "JaCoCo", "GitHub Actions", "Docker", "Podman", "Kubernetes"],
    githubUrl: "https://github.com/pehlivanu/filmpire-microservices",
    deployUrl: "",
  },
  {
    id: 2,
    title: "Defense Asset Manager",
    description:
      "Eine Enterprise-React 19-Anwendung für das Anlagen- und Personalmanagement im Verteidigungssektor, die eine strikte Feature-basierte (Domain-Driven) Architektur durchsetzt, um die SAFe-Auslieferung über mehrere Teams hinweg zu unterstützen. Vollständig typisierte Contract-First-Entwicklung gegen OpenAPI 3.1 und auf Vite für sofortiges HMR aufgebaut. Verwendet Zustand mit Immer für Immutable State, Mock Service Worker für Offline-REST-Mocking und kontrastreiche Material UI v9-Komponenten mit sicherheitskritischer UX wie Bestätigungen für destruktive Aktionen.",
    tech: ["React 19", "Vite", "Zustand", "Material UI v9", "MSW", "OpenAPI 3.1", "TypeScript", "Vitest"],
    githubUrl: "https://github.com/pehlivanu/defense-asset-manager",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Antigravity IDE Portfolio",
    description:
      "Ein hochgradig interaktives Entwickler-Portfolio, das die Ästhetik der Google Antigravity-IDE akribisch nachbildet — Activity Bar, File-Tree Explorer, Editor-Bereich, Live-Statusleiste und eine funktionierende Command Palette — basierend auf dem Next.js 15 App Router mit immersiven Framer Motion Mikro-Animationen. Bietet eine automatische CV-Generierung in PDF mit mehreren Vorlagen und Sprachen sowie ein dynamisches Kontaktformular, das die Geolocation-API nutzt, um die physische Entfernung zwischen Besucher und Entwickler zu berechnen und anzuzeigen.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Geolocation API", "PDF Generation", "Framer Motion"],
    githubUrl: "https://github.com/pehlivanu/portfolio-site",
    deployUrl: "https://liviuionesi.vercel.app",
  },
  {
    id: 4,
    title: "Filmpire Frontend",
    description:
      "Eine moderne, interaktive Filmentdeckungs-App in React 17 und Redux Toolkit, die als dedizierter Frontend-Client für das aus 8 Services bestehende Filmpire-Microservices-Backend dient. Integriert die TMDB-API zum Durchsuchen von Kategorien und Verwalten von Favoriten. Das prägende Feature ist eine Alan AI SDK-Integration, die eine vollständig konversationsbasierte Sprachoberfläche bietet. Qualitätskontrolle durch Jest / React Testing Library und ESLint (Airbnb).",
    tech: ["React 17", "Material-UI", "Redux Toolkit", "Alan AI"],
    githubUrl: "https://github.com/pehlivanu/filmpire",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
  {
    id: 5,
    title: "Knowledge Base Platform",
    description:
      "Ein Enterprise-bereites, lokalisiertes Dokumentationssystem, basierend auf Next.js 16 und React 19 Server Components für einen minimalen Client-Payload. Fungiert als Static Site Generator, der eine einfache Sammlung von Markdown-Dateien (.md) in eine vollständige Wiki-Website verwandelt. Bietet tiefgehende Internationalisierung via next-intl auf der Middleware-Ebene, wobei die interne Dokumentation durch eine benutzerdefinierte Edge-Middleware geschützt ist, die HttpOnly-Cookies verifiziert.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "next-intl", "Markdown"],
    githubUrl: "https://github.com/pehlivanu/knowledge-base-platform",
    deployUrl: "https://phenix-wiki.vercel.app",
  },
  {
    id: 6,
    title: "DevOps Toolchain Showcase",
    description:
      "Ein vollständig containerisierter, deklarativer CI/CD-Toolchain-Showcase zur Demonstration von Enterprise-DevOps-Praktiken, orchestriert über Podman Compose. Ein maßgeschneiderter Jenkins-Server nutzt Docker-outside-of-Docker (DooD), um Anwendungs-Images über ein mehrstufiges Jenkinsfile zu erstellen und hochzuladen. Automatisiert das JaCoCo-Coverage-Reporting und die Artifact-Veröffentlichung in JFrog Artifactory und nutzt benutzerdefinierte Bash + curl + jq Skripte, um Testmetriken über REST-APIs an externe ALM/MQC-Systeme zu senden.",
    tech: ["Jenkins", "JFrog Artifactory", "Podman", "Gradle", "Java 17"],
    githubUrl: "https://github.com/pehlivanu/devops-toolchain-showcase",
    deployUrl: "",
  },
  {
    id: 7,
    title: "DevFlow - Full-Stack Q&A Platform",
    description:
      "Eine anspruchsvolle, von der Community getragene Entwickler-Q&A-Plattform, die nativ auf dem Next.js 14 App Router aufbaut und Server Actions anstelle einer separaten API-Ebene verwendet. Bietet ein robustes Tagging-System, eine globale Suche über Fragen, Antworten, Benutzer und Tags sowie personalisierte Empfehlungs-Feeds. Ein fortschrittliches Reputations- und Badge-System gamifiziert die Teilnahme, die Authentifizierung erfolgt über NextAuth.js (Google/GitHub OAuth + Zugangsdaten) mit End-to-End Zod-Validierung, und die OpenAI-API generiert umfassende KI-Antworten und Code-Snippets.",
    tech: ["Next.js 14", "TypeScript 5", "MongoDB Atlas", "Tailwind CSS", "OpenAI API", "NextAuth", "Zod"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 8,
    title: "Python GUI Automation Framework",
    description:
      "Eine resiliente, plattformübergreifende Python-Desktop-Anwendung mit einer Tkinter-GUI, die eine Android-Anwendung steuert und automatisiert. Verwendet OpenCV Template Matching, um dynamische On-Device-UI-Elemente über die Android Debug Bridge (ADB) visuell zu erkennen und mit ihnen zu interagieren, anstatt eine zugrunde liegende API zu nutzen. Integriert menschenähnliche Interaktionsprofile — Koordinaten-Jitter und zufälliges Timing — um Bot-Erkennungsheuristiken zu umgehen, und läuft entweder über die GUI oder headless als Linux-Daemon.",
    tech: ["Python 3.10", "OpenCV", "Tkinter", "ADB", "Bash"],
    githubUrl: "https://github.com/pehlivanu/gui-automation-framework",
    deployUrl: "https://phenix-wiki.vercel.app/en/docs/automation-app",
  },
  {
    id: 11,
    title: "Alana Windsurf",
    description:
      "Eine skalierbare Full-Stack-Webanwendung basierend auf dem Next.js 13+ App Router und React 18+. Bietet umfassende Authentifizierung via NextAuth.js — OAuth (Google, GitHub) sowie sichere E-Mail/Passwort-Anmeldedaten — mit Datenpersistenz in MongoDB über Mongoose. Der Zustand wird über React Context und useReducer verwaltet, Formulare werden robust mit React Hook Form und Zod gehandhabt, und die Benutzeroberfläche ist mit Material UI und Emotion gestaltet.",
    tech: ["Next.js 13+", "React 18+", "Material UI", "NextAuth.js", "MongoDB", "Zod"],
    githubUrl: "https://github.com/pehlivanu/alana-windsurf",
    deployUrl: "",
  },
  {
    id: 12,
    title: "Payload E-Commerce Platform",
    description:
      "Eine umfassende E-Commerce-Lösung, die das Payload CMS-Framework mit einem statischen Next.js-Frontend kombiniert. Beinhaltet ein voll funktionsfähiges Backend mit einem Enterprise-Admin-Panel, das sowohl physische Produkte als auch Paywall-beschränkte Inhalte verwaltet, integriert mit Stripe-Webhooks für die sichere Zahlungsabwicklung.",
    tech: ["Next.js", "Payload CMS", "Stripe", "React Hook Form"],
    githubUrl: "https://github.com/pehlivanu/e-commerce",
    deployUrl: "",
  },
];


export const linkedInProfile = {
  name: "Liviu Ionesi",
  headline: "Tech Lead | Senior Full-Stack Engineer | Java, Spring Boot, React, Next.js",
  location: "Kirchheim unter Teck, Deutschland",
  phone: "+49 1514 6966 832",
  address: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck",
  email: "ionesiliviu@yahoo.com",
  connections: "500+",
  about: "Technical Lead & Senior Full-Stack Engineer. Aufbau des digitalen Rückgrats der Automobil- und Fintech-Branche. Mit über 13 Jahren Erfahrung im Engineering von hochleistungsfähigen verteilten Systemen, spezialisiere ich mich auf technische Leitung, die Modernisierung von Legacy-Architekturen und die Bereitstellung skalierbarer, Cloud-nativer Lösungen.",
  fullBio: `### **Technical Lead & Senior Full-Stack Engineer | Experte für Automotive & FinTech**

Mit über 13 Jahren Erfahrung im Engineering von hochleistungsfähigen verteilten Systemen spezialisiere ich mich auf technische Leitung, die Modernisierung von Legacy-Architekturen und die Bereitstellung skalierbarer, Cloud-nativer Lösungen. Meine Karriere erstreckt sich von der Entwicklung kritischer Automatisierungs-Frameworks bei **Alpine Electronics** bis hin zur Vorantreibung der digitalen Transformation von Enterprise-Datenplattformen bei der **DAT Group**. Ich zeichne mich durch die Führung funktionsübergreifender Teams bei der Entwicklung robuster Software mit modernen Tech-Stacks aus.

Ich schlage die Brücke zwischen komplexer Backend-Logik, intuitiven Frontend-Erlebnissen und strategischen Geschäftszielen. Zu meinen Kernkompetenzen gehören:

  * **Technische Leitung & Architektur**: Steuerung des Systemdesigns und Förderung der Migration monolithischer **Java EE**-Anwendungen hin zu skalierbaren **Microservices** (Spring Boot, Azure) und modernen Frontends (React/Next.js), was die Systemresilienz maßgeblich verbessert.
  * **Full-Stack Engineering-Exzellenz**: Architektur und Entwicklung responsiver, nutzerzentrierter Oberflächen mit **React, Next.js und TypeScript**, nahtlos integriert mit robusten und sicheren **Java 21 / Spring Boot** APIs.
  * **DevOps & Qualitätskultur**: Förderung von **TDD**, **Clean Code**-Prinzipien und Etablierung von CI/CD-Automatisierung (Azure, GitHub Actions) für eine hochqualitative und verlässliche Softwarebereitstellung. Mentoring von Entwicklungsteams zur Steigerung der technischen Standards.
  * **KI-gestütztes Engineering**: Vorreiter in der rasanten Softwarebereitstellung durch die Verschmelzung von Enterprise-Rigorosität (Epics, Agile/Scrum, CI/CD) mit fortschrittlichen, KI-integrierten Workflows (Cursor, Windsurf). Dieser Ansatz beschleunigt Greenfield-Entwicklungen und vereinfacht das Refactoring komplexer Legacy-Monolithen, wodurch technische Schulden effektiv reduziert werden.

---
*Aktuell suche ich nach einer Rolle als Technical Lead im Spring Boot- und React-Ökosystem. Offen für hybride Positionen im Raum Stuttgart oder vollständige Remote-Tätigkeiten innerhalb Deutschlands.*`,
  avatarUrl: "/images/linkedin-profile.png",
  skills: ["Java", "Spring Boot", "Spring Cloud", "React", "Next.js", "Azure", "Docker", "Kubernetes", "SQL/NoSQL", "IntelliJ IDEA", "KI-Tools (Cursor, Windsurf, Antigravity, MCP)"],
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

export const about = {
  greeting: "~/developer/portfolio",
  name: "Liviu",
  suffix: ".io",
  lastName: "NESI",
  description: "Technical Lead & Senior Full-Stack Engineer. Aufbau des digitalen Rückgrats der Automobil- und Fintech-Branche. Ich bin spezialisiert auf Spring Boot Microservices, React Frontends und die Vorantreibung von Enterprise-Softwarebereitstellung in hoher Geschwindigkeit durch KI-gestützte Workflows.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: "Projekte, nicht nur Code",
  ctaSecondary: "Kontaktieren Sie mich"
};

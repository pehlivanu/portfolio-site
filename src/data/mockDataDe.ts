export const experience = [
  {
    id: 1,
    type: "senior",
    role: "Senior Software Developer",
    company: "DAT Group",
    period: "Sep 2020 - Present",
    description: `
Vorantreiben von Qualitätsinitiativen und Architekturanalyse für Fahrzeugbewertungsplattformen.

*   **Wartung & Modernisierung von Legacy-Systemen**: Wartung kritischer Legacy-Systeme (**Java EE SOA**, **Oracle SQL**, **JavaScript**) bei gleichzeitiger schrittweiser Entwicklung moderner Ersatzdienste.
*   **Engineering-Exzellenz**: Design und Implementierung eines Flaggschiff-Microservices, der als der **"am besten dokumentierte, getestete und architektonisch durchdachte"** Service in der Unternehmensgeschichte anerkannt wurde und einen neuen Standard für Entwicklungsqualität setzte.
*   **Architekturanalyse**: Analyse der bestehenden benutzerdefinierten Gateway-Implementierung, die als Architektur-Antipattern identifiziert wurde. Vorschlag für einen Übergang zu Standard-**Spring Cloud**-Komponenten zur Beseitigung von Latenz und Komplexität.
*   **Qualitätssicherungs-Champion**: Hauptansprechpartner für Codequalität. Behebung von Tausenden von **SonarQube**-Problemen und Durchsetzung strenger **IntelliJ-Inspektionen**, wodurch technische Schulden erheblich reduziert wurden.
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
Bereitstellung kritischer Softwarelösungen für die Versicherungs- und Fintech-Branche mit Fokus auf Stabilität und Prozessautomatisierung.

*   **Microservices-Einführung**: Wegbereitung für den Übergang von Legacy-Modulen zu Microservice-Architekturen unter Verwendung von **Micronaut** und **Docker** zur Verbesserung der Systemskalierbarkeit.
*   **Enterprise Java**: Wartung und Erweiterung komplexer **Java EE**-Anwendungen auf IBM WebSphere, um eine hohe Verfügbarkeit für Versicherungskunden sicherzustellen.
*   **Prozessautomatisierung**: Entwicklung maßgeschneiderter Intranet-Lösungen und automatisierter Geschäftsabläufe mit **Microsoft SharePoint** und Power Automate.
*   **Agile Lieferung**: Zusammenarbeit in funktionsübergreifenden agilen Teams zur Lieferung inkrementellen Mehrwerts unter Nutzung von Jira und Confluence.
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
Fachkundige technische Beratung für Enterprise-Portal-Lösungen, die die Lücke zwischen Geschäftsanforderungen und technischer Umsetzung schließt.

*   **Portalentwicklung**: Entwicklung maßgeschneiderter Enterprise-Portale mit **Liferay** und Java EE, angepasst an spezifische Kundenbedürfnisse.
*   **Full-Stack-Implementierung**: Entwicklung von End-to-End-Funktionen mit Java für die Backend-Logik und HTML/CSS/JavaScript für die Frontend-Anpassung.
*   **Qualitätssicherung**: Integration von **SonarQube** in den Build-Prozess zur Aufrechterhaltung einer hohen Codequalität und zur Reduzierung technischer Schulden von Anfang an.
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
Absolvierung eines anspruchsvollen Dualen Studiums, das akademische Exzellenz mit praktischer Softwareentwicklung im Automobilbereich verbindet.

*   **Testautomatisierung**: Design und Aufbau modularer Testautomatisierungs-Frameworks für Infotainment-Systeme im Automobilbereich unter Verwendung von **C#** und **WPF**.
*   **UI-Engineering**: Entwicklung komplexer Desktop-Benutzeroberflächen unter Implementierung des **MVVM**-Musters für Echtzeit-Datenvisualisierung und Gerätesteuerung.
*   **Exzellente Thesis**: Verfassen einer erstklassigen Abschlussarbeit über Softwarearchitektur und Entwurfsmuster, die die Entwicklung kritischer Testwerkzeuge dokumentiert.
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
    description: "Intensives Duales Studium mit den Schwerpunkten Software Engineering, Datenbanksysteme und Projektmanagement. Abschlussarbeit mit der Note 1,0 (Sehr gut)."
  },
  {
    id: 2,
    degree: "Master's in Computer Science",
    school: "West University of Timisoara",
    year: "2009 - 2011",
    description: "Fortgeschrittene Studien in Verteilten Systemen, Künstlicher Intelligenz und Softwarearchitektur."
  },
  {
    id: 3,
    degree: "Bachelor's in Mathematics & Computer Science",
    school: "West University of Timisoara",
    year: "2006 - 2009",
    description: "Fundierte Grundlagen in Algorithmen, Datenstrukturen und Theoretischer Informatik."
  },
];

export const projects = [
  {
    id: 1,
    title: "DevFlow",
    description: "Eine moderne Community-Plattform für Entwickler zum Wissensaustausch, mit KI-gestützten Empfehlungen und einer responsiven Benutzeroberfläche.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "Clerk Auth"],
    link: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 2,
    title: "Family Cash Card",
    description: "Eine sichere REST-API für das Familienfinanzmanagement mit granularer rollenbasierter Zugriffskontrolle (RBAC) und Audit-Logging.",
    tech: ["Spring Boot 3", "Java 17", "Spring Security", "PostgreSQL", "JWT"],
    link: "https://github.com/pehlivanu/familycashcard",
  },
  {
    id: 3,
    title: "Runnerz",
    description: "Eine Full-Stack-Fitness-Tracking-Anwendung, die die neuesten Spring Boot 3-Funktionen einschließlich JDBC Client und Docker Compose-Integration demonstriert.",
    tech: ["Java 21", "Spring Boot 3", "PostgreSQL", "Docker", "Google Maps API"],
    link: "https://github.com/pehlivanu/runnerz",
  },
  {
    id: 4,
    title: "Filmpire",
    description: "Eine immersive Filmentdeckungs-App mit Sprachsuche (KI), Kategoriefilterung und einem reichhaltigen, responsiven Material Design.",
    tech: ["React", "Material UI", "Redux Toolkit", "Alan AI", "TMDB API"],
    link: "https://filmpire-ten.vercel.app/",
  },
];

export const hero = {
  greeting: "~/developer/portfolio",
  name: "Liviu",
  suffix: ".io",
  lastName: "NESI",
  description: "Übergang von robusten Java EE-Architekturen in die dynamische Welt von Spring Boot, gepaart mit leistungsstarken UI-Frameworks und KI-beschleunigtem Prototyping.",
  ctaPrimary: "Projekte",
  ctaSecondary: "Kontakt"
};

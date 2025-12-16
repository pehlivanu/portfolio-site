export const experience = [
  {
    id: 1,
    type: "senior",
    role: "Développeur Logiciel Senior",
    company: "DAT Group",
    companySize: "501-1 000 employés",
    industry: "Logiciel Automobile",
    locationType: "Télétravail / Hybride",
    websiteUrl: "https://www.dat.eu",
    period: "Sep 2020 - Présent",
    summary: `Modernisation de l'écosystème "SilverDAT", la norme industrielle pour les données automobiles et la gestion des sinistres.`,
    description: `*   **Innovation Architecturale** : J'ai modifié la stratégie d'ingénierie pour **tirer pleinement parti de l'écosystème Spring Boot** au lieu de maintenir des anti-patrons complexes "indépendants du framework". J'ai introduit **OpenRewrite** et **Renovate** pour la maintenance automatisée, et standardisé sur **JUnit 5 & MockMvc**. J'ai promu le développement **Contract-First** pour le travail parallèle FE/BE. J'ai réalisé la **Livraison Continue** pour les nouveaux projets, tout en optimisant le cycle de publication trimestriel des fonctionnalités pour les logiciels existants.
*   **Excellence en Ingénierie** : J'ai préconisé des structures **Monorepo** et des **Modules Java** pour organiser le code existant, tout en promouvant une approche "Tableau de Bord Unifié" par rapport aux micro-frontends pour assurer des tests intégrés et une cohésion.
*   **Gestion des API** : J'ai préconisé la standardisation de la gestion des API publiques en utilisant **OpenAPI**, assurant des contrats clairs et une intégration plus facile pour les partenaires.
*   **Refonte Frontend** : J'ai reconstruit les applications JS existantes en utilisant **React et TypeScript**, offrant une expérience utilisateur moderne et réactive pour nos clients.
*   **Modernisation Assistée par IA** : J'ai exploité des outils d'IA pour documenter, refactoriser et optimiser les composants Java EE existants critiques, tout en déboguant et en testant dans **IntelliJ IDEA**.
*   **Intégration DevOps** : J'ai standardisé le développement local en utilisant **Docker Compose** et **Testcontainers**, tout en préconisant des déploiements backend standard **Kubernetes** et **Vercel** pour le frontend.`,
    tech: ["Java 17+", "Spring Boot", "Spring Cloud", "React", "TypeScript", "Docker", "Kubernetes", "OpenRewrite", "Renovate", "JUnit 5", "MockMvc"],
  },
  {
    id: 2,
    type: "mid",
    role: "Développeur Logiciel",
    company: "evia solutions GmbH",
    companySize: "51-200 employés",
    industry: "Services IT & Conseil",
    locationType: "Sur site",
    websiteUrl: "https://www.evia.de",
    period: "Fév 2016 - Août 2020",
    summary: `Fourniture de solutions numériques critiques pour les secteurs de l'Assurance et de l'Automobile.`,
    description: `*   **Mise à l'échelle des Systèmes Existants** : J'ai maintenu et développé des applications principales **WebSphere Java EE (JSP)**. Ce travail critique a assuré le flux de revenus stable qui a soutenu l'hyper-croissance de l'entreprise de 16 à plus de 200 employés.
*   **Développement Backend** : J'ai développé des services d'intégration haute performance pour des clients majeurs du secteur **Bancaire** en utilisant **Java EE** et **Micronaut**, en collaborant avec des équipes frontend externes pour un échange de données B2B transparent.
*   **Mise en œuvre de Solutions Microsoft** : J'ai servi de développeur principal pour la nouvelle unité "Microsoft Delivery". J'ai mis en œuvre des intranets d'entreprise et l'automatisation des processus en utilisant **SharePoint** et **Microsoft Flow**, traduisant les exigences stratégiques en flux de travail automatisés fonctionnels.
*   **Expertise Frontend & Certifications** : J'ai obtenu la certification en BPM en tant que **Pega CSA** et j'ai commencé mon parcours de certification Microsoft avec la certification frontend pour **HTML5, CSS3 et JavaScript**. J'ai appliqué ces connaissances pour maintenir et améliorer diverses interfaces web.`,
    tech: ["Java EE", "Micronaut", "WebSphere", "SharePoint", "Microsoft Flow", "Pega CSA", "HTML5/CSS3/JS"],
  },
  {
    id: 3,
    type: "junior",
    role: "Développeur Logiciel Junior",
    company: "PRODYNA AG",
    companySize: "201-500 employés",
    industry: "Conseil IT",
    locationType: "Sur site / Déplacements",
    websiteUrl: "https://www.prodyna.com",
    period: "Nov 2014 - Jan 2016",
    summary: `Fourniture de conseils IT experts pour les portails d'entreprise.`,
    description: `*   **Portails d'Entreprise** : J'ai développé et déployé des solutions de portail complexes **Liferay** pour des clients à grande échelle, en utilisant **Java EE**, **MySQL** et **AlloyUI**.
*   **Livraison Agile** : J'ai collaboré au sein d'équipes SCRUM pour livrer des incréments logiciels de haute qualité, en utilisant **Jira** et **Confluence** pour un suivi de projet transparent.
*   **Assurance Qualité** : J'ai intégré **SonarQube** dans le processus de build pour assurer la qualité et la maintenabilité du code dès le premier jour.
*   **Certifications Obtenues** : J'ai validé mon expertise de base en obtenant **Oracle Certified Professional Java Programmer (OCPJP)** et **Oracle Certified Expert Web Component Developer (OCE WCD)**.`,
    tech: ["Java EE", "Liferay", "MySQL", "AlloyUI", "SonarQube", "OCPJP", "OCE WCD"],
  },
  {
    id: 4,
    type: "intern",
    role: "Stage en Développement Logiciel",
    company: "Alpine Electronics R&D Europe",
    companySize: "1 000+ employés",
    industry: "Électronique Automobile",
    locationType: "Sur site",
    websiteUrl: "https://www.alpine.de/",
    dualStudy: "ADV Böblingen",
    period: "Sep 2012 - Août 2014",
    summary: `Conception d'outils critiques d'automatisation de tests pour les systèmes d'infodivertissement automobile de nouvelle génération.`,
    description: `*   **Développement de Framework** : J'ai conçu et mis en œuvre "Alpine Curve Editor" et d'autres modules pour **Alpine Test Automation Tool**. J'ai refactorisé l'ensemble du frontend en utilisant le modèle **MVC**, réorganisé le prototype d'interface utilisateur et considérablement amélioré la qualité du logiciel en utilisant **StyleCop**.
*   **Innovation** : J'ai développé une application "Tablet Robot Interface Control" (TRIC) utilisant le **SDK Android**, permettant le contrôle à distance de robots industriels pour les tests d'écrans tactiles.
*   **Excellence de Thèse** : J'ai obtenu la note maximale (1,0) pour la thèse sur "Alpine Curve Editor", reconnaissant la robustesse architecturale et l'utilité de l'outil.`,
    tech: ["C#", ".NET", "WPF", "MVC", "StyleCop", "SDK Android"],
  },
];

export const education = [
  {
    id: 1,
    type: "dual-study",
    studyField: "Étude en Alternance",
    degree: "Spécialiste Informatique Certifié",
    school: "GDS Schule 2",
    url: "https://gds2.de",
    location: "Böblingen, Allemagne",
    year: "2011 - 2014",
    summary: "Programme d'études en alternance intensif axé sur le génie logiciel, les systèmes de bases de données et la gestion de projet.",
    description: `*   **Spécialisation** : Génie Logiciel, Systèmes de Bases de Données, Gestion de Projet.
*   **Thèse** : "Alpine Curve Editor" - Noté **1,0 (Excellent)**.
*   **Cours Clés** : C/Assembleur (Intel 8085), Java (OO, Systèmes Distribués), SQL/JDBC, UML/Design Patterns, Linux, Programmation de Robots.
*   **Certifications** : Cisco CCNA Exploration Modules 1-4.`,
  },
  {
    id: 2,
    type: "master",
    studyField: "Master",
    degree: "Master en Didactique des Mathématiques",
    school: "Université de l'Ouest de Timisoara",
    url: "https://info.uvt.ro/en/",
    location: "Timisoara, Roumanie",
    year: "2009 - 2011",
    summary: "Formation spécialisée en Pédagogie et Didactique pour l'enseignement des mathématiques.",
    description: `*   **Objectif** : Certification professionnelle pour l'enseignement des mathématiques.
*   **Focus** : Mathématiques Avancées, Psychologie Pédagogique, Conception de Programmes.`,
  },
  {
    id: 3,
    type: "bachelor",
    studyField: "Licence",
    degree: "Licence en Mathématiques et Informatique",
    school: "Université de l'Ouest de Timisoara",
    url: "https://info.uvt.ro/en/",
    location: "Timisoara, Roumanie",
    year: "2006 - 2009",
    summary: "Double majeure offrant des bases distinctes en mathématiques abstraites et en informatique appliquée.",
    description: `*   **Majeure** : Mathématiques & Informatique.
*   **Compétences de base** : Calcul Avancé, Algèbre, Algorithmes, Structures de Données, Systèmes d'Exploitation.`,
  },
  {
    id: 4,
    type: "high-school",
    studyField: "Lycée",
    degree: "Diplôme de Baccalauréat",
    school: "Collège National d'Informatique \"Spiru Haret\"",
    url: "https://www.cni-sv.ro/",
    location: "Suceava, Roumanie",
    year: "2002 - 2006",
    summary: "Programme intensif d'informatique et de mathématiques.",
    description: `*   **Profil** : Mathématiques & Informatique (Intensif).`,
  },
];

export const projects = [
  {
    id: 1,
    title: "DevFlow",
    description: "Une plateforme communautaire moderne pour les développeurs pour partager des connaissances, avec des recommandations basées sur l'IA et une interface utilisateur réactive.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "Clerk Auth"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 2,
    title: "Family Cash Card",
    description: "Une API REST sécurisée de niveau bancaire pour la gestion des finances familiales avec un contrôle d'accès basé sur les rôles (RBAC) et une journalisation d'audit.",
    tech: ["Spring Boot 3", "Java 17", "Spring Security", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/pehlivanu/familycashcard",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Runnerz",
    description: "Une application de suivi de la condition physique complète présentant les dernières fonctionnalités de Spring Boot 3, y compris JDBC Client et l'intégration Docker Compose.",
    tech: ["Java 21", "Spring Boot 3", "PostgreSQL", "Docker", "Google Maps API"],
    githubUrl: "https://github.com/pehlivanu/runnerz",
    deployUrl: "",
  },
  {
    id: 4,
    title: "Filmpire",
    description: "Une application immersive de découverte de films avec recherche par commande vocale (IA), filtrage par catégorie et un design matériel riche et réactif.",
    tech: ["React", "Material UI", "Redux Toolkit", "Alan AI", "TMDB API"],
    githubUrl: "",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
];

export const linkedInProfile = {
  name: "Liviu Ionesi",
  headline: "Développeur Full Stack | Java | Spring Boot | Next.js",
  location: "Kirchheim unter Teck, Allemagne",
  phone: "+49 1415 6966 832",
  address: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck",
  email: "ionesiliviu@yahoo.com",
  connections: "500+",
  about: "Construire la colonne vertébrale numérique des industries Automobile et Fintech. Avec plus de 13 ans d'expérience dans l'ingénierie de systèmes distribués haute performance, je me spécialise dans la modernisation des architectures existantes et la fourniture de solutions évolutives et cloud-natives.",
  fullBio: `### **Construire la colonne vertébrale numérique des industries Automobile et Fintech.**

Avec plus de 13 ans d'expérience dans l'ingénierie de systèmes distribués haute performance, je me spécialise dans la modernisation des architectures existantes et la fourniture de solutions évolutives et cloud-natives. Mon parcours m'a mené du développement de cadres d'automatisation de tests critiques pour **Alpine Electronics** à l'innovation dans la transformation numérique des plateformes de données automobiles chez **DAT Group**.

Je fais le lien entre une logique backend complexe et des expériences frontend intuitives. Mon expertise réside dans :

  * **Modernisation Architecturale et Performance** : Plaidoyer pour la migration des systèmes monolithiques **Java EE** vers des **Microservices** (Spring Boot, Azure) et les meilleures pratiques en frontend (Next.js), améliorant considérablement la résilience et l'évolutivité du système.
  * **Excellence Full-Stack** : Création d'interfaces réactives et centrées sur l'utilisateur avec **React, Next.js et TypeScript**, soutenues par des API **Java 21** robustes.
  * **DevOps & Culture de la Qualité** : Défense du **TDD** et d'une philosophie d'automatisation CI/CD "Set and Forget" (Azure, GitHub Actions, Vercel), encadrant les équipes pour adopter les principes du **"Clean Code"**.
  * **Enterprise Vibe Coding** : Pionnier d'une nouvelle norme dans la livraison de logiciels en fusionnant la rigueur de niveau entreprise (Epics, Strories, TDD, CI/CD) avec la vitesse des IDE intégrés à l'IA (**Cursor, Windsurf, Antigravity**). J'applique cela non seulement aux nouveaux projets, mais aussi pour moderniser, documenter et refactoriser des monolithes EE existants complexes, assurant une amélioration continue et une réduction de la dette technique.

---
*Je recherche actuellement des opportunités en Télétravail ou Hybrides où je peux tirer parti de ma vision architecturale et de mon flux de travail amélioré par l'IA pour résoudre des défis d'ingénierie complexes.*`,
  avatarUrl: "/images/linkedin-profile.png",
  skills: ["Java", "Spring Boot", "Spring Cloud", "React", "Next.js", "Azure", "Docker", "Kubernetes", "SQL/NoSQL", "IntelliJ IDEA", "Outils IA (Cursor, Windsurf, Antigravity, MCP)"],
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
    { language: "Allemand", proficiency: "Compétence professionnelle" },
    { language: "Anglais", proficiency: "Compétence professionnelle" },
    { language: "Roumain", proficiency: "Langue maternelle ou bilingue" },
    { language: "Français", proficiency: "Compétence élémentaire" }
  ]
};

export const about = {
  greeting: "~/developer/portfolio",
  name: "Liviu",
  suffix: ".io",
  lastName: "NESI",
  description: "Senior Fullstack Architect & Engineer | Enterprise Vibe Coder. Construire la colonne vertébrale numérique des industries Automobile et Fintech. Pionier d'une nouvelle norme dans la livraison de logiciels en fusionnant la rigueur de niveau entreprise avec la vitesse des IDE intégrés à l'IA.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: "Projets, pas juste du code",
  ctaSecondary: "Contactez-moi"
};

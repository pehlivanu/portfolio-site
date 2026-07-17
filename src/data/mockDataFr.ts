export const experience = [
  {
    id: 1,
    type: "senior",
    role: "Senior Software Developer",
    company: "DAT Group",
    companySize: "501-1 000 employés",
    industry: "Logiciel Automobile",
    locationType: "Télétravail / Hybride",
    websiteUrl: "https://www.dat.eu",
    period: "Sep 2020 - Mar 2026",
    summary: `Membre de l'équipe Costing Applications dédiée à SilverDAT 3 « calculate » — le standard de calcul des coûts de réparation validé par les compagnies d'assurance. L'application génère des devis de réparation, d'entretien et de carrosserie basés sur les données constructeurs pour plus de 70 000 modèles de véhicules. Elle est utilisée par les garages, concessionnaires, experts automobiles, assureurs, banques et constructeurs.`,
    description: `*   Développement, maintenance, correction et test de services legacy Java EE (architecture SOA/SOAP monorepo avec interfaces JS/React), en exécutant et en adaptant de vastes suites de tests manuels et SoapUI en fonction de l'évolution des services.
*   Conception de l'architecture et responsabilité de bout en bout des nouveaux microservices Spring Boot (en remplacement des composants Java EE), avec la mise en place d'une Clean Architecture, d'un mapping DTO strict, d'une gestion centralisée des erreurs et d'un traçage distribué basé sur MDC pour garantir une excellente observabilité.
*   Spécification et implémentation d'API REST « contract-first », conformes au principe HATEOAS, en utilisant OpenAPI. Cela a permis d'obtenir des contrats clairs et de faciliter le développement en parallèle des équipes frontend et backend.
*   Gestion de la couche d'accès aux données avec JPA et Hibernate pour les nouveaux services Spring Boot (l'application legacy privilégiait une approche directe via JDBC) sur des bases PostgreSQL, Oracle et MongoDB, ainsi que H2 pour les tests en mémoire.
*   Refonte complète des anciennes applications JavaScript avec React et TypeScript pour créer des interfaces web modernes et réactives, accompagnée d'une optimisation de l'architecture frontend (gestion d'état via Effector et composants PrimeReact).
*   Mise en place d'une couverture de test rigoureuse avec des tests unitaires (TestNG/Mockito) tant pour les nouveaux développements sur le code legacy que pour les services modernes, complétée par plus de 200 tests d'intégration (JUnit 5, MockMvc, Postman).
*   CI/CD : Configuration des builds avec Gradle sur Jenkins pour la plateforme legacy (déploiement en test et production) et utilisation de Gradle Wrapper pour les nouveaux services. Ces derniers ont été déployés sur Azure Kubernetes (AKS) via des pipelines de release automatisés et des charts Helm (NGINX Ingress). Utilisation de Docker Compose et Testcontainers pour l'environnement de développement local. Migration du versioning de GitLab vers Azure Repos. Livraison d'environ 6 releases par an pour l'application legacy (méthodologie Kanban sous Jira).
*   Modernisation de la configuration de build Spring Boot héritée : la montée de version au-delà de 3.0.10 n'étant plus gérable manuellement, j'ai prototypé un plugin Gradle OpenRewrite pour automatiser cette tâche, et mis en place le bot Renovate sur Azure pour la mise à jour des dépendances tierces.
*   Déploiement d'un workflow assisté par l'IA (IntelliJ IDEA avec CodeGPT sur un modèle Azure LLM local, Cursor et Windsurf) afin d'accélérer la documentation et l'analyse du code existant, l'extraction des règles métier, la conception architecturale et l'implémentation de nouveaux services. Le résultat : un code maintenable et 100% clean sous SonarQube.
*   Évaluation de la faisabilité d'une migration de la passerelle API sur-mesure vers Spring Cloud Gateway. J'ai conclu et documenté que cette migration était irréalisable en l'état, car elle nécessitait la stack réactive Spring WebFlux, alors que nos passerelles reposaient sur des technologies basées sur les servlets.`,
    tech: [
      { category: "Backend", skills: ["Java 17+", "Jakarta EE", "Spring Boot 3+", "Spring Cloud", "REST APIs", "OpenAPI", "Microservices", "SOA / SOAP", "WSDL"] },
      { category: "Frontend", skills: ["JavaScript", "HTML", "CSS", "React", "TypeScript", "Effector", "PrimeReact"] },
      { category: "Bases de données", skills: ["PostgreSQL", "Oracle", "MongoDB", "H2", "JPA", "Hibernate", "JDBC"] },
      { category: "Tests", skills: ["TestNG", "Mockito", "JUnit 5", "MockMvc", "Testcontainers"] },
      { category: "CI/CD & DevOps", skills: ["Jenkins", "GitLab CI/CD", "Gradle", "Node.js", "npm", "Docker", "Azure", "Kubernetes (AKS)", "Helm", "NGINX Ingress", "OpenRewrite", "Renovate", "Dependabot"] },
      { category: "Outils", skills: ["IntelliJ IDEA", "Postman", "SoapUI", "SQL Developer", "Cursor", "Windsurf", "Azure OpenAI"] },
      { category: "Méthodologie", skills: ["Agile", "Kanban", "Jira"] },
    ],
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
    tech: [
      { category: "Backend", skills: ["Java EE", "Micronaut", "WebSphere"] },
      { category: "Bases de données", skills: ["Oracle SQL", "PostgreSQL"] },
      { category: "CI/CD & DevOps", skills: ["Docker", "Jenkins", "Git"] },
      { category: "Tests & Qualité", skills: ["JUnit", "SonarQube"] },
      { category: "Autres", skills: ["SharePoint", "Microsoft Flow"] },
      { category: "Méthodologie", skills: ["SAFe", "SCRUM"] },
      { category: "Certifications", skills: ["Pega CSA"] },
    ],
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
    tech: [
      { category: "Backend", skills: ["Java EE", "Liferay"] },
      { category: "Frontend", skills: ["AlloyUI"] },
      { category: "Bases de données", skills: ["MySQL"] },
      { category: "Qualité", skills: ["SonarQube"] },
      { category: "Certifications", skills: ["OCPJP", "OCE WCD"] },
    ],
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
    tech: [
      { category: "Backend", skills: ["C#", ".NET"] },
      { category: "Frontend & Mobile", skills: ["WPF", "MVC", "Android SDK"] },
      { category: "Qualité", skills: ["StyleCop"] },
    ],
  },
];

export const education = [
  {
    id: 1,
    type: "dual-study",
    studyField: "Étude en Alternance",
    degree: "Informaticien Diplômé d'État (Staatlich geprüfter Informatiker)",
    school: "Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)",
    url: "https://gds2.de",
    location: "Böblingen, Allemagne",
    year: "2011 - 2014",
    summary: "Programme d'études en alternance intensif axé sur le génie logiciel, les systèmes de bases de données et la gestion de projet.",
    description: "Formation professionnelle de 3 ans (Berufskolleg). Inclut un an de stage pratique chez Alpine Electronics R&D Europe GmbH, avec la thèse : \"Alpine Voltage Curve Editor\" (Note : Excellent / Sehr gut).",
    grade: "Obtenu avec mention (Belobigung)",
  },
  {
    id: 2,
    type: "master",
    studyField: "Master",
    degree: "Diplôme de Master",
    school: "Université de l'Ouest de Timișoara (Universitatea de Vest din Timișoara)",
    url: "https://info.uvt.ro/en/",
    location: "Timisoara, Roumanie",
    year: "2009 - 2011",
    summary: "Formation spécialisée en Pédagogie et Didactique pour l'enseignement des mathématiques.",
    description: "Programme académique avancé axé sur les modèles mathématiques complexes et les méthodologies éducatives. La première année de ce Master a été réalisée à l'étranger, à l'Université de Stuttgart, via le programme Erasmus. Les cours principaux incluaient : Analyse vectorielle, Algèbre avancée et géométrie, Méthodes itératives, Méthodes statistiques et probabilistes, ainsi que les Logiciels de gestion éducative.",
    grade: "7.70 / 10 (1ère Année) & 7.66 / 10 (2ème Année)",
  },
  {
    id: 3,
    type: "bachelor",
    studyField: "Licence",
    degree: "Diplôme de Licence",
    school: "Université de l'Ouest de Timișoara (Universitatea de Vest din Timișoara)",
    url: "https://info.uvt.ro/en/",
    location: "Timisoara, Roumanie",
    year: "2006 - 2009",
    summary: "Double majeure offrant des bases distinctes en mathématiques abstraites et en informatique appliquée.",
    description: "Cursus à double spécialisation alliant les mathématiques théoriques à l'informatique appliquée et au génie logiciel. Les cours principaux incluaient : Structures de Données, Intelligence Artificielle, Systèmes de Bases de Données, Réseaux Informatiques, Géométrie Algorithmique, Programmation Logique et Fonctionnelle, et Modélisation/Simulation Mathématique.",
    grade: "10 / 10 (Examen Final) | 9.02 / 10 (Moyenne Générale)",
  },
  {
    id: 4,
    type: "high-school",
    studyField: "Lycée",
    degree: "Diplôme du Baccalauréat",
    school: "Collège National d'Informatique \"Spiru Haret\" Suceava",
    url: "https://www.cni-sv.ro/",
    location: "Suceava, Roumanie",
    year: "2002 - 2006",
    summary: "Programme intensif en Informatique et Mathématiques.",
    description: "Profil : Mathématiques et Informatique (Intensiv).",
    grade: "9.81 / 10",
  },
];

export const projects = [
  {
    id: 1,
    title: "Filmpire Microservices Platform",
    description:
      "Une plateforme de microservices d'entreprise de bout en bout pour la découverte de films, gérée de l'idée au produit prêt à être livré à l'aide de tableaux Kanban GitHub Projects (Epics, Stories, Tasks). Huit services indépendants Java 25 / Spring Boot 3.5 intégrant Spring Cloud (Eureka, API Gateway), soutenus par une stratégie hybride PostgreSQL/MongoDB et un cache Redis avec une solution de secours sur l'API TMDB. Intègre Spring AI (Whisper/GPT-4) via REST et gRPC. Construit selon des normes modernes strictes — record DTOs, injection par constructeur, virtual threads — et une exigence de test rigoureuse (JUnit 5, Testcontainers, couverture JaCoCo à 85%) intégrée dans GitHub Actions CI/CD. Déployé à l'aide de Kubernetes sur Minikube.",
    tech: ["Java 25", "Spring Boot 3.5", "Spring Cloud", "PostgreSQL", "MongoDB", "Redis", "Spring AI", "gRPC", "REST", "JUnit 5", "Testcontainers", "JaCoCo", "GitHub Actions", "Docker", "Podman", "Kubernetes"],
    githubUrl: "https://github.com/pehlivanu/filmpire-microservices",
    deployUrl: "",
  },
  {
    id: 2,
    title: "Defense Asset Manager",
    description:
      "Une application d'entreprise React 19 pour la gestion des actifs et du personnel dans le secteur de la défense, imposant une architecture stricte basée sur les fonctionnalités (Domain-Driven) pour soutenir la livraison SAFe à travers de multiples équipes. Développement entièrement typé, contract-first via OpenAPI 3.1 et basé sur Vite pour un HMR instantané. Utilise Zustand avec Immer pour un état immuable, Mock Service Worker pour la simulation REST hors ligne, et des composants Material UI v9 à fort contraste, avec des fonctionnalités UX critiques pour la sécurité telles que les confirmations pour les actions destructives.",
    tech: ["React 19", "Vite", "Zustand", "Material UI v9", "MSW", "OpenAPI 3.1", "TypeScript", "Vitest"],
    githubUrl: "https://github.com/pehlivanu/defense-asset-manager",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Antigravity IDE Portfolio",
    description:
      "Un portfolio de développeur hautement interactif qui recrée méticuleusement l'esthétique de l'IDE Antigravity de Google — barre d'activité, explorateur de fichiers, zone d'édition, barre d'état en direct et palette de commandes fonctionnelle — construit sur le Next.js 15 App Router avec des micro-animations immersives Framer Motion. Dispose d'une génération automatique de CV au format PDF en plusieurs modèles et langues, ainsi qu'un formulaire de contact dynamique qui utilise l'API Geolocation pour calculer et afficher la distance physique entre le visiteur et le développeur.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Geolocation API", "PDF Generation", "Framer Motion"],
    githubUrl: "https://github.com/pehlivanu/portfolio-site",
    deployUrl: "https://liviuionesi.vercel.app",
  },
  {
    id: 4,
    title: "Filmpire Frontend",
    description:
      "Une application moderne et interactive de découverte de films en React 17 et Redux Toolkit, servant de client frontend dédié au backend de microservices Filmpire composé de 8 services. Intègre l'API TMDB pour la navigation par catégories et la gestion des favoris, et sa caractéristique principale est une intégration SDK Alan AI offrant une interface vocale entièrement conversationnelle. La qualité du code est assurée avec Jest / React Testing Library et ESLint (Airbnb).",
    tech: ["React 17", "Material-UI", "Redux Toolkit", "Alan AI"],
    githubUrl: "https://github.com/pehlivanu/filmpire",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
  {
    id: 5,
    title: "Knowledge Base Platform",
    description:
      "Un système de documentation localisé prêt pour l'entreprise, construit sur Next.js 16 et React 19 Server Components pour un payload client minimal. Agit comme un générateur de site statique qui transforme une simple collection de fichiers Markdown (.md) en un site wiki complet. Comprend une internationalisation approfondie via next-intl gérée au niveau du middleware, avec une documentation interne sécurisée par un middleware personnalisé vérifiant les cookies HttpOnly.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "next-intl", "Markdown"],
    githubUrl: "https://github.com/pehlivanu/knowledge-base-platform",
    deployUrl: "https://phenix-wiki.vercel.app",
  },
  {
    id: 6,
    title: "DevOps Toolchain Showcase",
    description:
      "Une vitrine de chaîne d'outils CI/CD déclarative, entièrement conteneurisée, démontrant des pratiques DevOps d'entreprise, orchestrée via Podman Compose. Un serveur Jenkins personnalisé utilise Docker-outside-of-Docker (DooD) pour construire et publier des images d'application à travers un Jenkinsfile à plusieurs étapes. Automatise les rapports de couverture JaCoCo et la publication d'artefacts dans JFrog Artifactory, et utilise des scripts personnalisés Bash + curl + jq pour envoyer les métriques de test à des systèmes externes ALM/MQC via des API REST.",
    tech: ["Jenkins", "JFrog Artifactory", "Podman", "Gradle", "Java 17"],
    githubUrl: "https://github.com/pehlivanu/devops-toolchain-showcase",
    deployUrl: "",
  },
  {
    id: 7,
    title: "DevFlow - Full-Stack Q&A Platform",
    description:
      "Une plateforme sophistiquée de Q&A pour développeurs, axée sur la communauté, construite nativement sur Next.js 14 App Router avec Server Actions à la place d'une couche API distincte. Offre un système de balisage robuste, une recherche globale parmi les questions, réponses, utilisateurs et tags, ainsi que des flux de recommandations personnalisés. Un moteur de réputation et de badges avancé gamifie la participation, l'authentification passe par NextAuth.js (Google/GitHub OAuth + identifiants) avec une validation de bout en bout Zod, et l'API OpenAI génère des réponses d'IA complètes ainsi que des extraits de code.",
    tech: ["Next.js 14", "TypeScript 5", "MongoDB Atlas", "Tailwind CSS", "OpenAI API", "NextAuth", "Zod"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 8,
    title: "Python GUI Automation Framework",
    description:
      "Une application de bureau Python résiliente, multiplateforme, avec une interface graphique Tkinter qui contrôle et automatise une application Android. Utilise la correspondance de modèles OpenCV pour détecter visuellement et interagir avec des éléments UI dynamiques sur l'appareil via Android Debug Bridge (ADB), plutôt que de s'appuyer sur une API sous-jacente. Intègre des profils d'interaction de type humain — variations de coordonnées et de synchronisation aléatoire — pour contourner les heuristiques de détection de robots, et fonctionne soit depuis l'interface graphique, soit de manière invisible comme un démon Linux.",
    tech: ["Python 3.10", "OpenCV", "Tkinter", "ADB", "Bash"],
    githubUrl: "https://github.com/pehlivanu/gui-automation-framework",
    deployUrl: "https://phenix-wiki.vercel.app/en/docs/automation-app",
  },
  {
    id: 11,
    title: "Alana Windsurf",
    description:
      "Une application web full-stack évolutive sur Next.js 13+ App Router et React 18+. Fournit une authentification complète via NextAuth.js — OAuth (Google, GitHub) ainsi que des identifiants sécurisés (e-mail/mot de passe) — avec des données stockées dans MongoDB via Mongoose. L'état est géré avec React Context et useReducer, les formulaires sont traités de manière robuste avec React Hook Form et Zod, et l'interface utilisateur est stylisée avec Material UI et Emotion.",
    tech: ["Next.js 13+", "React 18+", "Material UI", "NextAuth.js", "MongoDB", "Zod"],
    githubUrl: "https://github.com/pehlivanu/alana-windsurf",
    deployUrl: "",
  },
  {
    id: 12,
    title: "Payload E-Commerce Platform",
    description:
      "Une solution e-commerce complète associant le framework Payload CMS avec un frontend statique Next.js. Livré avec un backend entièrement fonctionnel doté d'un panneau d'administration d'entreprise qui gère à la fois les produits physiques et le contenu restreint par paywall, intégré aux webhooks Stripe pour un traitement sécurisé des paiements.",
    tech: ["Next.js", "Payload CMS", "Stripe", "React Hook Form"],
    githubUrl: "https://github.com/pehlivanu/e-commerce",
    deployUrl: "",
  },
];

export const linkedInProfile = {
  name: "Liviu Ionesi",
  headline: "Tech Lead | Senior Full-Stack Engineer | Java, Spring Boot, React, Next.js",
  location: "Kirchheim unter Teck, Allemagne",
  phone: "+49 1514 6966 832",
  address: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck",
  email: "ionesiliviu@yahoo.com",
  connections: "500+",
  about: "Technical Lead & Senior Full-Stack Engineer. Construire l'épine dorsale numérique des industries de l'automobile et de la Fintech. Avec plus de 13 ans d'expérience dans l'ingénierie de systèmes distribués à haute performance, je me spécialise dans la direction technique, la modernisation d'architectures héritées et la livraison de solutions cloud-natives évolutives.",
  fullBio: `### **Technical Lead & Senior Full-Stack Engineer | Spécialiste Automobile & FinTech**

Avec plus de 13 ans d'expérience dans l'ingénierie de systèmes distribués à haute performance, je me spécialise dans la direction technique, la modernisation d'architectures héritées et la livraison de solutions cloud-natives évolutives. Mon parcours m'a mené du développement de frameworks d'automatisation critiques chez **Alpine Electronics** à la direction de la transformation numérique de plateformes de données d'entreprise chez **DAT Group**. J'excelle à guider des équipes interfonctionnelles pour construire des logiciels robustes en utilisant des technologies modernes.

Je fais le pont entre la logique backend complexe, les expériences frontend intuitives et les objectifs commerciaux stratégiques. Mes compétences clés comprennent :

  * **Direction Technique & Architecture** : Diriger la conception de systèmes et promouvoir la migration d'applications **Java EE** monolithiques vers des **Microservices** évolutifs (Spring Boot, Azure) et des frontends modernes (React/Next.js), améliorant considérablement la résilience des systèmes.
  * **Excellence en Ingénierie Full-Stack** : Architecture et développement d'interfaces réactives et centrées sur l'utilisateur avec **React, Next.js et TypeScript**, parfaitement intégrées avec des API **Java 21 / Spring Boot** robustes et sécurisées.
  * **DevOps & Culture de la Qualité** : Défendre le **TDD**, les principes du **Clean Code** et établir l'automatisation CI/CD (Azure, GitHub Actions) pour garantir une livraison logicielle de haute qualité et prévisible. Mentorer les équipes d'ingénierie pour élever leurs standards techniques.
  * **Ingénierie Augmentée par l'IA** : Pionnier dans la livraison de logiciels à grande vitesse en fusionnant la rigueur d'entreprise (Epics, Agile/Scrum, CI/CD) avec des flux de travail avancés intégrés à l'IA (Cursor, Windsurf). Cette approche accélère les nouveaux développements et rationalise le remaniement de monolithes hérités complexes, réduisant efficacement la dette technique.

---
*Recherche actuellement un poste de Technical Lead dans les écosystèmes Spring Boot et React. Ouvert aux opportunités hybrides dans la région de Stuttgart ou à des postes entièrement à distance en Allemagne.*`,
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
  description: "Technical Lead & Senior Full-Stack Engineer. Construire l'épine dorsale numérique des industries de l'automobile et de la Fintech. Je me spécialise dans les microservices Spring Boot, les frontends React et l'accélération de la livraison de logiciels d'entreprise à grande vitesse grâce à des flux de travail augmentés par l'IA.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: "Projets, pas juste du code",
  ctaSecondary: "Contactez-moi"
};

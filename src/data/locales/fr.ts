import { Experience, Education, Project, LinkedInProfile, AboutData } from '@/types/data';

export const experience: Experience[] = [
  {
    id: 1,
    type: 'senior',
    role: 'Senior Software Developer',
    company: 'DAT Group',
    companySize: '501-1 000 employés',
    industry: 'Logiciels Automobiles',
    locationType: 'Télétravail / Hybride',
    websiteUrl: 'https://www.dat.eu',
    period: 'Sep 2020 - Mar 2026',
    summary: `Développeur Full-Stack Senior au sein de l'équipe "Costing Applications" responsable de SilverDAT 3 "calculate", le standard reconnu par l'industrie pour l'estimation des coûts de réparation automobile. L'application est utilisée à l'échelle du secteur par les garages, concessionnaires, experts, assureurs, banques et constructeurs pour plus de 70 000 variantes de véhicules.`,
    description: `*   Maintenance, extension et tests des anciens services Java EE (monorepo SOA/SOAP avec frontends JavaScript/React). Adaptation de SoapUI et des suites de tests manuels pour suivre l'évolution des services, ainsi que l'ajout d'une couverture TestNG/Mockito pour les nouvelles modifications.
*   Conception de l'architecture et développement complet de nouveaux services Spring Boot visant à remplacer l'application Java EE vieillissante — avec une architecture N-Tier propre, un mapping DTO strict, une gestion centralisée des erreurs et un traçage distribué basé sur MDC. Mise en place d'API REST "contract-first", conformes HATEOAS (OpenAPI), sécurisées par des tests d'intégration JUnit 5/MockMvc et des collections Postman automatisées.
*   Gestion de la couche de données avec JPA/Hibernate : Remplacement des anciennes bases de données SQL (principalement Oracle SQL) par PostgreSQL et introduction de MongoDB comme première solution NoSQL dans une pile technologique auparavant exclusivement SQL.
*   Refonte des anciens frontends JavaScript en composants React/TypeScript modernes et réactifs. Optimisation de l'architecture en intégrant Effector (gestion d'état) et PrimeReact.
*   CI/CD : Compilation de la plateforme existante via Gradle sur Jenkins et déploiement vers les environnements de test et de production ; les nouveaux services sont livrés via Gradle Wrapper. Déploiement sur Azure Kubernetes (AKS) à l'aide de pipelines de build et de release utilisant des charts Helm et NGINX Ingress. Utilisation de Docker Compose pour le développement local. Migration du contrôle de code source de GitLab vers Azure Repos. L'ancienne application suit un cycle de 6 versions par an (via Kanban sur Jira), tandis que les nouveaux services ont adopté une livraison continue (Continuous Delivery).
*   Modernisation de la configuration de build parent Spring Boot héritée (utilisation d'OpenRewrite pour des mises à jour de version automatisées au-delà de la limite BOM, Renovate Bot sur Azure pour les mises à jour de dépendances) et migration de la configuration classique des propriétés vers les profils Spring.
*   Mise en place d'un flux de travail augmenté par l'IA combinant IntelliJ IDEA (CodeGPT avec LLM Azure local), Cursor et Windsurf pour documenter et analyser le code hérité, extraire les exigences métier et développer de nouveaux services atteignant 100 % de conformité aux critères de qualité SonarQube.
*   Orientation de la stratégie technique à travers le prototypage et l'évaluation de nouvelles approches — vérification directe dans le code et animation d'ateliers d'équipe (par exemple sur le design REST/API-first, React moderne et Next.js, OpenRewrite, Dependabot, ainsi que l'évaluation de Spring Cloud Gateway comme remplacement de la passerelle sur mesure de DAT).`,
    tech: [
      {
        category: 'Backend',
        skills: [
          'Java 17+',
          'Jakarta EE',
          'Spring Boot 3+',
          'Spring Cloud',
          'API REST',
          'OpenAPI',
          'Microservices',
          'SOA / SOAP',
          'WSDL',
        ],
      },
      {
        category: 'Frontend',
        skills: ['JavaScript', 'HTML', 'CSS', 'React', 'TypeScript', 'Effector', 'PrimeReact'],
      },
      {
        category: 'Bases de Données',
        skills: ['PostgreSQL', 'Oracle', 'MongoDB', 'H2', 'JPA', 'Hibernate', 'JDBC'],
      },
      { category: 'Tests', skills: ['TestNG', 'Mockito', 'JUnit 5', 'MockMvc', 'Testcontainers'] },
      {
        category: 'CI/CD & DevOps',
        skills: [
          'Jenkins',
          'GitLab CI/CD',
          'Gradle',
          'Node.js',
          'npm',
          'Docker',
          'Azure',
          'Kubernetes (AKS)',
          'Helm',
          'NGINX Ingress',
          'OpenRewrite',
          'Renovate',
          'Dependabot',
        ],
      },
      {
        category: 'Outils',
        skills: [
          'IntelliJ IDEA',
          'Postman',
          'SoapUI',
          'SQL Developer',
          'Cursor',
          'Windsurf',
          'Azure OpenAI',
        ],
      },
      { category: 'Méthodologie', skills: ['Agile', 'Kanban', 'Jira'] },
    ],
  },
  {
    id: 2,
    type: 'mid',
    role: 'Software Developer',
    company: 'evia solutions GmbH',
    companySize: '51-200 employés',
    industry: 'Services et Conseils IT',
    locationType: 'Sur site',
    websiteUrl: 'https://www.evia.de',
    period: 'Fév 2016 - Aoû 2020',
    summary: `Développeur et consultant au sein d'une entreprise de services informatiques multi-secteurs pour la fourniture de logiciels standards et sur mesure dans les domaines de la banque, de l'assurance et des environnements Microsoft Enterprise. Activité au sein d'équipes agiles Scrum et SAFe — allant de la maintenance d'applications Java EE classiques à la création ex nihilo d'une architecture microservices.`,
    description: `*   Maintenance, extension, livraison et tests de portails pour courtiers en assurance pour Wüstenrot & Württembergische — des applications Java EE 8 critiques (JSF/Spring/Hibernate, JSP) fonctionnant sur IBM WebSphere 7 et 8.5 avec IBM DB2 et LDAP/Active Directory. Ces systèmes ont constitué la base financière solide ayant permis à l'entreprise de croître d'environ 16 à plus de 200 employés. Les systèmes ont été renforcés par des tests de pénétration selon les standards OWASP. Rational Application Developer 9.1 et iText ont été utilisés pour la génération de documents et de PDF (ainsi que Apache Directory Studio, Postman, Eclipse, SVN, Cherwell).
*   Contribution au développement du nouveau département "Microsoft Delivery" en tant que développeur principal. Création d'une solution d'intégration des employés (onboarding) sur SharePoint Online (génération numérique de contrats, processus d'accueil, gestion des tâches) et automatisation des processus d'entreprise avec Microsoft Flow et Logic Apps (Office 365, JSON).
*   Obtention des certifications "Pega Certified System Architect (CSA)" axée sur le développement BPM, et "Microsoft 70-480" (HTML5, JavaScript & CSS3, incluant jQuery et AJAX).
*   Développement des "Digital Sales Solutions" (DSS) pour Daimler — une application bancaire innovante permettant de numériser les demandes de crédit automobile dans plusieurs pays. Implémentation de microservices modernes Micronaut / JEE 11 (Oracle SQL, PostgreSQL 12, Docker) derrière un frontend Angular, complétés par des services d'intégration REST/SOAP (OpenAPI) pour les échanges B2B.
*   Responsable des tests développeurs, de l'Assurance Qualité (JUnit, SonarQube) et des pipelines CI/CD pour les environnements de test et d'intégration (Git, Jenkins). Accompagnement de l'équipe de test pour les suites de bout en bout automatisées (Protractor, Cucumber) au sein d'équipes Scrum puis SAFe, en étroite collaboration avec les départements Frontend, Test et DevOps (Jira, Confluence, MS Teams).`,
    tech: [
      {
        category: 'Backend',
        skills: [
          'Java EE (JEE 8 / 11)',
          'Micronaut',
          'Spring',
          'Hibernate',
          'JSF',
          'JSP',
          'iText',
          'REST',
          'SOAP',
          'OpenAPI',
        ],
      },
      {
        category: 'Frontend',
        skills: ['Angular', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX'],
      },
      {
        category: 'Bases de Données',
        skills: ['Oracle SQL', 'PostgreSQL', 'IBM DB2', 'LDAP / Active Directory'],
      },
      {
        category: 'CI/CD & DevOps',
        skills: ['Git', 'SVN', 'Jenkins', 'Maven', 'Docker', 'IBM WebSphere (7 / 8.5)'],
      },
      {
        category: 'Tests et Qualité',
        skills: ['JUnit', 'SonarQube', 'Protractor', 'Cucumber', 'OWASP / Tests de Pénétration'],
      },
      {
        category: 'Outils',
        skills: [
          'IntelliJ IDEA',
          'Eclipse',
          'Rational Application Developer',
          'SharePoint',
          'Microsoft Flow',
          'Logic Apps',
          'Office 365',
          'Apache Directory Studio',
          'Postman',
          'Jira',
          'Confluence',
          'Cherwell',
          'MS Teams',
        ],
      },
      { category: 'Méthodologie', skills: ['Scrum', 'SAFe', 'BPM'] },
      { category: 'Certifications', skills: ['Pega CSA', 'Microsoft 70-480'] },
    ],
  },
  {
    id: 3,
    type: 'junior',
    role: 'Junior Software Developer',
    company: 'PRODYNA AG',
    companySize: '201-500 employés',
    industry: 'Conseil IT',
    locationType: 'Sur site / Déplacements',
    websiteUrl: 'https://www.prodyna.com',
    period: 'Nov 2014 - Jan 2016',
    summary: `Développeur et consultant dans une société de conseil en informatique, déployé sur site chez un grand compte pour réaliser un projet de portail web couvrant le conseil métier, la conception, l'implémentation et les tests.`,
    description: `*   Développement et livraison d'une solution portail Liferay 6.0 avec un backend en Java 6 EE et MySQL, ainsi qu'un frontend associant JSP, HTML, CSS, JavaScript et AlloyUI.
*   Déploiement et tests des applications sur Apache Tomcat, gestion des processus CI/CD avec Jenkins et Maven, et intégration de SonarQube dans la chaîne de compilation pour garantir la qualité du code.
*   Travail au sein d'équipes agiles Scrum (Jira, Confluence) et obtention des certifications "Oracle Certified Professional Java Programmer (OCPJP)" et "Oracle Certified Expert Java EE 6 Web Component Developer (OCE WCD)".`,
    tech: [
      { category: 'Backend', skills: ['Java 6 EE', 'Liferay 6.0', 'JSP'] },
      { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'AlloyUI'] },
      { category: 'Bases de Données', skills: ['MySQL'] },
      { category: 'CI/CD & DevOps', skills: ['Apache Tomcat', 'Jenkins', 'Maven'] },
      { category: 'Tests et Qualité', skills: ['SonarQube'] },
      { category: 'Outils', skills: ['Jira', 'Confluence'] },
      { category: 'Méthodologie', skills: ['Scrum'] },
      { category: 'Certifications', skills: ['OCPJP', 'OCE WCD'] },
    ],
  },
  {
    id: 4,
    type: 'intern',
    role: 'Stage en Développement Logiciel',
    company: 'Alpine Electronics R&D Europe',
    companySize: '1 000+ employés',
    industry: 'Électronique Automobile',
    locationType: 'Sur site',
    websiteUrl: 'https://www.alpine.de/',
    dualStudy: 'ADV Böblingen',
    period: 'Sep 2012 - Aoû 2013',
    summary: `Stagiaire en intégration de systèmes (Car Infotainment / OEM) pour le développement de modules logiciels destinés au "Alpine Test Automation Framework" interne.`,
    description: `*   Développement et extension de l'Alpine Test Automation Framework interne (C#, .NET 4.0) en créant des modules de test automatisés pour des interfaces matérielles telles que Bluetooth, les générateurs de signaux RDS, les bus MOST/CAN, les chambres climatiques et les robots changeurs de CD/DVD.
*   Conception et implémentation de l'"Alpine Voltage Curve Editor" — récompensé par la note maximale (1.0) en tant que mémoire de fin d'études — et modernisation des interfaces utilisateur de plusieurs modules de test existants en utilisant WPF et le modèle MVVM.
*   Garantie de la robustesse architecturale sur l'ensemble du framework de test en appliquant la modélisation UML et les modèles de conception du "Gang of Four" (Singleton, Composite, Factory Method, Memento) dans SharpDevelop.`,
    tech: [
      {
        category: 'Backend',
        skills: ['C#', '.NET 4.0', 'UML', 'Design Patterns', 'SharpDevelop', 'StyleCop'],
      },
      { category: 'Frontend & Mobile', skills: ['WPF', 'MVVM', 'Android SDK'] },
      { category: 'Matériel et Protocoles', skills: ['Bluetooth', 'CAN', 'MOST', 'RDS'] },
    ],
  },
];

export const education: Education[] = [
  {
    id: 1,
    type: 'études-en-alternance',
    studyField: 'Systèmes techniques',
    degree: "Informaticien Diplômé d'État (Staatlich geprüfter Informatiker)",
    school: 'Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)',
    url: 'https://gds2.de',
    location: 'Böblingen, Allemagne',
    year: '2011 - 2014',
    description:
      'Formation professionnelle de 3 ans (Berufskolleg). Inclut un an de stage pratique chez Alpine Electronics R&D Europe GmbH, validé par le mémoire : « Alpine Voltage Curve Editor » (Note : Excellent / 1,0).',
    grade: 'Obtenu avec Mention (Belobigung)',
  },
  {
    id: 2,
    type: 'master',
    studyField: 'Didactique des mathématiques',
    degree: 'Master',
    school: "Université de l'Ouest de Timișoara (Universitatea de Vest din Timișoara)",
    url: 'https://info.uvt.ro/en/',
    location: 'Timișoara, Roumanie',
    year: '2009 - 2011',
    description:
      "Programme universitaire avancé axé sur les modèles mathématiques complexes et les méthodologies pédagogiques. La première année de ce Master a été effectuée à l'étranger, à l'Université de Stuttgart, via le programme Erasmus. Les matières principales comprenaient : Analyse Vectorielle, Algèbre et Géométrie Supérieures, Méthodes Itératives, Méthodes Statistiques et Probabilistes, ainsi que Logiciels pour la Gestion Éducative.",
    grade: '7,70 / 10 (Année 1) & 7,66 / 10 (Année 2)',
  },
  {
    id: 3,
    type: 'licence',
    studyField: 'Mathématiques et informatique',
    degree: 'Licence',
    school: "Université de l'Ouest de Timișoara (Universitatea de Vest din Timișoara)",
    url: 'https://info.uvt.ro/en/',
    location: 'Timișoara, Roumanie',
    year: '2006 - 2009',
    description:
      'Cursus à double spécialisation qui allie mathématiques théoriques, informatique appliquée et génie logiciel. Les matières principales englobaient : Structures de Données, Intelligence Artificielle, Bases de Données, Réseaux Informatiques, Géométrie Algorithmique, Programmation Logique et Fonctionnelle, et Modélisation/Simulation Mathématique.',
    grade: '10 / 10 (Examen final) | 9,02 / 10 (Moyenne générale)',
  },
  {
    id: 4,
    type: 'lycée',
    studyField: 'Mathématiques et informatique',
    degree: "Diplôme de Fin d'Études Secondaires (Baccalauréat)",
    school: "Collège National d'Informatique « Spiru Haret » Suceava",
    url: 'https://www.cni-sv.ro/',
    location: 'Suceava, Roumanie',
    year: '2002 - 2006',
    description: 'Profil : Mathématiques et Informatique (Intensif).',
    grade: '9,81 / 10',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Filmpire Microservices Platform',
    description:
      "Une plateforme microservices d'entreprise complète pour la découverte de films, pilotée de l'idée initiale jusqu'au produit final via des tableaux Kanban GitHub Projects (Epics, Stories, Tasks). Elle se compose de huit services indépendants en Java 25 / Spring Boot 3.5, incluant Spring Cloud (Eureka, API Gateway). Son architecture hybride de bases de données s'appuie sur PostgreSQL/MongoDB et un cache Redis qui offre une solution de secours avec l'API TMDB. Le projet intègre Spring AI (Whisper/GPT-4) via REST et gRPC. Développée selon des standards modernes stricts (DTO records, injection par constructeur, virtual threads), elle garantit un haut niveau de qualité (JUnit 5, Testcontainers, couverture JaCoCo de 85 %) sécurisé par une chaîne CI/CD GitHub Actions. Déploiement via Kubernetes sur Minikube.",
    tech: [
      'Java 25',
      'Spring Boot 3.5',
      'Spring Cloud',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Spring AI',
      'gRPC',
      'REST',
      'JUnit 5',
      'Testcontainers',
      'JaCoCo',
      'GitHub Actions',
      'Docker',
      'Podman',
      'Kubernetes',
    ],
    githubUrl: 'https://github.com/pehlivanu/filmpire-microservices',
    deployUrl: '',
  },
  {
    id: 2,
    title: 'Defense Asset Manager',
    description:
      "Une application d'entreprise React 19 pour la gestion des actifs et du personnel dans le secteur de la défense. Elle repose sur une architecture stricte orientée fonctionnalités (Domain-Driven) pour faciliter un déploiement SAFe à travers de multiples équipes. Entièrement typée et contract-first par rapport à OpenAPI 3.1, elle est propulsée par Vite pour un HMR instantané. Elle emploie Zustand avec Immer pour un état immuable, Mock Service Worker pour simuler l'API REST hors ligne, et des composants Material UI v9 accessibles offrant une expérience utilisateur (UX) pensée pour la sécurité (p. ex., confirmations d'actions destructrices).",
    tech: [
      'React 19',
      'Vite',
      'Zustand',
      'Material UI v9',
      'MSW',
      'OpenAPI 3.1',
      'TypeScript',
      'Vitest',
    ],
    githubUrl: 'https://github.com/pehlivanu/defense-asset-manager',
    deployUrl: '',
  },
  {
    id: 3,
    title: 'Antigravity IDE Portfolio',
    description:
      "Un portfolio de développeur très interactif reproduisant dans les moindres détails l'esthétique de l'IDE Antigravity de Google — doté d'une Activity Bar, d'un explorateur de fichiers, d'une zone d'édition, d'une barre d'état et d'une Command Palette opérationnelle. Basé sur le App Router de Next.js 15, il inclut des micro-animations immersives avec Framer Motion. Il propose une génération automatisée du CV au format PDF en divers modèles et langues, ainsi qu'un formulaire de contact dynamique qui s'appuie sur l'API Geolocation pour calculer la distance physique entre le visiteur et le développeur.",
    tech: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'API Geolocation',
      'Génération de PDF',
      'Framer Motion',
    ],
    githubUrl: 'https://github.com/pehlivanu/portfolio-site',
    deployUrl: 'https://www.liviuionesi.com',
  },
  {
    id: 4,
    title: 'Filmpire Frontend',
    description:
      "Une application moderne et interactive de recherche de films développée en React 17, gérée par Redux Toolkit. Conçue comme client frontend dédié au backend microservices Filmpire composé de 8 services. Elle intègre l'API TMDB pour l'exploration par catégories et la gestion des favoris. Son atout distinctif est l'intégration du SDK Alan AI, rendant possible une interface vocale 100 % conversationnelle. L'assurance qualité est garantie par Jest / React Testing Library et ESLint (norme Airbnb).",
    tech: ['React 17', 'Material-UI', 'Redux Toolkit', 'Alan AI'],
    githubUrl: 'https://github.com/pehlivanu/filmpire',
    deployUrl: 'https://filmpire-ten.vercel.app/',
  },
  /*
  {
    id: 5,
    title: "Knowledge Base Platform",
    description:
      "Un système de documentation localisé de niveau entreprise, basé sur Next.js 16 et les Server Components React 19 pour des temps de chargement client minimaux. Il agit comme un générateur de site statique, transformant une simple collection de fichiers Markdown (.md) en un wiki exhaustif. Il offre une internationalisation approfondie grâce à next-intl opérée via une Edge Middleware, et protège les documents internes en vérifiant les cookies HttpOnly directement via l'Edge Middleware.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "next-intl", "Markdown"],
    githubUrl: "https://github.com/pehlivanu/knowledge-base-platform",
    deployUrl: "https://phenix-wiki.vercel.app",
  },
*/
  {
    id: 6,
    title: 'DevOps Toolchain Showcase',
    description:
      "Une chaîne d'outils CI/CD 100 % conteneurisée, démontrant les bonnes pratiques DevOps d'entreprise, orchestrée via Podman Compose. Un serveur Jenkins adapté exploite le principe Docker-outside-of-Docker (DooD) pour construire et pousser les images des applications via un Jenkinsfile multi-étapes. Le processus automatise les rapports de couverture JaCoCo et la publication d'artefacts sur JFrog Artifactory. Des scripts sur mesure en Bash, curl et jq transmettent les métriques de test aux systèmes externes ALM/MQC par le biais d'API REST.",
    tech: ['Jenkins', 'JFrog Artifactory', 'Podman', 'Gradle', 'Java 17'],
    githubUrl: 'https://github.com/pehlivanu/devops-toolchain-showcase',
    deployUrl: '',
  },
  {
    id: 7,
    title: 'DevFlow - Full-Stack Q&A Platform',
    description:
      "Une plateforme sophistiquée de questions-réponses gérée par la communauté pour les développeurs, conçue de manière native avec l'App Router de Next.js 14, utilisant les Server Actions à la place d'une couche API séparée. Elle inclut un système de tags robuste, une recherche globale parmi les questions, réponses, utilisateurs et tags, ainsi que des flux de recommandations personnalisés. Un moteur de réputation et de badges gamifie l'engagement. L'authentification passe par NextAuth.js (OAuth Google/GitHub + Identifiants classiques) avec une validation de bout en bout via Zod. De plus, l'API OpenAI génère des réponses complètes assistées par IA et des extraits de code.",
    tech: [
      'Next.js 14',
      'TypeScript 5',
      'MongoDB Atlas',
      'Tailwind CSS',
      'API OpenAI',
      'NextAuth',
      'Zod',
    ],
    githubUrl: 'https://github.com/pehlivanu/devflow',
    deployUrl: 'https://devflow-chi-roan.vercel.app/',
  },
  {
    id: 8,
    title: 'Python GUI Automation Framework',
    description:
      "Une application de bureau Python robuste et multiplateforme avec une interface Tkinter, destinée à l'automatisation et au contrôle d'une application Android. Elle utilise la recherche de modèles (template matching) d'OpenCV pour détecter visuellement et interagir avec les éléments dynamiques de l'interface via l'Android Debug Bridge (ADB), sans nécessiter la moindre API sous-jacente. L'outil intègre des profils d'interaction simulant un comportement humain – légère variation des coordonnées et timings aléatoires – afin de contourner les systèmes de détection de bots. Fonctionne avec son interface graphique ou en mode headless comme un démon Linux.",
    tech: ['Python 3.10', 'OpenCV', 'Tkinter', 'ADB', 'Bash'],
    githubUrl: 'https://github.com/pehlivanu/gui-automation-framework',
    deployUrl: '',
  },
  /*
  {
    id: 11,
    title: "Alana Windsurf",
    description:
      "Une application web full-stack évolutive reposant sur le App Router de Next.js 13+ et React 18+. Offre une authentification complète grâce à NextAuth.js — OAuth (Google, GitHub) ainsi que par identifiants sécurisés (E-mail/Mot de passe) — avec stockage des données dans MongoDB via Mongoose. La gestion de l'état s'appuie sur le React Context et useReducer. La gestion sécurisée des formulaires est validée par React Hook Form et Zod, tandis que l'interface est stylisée via Material UI et Emotion.",
    tech: ["Next.js 13+", "React 18+", "Material UI", "NextAuth.js", "MongoDB", "Zod"],
    githubUrl: "https://github.com/pehlivanu/alana-windsurf",
    deployUrl: "",
  },
  {
    id: 12,
    title: "Payload E-Commerce Platform",
    description:
      "Une solution e-commerce de grande envergure combinant le framework Payload CMS et un frontend Next.js statique. Ce projet inclut un backend pleinement opérationnel doté d'un panneau d'administration professionnel, gérant aussi bien des produits physiques que des contenus verrouillés (paywall). Sécurisé et intégré avec les webhooks de Stripe pour le traitement transparent des paiements.",
    tech: ["Next.js", "Payload CMS", "Stripe", "React Hook Form"],
    githubUrl: "https://github.com/pehlivanu/e-commerce",
    deployUrl: "",
  },
*/
];

export const linkedInProfile: LinkedInProfile = {
  name: 'Liviu Ionesi',
  headline: 'Tech Lead | Ingénieur Full-Stack Senior | Java, Spring Boot, React, Next.js',
  location: 'Freiwaldaustr. 39, 73230 Kirchheim unter Teck, Allemagne',
  phone: '+49 1514 6966 832',
  address: 'Freiwaldaustr. 39, 73230 Kirchheim unter Teck',
  email: 'ionesiliviu@yahoo.com',
  connections: '500+',
  about:
    "Tech Lead et Ingénieur Full-Stack Senior. Je construis l'épine dorsale numérique pour les secteurs de l'Automobile et de la Fintech. Avec plus de 13 ans d'expérience dans le développement de systèmes distribués très performants, je me concentre sur la direction technique, la modernisation d'architectures héritées et la livraison de solutions cloud-natives et évolutives.",
  fullBio: `### **Tech Lead et Ingénieur Full-Stack Senior | Spécialiste Automobile & FinTech**

Avec plus de 13 ans d'expérience dans l'ingénierie de systèmes distribués à haute performance, je me spécialise dans le leadership technique, la modernisation d'architectures vieillissantes et le déploiement de solutions cloud-natives évolutives. Mon parcours professionnel va du développement de frameworks d'automatisation critiques chez **Alpine Electronics** jusqu'à l'impulsion de la transformation numérique des plateformes de données d'entreprise chez **DAT Group**. J'excelle à guider des équipes pluridisciplinaires pour concevoir des logiciels robustes en utilisant des piles technologiques modernes.

Je fais le lien entre une logique backend complexe, des expériences frontend intuitives et des objectifs commerciaux stratégiques. Mes compétences clés incluent :

  * **Leadership Technique & Architecture** : Piloter la conception des systèmes et défendre la migration des applications monolithiques **Java EE** vers des **Microservices** évolutifs (Spring Boot, Azure) et des frontends modernes (React/Next.js), améliorant ainsi considérablement la résilience du système.
  * **Excellence en Ingénierie Full-Stack** : Concevoir et développer des interfaces réactives et centrées sur l'utilisateur avec **React, Next.js et TypeScript**, intégrées de manière fluide avec des API **Java 21 / Spring Boot** robustes et sécurisées.
  * **Culture DevOps & Qualité** : Promouvoir le **TDD**, les principes du **Clean Code** et instaurer l'automatisation CI/CD (Azure, GitHub Actions) pour assurer une livraison logicielle de haute qualité et prévisible. Mentorer les équipes de développement pour élever leurs standards techniques.
  * **Ingénierie assistée par l'IA** : Pionnier d'une livraison logicielle à grande vitesse en fusionnant la rigueur d'entreprise (Epics, Agile/Scrum, CI/CD) avec des flux de travail avancés intégrant l'IA (Cursor, Windsurf). Cette approche accélère le développement de nouveaux projets et rationalise le refactoring de monolithes hérités complexes, réduisant efficacement la dette technique.

---
*Actuellement à la recherche d'un poste de Tech Lead dans l'écosystème Spring Boot et React. Ouvert à des rôles hybrides dans la région de Stuttgart ou à des postes 100 % en télétravail depuis l'Allemagne.*`,
  avatarUrl: '/images/linkedin-profile.png',
  skills: [
    'Java',
    'Spring Boot',
    'Spring Cloud',
    'React',
    'Next.js',
    'Azure',
    'Docker',
    'Kubernetes',
    'SQL/NoSQL',
    'IntelliJ IDEA',
    'Outils IA (Cursor, Windsurf, Antigravity, MCP)',
  ],
  certifications: [
    { name: 'Oracle Certified Professional, Java SE 6 Programmer', authority: 'Oracle', url: '' },
    {
      name: 'Oracle Certified Expert Java EE 6 Web Components Developer',
      authority: 'Oracle',
      url: '',
    },
    {
      name: 'Pega 7.1 Certified System Architect',
      authority: 'Pegasystems',
      url: 'https://pdn.pega.com/pega-academy/verify-certification?fname=Liviu-Lucian&lname=Ionesi',
    },
    {
      name: 'The Complete Guide to Becoming a Software Architect',
      authority: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-5a84800c-8893-4d20-97ec-fa513267d795/',
    },
    {
      name: 'Microservices Architecture - The Complete Guide',
      authority: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-52b76175-4ab7-464f-9117-baf905ac24c2/',
    },
    {
      name: 'Spring Boot Microservices and Spring Cloud',
      authority: 'Udemy',
      url: 'http://ude.my/UC-70ca993d-e60a-436f-8673-739a57fe54da',
    },
    {
      name: 'Azure DevOps Fundamentals for Beginners',
      authority: 'Udemy',
      url: 'https://www.udemy.com/certificate/UC-1ced9814-91c6-4ebc-b656-af2fbeeba0f9/',
    },
  ],
  languages: [
    { language: 'Allemand', proficiency: 'Niveau Courant Professionnel' },
    { language: 'Anglais', proficiency: 'Niveau Courant Professionnel' },
    { language: 'Roumain', proficiency: 'Langue Maternelle' },
    { language: 'Français', proficiency: 'Notions de Base' },
  ],
};

export const about: AboutData = {
  greeting: '~/developer/portfolio',
  name: 'Liviu',
  suffix: '.io',
  lastName: 'NESI',
  description:
    "Tech Lead & Ingénieur Full-Stack Senior. Je bâtis l'épine dorsale numérique pour les secteurs de l'automobile et de la fintech. Spécialisé dans les microservices Spring Boot, les frontends React, et l'accélération de la livraison logicielle en entreprise grâce à des processus assistés par l'IA.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: 'Des Projets, pas juste du Code',
  ctaSecondary: 'Me Contacter',
};

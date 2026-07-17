export const experience = [
  {
    id: 1,
    type: "senior",
    role: "Senior Software Developer",
    company: "DAT Group",
    companySize: "501-1,000 angajați",
    industry: "Software Auto",
    locationType: "Remote / Hybrid",
    websiteUrl: "https://www.dat.eu",
    period: "Sep 2020 - Mar 2026",
    summary: `Am făcut parte din echipa Costing Applications pentru SilverDAT 3 „calculate” — standardul recunoscut de asigurători pentru calculul costurilor de reparații. Aplicația generează devize precise, bazate pe normele producătorilor, pentru peste 70.000 de modele auto (piese, manoperă, vopsitorie, manuale OEM). Este utilizată pe scară largă de service-uri, reprezentanțe, evaluatori, asigurători, bănci și producători.`,
    description: `*   Am extins, întreținut și testat serviciile legacy Java EE (monorepo SOA/SOAP cu frontend-uri JavaScript/React), adaptând suitele de teste SoapUI și manuale pe măsură ce serviciile au evoluat și adăugând acoperire TestNG/Mockito pentru modificări.
*   Am arhitecturat și deținut end-to-end noi servicii Spring Boot pentru a înlocui componentele legacy Java EE — arhitectură curată N-Tier cu mapare strictă DTO, gestionare centralizată a erorilor și tracing distribuit bazat pe MDC — expunând API-uri REST contract-first, compatibile HATEOAS (OpenAPI), susținute de teste de integrare JUnit 5/MockMvc și Postman Collections cu teste automate.
*   Am gestionat stratul de date cu JPA/Hibernate: PostgreSQL a înlocuit bazele de date SQL legacy (în principal Oracle SQL), iar MongoDB a introdus NoSQL într-un stack anterior exclusiv SQL.
*   Am rescris frontend-urile legacy JavaScript ca și componente moderne și responsive React/TypeScript, optimizând arhitectura cu Effector (state management) și PrimeReact.
*   CI/CD: Am construit platforma legacy cu Gradle pe Jenkins și am livrat-o în testare și producție; serviciile noi au fost livrate prin Gradle Wrapper. Livrare către Azure Kubernetes (AKS) prin pipeline-uri de build și release cu chart-uri Helm și NGINX ingress. Am folosit Docker Compose pentru dezvoltare locală. Am migrat controlul versiunilor din GitLab în Azure Repos. Platforma legacy are 6 release-uri/an pe un panou Kanban în Jira, în timp ce serviciile noi au trecut la livrare continuă.
*   Am modernizat build-ul părinte Spring Boot moștenit (OpenRewrite pentru actualizări automate de versiune peste limita BOM, un bot Renovate pe Azure pentru actualizări de dependențe) și am mutat configurarea din proprietăți bazate pe foldere în profile Spring.
*   Am construit un flux de lucru augmentat de AI în IntelliJ IDEA (CodeGPT pe un LLM local Azure), Cursor și Windsurf pentru a documenta și analiza codul legacy, a extrage cerințele și a implementa servicii noi, menținute 100% curate în SonarQube.
*   Am ghidat direcția tehnică prin prototipare și evaluarea unor abordări mai bune ori de câte ori am găsit una — demonstrându-le în cod funcțional și susținând workshop-uri cu echipa (design REST/API-first, React modern și Next.js, OpenRewrite pentru upgrade-uri automate, Dependabot și o evaluare Spring Cloud Gateway pentru înlocuirea gateway-ului personalizat DAT).`,
    tech: [
      { category: "Backend", skills: ["Java 17+", "Jakarta EE", "Spring Boot 3+", "Spring Cloud", "REST APIs", "OpenAPI", "Microservices", "SOA / SOAP", "WSDL"] },
      { category: "Frontend", skills: ["JavaScript", "HTML", "CSS", "React", "TypeScript", "Effector", "PrimeReact"] },
      { category: "Baze de Date", skills: ["PostgreSQL", "Oracle", "MongoDB", "H2", "JPA", "Hibernate", "JDBC"] },
      { category: "Testare", skills: ["TestNG", "Mockito", "JUnit 5", "MockMvc", "Testcontainers"] },
      { category: "CI/CD & DevOps", skills: ["Jenkins", "GitLab CI/CD", "Gradle", "Node.js", "npm", "Docker", "Azure", "Kubernetes (AKS)", "Helm", "NGINX Ingress", "OpenRewrite", "Renovate", "Dependabot"] },
      { category: "Instrumente", skills: ["IntelliJ IDEA", "Postman", "SoapUI", "SQL Developer", "Cursor", "Windsurf", "Azure OpenAI"] },
      { category: "Metodologie", skills: ["Agile", "Kanban", "Jira"] },
    ],
  },
  {
    id: 2,
    type: "mid",
    role: "Inginer software",
    company: "evia solutions GmbH",
    companySize: "51-200 angajați",
    industry: "Servicii IT & consultanță",
    locationType: "on-site",
    websiteUrl: "https://www.evia.de",
    period: "Feb 2016 - Aug 2020",
    summary: `Am livrat soluții digitale critice pentru sectoarele de asigurări și automotive.`,
    description: `*   **Scalare sisteme exitente**: Am întreținut și dezvoltat aplicația de bază **WebSphere Java EE (JSP)**. Această muncă asiduă a asigurat fluxul stabil de venituri, care a susținut hipercresterea companiei de la 16 la peste 200 de angajați.
*   **Dezvoltare backend**: Am dezvoltat servicii de integrare de înaltă performanță pentru clienți importanți din **domeniul bancar** folosind **Java EE** și **Micronaut**, colaborând cu echipe externe de frontend pentru schimbul de date B2B fără probleme.
*   **Implementare Soluții Microsoft**: Am servit ca dezvoltator principal pentru noua unitate "Microsoft Delivery". Am implementat structura intranet a companiei și automatizarea proceselor folosind **SharePoint** și **Microsoft Flow**, traducând cerințele strategice în fluxuri de lucru automatizate funcționale.
*   **Expertiză frontend & certificări**: Am obținut certificarea în BPM ca **Pega CSA** și am început parcursul meu de certificare Microsoft cu certificarea frontend pentru **HTML5, CSS3 și JavaScript**. Am aplicat aceste cunoștințe pentru a menține și îmbunătăți diverse interfețe web.`,
    tech: [
      { category: "Backend", skills: ["Java EE", "Micronaut", "WebSphere"] },
      { category: "Baze de Date", skills: ["Oracle SQL", "PostgreSQL"] },
      { category: "CI/CD & DevOps", skills: ["Docker", "Jenkins", "Git"] },
      { category: "Testare & Calitate", skills: ["JUnit", "SonarQube"] },
      { category: "Altele", skills: ["SharePoint", "Microsoft Flow"] },
      { category: "Metodologie", skills: ["SAFe", "SCRUM"] },
      { category: "Certificări", skills: ["Pega CSA"] },
    ],
  },
  {
    id: 3,
    type: "junior",
    role: "Inginer software junior",
    company: "PRODYNA AG",
    companySize: "201-500 angajați",
    industry: "consultanță IT",
    locationType: "la fața locului / deplasări",
    websiteUrl: "https://www.prodyna.com",
    period: "Nov 2014 - Ian 2016",
    summary: `Am oferit consultanță IT expertă pentru portaluri de întreprindere.`,
    description: `*   **Portaluri Enterprise**: Am dezvoltat și implementat soluții complexe de portal **Liferay** pentru clienți de mari dimensiuni, utilizând **Java EE**, **MySQL** și **AlloyUI**.
*   **Proiecte agile**: Am colaborat în echipe SCRUM pentru a livra software de înaltă calitate, utilizând **Jira** și **Confluence** pentru documentarea si raportarea transparentă a proiectelor.
*   **Asigurarea calității**: Am integrat **SonarQube** în procesul de build, pentru a asigura obligatoriu calitatea și mentenabilitatea codului încă din prima zi.
*   **Certificări obținute**: Am validat expertiza de bază obținând **Oracle Certified Professional Java Programmer (OCPJP)** și **Oracle Certified Expert Web Component Developer (OCE WCD)**.`,
    tech: [
      { category: "Backend", skills: ["Java EE", "Liferay"] },
      { category: "Frontend", skills: ["AlloyUI"] },
      { category: "Baze de Date", skills: ["MySQL"] },
      { category: "Calitate", skills: ["SonarQube"] },
      { category: "Certificări", skills: ["OCPJP", "OCE WCD"] },
    ],
  },
  {
    id: 4,
    type: "intern",
    role: "Stagiu practic",
    company: "Alpine Electronics R&D Europe",
    companySize: "1,000+ angajați",
    industry: "Electronică auto",
    locationType: "La fața locului",
    websiteUrl: "https://www.alpine.de/",
    dualStudy: "ADV Böblingen",
    period: "Sep 2012 - Aug 2013",
    summary: `Stagiar în Integrarea Sistemelor pentru divizia OEM Car Infotainment, dezvoltând module software pentru proiectul „Alpine Test Automation Framework”.`,
    description: `*   Am dezvoltat și extins Alpine Test Automation Framework (C#, .NET 4.0) intern construind module de testare automată pentru interfețe hardware precum Bluetooth, generatoare de semnal RDS, magistrale MOST/CAN, camere climatice și roboți pentru schimbarea CD/DVD.
*   Am proiectat și implementat „Alpine Voltage Curve Editor” — evaluat cu nota maximă 1.0 ca lucrare de diplomă — și am modernizat interfețele grafice ale mai multor module de testare existente utilizând WPF și modelul MVVM.
*   Am asigurat robustețea arhitecturală a cadrului de testare aplicând modelarea UML și șabloane de proiectare (design patterns) în SharpDevelop.`,
    tech: [
      { category: "Backend", skills: ["C#", ".NET 4.0", "UML", "Design Patterns", "SharpDevelop", "StyleCop"] },
      { category: "Frontend & Mobile", skills: ["WPF", "MVVM", "Android SDK"] },
      { category: "Hardware & Protocols", skills: ["Bluetooth", "CAN", "MOST", "RDS"] },
    ],
  },
];

export const education = [
  {
    id: 1,
    type: "dual-study",
    studyField: "Studiu dual",
    degree: "Informatician cu certificare de stat",
    school: "Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)",
    url: "https://gds2.de",
    location: "Böblingen, Germania",
    year: "2011 - 2014",
    summary: "Program intensiv de studiu dual axat in domeniu ingineriei software, sisteme de baze de date și management de proiect.",
    description: "Formare profesională de 3 ani (Berufskolleg). A inclus un an de stadiu practic la Alpine Electronics R&D Europe GmbH, cu teza: \"Alpine Voltage Curve Editor\" (Calificativ: Excelent).",
    grade: "Promovat cu distincție (Belobigung)",
  },
  {
    id: 2,
    type: "master",
    studyField: "Masterat",
    degree: "Diplomă de master",
    school: "Universitatea de Vest din Timișoara",
    url: "https://info.uvt.ro/en/",
    location: "Timișoara, România",
    year: "2009 - 2011",
    summary: "Formare specializată în pedagogie și didactică pentru predarea matematicii.",
    description: "Program academic avansat, axat pe modele matematice complexe și metodologii educaționale. Primul an al acestui program de master a fost absolvit în străinătate, la Universitatea din Stuttgart, prin intermediul programului Erasmus. Materiile principale au inclus: Analiză vectorială, Algebră avansată și Geometrie, Metode iterative, Metode statistice și probabilistice, precum și Software pentru management educațional.",
    grade: "7.70 / 10 (Anul 1) & 7.66 / 10 (Anul 2)",
  },
  {
    id: 3,
    type: "bachelor",
    studyField: "Bachelor",
    degree: "Diplomă de licență",
    school: "Universitatea de Vest din Timișoara",
    url: "https://info.uvt.ro/en/",
    location: "Timișoara, România",
    year: "2006 - 2009",
    summary: "Specializare dublă oferind baze distincte atât în matematică abstractă, cât și în informatică aplicată.",
    description: "Curriculum cu dublă specializare care îmbină matematica teoretică cu informatica aplicată și ingineria software. Materiile principale au inclus: Structuri de Date, Inteligență Artificială, Sisteme de Baze de Date, Rețele de Calculatoare, Geometrie Computațională, Programare Logică și Funcțională și Modelare/Simulare Matematică.",
    grade: "10 / 10 (Examen final) | 9.02 / 10 (Media generală)",
  },
  {
    id: 4,
    type: "high-school",
    studyField: "Colegiu",
    degree: "Diplomă de Bacalaureat",
    school: "Colegiul Național de Informatică \"Spiru Haret\" Suceava",
    url: "https://www.cni-sv.ro/",
    location: "Suceava, România",
    year: "2002 - 2006",
    summary: "Curriculum intensiv de Informatică și Matematică.",
    description: "Profil: Matematică-informatică intensiv.",
    grade: "9.81 / 10",
  },
];

export const projects = [
  {
    id: 1,
    title: "Filmpire Microservices Platform",
    description:
      "O platformă enterprise completă de microservicii pentru descoperirea de filme, gestionată de la idee la produsul gata de livrare folosind panouri Kanban GitHub Projects (Epics, Stories, Tasks). Opt servicii independente Java 25 / Spring Boot 3.5 care includ Spring Cloud (Eureka, API Gateway), susținute de o strategie hibridă PostgreSQL/MongoDB și un cache Redis cu fallback la TMDB API. Integrează Spring AI (Whisper/GPT-4) prin REST și gRPC. Construită la standarde moderne stricte — record DTOs, constructor injection, virtual threads — și cu o testare riguroasă (JUnit 5, Testcontainers, acoperire JaCoCo 85%) integrată în GitHub Actions CI/CD. Implementată folosind Kubernetes pe Minikube.",
    tech: ["Java 25", "Spring Boot 3.5", "Spring Cloud", "PostgreSQL", "MongoDB", "Redis", "Spring AI", "gRPC", "REST", "JUnit 5", "Testcontainers", "JaCoCo", "GitHub Actions", "Docker", "Podman", "Kubernetes"],
    githubUrl: "https://github.com/pehlivanu/filmpire-microservices",
    deployUrl: "",
  },
  {
    id: 2,
    title: "Defense Asset Manager",
    description:
      "O aplicație enterprise React 19 pentru gestionarea activelor și a personalului în sectorul de apărare, impunând o arhitectură strictă bazată pe funcționalități (Domain-Driven) pentru a sprijini livrarea SAFe la nivelul mai multor echipe. Dezvoltare complet tipizată, contract-first prin OpenAPI 3.1 și construită pe Vite pentru HMR instantaneu. Utilizează Zustand cu Immer pentru starea imuabilă, Mock Service Worker pentru simularea offline REST și componente Material UI v9 cu contrast ridicat, cu funcții UX critice de siguranță, cum ar fi confirmările pentru acțiuni distructive.",
    tech: ["React 19", "Vite", "Zustand", "Material UI v9", "MSW", "OpenAPI 3.1", "TypeScript", "Vitest"],
    githubUrl: "https://github.com/pehlivanu/defense-asset-manager",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Antigravity IDE Portfolio",
    description:
      "Un portofoliu de dezvoltator extrem de interactiv care recreează meticulos estetica mediului de dezvoltare Antigravity de la Google — activity bar, explorator de fișiere, zonă de editare, status bar live și o paletă de comenzi funcțională — construit pe Next.js 15 App Router cu micro-animații imersive Framer Motion. Dispune de generare automată a CV-ului în format PDF, în multiple șabloane și limbi, plus un formular de contact dinamic ce utilizează API-ul Geolocation pentru a calcula și afișa distanța fizică dintre vizitator și dezvoltator.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Geolocation API", "PDF Generation", "Framer Motion"],
    githubUrl: "https://github.com/pehlivanu/portfolio-site",
    deployUrl: "https://liviuionesi.vercel.app",
  },
  {
    id: 4,
    title: "Filmpire Frontend",
    description:
      "O aplicație modernă și interactivă pentru descoperirea filmelor în React 17 și Redux Toolkit, servind drept client frontend dedicat pentru backend-ul de 8 microservicii Filmpire. Integrează API-ul TMDB pentru navigarea categoriilor și gestionarea favoritelor, iar funcția sa definitorie este o integrare Alan AI SDK care oferă o interfață vocală complet conversațională. Calitatea codului este asigurată cu Jest / React Testing Library și ESLint (Airbnb).",
    tech: ["React 17", "Material-UI", "Redux Toolkit", "Alan AI"],
    githubUrl: "https://github.com/pehlivanu/filmpire",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
  {
    id: 5,
    title: "Knowledge Base Platform",
    description:
      "Un sistem de documentare localizat gata pentru enterprise, construit pe Next.js 16 și React 19 Server Components pentru un payload client minim. Acționează ca un generator de site-uri statice care transformă o simplă colecție de fișiere Markdown (.md) într-un site wiki complet. Dispune de internaționalizare avansată prin next-intl gestionată la nivelul de middleware, cu documentația internă securizată de un middleware custom care verifică cookie-urile HttpOnly.",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "next-intl", "Markdown"],
    githubUrl: "https://github.com/pehlivanu/knowledge-base-platform",
    deployUrl: "https://phenix-wiki.vercel.app",
  },
  {
    id: 6,
    title: "DevOps Toolchain Showcase",
    description:
      "Un lanț de instrumente CI/CD declarativ, complet containerizat, care demonstrează practici DevOps de nivel enterprise, orchestrat prin Podman Compose. Un server Jenkins personalizat folosește Docker-outside-of-Docker (DooD) pentru a compila și publica imagini ale aplicației printr-un Jenkinsfile în mai multe etape. Automatizează raportarea acoperirii JaCoCo și publicarea artifactelor în JFrog Artifactory, și folosește scripturi personalizate Bash + curl + jq pentru a trimite metricile de testare către sisteme externe ALM/MQC via API-uri REST.",
    tech: ["Jenkins", "JFrog Artifactory", "Podman", "Gradle", "Java 17"],
    githubUrl: "https://github.com/pehlivanu/devops-toolchain-showcase",
    deployUrl: "",
  },
  {
    id: 7,
    title: "DevFlow - Full-Stack Q&A Platform",
    description:
      "O platformă sofisticată de Q&A pentru dezvoltatori, condusă de comunitate, construită nativ pe Next.js 14 App Router cu Server Actions în loc de un nivel API separat. Dispune de un sistem robust de etichetare, căutare globală pentru întrebări, răspunsuri, utilizatori și etichete, și fluxuri personalizate de recomandări. Un motor avansat de reputație și insigne ludifică participarea, autentificarea rulează prin NextAuth.js (Google/GitHub OAuth + credențiale) cu validare end-to-end Zod, iar API-ul OpenAI generează răspunsuri complete cu inteligență artificială și fragmente de cod.",
    tech: ["Next.js 14", "TypeScript 5", "MongoDB Atlas", "Tailwind CSS", "OpenAI API", "NextAuth", "Zod"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 8,
    title: "Python GUI Automation Framework",
    description:
      "O aplicație desktop Python rezilientă, cross-platform, cu o interfață grafică Tkinter, care controlează și automatizează o aplicație Android. Utilizează potrivirea de șabloane OpenCV pentru a detecta vizual și a interacționa cu elemente UI dinamice direct pe dispozitiv via Android Debug Bridge (ADB), mai degrabă decât prin orice API de bază. Incorporează profiluri de interacțiune asemănătoare oamenilor — variații de coordonate și temporizare aleatorie — pentru a evita metodele euristice de detectare a boților, și rulează fie din interfața grafică, fie headless ca un daemon Linux.",
    tech: ["Python 3.10", "OpenCV", "Tkinter", "ADB", "Bash"],
    githubUrl: "https://github.com/pehlivanu/gui-automation-framework",
    deployUrl: "https://phenix-wiki.vercel.app/en/docs/automation-app",
  },
  {
    id: 11,
    title: "Alana Windsurf",
    description:
      "O aplicație web full-stack scalabilă pe Next.js 13+ App Router și React 18+. Oferă o autentificare comprehensivă prin NextAuth.js — OAuth (Google, GitHub) plus credențiale securizate de e-mail/parolă — cu datele stocate în MongoDB prin Mongoose. Starea este gestionată cu React Context și useReducer, formularele sunt tratate robust cu React Hook Form și Zod, iar interfața este stilizată cu Material UI și Emotion.",
    tech: ["Next.js 13+", "React 18+", "Material UI", "NextAuth.js", "MongoDB", "Zod"],
    githubUrl: "https://github.com/pehlivanu/alana-windsurf",
    deployUrl: "",
  },
  {
    id: 12,
    title: "Payload E-Commerce Platform",
    description:
      "O soluție e-commerce comprehensivă care îmbină framework-ul Payload CMS cu un frontend static Next.js. Vine cu un backend complet funcțional, cu un panou de administrare enterprise care gestionează atât produse fizice, cât și conținut restricționat cu paywall, integrat cu webhooks Stripe pentru procesarea securizată a plăților.",
    tech: ["Next.js", "Payload CMS", "Stripe", "React Hook Form"],
    githubUrl: "https://github.com/pehlivanu/e-commerce",
    deployUrl: "",
  },
];

export const linkedInProfile = {
  name: "Liviu Ionesi",
  headline: "Tech Lead | Senior Full-Stack Engineer | Java, Spring Boot, React, Next.js",
  location: "Kirchheim unter Teck, Germania",
  phone: "+49 1514 6966 832",
  address: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck",
  email: "ionesiliviu@yahoo.com",
  connections: "500+",
  about: "Technical Lead & Senior Full-Stack Engineer. Construirea coloanei vertebrale digitale a industriilor Auto și Fintech. Cu peste 13 ani de experiență în ingineria sistemelor distribuite de înaltă performanță, mă specializez în conducere tehnică, modernizarea arhitecturilor vechi și livrarea de soluții scalabile, native cloud.",
  fullBio: `### **Technical Lead & Senior Full-Stack Engineer | Specialist Auto & FinTech**

Cu peste 13 ani de experiență în ingineria sistemelor distribuite de înaltă performanță, mă specializez în conducere tehnică, modernizarea arhitecturilor vechi și livrarea de soluții scalabile, native cloud. Cariera mea se întinde de la dezvoltarea cadrelor critice de automatizare la **Alpine Electronics** până la stimularea transformării digitale a platformelor de date enterprise la **DAT Group**. Excelența mea constă în îndrumarea echipelor interfuncționale pentru a construi software robust folosind tehnologii moderne.

Fac legătura între logica backend complexă, experiențele frontend intuitive și obiectivele strategice de afaceri. Competențele mele de bază includ:

  * **Conducere Tehnică & Arhitectură**: Conducerea designului de sistem și susținerea migrării aplicațiilor monolitice **Java EE** către **Microservicii** scalabile (Spring Boot, Azure) și frontend-uri moderne (React/Next.js), îmbunătățind semnificativ reziliența sistemului.
  * **Excelență în Ingineria Full-Stack**: Arhitecturarea și dezvoltarea interfețelor responsive, centrate pe utilizator cu **React, Next.js și TypeScript**, integrate perfect cu API-uri robuste și sigure **Java 21 / Spring Boot**.
  * **DevOps & Cultura Calității**: Promovarea **TDD**, a principiilor **Clean Code** și stabilirea automatizării CI/CD (Azure, GitHub Actions) pentru a asigura o livrare software de înaltă calitate și predictibilă. Mentorarea echipelor de inginerie pentru a-și ridica standardele tehnice.
  * **Inginerie Augmentată de IA**: Pionierat în livrarea de software de mare viteză prin fuziunea rigorii enterprise (Epics, Agile/Scrum, CI/CD) cu fluxuri de lucru avansate integrate cu IA (Cursor, Windsurf). Această abordare accelerează dezvoltarea proiectelor noi și eficientizează refactorizarea monoliților complecși, reducând efectiv datoria tehnică.

---
*În prezent caut un rol de Technical Lead în ecosistemele Spring Boot și React. Deschis pentru oportunități hibride în zona Stuttgart sau poziții complet remote în Germania.*`,
  avatarUrl: "/images/linkedin-profile.png",
  skills: ["Java", "Spring Boot", "Spring Cloud", "React", "Next.js", "Azure", "Docker", "Kubernetes", "SQL/NoSQL", "IntelliJ IDEA", "Instrumente IA (Cursor, Windsurf, Antigravity, MCP)"],
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
    { language: "Germană", proficiency: "Competență Profesională" },
    { language: "Engleză", proficiency: "Competență Profesională" },
    { language: "Română", proficiency: "Nativ sau Bilingv" },
    { language: "Franceză", proficiency: "Competență Elementară" }
  ]
};

export const about = {
  greeting: "~/developer/portfolio",
  name: "Liviu",
  suffix: ".io",
  lastName: "NESI",
  description: "Technical Lead & Senior Full-Stack Engineer. Construirea coloanei vertebrale digitale a industriilor Auto și Fintech. Sunt specializat în microservicii Spring Boot, frontend-uri React și stimularea livrării de software enterprise de mare viteză prin fluxuri de lucru augmentate de IA.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: "Proiecte, nu doar cod",
  ctaSecondary: "Contactează-mă"
};

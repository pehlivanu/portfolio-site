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
    description: `*   Am dezvoltat, întreținut, depanat și testat servicii legacy în Java EE (arhitectură SOA/SOAP monorepo cu interfețe în JS/React), rulând suite ample de teste manuale și SoapUI, pe care le-am adaptat constant la modificările serviciilor.
*   Am conceput arhitectura și am preluat responsabilitatea end-to-end pentru noile microservicii Spring Boot, menite să înlocuiască vechile componente Java EE. Am implementat o arhitectură curată (Clean Architecture), cu o mapare strictă a DTO-urilor, gestionare centralizată a erorilor și distributed tracing prin MDC pentru un nivel ridicat de observabilitate.
*   Am definit și implementat API-uri REST „contract-first”, conforme cu principiile HATEOAS, folosind OpenAPI. Acest lucru a asigurat contracte clare și a permis dezvoltarea în paralel pe frontend și backend.
*   Am gestionat stratul de acces la date folosind JPA și Hibernate pentru noile servicii Spring Boot (aplicația legacy folosea o abordare directă prin JDBC), lucrând cu baze de date precum PostgreSQL, Oracle și MongoDB, dar și cu H2 pentru testele in-memory.
*   Am rescris aplicațiile legacy din JavaScript în React și TypeScript, transformându-le în aplicații web moderne și responsive. Totodată, am optimizat arhitectura de frontend utilizând Effector pentru state management și componente PrimeReact.
*   Am asigurat o acoperire riguroasă prin teste, scriind teste unitare cu TestNG și Mockito atât pentru codul nou adăugat în sistemul legacy, cât și pentru serviciile moderne. Am completat suita cu peste 200 de teste de integrare folosind JUnit 5, MockMvc și colecții Postman.
*   CI/CD: Am configurat procesele de build cu Gradle pe Jenkins pentru platforma legacy (deploy pe mediile de test și producție) și am folosit Gradle Wrapper pentru serviciile noi. Acestea din urmă au fost livrate în Azure Kubernetes (AKS) prin pipeline-uri automate de release și Helm charts (NGINX Ingress). Pentru dezvoltarea locală am folosit Docker Compose și Testcontainers. Am migrat versionarea codului din GitLab în Azure Repos. Am livrat aproximativ 6 release-uri pe an pentru platforma legacy, respectând un flux de lucru Kanban în Jira.
*   Am modernizat configurările moștenite pentru build-urile Spring Boot: întrucât upgrade-ul manual peste versiunea 3.0.10 nu mai era fezabil, am creat un prototip cu pluginul Gradle OpenRewrite pentru actualizarea automată a versiunilor. De asemenea, am integrat bot-ul Renovate pe Azure pentru actualizarea dependențelor third-party.
*   Am construit un flux de lucru asistat de Inteligența Artificială folosind IntelliJ IDEA (prin CodeGPT conectat la un LLM Azure local), Cursor și Windsurf. Acest setup a facilitat documentarea și analiza codului vechi, extragerea cerințelor de business, designul arhitectural și implementarea noilor servicii, obținând astfel cod de o calitate ireproșabilă (100% clean în SonarQube).
*   Am evaluat fezabilitatea migrării soluției custom de API Gateway către Spring Cloud Gateway, însă am concluzionat și documentat că migrarea nu este posibilă momentan, deoarece necesită stack-ul reactiv Spring WebFlux, în timp ce gateway-urile noastre foloseau tehnologii bazate pe servlet-uri.`,
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
    period: "Sep 2012 - Aug 2014",
    summary: `Am proiectat instrumente critice de automatizare a testelor pentru sisteme de infotainment auto de ultimă generație.`,
    description: `*   **Dezvoltare Framework**: Am proiectat și implementat "Alpine Curve Editor" și alte module pentru **Alpine Test Automation Tool**. Am refactorizat întregul frontend folosind modelul **MVC**, am rearanjat prototipul UI și am îmbunătățit semnificativ calitatea software-ului folosind **StyleCop**.
*   **Inovație**: Am dezvoltat o aplicație "Tablet Robot Interface Control" (TRIC) folosind **Android SDK**, permițând controlul de la distanță al roboților industriali pentru testarea ecranelor tactile.
*   **Excelență Teză**: Am primit nota maximă (1.0) pentru teza despre "Alpine Curve Editor", recunoscând robustețea arhitecturală și utilitatea instrumentului.`,
    tech: [
      { category: "Backend", skills: ["C#", ".NET"] },
      { category: "Frontend & Mobile", skills: ["WPF", "MVC", "Android SDK"] },
      { category: "Calitate", skills: ["StyleCop"] },
    ],
  },
];

export const education = [
  {
    id: 1,
    type: "dual-study",
    studyField: "Studiu dual",
    degree: "Staatlich geprüfter Informatiker",
    school: "GDS Schule 2",
    url: "https://gds2.de",
    location: "Böblingen, Germania",
    year: "2011 - 2014",
    summary: "Program intensiv de studiu dual axat in domeniu ingineriei software, sisteme de baze de date și management de proiect.",
    description: `*   **Specializare**: Inginerie software, sisteme de baze de date, management de proiect.
*   **Teză**: "Alpine Curve Editor" - Notat **1.0 (Excelent)**.
*   **Cursuri principale**: C/Assembly (Intel 8085), Java (OO, Sisteme Distribuite), SQL/JDBC, UML/Design Patterns, Linux, Programare Roboți.
*   **Certificări**: Cisco CCNA Exploration Module 1-4.
*   **Premii**: Am primit distincția oficială "Belobigung".`,
    grade: 'Lucrare practică: 1.0 ("sehr gut" / foarte bine)',
  },
  {
    id: 2,
    type: "master",
    studyField: "Masterat",
    degree: "Studii de Masterat în Didactica Matematicii",
    school: "Universitatea de Vest din Timișoara",
    url: "https://info.uvt.ro/en/",
    location: "Timișoara, România",
    year: "2009 - 2011",
    summary: "Formare specializată în pedagogie și didactică pentru predarea matematicii.",
    description: `*   **Obiectiv**: Certificare profesională pentru predarea Matematicii.
*   **Arie de interes**: Matematică Avansată, Psihologie Pedagogică, Design Curricular.
*   **Experiență Internațională**: Anul 1 de studiu absolvit prin bursă Erasmus în Stuttgart, Germania.`,
    grade: 'Note medii: Anul 1 (7.70/10), Anul 2 (7.66/10)',
  },
  {
    id: 3,
    type: "bachelor",
    studyField: "Bachelor",
    degree: "Diplomă de licență în matematică și informatică",
    school: "Universitatea de Vest din Timișoara",
    url: "https://info.uvt.ro/en/",
    location: "Timișoara, România",
    year: "2006 - 2009",
    summary: "Specializare dublă oferind baze distincte atât în matematică abstractă, cât și în informatică aplicată.",
    description: `*   **Specializare**: Matematică & Informatică.
*   **Competențe de bază**: Analiză Matematică, Algebră, Algoritmi, Structuri de Date, Sisteme de Operare.`,
    grade: 'Media ponderată: 9.02/10 (Nota lucrare: 10/10)',
  },
  {
    id: 4,
    type: "high-school",
    studyField: "Colegiu",
    degree: "Diplomă de Bacalaureat",
    school: "Colegiul Național de Informatică \"Spiru Haret\"",
    url: "https://www.cni-sv.ro/",
    location: "Suceava, România",
    year: "2002 - 2006",
    summary: "Curriculum intensiv de Informatică și Matematică.",
    description: `*   **Profil**: Matematică & Informatică (Intensiv).`,
    grade: 'Nota Bacalaureat: 9.81/10 (Echivalent Abitur german: 1.1)',
  },
];

export const projects = [
  {
    id: 1,
    title: "Filmpire Microservices",
    description: "Platformă enterprise de microservicii pentru descoperirea de filme. Arhitecturată cu 8 servicii backend Spring Boot 3.5, infrastructură Spring Cloud (Eureka, API Gateway), integrare Spring AI și stocare hibridă PostgreSQL/MongoDB.",
    tech: ["Java 25", "Spring Boot 3", "Spring Cloud", "PostgreSQL", "MongoDB", "Docker"],
    githubUrl: "https://github.com/pehlivanu/filmpire-microservices",
    deployUrl: "",
  },
  {
    id: 2,
    title: "Defense Asset Manager",
    description: "Aplicație enterprise React 19. Prezintă managementul stării cu Zustand + Immer, Material UI v9, dezvoltare contract-first cu OpenAPI 3.1, simulare cu MSW și implementare cu Podman.",
    tech: ["TypeScript", "React 19", "Zustand", "Material UI", "OpenAPI", "Podman"],
    githubUrl: "https://github.com/pehlivanu/defense-asset-manager",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Portfolio Site",
    description: "Portofoliu de dezvoltator construit ca o experiență cu tematică IDE. Prezintă Next.js 15 App Router, TypeScript, Tailwind CSS v4 și animații Framer Motion.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Framer Motion", "React"],
    githubUrl: "https://github.com/pehlivanu/portfolio-site",
    deployUrl: "https://liviuionesi.vercel.app",
  },
  {
    id: 4,
    title: "Filmpire",
    description: "O aplicație imersivă de descoperire a filmelor cu funcție de căutare prin comandă vocală (IA), filtrare pe categorii şi un design modern şi responsiv.",
    tech: ["React", "Material UI", "Redux Toolkit", "Alan AI", "TMDB API"],
    githubUrl: "https://github.com/pehlivanu/filmpire",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
  {
    id: 5,
    title: "Knowledge Base Platform",
    description: "O platformă de management al cunoștințelor pregătită pentru producție și localizată pentru 'Last Z Survival Shooter'. Construită cu Next.js 16 App Router, cu localizare Next-Intl, autentificare middleware și un design mobile-first.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/pehlivanu/knowledge-base-platform",
    deployUrl: "https://phenix-wiki.vercel.app",
  },
  {
    id: 6,
    title: "DevOps Toolchain Showcase",
    description: "O prezentare cuprinzătoare a unui lanț de instrumente CI/CD care implementează un mediu complet containerizat. Integrează Podman Compose, Jenkins CI, JFrog Artifactory, Gradle și ALM/MQC simulat prin REST API.",
    tech: ["Java", "Jenkins", "Docker / Podman", "JFrog Artifactory", "Gradle", "Bash"],
    githubUrl: "https://github.com/pehlivanu/devops-toolchain-showcase",
    deployUrl: "",
  },
  {
    id: 7,
    title: "DevFlow",
    description: "O platformă comunitară modernă pentru dezvoltatori pentru a împărtăși cunoștințe, cu recomandări bazate pe IA și o interfață utilizator receptivă.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "Clerk Auth"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 8,
    title: "GUI Automation Framework",
    description: "Un instrument de automatizare GUI bazat pe Python pentru 'Last Z: Survival Shooter'. Prezintă potrivire de șabloane vizuale pentru interacțiuni asemănătoare omului, asistență automatizată a aliaților și colectarea armelor folosind Tkinter și Bash.",
    tech: ["Python", "Tkinter", "GUI Automation", "Bash Scripting", "Linux"],
    githubUrl: "https://github.com/pehlivanu/gui-automation-framework",
    deployUrl: "https://phenix-wiki.vercel.app/en/docs/automation-app",
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

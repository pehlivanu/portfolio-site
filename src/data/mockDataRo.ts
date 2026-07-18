import NextAuth from "next-auth";

export const experience = [
  {
    id: 1,
    type: "senior",
    role: "Senior Software Developer",
    company: "DAT Group",
    companySize: "501-1.000 angajați",
    industry: "Software Auto",
    locationType: "Remote / Hibrid",
    websiteUrl: "https://www.dat.eu",
    period: "Sep 2020 - Mar 2026",
    summary: `Dezvoltator Full-Stack Senior în cadrul echipei "Costing Applications" din spatele SilverDAT 3 "calculate", standardul recunoscut de asigurători pentru calcularea costurilor de reparație auto. Sistemul este folosit la nivelul întregii industrii de către service-uri, dealeri auto, experți evaluatori, asigurători, bănci și producători pentru peste 70.000 de variante de vehicule.`,
    description: `*   Mentenanța, extinderea și testarea serviciilor moștenite în Java EE (monorepo SOA/SOAP cu front-end-uri JavaScript/React). Adaptarea instrumentelor SoapUI și a suitelor de testare manuală la evoluția serviciilor, alături de adăugarea acoperirii TestNG/Mockito pentru modificările noi.
*   Proiectarea arhitecturală și dezvoltarea end-to-end a noilor servicii Spring Boot destinate înlocuirii vechii aplicații Java EE — utilizând o arhitectură curată N-Tier, o mapare strictă DTO, gestionarea centralizată a erorilor și un sistem de tracing distribuit bazat pe MDC. Implementarea de API-uri REST "contract-first", conforme cu HATEOAS (OpenAPI), securizate prin teste de integrare JUnit 5/MockMvc și colecții Postman automatizate.
*   Gestionarea stratului de date prin JPA/Hibernate: înlocuirea vechilor baze de date SQL (în principal Oracle SQL) cu PostgreSQL și introducerea MongoDB ca prima soluție NoSQL într-o stivă tehnologică bazată anterior exclusiv pe SQL.
*   Reconstruirea front-end-urilor vechi din JavaScript în componente moderne și responsive folosind React/TypeScript. Optimizarea arhitecturii prin utilizarea Effector (gestionarea stării) și PrimeReact.
*   CI/CD: Compilarea (build) platformei vechi cu Gradle pe Jenkins și implementarea (deployment) în mediile de testare și producție; noile servicii fiind livrate prin Gradle Wrapper. Implementarea în Azure Kubernetes (AKS) prin conducte (pipelines) de build și release, folosind chart-uri Helm și NGINX Ingress. Utilizarea Docker Compose pentru dezvoltarea locală. Migrarea controlului versiunilor (source control) de la GitLab la Azure Repos. Serviciile vechi urmează un ciclu de 6 lansări pe an printr-un panou Kanban în Jira, în timp ce noile servicii au trecut la un regim de livrare continuă (Continuous Delivery).
*   Modernizarea procesului părinte de build Spring Boot moștenit (folosind OpenRewrite pentru actualizări automate de versiuni peste limita BOM, și Renovate Bot pe Azure pentru actualizările dependențelor) și migrarea configurării tradiționale din fișiere proprietăți către profilurile Spring.
*   Implementarea unui flux de lucru asistat de IA prin IntelliJ IDEA (CodeGPT pe un LLM local Azure), Cursor și Windsurf pentru documentarea și analizarea codului vechi, extragerea cerințelor și dezvoltarea de servicii noi care îndeplinesc în proporție de 100% criteriile (Quality Gates) SonarQube.
*   Ghidarea direcției tehnice prin prototiparea și evaluarea unor abordări îmbunătățite — verificate direct în cod și prezentate în cadrul workshop-urilor de echipă (de ex. design REST/API-first, utilizarea React modern și Next.js, OpenRewrite, Dependabot și o evaluare Spring Cloud Gateway ca înlocuitor pentru gateway-ul personalizat al DAT).`,
    tech: [
      { category: "Backend", skills: ["Java 17+", "Jakarta EE", "Spring Boot 3+", "Spring Cloud", "API REST", "OpenAPI", "Microservicii", "SOA / SOAP", "WSDL"] },
      { category: "Frontend", skills: ["JavaScript", "HTML", "CSS", "React", "TypeScript", "Effector", "PrimeReact"] },
      { category: "Baze de date", skills: ["PostgreSQL", "Oracle", "MongoDB", "H2", "JPA", "Hibernate", "JDBC"] },
      { category: "Testare", skills: ["TestNG", "Mockito", "JUnit 5", "MockMvc", "Testcontainers"] },
      { category: "CI/CD & DevOps", skills: ["Jenkins", "GitLab CI/CD", "Gradle", "Node.js", "npm", "Docker", "Azure", "Kubernetes (AKS)", "Helm", "NGINX Ingress", "OpenRewrite", "Renovate", "Dependabot"] },
      { category: "Instrumente", skills: ["IntelliJ IDEA", "Postman", "SoapUI", "SQL Developer", "Cursor", "Windsurf", "Azure OpenAI"] },
      { category: "Metodologie", skills: ["Agile", "Kanban", "Jira"] },
    ],
  },
  {
    id: 2,
    type: "mid",
    role: "Software Developer",
    company: "evia solutions GmbH",
    companySize: "51-200 angajați",
    industry: "Servicii IT și Consultanță",
    locationType: "La fața locului",
    websiteUrl: "https://www.evia.de",
    period: "Feb 2016 - Aug 2020",
    summary: `Dezvoltator și consultant în cadrul unei companii de soluții IT adresate diverselor industrii, livrând software personalizat și standard pentru sectoarele bancar, de asigurări și mediile Microsoft Enterprise. Am lucrat în echipe interfuncționale Agile Scrum și SAFe — acoperind totul, de la mentenanța aplicațiilor clasice Java EE până la dezvoltarea de la zero a unor arhitecturi microservicii (Greenfield).`,
    description: `*   Mentenanța, extinderea, livrarea și testarea portalurilor pentru brokerii de asigurări destinate Wüstenrot & Württembergische — aplicații critice Java EE 8 (JSF/Spring/Hibernate, JSP) rulând pe IBM WebSphere 7 și 8.5 cu IBM DB2 și LDAP/Active Directory. Acestea au format fundația financiară solidă ce a sprijinit creșterea companiei de la ~16 la peste 200 de angajați. Securizarea sistemelor s-a realizat prin teste de penetrare conforme cu standardele OWASP. S-au utilizat Rational Application Developer 9.1 și iText pentru generarea documentelor și a fișierelor PDF (alături de Apache Directory Studio, Postman, Eclipse, SVN, Cherwell).
*   Implicare majoră în fondarea noului departament "Microsoft Delivery" în calitate de dezvoltator principal. Crearea unei soluții de integrare (onboarding) pentru angajați în SharePoint Online (generare digitală a contractelor, parcurs de onboarding, gestionarea sarcinilor) și automatizarea proceselor de afaceri folosind Microsoft Flow și Logic Apps (Office 365, JSON).
*   Obținerea certificării "Pega Certified System Architect (CSA)" axată pe dezvoltarea BPM și a certificării "Microsoft 70-480" (HTML5, JavaScript & CSS3, incluzând jQuery și AJAX).
*   Dezvoltarea platformei "Digital Sales Solutions" (DSS) pentru Daimler — o aplicație bancară dezvoltată de la zero, care a digitalizat procesul solicitărilor de credite auto în mai multe țări. Implementarea de microservicii moderne în Micronaut / JEE 11 (Oracle SQL, PostgreSQL 12, Docker) în spatele unui frontend Angular, însoțite de servicii de integrare REST/SOAP (OpenAPI) pentru transferul de date B2B.
*   Responsabil de testarea la nivel de dezvoltator, Asigurarea Calității (JUnit, SonarQube) și conductele (pipelines) CI/CD destinate mediilor de testare și integrare (Git, Jenkins). Am oferit suport echipei de testare pentru suitele de teste end-to-end automatizate (Protractor, Cucumber) lucrând în regim Agile (inițial Scrum, ulterior SAFe), în strânsă colaborare cu departamentele Frontend, QA și DevOps (Jira, Confluence, MS Teams).`,
    tech: [
      { category: "Backend", skills: ["Java EE (JEE 8 / 11)", "Micronaut", "Spring", "Hibernate", "JSF", "JSP", "iText", "REST", "SOAP", "OpenAPI"] },
      { category: "Frontend", skills: ["Angular", "HTML5", "CSS3", "JavaScript", "jQuery", "AJAX"] },
      { category: "Baze de date", skills: ["Oracle SQL", "PostgreSQL", "IBM DB2", "LDAP / Active Directory"] },
      { category: "CI/CD & DevOps", skills: ["Git", "SVN", "Jenkins", "Maven", "Docker", "IBM WebSphere (7 / 8.5)"] },
      { category: "Testare și Calitate", skills: ["JUnit", "SonarQube", "Protractor", "Cucumber", "OWASP / Penetration Testing"] },
      { category: "Instrumente", skills: ["IntelliJ IDEA", "Eclipse", "Rational Application Developer", "SharePoint", "Microsoft Flow", "Logic Apps", "Office 365", "Apache Directory Studio", "Postman", "Jira", "Confluence", "Cherwell", "MS Teams"] },
      { category: "Metodologie", skills: ["Scrum", "SAFe", "BPM"] },
      { category: "Certificări", skills: ["Pega CSA", "Microsoft 70-480"] },
    ],
  },
  {
    id: 3,
    type: "junior",
    role: "Junior Software Developer",
    company: "PRODYNA AG",
    companySize: "201-500 angajați",
    industry: "Consultanță IT",
    locationType: "La fața locului / Deplasări",
    websiteUrl: "https://www.prodyna.com",
    period: "Nov 2014 - Ian 2016",
    summary: `Dezvoltator și consultant în cadrul unei companii de consultanță IT, repartizat la sediul unui client Enterprise pentru a livra de la A la Z un proiect de portal web — acoperind etapele de consultanță, design, implementare și testare.`,
    description: `*   Dezvoltarea și lansarea unei soluții de portal pe Liferay 6.0 cu un backend Java 6 EE și MySQL, împreună cu un frontend ce integrează JSP, HTML, CSS, JavaScript și AlloyUI.
*   Livrarea și testarea aplicațiilor pe Apache Tomcat, direcționând procesele CI/CD cu Jenkins și Maven și integrând SonarQube în procesul de compilare pentru a asigura standardele de calitate a codului.
*   Lucrul constant în echipe Agile Scrum (Jira, Confluence) și obținerea în această perioadă a certificărilor "Oracle Certified Professional Java Programmer (OCPJP)" și "Oracle Certified Expert Java EE 6 Web Component Developer (OCE WCD)".`,
    tech: [
      { category: "Backend", skills: ["Java 6 EE", "Liferay 6.0", "JSP"] },
      { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "AlloyUI"] },
      { category: "Baze de date", skills: ["MySQL"] },
      { category: "CI/CD & DevOps", skills: ["Apache Tomcat", "Jenkins", "Maven"] },
      { category: "Testare și Calitate", skills: ["SonarQube"] },
      { category: "Instrumente", skills: ["Jira", "Confluence"] },
      { category: "Metodologie", skills: ["Scrum"] },
      { category: "Certificări", skills: ["OCPJP", "OCE WCD"] },
    ],
  },
  {
    id: 4,
    type: "intern",
    role: "Stagiu în Dezvoltare Software",
    company: "Alpine Electronics R&D Europe",
    companySize: "1.000+ angajați",
    industry: "Electronică Auto",
    locationType: "La fața locului",
    websiteUrl: "https://www.alpine.de/",
    dualStudy: "ADV Böblingen",
    period: "Sep 2012 - Aug 2013",
    summary: `Stagiar în Integrarea Sistemelor (Car Infotainment / OEM) pentru dezvoltarea modulelor software destinate framework-ului intern „Alpine Test Automation Framework”.`,
    description: `*   Dezvoltarea și extinderea sistemului intern Alpine Test Automation Framework (C#, .NET 4.0) construind module de testare automată pentru interfețe hardware, cum ar fi Bluetooth, generatoare de semnal RDS, magistrale MOST/CAN, camere climatice și roboți pentru schimbarea CD/DVD-urilor.
*   Proiectarea și implementarea „Alpine Voltage Curve Editor” — lucrare notată cu punctaj maxim (1.0) ca teză de absolvire — și modernizarea interfețelor utilizator pentru mai multe module de test existente, folosind WPF și modelul MVVM.
*   Asigurarea robusteții arhitecturale pe întregul framework de testare prin aplicarea modelării UML și a șabloanelor de design "Gang of Four" (Singleton, Composite, Factory Method, Memento) în SharpDevelop.`,
    tech: [
      { category: "Backend", skills: ["C#", ".NET 4.0", "UML", "Design Patterns", "SharpDevelop", "StyleCop"] },
      { category: "Frontend & Mobile", skills: ["WPF", "MVVM", "Android SDK"] },
      { category: "Hardware & Protocoale", skills: ["Bluetooth", "CAN", "MOST", "RDS"] },
    ],
  },
];

export const education = [
  {
    id: 1,
    type: "dual-study",
    studyField: "Sistem Dual",
    degree: "Informatician Certificat de Stat (Staatlich geprüfter Informatiker)",
    school: "Gottlieb-Daimler-Schule 2 - Akademie für Datenverarbeitung (ADV)",
    url: "https://gds2.de",
    location: "Böblingen, Germania",
    year: "2011 - 2014",
    summary: "Program intensiv de studiu dual axat pe Inginerie Software, Baze de Date și Management de Proiect.",
    description: "Pregătire profesională de 3 ani (Berufskolleg). A inclus un an de stagiu practic la Alpine Electronics R&D Europe GmbH, unde am elaborat teza finală: „Alpine Voltage Curve Editor” (Nota: Excelent / 1.0).",
    grade: "Promovat cu distincție (Belobigung)",
  },
  {
    id: 2,
    type: "master",
    studyField: "Master",
    degree: "Master",
    school: "Universitatea de Vest din Timișoara",
    url: "https://info.uvt.ro/en/",
    location: "Timișoara, România",
    year: "2009 - 2011",
    summary: "Pregătire specializată în Pedagogia și Didactica matematicii.",
    description: "Program academic avansat centrat pe modele matematice complexe și pe metodologii educaționale. Primul an de master a fost efectuat în străinătate, la Universitatea din Stuttgart, prin programul Erasmus. Obiectele principale de studiu au inclus: Analiză Vectorială, Algebră Superioară și Geometrie, Metode Iterative, Metode Statistice și Probabilistice și Software pentru Managementul Educațional.",
    grade: "7.70 / 10 (Anul 1) & 7.66 / 10 (Anul 2)",
  },
  {
    id: 3,
    type: "bachelor",
    studyField: "Licență",
    degree: "Diplomă de Licență",
    school: "Universitatea de Vest din Timișoara",
    url: "https://info.uvt.ro/en/",
    location: "Timișoara, România",
    year: "2006 - 2009",
    summary: "Specializare dublă care oferă fundamente solide atât în matematică abstractă, cât și în informatică aplicată.",
    description: "Curriculum dual ce îmbină rigoarea matematicii teoretice cu abordările practice din informatică și ingineria software. Subiectele de bază au inclus: Structuri de Date, Inteligență Artificială, Sisteme de Baze de Date, Rețele de Calculatoare, Geometrie Computațională, Programare Logică și Funcțională și Modelare/Simulare Matematică.",
    grade: "10 / 10 (Examen final de licență) | 9.02 / 10 (Media generală)",
  },
  {
    id: 4,
    type: "high-school",
    studyField: "Liceu",
    degree: "Diplomă de Bacalaureat",
    school: "Colegiul Național de Informatică „Spiru Haret” Suceava",
    url: "https://www.cni-sv.ro/",
    location: "Suceava, România",
    year: "2002 - 2006",
    summary: "Program intensiv pe profil de Informatică și Matematică.",
    description: "Profil urmat: Matematică și Informatică (Intensiv).",
    grade: "9.81 / 10",
  },
];

export const projects = [
  {
    id: 1,
    title: "Platforma Microservicii Filmpire",
    description:
      "O platformă Enterprise complexă bazată pe microservicii dedicată descoperirii de filme, administrată cap-coadă, de la idee până la produsul final, folosind sistemul Kanban din GitHub Projects (Epics, Stories, Tasks). Platforma reunește opt servicii independente dezvoltate în Java 25 / Spring Boot 3.5, ce includ integrarea Spring Cloud (Eureka, API Gateway). Arhitectura utilizează o bază de date hibridă PostgreSQL/MongoDB alături de caching Redis, implementând un fallback către API-ul TMDB. Proiectul integrează capabilitățile Spring AI (Whisper/GPT-4) comunicând via REST și gRPC. Construită având la bază cele mai noi și stricte standarde din domeniu (DTO Records, injectare de dependențe în constructor, virtual threads), calitatea platformei este susținută de testări riguroase (JUnit 5, Testcontainers, acoperire JaCoCo 85%) ce rulează automatizat prin conducte CI/CD GitHub Actions. Livrarea și implementarea au loc pe Kubernetes utilizând mediul Minikube.",
    tech: ["Java 25", "Spring Boot 3.5", "Spring Cloud", "PostgreSQL", "MongoDB", "Redis", "Spring AI", "gRPC", "REST", "JUnit 5", "Testcontainers", "JaCoCo", "GitHub Actions", "Docker", "Podman", "Kubernetes"],
    githubUrl: "https://github.com/pehlivanu/filmpire-microservices",
    deployUrl: "",
  },
  {
    id: 2,
    title: "Defense Asset Manager",
    description:
      "Aplicație Enterprise React 19 destinată gestiunii activelor și a resurselor umane pentru sectorul de apărare. Abordează o arhitectură strictă (Domain-Driven Design) concepută pentru a susține o implementare simultană de către mai multe echipe conform normelor SAFe. Complet tipizată static, dezvoltată „contract-first” pe baza OpenAPI 3.1 și integrată pe mediul Vite pentru viteze instanțelor HMR (Hot Module Replacement). Aplicația alege utilitarul Zustand alături de Immer pentru stări inalterabile (immutable), un Mock Service Worker ce oferă simulări offline fluente ale API-urilor REST și se construiește solid folosind setul Material UI v9 incluzând proceduri specifice mediilor critice cu impact de securitate (confirmări duble pentru decizii cu caracter destructiv).",
    tech: ["React 19", "Vite", "Zustand", "Material UI v9", "MSW", "OpenAPI 3.1", "TypeScript", "Vitest"],
    githubUrl: "https://github.com/pehlivanu/defense-asset-manager",
    deployUrl: "",
  },
  {
    id: 3,
    title: "Portofoliu Antigravity IDE",
    description:
      "Portofoliu de dezvoltator complet interactiv care aduce nativ pe un site web experiența unui editor tip IDE, reconstituind cu detalii meticuloase interfața estetică regăsită sub editorul Google Antigravity IDE — deținând o bară funcțională pentru activități, explorator nativ complet, editor interactiv pe ferestre, bară inferioară dinamică de stare și o paletă activă de comenzi pe ecran. Este clădit complet folosind ecosistemul Next.js 15 (App Router) având multiple straturi imersive de micro-animații gestionate curat cu Framer Motion. Automatizează procesul generării PDF a propriului CV din varii tipare ori variante lingvistice specifice și înglobează și un modul complex de formulare dinamice al cărui efect unic calculează și afișează automat fix distanța de pe hartă direct via unui API Geolocation între server și un potențial recruiter.",
    tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Geolocation API", "Generare PDF", "Framer Motion"],
    githubUrl: "https://github.com/pehlivanu/portfolio-site",
    deployUrl: "https://www.liviuionesi.com",
  },
  {
    id: 4,
    title: "Frontend Filmpire",
    description:
      "Aplicație front-end complexă, modernă și fluentă dedicată indexării filmelor populare, exclusiv dezvoltată în mediul React 17 pe fundația unui control gestionat prin Redux Toolkit. Creată intenționat sub vizorul de aplicație web dedicată ce lucrează ca sistem complet frontend apelând funcționalitățile extinse venite sub capota infrastructurii backend formată din ecosistemul celor 8 microservicii ale proiectului Filmpire. Aceasta interoghează rapid capabilitățile TMDB API creând indexări fluide pe multiple categorii specifice listând totul într-un portofoliu organizat din panoul favoritelor și implementează la mod unic integrarea avansată din librăriile (SDK) speciale ce formează sistemul IA renumit nativ — Alan AI —, adăugând un nivel de comandă complet conversațională directă folosind limbaj rostit. Codul respectă fără abateri normele impuse în standardul larg al pachetelor de verificare ESLint ale rețelei Airbnb și un ciclu absolut verificat de testare masivă din alianța integrată stabil Jest cu React Testing Library.",
    tech: ["React 17", "Material-UI", "Redux Toolkit", "Alan AI"],
    githubUrl: "https://github.com/pehlivanu/filmpire",
    deployUrl: "https://filmpire-ten.vercel.app/",
  },
/*
  {
    id: 5,
    title: "Platformă Bază de Cunoștințe",
    description:
      "Un sistem de documentare tip „enterprise”, creat cu funcții complete de internaționalizare pe fundația noii generații de pachete Next.js 16 cu ajutorul Componentelor Servere din React 19 pentru o gestionare ultra rapidă din interior ce micșorează uriaș latura adesea limitată venită pe banda de navigare a clientului. Platforma redă instant conținutul fix procesat via unui mecanism intern de randare (SSG), preluând un volum generos de fișiere statice din structura standard nativ numită Markdown (.md) într-o enciclopedie pe ecran detaliată tip (Wiki). Sistemul integrează complet capabilitățile de limbi multiple sub pachetul next-intl trecute direct doar pe frontiera apelor rețelelor numită middleware edge, păstrând la interior doar resursele cu acces de companie printr-un proces automat avansat ce permite deschiderea limitat a paginilor din același middleware cu verificare exclusiv adusă validităților modulelor fixe ascunse la vizualizare clasică cunoscute (HttpOnly cookies).",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "next-intl", "Markdown"],
    githubUrl: "https://github.com/pehlivanu/knowledge-base-platform",
    deployUrl: "https://phenix-wiki.vercel.app",
  },
*/
  {
    id: 6,
    title: "Infrastructură DevOps (Toolchain Showcase)",
    description:
      "O rețea independentă dedicată CI/CD orchestrată impecabil dintr-un ecosistem stabil de mașinării de containere tip containerizare sub comanda platformei izolate regăsite cu instrumentele tip Podman Compose ce oferă la vedere o integrare completă bazată specific în stil Enterprise a celor mai noi proceduri cunoscute ca rutină globală din zona DevOps. Utilizează intern un utilaj pe format Docker avansat unde mediul masiv creat din pachetele Jenkins adoptă conceptul tip (DooD / Docker-outside-of-Docker) capabil singur din script la compilări ample ce crează complet noi fișiere imagini aplicative dirijate etapizat curat prin configurările scripturilor unui lanț mare Jenkinsfile multi-etapă. Obține la final automatizare complet globală de unde trimite imediat pe fond fișiere de rapoarte la evaluările testate cu instrument unitar central JaCoCo către exterior până sus fix prin punctele de contact adresate unui server de rețea JFrog Artifactory lansând apoi spre ALM/MQC setări clare rezultate la toate evaluările de sistem pe apeluri automate în spate doar folosind capabilitățile externe direct peste rețete clasice terminal prin rute integrate la Bash (curl) transformând nativ formatele primite la proces tip Json bazându-se nativ cu jq.",
    tech: ["Jenkins", "JFrog Artifactory", "Podman", "Gradle", "Java 17"],
    githubUrl: "https://github.com/pehlivanu/devops-toolchain-showcase",
    deployUrl: "",
  },
  {
    id: 7,
    title: "DevFlow - Platformă Q&A Full-Stack",
    description:
      "Platformă online Q&A extrem de complexă adresată în mediul dezvoltatorilor unde structura și modul de funcționare complet sunt native orientate bazat doar prin funcționalitățile rețelei aduse de performantul Next.js 14 App Router care reușește curat prin comanda noilor facilități a Server Actions implementarea independentă și renunțarea absolut directă la nevoia clasic obținută din API backend izolat. Acesta înglobează intern absolut tot ce e nevoie, cu rutine eficiente tip etichetare și funcție majoră adresată de motoare super vizuale de căutare fix pe toate zonele interioare incluzând profile de membri, subiecte deschise cu tot la nivel de răspuns ce apoi adună și generează clar direcții unice de sugestii ce pleacă personalizate exclusiv pe vizitatorul logat. Stimulează masiv curiozitatea membrilor activând un algoritm pe stil recompense vizuale și ecusoane adăugate gradual sub profil din sistem de gamificare. Acreditările la porțile de intrare apelează integrat renumitul utilitar NextAuth.js unde accesul curge nativ din zona OAuth către celebrele platforme Github ori Google complet cu posibilitatea standard a formularelor simple din protecție riguros încadrată prin pachet utilitar unic Zod. Opțiunea esențial inteligentă integrează suplimentar capabilitățile puternicului sistem AI adus prin conexiune OpenAI API ajutând pe site din afara interacțiunii umane aducând din interior soluții vaste cu porțiuni aduse la nivel pur generare din exemple funcționale tip cod.",
    tech: ["Next.js 14", "TypeScript 5", "MongoDB Atlas", "Tailwind CSS", "OpenAI API", "NextAuth", "Zod"],
    githubUrl: "https://github.com/pehlivanu/devflow",
    deployUrl: "https://devflow-chi-roan.vercel.app/",
  },
  {
    id: 8,
    title: "Platformă Automatizare GUI Python",
    description:
      "Aplicație de tip desktop complet versatilă, solid dezvoltată în limbajul Python având dincolo de pachet nativ direct inclus sub fereastră un cadru standardizat pentru mediu utilaj vizual cunoscut prin prezența instrumentului clar de fereastră creat cu Tkinter construită complet la baza sa doar ca unelte capabile fără limitare spre automatizarea fluidă ce rulează neobservat cap-coadă capabilă control direcțional a aplicațiilor din ecosistem pe mobil platforma de sistem Android. Baza unică și secretul esențial o oferă de fapt excluderea din interior a rutinei fixe impuse standard prin intermediul interfeței API din sistem folosind la rezolvare procedurile unice pe proces din preluare cu clase unice din bibliotecile vizuale (OpenCV template matching) vizualizând nativ absolut oriunde interacțiunea ce primește ca țintă setate din clase și care interacționează dirijat perfect la rezolvare direct folosind magistrale ascunse prin comunicație de la depanatorul recunoscut tip (Android Debug Bridge - ADB). Elementul major la algoritm adaugă perfect o iluzie naturală cu profil din interacțiune unică umană integrat intern adus exclusiv peste ecranul terminal având varianțe cu grade scurte din timpi la deviație de axă punctelor și de acțiune cu durata imprevizibilă, eliminând pe loc acea detecție standardizată euristicii venită de roboți tip (bots). Proiectul livrează produs complet vizual sub afișare GUI dar în egală măsură și nativ prin module de tip ecran nevăzut direct pe platforme Unix direct ascunse (Linux Daemon headless mode).",
    tech: ["Python 3.10", "OpenCV", "Tkinter", "ADB", "Bash"],
    githubUrl: "https://github.com/pehlivanu/gui-automation-framework",
    deployUrl: "",
  },
/*
  {
    id: 11,
    title: "Alana Windsurf",
    description:
      "Aplicație modernă dezvoltată scalabil tip Full-Stack creată pentru randament folosind integrat mediul din capabilitățile masive Next.js 13+ sub App Router susținut complet pe motorul asigurat din capabilitățile unice React 18+. Deține un profil integrant securizat și sigur direct acoperit masiv prin conectarea și autentificarea complet administrată la pachet oferit pe NextAuth.js oferind opțiuni deschise către OAuth (Google sau GitHub) asociat sistemului tradițional de acces fix sub credențiale cu parolă — informația în bazele de date stocându-se eficient la baza server MongoDB utilizând în modul tipic integrarea simplificată cu utilajul Mongoose. Toate mișcările de status se execută fix pe logica unică React Context adunate cu tehnici avansate specifice rutinei la comandă (useReducer). Procesele din capăt orientate fix către introduceri direct (formulare) aduc complet o experiență perfect asumat stabil din funcționalități solide aduse la vedere prin asistența bibliotecilor solide validate strict cu React Hook Form asociat pachetului Zod, toate redate la vedere din utilaj performant cu opțiuni standard unice vizuale sub Material UI acoperit extra de efect utilitar tip Emotion.",
    tech: ["Next.js 13+", "React 18+", "Material UI", "NextAuth.js", "MongoDB", "Zod"],
    githubUrl: "https://github.com/pehlivanu/alana-windsurf",
    deployUrl: "",
  },
  {
    id: 12,
    title: "E-Commerce Payload Platform",
    description:
      "Aplicație software dezvoltată ca variantă completă nativ Enterprise la capabilități masive dedicată comerțului tipic digital. Proiectul implementează avansat capacitățile din popularul cadru al mediului sistem inovator (Payload CMS) pe care le suprapune direct de fronturi stabilite nativ dezvoltate în interiorul instrumentarului (Next.js) folosind funcții specifice direct din funcționalități de compilări fixe vizual. Platforma reprezintă practic la final o afacere în cutie cu capabilități aduse curat în format gata administrativ pe fond dedicat strict pentru setări globale din partea sistemului stabil ce poate oferi pe piață nativ ambele soluții din tranzacții tip — din rândul mărfurilor ca tangibile dar acompaniat extrem complet sub același plafon exclusiv pentru pachetele informaționale condiționate la opțiune cu barieră tarifară (Paywall). Proiectul obține protecție integrantă masivă din opțiuni aduse direct la exterior via comenzi tip webhooks venite din partea faimoasei aplicații rețele globale de siguranță și procesări financiare exclusiv cunoscute pe denumire popular (Stripe).",
    tech: ["Next.js", "Payload CMS", "Stripe", "React Hook Form"],
    githubUrl: "https://github.com/pehlivanu/e-commerce",
    deployUrl: "",
  },
*/
];

export const linkedInProfile = {
  name: "Liviu Ionesi",
  headline: "Tech Lead | Senior Full-Stack Engineer | Java, Spring Boot, React, Next.js",
  location: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck, Germania",
  phone: "+49 1514 6966 832",
  address: "Freiwaldaustr. 39, 73230 Kirchheim unter Teck",
  email: "ionesiliviu@yahoo.com",
  connections: "500+",
  about: "Technical Lead și Senior Full-Stack Engineer. Construiesc coloana vertebrală digitală a industriilor auto și fintech. Cu peste 13 ani de experiență în dezvoltarea de sisteme distribuite de înaltă performanță, mă concentrez pe leadership tehnic, modernizarea arhitecturilor moștenite și livrarea de soluții scalabile cloud-native.",
  fullBio: `### **Technical Lead & Senior Full-Stack Engineer | Specialist Automotive & FinTech**

Cu peste 13 ani de experiență în ingineria sistemelor distribuite de înaltă performanță, sunt specializat în leadership tehnic, modernizarea arhitecturilor software moștenite și livrarea de soluții scalabile, cloud-native. Cariera mea s-a extins de la dezvoltarea de cadre critice de automatizare la **Alpine Electronics** până la coordonarea transformării digitale a platformelor de date enterprise din cadrul **DAT Group**. Sunt pasionat de mentoratul și ghidarea echipelor interfuncționale în construirea de software robust, utilizând stive tehnologice moderne.

Reprezint o punte între logica backend complexă, interfețele frontend intuitive și obiectivele strategice de afaceri. Competențele mele principale includ:

  * **Leadership Tehnic & Arhitectură**: Ofer direcție în designul sistemelor și conduc procesul de migrare al aplicațiilor monolitice **Java EE** către o arhitectură pe **Microservicii** complet scalabilă (Spring Boot, Azure) alături de interfețe moderne (React/Next.js), crescând masiv reziliența sistemelor.
  * **Excelență în Inginerie Full-Stack**: Proiectez și dezvolt interfețe receptive centrate pe utilizator utilizând **React, Next.js și TypeScript**, complet integrate cu API-uri sigure și robuste construite pe **Java 21 / Spring Boot**.
  * **Cultura DevOps și Asigurarea Calității**: Susțin principiile **TDD** (Test-Driven Development) și standardele **Clean Code**, și implementez sisteme de automatizare CI/CD (Azure, GitHub Actions) pentru a asigura livrări software predictibile și de cea mai înaltă calitate. Ghidez echipele de dezvoltare pentru a crește continuu performanțele și standardele tehnice.
  * **Dezvoltare Asistată de Inteligență Artificială (AI-Augmented Engineering)**: Pionez o abordare de livrare software accelerată integrând cu mare succes rigoarea metodelor specifice mediului corporatist (Epics, Agile/Scrum, CI/CD) cu sisteme super moderne de dezvoltare asistate de IA (Cursor, Windsurf). Această îmbinare grăbește vizibil crearea masivă de proiecte de la zero (greenfield projects) minimizând masiv complexitatea la refactorizările blocate impuse proiectelor moștenite imense scăzând masiv la un termen considerabil ceea ce cunoscătorii evită prin prisma tehnologiei masive ca „datorie tehnică” (technical debt).

---
*În prezent caut un rol de Technical Lead axat pe ecosistemul Spring Boot și React. Sunt deschis la roluri în format Hibrid în regiunea Stuttgart, precum și către roluri cu program 100% de la distanță (Remote) din Germania.*`,
  avatarUrl: "/images/linkedin-profile.png",
  skills: ["Java", "Spring Boot", "Spring Cloud", "React", "Next.js", "Azure", "Docker", "Kubernetes", "SQL/NoSQL", "IntelliJ IDEA", "Instrumente AI (Cursor, Windsurf, Antigravity, MCP)"],
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
    { language: "Română", proficiency: "Limba Maternă" },
    { language: "Franceză", proficiency: "Cunoștințe de Bază" }
  ]
};

export const about = {
  greeting: "~/developer/portfolio",
  name: "Liviu",
  suffix: ".io",
  lastName: "NESI",
  description: "Technical Lead și Senior Full-Stack Engineer. Construiesc coloana vertebrală digitală a industriilor auto și fintech. Mă concentrez pe microservicii Spring Boot, front-end-uri React și pe accelerarea livrărilor de software enterprise printr-un flux de lucru asistat de IA.",
  fullBio: linkedInProfile.fullBio,
  ctaPrimary: "Proiecte, nu doar Cod",
  ctaSecondary: "Contact"
};

import { servicesList } from "./services-data";
import { companyData } from "./company-info";

export const contentRo = {
  lang: "ro",
  siteTitle: "VENTORO S.R.L. – BE THE BEST | Servicii Industriale & Consultanță IT",
  siteDescription: "VENTORO S.R.L. oferă soluții integrate de consultanță IT, echipamente industriale, petrol și gaze, energie, construcții, logistică și comerț internațional.",
  company: companyData,
  nav: {
    home: "ACASĂ",
    about: "DESPRE NOI",
    services: "SERVICII",
    projects: "PROIECTE",
    collaboration: "COLABORARE",
    contact: "CONTACT",
    terms: "TERMENI ȘI CONDIȚII",
    privacy: "POLITICĂ DE CONFIDENȚIALITATE",
    searchPlaceholder: "Caută în site (ex. IT, energie, pompe, piatră)...",
    searchTitle: "Căutare rapidă",
    searchResults: "Rezultate căutare",
    noResults: "Nu au fost găsite rezultate pentru termenul căutat.",
    allServicesLink: "Vezi toate cele 12 sectoare de activitate",
  },
  topBar: {
    phone: companyData.phoneRo,
    email: companyData.email,
    hours: "Luni – Vineri 10 – 18",
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      pinterest: "https://pinterest.com",
      instagram: "https://instagram.com"
    }
  },
  hero: {
    slides: [
      {
        badge: "VENTORO S.R.L. • BE THE BEST",
        title: "Partenerul Tău Strategic în Consultanță IT și Tehnologii Avansate",
        description: "Oferim excelență în gestiunea sistemelor de calcul, transformare digitală enterprise și soluții tehnologice de înaltă performanță.",
        btnPrimary: "Explorează Serviciile",
        btnPrimaryHref: "/ro/servicii",
        btnSecondary: "Contactează-ne",
        btnSecondaryHref: "/ro/contact",
        image: "/images/hero-industrial.jpg"
      },
      {
        badge: "INGINERIE & INDUSTRIE ENERGETICĂ",
        title: "Echipamente Industriale și Soluții Tehnologice la Standarde Globale",
        description: "Furnizare de motoare electrice de înaltă tensiune, generatoare, pompe industriale și sisteme automatizate de control SCADA.",
        btnPrimary: "Industria Energetică",
        btnPrimaryHref: "/ro/servicii/industria-energetica",
        btnSecondary: "Proiecte Recente",
        btnSecondaryHref: "/ro/proiecte",
        image: "/images/hero-energy.jpg"
      },
      {
        badge: "COMERȚ INTERNAȚIONAL & LOGISTICĂ",
        title: "Conectăm Piețele Internaționale cu Profesionalism și Punctualitate",
        description: "Gestionăm lanțuri de aprovizionare globale, transport multimodal agabaritic și distribuție de mărfuri industriale și energetice.",
        btnPrimary: "Servicii Logistice",
        btnPrimaryHref: "/ro/servicii/servicii-logistice",
        btnSecondary: "Colaborare B2B",
        btnSecondaryHref: "/ro/colaborare",
        image: "/images/hero-management.jpg"
      }
    ]
  },
  stats: [
    { value: "12+", label: "Domenii și Sectoare Industriale" },
    { value: "180+", label: "Proiecte și Contracte Finalizate" },
    { value: "99.8%", label: "Rată de Satisfacție Clienți" },
    { value: "24/7", label: "Consultanță și Suport Tehnic" }
  ],
  servicesSection: {
    badge: "EXCELENȚĂ OPERAȚIONALĂ",
    title: "Serviciile și Sectoarele Noastre de Activitate",
    subtitle: "Acoperim un spectru complet de servicii de inginerie, consultanță tehnologică, logistică și furnizare industrială pentru piața din România și Uniunea Europeană.",
    readMore: "Citește mai mult",
    viewAll: "Vezi Toate Serviciile"
  },
  aboutPreview: {
    badge: "DESPRE VENTORO S.R.L.",
    title: "Un Partener Sigur și Testat pentru Proiectele Tale de Succes",
    p1: "Veți găsi în VENTORO S.R.L. un partener de servicii de consultanță în tehnologia informației, achiziții strategice și inginerie industrială dovedit și testat, care s-a specializat în satisfacerea cerințelor complexe de pe piața modernă și care vă ajută să vă atingeți în mod eficient obiectivele.",
    p2: "Înființată și autorizată în România (CUI: 46012496, Reg. Com.: J2022007766400), compania noastră activează conform devizei 'BE THE BEST', punând pe primul loc calitatea fără compromisuri, transparența și parteneriatele de lungă durată.",
    btnText: "Află Mai Multe Despre Noi",
    btnHref: "/ro/despre-noi"
  },
  principles: {
    badge: "VALORI FUNDAMENTALE",
    title: "Principiile Noastre de Afaceri",
    items: [
      {
        number: "01",
        title: "Conformitate și Legalitate",
        desc: "Acționăm strict în conformitate cu legile, standardele europene și reglementările în vigoare din România și spațiul comunitar."
      },
      {
        number: "02",
        title: "Parteneriat Durabil",
        desc: "Suntem alături de partenerii și clienții noștri în toate etapele de lucru, de la consultanță inițială până la implementare și mentenanță."
      },
      {
        number: "03",
        title: "Onestitate și Respect",
        desc: "Acționăm cu integritate deplină, respect reciproc și transparență contractuală în fiecare relație de afaceri."
      },
      {
        number: "04",
        title: "Consultanță și Know-How",
        desc: "Furnizăm toate informațiile tehnice, asistența și sfaturile de specialitate necesare pentru luarea celor mai bune decizii strategice."
      },
      {
        number: "05",
        title: "Dezvoltare Continuă",
        desc: "Ne extindem și dezvoltăm continuu portofoliul de tehnologii și parteneriate pentru a oferi soluții de clasă mondială."
      }
    ]
  },
  ctaBanner: {
    title: "Vrei să-ți dezvolți afacerea cu soluții de top?",
    subtitle: "Contactează echipa VENTORO astăzi pentru consultanță dedicată și oferte personalizate!",
    buttonText: "Contactează-ne Astăzi",
    buttonHref: "/ro/contact"
  },
  aboutPage: {
    title: "Despre VENTORO S.R.L.",
    subtitle: "Lider în servicii de consultanță în tehnologia informației, inginerie industrială și soluții de comerț internațional.",
    overviewTitle: "Cine Suntem",
    overviewText: "VENTORO S.R.L. este o companie cu capital privat, înregistrată la Registrul Comerțului de pe lângă Tribunalul București. Misiunea noastră este de a asigura companiilor partenere acces facil la tehnologie de vârf, consultanță strategică de nivel enterprise și aprovizionare industrială impecabilă.",
    registrationTitle: "Date Oficiale de Înregistrare a Companiei",
    registrationText: "Compania noastră este legal constituită și înregistrată conform legislației din România:",
    fields: [
      { label: "Denumire Firmă", value: companyData.legalName },
      { label: "Slogan Oficial", value: companyData.taglineRo },
      { label: "Cod Unic de Înregistrare (CUI / CIF)", value: companyData.cui },
      { label: "Nr. de Ordine în Registrul Comerțului", value: companyData.regCom },
      { label: "Identificator Unic European (EUID)", value: companyData.euid },
      { label: "Data Înregistrării", value: "26.04.2022" },
      { label: "Director / Administrator", value: companyData.director },
      { label: "Activitate Principală (Cod CAEN)", value: "6220 - Activități de consultanță în tehnologia informației și de management (gestiune și exploatare) a mijloacelor de calcul" },
      { label: "Sediu Social", value: companyData.registeredOffice },
      { label: "Punct de Lucru / Sediu Operațional", value: companyData.operationalOffice }
    ],
    certificateNote: "Toate operațiunile noastre se desfășoară sub autorizarea Oficiului Național al Registrului Comerțului (Ministerul Justiției România)."
  },
  projectsPage: {
    title: "Proiecte și Realizări",
    subtitle: "O selecție a proiectelor de succes implementate de VENTORO S.R.L. în diverse domenii industriale și IT.",
    filterAll: "Toate Proiectele",
    projects: [
      {
        id: "1",
        title: "Modernizare Infrastructură IT Enterprise & Cloud Migration",
        category: "Consultanță IT",
        desc: "Audit de securitate, proiectare arhitectură cloud hibridă și exploatarea sistemelor de calcul pentru un mare grup comercial din București.",
        year: "2024 - 2025",
        location: "București, România",
        metric: "Uptime 99.99% & Reducere costuri 30%",
        image: "/images/project-uae.jpg"
      },
      {
        id: "2",
        title: "Furnizare Echipamente și Motoare HV pentru Stație Electrică",
        category: "Industria Energetică",
        desc: "Livrare și integrare motoare electrice de medie și înaltă tensiune, tablouri automatizate SCADA pentru un parc fotovoltaic și stație de transformare.",
        year: "2024",
        location: "Muntenia, România",
        metric: "Capacitate 45 MW instalată",
        image: "/images/project-energy.jpg"
      },
      {
        id: "3",
        title: "Reabilitare Stație de Pompare Hidroameliorații și Irigații",
        category: "Irigații & Agricultură",
        desc: "Înlocuire agregate de pompare de mare capacitate, instalare convertizoare de frecvență și telemetrie IoT pentru monitorizarea debitelor.",
        year: "2023 - 2024",
        location: "Regiunea Dunării, România",
        metric: "12,000 hectare irigate eficient",
        image: "/images/project-agriculture.jpg"
      },
      {
        id: "4",
        title: "Supape Speciale și Tubulatură de Înaltă Presiune ANSI 2500",
        category: "Petrol & Gaze",
        desc: "Aprovizionare de urgență cu robineți industriali criogenici și tevi din oțel duplex pentru o rafinărie de hidrocarburi.",
        year: "2023",
        location: "Ploiești, România",
        metric: "Zero scurgeri & Testare API 100%",
        image: "/images/project-paraffin.jpg"
      },
      {
        id: "5",
        title: "Transport Multimodal Agabaritic și Servicii Vamale",
        category: "Logistică",
        desc: "Transportul unei instalații de concasare minieră de 85 tone din Europa Centrală până în cariera beneficiarului din România.",
        year: "2024",
        location: "Tranzit Austria - România",
        metric: "Livrare în termen de 6 zile",
        image: "/images/project-cement.jpg"
      },
      {
        id: "6",
        title: "Integrare Covoare de Mătase și Marmură Fină în Hotel 5 Stele",
        category: "Artizanat & Design",
        desc: "Curație de covoare persane autentice țesute manual din mătase și placare cu onix translucid retroiluminat pentru zona de recepție.",
        year: "2024 - 2025",
        location: "București, România",
        metric: "Design Premiat & Autenticitate 100%",
        image: "/images/project-stone.jpg"
      }
    ]
  },
  collaborationPage: {
    title: "Oportunități de Colaborare și Parteneriat Strategic",
    subtitle: "Dezvoltăm alianțe comerciale durabile cu producători, contractori internaționali și investitori.",
    heroText: "VENTORO S.R.L. este deschisă către parteneriate strategice de tip joint-venture, consorții de licitații publice, reprezentanțe exclusive de echipamente tehnologice și distribuție internațională.",
    pillars: [
      {
        title: "Parteneriate pentru Producători și Furnizori",
        desc: "Oferim companiilor străine o poartă de acces sigură pe piața din România și Europa de Est prin forța noastră de vânzări, rețeaua logistică și conformitatea legală impecabilă."
      },
      {
        title: "Consorții de Licitații și Subantrepriză",
        desc: "Participăm alături de parteneri puternici în proiecte mari de infrastructură publică, stații de tratare a apei, proiecte energetice și modernizări IT guvernamentale."
      },
      {
        title: "Comerț Bilateral și Reprezentanțe Externe",
        desc: "Facilităm importul și exportul de produse de înaltă tehnologie, mărfuri agricole și materiale de construcții, având puncte de contact solide în România și Austria."
      }
    ],
    ctaText: "Ești interesat de un parteneriat cu VENTORO S.R.L.? Contactează departamentul nostru comercial pentru discuții confidențiale."
  },
  contactPage: {
    title: "Contactați-ne",
    subtitle: "Suntem aici pentru a vă răspunde la orice întrebare și pentru a vă oferi soluția optimă pentru proiectul dumneavoastră.",
    boxes: {
      location: {
        title: "LOCAȚIE (ROMÂNIA)",
        addr1: companyData.operationalOffice,
        addr2: "Sediu Social: " + companyData.registeredOffice
      },
      phone: {
        title: "TELEFON",
        ro: "ROMÂNIA : " + companyData.phoneRo,
        at: "AUSTRIA : " + companyData.phoneAt
      },
      email: {
        title: "EMAIL",
        main: companyData.email,
        office: companyData.officeEmail
      },
      hours: {
        title: "ORE DE DESCHIDERE",
        lines: [
          { day: "Luni", hours: "10:00 – 18:00" },
          { day: "Marți", hours: "10:00 – 18:00" },
          { day: "Miercuri", hours: "10:00 – 18:00" },
          { day: "Joi", hours: "10:00 – 18:00" },
          { day: "Vineri", hours: "10:00 – 18:00" },
          { day: "Sâmbătă", hours: "10:00 – 14:00" },
          { day: "Duminică", hours: "Închis" }
        ]
      }
    },
    form: {
      title: "Trimite-ne un Mesaj",
      subtitle: "Completați formularul de mai jos și un consultant VENTORO vă va contacta în cel mai scurt timp.",
      nameLabel: "Numele Dumneavoastră *",
      emailLabel: "Adresa de Email *",
      phoneLabel: "Număr de Telefon",
      serviceLabel: "Domeniul de Interes",
      serviceDefault: "Selectați un serviciu...",
      messageLabel: "Mesajul sau Cererea Dumneavoastră *",
      agreeTerms: "Sunt de acord cu prelucrarea datelor cu caracter personal conform politicii de confidențialitate.",
      submitBtn: "Trimite Mesajul",
      submitting: "Se trimite mesajul...",
      successTitle: "Mesaj Trimis cu Succes!",
      successMessage: "Vă mulțumim pentru interes. Echipa VENTORO vă va răspunde în termen de 24 de ore lucrătoare.",
      sendAnother: "Trimite un alt mesaj"
    }
  },
  footer: {
    tagline: "BE THE BEST – Soluții de consultanță IT, inginerie și tehnologii industriale la cele mai înalte standarde.",
    termsLink: "Termeni și condiții",
    privacyLink: "Politică de confidențialitate",
    cookieSettings: "Setări Cookie-uri",
    rights: "Toate drepturile rezervate.",
    quickLinks: "Legături Rapide",
    servicesTitle: "Sectoare Principale",
    contactTitle: "Informații de Contact",
    cuiLabel: "CUI",
    regComLabel: "Reg. Com.",
    euidLabel: "EUID"
  },
  cookieNotice: {
    text: "Acest site foloseşte cookie-uri pentru a vă oferi o experienţă de navigare cât mai bună şi relevantă. Prin continuarea navigării, sunteţi de acord cu modul de utilizare a acestor informaţii.",
    accept: "Acceptă",
    decline: "Refuză",
    moreInfo: "Află mai multe"
  }
};

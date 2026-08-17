import { servicesList } from "./services-data";
import { companyData } from "./company-info";

export const contentEn = {
  lang: "en",
  siteTitle: "VENTORO S.R.L. – BE THE BEST | Industrial Solutions & IT Consulting",
  siteDescription: "VENTORO S.R.L. provides integrated solutions in IT consultancy, industrial equipment, oil & gas, energy, construction, logistics, and global trade.",
  company: companyData,
  nav: {
    home: "HOME",
    about: "ABOUT US",
    services: "SERVICES",
    projects: "PROJECTS",
    collaboration: "COLLABORATION",
    contact: "CONTACT",
    terms: "TERMS & CONDITIONS",
    privacy: "PRIVACY POLICY",
    searchPlaceholder: "Search website (e.g. IT, energy, pumps, stone)...",
    searchTitle: "Quick Search",
    searchResults: "Search Results",
    noResults: "No results found for your search query.",
    allServicesLink: "View all 12 industry sectors",
  },
  topBar: {
    phone: companyData.phoneRo,
    email: companyData.email,
    hours: "Mon – Fri 10:00 – 18:00",
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
        title: "Your Strategic Partner in Enterprise IT Consulting & Advanced Technologies",
        description: "Delivering operational excellence in computing infrastructure management, digital transformation, and high-performance technological systems.",
        btnPrimary: "Explore Services",
        btnPrimaryHref: "/en/services",
        btnSecondary: "Get in Touch",
        btnSecondaryHref: "/en/contact",
        image: "/images/hero-industrial.jpg"
      },
      {
        badge: "ENGINEERING & POWER GENERATION",
        title: "Industrial Equipment & Turnkey Solutions Engineered to Global Standards",
        description: "Supply of high-voltage electric motors, generators, industrial pumps, and automated SCADA control systems.",
        btnPrimary: "Energy Industry",
        btnPrimaryHref: "/en/services/energy-industry",
        btnSecondary: "Recent Projects",
        btnSecondaryHref: "/en/projects",
        image: "/images/hero-energy.jpg"
      },
      {
        badge: "GLOBAL LOGISTICS & COMMERCE",
        title: "Connecting International Markets with Reliability and Precision",
        description: "Managing global supply chains, multimodal heavy-lift transportation, and cross-border distribution of commodities and industrial goods.",
        btnPrimary: "Logistics Services",
        btnPrimaryHref: "/en/services/logistics-services",
        btnSecondary: "B2B Partnership",
        btnSecondaryHref: "/en/collaboration",
        image: "/images/hero-management.jpg"
      }
    ]
  },
  stats: [
    { value: "12+", label: "Specialized Industry Sectors" },
    { value: "180+", label: "Completed Projects & Contracts" },
    { value: "99.8%", label: "Client Satisfaction Rating" },
    { value: "24/7", label: "Expert Technical Support" }
  ],
  servicesSection: {
    badge: "OPERATIONAL EXCELLENCE",
    title: "Our Specialized Services & Sectors",
    subtitle: "We cover an integrated spectrum of engineering, IT management, international logistics, and industrial supply across Romania and the European Union.",
    readMore: "Read More",
    viewAll: "View All Services"
  },
  aboutPreview: {
    badge: "ABOUT VENTORO S.R.L.",
    title: "A Proven and Tested Partner for Your Strategic Projects",
    p1: "In VENTORO S.R.L., you will find a proven and tested partner in IT consultancy, strategic procurement, and industrial engineering, specializing in meeting individual requirements in the competitive market and helping you achieve your goals effectively.",
    p2: "Incorporated and officially certified in Romania (Tax ID/CUI: 46012496, Trade Reg.: J2022007766400), our company operates under the motto 'BE THE BEST', prioritizing uncompromising quality, transparency, and enduring business relationships.",
    btnText: "Learn More About Us",
    btnHref: "/en/about-us"
  },
  principles: {
    badge: "CORE VALUES",
    title: "Our Guiding Business Principles",
    items: [
      {
        number: "01",
        title: "Compliance & Integrity",
        desc: "We strictly adhere to Romanian, European Union, and international laws, safety standards, and commercial regulations."
      },
      {
        number: "02",
        title: "Long-Term Partnerships",
        desc: "We stand alongside our clients and partners at every stage of work, from strategic advisory to deployment and maintenance."
      },
      {
        number: "03",
        title: "Honesty & Mutual Respect",
        desc: "We operate with total integrity, complete transparency, and mutual respect in all contractual and business interactions."
      },
      {
        number: "04",
        title: "Expert Guidance & Know-How",
        desc: "We provide comprehensive technical intelligence and actionable guidance to empower informed, profitable decisions."
      },
      {
        number: "05",
        title: "Continuous Innovation",
        desc: "We constantly expand and elevate our technology portfolio and partner network to deliver world-class solutions."
      }
    ]
  },
  ctaBanner: {
    title: "Looking to Scale Your Enterprise with Premium Solutions?",
    subtitle: "Contact the VENTORO team today for tailored engineering advice and dedicated proposals!",
    buttonText: "Contact Us Today",
    buttonHref: "/en/contact"
  },
  aboutPage: {
    title: "About VENTORO S.R.L.",
    subtitle: "A trusted provider of information technology consultancy, industrial engineering, and international trade solutions.",
    overviewTitle: "Who We Are",
    overviewText: "VENTORO S.R.L. is a registered Romanian enterprise committed to empowering businesses through cutting-edge technology, enterprise-grade IT infrastructure management, and dependable industrial procurement.",
    registrationTitle: "Official Corporate Registration Details",
    registrationText: "Our company is fully incorporated and licensed in Romania under the following official registry data:",
    fields: [
      { label: "Company Legal Name", value: companyData.legalName },
      { label: "Official Slogan", value: companyData.taglineEn },
      { label: "Tax Identification Number (CUI / VAT)", value: companyData.cui },
      { label: "Trade Registry Number", value: companyData.regCom },
      { label: "European Unique Identifier (EUID)", value: companyData.euid },
      { label: "Incorporation Date", value: "26.04.2022" },
      { label: "Director / Managing Executive", value: companyData.director },
      { label: "Principal Activity (NACE Code)", value: "6220 - Computer consultancy and computing facilities management activities" },
      { label: "Registered Headquarters", value: companyData.registeredOffice },
      { label: "Operational / Branch Office", value: companyData.operationalOffice }
    ],
    certificateNote: "All commercial operations are certified and regulated by the National Trade Register Office under the Ministry of Justice, Romania."
  },
  projectsPage: {
    title: "Projects & Landmark Achievements",
    subtitle: "A showcase of high-impact engineering and IT infrastructure projects delivered by VENTORO S.R.L.",
    filterAll: "All Projects",
    projects: [
      {
        id: "1",
        title: "Enterprise IT Infrastructure Modernization & Cloud Migration",
        category: "IT Consulting",
        desc: "Comprehensive cybersecurity audit, hybrid cloud infrastructure deployment, and server cluster operations for a commercial group in Bucharest.",
        year: "2024 - 2025",
        location: "Bucharest, Romania",
        metric: "99.99% Uptime & 30% Cost Reduction",
        image: "/images/project-uae.jpg"
      },
      {
        id: "2",
        title: "Supply of High-Voltage Motors & Switchgear for Substation",
        category: "Energy Industry",
        desc: "Procurement and commissioning of medium and high-voltage industrial motors, automation panels, and SCADA control for a renewable energy facility.",
        year: "2024",
        location: "Muntenia, Romania",
        metric: "45 MW Generation Capacity",
        image: "/images/project-energy.jpg"
      },
      {
        id: "3",
        title: "Rehabilitation of Agricultural Irrigation Pumping Station",
        category: "Irrigation & Agriculture",
        desc: "Overhaul of heavy pumping aggregates, installation of variable frequency drives (VFD), and IoT telemetry for precise water flow monitoring.",
        year: "2023 - 2024",
        location: "Danube Region, Romania",
        metric: "12,000 Hectares Efficiently Irrigated",
        image: "/images/project-agriculture.jpg"
      },
      {
        id: "4",
        title: "Specialized Cryogenic Valves & ANSI 2500 Piping Supply",
        category: "Oil & Gas",
        desc: "Fast-track procurement and delivery of high-pressure duplex steel valves and pipeline assemblies for a regional hydrocarbon refinery.",
        year: "2023",
        location: "Ploiești, Romania",
        metric: "Zero Leakage & 100% API Compliance",
        image: "/images/project-paraffin.jpg"
      },
      {
        id: "5",
        title: "Heavy-Lift Multimodal Transport & Expedited Customs Clearance",
        category: "Logistics",
        desc: "Turnkey transit of an 85-ton mobile mineral crushing plant from Central Europe to an active quarry site in Romania.",
        year: "2024",
        location: "Austria - Romania Corridor",
        metric: "Delivered Ahead of Schedule in 6 Days",
        image: "/images/project-cement.jpg"
      },
      {
        id: "6",
        title: "Luxury Silk Persian Rugs & Backlit Onyx Interior Landmark",
        category: "Handicrafts & Design",
        desc: "Curation of authentic pure silk Persian carpets and backlit bookmatched onyx panels for a five-star luxury hotel lobby.",
        year: "2024 - 2025",
        location: "Bucharest, Romania",
        metric: "Award-Winning Architectural Interior",
        image: "/images/project-stone.jpg"
      }
    ]
  },
  collaborationPage: {
    title: "Strategic Collaboration & Global Partnerships",
    subtitle: "Building long-term commercial alliances with manufacturers, international contractors, and visionary investors.",
    heroText: "VENTORO S.R.L. actively engages in joint ventures, public procurement bidding consortia, exclusive equipment representation, and international distribution.",
    pillars: [
      {
        title: "Manufacturer & Supplier Representation",
        desc: "We provide foreign manufacturers with an established gateway into Romania and Eastern European markets through our technical sales force and compliance expertise."
      },
      {
        title: "Tender Consortia & Subcontracting",
        desc: "We team up with tier-1 engineering partners on large-scale municipal infrastructure, power grid modernizations, and government enterprise IT tenders."
      },
      {
        title: "Bilateral Trade & Commercial Brokerage",
        desc: "We facilitate the import and export of advanced industrial machinery, agricultural commodities, and architectural building materials, supported by hubs in Romania and Austria."
      }
    ],
    ctaText: "Interested in establishing a commercial partnership with VENTORO S.R.L.? Reach out to our executive board for confidential discussions."
  },
  contactPage: {
    title: "Contact Us",
    subtitle: "We are ready to address your requirements and tailor the ideal technological and engineering solution for your project.",
    boxes: {
      location: {
        title: "LOCATION (ROMANIA)",
        addr1: companyData.operationalOffice,
        addr2: "Registered Office: " + companyData.registeredOffice
      },
      phone: {
        title: "PHONE",
        ro: "ROMANIA : " + companyData.phoneRo,
        at: "AUSTRIA : " + companyData.phoneAt
      },
      email: {
        title: "EMAIL",
        main: companyData.email,
        office: companyData.officeEmail
      },
      hours: {
        title: "OPENING HOURS",
        lines: [
          { day: "Monday", hours: "10:00 – 18:00" },
          { day: "Tuesday", hours: "10:00 – 18:00" },
          { day: "Wednesday", hours: "10:00 – 18:00" },
          { day: "Thursday", hours: "10:00 – 18:00" },
          { day: "Friday", hours: "10:00 – 18:00" },
          { day: "Saturday", hours: "10:00 – 14:00" },
          { day: "Sunday", hours: "Closed" }
        ]
      }
    },
    form: {
      title: "Send Us a Message",
      subtitle: "Fill in the form below and a VENTORO representative will get back to you promptly.",
      nameLabel: "Your Name *",
      emailLabel: "Email Address *",
      phoneLabel: "Phone Number",
      serviceLabel: "Area of Interest",
      serviceDefault: "Select a service area...",
      messageLabel: "Your Message or Inquiry *",
      agreeTerms: "I agree to the processing of personal data according to the privacy policy.",
      submitBtn: "Send Message",
      submitting: "Sending message...",
      successTitle: "Message Sent Successfully!",
      successMessage: "Thank you for reaching out. A VENTORO team member will respond within 24 business hours.",
      sendAnother: "Send another message"
    }
  },
  footer: {
    tagline: "BE THE BEST – Delivering world-class IT consultancy, engineering, and industrial solutions.",
    termsLink: "Terms & Conditions",
    privacyLink: "Privacy Policy",
    cookieSettings: "Cookie Settings",
    rights: "All rights reserved.",
    quickLinks: "Quick Links",
    servicesTitle: "Key Industry Sectors",
    contactTitle: "Contact Info",
    cuiLabel: "Tax ID (CUI)",
    regComLabel: "Trade Reg.",
    euidLabel: "EUID"
  },
  cookieNotice: {
    text: "This website uses cookies to ensure you get the best and most relevant browsing experience. By continuing to use the site, you agree to our cookie policy.",
    accept: "Accept",
    decline: "Decline",
    moreInfo: "Learn more"
  }
};

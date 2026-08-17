import { ServiceClusterItem } from "@/types";

export const servicesList: ServiceClusterItem[] = [
  {
    id: "consultanta-si-management",
    slugRo: "consultanta-si-management",
    slugEn: "it-consulting-and-management",
    titleRo: "Consultanță IT și Management",
    titleEn: "IT Consulting & Management",
    shortDescRo: "Consultanță de nivel înalt în tehnologia informației, managementul infrastructurilor de calcul și optimizarea proceselor tehnologice.",
    shortDescEn: "High-tier consulting in information technology, management and exploitation of computing systems, and business process automation.",
    fullDescRo: "VENTORO S.R.L. oferă servicii specializate de consultanță în tehnologia informației și management (gestiune și exploatare) a mijloacelor de calcul (Cod CAEN 6220). Asistăm organizațiile în transformarea digitală, integrarea arhitecturilor cloud moderne, securitatea cibernetică și optimizarea fluxurilor decizionale prin automatizare și instrumente analitice avansate.",
    fullDescEn: "VENTORO S.R.L. delivers specialized consulting in information technology and computing management/infrastructure operations (NACE 6220). We empower enterprises through digital transformation, modern cloud architecture integration, cybersecurity resilience, and automated workflow intelligence.",
    iconName: "Cpu",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Audit tehnic și proiectare arhitecturi IT enterprise",
      "Managementul și exploatarea infrastructurilor de calcul hibride",
      "Consultanță strategică în securitate cibernetică și conformitate",
      "Integrare ERP, CRM și soluții digitale industriale",
      "Suport 24/7 și mentenanță proactivă a sistemelor critice"
    ],
    featuresEn: [
      "Technical IT audit and enterprise systems architecture",
      "Management and exploitation of hybrid computing infrastructures",
      "Strategic cybersecurity and compliance advisory",
      "Industrial ERP, CRM, and digital platforms integration",
      "24/7 support and proactive maintenance of mission-critical systems"
    ],
    specsRo: [
      { label: "Cod CAEN", value: "6220 - Consultanță în Tehnologia Informației" },
      { label: "Nivel de Disponibilitate", value: "SLA 99.98%" },
      { label: "Securitate", value: "Standarde ISO/IEC 27001 & GDPR" },
      { label: "Acoperire Geografică", value: "România, Austria, Uniunea Europeană" }
    ],
    specsEn: [
      { label: "NACE Code", value: "6220 - Computer Consultancy & Management" },
      { label: "Uptime SLA", value: "99.98% High Availability" },
      { label: "Compliance", value: "ISO/IEC 27001 & GDPR Compliant" },
      { label: "Operational Reach", value: "Romania, Austria, European Union" }
    ],
    clusterSubtopicsRo: [
      "Consultanță Cloud & DevOps",
      "Securitate Informatică și Protecția Datelor",
      "Managementul Sistemelor Informatice Industriale",
      "Dezvoltare Software Personalizat",
      "Audit IT și Strategie Digitală"
    ],
    clusterSubtopicsEn: [
      "Cloud & DevOps Architecture Consulting",
      "Cybersecurity and Data Governance",
      "Industrial IT Systems Exploitation",
      "Custom Enterprise Software Engineering",
      "IT Infrastructure Audit and Digital Strategy"
    ]
  },
  {
    id: "industria-energetica",
    slugRo: "industria-energetica",
    slugEn: "energy-industry",
    titleRo: "Industria Energetică",
    titleEn: "Energy Industry",
    shortDescRo: "Echipamente de înaltă performanță, motoare HV/MV, întrerupătoare, transformatoare și componente de automatizare pentru sectorul energetic.",
    shortDescEn: "High-performance equipment, HV/MV electric motors, circuit breakers, transformers, and industrial automation components for the energy sector.",
    fullDescRo: "Portofoliul nostru pentru industria energetică include generatoare, motoare electrice de înaltă și medie tensiune (HV și MV), întrerupătoare de circuit, pompe industriale, supape specializate, schimbătoare de căldură, compresoare și instrumente avansate de control al proceselor tehnologice. Toate soluțiile sunt calibrate pentru eficiență energetică maximă și fiabilitate în condiții extreme.",
    fullDescEn: "Our energy industry portfolio comprises industrial generators, high and medium voltage electric motors (HV & MV), circuit breakers, high-pressure pumps, specialized valves, heat exchangers, compressors, and advanced process control instrumentation engineered for optimal energy efficiency and resilience.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Motoare electrice industriale HV și MV cu randament ridicat",
      "Panouri de distribuție și tablouri de comandă automatizate",
      "Sisteme de monitorizare SCADA și control inteligent al rețelelor",
      "Furnizare de piese de schimb critice pentru centrale și stații electrice",
      "Consultanță tehnică pentru tranziție energetică și decarbonizare"
    ],
    featuresEn: [
      "High-efficiency industrial HV and MV electric motors",
      "Distribution switchgear and automated control panels",
      "SCADA monitoring systems and smart grid automation",
      "Supply of critical spare parts for power plants and substations",
      "Engineering consultancy for energy transition and decarbonization"
    ],
    specsRo: [
      { label: "Gama de Tensiune", value: "Joasă, Medie și Înaltă Tensiune (0.4kV - 110kV)" },
      { label: "Standarde", value: "IEC, CE, ISO 9001" },
      { label: "Aplicații", value: "Centrale termice, hidrocentrale, parcuri fotovoltaice, eoliene" },
      { label: "Garanție", value: "Extinsă până la 60 de luni cu mentenanță inclusă" }
    ],
    specsEn: [
      { label: "Voltage Range", value: "Low, Medium & High Voltage (0.4kV - 110kV)" },
      { label: "Standards", value: "IEC, CE, ISO 9001 Certified" },
      { label: "Applications", value: "Thermal, hydro, solar and wind power plants" },
      { label: "Warranty", value: "Extended up to 60 months with service package" }
    ],
    clusterSubtopicsRo: [
      "Echipamente pentru Parcuri Regenerabile",
      "Mentenanță Rețele Electrice de Înaltă Tensiune",
      "Transformatoare și Stații de Transformare",
      "Automatizări Industriale în Energie",
      "Managementul Eficienței Energetice"
    ],
    clusterSubtopicsEn: [
      "Renewable Energy Farm Infrastructure",
      "High Voltage Substation Maintenance",
      "Industrial Transformers and Switchgears",
      "Energy Sector Automation & SCADA",
      "Industrial Energy Efficiency Optimization"
    ]
  },
  {
    id: "petrol-si-gaze",
    slugRo: "petrol-si-gaze",
    slugEn: "oil-and-gas",
    titleRo: "Petrol și Gaze",
    titleEn: "Oil & Gas Industry",
    shortDescRo: "Soluții robuste pentru explorare, rafinare, conducte și transport de hidrocarburi conforme cu cele mai riguroase standarde API.",
    shortDescEn: "Robust solutions for exploration, refining, pipeline transportation, and processing conforming to the highest API standards.",
    fullDescRo: "Industria modernă de petrol și gaze necesită componente și echipamente fără compromisuri în ceea ce privește siguranța și fiabilitatea operațională. Oferim tubulatură specializată, robineți industriali de înaltă presiune, compresoare de gaz, sisteme de filtrare și separare, precum și senzori de proces certificați ATEX/IECEx.",
    fullDescEn: "The modern oil and gas industry requires uncompromising safety and operational excellence. We supply specialized tubular goods, high-pressure industrial valves, gas compressors, filtration and separation units, alongside ATEX/IECEx certified instrumentation.",
    iconName: "Flame",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Robineți industriali cu bilă, fluture, sertar și reținere (clase ANSI 150 - 2500)",
      "Tubulatură și fitinguri din oțeluri aliate și inoxidabile speciale",
      "Sisteme de pompare și comprimare pentru gaze naturale și țiței",
      "Consultanță tehnică pentru retehnologizarea rafinăriilor",
      "Soluții de protecție a mediului și detecție scurgeri"
    ],
    featuresEn: [
      "Ball, butterfly, gate, and check valves (ANSI classes 150 - 2500)",
      "High-grade alloy and stainless steel piping and fittings",
      "Crude oil and natural gas pumping and compression skids",
      "Engineering consultancy for refinery modernization",
      "Environmental monitoring and leak detection solutions"
    ],
    specsRo: [
      { label: "Certificări", value: "API 6D, API 6A, ATEX, ISO 29001" },
      { label: "Presiuni de Lucru", value: "Până la 15,000 PSI (1034 bar)" },
      { label: "Materiale", value: "Carbon Steel, Duplex, Super Duplex, Inconel" },
      { label: "Temperaturi", value: "-196°C până la +550°C" }
    ],
    specsEn: [
      { label: "Certifications", value: "API 6D, API 6A, ATEX, ISO 29001" },
      { label: "Operating Pressures", value: "Up to 15,000 PSI (1034 bar)" },
      { label: "Materials", value: "Carbon Steel, Duplex, Super Duplex, Inconel" },
      { label: "Temperatures", value: "-196°C to +550°C" }
    ],
    clusterSubtopicsRo: [
      "Echipamente pentru Rafinării și Petrochimie",
      "Conducte de Transport Gaze Naturale",
      "Instrumentație de Câmp Certificată ATEX",
      "Supape Industriale de Presiune Înaltă",
      "Securitate Ecologică în Rafinării"
    ],
    clusterSubtopicsEn: [
      "Refinery and Petrochemical Plant Systems",
      "Natural Gas Transmission Pipelines",
      "ATEX Certified Field Instrumentation",
      "High-Pressure Industrial Valves",
      "Environmental Safety in Hydrocarbons"
    ]
  },
  {
    id: "industria-cimentului",
    slugRo: "industria-cimentului",
    slugEn: "cement-industry",
    titleRo: "Industria Cimentului",
    titleEn: "Cement Industry",
    shortDescRo: "Utilaje grele, mori industriale, reductoare de turație, benzi transportoare și piese de uzură pentru fabricile de ciment.",
    shortDescEn: "Heavy machinery, industrial mills, gearboxes, conveyor systems, and wear-resistant parts for cement manufacturing plants.",
    fullDescRo: "Susținem producătorii de ciment și agregate cu echipamente robuste proiectate pentru medii abrazive și temperaturi înalte: reductoare de mare putere, cuptoare rotative, role de susținere, ventilatoare industriale de tiraj, căptușeli antiuzură și sisteme complete de filtrare a prafului.",
    fullDescEn: "We support cement and aggregates producers with heavy-duty equipment designed for abrasive and high-temperature environments: high-torque gearboxes, rotary kiln components, support rollers, heavy draft fans, wear linings, and baghouse filtration systems.",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Reductoare planetare și cilindrice de mare capacitate",
      "Benzi transportoare rezistente la căldură și abraziune",
      "Plăci de blindaj și piese turnate din aliaje speciale antiuzură",
      "Sisteme avansate de filtrare industrială și desprăfuire",
      "Optimizare continuă a consumului de combustibil în cuptoare"
    ],
    featuresEn: [
      "Heavy-duty planetary and helical industrial gearboxes",
      "Heat and abrasion resistant conveyor belt systems",
      "Wear-resistant liners and specialized alloy castings",
      "Industrial dust collection and baghouse filtration units",
      "Continuous kiln fuel efficiency and thermal optimization"
    ],
    specsRo: [
      { label: "Capacitate", value: "Linie completă de la 500 la 10,000 t/zi" },
      { label: "Rezistență Termică", value: "Până la 1400°C" },
      { label: "Garanție Piese de Uzură", value: "Durată de viață extinsă cu +40%" }
    ],
    specsEn: [
      { label: "Capacity", value: "Complete line from 500 to 10,000 tpd" },
      { label: "Thermal Endurance", value: "Up to 1400°C" },
      { label: "Wear Life", value: "Extended service life by +40%" }
    ],
    clusterSubtopicsRo: [
      "Componente pentru Cuptoare Rotative de Ciment",
      "Mori de Măcinare Ciment și Făină Crudă",
      "Sisteme de Desprăfuire Industrială",
      "Piese Turnate Rezistente la Abraziune",
      "Automatizarea Producției de Lianți"
    ],
    clusterSubtopicsEn: [
      "Rotary Kiln Mechanical Assemblies",
      "Raw Meal and Cement Grinding Mills",
      "Industrial De-dusting and Filtration",
      "Abrasion-Resistant Cast Components",
      "Cement Plant Process Automation"
    ]
  },
  {
    id: "constructii",
    slugRo: "constructii",
    slugEn: "construction",
    titleRo: "Construcții Civile și Industriale",
    titleEn: "Construction & Infrastructure",
    shortDescRo: "Execuție și furnizare completă pentru clădiri rezidențiale, parcuri logistice, baraje, sisteme de canalizare și stații de tratare a apei.",
    shortDescEn: "Comprehensive contracting and material supply for residential towers, logistic hubs, dams, sewer infrastructure, and water treatment plants.",
    fullDescRo: "VENTORO oferă expertiză în managementul și execuția proiectelor complexe de construcții civile și industriale. Gestionăm de la faza de proiectare structurală, terasamente și fundații speciale, până la furnizarea de materiale premium, structuri metalice grele și instalații tehnologice integrate.",
    fullDescEn: "VENTORO delivers engineering and project management for large-scale civil and industrial infrastructure. We manage everything from structural engineering, deep foundations, heavy steel structure supply, through to integrated MEP and water treatment facilities.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Dezvoltare clădiri comerciale, spații industriale și birouri",
      "Infrastructură hidrotehnică: baraje, diguri, canale și drenaje",
      "Stații municipale și industriale de epurare și tratare a apei",
      "Structuri metalice prefabricate și confecții metalice speciale",
      "Management integrat de șantier (Project & Cost Management)"
    ],
    featuresEn: [
      "Commercial buildings, industrial warehouses, and corporate facilities",
      "Hydrotechnical engineering: dams, dikes, canals, and drainage",
      "Municipal and industrial water treatment and purification plants",
      "Prefabricated structural steelwork and heavy metal structures",
      "Integrated construction management (EPC & Turnkey)"
    ],
    specsRo: [
      { label: "Standard Calitate", value: "ISO 9001, ISO 14001, ISO 45001" },
      { label: "Modalitate Livrare", value: "Turnkey / EPC / Subantrepriză Generală" },
      { label: "Siguranță", value: "Zero Incidente Muncă" }
    ],
    specsEn: [
      { label: "Quality Standards", value: "ISO 9001, ISO 14001, ISO 45001" },
      { label: "Delivery Model", value: "Turnkey / EPC / General Contracting" },
      { label: "Safety Record", value: "Zero Incident Protocol" }
    ],
    clusterSubtopicsRo: [
      "Construcții de Hale Industriale și Parcuri Logistice",
      "Stații de Epurare și Tratare a Apei",
      "Infrastructură de Apă și Canalizare",
      "Consolidări Structurale și Fundații Speciale",
      "Dirigenție de Șantier și Management Tehnic"
    ],
    clusterSubtopicsEn: [
      "Industrial Warehouses & Logistics Hubs",
      "Wastewater Treatment Plant Engineering",
      "Municipal Water & Sewer Networks",
      "Structural Reinforcement and Deep Foundations",
      "Construction Supervision and Technical Management"
    ]
  },
  {
    id: "irigatii-si-agricultura",
    slugRo: "irigatii-si-agricultura",
    slugEn: "irrigation-and-agriculture",
    titleRo: "Irigații și Agricultură",
    titleEn: "Irrigation & Agriculture",
    shortDescRo: "Reabilitare stații de pompare, sisteme pivot și picurare, panouri de comandă automatizate și utilaje agricole moderne.",
    shortDescEn: "Pumping station rehabilitation, center pivots, drip irrigation networks, automated SCADA panels, and modern agricultural equipment.",
    fullDescRo: "Oferim soluții tehnologice de ultimă generație pentru optimizarea resurselor de apă în agricultură. Reabilităm stații de pompare plutitoare și fixe, instalăm sisteme de irigații liniare și pivotante, automatizăm distribuția apei prin senzori de umiditate și control de la distanță prin aplicații mobile.",
    fullDescEn: "We engineer cutting-edge irrigation technologies to maximize agricultural yield and water conservation. We rehabilitate large-scale pumping stations, install center-pivot and drip networks, and automate water distribution via soil moisture telemetry and mobile SCADA interfaces.",
    iconName: "Sprout",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Reabilitare completă a stațiilor de pompare pentru irigații",
      "Sisteme pivotante și liniare cu eficiență ridicată",
      "Panouri de comandă și variatoare de turație pentru protecție motoare",
      "Tehnologii Smart Agriculture și senzori IoT pentru sol",
      "Țevi PEHD, fitinguri și hidranți pentru rețele sub presiune"
    ],
    featuresEn: [
      "Turnkey rehabilitation of municipal and private pumping stations",
      "High-efficiency center-pivot and linear irrigation systems",
      "Control panels and VFD drives for motor protection and energy savings",
      "Smart Agriculture telemetry and IoT soil monitoring nodes",
      "HDPE piping, fittings, and automated hydrants for pressurized networks"
    ],
    specsRo: [
      { label: "Debite Pompe", value: "50 m³/h până la 10,000 m³/h" },
      { label: "Economie Apă", value: "Până la 35% prin automatizare precisă" },
      { label: "Control", value: "Telemetrie GSM/4G și Panou Touchscreen" }
    ],
    specsEn: [
      { label: "Pump Flow Rates", value: "50 m³/h up to 10,000 m³/h" },
      { label: "Water Savings", value: "Up to 35% with precision automation" },
      { label: "Control Interface", value: "4G/GSM Telemetry & Touchscreen HMI" }
    ],
    clusterSubtopicsRo: [
      "Reabilitare Stații de Pompare Irigații",
      "Sisteme de Irigații Tip Pivot și Tambur",
      "Automatizări Agricole și Senzori IoT",
      "Rețele de Distribuție Apă sub Presiune",
      "Consultanță Fonduri Europene în Irigații"
    ],
    clusterSubtopicsEn: [
      "Agricultural Pumping Station Modernization",
      "Center-Pivot and Reel Irrigation Systems",
      "AgriTech Automation & Soil Telemetry",
      "Pressurized Water Pipeline Networks",
      "Agricultural Modernization Consultancy"
    ]
  },
  {
    id: "servicii-logistice",
    slugRo: "servicii-logistice",
    slugEn: "logistics-services",
    titleRo: "Servicii Logistice și Transport",
    titleEn: "Logistics & Supply Chain",
    shortDescRo: "Transport internațional multimodal (rutier, maritim, feroviar, aerian), vămuire rapidă, depozitare și management de lanț de aprovizionare.",
    shortDescEn: "International multimodal freight forwarding (road, ocean, rail, air), expedited customs brokerage, warehousing, and supply chain management.",
    fullDescRo: "VENTORO gestionează fluxuri logistice globale complexe, conectând piețele din Europa, Orientul Mijlociu și Asia. Asigurăm transporturi agabaritice, mărfuri generale, containere maritime FCL/LCL, proceduri complete de vămuire și depozitare modernă cu monitorizare în timp real a încărcăturilor.",
    fullDescEn: "VENTORO orchestrates end-to-end global supply chain operations connecting European, Middle Eastern, and Asian markets. We manage heavy-lift project cargo, general freight, FCL/LCL ocean containers, complete customs clearance, and high-security warehousing with real-time tracking.",
    iconName: "Truck",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Transport rutier complet (FTL) și parțial (LTL) pe teritoriul Europei",
      "Expediții maritime containerizate (FCL/LCL) prin portul Constanța și porturi majore europene",
      "Consultanță vamală, întocmire documentație vamală și tranzit T1",
      "Transporturi agabaritice și speciale pentru utilaje industriale grele",
      "Depozitare climatizată și servicii de cross-docking"
    ],
    featuresEn: [
      "Full truckload (FTL) and groupage (LTL) road freight across Europe",
      "Ocean freight container forwarding (FCL/LCL) via Constanța and top EU ports",
      "Customs clearance, transit documentation, and tariff classification",
      "Over-dimensional heavy machinery and project cargo logistics",
      "Temperature-controlled warehousing and cross-docking services"
    ],
    specsRo: [
      { label: "Acoperire", value: "Globală (Europa, Asia, Orientul Mijlociu, America)" },
      { label: "Trasabilitate", value: "GPS Tracking 24/7 & Portal Client" },
      { label: "Asigurare", value: "Poliță CMR și Asigurare Cargo All-Risk" }
    ],
    specsEn: [
      { label: "Coverage", value: "Global (Europe, Asia, Middle East, Americas)" },
      { label: "Traceability", value: "24/7 GPS Tracking & Dedicated Portal" },
      { label: "Insurance", value: "CMR Convention and All-Risk Cargo Insurance" }
    ],
    clusterSubtopicsRo: [
      "Transport Maritim Containerizat FCL și LCL",
      "Transport Rutier Internațional FTL/LTL",
      "Servicii de Vămuire și Import-Export",
      "Transporturi Agabaritice de Utilaje",
      "Managementul Lanțului de Aprovizionare"
    ],
    clusterSubtopicsEn: [
      "Ocean Container Freight FCL and LCL",
      "Cross-Border Road Transport FTL/LTL",
      "Customs Brokerage and Trade Compliance",
      "Oversized Industrial Project Cargo",
      "Strategic Supply Chain Management"
    ]
  },
  {
    id: "produse-alimentare",
    slugRo: "produse-alimentare",
    slugEn: "food-products",
    titleRo: "Produse Alimentare și Mărfuri",
    titleEn: "Food Products & Commodities",
    shortDescRo: "Import-export de produse alimentare de bază, cereale, uleiuri vegetale, produse lactate, carne și mirodenii la standarde de calitate UE.",
    shortDescEn: "Import and export of agricultural commodities, grains, vegetable oils, dairy, meats, and authentic culinary ingredients certified to EU standards.",
    fullDescRo: "Activăm în comerțul internațional cu produse agroalimentare de prim rang, respectând cele mai riguroase standarde sanitare și sanitar-veterinare (HACCP, IFS, ISO 22000). Furnizăm materii prime alimentare către procesatori industriali, distribuitori naționali și rețele de retail.",
    fullDescEn: "We engage in international agri-food trade, strictly adhering to high-grade hygiene and veterinary standards (HACCP, IFS, ISO 22000). We supply food commodities and bulk ingredients to industrial processors, national wholesalers, and retail networks.",
    iconName: "Utensils",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Trading cereale (grâu, porumb, orz, floarea-soarelui, soia)",
      "Uleiuri vegetale rafinate și brute în vrac sau ambalate",
      "Zahăr, făină, orez și produse uscate de bază",
      "Fructe uscate, nuci, șofran și condimente gourmet",
      "Certificări fitosanitare complete și control de laborator certificat"
    ],
    featuresEn: [
      "Grains trading (wheat, corn, barley, sunflower, soybeans)",
      "Refined and crude vegetable oils in bulk and consumer packaging",
      "Sugar, flour, rice, and dry staple food commodities",
      "Dried fruits, nuts, authentic saffron, and gourmet spices",
      "Full phytosanitary certification and accredited lab inspections"
    ],
    specsRo: [
      { label: "Standarde", value: "HACCP, ISO 22000, Non-GMO" },
      { label: "Livrare", value: "Cisterna, Big Bags, Containere, Sac 25/50kg" },
      { label: "Condiții Livrare", value: "FOB, CIF, CFR, DAP, DDP" }
    ],
    specsEn: [
      { label: "Standards", value: "HACCP, ISO 22000, Non-GMO Verified" },
      { label: "Packaging", value: "Food Tankers, Big Bags, Bulk Containers, 25/50kg" },
      { label: "Incoterms", value: "FOB, CIF, CFR, DAP, DDP" }
    ],
    clusterSubtopicsRo: [
      "Comerț Internațional cu Cereale și Oleaginoase",
      "Import Uleiuri Vegetale Industriale",
      "Furnizare Zahăr și Alimente de Bază",
      "Condimente și Produse Gourmet",
      "Certificări Sanitar-Veterinare și Vamă Alimentară"
    ],
    clusterSubtopicsEn: [
      "International Grain & Oilseed Trading",
      "Industrial Bulk Vegetable Oils Supply",
      "Sugar & Basic Food Commodity Distribution",
      "Gourmet Spices and High-End Ingredients",
      "Food Safety Certification and Logistics"
    ]
  },
  {
    id: "artizanat-si-design",
    slugRo: "artizanat-si-design",
    slugEn: "handicrafts-and-design",
    titleRo: "Artizanat și Design Interior",
    titleEn: "Handicrafts & Interior Design",
    shortDescRo: "Covoare persane autentice țesute manual, ceramică de colecție, decorațiuni nobile și mobilier luxury pentru spații distinse.",
    shortDescEn: "Authentic hand-knotted Persian carpets, collectible ceramics, noble decorations, and luxury artisanal furniture for distinctive interiors.",
    fullDescRo: "Aducem arta milenară a artizanatului oriental în arhitectura interioară modernă. Selecția noastră cuprinde covoare persane autentice din mătase și lână nobilă, lucrate manual de maeștri artizani renumiți, ceramică artistică, vitralii și elemente de decor exclusive pentru reședințe private și hoteluri de lux.",
    fullDescEn: "We unite age-old artistic heritage with contemporary interior architecture. Our curated collection showcases genuine hand-knotted silk and wool Persian rugs crafted by renowned master artisans, museum-grade ceramic art, and luxury bespoke decorative pieces for private estates and boutique hotels.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Covoare persane originale cu certificat de autenticitate și proveniență (Isfahan, Tabriz, Qom, Nain)",
      "Piese unicat din mătase pură 100% cu densitate excepțională a nodurilor",
      "Consultanță de design interior și integrare cromatică",
      "Servicii specializate de curățare, restaurare și conservare covoare de artă",
      "Opere de artă decorativă, gravuri pe metal prețios și ceramică pictată manual"
    ],
    featuresEn: [
      "Original Persian rugs with certified provenance (Isfahan, Tabriz, Qom, Nain)",
      "One-of-a-kind 100% pure silk masterpieces with extraordinary knot densities",
      "Interior styling consultancy and chromatic rug curation",
      "Master-level cleaning, restoration, and preservation services",
      "Decorative art, precious metal engravings, and handcrafted enamelware"
    ],
    specsRo: [
      { label: "Materiale", value: "Mătase naturală, lână Kork, bumbac fin" },
      { label: "Densitate Noduri", value: "500,000 până la peste 1,200,000 noduri/m²" },
      { label: "Certificat", value: "Certificat internațional de autenticitate și expertiză" }
    ],
    specsEn: [
      { label: "Materials", value: "Natural silk, Kork wool, fine mercerized cotton" },
      { label: "Knot Density", value: "500,000 to over 1,200,000 knots/sqm" },
      { label: "Provenance", value: "Numbered international certificate of authenticity" }
    ],
    clusterSubtopicsRo: [
      "Covoare Persane din Mătase Isfahan și Qom",
      "Covoare de Colecție Tabriz și Nain",
      "Restaurare și Curățare Profesională a Covoarelor",
      "Design Interior Luxury cu Accente Orientale",
      "Obiecte de Artă și Gravură Manuală"
    ],
    clusterSubtopicsEn: [
      "Isfahan and Qom Pure Silk Persian Carpets",
      "Masterpiece Tabriz and Nain Heritage Rugs",
      "Museum-Grade Rug Cleaning and Restoration",
      "Luxury Interior Design and Curated Décor",
      "Handcrafted Oriental Art Objects"
    ]
  },
  {
    id: "piatra-naturala",
    slugRo: "piatra-naturala",
    slugEn: "natural-stone",
    titleRo: "Piatră Naturală și Marmură",
    titleEn: "Natural Stone & Marble",
    shortDescRo: "Blocuri, plăci și finisaje de marmură, travertin, granit, onix și calcar pentru proiecte arhitecturale de prestigiu.",
    shortDescEn: "Blocks, slabs, and cut-to-size finishes in marble, travertine, granite, onyx, and limestone for prestigious architectural projects.",
    fullDescRo: "Furnizăm cele mai rafinate varietăți de piatră naturală direct din cariere internaționale de top. De la marmură albă pură, travertin nobil, onix translucid, până la granit dens pentru trafic intens, asigurăm tăiere la dimensiuni personalizate, finisaje lustruite, mate sau antichizate pentru fațade, pardoseli și băi luxury.",
    fullDescEn: "We source and supply the finest varieties of natural stone directly from premier global quarries. From pristine white marble and classic travertine to backlit translucent onyx and high-traffic granite, we provide custom waterjet cutting, bookmatched slabs, and bespoke finishes for prestigious architecture.",
    iconName: "Gem",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Plăci mari (slabs) și blocuri brute din cariere selectate",
      "Marmură exclusivă, travertin clasic și onix translucid",
      "Tăiere computerizată CNC și waterjet pentru modele personalizate",
      "Soluții de placare pentru fațade ventilate și spații comerciale",
      "Tratamente hidrofobe și protecție antimurdărie de lungă durată"
    ],
    featuresEn: [
      "Jumbo slabs and raw quarry blocks from select origins",
      "Exclusive marble, Italian-style travertine, and translucent onyx",
      "Computerized CNC and waterjet precision fabrication",
      "Engineered ventilated facade stone cladding solutions",
      "Advanced hydrophobic sealing and protective stone treatments"
    ],
    specsRo: [
      { label: "Grosimi Standard", value: "2 cm, 3 cm și tăieturi speciale la cerere" },
      { label: "Finisaje", value: "Polished, Honed, Brushed, Bush-hammered, Sandblasted" },
      { label: "Origini", value: "Italia, Grecia, Turcia, Spania, Iran, Portugalia" }
    ],
    specsEn: [
      { label: "Thickness", value: "2 cm, 3 cm, and custom calibrated cuts" },
      { label: "Finishes", value: "Polished, Honed, Brushed, Bush-hammered, Sandblasted" },
      { label: "Origins", value: "Italy, Greece, Turkey, Spain, Iran, Portugal" }
    ],
    clusterSubtopicsRo: [
      "Plăci de Marmură Luxury pentru Pardoseli și Pereți",
      "Travertin pentru Fațade Exterioare și Terase",
      "Onix Translucid pentru Baruri și Recepții Iluminate",
      "Granit Rezistent pentru Blaturi și Spații Publice",
      "Montaj și Întreținere Profesională a Pietrei Naturale"
    ],
    clusterSubtopicsEn: [
      "Luxury Marble Slabs for Flooring and Wall Cladding",
      "Travertine for Exterior Facades and Terraces",
      "Backlit Translucent Onyx for Luxury Bars & Lobbies",
      "High-Durability Granite for Countertops & Public Spaces",
      "Professional Stone Installation and Sealing"
    ]
  },
  {
    id: "minerit",
    slugRo: "minerit",
    slugEn: "mining",
    titleRo: "Industria Minieră",
    titleEn: "Mining Industry",
    shortDescRo: "Echipamente de concasare, sortare, foraj, transport subteran și de suprafață pentru exploatări miniere și cariere de piatră.",
    shortDescEn: "Crushing, screening, drilling rigs, underground, and open-pit heavy machinery for mining operations and aggregate quarries.",
    fullDescRo: "Echipamentele și componentele noastre pentru minerit sunt construite pentru a rezista celor mai aspre condiții de exploatare. Oferim concasoare cu fălci și conice, ciururi vibratoare, utilaje de încărcare și transport, scule de foraj, pompe de nămol și consumabile rezistente la uzură extremă.",
    fullDescEn: "Our mining equipment and component portfolio is built to endure the most demanding extractive environments. We supply jaw and cone crushers, vibrating screens, heavy haulers, drilling tools, slurry pumps, and high-wear replacement parts.",
    iconName: "Pickaxe",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Stații mobile și fixe de concasare și sortare a rocilor",
      "Scule de foraj, coroane diamantate și prăjini de foraj",
      "Piese de schimb antiuzură pentru concasoare (fălci, mantale)",
      "Benzi transportoare ranforsate pentru tonaje mari",
      "Consultanță tehnică pentru optimizarea fluxului de extracție"
    ],
    featuresEn: [
      "Mobile and stationary crushing and screening aggregate plants",
      "Drilling bits, diamond coring tools, and drill rods",
      "High-chrome and manganese wear castings for crushers",
      "Steel-cord reinforced conveyor belts for high-tonnage hauling",
      "Mining engineering consultancy for throughput optimization"
    ],
    specsRo: [
      { label: "Capacitate Concasare", value: "50 până la 1200 t/oră" },
      { label: "Materiale Piese", value: "Oțel Manganos (Mn13, Mn18, Mn22), Fontă cu Crom" },
      { label: "Certificare", value: "CE, ISO 9001, MSHA compliant" }
    ],
    specsEn: [
      { label: "Crushing Capacity", value: "50 to 1200 tons/hour" },
      { label: "Wear Materials", value: "High Manganese Steel (Mn13/18/22), High Chrome Iron" },
      { label: "Compliance", value: "CE, ISO 9001, MSHA standards" }
    ],
    clusterSubtopicsRo: [
      "Concasoare cu Fălci și Conice pentru Cariere",
      "Ciururi Vibratoare și Echipamente de Sortare",
      "Scule și Utilaje de Foraj Minier",
      "Piese Turnate de Uzură cu Mangan și Crom",
      "Soluții de Siguranță și Ventilație Minieră"
    ],
    clusterSubtopicsEn: [
      "Jaw and Cone Crushers for Quarry Operations",
      "Vibrating Screens and Sizing Systems",
      "Drilling Rigs and Mineral Exploration Tools",
      "Manganese and High-Chrome Wear Castings",
      "Mine Ventilation and Underground Safety Systems"
    ]
  },
  {
    id: "medical",
    slugRo: "medical",
    slugEn: "medical",
    titleRo: "Echipamente Medicale",
    titleEn: "Medical Equipment",
    shortDescRo: "Dispozitive medicale avansate, aparatură de imagistică, monitoare ATI, echipamente de sterilizare și consumabile pentru spitale.",
    shortDescEn: "Advanced medical devices, diagnostic imaging, ICU monitors, surgical and sterilization equipment, and hospital-grade consumables.",
    fullDescRo: "VENTORO este un furnizor de încredere pentru spitale, clinici și centre medicale de top. Importăm și distribuim aparatură medicală certificată CE și FDA: ventilatoare ATI, monitoare funcții vitale, ecografe de înaltă rezoluție, mese și lămpi chirurgicale, autoclave industriale și consumabile sterile de unică folosință.",
    fullDescEn: "VENTORO serves as a trusted partner for hospitals, clinics, and research institutions. We distribute CE and FDA certified medical equipment: intensive care ventilators, multiparameter patient monitors, digital ultrasound platforms, surgical suites, and sterile clinical consumables.",
    iconName: "HeartPulse",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop",
    featuresRo: [
      "Echipamente complete pentru secții de Terapie Intensivă (ATI)",
      "Sisteme de imagistică digitală și ecografie Doppler color",
      "Echipamente de sterilizare cu abur și plasmă de joasă temperatură",
      "Mobilier medical ergonomic pentru săli de operație și saloane",
      "Service tehnic autorizat, calibrare periodică și suport 24/7"
    ],
    featuresEn: [
      "Turnkey Intensive Care Unit (ICU) and anesthesia workstations",
      "Digital ultrasound and high-resolution diagnostic imaging",
      "Steam and low-temperature hydrogen peroxide plasma sterilizers",
      "Ergonomic surgical tables, surgical lights, and hospital beds",
      "Authorized technical maintenance, calibration, and 24/7 support"
    ],
    specsRo: [
      { label: "Certificări", value: "CE Medical Device Directive (MDD/MDR), ISO 13485" },
      { label: "Service", value: "Ingineri calificați cu timp de intervenție sub 24h" },
      { label: "Conformitate", value: "Aviz Ministerul Sănătății / ANMDMR" }
    ],
    specsEn: [
      { label: "Certifications", value: "CE MDR / MDD Compliant, ISO 13485 Certified" },
      { label: "Field Service", value: "Certified biomedical engineers with <24h response" },
      { label: "Regulatory", value: "Full European & National Health Agency Approval" }
    ],
    clusterSubtopicsRo: [
      "Echipamente pentru Terapie Intensivă și Anestezie",
      "Sisteme de Ecografie și Imagistică Medicală",
      "Autoclave și Soluții de Sterilizare pentru Spitale",
      "Mobilier Medical și Mese Chirurgicale",
      "Consumabile Medicale Sterile și Echipamente de Protecție"
    ],
    clusterSubtopicsEn: [
      "ICU Ventilators and Patient Monitoring Systems",
      "Digital Color Doppler Ultrasound Platforms",
      "Hospital-Grade Autoclaves and Plasma Sterilizers",
      "Operating Room Surgical Furniture & Lights",
      "Sterile Clinical Supplies and Personal Protective Gear"
    ]
  }
];

export function getServiceBySlug(slug: string, lang: 'ro' | 'en'): ServiceClusterItem | undefined {
  if (lang === 'ro') {
    return servicesList.find((s) => s.slugRo === slug || s.id === slug);
  }
  return servicesList.find((s) => s.slugEn === slug || s.id === slug);
}

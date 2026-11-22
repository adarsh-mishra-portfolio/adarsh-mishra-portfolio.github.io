import { getAssetUrl } from '../utils/asset';

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  period: string;
  isCurrent: boolean;
  type: string;
  location?: string;
  description: string;
  responsibilities: string[];
  keyTags: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  gradeType: string;
  description?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
  category: 'documentation' | 'operations' | 'compliance' | 'finance';
}

export interface SkillItem {
  name: string;
  category: 'core' | 'technical' | 'management';
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  level: string;
}

export const PERSONAL_INFO = {
  name: 'ADARSH MISHRA',
  title: 'EXPORT & IMPORT EXECUTIVE',
  heroIntro:
    'Experienced Export & Import Executive with experience in international shipping, logistics, export documentation, import operations, customs clearance and global trade coordination.',
  professionalSummary:
    'Experienced Executive in the Export-Import industry with expertise in international shipping, logistics, and global trade. Dedicated to optimizing cross-border operations, leveraging a strong background in global supply chains, shipping lines, and export procedures.',
  phone: '9695142996',
  displayPhone: '+91 96951 42996',
  email: 'adarshmishra8524@gmail.com',
  whatsappUrl:
    'https://wa.me/919695142996?text=Hi%20Adarsh,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20export/import%20inquiry.',
  linkedinUrl: 'https://www.linkedin.com/in/adarsh-mishra-795594310',
  portfolioUrl: 'https://adarsh-mishra-portfolio.github.io/',
  cvPath: getAssetUrl('assets/Adarsh-Mishra-CV.pdf'),
  cvFileName: 'Adarsh-Mishra-CV.pdf',
  cvWordPath: getAssetUrl('assets/Adarsh-Mishra-CV.docx'),
  cvWordFileName: 'Adarsh-Mishra-CV.docx',
  cvPdfPath: getAssetUrl('assets/Adarsh-Mishra-CV.pdf'),
  cvPdfFileName: 'Adarsh-Mishra-CV.pdf',
  location: 'Gujarat / Uttar Pradesh, India',
};

export const CORE_PILLARS = [
  {
    title: 'International Shipping',
    desc: 'End-to-end execution of global multi-modal ocean and air containerized cargo.',
    icon: 'ship',
  },
  {
    title: 'Logistics Management',
    desc: 'Routing optimization, transporter dispatch, yard coordination, and freight control.',
    icon: 'route',
  },
  {
    title: 'Global Trade',
    desc: 'International trade execution aligned with cross-border trade guidelines and contracts.',
    icon: 'globe',
  },
  {
    title: 'Cross-border Operations',
    desc: 'Seamless clearance, border compliance, transit safety, and port movement.',
    icon: 'border',
  },
  {
    title: 'Supply Chain Coordination',
    desc: 'Syncing suppliers, forwarders, CHA agents, warehouse teams, and banking channels.',
    icon: 'chain',
  },
  {
    title: 'Export and Import Procedures',
    desc: 'Flawless compliance with DGFT guidelines, customs tariffs, and RBI trade regulations.',
    icon: 'procedure',
  },
];

export const LOGISTICS_MODES = [
  {
    mode: 'Ocean Freight (Maritime)',
    badge: 'Core Cargo Transit',
    description:
      'Handling Full Container Load (FCL) and Less than Container Load (LCL) bookings, Bill of Lading (BL), shipping line coordination, port terminal operations, demurrage and detention management.',
    icon: 'ship',
    image: getAssetUrl('assets/images/cargo-ship.jpg'),
    highlights: ['Bill of Lading (BL)', 'Container Demurrage Control', 'Port Gate-in Tracking', 'Ocean Carrier Contracts'],
  },
  {
    mode: 'Air Cargo Freight',
    badge: 'Express & Critical',
    description:
      'Managing Air Waybills (AWB), expedited customs clearance, airline ground handler sync, high-priority cargo movement, and time-critical trade consignments.',
    icon: 'plane',
    image: getAssetUrl('assets/images/cargo-plane.jpg'),
    highlights: ['Air Waybill (AWB)', 'Expedited Customs Clearance', 'Priority Freight Routing', 'IATA Cargo Compliance'],
  },
  {
    mode: 'Intermodal Rail & Road',
    badge: 'Hinterland Logistics',
    description:
      'Coordinating inland container depot (ICD) rail wagons, road container trailers, domestic transporter negotiations, and dry port transfer to seaport terminals.',
    icon: 'train',
    image: getAssetUrl('assets/images/freight-train.jpg'),
    highlights: ['ICD Rail Transit', 'Container Trailer Dispatch', 'Transporter Negotiation', 'Warehouse Delivery Routing'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'neptune',
    role: 'Import Executive',
    company: 'Neptune Petrochemicals Private Limited',
    duration: 'October 2025 – Present',
    period: 'Current Role',
    isCurrent: true,
    type: 'Full-time | Petrochemicals & Raw Materials',
    description:
      'Directing import documentation, customs clearance, port operations, banking reconciliations, and freight negotiations for petrochemical raw material consignments.',
    responsibilities: [
      'Complete import documentation including BOE, Invoice, Packing List, BL/AWB and COO.',
      'Coordination with CHA, freight forwarders, shipping lines, transporters and suppliers.',
      'Shipment tracking and customs clearance.',
      'Detention, demurrage and port-related activities.',
      'Duty calculations, freight invoices and shipping charges verification.',
      'IDPMS/BOE closure coordination with banks.',
      'Import planning and shipment schedules.',
      'Original documents and payment-related follow-ups.',
      'Import records, shipment status and costing sheets.',
      'Coordination with warehouse and accounts departments.',
      'DGFT, Customs and RBI compliance.',
      'Freight and logistics charge negotiation.',
    ],
    keyTags: ['BOE Documentation', 'IDPMS Bank Closure', 'Customs Clearance', 'Demurrage Control', 'CHA Coordination', 'DGFT & RBI Compliance'],
  },
  {
    id: 'asian-granito',
    role: 'Export Executive',
    company: 'Asian Granito India Pvt Ltd',
    duration: 'July 2024 – October 2025',
    period: '1 Year 4 Months',
    isCurrent: false,
    type: 'Full-time | Building Materials & Ceramic Exports',
    description:
      'Executed export documentation, international carrier scheduling, discrepancy resolution, and freight forwarder coordination for overseas clients.',
    responsibilities: [
      'Export documentation and compliance.',
      'Freight forwarder and shipping agent coordination.',
      'Shipment scheduling and tracking.',
      'Carrier coordination.',
      'Shipment discrepancy resolution.',
      'International export documentation.',
    ],
    keyTags: ['Export Documentation', 'Shipping Agent Coordination', 'Carrier Optimization', 'Discrepancy Resolution', 'International Compliance'],
  },
  {
    id: 'vcare',
    role: 'Export-import Executive',
    company: 'V Care Group Of Company',
    duration: 'February 2023 – July 2024',
    period: '1 Year 6 Months',
    isCurrent: false,
    type: 'Full-time | International Logistics & Compliance',
    description:
      'Supervised day-to-day logistics operations, delivery routings, customer complaint mitigation, and export-import documentation process enhancements.',
    responsibilities: [
      'Daily logistics operations and delivery routing.',
      'Customer complaint resolution related to export documentation.',
      'Export-import documentation process improvement.',
      'Delay, lost shipment and damaged goods issue resolution.',
      'Carrier coordination.',
      'Import/export compliance and customs clearance.',
    ],
    keyTags: ['Logistics Operations', 'Delivery Routing', 'Process Improvement', 'Dispute Resolution', 'Customs Compliance'],
  },
];

export const CORE_EXPERTISE: ExpertiseItem[] = [
  {
    id: 'export-docs',
    title: 'Export Documentation',
    description:
      'Preparation and verification of commercial invoices, packing lists, shipping bills, certificates of origin (COO), and export declarations.',
    iconName: 'file-text',
    deliverables: ['Commercial Invoices & Packing Lists', 'Shipping Bills & Declarations', 'Certificate of Origin (COO)', 'Export Letter of Credit (LC) Compliance'],
    category: 'documentation',
  },
  {
    id: 'import-docs',
    title: 'Import Documentation',
    description:
      'End-to-end execution of Bill of Entry (BOE), Bill of Lading (BL), Air Waybill (AWB), import invoices, and customs valuation documents.',
    iconName: 'file-check',
    deliverables: ['Bill of Entry (BOE) Preparation', 'BL & AWB Verification', 'Import Costing Sheets', 'Port Clearance Documentation'],
    category: 'documentation',
  },
  {
    id: 'logistics-mgmt',
    title: 'Logistics Management',
    description:
      'Multi-modal freight planning across ocean, air, rail, and road. Coordinating delivery routing, warehousing, and hinterland transportation.',
    iconName: 'truck',
    deliverables: ['Multi-modal Routing Optimization', 'Warehouse Cargo Movement', 'Transporter Dispatch Schedules', 'Intermodal Container Movement'],
    category: 'operations',
  },
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    description:
      'Harmonized System (HS) code classification, duty calculations, customs tariff verification, and liaising with Custom House Agents (CHA).',
    iconName: 'shield',
    deliverables: ['Customs Duty Calculations', 'Liaison with CHA Agents', 'HS Code Tariff Verification', 'Assessment & Inspection Clearance'],
    category: 'compliance',
  },
  {
    id: 'freight-negotiation',
    title: 'Freight Negotiation',
    description:
      'Procuring competitive ocean and air freight rates, negotiating detention and demurrage terms, and verifying shipping liner invoices.',
    iconName: 'dollar-sign',
    deliverables: ['Carrier & Liner Freight Bidding', 'Demurrage & Detention Terms', 'Freight Invoice Auditing', 'Transporter Rate Contracts'],
    category: 'finance',
  },
  {
    id: 'shipment-tracking',
    title: 'Shipment Tracking',
    description:
      'Real-time vessel and container monitoring, tracking milestone progress from port gate-in, vessel departure, transshipment, to final discharge.',
    iconName: 'navigation',
    deliverables: ['Vessel & Container Live Tracking', 'ETA Projections & Delay Alerts', 'Gate-in & Port Status Audits', 'Stakeholder Real-time Updates'],
    category: 'operations',
  },
  {
    id: 'boe-idpms',
    title: 'BOE / IDPMS Coordination',
    description:
      'Managing import payments, bank bill closures on the Import Data Processing and Monitoring System (IDPMS), and RBI trade compliance.',
    iconName: 'building-bank',
    deliverables: ['IDPMS Bank Portal Reconciliations', 'BOE Knock-off with Authorised Dealers', 'RBI & FEMA Trade Compliance', 'Original Document Follow-ups'],
    category: 'finance',
  },
  {
    id: 'international-shipping',
    title: 'International Shipping',
    description:
      'Expert coordination with international shipping lines, freight forwarders, container depots, and adherence to Incoterms 2020 standards.',
    iconName: 'globe',
    deliverables: ['Incoterms (FOB, CIF, CFR, EXW, DAP)', 'FCL & LCL Cargo Handling', 'Container Port Terminal Operations', 'Cross-border Regulatory Alignment'],
    category: 'operations',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'ba',
    degree: 'B.A Graduate',
    institution: 'Raja Harpal Singh Mahavidyalaya, Uttar Pradesh',
    duration: 'April 2021 – April 2024',
    grade: '8.6 / 10.0',
    gradeType: 'CGPA',
    description: 'Bachelor of Arts degree with academic excellence and analytical curriculum.',
  },
  {
    id: '12th',
    degree: '12th H.S.C',
    institution: 'Raja Harpal Singh, Uttar Pradesh',
    duration: 'April 2019 – April 2021',
    grade: '08 / 10',
    gradeType: 'GPA',
    description: 'Higher Secondary Certificate with focus on commerce, communication, and discipline.',
  },
  {
    id: '10th',
    degree: '10th H.S.C',
    institution: 'Raja Harpal Singh Mahavidyalaya, Uttar Pradesh',
    duration: 'March 2017 – May 2018',
    grade: '7 / 10',
    gradeType: 'GPA',
    description: 'Secondary School Certificate foundational education.',
  },
];

export const SKILLS: SkillItem[] = [
  { name: 'Export Documentation', category: 'core' },
  { name: 'Logistics Management', category: 'core' },
  { name: 'Customs Clearance', category: 'core' },
  { name: 'Import/Export Documentation', category: 'core' },
  { name: 'Problem Solving', category: 'management' },
  { name: 'Freight Negotiation', category: 'technical' },
  { name: 'Communication Skills', category: 'management' },
  { name: 'MS Office / ERP', category: 'technical' },
];

export const COMPLIANCE_FRAMEWORKS = [
  'DGFT Foreign Trade Policy (FTP)',
  'Indian Customs Act & Tariffs',
  'RBI Trade Credit & FEMA Guidelines',
  'IDPMS & EDPMS Bank Portals',
  'Incoterms® 2020 (CIF, FOB, CFR, EXW)',
  'Port Demurrage & Free-time Protocols',
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'Hindi', proficiency: 'Native', level: '100%' },
  { name: 'English', proficiency: 'Native', level: '100%' },
  { name: 'Gujarati', proficiency: 'Beginner', level: '40%' },
];

export const TRADE_LIFECYCLE_STEPS = [
  {
    step: '01',
    title: 'Order & Shipping Planning',
    desc: 'Reviewing purchase orders, proforma invoices, Incoterms, and booking container space with carriers or airlines.',
  },
  {
    step: '02',
    title: 'Export Documentation & Dispatch',
    desc: 'Generating Packing List, Commercial Invoice, COO, Shipping Bill, and arranging cargo stuffing into containers.',
  },
  {
    step: '03',
    title: 'Customs Assessment & Port Operations',
    desc: 'Liaising with CHA for assessment, duty calculation, cargo inspection, and obtaining Let Export Order (LEO).',
  },
  {
    step: '04',
    title: 'Transit Tracking & Demurrage Control',
    desc: 'Tracking BL/AWB milestones across international waters or air routes while monitoring free-time periods.',
  },
  {
    step: '05',
    title: 'Import Clearance & Port Gate-out',
    desc: 'Filing Bill of Entry (BOE), payment of customs duty, container delivery order (DO), and dispatch to factory/warehouse.',
  },
  {
    step: '06',
    title: 'Banking & IDPMS/EDPMS Closure',
    desc: 'Coordinating original shipping documents with Authorized Dealer banks and closing BOE entries in the IDPMS portal.',
  },
];

import { ServiceItem, IndustryItem, TestimonialItem, LiveTelemetryNode } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApXy-24CH17QVFCAP583FGuWE0y-IdpQpgE-WKPZxuKr00SvyMBc-CSovl6WT8b_oTAynGddts2h12Dhl4P3vQRAy7Hybq8tQwDxGCz1XbKlICoHwoPDGBtofbadMOH-JlLUs0_IIb9UqzlMXcxlnlSMy3dvBzCmQQwpVOP2dTvJn3DoiPwzVvWrxI95SFjHEhUqe9PenpbTWu4u89976kqeMDyrT-7-Xu42CGke84ErDgWc963Azu',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhNKdGPK6K4VvW5rL6eaqpWX6JWroxJqg2cKDQ6HfNaTJEGVSYS-PfZ6Hrjc7H3T6AiuWTyIwfrFWlgW1Yg3A49qrsT754kPfp0X5M6cJKvolO5kczkZMQtc4Bp1jqQk0Xzq6Gdsj9OMnvWkb8MV1IFSR7A2XNEL9_cpTPasMrcZBCt30KUt8uarKkzMtpnqkNugcp5ShBO0QG74sO4scT6GcO2mavLwVx06yymTTqtwgKCJe7XZKR',
  executiveReception: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcuhlj_HNv9Ni59crh9b03FuA3q4r8nBs41buLnEnHxscyy-q8LO9PtuGbe7iqcGBk-V1sKLw3MGBfDy6p3DFUpm_4uCjwaROMEox4Tcj-RmaiZ6t5442Wv4LgB06TO4EtfE4Fgc1Q5MswSOyDev4G2CoVgWCvvbNam58mWPKaqifO32CehQoo0H5inEunbCpsjeGzESa-8kXuN9myxOv8HhHwuwu7IT61Vj8IZ1Oua1iyeteY8WdT'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'customer-support',
    number: '01',
    category: 'Omnichannel Care',
    title: 'Customer Support',
    eyebrow: 'Enterprise Support Ops',
    badge: '24/7/365 Tier 1-3',
    desc: 'Omnichannel front-line customer advocacy covering voice, real-time chat, email, and social escalation. Our teams undergo rigorous client-brand immersion to act as an indistinguishable extension of your premium reputation.',
    features: [
      'VIP & High-Value Escalation Queues',
      'Integrated Multi-Language Retention Desks',
      'Real-Time Sentiment Monitoring & AI Assist',
      'FCR-Centric Compensation Structures'
    ],
    metrics: [
      { label: 'Target CSAT', val: '96.8%' },
      { label: 'Avg Speed Answer', val: '< 38 Sec' },
      { label: 'QA Floor', val: '99.4%' }
    ]
  },
  {
    id: 'data-management',
    number: '02',
    category: 'Intelligence',
    title: 'Data Management',
    eyebrow: 'Data Governance & AI',
    badge: 'Master Data Protocol',
    desc: 'High-precision data wrangling, OCR transcript validation, catalog enrichment, and model training dataset labeling. We enforce multi-layer verification loops to maintain total taxonomy accuracy.',
    features: [
      'Catalog Normalization & Metadata Tagging',
      'High-Speed Multimodal AI Annotation',
      'Master Data Cleansing & Deduplication',
      'Strict Jurisdictional PII Masking'
    ],
    metrics: [
      { label: 'Data Fidelity', val: '99.94%' },
      { label: 'Monthly Records', val: '14M+' },
      { label: 'PII Leakage', val: '0.00%' }
    ]
  },
  {
    id: 'finance-accounting',
    number: '03',
    category: 'Fiduciary Operations',
    title: 'Finance & Accounting',
    eyebrow: 'Fiduciary Operations',
    badge: 'GAAP & IFRS Compliant',
    desc: 'Comprehensive accounting back-office services supervised by certified chartered accountants. Covering end-to-end accounts payable, accounts receivable reconciliation, and month-end ledger closing support.',
    features: [
      'Multi-Currency AP/AR Matching & Dispute Desk',
      'Bank, Payment Gateway & Subledger Reconciliation',
      'Payroll Audit & Multi-Country Disbursement',
      'Pre-Audit Workpaper Preparation & Support'
    ],
    metrics: [
      { label: 'Reconciliation Rate', val: '99.9%' },
      { label: 'Days Sales Out', val: '-14 Days' },
      { label: 'Audit Readiness', val: '100%' }
    ]
  },
  {
    id: 'hr-outsourcing',
    number: '04',
    category: 'Human Capital',
    title: 'HR Outsourcing',
    eyebrow: 'Human Capital Advisory',
    badge: 'Global Mobility Hub',
    desc: 'Modern talent operations scaled across borders. We manage candidate sourcing pipelines, background vetting, international onboarding compliance, and benefits administration with flawless discretion.',
    features: [
      'Global Candidate Screening & Vetting',
      'Onboarding & Offboarding Lifecycle Execution',
      'Cross-Border Benefits & Healthcare Admin',
      'Centralized HRIS Maintenance & Record QA'
    ],
    metrics: [
      { label: 'Time-to-Hire', val: '18 Days' },
      { label: 'Offer Acceptance', val: '91.2%' },
      { label: 'Retention Rate', val: '94.6%' }
    ]
  },
  {
    id: 'back-office-processing',
    number: '05',
    category: 'Back-Office Engine',
    title: 'Back-Office Processing',
    eyebrow: 'Operations Engine',
    badge: 'High-Throughput SLAs',
    desc: 'Industrial-grade operational pipelines for high-volume transactions. From insurance claims verification and loan doc indexing to enterprise order orchestration and logistics monitoring.',
    features: [
      'Insurance Claims Review & Pre-Adjudication',
      'Underwriting Dossier Assembly & Cross-Check',
      'Order Fulfillment & Supply Chain Exceptions',
      'Digital Vaulting & Regulatory Retention'
    ],
    metrics: [
      { label: 'Processing SLA', val: '99.8%' },
      { label: 'Error Variance', val: '< 0.02%' },
      { label: 'Throughput Surge', val: '4x Scale' }
    ]
  },
  {
    id: 'compliance-qa',
    number: '06',
    category: 'Governance',
    title: 'Compliance & QA',
    eyebrow: 'Regulatory Assurance',
    badge: 'Zero Failure Standard',
    desc: 'Independent quality monitoring and forensic screening. Our team enforces rigorous call listening, transaction spot-auditing, and regulatory AML verification to protect enterprise brand standing.',
    features: [
      'Continuous Call & Chat Quality Scoring',
      'Sanctions List & PEP Real-Time Screening',
      'Adherence Drift Alerts & Agent Coaching',
      'Executive Quality Committee Reporting'
    ],
    metrics: [
      { label: 'QA Sample Rate', val: '10.0%' },
      { label: 'False Positives', val: '-42%' },
      { label: 'Audit Score', val: '99.7%' }
    ]
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'financial-services',
    sector: 'Banking & Asset Management',
    title: 'Fiduciary back-office and customer compliance operations.',
    desc: 'Serving global investment funds, asset custodians, and retail banking networks. We support end-to-end mortgage underwriting documentation, anti-money laundering transaction reviews, and secure high-net-worth customer resolution.',
    bullets: [
      'SOC 2 Type II & ISO 27001',
      'PCI-DSS Level 1 Workstations',
      'KYC/AML Batch Review Specialists',
      'Complete Clean-Desk Protocols'
    ],
    stat1: '4.2M+',
    stat1Text: 'Annual KYC and payment verifications adjudicated with zero security incidents.',
    stat2: '-64%',
    stat2Text: 'Reduction in document exception turnaround times for Tier-1 mortgage lender.'
  },
  {
    id: 'it-saas',
    sector: 'Information Technology & Enterprise SaaS',
    title: 'Technical support escalation and developer advocacy desks.',
    desc: 'Embedding certified technical agents who troubleshoot REST APIs, triage Jira escalations, and manage enterprise client onboarding for enterprise software leaders.',
    bullets: [
      'Level 2 & 3 Technical Desks',
      'Git & API Log Diagnostic Fluency',
      '24/7 Follow-the-Sun Rotations',
      'Integration Sandbox Testing'
    ],
    stat1: '92%',
    stat1Text: 'Resolution of Tier-2 developer tickets without domestic engineering intervention.',
    stat2: '32 Min',
    stat2Text: 'Median enterprise critical ticket time-to-mitigation.'
  },
  {
    id: 'fintech-web3',
    sector: 'FinTech & Digital Payments',
    title: 'High-velocity fraud mitigation and onboarding pipelines.',
    desc: 'Supporting digital challenger banks and merchant acquirers. Handling dispute chargebacks, identity document forensic verification, and customer tier-1 retention at extreme scale.',
    bullets: [
      'Chargeback & Dispute Arbitration',
      'Biometric ID Match Reviews',
      'Instant Chat Escalation Coverage',
      'Fraud Ring Telemetry Logging'
    ],
    stat1: '18M+',
    stat1Text: 'Annual transactions monitored with continuous machine-learning feedback loops.',
    stat2: '-38%',
    stat2Text: 'Reduction in merchant onboarding drop-off rates.'
  },
  {
    id: 'retail-ecommerce',
    sector: 'Retail & Consumer Omnichannel',
    title: 'Brand-elevating customer advocacy and order exception desk.',
    desc: 'Empowering global luxury fashion and e-commerce leaders with multilingual care agents trained in empathetic customer de-escalation, VIP concierge, and logistics tracking.',
    bullets: [
      'Seasonal Capacity Elasticity (+300%)',
      'Omnichannel Social & WhatsApp Desks',
      'Carrier Exception Resolution',
      'Returns & Refund Adjudication'
    ],
    stat1: '97.4%',
    stat1Text: 'Peak holiday season CSAT score across 1.8M customer interactions.',
    stat2: '< 25s',
    stat2Text: 'Live chat initial response time during Black Friday peaks.'
  },
  {
    id: 'aviation-travel',
    sector: 'Aviation, Travel & Hospitality',
    title: 'Time-critical booking re-accommodation and guest care.',
    desc: 'Navigating flight disruptions, re-ticketing complexities, and hospitality loyalty management with 24/7 rapid response teams equipped with global GDS proficiencies.',
    bullets: [
      'Amadeus & Sabre Certified',
      'Weather Irregular Ops Management',
      'Loyalty Tier Concierge Services',
      'Multilingual Flight Desks'
    ],
    stat1: '100%',
    stat1Text: 'SLA compliance maintained during global flight disruption events.',
    stat2: '4.8 / 5',
    stat2Text: 'Executive loyalty member sentiment score.'
  },
  {
    id: 'telecom',
    sector: 'Telecommunications & Infrastructure',
    title: 'High-volume billing reconciliation and field technician dispatch.',
    desc: 'Managing subscriber contract activations, cross-border roaming queries, and technical network dispatch coordination across millions of residential and enterprise connections.',
    bullets: [
      'Fiber & 5G Service Dispatch',
      'Complex Billing Resolution',
      'Subscriber Churn Prevention',
      'SIM & eSIM Activation Workflows'
    ],
    stat1: '2.1M+',
    stat1Text: 'Subscribers supported across national carriers.',
    stat2: '+19%',
    stat2Text: 'Improvement in first-call resolution for complex enterprise accounts.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'Odilia Global did not merely absorb our customer tier-1 and tier-2 tickets; they fundamentally elevated our net promoter score across EMEA within 90 days.',
    author: 'VP of Customer Operations',
    company: 'Tier-1 European FinTech Unicorn ($4B Valuation)'
  },
  {
    quote: 'The operational discipline in their finance and accounting division matches the rigor of a Big Four firm with the responsiveness of an in-house controller.',
    author: 'Chief Financial Officer',
    company: 'Global Enterprise SaaS Platform (NASDAQ Listed)'
  },
  {
    quote: 'Their NDA-first culture and ISO-certified infrastructure gave our board complete confidence to outsource critical back-office document processing.',
    author: 'Chief Operating Officer',
    company: 'International Freight & Logistics Corporation'
  }
];

export const TELEMETRY_NODES: LiveTelemetryNode[] = [
  {
    city: 'London',
    country: 'United Kingdom',
    tz: 'GMT+1',
    time: '10:34 AM',
    status: 'OPTIMAL',
    activeAnalysts: 142,
    slaAdherence: 99.85,
    avgHandlingTime: '4m 12s',
    activeTickets: 284
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    tz: 'SGT',
    time: '05:34 PM',
    status: 'OPTIMAL',
    activeAnalysts: 198,
    slaAdherence: 99.92,
    avgHandlingTime: '3m 48s',
    activeTickets: 412
  },
  {
    city: 'Manila',
    country: 'Philippines',
    tz: 'PHT',
    time: '05:34 PM',
    status: 'OPTIMAL',
    activeAnalysts: 360,
    slaAdherence: 99.78,
    avgHandlingTime: '3m 35s',
    activeTickets: 680
  },
  {
    city: 'New York',
    country: 'United States',
    tz: 'EDT',
    time: '05:34 AM',
    status: 'NOMINAL',
    activeAnalysts: 95,
    slaAdherence: 99.81,
    avgHandlingTime: '4m 05s',
    activeTickets: 172
  }
];

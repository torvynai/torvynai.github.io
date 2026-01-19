export type ProductStatus = 'live' | 'coming-soon' | 'beta';

export type ProductInfo = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon?: string;
  status: ProductStatus;
  problemStatement: string;
  outcomes: string[];
  metrics?: {
    label: string;
    value: string;
    icon?: string;
  }[];
};

export type Product = ProductInfo & {
  features: string[];
};

const appConfig = {
  companyName: 'Torvyn AI',
  productName: 'Torvyn AI',
  logoPath: '/assets/logo.png',
  contactEmail: 'torvynai@gmail.com',
  phone: '+91-9027167486',
  websiteUrl: 'https://www.torvynai.com',
  tagline: 'Transform Financial Operations with AI-Powered Automation',
  description: 'Deep-tech AI solutions for financial automation, built by team of IITians',

  products: [
    {
      slug: 'balance-sheet-assurance',
      name: 'Balance Sheet Assurance',
      tagline: 'AI-powered platform for GL account reviews and month-end close',
      description: 'A comprehensive solution that transforms how finance teams manage General Ledger account reviews through intelligent task management, AI-powered insights, and structured Maker-Checker-CFO workflows with complete audit trails.',
      problemStatement: 'Finance teams face manual GL reviews using spreadsheets, limited visibility, incomplete audit trails, and extended close cycles creating compliance risk',
      url: 'https://balance-sheet-assurance.torvynai.com',
      icon: 'balance',
      status: 'live' as ProductStatus,
      outcomes: [
        'Reduce close cycle time through automated task generation and workflows',
        'AI-powered variance analysis identifies high-risk items requiring attention',
        'Complete audit trail with centralized document management',
        'Real-time dashboards showing review progress and bottlenecks',
        'Executive AI chatbot for instant CFO queries on review status'
      ],
      metrics: [
        { label: 'Time Saved', value: '80%', icon: 'clock' },
        { label: 'Error Reduction', value: '95%+', icon: 'check' },
        { label: 'Audit Ready', value: '100%', icon: 'shield' }
      ],
      features: [
        'Intelligent Task Management - Automatic generation and smart assignment',
        'AI-Powered Insights - Variance analysis, risk identification, key findings',
        'Maker-Checker-CFO Workflow - Structured approval hierarchy with accountability',
        'SAP Integration - Automated data extraction for enhanced AI analysis',
        'Smart Email Notifications - AI-enriched emails with variance analysis and recommendations',
        'Executive AI Dashboard - Visual analytics and conversational chatbot for CFO',
        'Document Management - Centralized storage with version tracking',
        'Adaptive Change Management - Auto re-analysis when GL data changes post-audit',
        'Complete Audit Trail - Full tracking of all reviews, approvals, and changes',
        'Zero-Touch User Registration - Automatic user setup from master data'
      ],
    },
    {
      slug: 'ai-tax-compliance',
      name: 'AI Tax Compliance',
      tagline: 'The future of automated, intelligent tax filing',
      description: 'A specialized AI agent designed to automate tax data extraction, validation, and reporting in compliance with the latest digital tax regulations.',
      problemStatement: 'Tax compliance is complex, error-prone, and requires constant updates to regulatory changes',
      url: 'https://tax-compliance.torvynai.com',
      icon: 'tax',
      status: 'coming-soon' as ProductStatus,
      outcomes: [
        'Eliminate 99% of tax filing errors',
        'Automate data extraction from multiple sources',
        'Stay compliant with real-time regulatory updates',
        'Reduce tax preparation time by 85%'
      ],
      metrics: [
        { label: 'Error Reduction', value: '99%', icon: 'shield' },
        { label: 'Time Saved', value: '85%', icon: 'clock' },
        { label: 'Compliance Rate', value: '100%', icon: 'check' }
      ],
      features: [
        'Automated Data Extraction',
        'Real-time Validation',
        'Compliance Reporting',
        'Regulatory Updates',
        'Multi-jurisdiction Support',
        'Audit Documentation'
      ],
    }
  ] as Product[],

  // Company values
  values: [
    {
      title: 'Security First',
      description: 'On-premise deployment ensures your data never leaves your infrastructure',
      icon: 'shield'
    },
    {
      title: 'AI Expertise',
      description: 'Built by team of IITians with deep expertise in AI and finance',
      icon: 'brain'
    },
    {
      title: 'ERP Integration',
      description: 'Seamless connectors for SAP, Oracle, and other major ERP systems',
      icon: 'link'
    },
    {
      title: 'Explainable AI',
      description: 'Human-in-the-loop design with transparent, auditable decision-making',
      icon: 'users'
    }
  ],

  // Trust metrics
  metrics: [
    { label: 'Error Reduction', value: '95%+' },
    { label: 'Time Saved', value: '80%' },
    { label: 'Cost Reduction', value: '70%' },
    { label: 'Uptime', value: '99.9%' }
  ],

  // Services can be re-introduced on the company website later if needed.
  services: [],
};

export default appConfig;


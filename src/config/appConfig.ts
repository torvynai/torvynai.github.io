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

export type Service = Product;

const appConfig = {
  companyName: 'Torvyn AI',
  productName: 'Torvyn AI',
  logoPath: '/assets/logo.png',
  contactEmail: 'torvynai@gmail.com',
  phone: '+91-9027167486',
  websiteUrl: 'https://www.torvynai.com',
  tagline: 'ERP-first AI maker assistant for controlled financial close',
  description: 'Built in India for enterprise finance teams that need faster close execution with maker-checker-CFO control.',

  products: [
    {
      slug: 'agentic-erp-reconciliation',
      name: 'Agentic ERP Reconciliation',
      tagline: 'AI-powered 3-way matching and automated journal entries',
      description: 'A comprehensive solution that plugs straight into Tally & SAP. Our AI autonomous agent verifies GST against government portals, matches bank statement feeds, and prepares precise journal entries with Maker-Checker-CFO governance.',
      problemStatement: 'Finance teams waste weeks manually matching bank statements and chasing vendor GST discrepancies, leading to lost Input Tax Credit (ITC) and delayed month-end closes.',
      url: 'https://app.torvynai.com',
      icon: 'balance',
      status: 'live' as ProductStatus,
      outcomes: [
        'Close books in days rather than weeks with zero-touch ERP posting',
        'Stop losing Input Tax Credit (ITC) by automatically fetching 2A/2B GSTN data',
        'Clear massive transaction backlogs via live Bank Feed integrations',
        'Ensure 100% RBI & SOX compliance using strict Glass Box governance',
        'Executive CFO Dashboard with conversational AI for real-time risk analysis'
      ],
      metrics: [
        { label: 'Supported Close Speedup', value: '50-60%', icon: 'clock' },
        { label: 'Manual Maker Effort Cut', value: 'Up to 95%', icon: 'check' },
        { label: 'Approval Control', value: 'Maker → Checker → CFO', icon: 'shield' }
      ],
      features: [
        'Live GSTN & Bank Verification APIs: Direct Government/Bank portal pings',
        'Autonomous AI Agent: Matches PO vs GRN vs Invoice instantly',
        'Maker-Checker-CFO Workflow: Strict Indian RBI compliant approval hierarchy',
        'Direct SAP/Tally Connectors: Push journal entries without manual data entry',
        'Glass Box Transparency: Full visibility into how the AI reached its conclusion',
        'Multi-Tenant SaaS Isolation: Schema-per-tenant architecture for maximum security',
        'Centralized Audit Trails: Permanent records of all document evidence and approvals'
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
      title: 'Enterprise Security',
      description: 'Enterprise security posture with workflow control, audit visibility, and implementation discipline.',
      icon: 'shield'
    },
    {
      title: 'AI Expertise',
      description: 'Built by a team with AI depth and strong conviction around Indian enterprise finance workflows.',
      icon: 'brain'
    },
    {
      title: 'Zero-Touch ERP Integration',
      description: 'ERP-first product direction with SAP, Tally, and close-system integration as the primary operating model.',
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
    { label: 'Supported Close Speedup', value: 'Up to 60%' },
    { label: 'Less Manual Maker Work', value: 'Up to 95%' },
    { label: 'Faster Review Packaging', value: 'Up to 40%' },
    // { label: 'Cost Reduction', value: '40%' }
  ],

  // Services can be re-introduced on the company website later if needed.
  services: [] as Service[],
};

export default appConfig;

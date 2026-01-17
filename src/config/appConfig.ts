export type ProductInfo = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  icon?: string;
};

const appConfig = {
  companyName: 'Torvyn AI',
  productName: 'Torvyn AI',
  logoPath: '/src/assets/logo.png',
  contactEmail: 'torvynai@gmail.com',
  phone: '+91-9027167486',
  websiteUrl: 'https://www.torvynai.com',
  products: [
    {
      slug: 'balance-sheet-assurance',
      name: 'Balance Sheet Assurance',
      tagline: 'AI-powered continuous assurance for your general ledger.',
      description: 'An autonomous AI agent that automates GL review, reconciliation, and anomaly detection, ensuring an error-free and audit-ready financial close.',
      url: 'https://balance-sheet-assurance.torvynai.com', // Placeholder URL
      icon: 'balance',
    },
    {
      slug: 'ai-tax-compliance',
      name: 'AI Tax Compliance',
      tagline: 'The future of automated, intelligent tax filing.',
      description: 'A specialized AI agent designed to automate tax data extraction, validation, and reporting in compliance with the latest digital tax regulations.',
      url: 'https://tax-compliance.torvynai.com', // Placeholder URL
      icon: 'tax',
    },
  ] as ProductInfo[],
  // Services can be re-introduced on the company website later if needed.
  services: [],
};

export default appConfig;

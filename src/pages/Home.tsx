import React, { useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import FeatureCard from '../components/FeatureCard'
import { Database, Repeat, Users, Activity, AlertCircle, FileText, Zap, Layers, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import appConfig from '../config/appConfig'

export default function Home(){
  useEffect(() => {
      document.title = 'Torvyn AI - The Ultimate Automation Provider'
  }, [])

  return (
    <div>
      {/* Hero Section - Premium */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/10 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.8}}>
            <div className="text-accent text-sm font-bold mb-3">AI-Powered Automation</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Financial Close Automation Reimagined</h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">Reduce close cycles from weeks to days. Eliminate manual work. Achieve audit-ready financials with intelligent automation and AI-driven insights.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-accent to-cyan-400 text-gray-900 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all">
                Request Demo <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="/product" className="inline-flex items-center justify-center px-7 py-3.5 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all">
                Explore Product
              </a>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.8}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-3xl"></div>
              <svg width="100%" height="400" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                <rect width="400" height="300" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
                <circle cx="100" cy="80" r="40" fill="rgba(0,204,255,0.2)" stroke="rgba(0,204,255,0.5)" strokeWidth="2"/>
                <circle cx="300" cy="180" r="50" fill="rgba(0,64,255,0.2)" stroke="rgba(0,64,255,0.5)" strokeWidth="2"/>
                <path d="M 50 150 Q 200 100 350 200" stroke="rgba(0,204,255,0.6)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                <text x="200" y="300" dominantBaseline="middle" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="12">Enterprise Workflow Automation</text>
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Value */}
        <section className="py-24">
          <SectionHeader title="What TFCA Delivers" subtitle="Enterprise-grade automation designed for finance leaders who demand precision, speed, and auditability." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<Database size={24} />} title="GL Automation" description="Automate general ledger reviews with intelligent rule-based and AI-assisted checks to eliminate manual reconciliation." />
            <FeatureCard icon={<Repeat size={24} />} title="BS Reconciliation" description="Automated balance sheet matching with variance explanations and reconciliation reporting for audit readiness." />
            <FeatureCard icon={<Users size={24} />} title="Workflow Orchestration" description="Configurable maker → reviewer → approver flows with complete audit trails and SLA-driven escalations." />
            <FeatureCard icon={<Activity size={24} />} title="Variance Analysis" description="Automatic variance detection with AI-powered contextual explanations for faster investigation cycles." />
            <FeatureCard icon={<AlertCircle size={24} />} title="Anomaly Detection" description="Intelligent pattern-based detection using historical data and adaptive thresholds to surface outliers." />
            <FeatureCard icon={<FileText size={24} />} title="Audit Trail" description="Comprehensive, exportable audit logs for every action with exportable documentation for auditors." />
            <FeatureCard icon={<Zap size={24} />} title="ERP Integration" description="Pre-built connectors for SAP, Oracle, Dynamics 365 with secure real-time data sync and mapping." />
            <FeatureCard icon={<Layers size={24} />} title="Multi-Tenant Platform" description="Enterprise-grade architecture with org-level controls, role-based access, and complete data isolation." />
          </div>
        </section>

        {/* How It Works - Timeline */}
        <section className="py-24 bg-gray-50 rounded-2xl px-8 md:px-12 my-12">
          <SectionHeader title="How TFCA Works" subtitle="Three simple steps to transform your close process." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{y:-8}} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                <div className="text-accent text-xs font-bold uppercase tracking-wide mb-3">Step 1</div>
                <h4 className="text-xl font-bold mb-3 text-secondary">Connect Your ERP</h4>
                <p className="text-gray-600 leading-relaxed">Securely integrate SAP, Oracle, or Dynamics 365 to ingest GL, sub-ledger, and metadata in real-time.</p>
                <div className="mt-4 text-accent font-semibold text-sm">5 min setup →</div>
              </div>
            </motion.div>
            <motion.div whileHover={{y:-8}} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                <div className="text-accent text-xs font-bold uppercase tracking-wide mb-3">Step 2</div>
                <h4 className="text-xl font-bold mb-3 text-secondary">Automate & Orchestrate</h4>
                <p className="text-gray-600 leading-relaxed">Create configurable workflows that run reconciliations, variance checks, and approvals automatically.</p>
                <div className="mt-4 text-accent font-semibold text-sm">Rule-based + AI →</div>
              </div>
            </motion.div>
            <motion.div whileHover={{y:-8}} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 h-full">
                <div className="text-accent text-xs font-bold uppercase tracking-wide mb-3">Step 3</div>
                <h4 className="text-xl font-bold mb-3 text-secondary">Approve with Confidence</h4>
                <p className="text-gray-600 leading-relaxed">CFOs and controllers get AI-powered explanations and prescriptive recommendations for faster sign-off.</p>
                <div className="mt-4 text-accent font-semibold text-sm">Dashboard + Insights →</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-24">
          <SectionHeader title="AI Capabilities" subtitle="Powered by reasoning models to deliver explainable, auditable intelligence." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-3">LLM-Powered Variance Explanation</h4>
              <p className="text-gray-700">Generate human-readable narratives for why variances occurred, with supporting transactions and context.</p>
            </motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-3">Intelligent Anomaly Detection</h4>
              <p className="text-gray-700">Adaptive models surface unusual trends and likely errors using historical patterns and configurable thresholds.</p>
            </motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-3">CFO Decision Recommendations</h4>
              <p className="text-gray-700">Prescriptive suggestions for accruals, cutoffs, and adjustments based on best practices and historical precedent.</p>
            </motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl border border-primary/20">
              <CheckCircle2 className="w-6 h-6 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-3">Document Reasoning & Audit Trail</h4>
              <p className="text-gray-700">Export reasoning, evidence, and decisions for regulatory compliance and auditor review in standardized formats.</p>
            </motion.div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-24 bg-secondary text-white rounded-2xl px-8 md:px-12 my-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Features</h2>
          <p className="text-gray-300 mb-8 max-w-3xl">Capabilities built for complex organizations, strict controls, and regulated environments.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Multi-Tenant Management</div>
                <div className="text-sm text-gray-400">Separate tenants with independent reporting and data isolation.</div>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Role-Based Access</div>
                <div className="text-sm text-gray-400">Admin, Reviewer, Approver, CFO with granular permissions.</div>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Real-Time Dashboards</div>
                <div className="text-sm text-gray-400">KPI tracking, close progress, exception heatmaps.</div>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">SLA-Driven Escalations</div>
                <div className="text-sm text-gray-400">Automatic alerts based on configurable thresholds.</div>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">BS Review Matrix</div>
                <div className="text-sm text-gray-400">Flexible review mappings with account-to-owner assignment.</div>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Automated Workflows</div>
                <div className="text-sm text-gray-400">Schedule or event-driven runs with notifications & logs.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-24">
          <SectionHeader title="Industries We Serve" subtitle="Proven expertise across capital-intensive, regulated sectors." />
          <div className="flex flex-wrap gap-3">
            {['Manufacturing', 'Energy & Utilities', 'Infrastructure', 'Retail & Consumer', 'Financial Services'].map((ind, i) => (
              <motion.div key={i} whileHover={{scale:1.05}}>
                <span className="inline-flex items-center px-5 py-2.5 bg-white border-2 border-primary text-primary rounded-lg font-semibold shadow-md hover:shadow-lg transition-all">{ind}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gray-50 rounded-2xl px-8 md:px-12 my-12">
          <SectionHeader title="Trusted by Finance Leaders" subtitle="Hear from teams that transformed their close process." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary">
              <div className="flex gap-1 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">"TFCA cut our close timeline by 45% and reduced manual errors by 70%. The AI explanations saved us hours every month."</p>
              <div className="font-semibold text-secondary">Finance Director, Global Manufacturing</div>
              <div className="text-sm text-gray-500">2500+ employees</div>
            </motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent">
              <div className="flex gap-1 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4 italic">"The variance analysis and automated workflows made audit season stress-free. Highly recommended for any large finance team."</p>
              <div className="font-semibold text-secondary">CFO, Energy Company</div>
              <div className="text-sm text-gray-500">5000+ employees</div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24">
          <SectionHeader title="Flexible Pricing for Every Organization" subtitle="From growing mid-market to large enterprises. Contact sales for custom packages." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{y:-8}} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-secondary mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">For growing teams automating core close processes.</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>Core GL & BS automation</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>Basic ERP integration</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>Email support</span></li>
              </ul>
              <a href="/contact" className="w-full inline-flex justify-center px-4 py-2.5 bg-gray-100 text-secondary rounded-lg font-semibold hover:bg-gray-200 transition">Contact Sales</a>
            </motion.div>
            <motion.div whileHover={{y:-8}} className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl shadow-lg border-2 border-primary relative">
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">POPULAR</div>
              <h3 className="text-xl font-bold text-secondary mb-2">Growth</h3>
              <p className="text-gray-600 mb-6">For mid-market enterprises with complex workflows.</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>Advanced automation & workflows</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>Multiple ERP integrations</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>Priority support</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>AI insights & analysis</span></li>
              </ul>
              <a href="/contact" className="w-full inline-flex justify-center px-4 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition">Contact Sales</a>
            </motion.div>
            <motion.div whileHover={{y:-8}} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-secondary mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For large SAP/Oracle firms with compliance needs.</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>Full platform + customization</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>Dedicated implementation</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>SOC 2 & compliance support</span></li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> <span>24/7 support + SLA</span></li>
              </ul>
              <a href="/contact" className="w-full inline-flex justify-center px-4 py-2.5 bg-gray-100 text-secondary rounded-lg font-semibold hover:bg-gray-200 transition">Contact Sales</a>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary to-accent rounded-2xl text-white text-center px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Close Process?</h2>
          <p className="text-xl text-gray-100 mb-8">See how Torvyn AI can reduce your close cycle and empower your finance team.</p>
          <a href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">
            Schedule Demo <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  )
}

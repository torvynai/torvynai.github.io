import React, { useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import { Cpu, Share2, ShieldCheck, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import appConfig from '../config/appConfig'

export default function Product(){
  useEffect(() => {
    document.title = 'Torvyn AI - The Ultimate Automation Provider'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-primary/10 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Torvyn Financial Close Automation (FCA)</h1>
          <p className="text-xl text-gray-200 max-w-3xl">An AI-powered enterprise platform built to streamline financial close processes, automate reconciliations, and provide explainable AI insights for finance leaders.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview & Workflow */}
        <section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}}>
              <h2 className="text-3xl font-bold mb-4 text-secondary">Platform Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">TFCA centralizes close activities, automates reconciliations, and provides explainable AI insights for finance teams. It integrates with major ERPs, supports complex review matrices, and creates audit-ready documentation automatically.</p>
              <p className="text-gray-700 leading-relaxed">Built from the ground up for enterprises managing thousands of accounts across multiple entities with strict compliance requirements.</p>
            </motion.div>
            <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}}>
              <h2 className="text-3xl font-bold mb-4 text-secondary">Workflow Orchestration</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Configurable workflows map account owners to reviewers and approvers, with SLA-driven escalations and notifications. The platform supports both scheduled and event-driven runs with full audit logging.</p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="text-sm font-mono text-primary">Maker → Reviewer → Approver → CFO Sign-off</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Balance Sheet Review Matrix */}
        <section className="py-24 bg-gray-50 rounded-2xl px-8 md:px-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Balance Sheet Review Matrix</h2>
          <p className="text-gray-700 mb-8 max-w-3xl">Map accounts, owners, and review rules to ensure consistent, auditable reviews across your organization.</p>
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-gray-600">The Balance Sheet Review Matrix allows finance teams to declare owners for each account, define review frequency, acceptance criteria, and automated checks. This ensures a consistent close across entities and reduces exceptions at consolidation.</div>
          </div>
        </section>

        {/* Integrations & AI */}
        <section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div whileHover={{y:-6}} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <Cpu className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-xl font-bold text-secondary mb-3">ERP Integration</h4>
              <p className="text-gray-700 leading-relaxed mb-4">Pre-built connectors for SAP, Oracle, and Dynamics 365 provide secure extracts of GL, sub-ledgers, and metadata. Mapping tools let you align chart-of-accounts and ledger structures with TFCA's reconciliation engine.</p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ Real-time data sync</li>
                <li>✓ Custom mapping tools</li>
                <li>✓ Secure connectors</li>
              </ul>
            </motion.div>
            <motion.div whileHover={{y:-6}} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <Share2 className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-xl font-bold text-secondary mb-3">AI Reasoning</h4>
              <p className="text-gray-700 leading-relaxed mb-4">When a variance is found, TFCA generates comprehensive explanations including root-cause hypotheses, supporting transactions, and recommended actions for the reviewer.</p>
              <ul className="text-sm space-y-2 text-gray-600">
                <li>✓ Explainable AI</li>
                <li>✓ Root cause analysis</li>
                <li>✓ Audit-ready export</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Architecture & Security */}
        <section className="py-24 bg-secondary text-white rounded-2xl px-8 md:px-12">
          <h2 className="text-3xl font-bold mb-8">Enterprise Architecture & Security</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-xl">
              <Cpu className="w-8 h-8 text-accent mb-4" />
              <h4 className="font-bold text-lg mb-3">Multi-Tenant SaaS</h4>
              <p className="text-gray-200 text-sm">Tenant isolation, per-tenant configuration, and organization-level controls for complex hierarchies.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl">
              <Share2 className="w-8 h-8 text-accent mb-4" />
              <h4 className="font-bold text-lg mb-3">Secure Integrations</h4>
              <p className="text-gray-200 text-sm">Encrypted data pipelines with encryption in transit and at rest. Industry-standard security protocols.</p>
            </div>
            <div className="bg-white/5 p-8 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-accent mb-4" />
              <h4 className="font-bold text-lg mb-3">Compliance-Ready</h4>
              <p className="text-gray-200 text-sm">SOC 2 Type II, GDPR-supporting controls, audit logging, and comprehensive compliance documentation.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 text-center">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Ready to Transform Your Close?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">See TFCA in action and understand how it can reduce your close cycle.</p>
          <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all">
            Request Demo <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </section>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Server, Users, Database, Play } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Connect Your ERP',
    icon: <Server size={20} />,
    description: 'Link Torvyn AI directly to your SAP S/4HANA, Tally Prime, or Zoho Books instance. No data is stored — Torvyn reads GL data live at reconciliation time.',
    link: '/docs/sap-setup',
    linkLabel: 'SAP Setup Guide →',
  },
  {
    number: '02',
    title: 'Upload Master Data',
    icon: <Database size={20} />,
    description: 'Upload your GL account master (Chart of Accounts) and employee list via the Admin → GL Master Data screen. This is a one-time setup that takes 5 minutes.',
    link: '/docs/admin-guide',
    linkLabel: 'Admin Guide →',
  },
  {
    number: '03',
    title: 'Add Your Team',
    icon: <Users size={20} />,
    description: 'Create accounts for your Makers, Checkers, and CFO under Admin → Team & Roles. Each gets a role-specific interface — no configuration overlap.',
    link: '/docs/admin-guide#team',
    linkLabel: 'Team Setup →',
  },
  {
    number: '04',
    title: 'Generate Tasks & Run AI',
    icon: <Play size={20} />,
    description: 'Click "Generate Tasks" for your close period. Torvyn fetches all GL balances from SAP and creates reconciliation tasks for each account. Makers then run the AI agent on each task.',
    link: '/docs/admin-guide#generate',
    linkLabel: 'Task Generation →',
  },
]

export default function GettingStarted() {
  useEffect(() => {
    document.title = 'Getting Started — Torvyn AI Documentation'
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
            <Link to="/docs" className="hover:text-blue-400 transition-colors">Docs</Link>
            <span>/</span>
            <span className="text-slate-200">Getting Started</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Getting Started</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Set up Torvyn AI for your financial close in under 2 hours.
            Follow these four steps in order.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Prerequisites */}
        <div className="bg-blue-950/40 border border-blue-800/50 rounded-xl p-6 mb-10">
          <h2 className="text-blue-300 font-semibold mb-3">Before You Begin</h2>
          <ul className="space-y-2 text-slate-300 text-sm">
            {[
              'Your Torvyn login credentials (emailed by the Torvyn team)',
              'SAP S/4HANA OData base URL and a read-only service user (see SAP Setup)',
              'Chart of Accounts export from SAP (GL master — Excel/CSV)',
              'Employee list: names, emails, and roles (Maker / Checker / CFO)',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-blue-400 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map(step => (
            <div key={step.number} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-600/30 flex items-center justify-center text-blue-400 shrink-0">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-slate-500">STEP {step.number}</span>
                    <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <Link
                    to={step.link}
                    className="inline-flex items-center gap-1 text-blue-400 text-sm hover:text-blue-300 transition-colors"
                  >
                    {step.linkLabel}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
          <Link to="/docs" className="text-slate-400 hover:text-white text-sm transition-colors">
            ← Back to Docs
          </Link>
          <Link
            to="/docs/sap-setup"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm transition-colors"
          >
            SAP Setup Guide <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Rocket, Server, BookOpen, FileText } from 'lucide-react'

const docCards = [
  {
    icon: <Rocket size={24} className="text-blue-400" />,
    title: 'Getting Started',
    description: 'Set up Torvyn AI from scratch. ERP connection, master data, team setup, and your first task generation — all in under 2 hours.',
    href: '/docs/getting-started',
    badge: 'Start here',
    badgeColor: 'bg-blue-600',
  },
  {
    icon: <Server size={24} className="text-purple-400" />,
    title: 'SAP S/4HANA Setup',
    description: 'Step-by-step guide to connecting SAP S/4HANA Cloud via OData REST API. Includes user creation, permission setup, and troubleshooting.',
    href: '/docs/sap-setup',
    badge: 'Integration',
    badgeColor: 'bg-purple-600',
  },
  {
    icon: <BookOpen size={24} className="text-green-400" />,
    title: 'Admin Guide',
    description: 'Complete reference for Admins: GL master data upload, team management, close calendar configuration, task generation, and workflow management.',
    href: '/docs/admin-guide',
    badge: 'Reference',
    badgeColor: 'bg-green-600',
  },
  {
    icon: <FileText size={24} className="text-amber-400" />,
    title: 'Tally Prime Setup',
    description: 'Connect Torvyn to on-premise Tally Prime using the Tally Bridge agent. Includes HTTP server setup, ledger mapping, and scheduling.',
    href: '/docs/tally-setup',
    badge: 'Coming soon',
    badgeColor: 'bg-slate-600',
  },
]

export default function Docs() {
  useEffect(() => {
    document.title = 'Documentation — Torvyn AI'
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-white mb-4">Documentation</h1>
          <p className="text-slate-400 text-xl max-w-2xl">
            Everything you need to connect Torvyn AI to your ERP,
            set up your team, and run your first automated close cycle.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {docCards.map(card => (
            <Link
              key={card.title}
              to={card.href}
              className="group bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-slate-900/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">
                  {card.icon}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full text-white ${card.badgeColor}`}>
                  {card.badge}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.description}</p>
              <div className="flex items-center gap-1 text-blue-400 text-sm">
                Read guide <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        {/* Quick reference */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Reference</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">ERP Connections</div>
              <ul className="space-y-1.5 text-slate-300">
                <li><Link to="/docs/sap-setup" className="hover:text-blue-400 transition-colors">SAP S/4HANA Cloud (OData)</Link></li>
                <li><span className="text-slate-500">SAP ECC On-Premise (RFC) ↗</span></li>
                <li><span className="text-slate-500">Tally Prime Bridge — soon</span></li>
              </ul>
            </div>
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Admin Setup</div>
              <ul className="space-y-1.5 text-slate-300">
                <li><Link to="/docs/admin-guide#gl-master" className="hover:text-blue-400 transition-colors">GL Master Data upload</Link></li>
                <li><Link to="/docs/admin-guide#team" className="hover:text-blue-400 transition-colors">Team & Roles</Link></li>
                <li><Link to="/docs/admin-guide#generate" className="hover:text-blue-400 transition-colors">Generate Tasks</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-slate-400 text-xs uppercase tracking-wider mb-2">Workflow</div>
              <ul className="space-y-1.5 text-slate-300">
                <li><Link to="/docs/admin-guide#workflow" className="hover:text-blue-400 transition-colors">Maker → Checker → CFO</Link></li>
                <li><Link to="/docs/getting-started" className="hover:text-blue-400 transition-colors">First close walkthrough</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="text-center py-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm mb-2">Can't find what you're looking for?</p>
          <a
            href="mailto:support@torvynai.com"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            Email support@torvynai.com <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

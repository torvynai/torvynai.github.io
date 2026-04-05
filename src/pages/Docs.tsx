import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FileText, Rocket, Server } from 'lucide-react';

const resourceCards = [
  {
    icon: <Rocket size={24} className="text-cyan-400" />,
    title: 'Getting Started',
    description:
      'Set up Torvyn from scratch: enterprise onboarding, ERP connection, master data, team setup, and your first task generation flow.',
    href: '/docs/getting-started',
    badge: 'Start here',
    badgeColor: 'bg-cyan-600',
  },
  {
    icon: <Server size={24} className="text-gold-400" />,
    title: 'SAP S/4HANA Setup',
    description:
      'Step-by-step guide to connecting SAP S/4HANA Cloud via OData REST API, with permissions, user setup, and integration guidance.',
    href: '/docs/sap-setup',
    badge: 'Integration',
    badgeColor: 'bg-amber-600',
  },
  {
    icon: <BookOpen size={24} className="text-emerald-400" />,
    title: 'Admin Guide',
    description:
      'Reference for admins covering GL master data upload, team setup, task generation, and workflow control.',
    href: '/docs/admin-guide',
    badge: 'Reference',
    badgeColor: 'bg-emerald-600',
  },
  {
    icon: <FileText size={24} className="text-slate-300" />,
    title: 'Tally Prime Setup',
    description:
      'Connect Torvyn to on-premise Tally Prime through the Tally Bridge agent. This guide is planned as the next implementation resource.',
    href: '/docs/tally-setup',
    badge: 'Coming soon',
    badgeColor: 'bg-slate-600',
  },
];

export default function Docs() {
  useEffect(() => {
    document.title = 'Resources — Torvyn AI';
  }, []);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100">
      <div className="border-b border-slate-800 bg-navy-900/70">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 mb-5">
            <BookOpen size={16} className="text-cyan-400" />
            <span className="text-cyan-300 font-semibold text-sm">Implementation resources</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Resources</h1>
          <p className="text-slate-400 text-xl max-w-3xl">
            Technical and operational guides for teams evaluating or implementing Torvyn in enterprise close workflows.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {resourceCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group bg-navy-900 border border-slate-800 hover:border-slate-600 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-slate-900/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  {card.icon}
                </div>
                <span className={`text-xs px-2 py-1 rounded-full text-white ${card.badgeColor}`}>
                  {card.badge}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.description}</p>
              <div className="flex items-center gap-1 text-cyan-400 text-sm">
                Open resource <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-navy-900 border border-slate-800 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Use resources after the product story</h2>
          <p className="text-slate-400 leading-relaxed">
            These guides are for implementation and technical evaluation. The primary product story remains:
            Torvyn helps finance teams move supported maker work from manual execution toward controlled agent-assisted execution.
          </p>
        </div>

        <div className="text-center py-8 border-t border-slate-800">
          <p className="text-slate-400 text-sm mb-2">Need a guided walkthrough instead?</p>
          <Link
            to="/contact#demo-form"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
          >
            Book a demo <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

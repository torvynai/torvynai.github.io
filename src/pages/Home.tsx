import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileCheck, MessageSquare, Play, TrendingUp, Workflow, X } from 'lucide-react';
import appConfig from '../config/appConfig';

const heroHighlights = [
  {
    title: 'Maker Agent',
    description: 'Turns maker work into guided approvals',
  },
  {
    title: 'Checker Review',
    description: 'Keeps questions and approvals in one flow',
  },
  {
    title: 'CFO Layer',
    description: 'Sign-off, analytics, and chatbot support',
  },
];

const valueCards = [
  {
    title: 'Close faster without losing control',
    description:
      'Torvyn executes supported close tasks, prepares the package, and keeps every material maker-agent action approved by the maker',
    icon: <Workflow size={22} />,
  },
  {
    title: 'Give reviewers what they actually need',
    description:
      'Evidence, notes, working papers, and recommendations stay tied to the task so checker and CFO do not start from scratch',
    icon: <FileCheck size={22} />,
  },
  {
    title: 'Give the CFO a stronger edge',
    description:
      'Analytics and decision chatbot support help CFO teams focus on decisions, bottlenecks, and sign-off priorities',
    icon: <TrendingUp size={22} />,
  },
];

const accelerationAreas = [
  'Account reconciliations',
  'GST review and support follow-up',
  'Direct tax and challan support review',
  'Payroll proof and statutory support review',
  'Revenue and cutoff review',
  'Vendor and receivables review',
  'Prepaids, accruals, and balance-sheet schedules',
  'Maker package preparation',
  'Evidence collection and follow-up',
  'Checker review turnaround',
  'CFO sign-off flow',
  'Close analytics and decision follow-ups',
];

const proofPanels = [
  {
    title: 'Maker Desk',
    caption: 'The maker queue where close work gets prioritized, owned, and moved forward',
    image: '/screenshots/maker_desk.png',
  },
  {
    title: 'Maker Agent Workbench',
    caption: 'Where Torvyn executes the task, requests evidence, and prepares the final package',
    image: '/screenshots/maker_task_overlay.png',
  },
  {
    title: 'Checker Review',
    caption: 'Reviewer context, questions, returns, and approvals without breaking the evidence trail',
    image: '/screenshots/checker_desk.png',
  },
  {
    title: 'CFO Sign-Off',
    caption: 'The approval layer where final decisions happen with context, not spreadsheet chase',
    image: '/screenshots/cfo_desk.png',
  },
  {
    title: 'CFO Analytics',
    caption: 'Executive visibility into close progress, risk, and financial impact',
    image: '/screenshots/cfo_analytics.png',
  },
  {
    title: 'CFO Chatbot',
    caption: 'Decision chatbot support for close questions, interpretation, and follow-up analysis',
    image: '/screenshots/cfo_chatbot.png',
  },
];

const workflowSteps = [
  {
    title: 'Connect the task to business context',
    description: 'Torvyn starts with ERP context, master data, close data, task ownership, and the right workflow state',
  },
  {
    title: 'Run the maker work',
    description: 'It collects evidence, prepares the working logic, and moves the task toward a reviewer-ready package',
  },
  {
    title: 'Keep approvals in control',
    description: 'Maker, Checker, and CFO approve the important actions while Torvyn does the repetitive work underneath',
  },
];

const demoChapters = [
  'Maker agent task completion',
  'Maker submission to Checker',
  'Checker question and approval flow',
  'CFO question and sign-off flow',
  'CFO analytics view',
  'CFO chatbot decision support',
];

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    document.title = `${appConfig.companyName} - ${appConfig.tagline}`;
  }, []);

  return (
    <div className="min-h-screen bg-navy-950">
      <section className="relative gradient-hero text-white pt-2 pb-8 md:pt-3 md:pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-7 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 mb-3">
                <CheckCircle2 size={16} className="text-cyan-400" />
                <span className="text-cyan-300 font-semibold text-sm">
                  AI workspace for controlled financial close
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight max-w-4xl">
                Financial close, built for the way <span className="gradient-text">Indian enterprise teams actually work</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-5 leading-relaxed max-w-3xl">
                Torvyn brings maker execution, reviewer control, CFO analytics, and decision chatbot support into one close workflow
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  to="/contact#demo-form"
                  className="btn-primary inline-flex items-center justify-center text-lg px-10 py-4 shadow-lg shadow-cyan-500/25"
                >
                  Book A Demo
                  <ArrowRight className="ml-3" size={22} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {heroHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-white/5 border border-white/10 px-4 py-4">
                    <div className="text-white font-semibold mb-1.5">{item.title}</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full opacity-60" />
              <button
                onClick={() => setIsVideoOpen(true)}
                className="relative block w-full rounded-[28px] overflow-hidden border border-white/10 bg-navy-900/80 shadow-[0_0_60px_rgba(6,182,212,0.16)] text-left group aspect-[16/12]"
              >
                <img
                  src="/screenshots/maker_task_overlay.png"
                  alt="Torvyn workflow video preview"
                  className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-950/20 via-navy-950/55 to-navy-950/92" />
                <div className="relative h-full flex flex-col justify-between p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-2">
                        Workflow Preview
                      </div>
                      <div className="text-white text-2xl md:text-3xl font-semibold leading-tight">
                        Watch Torvyn move from maker execution to CFO sign-off
                      </div>
                    </div>
                    <div className="shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_24px_rgba(6,182,212,0.2)]">
                      <Play className="w-7 h-7 text-cyan-400 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm md:text-base text-slate-300 max-w-xl">
                      Maker agent execution, checker review, CFO sign-off, analytics, and decision chatbot support
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Maker Agent', 'Checker Review', 'CFO Sign-Off', 'Analytics', 'Decision Chatbot'].map((chip) => (
                        <span
                          key={chip}
                          className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-slate-200"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950 to-transparent" />
      </section>

      <section className="relative z-10 -mt-2 md:-mt-4 pt-10 md:pt-14 pb-18 md:pb-22 bg-navy-950">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-navy-900/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/8 bg-white/[0.03] px-5 py-10 md:px-8 md:py-12 shadow-[0_18px_80px_rgba(2,6,23,0.28)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why teams move faster with Torvyn
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
                Faster maker execution, cleaner reviewer flow, stronger CFO visibility
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {valueCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="glass-card rounded-2xl p-6 border border-white/10"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4 text-cyan-400">
                    {item.icon}
                  </div>
                  <div className="text-white text-2xl font-semibold mb-3">{item.title}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-navy-950/45 px-5 py-5 md:px-6">
              <div className="text-sm font-semibold tracking-[0.16em] uppercase text-cyan-300 mb-3">
                What gets faster
              </div>
              <div className="flex flex-wrap gap-3">
                {accelerationAreas.map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-14 md:pt-18 pb-18 md:pb-22 bg-navy-900 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-navy-950 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See Torvyn across the close workflow</h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Product proof across maker execution, reviewer flow, CFO sign-off, analytics, and decision chatbot support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {proofPanels.map((panel, index) => (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800"
              >
                <div className="aspect-[16/11] bg-navy-900 relative overflow-hidden">
                  <img src={panel.image} alt={panel.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="text-white text-xl font-semibold mb-2">{panel.title}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{panel.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pt-14 md:pt-18 pb-18 md:pb-22 bg-navy-950 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-navy-900 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                Built for how close actually moves
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mb-8">
                ERP-connected data, maker workload, reviewer questions, and CFO decisions should not live across disconnected tools
              </p>

              <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                  <div key={step.title} className="glass-card rounded-xl p-5 border border-white/10">
                    <div className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-2">
                      Step {index + 1}
                    </div>
                    <div className="text-white font-semibold mb-2">{step.title}</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                One workspace for maker execution and CFO confidence
              </h3>
              <div className="space-y-4">
                {[
                  'ERP-first operating model for enterprise finance teams',
                  'Maker agent that drives supported close tasks forward',
                  'Checker and CFO approvals inside the same workflow',
                  'CFO analytics plus decision chatbot support',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-4">
                    <CheckCircle2 className="text-cyan-400 mt-0.5 shrink-0" size={18} />
                    <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pt-14 md:pt-18 pb-18 md:pb-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-navy-950 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See Torvyn on your close workflow
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Book a guided walkthrough built around your ERP, your review flow, and the way your finance team closes today
            </p>
            <div className="flex flex-col justify-center gap-4 max-w-md mx-auto">
              <Link
                to="/contact#demo-form"
                className="btn-primary inline-flex items-center justify-center text-xl px-10 py-5 w-full shadow-lg shadow-cyan-500/25"
              >
                Book A Demo
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>

            <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(6,182,212,0.18)] bg-navy-950">
              <div className="p-6 md:p-8 border-b border-white/10">
                <div className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">
                  Workflow Preview
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Maker-first product walkthrough
                </h3>
                <p className="text-slate-400 max-w-3xl">
                  The full video will show the end-to-end workflow from maker execution to CFO decision chatbot support
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0">
                <div className="border-b lg:border-b-0 lg:border-r border-white/10 bg-navy-900/70">
                  <img
                    src="/screenshots/maker_task_overlay.png"
                    alt="Torvyn maker workflow placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-white font-semibold mb-4">Walkthrough chapters</div>
                  <div className="space-y-3">
                    {demoChapters.map((chapter) => (
                      <div key={chapter} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                        <CheckCircle2 className="text-cyan-400 mt-0.5 shrink-0" size={18} />
                        <p className="text-sm text-slate-300 leading-relaxed">{chapter}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact#demo-form"
                    className="btn-primary inline-flex items-center justify-center mt-6 w-full"
                    onClick={() => setIsVideoOpen(false)}
                  >
                    Book A Demo
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

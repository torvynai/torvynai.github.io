import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Play,
  X,
  Workflow,
  Shield,
  FileCheck,
  Building2
} from 'lucide-react';
import appConfig from '../config/appConfig';

const heroVisual = '/screenshots/maker_desk.png';
const demoPreviewVisual = '/screenshots/maker_task_overlay.png';
const demoVideo = '/torvyn-demo.mp4';

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    document.title = `${appConfig.companyName} - ${appConfig.tagline}`;
  }, []);

  const proofPanels = [
    {
      title: 'Maker Desk',
      caption: 'Dense task-led execution with urgency, ownership, and triage visibility.',
      image: '/screenshots/maker_desk.png'
    },
    {
      title: 'Maker AI Workbench',
      caption: 'Agent-guided task completion with evidence, approvals, and document context.',
      image: '/screenshots/maker_task_overlay.png'
    },
    {
      title: 'CFO Oversight',
      caption: 'Executive review, risk visibility, and final close control in one system.',
      image: '/screenshots/cfo_analytics.png'
    }
  ];

  const compactPoints = [
    {
      title: 'Approval-controlled execution',
      description: 'Agent assistance stays inside the maker-checker-CFO approval chain.',
      icon: <Workflow size={20} />
    },
    {
      title: 'Audit-ready evidence trail',
      description: 'Notes, documents, recommendations, and decisions remain linked to the task.',
      icon: <FileCheck size={20} />
    },
    {
      title: 'Built for Indian enterprise close',
      description: 'ERP-connected operations designed around real finance team workflows.',
      icon: <Building2 size={20} />
    }
  ];

  const trustPoints = [
    'Supervised close execution, not black-box auto-accounting',
    'ERP-connected operating model across SAP, Tally, and close workflows',
    'Implementation-friendly product shape for real finance teams'
  ];

  return (
    <div className="min-h-screen bg-navy-950">
      <section className="relative gradient-hero text-white py-12 md:py-16 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 mb-5">
                <CheckCircle2 size={16} className="text-cyan-400" />
                <span className="text-cyan-300 font-semibold text-sm">Controlled financial close automation</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight max-w-4xl">
                Close faster with <span className="gradient-text">maker-checker-CFO control</span>, not spreadsheet chaos.
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
                Torvyn AI helps finance teams run ERP-connected close workflows with agent-assisted execution, approval-controlled review, and audit-ready visibility built for Indian enterprises.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  to="/contact#demo-form"
                  className="btn-primary inline-flex items-center justify-center text-lg px-10 py-4 shadow-lg shadow-cyan-500/25"
                >
                  Book A Demo
                  <ArrowRight className="ml-3" size={22} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                {appConfig.metrics.map((metric, index) => (
                  <div key={index} className="rounded-xl bg-white/5 border border-white/10 px-4 py-4">
                    <div className="text-xl md:text-2xl font-bold text-gradient mb-1">{metric.value}</div>
                    <div className="text-xs md:text-sm text-slate-400 font-medium">{metric.label}</div>
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
              <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-full opacity-60"></div>
              <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-navy-900/80 shadow-[0_0_60px_rgba(6,182,212,0.16)]">
                <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between bg-white/5">
                  <div>
                    <div className="text-xs font-semibold tracking-[0.18em] uppercase text-cyan-300">Product Preview</div>
                    <div className="text-white font-semibold mt-1">Controlled close workflow in one view</div>
                  </div>
                  <div className="text-xs text-slate-400">Maker • Checker • CFO</div>
                </div>
                <div className="p-4">
                  <img
                    src={heroVisual}
                    alt="Torvyn AI product preview"
                    className="w-full rounded-2xl border border-white/10"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-10"
          >
            <button
              onClick={() => setIsVideoOpen(true)}
              className="block w-full relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.12)] bg-navy-950/85 aspect-video group cursor-pointer transition-transform hover:scale-[1.005]"
            >
              <div className="absolute inset-0">
                <img
                  src={demoPreviewVisual}
                  alt="Torvyn AI demo preview"
                  className="w-full h-full object-cover opacity-30 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-navy-950/65 to-blue-500/10" />
                <div className="absolute inset-0 grid-pattern opacity-15" />
              </div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
                <div className="bg-cyan-500/10 p-4 md:p-5 rounded-full border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all shadow-[0_0_30px_rgba(6,182,212,0.25)]">
                  <Play className="w-8 h-8 md:w-11 md:h-11 text-cyan-400 ml-1" fill="currentColor" />
                </div>
                <h3 className="mt-6 text-xl md:text-3xl font-bold text-white text-center">
                  Watch a maker task move from agent execution to approval
                </h3>
                <p className="text-cyan-100 mt-3 text-sm md:text-lg font-medium text-center max-w-2xl">
                  Product walkthrough covering the maker desk, Maker AI workbench, review flow, and CFO visibility.
                </p>
              </div>
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent"></div>
      </section>

      <section className="py-18 md:py-22 bg-navy-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See the product, not just the promise
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
              Torvyn AI is built around the actual desks your finance team will use during close.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {proofPanels.map((panel, index) => (
              <motion.div
                key={panel.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800"
              >
                <div className="aspect-[16/11] bg-navy-900 relative overflow-hidden">
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="w-full h-full object-cover"
                  />
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

      <section className="py-16 md:py-20 bg-navy-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                Why enterprise finance teams care
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mb-8">
                The value is not generic AI. It is controlled close execution with visible approvals, evidence, and ERP-connected operating flow.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {compactPoints.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-xl p-5"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-4 text-cyan-400">
                      {item.icon}
                    </div>
                    <div className="text-white font-semibold mb-2">{item.title}</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-6 border border-slate-800"
            >
              <div className="text-sm font-semibold tracking-[0.18em] uppercase text-cyan-300 mb-3">Implementation and trust</div>
              <div className="space-y-4">
                {trustPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-4">
                    <Shield className="text-cyan-400 mt-0.5 shrink-0" size={18} />
                    <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              See the platform with your close workflow in mind
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Walk through the maker desk, checker review flow, CFO visibility, and ERP-connected operating model in one demo.
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

            <div className="relative w-full max-w-6xl aspect-video bg-navy-950 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(6,182,212,0.18)]">
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover bg-black"
                src={demoVideo}
              >
                Your browser does not support playing this video.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

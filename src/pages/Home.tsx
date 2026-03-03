import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Zap,
  Brain,
  Link2,
  Users,
  CheckCircle2,
  Clock,
  TrendingUp,
  Award,
  Sparkles,
  Play,
  X
} from 'lucide-react';
import appConfig from '../config/appConfig';
import ProductShowcase from '../components/ProductShowcase';
import MetricCard from '../components/MetricCard';
import SolutionCard from '../components/SolutionCard';

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    document.title = `${appConfig.companyName} - ${appConfig.tagline}`;
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero text-white py-12 md:py-16 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* IIT Badge - More Prominent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500/10 border-2 border-cyan-500/30">
                <Award size={20} className="text-cyan-400" />
                <span className="text-cyan-400 font-bold text-base">Built by Team of IITians</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              The AI Agentic Accounting Platform Built for{' '}
              <span className="gradient-text">India</span>
            </h1>

            {/* Subheadline - Shorter */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Automate reconciliations, journals, and variance analysis using AI Agents that plug straight into Tally & SAP. Achieve a 3-day financial close with 100% strict RBI-compliant Maker-Checker-CFO governance.
            </p>

            {/* Video Placeholder for Real UI Demo (Opens Modal) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div
                onClick={() => setIsVideoOpen(true)}
                className="block mt-8 mb-12 relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-navy-950/80 aspect-square sm:aspect-video flex flex-col items-center justify-center p-6 group cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <div className="absolute inset-0 grid-pattern opacity-30"></div>
                <div className="z-10 bg-cyan-500/10 p-4 md:p-6 rounded-full border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center">
                  <Play className="w-8 h-8 md:w-12 md:h-12 text-cyan-400 ml-1" fill="currentColor" />
                </div>
                <h3 className="mt-6 md:mt-8 text-xl md:text-3xl font-bold text-white z-10 text-center px-2">Watch Torvyn AI in Action</h3>
                <p className="text-cyan-200 mt-2 md:mt-3 z-10 text-sm md:text-lg font-medium text-center max-w-2xl px-2">See how the AI seamlessly executes a Maker Task in real-time.</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center text-xl px-12 py-5 shadow-lg shadow-cyan-500/30"
              >
                Book A Demo
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>

            {/* Quick Stats - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
            >
              {appConfig.metrics.map((metric, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm text-slate-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent"></div>
      </section>

      {/* Target Pain Points / Business Value Section */}
      <section className="py-20 md:py-28 bg-navy-950 relative border-b border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stop Leaking Cash & <span className="gradient-text">Wasting Weeks</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We replace thousands of hours of manual ERP data entry with a single Agentic Workflow.
              Here is exactly how Torvyn AI transforms your bottom line:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group border border-slate-800 hover:border-red-500/30"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-red-400">01.</span> Lost ITC
              </h3>
              <p className="text-slate-400 mb-6 min-h-[100px] text-sm leading-relaxed">
                Manually verifying GST invoices against government 2A/2B ledgers misses crucial discrepancies, leading to massive tax leakages for enterprises.
              </p>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2"><CheckCircle2 size={18} /> Torvyn AI Solution</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Direct API integration to the GSTN portal authenticates every vendor automatically, securing <strong className="text-white">100% of your ITC claims</strong> before filing.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group border border-slate-800 hover:border-amber-500/30"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-amber-400">02.</span> Delayed Closes
              </h3>
              <p className="text-slate-400 mb-6 min-h-[100px] text-sm leading-relaxed">
                Finance teams spend 15+ days downloading bank statements and tracing row-by-row transactions in Excel to reconcile core GL accounts.
              </p>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2"><CheckCircle2 size={18} /> Torvyn AI Solution</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Live Bank Feed APIs pull real-time data so our AI can perform 3-way matches (PO vs GRN vs Invoice) in seconds. Close your books in <strong className="text-white">3 days instead of weeks</strong>.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group border border-slate-800 hover:border-blue-500/30"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-blue-400">03.</span> Audit Chaos
              </h3>
              <p className="text-slate-400 mb-6 min-h-[100px] text-sm leading-relaxed">
                When auditors request proof of reconciliation, teams scramble to find scattered emails, PDF approvals, and disconnected spreadsheet logs.
              </p>
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-5">
                <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2"><CheckCircle2 size={18} /> Torvyn AI Solution</h4>
                <p className="text-slate-300 text-sm leading-relaxed">Every automated journal entry maintains a strict, unalterable digital audit trail documenting exactly <strong className="text-white">what the AI checked and who approved it</strong>.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Torvyn AI Section */}
      <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="gradient-text">Torvyn AI</span>?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We combine academic excellence with real-world financial expertise to deliver
              enterprise-grade AI solutions you can trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appConfig.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary mb-4">
                  {value.icon === 'shield' && <Shield className="text-white" size={28} />}
                  {value.icon === 'brain' && <Brain className="text-white" size={28} />}
                  {value.icon === 'link' && <Link2 className="text-white" size={28} />}
                  {value.icon === 'users' && <Users className="text-white" size={28} />}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Platform Functionalities */}
      <section className="py-20 md:py-28 bg-navy-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The <span className="gradient-text-gold">Complete Arsenal</span> for Finance Leaders
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We do not just find errors, we fix them automatically. Discover the exact modules that will modernize your entire accounting department.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all"
            >
              <Brain size={32} className="text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Comprehensive Role Dashboards</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Tailored, dedicated flows for the Maker, Checker, and CFO. The AI Agent assists the <strong>Maker</strong> by executing repetitive reconciliations, prepares the audit log for the <strong>Checker</strong>, and presents the final summary to the <strong>CFO</strong>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl border border-slate-700/50 hover:border-gold-500/50 transition-all"
            >
              <Zap size={32} className="text-gold-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Executive CFO Chatbot</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                The CFO Dashboard includes a conversational natural language AI. Instantly ask questions like <em>"What is our variance for travel expenses this month?"</em> and receive chart-backed answers instantly without waiting for analysts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-8 rounded-2xl border border-slate-700/50 hover:border-green-500/50 transition-all"
            >
              <Link2 size={32} className="text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Seamless Enterprise ERP Integration</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Torvyn AI operates effortlessly alongside your existing infrastructure. Zero need for manual CSV imports. We provide secure, plug-and-play API connectors for SAP, Tally, and major bank feeds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-card p-8 rounded-2xl border border-slate-700/50 hover:border-red-500/50 transition-all"
            >
              <Shield size={32} className="text-red-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Audit-Ready & Vulnerability Detection</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                Our AI proactively catches vulnerabilities, mismatched invoices, and policy violations <strong>before</strong> the audit occurs. Every action has an immutable log, making your entire accounting department permanently audit-ready.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Enterprise-Grade <span className="gradient-text">Security</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Your data security is our top priority. Built for the most demanding enterprise requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Strict Data Isolation',
                description: 'Multi-tenant schema architecture ensures full separation of your SAP/Tally data.',
                icon: <Shield size={24} />
              },
              {
                title: 'Glass Box Agent AI',
                description: '100% transparent decision-making. Explicit audit trails for every API tick and matching logic.',
                icon: <Brain size={24} />
              },
              {
                title: 'Continuous Monitoring',
                description: '99.9% uptime with 24/7 monitoring and support for mission-critical operations.',
                icon: <TrendingUp size={24} />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 mb-4">
                  <div className="text-cyan-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Join leading enterprises who trust Torvyn AI to automate their most critical financial processes.
              Schedule a demo to see our solutions in action.
            </p>
            <div className="flex flex-col justify-center gap-4 max-w-md mx-auto">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center text-xl px-10 py-5 w-full shadow-lg shadow-cyan-500/30"
              >
                Book A Demo
                <ArrowRight className="ml-3" size={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Video Modal Popup */}
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
              className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] p-2 bg-white/10 hover:bg-white/20 hover:text-red-400 text-white rounded-full transition-colors backdrop-blur-md"
            >
              <X size={24} />
            </button>

            <div className="relative w-full max-w-6xl aspect-video bg-navy-950 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(6,182,212,0.3)] mt-8 md:mt-0">
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover bg-black"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
              >
                Your browser does not support playing this video.
              </video>
              <div className="hidden md:block absolute top-4 left-4 z-10 px-4 py-2 bg-black/60 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg text-sm backdrop-blur-md">
                Placeholder Video: Replace with your actual Maker Task screen-recording.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

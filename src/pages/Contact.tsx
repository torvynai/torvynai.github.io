import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2, Sparkles, CalendarClock, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import appConfig from '../config/appConfig';

export default function Contact() {
  useEffect(() => {
    document.title = `${appConfig.companyName} - Book A Demo`;
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    erp: 'sap',
    inquiry: 'demo',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Demo form submitted:', form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        email: '',
        company: '',
        role: '',
        erp: 'sap',
        inquiry: 'demo',
        message: '',
      });
    }, 5000);
  }

  return (
    <div className="min-h-screen bg-navy-950">
      <section className="gradient-hero py-20 md:py-28 text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 mb-5">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-cyan-300 font-semibold text-sm">Book a guided product walkthrough</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Book a <span className="gradient-text">Torvyn demo</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              See how Torvyn helps Indian enterprise finance teams run supported close tasks faster with
              maker-checker-CFO control, reviewer-grade packages, and decision-ready visibility.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                What the demo covers
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  'How the maker agent executes supported close tasks and pauses for approval',
                  'How evidence requests, working papers, and final packages stay linked to the task',
                  'How checker and CFO approvals work in the same workflow',
                  'How CFO analytics and chatbot support finance decisions',
                ].map((item) => (
                  <div key={item} className="premium-card">
                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="text-cyan-400" size={20} />
                      </div>
                      <p className="text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="glass-card p-5 rounded-xl border border-white/10">
                  <div className="flex gap-3">
                    <CalendarClock className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">What happens next</h4>
                      <p className="text-sm text-slate-400">
                        We review your current close setup, understand ERP and evidence flow, and tailor the walkthrough to your finance team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-5 rounded-xl border border-white/10">
                  <div className="flex gap-3">
                    <Building2 className="text-gold-400 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">Who this is for</h4>
                      <p className="text-sm text-slate-400">
                        Controllers, finance heads, CFO teams, and enterprise operators evaluating close automation for Indian workflows.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="premium-card" id="demo-form">
                <h2 className="text-3xl font-bold mb-6 text-white">Request your walkthrough</h2>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Company</label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Role</label>
                        <input
                          name="role"
                          value={form.role}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                          placeholder="CFO / Controller / Finance Head"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">ERP System</label>
                        <select
                          name="erp"
                          value={form.erp}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white transition-all"
                        >
                          <option value="sap">SAP</option>
                          <option value="tally">Tally</option>
                          <option value="oracle">Oracle</option>
                          <option value="multiple">Multiple systems</option>
                          <option value="manual">ERP + manual evidence mix</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-300 mb-2">Discussion Type</label>
                        <select
                          name="inquiry"
                          value={form.inquiry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white transition-all"
                        >
                          <option value="demo">Product demo</option>
                          <option value="pilot">Pilot discussion</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Current close challenge <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none text-white placeholder-slate-500 transition-all"
                        placeholder="Tell us about your close process, maker workload, evidence flow, ERP setup, and what you want to speed up."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary inline-flex items-center justify-center text-base"
                    >
                      <Send className="mr-2" size={18} />
                      Book A Demo
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/30 p-8 rounded-xl"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                          <CheckCircle2 className="text-green-400" size={24} />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white mb-2">Demo request received</h4>
                        <p className="text-slate-300 mb-4">
                          Thank you. Our team will get back to you at{' '}
                          <span className="font-semibold text-cyan-400">{form.email}</span> within one business day.
                        </p>
                        <p className="text-sm text-slate-400">
                          We will use your inputs to shape a walkthrough that matches your finance workflow.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="glass-card p-5 rounded-xl border border-white/10">
              <Mail className="text-cyan-400 mb-3" size={20} />
              <div className="text-white font-semibold mb-1">Email</div>
              <a href={`mailto:${appConfig.contactEmail}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                {appConfig.contactEmail}
              </a>
            </div>
            <div className="glass-card p-5 rounded-xl border border-white/10">
              <Phone className="text-gold-400 mb-3" size={20} />
              <div className="text-white font-semibold mb-1">Phone</div>
              <a href={`tel:${appConfig.phone}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                {appConfig.phone}
              </a>
            </div>
            <div className="glass-card p-5 rounded-xl border border-white/10">
              <MapPin className="text-cyan-400 mb-3" size={20} />
              <div className="text-white font-semibold mb-1">Location</div>
              <div className="text-slate-400">Ahmedabad, Gujarat, India</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

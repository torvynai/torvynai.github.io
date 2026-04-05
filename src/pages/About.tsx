import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Building2, CheckCircle2, Shield, Users, Workflow } from 'lucide-react';
import appConfig from '../config/appConfig';
import shivamKumarImg from '../assets/shivam_kumar.jpeg';
import yogendraImg from '../assets/yogendra.jpeg';

const operatingPrinciples = [
  {
    title: 'Built for enterprise adoption',
    description:
      'Torvyn is being shaped to land inside real finance teams, not just look impressive in a product demo.',
    icon: <CheckCircle2 size={24} />,
  },
  {
    title: 'Indian enterprise fit',
    description:
      'ERP data is primary, but Indian close also depends on schedules, PDFs, scans, challans, approvals, and reviewer governance.',
    icon: <Building2 size={24} />,
  },
  {
    title: 'Human-approved AI',
    description:
      'Torvyn is designed to move the maker from doer to action approver while keeping checker and CFO control intact.',
    icon: <Workflow size={24} />,
  },
  {
    title: 'Trust through visibility',
    description:
      'Evidence, notes, recommendations, and approvals should remain visible and auditable across the workflow.',
    icon: <Shield size={24} />,
  },
];

const founderProfiles = [
  {
    name: 'Shivam Kumar',
    role: 'Director, CEO, CTO',
    image: shivamKumarImg,
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    highlights: [
      'AI graduate from IIT Gandhinagar',
      'Two-time national AI hackathon winner',
      'Focused on building explainable AI products for enterprise workflows',
    ],
  },
  {
    name: 'Yogendra',
    role: 'Director, Head of Product',
    image: yogendraImg,
    accent: 'text-gold-400',
    border: 'border-gold-500/20',
    highlights: [
      'Business and operator-led product leadership',
      '25+ years of experience in the service industry',
      'Focused on practical rollout, buyer trust, and operating discipline',
    ],
  },
];

export default function About() {
  useEffect(() => {
    document.title = `${appConfig.companyName} - Why Torvyn`;
  }, []);

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
            <div className="inline-flex items-center gap-2 mb-6 trust-badge">
              <Award size={16} />
              <span>Built in India • IITians venture</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Why <span className="gradient-text">Torvyn AI</span> exists
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              We are building Torvyn for Indian enterprise finance teams that want faster close movement,
              stronger control, and a product they will actually want to use.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our point of view</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Enterprise close is not just reconciliation logic. It is execution, evidence, reviewer flow, and decision support.
                Torvyn is being built to bring those pieces together in one product that feels useful from day one.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card bg-gradient-to-br from-cyan-500/5 to-gold-500/5"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-accent mb-4">
                <Workflow className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">What we are building</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Torvyn combines maker-agent execution, reviewer workflow, CFO analytics, and chatbot support into one close workspace.
                The ambition is simple: help finance teams move faster and make the product strong enough that it earns a place in the close cycle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Operating principles behind the product
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              These are the rules we want buyers to feel when they use Torvyn, not just read in a pitch deck.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operatingPrinciples.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="premium-card"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 mb-4 text-cyan-400">
                  {item.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet the founders
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Early-stage enterprise buyers want to know who is building the product and who will stand behind it during rollout.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {founderProfiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="premium-card text-center"
              >
                <div className="relative inline-block mb-6">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className={`w-32 h-32 rounded-full mx-auto object-cover border-4 ${profile.border}`}
                  />
                </div>

                <h4 className="font-bold text-2xl mb-2 text-white">{profile.name}</h4>
                <p className={`${profile.accent} font-semibold mb-4`}>{profile.role}</p>

                <div className="space-y-2 text-sm text-slate-300 bg-white/5 p-4 rounded-lg text-left">
                  {profile.highlights.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

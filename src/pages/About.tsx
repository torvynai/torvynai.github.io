import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Shield, Lightbulb, Award, TrendingUp, Users } from 'lucide-react';
import appConfig from '../config/appConfig';
import shivamKumarImg from '../assets/shivam_kumar.jpeg';
import yogendraImg from '../assets/yogendra.jpeg';

export default function About() {
  useEffect(() => {
    document.title = `${appConfig.companyName} - About Us`;
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20 md:py-28 text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="trust-badge">
                <Award size={16} />
                <span>An IITians Venture</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Torvyn AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Transforming financial operations with trusted, explainable AI built by experts
              who understand both technology and finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Why Section */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="premium-card"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                To enable finance teams to close faster and with higher confidence using explainable AI,
                automation, and enterprise-grade controls. We believe financial operations should be a
                competitive advantage, not a bottleneck.
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
                <Zap className="text-white" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">Why Torvyn Exists</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                Close processes remain manual, time-consuming, and error-prone in many large organizations.
                Torvyn automates the repetitive tasks and provides AI-driven context so teams can focus on
                decisions, not data wrangling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Leadership <span className="gradient-text-gold">Team</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A unique combination of AI expertise and business acumen, driving innovation in financial automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="premium-card text-center"
            >
              <div className="relative inline-block mb-6">
                <img
                  src={shivamKumarImg}
                  alt="Shivam Kumar"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-cyan-500/20"
                />
              </div>

              <h4 className="font-bold text-2xl mb-2 text-white">Shivam Kumar</h4>
              <p className="text-cyan-400 font-semibold mb-4">Founder, CEO & Chief Technology Officer</p>

              <div className="space-y-2 text-sm text-slate-300 bg-white/5 p-4 rounded-lg">
                <p className="font-semibold text-cyan-400">🎓 AI Graduate, IIT Gandhinagar</p>
                <p>🏆 Two-time National AI Hackathon Winner</p>
                <p>⭐ Innovative Project Awardee</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="premium-card text-center"
            >
              <div className="relative inline-block mb-6">
                <img
                  src={yogendraImg}
                  alt="Yogendra"
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gold-500/20"
                />
              </div>

              <h4 className="font-bold text-2xl mb-2 text-white">Yogendra</h4>
              <p className="text-gold-400 font-semibold mb-4">Head of Product</p>

              <div className="space-y-2 text-sm text-slate-300 bg-white/5 p-4 rounded-lg">
                <p className="font-semibold text-gold-400">🎓 Bachelor of Business Administration</p>
                <p>💼 Experienced in running companies</p>
                <p>📈 25+ years in service industry</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="gradient-text">Vision</span>
            </h2>

            <div className="glass-card p-12 rounded-2xl max-w-5xl mx-auto border-2 border-cyan-500/20">
              <p className="text-2xl leading-relaxed text-slate-200">
                We envision finance teams empowered by AI that is <span className="text-cyan-400 font-semibold">transparent</span>,
                <span className="text-cyan-400 font-semibold"> auditable</span>, and <span className="text-cyan-400 font-semibold">reduces cycle times</span>—so
                businesses can make faster, better-informed decisions. Financial close should be a
                <span className="text-gold-400 font-semibold"> competitive advantage</span>, not a bottleneck.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text-gold">Values</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The principles that guide everything we build and every decision we make.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lightbulb size={32} />,
                title: 'Transparency',
                description: 'Clear reasoning, explainable AI, and auditable outputs at every step.'
              },
              {
                icon: <Shield size={32} />,
                title: 'Reliability',
                description: 'Built for enterprise uptime, compliance, and service-level agreements.'
              },
              {
                icon: <Zap size={32} />,
                title: 'Innovation',
                description: 'Continuous investment in models, automation, and finance tech advancement.'
              },
              {
                icon: <CheckCircle2 size={32} />,
                title: 'Security',
                description: 'Data protection as a foundation of architecture and design.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-primary mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-3 text-white">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
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
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real results delivered to finance teams using Torvyn AI solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '80%', label: 'Average reduction in close cycle time' },
              { value: '70%', label: 'Reduction in manual reconciliation hours' },
              { value: '99.9%', label: 'Platform uptime commitment' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card text-center"
              >
                <div className="metric-value mb-4">{metric.value}</div>
                <p className="text-slate-400 text-lg">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

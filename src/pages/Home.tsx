import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
  Sparkles
} from 'lucide-react';
import appConfig from '../config/appConfig';
import ProductShowcase from '../components/ProductShowcase';
import MetricCard from '../components/MetricCard';
import SolutionCard from '../components/SolutionCard';

export default function Home() {
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

            {/* Main Headline - More Concise */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Transform Financial Operations with{' '}
              <span className="gradient-text">AI-Powered Automation</span>
            </h1>

            {/* Subheadline - Shorter */}
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Reduce close cycles by 80% and ensure audit-ready financials with our AI platform
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center text-lg"
              >
                Request Demo
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/products"
                className="btn-secondary inline-flex items-center justify-center text-lg"
              >
                View Products
                <Sparkles className="ml-2" size={20} />
              </Link>
            </div>

            {/* Quick Stats - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
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

      {/* Problem/Solution Section */}
      <section className="py-20 md:py-28 bg-navy-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Financial Challenges, <span className="gradient-text">Solved</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We understand the pain points of modern finance teams. Our AI agents are purpose-built
              to eliminate manual work, reduce errors, and accelerate your financial close.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appConfig.products.map((product, index) => (
              <SolutionCard
                key={product.slug}
                problem={product.problemStatement}
                solution={product.description}
                outcomes={product.outcomes}
                icon={<Zap size={32} />}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-20 md:py-28 bg-navy-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="gradient-text-gold">Products</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Specialized AI agents designed for critical financial functions.
              Each product is a complete solution with dedicated support and continuous updates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {appConfig.products.map((product, index) => (
              <ProductShowcase
                key={product.slug}
                product={product}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Future Products Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-400 text-sm">
              More AI-powered solutions coming soon. Building the future of financial automation.
            </p>
          </motion.div>
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

      {/* How It Works Section */}
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
              How It <span className="gradient-text-gold">Works</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Simple integration, powerful automation. Get started in days, not months.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your Systems',
                description: 'Seamless integration with SAP, Oracle, and other major ERP systems. On-premise deployment ensures your data stays secure.',
                icon: <Link2 size={32} />
              },
              {
                step: '02',
                title: 'AI Learns & Automates',
                description: 'Our specialized AI agents analyze your data, learn your patterns, and automate complex financial processes.',
                icon: <Brain size={32} />
              },
              {
                step: '03',
                title: 'Audit-Ready Results',
                description: 'Get accurate, explainable results with complete audit trails. Human-in-the-loop for critical decisions.',
                icon: <CheckCircle2 size={32} />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="text-8xl font-bold text-cyan-500/10 absolute -top-6 -left-2">
                  {step.step}
                </div>

                <div className="premium-card relative z-10">
                  <div className="text-cyan-500 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line (not on last item) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
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
                title: 'On-Premise Deployment',
                description: 'Your data never leaves your infrastructure. Complete control and compliance.',
                icon: <Shield size={24} />
              },
              {
                title: 'Explainable AI',
                description: 'Full transparency in decision-making. Audit trails for every action.',
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center text-lg"
              >
                Schedule Demo
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center justify-center text-lg"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

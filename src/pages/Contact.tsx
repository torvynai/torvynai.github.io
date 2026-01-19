import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, ArrowRight, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import appConfig from '../config/appConfig';

export default function Contact() {
  useEffect(() => {
    document.title = `${appConfig.companyName} - Contact Us`;
  }, []);

  const [form, setForm] = useState({ name: '', email: '', company: '', inquiry: 'demo', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', inquiry: 'demo', message: '' });
    }, 5000);
  }

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's <span className="gradient-text">Transform</span> Your Financial Operations
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Schedule a demo, discuss your challenges, or learn more about our AI solutions.
              We typically respond within one business day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
                Get in <span className="gradient-text-gold">Touch</span>
              </h2>

              <div className="space-y-6 mb-12">
                <div className="premium-card">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Mail className="text-white" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">Email Us</h4>
                      <a
                        href={`mailto:${appConfig.contactEmail}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        {appConfig.contactEmail}
                      </a>
                      <p className="text-sm text-slate-400 mt-2">
                        We route inquiries to sales, partnerships, and support for quick responses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="premium-card">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                        <Phone className="text-white" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">Call Us</h4>
                      <a
                        href={`tel:${appConfig.phone}`}
                        className="text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        {appConfig.phone}
                      </a>
                      <p className="text-sm text-slate-400 mt-2">
                        Available for enterprise inquiries and product demonstrations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="premium-card">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                        <MapPin className="text-cyan-400" size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-white">Location</h4>
                      <p className="text-slate-300">Ahmedabad, Gujarat, India</p>
                      <p className="text-sm text-slate-400 mt-2">
                        India-based team with global support capabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6 rounded-xl border border-cyan-500/20">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Fast Response Time</h4>
                    <p className="text-sm text-slate-400">
                      We aim to respond to all inquiries within <span className="text-cyan-400 font-semibold">1 business day</span>.
                      For urgent matters, please mention it in your message.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="premium-card">
                <h2 className="text-3xl font-bold mb-6 text-white">Send us a Message</h2>

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
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Company
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Inquiry Type <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="inquiry"
                        value={form.inquiry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white transition-all"
                      >
                        <option value="demo">Request Product Demo</option>
                        <option value="sales">Enterprise Sales</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="support">Technical Support</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-navy-900 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none text-white placeholder-slate-500 transition-all"
                        placeholder="Tell us about your financial close process, challenges, and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary inline-flex items-center justify-center text-base"
                    >
                      <Send className="mr-2" size={18} />
                      Send Message
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
                        <h4 className="font-bold text-xl text-white mb-2">Message Received!</h4>
                        <p className="text-slate-300 mb-4">
                          Thank you for reaching out. Our team will contact you at{' '}
                          <span className="font-semibold text-cyan-400">{form.email}</span> within one business day.
                        </p>
                        <p className="text-sm text-slate-400">
                          In the meantime, feel free to explore our{' '}
                          <a href="/products" className="text-cyan-400 hover:underline">products</a> or{' '}
                          <a href="/about" className="text-cyan-400 hover:underline">learn more about us</a>.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* How We Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
              How We Can <span className="gradient-text">Help</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Product Demo',
                  description: 'See our AI solutions in action with a 30-minute personalized walkthrough tailored to your use case.',
                  icon: <Sparkles size={24} />
                },
                {
                  title: 'Enterprise Sales',
                  description: 'Discuss pricing, custom features, implementation timelines, and SLAs for your organization.',
                  icon: <Mail size={24} />
                },
                {
                  title: 'Technical Questions',
                  description: 'Get answers from our engineering team on integrations, architecture, and security.',
                  icon: <Phone size={24} />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="premium-card"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-white">{item.title}</h4>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

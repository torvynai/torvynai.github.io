import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import appConfig from '../config/appConfig';
import ProductShowcase from '../components/ProductShowcase';

export default function ProductsPage() {
  useEffect(() => {
    document.title = `${appConfig.companyName} - Our Products`;
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered <span className="gradient-text">Financial Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              Specialized AI agents designed to solve your most critical financial challenges.
              Each product is a complete solution with dedicated support and continuous innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {appConfig.products.map((product, index) => (
              <ProductShowcase
                key={product.slug}
                product={product}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Product Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Compare Our <span className="gradient-text-gold">Solutions</span>
            </h2>

            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 text-slate-400 font-semibold">Feature</th>
                      {appConfig.products.map((product) => (
                        <th key={product.slug} className="text-center p-6">
                          <div className="text-white font-bold mb-1">{product.name}</div>
                          <div className="text-xs">
                            {product.status === 'live' && (
                              <span className="status-badge live">Live</span>
                            )}
                            {product.status === 'coming-soon' && (
                              <span className="status-badge coming-soon">Coming Soon</span>
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-slate-300">Primary Use Case</td>
                      <td className="p-6 text-center text-slate-400 text-sm">Financial Close Automation</td>
                      <td className="p-6 text-center text-slate-400 text-sm">Tax Compliance Automation</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-slate-300">Time Savings</td>
                      <td className="p-6 text-center text-cyan-400 font-semibold">80%</td>
                      <td className="p-6 text-center text-cyan-400 font-semibold">85%</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-slate-300">Error Reduction</td>
                      <td className="p-6 text-center text-cyan-400 font-semibold">95%+</td>
                      <td className="p-6 text-center text-cyan-400 font-semibold">99%</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-slate-300">ERP Integration</td>
                      <td className="p-6 text-center text-green-400">✓</td>
                      <td className="p-6 text-center text-green-400">✓</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-6 text-slate-300">On-Premise Deployment</td>
                      <td className="p-6 text-center text-green-400">✓</td>
                      <td className="p-6 text-center text-green-400">✓</td>
                    </tr>
                    <tr>
                      <td className="p-6 text-slate-300">Audit Trail</td>
                      <td className="p-6 text-center text-green-400">✓</td>
                      <td className="p-6 text-center text-green-400">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Why Choose Our Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose <span className="gradient-text">Torvyn AI</span>?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Specialized AI',
                  description: 'Purpose-built for financial tasks, not generic automation. Each agent is trained specifically for its domain.',
                },
                {
                  title: 'Enterprise Security',
                  description: 'On-premise deployment, complete data control, and compliance with the strictest security standards.',
                },
                {
                  title: 'Continuous Innovation',
                  description: 'Regular updates, new features, and ongoing support from our team of AI and finance experts.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="premium-card"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to See Our Products in Action?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Schedule a personalized demo to explore how our AI solutions can transform your financial operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="btn-primary inline-flex items-center justify-center text-lg"
              >
                Request Demo
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/about"
                className="btn-secondary inline-flex items-center justify-center text-lg"
              >
                Learn About Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

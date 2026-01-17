import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import FeatureCard from '../components/FeatureCard';
import appConfig from '../config/appConfig';
import { Database, Shield, Zap, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    document.title = 'Torvyn AI - Pioneering AI for Financial Automation';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-midnight text-white py-24 md:py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Building the Future of<br />
              <span className="text-primary">Financial Automation</span>
            </h1>
            <p className="text-xl text-slate mb-8 leading-relaxed max-w-3xl mx-auto">
              Torvyn AI is a deep-tech company founded by IIT Gandhinagar students, dedicated to solving complex financial challenges with specialized, secure, and autonomous AI agents.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black rounded-lg font-bold hover:bg-opacity-90 transition-all">
                Learn More About Us
              </Link>
              <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white rounded-lg font-bold hover:bg-white/5 transition-all">
                View Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 bg-midnight-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Who We Are" subtitle="A fusion of academic excellence and real-world financial expertise." />
          <div className="text-lg text-slate leading-relaxed max-w-4xl mx-auto text-center">
            <p>
              Torvyn AI sits at the intersection of advanced AI research and practical financial application. Our mission is to empower finance professionals by automating their most complex, data-intensive tasks. We build specialized AI agents that don't just process information, but understand, reason, and act upon it, ensuring unparalleled accuracy, security, and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-24 border-b border-white/5">
          <SectionHeader title="Our Expertise" subtitle="We combine cutting-edge AI techniques to build robust financial tools." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard icon={<Database size={24} />} title="Specialized AI Agents" description="We build and train AI models for specific financial tasks, ensuring high accuracy and contextual understanding." />
            <FeatureCard icon={<Shield size={24} />} title="On-Premise & Secure" description="Our solutions are designed to run within your infrastructure, guaranteeing data privacy and security." />
            <FeatureCard icon={<Zap size={24} />} title="Seamless ERP Integration" description="We provide robust connectors for major ERP systems like SAP and Oracle for smooth data flow." />
            <FeatureCard icon={<Users size={24} />} title="Human-in-the-Loop" description="Our systems are designed to collaborate with financial teams, providing explainable insights and workflows." />
          </div>
        </section>
        
        {/* Our Products Section */}
        <section className="py-24 text-center">
          <SectionHeader title="Our Products" subtitle="Focused solutions for critical financial functions." />
          <p className="max-w-2xl mx-auto text-slate mb-12">
            We are channeling our expertise into building a suite of powerful, autonomous AI agents. Each product is developed with a deep understanding of the challenges faced by modern finance teams.
          </p>
          <Link to="/products" className="inline-flex items-center px-8 py-4 bg-primary text-black rounded-lg font-bold hover:bg-opacity-90 transition-all">
            Explore Our Product Lineup <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </section>
      </div>

       {/* Footer CTA */}
        <section className="py-24 text-center bg-midnight-light mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Financial Operations?</h2>
          <p className="max-w-2xl mx-auto text-slate mb-8">
            Get in touch with our team to discuss your challenges and learn how Torvyn AI can help you build a more efficient, secure, and intelligent finance function.
          </p>
          <div className="flex justify-center gap-4">
             <a href="/contact" className="inline-flex items-center px-8 py-4 bg-primary text-black rounded-lg font-bold hover:bg-opacity-90 transition-all">
                Contact Us
             </a>
          </div>
        </section>
    </div>
  );
}

import React, { useEffect } from 'react'
import { CheckCircle2, Zap, Shield, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import shivamKumarImg from '../assets/shivam_kumar.jpeg';
import yogendraImg from '../assets/yogendra.jpeg';

export default function About(){
  useEffect(() => {
    document.title = 'Torvyn AI - About Us'
  }, [])

  return (
    <div className="bg-midnight min-h-screen text-slate">
      {/* Hero */}
      <section className="bg-gradient-to-br from-midnight via-midnight to-primary/20 text-white py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Torvyn AI</h1>
          <p className="text-xl text-slate max-w-3xl">Transforming financial close with trusted AI.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Why */}
        <section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-white/5 p-8 rounded-xl shadow-lg border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-slate leading-relaxed">To enable finance teams to close faster and with higher confidence using explainable AI, automation, and enterprise-grade controls.</p>
            </motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-gradient-to-br from-primary/10 to-transparent p-8 rounded-xl shadow-lg border border-primary/20">
              <h2 className="text-2xl font-bold mb-4 text-white">Why Torvyn Exists</h2>
              <p className="text-slate leading-relaxed">Close processes remain manual, time-consuming, and error-prone in many large organizations. Torvyn automates the repetitive tasks and provides AI-driven context so teams can focus on decisions, not data wrangling.</p>
            </motion.div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-midnight-light rounded-2xl px-8 md:px-12 border border-white/5">
          <h2 className="text-3xl font-bold mb-8 text-white">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{y:-6}} className="bg-midnight p-6 rounded-xl shadow-md border border-white/5 text-center">
              <img src={shivamKumarImg} alt="Shivam Kumar" className="w-20 h-20 rounded-full mb-4 mx-auto object-cover" />
              <h4 className="font-bold text-lg mb-1 text-white">Shivam Kumar</h4>
              <p className="text-sm text-slate">Founder, CEO & Chief Technology Officer</p>
              <div className="text-xs text-center mt-4 text-slate space-y-1">
                <p className="font-semibold text-primary">AI Graduate, IIT Gandhinagar</p>
                <p>Two-time National AI Hackathon Winner</p>
                <p>Innovative Project Awardee</p>
              </div>
            </motion.div>
            <motion.div whileHover={{y:-6}} className="bg-midnight p-6 rounded-xl shadow-md border border-white/5 text-center">
              <img src={yogendraImg} alt="Yogendra" className="w-20 h-20 rounded-full mb-4 mx-auto object-cover" />
              <h4 className="font-bold text-lg mb-1 text-white">Yogendra</h4>
              <p className="text-sm text-slate">Head of Product</p>
              <div className="text-xs text-center mt-4 text-slate space-y-1">
                <p className="font-semibold text-primary">Bachelor of Business Administration</p>
                <p>Experienced in running companies</p>
                <p>25+ years of experience in service industry</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24">
          <h2 className="text-3xl font-bold mb-8 text-white">Our Vision</h2>
          <div className="bg-gradient-to-r from-midnight-light to-midnight border border-primary/20 text-white p-12 rounded-2xl">
            <p className="text-xl leading-relaxed text-slate">We envision finance teams empowered by AI that is transparent, auditable, and reduces cycle times—so businesses can make faster, better-informed decisions. Financial close should be a competitive advantage, not a bottleneck.</p>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-midnight-light rounded-2xl px-8 md:px-12 border border-white/5">
          <h2 className="text-3xl font-bold mb-12 text-white">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{y:-4}} className="bg-midnight p-6 rounded-xl shadow-md border border-white/5">
              <Lightbulb className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white">Transparency</h3>
              <p className="text-sm text-slate">Clear reasoning, explainable AI, and auditable outputs at every step.</p>
            </motion.div>
            <motion.div whileHover={{y:-4}} className="bg-midnight p-6 rounded-xl shadow-md border border-white/5">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white">Reliability</h3>
              <p className="text-sm text-slate">Built for enterprise uptime, compliance, and service-level agreements.</p>
            </motion.div>
            <motion.div whileHover={{y:-4}} className="bg-midnight p-6 rounded-xl shadow-md border border-white/5">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white">Innovation</h3>
              <p className="text-sm text-slate">Continuous investment in models, automation, and finance tech advancement.</p>
            </motion.div>
            <motion.div whileHover={{y:-4}} className="bg-midnight p-6 rounded-xl shadow-md border border-white/5">
              <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-white">Security</h3>
              <p className="text-sm text-slate">Data protection as a foundation of architecture and design.</p>
            </motion.div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-24">
          <h2 className="text-3xl font-bold mb-12 text-white">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary/5 p-8 rounded-xl text-center border border-primary/10">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <p className="text-slate">Average reduction in close cycle time</p>
            </div>
            <div className="bg-primary/5 p-8 rounded-xl text-center border border-primary/10">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-slate">Reduction in manual reconciliation hours</p>
            </div>
            <div className="bg-primary/5 p-8 rounded-xl text-center border border-primary/10">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-slate">Platform uptime SLA</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

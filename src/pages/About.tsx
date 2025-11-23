import React, { useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import { CheckCircle2, Zap, Shield, Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import appConfig from '../config/appConfig'

export default function About(){
  useEffect(() => {
    document.title = 'Torvyn AI - The Ultimate Automation Provider'
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-primary/10 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Torvyn AI</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Transforming financial close with trusted AI.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Why */}
        <section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">To enable finance teams to close faster and with higher confidence using explainable AI, automation, and enterprise-grade controls.</p>
            </motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl shadow-lg border border-primary/20">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Why Torvyn Exists</h2>
              <p className="text-gray-700 leading-relaxed">Close processes remain manual, time-consuming, and error-prone in many large organizations. Torvyn automates the repetitive tasks and provides AI-driven context so teams can focus on decisions, not data wrangling.</p>
            </motion.div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-24 bg-gray-50 rounded-2xl px-8 md:px-12">
          <h2 className="text-3xl font-bold mb-8 text-secondary">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{y:-6}} className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4"></div>
              <h4 className="font-bold text-lg mb-2">Founder & CEO</h4>
              <p className="text-sm text-gray-600">Led enterprise SaaS teams with deep financial services background.</p>
            </motion.div>
            <motion.div whileHover={{y:-6}} className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4"></div>
              <h4 className="font-bold text-lg mb-2">Chief Technology Officer</h4>
              <p className="text-sm text-gray-600">AI/ML expert with experience scaling enterprise platforms.</p>
            </motion.div>
            <motion.div whileHover={{y:-6}} className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4"></div>
              <h4 className="font-bold text-lg mb-2">Head of Product</h4>
              <p className="text-sm text-gray-600">20+ years building financial software for Fortune 500 companies.</p>
            </motion.div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24">
          <h2 className="text-3xl font-bold mb-8 text-secondary">Our Vision</h2>
          <div className="bg-gradient-to-r from-secondary to-primary text-white p-12 rounded-2xl">
            <p className="text-xl leading-relaxed">We envision finance teams empowered by AI that is transparent, auditable, and reduces cycle times—so businesses can make faster, better-informed decisions. Financial close should be a competitive advantage, not a bottleneck.</p>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gray-50 rounded-2xl px-8 md:px-12">
          <h2 className="text-3xl font-bold mb-12 text-secondary">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div whileHover={{y:-4}} className="bg-white p-6 rounded-xl shadow-md">
              <Lightbulb className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Transparency</h3>
              <p className="text-sm text-gray-600">Clear reasoning, explainable AI, and auditable outputs at every step.</p>
            </motion.div>
            <motion.div whileHover={{y:-4}} className="bg-white p-6 rounded-xl shadow-md">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Reliability</h3>
              <p className="text-sm text-gray-600">Built for enterprise uptime, compliance, and service-level agreements.</p>
            </motion.div>
            <motion.div whileHover={{y:-4}} className="bg-white p-6 rounded-xl shadow-md">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Continuous investment in models, automation, and finance tech advancement.</p>
            </motion.div>
            <motion.div whileHover={{y:-4}} className="bg-white p-6 rounded-xl shadow-md">
              <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Security</h3>
              <p className="text-sm text-gray-600">Data protection as a foundation of architecture and design.</p>
            </motion.div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-24">
          <h2 className="text-3xl font-bold mb-12 text-secondary">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <p className="text-gray-700">Average reduction in close cycle time</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">70%</div>
              <p className="text-gray-700">Reduction in manual reconciliation hours</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-gray-700">Platform uptime SLA</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

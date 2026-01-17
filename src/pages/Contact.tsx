import React, { useState, useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import appConfig from '../config/appConfig'

export default function Contact(){
  useEffect(() => {
    document.title = 'Torvyn AI - The Ultimate Automation Provider'
  }, [])

  const [form, setForm] = useState({name:'', email:'', company:'', message:''})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){
    setForm({...form, [e.target.name]: e.target.value})
  }

  function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    console.log('contact', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="bg-midnight min-h-screen text-slate">
      {/* Hero */}
      <section className="bg-gradient-to-br from-midnight via-midnight to-primary/20 text-white py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-slate max-w-3xl">Talk to our sales team or request a demo. We typically respond within one business day.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}}>
            <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Email</h4>
                  <a href={`mailto:${appConfig.contactEmail}`} className="text-primary hover:underline">{appConfig.contactEmail}</a>
                  <p className="text-sm text-slate mt-1">We route inquiries to sales, partnerships, and support internally for quick responses.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Phone</h4>
                  <p className="text-slate">Available for enterprise inquiries</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1 text-white">Office</h4>
                  <p className="text-slate">India-based team with global support</p>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-white/5 rounded-xl h-48 flex items-center justify-center border border-white/10">
              <div className="text-slate/50">Map placeholder — Global support available</div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}}>
            <h2 className="text-3xl font-bold mb-8 text-white">Send us a Message</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate mb-2">Full Name *</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 bg-midnight-light border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-slate/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate mb-2">Email Address *</label>
                  <input 
                    name="email" 
                    type="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 bg-midnight-light border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-slate/50"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate mb-2">Company</label>
                  <input 
                    name="company" 
                    value={form.company} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-midnight-light border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-slate/50"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate mb-2">Message *</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    required 
                    rows={6}
                    className="w-full px-4 py-3 bg-midnight-light border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-white placeholder-slate/50"
                    placeholder="Tell us about your close process and goals..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-primary text-black rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="bg-primary/10 border border-primary/20 p-8 rounded-xl">
                <div className="flex gap-3">
                  <div className="text-2xl text-primary">✓</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Message received!</h4>
                    <p className="text-slate text-sm">Thank you for reaching out. Our sales team will contact you at <span className="font-semibold text-primary">{form.email}</span> within one business day.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Inquiry Types */}
        <section className="mt-24 bg-white/5 rounded-2xl px-8 md:px-12 py-12 border border-white/5">
          <h2 className="text-2xl font-bold mb-8 text-white">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-white">Product Demo</h4>
              <p className="text-sm text-slate">See TFCA in action with your data. 30-minute personalized walkthrough.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-white">Enterprise Sales</h4>
              <p className="text-sm text-slate">Discuss pricing, custom features, and implementation timelines.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-white">Technical Questions</h4>
              <p className="text-sm text-slate">Get answers from our engineering team on integrations and architecture.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

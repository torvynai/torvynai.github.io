import React, { useState, useEffect } from 'react'
import SectionHeader from '../components/SectionHeader'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import appConfig from '../config/appConfig'

export default function Contact(){
  useEffect(() => {
    document.title = `Contact Us | ${appConfig.companyName}`
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
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-primary/10 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-200 max-w-3xl">Talk to our sales team or request a demo. We typically respond within one business day.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}}>
            <h2 className="text-3xl font-bold mb-8 text-secondary">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <a href={`mailto:${appConfig.contactEmail}`} className="text-primary hover:underline">{appConfig.contactEmail}</a>
                  <p className="text-sm text-gray-600 mt-1">We route inquiries to sales, partnerships, and support internally for quick responses.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone</h4>
                  <p className="text-gray-700">Available for enterprise inquiries</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Office</h4>
                  <p className="text-gray-700">India-based team with global support</p>
                </div>
              </div>
            </div>
            <div className="mt-12 bg-gray-100 rounded-xl h-48 flex items-center justify-center">
              <div className="text-gray-500">Map placeholder — Global support available</div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}}>
            <h2 className="text-3xl font-bold mb-8 text-secondary">Send us a Message</h2>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">Full Name *</label>
                  <input 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">Email Address *</label>
                  <input 
                    name="email" 
                    type="email" 
                    value={form.email} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">Company</label>
                  <input 
                    name="company" 
                    value={form.company} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-secondary mb-2">Message *</label>
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    required 
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us about your close process and goals..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} className="bg-green-50 border-2 border-green-200 p-8 rounded-xl">
                <div className="flex gap-3">
                  <div className="text-2xl">✓</div>
                  <div>
                    <h4 className="font-bold text-green-900 mb-1">Message received!</h4>
                    <p className="text-green-800 text-sm">Thank you for reaching out. Our sales team will contact you at <span className="font-semibold">{form.email}</span> within one business day.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Inquiry Types */}
        <section className="mt-24 bg-gray-50 rounded-2xl px-8 md:px-12 py-12">
          <h2 className="text-2xl font-bold mb-8 text-secondary">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2">Product Demo</h4>
              <p className="text-sm text-gray-600">See TFCA in action with your data. 30-minute personalized walkthrough.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Enterprise Sales</h4>
              <p className="text-sm text-gray-600">Discuss pricing, custom features, and implementation timelines.</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Technical Questions</h4>
              <p className="text-sm text-gray-600">Get answers from our engineering team on integrations and architecture.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

import React from 'react'
import appConfig from '../config/appConfig'
import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const logoImage = '/src/assets/logo.png';

export default function Footer(){
  return (
    <footer className="bg-midnight text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="logo" className="h-10 w-10" />
              <div className="text-sm font-bold">{appConfig.companyName}</div>
            </div>
            <p className="text-xs text-slate">AI-driven financial assurance for the modern enterprise.</p>
            <div className="mt-4 text-xs text-slate">
             An IIT Gandhinagar Student Venture
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-slate">
              <li><Link to="/products" className="hover:text-primary transition">Balance Sheet Assurance</Link></li>
              <li><Link to="/products" className="hover:text-primary transition flex items-center">AI Tax Compliance <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full ml-2">Soon</span></Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate">
              <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm text-white mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-slate">
               <li>
                <a href={`mailto:${appConfig.contactEmail}`} className="flex items-center gap-2 hover:text-primary transition">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
               <li>
                <a href={`tel:${appConfig.phone}`} className="flex items-center gap-2 hover:text-primary transition">
                  <Phone className="w-4 h-4" /> Phone
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-xs text-slate">© {new Date().getFullYear()} {appConfig.companyName}. All rights reserved.</div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
             <div className="text-xs text-slate">
                CIN: U62013GJ2025PTC170306 | Address: 3, Sardar Manjitsinh Ni Chali, Ahmedabad, Gujarat 380026
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

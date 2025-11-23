import React from 'react'
import appConfig from '../config/appConfig'
import { Mail, Linkedin, Twitter } from 'lucide-react'

const logoImage = '/assets/logo.png'

export default function Footer(){
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="logo" className="h-10 w-10" />
              <div className="text-sm font-bold">{appConfig.companyName}</div>
            </div>
            <p className="text-xs text-gray-400">AI-driven financial close automation for enterprises.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/product" className="hover:text-primary transition">Features</a></li>
              <li><a href="/product" className="hover:text-primary transition">Pricing</a></li>
              <li><a href="/product" className="hover:text-primary transition">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-primary transition">About</a></li>
              <li><a href="#" className="hover:text-primary transition">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-primary transition">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-xs text-gray-400">© {new Date().getFullYear()} {appConfig.companyName}. All rights reserved.</div>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href={`mailto:${appConfig.contactEmail}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition">
              <Mail className="w-4 h-4" />
              {appConfig.contactEmail}
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="text-gray-400 hover:text-primary transition"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

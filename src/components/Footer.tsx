import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import logoImage from '../assets/logo.png';
import appConfig from '../config/appConfig';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <img src={logoImage} alt="Torvyn AI" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              {appConfig.description}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 flex items-center justify-center transition-all group"
              >
                <Linkedin size={16} className="text-slate-400 group-hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 flex items-center justify-center transition-all group"
              >
                <Twitter size={16} className="text-slate-400 group-hover:text-cyan-400" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 flex items-center justify-center transition-all group"
              >
                <Github size={16} className="text-slate-400 group-hover:text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Products</h4>
            <ul className="space-y-3 text-sm">
              {appConfig.products.map((product) => (
                <li key={product.slug}>
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                  >
                    {product.name}
                    {product.status === 'coming-soon' && (
                      <span className="status-badge coming-soon text-xs">Soon</span>
                    )}
                    {product.status === 'live' && (
                      <span className="status-badge live text-xs">Live</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${appConfig.contactEmail}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span className="break-all">{appConfig.contactEmail}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${appConfig.phone}`}
                  className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  {appConfig.phone}
                </a>
              </li>
              <li className="text-slate-400 flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="text-xs">Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} {appConfig.companyName}. All rights reserved.
            </div>
            <div className="text-xs text-slate-400 text-center md:text-right flex flex-col gap-1">
              <div>CIN: U62013GJ2025PTC170306</div>
              <div>GSTIN: 24AAMCT5393A1ZB</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-slate-500">
              3, Sardar Manjitsinh Ni Chali, Ahmedabad, Gujarat 380026, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

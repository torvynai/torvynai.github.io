import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo.png';
import appConfig from '../config/appConfig';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/products', name: 'Our Products' },
    { to: '/about', name: 'About Us' },
    { to: '/contact', name: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-midnight/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0">
          <img src={logoImage} alt="Torvyn AI" className="h-10 w-10 object-contain" />
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-white leading-tight">{appConfig.companyName}</div>
            <div className="text-xs text-slate">An IIT Gandhinagar Student Venture</div>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`transition-colors ${location.pathname === link.to ? 'text-primary' : 'text-slate hover:text-primary'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href={appConfig.contactEmail} className="ml-4 inline-flex items-center px-5 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-semibold hover:bg-primary hover:text-black transition-all">
            Get in Touch
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight border-t border-white/5"
          >
            <div className="p-4 space-y-4">
              {navLinks.map(link => (
                  <Link 
                    key={link.to} 
                    to={link.to} 
                    className="block px-3 py-2 rounded-md text-white hover:bg-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
              ))}
              <a href={`mailto:${appConfig.contactEmail}`} className="block w-full text-left px-3 py-3 bg-primary/10 text-primary rounded-lg font-semibold">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

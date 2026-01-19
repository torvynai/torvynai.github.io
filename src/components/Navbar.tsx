import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import logoImage from '../assets/logo.png';
import appConfig from '../config/appConfig';

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', name: 'Home' },
    { to: '/products', name: 'Products' },
    { to: '/about', name: 'About' },
    { to: '/contact', name: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-navy-900/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
        : 'bg-navy-950/80 backdrop-blur-lg border-b border-white/5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group">
          <div className="flex flex-col gap-0.5">
            <img
              src={logoImage}
              alt="Torvyn AI"
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="text-xs text-cyan-400 font-medium">An IITians Venture</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition-all hover:text-cyan-400 relative group ${location.pathname === link.to ? 'text-cyan-400' : 'text-slate-300'
                }`}
            >
              {link.name}
              {location.pathname === link.to && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 btn-primary inline-flex items-center text-sm px-6 py-2.5"
          >
            <Sparkles size={16} className="mr-2" />
            Request Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
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
            className="md:hidden bg-navy-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="p-4 space-y-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg transition-all ${location.pathname === link.to
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    : 'text-slate-300 hover:bg-white/5'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block w-full btn-primary text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Sparkles size={16} className="inline mr-2" />
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

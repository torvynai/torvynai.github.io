import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import appConfig from '../config/appConfig'

const logoImage = '/assets/logo.png'

export default function Navbar(){
  const location = useLocation()
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-4 flex-shrink-0">
          <img src={logoImage} alt="Torvyn AI" className="h-14 w-14 object-contain" />
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-secondary leading-tight">{appConfig.companyName}</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/product" className={`transition-colors ${location.pathname === '/product' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
            Product
          </Link>
          <Link to="/about" className={`transition-colors ${location.pathname === '/about' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
            About
          </Link>
          <Link to="/contact" className={`transition-colors ${location.pathname === '/contact' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
            Contact
          </Link>
          <Link to="/login" className="ml-6 inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
            Platform Login
          </Link>
        </nav>
        <div className="md:hidden">
          <Link to="/login" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg font-semibold">Login</Link>
        </div>
      </div>
    </header>
  )
}

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductsPage from '../pages/Products'
import About from '../pages/About'
import Contact from '../pages/Contact'
import LoginRedirect from '../pages/LoginRedirect'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginredirect" element={<LoginRedirect />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

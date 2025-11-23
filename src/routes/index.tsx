import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import About from '../pages/About'
import Contact from '../pages/Contact'
import LoginRedirect from '../pages/LoginRedirect'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginRedirect />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

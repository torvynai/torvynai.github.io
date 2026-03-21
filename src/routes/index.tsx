import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import LoginRedirect from '../pages/LoginRedirect'
import Docs from '../pages/Docs'
import GettingStarted from '../pages/docs/GettingStarted'
import SAPSetup from '../pages/docs/SAPSetup'
import AdminGuide from '../pages/docs/AdminGuide'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Router() {
  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginredirect" element={<LoginRedirect />} />

          {/* Documentation */}
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          <Route path="/docs/sap-setup" element={<SAPSetup />} />
          <Route path="/docs/admin-guide" element={<AdminGuide />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

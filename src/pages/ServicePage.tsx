import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import appConfig from '../config/appConfig';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = appConfig.services.find(s => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = `${appConfig.companyName} - ${service.name}`;
    } else {
      document.title = `${appConfig.companyName} - Service Not Found`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <h1 className="text-4xl font-bold text-secondary mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-8">The service you are looking for does not exist.</p>
        <Link 
          to="/#services" 
          className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-primary/90 transition-all"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Back to All Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-primary/10 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{service.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-secondary mb-6">About the Service</h2>
          <div className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
            {service.description}
          </div>
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Contact Us <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </main>
    </div>
  );
}

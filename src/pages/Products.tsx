import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import appConfig from '../config/appConfig';
import SectionHeader from '../components/SectionHeader';

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'balance': return <div className="w-10 h-10 text-primary" />;
    case 'tax': return <div className="w-10 h-10 text-primary" />;
    default: return <div className="w-10 h-10 text-primary" />;
  }
};

export default function ProductsPage() {
  useEffect(() => {
    document.title = `${appConfig.companyName} - Our Products`;
  }, []);

  return (
    <div>
      <section className="bg-midnight py-20 text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-slate max-w-3xl">Pioneering AI-driven solutions for the modern financial landscape.</p>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {appConfig.products.map((product) => (
            <motion.div 
              key={product.slug}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl h-auto w-full flex flex-col overflow-hidden relative"
            >
              <div className="p-8 flex-grow">
                <div className="mb-6">
                    <div className="mb-4 inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 border border-primary/20">
                        {getIcon(product.icon)}
                    </div>
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl font-bold text-secondary leading-tight">{product.name}</h3>
                    </div>
                </div>
                
                <p className="text-slate leading-relaxed text-sm mb-6 border-b border-white/5 pb-4">{product.description}</p>

              </div>
              <div className="p-6 border-t border-white/6 bg-white/5 mt-auto">
                <a 
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-semibold hover:bg-primary hover:text-black transition-all duration-300 group"
                >
                  Visit Website <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

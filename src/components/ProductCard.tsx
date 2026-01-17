import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, FileText, PieChart, Activity } from 'lucide-react';
import { Product } from '../config/appConfig';

interface ProductCardProps {
  product: Product;
}

const getIcon = (iconName?: string) => {
  switch (iconName) {
    case 'balance': return <FileText className="w-10 h-10 text-primary" />;
    case 'tax': return <PieChart className="w-10 h-10 text-primary" />;
    default: return <Activity className="w-10 h-10 text-primary" />;
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl h-auto min-h-[400px] w-full max-w-md flex flex-col mx-4 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
         {getIcon(product.icon)}
      </div>
      <div className="p-8 flex-grow">
        <div className="mb-6">
            <div className="mb-4 inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 border border-primary/20">
                {getIcon(product.icon)}
            </div>
            <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-bold text-secondary leading-tight">{product.name}</h3>
                <div className="trust-badge text-[10px] uppercase tracking-wider whitespace-nowrap px-2 py-1">On-Premise</div>
            </div>
        </div>
        
        <p className="text-slate leading-relaxed text-sm mb-6 border-b border-white/5 pb-4">{product.tagline}</p>
        
        <div className="space-y-3">
            {product.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-slate">
                <Check className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>{feature}</span>
                </div>
            ))}
        </div>
      </div>
      <div className="p-6 border-t border-white/6 bg-white/5 mt-auto">
        <Link 
          to={`/products/${product.slug}`} 
          className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg font-semibold hover:bg-primary hover:text-black transition-all duration-300 group"
        >
          Explore Product <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;

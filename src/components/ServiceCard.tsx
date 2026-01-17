import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Service } from '../config/appConfig';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 h-96 w-96 flex flex-col mx-4"
    >
      <div className="p-8 flex-grow overflow-hidden">
        <h3 className="text-xl font-bold text-secondary mb-3">{service.name}</h3>
        <p className="text-gray-600 leading-relaxed text-sm mb-4">{service.description}</p>
        <h4 className="font-semibold text-secondary mb-2">Key Features:</h4>
        <ul className="space-y-2 text-sm text-gray-600">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-8 bg-gray-50 rounded-b-xl mt-auto">
        <Link 
          to={`/services/${service.slug}`} 
          className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Learn More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

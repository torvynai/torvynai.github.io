import React from 'react'
import { motion } from 'framer-motion'

export default function FeatureCard({title, description, icon, className}:{title:string, description:string, icon?:React.ReactNode, className?:string}){
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
  return (
    <motion.div initial="hidden" whileInView="show" variants={cardVariants} viewport={{once:true}} whileHover={{y:-8}} className={`bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 ${className || ''}`}>
      <div className="flex items-start gap-4">
        <div className="text-primary w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">{icon}</div>
        <div>
          <div className="font-bold text-base text-secondary mb-2">{title}</div>
          <div className="text-sm text-gray-600 leading-relaxed">{description}</div>
        </div>
      </div>
    </motion.div>
  )
}

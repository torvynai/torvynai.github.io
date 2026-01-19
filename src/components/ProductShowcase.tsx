import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Product } from '../config/appConfig';

interface ProductShowcaseProps {
    product: Product;
    delay?: number;
}

export default function ProductShowcase({ product, delay = 0 }: ProductShowcaseProps) {
    const isLive = product.status === 'live';
    const isComingSoon = product.status === 'coming-soon';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="premium-card h-full flex flex-col relative overflow-hidden group"
        >
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-10">
                {isLive && (
                    <span className="status-badge live">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Live
                    </span>
                )}
                {isComingSoon && (
                    <span className="status-badge coming-soon">
                        <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></span>
                        Coming Soon
                    </span>
                )}
            </div>

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10 flex-grow">
                {/* Product Name */}
                <h3 className="text-2xl font-bold text-white mb-2 pr-24">
                    {product.name}
                </h3>

                {/* Tagline */}
                <p className="text-cyan-400 text-sm font-medium mb-4">
                    {product.tagline}
                </p>

                {/* Problem Statement */}
                <div className="mb-4 p-4 bg-red-500/5 border border-red-500/20 rounded-lg">
                    <h4 className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-2">
                        Challenge
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        {product.problemStatement}
                    </p>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {product.description}
                </p>

                {/* Outcomes */}
                {product.outcomes && product.outcomes.length > 0 && (
                    <div className="mb-6">
                        <h4 className="text-xs font-semibold text-gold-400 uppercase tracking-wide mb-3">
                            Key Outcomes
                        </h4>
                        <ul className="space-y-2">
                            {product.outcomes.slice(0, 3).map((outcome, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                                    <ArrowRight className="text-cyan-500 flex-shrink-0 mt-0.5" size={14} />
                                    <span>{outcome}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Metrics */}
                {product.metrics && product.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {product.metrics.map((metric, index) => (
                            <div key={index} className="text-center p-3 bg-white/5 rounded-lg border border-white/10">
                                <div className="text-lg font-bold text-gradient mb-1">
                                    {metric.value}
                                </div>
                                <div className="text-xs text-slate-400">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* CTA Button */}
            <div className="relative z-10 mt-auto pt-4 border-t border-white/10">
                <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
            w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold
            transition-all duration-300 group/btn
            ${isLive
                            ? 'bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg'
                            : 'bg-white/5 text-cyan-400 border border-cyan-500/30 hover:bg-white/10'
                        }
          `}
                >
                    {isLive ? 'Visit Product Website' : 'Join Waitlist'}
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>
    );
}

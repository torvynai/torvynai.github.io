import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface SolutionCardProps {
    problem: string;
    solution: string;
    outcomes: string[];
    icon?: React.ReactNode;
    delay?: number;
}

export default function SolutionCard({ problem, solution, outcomes, icon, delay = 0 }: SolutionCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="premium-card h-full"
        >
            {icon && (
                <div className="mb-4 text-cyan-500">
                    {icon}
                </div>
            )}

            <div className="mb-4">
                <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wide mb-2">
                    The Problem
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                    {problem}
                </p>
            </div>

            <div className="flex items-center justify-center my-4">
                <ArrowRight className="text-cyan-500" size={24} />
            </div>

            <div className="mb-4">
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                    The Solution
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                    {solution}
                </p>
            </div>

            {outcomes && outcomes.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-gold-400 uppercase tracking-wide mb-3">
                        Key Outcomes
                    </h4>
                    <ul className="space-y-2">
                        {outcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-slate-300">
                                <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                                <span>{outcome}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </motion.div>
    );
}

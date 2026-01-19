import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
    label: string;
    value: string;
    icon?: React.ReactNode;
    delay?: number;
}

export default function MetricCard({ label, value, icon, delay = 0 }: MetricCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="premium-card text-center"
        >
            {icon && (
                <div className="flex justify-center mb-4 text-cyan-500">
                    {icon}
                </div>
            )}
            <div className="metric-value mb-2">{value}</div>
            <div className="text-slate-400 text-sm font-medium uppercase tracking-wide">
                {label}
            </div>
        </motion.div>
    );
}

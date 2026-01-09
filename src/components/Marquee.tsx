import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ children, speed = 20 }) => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex"
      >
        <motion.div
          className="flex"
          whileHover={{ paused: true }}
          animate={{
            x: ['0%', '-100%'],
            transition: {
              ease: 'linear',
              duration: speed,
              repeat: Infinity,
            },
          }}
        >
          <div className="flex-shrink-0 flex">{children}</div>
          <div className="flex-shrink-0 flex">{children}</div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Marquee;

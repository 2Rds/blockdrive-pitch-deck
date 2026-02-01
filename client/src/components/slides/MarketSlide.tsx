/*
 * Slide 8: Market
 * TAM/SAM/SOM with Why Now
 * Design: Concentric circles visualization, breakdown on right
 */

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Scale, Cpu } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const }
  }
};

const marketSegments = [
  { 
    label: 'TAM', 
    value: '$25-35B', 
    description: 'Privacy-sensitive segment of $130B+ cloud market',
    color: 'text-slate-400',
  },
  { 
    label: 'SAM', 
    value: '$4-8B', 
    description: 'US SMB & Mid-Market in target verticals',
    color: 'text-blue-400',
  },
  { 
    label: 'SOM', 
    value: '$10-25M', 
    description: 'Crypto/Web3 + crypto law firms (Year 1)',
    color: 'text-cyan-400',
  },
];

const whyNow = [
  { icon: Shield, stat: '<10%', text: 'of enterprises encrypt 80%+ of cloud data' },
  { icon: Scale, stat: '20', text: 'US states with new privacy laws' },
  { icon: TrendingUp, stat: '68%', text: 'of financial firms cite security as top cloud barrier' },
  { icon: Cpu, stat: 'AI', text: 'making traditional security obsolete' },
];

export default function MarketSlide() {
  return (
    <div className="w-full min-h-full flex items-start justify-center p-4 md:p-6 pt-8 md:pt-12 pb-20 overflow-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full"
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label mb-2">
          Market Opportunity
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-6">
          Privacy-Sensitive Cloud Storage
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Market visualization image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="glass-card p-3 max-w-xs">
              <img 
                src="/images/market-growth-abstract.png" 
                alt="TAM SAM SOM Market Visualization"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* Market breakdown */}
          <motion.div variants={itemVariants} className="space-y-3">
            {marketSegments.map((segment, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`glass-card p-3 ${i === 2 ? 'border-cyan-500/30' : ''}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-sm font-bold ${segment.color}`}>
                    {segment.label}
                  </span>
                  <span className="text-lg font-bold text-white">{segment.value}</span>
                </div>
                <p className="text-xs text-slate-400">{segment.description}</p>
                {i === 2 && (
                  <span className="inline-block mt-1 text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded">
                    25-30% CAGR
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Why Now */}
        <motion.div variants={itemVariants} className="mt-6">
          <h3 className="text-xs text-slate-500 uppercase tracking-wide mb-3">Why Now</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {whyNow.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass-card p-3 flex items-start gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-sm font-bold text-white">{item.stat}</span>
                  <p className="text-[10px] text-slate-400 mt-0.5">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

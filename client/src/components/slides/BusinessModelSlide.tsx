/*
 * Slide 7: Business Model
 * SaaS with Web3 Leverage
 * Design: Two-column layout, pricing tiers + unit economics
 */

import { motion } from 'framer-motion';
import { Check, TrendingUp, Percent, Users } from 'lucide-react';
import CountUp from '@/components/CountUp';

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

const pricingTiers = [
  { name: 'Pro', price: '$9', period: '/mo', storage: '200GB', highlight: false },
  { name: 'Power', price: '$49', period: '/mo', storage: '2TB', highlight: false },
  { name: 'Scale', price: '$29', period: '/seat', storage: '1TB', highlight: true },
  { name: 'Enterprise', price: '$49', period: '/seat', storage: 'Custom', highlight: false },
];

const unitEconomics = [
  { icon: Percent, value: 85, suffix: '%+', label: 'Gross Margin Target' },
  { icon: TrendingUp, value: 73, suffix: '%', label: 'Cost Reduction vs Traditional' },
  { icon: Users, value: 3, suffix: '.0x+', label: 'LTV:CAC Target' },
];

export default function BusinessModelSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 md:p-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full"
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label mb-4">
          Business Model
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-10">
          SaaS with Web3 Leverage
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pricing tiers */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm text-slate-500 uppercase tracking-wide mb-4">Pricing Tiers</h3>
            <div className="grid grid-cols-2 gap-3">
              {pricingTiers.map((tier, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-xl ${
                    tier.highlight 
                      ? 'glass-card-highlight glow-cyan' 
                      : 'glass-card'
                  }`}
                >
                  {tier.highlight && (
                    <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">Popular</span>
                  )}
                  <h4 className="text-lg font-semibold text-white mt-1">{tier.name}</h4>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-2xl font-bold text-white">{tier.price}</span>
                    <span className="text-sm text-slate-400">{tier.period}</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-2">{tier.storage} Storage</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Unit economics */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm text-slate-500 uppercase tracking-wide mb-4">Unit Economics</h3>
            <div className="space-y-4">
              {unitEconomics.map((metric, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass-card p-4 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-white">
                      <CountUp end={metric.value} suffix={metric.suffix} decimals={metric.suffix.includes('.') ? 1 : 0} />
                    </div>
                    <p className="text-sm text-slate-400">{metric.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* NFT note */}
            <div className="glass-card p-4 mt-4 border-blue-500/20">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-sm text-white font-medium">NFT-Based Subscriptions</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Censorship-resistant membership with potential secondary market for enterprise licenses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

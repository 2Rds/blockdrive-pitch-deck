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
  { name: 'Pro', price: '$9', period: '/mo', features: ['200GB Storage', 'Unlimited bandwidth'], highlight: false },
  { name: 'Power', price: '$49', period: '/mo', features: ['2TB Storage', 'Unlimited bandwidth'], highlight: false },
  { name: 'Scale', price: '$29', period: '/seat', features: ['1TB Storage', '2-seat minimum', 'Unlimited bandwidth'], highlight: true, badge: 'vs 3-seat competitors' },
  { name: 'Enterprise', price: '$49', period: '/seat', features: ['Custom Storage', 'Unlimited bandwidth', 'Custom SLA'], highlight: false },
];

const unitEconomics = [
  { icon: Percent, value: 85, suffix: '%+', label: 'Gross Margin Target', decimals: 0 },
  { icon: TrendingUp, value: 73, suffix: '%', label: 'Cost Reduction vs Traditional', decimals: 0 },
  { icon: Users, value: 3, suffix: 'x+', label: 'LTV:CAC Target', decimals: 1 },
];

export default function BusinessModelSlide() {
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
          Business Model
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-6">
          SaaS with Web3 Leverage
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pricing tiers */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xs text-slate-500 uppercase tracking-wide mb-3">Pricing Tiers</h3>
            <div className="grid grid-cols-2 gap-2">
              {pricingTiers.map((tier, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`p-3 rounded-xl ${
                    tier.highlight 
                      ? 'glass-card-highlight glow-cyan' 
                      : 'glass-card'
                  }`}
                >
                  {tier.highlight && (
                    <span className="text-[10px] text-cyan-400 font-medium uppercase tracking-wide">Popular</span>
                  )}
                  {'badge' in tier && tier.badge && (
                    <span className="block text-[9px] text-green-400 font-medium mt-0.5">{tier.badge}</span>
                  )}
                  <h4 className="text-base font-semibold text-white mt-1">{tier.name}</h4>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xl font-bold text-white">{tier.price}</span>
                    <span className="text-xs text-slate-400">{tier.period}</span>
                  </div>
                  <div className="mt-2 space-y-0.5">
                    {tier.features.map((feature, fi) => (
                      <div key={fi} className="flex items-center gap-1">
                        <Check className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] text-slate-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Unit economics */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xs text-slate-500 uppercase tracking-wide mb-3">Unit Economics</h3>
            <div className="space-y-2">
              {unitEconomics.map((metric, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass-card p-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <metric.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xl font-bold text-white">
                      <CountUp end={metric.value} suffix={metric.suffix} decimals={metric.decimals} />
                    </div>
                    <p className="text-xs text-slate-400">{metric.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* NFT note */}
            <div className="glass-card p-3 mt-3 border-blue-500/20">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-xs text-white font-medium">NFT-Based Subscriptions</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Censorship-resistant membership with secondary market potential.
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

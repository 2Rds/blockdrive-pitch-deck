/*
 * Slide 6: Traction / Validation
 * Technical readiness and early metrics
 * Design: Clean metrics, checkmarks for completed items
 */

import { motion } from 'framer-motion';
import { Check, Users, Play, Code, Rocket } from 'lucide-react';
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

const metrics = [
  { icon: Users, value: 500, suffix: '+', label: 'Waitlist Signups' },
  { icon: Play, value: 150, suffix: '+', label: 'Demo Completions' },
  { icon: Code, value: 100, suffix: '%', label: 'Core Architecture' },
  { icon: Rocket, value: 1, suffix: '', label: 'Solana Program (Devnet)', isLive: true },
];

const technicalReadiness = [
  { item: 'Programmed Incompleteness', complete: true },
  { item: 'Multi-PDA Sharding (25K+ files/user)', complete: true },
  { item: 'Gasless Operations', complete: true },
  { item: 'Open Source Recovery SDK', complete: true },
  { item: 'Enterprise SSO Integration', complete: false },
  { item: 'SOC 2 Compliance', complete: false },
];

export default function TractionSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 md:p-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full"
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label mb-4">
          Traction
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-10">
          Building Momentum
        </motion.h2>

        {/* Metrics grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5 text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                <metric.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="metric-value text-white mb-1">
                {metric.isLive ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span>Live</span>
                  </span>
                ) : (
                  <CountUp end={metric.value} suffix={metric.suffix} />
                )}
              </div>
              <p className="text-sm text-slate-400">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical readiness */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-green-400" />
              Technical Readiness
            </h3>
            <div className="space-y-3">
              {technicalReadiness.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    item.complete ? 'bg-green-500/20' : 'bg-slate-700'
                  }`}>
                    {item.complete ? (
                      <Check className="w-3 h-3 text-green-400" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-500" />
                    )}
                  </div>
                  <span className={item.complete ? 'text-white' : 'text-slate-500'}>
                    {item.item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quote / validation */}
          <div className="glass-card-highlight p-6 flex flex-col justify-center">
            <blockquote className="text-lg text-white italic mb-4">
              "The architecture is elegant—they've solved the key management problem in a way I haven't seen before."
            </blockquote>
            <p className="text-sm text-cyan-400">
              — Technical Advisor, Former AWS Security Lead
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

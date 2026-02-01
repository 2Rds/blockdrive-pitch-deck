/*
 * Slide 2: Problem
 * "Keep Them Out" Is Failing + stats + AI acceleration
 * Design: Stats in cards with red/orange accents, AI section prominent
 */

import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Lock, Key, Fingerprint, Bot } from 'lucide-react';
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

const stats = [
  { value: 10.2, prefix: '$', suffix: 'M', label: 'Avg US Breach Cost', source: 'IBM 2024' },
  { value: 54, suffix: '', label: 'Records Compromised/Second', source: 'Global' },
  { value: 83, suffix: '%', label: 'Enterprises Breached (2 yrs)', source: 'Industry' },
  { value: 277, suffix: '', label: 'Days to Identify Breach', source: 'IBM 2024' },
];

const oldPlaybook = [
  { icon: Shield, text: 'Firewalls', result: 'They get through' },
  { icon: Lock, text: 'Encryption', result: 'Keys get compromised' },
  { icon: Key, text: 'Access control', result: 'Credentials get stolen' },
  { icon: Fingerprint, text: 'Zero-trust', result: 'Still assumes prevention' },
];

export default function ProblemSlide() {
  return (
    <div className="w-full min-h-full flex items-start justify-center p-4 md:p-6 pt-8 md:pt-12 pb-20 overflow-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full"
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label mb-4">
          The Problem
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-3">
          "Keep Them Out" Is Failing
        </motion.h2>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8 max-w-3xl">
          The entire security industry has spent 30 years on one strategy: prevent access. It's not working.
        </motion.p>

        {/* Stats grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-5"
            >
              <div className="metric-value text-red-400 mb-1">
                <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.value % 1 !== 0 ? 1 : 0} />
              </div>
              <p className="text-sm text-slate-300 mb-1">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.source}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Old playbook - crossed out */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-sm text-slate-500 uppercase tracking-wide mb-3">The Old Playbook</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {oldPlaybook.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-500">
                <item.icon className="w-4 h-4 text-slate-600" />
                <span className="line-through text-sm">{item.text}</span>
                <span className="text-xs text-red-400/70">→ {item.result}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Section */}
        <motion.div variants={itemVariants} className="glass-card p-6 border-orange-500/30 bg-orange-500/5">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-orange-500/20">
              <Bot className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-lg font-semibold text-orange-400 mb-2">
                And AI is about to make it catastrophically worse.
              </p>
              <ul className="space-y-1 text-sm text-slate-400">
                <li>• AI-powered attacks operate 24/7 with no fatigue</li>
                <li>• LLMs write sophisticated malware faster than defenders can patch</li>
                <li>• Zero-day acceleration: AI shrinks the window to hours</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom line */}
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <p className="text-lg text-slate-300">
            The "keep them out" model was already failing. In the AI era, it becomes fantasy.
          </p>
          <p className="text-xl font-semibold text-cyan-400 mt-2">
            We need a new paradigm.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

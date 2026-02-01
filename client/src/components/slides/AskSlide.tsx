/*
 * Slide 11: Ask
 * $2M @ $12M + use of funds + milestones
 * Design: Centered, clean. Closing line LARGE and memorable.
 */

import { motion } from 'framer-motion';
import { Target, TrendingUp, Building, Mail, Globe } from 'lucide-react';
import CountUp from '@/components/CountUp';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
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

const useOfFunds = [
  { category: 'Engineering', percentage: 40, color: 'bg-cyan-500' },
  { category: 'Sales & Marketing', percentage: 25, color: 'bg-blue-500' },
  { category: 'Ops & Buffer', percentage: 20, color: 'bg-slate-500' },
  { category: 'Product', percentage: 15, color: 'bg-green-500' },
];

const milestones = [
  { year: 'Y1', title: 'Crypto Beachhead', target: '$1M ARR', icon: Target },
  { year: 'Y2', title: 'Vertical Expansion', target: 'Healthcare, Legal, Family Offices', icon: TrendingUp },
  { year: 'Y3', title: 'Series A', target: 'Enterprise & Mid-Market', icon: Building },
];

export default function AskSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 md:p-12 overflow-y-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full"
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label mb-4 text-center">
          The Ask
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="hero-title text-white mb-2 text-center">
          Raising <span className="text-cyan-400">$2M</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-xl text-slate-400 mb-10 text-center">
          Seed Round • $12M Post-Money SAFE
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Use of funds */}
          <motion.div variants={itemVariants} className="glass-card p-6">
            <h3 className="text-sm text-slate-500 uppercase tracking-wide mb-4">Use of Funds</h3>
            <div className="space-y-4">
              {useOfFunds.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">{item.category}</span>
                    <span className="text-white font-medium">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' as const }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Runway: ~24 months at planned burn rate
            </p>
          </motion.div>

          {/* Milestones */}
          <motion.div variants={itemVariants} className="glass-card p-6">
            <h3 className="text-sm text-slate-500 uppercase tracking-wide mb-4">Milestones</h3>
            <div className="space-y-4">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    i === 0 ? 'bg-cyan-500/20' : i === 1 ? 'bg-blue-500/20' : 'bg-green-500/20'
                  }`}>
                    <milestone.icon className={`w-5 h-5 ${
                      i === 0 ? 'text-cyan-400' : i === 1 ? 'text-blue-400' : 'text-green-400'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        i === 0 ? 'bg-cyan-500/20 text-cyan-400' : 
                        i === 1 ? 'bg-blue-500/20 text-blue-400' : 
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {milestone.year}
                      </span>
                      <span className="text-white font-medium">{milestone.title}</span>
                    </div>
                    <p className="text-sm text-slate-400 mt-1">{milestone.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Thesis callback */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <p className="text-slate-400 italic">
            For 30 years, security meant keeping attackers out.
            <br />
            We're building something different.
          </p>
        </motion.div>

        {/* Closing line - THE MEMORABLE MOMENT */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-10"
        >
          <motion.blockquote 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            "Hack us all you want—
            <br />
            <span className="text-cyan-400">you get nothing.</span>"
          </motion.blockquote>
        </motion.div>

        {/* Contact */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
          <p className="text-white font-medium">Sean Weiss, CEO</p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="mailto:sean@blockdrive.co" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">sean@blockdrive.co</span>
            </a>
            <a href="https://blockdrive.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm">blockdrive.co</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

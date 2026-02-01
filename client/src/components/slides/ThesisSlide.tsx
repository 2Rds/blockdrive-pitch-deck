/*
 * Slide 3: The Paradigm Shift (Thesis)
 * Old vs New paradigm comparison
 * Design: Two-column comparison, thesis statement large and centered
 */

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

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

const comparisons = [
  { old: 'Keep attackers out', new: 'Assume they get in' },
  { old: 'Security through prevention', new: 'Security through architecture' },
  { old: 'If they breach, you lose', new: 'If they breach, they get nothing' },
  { old: 'Hope the walls hold', new: 'Make the target worthless' },
];

export default function ThesisSlide() {
  return (
    <div className="w-full min-h-full flex items-start justify-center p-4 md:p-6 pt-8 md:pt-12 pb-20 overflow-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full"
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label mb-4 text-center">
          The Thesis
        </motion.p>

        {/* Comparison table */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Old Paradigm */}
          <div className="glass-card p-6 border-red-500/20 bg-red-500/5 opacity-60">
            <div className="flex items-center gap-2 mb-4">
              <X className="w-5 h-5 text-red-400" />
              <h3 className="text-lg font-semibold text-red-400 uppercase tracking-wide">Old Paradigm</h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, i) => (
                <li key={i} className="text-slate-400 line-through text-sm md:text-base">
                  {item.old}
                </li>
              ))}
            </ul>
          </div>

          {/* New Paradigm */}
          <div className="glass-card-highlight p-6 glow-cyan">
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-cyan-400 uppercase tracking-wide">New Paradigm</h3>
            </div>
            <ul className="space-y-3">
              {comparisons.map((item, i) => (
                <li key={i} className="text-white font-medium text-sm md:text-base">
                  {item.new}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Central thesis statement */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            "We inverted 30 years of security thinking."
          </blockquote>
          <p className="text-slate-400 mt-4 text-lg">
            Instead of trying to prevent breaches, we made breaches pointless.
          </p>
        </motion.div>

        {/* The question */}
        <motion.div variants={itemVariants} className="glass-card p-6 text-center">
          <p className="text-slate-300 text-lg mb-4">
            What if an attacker could penetrate every storage provider we use—and still walk away with nothing usable?
          </p>
          <p className="text-2xl font-bold text-cyan-400">
            That's BlockDrive.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

/*
 * Slide 4: Solution
 * Programmed Incompleteness
 * Design: Technical diagram with explanation
 */

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

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

const claims = [
  { claim: "IPFS can't be breached", truth: false },
  { claim: "R2 can't be breached", truth: false },
  { claim: "We're unhackable", truth: false },
  { claim: "Breaches yield nothing usable", truth: true },
  { claim: "Complete files never exist", truth: true },
  { claim: "Hacking is pointless", truth: true },
];

export default function SolutionSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 md:p-12 overflow-y-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full"
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label mb-4">
          The Solution
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-3">
          Programmed Incompleteness
        </motion.h2>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-8">
          We don't just encrypt data. We make it permanently incomplete.
        </motion.p>

        {/* Visual diagram */}
        <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Flow diagram - using generated image */}
          <div className="glass-card p-4 overflow-hidden">
            <img 
              src="/images/data-split-visualization.png" 
              alt="Programmed Incompleteness - Data Split Visualization"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-xs text-slate-500 mt-3 text-center">
              Without the 16 bytes, the file is cryptographic garbage—impossible to reconstruct.
            </p>
          </div>

          {/* Key point + claims */}
          <div className="space-y-6">
            {/* Key point */}
            <div className="glass-card-highlight p-6">
              <p className="text-lg text-white font-medium mb-2">
                Without the 16 bytes, the file is cryptographic garbage
              </p>
              <p className="text-slate-400">
                Impossible to reconstruct even with unlimited compute.
              </p>
            </div>

            {/* Claims table */}
            <div className="glass-card p-6">
              <p className="text-sm text-slate-500 uppercase tracking-wide mb-4">Intellectual Honesty</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                <div>
                  <p className="text-xs text-red-400 uppercase tracking-wide mb-2">We DON'T claim</p>
                  {claims.filter(c => !c.truth).map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                      <X className="w-3 h-3 text-red-400" />
                      {c.claim}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs text-green-400 uppercase tracking-wide mb-2">We DO claim</p>
                  {claims.filter(c => c.truth).map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white mb-1">
                      <Check className="w-3 h-3 text-green-400" />
                      {c.claim}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

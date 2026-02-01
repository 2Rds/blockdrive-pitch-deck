/*
 * Slide 9: Competition
 * They're Playing the Old Game
 * Design: Matrix table with BlockDrive highlighted
 */

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 }
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

const features = [
  { name: 'Paradigm', blockdrive: 'Breach-pointless', dropbox: 'Prevention', filecoin: 'Prevention', tresorit: 'Prevention' },
  { name: 'Complete Files Stored', blockdrive: 'Never', dropbox: 'Yes', filecoin: 'Yes', tresorit: 'Yes' },
  { name: 'Breach = Data Loss', blockdrive: false, dropbox: true, filecoin: true, tresorit: true },
  { name: 'True Zero-Knowledge', blockdrive: true, dropbox: false, filecoin: false, tresorit: 'partial' },
  { name: 'Provable Deletion', blockdrive: true, dropbox: false, filecoin: false, tresorit: false },
  { name: 'Provider Immunity', blockdrive: true, dropbox: false, filecoin: 'gray', tresorit: false },
];

const renderValue = (value: boolean | string, isBlockDrive: boolean = false) => {
  if (typeof value === 'boolean') {
    if (value) {
      return <Check className={`w-5 h-5 ${isBlockDrive ? 'text-cyan-400' : 'text-green-400'}`} />;
    }
    return <X className="w-5 h-5 text-red-400/50" />;
  }
  if (value === 'partial' || value === 'gray') {
    return <Minus className="w-5 h-5 text-yellow-400/50" />;
  }
  return <span className={`text-sm ${isBlockDrive ? 'text-cyan-400 font-semibold' : 'text-slate-400'}`}>{value}</span>;
};

export default function CompetitionSlide() {
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
          Competitive Landscape
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-2">
          They're Playing the Old Game
        </motion.h2>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-sm text-slate-400 mb-4">
          Every competitor is still trying to "keep attackers out." We made breaches irrelevant.
        </motion.p>

        {/* Comparison matrix */}
        <motion.div variants={itemVariants} className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-sm text-slate-500 font-medium">Feature</th>
                <th className="text-center py-3 px-4 text-sm text-cyan-400 font-bold bg-cyan-500/10 rounded-t-lg">BlockDrive</th>
                <th className="text-center py-3 px-4 text-sm text-slate-500 font-medium">Dropbox/Box</th>
                <th className="text-center py-3 px-4 text-sm text-slate-500 font-medium">Filecoin/StorJ</th>
                <th className="text-center py-3 px-4 text-sm text-slate-500 font-medium">Tresorit</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <motion.tr 
                  key={i}
                  variants={itemVariants}
                  className={`border-b border-slate-800 ${i === 0 ? 'bg-slate-800/30' : ''}`}
                >
                  <td className="py-3 px-4 text-sm text-slate-300 font-medium">
                    {feature.name}
                    {i === 0 && <span className="ml-2 text-xs text-cyan-400">★</span>}
                  </td>
                  <td className="py-3 px-4 text-center bg-cyan-500/5">
                    {renderValue(feature.blockdrive, true)}
                  </td>
                  <td className="py-3 px-4 text-center opacity-60">
                    {renderValue(feature.dropbox)}
                  </td>
                  <td className="py-3 px-4 text-center opacity-60">
                    {renderValue(feature.filecoin)}
                  </td>
                  <td className="py-3 px-4 text-center opacity-60">
                    {renderValue(feature.tresorit)}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom line */}
        <motion.div variants={itemVariants} className="mt-8 glass-card-highlight p-6 text-center">
          <p className="text-slate-300 mb-2">
            Every competitor stores complete files somewhere. When they get breached, data is exposed.
          </p>
          <p className="text-lg font-semibold text-white">
            We don't store complete files. When we get breached, attackers get{' '}
            <span className="text-cyan-400">cryptographic garbage</span>.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

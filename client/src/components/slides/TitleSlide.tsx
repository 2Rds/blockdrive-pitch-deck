/*
 * Slide 1: Title
 * BlockDrive + tagline + raise amount
 * Design: Full-screen dark gradient with hero image, centered content
 */

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const }
  }
};

export default function TitleSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/hero-security-fortress.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center relative z-10"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl accent-gradient flex items-center justify-center glow-cyan">
            <Shield className="w-10 h-10 text-[#0a0a0f]" />
          </div>
        </motion.div>

        {/* Company name */}
        <motion.h1 
          variants={itemVariants}
          className="hero-title text-white mb-6"
        >
          BlockDrive
        </motion.h1>

        {/* Tagline */}
        <motion.p 
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-300 mb-4 font-medium"
        >
          Enterprise Cloud Storage for the New Internet
        </motion.p>

        {/* Subtext */}
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          The first storage platform where breaches are architecturally pointless.
        </motion.p>

        {/* Raise info card */}
        <motion.div 
          variants={itemVariants}
          className="inline-block"
        >
          <div className="glass-card-highlight px-8 py-6 glow-cyan">
            <p className="text-sm text-cyan-400 font-medium tracking-wide uppercase mb-2">
              Seed Round
            </p>
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">
              $2M
            </p>
            <p className="text-slate-300">
              $12M Post-Money SAFE
            </p>
          </div>
        </motion.div>

        {/* Confidential note */}
        <motion.p 
          variants={itemVariants}
          className="text-xs text-slate-500 mt-12"
        >
          Confidential Investment Materials
        </motion.p>
      </motion.div>
    </div>
  );
}

/*
 * Slide 5: How It Works
 * Three steps to breach-proof storage
 * Design: Three cards with step numbers, icons, connection line
 */

import { motion } from 'framer-motion';
import { Lock, Cloud, Wallet } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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

const steps = [
  {
    number: '01',
    title: 'Encrypt & Split',
    icon: Lock,
    description: 'Your file is encrypted client-side with AES-256-GCM using a wallet-derived key. 16 critical bytes are extracted and stored separately—the main file becomes mathematically incomplete.',
    color: 'cyan',
  },
  {
    number: '02',
    title: 'Distributed Storage',
    icon: Cloud,
    description: 'Encrypted data goes to enterprise-grade IPFS. The 16 bytes are wrapped in zero-knowledge proofs and stored on Cloudflare R2. A commitment hash is recorded on Solana.',
    color: 'blue',
  },
  {
    number: '03',
    title: 'Secure Retrieval',
    icon: Wallet,
    description: 'When you need your files, both pieces are fetched and recombined client-side. Only your wallet can decrypt—no one else, not even BlockDrive, can access your data.',
    color: 'green',
  },
];

const colorClasses = {
  cyan: {
    bg: 'bg-cyan-500/20',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
    glow: 'shadow-cyan-500/20',
  },
  blue: {
    bg: 'bg-blue-500/20',
    text: 'text-blue-400',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
  },
  green: {
    bg: 'bg-green-500/20',
    text: 'text-green-400',
    border: 'border-green-500/30',
    glow: 'shadow-green-500/20',
  },
};

export default function HowItWorksSlide() {
  return (
    <div className="w-full h-full flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/images/blockchain-security-abstract.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full relative z-10"
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label mb-4">
          How It Works
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-10">
          Three Steps to Breach-Proof Storage
        </motion.h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-green-500/50" />

          {steps.map((step, i) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
                className={`glass-card p-6 relative ${colors.border} hover:shadow-lg ${colors.glow}`}
              >
                {/* Step number */}
                <div className={`absolute -top-3 left-6 px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-sm font-bold`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 mt-2`}>
                  <step.icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

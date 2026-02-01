/*
 * Slide 6: What We've Built
 * Complete product vision - demo-ready MVP
 * Design: Confident, shows full capability
 */

import { motion } from 'framer-motion';
import { Check, Shield, Database, Lock, Cloud, Globe, Key, Smartphone, Building2 } from 'lucide-react';

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

const coreCapabilities = [
  { icon: Shield, item: 'Programmed Incompleteness Engine', desc: '16-byte split makes breaches pointless' },
  { icon: Lock, item: 'AES-256-GCM Encryption', desc: 'Client-side, wallet-derived keys' },
  { icon: Database, item: 'Multi-PDA Sharding', desc: '25,000+ files per user' },
  { icon: Cloud, item: 'Hybrid Multi-Cloud', desc: 'IPFS + Cloudflare R2 + Solana' },
];

const userExperience = [
  { icon: Smartphone, item: 'Web Application', desc: 'Familiar cloud storage UX' },
  { icon: Key, item: 'Gasless Operations', desc: 'No crypto complexity for users' },
  { icon: Globe, item: 'Open Source Recovery SDK', desc: 'Zero vendor lock-in guarantee' },
];

const enterpriseReady = [
  { icon: Building2, item: 'Crossmint Embedded Wallets', desc: 'Email/passkey authentication' },
  { item: 'Stripe + Crypto Payments', desc: 'Unified subscription billing' },
  { item: 'Provable Deletion', desc: 'On-chain audit trail' },
];

export default function TractionSlide() {
  return (
    <div className="w-full min-h-full flex items-start justify-center p-4 md:p-6 pt-8 md:pt-12 pb-20 overflow-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full"
      >
        {/* Section label */}
        <motion.p variants={itemVariants} className="section-label mb-4">
          What We've Built
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-3">
          Demo-Ready MVP
        </motion.h2>
        
        <motion.p variants={itemVariants} className="text-slate-400 mb-10 max-w-2xl">
          A complete breach-proof cloud storage platform with enterprise-grade UX.
        </motion.p>

        {/* Three column layout */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
          
          {/* Core Security */}
          <div className="glass-card-highlight p-6">
            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              Core Security Layer
            </h3>
            <div className="space-y-4">
              {coreCapabilities.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{item.item}</p>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Experience */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-green-400" />
              User Experience
            </h3>
            <div className="space-y-4">
              {userExperience.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{item.item}</p>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise Ready */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-400" />
              Enterprise Ready
            </h3>
            <div className="space-y-4">
              {enterpriseReady.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{item.item}</p>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom callout */}
        <motion.div variants={itemVariants} className="mt-8 glass-card p-4 text-center">
          <p className="text-white text-sm">
            <span className="text-cyan-400 font-semibold">Live demo available</span>
            <span className="text-slate-400"> — Upload, store, and retrieve files with breach-proof architecture</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

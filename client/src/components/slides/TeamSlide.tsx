/*
 * Slide 10: Team
 * Sean Weiss (CEO) + Roberto Cinque (CTO)
 * Design: Two cards with headshots, clean layout
 */

import { motion } from 'framer-motion';
import { Briefcase, Code, Users, Award } from 'lucide-react';

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

const team = [
  {
    name: 'Sean Weiss',
    role: 'Co-Founder & CEO',
    image: '/images/sean-weiss.jpg',
    highlights: [
      { icon: Users, text: '3x Founder with elite institutional network' },
      { icon: Award, text: 'Award-winning private wealth manager at top-tier institutions' },
      { icon: Briefcase, text: 'Proven track record in high-ticket client acquisition' },
      { icon: Users, text: 'Spearheading GTM as Head of Sales Year 1' },
    ],
    color: 'cyan',
  },
  {
    name: 'Roberto Cinque',
    role: 'Co-Founder & CTO',
    image: '/images/roberto-cinque.jpg',
    highlights: [
      { icon: Code, text: 'Architect of "Programmed Incompleteness"' },
      { icon: Code, text: 'Deep expertise: Rust, Solana Smart Contracts, ZK-Proofs' },
      { icon: Code, text: 'Full Stack Systems Engineering' },
      { icon: Award, text: 'Built enterprise-grade cryptographic systems' },
    ],
    color: 'blue',
  },
];

export default function TeamSlide() {
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
          The Team
        </motion.p>

        {/* Headline */}
        <motion.h2 variants={itemVariants} className="slide-title text-white mb-3">
          Built by Experts
        </motion.h2>

        {/* Subheadline */}
        <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-10">
          Co-founders bring complementary strengths in GTM execution and cryptographic engineering.
        </motion.p>

        {/* Team cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`glass-card p-6 ${
                member.color === 'cyan' ? 'border-cyan-500/20' : 'border-blue-500/20'
              }`}
            >
              {/* Avatar placeholder */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-20 h-20 rounded-xl ${
                  member.color === 'cyan' ? 'bg-cyan-500/20' : 'bg-blue-500/20'
                } flex items-center justify-center text-2xl font-bold ${
                  member.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'
                }`}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className={`text-sm ${
                    member.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'
                  }`}>
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                {member.highlights.map((highlight, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 ${
                      member.color === 'cyan' ? 'bg-cyan-500/10' : 'bg-blue-500/10'
                    }`}>
                      <highlight.icon className={`w-3.5 h-3.5 ${
                        member.color === 'cyan' ? 'text-cyan-400' : 'text-blue-400'
                      }`} />
                    </div>
                    <p className="text-sm text-slate-300">{highlight.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

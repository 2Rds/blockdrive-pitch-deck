/*
 * Slide 7: Interactive Demo - Mirrors blockdrive.co/demo
 * Auto-plays through all 4 steps with typing animation
 * Matches the exact design language of the live demo
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wallet, FileText, Lock, Share2, Check, 
  ArrowRight, Cloud, Database, Mail, Key,
  Shield, Upload, ChevronRight, RotateCcw
} from 'lucide-react';

type DemoStep = 0 | 1 | 2 | 3;

const STEPS = [
  { id: 0, label: 'Connect', icon: Wallet },
  { id: 1, label: 'Upload', icon: Upload },
  { id: 2, label: 'Encrypt', icon: Lock },
  { id: 3, label: 'Share', icon: Share2 },
] as const;

export default function DemoSlide() {
  const [currentStep, setCurrentStep] = useState<DemoStep>(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [accountCreated, setAccountCreated] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const [encryptProgress, setEncryptProgress] = useState(0);
  const [encryptComplete, setEncryptComplete] = useState(false);
  const [shareTyped, setShareTyped] = useState('');
  const [shareComplete, setShareComplete] = useState(false);
  const [demoComplete, setDemoComplete] = useState(false);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(interval);
  }, []);

  const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

  const typeText = useCallback(async (text: string, setter: (s: string) => void) => {
    for (let i = 0; i <= text.length; i++) {
      await sleep(90);
      setter(text.slice(0, i));
    }
  }, []);

  // Auto-play sequence - slowed down for viewer comprehension
  useEffect(() => {
    const runDemo = async () => {
      // Step 0: Connect - type username
      await sleep(1500);
      await typeText('investor', setTypedText);
      await sleep(800);
      setAccountCreated(true);
      await sleep(3000);

      // Step 1: Upload - select file
      setCurrentStep(1);
      await sleep(1500);
      setFileSelected(true);
      await sleep(2500);

      // Step 2: Encrypt - show progress
      setCurrentStep(2);
      await sleep(1000);
      for (let i = 0; i <= 100; i += 2) {
        await sleep(50);
        setEncryptProgress(Math.min(i, 100));
      }
      await sleep(800);
      setEncryptComplete(true);
      await sleep(3500);

      // Step 3: Share - type recipient
      setCurrentStep(3);
      await sleep(1200);
      await typeText('partner', setShareTyped);
      await sleep(800);
      setShareComplete(true);
      await sleep(2000);
      setDemoComplete(true);
    };

    runDemo();
  }, [typeText]);

  const Cursor = ({ show }: { show: boolean }) => (
    <span className={`inline-block w-0.5 h-5 bg-cyan-400 ml-0.5 transition-opacity ${show ? 'opacity-100' : 'opacity-0'}`} />
  );

  return (
    <div className="w-full h-full flex flex-col bg-[#0a0a0f] overflow-hidden">
      {/* Header - Progress Steps */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <Shield className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="font-semibold text-white">BlockDrive</span>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center gap-1">
          {STEPS.map((step, i) => {
            const isActive = currentStep === step.id;
            const isComplete = currentStep > step.id || demoComplete;
            return (
              <div key={step.id} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full transition-all ${
                    isActive ? 'bg-cyan-400 ring-4 ring-cyan-400/20' :
                    isComplete ? 'bg-cyan-400' : 'bg-slate-600'
                  }`} />
                  <span className={`text-[10px] mt-1 ${
                    isActive ? 'text-cyan-400 font-medium' : 'text-slate-500'
                  }`}>{step.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`w-16 h-0.5 mx-1 mb-4 ${
                    currentStep > step.id || demoComplete ? 'bg-cyan-400' : 'bg-slate-700'
                  }`} />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-slate-500 text-xs">Demo Preview</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* Step 0: Connect */}
          {currentStep === 0 && (
            <motion.div
              key="connect"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex"
            >
              {/* Left Column */}
              <div className="w-[45%] p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Sign Up Like Web2</h2>
                <p className="text-slate-400 mb-6">
                  BlockDrive uses <span className="text-cyan-400 font-medium">Crossmint</span> — the enterprise leader in embedded wallets — to give you a familiar sign-up experience.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: Mail, title: 'Email or Phone Login', desc: 'No extensions required' },
                    { icon: Key, title: 'No Seed Phrases', desc: 'Key management handled invisibly' },
                    { icon: Shield, title: 'Built-In Recovery', desc: 'Recover via email or passkey' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{item.title}</p>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="w-[55%] p-8 flex items-center justify-center">
                <div className="w-full max-w-sm bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-white text-center mb-2">Create Your Account</h3>
                  <p className="text-slate-400 text-sm text-center mb-6">Enter a username to get your blockdrive.sol identity</p>
                  
                  {!accountCreated ? (
                    <>
                      <div className="bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 flex items-center mb-4">
                        <span className="text-white">{typedText}</span>
                        <Cursor show={showCursor} />
                        <span className="text-slate-500 ml-auto">.blockdrive.sol</span>
                      </div>
                      <div className={`w-full py-3 rounded-xl text-center font-medium transition-all ${
                        typedText ? 'bg-cyan-500/80 text-white' : 'bg-slate-700 text-slate-400'
                      }`}>
                        Create Account
                      </div>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-slate-800/50 border border-cyan-500/30 rounded-xl p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs">Account Ready</p>
                          <p className="text-white font-medium">investor.blockdrive.sol</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">Embedded Wallet</span>
                        <span className="text-slate-400 font-mono">Gk7n...x4Fp</span>
                      </div>
                    </div>
                  )}
                  
                  <p className="text-slate-500 text-xs text-center mt-4 flex items-center justify-center gap-1">
                    Wallets by <span className="text-cyan-400">Crossmint</span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 1: Upload */}
          {currentStep === 1 && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex"
            >
              <div className="w-[45%] p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Select a File to Protect</h2>
                <p className="text-slate-400 mb-6">
                  Choose a file to encrypt. Your file is encrypted <span className="text-cyan-400">in your browser</span> before any data leaves your device.
                </p>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                  <p className="text-cyan-400 text-sm font-medium mb-1">Important:</p>
                  <p className="text-slate-400 text-sm">
                    We never see your unencrypted files. Everything happens client-side.
                  </p>
                </div>
              </div>

              <div className="w-[55%] p-8 flex items-center justify-center">
                <div className="w-full max-w-sm space-y-3">
                  {/* Drag & drop area */}
                  <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 text-center mb-4">
                    <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                    <p className="text-slate-400 text-sm">Drag & drop your file here</p>
                    <p className="text-slate-500 text-xs">or select a demo file below</p>
                  </div>
                  
                  <p className="text-slate-500 text-xs mb-2">Demo Files:</p>
                  {[
                    { name: 'confidential-report.pdf', size: '2.4 MB', selected: fileSelected },
                    { name: 'financial-data.xlsx', size: '1.8 MB', selected: false },
                    { name: 'legal-contract.docx', size: '856 KB', selected: false },
                  ].map((file, i) => (
                    <motion.div
                      key={file.name}
                      className={`p-3 rounded-xl border flex items-center gap-3 transition-all ${
                        file.selected 
                          ? 'border-cyan-500 bg-cyan-500/10' 
                          : 'border-slate-700 bg-slate-800/50'
                      }`}
                      animate={file.selected ? { scale: [1, 1.02, 1] } : {}}
                    >
                      <FileText className={`w-6 h-6 ${file.selected ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <div className="flex-1">
                        <p className={`text-sm ${file.selected ? 'text-white' : 'text-slate-300'}`}>{file.name}</p>
                        <p className="text-slate-500 text-xs">{file.size}</p>
                      </div>
                      {file.selected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center"
                        >
                          <Check className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Encrypt */}
          {currentStep === 2 && (
            <motion.div
              key="encrypt"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex"
            >
              <div className="w-[45%] p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Programmed Incompleteness</h2>
                <p className="text-slate-400 mb-4">
                  Your <span className="text-cyan-400">Crossmint wallet</span> generates your encryption keys. A unique AES-256 key is derived from your wallet's signature.
                </p>
                <p className="text-slate-400 mb-4">
                  After encryption, we <span className="text-white font-medium">extract 16 critical bytes</span> and store them separately. The main file becomes <span className="text-white font-medium">mathematically incomplete</span>.
                </p>
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
                  <p className="text-cyan-400 text-sm font-medium mb-1">Why this matters:</p>
                  <p className="text-slate-400 text-sm">
                    Even with the key AND the file, attackers <span className="italic text-slate-300">cannot reconstruct your data</span> without those 16 bytes.
                  </p>
                </div>
              </div>

              <div className="w-[55%] p-8 flex items-center justify-center">
                <div className="w-full max-w-md">
                  {/* Flow: Wallet → Key → Encrypted */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <div className="flex flex-col items-center">
                      <div className="px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center gap-2">
                        <Wallet className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 text-xs">Your Wallet</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                    <div className="flex flex-col items-center">
                      <div className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 flex items-center gap-2">
                        <Key className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-400 text-xs">AES-256 Key</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                    <div className="flex flex-col items-center">
                      <div className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-600 flex items-center gap-2">
                        <Lock className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-400 text-xs">Encrypted</span>
                      </div>
                    </div>
                  </div>

                  {/* File with Incomplete badge */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-500 text-xs">Your encrypted file:</span>
                      <span className="px-2 py-0.5 bg-yellow-500/20 border border-yellow-500/30 rounded text-yellow-400 text-[10px] font-medium">
                        Incomplete
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-medium">confidential-report.pdf</p>
                        <p className="text-slate-500 text-sm">2.4 MB</p>
                      </div>
                    </div>
                  </div>

                  {/* Progress or Split visualization */}
                  {!encryptComplete ? (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>{encryptProgress < 50 ? 'Deriving key & encrypting...' : 'Splitting critical bytes...'}</span>
                        <span>{encryptProgress}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                          style={{ width: `${encryptProgress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4"
                    >
                      <div className="flex-1 bg-slate-800/50 border border-slate-700 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Cloud className="w-4 h-4 text-blue-400" />
                          <div>
                            <p className="text-white text-xs font-medium">IPFS</p>
                            <p className="text-slate-500 text-[10px]">Filebase</p>
                          </div>
                        </div>
                        <p className="text-slate-400 text-[10px]">Encrypted File (Incomplete)</p>
                      </div>
                      <div className="flex-1 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Database className="w-4 h-4 text-cyan-400" />
                          <div>
                            <p className="text-white text-xs font-medium">R2</p>
                            <p className="text-slate-500 text-[10px]">Cloudflare</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Key className="w-3 h-3 text-cyan-400" />
                          <p className="text-cyan-400 text-[10px] font-medium">Critical 16 Bytes</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Share */}
          {currentStep === 3 && (
            <motion.div
              key="share"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 flex"
            >
              <div className="w-[45%] p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-4">Share Securely</h2>
                <p className="text-slate-400 mb-6">
                  BlockDrive offers <span className="text-cyan-400">two ways to share</span> your encrypted files, depending on whether the recipient has a BlockDrive account.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">BlockDrive users</p>
                      <p className="text-slate-500 text-xs">Files stay mathematically incomplete and breach-proof</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-4 h-4 text-slate-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">External recipients</p>
                      <p className="text-slate-500 text-xs">File reconstructed as traditionally encrypted file</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[55%] p-8 flex items-center justify-center">
                <div className="w-full max-w-sm bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6">
                  {/* Tabs */}
                  <div className="flex gap-2 mb-6">
                    <div className="flex-1 py-2 px-4 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 text-sm text-center font-medium">
                      BlockDrive User
                    </div>
                    <div className="flex-1 py-2 px-4 bg-slate-800 border border-slate-700 rounded-lg text-slate-500 text-sm text-center">
                      External
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm mb-3">Recipient's BlockDrive Username</p>
                  
                  <div className="bg-slate-800 border border-slate-600 rounded-xl px-4 py-3 flex items-center mb-4">
                    <span className="text-white">{shareTyped}</span>
                    {!shareComplete && <Cursor show={showCursor} />}
                    <span className="text-slate-500 ml-auto">.blockdrive.sol</span>
                  </div>

                  {!shareComplete ? (
                    <div className="w-full py-3 bg-cyan-500/50 rounded-xl text-center text-white font-medium">
                      Share with {shareTyped || '...'}.blockdrive.sol
                    </div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="w-full py-3 bg-green-500 rounded-xl text-center text-white font-medium flex items-center justify-center gap-2"
                    >
                      <Check className="w-5 h-5" />
                      Access Granted
                    </motion.div>
                  )}

                  {shareComplete && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-slate-400 text-xs text-center mt-4"
                    >
                      File remains <span className="text-cyan-400">mathematically incomplete</span> — architecture preserved
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800/50">
        <div className="flex items-center gap-2 text-slate-500">
          <ChevronRight className="w-4 h-4 rotate-180" />
          <span className="text-sm">Back</span>
        </div>
        <div className="text-slate-400 text-sm">
          Step {currentStep + 1} of 4
        </div>
        <div className="flex items-center gap-2">
          {demoComplete ? (
            <div className="flex items-center gap-2 text-cyan-400">
              <RotateCcw className="w-4 h-4" />
              <span className="text-sm">Restart Demo</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-sm">Continue</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

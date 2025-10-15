import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const App = () => {
  const shouldReduceMotion = useReducedMotion();

  // Motion variants for floating elements
  const floatingVariants = {
    animate: shouldReduceMotion ? {} : {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const delayedFloatingVariants = {
    animate: shouldReduceMotion ? {} : {
      y: [10, -10, 10],
      x: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  const rotatingVariants = {
    animate: shouldReduceMotion ? {} : {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  // Neural network SVG icon
  const NeuralNetworkIcon = () => (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-blue-400">
      <circle cx="15" cy="15" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="45" cy="15" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="15" cy="45" r="4" fill="currentColor" opacity="0.8" />
      <circle cx="45" cy="45" r="4" fill="currentColor" opacity="0.8" />
      
      <line x1="15" y1="15" x2="30" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="45" y1="15" x2="30" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="30" y1="30" x2="15" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="30" y1="30" x2="45" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <line x1="15" y1="15" x2="45" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <line x1="45" y1="15" x2="15" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );

  // Robot outline SVG icon
  const RobotIcon = () => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-purple-400">
      <rect x="15" y="20" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="20" cy="27" r="2" fill="currentColor" />
      <circle cx="30" cy="27" r="2" fill="currentColor" />
      <path d="M20 33 L30 33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M25 15 L25 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="25" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M10 25 L15 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 25 L40 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  // Orb SVG icon
  const OrbIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-cyan-400">
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.8" />
      <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.4" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient waves */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="absolute top-1/4 left-0 w-full h-full bg-gradient-to-l from-cyan-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={shouldReduceMotion ? {} : {
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating AI elements */}
      <motion.div
        className="absolute top-20 left-10 md:left-20"
        variants={floatingVariants}
        animate="animate"
      >
        <NeuralNetworkIcon />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 md:right-20"
        variants={delayedFloatingVariants}
        animate="animate"
      >
        <RobotIcon />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4"
        variants={rotatingVariants}
        animate="animate"
      >
        <OrbIcon />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-1/3 hidden md:block"
        variants={floatingVariants}
        animate="animate"
      >
        <div className="w-8 h-8 border-2 border-pink-400 rounded-full opacity-60"></div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10"
        variants={delayedFloatingVariants}
        animate="animate"
      >
        <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-sm opacity-70 rotate-45"></div>
      </motion.div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        {/* Hero section */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main headline */}
          <motion.h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 ${
              shouldReduceMotion 
                ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer'
            } focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-lg`}
            whileHover={shouldReduceMotion ? {} : { 
              scale: 1.02,
              filter: "brightness(1.1) drop-shadow(0 0 30px rgba(139, 92, 246, 0.5))"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            tabIndex="0"
            role="heading"
            aria-level="1"
          >
            Coming Soon 2026
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The future of AI is almost here{' '}
            <span className="inline-block" role="img" aria-label="robot">🤖</span>
            <span className="inline-block ml-1" role="img" aria-label="sparkles">✨</span>
          </motion.p>

          {/* Additional content could go here */}
          <motion.div
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="mb-4">Something revolutionary is in development.</p>
            <p className="text-sm text-gray-500">Stay tuned for updates.</p>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 text-center text-gray-400">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {/* Social icons placeholder */}
          
          {/* DMCA Badge */}
          <div className="mt-4 flex justify-center">
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=adafb0d7-d4eb-434d-9d73-06ac75f6899b&refurl=https://baootech.com/" title="DMCA.com Protection Status" className="dmca-badge" >
              <img src="https://images.dmca.com/Badges/dmca-badge-w250-2x1-02.png?ID=fcc56105-e797-4bc4-a2a8-b49eaf67f69d" alt="DMCA.com Protection Status" className="h-12 w-auto" />
            </a>
          </div>
     
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © 2025 AI Project. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </div>
  );
};

export default App;

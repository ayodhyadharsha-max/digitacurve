'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Pause, Play, Target, Compass, Cpu, TrendingUp } from 'lucide-react';

export default function ProcessSystem() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      num: '01',
      title: 'UNDERSTAND',
      desc: 'Map the business, offer, audience, competition and current marketing bottleneck.',
      icon: Target,
      tag: 'BOTTLENECK MAPPING',
      stats: '100% DIAGNOSED',
    },
    {
      num: '02',
      title: 'POSITION',
      desc: 'Choose the communication direction, campaign priority and customer journey.',
      icon: Compass,
      tag: 'STRATEGIC COMPASS',
      stats: 'DIRECTIONAL ALIGNMENT',
    },
    {
      num: '03',
      title: 'EXECUTE',
      desc: 'Build the content, advertising, website and supporting digital assets.',
      icon: Cpu,
      tag: 'ASSET PRODUCTION',
      stats: 'HIGH-CONVERSION BUILD',
    },
    {
      num: '04',
      title: 'IMPROVE',
      desc: 'Review performance, identify the next opportunity and sharpen the system.',
      icon: TrendingUp,
      tag: 'GROWTH OPTIMIZATION',
      stats: 'EXPONENTIAL TRAJECTORY',
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  const CurrentIcon = steps[activeStep].icon;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
      <div className="space-y-4 mb-8 sm:mb-12">
        <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">
          HOW WE WORK / ONE CONNECTED METHOD
        </p>
        <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-slate-900 uppercase">
          A STRUCTURED<br />
          <span className="text-blue-600 italic font-light">WAY TO MOVE.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
        {/* Left Interactive Nav */}
        <div className="lg:col-span-6 space-y-3">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-full text-left p-6 rounded-3xl transition-all duration-300 flex items-start justify-between gap-4 relative overflow-hidden ${
                activeStep === idx
                  ? 'liquid-glass bg-blue-50/90 border-blue-500 shadow-lg shadow-blue-500/10'
                  : 'liquid-glass-card'
              }`}
            >
              {/* Active Glow Accent Bar */}
              {activeStep === idx && (
                <motion.div
                  layoutId="activeGlowBar"
                  className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 shadow-sm"
                />
              )}

              <div className="flex items-start gap-4">
                <span
                  className={`font-mono text-xs font-bold px-3 py-1 rounded-full transition-colors ${
                    activeStep === idx
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'liquid-glass-pill text-blue-600'
                  }`}
                >
                  {step.num}
                </span>
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
              <ArrowUpRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeStep === idx
                    ? 'text-blue-600 translate-x-0.5 -translate-y-0.5'
                    : 'text-slate-400'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Right Radar Blueprint Animated Card */}
        <div className="lg:col-span-6">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 h-full min-h-[420px] flex flex-col justify-between relative overflow-hidden group hover:border-blue-500/80 transition-all shadow-xl">
            {/* Animated Radar Scanning Line */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Concentric Circles */}
              <div className="w-80 h-80 rounded-full border border-blue-500/20" />
              <div className="absolute w-60 h-60 rounded-full border border-blue-500/30" />
              <div className="absolute w-40 h-40 rounded-full border border-blue-500/40" />

              {/* Rotating Radar Scanner Sweep */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                className="absolute w-80 h-80 rounded-full bg-conic-gradient from-blue-500/20 via-transparent to-transparent pointer-events-none"
              />

              {/* Pulsing Radar Ring */}
              <motion.div
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute w-48 h-48 rounded-full border-2 border-blue-400/40"
              />

              <div className="absolute w-full h-[1px] bg-blue-900/40" />
              <div className="absolute h-full w-[1px] bg-blue-900/40" />
            </div>

            {/* Top Animated Header */}
            <div className="flex items-center justify-between text-xs font-mono text-blue-400 z-10">
              <span className="bg-slate-900 px-3 py-1 rounded-full border border-blue-900/60 backdrop-blur-md">
                MD—SYSTEM / {steps[activeStep].num}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeStep}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase shadow-lg shadow-blue-600/40"
                >
                  {steps[activeStep].tag}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Central Stage Animated Motion Graphics */}
            <div className="my-auto text-center space-y-4 z-10 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.1, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="space-y-4"
                >
                  {/* Central Icon Badge with Pulse Orbit */}
                  <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border border-dashed border-blue-400/60"
                    />
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-2 border-blue-400 flex items-center justify-center text-white shadow-2xl shadow-blue-600/50">
                      <CurrentIcon className="w-10 h-10" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-white tracking-tight uppercase">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto font-light leading-relaxed">
                      {steps[activeStep].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Animated Status Bar */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 border-t border-blue-900/50 pt-4 bg-slate-900/80 p-2 rounded-xl backdrop-blur-md">
              <span className="flex items-center gap-1.5 text-blue-400">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                DIGITACURVE RADAR ACTIVE
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white font-bold tracking-wider"
                >
                  {steps[activeStep].stats}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Timeline Control Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4 shadow-sm">
        <div className="flex-1 grid grid-cols-4 gap-2">
          {steps.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveStep(i)}
              className="h-2 rounded-full bg-slate-100 overflow-hidden cursor-pointer relative"
            >
              <div
                className={`h-full bg-blue-600 transition-all duration-500 ${
                  activeStep === i ? 'w-full shadow-sm' : activeStep > i ? 'w-full opacity-60' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="flex items-center gap-2 bg-slate-100 border border-slate-200 hover:border-blue-400 px-4 py-2 rounded-full text-xs font-mono text-slate-700 transition-all"
        >
          {isPaused ? (
            <>
              RESUME <Play className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            </>
          ) : (
            <>
              PAUSE <Pause className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}

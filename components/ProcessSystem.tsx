'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Play, Pause } from 'lucide-react';

const stages = [
  {
    num: '01',
    title: 'UNDERSTAND',
    desc: 'Map the business model, core offer, target audience, competition, and current digital bottlenecks.',
  },
  {
    num: '02',
    title: 'POSITION',
    desc: 'Define the high-converting message, search priorities, and complete user journey.',
  },
  {
    num: '03',
    title: 'EXECUTE',
    desc: 'Engineer the Next.js website, GEO search optimizations, ad campaigns, and AI chatbots.',
  },
  {
    num: '04',
    title: 'IMPROVE',
    desc: 'Continuous performance audit, conversion optimization, and scaling the revenue engine.',
  },
];

export default function ProcessSystem() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const current = stages[activeStage];

  return (
    <section className="py-24 bg-black border-t border-cyan-500/20 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy & Stage Buttons */}
          <div>
            <div className="mb-8">
              <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                HOW WE WORK / ONE CONNECTED METHOD
              </span>
              <h2 className="text-3xl sm:text-5xl font-black mt-3 leading-tight uppercase">
                A STRUCTURED <br />
                <span className="agency-serif-italic text-cyan-400">WAY TO MOVE.</span>
              </h2>
            </div>

            {/* Stages Stack */}
            <div className="space-y-4">
              {stages.map((stage, idx) => (
                <button
                  key={stage.num}
                  onClick={() => setActiveStage(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start justify-between group ${
                    idx === activeStage
                      ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                      : 'bg-slate-950/40 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex gap-4">
                    <span
                      className={`font-mono text-sm font-bold ${
                        idx === activeStage ? 'text-cyan-400' : 'text-slate-500'
                      }`}
                    >
                      {stage.num}
                    </span>
                    <div>
                      <h4 className="font-black text-sm tracking-wider uppercase text-white">
                        {stage.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 max-w-md leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className={`transition-transform duration-300 ${
                      idx === activeStage
                        ? 'text-cyan-400 translate-x-0.5 -translate-y-0.5'
                        : 'text-slate-600 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Stage Visual Blueprint */}
          <div className="relative h-[420px] rounded-3xl bg-slate-950 border border-slate-800 p-8 flex flex-col justify-between overflow-hidden">
            {/* Blueprint Grid background */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Glowing center mark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full border border-cyan-500/30 animate-ping opacity-25" />
              <div className="w-48 h-48 rounded-full border border-cyan-500/20" />
            </div>

            {/* Meta Top */}
            <div className="relative z-10 flex items-center justify-between font-mono text-xs text-cyan-400">
              <span>DC—SYSTEM / {current.num}</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">
                ACTIVE PHASE
              </span>
            </div>

            {/* Center Stage Info */}
            <div className="relative z-10 text-center my-auto">
              <span className="text-6xl font-black text-white tracking-widest uppercase">
                {current.title}
              </span>
              <p className="text-sm font-mono text-slate-400 max-w-sm mx-auto mt-3">
                {current.desc}
              </p>
            </div>

            {/* Blueprint Footer / Pause button */}
            <div className="relative z-10 flex items-center justify-between border-t border-slate-900 pt-4">
              <div className="flex gap-2">
                {stages.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeStage ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-800'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 bg-slate-900 px-3 py-1 rounded-full border border-slate-800"
              >
                {isPaused ? <Play size={12} /> : <Pause size={12} />}
                {isPaused ? 'RESUME' : 'PAUSE'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

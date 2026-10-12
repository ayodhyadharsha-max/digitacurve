'use client';

import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function IndiaCoverage() {
  const cities = [
    { name: 'Noida HQ', tag: 'PRIMARY HQ' },
    { name: 'Delhi NCR', tag: 'NORTH' },
    { name: 'Mumbai', tag: 'WEST' },
    { name: 'Bengaluru', tag: 'SOUTH' },
    { name: 'Hyderabad', tag: 'SOUTH' },
    { name: 'Kolkata', tag: 'EAST' },
    { name: 'Pune', tag: 'WEST' },
    { name: 'Ahmedabad', tag: 'WEST' },
    { name: 'Jaipur', tag: 'NORTH' },
    { name: 'Chandigarh', tag: 'NORTH' },
  ];

  return (
    <section id="india" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-blue-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span className="bg-blue-950 border border-blue-800/50 px-3 py-1 rounded-full uppercase">
              NOIDA BASE → PAN-INDIA COVERAGE
            </span>
          </div>

          <h2 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white uppercase">
            SERVING BRANDS<br />
            <span className="text-blue-500 italic font-light">ACROSS INDIA.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Headquartered in Noida, Digitacurve partners with ambitious founders, business owners and marketing teams across major Indian hubs. Clear communication, zero location friction.
          </p>

          <div className="pt-2">
            <Link
              href="/company/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-7 py-4 rounded-full shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
            >
              BOOK A CALL WITH RISHABH <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right City Grid */}
        <div className="lg:col-span-7">
          <div className="bg-[#050B14] border border-blue-900/60 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-blue-900/40 pb-4 text-xs font-mono text-slate-400">
              <span>ACTIVE CITY PRESENCE</span>
              <span className="text-blue-400 font-bold">10 MAJOR HUBS</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2">
              {cities.map((city, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-slate-950 border border-blue-900/30 hover:border-blue-500/60 rounded-xl flex items-center justify-between transition-colors group cursor-default"
                >
                  <span className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">
                    {city.name}
                  </span>
                  <span className="text-[9px] font-mono text-blue-300 bg-blue-950 border border-blue-800/40 px-2 py-0.5 rounded">
                    {city.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

export default function GlobalPresence() {
  const row1Hubs = [
    { country: 'Ontario, Canada', img: '/locations/CANADA.png?v=15' },
    { country: 'United Kingdom', img: '/locations/UK.png?v=15' },
    { country: 'Ireland', img: '/locations/IRELAND.png?v=15' },
  ];

  const row2Hubs = [
    { country: 'UAE', img: '/locations/UAE.png?v=15' },
    { country: 'India (Noida HQ)', img: '/locations/INDIA.png?v=15' },
    { country: 'United States', img: '/locations/USA.png?v=15' },
  ];

  const row3Hubs = [
    { country: 'Australia', img: '/locations/AUSTRALIA.png?v=15' },
  ];

  const renderHub = (hub: { country: string; img: string }, idx: number) => (
    <div
      key={idx}
      className="flex flex-col items-center justify-end text-center space-y-4 group cursor-default"
    >
      <div className="w-full h-32 sm:h-36 flex items-end justify-center px-2 py-2">
        <img
          src={hub.img}
          alt={hub.country}
          loading="eager"
          decoding="async"
          className="max-h-28 sm:max-h-32 w-auto max-w-full object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.7)] group-hover:scale-105 transition-all duration-500 opacity-95 group-hover:opacity-100"
        />
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
          {hub.country}
        </h3>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#030712] text-white border-y border-blue-900/40 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-950/30 blur-[150px] pointer-events-none rounded-full" />

      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs font-mono text-blue-400 tracking-widest uppercase font-bold">
            GLOBAL FOOTPRINT &amp; CLIENT REACH
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white leading-[0.95]">
            SERVING CLIENTS<br />
            <span className="text-blue-500 italic font-light">ACROSS THE GLOBE.</span>
          </h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Row 1: 3 Countries */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14 items-end">
            {row1Hubs.map(renderHub)}
          </div>

          {/* Row 2: 3 Countries */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-14 items-end">
            {row2Hubs.map(renderHub)}
          </div>

          {/* Row 3: 1 Country Centered */}
          <div className="flex justify-center items-end">
            <div className="w-full sm:w-1/3">
              {row3Hubs.map(renderHub)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

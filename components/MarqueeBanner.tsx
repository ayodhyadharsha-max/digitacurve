'use client';

export default function MarqueeBanner() {
  const items = [
    'WEBSITE DESIGN',
    'SEO',
    'LOCAL SEO',
    'GOOGLE ADS',
    'META ADS',
    'SOCIAL MEDIA',
    'BRAND STRATEGY',
    'LEAD GENERATION',
  ];

  return (
    <div className="w-full bg-blue-600 text-white py-4 overflow-hidden shadow-lg shadow-blue-600/20 font-mono text-xs md:text-sm font-bold tracking-widest uppercase border-y border-blue-400/30">
      <div className="flex w-max animate-marquee space-x-8">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 whitespace-nowrap">
            <span>{item}</span>
            <span className="text-blue-300">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface AnimatedMarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

export default function AnimatedMarquee({
  items,
  direction = 'left',
  speed = 25,
}: AnimatedMarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: direction === 'left' ? `-=${totalWidth}` : `+=${totalWidth}`,
        duration: speed,
        ease: 'none',
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, [direction, speed]);

  const doubledItems = [...items, ...items];

  return (
    <div
      ref={marqueeRef}
      className="w-full overflow-hidden whitespace-nowrap py-4 border-y border-cyan-500/20 bg-slate-950/60 backdrop-blur-md select-none"
    >
      <div ref={trackRef} className="inline-flex gap-8 items-center">
        {doubledItems.map((item, idx) => (
          <div key={idx} className="inline-flex gap-8 items-center">
            <span className="text-sm font-bold tracking-widest text-slate-300 uppercase">
              {item}
            </span>
            <span className="text-cyan-400 font-bold text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

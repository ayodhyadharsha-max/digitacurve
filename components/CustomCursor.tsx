'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Fast and smooth mouse position tracking with quickTo
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.2, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.2, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hoverable = target.closest('a, button, .magnetic, [data-cursor]');
      if (hoverable) {
        setIsHovered(true);
        const text = hoverable.getAttribute('data-cursor') || '';
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out border mix-blend-difference hidden md:flex ${
        isHovered
          ? 'w-14 h-14 bg-cyan-400/90 border-cyan-300 scale-110 shadow-[0_0_20px_rgba(34,211,238,0.5)]'
          : 'w-4 h-4 bg-cyan-400 border-white/60'
      }`}
      style={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      {cursorText && (
        <span className="text-[9px] font-bold tracking-widest uppercase text-black">
          {cursorText}
        </span>
      )}
    </div>
  );
}

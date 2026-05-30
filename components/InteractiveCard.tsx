'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export default function InteractiveCard({ children, className = '', href }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setCoords({ x, y })

    const width = rect.width
    const height = rect.height
    const centerX = width / 2
    const centerY = height / 2

    // Dynamic rotation up to 10 degrees max
    const maxTilt = 10
    const rotateY = ((x - centerX) / centerX) * maxTilt
    const rotateX = -((y - centerY) / centerY) * maxTilt

    setRotate({ x: rotateX, y: rotateY })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotate({ x: 0, y: 0 })
  }

  const classes = className.split(' ')
  const layoutKeywords = ['items-', 'justify-', 'content-', 'gap-', 'p-', 'pt-', 'pb-', 'pl-', 'pr-', 'px-', 'py-']
  
  const layoutClasses = classes.filter(c => {
    if (c === 'flex' || c === 'flex-wrap' || c === 'flex-nowrap' || c === 'flex-col' || c === 'flex-row') return true
    return layoutKeywords.some(kw => c.startsWith(kw))
  }).join(' ')
  
  const baseClasses = classes.filter(c => {
    if (c === 'flex' || c === 'flex-wrap' || c === 'flex-nowrap' || c === 'flex-col' || c === 'flex-row') return false
    return !layoutKeywords.some(kw => c.startsWith(kw))
  }).join(' ')

  if (!isMounted) {
    const content = (
      <div className={`relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] ${className}`}>
        {children}
      </div>
    )
    if (href) {
      return (
        <Link href={href} className="block no-underline h-full">
          {content}
        </Link>
      )
    }
    return content
  }

  const cardStyle: React.CSSProperties = {
    transform: isHovered
      ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.015, 1.015, 1.015)`
      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transformStyle: 'preserve-3d',
    transition: isHovered ? 'transform 0.1s ease-out, box-shadow 0.2s ease' : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease',
    boxShadow: isHovered
      ? '0 20px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(59, 130, 246, 0.18)'
      : '0 4px 20px rgba(0, 0, 0, 0.4)',
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] h-full ${baseClasses}`}
      style={cardStyle}
    >
      {/* Conic neon glowing border on hover */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          padding: '1px',
          background: 'conic-gradient(from var(--border-angle), #3b82f6, #8b5cf6, #f97316, #3b82f6)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'border-rotate 4s linear infinite',
          zIndex: 10,
        }}
      />

      {/* Conic soft diffuse halo on hover */}
      <div
        className="pointer-events-none absolute -inset-[6px] rounded-2xl transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.25 : 0,
          background: 'conic-gradient(from var(--border-angle), #3b82f6, #8b5cf6, #f97316, #3b82f6)',
          filter: 'blur(12px)',
          animation: 'border-rotate 4s linear infinite',
          zIndex: 0,
        }}
      />

      {/* Inner overflow-hidden container for clipping the mouse light glow */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
          }}
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full w-full" style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}>
        {href ? (
          <Link href={href} className={`no-underline h-full w-full ${layoutClasses || 'block'}`}>
            {children}
          </Link>
        ) : (
          <div className={`h-full w-full ${layoutClasses || 'block'}`}>
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

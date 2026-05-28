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
      className={`relative overflow-hidden rounded-2xl border border-[#2a2a2a] bg-[#0a0a0a] ${className}`}
      style={cardStyle}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
        }}
      />
      <div style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d', height: '100%', width: '100%' }}>
        {href ? (
          <Link href={href} className="block no-underline h-full w-full">
            {children}
          </Link>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

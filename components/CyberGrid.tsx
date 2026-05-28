'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function CyberGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    let mouse = { x: -999, y: -999, targetX: -999, targetY: -999 }
    const gridSize = 45 // Cell dimensions
    
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }

    const parent = canvas.parentElement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.targetX = e.clientX - rect.left
      mouse.targetY = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.targetX = -999
      mouse.targetY = -999
    }

    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove)
      parent.addEventListener('mouseleave', handleMouseLeave)
    }
    window.addEventListener('resize', handleResize)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth coordinate transition
      if (mouse.targetX === -999) {
        mouse.x += (-999 - mouse.x) * 0.1
        mouse.y += (-999 - mouse.y) * 0.1
      } else {
        if (mouse.x === -999) {
          mouse.x = mouse.targetX
          mouse.y = mouse.targetY
        } else {
          mouse.x += (mouse.targetX - mouse.x) * 0.1
          mouse.y += (mouse.targetY - mouse.y) * 0.1
        }
      }

      const hasMouse = mouse.x > -500
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.04)'
      ctx.lineWidth = 1

      const cols = Math.ceil(width / gridSize) + 1
      const rows = Math.ceil(height / gridSize) + 1

      // Render warped horizontal grid lines
      for (let r = 0; r < rows; r++) {
        const yBase = r * gridSize
        ctx.beginPath()
        for (let c = 0; c < cols; c++) {
          const xBase = c * gridSize
          let x = xBase
          let y = yBase

          if (hasMouse) {
            const dx = mouse.x - xBase
            const dy = mouse.y - yBase
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 180) {
              const pull = ((180 - dist) / 180) * 12
              x += (dx / dist) * pull
              y += (dy / dist) * pull
            }
          }

          if (c === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      // Render warped vertical grid lines
      for (let c = 0; c < cols; c++) {
        const xBase = c * gridSize
        ctx.beginPath()
        for (let r = 0; r < rows; r++) {
          const yBase = r * gridSize
          let x = xBase
          let y = yBase

          if (hasMouse) {
            const dx = mouse.x - xBase
            const dy = mouse.y - yBase
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 180) {
              const pull = ((180 - dist) / 180) * 12
              x += (dx / dist) * pull
              y += (dy / dist) * pull
            }
          }

          if (r === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      // Draw glowing neural intersections and spot halo under cursor
      if (hasMouse) {
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const xBase = c * gridSize
            const yBase = r * gridSize

            const dx = mouse.x - xBase
            const dy = mouse.y - yBase
            const dist = Math.sqrt(dx * dx + dy * dy)

            if (dist < 120) {
              let x = xBase
              let y = yBase
              const pull = ((180 - dist) / 180) * 12
              x += (dx / dist) * pull
              y += (dy / dist) * pull

              const alpha = ((120 - dist) / 120) * 0.45
              const radius = ((120 - dist) / 120) * 2.5 + 1.2

              // Draw neon node core
              ctx.beginPath()
              ctx.arc(x, y, radius, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(139, 92, 246, ${alpha})` // neon purple
              ctx.fill()
              
              // Draw secondary neon halo
              if (dist < 60) {
                ctx.beginPath()
                ctx.arc(x, y, radius * 3, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.3})` // blue halo
                ctx.fill()
              }
            }
          }
        }

        // Project dynamic mouse neon flashlight gradient
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          200
        )
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.14)')
        gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.05)')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 200, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  )
}

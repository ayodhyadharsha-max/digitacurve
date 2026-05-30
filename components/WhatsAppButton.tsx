'use client'

import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Reveal the button after scrolling 200px
      if (window.scrollY > 200) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', toggleVisibility)
    toggleVisibility()
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const whatsappUrl = 'https://wa.me/917572094201?text=Hello%20Digitacurve%2C%20I%20am%20interested%20in%20your%20services.'

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
      }`}
      aria-label="Chat on WhatsApp"
      style={{
        boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
      }}
    >
      {/* Premium Tooltip */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-[#111111] text-white text-xs font-bold px-3 py-2 rounded-lg border border-[#2a2a2a] whitespace-nowrap shadow-xl">
        Chat with Us
      </span>

      {/* Pulsing Outer Ring for Micro-animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />

      {/* Custom SVG Official WhatsApp Logo */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.008 14.07 1.01 11.5 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.46 3.393 1.332 4.888l-.996 3.633 3.75-.983zm11.567-5.693c-.307-.154-1.82-.9-2.1-.998-.28-.1-.484-.154-.688.154-.204.307-.79.998-.97 1.202-.18.205-.36.23-.667.077-.307-.154-1.294-.48-2.464-1.525-.91-.81-1.526-1.81-1.704-2.117-.18-.307-.02-.473.134-.627.14-.138.307-.36.46-.538.154-.18.204-.307.307-.512.103-.205.051-.384-.025-.538-.077-.154-.688-1.664-.943-2.28-.248-.597-.502-.516-.688-.526-.178-.01-.382-.01-.587-.01-.205 0-.537.077-.82.384-.282.307-1.077 1.05-1.077 2.56 0 1.51 1.1 2.97 1.253 3.178.153.204 2.164 3.31 5.244 4.637.733.315 1.305.503 1.75.645.736.233 1.407.2 1.938.12.592-.087 1.82-.743 2.078-1.46.257-.717.257-1.332.18-1.46-.078-.128-.282-.204-.59-.358z" />
      </svg>
    </a>
  )
}

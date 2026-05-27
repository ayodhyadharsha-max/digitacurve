'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon, Menu, X, ChevronDown, Smartphone, Globe, TrendingUp, Cpu } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const mobileAppItems = [
  { label: 'Android App Development', href: '/app-development' },
  { label: 'iOS App Development', href: '/app-development' },
  { label: 'Swift App Development', href: '/app-development' },
  { label: 'Cross Platform App', href: '/app-development' },
  { label: 'iPad App Development', href: '/app-development' },
  { label: 'Mobile Game Development', href: '/app-development' },
]

const webAppItems = [
  { label: 'PHP Development', href: '/web-development' },
  { label: 'ROR Development', href: '/web-development' },
  { label: 'NODE.js Development', href: '/web-development' },
  { label: 'Joomla Development', href: '/web-development' },
  { label: 'Web Development Company USA', href: '/web-development' },
  { label: 'UI UX Design Services', href: '/web-development' },
]

const digitalMarketingItems = [
  { label: 'SEO Services', href: '/digital-marketing' },
  { label: 'Pay Per Click', href: '/digital-marketing' },
  { label: 'Social Media Marketing', href: '/digital-marketing' },
  { label: 'Content Marketing', href: '/digital-marketing' },
  { label: 'SEO Company Indianapolis', href: '/digital-marketing' },
  { label: 'Healthcare Marketing', href: '/digital-marketing' },
]

const emergingTechItems = [
  { label: 'Artificial Intelligence', href: '/artificial-intelligence' },
  { label: 'Internet Of Things', href: '/artificial-intelligence' },
  { label: 'Robotic Process Automation', href: '/artificial-intelligence' },
  { label: 'AI & Software Development', href: '/artificial-intelligence' },
  { label: 'AI Consultant', href: '/artificial-intelligence' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-black/50'
          : theme === 'dark'
          ? 'bg-black'
          : 'bg-white'
      } border-b border-slate-200 dark:border-[#1a1a1a]`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/logo-white.png"
              alt="logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1">
            <li>
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/company/about"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/company/about') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                About Us
              </Link>
            </li>

            {/* Services Mega Menu */}
            <li className="nav-item relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-md transition-colors">
                Services
                <ChevronDown size={14} className="transition-transform group-hover:rotate-180 duration-200" />
              </button>

              <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[780px] bg-[#111111] border border-[#2a2a2a] rounded-2xl shadow-2xl shadow-black/60 p-6 z-50">
                <div className="grid grid-cols-4 gap-6">
                  {/* Mobile App */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2a2a2a]">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                        <Smartphone size={14} className="text-blue-400" />
                      </div>
                      <Link href="/app-development" className="text-xs font-bold text-white uppercase tracking-wider hover:text-blue-400 transition-colors">
                        Mobile App
                      </Link>
                    </div>
                    <ul className="space-y-1.5">
                      {mobileAppItems.map(item => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group/item"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/item:bg-blue-400 transition-colors" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Web App */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2a2a2a]">
                      <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Globe size={14} className="text-purple-400" />
                      </div>
                      <Link href="/web-development" className="text-xs font-bold text-white uppercase tracking-wider hover:text-purple-400 transition-colors">
                        Web App
                      </Link>
                    </div>
                    <ul className="space-y-1.5">
                      {webAppItems.map(item => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group/item"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/item:bg-purple-400 transition-colors" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Digital Marketing */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2a2a2a]">
                      <div className="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center">
                        <TrendingUp size={14} className="text-orange-400" />
                      </div>
                      <Link href="/digital-marketing" className="text-xs font-bold text-white uppercase tracking-wider hover:text-orange-400 transition-colors">
                        Digital Marketing
                      </Link>
                    </div>
                    <ul className="space-y-1.5">
                      {digitalMarketingItems.map(item => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group/item"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/item:bg-orange-400 transition-colors" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Emerging Tech */}
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#2a2a2a]">
                      <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center">
                        <Cpu size={14} className="text-green-400" />
                      </div>
                      <Link href="/artificial-intelligence" className="text-xs font-bold text-white uppercase tracking-wider hover:text-green-400 transition-colors">
                        Emerging Tech
                      </Link>
                    </div>
                    <ul className="space-y-1.5">
                      {emergingTechItems.map(item => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group/item"
                          >
                            <span className="w-1 h-1 rounded-full bg-gray-600 group-hover/item:bg-green-400 transition-colors" />
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/portfolio"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/portfolio') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/casestudy"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/casestudy') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Case Study
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-300 hover:text-white`}
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/company/contact"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/company/contact') ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Custom Theme Switcher (Matching screenshot exactly) */}
            <div 
              onClick={toggleTheme}
              className="relative w-12 h-6 rounded-full bg-slate-200 dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 flex items-center justify-between px-1.5 cursor-pointer transition-colors duration-300 select-none"
              title="Toggle theme"
            >
              <Sun size={12} className={`${theme === 'light' ? 'text-amber-500' : 'text-slate-400'} z-10 transition-colors duration-300`} />
              <Moon size={12} className={`${theme === 'dark' ? 'text-blue-400' : 'text-slate-500'} z-10 transition-colors duration-300`} />
              <div 
                className={`absolute top-[1.5px] left-[2px] w-[18px] h-[18px] rounded-full bg-white dark:bg-zinc-600 shadow-md transition-all duration-300 ease-out ${
                  theme === 'dark' ? 'translate-x-[22px]' : 'translate-x-0'
                }`}
              />
            </div>



            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#1a1a1a] py-4">
            <ul className="space-y-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/company/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Case Study', href: '/casestudy' },
                { label: 'Insights', href: '/blog' },
                { label: 'Contact', href: '/company/contact' },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'text-gray-300 hover:bg-[#1a1a1a] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full text-left flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-300 hover:bg-[#1a1a1a] hover:text-white rounded-lg transition-colors"
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-[#2a2a2a] pl-4">
                    {[...mobileAppItems, ...webAppItems.slice(0, 3), ...digitalMarketingItems.slice(0, 3)].map(item => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-1.5 text-xs text-gray-500 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

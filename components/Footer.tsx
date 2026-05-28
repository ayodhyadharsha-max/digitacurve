import Link from 'next/link'
import { Phone, Mail, Linkedin, Instagram, Facebook, TrendingUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Contact details */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <TrendingUp size={16} className="text-white transform -rotate-12" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-950 dark:text-white">
                Digita<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">curve</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Digitacurve stands at the forefront of digital transformation, offering solutions that revolutionize businesses. Focusing on innovation, we harness the power of technology to propel your organization into the future.
            </p>
            <div className="space-y-4">
              {/* Phone contact */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#111] border border-[#2a2a2a] flex items-center justify-center text-gray-400 shrink-0">
                  <Phone size={14} />
                </div>
                <div className="space-y-1.5 pt-0.5">
                  <a href="tel:+917572094201" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <img src="/assets/contact/india.png" alt="India Flag" className="h-3 w-4.5 object-cover" />
                    <span>+91 7572094201</span>
                  </a>
                </div>
              </div>

              {/* Email contact */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#111] border border-[#2a2a2a] flex items-center justify-center text-gray-400 shrink-0">
                  <Mail size={14} />
                </div>
                <div className="pt-1.5">
                  <a href="mailto:sales@digitacurve.com" className="text-sm text-gray-300 hover:text-white transition-colors break-all">
                    sales@digitacurve.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-base uppercase tracking-wider mb-5">Quick Links</h5>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/company/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/company/contact' },
                { label: 'Careers', href: '/company/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-bold text-base uppercase tracking-wider mb-5">Services</h5>
            <ul className="space-y-3">
              {[
                { label: 'Web Development', href: '/web-development' },
                { label: 'Search Engine Optimization (SEO)', href: '/digital-marketing' },
                { label: 'Pay Per Click (PPC)', href: '/digital-marketing' },
                { label: 'Social Media Manager', href: '/digital-marketing' },
                { label: 'Digital Consulting', href: '/company/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h5 className="text-white font-bold text-base uppercase tracking-wider mb-5">Company Details</h5>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms and Condition', href: '/terms-and-conditions' },
                { label: 'Refund and Return Policy', href: '/refund-policy' },
                { label: 'Inquires', href: '/company/contact' },
              ].map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Social panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-[#1a1a1a]">
          <a
            href="https://www.linkedin.com/company/digitacurve"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0077b5] text-white hover:opacity-95 transition-opacity"
          >
            <Linkedin size={22} className="shrink-0" />
            <div className="text-left leading-tight">
              <div className="text-[10px] opacity-80 uppercase tracking-wider font-semibold">Follow Us On</div>
              <div className="text-sm font-bold">LinkedIn</div>
            </div>
          </a>

          <a
            href="https://www.instagram.com/digitacurve/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white hover:opacity-95 transition-opacity"
          >
            <Instagram size={22} className="shrink-0" />
            <div className="text-left leading-tight">
              <div className="text-[10px] opacity-80 uppercase tracking-wider font-semibold">Follow Us On</div>
              <div className="text-sm font-bold">Instagram</div>
            </div>
          </a>

          <a
            href="https://www.facebook.com/digitacurve"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-xl bg-[#1877f2] text-white hover:opacity-95 transition-opacity"
          >
            <Facebook size={22} className="shrink-0" />
            <div className="text-left leading-tight">
              <div className="text-[10px] opacity-80 uppercase tracking-wider font-semibold">Follow Us On</div>
              <div className="text-sm font-bold">Facebook</div>
            </div>
          </a>

          <div
            className="flex items-center justify-center p-4 rounded-xl bg-white text-black border border-[#e2e8f0]"
          >
            <img
              src="/assets/socials/google.png"
              alt="Google Partner"
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-[#1a1a1a] text-center">
          <p className="text-gray-500 text-xs tracking-wider">
            © 2025-2026, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link'
import { Phone, Mail, Linkedin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Contact details */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img
                src="/assets/logo-white.png"
                alt="logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Quantum IT Innovation stands at the forefront of digital transformation, offering solutions that revolutionize businesses. Focusing on innovation, we harness the power of technology to propel your organization into the future.
            </p>
            <div className="space-y-4">
              {/* Phone contact */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#111] border border-[#2a2a2a] flex items-center justify-center text-gray-400 shrink-0">
                  <Phone size={14} />
                </div>
                <div className="space-y-1.5 pt-0.5">
                  <a href="tel:+919717998517" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <img src="/assets/contact/india.png" alt="India Flag" className="h-3 w-4.5 object-cover" />
                    <span>+91 971 799 8517</span>
                  </a>
                  <a href="tel:+18778773644" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                    <img src="/assets/contact/usa.png" alt="USA Flag" className="h-3 w-4.5 object-cover" />
                    <span>+1 877 877 3644</span>
                  </a>
                </div>
              </div>

              {/* Email contact */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#111] border border-[#2a2a2a] flex items-center justify-center text-gray-400 shrink-0">
                  <Mail size={14} />
                </div>
                <div className="pt-1.5">
                  <a href="mailto:sales@quantumitinnovation.com" className="text-sm text-gray-300 hover:text-white transition-colors break-all">
                    sales@quantumitinnovation.com
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
                { label: 'App Development', href: '/app-development' },
                { label: 'Digital Marketing', href: '/digital-marketing' },
                { label: 'Artificial Intelligence', href: '/artificial-intelligence' },
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
            href="https://www.linkedin.com/company/quantumit-it-innovation"
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
            href="https://www.instagram.com/quantumitpro/"
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
            href="https://www.facebook.com/quantumitinnovationindia"
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

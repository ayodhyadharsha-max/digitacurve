import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Globe, Smartphone, TrendingUp, Cpu, Users,
  Star, CheckCircle2, Rocket, Handshake, Award, Target, Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Digitacurve | Leading Tech Solutions Provider',
  description:
    'Learn more about Digitacurve, a top-tier tech solutions provider specializing in web development, SEO, PPC, and digital consulting.',
}

const services = [
  { icon: Globe, title: 'Web Development', desc: 'Crafting engaging online experiences through bespoke web development solutions, tailored to elevate your brand\'s digital presence.', color: 'text-blue-400', bg: 'from-blue-500/10' },
  { icon: TrendingUp, title: 'SEO (Search Engine Optimization)', desc: 'Drive organic search traffic, secure high keyword rankings, and increase conversion rates with our technical, on-page, and off-page SEO services.', color: 'text-orange-400', bg: 'from-orange-500/10' },
  { icon: Target, title: 'Pay Per Click (PPC)', desc: 'Maximize ROI with data-driven search, display, and social PPC ad campaigns. We optimize bids, ad copy, and landing pages for optimal results.', color: 'text-red-400', bg: 'from-red-500/10' },
  { icon: Users, title: 'Social Media Management', desc: 'Enhance your brand presence and engage active audiences on Facebook, LinkedIn, Instagram, and Twitter through custom organic strategies.', color: 'text-pink-400', bg: 'from-pink-500/10' },
  { icon: Cpu, title: 'Digital & IT Consulting', desc: 'Facilitating strategic IT and digital marketing consulting to streamline processes, drive innovation, and scale your business growth.', color: 'text-green-400', bg: 'from-green-500/10' },
  { icon: Sparkles, title: 'GEO (Generative Engine Optimization)', desc: 'Optimize your brand visibility for AI search engines, Gemini, and ChatGPT. We ensure your business is cited and recommended in generative AI search summaries.', color: 'text-purple-400', bg: 'from-purple-500/10' },
]

const stats = [
  { value: '5,000', label: 'Daily Active Users', icon: Users, color: 'text-blue-400' },
  { value: '850+', label: 'Projects Done', icon: Globe, color: 'text-purple-400' },
  { value: '400+', label: 'Awesome Clients', icon: Star, color: 'text-orange-400' },
  { value: '10+', label: 'Years of Experience', icon: Award, color: 'text-green-400' },
  { value: '250+', label: 'Team Advisors', icon: Users, color: 'text-cyan-400' },
]

const pillars = [
  {
    icon: Rocket,
    title: 'Innovation',
    desc: 'Using the latest technologies and creative approaches to deliver future-ready solutions that keep our clients ahead of the curve.',
    color: 'text-blue-400',
    bg: 'from-blue-500/10',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: Handshake,
    title: 'Collaboration',
    desc: 'Working closely with clients to thoroughly understand their needs, fostering open communication channels at every stage.',
    color: 'text-purple-400',
    bg: 'from-purple-500/10',
    border: 'hover:border-purple-500/40',
  },
  {
    icon: CheckCircle2,
    title: 'Excellence',
    desc: 'Maintaining the highest standards in the quality of our work and the level of service we give to every single client.',
    color: 'text-green-400',
    bg: 'from-green-500/10',
    border: 'hover:border-green-500/40',
  },
]

const partners = [
  { name: 'Crunchbase', label: 'Top Mobile App Development' },
  { name: 'GoodFirms', label: 'Good Firms Award' },
  { name: 'UpCity', label: 'Site Of the Month' },
  { name: 'Yelp', label: 'Certified Mobile App Developer' },
  { name: 'Clutch', label: 'Certified Mobile App Developer' },
  { name: 'Trustpilot', label: 'See our Profile' },
  { name: 'Top SEO Brands', label: 'See our Profile' },
  { name: 'DesignRush', label: 'See our Profile' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">
              <span className="w-6 h-px bg-blue-400 inline-block" />
              Who We Are
              <span className="w-6 h-px bg-blue-400 inline-block" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              About <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-gray-300 font-semibold max-w-2xl mx-auto">
              Digitacurve: Your partner in digital innovation and transformation.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">
                <span className="w-6 h-px bg-blue-400 inline-block" />
                What We Do
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
                We specialize in delivering{' '}
                <span className="gradient-text">cutting-edge solutions</span>{' '}
                across web, app, AI, and digital marketing domains.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                From crafting bespoke websites to developing innovative mobile apps, harnessing the power of
                artificial intelligence, to driving digital marketing strategies, we empower businesses to
                thrive in the digital age. Our expert team combines creativity, technology, and strategic
                thinking to deliver results that exceed expectations.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Digitacurve is a global technology company offering a wide array of services focused
                on moving companies into the digital age. Our operations span the USA, UK, Canada, Australia,
                Middle-East, Ireland, and India, and across the globe.
              </p>
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20"
              >
                Work With Us
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Stats card cluster */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-5 rounded-2xl border border-[#2a2a2a] bg-[#111] ${i === 0 ? 'col-span-2' : ''}`}
                >
                  <div className={`text-3xl sm:text-4xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">
              <span className="w-6 h-px bg-blue-400 inline-block" />
              Our Services
              <span className="w-6 h-px bg-blue-400 inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              We provide an extensive range of{' '}
              <span className="gradient-text">IT Services</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(svc => (
              <div
                key={svc.title}
                className={`p-6 rounded-2xl border border-[#2a2a2a] bg-gradient-to-br ${svc.bg} to-transparent hover:border-[#444] transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl bg-[#111] flex items-center justify-center ${svc.color} mb-4`}>
                  <svc.icon size={22} />
                </div>
                <h4 className="text-white font-bold text-base mb-2">{svc.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-16 bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-black border-y border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-10">
            Businesses all over the world trust{' '}
            <span className="gradient-text">Digitacurve</span>{' '}
            to build their brand
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { v: '10', label: 'Years In Business', suffix: '+' },
              { v: '400', label: 'Happy Customers', suffix: '+' },
              { v: '5k', label: 'Monthly Blog Readers', suffix: '+' },
              { v: '50k', label: 'Social Followers', suffix: '' },
            ].map(item => (
              <div key={item.label} className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111]">
                <div className="text-4xl font-black gradient-text mb-1">{item.v}{item.suffix}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Pillars */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">
                <span className="w-6 h-px bg-blue-400 inline-block" />
                Mission
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our mission at Digitacurve is to empower businesses with innovative digital solutions, driving
                growth and success in today&apos;s dynamic landscape. Through creativity, expertise, and
                collaboration, we strive to exceed expectations and unlock the full potential of our
                clients&apos; brands.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Rocket, text: 'Innovation: Using latest technologies and creative approaches.' },
                  { icon: Handshake, text: 'Collaboration: Working closely with clients to address their needs.' },
                  { icon: CheckCircle2, text: 'Excellence: In the quality of our work and the level of service we give.' },
                ].map(item => (
                  <li key={item.text} className="flex items-start gap-3">
                    <item.icon size={18} className="text-blue-400 shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {pillars.map(pillar => (
                <div
                  key={pillar.title}
                  className={`p-6 rounded-2xl border border-[#2a2a2a] bg-gradient-to-br ${pillar.bg} to-transparent ${pillar.border} transition-all`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center ${pillar.color} shrink-0`}>
                      <pillar.icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base mb-1.5">{pillar.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">
              <span className="w-6 h-px bg-blue-400 inline-block" />
              Our Partners
              <span className="w-6 h-px bg-blue-400 inline-block" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Celebrating Digitacurve&apos;s{' '}
              <span className="gradient-text">Association</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map(p => (
              <div
                key={p.name}
                className="group p-5 rounded-2xl border border-[#2a2a2a] bg-[#111] hover:border-[#444] transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  <Award size={20} className="text-blue-400" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{p.name}</h4>
                <p className="text-gray-500 text-xs">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-5">
            Ready to <span className="gradient-text">transform</span> your business?
          </h2>
          <p className="text-gray-400 mb-8">
            Partner with Digitacurve to unlock innovative solutions tailored for your growth.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20 hover:scale-105"
          >
            Get In Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Smartphone, Globe, TrendingUp, Cpu, CheckCircle2, BarChart3, Users, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies | Digitacurve',
  description:
    'Explore our success stories and Case Studies at Digitacurve. See how our expertise in AI, app development, and digital solutions drives business growth.',
}

const filterTabs = [
  { id: 'mobile', label: 'Mobile App Development', icon: Smartphone, color: 'text-blue-400' },
  { id: 'web', label: 'Web App Development', icon: Globe, color: 'text-purple-400' },
  { id: 'marketing', label: 'Digital Marketing', icon: TrendingUp, color: 'text-orange-400' },
  { id: 'ai', label: 'Artificial Intelligence', icon: Cpu, color: 'text-green-400' },
]

const caseStudies = [
  {
    id: 'keep-it-going',
    title: 'Keep It Going',
    category: 'Mobile App Development',
    categoryId: 'mobile',
    client: 'Keep It Going Inc.',
    duration: '6 months',
    team: '8 people',
    overview:
      'Keep It Going needed a cross-platform mobile application to help users build and maintain positive daily habits. The existing solution was a web-only portal with poor mobile experience and low retention rates.',
    challenge:
      'The client required a highly engaging, gamified mobile experience with offline capabilities, real-time syncing, push notifications, and social sharing features — all within a tight timeline.',
    solution:
      'We developed a React Native application with a custom gamification engine, offline-first architecture using local SQLite, and Firebase for real-time data sync. We implemented ML-driven habit suggestions based on usage patterns.',
    results: [
      { metric: '340%', label: 'Increase in daily active users' },
      { metric: '68%', label: 'Improvement in 30-day retention' },
      { metric: '4.8★', label: 'App Store rating' },
      { metric: '50K+', label: 'Downloads in first 90 days' },
    ],
    tech: ['React Native', 'Firebase', 'SQLite', 'Python (ML)', 'Node.js', 'AWS'],
    color: 'from-blue-600/20 to-purple-600/5',
    accent: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    id: 'imbooked',
    title: 'Imbooked',
    category: 'Mobile App Development',
    categoryId: 'mobile',
    client: 'Imbooked LLC',
    duration: '8 months',
    team: '10 people',
    overview:
      'Imbooked is an on-demand booking platform for beauty and wellness professionals. The founders needed a two-sided marketplace app — one for providers to manage schedules and another for customers to book appointments.',
    challenge:
      'Building a real-time booking system with calendar sync, payment processing, in-app messaging, and a robust review system, all while ensuring low latency and 99.9% uptime during peak hours.',
    solution:
      'We architected a microservices backend on AWS with a React Native frontend. We integrated Stripe for payments, Twilio for SMS/notifications, Google Calendar API for sync, and built a custom real-time chat using Socket.IO.',
    results: [
      { metric: '1,200+', label: 'Service providers onboarded' },
      { metric: '15,000+', label: 'Bookings in first month' },
      { metric: '99.97%', label: 'Platform uptime achieved' },
      { metric: '$2.3M', label: 'In bookings processed year 1' },
    ],
    tech: ['React Native', 'Node.js', 'Stripe', 'Socket.IO', 'PostgreSQL', 'AWS', 'Twilio'],
    color: 'from-purple-600/20 to-pink-600/5',
    accent: 'border-purple-500/30',
    iconColor: 'text-purple-400',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    id: 'fiscal-kids',
    title: 'Fiscal Kids',
    category: 'Web App Development',
    categoryId: 'web',
    client: 'Fiscal Kids Education',
    duration: '5 months',
    team: '6 people',
    overview:
      'Fiscal Kids is an EdTech startup aiming to teach financial literacy to children aged 8–16 through interactive, gamified web experiences. They needed a complete platform from scratch.',
    challenge:
      'Designing for a young audience requires exceptional UX, parental controls, COPPA compliance, progress tracking, and a rewards system. Performance on lower-end devices was also critical.',
    solution:
      'Built a Next.js web application with a custom game engine, animated lesson modules, a parent dashboard with detailed analytics, and Stripe billing for subscriptions. We achieved COPPA and GDPR compliance.',
    results: [
      { metric: '8,500+', label: 'Student registrations in 60 days' },
      { metric: '42 min', label: 'Avg. daily session time' },
      { metric: '4.9★', label: 'Parent satisfaction rating' },
      { metric: '94%', label: 'Course completion rate' },
    ],
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'PostgreSQL', 'Stripe', 'Vercel'],
    color: 'from-yellow-600/20 to-orange-600/5',
    accent: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
    gradient: 'from-yellow-600 to-orange-600',
  },
  {
    id: 'vlaunch-seo',
    title: 'VLaunch SEO Campaign',
    category: 'Digital Marketing',
    categoryId: 'marketing',
    client: 'VLaunch Solutions',
    duration: '12 months',
    team: '5 people',
    overview:
      'VLaunch Solutions, a B2B SaaS startup, had near-zero organic presence and was fully dependent on paid ads. They needed a comprehensive SEO and content strategy to build long-term organic authority.',
    challenge:
      'Entering a highly competitive SaaS market with zero domain authority, requiring both technical SEO overhauls and a robust content flywheel to compete against entrenched players with years of backlink history.',
    solution:
      'Conducted a complete technical SEO audit, rebuilt the site architecture, developed a 200-article content plan targeting long-tail keywords, and executed a white-hat link-building campaign with industry publications.',
    results: [
      { metric: '780%', label: 'Growth in organic traffic' },
      { metric: '156', label: 'Keywords ranking page 1' },
      { metric: '45%', label: 'Reduction in CAC' },
      { metric: '320%', label: 'Increase in qualified leads' },
    ],
    tech: ['SEMrush', 'Ahrefs', 'Google Search Console', 'HubSpot', 'Clearscope'],
    color: 'from-orange-600/20 to-red-600/5',
    accent: 'border-orange-500/30',
    iconColor: 'text-orange-400',
    gradient: 'from-orange-600 to-red-600',
  },
]

export default function CaseStudyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-black to-blue-950/20" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">
            <span className="w-6 h-px bg-blue-400 inline-block" />
            Case Studies
            <span className="w-6 h-px bg-blue-400 inline-block" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-5">
            Case <span className="gradient-text">Study</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Look Into Our Success Stories
          </p>
        </div>
      </section>

      {/* Category filter pills */}
      <section className="bg-[#050505] border-b border-[#1a1a1a] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            {filterTabs.map(tab => (
              <div
                key={tab.id}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2a2a2a] bg-[#111] text-sm font-medium text-gray-400 shrink-0"
              >
                <tab.icon size={14} className={tab.color} />
                {tab.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {caseStudies.map((cs, i) => (
              <article
                key={cs.id}
                className={`rounded-3xl border ${cs.accent} bg-gradient-to-br ${cs.color} overflow-hidden`}
              >
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <p className={`text-xs font-bold uppercase tracking-wider ${cs.iconColor} mb-3`}>
                        {cs.category}
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{cs.title}</h3>
                      <p className="text-gray-400 leading-relaxed max-w-2xl">{cs.overview}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 lg:w-56 shrink-0">
                      <div className="p-3 rounded-xl bg-[#111] border border-[#2a2a2a] text-center">
                        <Users size={16} className="text-gray-500 mx-auto mb-1" />
                        <div className="text-white font-bold text-sm">{cs.team}</div>
                        <div className="text-gray-500 text-xs">Team size</div>
                      </div>
                      <div className="p-3 rounded-xl bg-[#111] border border-[#2a2a2a] text-center">
                        <Clock size={16} className="text-gray-500 mx-auto mb-1" />
                        <div className="text-white font-bold text-sm">{cs.duration}</div>
                        <div className="text-gray-500 text-xs">Duration</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    {/* Challenge */}
                    <div className="p-5 rounded-2xl bg-[#111] border border-[#2a2a2a]">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-400" />
                        Challenge
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="p-5 rounded-2xl bg-[#111] border border-[#2a2a2a]">
                      <h4 className="text-white font-bold text-sm mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        Solution
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{cs.solution}</p>
                    </div>

                    {/* Tech stack */}
                    <div className="p-5 rounded-2xl bg-[#111] border border-[#2a2a2a]">
                      <h4 className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cs.tech.map(t => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] text-xs text-gray-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                      <BarChart3 size={15} className={cs.iconColor} />
                      Key Results
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {cs.results.map(r => (
                        <div
                          key={r.label}
                          className="p-4 rounded-2xl bg-[#111] border border-[#2a2a2a] text-center"
                        >
                          <div className={`text-2xl font-black ${cs.iconColor} mb-1`}>{r.metric}</div>
                          <div className="text-gray-500 text-xs leading-tight">{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center p-10 rounded-3xl border border-[#2a2a2a] bg-gradient-to-br from-blue-950/30 to-purple-950/20">
            <h3 className="text-2xl font-black text-white mb-4">
              Ready to become our next{' '}
              <span className="gradient-text">success story</span>?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm">
              Tell us about your project and let&apos;s create remarkable results together.
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20"
            >
              Start Your Project
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

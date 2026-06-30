'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Globe, Smartphone, TrendingUp, Layers } from 'lucide-react'

const tabs = [
  { id: 'all', label: 'All Work', icon: Layers },
  { id: 'website', label: 'Website', icon: Globe },
  { id: 'mobile', label: 'Mobile App', icon: Smartphone },
  { id: 'webapp', label: 'Web App', icon: Globe },
  { id: 'marketing', label: 'Digital Marketing', icon: TrendingUp },
]

const projects = [
  {
    id: 1,
    title: 'Imbooked',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    desc: 'A feature-rich booking & scheduling platform enabling service professionals to manage appointments seamlessly from mobile devices.',
    tags: ['React Native', 'Firebase', 'iOS', 'Android'],
    color: 'from-blue-600/30 to-purple-600/5',
    accent: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    year: '2024',
    image: '/assets/projects/imbooked.jpg',
  },
  {
    id: 2,
    title: 'Keep It Going',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    desc: 'A motivational wellness app designed to help users build consistent habits, track progress, and stay motivated daily.',
    tags: ['Flutter', 'Node.js', 'MongoDB', 'iOS'],
    color: 'from-green-600/30 to-teal-600/5',
    accent: 'border-green-500/20',
    iconColor: 'text-green-400',
    year: '2024',
    image: '/assets/projects/keepitgoing.jpg',
  },
  {
    id: 3,
    title: 'Fiscal Kids',
    category: 'webapp',
    categoryLabel: 'Web App Development',
    desc: 'An interactive financial literacy platform for children, teaching money management through gamified lessons and challenges.',
    tags: ['React', 'Express', 'PostgreSQL', 'Stripe'],
    color: 'from-yellow-600/30 to-orange-600/5',
    accent: 'border-yellow-500/20',
    iconColor: 'text-yellow-400',
    year: '2023',
    image: '/assets/projects/fiscalkids.jpg',
  },
  {
    id: 4,
    title: 'Happiness Calculator',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    desc: 'A science-based wellbeing app measuring and improving happiness scores using psychological assessment frameworks.',
    tags: ['Swift', 'Kotlin', 'Python', 'ML'],
    color: 'from-pink-600/30 to-rose-600/5',
    accent: 'border-pink-500/20',
    iconColor: 'text-pink-400',
    year: '2023',
    image: '/assets/projects/happiness.jpg',
  },
  {
    id: 5,
    title: 'VLaunch Solutions',
    category: 'website',
    categoryLabel: 'Website Design',
    desc: 'A dynamic corporate website for a startup accelerator, featuring interactive program pages, mentor profiles, and application portals.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion', 'CMS'],
    color: 'from-purple-600/30 to-violet-600/5',
    accent: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    year: '2024',
    image: '/assets/projects/vlaunch.jpg',
  },
  {
    id: 6,
    title: 'MeinHaus',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    desc: 'A home services marketplace connecting users with vetted service providers for painting, cleaning, demolition & appliance installation.',
    tags: ['React Native', 'Node.js', 'AWS', 'Stripe'],
    color: 'from-teal-600/30 to-cyan-600/5',
    accent: 'border-teal-500/20',
    iconColor: 'text-teal-400',
    year: '2023',
    image: '/assets/backgroungimages/project2bg.webp',
  },
  {
    id: 7,
    title: 'AMPS Institute',
    category: 'mobile',
    categoryLabel: 'Mobile App Development',
    desc: 'A comprehensive platform for The AMPS Institute supporting programs focused on the Roadmap to Entrepreneurship Excellence.',
    tags: ['React Native', 'Firebase', 'iOS', 'Android'],
    color: 'from-indigo-600/30 to-blue-600/5',
    accent: 'border-indigo-500/20',
    iconColor: 'text-indigo-400',
    year: '2022',
    image: '/assets/backgroungimages/project1-bg.webp',
  },
  {
    id: 8,
    title: 'Wikistrings',
    category: 'website',
    categoryLabel: 'Website Design',
    desc: 'A dynamic platform designed for real-life interaction and evaluation of guitar strings, featuring detailed reviews and comparisons.',
    tags: ['React', 'Node.js', 'MongoDB', 'Cloudinary'],
    color: 'from-orange-600/30 to-amber-600/5',
    accent: 'border-orange-500/20',
    iconColor: 'text-orange-400',
    year: '2022',
    image: '/assets/backgroungimages/project3-bg.webp',
  },
  {
    id: 9,
    title: 'Social Boost Pro',
    category: 'marketing',
    categoryLabel: 'Digital Marketing',
    desc: 'A comprehensive digital marketing campaign for a fintech brand, achieving 340% increase in organic traffic within 6 months.',
    tags: ['SEO', 'PPC', 'Content', 'Analytics'],
    color: 'from-red-600/30 to-rose-600/5',
    accent: 'border-red-500/20',
    iconColor: 'text-red-400',
    year: '2024',
    image: '/assets/projects/socialboost.jpg',
  },
]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-purple-950/20" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">
            <span className="w-6 h-px bg-blue-400 inline-block" />
            Our Work
            <span className="w-6 h-px bg-blue-400 inline-block" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-5">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our diverse portfolio of digital solutions.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Proud projects that make us stand out
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 z-30 bg-black/95 backdrop-blur border-b border-[#1a1a1a] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20'
                    : 'border border-[#2a2a2a] text-gray-400 hover:text-white hover:border-[#444]'
                }`}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-[#050505] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-500 text-sm">
              Showing{' '}
              <span className="text-white font-semibold">{filtered.length}</span>{' '}
              project{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(project => (
              <div
                key={project.id}
                className={`group relative p-6 rounded-2xl border ${project.accent} bg-gradient-to-br ${project.color} hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                {/* Mock thumbnail */}
                <div className="w-full h-44 rounded-xl bg-[#111] mb-5 flex items-center justify-center border border-[#2a2a2a] relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/10 to-transparent" />
                      <div className={`${project.iconColor} opacity-30`}>
                        {project.category === 'mobile' ? (
                          <Smartphone size={48} />
                        ) : (
                          <Globe size={48} />
                        )}
                      </div>
                    </>
                  )}
                  {/* Year badge */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/60 border border-[#2a2a2a] text-xs text-gray-400 z-10">
                    {project.year}
                  </div>
                </div>

                <div className="flex items-start justify-between mb-3">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${project.iconColor}`}>
                    {project.categoryLabel}
                  </p>
                  <ArrowUpRight
                    size={16}
                    className={`${project.iconColor} opacity-0 group-hover:opacity-100 transition-opacity shrink-0`}
                  />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-[#111] border border-[#2a2a2a] text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-gray-500">
              No projects found in this category.
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center p-10 rounded-3xl border border-[#2a2a2a] bg-gradient-to-br from-blue-950/30 to-purple-950/20">
            <h3 className="text-2xl font-black text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm">
              Let&apos;s collaborate and turn your vision into a world-class digital product.
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/20"
            >
              Start a Project
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

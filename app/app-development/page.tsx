import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Smartphone, CheckCircle2, ArrowRight, Zap, Target, Shield, Cpu, Layers, Code, Play
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile App Development Services | Digitacurve',
  description: 'Redefine your digital landscape with our premier Android, iOS, Swift, cross-platform mobile application development and game development services.',
}

const serviceDetails = [
  {
    title: 'Android App Development',
    desc: 'Empower your business with custom Android apps built for performance, reliability, and security. We cover everything from design to Google Play Store deployment.',
    techs: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose'],
  },
  {
    title: 'iOS App Development',
    desc: 'Deliver an exceptional user experience on Apple devices with native iOS apps optimized for speed, security, and fluid interfaces.',
    techs: ['Swift', 'Objective-C', 'iOS SDK', 'SwiftUI'],
  },
  {
    title: 'Swift App Development',
    desc: 'Harness the full power of Swift to build modern, lightning-fast applications for macOS, iOS, watchOS, and tvOS with high code maintainability.',
    techs: ['Swift', 'SwiftUI', 'CocoaPods', 'Swift Package Manager'],
  },
  {
    title: 'Cross-Platform Mobile Apps',
    desc: 'Reach both Android and iOS audiences simultaneously with high-performance cross-platform apps that share a single codebase, lowering costs.',
    techs: ['React Native', 'Flutter', 'TypeScript', 'Dart'],
  },
  {
    title: 'iPad App Development',
    desc: 'Take full advantage of larger screen real estate, multitasking capabilities, and iPadOS features with tailored tablet applications.',
    techs: ['Swift', 'iPadOS APIs', 'Auto Layout', 'Split View Controller'],
  },
  {
    title: 'Mobile Game Development',
    desc: 'Engage players with immersive, visually stunning 2D and 3D mobile games featuring physics simulation, rich soundscapes, and smooth frame rates.',
    techs: ['Unity', 'C#', 'Unreal Engine', 'C++', 'OpenGL/Vulkan'],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Consulting',
    desc: 'We define product requirements, target audience, and feature maps to outline a solid strategy.',
  },
  {
    step: '02',
    title: 'UI/UX Design',
    desc: 'We map user journeys, create wireframes, and design immersive, modern mobile interfaces.',
  },
  {
    step: '03',
    title: 'Agile Development',
    desc: 'Our developers implement structured, clean, and fully-tested code in active sprint cycles.',
  },
  {
    step: '04',
    title: 'Quality Assurance',
    desc: 'Rigorous manual and automated testing across multiple device screen sizes to ensure stability.',
  },
  {
    step: '05',
    title: 'Launch & Support',
    desc: 'Deploying your applications to the App Store and Google Play, followed by regular maintenance updates.',
  },
]

export default function AppDevelopmentPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-purple-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-5">
              <span className="w-6 h-px bg-purple-400 inline-block" />
              Mobile App Development
              <span className="w-6 h-px bg-purple-400 inline-block" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              Premier <span className="gradient-text">Mobile App</span> Innovations
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              We design and develop revolutionary native and cross-platform mobile applications that provide unforgettable user experiences and drive operational success.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-sm hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/20 hover:scale-105"
              >
                Get Started
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Our App <span className="gradient-text">Development Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From enterprise solutions to engaging consumer applications, our engineering expertise spans all major architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] hover:border-[#444] transition-all hover:translate-y-[-2px] group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500/20 transition-all">
                  <Smartphone size={22} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-black border border-[#222] text-xs font-semibold text-gray-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-black border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Our Proven <span className="gradient-text">Workflow</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              How we take your app idea from paper notes to a successful App Store launch.
            </p>
          </div>

          <div className="relative">
            {/* Visual connecting line for desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-950 via-blue-950 to-purple-950 -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] hover:border-[#444] transition-all"
                >
                  <div className="text-4xl font-black text-purple-500/20 mb-4">{step.step}</div>
                  <h4 className="text-white font-bold text-base mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Have a project in mind? Let&apos;s build it <span className="gradient-text">together</span>.
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get in touch with our team of expert app developers today to schedule a free project discovery and consultation.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:from-purple-500 hover:to-blue-500 transition-all shadow-lg shadow-purple-500/20 hover:scale-105"
          >
            Launch Your App Idea
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

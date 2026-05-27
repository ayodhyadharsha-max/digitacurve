import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Cpu, CheckCircle2, ArrowRight, Brain, Cpu as IoTIcon, Zap, ShieldAlert, Settings, Sparkles, MessageSquare
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Artificial Intelligence & Emerging Technology | Quantum IT Innovation',
  description: 'Explore the unmatched expertise and innovation offered by our leading AI, Generative AI, IoT, RPA, and Software Development solutions.',
}

const serviceDetails = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    desc: 'Deploy custom neural networks, predictive models, and deep learning algorithms designed to extract actionable insights from your business datasets.',
    icon: Brain,
    color: 'text-violet-400',
    bg: 'from-violet-500/10',
  },
  {
    title: 'Generative AI & LLM Solutions',
    desc: 'Integrate advanced large language models (LLMs), custom GPT models, semantic vector search systems, and automated agent pipelines for workflows.',
    icon: Sparkles,
    color: 'text-fuchsia-400',
    bg: 'from-fuchsia-500/10',
  },
  {
    title: 'Internet of Things (IoT)',
    desc: 'Build secure, end-to-end connected IoT solutions. We manage firmware development, telemetry channels, hardware-software handshakes, and smart interfaces.',
    icon: IoTIcon,
    color: 'text-blue-400',
    bg: 'from-blue-500/10',
  },
  {
    title: 'Robotic Process Automation (RPA)',
    desc: 'Eliminate repetitive manual actions. Our custom RPA bots automate complex system tasks, database entries, and file integrations with zero errors.',
    icon: Settings,
    color: 'text-pink-400',
    bg: 'from-pink-500/10',
  },
  {
    title: 'AI Software Development Solutions',
    desc: 'Custom software systems injected with machine learning pipelines to automate scheduling, classification, customer profiling, and verification.',
    icon: Zap,
    color: 'text-emerald-400',
    bg: 'from-emerald-500/10',
  },
  {
    title: 'AI Consulting & Strategy',
    desc: 'Strategic consultation from top-tier AI consultants to evaluate infrastructure readiness, model selections, compliance constraints, and cost estimations.',
    icon: MessageSquare,
    color: 'text-amber-400',
    bg: 'from-amber-500/10',
  },
]

const useCases = [
  { title: 'Customer Experience Automation', desc: 'Smarter LLM chatbots integrated with company databases resolving over 75% of front-line support queries instantly.' },
  { title: 'Predictive Analytics & Forecasting', desc: 'Time-series forecasting models predicting supply chain levels and customer demand patterns with high precision.' },
  { title: 'Intelligent Document Processing', desc: 'Extract data automatically from invoices, receipts, and shipping notes with high-confidence OCR and parsing.' },
]

export default function ArtificialIntelligencePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-violet-950/20 via-black to-black overflow-hidden border-b border-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-400 mb-5">
              <span className="w-6 h-px bg-violet-400 inline-block" />
              Emerging Technology & AI
              <span className="w-6 h-px bg-violet-400 inline-block" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
              Artificial Intelligence <span className="gradient-text">Unmatched Expertise</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Discover the unparalleled innovation offered by our leading AI solutions, where cutting-edge neural models meet exceptional software engineering.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/company/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold text-sm hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-fuchsia-500/20 hover:scale-105"
              >
                Explore AI Solutions
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
              Our AI & Technology <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              From Generative AI models to enterprise robotic automation, we construct the technological infrastructure for tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceDetails.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] hover:border-[#444] transition-all hover:translate-y-[-2px] group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.bg} to-transparent flex items-center justify-center ${service.color} mb-6`}>
                  <service.icon size={22} />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Use Cases */}
      <section className="py-20 bg-black border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              AI Application <span className="gradient-text">Scenarios</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              How we deploy artificial intelligence to add direct value and improve core business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-6 rounded-2xl border border-[#2a2a2a] bg-[#111] transition-all hover:border-[#444]"
              >
                <div className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-2">Solution</div>
                <h3 className="text-white font-bold text-lg mb-3">{useCase.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[#050505] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Accelerate your business with customized AI solutions.
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book an assessment with our AI engineers to explore how GenAI, process automation, or custom models can optimize your workflows.
          </p>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold hover:from-violet-500 hover:to-fuchsia-500 transition-all shadow-lg shadow-fuchsia-500/20 hover:scale-105"
          >
            Consult Our AI Experts
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}

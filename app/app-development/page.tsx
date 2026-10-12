import Link from 'next/link';
import { ArrowUpRight, Smartphone, Cpu, Shield, Zap, CheckCircle2, Layers, Code2, Globe } from 'lucide-react';

export const metadata = {
  title: 'Mobile App Development Company Noida & India | iOS, Android & Apple Intelligence',
  description: 'Custom mobile app development agency in Noida & India. Specialized in iOS (SwiftUI), Android (Kotlin), React Native, Flutter, and Apple Intelligence (AI) feature integration for high-converting business applications.',
  alternates: {
    canonical: 'https://www.digitacurve.com/app-development',
  },
};

export default function AppDevelopmentPage() {
  const appCapabilities = [
    {
      icon: Smartphone,
      title: 'iOS (Swift/SwiftUI) & Apple Intelligence Integration',
      desc: 'High-performance iOS applications built with SwiftUI, Siri App Intents, and Apple Intelligence CoreML features for next-gen iPhone & iPad experiences.',
    },
    {
      icon: Code2,
      title: 'Cross-Platform React Native & Flutter',
      desc: 'Single codebase deployment to iOS and Android without sacrificing 60fps UI performance or native UX feel.',
    },
    {
      icon: Zap,
      title: 'Real-Time Sync & Offline First',
      desc: 'Seamless data synchronization, offline local caching, push notifications, and background job handling.',
    },
    {
      icon: Shield,
      title: 'Secure API & Payment Gateways',
      desc: 'Bank-grade encryption, JWT authentication, OAuth2 login, and integrated Razorpay / Stripe / Apple Pay checkout.',
    },
    {
      icon: Layers,
      title: 'App Store & Play Store Deployment',
      desc: 'Complete end-to-end management of App Store Connect and Google Play Console publishing, compliance, and guidelines approval.',
    },
    {
      icon: Globe,
      title: 'Enterprise Backend & Admin Panels',
      desc: 'Custom Web Admin Dashboards for real-time app analytics, user management, order processing, and dynamic content updates.',
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Header */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
            <Smartphone className="w-4 h-4" /> MOBILE APP DEVELOPMENT
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-[0.95] text-slate-900">
            MOBILE APPS BUILT FOR<br />
            <span className="text-blue-600 italic font-light">RETENTION &amp; SCALE.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            From consumer iOS &amp; Android apps to internal business field engines. We build sleek mobile products with intuitive UI, sub-second responses, and solid API architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/company/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              START AN APP PROJECT <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/917572094201"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-900 font-bold text-sm px-7 py-4 rounded-full transition-all"
            >
              DISCUSS APP ARCHITECTURE
            </a>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="space-y-4 mb-12">
          <p className="text-xs font-mono text-blue-600 tracking-widest uppercase font-bold">
            MOBILE ENGINEERING STACK
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 uppercase">
            FULL-STACK MOBILE SOLUTIONS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appCapabilities.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-500 rounded-2xl p-6 space-y-4 transition-all duration-300 group shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process / Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-200">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="space-y-3">
            <span className="text-xs font-mono text-blue-600 uppercase tracking-widest font-bold">
              OUR TECH &amp; FRAMEWORKS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase">
              MODERN TECH STACK
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
              <div className="text-blue-600 font-bold">iOS DEVELOPMENT</div>
              <div className="text-slate-700">Swift, SwiftUI, XCode</div>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
              <div className="text-blue-600 font-bold">ANDROID</div>
              <div className="text-slate-700">Kotlin, Jetpack Compose</div>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
              <div className="text-blue-600 font-bold">CROSS PLATFORM</div>
              <div className="text-slate-700">React Native, Flutter</div>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-1 shadow-sm">
              <div className="text-blue-600 font-bold">BACKEND &amp; CLOUD</div>
              <div className="text-slate-700">Node.js, Firebase, AWS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-slate-900">
          HAVE AN APP IDEA IN MIND?
        </h2>
        <p className="text-slate-600 text-sm max-w-xl mx-auto font-light">
          Talk directly with Rishabh Jaiswal to plan your app features, tech stack, and launch roadmap.
        </p>
        <div>
          <Link
            href="/company/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
          >
            BOOK A FREE APP CONSULTATION <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

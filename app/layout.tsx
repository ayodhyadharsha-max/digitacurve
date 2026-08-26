import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://digitacurve.com'),
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  title: {
    default: 'Next.js Web Development Agency | SEO & GEO Company | Digitacurve',
    template: '%s | Digitacurve',
  },
  description:
    'Digitacurve is a premier Next.js web development agency, mobile app development company, and digital marketing firm specializing in custom software, SEO, and GEO (Generative Engine Optimization) globally.',
  keywords: [
    'Next.js web development agency',
    'mobile app development company',
    'SEO services',
    'Generative Engine Optimization',
    'GEO agency',
    'custom website development',
    'SEO company Noida',
    'digitacurve'
  ],
  verification: {
    google: 'WbnglHYC1zWfihaNiEeyOMTupfOh3iHF8h8tKPa07II',
  },
  openGraph: {
    title: 'Next.js Web Development Agency | SEO & GEO Company | Digitacurve',
    description: 'Digitacurve is a premier Next.js web development agency, mobile app development company, and digital marketing firm specializing in custom software, SEO, and GEO.',
    url: 'https://digitacurve.com',
    siteName: 'Digitacurve',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@digitacurve',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://digitacurve.com/#organization",
                  "name": "Digitacurve",
                  "url": "https://digitacurve.com",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://digitacurve.com/#logo",
                    "url": "https://digitacurve.com/icon.png",
                    "caption": "Digitacurve Logo"
                  },
                  "image": {
                    "@id": "https://digitacurve.com/#logo"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+91-7572094201",
                      "contactType": "sales",
                      "email": "sales@digitacurve.com",
                      "areaServed": "Worldwide"
                    }
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/company/digitacurve",
                    "https://github.com/ayodhyadharsha-max/digitacurve",
                    "https://www.facebook.com/digitacurve",
                    "https://www.instagram.com/digitacurve/",
                    "https://buymeacoffee.com/digitacurvi",
                    "https://modal.com/apps/digitacurve/main"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://digitacurve.com/#website",
                  "url": "https://digitacurve.com",
                  "name": "Digitacurve",
                  "publisher": {
                    "@id": "https://digitacurve.com/#organization"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Custom Website Development",
                  "provider": {
                    "@id": "https://digitacurve.com/#organization"
                  },
                  "serviceType": "Web Design and Development",
                  "description": "Bespoke website design, custom software development, Shopify and e-commerce solutions built at absolute scale."
                },
                {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "provider": {
                    "@id": "https://digitacurve.com/#organization"
                  },
                  "serviceType": "iOS and Android Development",
                  "description": "Custom mobile application development for iPhone, iPad, and Android using Swift, Kotlin, React Native, and Flutter."
                },
                {
                  "@type": "Service",
                  "name": "Generative Engine Optimization (GEO)",
                  "provider": {
                    "@id": "https://digitacurve.com/#organization"
                  },
                  "serviceType": "AI Engine & SEO Optimization",
                  "description": "Optimizing digital content to rank in AI search summaries (ChatGPT, Gemini, Perplexity, Claude) and Google rankings."
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased`}>
        <ThemeProvider>
          <Topbar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <WhatsAppButton />
      </body>
    </html>
  )
}

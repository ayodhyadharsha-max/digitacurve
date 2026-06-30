import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Top Web Development & Digital Marketing Services',
    template: '%s | Digitacurve',
  },
  description:
    'Leading Web Development & Digital Marketing Experts. Top SEO, PPC, SMO & Consulting Solutions tailored for growth. Explore Digitacurve today!',
  keywords: ['web development', 'SEO services', 'PPC management', 'digital marketing', 'digitacurve'],
  verification: {
    google: 'WbnglHYC1zWfihaNiEeyOMTupfOh3iHF8h8tKPa07II',
  },
  openGraph: {
    title: 'Top Web Development & Digital Marketing Services',
    description: 'Leading Web Development & Digital Marketing Experts. Top SEO, PPC, SMO & Consulting Solutions tailored for growth.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
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

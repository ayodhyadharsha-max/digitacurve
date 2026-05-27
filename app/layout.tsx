import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Top Mobile & Web Development | AI Solutions | Digital Marketing Services',
    template: '%s | Quantum IT Innovation',
  },
  description:
    'Leading AI & Digital Marketing Experts. Top Mobile & Web Development Solutions tailored for growth. Explore Quantum IT Innovation today!',
  keywords: ['mobile app development', 'web development', 'AI solutions', 'digital marketing', 'quantum it innovation'],
  openGraph: {
    title: 'Top Mobile & Web Development | AI Solutions | Digital Marketing Services',
    description: 'Leading AI & Digital Marketing Experts. Top Mobile & Web Development Solutions tailored for growth.',
    url: 'https://quantumitinnovation.com',
    siteName: 'Quantum IT Innovation',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@quantum_it_',
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
      </body>
    </html>
  )
}

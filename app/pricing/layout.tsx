import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing & Packages 2026: Websites, Apps & 360° Lead Systems | Digitacurve',
  description: 'Explore transparent 2026 pricing for custom Next.js websites, iOS/Android mobile apps, and 360° digital marketing lead machines with our 60-second instant cost estimator.',
  openGraph: {
    title: 'Pricing & Packages 2026 | Digitacurve',
    description: 'Explore transparent 2026 pricing for custom Next.js websites, iOS/Android mobile apps, and 360° digital marketing lead machines.',
    url: 'https://digitacurve.com/pricing',
    siteName: 'Digitacurve',
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

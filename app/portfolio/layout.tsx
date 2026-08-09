import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Portfolio | Case Studies & High-Scale Client Projects | Digitacurve',
  description: 'Explore Digitacurve portfolio of custom Next.js web applications, mobile apps, AI SaaS platforms, and high-ROI digital marketing case studies.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

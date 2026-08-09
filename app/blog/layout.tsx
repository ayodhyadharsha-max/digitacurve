import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Engineering Blog | SEO, GEO, Next.js & Growth Strategies | Digitacurve',
  description: 'Read the latest technical articles, Generative Engine Optimization (GEO) guides, Next.js architectural benchmarks, and digital marketing insights from Digitacurve engineers.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

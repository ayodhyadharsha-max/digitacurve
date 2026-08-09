import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Hire Next.js Developers & Digital Growth Team | Digitacurve',
  description: 'Get in touch with Digitacurve engineering & digital marketing specialists. Call +91 7572094201 or request an instant project proposal today.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

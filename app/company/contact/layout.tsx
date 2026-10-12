import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Digitacurve Digital Agency Noida',
  description: 'Get in touch with Digitacurve for custom Next.js web application development, SEO, PPC performance marketing, and digital growth consultation.',
  alternates: {
    canonical: 'https://www.digitacurve.com/company/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

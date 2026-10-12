import HeroSection from '@/components/HeroSection';
import MarqueeBanner from '@/components/MarqueeBanner';
import RosterPulse from '@/components/RosterPulse';
import FreeReportFeature from '@/components/FreeReportFeature';
import ServicesGrid from '@/components/ServicesGrid';
import LivingStudio from '@/components/LivingStudio';
import ManifestoSection from '@/components/ManifestoSection';
import ProcessSystem from '@/components/ProcessSystem';
import BrandUniverse from '@/components/BrandUniverse';
import WorkingStandards from '@/components/WorkingStandards';
import FaqSection from '@/components/FaqSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digitacurve: Next.js Web Development Agency | SEO & GEO Company',
  description:
    'Digitacurve stands at the forefront of digital transformation, offering custom Next.js web applications, digital marketing, SEO, PPC, and 360° lead generation systems based in Noida, serving clients across India.',
  alternates: {
    canonical: 'https://www.digitacurve.com',
  },
};

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <HeroSection />
      <MarqueeBanner />
      <RosterPulse />
      <FreeReportFeature />
      <ServicesGrid />
      <LivingStudio />
      <ManifestoSection />
      <ProcessSystem />
      <BrandUniverse />
      <WorkingStandards />
      <FaqSection />
    </div>
  );
}

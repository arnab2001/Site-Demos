import HeroSection from '@/components/home/hero-section'
import AboutSection from '@/components/home/about-section'
import HighlightsSection from '@/components/home/highlights-section'
import AcademicsSection from '@/components/home/academics-section'
import EventsSection from '@/components/home/events-section'
import PrincipalSection from '@/components/home/principal-section'
import ContactCTA from '@/components/home/contact-cta'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <AcademicsSection />
      <EventsSection />
      <PrincipalSection />
      <ContactCTA />
    </div>
  );
}
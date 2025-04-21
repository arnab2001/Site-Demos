import Hero from "@/components/hero"
import CoursesSection from "@/components/courses-section"
import WhyChooseUs from "@/components/why-choose-us"
import ResultsSection from "@/components/results-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import FacultySection from "@/components/faculty-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CoursesSection />
      <WhyChooseUs />
      <ResultsSection />
      <FacultySection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

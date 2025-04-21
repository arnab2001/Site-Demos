import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PhoneCall, Mail, Calendar } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-16 bg-[#0D47A1] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We invite you to experience our vibrant learning environment. Schedule a visit or apply for admission today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm transition-transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF9800] mb-6">
              <PhoneCall size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Call Us</h3>
            <p className="text-white/90 mb-6">Speak directly with our admissions team</p>
            <Button className="bg-white text-[#0D47A1] hover:bg-[#FF9800] hover:text-white">
              +91 98765 43210
            </Button>
          </div>
          
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm transition-transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF9800] mb-6">
              <Calendar size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Visit Our Campus</h3>
            <p className="text-white/90 mb-6">Take a tour and explore our facilities</p>
            <Button className="bg-[#FF9800] text-white hover:bg-white hover:text-[#0D47A1]">
              <Link href="/contact#schedule-visit">Schedule a Visit</Link>
            </Button>
          </div>
          
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm transition-transform hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF9800] mb-6">
              <Mail size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Apply for Admission</h3>
            <p className="text-white/90 mb-6">Begin your journey with us today</p>
            <Button className="bg-white text-[#0D47A1] hover:bg-[#FF9800] hover:text-white">
              <Link href="/admissions">Apply Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
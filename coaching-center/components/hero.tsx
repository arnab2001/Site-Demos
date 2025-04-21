import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-[#1A237E] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <Image src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background pattern" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Join Howrah's Leading Coaching Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Board + JEE + NEET Coaching for Classes 8–12</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-[#FBC02D] hover:bg-[#F9A825] text-white text-lg">
                <Link href="/courses">View Courses</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white/10 text-lg">
                <Link href="/contact">Book a Free Demo</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:block relative h-[400px]">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Students in classroom"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

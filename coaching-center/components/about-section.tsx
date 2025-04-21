import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1690121439310-06c909b98049?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Founder of Bagnan Coaching Center"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-6">About the Institute</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2010, Bagnan Coaching Center has been dedicated to providing quality education and guidance to
              students preparing for various competitive examinations.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our mission is to nurture young minds and help them achieve their academic goals through personalized
              attention, quality teaching, and continuous assessment.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With a team of experienced educators and a proven teaching methodology, we have helped thousands of
              students realize their dreams of getting into prestigious institutions.
            </p>
            <Button asChild className="bg-[#FBC02D] hover:bg-[#F9A825] text-white">
              <Link href="/contact">Visit Our Center</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

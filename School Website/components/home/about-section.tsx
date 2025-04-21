import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">About Our School</h2>
          <div className="h-1 w-20 bg-[#FF9800] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="School campus" 
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence in Education Since 1985</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Radiance International School has been at the forefront of academic excellence for over three decades. 
              We provide a nurturing environment where students can develop intellectually, emotionally, and socially.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our holistic approach to education ensures that each child discovers their unique potential and develops the 
              skills needed to succeed in an ever-changing world. With state-of-the-art facilities and dedicated faculty, 
              we create a stimulating learning atmosphere that fosters creativity, critical thinking, and innovation.
            </p>
            <Button className="bg-[#0D47A1] hover:bg-blue-800 text-white">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="relative h-screen flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/8471899/pexels-photo-8471899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundPosition: "center 30%"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className={`max-w-2xl transition-all duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Nurturing Young Minds <br className="hidden sm:block" />
            <span className="text-[#FF9800]">Since 1985</span>
          </h1>
          <p className="text-xl text-white mb-8">
            English Medium CBSE/ICSE Curriculum<br />
            Building Tomorrow's Leaders Today
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <Button size="lg" className="bg-[#FF9800] hover:bg-[#FB8C00] text-white">
              <Link href="/admissions" className="flex items-center">
                Apply for Admission <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#0D47A1]">
              <Link href="/about">Explore Our School</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
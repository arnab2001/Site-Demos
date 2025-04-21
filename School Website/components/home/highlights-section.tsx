"use client"

import { useEffect, useState } from 'react'
import { 
  Laptop, 
  BookOpen, 
  BadgeCheck, 
  Users, 
  Bus, 
  Trophy,
  Building
} from 'lucide-react'

const highlights = [
  {
    title: 'Smart Classrooms',
    description: 'Interactive digital learning with modern technology',
    icon: Laptop,
    color: '#0D47A1',
  },
  {
    title: 'Modern Library',
    description: 'Extensive collection of books and digital resources',
    icon: BookOpen,
    color: '#FF9800',
  },
  {
    title: 'Qualified Faculty',
    description: 'Experienced teachers with advanced degrees',
    icon: BadgeCheck,
    color: '#0D47A1',
  },
  {
    title: 'Small Class Sizes',
    description: 'Personalized attention for every student',
    icon: Users,
    color: '#FF9800',
  },
  {
    title: 'Transport Facility',
    description: 'Safe and reliable transportation for students',
    icon: Bus,
    color: '#0D47A1',
  },
  {
    title: 'Sports Excellence',
    description: 'State-of-the-art facilities for various sports',
    icon: Trophy,
    color: '#FF9800',
  },
  {
    title: 'Modern Infrastructure',
    description: 'Purpose-built campus with excellent facilities',
    icon: Building,
    color: '#0D47A1',
  },
]

export default function HighlightsSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">School Highlights</h2>
          <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on offering a comprehensive educational experience with top-notch facilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div 
              key={highlight.title}
              className={`bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 ease-out ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="p-3 rounded-full inline-block mb-4"
                style={{ backgroundColor: `${highlight.color}15` }}
              >
                <highlight.icon 
                  className="h-6 w-6" 
                  style={{ color: highlight.color }} 
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
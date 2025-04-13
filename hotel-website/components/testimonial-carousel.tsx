"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Traveler",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The service at Grand Horizon Hotel exceeded all my expectations. The staff was attentive, the room was immaculate, and the amenities were top-notch. I'll definitely be returning on my next business trip.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Family Vacation",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "Our family had an amazing stay at Grand Horizon. The kids loved the pool, and we appreciated the spacious rooms and excellent dining options. The concierge was incredibly helpful in planning our daily activities.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Honeymoon Stay",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "We chose Grand Horizon for our honeymoon and couldn't have been happier. The romantic package was perfect, and the staff made our stay truly special with thoughtful touches throughout our visit.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Weekend Getaway",
    avatar: "/placeholder.svg?height=100&width=100",
    content:
      "The perfect weekend escape! The spa treatments were rejuvenating, and the restaurant offered an exceptional dining experience. The hotel's location made it easy to explore the city's attractions.",
    rating: 4,
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(1)

  useEffect(() => {
    const updateVisibleTestimonials = () => {
      const width = window.innerWidth
      if (width >= 1024) {
        setVisibleTestimonials(3)
      } else if (width >= 768) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(1)
      }
    }

    // Set the initial value
    updateVisibleTestimonials()

    // Add a resize event listener
    window.addEventListener("resize", updateVisibleTestimonials)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateVisibleTestimonials)
    }
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - visibleTestimonials + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - visibleTestimonials : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-md"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous testimonial</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-md"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next testimonial</span>
      </Button>
    </div>
  )
}
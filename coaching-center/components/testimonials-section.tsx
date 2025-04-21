import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from our students and parents about their experience with Bagnan Coaching Center
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-[#FBC02D]" />
                      </div>
                      <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#1A237E]">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "The faculty at Bagnan Coaching Center is exceptional. Their teaching methods helped me understand complex concepts easily. I owe my JEE success to them.",
    name: "Rahul Sharma",
    role: "JEE Advanced 2023",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The regular tests and personalized feedback helped me identify my weak areas and work on them. The study material provided was comprehensive and well-structured.",
    name: "Priya Patel",
    role: "NEET 2023",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "As a parent, I'm extremely satisfied with the progress my son has made since joining Bagnan Coaching. The teachers are dedicated and the administration is very supportive.",
    name: "Rajesh Singh",
    role: "Parent",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The doubt clearing sessions were immensely helpful. Teachers are always available to address our queries, even outside class hours.",
    name: "Ananya Roy",
    role: "Class 12 Student",
    image: "/placeholder.svg?height=100&width=100",
  },
]

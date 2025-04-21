import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ResultsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">Results & Toppers</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our students consistently achieve outstanding results in various examinations
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {toppers.map((topper, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/4] w-full">
                        <Avatar className="w-full h-full rounded-none">
                          <AvatarImage src={topper.image} alt={topper.name} />
                          <AvatarFallback className="bg-[#F5F5F5] text-[#1A237E] text-2xl">
                            {topper.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-bold text-lg text-[#1A237E] mb-1">{topper.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{topper.exam}</p>
                        <p className="font-semibold text-[#FBC02D]">{topper.result}</p>
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

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-[#1A237E] mb-2">95%</h3>
            <p className="text-muted-foreground">Students score above 90% in board exams</p>
          </div>
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-[#1A237E] mb-2">75+</h3>
            <p className="text-muted-foreground">JEE & NEET selections in the last 3 years</p>
          </div>
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-[#1A237E] mb-2">100%</h3>
            <p className="text-muted-foreground">Pass rate in all board examinations</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const toppers = [
  {
    name: "Rahul Sharma",
    exam: "JEE Advanced 2023",
    result: "AIR 856",
    image: "https://plus.unsplash.com/premium_vector-1721624776671-e54c7153018a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
 
  {
    name: "Amit Kumar",
    exam: "Class 12 Board 2023",
    result: "98.6%",
    image: "https://plus.unsplash.com/premium_vector-1720216352074-0dd7d2d02a04?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sneha Das",
    exam: "JEE Main 2023",
    result: "99.2 Percentile",
    image: "https://images.unsplash.com/vector-1741461267840-1bbdfddec191?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rajesh Singh",
    exam: "NEET 2022",
    result: "AIR 2156",
    image: "https://plus.unsplash.com/premium_vector-1682270197473-56b6218e8af3?q=80&w=3418&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Priya Patel",
    exam: "NEET 2023",
    result: "AIR 1245",
    image: "https://plus.unsplash.com/premium_vector-1721624776671-e54c7153018a?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ananya Roy",
    exam: "Class 12 Board 2023",
    result: "97.8%",
    image: "https://plus.unsplash.com/premium_vector-1723137878144-a493eb066ca3?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
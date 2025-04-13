import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Luxury hotel room"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Rooms & Suites</h1>
          <p className="text-xl max-w-2xl">
            Discover our luxurious accommodations designed for your comfort and relaxation
          </p>
        </div>
      </section>

      {/* Room Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Rooms</TabsTrigger>
                <TabsTrigger value="standard">Standard</TabsTrigger>
                <TabsTrigger value="deluxe">Deluxe</TabsTrigger>
                <TabsTrigger value="suite">Suites</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Standard Room */}
                <RoomCard
                  title="Standard Room"
                  description="Comfortable room with essential amenities for a pleasant stay"
                  price={149}
                  image="/placeholder.svg?height=600&width=800"
                  features={["Queen Bed", "City View", "30m²", "Free WiFi"]}
                  category="standard"
                />

                {/* Deluxe Room */}
                <RoomCard
                  title="Deluxe Room"
                  description="Spacious room with city views and premium amenities"
                  price={199}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "City View", "40m²", "Free WiFi"]}
                  category="deluxe"
                />

                {/* Deluxe Ocean View */}
                <RoomCard
                  title="Deluxe Ocean View"
                  description="Elegant room with stunning ocean views and premium amenities"
                  price={249}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "Ocean View", "45m²", "Balcony"]}
                  category="deluxe"
                />

                {/* Junior Suite */}
                <RoomCard
                  title="Junior Suite"
                  description="Spacious suite with separate seating area and luxury amenities"
                  price={299}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "City View", "55m²", "Seating Area"]}
                  category="suite"
                />

                {/* Executive Suite */}
                <RoomCard
                  title="Executive Suite"
                  description="Elegant suite with separate living area and panoramic views"
                  price={349}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "Panoramic View", "65m²", "Living Area"]}
                  category="suite"
                />

                {/* Presidential Suite */}
                <RoomCard
                  title="Presidential Suite"
                  description="Our finest accommodation with luxury furnishings and services"
                  price={599}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "Ocean View", "120m²", "Private Terrace"]}
                  category="suite"
                />
              </div>
            </TabsContent>

            <TabsContent value="standard" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <RoomCard
                  title="Standard Room"
                  description="Comfortable room with essential amenities for a pleasant stay"
                  price={149}
                  image="/placeholder.svg?height=600&width=800"
                  features={["Queen Bed", "City View", "30m²", "Free WiFi"]}
                  category="standard"
                />
                {/* Add more standard rooms if needed */}
              </div>
            </TabsContent>

            <TabsContent value="deluxe" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <RoomCard
                  title="Deluxe Room"
                  description="Spacious room with city views and premium amenities"
                  price={199}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "City View", "40m²", "Free WiFi"]}
                  category="deluxe"
                />
                <RoomCard
                  title="Deluxe Ocean View"
                  description="Elegant room with stunning ocean views and premium amenities"
                  price={249}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "Ocean View", "45m²", "Balcony"]}
                  category="deluxe"
                />
                {/* Add more deluxe rooms if needed */}
              </div>
            </TabsContent>

            <TabsContent value="suite" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <RoomCard
                  title="Junior Suite"
                  description="Spacious suite with separate seating area and luxury amenities"
                  price={299}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "City View", "55m²", "Seating Area"]}
                  category="suite"
                />
                <RoomCard
                  title="Executive Suite"
                  description="Elegant suite with separate living area and panoramic views"
                  price={349}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "Panoramic View", "65m²", "Living Area"]}
                  category="suite"
                />
                <RoomCard
                  title="Presidential Suite"
                  description="Our finest accommodation with luxury furnishings and services"
                  price={599}
                  image="/placeholder.svg?height=600&width=800"
                  features={["King Bed", "Ocean View", "120m²", "Private Terrace"]}
                  category="suite"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Room Amenities */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Room Amenities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our rooms and suites come with these premium amenities to enhance your stay.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Premium Bedding</h3>
              <p className="text-sm text-muted-foreground">Luxury linens and pillows for ultimate comfort</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Smart TV</h3>
              <p className="text-sm text-muted-foreground">4K smart TVs with streaming capabilities</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Climate Control</h3>
              <p className="text-sm text-muted-foreground">Individual climate control for your comfort</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium mb-2">Mini Bar</h3>
              <p className="text-sm text-muted-foreground">Stocked mini bar with premium selections</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            Experience luxury and comfort at Grand Horizon Hotel. Book directly for our best rates and exclusive perks.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Book Now
          </Button>
        </div>
      </section>
    </div>
  )
}

interface RoomCardProps {
  title: string
  description: string
  price: number
  image: string
  features: string[]
  category: string
}

function RoomCard({ title, description, price, image, features, category }: RoomCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-1 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-2 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-muted-foreground"> / night</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
          <Button className="flex-1">Book Now</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

import Link from "next/link"
import Image from "next/image"
import { ChevronRightIcon, MapPinIcon, StarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookingWidget } from "@/components/booking-widget"
import { RoomCard } from "@/components/room-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { AmenityCard } from "@/components/amenity-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg&w=1920&h=1280&_gl=1*m93q82*_ga*NjUyNTYyMjcuMTc0NDU0NDAyNw..*_ga_8JE65Q40S6*MTc0NDU0NDAyNi4xLjEuMTc0NDU0NDAzNi4wLjAuMA.."
          alt="Luxury hotel exterior"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience Luxury & Comfort</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover the perfect blend of elegance, comfort, and exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/20">
              Explore Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-4 -mt-16">
        <BookingWidget />
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Grand Horizon Hotel</h2>
              <p className="text-muted-foreground mb-6">
                Nestled in the heart of the city, Grand Horizon Hotel offers a luxurious retreat for both business and
                leisure travelers. Our commitment to exceptional service ensures that every stay is memorable.
              </p>
              <p className="text-muted-foreground mb-8">
                With elegant accommodations, world-class dining, and state-of-the-art facilities, we provide an
                unparalleled hospitality experience that keeps our guests coming back.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Over 500+ reviews</span>
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <Button className="group">
                    Learn More About Us
                    <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop" alt="Hotel lobby" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-primary rounded-lg flex items-center justify-center p-4">
                <div className="text-center text-white">
                  <p className="text-sm font-medium">SINCE</p>
                  <p className="text-2xl font-bold">1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Luxury Accommodations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of meticulously designed rooms and suites, each offering a unique blend of
              comfort and sophistication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RoomCard
              title="Deluxe Room"
              description="Spacious room with city views and premium amenities"
              price={199}
              image="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop"
              features={["King Bed", "City View", "40m²", "Free WiFi"]}
            />
            <RoomCard
              title="Executive Suite"
              description="Elegant suite with separate living area and panoramic views"
              price={349}
              image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop"
              features={["King Bed", "Panoramic View", "65m²", "Living Area"]}
            />
            <RoomCard
              title="Presidential Suite"
              description="Our finest accommodation with luxury furnishings and services"
              price={599}
              image="https://images.unsplash.com/photo-1602002418082-dd4a3693d2c1?q=80&w=1974&auto=format&fit=crop"
              features={["King Bed", "Ocean View", "120m²", "Private Terrace"]}
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/rooms">
              <Button variant="outline" size="lg" className="group">
                View All Rooms
                <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hotel Amenities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enjoy our world-class facilities designed to enhance your stay and provide the ultimate comfort.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AmenityCard
              title="Infinity Pool"
              description="Relax in our rooftop infinity pool with panoramic city views"
              icon="swimming-pool"
            />
            <AmenityCard
              title="Luxury Spa"
              description="Rejuvenate with our range of spa treatments and therapies"
              icon="spa"
            />
            <AmenityCard
              title="Fine Dining"
              description="Experience culinary excellence at our award-winning restaurants"
              icon="utensils"
            />
            <AmenityCard
              title="Fitness Center"
              description="Stay fit with state-of-the-art equipment and personal trainers"
              icon="dumbbell"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/amenities">
              <Button variant="outline" size="lg" className="group">
                Explore All Amenities
                <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Events & Weddings */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Perfect Venue for Your Special Events</h2>
              <p className="text-muted-foreground mb-6">
                From intimate gatherings to grand celebrations, our versatile event spaces provide the perfect backdrop
                for your special occasions.
              </p>
              <p className="text-muted-foreground mb-8">
                Our dedicated event planning team will work closely with you to ensure every detail is perfect, creating
                memorable experiences for you and your guests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/events">
                  <Button className="group">
                    Explore Event Spaces
                    <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="group">
                    Request a Proposal
                    <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" alt="Wedding venue" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2125&auto=format&fit=crop"
                  alt="Conference room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop" alt="Banquet hall" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop"
                  alt="Outdoor event space"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Guests Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover why guests choose Grand Horizon Hotel for their stay and keep coming back.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prime Location</h2>
              <p className="text-muted-foreground mb-6">
                Situated in the heart of the city, Grand Horizon Hotel offers easy access to major attractions, shopping
                districts, and business centers.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <MapPinIcon className="h-5 w-5 text-primary" />
                <span>123 Luxury Avenue, City Center, Country</span>
              </div>
              <p className="text-muted-foreground mb-8">
                Just 20 minutes from the International Airport and 10 minutes from the Central Business District.
              </p>
              <Link href="/contact">
                <Button className="group">
                  Get Directions
                  <ChevronRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2069&auto=format&fit=crop"
                alt="Hotel location map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter for exclusive offers, special events, and hotel updates.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-black"
                required
              />
              <Button className="bg-white text-primary hover:bg-white/90">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
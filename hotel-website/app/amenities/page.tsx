import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AmenityCard } from "@/components/amenity-card"

export default function AmenitiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
          alt="Hotel amenities"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hotel Amenities</h1>
          <p className="text-xl max-w-2xl">
            Discover our world-class facilities designed for your comfort and enjoyment
          </p>
        </div>
      </section>

      {/* Amenities Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Amenities</TabsTrigger>
                <TabsTrigger value="wellness">Wellness</TabsTrigger>
                <TabsTrigger value="dining">Dining</TabsTrigger>
                <TabsTrigger value="recreation">Recreation</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
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
                <AmenityCard
                  title="High-Speed WiFi"
                  description="Stay connected with complimentary high-speed internet access"
                  icon="wifi"
                />
                <AmenityCard
                  title="Valet Parking"
                  description="Enjoy convenient valet parking service with in-and-out privileges"
                  icon="parking"
                />
                <AmenityCard
                  title="24/7 Room Service"
                  description="Indulge in gourmet dining in the comfort of your room any time"
                  icon="coffee"
                />
                <AmenityCard
                  title="Smart TVs"
                  description="Enjoy premium entertainment with smart TVs in all rooms"
                  icon="tv"
                />
              </div>
            </TabsContent>

            <TabsContent value="wellness" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <AmenityCard
                  title="Luxury Spa"
                  description="Rejuvenate with our range of spa treatments and therapies"
                  icon="spa"
                />
                <AmenityCard
                  title="Fitness Center"
                  description="Stay fit with state-of-the-art equipment and personal trainers"
                  icon="dumbbell"
                />
                <AmenityCard
                  title="Yoga Studio"
                  description="Find balance with daily yoga and meditation classes"
                  icon="spa"
                />
                <AmenityCard
                  title="Sauna & Steam Room"
                  description="Relax and detoxify in our premium sauna and steam facilities"
                  icon="spa"
                />
              </div>
            </TabsContent>

            <TabsContent value="dining" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <AmenityCard
                  title="Fine Dining"
                  description="Experience culinary excellence at our award-winning restaurants"
                  icon="utensils"
                />
                <AmenityCard
                  title="Rooftop Bar"
                  description="Enjoy craft cocktails with stunning views of the city skyline"
                  icon="utensils"
                />
                <AmenityCard
                  title="Café & Bakery"
                  description="Savor freshly baked pastries and premium coffee"
                  icon="coffee"
                />
                <AmenityCard
                  title="24/7 Room Service"
                  description="Indulge in gourmet dining in the comfort of your room any time"
                  icon="coffee"
                />
              </div>
            </TabsContent>

            <TabsContent value="recreation" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <AmenityCard
                  title="Infinity Pool"
                  description="Relax in our rooftop infinity pool with panoramic city views"
                  icon="swimming-pool"
                />
                <AmenityCard
                  title="Tennis Courts"
                  description="Play a match on our professional-grade tennis courts"
                  icon="dumbbell"
                />
                <AmenityCard
                  title="Game Room"
                  description="Enjoy billiards, table tennis, and other games with friends and family"
                  icon="tv"
                />
                <AmenityCard
                  title="Library Lounge"
                  description="Unwind with a book from our curated collection in a peaceful setting"
                  icon="coffee"
                />
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <AmenityCard
                  title="Concierge Service"
                  description="Let our knowledgeable concierge assist with all your needs"
                  icon="coffee"
                />
                <AmenityCard
                  title="Valet Parking"
                  description="Enjoy convenient valet parking service with in-and-out privileges"
                  icon="parking"
                />
                <AmenityCard
                  title="Business Center"
                  description="Access our fully equipped business center for all your work needs"
                  icon="wifi"
                />
                <AmenityCard
                  title="Laundry Service"
                  description="Take advantage of our premium laundry and dry-cleaning services"
                  icon="coffee"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Amenities */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Amenities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular facilities that make your stay exceptional.
            </p>
          </div>

          {/* Spa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Luxury Spa & Wellness Center</h3>
              <p className="text-muted-foreground mb-6">
                Indulge in a world of relaxation and rejuvenation at our luxury spa. Our expert therapists offer a range
                of treatments designed to soothe your body and mind, from traditional massages to innovative wellness
                therapies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Signature massage treatments</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Facial treatments using premium products</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Couples' treatment rooms</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Sauna and steam rooms</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Relaxation lounge with herbal teas</span>
                </li>
              </ul>
              <Button>Book a Treatment</Button>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070" 
                alt="Luxury spa" 
                fill 
                className="object-cover" 
              />
            </div>
          </div>

          {/* Pool */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070" 
                alt="Infinity pool" 
                fill 
                className="object-cover" 
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Rooftop Infinity Pool</h3>
              <p className="text-muted-foreground mb-6">
                Take a dip in our stunning rooftop infinity pool with panoramic views of the city skyline. Whether
                you're swimming laps or simply relaxing by the water, our pool area offers the perfect escape.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Temperature-controlled water year-round</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Comfortable loungers and cabanas</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Poolside bar and food service</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Towel service</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Open from 6:00 AM to 10:00 PM daily</span>
                </li>
              </ul>
              <Button>Explore Pool Area</Button>
            </div>
          </div>

          {/* Restaurant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4">Fine Dining Experience</h3>
              <p className="text-muted-foreground mb-6">
                Savor exceptional cuisine at our signature restaurant, where our talented chefs create memorable dining
                experiences using the finest local and international ingredients. From intimate dinners to special
                celebrations, our restaurant offers the perfect setting.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Seasonal menus featuring local ingredients</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Extensive wine list with sommelier service</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Private dining rooms available</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Breakfast, lunch, and dinner service</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Special dietary requirements accommodated</span>
                </li>
              </ul>
              <Button>View Dining Options</Button>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070"
                alt="Fine dining restaurant"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Packages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Amenity Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your stay with our curated amenity packages designed for different experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-muted/30">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070" 
                  alt="Wellness Retreat" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Wellness Retreat</h3>
                <p className="text-muted-foreground mb-6">
                  Rejuvenate your body and mind with our comprehensive wellness package.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Daily yoga or meditation session</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>60-minute spa treatment</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Healthy breakfast options</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Access to fitness center and pool</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Wellness welcome amenity</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="block text-2xl font-bold mb-2">$199</span>
                  <span className="text-sm text-muted-foreground">per person</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=2070" 
                  alt="Romantic Getaway" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Romantic Getaway</h3>
                <p className="text-muted-foreground mb-6">
                  Create unforgettable moments with our specially designed romantic package.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Champagne and chocolate-covered strawberries</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Couples massage</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Romantic dinner for two</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Rose petal turndown service</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Late checkout (subject to availability)</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="block text-2xl font-bold mb-2">$299</span>
                  <span className="text-sm text-muted-foreground">per couple</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070" 
                  alt="Business Success" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Business Success</h3>
                <p className="text-muted-foreground mb-6">
                  Stay productive and comfortable with our business-focused amenity package.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Airport transfer service</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Daily breakfast</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Pressing of two garments</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Access to business center</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Premium high-speed internet</span>
                  </li>
                </ul>
                <div className="text-center">
                  <span className="block text-2xl font-bold mb-2">$149</span>
                  <span className="text-sm text-muted-foreground">per person</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/booking">
              <Button size="lg">Book Your Stay with Amenities</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
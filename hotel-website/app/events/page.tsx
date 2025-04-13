import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EventInquiryForm } from "@/components/event-inquiry-form"

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop"
          alt="Elegant event space"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Weddings</h1>
          <p className="text-xl max-w-2xl">
            Create unforgettable moments in our elegant venues with personalized service
          </p>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Event Spaces</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, our versatile venues provide the perfect backdrop for your
              special occasions.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Venues</TabsTrigger>
                <TabsTrigger value="weddings">Weddings</TabsTrigger>
                <TabsTrigger value="meetings">Meetings</TabsTrigger>
                <TabsTrigger value="social">Social Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <EventSpaceCard
                  title="Grand Ballroom"
                  description="Our largest and most elegant space, perfect for grand weddings and galas"
                  image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
                  capacity="Up to 300 guests"
                  size="450m²"
                  category="weddings"
                />

                <EventSpaceCard
                  title="Horizon Terrace"
                  description="Beautiful outdoor space with panoramic views for ceremonies and receptions"
                  image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                  capacity="Up to 150 guests"
                  size="300m²"
                  category="weddings"
                />

                <EventSpaceCard
                  title="Executive Boardroom"
                  description="Professional setting for corporate meetings and presentations"
                  image="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2125&auto=format&fit=crop"
                  capacity="Up to 20 guests"
                  size="60m²"
                  category="meetings"
                />

                <EventSpaceCard
                  title="Conference Center"
                  description="Versatile space for conferences, seminars, and workshops"
                  image="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop"
                  capacity="Up to 100 guests"
                  size="200m²"
                  category="meetings"
                />

                <EventSpaceCard
                  title="Garden Pavilion"
                  description="Charming garden setting for intimate gatherings and celebrations"
                  image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop"
                  capacity="Up to 80 guests"
                  size="150m²"
                  category="social"
                />

                <EventSpaceCard
                  title="Skyline Lounge"
                  description="Sophisticated space with city views for cocktail receptions and parties"
                  image="https://images.unsplash.com/photo-1529336953128-a85760f58cb5?q=80&w=2070&auto=format&fit=crop"
                  capacity="Up to 120 guests"
                  size="220m²"
                  category="social"
                />
              </div>
            </TabsContent>

            <TabsContent value="weddings" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <EventSpaceCard
                  title="Grand Ballroom"
                  description="Our largest and most elegant space, perfect for grand weddings and galas"
                  image="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
                  capacity="Up to 300 guests"
                  size="450m²"
                  category="weddings"
                />

                <EventSpaceCard
                  title="Horizon Terrace"
                  description="Beautiful outdoor space with panoramic views for ceremonies and receptions"
                  image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop"
                  capacity="Up to 150 guests"
                  size="300m²"
                  category="weddings"
                />
              </div>
            </TabsContent>

            <TabsContent value="meetings" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <EventSpaceCard
                  title="Executive Boardroom"
                  description="Professional setting for corporate meetings and presentations"
                  image="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=2125&auto=format&fit=crop"
                  capacity="Up to 20 guests"
                  size="60m²"
                  category="meetings"
                />

                <EventSpaceCard
                  title="Conference Center"
                  description="Versatile space for conferences, seminars, and workshops"
                  image="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop"
                  capacity="Up to 100 guests"
                  size="200m²"
                  category="meetings"
                />
              </div>
            </TabsContent>

            <TabsContent value="social" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <EventSpaceCard
                  title="Garden Pavilion"
                  description="Charming garden setting for intimate gatherings and celebrations"
                  image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop"
                  capacity="Up to 80 guests"
                  size="150m²"
                  category="social"
                />

                <EventSpaceCard
                  title="Skyline Lounge"
                  description="Sophisticated space with city views for cocktail receptions and parties"
                  image="https://images.unsplash.com/photo-1529336953128-a85760f58cb5?q=80&w=2070&auto=format&fit=crop"
                  capacity="Up to 120 guests"
                  size="220m²"
                  category="social"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wedding Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrate your special day with our customizable wedding packages designed to create the perfect
              experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="flex flex-col h-full">
              <CardContent className="pt-6 flex-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Elegant Beginnings</h3>
                  <div className="text-3xl font-bold">$5,999</div>
                  <p className="text-sm text-muted-foreground">Starting price</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Ceremony and reception venue for up to 50 guests</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>3-course plated dinner menu</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>4-hour open bar service</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Wedding cake</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Complimentary suite for the couple</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Information</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full border-primary">
              <div className="bg-primary text-white text-center py-2 text-sm font-medium">Most Popular</div>
              <CardContent className="pt-6 flex-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Grand Celebration</h3>
                  <div className="text-3xl font-bold">$12,999</div>
                  <p className="text-sm text-muted-foreground">Starting price</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Ceremony and reception venue for up to 100 guests</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>5-course plated dinner menu</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>6-hour premium open bar service</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Custom wedding cake</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Floral centerpieces and decor</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Complimentary suite for 2 nights</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Professional wedding coordinator</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Information</Button>
              </CardFooter>
            </Card>

            <Card className="flex flex-col h-full">
              <CardContent className="pt-6 flex-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Luxury Experience</h3>
                  <div className="text-3xl font-bold">$24,999</div>
                  <p className="text-sm text-muted-foreground">Starting price</p>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Ceremony and reception venue for up to 200 guests</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>7-course gourmet dinner menu</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Unlimited premium open bar service</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Custom multi-tier wedding cake</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Extensive floral arrangements and decor</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Presidential suite for 3 nights</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Dedicated wedding planner</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>Spa treatments for the couple</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Request Information</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Event Inquiry Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Plan Your Event</h2>
              <p className="text-muted-foreground mb-6">
                Our dedicated event planning team is ready to help you create a memorable experience. Fill out the form
                to get started with planning your special event.
              </p>
              <p className="text-muted-foreground mb-8">
                Whether you're planning a wedding, corporate event, or social gathering, we'll work closely with you to
                ensure every detail is perfect.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Events Annually</div>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Versatile Venues</div>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Event Specialists</div>
                </div>
              </div>
            </div>
            <div>
              <EventInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read about the experiences of couples and event planners who chose Grand Horizon Hotel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Jennifer & Michael</h4>
                    <p className="text-sm text-muted-foreground">Wedding, June 2023</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "Our wedding day was absolutely perfect thanks to the incredible team at Grand Horizon Hotel. From the
                  stunning ballroom to the delicious food, every detail exceeded our expectations. Our guests are still
                  talking about how beautiful everything was!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden">
                    <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" alt="Client" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Robert Chen</h4>
                    <p className="text-sm text-muted-foreground">Corporate Conference, March 2023</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "We hosted our annual conference at Grand Horizon and were thoroughly impressed with the professional
                  service and attention to detail. The conference facilities were state-of-the-art, and the staff was
                  incredibly accommodating to our changing needs."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

interface EventSpaceCardProps {
  title: string
  description: string
  image: string
  capacity: string
  size: string
  category: string
}

function EventSpaceCard({ title, description, image, capacity, size, category }: EventSpaceCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={image || "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?q=80&w=2074&auto=format&fit=crop"}
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
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Capacity</span>
            <span className="text-sm font-medium">{capacity}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Size</span>
            <span className="text-sm font-medium">{size}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
          <Button className="flex-1">Inquire Now</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
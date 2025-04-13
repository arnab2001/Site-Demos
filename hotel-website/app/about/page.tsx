import Image from "next/image"
import { Check, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Hotel exterior"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Grand Horizon</h1>
          <p className="text-xl max-w-2xl">
            Discover our story, our values, and our commitment to exceptional hospitality
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 1995, Grand Horizon Hotel began with a vision to create a luxury hospitality experience that
                combines elegant accommodations with exceptional service. What started as a boutique hotel has grown
                into a renowned destination for travelers seeking comfort and sophistication.
              </p>
              <p className="text-muted-foreground mb-6">
                Over the years, we have continuously evolved to meet the changing needs of our guests while maintaining
                our commitment to excellence. Our dedication to personalized service and attention to detail has earned
                us numerous accolades and the loyalty of guests from around the world.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, Grand Horizon stands as a symbol of luxury hospitality, welcoming guests for both leisure and
                business travel. Our experienced team takes pride in creating memorable experiences that exceed
                expectations and keep our guests returning year after year.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Over 500+ reviews</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=800&width=600" alt="Hotel history" fill className="object-cover" />
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

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our approach to hospitality and service excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, from the quality of our accommodations to the
                  attentiveness of our staff. We continuously seek ways to improve and exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Personalization</h3>
                <p className="text-muted-foreground">
                  We recognize that each guest is unique, with individual preferences and needs. Our approach to service
                  is tailored to provide personalized experiences that create lasting memories.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  We conduct our business with honesty, transparency, and ethical practices. We build trust with our
                  guests, employees, and partners through consistent and reliable service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace innovation and continuously evolve to meet the changing needs of our guests. We invest in
                  technology and training to enhance the guest experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-muted-foreground">
                  We are committed to responsible practices that minimize our environmental impact. We implement
                  sustainable initiatives throughout our operations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  We value our role in the local community and actively contribute to its well-being through
                  partnerships, employment opportunities, and charitable initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals who lead our hotel with passion and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=400&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Thompson</h3>
              <p className="text-primary mb-2">General Manager</p>
              <p className="text-sm text-muted-foreground">
                With over 20 years of experience in luxury hospitality, Michael leads our team with vision and
                dedication.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=400&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
              <p className="text-primary mb-2">Director of Operations</p>
              <p className="text-sm text-muted-foreground">
                Sarah ensures that every aspect of our hotel operations runs smoothly to deliver exceptional guest
                experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=400&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">James Rodriguez</h3>
              <p className="text-primary mb-2">Executive Chef</p>
              <p className="text-sm text-muted-foreground">
                James brings culinary excellence to our dining venues with his innovative approach and passion for
                quality.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=400&width=300" alt="Team member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">Emily Johnson</h3>
              <p className="text-primary mb-2">Director of Guest Services</p>
              <p className="text-sm text-muted-foreground">
                Emily leads our guest services team with a focus on creating personalized and memorable experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and our valued guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Five-Star Excellence Award</h3>
                  <p className="text-primary mb-2">International Hospitality Association, 2023</p>
                  <p className="text-sm text-muted-foreground">
                    Recognized for outstanding service quality, luxurious accommodations, and exceptional guest
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Best Luxury Hotel</h3>
                  <p className="text-primary mb-2">Travel & Leisure Awards, 2022</p>
                  <p className="text-sm text-muted-foreground">
                    Voted as the top luxury hotel in the region by readers and industry experts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Culinary Excellence Award</h3>
                  <p className="text-primary mb-2">Gourmet Guide, 2023</p>
                  <p className="text-sm text-muted-foreground">
                    Our restaurant was recognized for its innovative cuisine, exceptional service, and elegant ambiance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustainable Hospitality Award</h3>
                  <p className="text-primary mb-2">Green Tourism Association, 2022</p>
                  <p className="text-sm text-muted-foreground">
                    Honored for our commitment to environmental sustainability and responsible tourism practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-primary text-white rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Experience Grand Horizon</h2>
                <p className="mb-6 opacity-90">
                  Book your stay today and discover why our guests return year after year. Enjoy luxurious
                  accommodations, exceptional service, and unforgettable experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white text-primary hover:bg-white/90">Book Now</Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center text-center bg-white/10 p-4 rounded-lg">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
                <div className="flex flex-col items-center text-center bg-white/10 p-4 rounded-lg">
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-sm">Luxury Rooms</div>
                </div>
                <div className="flex flex-col items-center text-center bg-white/10 p-4 rounded-lg">
                  <div className="text-4xl font-bold mb-2">4</div>
                  <div className="text-sm">Restaurants & Bars</div>
                </div>
                <div className="flex flex-col items-center text-center bg-white/10 p-4 rounded-lg">
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-sm">Guest Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

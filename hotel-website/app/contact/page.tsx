import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Hotel exterior"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl">
            We're here to answer any questions you may have about our hotel and services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground mb-4">Our friendly team is here to help</p>
                <a href="tel:+11234567890" className="text-primary hover:underline">
                  +1 (123) 456-7890
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Our friendly team is here to help</p>
                <a href="mailto:info@grandhorizon.com" className="text-primary hover:underline">
                  info@grandhorizon.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground mb-4">Come visit our hotel</p>
                <address className="not-italic text-primary">
                  123 Luxury Avenue
                  <br />
                  City Center, Country
                </address>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a question or need more information? Fill out the form below and our team will get back to you as
                soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
                </div>

                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="relative h-[400px] lg:h-auto rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Hotel location map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our hotel and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">What are the check-in and check-out times?</h3>
              <p className="text-muted-foreground">
                Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out may be
                available upon request, subject to availability.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Is breakfast included in the room rate?</h3>
              <p className="text-muted-foreground">
                Breakfast is included in some of our room packages. Please check the specific room details when booking
                or contact our reservations team for more information.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Do you offer airport transfers?</h3>
              <p className="text-muted-foreground">
                Yes, we offer airport transfer services for an additional fee. Please contact our concierge at least 24
                hours in advance to arrange transportation.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Is there parking available at the hotel?</h3>
              <p className="text-muted-foreground">
                Yes, we offer both self-parking and valet parking options. Self-parking is $25 per day, and valet
                parking is $35 per day with in-and-out privileges.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Are pets allowed in the hotel?</h3>
              <p className="text-muted-foreground">
                We welcome pets under 25 pounds for an additional fee of $50 per stay. Please inform us in advance if
                you plan to bring a pet.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">What amenities are available at the hotel?</h3>
              <p className="text-muted-foreground">
                Our hotel features a rooftop infinity pool, full-service spa, fitness center, multiple dining options,
                concierge service, and complimentary Wi-Fi throughout the property.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

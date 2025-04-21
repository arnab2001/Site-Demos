import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Have questions? Get in touch with us today!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#1A237E]">Quick Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" />
                  </div>
                </div>
                <div>
                  <Input type="email" placeholder="Email Address" />
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <Button type="submit" className="w-full bg-[#FBC02D] hover:bg-[#F9A825] text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-[#FBC02D] mt-1" />
              <div>
                <h3 className="font-semibold text-[#1A237E] mb-1">Our Location</h3>
                <p className="text-muted-foreground">123 Education Street, Bagnan, West Bengal, 711303</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-[#FBC02D] mt-1" />
              <div>
                <h3 className="font-semibold text-[#1A237E] mb-1">Call Us</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground">+91 91234 56789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-[#FBC02D] mt-1" />
              <div>
                <h3 className="font-semibold text-[#1A237E] mb-1">Email Us</h3>
                <p className="text-muted-foreground">info@bagnancoaching.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 text-[#FBC02D] mt-1" />
              <div>
                <h3 className="font-semibold text-[#1A237E] mb-1">Office Hours</h3>
                <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </div>

            <Button asChild className="w-full bg-[#1A237E] hover:bg-[#1A237E]/90 text-white mt-4">
              <Link href="/contact">Visit Our Center</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

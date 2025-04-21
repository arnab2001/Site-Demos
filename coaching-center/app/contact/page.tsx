import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A237E]">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Have questions about our courses? Get in touch with us today!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Card className="p-6">
          <CardContent className="p-0">
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input id="name" placeholder="Enter your full name" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="Enter your email address" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <label htmlFor="course" className="text-sm font-medium">
                  Interested Course
                </label>
                <Input id="course" placeholder="Which course are you interested in?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message or query" rows={4} />
              </div>

              <Button type="submit" className="w-full bg-[#FBC02D] hover:bg-[#F9A825] text-white">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-[#1A237E]">Contact Information</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FBC02D] mt-1" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">123 Education Street, Bagnan, West Bengal, 711303</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#FBC02D] mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                  <p className="text-muted-foreground">+91 91234 56789</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#FBC02D] mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">info@bagnancoaching.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-[#FBC02D] mt-1" />
                <div>
                  <h3 className="font-medium">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[300px] bg-gray-200 rounded-lg overflow-hidden">
            {/* This would be replaced with an actual Google Maps embed */}
            <div className="w-full h-full flex items-center justify-center bg-[#F5F5F5]">
              <p className="text-muted-foreground">Google Maps Embed</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

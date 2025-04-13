import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Grand Horizon</h3>
            <p className="text-muted-foreground mb-4">
              Experience luxury and comfort at our award-winning hotel. Perfect for business travelers, families, and
              couples seeking a memorable stay.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" aria-label="Instagram">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="#" aria-label="Twitter">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/rooms" className="text-muted-foreground hover:text-primary">
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link href="/amenities" className="text-muted-foreground hover:text-primary">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary">
                  Events & Weddings
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-primary" />
                <span className="text-muted-foreground">123 Luxury Avenue, City Center, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <Link href="tel:+11234567890" className="text-muted-foreground hover:text-primary">
                  +1 (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <Link href="mailto:info@grandhorizon.com" className="text-muted-foreground hover:text-primary">
                  info@grandhorizon.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe to receive special offers and updates.</p>
            <div className="space-y-2">
              <Input type="email" placeholder="Your email address" className="w-full" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Grand Horizon Hotel. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

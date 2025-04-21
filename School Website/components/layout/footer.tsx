import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0D47A1] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Radiance International School</h3>
            <p className="mb-4">Nurturing Young Minds Since 1985</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-[#FF9800] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-[#FF9800] transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-[#FF9800] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://youtube.com" className="hover:text-[#FF9800] transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[#FF9800] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#FF9800] transition-colors">Academics</Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#FF9800] transition-colors">Admissions</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#FF9800] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF9800] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>123 Education Lane, Knowledge City, State - 100001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@radianceschool.edu</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">School Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Monday - Friday</p>
                  <p>8:00 AM - 3:30 PM</p>
                </div>
              </li>
              <li className="flex items-start mt-2">
                <Clock className="mr-2 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Saturday</p>
                  <p>8:00 AM - 12:30 PM</p>
                </div>
              </li>
              <li className="flex items-start mt-2">
                <Clock className="mr-2 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Sunday</p>
                  <p>Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-400 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Radiance International School. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#FF9800] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-[#FF9800] transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
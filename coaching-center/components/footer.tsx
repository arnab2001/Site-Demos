import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, GraduationCap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1A237E] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-[#FBC02D]" />
              <span className="font-bold text-xl">Bagnan Coaching</span>
            </div>
            <p className="text-gray-300 mb-4">
              Howrah's leading coaching center for Board, JEE, and NEET preparation with expert faculty and proven
              results.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-[#FBC02D]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FBC02D]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FBC02D]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FBC02D]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#FBC02D]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-[#FBC02D]">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#FBC02D]">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#FBC02D]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-[#FBC02D]">
                  Board Exams
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-[#FBC02D]">
                  JEE Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-[#FBC02D]">
                  NEET Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-[#FBC02D]">
                  Foundation Courses
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Education Street</p>
              <p>Bagnan, West Bengal, 711303</p>
              <p>Phone: +91 98765 43210</p>
              <p>Email: info@bagnancoaching.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Bagnan Coaching Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

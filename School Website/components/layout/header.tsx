"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About', 
    href: '/about',
    dropdown: [
      { name: 'Our History', href: '/about#history' },
      { name: 'Vision & Mission', href: '/about#vision' },
      { name: 'Management', href: '/about#management' },
    ] 
  },
  { 
    name: 'Academics', 
    href: '/academics',
    dropdown: [
      { name: 'Curriculum', href: '/academics#curriculum' },
      { name: 'Streams', href: '/academics#streams' },
      { name: 'Activities', href: '/academics#activities' },
    ] 
  },
  { 
    name: 'Admissions', 
    href: '/admissions',
    dropdown: [
      { name: 'Process', href: '/admissions#process' },
      { name: 'Fee Structure', href: '/admissions#fees' },
      { name: 'Requirements', href: '/admissions#requirements' },
    ] 
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Radiance International School</span>
            <h1 className={`font-bold text-2xl ${isScrolled ? 'text-[#0D47A1]' : 'text-white'}`}>
              Radiance <span className="text-[#FF9800]">International</span>
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center text-sm font-semibold leading-6 ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-[#FF9800]`}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link 
                  href={item.href}
                  className={`text-sm font-semibold leading-6 ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-[#FF9800]`}
                >
                  {item.name}
                </Link>
              )}
              
              {item.dropdown && (
                <div className={`absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all ${activeDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#0D47A1] hover:text-white"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button className="bg-[#FF9800] hover:bg-[#FB8C00] text-white">
            <Link href="/admissions">Apply Now</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Radiance International School</span>
                <h1 className="font-bold text-2xl text-[#0D47A1]">
                  Radiance <span className="text-[#FF9800]">International</span>
                </h1>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                            <ChevronDown className={`h-5 w-5 flex-none ${activeDropdown === item.name ? 'rotate-180' : ''}`} aria-hidden="true" />
                          </button>
                          {activeDropdown === item.name && (
                            <div className="mt-2 space-y-2 pl-7">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block rounded-lg py-2 pl-3 pr-3.5 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Button className="w-full bg-[#FF9800] hover:bg-[#FB8C00] text-white">
                    <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
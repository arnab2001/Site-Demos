"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'

export default function ContactPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // In a real application, you would submit the form data to a backend here
  }

  return (
    <div>
      {/* Page Header */}
      <div className="relative bg-[#0D47A1] py-24">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/261679/pexels-photo-261679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with our team for any inquiries or to schedule a visit.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-[#0D47A1] mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Have questions about admissions, curriculum, or any other aspect of our school? Our friendly team is here to help you. Feel free to reach out to us using any of the contact methods below or by filling out the contact form.
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex">
                    <div className="mr-4">
                      <div className="p-3 rounded-full bg-[#0D47A1]/10">
                        <MapPin className="h-6 w-6 text-[#0D47A1]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-700">
                        123 Education Lane, Knowledge City, State - 100001
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex">
                    <div className="mr-4">
                      <div className="p-3 rounded-full bg-[#0D47A1]/10">
                        <Phone className="h-6 w-6 text-[#0D47A1]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-700">Main: +91 98765 43210</p>
                      <p className="text-gray-700">Admissions: +91 98765 43211</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex">
                    <div className="mr-4">
                      <div className="p-3 rounded-full bg-[#0D47A1]/10">
                        <Mail className="h-6 w-6 text-[#0D47A1]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-700">General Inquiries: info@radianceschool.edu</p>
                      <p className="text-gray-700">Admissions: admissions@radianceschool.edu</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex">
                    <div className="mr-4">
                      <div className="p-3 rounded-full bg-[#0D47A1]/10">
                        <Clock className="h-6 w-6 text-[#0D47A1]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                {!formSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="First Name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Last Name" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Email Address" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Phone Number" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Inquiry Type</Label>
                        <RadioGroup defaultValue="admissions">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="admissions" id="admissions" />
                            <Label htmlFor="admissions">Admissions</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="general" id="general" />
                            <Label htmlFor="general">General Inquiry</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="feedback" id="feedback" />
                            <Label htmlFor="feedback">Feedback</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Type your message here..." className="min-h-[120px]" required />
                      </div>
                      
                      <Button type="submit" className="w-full bg-[#0D47A1] hover:bg-blue-800 text-white">
                        Send Message
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
                    <p className="text-gray-700 mb-6">
                      Thank you for reaching out to us. We've received your message and will get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)} className="bg-[#0D47A1] hover:bg-blue-800 text-white">
                      Send Another Message
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Our Location</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find us easily with the map below or schedule a campus visit
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-md mb-12 h-96">
            {/* This is a placeholder for an actual Google Map integration */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
              <span className="text-lg">Interactive Map Will Be Embedded Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Visit Section */}
      <section id="schedule-visit" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Schedule a Campus Visit</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We invite you to experience our campus firsthand. Schedule a visit to meet our faculty, explore our facilities, and learn more about our educational approach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-lg p-8 shadow-md">
                {!formSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Visit</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="visitFirstName">First Name</Label>
                          <Input id="visitFirstName" placeholder="First Name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="visitLastName">Last Name</Label>
                          <Input id="visitLastName" placeholder="Last Name" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="visitEmail">Email</Label>
                        <Input id="visitEmail" type="email" placeholder="Email Address" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="visitPhone">Phone</Label>
                        <Input id="visitPhone" placeholder="Phone Number" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Preferred Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Select a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Preferred Time</Label>
                        <RadioGroup defaultValue="morning">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="morning" id="morning" />
                            <Label htmlFor="morning">Morning (9:00 AM - 12:00 PM)</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="afternoon" id="afternoon" />
                            <Label htmlFor="afternoon">Afternoon (1:00 PM - 4:00 PM)</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="visitMessage">Additional Information</Label>
                        <Textarea id="visitMessage" placeholder="Please share any specific areas of interest or questions you have..." className="min-h-[100px]" />
                      </div>
                      
                      <Button type="submit" className="w-full bg-[#FF9800] hover:bg-[#FB8C00] text-white">
                        Book Visit
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Scheduled!</h2>
                    <p className="text-gray-700 mb-6">
                      Thank you for scheduling a visit to our campus. We've received your request and will confirm the details via email shortly.
                    </p>
                    <Button onClick={() => setFormSubmitted(false)} className="bg-[#0D47A1] hover:bg-blue-800 text-white">
                      Schedule Another Visit
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect During Your Visit</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our campus visits are tailored to provide you with a comprehensive understanding of what makes Radiance International School special. Your visit will typically include:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Welcome & Introduction</h4>
                    <p className="text-gray-700">Brief overview of the school's history, vision, and educational philosophy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Campus Tour</h4>
                    <p className="text-gray-700">Guided tour of our classrooms, laboratories, library, sports facilities, and other key areas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Meeting with Faculty</h4>
                    <p className="text-gray-700">Opportunity to meet with teachers and administrators relevant to your child's grade level</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Q&A Session</h4>
                    <p className="text-gray-700">Dedicated time to address your specific questions and concerns</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Admissions Information</h4>
                    <p className="text-gray-700">Overview of the application process, timeline, and requirements</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mt-6 italic">
                Visits typically last about 1-2 hours. We recommend scheduling your visit during regular school hours to observe our learning environment in action.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
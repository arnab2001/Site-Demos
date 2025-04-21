"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Bell, Info } from 'lucide-react'

// Sample data
const events = [
  {
    id: 1,
    title: 'Annual Sports Day',
    date: 'June 15, 2025',
    description: 'Join us for a day of athletics, competitions, and team spirit on our school grounds.',
    category: 'event',
  },
  {
    id: 2,
    title: 'Science Exhibition',
    date: 'July 10, 2025',
    description: 'Students will showcase innovative science projects and experiments in the school auditorium.',
    category: 'event',
  },
  {
    id: 3,
    title: 'Parent-Teacher Meeting',
    date: 'August 5, 2025',
    description: 'Opportunity for parents to discuss their child\'s academic progress with teachers.',
    category: 'event',
  },
]

const notices = [
  {
    id: 1,
    title: 'School Reopening After Summer Vacation',
    date: 'June 10, 2025',
    description: 'School will reopen for all classes on Monday, June 10, 2025. Students should arrive in proper uniform.',
    category: 'notice',
  },
  {
    id: 2,
    title: 'Fee Payment Deadline',
    date: 'July 5, 2025',
    description: 'Parents are reminded that the deadline for Q2 fee payment is July 5, 2025.',
    category: 'notice',
  },
  {
    id: 3,
    title: 'Uniform Guidelines Update',
    date: 'Effective Immediately',
    description: 'Please review the updated uniform guidelines on the school website for the new academic year.',
    category: 'notice',
  },
]

const announcements = [
  {
    id: 1,
    title: 'New Computer Lab Inauguration',
    date: 'June 20, 2025',
    description: 'We are excited to announce the inauguration of our new state-of-the-art computer lab.',
    category: 'announcement',
  },
  {
    id: 2,
    title: 'State Mathematics Olympiad Winners',
    date: 'Recent Achievement',
    description: 'Congratulations to our students who won top honors at the State Mathematics Olympiad!',
    category: 'announcement',
  },
  {
    id: 3,
    title: 'New Faculty Members',
    date: 'For Upcoming Session',
    description: 'We welcome several highly qualified new teachers joining our faculty for the upcoming academic session.',
    category: 'announcement',
  },
]

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState('events')
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const getTabIcon = (tab: string) => {
    switch(tab) {
      case 'events':
        return <Calendar className="h-4 w-4 mr-2" />
      case 'notices':
        return <Bell className="h-4 w-4 mr-2" />
      case 'announcements':
        return <Info className="h-4 w-4 mr-2" />
      default:
        return null
    }
  }
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Events & Notices</h2>
          <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, events, and announcements from our school
          </p>
        </div>
        
        <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <Tabs defaultValue="events" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="events" className="text-sm sm:text-base">
                {getTabIcon('events')} Events
              </TabsTrigger>
              <TabsTrigger value="notices" className="text-sm sm:text-base">
                {getTabIcon('notices')} Notices
              </TabsTrigger>
              <TabsTrigger value="announcements" className="text-sm sm:text-base">
                {getTabIcon('announcements')} Announcements
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="bg-[#0D47A1] p-3 text-white text-sm font-medium">
                      {event.date}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <Button variant="outline" className="text-[#0D47A1] border-[#0D47A1] hover:bg-[#0D47A1] hover:text-white">
                        Learn More
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="notices" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notices.map((notice) => (
                  <Card key={notice.id} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="bg-[#FF9800] p-3 text-white text-sm font-medium">
                      {notice.date}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{notice.title}</h3>
                      <p className="text-gray-600 mb-4">{notice.description}</p>
                      <Button variant="outline" className="text-[#FF9800] border-[#FF9800] hover:bg-[#FF9800] hover:text-white">
                        View Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="announcements" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="overflow-hidden transition-all hover:shadow-lg">
                    <div className="bg-green-600 p-3 text-white text-sm font-medium">
                      {announcement.date}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{announcement.title}</h3>
                      <p className="text-gray-600 mb-4">{announcement.description}</p>
                      <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white">
                        Read More
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-10">
            <Button className="bg-[#0D47A1] hover:bg-blue-800 text-white">
              View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
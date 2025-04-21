"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  
  const galleryCategories = [
    {
      id: 'campus',
      name: 'Campus & Facilities',
      images: [
        {
          src: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'School Building',
          caption: 'Our modern school building'
        },
        {
          src: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'School Library',
          caption: 'Well-stocked library with extensive collection'
        },
        {
          src: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Computer Lab',
          caption: 'State-of-the-art computer laboratory'
        },
        {
          src: 'https://images.pexels.com/photos/2827909/pexels-photo-2827909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Science Lab',
          caption: 'Modern science laboratory for practical learning'
        },
        {
          src: 'https://images.pexels.com/photos/16516/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'School Playground',
          caption: 'Spacious playground for sports and recreation'
        },
        {
          src: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Auditorium',
          caption: 'Multi-purpose auditorium for events and performances'
        },
        {
          src: 'https://images.pexels.com/photos/4545183/pexels-photo-4545183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Art Room',
          caption: 'Creative arts room for artistic expression'
        },
        {
          src: 'https://images.pexels.com/photos/2412348/pexels-photo-2412348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'School Canteen',
          caption: 'Clean and hygienic canteen serving nutritious meals'
        }
      ]
    },
    {
      id: 'classroom',
      name: 'Classroom Activities',
      images: [
        {
          src: 'https://images.pexels.com/photos/8617546/pexels-photo-8617546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Class Discussion',
          caption: 'Interactive class discussions'
        },
        {
          src: 'https://images.pexels.com/photos/8617841/pexels-photo-8617841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Science Experiment',
          caption: 'Students conducting science experiments'
        },
        {
          src: 'https://images.pexels.com/photos/8471978/pexels-photo-8471978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Group Project',
          caption: 'Collaborative group projects'
        },
        {
          src: 'https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Reading Session',
          caption: 'Engaging reading sessions'
        },
        {
          src: 'https://images.pexels.com/photos/8471899/pexels-photo-8471899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Computer Class',
          caption: 'Students learning computer skills'
        },
        {
          src: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Art Class',
          caption: 'Creative expression in art classes'
        }
      ]
    },
    {
      id: 'sports',
      name: 'Sports & Games',
      images: [
        {
          src: 'https://images.pexels.com/photos/8031876/pexels-photo-8031876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Annual Sports Day',
          caption: 'Annual sports day celebration'
        },
        {
          src: 'https://images.pexels.com/photos/8224208/pexels-photo-8224208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Football Match',
          caption: 'Inter-house football tournament'
        },
        {
          src: 'https://images.pexels.com/photos/8366980/pexels-photo-8366980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Basketball Game',
          caption: 'Students playing basketball'
        },
        {
          src: 'https://images.pexels.com/photos/4149013/pexels-photo-4149013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Cricket Match',
          caption: 'Cricket practice session'
        },
        {
          src: 'https://images.pexels.com/photos/8366044/pexels-photo-8366044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Table Tennis',
          caption: 'Students playing table tennis'
        },
        {
          src: 'https://images.pexels.com/photos/8364026/pexels-photo-8364026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Yoga Session',
          caption: 'Morning yoga session'
        }
      ]
    },
    {
      id: 'events',
      name: 'Events & Celebrations',
      images: [
        {
          src: 'https://images.pexels.com/photos/7948063/pexels-photo-7948063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Annual Day',
          caption: 'Annual day cultural performances'
        },
        {
          src: 'https://images.pexels.com/photos/8101454/pexels-photo-8101454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Science Exhibition',
          caption: 'Annual science exhibition'
        },
        {
          src: 'https://images.pexels.com/photos/7948005/pexels-photo-7948005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Independence Day',
          caption: 'Independence Day celebrations'
        },
        {
          src: 'https://images.pexels.com/photos/7955468/pexels-photo-7955468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Cultural Festival',
          caption: 'Traditional cultural festival'
        },
        {
          src: 'https://images.pexels.com/photos/7955556/pexels-photo-7955556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Graduation Ceremony',
          caption: 'High school graduation ceremony'
        },
        {
          src: 'https://images.pexels.com/photos/8100218/pexels-photo-8100218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Music Concert',
          caption: 'School music concert'
        }
      ]
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="relative bg-[#0D47A1] py-24">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/7955468/pexels-photo-7955468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Visual glimpses of our vibrant school life, events, and activities
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="campus" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-10">
              {galleryCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="px-4 py-2 text-sm md:text-base"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {galleryCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.images.map((image, index) => (
                    <div 
                      key={index} 
                      className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <div className="relative h-64 sm:h-56 md:h-64">
                        <Image 
                          src={image.src} 
                          alt={image.alt} 
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full">
                            <p className="text-white text-sm font-medium">{image.caption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Image Viewer Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image 
                src={selectedImage} 
                alt="Gallery image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
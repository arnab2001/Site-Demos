"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

// Define gallery categories and images

const galleryData: Record<string, { src: string; alt: string; caption: string }[]> = {
  classrooms: Array.from({ length: 4 }, (_, i) => ({
    src: `https://picsum.photos/seed/school-${i}/800/600`, 
    alt: "Modern classroom with digital facilities",
    caption: "State‑of‑the‑art digital classroom",
  })),
  events: Array.from({ length: 4 }, (_, i) => ({
    src: `https://picsum.photos/seed/events-${i}/800/600`,            
    alt: "Annual science exhibition",
    caption: "Annual Science Exhibition 2023",
  })),
  activities: Array.from({ length: 4 }, (_, i) => ({
    src: `https://picsum.photos/seed/activities-${i}/800/600`,        
    alt: "Group study session",
    caption: "Collaborative study session",
  })),
  celebrations: Array.from({ length: 4 }, (_, i) => ({
    src: `https://picsum.photos/seed/celebrations-${i}/800/600`,     
    alt: "Teachers' Day celebration",
    caption: "Teachers' Day celebration",
  })),
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    alt: string
    caption: string
  } | null>(null)

  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A237E]">Gallery</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Take a look at our facilities, classrooms, events, and student activities
        </p>
      </div>

      <Tabs defaultValue="classrooms" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="classrooms">Classrooms & Labs</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="celebrations">Celebrations</TabsTrigger>
        </TabsList>

        {Object.entries(galleryData).map(([category, images]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer" onClick={() => setSelectedImage(image)}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white p-4 text-sm font-medium">{image.caption}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 overflow-hidden">
                      <div className="relative">
                        <div className="relative aspect-video w-full">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="absolute top-2 right-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full bg-black/20 hover:bg-black/40 text-white"
                            onClick={() => setSelectedImage(null)}
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-lg font-medium">{image.caption}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 bg-[#F5F5F5] p-8 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#1A237E] mb-2">Submit Your Photos</h2>
          <p className="text-muted-foreground">Are you a current or former student? Share your memories with us!</p>
        </div>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="batch" className="block text-sm font-medium mb-1">
                  Batch/Year
                </label>
                <input
                  type="text"
                  id="batch"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., 2020-2021"
                />
              </div>
              <div>
                <label htmlFor="photo" className="block text-sm font-medium mb-1">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="photo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  accept="image/*"
                />
                <p className="text-xs text-muted-foreground mt-1">Maximum file size: 5MB. Formats: JPG, PNG</p>
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Tell us about this photo"
                ></textarea>
              </div>
            </div>
            <Button type="submit" className="w-full bg-[#FBC02D] hover:bg-[#F9A825] text-white">
              Submit Photo
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}

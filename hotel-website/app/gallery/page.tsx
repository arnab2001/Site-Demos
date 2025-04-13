import Image from "next/image"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GalleryPage() {
  // Image arrays for different categories
  const roomImages = [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074",
    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2074",
    "https://images.unsplash.com/photo-1611892441796-ae6af0ec2cc8?q=80&w=2070",
    "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2039",
  ];

  const diningImages = [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074",
    "https://images.unsplash.com/photo-1622227922682-56c92e523e58?q=80&w=2080", 
    "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070",
    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070",
  ];

  const amenityImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070",
    "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=2073",
    "https://images.unsplash.com/photo-1664789123532-fb3bbde617d2?q=80&w=2071",
    "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080",
    "https://images.unsplash.com/photo-1629794226066-349748040fb7?q=80&w=2070",
    "https://images.unsplash.com/photo-1610641818989-5b34f73a9d2f?q=80&w=2070",
    "https://images.unsplash.com/photo-1644018335954-ab54c83e007f?q=80&w=2070",
  ];

  const eventImages = [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070",
    "https://images.unsplash.com/photo-1562964733-cbb2958300f4?q=80&w=2073",
    "https://images.unsplash.com/photo-1545150665-c35acdf0c10b?q=80&w=2073",
    "https://images.unsplash.com/photo-1575517111839-3a3843ee7159?q=80&w=2070",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2070",
  ];

  // Combine all images for the "All" tab
  const allImages = [
    ...roomImages.slice(0, 4), 
    ...diningImages.slice(0, 4), 
    ...amenityImages.slice(0, 4), 
    ...eventImages.slice(0, 4)
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
          alt="Hotel gallery"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl max-w-2xl">
            Explore our luxurious hotel through our carefully curated collection of images
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="rooms">Rooms & Suites</TabsTrigger>
                <TabsTrigger value="dining">Dining</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allImages.map((src, i) => (
                  <GalleryImage key={i} src={src} alt={`Hotel image ${i + 1}`} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rooms" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {roomImages.map((src, i) => (
                  <GalleryImage key={i} src={src} alt={`Room image ${i + 1}`} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dining" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {diningImages.map((src, i) => (
                  <GalleryImage key={i} src={src} alt={`Dining image ${i + 1}`} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {amenityImages.map((src, i) => (
                  <GalleryImage key={i} src={src} alt={`Amenity image ${i + 1}`} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {eventImages.map((src, i) => (
                  <GalleryImage key={i} src={src} alt={`Event image ${i + 1}`} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

interface GalleryImageProps {
  src: string
  alt: string
}

function GalleryImage({ src, alt }: GalleryImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg group">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
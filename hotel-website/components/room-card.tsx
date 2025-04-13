import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface RoomCardProps {
  title: string
  description: string
  price: number
  image: string
  features: string[]
}

export function RoomCard({ title, description, price, image, features }: RoomCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-64 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-1 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <Check className="h-4 w-4 mr-2 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${price}</span>
            <span className="text-muted-foreground"> / night</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            View Details
          </Button>
          <Button className="flex-1">Book Now</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

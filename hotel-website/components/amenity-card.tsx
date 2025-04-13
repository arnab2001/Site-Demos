import { Dumbbell, Utensils, Waves, SpadeIcon as Spa, Wifi, Car, Coffee, Tv } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface AmenityCardProps {
  title: string
  description: string
  icon: string
}

export function AmenityCard({ title, description, icon }: AmenityCardProps) {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-10 w-10 mb-4 text-primary" }

    switch (iconName.toLowerCase()) {
      case "swimming-pool":
        return <Waves {...iconProps} />
      case "spa":
        return <Spa {...iconProps} />
      case "utensils":
        return <Utensils {...iconProps} />
      case "dumbbell":
        return <Dumbbell {...iconProps} />
      case "wifi":
        return <Wifi {...iconProps} />
      case "parking":
        return <Car {...iconProps} />
      case "coffee":
        return <Coffee {...iconProps} />
      case "tv":
        return <Tv {...iconProps} />
      default:
        return <Waves {...iconProps} />
    }
  }

  return (
    <Card className="text-center hover:shadow-md transition-all">
      <CardContent className="pt-6">
        {getIcon(icon)}
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

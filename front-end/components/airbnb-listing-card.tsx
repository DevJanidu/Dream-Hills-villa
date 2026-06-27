import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star } from "lucide-react"

interface AirbnbListingCardProps {
  image: string
  location: string
  rating: number
  distance: string
  dates: string
  price: number
}

export function AirbnbListingCard({ image, location, rating, distance, dates, price }: AirbnbListingCardProps) {
  return (
    <Card className="border-none shadow-none rounded-2xl overflow-hidden bg-transparent w-full group cursor-pointer">
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted mb-3">
        <img src={image} alt={location} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
        <button className="absolute top-3 right-3 text-white/90 hover:text-white transition-colors duration-200 drop-shadow-md">
          <Heart className="w-6 h-6 stroke-2 fill-black/30" />
        </button>
      </div>
      <CardContent className="p-0 flex flex-col space-y-1">
        <div className="flex justify-between items-center text-sm font-semibold text-foreground">
          <span className="truncate">{location}</span>
          <div className="flex items-center space-x-1 shrink-0">
            <Star className="w-3.5 h-3.5 fill-current text-foreground" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground truncate">{distance}</p>
        <p className="text-sm text-muted-foreground truncate">{dates}</p>
        <div className="text-sm font-semibold text-foreground pt-1">
          <span>${price}</span> <span className="font-normal text-muted-foreground">night</span>
        </div>
      </CardContent>
    </Card>
  )
}

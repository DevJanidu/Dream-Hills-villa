import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Search } from "lucide-react"

export function AirbnbSearchBar() {
  return (
    <div className="flex items-center justify-between border shadow-md hover:shadow-lg transition-shadow duration-200 rounded-full py-2 pl-6 pr-2 bg-white max-w-3xl mx-auto cursor-pointer">
      <div className="flex items-center space-x-6 text-sm overflow-hidden w-full">
        <button className="flex flex-col items-start text-left bg-transparent border-none outline-none">
          <span className="font-semibold text-xs text-foreground">Where</span>
          <span className="text-muted-foreground truncate max-w-[120px]">Search destinations</span>
        </button>
        <Separator orientation="vertical" className="h-8 bg-border" />
        <button className="flex flex-col items-start text-left bg-transparent border-none outline-none">
          <span className="font-semibold text-xs text-foreground">Check in</span>
          <span className="text-muted-foreground">Add dates</span>
        </button>
        <Separator orientation="vertical" className="h-8 bg-border" />
        <button className="flex flex-col items-start text-left bg-transparent border-none outline-none">
          <span className="font-semibold text-xs text-foreground">Check out</span>
          <span className="text-muted-foreground">Add dates</span>
        </button>
        <Separator orientation="vertical" className="h-8 bg-border" />
        <button className="flex flex-col items-start text-left bg-transparent border-none outline-none pr-4">
          <span className="font-semibold text-xs text-foreground">Who</span>
          <span className="text-muted-foreground">Add guests</span>
        </button>
      </div>
      <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground min-w-12 h-12 flex items-center justify-center shrink-0">
        <Search className="w-4 h-4 stroke-[3]" />
      </Button>
    </div>
  )
}

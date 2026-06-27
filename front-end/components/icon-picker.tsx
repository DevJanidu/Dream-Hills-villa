"use client"

import * as React from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { icons } from "lucide-react"

// Create a curated list of common amenity icons
const commonIconNames = [
  "Wifi", "Tv", "Coffee", "Car", "Wind", "Utensils",
  "Bath", "Bed", "Sun", "Snowflake", "Flame", "GlassWater", "Monitor", 
  "Music", "Shirt", "Key", "Lock", "Camera", "Shield", "Zap", "Battery", 
  "Bike", "Bus", "Plane", "Train", "Umbrella", "Tent", "Mountain", 
  "Palmtree", "Sunset", "Waves", "Dumbbell"
]

interface IconPickerProps {
  value: string
  onChange: (value: string) => void
}

export function IconPicker({ value, onChange }: IconPickerProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const filteredIcons = commonIconNames.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  )

  const SelectedIcon = value ? (icons as any)[value] : null

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value ? (
              <div className="flex items-center gap-2">
                {SelectedIcon && <SelectedIcon className="h-4 w-4" />}
                {value}
              </div>
            ) : (
              "Select icon..."
            )}
          </Button>
        }
      />
      <PopoverContent className="w-[300px] p-2">
        <Input
          placeholder="Search icons..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-2 h-8"
        />
        <div className="grid grid-cols-6 gap-2 h-48 overflow-y-auto p-1">
          {filteredIcons.map((iconName) => {
            const Icon = (icons as any)[iconName]
            if (!Icon) return null
            return (
              <Button
                key={iconName}
                variant="ghost"
                size="icon"
                className={`h-8 w-8 rounded-md ${
                  value === iconName ? "bg-accent text-accent-foreground" : ""
                }`}
                onClick={() => {
                  onChange(iconName)
                  setOpen(false)
                }}
                title={iconName}
              >
                <Icon className="h-4 w-4" />
              </Button>
            )
          })}
          {filteredIcons.length === 0 && (
            <div className="col-span-6 text-center text-sm text-muted-foreground p-4">
              No icons found.
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

// Helper to render an icon by string name
export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = (icons as any)[name]
  if (!Icon) return null
  return <Icon className={className} />
}

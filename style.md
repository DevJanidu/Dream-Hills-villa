# Airbnb Design System (DLS) Integration Guide for Shadcn UI

This style guide documents the core visual principles, design tokens, and components of Airbnb's **Design Language System (DLS)** and translates them directly into a configuration and extension strategy for **shadcn/ui**.

---

## 1. Design Principles

Airbnb's interface relies on four fundamental tenets:
1. **Unified:** Every component is an interchangeable part of a greater whole.
2. **Universal:** High accessibility standards (WCAG 2.1 AA minimum) and globalization-ready layouts.
3. **Iconic:** Bold typography, crisp borders, high contrast, and structural minimalism.
4. **Conversational:** Fluid interactions, clear micro-animations, and descriptive feedback states.

---

## 2. Tailwind & Shadcn Tokens (`global.css`)

To capture Airbnb's modern, monochromatic design refresh accented by their signature brand coral (`#FF385C`), update your `global.css` layer values as follows:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 13%;          /* #222222 - Primary Text */

    --card: 0 0% 100%;
    --card-foreground: 0 0% 13%;

    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 13%;

    /* Brand Primary Coral */
    --primary: 347 100% 61%;         /* #FF385C */
    --primary-foreground: 0 0% 100%;

    /* Secondary / Muted Elements */
    --secondary: 0 0% 96%;           /* #F7F7F7 - Subtle background fills */
    --secondary-foreground: 0 0% 13%;

    --muted: 0 0% 44%;               /* #717171 - Secondary text */
    --muted-foreground: 0 0% 44%;

    --accent: 0 0% 96%;              /* Hover state overlays */
    --accent-foreground: 0 0% 13%;

    /* Semantic Feedback */
    --destructive: 3 80% 42%;        /* #C13515 - WCAG AA Error Red */
    --destructive-foreground: 0 0% 100%;

    --success: 122 100% 27%;         /* #008A05 - WCAG AA Success Green */
    --success-foreground: 0 0% 100%;

    /* Borders and Structural Lines */
    --border: 0 0% 88%;              /* #DDDDDD - Clean structural dividers */
    --input: 0 0% 70%;               /* #B0B0B0 - Interactive focus lines */
    --ring: 0 0% 13%;                /* High contrast deep gray for focus halos */

    /* Spacing & Radii */
    --radius: 0.75rem;               /* 12px default corner radius for containers */
    --radius-button: 0.5rem;         /* 8px corner radius for standard buttons */
    --radius-card: 1rem;             /* 16px corner radius for listing grids */
  }
}
```

---

## 3. Typography Hierarchy

Airbnb relies on a highly structured type scale optimizing hierarchy and micro-copy readability.

| Token Name | Font Size | Line Height | Weight | Ideal Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Hero/Sheet Title** | `32px` (`2rem`) | `36px` | Bold (`700`) | Main page headers, search dashboards |
| **Section Header** | `22px` (`1.375rem`) | `26px` | SemiBold (`600`) | Section divisions, filter groups |
| **Subheading** | `18px` (`1.125rem`) | `22px` | Medium (`500`) | Listing card titles, detail headers |
| **Body Primary** | `16px` (`1rem`) | `24px` | Regular (`400`) | Main copy, listing descriptions, reviews |
| **Body Secondary** | `14px` (`0.875rem`) | `18px` | Regular (`400`) | Muted labels, breadcrumbs, legal footer |
| **Action / Button** | `14px` (`0.875rem`) | `18px` | SemiBold (`600`) | Form CTAs, interactive buttons |

---

## 4. Key Component Blueprints (Shadcn Adaptations)

### A. The Search & Filter Bar (The Iconic Search Control)
The multi-segment search widget is highly interactive and functions as an integrated macro-component.

```tsx
// Using shadcn's Popover / Dialog primitives
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Search } from "lucide-react"

export function AirbnbSearchBar() {
  return (
    <div className="flex items-center justify-between border shadow-md hover:shadow-lg transition-shadow duration-200 rounded-full py-2 pl-6 pr-2 bg-white max-w-3xl mx-auto cursor-pointer">
      <div className="flex items-center space-x-6 text-sm overflow-hidden w-full">
        <button className="flex flex-col items-start text-left bg-transparent border-none outline-none">
          <span className="font-semibold text-xs text-foreground">Where</span>
          <span className="text-muted truncate max-w-[120px]">Search destinations</span>
        </button>
        <Separator orientation="vertical" className="h-8 bg-border" />
        <button className="flex flex-col items-start text-left bg-transparent border-none outline-none">
          <span className="font-semibold text-xs text-foreground">Check in</span>
          <span className="text-muted">Add dates</span>
        </button>
        <Separator orientation="vertical" className="h-8 bg-border" />
        <button className="flex flex-col items-start text-left bg-transparent border-none outline-none">
          <span className="font-semibold text-xs text-foreground">Check out</span>
          <span className="text-muted">Add dates</span>
        </button>
        <Separator orientation="vertical" className="h-8 bg-border" />
        <button className="flex flex-col items-start text-left bg-transparent border-none outline-none pr-4">
          <span className="font-semibold text-xs text-foreground">Who</span>
          <span className="text-muted">Add guests</span>
        </button>
      </div>
      <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 text-white min-w-12 h-12 flex items-center justify-center">
        <Search className="w-4 h-4 stroke-[3]" />
      </Button>
    </div>
  )
}
```

### B. Standard Brand Button
Airbnb buttons feature clean, solid fills or linear gradients for top-level conversions (`#D03660` to `#D73B53`).

```tsx
// Extend standard shadcn variant config in button.tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold text-sm transition-all active:scale-[0.98] outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        airbnbPrimary: "bg-gradient-to-r from-[#D03660] to-[#D73B53] text-white hover:opacity-95 shadow-sm rounded-lg py-3 px-6",
        airbnbOutline: "border border-[#222222] bg-white text-[#222222] hover:bg-[#F7F7F7] rounded-lg py-3 px-6",
        airbnbGhost: "text-[#222222] hover:bg-[#F7F7F7] rounded-full p-3",
      },
    },
    defaultVariants: {
      variant: "airbnbPrimary",
    },
  }
)
```

### C. Listing Card Framework
Cards balance high-aspect imagery with clean, structured informational stack arrays.

```tsx
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star } from "lucide-react"

export function AirbnbListingCard({ image, location, rating, distance, dates, price }) {
  return (
    <Card className="border-none shadow-none rounded-2xl overflow-hidden bg-transparent w-full group cursor-pointer">
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-muted mb-3">
        <img src={image} alt={location} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
        <button className="absolute top-3 right-3 text-white/90 hover:text-white transition-colors duration-200 drop-shadow-md">
          <Heart className="w-6 h-6 stroke-2 fill-black/30" />
        </button>
      </div>
      <CardContent className="p-0 flex flex-col space-y-1">
        <div className="flex justify-between items-center text-sm font-semibold text-[#222222]">
          <span className="truncate">{location}</span>
          <div className="flex items-center space-x-1 shrink-0">
            <Star className="w-3.5 h-3.5 fill-current text-black" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-sm text-[#717171] truncate">{distance}</p>
        <p className="text-sm text-[#717171] truncate">{dates}</p>
        <div className="text-sm font-semibold text-[#222222] pt-1">
          <span>${price}</span> <span className="font-normal text-[#717171]">night</span>
        </div>
      </CardContent>
    </Card>
  )
}
```

---

## 5. Interaction States & Micro-behaviors

- **Hovover State:** Always trigger a background tint of `#F7F7F7` for borderless list items and buttons.
- **Focus Rings:** Never use standard fuzzy browser outlines. Use high-contrast sharp boundaries with `ring-2 ring-offset-2 ring-[#222222]`.
- **Active State:** Maintain a rigid visual interaction where inputs shrink slightly when pressed down (`active:scale-[0.98]`).
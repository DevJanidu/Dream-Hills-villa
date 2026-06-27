"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { addDays } from "date-fns"
import { DateRange } from "react-day-picker"

export default function AvailabilityPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 4),
  })

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Calendar & Selection */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-2">Select dates</h1>
          <p className="text-muted-foreground mb-8">Add your travel dates for exact pricing</p>
          
          <div className="border rounded-2xl p-6 bg-card">
            <Calendar
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
              className="p-0 w-full flex justify-center [&_.rdp-months]:flex-col [&_.rdp-months]:md:flex-row [&_.rdp-months]:gap-8 [&_.rdp-cell]:p-0"
            />
          </div>
        </div>

        {/* Right Column: Pricing Summary */}
        <div className="w-full lg:w-[400px]">
          <div className="sticky top-28 border rounded-2xl shadow-xl p-6 bg-white">
            <div className="flex justify-between items-start mb-6">
              <div className="flex space-x-4">
                <div className="w-24 h-20 bg-secondary rounded-lg overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Villa" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">The Grand Horizon Villa</h3>
                  <p className="text-xs text-muted-foreground mt-1">Entire villa</p>
                  <p className="text-xs font-semibold flex items-center mt-1">
                    <span className="mr-1">★</span> 4.96
                  </p>
                </div>
              </div>
            </div>
            
            <Separator className="mb-6" />
            
            <h3 className="text-xl font-semibold mb-4">Price details</h3>
            
            <div className="space-y-4 text-foreground">
              <div className="flex justify-between">
                <span className="underline">$1,250 x 4 nights</span>
                <span>$5,000</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Cleaning fee</span>
                <span>$250</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">DreamHills service fee</span>
                <span>$750</span>
              </div>
              <div className="flex justify-between">
                <span className="underline">Taxes</span>
                <span>$600</span>
              </div>
            </div>
            
            <Separator className="my-6" />
            
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total (USD)</span>
              <span>$6,600</span>
            </div>
            
            <Link href="/book/details" className="w-full block">
              <Button variant="airbnbPrimary" className="w-full py-6 text-lg">
                Reserve
              </Button>
            </Link>
            <p className="text-center text-sm text-muted-foreground mt-4">You won't be charged yet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

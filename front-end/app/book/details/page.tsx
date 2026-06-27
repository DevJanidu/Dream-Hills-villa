"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"

export default function GuestDetailsPage() {
  const [airportTransfer, setAirportTransfer] = useState(false)
  const [privateChef, setPrivateChef] = useState(false)
  const [dailyCleaning, setDailyCleaning] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <Link href="/book" className="inline-flex items-center text-sm font-semibold hover:underline mb-8 bg-secondary p-2 rounded-full transition-colors">
        <ChevronLeft className="w-5 h-5 mr-2" /> Back
      </Link>
      
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Form */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-3xl font-semibold mb-8">Confirm your details</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Your Information</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">First name</label>
                  <Input placeholder="John" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Last name</label>
                  <Input placeholder="Doe" className="h-12" />
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <label className="text-sm font-semibold">Email</label>
                <Input placeholder="john.doe@example.com" type="email" className="h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Phone number</label>
                <Input placeholder="+1 (555) 000-0000" type="tel" className="h-12" />
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Add-ons (Optional)</h2>
              <div className="space-y-4">
                <label className="flex items-start space-x-4 p-4 border rounded-xl cursor-pointer hover:bg-secondary/50 transition-colors">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-input" checked={airportTransfer} onChange={() => setAirportTransfer(!airportTransfer)} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Airport Transfer</h4>
                    <p className="text-sm text-muted-foreground">Private luxury SUV pickup from LAX</p>
                  </div>
                  <div className="font-semibold">$150</div>
                </label>
                
                <label className="flex items-start space-x-4 p-4 border rounded-xl cursor-pointer hover:bg-secondary/50 transition-colors">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-input" checked={privateChef} onChange={() => setPrivateChef(!privateChef)} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Private Chef</h4>
                    <p className="text-sm text-muted-foreground">Breakfast and dinner preparation</p>
                  </div>
                  <div className="font-semibold">$300/day</div>
                </label>
                
                <label className="flex items-start space-x-4 p-4 border rounded-xl cursor-pointer hover:bg-secondary/50 transition-colors">
                  <input type="checkbox" className="mt-1 w-5 h-5 rounded border-input" checked={dailyCleaning} onChange={() => setDailyCleaning(!dailyCleaning)} />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">Daily Cleaning</h4>
                    <p className="text-sm text-muted-foreground">Fresh linens and house keeping</p>
                  </div>
                  <div className="font-semibold">$100/day</div>
                </label>
              </div>
            </div>
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
              {(airportTransfer || privateChef || dailyCleaning) && (
                <>
                  <Separator className="my-2" />
                  {airportTransfer && <div className="flex justify-between text-sm"><span className="underline">Airport Transfer</span><span>$150</span></div>}
                  {privateChef && <div className="flex justify-between text-sm"><span className="underline">Private Chef</span><span>$1,200</span></div>}
                  {dailyCleaning && <div className="flex justify-between text-sm"><span className="underline">Daily Cleaning</span><span>$400</span></div>}
                </>
              )}
            </div>
            
            <Separator className="my-6" />
            
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total (USD)</span>
              <span>${6600 + (airportTransfer ? 150 : 0) + (privateChef ? 1200 : 0) + (dailyCleaning ? 400 : 0)}</span>
            </div>
            
            <Link href="/book/checkout" className="w-full block">
              <Button variant="airbnbPrimary" className="w-full py-6 text-lg">
                Continue to Payment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, Plus, Trash2 } from "lucide-react"

export default function CMSPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Content Management</h1>
        <p className="text-muted-foreground mt-2">Update property details, pricing rules, and frontend content.</p>
      </div>

      <Tabs defaultValue="property" className="w-full">
        <TabsList className="w-full md:w-auto flex overflow-x-auto justify-start">
          <TabsTrigger value="property">Property Details</TabsTrigger>
          <TabsTrigger value="media">Media Gallery</TabsTrigger>
          <TabsTrigger value="pricing">Pricing & Rules</TabsTrigger>
          <TabsTrigger value="addons">Add-ons</TabsTrigger>
        </TabsList>
        
        <TabsContent value="property" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Villa Information</CardTitle>
              <CardDescription>Update the main details displayed on the public booking page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Property Name</Label>
                <Input id="name" defaultValue="Dream Hills Luxury Villa" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input id="tagline" defaultValue="Experience Unmatched Luxury in the Heart of Nature" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Full Description</Label>
                <Textarea 
                  id="description" 
                  className="min-h-[150px]"
                  defaultValue="Perched atop the serene hills, Dream Hills Villa offers breathtaking panoramic views and a tranquil escape from the bustling city. Our architecturally stunning 4-bedroom property features a private infinity pool, a fully-equipped chef's kitchen, and expansive outdoor entertainment areas."
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxGuests">Max Guests</Label>
                  <Input id="maxGuests" type="number" defaultValue="8" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input id="bedrooms" type="number" defaultValue="4" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button variant="airbnbPrimary">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Media Gallery</CardTitle>
              <CardDescription>Upload and arrange photos of the property.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed rounded-lg p-12 text-center flex flex-col items-center justify-center bg-white">
                <Upload className="w-10 h-10 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">Drag & drop images here</h3>
                <p className="text-sm text-muted-foreground mb-4">High resolution JPG or PNG up to 10MB</p>
                <Button variant="outline">Browse Files</Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative group rounded-lg overflow-hidden border aspect-video bg-gray-100">
                    <img src={`https://images.unsplash.com/photo-[placeholder]?w=300&q=80`} alt={`Gallery image ${i}`} className="object-cover w-full h-full opacity-50" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="icon" variant="destructive" className="h-8 w-8 rounded-full">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Standard Pricing</CardTitle>
              <CardDescription>Configure base rates and automated fees.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="baseRate">Base Nightly Rate ($)</Label>
                  <Input id="baseRate" type="number" defaultValue="1100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cleaningFee">Cleaning Fee ($)</Label>
                  <Input id="cleaningFee" type="number" defaultValue="250" />
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t">
                <h4 className="font-medium text-sm">Booking Rules</h4>
                <div className="flex items-center space-x-2">
                  <Checkbox id="minStay" defaultChecked />
                  <Label htmlFor="minStay" className="font-normal">Require minimum 2-night stay</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="instantBook" defaultChecked />
                  <Label htmlFor="instantBook" className="font-normal">Allow Instant Bookings (no manual approval required)</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button variant="airbnbPrimary">Save Pricing</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="addons" className="mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Extra Services</CardTitle>
                <CardDescription>Manage upsells presented during checkout.</CardDescription>
              </div>
              <Button size="sm"><Plus className="w-4 h-4 mr-2" /> Add Service</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Private Chef", price: "$150 / day", desc: "Professional chef to cook 3 meals a day." },
                  { name: "Airport Transfer", price: "$80 / trip", desc: "Luxury SUV pickup from the airport." },
                  { name: "Daily Housekeeping", price: "$50 / day", desc: "Refresh towels, make beds, light cleaning." }
                ].map((addon, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{addon.name}</h4>
                      <p className="text-sm text-muted-foreground">{addon.desc}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold">{addon.price}</span>
                      <Button variant="ghost" size="icon"><Trash2 className="w-4 h-4 text-muted-foreground" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

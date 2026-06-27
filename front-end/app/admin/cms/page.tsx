"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, Plus, Trash2, Home, ImageIcon, DollarSign, Layers, List, Users, Bed, Type, AlignLeft } from "lucide-react"
import * as React from "react"
import { IconPicker, DynamicIcon } from "@/components/icon-picker"

export default function CMSPage() {
  const [amenities, setAmenities] = React.useState([
    { id: 1, name: "Fast Wifi", description: "High-speed internet access", icon: "Wifi" },
    { id: 2, name: "Swimming Pool", description: "Private infinity pool", icon: "Waves" }
  ])
  const [newAmenityName, setNewAmenityName] = React.useState("")
  const [newAmenityDesc, setNewAmenityDesc] = React.useState("")
  const [newAmenityIcon, setNewAmenityIcon] = React.useState("")

  const addAmenity = () => {
    if (newAmenityName && newAmenityIcon) {
      setAmenities([...amenities, { 
        id: Date.now(), 
        name: newAmenityName, 
        description: newAmenityDesc, 
        icon: newAmenityIcon 
      }])
      setNewAmenityName("")
      setNewAmenityDesc("")
      setNewAmenityIcon("")
    }
  }

  const deleteAmenity = (id: number) => {
    setAmenities(amenities.filter(a => a.id !== id))
  }

  return (
    <div className="space-y-8 min-h-screen pb-10">
      {/* Premium Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-slate-800 to-black p-8 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-md">
            Content Management
          </h1>
          <p className="text-indigo-100/80 mt-3 text-lg max-w-2xl font-light">
            Craft the perfect experience. Update property details, pricing rules, and frontend content with real-time syncing.
          </p>
        </div>
      </div>

      <Tabs defaultValue="property" className="w-full">
        {/* Glassmorphic TabsList */}
        <TabsList className="w-full md:w-auto flex overflow-x-auto justify-start bg-white/40 backdrop-blur-xl border border-white/40 shadow-sm p-1 rounded-xl gap-2 mb-8 h-auto">
          <TabsTrigger value="property" className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg py-2.5 px-4 transition-all duration-300">
            <Home className="w-4 h-4 mr-2" /> Property Details
          </TabsTrigger>
          <TabsTrigger value="media" className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg py-2.5 px-4 transition-all duration-300">
            <ImageIcon className="w-4 h-4 mr-2" /> Media Gallery
          </TabsTrigger>
          <TabsTrigger value="pricing" className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg py-2.5 px-4 transition-all duration-300">
            <DollarSign className="w-4 h-4 mr-2" /> Pricing & Rules
          </TabsTrigger>
          <TabsTrigger value="addons" className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg py-2.5 px-4 transition-all duration-300">
            <Layers className="w-4 h-4 mr-2" /> Add-ons
          </TabsTrigger>
          <TabsTrigger value="amenities" className="data-[state=active]:bg-white data-[state=active]:shadow-md rounded-lg py-2.5 px-4 transition-all duration-300">
            <List className="w-4 h-4 mr-2" /> Amenities
          </TabsTrigger>
        </TabsList>
        
        {/* Glassmorphic Card Style for all contents */}
        
        <TabsContent value="property" className="mt-0 focus-visible:outline-none">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
            <CardHeader className="bg-white/50 border-b border-black/5 pb-6">
              <CardTitle className="text-2xl text-slate-800">Villa Information</CardTitle>
              <CardDescription className="text-base text-slate-500">Update the main details displayed on the public booking page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium">Property Name</Label>
                  <div className="relative">
                    <Home className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    <Input id="name" defaultValue="Dream Hills Luxury Villa" className="h-12 pl-10 bg-white/60 focus:bg-white transition-all duration-300 shadow-sm rounded-xl" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tagline" className="text-slate-700 font-medium">Tagline</Label>
                  <div className="relative">
                    <Type className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    <Input id="tagline" defaultValue="Experience Unmatched Luxury in the Heart of Nature" className="h-12 pl-10 bg-white/60 focus:bg-white transition-all duration-300 shadow-sm rounded-xl" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-slate-700 font-medium">Full Description</Label>
                <div className="relative">
                  <AlignLeft className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                  <Textarea 
                    id="description" 
                    className="min-h-[150px] pl-10 pt-3.5 bg-white/60 focus:bg-white transition-all duration-300 shadow-sm rounded-xl resize-none leading-relaxed"
                    defaultValue="Perched atop the serene hills, Dream Hills Villa offers breathtaking panoramic views and a tranquil escape from the bustling city. Our architecturally stunning 4-bedroom property features a private infinity pool, a fully-equipped chef's kitchen, and expansive outdoor entertainment areas."
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="maxGuests" className="text-slate-700 font-medium">Max Guests</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    <Input id="maxGuests" type="number" defaultValue="8" className="h-12 pl-10 bg-white/60 focus:bg-white transition-all duration-300 shadow-sm rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bedrooms" className="text-slate-700 font-medium">Bedrooms</Label>
                  <div className="relative">
                    <Bed className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    <Input id="bedrooms" type="number" defaultValue="4" className="h-12 pl-10 bg-white/60 focus:bg-white transition-all duration-300 shadow-sm rounded-xl" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50/50 border-t border-black/5 px-6 py-4 justify-end">
              <Button className="rounded-xl px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white">
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="mt-0 focus-visible:outline-none">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
            <CardHeader className="bg-white/50 border-b border-black/5 pb-6">
              <CardTitle className="text-2xl text-slate-800">Media Gallery</CardTitle>
              <CardDescription className="text-base text-slate-500">Upload and arrange high-quality photos of the property.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-100/50 transition-colors duration-300 cursor-pointer group">
                <div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 mb-4">
                  <Upload className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700">Drag & drop images here</h3>
                <p className="text-sm text-slate-500 mb-6 mt-1">High resolution JPG or PNG up to 10MB</p>
                <Button variant="outline" className="rounded-xl border-slate-300 hover:bg-white shadow-sm">Browse Files</Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-slate-200 cursor-pointer">
                    <img src={`https://images.unsplash.com/photo-[placeholder]?w=300&q=80`} alt={`Gallery image ${i}`} className="object-cover w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <Button size="icon" variant="destructive" className="h-8 w-8 rounded-full ml-auto shadow-lg hover:scale-110 transition-transform">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="mt-0 focus-visible:outline-none">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
            <CardHeader className="bg-white/50 border-b border-black/5 pb-6">
              <CardTitle className="text-2xl text-slate-800">Standard Pricing</CardTitle>
              <CardDescription className="text-base text-slate-500">Configure base rates and automated fees.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="baseRate" className="text-slate-700 font-medium">Base Nightly Rate ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    <Input id="baseRate" type="number" defaultValue="1100" className="h-12 pl-10 bg-white/60 focus:bg-white transition-all duration-300 shadow-sm rounded-xl text-lg font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cleaningFee" className="text-slate-700 font-medium">Cleaning Fee ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    <Input id="cleaningFee" type="number" defaultValue="250" className="h-12 pl-10 bg-white/60 focus:bg-white transition-all duration-300 shadow-sm rounded-xl text-lg font-medium" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-6 border-t border-slate-200/60">
                <h4 className="text-lg font-semibold text-slate-800">Booking Rules</h4>
                <div className="flex items-center space-x-3 bg-white/50 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <Checkbox id="minStay" defaultChecked className="h-5 w-5 rounded-md data-[state=checked]:bg-blue-500 data-[state=checked]:text-white" />
                  <Label htmlFor="minStay" className="font-medium text-slate-700 cursor-pointer">Require minimum 2-night stay</Label>
                </div>
                <div className="flex items-center space-x-3 bg-white/50 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                  <Checkbox id="instantBook" defaultChecked className="h-5 w-5 rounded-md data-[state=checked]:bg-blue-500 data-[state=checked]:text-white" />
                  <Label htmlFor="instantBook" className="font-medium text-slate-700 cursor-pointer">Allow Instant Bookings (no manual approval required)</Label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50/50 border-t border-black/5 px-6 py-4 justify-end">
              <Button className="rounded-xl px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 text-white border-0">
                Save Pricing
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="addons" className="mt-0 focus-visible:outline-none">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
            <CardHeader className="bg-white/50 border-b border-black/5 pb-6 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-slate-800">Extra Services</CardTitle>
                <CardDescription className="text-base text-slate-500">Manage upsells presented during checkout.</CardDescription>
              </div>
              <Button className="rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-slate-800 hover:bg-slate-700 text-white">
                <Plus className="w-4 h-4 mr-2" /> Add Service
              </Button>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {[
                  { name: "Private Chef", price: "$150 / day", desc: "Professional chef to cook 3 meals a day." },
                  { name: "Airport Transfer", price: "$80 / trip", desc: "Luxury SUV pickup from the airport." },
                  { name: "Daily Housekeeping", price: "$50 / day", desc: "Refresh towels, make beds, light cleaning." }
                ].map((addon, idx) => (
                  <div key={idx} className="group flex items-center justify-between p-5 bg-white/60 border border-slate-200/60 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800">{addon.name}</h4>
                      <p className="text-sm text-slate-500 mt-1">{addon.desc}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-lg font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg">{addon.price}</span>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-500 hover:bg-red-50 transition-all rounded-full h-10 w-10">
                        <Trash2 className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amenities" className="mt-0 focus-visible:outline-none">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-2xl rounded-2xl overflow-hidden ring-1 ring-black/5">
            <CardHeader className="bg-white/50 border-b border-black/5 pb-6">
              <CardTitle className="text-2xl text-slate-800">Amenities</CardTitle>
              <CardDescription className="text-base text-slate-500">Manage what this place offers to guests.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-12 gap-5 mb-8 p-6 border-0 rounded-2xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 shadow-inner items-end">
                <div className="sm:col-span-3 space-y-2">
                  <Label htmlFor="amenityName" className="font-semibold text-slate-700">Name</Label>
                  <Input id="amenityName" placeholder="e.g. Fast Wifi" value={newAmenityName} onChange={(e) => setNewAmenityName(e.target.value)} className="h-11 bg-white border-white/50 shadow-sm rounded-xl focus:border-blue-300" />
                </div>
                <div className="sm:col-span-4 space-y-2">
                  <Label htmlFor="amenityDesc" className="font-semibold text-slate-700">Description</Label>
                  <Input id="amenityDesc" placeholder="e.g. High-speed internet" value={newAmenityDesc} onChange={(e) => setNewAmenityDesc(e.target.value)} className="h-11 bg-white border-white/50 shadow-sm rounded-xl focus:border-blue-300" />
                </div>
                <div className="sm:col-span-3 space-y-2">
                  <Label className="font-semibold text-slate-700">Icon</Label>
                  <div className="bg-white rounded-xl shadow-sm border border-white/50 focus-within:border-blue-300 transition-colors">
                    <IconPicker value={newAmenityIcon} onChange={setNewAmenityIcon} />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Button onClick={addAmenity} className="w-full h-11 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-blue-600 hover:bg-blue-500 text-white font-medium">
                    <Plus className="w-4 h-4 mr-2" /> Add
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {amenities.map((amenity) => (
                  <div key={amenity.id} className="group flex items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl text-blue-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <DynamicIcon name={amenity.icon} className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 leading-tight">{amenity.name}</h4>
                        <p className="text-sm text-slate-500 mt-1">{amenity.description}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteAmenity(amenity.id)} className="opacity-0 group-hover:opacity-100 text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all rounded-full h-10 w-10">
                      <Trash2 className="w-5 h-5" />
                    </Button>
                  </div>
                ))}
                {amenities.length === 0 && (
                  <div className="col-span-1 md:col-span-2 py-12 text-center bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                    <List className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <h3 className="text-lg font-medium text-slate-600">No amenities yet</h3>
                    <p className="text-sm text-slate-400">Add an amenity above to display it on your property page.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">

      
      <main className="max-w-4xl mx-auto px-4 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
            <p className="text-muted-foreground mb-8">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
            <div className="space-y-4">
              <p className="font-semibold text-foreground">Email: <a href="mailto:hello@dreamhills.com" className="font-normal hover:underline">hello@dreamhills.com</a></p>
              <p className="font-semibold text-foreground">Phone: <a href="tel:+13105550199" className="font-normal hover:underline">+1 (310) 555-0199</a></p>
              <p className="font-semibold text-foreground">Location: <span className="font-normal">Malibu, California, USA</span></p>
            </div>
          </div>
          <div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-semibold block mb-2">Name</label>
                <Input placeholder="Your name" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-2">Email</label>
                <Input placeholder="you@example.com" type="email" className="h-12" />
              </div>
              <div>
                <label className="text-sm font-semibold block mb-2">Message</label>
                <textarea className="w-full min-h-[120px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" placeholder="How can we help?"></textarea>
              </div>
              <Button variant="airbnbPrimary" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

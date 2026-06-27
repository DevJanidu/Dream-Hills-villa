"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md bg-white border rounded-2xl shadow-sm p-8">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block font-bold text-3xl tracking-tight text-[#FF385C] mb-2">
            DreamHills
          </Link>
          <h1 className="text-2xl font-semibold text-foreground">Admin Portal</h1>
          <p className="text-sm text-muted-foreground mt-2">Sign in to manage bookings and operations</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="admin@dreamhills.com" required className="h-11" />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="text-sm text-primary hover:underline font-medium">
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" required className="h-11" />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground cursor-pointer">
              Remember me for 30 days
            </Label>
          </div>

          <Link href="/admin/dashboard" className="block">
            <Button className="w-full h-11 text-base font-semibold" variant="airbnbPrimary">
              Sign In
            </Button>
          </Link>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Protected by reCAPTCHA and subject to the <a href="#" className="underline">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
  )
}

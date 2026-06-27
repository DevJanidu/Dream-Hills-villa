"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Mail, BellRing, ShieldCheck } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage integrations, notifications, and system configurations.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <CreditCard className="w-5 h-5 text-primary" />
                <CardTitle>Payment Gateway</CardTitle>
              </div>
              <CardDescription>Configure Stripe API keys for secure checkouts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="stripe-pub">Stripe Publishable Key</Label>
                <Input id="stripe-pub" type="password" defaultValue="pk_live_xxxxxxxxxxxxxxxxxxxxxx" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stripe-sec">Stripe Secret Key</Label>
                <Input id="stripe-sec" type="password" defaultValue="sk_live_xxxxxxxxxxxxxxxxxxxxxx" />
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button variant="airbnbPrimary">Save Keys</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <CardTitle>Global Taxes & Fees</CardTitle>
              </div>
              <CardDescription>Set the default tax rates applied during checkout.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tax-rate">Government Tax Rate (%)</Label>
                  <Input id="tax-rate" type="number" defaultValue="15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select defaultValue="usd">
                    <SelectTrigger>
                      <SelectValue placeholder="Select currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD ($)</SelectItem>
                      <SelectItem value="eur">EUR (€)</SelectItem>
                      <SelectItem value="gbp">GBP (£)</SelectItem>
                      <SelectItem value="lkr">LKR (Rs)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button variant="airbnbPrimary">Update Financial Settings</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <BellRing className="w-5 h-5 text-primary" />
                <CardTitle>Notifications</CardTitle>
              </div>
              <CardDescription>Select which events trigger admin alerts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="notify-booking" defaultChecked className="mt-1" />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="notify-booking" className="font-medium">New Bookings</Label>
                  <p className="text-sm text-muted-foreground">Receive an email when a guest makes a reservation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="notify-cancel" defaultChecked className="mt-1" />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="notify-cancel" className="font-medium">Cancellations</Label>
                  <p className="text-sm text-muted-foreground">Receive an email when a booking is cancelled.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="notify-inquiry" defaultChecked className="mt-1" />
                <div className="space-y-1 leading-none">
                  <Label htmlFor="notify-inquiry" className="font-medium">Contact Inquiries</Label>
                  <p className="text-sm text-muted-foreground">Alerts for new messages from the contact form.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
              <Button variant="outline" className="w-full">Save Preferences</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, Calendar, MapPin, Users } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-20 flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
        <CheckCircle2 className="w-12 h-12 text-green-600" />
      </div>
      
      <h1 className="text-4xl font-bold mb-4">You're going to Malibu!</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Your booking for The Grand Horizon Villa is confirmed. We've sent a receipt to your email.
      </p>
      
      <div className="w-full border rounded-2xl p-6 bg-white shadow-sm text-left mb-12">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="w-full sm:w-1/3 aspect-video sm:aspect-square bg-secondary rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Villa" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold">The Grand Horizon Villa</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Aug 15 - Aug 19</p>
                  <p className="text-sm text-muted-foreground">Check-in 3:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Malibu</p>
                  <p className="text-sm text-muted-foreground">California, US</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-5 h-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">1 Guest</p>
                  <p className="text-sm text-muted-foreground">Entire villa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button variant="airbnbOutline" className="w-full sm:w-auto font-semibold">
            Back to home
          </Button>
        </Link>
        <Link href="/villa">
          <Button variant="airbnbPrimary" className="w-full sm:w-auto font-semibold">
            View details
          </Button>
        </Link>
      </div>
    </div>
  )
}

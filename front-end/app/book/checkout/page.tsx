import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ChevronLeft, Lock } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <Link href="/book/details" className="inline-flex items-center text-sm font-semibold hover:underline mb-8 bg-secondary p-2 rounded-full transition-colors">
        <ChevronLeft className="w-5 h-5 mr-2" /> Back
      </Link>
      
      <div className="flex flex-col lg:flex-row gap-12">
        
        {/* Left Column: Payment Form */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-3xl font-semibold mb-8">Confirm and pay</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Pay with</h2>
              <div className="border rounded-2xl p-4 space-y-4 bg-white">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div className="font-semibold flex items-center">
                    <div className="w-8 h-6 bg-blue-600 rounded mr-3"></div>
                    Credit or debit card
                  </div>
                </div>
                
                <div className="space-y-4 pt-2">
                  <Input placeholder="Card number" className="h-12" />
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Expiration (MM/YY)" className="h-12" />
                    <Input placeholder="CVV" className="h-12" />
                  </div>
                  <Input placeholder="ZIP code" className="h-12" />
                </div>
              </div>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Cancellation policy</h2>
              <p className="text-foreground leading-relaxed">
                <span className="font-semibold">Free cancellation before Aug 1.</span> After that, the reservation is non-refundable.
              </p>
            </section>
            
            <Separator />
            
            <section>
              <h2 className="text-xl font-semibold mb-4">Ground rules</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We ask every guest to remember a few simple things about what makes a great guest.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-foreground">
                <li>Follow the house rules</li>
                <li>Treat your Host's home like your own</li>
              </ul>
            </section>
            
            <Separator />
            
            <section>
              <p className="text-xs text-muted-foreground leading-relaxed">
                By selecting the button below, I agree to the Host's House Rules, DreamHills's Rebooking and Refund Policy, and that DreamHills can charge my payment method if I'm responsible for damage. I agree to pay the total amount shown, which includes Service Fees.
              </p>
              
              <Link href="/book/success" className="w-full sm:w-auto block mt-8">
                <Button variant="airbnbPrimary" className="w-full sm:w-auto py-6 px-12 text-lg font-bold flex items-center justify-center">
                  <Lock className="w-5 h-5 mr-2" /> Confirm and pay
                </Button>
              </Link>
            </section>
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
          </div>
        </div>
      </div>
    </div>
  )
}

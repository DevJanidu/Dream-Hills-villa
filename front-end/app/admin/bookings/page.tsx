"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Search, Filter, Download, ArrowUpDown } from "lucide-react"

export default function BookingsPage() {
  const bookings = [
    { id: "BK-4921", guest: "Sarah Johnson", email: "sarah.j@example.com", dates: "Aug 15 - Aug 19, 2026", guests: 2, amount: "$6,600", status: "Confirmed", paid: true },
    { id: "BK-4922", guest: "Michael Chen", email: "m.chen@example.com", dates: "Aug 22 - Aug 25, 2026", guests: 4, amount: "$4,950", status: "Pending", paid: false },
    { id: "BK-4923", guest: "Emma Davis", email: "emma.d@example.com", dates: "Sep 01 - Sep 07, 2026", guests: 2, amount: "$9,900", status: "Confirmed", paid: true },
    { id: "BK-4924", guest: "James Wilson", email: "j.wilson@example.com", dates: "Sep 10 - Sep 14, 2026", guests: 6, amount: "$6,600", status: "Cancelled", paid: false },
    { id: "BK-4925", guest: "Sophia Martinez", email: "smartinez@example.com", dates: "Oct 05 - Oct 12, 2026", guests: 2, amount: "$11,550", status: "Confirmed", paid: true },
    { id: "BK-4926", guest: "Oliver Taylor", email: "oliver.t@example.com", dates: "Nov 02 - Nov 05, 2026", guests: 4, amount: "$4,950", status: "Completed", paid: true },
    { id: "BK-4927", guest: "Isabella Anderson", email: "bella.a@example.com", dates: "Nov 20 - Nov 27, 2026", guests: 8, amount: "$11,550", status: "Confirmed", paid: true },
    { id: "BK-4928", guest: "William Thomas", email: "w.thomas@example.com", dates: "Dec 20 - Dec 27, 2026", guests: 6, amount: "$15,000", status: "Confirmed", paid: false },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Bookings</h1>
          <p className="text-muted-foreground mt-2">Manage all villa reservations, statuses, and payments.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export</Button>
          <Button variant="airbnbPrimary">Create Booking</Button>
        </div>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between items-center bg-white">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search bookings..." className="pl-9 h-9" />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="h-9"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>
                <div className="flex items-center cursor-pointer hover:text-foreground">
                  Guest <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </TableHead>
              <TableHead>Dates</TableHead>
              <TableHead>Guests</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell className="font-medium">{booking.id}</TableCell>
                <TableCell>
                  <div className="font-medium text-foreground">{booking.guest}</div>
                  <div className="text-xs text-muted-foreground">{booking.email}</div>
                </TableCell>
                <TableCell>{booking.dates}</TableCell>
                <TableCell>{booking.guests}</TableCell>
                <TableCell>
                  <div className="font-medium">{booking.amount}</div>
                  <div className="text-xs text-muted-foreground">{booking.paid ? "Paid" : "Unpaid"}</div>
                </TableCell>
                <TableCell>
                  <Badge variant={
                    booking.status === "Confirmed" ? "default" : 
                    booking.status === "Completed" ? "outline" : 
                    booking.status === "Pending" ? "secondary" : "destructive"
                  }>
                    {booking.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Cancel Booking</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="p-4 border-t flex items-center justify-between text-sm text-muted-foreground bg-white">
          <div>Showing 1 to 8 of 8 entries</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" disabled>Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Download, ArrowUpDown, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function GuestsPage() {
  const guests = [
    { id: "G-101", name: "Sarah Johnson", email: "sarah.j@example.com", phone: "+1 (555) 123-4567", stays: 3, totalSpend: "$15,400", lastVisit: "Aug 15, 2026", status: "VIP" },
    { id: "G-102", name: "Michael Chen", email: "m.chen@example.com", phone: "+1 (555) 987-6543", stays: 1, totalSpend: "$4,950", lastVisit: "Upcoming", status: "New" },
    { id: "G-103", name: "Emma Davis", email: "emma.d@example.com", phone: "+44 7700 900077", stays: 1, totalSpend: "$9,900", lastVisit: "Sep 01, 2026", status: "Returning" },
    { id: "G-104", name: "Sophia Martinez", email: "smartinez@example.com", phone: "+1 (555) 456-7890", stays: 5, totalSpend: "$42,000", lastVisit: "Oct 05, 2026", status: "VIP" },
    { id: "G-105", name: "Oliver Taylor", email: "oliver.t@example.com", phone: "+61 491 570 156", stays: 2, totalSpend: "$8,500", lastVisit: "Nov 02, 2026", status: "Returning" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Guest Directory</h1>
          <p className="text-muted-foreground mt-2">Manage customer relationships and view guest history.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export CSV</Button>
          <Button variant="airbnbPrimary">Add Guest</Button>
        </div>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="p-4 border-b flex flex-col sm:flex-row gap-4 justify-between items-center bg-white">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search guests by name or email..." className="pl-9 h-9" />
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="h-9"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
          </div>
        </div>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Guest Name</TableHead>
              <TableHead>Contact Info</TableHead>
              <TableHead>Total Stays</TableHead>
              <TableHead>
                <div className="flex items-center cursor-pointer hover:text-foreground">
                  Total Spend <ArrowUpDown className="w-3 h-3 ml-1" />
                </div>
              </TableHead>
              <TableHead>Last Visit</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {guests.map((guest) => (
              <TableRow key={guest.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${guest.name}`} />
                      <AvatarFallback>{guest.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground">{guest.name}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        {guest.status === "VIP" && <span className="w-2 h-2 rounded-full bg-purple-500 inline-block"></span>}
                        {guest.status}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm">{guest.email}</div>
                  <div className="text-xs text-muted-foreground">{guest.phone}</div>
                </TableCell>
                <TableCell>{guest.stays}</TableCell>
                <TableCell className="font-medium">{guest.totalSpend}</TableCell>
                <TableCell>{guest.lastVisit}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="inline-flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => window.location.href = `/admin/guests/${guest.id}`}>
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>Send Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Block Guest</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="p-4 border-t flex items-center justify-between text-sm text-muted-foreground bg-white">
          <div>Showing 1 to 5 of 24 entries</div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, CalendarCheck, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react"

export default function DashboardOverview() {
  const recentBookings = [
    { id: "BK-4921", guest: "Sarah Johnson", dates: "Aug 15 - Aug 19", amount: "$6,600", status: "Confirmed" },
    { id: "BK-4922", guest: "Michael Chen", dates: "Aug 22 - Aug 25", amount: "$4,950", status: "Pending" },
    { id: "BK-4923", guest: "Emma Davis", dates: "Sep 01 - Sep 07", amount: "$9,900", status: "Confirmed" },
    { id: "BK-4924", guest: "James Wilson", dates: "Sep 10 - Sep 14", amount: "$6,600", status: "Cancelled" },
    { id: "BK-4925", guest: "Sophia Martinez", dates: "Oct 05 - Oct 12", amount: "$11,550", status: "Confirmed" },
  ]

  const alerts = [
    { id: 1, title: "New booking request", description: "Michael Chen requested Aug 22 - Aug 25.", time: "2 hours ago", type: "warning" },
    { id: 2, title: "Payment received", description: "BK-4921 fully paid by Sarah Johnson.", time: "5 hours ago", type: "success" },
    { id: 3, title: "Guest checkout", description: "Reminder: Guest checking out tomorrow at 11 AM.", time: "1 day ago", type: "info" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Welcome back. Here is an overview of your property's performance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center text-green-600">
              <TrendingUp className="w-3 h-3 mr-1" />
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
            <CalendarCheck className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84%</div>
            <p className="text-xs text-muted-foreground mt-1 text-green-600">
              +4% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Guests</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">
              Arriving in the next 30 days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Action Items</CardTitle>
            <AlertCircle className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1 text-orange-500">
              Requires immediate attention
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
            <CardDescription>
              You have 5 recent bookings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Guest</TableHead>
                  <TableHead>Dates</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">
                      {booking.guest}
                      <div className="text-xs text-muted-foreground font-normal">{booking.id}</div>
                    </TableCell>
                    <TableCell>{booking.dates}</TableCell>
                    <TableCell>
                      <Badge variant={booking.status === "Confirmed" ? "default" : booking.status === "Pending" ? "secondary" : "destructive"}>
                        {booking.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-semibold">{booking.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4">
              <Button variant="outline" className="w-full">View All Bookings</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Action Center</CardTitle>
            <CardDescription>
              Recent alerts and notifications.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-4">
                  <div className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    alert.type === 'warning' ? 'bg-orange-100 text-orange-600' :
                    alert.type === 'success' ? 'bg-green-100 text-green-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {alert.type === 'warning' ? <AlertCircle className="w-4 h-4" /> :
                     alert.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> :
                     <AlertCircle className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{alert.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                    <p className="text-xs text-muted-foreground mt-2">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-full">Mark All as Read</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [adults, setAdults] = useState("2")
  const [children, setChildren] = useState("0")
  const [rooms, setRooms] = useState("1")

  return (
    <Card className="w-full shadow-lg">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Check-in Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Check-in</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !checkIn && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkIn ? format(checkIn, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          {/* Check-out Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Check-out</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-full justify-start text-left font-normal", !checkOut && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {checkOut ? format(checkOut, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={checkOut}
                  onSelect={setCheckOut}
                  initialFocus
                  disabled={(date) => date < (checkIn || new Date())}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Adults */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Adults</label>
            <Select value={adults} onValueChange={setAdults}>
              <SelectTrigger>
                <SelectValue placeholder="Adults" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Adult" : "Adults"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Children */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Children</label>
            <Select value={children} onValueChange={setChildren}>
              <SelectTrigger>
                <SelectValue placeholder="Children" />
              </SelectTrigger>
              <SelectContent>
                {[0, 1, 2, 3, 4].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Child" : "Children"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <div className="space-y-2">
            <label className="text-sm font-medium opacity-0">Search</label>
            <Button className="w-full">Check Availability</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

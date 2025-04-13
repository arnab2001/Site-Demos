"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export function EventInquiryForm() {
  const [date, setDate] = useState<Date>()
  const [eventType, setEventType] = useState<string>("")
  const [guestCount, setGuestCount] = useState<string>("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    // In a real application, you would send this data to your backend
    console.log({ ...data, date, eventType, guestCount })
    toast({
      title: "Inquiry Submitted",
      description: "We'll contact you shortly about your event.",
    })
  }

  return (
    <Card>
      <CardHeader className="text-xl font-bold">Event Inquiry Form</CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter your first name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <p className="text-sm text-red-500">First name is required</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Enter your last name" {...register("lastName", { required: true })} />
              {errors.lastName && <p className="text-sm text-red-500">Last name is required</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && <p className="text-sm text-red-500">Valid email is required</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="Enter your phone number" {...register("phone", { required: true })} />
              {errors.phone && <p className="text-sm text-red-500">Phone number is required</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventType">Event Type</Label>
            <Select value={eventType} onValueChange={setEventType}>
              <SelectTrigger id="eventType">
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="corporate">Corporate Event</SelectItem>
                <SelectItem value="social">Social Gathering</SelectItem>
                <SelectItem value="conference">Conference</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventDate">Event Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="eventDate"
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="guestCount">Number of Guests</Label>
              <Select value={guestCount} onValueChange={setGuestCount}>
                <SelectTrigger id="guestCount">
                  <SelectValue placeholder="Select guest count" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-50">1-50</SelectItem>
                  <SelectItem value="51-100">51-100</SelectItem>
                  <SelectItem value="101-200">101-200</SelectItem>
                  <SelectItem value="201-300">201-300</SelectItem>
                  <SelectItem value="300+">300+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalInfo">Additional Information</Label>
            <Textarea
              id="additionalInfo"
              placeholder="Please share any specific requirements or questions about your event"
              className="min-h-[120px]"
              {...register("additionalInfo")}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit(onSubmit)}>
          Submit Inquiry
        </Button>
      </CardFooter>
    </Card>
  )
}

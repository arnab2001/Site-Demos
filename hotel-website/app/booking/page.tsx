"use client"

import { useState } from "react"
import { format } from "date-fns"
import { CalendarIcon, Check, CreditCard, Info } from "lucide-react"
import { useForm, FormProvider } from "react-hook-form";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [adults, setAdults] = useState("2")
  const [children, setChildren] = useState("0")
  const [rooms, setRooms] = useState("1")
  const [roomType, setRoomType] = useState("")
  const methods = useForm();
  return (
    <FormProvider {...methods}>
    <div className="flex flex-col min-h-screen pt-20">
      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Stay</h1>
          <p className="text-muted-foreground">
            Complete the form below to book your stay at Grand Horizon Hotel. We look forward to welcoming you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Your Details</TabsTrigger>
                <TabsTrigger value="room">Room Selection</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
              </TabsList>

              <TabsContent value="details">
                <Card>
                  <CardHeader>
                    <CardTitle>Guest Information</CardTitle>
                    <CardDescription>Please provide your contact details for the reservation.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <FormLabel>Email Address</FormLabel>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <FormLabel>Phone Number</FormLabel>
                        <Input placeholder="Enter your phone number" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <FormLabel>Special Requests</FormLabel>
                      <Textarea
                        placeholder="Any special requests or requirements for your stay"
                        className="min-h-[100px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="ml-auto">Continue to Room Selection</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="room">
                <Card>
                  <CardHeader>
                    <CardTitle>Select Your Room</CardTitle>
                    <CardDescription>Choose the room type and specify your stay details.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <FormLabel>Check-in Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !checkIn && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {checkIn ? format(checkIn, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={checkIn}
                              onSelect={setCheckIn}
                              initialFocus
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <FormLabel>Check-out Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !checkOut && "text-muted-foreground",
                              )}
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <FormLabel>Adults</FormLabel>
                        <Select value={adults} onValueChange={setAdults}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <FormLabel>Children</FormLabel>
                        <Select value={children} onValueChange={setChildren}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <FormLabel>Rooms</FormLabel>
                        <Select value={rooms} onValueChange={setRooms}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <FormLabel>Room Type</FormLabel>
                      <Select value={roomType} onValueChange={setRoomType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select room type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard Room - $149/night</SelectItem>
                          <SelectItem value="deluxe">Deluxe Room - $199/night</SelectItem>
                          <SelectItem value="deluxe-ocean">Deluxe Ocean View - $249/night</SelectItem>
                          <SelectItem value="junior-suite">Junior Suite - $299/night</SelectItem>
                          <SelectItem value="executive-suite">Executive Suite - $349/night</SelectItem>
                          <SelectItem value="presidential">Presidential Suite - $599/night</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <Button>Continue to Payment</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="payment">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                    <CardDescription>Provide your payment details to complete the booking.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <FormLabel>Card Holder Name</FormLabel>
                      <Input placeholder="Name as it appears on the card" />
                    </div>

                    <div className="space-y-2">
                      <FormLabel>Card Number</FormLabel>
                      <div className="relative">
                        <Input placeholder="1234 5678 9012 3456" />
                        <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <FormLabel>Expiration Date</FormLabel>
                        <Input placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <FormLabel>CVV</FormLabel>
                        <div className="relative">
                          <Input placeholder="123" />
                          <Info className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <FormLabel>Billing Address</FormLabel>
                      <Input placeholder="Street Address" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <FormLabel>City</FormLabel>
                        <Input placeholder="City" />
                      </div>
                      <div className="space-y-2">
                        <FormLabel>Zip/Postal Code</FormLabel>
                        <Input placeholder="Zip/Postal Code" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <FormLabel>Country</FormLabel>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Back</Button>
                    <Button>Complete Booking</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Booking Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Check-in</span>
                    <span className="font-medium">{checkIn ? format(checkIn, "MMM dd, yyyy") : "Not selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Check-out</span>
                    <span className="font-medium">{checkOut ? format(checkOut, "MMM dd, yyyy") : "Not selected"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guests</span>
                    <span className="font-medium">
                      {adults} Adults, {children} Children
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rooms</span>
                    <span className="font-medium">{rooms}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Room Type</span>
                    <span className="font-medium">
                      {roomType
                        ? roomType.charAt(0).toUpperCase() + roomType.slice(1).replace("-", " ")
                        : "Not selected"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Room Rate</span>
                    <span className="font-medium">
                      {roomType === "standard"
                        ? "$149"
                        : roomType === "deluxe"
                          ? "$199"
                          : roomType === "deluxe-ocean"
                            ? "$249"
                            : roomType === "junior-suite"
                              ? "$299"
                              : roomType === "executive-suite"
                                ? "$349"
                                : roomType === "presidential"
                                  ? "$599"
                                  : "TBD"}{" "}
                      / night
                    </span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxes & Fees</span>
                    <span className="font-medium">$0.00</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/30 flex flex-col items-start gap-2 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Free cancellation up to 48 hours before check-in</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Best rate guarantee when booking directly</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Secure payment processing</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </FormProvider>
  )
}

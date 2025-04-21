import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CoursesPage() {
  return (
    <main className="min-h-screen py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A237E]">Our Courses</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Comprehensive coaching programs designed to help students excel in their academic journey
        </p>
      </div>

      <Tabs defaultValue="board" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="board">Board Exams</TabsTrigger>
          <TabsTrigger value="jee">JEE Preparation</TabsTrigger>
          <TabsTrigger value="neet">NEET Preparation</TabsTrigger>
        </TabsList>

        <TabsContent value="board" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="jee" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jeeCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="neet" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neetCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

interface CourseProps {
  title: string
  description: string
  duration: string
  timing: string
  fee?: string
}

function CourseCard({ title, description, duration, timing, fee }: CourseProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-[#1A237E]">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 flex-grow">
        <div className="flex justify-between">
          <span className="font-medium">Duration:</span>
          <span>{duration}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Batch Timing:</span>
          <span>{timing}</span>
        </div>
        {fee && (
          <div className="flex justify-between">
            <span className="font-medium">Fee:</span>
            <span>{fee}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#FBC02D] hover:bg-[#F9A825] text-white">Enroll Now</Button>
      </CardFooter>
    </Card>
  )
}

const boardCourses = [
  {
    title: "Class 10 Science",
    description: "Comprehensive preparation for Class 10 Board Science exams",
    duration: "6 months",
    timing: "Mon, Wed, Fri (4:00 PM - 6:00 PM)",
    fee: "₹2,500/month",
  },
  {
    title: "Class 10 Mathematics",
    description: "In-depth coaching for Class 10 Board Mathematics",
    duration: "6 months",
    timing: "Tue, Thu, Sat (4:00 PM - 6:00 PM)",
    fee: "₹2,500/month",
  },
  {
    title: "Class 12 Science (PCM)",
    description: "Complete preparation for Class 12 Physics, Chemistry, and Mathematics",
    duration: "10 months",
    timing: "Mon-Fri (5:00 PM - 8:00 PM)",
    fee: "₹4,000/month",
  },
  {
    title: "Class 12 Science (PCB)",
    description: "Thorough coaching for Class 12 Physics, Chemistry, and Biology",
    duration: "10 months",
    timing: "Mon-Fri (5:00 PM - 8:00 PM)",
    fee: "₹4,000/month",
  },
  {
    title: "Class 12 Commerce",
    description: "Expert guidance for Class 12 Commerce subjects",
    duration: "8 months",
    timing: "Mon, Wed, Fri (4:00 PM - 7:00 PM)",
    fee: "₹3,500/month",
  },
  {
    title: "Class 8-9 Foundation",
    description: "Building strong fundamentals for junior classes",
    duration: "Academic year",
    timing: "Tue, Thu, Sat (3:00 PM - 5:00 PM)",
    fee: "₹2,000/month",
  },
]

const jeeCourses = [
  {
    title: "JEE Foundation (Class 11)",
    description: "Early preparation for JEE with focus on fundamentals",
    duration: "1 year",
    timing: "Mon-Sat (2:00 PM - 5:00 PM)",
    fee: "₹5,000/month",
  },
  {
    title: "JEE Advanced (Class 12)",
    description: "Intensive coaching for JEE Advanced aspirants",
    duration: "1 year",
    timing: "Mon-Sat (9:00 AM - 1:00 PM)",
    fee: "₹6,000/month",
  },
  {
    title: "JEE Crash Course",
    description: "Short-term intensive preparation for upcoming JEE exams",
    duration: "3 months",
    timing: "Mon-Sat (9:00 AM - 4:00 PM)",
    fee: "₹8,000/month",
  },
]

const neetCourses = [
  {
    title: "NEET Foundation (Class 11)",
    description: "Building strong fundamentals for NEET aspirants",
    duration: "1 year",
    timing: "Mon-Sat (2:00 PM - 5:00 PM)",
    fee: "₹5,000/month",
  },
  {
    title: "NEET Advanced (Class 12)",
    description: "Comprehensive preparation for NEET with focus on problem-solving",
    duration: "1 year",
    timing: "Mon-Sat (9:00 AM - 1:00 PM)",
    fee: "₹6,000/month",
  },
  {
    title: "NEET Crash Course",
    description: "Intensive short-term coaching for upcoming NEET exams",
    duration: "3 months",
    timing: "Mon-Sat (9:00 AM - 4:00 PM)",
    fee: "₹8,000/month",
  },
]

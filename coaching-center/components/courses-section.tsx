import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, Calculator, FlaskRoundIcon as Flask, Award, ArrowRight } from "lucide-react"

export default function CoursesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">Courses Offered</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coaching programs designed to help students excel in their academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourseCard
            title="Board Exams"
            description="Comprehensive preparation for Class 8-12 board examinations"
            icon={<BookOpen className="h-10 w-10 text-[#FBC02D]" />}
          />
          <CourseCard
            title="JEE Preparation"
            description="Expert coaching for JEE Main and Advanced aspirants"
            icon={<Calculator className="h-10 w-10 text-[#FBC02D]" />}
          />
          <CourseCard
            title="NEET Preparation"
            description="Specialized training for medical entrance examinations"
            icon={<Flask className="h-10 w-10 text-[#FBC02D]" />}
          />
          <CourseCard
            title="Foundation Courses"
            description="Building strong fundamentals for junior classes (8-10)"
            icon={<Award className="h-10 w-10 text-[#FBC02D]" />}
          />
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-[#1A237E] hover:bg-[#1A237E]/90 text-white">
            <Link href="/courses" className="flex items-center gap-2">
              View All Courses <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface CourseCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function CourseCard({ title, description, icon }: CourseCardProps) {
  return (
    <Card className="text-center h-full flex flex-col">
      <CardHeader>
        <div className="mx-auto mb-4">{icon}</div>
        <CardTitle className="text-[#1A237E]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="pt-0 justify-center">
        <Button asChild variant="link" className="text-[#1A237E]">
          <Link href="/courses">Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

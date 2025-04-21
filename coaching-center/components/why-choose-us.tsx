import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, BookOpen, Award, Clock, BarChart, Lightbulb } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What makes Bagnan Coaching Center the preferred choice for students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Users className="h-8 w-8 text-[#FBC02D]" />}
            title="Experienced Faculty"
            description="Learn from highly qualified teachers with years of experience in coaching"
          />
          <FeatureCard
            icon={<BookOpen className="h-8 w-8 text-[#FBC02D]" />}
            title="Comprehensive Study Material"
            description="Access to well-structured notes, practice papers, and reference materials"
          />
          <FeatureCard
            icon={<Award className="h-8 w-8 text-[#FBC02D]" />}
            title="Proven Track Record"
            description="Consistent results with top ranks in board exams, JEE, and NEET"
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8 text-[#FBC02D]" />}
            title="Small Batch Sizes"
            description="Limited students per batch ensuring personalized attention to each student"
          />
          <FeatureCard
            icon={<BarChart className="h-8 w-8 text-[#FBC02D]" />}
            title="Regular Assessment"
            description="Weekly tests and detailed performance analysis to track progress"
          />
          <FeatureCard
            icon={<Lightbulb className="h-8 w-8 text-[#FBC02D]" />}
            title="Doubt Clearing Sessions"
            description="Dedicated sessions to address student queries and difficulties"
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {icon}
        <CardTitle className="text-lg text-[#1A237E]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

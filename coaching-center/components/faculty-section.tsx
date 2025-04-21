import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FacultySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A237E] mb-4">Our Expert Faculty</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn from experienced educators dedicated to helping you achieve academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facultyMembers.map((faculty, index) => (
            <FacultyCard key={index} faculty={faculty} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Faculty {
  name: string
  qualification: string
  subject: string
  experience: string
  image: string
  specialization: string[]
}

function FacultyCard({ faculty }: { faculty: Faculty }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-64 w-full">
        <Image src={faculty.image} alt={faculty.name} fill className="object-cover" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-[#1A237E]">{faculty.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{faculty.qualification}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-3">
          <div>
            <span className="font-medium">Subject:</span> {faculty.subject}
          </div>
          <div>
            <span className="font-medium">Experience:</span> {faculty.experience}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {faculty.specialization.map((spec, index) => (
              <Badge key={index} variant="secondary" className="bg-[#FBC02D]/20 text-[#1A237E] hover:bg-[#FBC02D]/30">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const facultyMembers: Faculty[] = [
  {
    name: "Dr. Amit Kumar",
    qualification: "Ph.D. in Physics, IIT Kharagpur",
    subject: "Physics",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    specialization: ["JEE Physics", "Mechanics", "Electrodynamics"],
  },
  {
    name: "Prof. Priya Sharma",
    qualification: "M.Sc. in Mathematics, Calcutta University",
    subject: "Mathematics",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    specialization: ["Calculus", "Algebra", "JEE Mathematics"],
  },
  {
    name: "Dr. Rajesh Gupta",
    qualification: "Ph.D. in Chemistry, BHU",
    subject: "Chemistry",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    specialization: ["Organic Chemistry", "NEET Chemistry", "Physical Chemistry"],
  },
  {
    name: "Prof. Ananya Das",
    qualification: "M.Sc. in Biology, Jadavpur University",
    subject: "Biology",
    experience: "8+ years",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    specialization: ["NEET Biology", "Botany", "Zoology"],
  },
  {
    name: "Prof. Sanjay Mishra",
    qualification: "M.Tech, NIT Durgapur",
    subject: "Mathematics & Physics",
    experience: "14+ years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    specialization: ["JEE Mathematics", "JEE Physics", "Competitive Exams"],
  },
  {
    name: "Dr. Meera Banerjee",
    qualification: "Ph.D. in English, Calcutta University",
    subject: "English",
    experience: "9+ years",
    image: "https://images.unsplash.com/photo-1544002605-be78f9647b7e?q=80&w=1974&auto=format&fit=crop",
    specialization: ["Communication Skills", "Grammar", "Literature"],
  },
  {
    name: "Prof. Rahul Singh",
    qualification: "M.Sc. in Computer Science",
    subject: "Computer Science",
    experience: "7+ years",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    specialization: ["Programming", "Data Structures", "Web Development"],
  },
  {
    name: "Dr. Neha Patel",
    qualification: "Ph.D. in Economics",
    subject: "Economics & Commerce",
    experience: "11+ years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1974&auto=format&fit=crop",
    specialization: ["Microeconomics", "Macroeconomics", "Business Studies"],
  },
]

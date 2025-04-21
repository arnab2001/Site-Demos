import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AcademicsSection() {
  const curriculumFeatures = [
    'CBSE & ICSE Curriculum Options',
    'Comprehensive Science & Mathematics Programs',
    'Language Proficiency Focus',
    'Digital Literacy & Technology Integration',
    'Arts, Music & Cultural Education',
    'Physical Education & Sports Programs',
  ]
  
  const streams = [
    {
      name: 'Science',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer Science'],
    },
    {
      name: 'Commerce',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'Computer Applications'],
    },
    {
      name: 'Humanities',
      subjects: ['History', 'Geography', 'Political Science', 'Psychology', 'Sociology'],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Academic Excellence</h2>
          <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive curriculum is designed to nurture academic excellence and develop well-rounded individuals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Curriculum Structure</h3>
            
            <ul className="space-y-3 mb-8">
              {curriculumFeatures.map((feature) => (
                <li key={feature} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button className="bg-[#FF9800] hover:bg-[#FB8C00] text-white mt-4">
              <Link href="/academics#curriculum">Explore Curriculum</Link>
            </Button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Streams</h3>
            
            <div className="space-y-6">
              {streams.map((stream) => (
                <div key={stream.name} className="border-l-4 border-[#0D47A1] pl-4">
                  <h4 className="text-xl font-semibold text-[#0D47A1] mb-2">{stream.name}</h4>
                  <p className="text-gray-600 mb-2">Key Subjects:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {stream.subjects.map((subject) => (
                      <li key={subject} className="text-gray-700 flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <Button className="bg-[#0D47A1] hover:bg-blue-800 text-white mt-6">
              <Link href="/academics#streams">Learn About Streams</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
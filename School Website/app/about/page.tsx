import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  const milestones = [
    {
      year: '1985',
      event: 'Founded by Dr. Rajesh Verma with just 5 teachers and 120 students',
    },
    {
      year: '1995',
      event: 'Expanded to include high school with state-approved CBSE curriculum',
    },
    {
      year: '2005',
      event: 'Added ICSE curriculum and inaugurated new campus buildings',
    },
    {
      year: '2015',
      event: 'Established smart classrooms and state-of-the-art laboratories',
    },
    {
      year: '2020',
      event: 'Introduced digital learning platforms and expanded extracurricular offerings',
    },
    {
      year: '2025',
      event: 'Celebrating 40 years of academic excellence and future-ready education',
    },
  ]

  const coreValues = [
    {
      value: 'Academic Excellence',
      description: 'Pursuing the highest standards of educational achievement',
    },
    {
      value: 'Integrity and Ethics',
      description: 'Developing moral character and ethical decision-making skills',
    },
    {
      value: 'Creativity and Innovation',
      description: 'Encouraging original thinking and innovative problem-solving',
    },
    {
      value: 'Respect and Inclusivity',
      description: 'Fostering respect for diversity and creating an inclusive environment',
    },
    {
      value: 'Global Citizenship',
      description: 'Preparing students to succeed in a globally interconnected world',
    },
  ]

  const managementTeam = [
    {
      name: 'Dr. Rajesh Verma',
      position: 'Founder & Chairman',
      photo: 'https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Dr. Amita Sharma',
      position: 'Principal',
      photo: 'https://images.pexels.com/photos/5212659/pexels-photo-5212659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Mr. Sandeep Kapoor',
      position: 'Administrative Director',
      photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Mrs. Priya Malhotra',
      position: 'Academic Coordinator',
      photo: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="relative bg-[#0D47A1] py-24">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Our School</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our rich history, values, and the dedicated team behind Radiance International School
          </p>
        </div>
      </div>

      {/* Our History Section */}
      <section id="history" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Our History</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over four decades of excellence in education, evolving with the changing times while maintaining our core values
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Radiance International School was founded in 1985 by Dr. Rajesh Verma, an eminent educator with a vision to provide quality education that blends traditional values with modern pedagogy. What began as a small school with just 120 students and 5 dedicated teachers has now grown into one of the region's most respected educational institutions.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Throughout our journey, we have continuously evolved our educational approach to meet the demands of changing times while staying true to our foundational values. Our commitment to academic excellence, character development, and holistic growth has remained unwavering.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, Radiance International School stands as a testament to four decades of educational innovation, with state-of-the-art facilities, a diverse curriculum, and a vibrant community of learners, educators, and parents working together to shape the leaders of tomorrow.
              </p>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Milestones</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-20 font-bold text-[#0D47A1]">{milestone.year}</div>
                      <div className="flex-grow pl-4 border-l-2 border-[#FF9800] pb-4">
                        <p className="text-gray-700">{milestone.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="School history" 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Our Vision & Mission</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our educational philosophy and approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#0D47A1] mb-6">Our Vision</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To be an exemplary educational institution that nurtures well-rounded individuals who are intellectually curious, morally upright, and ready to make positive contributions to society and the world.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We envision our students as future leaders who embody excellence, integrity, and compassion in all their endeavors, with the skills and mindset needed to navigate and shape an ever-changing global landscape.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#0D47A1] mb-6">Our Mission</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To provide a stimulating learning environment that promotes academic excellence, fosters critical thinking, and cultivates creativity, while nurturing the unique potential of each student.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Delivering a comprehensive education that balances academic rigor with extracurricular enrichment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Instilling values of respect, responsibility, and integrity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Embracing diversity and promoting global citizenship</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Providing a safe, supportive, and inclusive learning community</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Fostering partnerships between school, home, and the wider community</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#0D47A1]">Our Core Values</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreValues.map((item, index) => (
                <Card key={index} className="border-t-4 border-[#0D47A1]">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-[#0D47A1] mb-2">{item.value}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School Management Section */}
      <section id="management" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">School Management</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated leadership team guiding our school towards excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <div className="relative h-64">
                  <Image 
                    src={member.photo} 
                    alt={member.name} 
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#0D47A1]">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">School Governing Body</h3>
            <p className="text-gray-700 mb-6">
              Our school is governed by a dedicated board comprising educators, industry professionals, and community leaders who provide strategic guidance and oversight to ensure the school maintains its standards of excellence.
            </p>
            <p className="text-gray-700">
              The governing body meets quarterly to review school policies, academic performance, and development plans. Their collective expertise and commitment to education play a vital role in shaping the future direction of Radiance International School.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
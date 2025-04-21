import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckCircle2, BookOpen, Users, Award, Clock, Calendar } from 'lucide-react'

export default function AcademicsPage() {
  const subjectsOffered = {
    primary: [
      'English', 'Hindi', 'Mathematics', 'Environmental Science', 
      'Computer Science', 'Art & Craft', 'Music', 'Physical Education'
    ],
    middle: [
      'English', 'Hindi', 'Sanskrit', 'Mathematics', 'Science', 'Social Science', 
      'Computer Science', 'Art Education', 'Physical Education'
    ],
    secondary: [
      'English', 'Hindi/Sanskrit', 'Mathematics', 'Science (Physics, Chemistry, Biology)', 
      'Social Science (History, Geography, Civics, Economics)', 'Computer Applications', 
      'Physical Education'
    ],
    seniorSecondary: {
      science: ['Physics', 'Chemistry', 'Biology/Computer Science', 'Mathematics', 'English'],
      commerce: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics/Applied Mathematics', 'English'],
      humanities: ['History', 'Political Science', 'Geography', 'Psychology/Sociology', 'English']
    }
  }

  const teachingApproaches = [
    {
      title: 'Experiential Learning',
      description: 'Learning through hands-on experiences and reflection on those experiences',
      icon: BookOpen
    },
    {
      title: 'Collaborative Learning',
      description: 'Students work in groups to solve problems and complete projects',
      icon: Users
    },
    {
      title: 'Inquiry-Based Learning',
      description: 'Students investigate real-world questions, issues, and problems',
      icon: Award
    }
  ]

  const activities = [
    {
      title: 'Science Olympiad',
      description: 'Annual competition to test scientific knowledge and aptitude',
      schedule: 'January-February'
    },
    {
      title: 'Literary Fest',
      description: 'Celebration of literature through debates, quizzes, and creative writing',
      schedule: 'April'
    },
    {
      title: 'Sports Meet',
      description: 'Annual athletic competition with track and field events',
      schedule: 'November'
    },
    {
      title: 'Cultural Extravaganza',
      description: 'Showcase of talents in music, dance, drama, and fine arts',
      schedule: 'December'
    },
    {
      title: 'Math Genius Week',
      description: 'Activities focused on mathematical concepts and problem-solving',
      schedule: 'August'
    },
    {
      title: 'Environmental Initiative',
      description: 'Projects and activities promoting environmental awareness',
      schedule: 'June (Environment Week)'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <div className="relative bg-[#0D47A1] py-24">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Academic Excellence</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our comprehensive curriculum and innovative teaching methodologies
          </p>
        </div>
      </div>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Our Curriculum</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A balanced curriculum that promotes academic excellence while nurturing creativity and critical thinking
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#0D47A1] mb-6">Curriculum Overview</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At Radiance International School, we follow the CBSE and ICSE curricula, offering students a choice between these two nationally recognized educational frameworks. Our curriculum is designed to be comprehensive, balanced, and relevant to the demands of the 21st century.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We emphasize not only academic proficiency but also the development of life skills, critical thinking, creativity, and ethical values. Our integrated approach ensures that students receive a well-rounded education that prepares them for further studies and future careers.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The curriculum is regularly updated to incorporate the latest educational research and innovations, ensuring that our students receive an education that is both contemporary and forward-looking.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#0D47A1] mb-6">Subject Offerings by Level</h3>
                
                <Tabs defaultValue="primary" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="primary">Primary</TabsTrigger>
                    <TabsTrigger value="middle">Middle</TabsTrigger>
                    <TabsTrigger value="secondary">Secondary</TabsTrigger>
                    <TabsTrigger value="senior">Sr. Secondary</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="primary" className="mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Classes I-V</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {subjectsOffered.primary.map((subject, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-[#FF9800] mr-2" />
                            <span>{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="middle" className="mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Classes VI-VIII</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {subjectsOffered.middle.map((subject, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-[#FF9800] mr-2" />
                            <span>{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="secondary" className="mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Classes IX-X</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {subjectsOffered.secondary.map((subject, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-[#FF9800] mr-2" />
                            <span>{subject}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="senior" className="mt-0">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Classes XI-XII</h4>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-[#0D47A1] mb-2">Science Stream</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {subjectsOffered.seniorSecondary.science.map((subject, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-[#FF9800] mr-2" />
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold text-[#0D47A1] mb-2">Commerce Stream</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {subjectsOffered.seniorSecondary.commerce.map((subject, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-[#FF9800] mr-2" />
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-[#0D47A1] mb-2">Humanities Stream</h5>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {subjectsOffered.seniorSecondary.humanities.map((subject, index) => (
                            <div key={index} className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-[#FF9800] mr-2" />
                              <span>{subject}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-[#0D47A1] mb-6">Teaching Methodology</h3>
            <p className="text-gray-700 mb-8">
              Our teaching methodology combines traditional and innovative approaches to make learning engaging, effective, and enjoyable. We believe in creating a student-centered learning environment that promotes active participation and deeper understanding.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teachingApproaches.map((approach, index) => (
                <Card key={index} className="border-t-4 border-[#0D47A1]">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0D47A1]/10 mb-4">
                      <approach.icon className="h-6 w-6 text-[#0D47A1]" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{approach.title}</h4>
                    <p className="text-gray-600">{approach.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Streams Section */}
      <section id="streams" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Academic Streams</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized streams for senior secondary students to pursue their interests and career aspirations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Science Stream" 
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Science Stream</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Ideal for students interested in engineering, medicine, research, and technology fields. Develops analytical thinking and problem-solving skills through rigorous study of physical and natural sciences.
                </p>
                <h4 className="font-semibold text-[#0D47A1] mb-2">Career Pathways:</h4>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Engineering (Various Disciplines)
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Medicine & Healthcare
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Research & Development
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Information Technology
                  </li>
                </ul>
                <Button className="w-full bg-[#0D47A1] hover:bg-blue-800 text-white">
                  <Link href="/academics/science">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Commerce Stream" 
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Commerce Stream</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Perfect for students interested in business, finance, accounting, and economics. Builds financial literacy, analytical thinking, and strategic planning skills essential for the business world.
                </p>
                <h4 className="font-semibold text-[#0D47A1] mb-2">Career Pathways:</h4>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Chartered Accountancy
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Business Management
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Banking & Finance
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Entrepreneurship
                  </li>
                </ul>
                <Button className="w-full bg-[#0D47A1] hover:bg-blue-800 text-white">
                  <Link href="/academics/commerce">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <Image 
                  src="https://images.pexels.com/photos/4049992/pexels-photo-4049992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Humanities Stream" 
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Humanities Stream</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Suited for students interested in social sciences, literature, psychology, and the arts. Develops critical thinking, communication skills, and a deep understanding of human behavior and society.
                </p>
                <h4 className="font-semibold text-[#0D47A1] mb-2">Career Pathways:</h4>
                <ul className="space-y-1 mb-6">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Law & Legal Services
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Civil Services & Public Administration
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Psychology & Counseling
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF9800] mr-2"></span>
                    Journalism & Mass Communication
                  </li>
                </ul>
                <Button className="w-full bg-[#0D47A1] hover:bg-blue-800 text-white">
                  <Link href="/academics/humanities">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Academic Activities</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond the classroom learning through competitions, events, and enrichment programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/8617841/pexels-photo-8617841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Academic Activities" 
                layout="fill"
                objectFit="cover"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Enrichment Beyond the Classroom</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At Radiance International School, we believe that learning extends beyond textbooks and classroom walls. Our comprehensive program of academic activities is designed to stimulate curiosity, foster talents, and provide opportunities for practical application of classroom learning.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Through various competitions, events, clubs, and enrichment programs, students get to explore their interests, develop new skills, and showcase their talents. These activities not only complement the academic curriculum but also contribute to the holistic development of our students.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-[#0D47A1] hover:bg-blue-800 text-white">
                  <Link href="/academics/clubs">Academic Clubs</Link>
                </Button>
                <Button className="bg-[#FF9800] hover:bg-[#FB8C00] text-white">
                  <Link href="/academics/competitions">Competitions</Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-0">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="h-5 w-5 text-[#FF9800] mr-2" />
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{activity.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{activity.schedule}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
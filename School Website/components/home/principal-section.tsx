import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default function PrincipalSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Principal's Message</h2>
          <div className="h-1 w-20 bg-[#FF9800] mx-auto"></div>
        </div>
        
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1 flex justify-center items-center p-8 bg-gray-50">
                <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-[#0D47A1]">
                  <Image
                    src="https://images.pexels.com/photos/5212659/pexels-photo-5212659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="School Principal"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Dr. Amita Sharma</h3>
                  <div className="h-1 w-20 bg-[#FF9800] mx-4"></div>
                  <p className="text-gray-600">Principal</p>
                </div>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    Dear Parents and Students,
                  </p>
                  <p>
                    Welcome to Radiance International School! As the Principal, I am honored to lead this institution 
                    that has been shaping young minds and future leaders for over three decades.
                  </p>
                  <p>
                    At Radiance, we believe that education goes beyond textbooks and classrooms. Our approach 
                    focuses on the holistic development of each child, nurturing their intellectual, physical, 
                    emotional, and social growth. We aim to instill values of integrity, respect, empathy, and 
                    a sense of global citizenship in our students.
                  </p>
                  <p>
                    Our dedicated faculty employs innovative teaching methodologies that encourage critical thinking,
                    creativity, and a love for lifelong learning. We provide a safe and inclusive environment where 
                    students can explore their interests, discover their potential, and grow into confident individuals.
                  </p>
                  <p>
                    I invite you to experience the Radiance difference and join our community of learners.
                  </p>
                  <p className="font-medium italic">
                    "Education is not the filling of a pail, but the lighting of a fire." — W.B. Yeats
                  </p>
                  <p>
                    Warm regards,
                  </p>
                  <p className="font-semibold">
                    Dr. Amita Sharma
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
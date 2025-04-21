"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { 
  Calendar, 
  FileText, 
  CreditCard, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null)
    } else {
      setOpenFaq(index)
    }
  }

  const admissionSteps = [
    {
      title: 'Application Submission',
      description: 'Complete and submit the online application form along with the required documents',
      icon: FileText
    },
    {
      title: 'Entrance Assessment',
      description: 'Students take an entrance test to evaluate their readiness for the grade level',
      icon: Calendar
    },
    {
      title: 'Interview',
      description: 'Shortlisted candidates and their parents attend an interview with school representatives',
      icon: HelpCircle
    },
    {
      title: 'Admission Offer',
      description: 'Selected students receive an admission offer letter from the school',
      icon: CheckCircle2
    },
    {
      title: 'Fee Payment',
      description: 'Secure the admission by paying the registration fee within the specified timeframe',
      icon: CreditCard
    }
  ]

  const ageCriteria = [
    { grade: 'Nursery', age: '3+ years as of March 31' },
    { grade: 'LKG', age: '4+ years as of March 31' },
    { grade: 'UKG', age: '5+ years as of March 31' },
    { grade: 'Class I', age: '6+ years as of March 31' },
    { grade: 'Class II', age: '7+ years as of March 31' },
    { grade: 'Class III', age: '8+ years as of March 31' },
    { grade: 'Class IV', age: '9+ years as of March 31' },
    { grade: 'Class V', age: '10+ years as of March 31' },
    { grade: 'Class VI', age: '11+ years as of March 31' },
    { grade: 'Class VII', age: '12+ years as of March 31' },
    { grade: 'Class VIII', age: '13+ years as of March 31' },
    { grade: 'Class IX', age: '14+ years as of March 31' },
    { grade: 'Class X', age: '15+ years as of March 31' },
    { grade: 'Class XI', age: '16+ years as of March 31' },
  ]

  const feeStructure = {
    'Pre-Primary (Nursery, LKG, UKG)': {
      admission: '₹25,000',
      quarterly: '₹15,000',
      annual: '₹60,000'
    },
    'Primary (I-V)': {
      admission: '₹30,000',
      quarterly: '₹18,000',
      annual: '₹72,000'
    },
    'Middle (VI-VIII)': {
      admission: '₹35,000',
      quarterly: '₹22,000',
      annual: '₹88,000'
    },
    'Secondary (IX-X)': {
      admission: '₹40,000',
      quarterly: '₹25,000',
      annual: '₹100,000'
    },
    'Senior Secondary (XI-XII)': {
      admission: '₹45,000',
      quarterly: '₹28,000',
      annual: '₹112,000'
    }
  }

  const requiredDocuments = [
    'Completed Application Form',
    'Birth Certificate',
    'Previous School Transfer Certificate (for classes II and above)',
    'Report Cards from the last two years',
    'Passport-sized Photographs (4)',
    'Address Proof',
    'Aadhar Card',
    'Immunization Record'
  ]

  const faqItems = [
    {
      question: 'When does the admission process begin?',
      answer: 'Our admission process typically begins in September for the following academic year. Early applications are encouraged as seats are limited.'
    },
    {
      question: 'Do you have a waiting list?',
      answer: 'Yes, we maintain a waiting list for each grade level when applications exceed available seats. Candidates on the waiting list are considered if vacancies arise.'
    },
    {
      question: 'Is there any relaxation in the age criteria?',
      answer: 'We strictly adhere to our age criteria for each grade level. No relaxation is provided to ensure developmentally appropriate placements.'
    },
    {
      question: 'What is the teacher-to-student ratio in your classrooms?',
      answer: 'We maintain a favorable teacher-to-student ratio of 1:25 in pre-primary and primary classes, and 1:30 in middle and high school classes to ensure personalized attention.'
    },
    {
      question: 'Do you provide transportation facilities?',
      answer: 'Yes, we offer transportation services covering major areas of the city. Transportation fees are charged separately based on the distance.'
    },
    {
      question: 'Is there an entrance exam for all classes?',
      answer: 'Yes, an entrance assessment is conducted for all classes except Nursery. The assessment is designed to evaluate the child\'s readiness for the grade level they are applying to.'
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
              backgroundImage: "url('https://images.pexels.com/photos/8617546/pexels-photo-8617546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Admissions</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join our vibrant learning community and embark on a journey of excellence
          </p>
        </div>
      </div>

      {/* Admission Process Section */}
      <section id="process" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Admission Process</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple and transparent admission process designed to identify students who will thrive in our learning environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <ol className="relative border-l border-gray-200 ml-3">
                {admissionSteps.map((step, index) => (
                  <li key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-[#0D47A1] rounded-full -left-5 ring-4 ring-white">
                      <step.icon className="w-5 h-5 text-white" />
                    </span>
                    <h3 className="flex items-center text-lg font-semibold text-gray-900">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="mt-2 text-base font-normal text-gray-600">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/8617704/pexels-photo-8617704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Admission Process" 
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Apply?</h3>
              <p className="text-gray-700">
                Start your application process today and take the first step towards joining our school community.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button size="lg" className="bg-[#FF9800] hover:bg-[#FB8C00] text-white">
                <Link href="/admissions/apply">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements Section */}
      <section id="requirements" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Eligibility & Requirements</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Age criteria, documentation, and other requirements for admission to different grade levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#0D47A1] mb-6">Age Criteria</h3>
              <p className="text-gray-700 mb-6">
                The following age criteria must be met for admission to various grade levels:
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Grade
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Minimum Age Requirement
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {ageCriteria.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.grade}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.age}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#0D47A1] mb-6">Required Documents</h3>
              <p className="text-gray-700 mb-6">
                Please submit the following documents along with your application:
              </p>
              
              <ul className="space-y-3">
                {requiredDocuments.map((document, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-[#FF9800] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 bg-yellow-50 p-4 rounded-md border border-yellow-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-yellow-800">Important Note</h4>
                    <div className="mt-2 text-sm text-yellow-700">
                      <p>
                        All documents must be submitted in original for verification along with one set of photocopies. Original documents will be returned after verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section id="fees" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Fee Structure</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparent fee structure for different grade levels and payment schedules
            </p>
          </div>
          
          <div className="mb-10">
            <Tabs defaultValue="fee-structure" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="fee-structure">Fee Structure</TabsTrigger>
                <TabsTrigger value="payment-schedule">Payment Schedule</TabsTrigger>
                <TabsTrigger value="fee-policy">Fee Policy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fee-structure" className="mt-0">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Grade Level
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Admission Fee (One-time)
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quarterly Fee
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Annual Fee
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {Object.entries(feeStructure).map(([level, fees], index) => (
                          <tr key={level} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {level}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {fees.admission}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {fees.quarterly}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {fees.annual}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-8 bg-gray-50 p-6 rounded-md">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Additional Fees</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-[#FF9800] mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Transportation Fee:</span>
                          <span className="text-gray-700"> ₹8,000 - ₹12,000 per annum (based on distance)</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-[#FF9800] mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Examination Fee:</span>
                          <span className="text-gray-700"> ₹1,500 per annum</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-[#FF9800] mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Computer Lab Fee:</span>
                          <span className="text-gray-700"> ₹2,000 per annum</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-[#FF9800] mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Science Lab Fee:</span>
                          <span className="text-gray-700"> ₹2,500 per annum (Classes VI-XII)</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="payment-schedule" className="mt-0">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Quarterly Fee Payment Schedule</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-[#0D47A1] mb-4">Quarter 1 (April - June)</h4>
                        <p className="text-gray-700 mb-2">Payment Due: March 31</p>
                        <p className="text-gray-700">Late Fee Applicable: After April 10</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-[#0D47A1] mb-4">Quarter 2 (July - September)</h4>
                        <p className="text-gray-700 mb-2">Payment Due: June 30</p>
                        <p className="text-gray-700">Late Fee Applicable: After July 10</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-[#0D47A1] mb-4">Quarter 3 (October - December)</h4>
                        <p className="text-gray-700 mb-2">Payment Due: September 30</p>
                        <p className="text-gray-700">Late Fee Applicable: After October 10</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold text-[#0D47A1] mb-4">Quarter 4 (January - March)</h4>
                        <p className="text-gray-700 mb-2">Payment Due: December 31</p>
                        <p className="text-gray-700">Late Fee Applicable: After January 10</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Methods</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-900">Online Payment</h4>
                      <p className="text-gray-700">
                        Fees can be paid online through the school portal using credit/debit cards or net banking.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-900">Bank Transfer</h4>
                      <p className="text-gray-700">
                        Direct bank transfer to the school account. Details are available in the fee booklet.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h4 className="font-semibold text-gray-900">Cheque/DD</h4>
                      <p className="text-gray-700">
                        Payable to "Radiance International School" at the school accounts office.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="fee-policy" className="mt-0">
                <div className="bg-white rounded-lg p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Fee Policy Guidelines</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-[#0D47A1] mb-3">Late Fee</h4>
                      <p className="text-gray-700">
                        A late fee of ₹500 will be charged if the fee is not paid by the due date. An additional penalty of ₹100 per day may be applied for payments delayed beyond 15 days from the due date.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-[#0D47A1] mb-3">Fee Concession</h4>
                      <p className="text-gray-700">
                        A concession of 5% on the annual tuition fee is granted if the entire year's fee is paid in advance before April 30. Sibling discounts (10% for the second child) are also available.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-[#0D47A1] mb-3">Withdrawal Policy</h4>
                      <p className="text-gray-700">
                        One calendar month's notice in writing or a month's fee in lieu of notice is required for withdrawal. Transfer Certificate will be issued only after all dues are cleared.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-[#0D47A1] mb-3">Fee Revision</h4>
                      <p className="text-gray-700">
                        The school reserves the right to revise the fee structure for each academic year. Parents will be notified of any changes well in advance.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-[#0D47A1] mb-3">Default in Payment</h4>
                      <p className="text-gray-700">
                        The school reserves the right to restrict a student from attending classes if there is a default in fee payment beyond 30 days, after due intimation to parents.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0D47A1] mb-2">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-[#FF9800] mx-auto mb-4"></div>
            <p className="text-gray-600">
              Find answers to common questions about our admission process
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-200 ease-in-out"
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                  {openFaq === index ? 
                    <ChevronUp className="h-5 w-5 text-[#0D47A1]" /> : 
                    <ChevronDown className="h-5 w-5 text-[#0D47A1]" />
                  }
                </button>
                <div 
                  className={`px-4 pb-4 ${openFaq === index ? 'block' : 'hidden'}`}
                >
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Have more questions about the admission process?
            </p>
            <Button className="bg-[#0D47A1] hover:bg-blue-800 text-white">
              <Link href="/contact">Contact Our Admissions Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#0D47A1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Journey with Radiance International School</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            We invite you to take the first step towards providing your child with an excellent education that will shape their future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="bg-[#FF9800] hover:bg-[#FB8C00] text-white">
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D47A1]">
              <Link href="/contact#schedule-visit">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
import Link from 'next/link'
import { GraduationCap, Euro, Clock, CheckCircle, ArrowRight, BookOpen, Users, Award } from 'lucide-react'
import GuideCard from '@/components/GuideCard'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Education Grants Ireland 2025 - Springboard+ & HCI Funding | Irish Grants Hub',
  description: 'Complete guide to education grants in Ireland. Get 90-100% funding for courses with Springboard+ and Human Capital Initiative. Free and subsidized education.',
  keywords: 'education grants Ireland, Springboard+ funding, HCI funding, free courses Ireland, education funding',
}

export default function EducationGrantsPage() {
  const educationGrants = [
    {
      title: "Springboard+ Funding",
      description: "Free or heavily subsidized courses for upskilling and reskilling. Perfect for career changers and skill development.",
      href: "/grants/education/springboard-plus-funding",
      category: "education" as const,
      amount: "Free to 90% off",
      deadline: "Annual intake",
      difficulty: "Medium" as const
    },
    {
      title: "Human Capital Initiative",
      description: "Advanced courses and micro-credentials for in-demand skills. Higher education funding for professionals.",
      href: "/grants/education/human-capital-initiative",
      category: "education" as const,
      amount: "Up to 100% funded",
      deadline: "Multiple intakes",
      difficulty: "Medium" as const
    }
  ]

  const benefits = [
    {
      icon: Euro,
      title: "Minimal Cost",
      description: "Most courses are free or heavily subsidized, making education accessible to everyone"
    },
    {
      icon: BookOpen,
      title: "Flexible Learning",
      description: "Part-time, online, and blended options to fit around your work and life commitments"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Courses are designed with industry input and lead to recognized qualifications"
    }
  ]

  const sectors = [
    "Technology & Digital",
    "Healthcare & Life Sciences", 
    "Business & Finance",
    "Engineering & Manufacturing",
    "Creative Industries",
    "Green Economy"
  ]

  const eligibility = [
    "Resident of Ireland or EU/EEA",
    "Meet age requirements (usually 18+)",
    "Have relevant educational background",
    "Not already have equivalent qualification",
    "Meet employment status requirements"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
              <GraduationCap className="w-6 h-6" />
              <span className="font-medium">Education Grants</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Education Grants Ireland 2025
            </h1>
            
            <p className="text-xl text-navy-700 mb-8 leading-relaxed">
              Get <strong>90-100% funding</strong> for courses that can transform your career. 
              Springboard+ and HCI make quality education accessible to everyone in Ireland.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Euro className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-navy-900">90-100% funded</div>
                  <div className="text-sm text-navy-600">Course fees covered</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-navy-900">Multiple intakes</div>
                  <div className="text-sm text-navy-600">Throughout the year</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-navy-900">All levels</div>
                  <div className="text-sm text-navy-600">Certificate to Masters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Grants */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Available Education Grants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {educationGrants.map((grant, index) => (
                <GuideCard key={index} {...grant} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Why Choose Funded Education?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-navy-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6 text-center">
              Popular Course Sectors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {sectors.map((sector, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200">
                  <span className="text-navy-700 font-medium">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6 text-center">
              Basic Eligibility Requirements
            </h2>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eligibility.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center text-navy-600 mt-6">
              <strong>Note:</strong> Specific requirements may vary by program and course. 
              Check individual grant guides for detailed eligibility criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              How to Apply for Education Grants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Browse Courses</h3>
                <p className="text-navy-700 text-sm">Explore available programs and courses</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Check Eligibility</h3>
                <p className="text-navy-700 text-sm">Verify you meet the requirements</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Apply Directly</h3>
                <p className="text-navy-700 text-sm">Submit application to the institution</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Start Learning</h3>
                <p className="text-navy-700 text-sm">Begin your funded education journey</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CTA
              type="education-grant"
              title="Learn About Springboard+"
              description="Get comprehensive information about Springboard+ funding and course options for career development."
              buttonText="Read Springboard+ Guide"
              buttonHref="/grants/education/springboard-plus-funding"
              secondaryButtonText="View All Education Grants"
              secondaryButtonHref="/grants/education"
            />
            
            <CTA
              type="contact"
              title="Learn About HCI Funding"
              description="Get detailed information about Human Capital Initiative programs and advanced education funding."
              buttonText="Read HCI Guide"
              buttonHref="/grants/education/human-capital-initiative"
              secondaryButtonText="View All Education Grants"
              secondaryButtonHref="/grants/education"
            />
          </div>
        </div>
      </section>
    </>
  )
}

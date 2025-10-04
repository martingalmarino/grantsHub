import Link from 'next/link'
import { GraduationCap, Euro, Clock, CheckCircle, AlertCircle, ExternalLink, ArrowRight, Award } from 'lucide-react'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import JSONLDSchema from '@/components/JSONLDSchema'
import RealCourseExamples from '@/components/RealCourseExamples'
import GrantDeadlines from '@/components/GrantDeadlines'
import ContentVerification from '@/components/ContentVerification'
import { hciCourses, grantDeadlines } from '@/data/grants-data'

export const metadata = {
  title: 'Human Capital Initiative: Advanced Education Funding Ireland 2025 | Irish Grants Hub',
  description: 'Complete guide to the Human Capital Initiative in Ireland. Get up to 100% funding for advanced courses and micro-credentials. Eligibility, application process, and expert tips.',
  keywords: 'Human Capital Initiative, HCI funding, advanced education Ireland, micro-credentials, professional development grants',
  alternates: {
    canonical: 'https://www.irishgrants.org/grants/education/human-capital-initiative/',
  },
}

export default function HumanCapitalInitiativePage() {
  const steps = [
    {
      number: 1,
      title: "Check Your Eligibility",
      description: "Verify you meet the requirements for HCI funding.",
      details: [
        "You must be resident in Ireland or EU/EEA",
        "Meet educational background requirements",
        "Have relevant work experience",
        "Meet specific course prerequisites"
      ]
    },
    {
      number: 2,
      title: "Explore HCI Programs",
      description: "Browse available HCI-funded programs and courses.",
      details: [
        "Visit participating universities and colleges",
        "Check program requirements and outcomes",
        "Review course content and delivery methods",
        "Consider time commitments and schedules"
      ]
    },
    {
      number: 3,
      title: "Choose Your Program",
      description: "Select the HCI program that aligns with your career goals.",
      details: [
        "Consider your current skills and experience",
        "Research job market demand in your field",
        "Evaluate program reputation and outcomes",
        "Check alumni success stories"
      ]
    },
    {
      number: 4,
      title: "Prepare Your Application",
      description: "Gather all required documents and prepare your application.",
      details: [
        "Update your CV and professional profile",
        "Gather academic transcripts and certificates",
        "Prepare personal statement and motivation letter",
        "Secure professional references"
      ]
    },
    {
      number: 5,
      title: "Submit Your Application",
      description: "Complete and submit your application to the institution.",
      details: [
        "Apply directly through the institution",
        "Complete all required sections thoroughly",
        "Upload all supporting documents",
        "Submit before the application deadline"
      ]
    },
    {
      number: 6,
      title: "Await Decision & Enroll",
      description: "Wait for the decision and complete enrollment if accepted.",
      details: [
        "Monitor application status regularly",
        "Respond promptly to any requests",
        "Complete enrollment and funding processes",
        "Prepare for program start date"
      ]
    }
  ]

  const grantFAQs = [
    {
      question: "What is the Human Capital Initiative (HCI)?",
      answer: "The Human Capital Initiative is a government program that provides funding for advanced education and training programs. It focuses on developing high-level skills in areas of strategic importance to Ireland's economy, including technology, healthcare, and business sectors."
    },
    {
      question: "How much funding is available through HCI?",
      answer: "HCI funding can cover up to 100% of course fees for eligible participants. The exact amount depends on the specific program, your employment status, and other factors. Some programs may require a small contribution from participants."
    },
    {
      question: "What types of programs are available through HCI?",
      answer: "HCI funds a range of programs including master's degrees, postgraduate diplomas, micro-credentials, and professional development courses. Programs are typically in high-demand areas like technology, healthcare, business, and engineering."
    },
    {
      question: "Who is eligible for HCI funding?",
      answer: "Eligibility varies by program but generally includes Irish residents and EU/EEA citizens with relevant educational backgrounds and work experience. Some programs may have specific requirements related to your current role or career goals."
    },
    {
      question: "How do I apply for HCI funding?",
      answer: "You apply directly to the institution offering the HCI-funded program. The application process varies by institution and program, but typically includes academic transcripts, CV, personal statement, and sometimes an interview or assessment."
    },
    {
      question: "Can I work while studying an HCI program?",
      answer: "Many HCI programs are designed for working professionals and offer flexible delivery methods including part-time, online, or blended learning options. This allows you to continue working while developing new skills."
    }
  ]

  const programTypes = [
    {
      type: "Master's Degrees",
      description: "Advanced degree programs in high-demand fields",
      duration: "1-2 years",
      fundingLevel: "Up to 100%",
      deliveryMethod: "Full-time, Part-time, Online"
    },
    {
      type: "Postgraduate Diplomas",
      description: "Specialized diploma programs for professional development",
      duration: "6-12 months",
      fundingLevel: "Up to 100%",
      deliveryMethod: "Part-time, Online, Blended"
    },
    {
      type: "Micro-Credentials",
      description: "Short, focused courses for specific skills",
      duration: "3-6 months",
      fundingLevel: "Up to 100%",
      deliveryMethod: "Online, Blended"
    },
    {
      type: "Professional Development",
      description: "Industry-specific training and certification programs",
      duration: "1-6 months",
      fundingLevel: "Up to 100%",
      deliveryMethod: "Part-time, Online"
    }
  ]

  const commonMistakes = [
    "Not meeting specific program prerequisites",
    "Incomplete application materials",
    "Missing application deadlines",
    "Poor personal statements",
    "Not demonstrating relevant experience",
    "Applying for programs outside your field"
  ]

  const relatedGrants = [
    {
      title: "Springboard+ Funding",
      description: "Free and subsidized courses for upskilling and reskilling",
      href: "/grants/education/springboard-plus-funding",
      amount: "90-100% funded"
    },
    {
      title: "Postgraduate Support Scheme",
      description: "Financial support for postgraduate studies",
      href: "#",
      amount: "Up to €6,000"
    }
  ]

  return (
    <>
      <JSONLDSchema 
        type="Article" 
        data={{
          title: "Human Capital Initiative: Advanced Education Funding Ireland 2025",
          description: "Complete guide to the Human Capital Initiative in Ireland. Get up to 100% funding for advanced courses and micro-credentials.",
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString().split('T')[0],
          url: "https://www.irishgrants.org/grants/education/human-capital-initiative"
        }} 
      />
      
      <JSONLDSchema 
        type="FAQ" 
        data={grantFAQs} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-primary-600 mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Education Grants</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Human Capital Initiative: Advanced Education Funding Ireland 2025
            </h1>
            
            <p className="text-xl text-navy-700 mb-8 leading-relaxed">
              Get up to <strong>100% funding</strong> for advanced courses, master's degrees, and micro-credentials. 
              The Human Capital Initiative supports high-level skills development in Ireland's most strategic sectors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Euro className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900">Up to 100% funded</div>
                  <div className="text-sm text-navy-600">Course fees covered</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900">Flexible delivery</div>
                  <div className="text-sm text-navy-600">Part-time & online options</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900">High-level skills</div>
                  <div className="text-sm text-navy-600">Strategic sectors</div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-indigo-800 mb-1">For Working Professionals</h3>
                  <p className="text-indigo-700 text-sm">
                    HCI programs are designed for professionals looking to advance their careers with high-level skills 
                    in strategic sectors. Many programs offer flexible delivery to fit around work commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is HCI Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">What is the Human Capital Initiative?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-navy-700 leading-relaxed mb-6">
                The Human Capital Initiative (HCI) is a strategic government program designed to develop high-level skills 
                in areas of strategic importance to Ireland's economy. It provides funding for advanced education and training 
                programs that address skills shortages and support economic growth.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                HCI focuses on developing expertise in key sectors including technology, healthcare, business, engineering, 
                and other high-growth areas. The initiative supports both individuals seeking to advance their careers 
                and employers looking to develop their workforce capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">You Must:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Be resident in Ireland or EU/EEA</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Meet educational background requirements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Have relevant work experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Meet specific program prerequisites</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Program Requirements:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Relevant undergraduate degree</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Professional work experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Clear career development goals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Commitment to program completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Types Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Types of HCI Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programTypes.map((program, index) => (
                <div key={index} className="card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy-900">{program.type}</h3>
                      <p className="text-primary-600 font-bold">{program.fundingLevel}</p>
                    </div>
                  </div>
                  <p className="text-navy-700 mb-4">{program.description}</p>
                  <div className="space-y-2 text-sm text-navy-600">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery:</span>
                      <span className="font-medium">{program.deliveryMethod}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Step-by-Step Application Process
            </h2>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-navy-700 mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-navy-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Common Mistakes to Avoid</h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-start space-x-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-red-800">Avoid These Application Errors</h3>
              </div>
              <ul className="space-y-2">
                {commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-red-600 font-bold">×</span>
                    <span className="text-red-700">{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Grants */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Related Education Grants</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedGrants.map((grant, index) => (
                <Link key={index} href={grant.href} className="card hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-1">
                        {grant.title}
                      </h3>
                      <p className="text-navy-700 text-sm mb-2">
                        {grant.description}
                      </p>
                      <span className="text-primary-600 font-semibold">
                        {grant.amount}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary-600" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        faqs={grantFAQs}
        title="Human Capital Initiative FAQs"
        description="Get answers to the most common questions about HCI funding and program applications."
      />

      {/* Real Course Examples */}
      <RealCourseExamples
        courses={hciCourses}
        title="Real HCI Course Examples"
        description="Explore actual advanced courses available through the Human Capital Initiative with real institutions, duration, salary prospects, and career outcomes."
      />

      {/* Grant Deadlines */}
      <GrantDeadlines
        deadlines={grantDeadlines.filter(deadline => 
          deadline.grantType.includes('HCI')
        )}
        title="Current HCI Application Deadlines"
      />

      {/* Content Verification */}
      <ContentVerification />

      {/* Final CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Learn More About Education Grants?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore more information about education grants and funding options. 
            Stay informed about all available programs for career development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA
              type="education-grant"
              title="Learn About Springboard+"
              description="Get comprehensive information about Springboard+ funding and course options."
              buttonText="Read Springboard+ Guide"
              buttonHref="/grants/education/springboard-plus-funding"
            />
            <CTA
              type="contact"
              title="Explore All Education Grants"
              description="View all available education grants and funding options in Ireland."
              buttonText="View All Education Grants"
              buttonHref="/grants/education"
            />
          </div>
        </div>
      </section>
    </>
  )
}

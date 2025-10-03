import Link from 'next/link'
import { GraduationCap, Euro, Clock, CheckCircle, AlertCircle, ExternalLink, ArrowRight, BookOpen } from 'lucide-react'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import JSONLDSchema from '@/components/JSONLDSchema'

export const metadata = {
  title: 'Springboard+ Funding: Free & Subsidized Courses in Ireland 2025 | Irish Grants Hub',
  description: 'Complete guide to Springboard+ funding in Ireland. Get free or heavily subsidized courses for upskilling and reskilling. Eligibility, application process, and expert tips.',
  keywords: 'Springboard+ funding, free courses Ireland, upskilling grants, education funding Ireland, Springboard+ 2025',
}

export default function SpringboardPlusFundingPage() {
  const steps = [
    {
      number: 1,
      title: "Check Your Eligibility",
      description: "Verify you meet the basic requirements for Springboard+ funding.",
      details: [
        "You must be resident in Ireland or EU/EEA",
        "Meet age and employment status requirements",
        "Have relevant educational background",
        "Not already have equivalent qualification"
      ]
    },
    {
      number: 2,
      title: "Browse Available Courses",
      description: "Explore the wide range of courses available through Springboard+.",
      details: [
        "Visit the official Springboard+ website",
        "Filter courses by location, level, and sector",
        "Read course descriptions and requirements",
        "Check application deadlines for each course"
      ]
    },
    {
      number: 3,
      title: "Choose Your Course",
      description: "Select the course that best matches your career goals.",
      details: [
        "Consider your current skills and experience",
        "Research job prospects in your chosen field",
        "Check course duration and time commitment",
        "Verify course delivery method (online/in-person)"
      ]
    },
    {
      number: 4,
      title: "Prepare Your Application",
      description: "Gather all required documents and information.",
      details: [
        "Update your CV and cover letter",
        "Gather educational certificates",
        "Prepare personal statement",
        "Check specific course requirements"
      ]
    },
    {
      number: 5,
      title: "Submit Your Application",
      description: "Complete and submit your application before the deadline.",
      details: [
        "Apply directly through the course provider",
        "Complete all required sections",
        "Upload supporting documents",
        "Submit before the application deadline"
      ]
    },
    {
      number: 6,
      title: "Await Decision & Enroll",
      description: "Wait for the decision and complete enrollment if accepted.",
      details: [
        "Check application status regularly",
        "Respond promptly to any requests",
        "Complete enrollment process if accepted",
        "Prepare for course start date"
      ]
    }
  ]

  const grantFAQs = [
    {
      question: "How much does Springboard+ funding cover?",
      answer: "Springboard+ funding covers 90-100% of course fees for eligible participants. The exact amount depends on your employment status, previous qualifications, and the specific course. Unemployed participants typically get 100% funding, while employed participants may pay 10% of course fees."
    },
    {
      question: "Who is eligible for Springboard+ funding?",
      answer: "Eligibility depends on several factors including residency status, employment status, age, and previous qualifications. Generally, you must be resident in Ireland or EU/EEA, meet age requirements (usually 18+), and not already have an equivalent qualification in the same field."
    },
    {
      question: "What types of courses are available through Springboard+?",
      answer: "Springboard+ offers courses across many sectors including technology, healthcare, business, engineering, and more. Courses range from certificate level to master's degrees, with both part-time and full-time options available. Many courses are designed for career changers and upskilling."
    },
    {
      question: "How long do Springboard+ courses take?",
      answer: "Course duration varies widely depending on the level and type of course. Certificate courses may take 6-12 months, while degree courses can take 1-4 years. Many courses are designed to be completed part-time while working, making them accessible to employed participants."
    },
    {
      question: "Can I apply for multiple Springboard+ courses?",
      answer: "You can apply for multiple courses, but you can only accept one offer. It's recommended to apply for several courses that interest you to increase your chances of acceptance. Make sure to prioritize your applications based on your preferences."
    },
    {
      question: "What happens if I'm not accepted to my chosen course?",
      answer: "If you're not accepted, you can apply for other courses in the same intake or wait for the next intake. Springboard+ has multiple intakes throughout the year, and new courses are regularly added. You can also consider alternative education pathways or reapply with improved qualifications."
    }
  ]

  const courseCategories = [
    {
      category: "Technology & Digital",
      description: "Software development, data analytics, cybersecurity, and digital marketing",
      popularCourses: ["Software Development", "Data Analytics", "Cybersecurity", "Digital Marketing"],
      fundingLevel: "90-100%"
    },
    {
      category: "Healthcare & Life Sciences",
      description: "Nursing, healthcare management, pharmaceutical sciences, and medical technology",
      popularCourses: ["Healthcare Management", "Pharmaceutical Sciences", "Medical Technology", "Public Health"],
      fundingLevel: "90-100%"
    },
    {
      category: "Business & Finance",
      description: "Business administration, project management, accounting, and financial services",
      popularCourses: ["Business Administration", "Project Management", "Accounting", "Financial Services"],
      fundingLevel: "90-100%"
    },
    {
      category: "Engineering & Manufacturing",
      description: "Mechanical engineering, manufacturing, quality management, and supply chain",
      popularCourses: ["Mechanical Engineering", "Manufacturing", "Quality Management", "Supply Chain"],
      fundingLevel: "90-100%"
    }
  ]

  const commonMistakes = [
    "Missing application deadlines",
    "Not checking eligibility requirements",
    "Incomplete application forms",
    "Poor personal statements",
    "Not providing required documentation",
    "Applying for courses outside your field"
  ]

  const relatedGrants = [
    {
      title: "Human Capital Initiative",
      description: "Advanced courses and micro-credentials for in-demand skills",
      href: "/grants/education/human-capital-initiative",
      amount: "Up to 100% funded"
    },
    {
      title: "Back to Education Allowance",
      description: "Financial support for returning to full-time education",
      href: "#",
      amount: "€220+ per week"
    }
  ]

  return (
    <>
      <JSONLDSchema 
        type="Article" 
        data={{
          title: "Springboard+ Funding: Free & Subsidized Courses in Ireland 2025",
          description: "Complete guide to Springboard+ funding in Ireland. Get free or heavily subsidized courses for upskilling and reskilling.",
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString().split('T')[0],
          url: "https://irishgrantshub.ie/grants/education/springboard-plus-funding"
        }} 
      />
      
      <JSONLDSchema 
        type="FAQ" 
        data={grantFAQs} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-primary-600 mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Education Grants</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Springboard+ Funding: Free & Subsidized Courses in Ireland 2025
            </h1>
            
            <p className="text-xl text-navy-700 mb-8 leading-relaxed">
              Get <strong>90-100% funding</strong> for courses that can transform your career. 
              Springboard+ offers free and heavily subsidized education across Ireland's most in-demand sectors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Euro className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900">90-100% funded</div>
                  <div className="text-sm text-navy-600">Course fees covered</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900">Multiple intakes</div>
                  <div className="text-sm text-navy-600">Throughout the year</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900">All levels</div>
                  <div className="text-sm text-navy-600">Certificate to Masters</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1">Perfect for Career Changers</h3>
                  <p className="text-blue-700 text-sm">
                    Springboard+ is designed for people looking to upskill, reskill, or change careers entirely. 
                    Many courses are part-time and designed to fit around work commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Springboard+ Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">What is Springboard+?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-navy-700 leading-relaxed mb-6">
                Springboard+ is a government initiative that provides free and heavily subsidized higher education courses 
                for people who are unemployed, looking to return to work, or seeking to upskill in their current role. 
                The program focuses on areas where there are skills shortages in the Irish economy.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The initiative is designed to help people develop the skills needed for the jobs of the future, 
                particularly in technology, healthcare, business, and other high-growth sectors. Courses are delivered 
                by universities, institutes of technology, and other approved education providers across Ireland.
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
                    <span className="text-navy-700">Meet age requirements (usually 18+)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Have relevant educational background</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Not have equivalent qualification</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Funding Levels:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700"><strong>Unemployed:</strong> 100% funding</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700"><strong>Employed:</strong> 90% funding (10% contribution)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700"><strong>Returners:</strong> 100% funding</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700"><strong>Self-employed:</strong> 90% funding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Popular Course Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {courseCategories.map((category, index) => (
                <div key={index} className="card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy-900">{category.category}</h3>
                      <p className="text-primary-600 font-bold">{category.fundingLevel} funded</p>
                    </div>
                  </div>
                  <p className="text-navy-700 mb-4">{category.description}</p>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Popular Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.popularCourses.map((course, courseIndex) => (
                        <span key={courseIndex} className="bg-gray-100 text-navy-700 px-2 py-1 rounded text-sm">
                          {course}
                        </span>
                      ))}
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
        title="Springboard+ Funding FAQs"
        description="Get answers to the most common questions about Springboard+ funding and course applications."
      />

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
              title="Learn About HCI Funding"
              description="Get comprehensive information about Human Capital Initiative programs and advanced education funding."
              buttonText="Read HCI Guide"
              buttonHref="/grants/education/human-capital-initiative"
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

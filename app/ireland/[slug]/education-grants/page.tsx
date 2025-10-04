import Link from 'next/link'
import { GraduationCap, BookOpen, Clock, CheckCircle, ArrowRight, ExternalLink, Users, Award } from 'lucide-react'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import JSONLDSchema from '@/components/JSONLDSchema'
import countiesData from '@/data/counties.json'

// Generate static params for all counties
export async function generateStaticParams() {
  return countiesData.map((county) => ({
    slug: county.slug,
  }))
}

// Get county data by slug
function getCountyData(slug: string) {
  return countiesData.find((county) => county.slug === slug)
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const county = getCountyData(params.slug)
  
  if (!county) {
    return {
      title: 'County Not Found | Irish Grants Hub',
      description: 'The requested county page could not be found.',
    }
  }

  return {
    title: `${county.county} Education Grants – Springboard+ Courses & Local Colleges | Irish Grants Hub`,
    description: `Learn how to apply for education grants in ${county.county}, Ireland. See local colleges offering Springboard+ courses and HCI funding for upskilling.`,
    keywords: `${county.county} education grants, Springboard+ ${county.county}, education funding ${county.county}, HCI courses ${county.county}`,
    alternates: {
      canonical: `https://www.irishgrants.org/ireland/${county.slug}/education-grants/`,
    },
    openGraph: {
      title: `${county.county} Education Grants – Springboard+ Courses & Local Colleges`,
      description: `Complete guide to education grants in ${county.county}, Ireland. Local colleges, Springboard+ courses, and application process.`,
      type: 'website',
      locale: 'en_IE',
      url: `https://www.irishgrants.org/ireland/${county.slug}/education-grants/`,
      siteName: 'Irish Grants Hub',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${county.county} Education Grants – Springboard+ Courses & Local Colleges`,
      description: `Complete guide to education grants in ${county.county}, Ireland. Local colleges, Springboard+ courses, and application process.`,
    },
  }
}

export default function CountyEducationGrantsPage({ params }: { params: { slug: string } }) {
  const county = getCountyData(params.slug)

  if (!county) {
    return (
      <div className="container-max py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-navy-900 mb-4">County Not Found</h1>
          <p className="text-navy-700 mb-8">The requested county page could not be found.</p>
          <Link href="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  // Prepare FAQ data for FAQPage schema
  const faqData = county.local_faqs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }))

  return (
    <>
      <JSONLDSchema 
        type="FAQPage" 
        data={faqData} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-blue-600 mb-4">
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">Education Grants</span>
              <span className="text-navy-400">•</span>
              <span className="font-medium">{county.county}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Springboard+ and Education Grants in {county.county}, Ireland
            </h1>
            
            <p className="text-lg sm:text-xl text-navy-700 mb-6 sm:mb-8 leading-relaxed">
              Get <strong>90-100% funding</strong> for courses with Springboard+ and the Human Capital Initiative. 
              While grants are national, we highlight local colleges and training providers in {county.county}.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm sm:text-base">90-100%</div>
                  <div className="text-xs sm:text-sm text-navy-600">Course Funding</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm sm:text-base">Multiple</div>
                  <div className="text-xs sm:text-sm text-navy-600">Course Types</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm sm:text-base">Annual</div>
                  <div className="text-xs sm:text-sm text-navy-600">Intake Periods</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Education Grants in {county.county}</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-navy-700 leading-relaxed mb-6">
                {county.county} residents have access to Ireland's comprehensive education grant programs, including Springboard+ 
                and the Human Capital Initiative (HCI). These programs provide significant funding for upskilling and reskilling 
                courses that align with local employment needs and emerging industries.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The education grant programs are designed to help individuals develop in-demand skills, whether you're looking 
                to advance in your current career or transition to a new field. Local colleges and training providers in {county.county} 
                offer a range of funded courses to meet these needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Providers Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Local Colleges & Training Providers in {county.county}</h2>
            
            <div className="grid grid-cols-1 gap-6 mb-8">
              {county.local_courses.map((course, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">
                        {course.course}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {course.provider}
                      </p>
                      <p className="text-navy-700 mb-3 text-sm">
                        {course.duration}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Springboard+ Funded
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {county.county}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Course Availability</h4>
                  <p className="text-blue-700 text-sm">
                    Course offerings may vary by intake period. Always check with the provider directly for current availability, 
                    admission requirements, and application deadlines. Springboard+ courses typically have annual application periods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Info Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">How to Apply for Education Grants in {county.county}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-4">National Application Process</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Apply during annual intake periods</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Meet eligibility requirements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Course fees covered directly</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Processing time: 4-8 weeks</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Local Support in {county.county}</h3>
                <p className="text-navy-700 mb-4">
                  {county.county} residents benefit from:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Local college support services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Regional course offerings</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Local career guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">
              Start Your Education Journey in {county.county}
            </h2>
            <p className="text-lg text-navy-700 mb-8 max-w-2xl mx-auto">
              Explore funded courses and training opportunities available to {county.county} residents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/grants/education/springboard-plus-funding" 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center"
              >
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Springboard+ Courses
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
              <Link 
                href="/grants/education/human-capital-initiative" 
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center"
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                HCI Programs
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs Section */}
      <FAQ 
        faqs={county.local_faqs}
        title={`Education Grants in ${county.county} - Frequently Asked Questions`}
        description={`Common questions about education grants and local courses in ${county.county}, Ireland.`}
      />

      {/* Disclaimer Section */}
      <section className="section-padding bg-yellow-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-yellow-200">
              <h2 className="text-xl font-bold text-navy-900 mb-4">Important Disclaimer</h2>
              <p className="text-navy-700 leading-relaxed">
                Irish Grants Hub is an independent informational website and is not an official government body. 
                We are not affiliated with Springboard+, HCI, any government agency, or educational institutions. 
                Always verify information with official sources before applying for grants. Course information is 
                provided for reference only and should be verified directly with the educational institution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from 'next/link'
import { Car, Euro, Clock, CheckCircle, ArrowRight, ExternalLink, MapPin, Users } from 'lucide-react'
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
    title: `${county.county} EV Grants 2025 – SEAI Support & Local Installers | Irish Grants Hub`,
    description: `Learn how to apply for EV grants in ${county.county}, Ireland. See local approved installers, SEAI EV grants up to €5,000, and home charger grants up to €600.`,
    keywords: `${county.county} EV grants, SEAI EV grant ${county.county}, electric vehicle grants ${county.county}, EV installers ${county.county}`,
    alternates: {
      canonical: `https://www.irishgrants.org/ireland/${county.slug}/ev-grants/`,
    },
    openGraph: {
      title: `${county.county} EV Grants 2025 – SEAI Support & Local Installers`,
      description: `Complete guide to EV grants in ${county.county}, Ireland. Local installers, SEAI grants, and application process.`,
      type: 'website',
      locale: 'en_IE',
      url: `https://www.irishgrants.org/ireland/${county.slug}/ev-grants/`,
      siteName: 'Irish Grants Hub',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${county.county} EV Grants 2025 – SEAI Support & Local Installers`,
      description: `Complete guide to EV grants in ${county.county}, Ireland. Local installers, SEAI grants, and application process.`,
    },
  }
}

export default function CountyEVGrantsPage({ params }: { params: { slug: string } }) {
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
      <section className="bg-gradient-to-br from-primary-50 to-green-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-primary-600 mb-4">
              <Car className="w-5 h-5" />
              <span className="font-medium">EV Grants</span>
              <span className="text-navy-400">•</span>
              <span className="font-medium">{county.county}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              EV Grants in {county.county}, Ireland
            </h1>
            
            <p className="text-lg sm:text-xl text-navy-700 mb-6 sm:mb-8 leading-relaxed">
              Get up to <strong>€5,000</strong> towards your new electric vehicle with Ireland's most popular EV grant. 
              While grants are national, we provide local guidance specific to {county.county}.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3">
                <Euro className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm sm:text-base">Up to €5,000</div>
                  <div className="text-xs sm:text-sm text-navy-600">EV Grant</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Euro className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm sm:text-base">Up to €600</div>
                  <div className="text-xs sm:text-sm text-navy-600">Home Charger Grant</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm sm:text-base">Ongoing</div>
                  <div className="text-xs sm:text-sm text-navy-600">Application Period</div>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">EV Grants in {county.county}</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-navy-700 leading-relaxed mb-6">
                {county.ev_adoption_rate} This reflects the growing interest in electric vehicles across {county.county}, 
                supported by Ireland's national SEAI (Sustainable Energy Authority of Ireland) grant programs.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The SEAI EV Grant and Home Charger Grant are available to all Irish residents, including those in {county.county}. 
                These grants make electric vehicles more accessible and help reduce the upfront cost of going electric.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Local Providers Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">SEAI-Approved Installers in {county.county}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {county.top_ev_installers.map((installer, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Car className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-navy-900 mb-2">
                        {installer.name}
                      </h3>
                      <p className="text-navy-700 mb-3 text-sm">
                        {installer.tagline}
                      </p>
                      <a 
                        href={installer.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
                  <p className="text-yellow-700 text-sm">
                    All installers listed are SEAI-approved for EV charger installations. Always verify current approval status 
                    directly with SEAI and the installer before proceeding with any installation.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">How to Apply for EV Grants in {county.county}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-4">National Application Process</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Apply before purchasing your vehicle</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Choose from SEAI-approved vehicle list</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Dealer deducts grant at point of sale</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Processing time: 2-4 weeks</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Local Support in {county.county}</h3>
                <p className="text-navy-700 mb-4">
                  While the application process is national, {county.county} residents benefit from:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Local SEAI-approved installers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Regional dealer network</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Local installation support</span>
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
              Ready to Go Electric in {county.county}?
            </h2>
            <p className="text-lg text-navy-700 mb-8 max-w-2xl mx-auto">
              Get started with your EV grant application and find local approved installers in {county.county}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/grants/ev/seai-ev-grant" 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center"
              >
                <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Apply for EV Grant
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
              <Link 
                href="/grants/ev/seai-home-charger-grant" 
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Home Charger Grant
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQs Section */}
      <FAQ 
        faqs={county.local_faqs}
        title={`EV Grants in ${county.county} - Frequently Asked Questions`}
        description={`Common questions about EV grants and local services in ${county.county}, Ireland.`}
      />

      {/* Disclaimer Section */}
      <section className="section-padding bg-yellow-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-yellow-200">
              <h2 className="text-xl font-bold text-navy-900 mb-4">Important Disclaimer</h2>
              <p className="text-navy-700 leading-relaxed">
                Irish Grants Hub is an independent informational website and is not an official government body. 
                We are not affiliated with SEAI, any government agency, or grant providers. Always verify information 
                with official sources before applying for grants. Installer information is provided for reference only 
                and should be verified directly with SEAI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

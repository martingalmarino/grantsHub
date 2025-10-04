import Link from 'next/link'
import { Car, Euro, Clock, CheckCircle, AlertCircle, ExternalLink, ArrowRight } from 'lucide-react'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import JSONLDSchema from '@/components/JSONLDSchema'
import RealEVExamples from '@/components/RealEVExamples'
import GrantDeadlines from '@/components/GrantDeadlines'
import ContentVerification from '@/components/ContentVerification'
import { evExamples, grantDeadlines } from '@/data/grants-data'

export const metadata = {
  title: 'SEAI EV Grant: How to Apply in 2025 (Step-by-Step Guide) | Irish Grants Hub',
  description: 'Complete guide to the SEAI EV grant in Ireland. Get up to €5,000 towards your electric vehicle. Eligibility, application process, and expert tips for 2025.',
  keywords: 'SEAI EV grant, electric vehicle grant Ireland, EV grant application, SEAI grant 2025',
  alternates: {
    canonical: 'https://www.irishgrants.org/grants/ev/seai-ev-grant/',
  },
}

export default function SEAIEVGrantPage() {
  const steps = [
    {
      number: 1,
      title: "Check Your Eligibility",
      description: "Verify you meet the basic requirements before starting your application.",
      details: [
        "You must be a resident of Ireland",
        "Vehicle must be on the approved list",
        "Purchase must be from an approved dealer",
        "Vehicle must be new (not used)"
      ]
    },
    {
      number: 2,
      title: "Choose Your Vehicle",
      description: "Select from the list of approved electric vehicles that qualify for the grant.",
      details: [
        "Check the official SEAI approved vehicle list",
        "Consider your budget and needs",
        "Compare different models and their grant amounts",
        "Book a test drive with approved dealers"
      ]
    },
    {
      number: 3,
      title: "Gather Required Documents",
      description: "Prepare all necessary paperwork before submitting your application.",
      details: [
        "Proof of Irish residency (utility bill, bank statement)",
        "Vehicle purchase agreement or invoice",
        "Dealer confirmation of SEAI approval",
        "Your PPS number"
      ]
    },
    {
      number: 4,
      title: "Submit Your Application",
      description: "Complete the online application form with all required information.",
      details: [
        "Create your SEAI account online",
        "Fill out the application form completely",
        "Upload all required documents",
        "Submit before taking delivery of the vehicle"
      ]
    },
    {
      number: 5,
      title: "Wait for Approval",
      description: "SEAI will review your application and notify you of the decision.",
      details: [
        "Processing typically takes 2-4 weeks",
        "You'll receive email confirmation",
        "Check your application status online",
        "Don't take vehicle delivery until approved"
      ]
    },
    {
      number: 6,
      title: "Complete Your Purchase",
      description: "Finalize your vehicle purchase and claim your grant.",
      details: [
        "Take delivery of your approved vehicle",
        "Submit final documentation to SEAI",
        "Grant payment processed within 2 weeks",
        "Enjoy your new electric vehicle!"
      ]
    }
  ]

  const grantFAQs = [
    {
      question: "How much can I get from the SEAI EV grant?",
      answer: "The grant amount varies by vehicle type. Battery electric vehicles (BEVs) can get up to €5,000, while plug-in hybrid electric vehicles (PHEVs) can get up to €2,500. The exact amount depends on the vehicle's battery capacity and retail price."
    },
    {
      question: "Can I apply for the grant after buying the car?",
      answer: "No, you must apply for the grant before taking delivery of the vehicle. The application must be submitted and approved before you complete your purchase. This is a strict requirement that cannot be waived."
    },
    {
      question: "What vehicles are eligible for the SEAI EV grant?",
      answer: "Only new electric vehicles from approved dealers are eligible. The vehicle must be on SEAI's official approved list, which includes most major EV brands. Used vehicles, imports, and vehicles from non-approved dealers are not eligible."
    },
    {
      question: "How long does the application process take?",
      answer: "SEAI typically processes applications within 2-4 weeks. However, during peak periods (like year-end), processing may take longer. It's recommended to apply as soon as you've chosen your vehicle to avoid delays."
    },
    {
      question: "Can I combine the EV grant with other incentives?",
      answer: "Yes! You can combine the SEAI EV grant with the home charger grant (up to €600), VRT relief, and other local incentives. Some dealers also offer additional discounts when using the grant."
    },
    {
      question: "What if my application is rejected?",
      answer: "If your application is rejected, SEAI will provide a reason. Common issues include incomplete documentation, ineligible vehicles, or missing deadlines. You can reapply if you address the issues, but you must do so before taking delivery of the vehicle."
    }
  ]

  const commonMistakes = [
    "Applying after taking delivery of the vehicle",
    "Choosing a vehicle not on the approved list",
    "Incomplete or incorrect documentation",
    "Missing the application deadline",
    "Not checking dealer approval status",
    "Forgetting to include PPS number"
  ]

  const relatedGrants = [
    {
      title: "SEAI Home Charger Grant",
      description: "Get up to €600 towards installing a home EV charger",
      href: "/grants/ev/seai-home-charger-grant",
      amount: "Up to €600"
    },
    {
      title: "VRT Relief for EVs",
      description: "Reduced Vehicle Registration Tax for electric vehicles",
      href: "#",
      amount: "Up to €5,000"
    }
  ]

  return (
    <>
      <JSONLDSchema 
        type="Article" 
        data={{
          title: "SEAI EV Grant: How to Apply in 2025 (Step-by-Step Guide)",
          description: "Complete guide to the SEAI EV grant in Ireland. Get up to €5,000 towards your electric vehicle.",
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString().split('T')[0],
          url: "https://www.irishgrants.org/grants/ev/seai-ev-grant"
        }} 
      />
      
      <JSONLDSchema 
        type="FAQ" 
        data={grantFAQs} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-primary-600 mb-4">
              <Car className="w-5 h-5" />
              <span className="font-medium">EV Grants</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              SEAI EV Grant: How to Apply in 2025
            </h1>
            
            <p className="text-lg sm:text-xl text-navy-700 mb-6 sm:mb-8 leading-relaxed">
              Get up to <strong>€5,000</strong> towards your new electric vehicle with Ireland's most popular EV grant. 
              Our step-by-step guide makes the application process simple and stress-free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3">
                <Euro className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm sm:text-base">Up to €5,000</div>
                  <div className="text-xs sm:text-sm text-navy-600">Grant amount</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm sm:text-base">2-4 weeks</div>
                  <div className="text-xs sm:text-sm text-navy-600">Processing time</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900 text-sm sm:text-base">Ongoing</div>
                  <div className="text-xs sm:text-sm text-navy-600">Application period</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-1">Important Update for 2025</h3>
                  <p className="text-yellow-700 text-sm">
                    Grant amounts and eligibility criteria may change. Always check the official SEAI website for the most current information before applying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Grant Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">What is the SEAI EV Grant?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-navy-700 leading-relaxed mb-6">
                The SEAI (Sustainable Energy Authority of Ireland) EV Grant is a government incentive designed to 
                encourage the adoption of electric vehicles in Ireland. This grant provides financial support to 
                individuals purchasing new electric vehicles, making sustainable transportation more accessible 
                and affordable.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The grant is part of Ireland's commitment to reducing carbon emissions and achieving climate targets. 
                By supporting EV adoption, the government aims to accelerate the transition to cleaner transportation 
                while helping citizens save money on their vehicle purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-4">You Must:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Be a resident of Ireland</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Purchase a new electric vehicle</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Buy from an approved SEAI dealer</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Apply before taking delivery</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Vehicle Must:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Be on the approved vehicle list</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Be battery electric or plug-in hybrid</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Meet minimum battery capacity requirements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Be purchased for personal use</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Amounts Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Grant Amounts & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900">Battery Electric Vehicles (BEV)</h3>
                    <p className="text-primary-600 font-bold text-2xl">Up to €5,000</p>
                  </div>
                </div>
                <p className="text-navy-700">
                  Pure electric vehicles with no internal combustion engine. 
                  These vehicles qualify for the highest grant amounts.
                </p>
              </div>
              
              <div className="card">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Car className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900">Plug-in Hybrid (PHEV)</h3>
                    <p className="text-blue-600 font-bold text-2xl">Up to €2,500</p>
                  </div>
                </div>
                <p className="text-navy-700">
                  Hybrid vehicles that can be charged externally. 
                  Grant amount depends on battery capacity and vehicle price.
                </p>
              </div>
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Related Grants You Can Combine</h2>
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
        title="SEAI EV Grant FAQs"
        description="Get answers to the most common questions about the SEAI EV grant application process."
      />

      {/* Real EV Examples */}
      <RealEVExamples
        evs={evExamples}
        title="Real EV Examples with SEAI Grant"
        description="See actual electric vehicles available with the SEAI grant, including real prices, grant amounts, and your final cost."
      />

      {/* Grant Deadlines */}
      <GrantDeadlines
        deadlines={grantDeadlines.filter(deadline => 
          deadline.grantType.includes('SEAI')
        )}
        title="Current SEAI Grant Information"
      />

      {/* Content Verification */}
      <ContentVerification />

      {/* Final CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Learn More About EV Grants?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore more information about EV grants and related programs. 
            Stay informed about all available options for electric vehicle adoption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA
              type="ev-grant"
              title="Learn About Home Charger Grants"
              description="Get comprehensive information about SEAI home charger grants and installation requirements."
              buttonText="Read Home Charger Guide"
              buttonHref="/grants/ev/seai-home-charger-grant"
            />
            <CTA
              type="quote"
              title="Explore All EV Grants"
              description="View all available EV grants and funding options in Ireland."
              buttonText="View All EV Grants"
              buttonHref="/grants/ev"
            />
          </div>
        </div>
      </section>
    </>
  )
}

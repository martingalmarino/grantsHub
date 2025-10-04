import { Calculator, Car, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import EVGrantEstimator from '@/components/EVGrantEstimator'
import FAQ from '@/components/FAQ'
import JSONLDSchema from '@/components/JSONLDSchema'

export const metadata = {
  title: 'EV Grant Calculator Ireland 2025 - Calculate Your Savings | Irish Grants Hub',
  description: 'Free EV grant calculator for Ireland. Calculate how much you could save with SEAI EV grants up to €5,000. Get instant estimates for your electric vehicle purchase.',
  keywords: 'EV grant calculator Ireland, SEAI grant calculator, electric vehicle grant calculator, EV savings calculator',
  alternates: {
    canonical: 'https://www.irishgrants.org/grants/ev/seai-ev-grant/',
  },
  robots: {
    index: false, // Prevent indexing to avoid duplicate content
    follow: true,
  },
}

export default function EVGrantCalculatorPage() {
  // FAQ data for the calculator page
  const calculatorFAQs = [
    {
      question: "How accurate is the EV grant calculator?",
      answer: "Our calculator provides estimates based on current SEAI grant amounts. Final grant amounts depend on your chosen vehicle's eligibility and SEAI approval. Always verify with official SEAI sources before making a purchase."
    },
    {
      question: "What factors affect EV grant amounts?",
      answer: "Grant amounts depend on vehicle price, battery capacity, and whether it's a battery electric vehicle (BEV) or plug-in hybrid (PHEV). Higher-priced vehicles generally qualify for larger grants up to the €5,000 maximum."
    },
    {
      question: "Can I use this calculator for any electric vehicle?",
      answer: "The calculator works for any EV price range, but actual grants only apply to vehicles on SEAI's approved list. Check the official SEAI vehicle list to confirm your chosen vehicle qualifies for grants."
    },
    {
      question: "How often are grant amounts updated?",
      answer: "SEAI grant amounts can change annually. Our calculator reflects current 2025 amounts, but always check the official SEAI website for the most up-to-date information before applying."
    },
    {
      question: "What's the maximum EV grant in Ireland?",
      answer: "The maximum SEAI EV grant is €5,000 for eligible battery electric vehicles. Plug-in hybrid vehicles can receive up to €2,500, depending on battery capacity and vehicle specifications."
    }
  ]

  // Calculator schema for JSON-LD
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "Calculator",
    "name": "EV Grant Calculator Ireland",
    "description": "Calculate your potential savings with SEAI electric vehicle grants in Ireland",
    "url": "https://www.irishgrants.org/tools/ev-grant-calculator/",
    "provider": {
      "@type": "Organization",
      "name": "Irish Grants Hub",
      "url": "https://www.irishgrants.org"
    },
    "potentialAction": {
      "@type": "CalculateAction",
      "target": "https://www.irishgrants.org/tools/ev-grant-calculator/",
      "result": {
        "@type": "QuantitativeValue",
        "unitCode": "EUR",
        "description": "Estimated EV grant amount"
      }
    }
  }

  return (
    <>
      <JSONLDSchema type="FAQ" data={calculatorFAQs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchema, null, 2)
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
              <Calculator className="w-5 h-5" />
              <span className="font-medium">Free Calculator</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              EV Grant Calculator Ireland 2025
            </h1>
            
            <p className="text-lg sm:text-xl text-navy-700 mb-6 sm:mb-8 leading-relaxed">
              Calculate how much you could save with Ireland's SEAI electric vehicle grants. 
              Get instant estimates for grants up to <strong>€5,000</strong> on your new EV purchase.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/grants/ev/seai-ev-grant" 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center"
              >
                <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Learn About EV Grants
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <EVGrantEstimator 
              showTitle={false}
            />
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 text-center">
              About EV Grants in Ireland
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  Who Provides EV Grants?
                </h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  The Sustainable Energy Authority of Ireland (SEAI) administers EV grants on behalf of the Irish government. 
                  Grants are funded by the Department of Transport and aim to accelerate EV adoption in Ireland.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  Grant Eligibility
                </h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  You must be an Irish resident purchasing a new electric vehicle from an approved dealer. 
                  The vehicle must be on SEAI's approved list and meet minimum battery capacity requirements.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Important Note
              </h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                This calculator provides estimates only. Final grant amounts depend on vehicle eligibility, 
                SEAI approval, and current grant policies. Always verify information with official SEAI sources 
                before making any purchase decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        faqs={calculatorFAQs}
        title="EV Grant Calculator - Frequently Asked Questions"
        description="Common questions about using our EV grant calculator and understanding grant amounts."
      />

      {/* CTA Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Apply for Your EV Grant?
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Get comprehensive information about the SEAI EV grant application process, 
            eligibility requirements, and expert tips for success.
          </p>
          <Link 
            href="/grants/ev/seai-ev-grant" 
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center"
          >
            <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Complete EV Grant Guide
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}

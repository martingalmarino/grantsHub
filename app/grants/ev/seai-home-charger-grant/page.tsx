import Link from 'next/link'
import { Home, Euro, Clock, CheckCircle, AlertCircle, ExternalLink, ArrowRight, Zap } from 'lucide-react'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'
import JSONLDSchema from '@/components/JSONLDSchema'

export const metadata = {
  title: 'SEAI Home Charger Grant: Install EV Charger for €600 | Irish Grants Hub',
  description: 'Complete guide to the SEAI home charger grant in Ireland. Get up to €600 towards installing a home EV charger. Eligibility, installation process, and expert tips.',
  keywords: 'SEAI home charger grant, EV charger installation Ireland, home charger grant, EV charging grant',
}

export default function SEAIHomeChargerGrantPage() {
  const steps = [
    {
      number: 1,
      title: "Check Your Eligibility",
      description: "Verify you meet the requirements for the home charger grant.",
      details: [
        "You must own or rent the property",
        "Property must have off-street parking",
        "You must have an eligible electric vehicle",
        "Charger must be installed by approved installer"
      ]
    },
    {
      number: 2,
      title: "Choose Your Charger",
      description: "Select from approved home charger models that qualify for the grant.",
      details: [
        "Check the official SEAI approved charger list",
        "Consider your vehicle's charging requirements",
        "Choose between 7kW and 22kW options",
        "Factor in installation costs and requirements"
      ]
    },
    {
      number: 3,
      title: "Find an Approved Installer",
      description: "Locate a certified installer in your area.",
      details: [
        "Use SEAI's installer directory",
        "Get multiple quotes for comparison",
        "Verify installer certification",
        "Check reviews and references"
      ]
    },
    {
      number: 4,
      title: "Get a Quote",
      description: "Obtain a detailed quote including installation costs.",
      details: [
        "Request written quotes from installers",
        "Ensure quote includes all costs",
        "Check for any additional fees",
        "Compare quotes before deciding"
      ]
    },
    {
      number: 5,
      title: "Apply for the Grant",
      description: "Submit your grant application before installation begins.",
      details: [
        "Create your SEAI account online",
        "Fill out the application form",
        "Upload required documents",
        "Submit before installation starts"
      ]
    },
    {
      number: 6,
      title: "Installation & Claim",
      description: "Complete the installation and claim your grant.",
      details: [
        "Schedule installation with approved installer",
        "Ensure installation meets SEAI standards",
        "Submit final documentation",
        "Receive grant payment within 2 weeks"
      ]
    }
  ]

  const grantFAQs = [
    {
      question: "How much can I get from the SEAI home charger grant?",
      answer: "The grant provides up to €600 towards the cost of purchasing and installing a home EV charger. The exact amount depends on the total cost of the installation, but the maximum grant is €600."
    },
    {
      question: "What types of chargers are eligible for the grant?",
      answer: "Only chargers from SEAI's approved list are eligible. This includes 7kW and 22kW home chargers from approved manufacturers. The charger must be installed by a certified installer and meet all safety standards."
    },
    {
      question: "Do I need to own an electric vehicle to apply?",
      answer: "Yes, you must own or have ordered an eligible electric vehicle to qualify for the home charger grant. The grant is designed to support EV owners with home charging infrastructure."
    },
    {
      question: "Can I install the charger myself?",
      answer: "No, the charger must be installed by a SEAI-approved installer. This ensures the installation meets all safety standards and electrical regulations. DIY installations are not eligible for the grant."
    },
    {
      question: "How long does the application process take?",
      answer: "SEAI typically processes home charger grant applications within 2-4 weeks. However, you must apply before installation begins, so plan accordingly with your installer."
    },
    {
      question: "Can I combine this grant with other incentives?",
      answer: "Yes, you can combine the home charger grant with the SEAI EV grant and other local incentives. Some electricity suppliers also offer additional rebates for EV charging installations."
    }
  ]

  const chargerTypes = [
    {
      type: "7kW Charger",
      description: "Standard home charger suitable for most EVs",
      grantAmount: "Up to €600",
      installationTime: "2-4 hours",
      suitableFor: "Most electric vehicles, overnight charging"
    },
    {
      type: "22kW Charger",
      description: "Faster charger for compatible vehicles",
      grantAmount: "Up to €600",
      installationTime: "4-6 hours",
      suitableFor: "Compatible EVs, faster charging times"
    }
  ]

  const commonMistakes = [
    "Installing charger before grant approval",
    "Using non-approved installer",
    "Choosing charger not on approved list",
    "Not having off-street parking",
    "Incomplete documentation",
    "Missing application deadline"
  ]

  return (
    <>
      <JSONLDSchema 
        type="Article" 
        data={{
          title: "SEAI Home Charger Grant: Install EV Charger for €600",
          description: "Complete guide to the SEAI home charger grant in Ireland. Get up to €600 towards installing a home EV charger.",
          datePublished: "2025-01-01",
          dateModified: new Date().toISOString().split('T')[0],
          url: "https://www.irishgrants.org/grants/ev/seai-home-charger-grant"
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
              <Home className="w-5 h-5" />
              <span className="font-medium">EV Grants</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              SEAI Home Charger Grant: Install EV Charger for €600
            </h1>
            
            <p className="text-xl text-navy-700 mb-8 leading-relaxed">
              Get up to <strong>€600</strong> towards installing a home EV charger. 
              Make charging your electric vehicle convenient and affordable with Ireland's home charger grant.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Euro className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900">Up to €600</div>
                  <div className="text-sm text-navy-600">Grant amount</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900">2-4 weeks</div>
                  <div className="text-sm text-navy-600">Processing time</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600" />
                <div>
                  <div className="font-semibold text-navy-900">Ongoing</div>
                  <div className="text-sm text-navy-600">Application period</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1">Perfect for EV Owners</h3>
                  <p className="text-blue-700 text-sm">
                    This grant is designed to work alongside the SEAI EV grant, making your transition to electric vehicles even more affordable.
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
            <h2 className="text-3xl font-bold text-navy-900 mb-6">What is the SEAI Home Charger Grant?</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-navy-700 leading-relaxed mb-6">
                The SEAI Home Charger Grant provides financial support for installing electric vehicle charging points at your home. 
                This grant makes it more affordable to set up convenient home charging infrastructure, encouraging the adoption 
                of electric vehicles across Ireland.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Home charging is often the most convenient and cost-effective way to charge your electric vehicle. 
                With this grant, you can install a professional charging point that's faster and safer than using a standard 
                household socket.
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
                    <span className="text-navy-700">Own or rent the property</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Have off-street parking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Own an eligible electric vehicle</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Use an approved installer</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Property Must:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Have suitable electrical supply</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Allow safe installation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Meet building regulations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Have accessible parking area</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charger Types Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Types of Home Chargers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {chargerTypes.map((charger, index) => (
                <div key={index} className="card">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy-900">{charger.type}</h3>
                      <p className="text-primary-600 font-bold">{charger.grantAmount}</p>
                    </div>
                  </div>
                  <p className="text-navy-700 mb-4">{charger.description}</p>
                  <div className="space-y-2 text-sm text-navy-600">
                    <div className="flex justify-between">
                      <span>Installation time:</span>
                      <span className="font-medium">{charger.installationTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Suitable for:</span>
                      <span className="font-medium">{charger.suitableFor}</span>
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

      {/* FAQ Section */}
      <FAQ 
        faqs={grantFAQs}
        title="SEAI Home Charger Grant FAQs"
        description="Get answers to the most common questions about the SEAI home charger grant application process."
      />

      {/* Final CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Learn More About Home Charger Grants?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore more information about home charger grants and EV funding options. 
            Stay informed about all available programs for electric vehicle adoption.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA
              type="ev-grant"
              title="Learn About EV Grants"
              description="Get comprehensive information about SEAI EV grants and vehicle purchase funding."
              buttonText="Read EV Grant Guide"
              buttonHref="/grants/ev/seai-ev-grant"
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

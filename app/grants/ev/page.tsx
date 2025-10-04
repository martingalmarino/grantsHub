import Link from 'next/link'
import { Car, Euro, Clock, CheckCircle, ArrowRight, Zap, Home } from 'lucide-react'
import GuideCard from '@/components/GuideCard'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'EV Grants Ireland 2025 - SEAI Electric Vehicle Funding | Irish Grants Hub',
  description: 'Complete guide to EV grants in Ireland. Get up to €5,000 for electric vehicles and €600 for home chargers. SEAI grants, eligibility, and application process.',
  keywords: 'EV grants Ireland, SEAI EV grant, electric vehicle grants, home charger grant, EV funding Ireland',
  alternates: {
    canonical: 'https://www.irishgrants.org/grants/ev/',
  },
}

export default function EVGrantsPage() {
  const evGrants = [
    {
      title: "SEAI EV Grant",
      description: "Get up to €5,000 towards your new electric vehicle purchase. Learn eligibility requirements, application process, and tips for success.",
      href: "/grants/ev/seai-ev-grant",
      category: "ev" as const,
      amount: "Up to €5,000",
      deadline: "Ongoing",
      difficulty: "Easy" as const
    },
    {
      title: "SEAI Home Charger Grant",
      description: "Install a home EV charger with up to €600 in government support. Complete guide to eligibility and installation process.",
      href: "/grants/ev/seai-home-charger-grant",
      category: "ev" as const,
      amount: "Up to €600",
      deadline: "Ongoing",
      difficulty: "Easy" as const
    }
  ]

  const benefits = [
    {
      icon: Euro,
      title: "Significant Savings",
      description: "Save thousands on your electric vehicle purchase and home charging setup"
    },
    {
      icon: Zap,
      title: "Lower Running Costs",
      description: "Electric vehicles cost significantly less to run than petrol or diesel cars"
    },
    {
      icon: Home,
      title: "Convenient Charging",
      description: "Home charging makes EV ownership practical and convenient"
    }
  ]

  const eligibility = [
    "Resident of Ireland or EU/EEA",
    "Purchase from approved SEAI dealer",
    "New electric vehicle (not used)",
    "Apply before taking delivery",
    "Off-street parking for home charger"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
              <Car className="w-6 h-6" />
              <span className="font-medium">EV Grants</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              EV Grants Ireland 2025
            </h1>
            
            <p className="text-xl text-navy-700 mb-8 leading-relaxed">
              Get up to <strong>€5,000</strong> towards your electric vehicle and <strong>€600</strong> for home charging. 
              Make the switch to electric with Ireland's generous EV grant programs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Euro className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-navy-900">Up to €5,600</div>
                  <div className="text-sm text-navy-600">Total potential savings</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-navy-900">2-4 weeks</div>
                  <div className="text-sm text-navy-600">Processing time</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-primary-600" />
                <div className="text-left">
                  <div className="font-semibold text-navy-900">Ongoing</div>
                  <div className="text-sm text-navy-600">Application period</div>
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
              Available EV Grants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {evGrants.map((grant, index) => (
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
              Why Choose Electric?
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

      {/* Eligibility Section */}
      <section className="section-padding">
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
              <strong>Note:</strong> Specific requirements may vary by grant. 
              Check individual grant guides for detailed eligibility criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              How to Apply for EV Grants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Check Eligibility</h3>
                <p className="text-navy-700 text-sm">Verify you meet the basic requirements</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Choose Vehicle</h3>
                <p className="text-navy-700 text-sm">Select from approved EV models</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Apply Online</h3>
                <p className="text-navy-700 text-sm">Submit your grant application</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Get Approved</h3>
                <p className="text-navy-700 text-sm">Receive your grant and enjoy your EV</p>
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
              type="ev-grant"
              title="Learn About EV Grants"
              description="Get comprehensive information about SEAI EV grants and vehicle purchase funding options."
              buttonText="Read EV Grant Guide"
              buttonHref="/grants/ev/seai-ev-grant"
              secondaryButtonText="View All EV Grants"
              secondaryButtonHref="/grants/ev"
            />
            
            <CTA
              type="quote"
              title="Learn About Home Charger Grants"
              description="Get detailed information about SEAI home charger grants and installation requirements."
              buttonText="Read Home Charger Guide"
              buttonHref="/grants/ev/seai-home-charger-grant"
              secondaryButtonText="View All EV Grants"
              secondaryButtonHref="/grants/ev"
            />
          </div>
        </div>
      </section>
    </>
  )
}

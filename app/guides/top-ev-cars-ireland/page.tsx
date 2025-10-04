import Link from 'next/link'
import { Car, TrendingUp, CheckCircle, Euro, ArrowRight, ExternalLink, Award, Zap } from 'lucide-react'
import EVGrantEstimator from '@/components/EVGrantEstimator'
import FAQ from '@/components/FAQ'
import JSONLDSchema from '@/components/JSONLDSchema'
import evData from '@/data/ev-top-models.json'

export const metadata = {
  title: 'Top Electric Cars in Ireland 2025 – Best-Selling EVs & Grant Eligibility | Irish Grants Hub',
  description: 'Discover the most popular EVs in Ireland in 2024–2025, see which models qualify for SEAI grants up to €3,500, and calculate your savings.',
  keywords: 'top electric cars Ireland, best EVs Ireland 2025, SEAI grant eligible cars, Tesla Model 3 Ireland, Volkswagen ID.4 Ireland',
  alternates: {
    canonical: 'https://www.irishgrants.org/guides/top-ev-cars-ireland/',
  },
  openGraph: {
    title: 'Top Electric Cars in Ireland 2025 – Best-Selling EVs & Grant Eligibility',
    description: 'Discover the most popular EVs in Ireland in 2024–2025, see which models qualify for SEAI grants, and calculate your savings.',
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.irishgrants.org/guides/top-ev-cars-ireland/',
    siteName: 'Irish Grants Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Electric Cars in Ireland 2025 – Best-Selling EVs & Grant Eligibility',
    description: 'Discover the most popular EVs in Ireland in 2024–2025, see which models qualify for SEAI grants, and calculate your savings.',
  },
}

export default function TopEVCarsIrelandPage() {
  // FAQ data for the page
  const pageFAQs = [
    {
      question: "Which electric cars qualify for SEAI grants?",
      answer: "Most electric vehicles qualify for the SEAI EV Grant of up to €3,500 if their list price is €60,000 or less. The top-selling models like Tesla Model 3, Volkswagen ID.4, and Kia EV6 all qualify for the maximum grant amount."
    },
    {
      question: "What is the best-selling EV in Ireland in 2025?",
      answer: "Based on early 2025 data, the Volkswagen ID.4 has led several months in registrations, while the Tesla Model 3 topped sales in June 2025. Both models consistently rank among the most popular EVs in Ireland."
    },
    {
      question: "Are there additional incentives for EV buyers in Dublin or Cork?",
      answer: "While there are no additional local grants, Dublin and Cork residents benefit from extensive charging infrastructure and multiple SEAI-approved installers. The national SEAI grants apply equally across all counties in Ireland."
    },
    {
      question: "How much can I save with SEAI grants on popular EVs?",
      answer: "You can save up to €3,500 on qualifying EVs with the SEAI grant, plus an additional €300 with the Home Charger Grant. This means popular models like the Tesla Model 3 or Volkswagen ID.4 could cost €3,500 less than their list price."
    },
    {
      question: "What's the price range of top-selling EVs in Ireland?",
      answer: "The most popular EVs in Ireland range from €30,000 (MG ZS EV) to €75,000 (BMW iX3). Most top-selling models fall in the €45,000-€60,000 range, making them eligible for the maximum SEAI grant of €3,500."
    }
  ]

  // Article schema for JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Top Electric Cars in Ireland 2025 – Best-Selling EVs & Grant Eligibility",
    "description": "Discover the most popular EVs in Ireland in 2024–2025, see which models qualify for SEAI grants, and calculate your savings.",
    "author": {
      "@type": "Organization",
      "name": "Irish Grants Hub"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Irish Grants Hub",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.irishgrants.org/logo.png"
      }
    },
    "datePublished": "2025-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.irishgrants.org/guides/top-ev-cars-ireland/"
    }
  }

  return (
    <>
      <JSONLDSchema type="Article" data={articleSchema} />
      <JSONLDSchema type="FAQ" data={pageFAQs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema, null, 2)
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-green-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
              <Car className="w-5 h-5" />
              <span className="font-medium">EV Market Analysis</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Top Electric Cars in Ireland (2024–2025)
            </h1>
            
            <p className="text-lg sm:text-xl text-navy-700 mb-6 sm:mb-8 leading-relaxed">
              Ireland's electric vehicle market is experiencing unprecedented growth, with EV adoption rates 
              reaching new heights. Discover the most popular models and see which qualify for generous 
              <strong> SEAI grants up to €3,500</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/grants/ev/seai-ev-grant" 
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center"
              >
                <Euro className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Learn About EV Grants
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
              <Link 
                href="/tools/ev-grant-calculator" 
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Calculate Your Savings
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8 text-center">
              Ireland's EV Market Growth
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-lg p-6 border border-primary-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">2024 BEV Registrations</h3>
                    <p className="text-2xl font-bold text-primary-600">{evData.stats[2024].totalBEVs.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-sm text-navy-700">
                  New battery electric vehicles registered in Ireland
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Market Share</h3>
                    <p className="text-2xl font-bold text-blue-600">{evData.stats[2024].marketShare}</p>
                  </div>
                </div>
                <p className="text-sm text-navy-700">
                  Percentage of all new car registrations
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900">Year-on-Year Growth</h3>
                    <p className="text-2xl font-bold text-green-600">{evData.stats[2024].yearOnYearGrowth}</p>
                  </div>
                </div>
                <p className="text-sm text-navy-700">
                  Increase in EV sales compared to previous year
                </p>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <TrendingUp className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">2025 Outlook</h4>
                  <p className="text-yellow-700 text-sm">
                    Early 2025 data shows continued strong growth with {evData.stats[2025].earlyYearGrowth} increase 
                    year-on-year. Projected total of {evData.stats[2025].projectedTotal.toLocaleString()} new BEV registrations expected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top EV Models 2024 Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8 text-center">
              Top EV Models in 2024
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {evData.topModels2024.map((model, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-bold text-sm">#{model.rank}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-900">{model.model}</h3>
                        <p className="text-sm text-gray-600">{model.category}</p>
                      </div>
                    </div>
                    {model.seaiEligible && (
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-green-600 font-medium">SEAI Eligible</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Price Range:</span>
                      <span className="text-sm font-medium text-navy-900">{model.priceRange}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Range:</span>
                      <span className="text-sm font-medium text-navy-900">{model.batteryRange}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">SEAI Grant:</span>
                      <span className="text-sm font-medium text-green-600">{model.grantAmount}</span>
                    </div>
                  </div>

                  <p className="text-sm text-navy-700 leading-relaxed">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rising Models 2025 Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8 text-center">
              Rising EV Models in 2025
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {evData.risingModels2025.map((model, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm">#{model.rank}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-navy-900">{model.model}</h3>
                        <p className="text-sm text-blue-600 font-medium">{model.performance}</p>
                      </div>
                    </div>
                    {model.seaiEligible && (
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-green-600 font-medium">SEAI Eligible</span>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-600">Category:</span>
                      <p className="text-sm font-medium text-navy-900">{model.category}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600">Price Range:</span>
                      <p className="text-sm font-medium text-navy-900">{model.priceRange}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grant Eligibility Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 text-center">
              Grant Eligibility for Popular EVs
            </h2>
            
            <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center">
                    <Euro className="w-5 h-5 mr-2 text-primary-600" />
                    SEAI EV Grant
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-700">Up to <strong>€{evData.grantEligibility.maxGrant.replace('€', '').replace(',', '')}</strong> grant available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-700">Vehicles under <strong>{evData.grantEligibility.threshold}</strong> qualify</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-700">Most top-selling models eligible</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-blue-600" />
                    Home Charger Grant
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-700">Additional <strong>{evData.grantEligibility.homeChargerGrant}</strong> available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-700">Can be combined with EV grant</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-navy-700">Total savings up to <strong>€3,800</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-sm leading-relaxed">
                  <strong>Good news:</strong> {evData.grantEligibility.note}. {evData.grantEligibility.additionalSavings}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EV Grant Calculator Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                Estimate Your Grant for Any of These Models
              </h2>
              <p className="text-lg text-navy-700">
                Use our calculator to see how much you could save on your preferred EV
              </p>
            </div>
            
            <EVGrantEstimator 
              showTitle={false}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        faqs={pageFAQs}
        title="Top Electric Cars Ireland - Frequently Asked Questions"
        description="Common questions about the most popular EVs in Ireland and grant eligibility."
      />

      {/* Footer Note */}
      <section className="section-padding bg-yellow-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-yellow-200">
              <h2 className="text-xl font-bold text-navy-900 mb-4">Important Disclaimer</h2>
              <p className="text-navy-700 leading-relaxed">
                Irish Grants Hub is an independent informational website and is not an official government body. 
                We are not affiliated with SEAI, any government agency, or car manufacturers. Always verify information 
                with official sources before making any purchase decisions. Vehicle rankings and sales data are based on 
                publicly available information from SIMI and other official sources.
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">Sources & References</h3>
                <ul className="space-y-1">
                  {evData.sources.map((source, index) => (
                    <li key={index} className="text-sm text-navy-700">
                      • {source}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

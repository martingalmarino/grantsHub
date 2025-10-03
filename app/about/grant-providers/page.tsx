import Link from 'next/link'
import { Building2, ExternalLink, Shield, Users, Award, Globe, CheckCircle } from 'lucide-react'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Who Provides Grants in Ireland - Government Agencies & Funding Bodies | Irish Grants Hub',
  description: 'Learn about the official government agencies that provide and administer grants in Ireland. SEAI, Springboard+, HCI, and other funding bodies explained.',
  keywords: 'Irish government agencies, SEAI, Springboard+, HCI, grant providers Ireland, funding bodies Ireland',
}

export default function GrantProvidersPage() {
  const providers = [
    {
      name: "SEAI - Sustainable Energy Authority of Ireland",
      acronym: "SEAI",
      type: "Government Agency",
      website: "https://www.seai.ie",
      description: "The national authority for sustainable energy in Ireland, responsible for promoting and supporting sustainable energy practices.",
      grants: [
        "SEAI EV Grant (up to €5,000)",
        "SEAI Home Charger Grant (up to €600)",
        "Solar PV Grant",
        "Heat Pump Grant",
        "Home Energy Upgrade Grant"
      ],
      established: "2002",
      headquarters: "Dublin, Ireland",
      icon: Building2,
      color: "green"
    },
    {
      name: "Springboard+ Initiative",
      acronym: "Springboard+",
      type: "Government Initiative",
      website: "https://springboardcourses.ie",
      description: "A government initiative that provides free and subsidized higher education courses for upskilling and reskilling.",
      grants: [
        "Springboard+ Course Funding (90-100% subsidized)",
        "Part-time and full-time courses",
        "Certificate to Master's level programs",
        "Industry-focused training"
      ],
      established: "2011",
      headquarters: "Dublin, Ireland",
      icon: Award,
      color: "blue"
    },
    {
      name: "Human Capital Initiative",
      acronym: "HCI",
      type: "Government Program",
      website: "https://hea.ie/funding/human-capital-initiative",
      description: "A strategic government program focused on developing high-level skills in areas of strategic importance to Ireland's economy.",
      grants: [
        "HCI Master's Programs (up to 100% funded)",
        "Micro-credentials",
        "Professional development courses",
        "Advanced skills training"
      ],
      established: "2020",
      headquarters: "Dublin, Ireland",
      icon: Users,
      color: "purple"
    },
    {
      name: "Department of Further and Higher Education",
      acronym: "DFHERIS",
      type: "Government Department",
      website: "https://www.gov.ie/en/organisation/department-of-further-and-higher-education-research-innovation-and-science",
      description: "The government department responsible for further and higher education policy, research, and innovation in Ireland.",
      grants: [
        "Higher Education Authority funding",
        "Research and innovation grants",
        "Student support schemes",
        "Institutional funding"
      ],
      established: "2020",
      headquarters: "Dublin, Ireland",
      icon: Globe,
      color: "indigo"
    }
  ]

  const otherProviders = [
    {
      name: "Enterprise Ireland",
      description: "Government agency supporting Irish businesses and innovation",
      grants: ["Business development grants", "Innovation funding", "Export support"]
    },
    {
      name: "Local Enterprise Offices (LEOs)",
      description: "Local government offices providing business support and grants",
      grants: ["Start-up grants", "Business expansion funding", "Training grants"]
    },
    {
      name: "Údarás na Gaeltachta",
      description: "Government agency supporting businesses in Irish-speaking regions",
      grants: ["Gaeltacht business grants", "Employment grants", "Infrastructure funding"]
    },
    {
      name: "Western Development Commission",
      description: "Government agency promoting development in the western region",
      grants: ["Regional development funding", "Business support", "Tourism grants"]
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'blue':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'purple':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'indigo':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-50 to-primary-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
              <Building2 className="w-6 h-6" />
              <span className="font-medium">About Irish Grants</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Who Provides Grants in Ireland
            </h1>
            
            <p className="text-xl text-navy-700 mb-8 leading-relaxed">
              Learn about the official government agencies and organizations that fund and administer 
              grants in Ireland. Understanding who provides grants helps you navigate the system more effectively.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1">Official Government Sources</h3>
                  <p className="text-blue-700 text-sm">
                    All grants mentioned on our site are provided by official Irish government agencies. 
                    Always verify information with the relevant agency before applying.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Providers Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Primary Grant Providers
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {providers.map((provider, index) => (
                <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${getColorClasses(provider.color)}`}>
                      <provider.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-navy-900">
                          {provider.name}
                        </h3>
                        <a 
                          href={provider.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                          aria-label={`Visit ${provider.acronym} website`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-navy-600 mb-3">
                        <span className="font-medium">{provider.type}</span>
                        <span>•</span>
                        <span>Est. {provider.established}</span>
                        <span>•</span>
                        <span>{provider.headquarters}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-navy-700 mb-6 leading-relaxed">
                    {provider.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-3">Grants & Programs:</h4>
                    <ul className="space-y-2">
                      {provider.grants.map((grant, grantIndex) => (
                        <li key={grantIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-navy-700 text-sm">{grant}</span>
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

      {/* Other Providers Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Other Important Grant Providers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProviders.map((provider, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    {provider.name}
                  </h3>
                  <p className="text-navy-700 mb-4 text-sm">
                    {provider.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-2 text-sm">Grants:</h4>
                    <ul className="space-y-1">
                      {provider.grants.map((grant, grantIndex) => (
                        <li key={grantIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-navy-700 text-xs">{grant}</span>
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

      {/* How Grants Work Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              How Government Grants Work in Ireland
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">Government Funding</h3>
                <p className="text-navy-700 text-sm">
                  Grants are funded by the Irish government through various departments and agencies, 
                  using taxpayer money to support economic and social development.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">Agency Administration</h3>
                <p className="text-navy-700 text-sm">
                  Each grant is administered by specific government agencies that set eligibility criteria, 
                  process applications, and distribute funding.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">Public Benefit</h3>
                <p className="text-navy-700 text-sm">
                  Grants are designed to benefit the public by supporting education, sustainable energy, 
                  business development, and other strategic priorities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Sources Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Always Verify with Official Sources
            </h2>
            
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Important Disclaimer</h3>
              </div>
              
              <div className="space-y-4 text-navy-700">
                <p>
                  While we strive to provide accurate and up-to-date information, grant programs and 
                  eligibility criteria can change frequently. Always verify information with the 
                  official government agencies before making any decisions or applications.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">Key Points to Remember:</h4>
                  <ul className="space-y-1 text-yellow-700 text-sm">
                    <li>• Check official agency websites for current information</li>
                    <li>• Verify eligibility requirements directly with the agency</li>
                    <li>• Application processes may change without notice</li>
                    <li>• Grant amounts and availability can vary</li>
                    <li>• Always read official terms and conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Explore Grant Information
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Now that you know who provides grants, explore our detailed guides 
            to understand eligibility and application processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/grants/ev" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center">
              View EV Grants
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/grants/education" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center">
              View Education Grants
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

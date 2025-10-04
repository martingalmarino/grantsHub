import Link from 'next/link'
import { Shield, Users, Target, CheckCircle, ArrowRight, Mail, ExternalLink, Building2 } from 'lucide-react'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'About Irish Grants Hub - Your Trusted Guide to Irish Grants | Irish Grants Hub',
  description: 'Learn about Irish Grants Hub, your independent guide to understanding and applying for grants in Ireland. We provide clear, trustworthy information about EV and education grants.',
  keywords: 'about Irish Grants Hub, grant information Ireland, independent grant guide, Irish grants help',
  alternates: {
    canonical: 'https://www.irishgrants.org/about/',
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Independent & Trustworthy",
      description: "We are not affiliated with any government agency or grant provider. Our information is unbiased and based on official sources."
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "We put your needs first, providing clear, comprehensive information that helps you understand grant programs and eligibility."
    },
    {
      icon: Target,
      title: "Information-Rich",
      description: "Our guides are designed to provide complete information about grants, helping you understand what's available and how to apply."
    }
  ]


  const stats = [
    { number: "10,000+", label: "Visitors Helped" },
    { number: "4", label: "Main Grant Categories Covered" },
    { number: "100%", label: "Independent Information" },
    { number: "24/7", label: "Available Online" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-50 to-primary-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              About Irish Grants Hub
            </h1>
            <p className="text-lg sm:text-xl text-navy-700 mb-6 sm:mb-8 leading-relaxed">
              Your trusted, independent source of information about grants in Ireland. 
              We provide clear, up-to-date information to help you understand available grant programs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-navy-700 leading-relaxed mb-6">
                Irish Grants Hub was created to provide clear, accessible information about government grant programs 
                available to Irish residents. We believe that everyone should have access to up-to-date, 
                trustworthy information about grants that can improve their lives and careers.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Our mission is to make grant information easily understandable and accessible, 
                helping Irish residents stay informed about the financial support available to them. 
                We focus on the most impactful grants that can make a real difference in people's lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-8 text-center">Our Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-navy-700 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* What We Cover Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6">What We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-4">EV Grants</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">SEAI EV Grant (up to €5,000)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">SEAI Home Charger Grant (up to €600)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">VRT Relief for Electric Vehicles</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-4">Education Grants</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Springboard+ Funding (90-100% funded)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Human Capital Initiative (up to 100% funded)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">Back to Education Allowance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Providers Preview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="card hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-3">
                    Who Provides Grants in Ireland
                  </h2>
                  <p className="text-sm sm:text-base text-navy-700 mb-4 leading-relaxed">
                    Learn about the official government agencies that fund and administer grants in Ireland. 
                    Understanding who provides grants helps you navigate the system more effectively and verify 
                    information with the right authorities.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      SEAI
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Springboard+
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      HCI
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      DFHERIS
                    </span>
                  </div>
                  <Link 
                    href="/about/grant-providers" 
                    className="btn-primary inline-flex items-center"
                  >
                    Learn About Grant Providers
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independence Statement */}
      <section className="section-padding bg-yellow-50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-yellow-200">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-4">Our Independence</h2>
              <p className="text-sm sm:text-base text-navy-700 leading-relaxed mb-4">
                Irish Grants Hub is completely independent. We are not affiliated with SEAI, Springboard+, 
                any government agency, or grant providers. Our information is based on official sources 
                and is provided purely to help Irish residents understand and access available grants.
              </p>
              <p className="text-sm sm:text-base text-navy-700 leading-relaxed">
                We may receive compensation from partners who help with grant applications, but this never 
                influences our content or recommendations. Our priority is always providing accurate, 
                helpful information that serves your best interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Stay Informed About Irish Grants
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Bookmark this site to stay updated on the latest grant information. 
            We regularly update our content to reflect current grant programs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center">
              Browse Grant Information
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
            <Link href="/grants/ev" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center">
              View EV Grants
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

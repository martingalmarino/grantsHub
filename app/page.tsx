import Link from 'next/link'
import { Car, GraduationCap, CheckCircle, ArrowRight, Users, Clock, Shield } from 'lucide-react'
import CTA from '@/components/CTA'
import GuideCard from '@/components/GuideCard'
import FAQ from '@/components/FAQ'
import JSONLDSchema from '@/components/JSONLDSchema'
import CountyPills from '@/components/CountyPills'
import countiesData from '@/data/counties.json'

export default function HomePage() {
  const mainGrants = [
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
    },
    {
      title: "Springboard+ Funding",
      description: "Free or heavily subsidized courses for upskilling and reskilling. Perfect for career changers and skill development.",
      href: "/grants/education/springboard-plus-funding",
      category: "education" as const,
      amount: "Free to 90% off",
      deadline: "Annual intake",
      difficulty: "Medium" as const
    },
    {
      title: "Human Capital Initiative",
      description: "Advanced courses and micro-credentials for in-demand skills. Higher education funding for professionals.",
      href: "/grants/education/human-capital-initiative",
      category: "education" as const,
      amount: "Up to 100% funded",
      deadline: "Multiple intakes",
      difficulty: "Medium" as const
    }
  ]

  const homeFAQs = [
    {
      question: "Are these grants really free?",
      answer: "Most grants are either completely free or heavily subsidized. SEAI EV grants are direct payments, while education grants like Springboard+ offer courses at 90-100% discount. Always check the specific terms for each grant."
    },
    {
      question: "How long does the application process take?",
      answer: "Application times vary by grant. SEAI EV grants typically process within 2-4 weeks, while education grants may take 4-8 weeks. We provide step-by-step timelines in each guide to help you plan."
    },
    {
      question: "Can I apply for multiple grants at once?",
      answer: "Yes! Many grants can be combined. For example, you can get both the SEAI EV grant and home charger grant. Education grants can often be stacked with other supports. Our guides explain which combinations are possible."
    },
    {
      question: "What if I'm not eligible for a grant?",
      answer: "We provide clear eligibility criteria in each guide. If you don't qualify now, we often suggest alternative grants or ways to become eligible in the future. Some grants have multiple pathways to qualification."
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Trusted Information",
      description: "Independent, up-to-date information from official sources"
    },
    {
      icon: Clock,
      title: "Always Current",
      description: "Regularly updated information about grant programs"
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Clear information accessible to all Irish residents"
    }
  ]

  return (
    <>
      <JSONLDSchema 
        type="Organization" 
        data={null} 
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight">
              Your Guide to 
              <span className="text-primary-600"> Irish Grants</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-navy-700 mb-8 leading-relaxed">
              Clear, trustworthy information about EV adoption and education funding grants. 
              Stay informed about the grants available to you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12">
              <Link href="/grants/ev" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center">
                <Car className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                EV Grants
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
              <Link href="/grants/education" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center justify-center">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Education Grants
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-navy-700">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-semibold text-sm sm:text-base">{feature.title}</div>
                    <div className="text-xs sm:text-sm text-navy-600">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grants Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Popular Grant Guides
            </h2>
            <p className="text-base sm:text-lg text-navy-700 max-w-3xl mx-auto">
              Comprehensive information about Ireland's most valuable grants. 
              Everything you need to know about eligibility and application processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {mainGrants.map((grant, index) => (
              <GuideCard key={index} {...grant} />
            ))}
          </div>
        </div>
      </section>

      {/* County Pills Section */}
      <CountyPills 
        counties={countiesData}
        title="Browse Grants by County"
        description="Find EV and Education grants available in your county with local providers and support information."
        showEVGrants={true}
        showEducationGrants={true}
      />

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <CTA
              type="ev-grant"
              title="Learn About EV Grants"
              description="Get comprehensive information about EV grants and home charger grants available in Ireland."
              buttonText="Read EV Grant Guide"
              buttonHref="/grants/ev/seai-ev-grant"
              secondaryButtonText="View All EV Grants"
              secondaryButtonHref="/grants/ev"
            />
            
            <CTA
              type="education-grant"
              title="Explore Education Funding"
              description="Discover information about free and subsidized courses that can help with career development."
              buttonText="Read Education Guide"
              buttonHref="/grants/education/springboard-plus-funding"
              secondaryButtonText="View All Education Grants"
              secondaryButtonHref="/grants/education"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        faqs={homeFAQs}
        title="Common Questions About Irish Grants"
        description="Get quick answers to the most frequently asked questions about grants in Ireland."
      />

      {/* Final CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-max text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Stay Updated on Irish Grants
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our guides provide comprehensive information about all major Irish grants. 
            Bookmark this site to stay informed about grant opportunities.
          </p>
          <Link href="/about" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 inline-flex items-center">
            Learn More About This Site
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}

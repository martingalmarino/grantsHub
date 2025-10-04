import Link from 'next/link'
import { MapPin } from 'lucide-react'

interface County {
  county: string
  slug: string
  ev_adoption_rate: string
  top_ev_installers: Array<{
    name: string
    url: string
    tagline: string
  }>
  local_courses: Array<{
    provider: string
    course: string
    duration: string
  }>
  local_faqs: Array<{
    question: string
    answer: string
  }>
}

interface CountyPillsProps {
  counties: County[]
  title?: string
  description?: string
  showEVGrants?: boolean
  showEducationGrants?: boolean
}

export default function CountyPills({ 
  counties, 
  title = "Browse Grants by County",
  description = "Find EV and Education grants available in your county with local providers and support.",
  showEVGrants = true,
  showEducationGrants = true
}: CountyPillsProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 text-primary-600 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Local Grants</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4 sm:mb-6">
              {title}
            </h2>
            
            <p className="text-lg sm:text-xl text-navy-700 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>

          {/* County Pills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {counties.map((county) => (
              <div key={county.slug} className="group">
                {/* County Name Pill */}
                <div className="bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 p-3 sm:p-4 text-center">
                  <h3 className="font-semibold text-navy-900 text-sm sm:text-base mb-2 sm:mb-3 group-hover:text-primary-700 transition-colors duration-200">
                    {county.county}
                  </h3>
                  
                  {/* Grant Type Links */}
                  <div className="space-y-2">
                    {showEVGrants && (
                      <Link
                        href={`/ireland/${county.slug}/ev-grants/`}
                        className="block w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-primary-50 hover:bg-primary-100 text-primary-700 hover:text-primary-800 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 border border-primary-200 hover:border-primary-300"
                      >
                        EV Grants
                      </Link>
                    )}
                    
                    {showEducationGrants && (
                      <Link
                        href={`/ireland/${county.slug}/education-grants/`}
                        className="block w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-800 text-xs sm:text-sm font-medium rounded-md transition-colors duration-200 border border-blue-200 hover:border-blue-300"
                      >
                        Education Grants
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">
                {counties.length}
              </div>
              <div className="text-sm sm:text-base text-navy-700 font-medium">
                Counties Covered
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">
                {counties.reduce((total, county) => total + county.top_ev_installers.length, 0)}+
              </div>
              <div className="text-sm sm:text-base text-navy-700 font-medium">
                Local EV Installers
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                {counties.reduce((total, county) => total + county.local_courses.length, 0)}+
              </div>
              <div className="text-sm sm:text-base text-navy-700 font-medium">
                Local Courses
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-navy-700 mb-4 sm:mb-6">
              Don't see your county? Grants are national and available to all Irish residents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/grants/ev/"
                className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center justify-center"
              >
                <MapPin className="w-4 h-4 mr-2" />
                All EV Grants
              </Link>
              <Link 
                href="/grants/education/"
                className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center justify-center"
              >
                <MapPin className="w-4 h-4 mr-2" />
                All Education Grants
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import { Car, GraduationCap, Mail, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IG</span>
              </div>
              <span className="text-xl font-bold">Irish Grants Hub</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted source of information about grants in Ireland. 
              Independent, clear, and up-to-date information.
            </p>
          </div>

          {/* EV Grants */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Car className="w-5 h-5 mr-2" />
              EV Grants
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/grants/ev/seai-ev-grant" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  SEAI EV Grant
                </Link>
              </li>
              <li>
                <Link 
                  href="/grants/ev/seai-home-charger-grant" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Home Charger Grant
                </Link>
              </li>
              <li>
                <Link 
                  href="/guides/top-ev-cars-ireland" 
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-200 text-sm font-medium flex items-center"
                >
                  <span className="bg-primary-600 text-white px-2 py-1 rounded text-xs mr-2">NEW</span>
                  Top EVs in Ireland
                </Link>
              </li>
            </ul>
          </div>

          {/* Education Grants */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Education Grants
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/grants/education/springboard-plus-funding" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Springboard+ Funding
                </Link>
              </li>
              <li>
                <Link 
                  href="/grants/education/human-capital-initiative" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Human Capital Initiative
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h4 className="font-semibold mb-4">Official Grant Sources</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a 
              href="https://www.seai.ie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              SEAI (Sustainable Energy Authority)
            </a>
            <a 
              href="https://springboardcourses.ie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Springboard+ Courses
            </a>
            <a 
              href="https://www.gov.ie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Government of Ireland
            </a>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4 mb-6">
            <p className="text-yellow-200 text-sm">
              <strong>Disclaimer:</strong> Irish Grants Hub is an independent informational website. 
              We are not affiliated with SEAI, Springboard+, or any government agency. 
              Always verify information with official sources before applying for grants.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} Irish Grants Hub. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">
              Last updated: {new Date().toLocaleDateString('en-IE')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

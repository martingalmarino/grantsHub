import Link from 'next/link'
import { ArrowRight, Car, GraduationCap, Clock, Euro } from 'lucide-react'

interface GuideCardProps {
  title: string
  description: string
  href: string
  category: 'ev' | 'education'
  amount?: string
  deadline?: string
  difficulty?: 'Easy' | 'Medium' | 'Complex'
}

export default function GuideCard({ 
  title, 
  description, 
  href, 
  category, 
  amount, 
  deadline, 
  difficulty = 'Medium' 
}: GuideCardProps) {
  const getIcon = () => {
    return category === 'ev' ? <Car className="w-6 h-6" /> : <GraduationCap className="w-6 h-6" />
  }

  const getCategoryColor = () => {
    return category === 'ev' ? 'bg-primary-100 text-primary-800' : 'bg-blue-100 text-blue-800'
  }

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Complex':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Link href={href} className="group">
      <div className="card hover:shadow-lg transition-all duration-300 group-hover:border-primary-300">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white group-hover:bg-primary-700 transition-colors duration-200">
              {getIcon()}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor()}`}>
                {category === 'ev' ? 'EV Grant' : 'Education Grant'}
              </span>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
                {difficulty}
              </span>
            </div>
            
            <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-2 group-hover:text-primary-700 transition-colors duration-200">
              {title}
            </h3>
            
            <p className="text-navy-700 mb-4 leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600 mb-4">
              {amount && (
                <div className="flex items-center space-x-1">
                  <Euro className="w-4 h-4" />
                  <span>{amount}</span>
                </div>
              )}
              {deadline && (
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{deadline}</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
              <span>Read Guide</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

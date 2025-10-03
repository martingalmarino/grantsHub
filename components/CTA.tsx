import Link from 'next/link'
import { ArrowRight, Car, GraduationCap, Phone, Mail } from 'lucide-react'

interface CTAProps {
  type: 'ev-grant' | 'education-grant' | 'contact' | 'quote'
  title: string
  description: string
  buttonText: string
  buttonHref: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  icon?: React.ComponentType<{ className?: string }>
}

export default function CTA({ 
  type, 
  title, 
  description, 
  buttonText, 
  buttonHref, 
  secondaryButtonText,
  secondaryButtonHref,
  icon: Icon
}: CTAProps) {
  const getIcon = () => {
    if (Icon) return <Icon className="w-6 h-6" />
    
    switch (type) {
      case 'ev-grant':
        return <Car className="w-6 h-6" />
      case 'education-grant':
        return <GraduationCap className="w-6 h-6" />
      case 'contact':
        return <Mail className="w-6 h-6" />
      case 'quote':
        return <Phone className="w-6 h-6" />
      default:
        return null
    }
  }

  const getBackgroundClass = () => {
    switch (type) {
      case 'ev-grant':
        return 'bg-gradient-to-br from-primary-50 to-green-50 border-primary-200'
      case 'education-grant':
        return 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200'
      case 'contact':
        return 'bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200'
      case 'quote':
        return 'bg-gradient-to-br from-primary-50 to-emerald-50 border-primary-200'
      default:
        return 'bg-white border-gray-200'
    }
  }

  return (
    <div className={`card border-2 ${getBackgroundClass()}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white">
            {getIcon()}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-navy-900 mb-2">
            {title}
          </h3>
          <p className="text-navy-700 mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href={buttonHref} className="btn-primary inline-flex items-center justify-center">
              {buttonText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            
            {secondaryButtonText && secondaryButtonHref && (
              <Link href={secondaryButtonHref} className="btn-secondary inline-flex items-center justify-center">
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

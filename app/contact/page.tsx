'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import CTA from '@/components/CTA'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    grantType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        grantType: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      contact: "hello@irishgrants.org",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our information team",
      contact: "+353 1 234 5678",
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office in Dublin",
      contact: "Dublin, Ireland",
      action: "Get Directions"
    }
  ]

  const grantTypes = [
    "SEAI EV Grant",
    "SEAI Home Charger Grant",
    "Springboard+ Funding",
    "Human Capital Initiative",
    "Other EV Grants",
    "Other Education Grants",
    "General Question"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Contact Irish Grants Hub
            </h1>
            <p className="text-lg sm:text-xl text-navy-700 mb-6 sm:mb-8 leading-relaxed">
              Have questions about our grant information? We're here to help clarify any information 
              on our site and provide additional details about grant programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-8 text-center">Get in Touch</h2>
            <p className="text-center text-sm sm:text-base text-navy-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
              We provide information only. For official grant applications, please contact the relevant government agencies directly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {contactMethods.map((method, index) => (
                <div key={index} className="card text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-navy-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm sm:text-base text-navy-700 mb-3">
                    {method.description}
                  </p>
                  <p className="text-sm sm:text-base text-primary-600 font-medium mb-4">
                    {method.contact}
                  </p>
                  <button className="btn-primary w-full text-sm sm:text-base">
                    {method.action}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-900 mb-6 text-center">
                Send Us a Message
              </h2>
              <p className="text-center text-sm sm:text-base text-navy-700 mb-6">
                Questions about our grant information? We're here to help clarify any details on our site.
              </p>
              
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                      <p className="text-green-700 text-sm">
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-800">Error Sending Message</h3>
                      <p className="text-red-700 text-sm">
                        Please try again or contact us directly.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="grantType" className="block text-sm font-medium text-navy-700 mb-2">
                    Grant Type
                  </label>
                  <select
                    id="grantType"
                    name="grantType"
                    value={formData.grantType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  >
                    <option value="">Select a grant type (optional)</option>
                    {grantTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    placeholder="Brief description of your question"
                  />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-vertical text-sm sm:text-base"
                      placeholder="Please provide details about your question regarding our grant information..."
                    />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-6 sm:mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3">
                  How quickly will you respond?
                </h3>
                <p className="text-sm sm:text-base text-navy-700">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent questions, please call us directly.
                </p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3">
                  Do you charge for information?
                </h3>
                <p className="text-sm sm:text-base text-navy-700">
                  All information on our website is completely free. We provide comprehensive 
                  information about grants at no cost to help you understand what's available.
                </p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3">
                  Can you help with my specific situation?
                </h3>
                <p className="text-sm sm:text-base text-navy-700">
                  We provide comprehensive information about grants and eligibility requirements. 
                  For specific application assistance, please contact the relevant government agencies directly.
                </p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-3">
                  Are you affiliated with government agencies?
                </h3>
                <p className="text-sm sm:text-base text-navy-700">
                  No, we are completely independent. We are not affiliated with SEAI, 
                  Springboard+, or any government agency.
                </p>
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
              description="Get comprehensive information about SEAI EV grants and home charger grants. Find all the details you need to understand these programs."
              buttonText="Read EV Grant Information"
              buttonHref="/grants/ev"
            />
            
            <CTA
              type="education-grant"
              title="Education Grant Information"
              description="Learn about Springboard+ and HCI programs. Get detailed information about eligibility and application processes."
              buttonText="Read Education Grant Information"
              buttonHref="/grants/education"
            />
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import { useState } from 'react'
import { Calculator, Car, Euro, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface EVGrantEstimatorProps {
  defaultCounty?: string
  showTitle?: boolean
  title?: string
}

export default function EVGrantEstimator({ 
  defaultCounty = "Dublin", 
  showTitle = true,
  title 
}: EVGrantEstimatorProps) {
  const [selectedCounty, setSelectedCounty] = useState(defaultCounty)
  const [vehiclePrice, setVehiclePrice] = useState<number>(30000)
  const [grantAmount, setGrantAmount] = useState<number>(0)
  const [finalPrice, setFinalPrice] = useState<number>(30000)

  const counties = [
    "Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", 
    "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", 
    "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", 
    "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", 
    "Wexford", "Wicklow"
  ]

  const calculateGrant = (price: number) => {
    let grant = 0
    
    if (price >= 50000) {
      grant = 5000
    } else if (price >= 40000) {
      grant = 4000
    } else if (price >= 30000) {
      grant = 3500
    } else if (price >= 25000) {
      grant = 3000
    } else if (price >= 20000) {
      grant = 2500
    } else if (price >= 15000) {
      grant = 2000
    } else if (price >= 10000) {
      grant = 1500
    }
    
    return grant
  }

  const handlePriceChange = (price: number) => {
    setVehiclePrice(price)
    const grant = calculateGrant(price)
    setGrantAmount(grant)
    setFinalPrice(price - grant)
  }

  const handleCountyChange = (county: string) => {
    setSelectedCounty(county)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 shadow-sm">
      {showTitle && (
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center space-x-2 text-primary-600 mb-3">
            <Calculator className="w-5 h-5" />
            <span className="font-medium">Grant Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
            {title || `Estimate Your EV Grant${defaultCounty !== "Dublin" ? ` in ${defaultCounty}` : ""}`}
          </h2>
          <p className="text-navy-700 text-sm sm:text-base">
            Calculate how much you could save with Ireland's SEAI EV Grant
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Calculator Inputs */}
        <div className="space-y-6">
          <div>
            <label htmlFor="county" className="block text-sm font-medium text-navy-700 mb-2">
              Your County
            </label>
            <select
              id="county"
              value={selectedCounty}
              onChange={(e) => handleCountyChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm sm:text-base"
            >
              {counties.map((county) => (
                <option key={county} value={county}>
                  {county}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-navy-700 mb-2">
              Vehicle Price (€)
            </label>
            <div className="relative">
              <Euro className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="price"
                type="number"
                value={vehiclePrice}
                onChange={(e) => handlePriceChange(Number(e.target.value))}
                min="10000"
                max="100000"
                step="1000"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm sm:text-base"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Enter the price of your chosen electric vehicle
            </p>
          </div>

          <div>
            <label htmlFor="priceRange" className="block text-sm font-medium text-navy-700 mb-2">
              Or use slider
            </label>
            <input
              id="priceRange"
              type="range"
              min="10000"
              max="100000"
              step="1000"
              value={vehiclePrice}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>€10,000</span>
              <span>€100,000</span>
            </div>
          </div>
        </div>

        {/* Calculator Results */}
        <div className="bg-gradient-to-br from-primary-50 to-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-navy-900 mb-4 flex items-center">
            <Car className="w-5 h-5 mr-2 text-primary-600" />
            Your Estimated Savings
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-navy-700 font-medium">Vehicle Price:</span>
              <span className="text-navy-900 font-bold">€{vehiclePrice.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-green-700 font-medium">SEAI Grant:</span>
              <span className="text-green-600 font-bold text-lg">-€{grantAmount.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center py-4 bg-white rounded-lg px-4 border-2 border-primary-200">
              <span className="text-navy-900 font-bold text-lg">Final Price:</span>
              <span className="text-primary-600 font-bold text-xl">€{finalPrice.toLocaleString()}</span>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-yellow-800 text-xs font-medium mb-1">
                    Grant Eligibility
                  </p>
                  <p className="text-yellow-700 text-xs">
                    {grantAmount > 0 
                      ? `You qualify for the maximum grant of €${grantAmount.toLocaleString()}`
                      : "Your vehicle may qualify for a smaller grant amount"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <Link 
            href="/grants/ev/seai-ev-grant"
            className="btn-primary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center justify-center"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Apply for EV Grant
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          
          <Link 
            href={`/ireland/county-${selectedCounty.toLowerCase()}/ev-grants/`}
            className="btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center justify-center"
          >
            <Car className="w-4 h-4 mr-2" />
            {selectedCounty} Installers
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            * Grant amounts are estimates. Final amounts depend on vehicle eligibility and SEAI approval.
          </p>
        </div>
      </div>
    </div>
  )
}

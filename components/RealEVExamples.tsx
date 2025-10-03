import React from 'react';
import { EVExample } from '../data/grants-data';
import { Car, Euro, Calendar, TrendingDown } from 'lucide-react';

interface RealEVExamplesProps {
  evs: EVExample[];
  title: string;
  description: string;
}

export default function RealEVExamples({ evs, title, description }: RealEVExamplesProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              {title}
            </h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {evs.map((ev, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Car className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900">
                        {ev.make} {ev.model}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-navy-600">
                        <Euro className="w-4 h-4" />
                        <span>Total Cost</span>
                      </div>
                      <span className="text-lg font-bold text-navy-900">
                        €{ev.totalCost.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-green-600">
                        <TrendingDown className="w-4 h-4" />
                        <span>SEAI Grant</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">
                        -€{ev.grantAmount.toLocaleString()}
                      </span>
                    </div>

                    <div className="border-t pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-navy-700">You Pay</span>
                        <span className="text-xl font-bold text-primary-600">
                          €{(ev.totalCost - ev.grantAmount).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Saving of {((ev.grantAmount / ev.totalCost) * 100).toFixed(1)}%
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-gray-500 border-t pt-3">
                    <Calendar className="w-3 h-3" />
                    <span>Last updated: {new Date(ev.lastUpdated).toLocaleDateString('en-IE')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <TrendingDown className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-green-900 mb-2">
                  How the Grant Works
                </h4>
                <p className="text-sm text-green-800 leading-relaxed">
                  The SEAI EV grant is applied at the point of purchase, reducing the upfront cost of your electric vehicle. 
                  Prices shown are indicative and may vary by dealer. Always confirm current pricing and grant availability 
                  directly with authorized dealers before purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

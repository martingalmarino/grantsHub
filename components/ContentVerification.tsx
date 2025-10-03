import React from 'react';
import { contentMetadata } from '../data/grants-data';
import { CheckCircle, Calendar, Users, ExternalLink, AlertTriangle } from 'lucide-react';

export default function ContentVerification() {
  const nextUpdate = new Date(contentMetadata.nextScheduledUpdate);
  const lastUpdate = new Date(contentMetadata.lastFullUpdate);
  
  const daysUntilUpdate = Math.ceil((nextUpdate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <section className="section-padding bg-blue-50 border-t">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-navy-900 mb-3">
                  Content Verification & Updates
                </h3>
                
                <div className="grid gap-4 md:grid-cols-2 mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-navy-600" />
                    <div>
                      <p className="text-sm font-medium text-navy-700">Last Updated</p>
                      <p className="text-sm text-navy-600">
                        {lastUpdate.toLocaleDateString('en-IE')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-navy-600" />
                    <div>
                      <p className="text-sm font-medium text-navy-700">Next Scheduled Update</p>
                      <p className="text-sm text-navy-600">
                        {nextUpdate.toLocaleDateString('en-IE')}
                        {daysUntilUpdate <= 30 && (
                          <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                            Soon
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-navy-600" />
                    <div>
                      <p className="text-sm font-medium text-navy-700">Verified By</p>
                      <p className="text-sm text-navy-600">{contentMetadata.verifiedBy}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-navy-700 mb-2">Official Sources</h4>
                  <div className="space-y-1">
                    {contentMetadata.sources.map((source, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                        <a 
                          href={source} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 underline"
                        >
                          {source.replace('https://', '').replace('www.', '')}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-yellow-800 mb-1">
                        Always Verify Current Information
                      </p>
                      <p className="text-xs text-yellow-700 leading-relaxed">
                        Grant amounts, deadlines, and eligibility criteria can change. Always check the official 
                        websites directly before making any decisions or applications. This information is 
                        provided for guidance purposes only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

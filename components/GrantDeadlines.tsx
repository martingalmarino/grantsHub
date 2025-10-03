import React from 'react';
import { GrantDeadline } from '../data/grants-data';
import { Calendar, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface GrantDeadlinesProps {
  deadlines: GrantDeadline[];
  title: string;
}

export default function GrantDeadlines({ deadlines, title }: GrantDeadlinesProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Open':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Closed':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'Upcoming':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Closed':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Upcoming':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    if (dateString === 'Ongoing') return 'Ongoing';
    return new Date(dateString).toLocaleDateString('en-IE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isUpcoming = (dateString: string) => {
    if (dateString === 'Ongoing') return false;
    const deadline = new Date(dateString);
    const now = new Date();
    const daysUntilDeadline = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return daysUntilDeadline <= 30 && daysUntilDeadline >= 0;
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              {title}
            </h2>
            <p className="text-navy-700 text-lg leading-relaxed">
              Stay informed about current application deadlines and upcoming opportunities.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {deadlines.map((deadline, index) => (
              <div 
                key={index} 
                className={`card border-2 transition-all duration-300 hover:shadow-lg ${
                  isUpcoming(deadline.applicationDeadline) ? 'ring-2 ring-yellow-200' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-navy-900 flex-1">
                      {deadline.grantType}
                    </h3>
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(deadline.status)}`}>
                      {getStatusIcon(deadline.status)}
                      <span>{deadline.status}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-4 h-4 text-navy-600" />
                      <div>
                        <p className="text-sm font-medium text-navy-700">Application Deadline</p>
                        <p className="text-sm text-navy-600">
                          {formatDate(deadline.applicationDeadline)}
                          {isUpcoming(deadline.applicationDeadline) && (
                            <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                              Soon!
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-navy-600" />
                      <div>
                        <p className="text-sm font-medium text-navy-700">Next Intake</p>
                        <p className="text-sm text-navy-600">{deadline.nextIntake}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t">
                    <p className="text-xs text-gray-500">
                      Last updated: {new Date(deadline.lastUpdated).toLocaleDateString('en-IE')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-blue-900 mb-2">
                  Important Reminder
                </h4>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Application deadlines can change, and some grants may close early if oversubscribed. 
                  Always check the official websites (Springboard+, HCI, SEAI) for the most current information 
                  before applying. We recommend applying well in advance of deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

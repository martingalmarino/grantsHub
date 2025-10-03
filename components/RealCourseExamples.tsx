import React from 'react';
import { CourseExample } from '../data/grants-data';
import { GraduationCap, Clock, DollarSign, Briefcase, Calendar } from 'lucide-react';

interface RealCourseExamplesProps {
  courses: CourseExample[];
  title: string;
  description: string;
}

export default function RealCourseExamples({ courses, title, description }: RealCourseExamplesProps) {
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

          <div className="grid gap-6 md:grid-cols-2">
            {courses.map((course, index) => (
              <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy-900">
                          {course.name}
                        </h3>
                        <p className="text-sm text-navy-600 font-medium">
                          {course.institution}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {course.level}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-navy-600">
                      <Clock className="w-4 h-4" />
                      <span><strong>Duration:</strong> {course.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm text-navy-600">
                      <DollarSign className="w-4 h-4" />
                      <span><strong>Salary Range:</strong> {course.salaryRange}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-navy-700">Career Prospects:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {course.employmentProspects.map((prospect, prospectIndex) => (
                        <span 
                          key={prospectIndex}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800"
                        >
                          {prospect}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs text-gray-500 border-t pt-3">
                    <Calendar className="w-3 h-3" />
                    <span>Last updated: {new Date(course.lastUpdated).toLocaleDateString('en-IE')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> Course availability and details may change. Always verify current information directly with the institution and Springboard+/HCI before applying.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

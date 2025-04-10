
import React from 'react';
import { TimelineData } from '../types';

interface TimelineSectionProps {
  timeline: TimelineData;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ timeline }) => {
  return (
    <section id="timeline" className="section py-16">
      <div className="container px-4 md:px-8">
        <h2 className="section-title">{timeline.title}</h2>
        <p className="text-lg mb-10 max-w-2xl">{timeline.description}</p>
        
        <div className="relative">
          {/* The vertical line - hidden on mobile, visible on md and up */}
          <div className="absolute hidden md:block left-1/2 transform translate-x-px h-full w-0.5 bg-portfolio-accent"></div>
          
          {/* Timeline items with improved mobile layout */}
          {timeline.items.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* For mobile: Simple stacked layout */}
              {/* For desktop: Alternating left and right layout */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:self-end' : 'md:pl-12 md:ml-auto'}`}>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <div className="flex flex-col mb-4">
                    <div className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-portfolio-primary rounded-full w-fit">
                      {item.period}
                    </div>
                    {(item.startDate || item.endDate) && (
                      <div className="text-sm text-gray-500 italic">
                        {item.startDate} - {item.endDate || 'Present'}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <h4 className="text-portfolio-accent font-medium mb-3">{item.organization}</h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.technologies && (
                    <div className="flex flex-wrap gap-2 mt-3 justify-start">
                      {item.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-portfolio-accent bg-opacity-20 text-portfolio-primary text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Timeline dot - centered on mobile, alternating on desktop */}
              <div className="absolute left-0 top-0 md:left-1/2 md:top-6 transform md:-translate-x-1/2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-portfolio-primary border-2 border-portfolio-accent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

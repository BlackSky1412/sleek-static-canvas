
import React from 'react';
import { CareerGoalsData } from '../types';

interface GoalsSectionProps {
  careerGoals: CareerGoalsData;
}

const GoalsSection: React.FC<GoalsSectionProps> = ({ careerGoals }) => {
  return (
    <section id="goals" className="section bg-portfolio-muted">
      <div className="container">
        <h2 className="section-title">{careerGoals.title}</h2>
        <p className="text-lg mb-8 max-w-2xl">{careerGoals.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {careerGoals.goals.map((goal, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-portfolio-accent text-portfolio-primary w-8 h-8 flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700">{goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;


import React from 'react';
import { SkillsData } from '../types';

interface SkillsSectionProps {
  skills: SkillsData;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">{skills.title}</h2>
        <p className="text-lg mb-10 max-w-2xl">{skills.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <div 
                  key={index} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-portfolio-primary text-white px-4 py-2 rounded-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

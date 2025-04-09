
import React from 'react';
import { SkillsData, TechnicalSkill } from '../types';
import { Badge } from '@/components/ui/badge';

interface SkillsSectionProps {
  skills: SkillsData;
}

const getSkillLevelLabel = (level: number): string => {
  switch(level) {
    case 1: return 'Beginner';
    case 2: return 'Elementary';
    case 3: return 'Intermediate'; 
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return 'N/A';
  }
};

const StarRating: React.FC<{ level: number }> = ({ level }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="text-lg">
          {i < level ? '★' : '☆'}
        </span>
      ))}
      <span className="ml-2 text-sm text-gray-500">
        ({getSkillLevelLabel(level)})
      </span>
    </div>
  );
};

const SkillsByCategory: React.FC<{ 
  skills: TechnicalSkill[], 
  category: 'Database' | 'Backend' | 'Frontend' | 'Other' 
}> = ({ skills, category }) => {
  const filteredSkills = skills.filter(skill => skill.category === category);
  
  if (filteredSkills.length === 0) return null;
  
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{category}</h3>
      <div className="space-y-4">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium">{skill.name}</span>
            </div>
            <StarRating level={skill.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <section id="skills" className="section bg-portfolio-muted">
      <div className="container">
        <h2 className="section-title">{skills.title}</h2>
        <p className="text-lg mb-10 max-w-2xl">{skills.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <SkillsByCategory skills={skills.technical} category="Database" />
            <SkillsByCategory skills={skills.technical} category="Backend" />
          </div>
          
          <div className="space-y-8">
            <SkillsByCategory skills={skills.technical} category="Frontend" />
            <SkillsByCategory skills={skills.technical} category="Other" />
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, index) => (
                  <Badge 
                    key={index}
                    className="bg-portfolio-primary text-white px-4 py-2 rounded-md animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

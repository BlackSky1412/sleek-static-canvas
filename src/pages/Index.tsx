
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import GoalsSection from '../components/GoalsSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { getPortfolioData } from '../utils/dataLoader';
import { PortfolioData } from '../types';

const Index = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const data = getPortfolioData();
      setPortfolioData(data);
      document.title = `${data.profile.name} | Portfolio`;
    } catch (error) {
      console.error('Error loading portfolio data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading || !portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-portfolio-primary border-t-portfolio-accent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection profile={portfolioData.profile} />
        <GoalsSection careerGoals={portfolioData.careerGoals} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection contact={portfolioData.contact} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

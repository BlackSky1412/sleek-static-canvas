
import React from 'react';
import { ProfileData } from '../types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroSectionProps {
  profile: ProfileData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="section py-16 md:py-20">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="w-full md:w-1/2 animate-fade-in text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{profile.name}</h1>
            <h2 className="text-lg sm:text-xl md:text-2xl text-portfolio-accent mb-4 md:mb-6">{profile.role}</h2>
            <p className="text-base sm:text-lg mb-6 md:mb-8 text-gray-700 max-w-md mx-auto md:mx-0">{profile.bio}</p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-portfolio-primary text-white rounded-md hover:bg-opacity-90 transition-all"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-portfolio-primary text-portfolio-primary rounded-md hover:bg-portfolio-primary hover:text-white transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/5 mt-8 md:mt-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative max-w-xs mx-auto">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto overflow-hidden rounded-full border-4 border-portfolio-accent">
                <Avatar className="w-full h-full">
                  <AvatarImage src={profile.avatar} alt={`${profile.name}'s profile picture`} className="w-full h-full object-cover" />
                  <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 right-0 md:-right-4 bg-portfolio-accent text-portfolio-primary px-3 py-2 rounded-md font-medium text-sm md:text-base">
                {profile.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

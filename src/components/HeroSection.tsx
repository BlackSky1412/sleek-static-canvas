
import React from 'react';
import { ProfileData } from '../types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeroSectionProps {
  profile: ProfileData;
}

const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="section py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{profile.name}</h1>
            <h2 className="text-xl md:text-2xl text-portfolio-accent mb-6">{profile.role}</h2>
            <p className="text-lg mb-8 text-gray-700">{profile.bio}</p>
            <div className="flex space-x-4">
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
          <div className="md:w-2/5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-portfolio-accent">
                <Avatar className="w-full h-full">
                  <AvatarImage src={profile.avatar} alt={`${profile.name}'s profile picture`} className="w-full h-full object-cover" />
                  <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-portfolio-accent text-portfolio-primary px-4 py-2 rounded-md font-medium">
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


import React from 'react';
import { ContactData } from '../types';
import { Mail, ExternalLink, Facebook, Github } from 'lucide-react';
import { Button } from './ui/button';

interface ContactSectionProps {
  contact: ContactData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github className="h-5 w-5" />;
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'tiktok':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        );
      case 'zalo':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20" fill="currentColor" className="h-5 w-5">
            <path d="M24,4C12.95,4,4,12.95,4,24s8.95,20,20,20s20-8.95,20-20S35.05,4,24,4z M24,41c-9.39,0-17-7.61-17-17S14.61,7,24,7s17,7.61,17,17S33.39,41,24,41z M27.1,16c0,0-1.98-1-6.09-1c-4.86,0-6.01,1-6.01,1s0.5,5.5,2,7s4,3,4,3v2c0,1.1,0.9,2,2,2s2-0.9,2-2v-2c0,0,2.5-1.5,4-3S27.1,16,27.1,16z M20,19.5c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S20.55,19.5,20,19.5z M28,19.5c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S28.55,19.5,28,19.5z M24,28c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5S24.83,28,24,28z" />
          </svg>
        );
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h2 className="section-title text-center">{contact.title}</h2>
        <p className="text-lg mb-8 md:mb-12 text-center max-w-2xl mx-auto text-gray-700">{contact.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border border-gray-100">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-portfolio-primary">Get in Touch</h3>
            
            {/* Email */}
            <div className="flex items-center p-3 md:p-4 bg-gray-50 rounded-lg mb-4 md:mb-6 animate-fade-in hover:bg-gray-100 transition-colors">
              <div className="bg-portfolio-accent rounded-full p-2 md:p-3 mr-3 md:mr-4 text-portfolio-primary">
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href={`mailto:${contact.email}`} className="text-portfolio-primary hover:underline font-medium text-sm md:text-base">
                  {contact.email}
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <h4 className="text-lg md:text-xl font-medium mb-3 md:mb-4 text-gray-800">Connect on Social Media</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {contact.socials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-2 md:p-3 text-gray-700 hover:text-portfolio-primary bg-gray-50 rounded-lg hover:bg-gray-100 transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white rounded-full p-2 mr-2 md:mr-3 shadow-sm border border-gray-100">
                    {renderIcon(social.icon)}
                  </div>
                  <span className="font-medium text-sm md:text-base">{social.name}</span>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Form Visual */}
          <div className="bg-portfolio-primary rounded-2xl shadow-lg p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Let's Connect</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm">
                <h4 className="text-lg md:text-xl font-medium mb-2 md:mb-3 text-white">Availability</h4>
                <p className="mb-3 md:mb-4 text-white text-sm md:text-base">I'm currently available for:</p>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                    <span className="text-sm md:text-base">Freelance projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                    <span className="text-sm md:text-base">Full-time opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                    <span className="text-sm md:text-base">Consulting work</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center mt-6 md:mt-8">
                <Button 
                  className="px-6 md:px-8 py-4 md:py-6 bg-portfolio-accent text-portfolio-primary font-medium rounded-xl hover:bg-white transition-all text-base md:text-lg h-auto"
                  onClick={() => window.location.href = `mailto:${contact.email}`}
                >
                  <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links Bar */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-3 md:gap-4">
          {contact.socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all border border-gray-100 text-portfolio-primary hover:text-portfolio-accent"
              aria-label={social.name}
            >
              {renderIcon(social.icon)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

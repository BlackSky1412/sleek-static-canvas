
import React from 'react';
import { ContactData } from '../types';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  contact: ContactData;
}

const ContactSection: React.FC<ContactSectionProps> = ({ contact }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        );
      default:
        return <span>{iconName}</span>;
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">{contact.title}</h2>
        <p className="text-lg mb-10 max-w-2xl">{contact.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="flex flex-col space-y-6">
              {/* Email Contact Info */}
              <div className="flex items-center mb-4 animate-fade-in">
                <div className="bg-portfolio-accent rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-portfolio-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-portfolio-primary hover:text-portfolio-accent font-medium">
                    {contact.email}
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-medium mb-4">Connect on Social Media</h4>
                <div className="flex flex-col space-y-4">
                  {contact.socials.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-portfolio-primary transition-colors animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="bg-gray-100 rounded-full p-2 mr-3">
                        {renderIcon(social.icon)}
                      </div>
                      <span>{social.name}</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-portfolio-primary rounded-lg shadow-md p-8 text-white">
            <h3 className="text-xl font-semibold mb-6">Portfolio Information</h3>
            <div className="space-y-6">
              <p className="mb-4">
                This is a static portfolio website. To contact me, please use the email address or social media links provided.
              </p>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Need a quick response?</h4>
                <p className="mb-4">The best way to reach me is through:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Email for professional inquiries</li>
                  <li>LinkedIn for networking</li>
                  <li>GitHub for code collaboration</li>
                </ul>
              </div>
              
              <div className="text-center mt-6">
                <a 
                  href={`mailto:${contact.email}`}
                  className="inline-block px-6 py-3 bg-portfolio-accent text-portfolio-primary font-medium rounded-md hover:bg-opacity-90 transition-all"
                >
                  Send Email Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

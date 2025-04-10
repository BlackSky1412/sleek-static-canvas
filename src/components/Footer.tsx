
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-primary text-white py-8 md:py-10">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Portfolio</p>
            <p className="text-sm opacity-80">Customizable via JSON</p>
          </div>
          
          <div className="text-sm opacity-80 mb-6 md:mb-0 order-3 md:order-2">
            <p>&copy; {currentYear} All Rights Reserved</p>
            <p>Made with JSON-driven architecture</p>
          </div>
          
          <div className="w-full md:w-auto order-2 md:order-3 mb-6 md:mb-0">
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
                <li>
                  <a href="#about" className="hover:text-portfolio-accent transition-colors text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-portfolio-accent transition-colors text-sm">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-portfolio-accent transition-colors text-sm">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-portfolio-accent transition-colors text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

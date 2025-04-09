
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-primary text-white py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Portfolio</p>
            <p className="text-sm opacity-80">Customizable via JSON</p>
          </div>
          
          <div className="text-sm opacity-80">
            <p>&copy; {currentYear} All Rights Reserved</p>
            <p>Made with JSON-driven architecture</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav>
              <ul className="flex space-x-6">
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

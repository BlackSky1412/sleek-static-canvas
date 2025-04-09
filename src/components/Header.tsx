
import React from 'react';

const Header = () => {
  return (
    <header className="py-6">
      <div className="container flex justify-between items-center">
        <div className="text-portfolio-primary font-bold text-xl">Portfolio</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-portfolio-accent transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#goals" className="hover:text-portfolio-accent transition-colors">
                Goals
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-portfolio-accent transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-portfolio-accent transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-portfolio-accent transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

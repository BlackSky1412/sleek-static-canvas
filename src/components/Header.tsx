
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
      <li>
        <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-portfolio-accent transition-colors">
          About
        </a>
      </li>
      <li>
        <a href="#goals" onClick={() => setMobileMenuOpen(false)} className="hover:text-portfolio-accent transition-colors">
          Goals
        </a>
      </li>
      <li>
        <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-portfolio-accent transition-colors">
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-portfolio-accent transition-colors">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-portfolio-accent transition-colors">
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <header className="py-6 sticky top-0 bg-white z-50 shadow-sm">
      <div className="container flex justify-between items-center">
        <div className="text-portfolio-primary font-bold text-xl">Portfolio</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-20 px-6">
            <nav className="container mx-auto">
              <NavLinks />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

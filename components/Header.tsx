import React, { useState } from 'react';
import { LogoParadiaIcon } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Réussites', href: '#case-studies' },
    { name: 'Avis Clients', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-neutral-200/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3 text-2xl font-black text-brand-dark tracking-tight transition-opacity hover:opacity-80">
            <LogoParadiaIcon className="text-brand-accent h-8 w-8" />
            <span>Paradia</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-neutral-600 hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <a href="#digitalisation" onClick={(e) => handleNavClick(e, '#digitalisation')} className="hidden md:inline-block bg-brand-accent hover:bg-brand-secondary text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            Transformation Digitale
          </a>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 hover:text-brand-primary focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 border-t border-neutral-200 pt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-neutral-600 hover:text-brand-primary transition-colors duration-300 font-medium text-center py-2 rounded-md hover:bg-neutral-100"
                >
                  {link.name}
                </a>
              ))}
              <a href="#digitalisation" onClick={(e) => handleNavClick(e, '#digitalisation')} className="mt-2 bg-brand-accent hover:bg-brand-secondary text-white font-bold py-2.5 px-5 rounded-lg transition-all duration-300 hover:scale-105 text-center">
                Transformation Digitale
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
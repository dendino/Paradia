import React from 'react';
import { LinkedInIcon, TwitterIcon } from '../constants';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Réussites', href: '#case-studies' },
    { name: 'Avis Clients', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlaceholderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      alert('Cette page est en cours de construction.');
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-black tracking-tight">Paradia</h3>
            <p className="mt-4 text-blue-200 max-w-xs">
              Société de consulting It et Digital pour les entreprises visionnaires.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                  <h4 className="font-semibold tracking-wider uppercase text-blue-300">Navigation</h4>
                  <ul className="mt-4 space-y-3">
                      {navLinks.map(link => (
                          <li key={link.name}>
                              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-blue-200 hover:text-white transition-colors duration-200">{link.name}</a>
                          </li>
                      ))}
                  </ul>
              </div>
              <div>
                  <h4 className="font-semibold tracking-wider uppercase text-blue-300">Légal</h4>
                  <ul className="mt-4 space-y-3">
                      <li><a href="#" onClick={handlePlaceholderClick} className="text-blue-200 hover:text-white transition-colors duration-200">Mentions Légales</a></li>
                      <li><a href="#" onClick={handlePlaceholderClick} className="text-blue-200 hover:text-white transition-colors duration-200">Politique de Confidentialité</a></li>
                  </ul>
              </div>
               <div className="col-span-2 md:col-span-2">
                  <h4 className="font-semibold tracking-wider uppercase text-blue-300">Suivez-nous</h4>
                  <div className="mt-4 flex space-x-4">
                      <a href="https://www.linkedin.com/company/107758381" onClick={handlePlaceholderClick} className="text-blue-200 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                          <LinkedInIcon className="w-6 h-6" />
                      </a>
                      <a href="#" onClick={handlePlaceholderClick} className="text-blue-200 hover:text-white transition-colors duration-200" aria-label="Twitter">
                          <TwitterIcon className="w-6 h-6" />
                      </a>
                  </div>
              </div>
          </div>
        </div>
        <div className="mt-16 border-t border-blue-200/20 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Paradia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
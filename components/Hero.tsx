import React from 'react';

const Hero: React.FC = () => {
    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="hero" className="relative bg-neutral-900 text-white overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-brand-dark/50 to-neutral-900 opacity-90"></div>
       <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,116,139,0.2)_1px,transparent_1px)] bg-[length:2rem_2rem] animate-pan-grid"
        style={{ maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 40%, transparent 100%)' }}
       ></div>

      <div className="container mx-auto px-6 py-28 md:py-40 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 tracking-tighter text-white drop-shadow-lg">
          Automatisation & Croissance E-commerce. Simplifiées.
        </h1>
        <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-10">
          Depuis 2021, Paradia transforme vos défis opérationnels en avantages concurrentiels. Nous créons des solutions sur-mesure pour votre succès.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#services"
            onClick={(e) => handleScrollTo(e, '#services')}
            className="w-full sm:w-auto bg-brand-accent hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Explorer nos Services
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, '#contact')}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium py-3 px-8 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            Parlons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
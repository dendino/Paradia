import React, { useState, useEffect, useRef } from 'react';
import { PARTNERS } from '../constants';
import { Partner } from '../types';

const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => (
  <div className="flex items-center justify-center p-4 h-24 text-neutral-500 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:text-neutral-800">
      {partner.logo}
  </div>
);

const Partners: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { rootMargin: '0px 0px -10% 0px' }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

  return (
    <section id="partners" ref={sectionRef} className={`py-20 bg-neutral-100 transition-all ease-in-out duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-6">
        <h3 className="text-center text-lg font-semibold text-neutral-500 mb-10 tracking-wider uppercase">
            En Partenariat Avec des Entreprises Technologiques Agiles
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 items-center">
          {PARTNERS.map((partner) => (
            <PartnerLogo key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
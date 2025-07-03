import React, { useState, useEffect, useRef } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
    <div className="flex-shrink-0 bg-brand-light p-4 rounded-xl inline-block group-hover:bg-brand-accent transition-colors duration-300">
        {React.cloneElement(service.icon, { className: "w-8 h-8 text-brand-accent group-hover:text-white transition-colors duration-300" })}
    </div>
    <div className="mt-5">
      <h3 className="text-xl font-bold text-neutral-900">{service.title}</h3>
      <p className="mt-2 text-neutral-600 leading-relaxed">{service.description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
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
    <section id="services" ref={sectionRef} className={`py-24 bg-neutral-100 transition-all ease-in-out duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">Nos Domaines d'Expertise</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Des solutions complètes pour moderniser vos opérations et accélérer votre croissance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
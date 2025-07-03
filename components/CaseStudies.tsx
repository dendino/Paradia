import React, { useState, useEffect, useRef } from 'react';
import { CASE_STUDIES } from '../constants';
import { CaseStudy } from '../types';

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => (
  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-all duration-500 ease-in-out group">
    <div className="p-8">
      <p className="text-sm font-semibold text-brand-accent uppercase tracking-wider">{study.industry}</p>
      <h3 className="mt-2 text-2xl font-bold text-neutral-900">{study.client}</h3>
      <div className="mt-6 space-y-5">
        <div>
          <h4 className="font-semibold text-neutral-800">Défi</h4>
          <p className="text-neutral-600 mt-1">{study.problem}</p>
        </div>
        <div>
          <h4 className="font-semibold text-neutral-800">Solution Paradia</h4>
          <p className="text-neutral-600 mt-1">{study.solution}</p>
        </div>
      </div>
    </div>
    <div className="bg-brand-light p-8">
      <h4 className="font-bold text-brand-dark mb-4">Résultats Clés</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {study.results.map(result => (
          <div key={result.label}>
            <p className="text-3xl font-black text-brand-primary">{result.value}</p>
            <p className="text-sm text-neutral-600 mt-1">{result.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CaseStudies: React.FC = () => {
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
    <section id="case-studies" ref={sectionRef} className={`py-24 bg-white transition-all ease-in-out duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">Nos Réussites en Action</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Découvrez comment nous aidons nos clients à surmonter leurs défis et à atteindre leurs objectifs.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {CASE_STUDIES.map((study, index) => (
            <CaseStudyCard key={index} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
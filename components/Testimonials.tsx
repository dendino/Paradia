import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg border border-transparent hover:border-neutral-200/80 transition-all duration-300 flex flex-col h-full">
    <div className="flex-grow">
      <svg className="w-10 h-10 text-brand-accent mb-5" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.33 6.984h-5.33v18.016h10.667v-10.667c0-4.416-2.583-7.349-5.337-7.349zM27.33 6.984h-5.33v18.016h10.667v-10.667c0-4.416-2.583-7.349-5.337-7.349z"></path>
      </svg>
      <p className="text-lg text-neutral-800 italic leading-relaxed">"{testimonial.quote}"</p>
    </div>
    <div className="mt-6 pt-6 border-t border-neutral-200/80">
      <p className="font-bold text-neutral-900">{testimonial.name}</p>
      <p className="text-sm text-neutral-600">{testimonial.title}, {testimonial.company}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
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
    <section id="testimonials" ref={sectionRef} className={`py-24 bg-neutral-100 transition-all ease-in-out duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">Ce Que Disent Nos Clients</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            La confiance et la satisfaction de nos clients sont notre plus grande fierté.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
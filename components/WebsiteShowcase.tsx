import React, { useState, useEffect, useRef } from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const WebsiteShowcase: React.FC = () => {
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

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="digitalisation" ref={sectionRef} className={`py-24 bg-neutral-100 transition-all ease-in-out duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
                            Accélérons Ensemble Votre Transformation Digitale.
                        </h2>
                        <p className="mt-6 text-lg text-neutral-600">
                           La digitalisation est plus qu'une simple présence en ligne. C'est la refonte stratégique de vos processus pour gagner en efficacité, innover et devancer la concurrence. Nous vous guidons à chaque étape, de l'audit initial au déploiement d'outils sur-mesure.
                        </p>
                        <ul className="mt-8 space-y-4">
                            <li className="flex items-center">
                                <CheckIcon className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" />
                                <span className="text-neutral-700 font-medium">Analyse de vos processus et identification des opportunités d'automatisation.</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" />
                                <span className="text-neutral-700 font-medium">Intégration d'outils numériques (CRM, ERP...) adaptés à vos besoins.</span>
                            </li>
                            <li className="flex items-center">
                                <CheckIcon className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0" />
                                <span className="text-neutral-700 font-medium">Formation de vos équipes pour une adoption fluide et une autonomie durable.</span>
                            </li>
                        </ul>
                        <a
                            href="#contact"
                            onClick={(e) => handleScrollTo(e, '#contact')}
                            className="mt-10 inline-block bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                        >
                            Planifier Votre Audit Digital
                        </a>
                    </div>
                    
                    <div className="relative h-[300px] md:h-[400px] lg:h-full w-full">
                       <div className="bg-neutral-800 rounded-xl shadow-2xl w-full h-full p-4 flex flex-col transform lg:rotate-3 transition-transform duration-500 hover:rotate-0">
                           {/* Browser header */}
                           <div className="flex-shrink-0 flex items-center gap-2 mb-3">
                               <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                               <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                           </div>
                           {/* Mockup content */}
                           <div className="bg-white rounded-md flex-grow overflow-hidden">
                               <div className="h-full flex flex-col">
                                   <div className="p-6 bg-cover bg-center flex-grow flex items-end" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559028006-44d5a21c4883?q=80&w=2832&auto=format&fit=crop')"}}>
                                       <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg w-full">
                                           <h3 className="text-2xl font-bold text-white">Opérations Fluidifiées</h3>
                                           <p className="text-white/90 mt-1">De la complexité manuelle à la simplicité digitale.</p>
                                       </div>
                                   </div>
                                   <div className="bg-neutral-200 p-4 flex-shrink-0 border-t border-neutral-300">
                                       <div className="bg-white rounded-md p-2">
                                         <p className="text-xs text-neutral-600 truncate">
                                             Audit des processus, intégration d'outils, et mesure de la performance...
                                         </p>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteShowcase;
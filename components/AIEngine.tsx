import React, { useState, useEffect, useRef } from 'react';
import { generateBusinessStrategy } from '../services/geminiService';

const AIEngine: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) {
      setError('Veuillez décrire votre problématique.');
      return;
    }
    setError('');
    setIsLoading(true);
    setResult('');

    try {
      const strategy = await generateBusinessStrategy(problem);
      setResult(strategy);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-engine" ref={sectionRef} className={`py-24 bg-white transition-all ease-in-out duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-6">
        <div className="relative p-1 rounded-3xl bg-gradient-to-br from-brand-accent via-brand-primary to-brand-dark">
          <div className="bg-white rounded-[22px] p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Besoin d'une Idée? Notre IA vous inspire.
            </h2>
            <p className="mt-4 text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
              Décrivez un défi ou un objectif, et obtenez instantanément une piste de solution stratégique conçue pour vous.
            </p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Ex: 'Nous perdons du temps à copier-coller les informations de nos leads depuis nos emails vers notre CRM...'"
                className="w-full h-32 p-4 bg-neutral-100 border-2 border-transparent rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-brand-accent focus:bg-white transition-all duration-200 resize-none"
                disabled={isLoading}
                aria-label="Description de votre problématique"
              />
              {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-6 w-full sm:w-auto bg-brand-accent hover:bg-brand-secondary text-white font-bold py-3 px-12 rounded-lg shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 disabled:bg-neutral-400 disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none flex items-center justify-center mx-auto"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Génération en cours...
                  </>
                ) : (
                  'Générer une Stratégie'
                )}
              </button>
            </form>

            {result && !isLoading && (
              <div className="mt-10 p-6 bg-brand-light border-l-4 border-brand-primary rounded-r-lg text-left animate-fadeIn">
                <h4 className="font-bold text-brand-dark">Notre suggestion de stratégie :</h4>
                <p className="mt-2 text-neutral-700 whitespace-pre-wrap">{result}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEngine;
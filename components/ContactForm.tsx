import React, { useState, useEffect, useRef } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observer for fade-in animation
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

    // On successful submission, scroll the new content into view
    if (isSubmitted) {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
    
    return () => {
        if (currentRef) {
            observer.unobserve(currentRef);
        }
    };
}, [isSubmitted]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Les champs Nom, Email et Message sont requis.');
      return;
    }
    setError('');
    console.log("Formulaire soumis (simulation) :", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
        <section id="contact" ref={sectionRef} className="py-24 bg-neutral-100">
            <div className="container mx-auto px-6 text-center">
                 <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl animate-fadeIn">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-5">
                      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                     <h2 className="text-3xl font-black text-neutral-900 mb-2">Message envoyé !</h2>
                     <p className="text-lg text-neutral-600">Merci de nous avoir contactés. Notre équipe vous recontactera dans les plus brefs délais.</p>
                 </div>
            </div>
        </section>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className={`py-24 bg-neutral-100 transition-all ease-in-out duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">Prêt à Transformer Votre Entreprise?</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">Discutons de votre projet. Remplissez le formulaire et nous reviendrons vers vous pour planifier un premier échange.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1 text-left space-y-6">
            <div>
              <h3 className="text-xl font-bold text-neutral-900">Contact Direct</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center">
                    <svg className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <span className="text-neutral-700">contact@paradia.com</span>
                </div>
                <div className="flex items-center">
                     <svg className="w-5 h-5 text-brand-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span className="text-neutral-700">+33 1 23 45 67 89</span>
                </div>
              </div>
            </div>
             <div>
              <h3 className="text-xl font-bold text-neutral-900">Horaires</h3>
              <p className="mt-2 text-neutral-600">Lundi - Vendredi<br/>9:00 - 18:00 (CET)</p>
            </div>
          </div>
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Votre nom complet" onChange={handleChange} required className="w-full p-3 bg-neutral-100 border-2 border-transparent rounded-lg focus:bg-white focus:border-brand-accent focus:ring-0 transition-colors"/>
                <input type="email" name="email" placeholder="Votre email professionnel" onChange={handleChange} required className="w-full p-3 bg-neutral-100 border-2 border-transparent rounded-lg focus:bg-white focus:border-brand-accent focus:ring-0 transition-colors"/>
                <input type="text" name="company" placeholder="Votre entreprise (facultatif)" onChange={handleChange} className="w-full p-3 bg-neutral-100 border-2 border-transparent rounded-lg focus:bg-white focus:border-brand-accent focus:ring-0 transition-colors sm:col-span-2"/>
                <textarea name="message" placeholder="Décrivez votre projet ou votre question..." rows={5} onChange={handleChange} required className="w-full p-3 bg-neutral-100 border-2 border-transparent rounded-lg focus:bg-white focus:border-brand-accent focus:ring-0 transition-colors sm:col-span-2 resize-none"></textarea>
              </div>
              {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
              <button type="submit" className="mt-6 w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Envoyer Votre Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
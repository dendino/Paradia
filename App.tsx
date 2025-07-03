import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import WebsiteShowcase from './components/WebsiteShowcase';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-neutral-700 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Partners />
        <CaseStudies />
        <Testimonials />
        <WebsiteShowcase />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
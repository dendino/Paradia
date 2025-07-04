import React from 'react';
import { Service, CaseStudy, Testimonial, Partner } from './types';

// Icons
const CodeIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);
const ZapIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const ChartBarIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const ShieldCheckIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 2.083 9-2.083a12.02 12.02 0 00-4.382-9.984z" />
  </svg>
);
const DatabaseIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7v5c0 2.21 3.582 4 8 4s8-1.79 8-4V7" />
  </svg>
);
const GlobeAltIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
  </svg>
);

export const LogoParadiaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 256 256"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M128 16C128 16 32 48 32 112C32 208 128 240 128 240C128 240 224 208 224 112C224 48 128 16 128 16Z"
      fill="currentColor"
    />
  </svg>
);


// Partner Logos
const LogoFlowSync: React.FC = () => (
    <svg width="150" height="40" viewBox="0 0 150 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20 L30 10 L30 30 Z" />
        <path d="M35 20 L55 10 L55 30 Z" opacity="0.7" />
        <text x="65" y="27" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold">FlowSync</text>
    </svg>
);
const LogoZenith: React.FC = () => (
    <svg width="150" height="40" viewBox="0 0 150 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,30 A15,15 0 0,1 35,15 L35,25 A5,5 0 0,0 20,30 Z" />
        <text x="45" y="27" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold">Zenith E-Com</text>
    </svg>
);
const LogoCloudFortress: React.FC = () => (
    <svg width="160" height="40" viewBox="0 0 160 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 15 H30 V35 H10 Z" />
        <path d="M15 10 H25 V15 H15 Z" />
        <path d="M10 10 H15 V5 H25 V10 H30 V15 H35 V35 H30 V40 H15 V35 H10 Z" stroke="currentColor" strokeWidth="2" fill="none" transform="translate(0, -5)" />
        <text x="45" y="27" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold">CloudFortress</text>
    </svg>
);
const LogoDataWeave: React.FC = () => (
    <svg width="150" height="40" viewBox="0 0 150 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="30" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M22 20 H38" stroke="currentColor" strokeWidth="2" fill="none" />
        <text x="45" y="27" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold">DataWeave</text>
    </svg>
);

// Social Icons (for Footer)
export const LinkedInIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 53.79-54.3c29.7 0 53.79 24.2 53.79 54.3a53.79 53.79 0 0 1-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
);

export const TwitterIcon: React.FC<{className?: string}> = ({className}) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
);


export const SERVICES: Service[] = [
  {
    icon: <CodeIcon />,
    title: "Synchronisation de Données (CRM/ERP)",
    description: "Automatisation de la synchronisation des données entre vos plateformes CRM et ERP via des scripts Python et des webhooks robustes.",
  },
  {
    icon: <ZapIcon />,
    title: "Automatisation de Workflows",
    description: "Conception et automatisation de workflows complexes pour augmenter la productivité et réduire les erreurs.",
  },
  {
    icon: <ChartBarIcon />,
    title: "Optimisation de Performance Web",
    description: "Mise en œuvre de stratégies de caching et de load balancing pour garantir la rapidité et la fiabilité de vos applications web.",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Intégration de Sécurité (OAuth2)",
    description: "Renforcement de la sécurité de vos applications avec des solutions d'authentification modernes comme OAuth2.",
  },
  {
    icon: <DatabaseIcon />,
    title: "Migration de Bases de Données Cloud",
    description: "Gestion de la migration de vos bases de données vers des solutions cloud sécurisées et performantes, sans interruption de service.",
  },
  {
    icon: <GlobeAltIcon />,
    title: "Gestion de Marques E-commerce",
    description: "Pilotage intégral du cycle de vie de vos marques e-commerce, de l'idéation à la fidélisation client et l'analyse de la performance.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: "EcoVerve",
    industry: "Commerce de Détail Durable",
    problem: "La saisie manuelle des commandes entre Shopify et un CRM interne était chronophage et source d'erreurs fréquentes, retardant l'expédition.",
    solution: "Nous avons déployé un workflow sur MAKE.com qui, via des webhooks, capture instantanément les nouvelles commandes Shopify et crée/met à jour les fiches clients et les commandes dans le CRM. Le statut de la commande est synchronisé en retour.",
    results: [
        { label: "Réduction du temps de saisie manuelle", value: "95%" },
        { label: "Augmentation de la vitesse de traitement des commandes", value: "40%" },
        { label: "Taux d'erreur de données", value: "0%" }
    ]
  },
  {
    client: "LuxeGlow Cosmetics",
    industry: "Beauté & Cosmétique",
    problem: "LuxeGlow souhaitait lancer sa marque sur le marché européen mais manquait d'expertise pour le sourcing, la logistique et la stratégie marketing digitale.",
    solution: "Paradia a pris en charge le projet de A à Z : identification et négociation avec des fournisseurs européens, création d'une boutique Shopify optimisée, et déploiement de campagnes publicitaires ciblées sur Instagram et TikTok. Un programme de fidélité a été intégré au CRM pour maximiser la rétention.",
    results: [
        { label: "Seuil de rentabilité atteint en", value: "6 mois" },
        { label: "Taux de rétention client la première année", value: "30%" },
        { label: "Augmentation du ROI publicitaire", value: "+75%" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "L'équipe de Paradia a transformé notre gestion opérationnelle. Leur expertise en automatisation nous a fait économiser des centaines d'heures et a éliminé les erreurs humaines. Un partenaire indispensable.",
    name: "Julien.B",
    title: "Directeur des Opérations",
    company: "Logistique Express"
  },
  {
    quote: "Le lancement de notre marque e-commerce a dépassé toutes nos attentes grâce à Paradia. Leur approche stratégique et leur gestion complète du projet nous ont permis de nous concentrer sur notre produit.",
    name: "Sophie.D",
    title: "Fondatrice",
    company: "Atelier Fleuri"
  },
  {
    quote: "La migration de notre base de données était un projet critique. Paradia l'a géré avec un professionnalisme et une efficacité remarquables. Aucune interruption, aucune perte de données. Simplement parfait.",
    name: "David .L",
    title: "CTO",
    company: "Innovatech Solutions"
  }
];

export const PARTNERS: Partner[] = [
    { name: "FlowSync", logo: <LogoFlowSync /> },
    { name: "Zenith E-Com", logo: <LogoZenith /> },
    { name: "CloudFortress", logo: <LogoCloudFortress /> },
    { name: "DataWeave", logo: <LogoDataWeave /> },
];
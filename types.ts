import React from 'react';

export interface Service {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
}

export interface CaseStudy {
  client: string;
  industry: string;
  problem: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface Partner {
  name: string;
  logo: React.ReactNode;
}

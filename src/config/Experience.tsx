'use client';

import Vue from '@/components/technologies/Vue';
import Postman from '@/components/technologies/Postman';
import TypeScript from '@/components/technologies/TypeScript';
import Docker from '@/components/technologies/Docker';


export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: false,
    company: 'Code Carrot',
    position: 'Frontend Developer Intern',
    location: 'India (Remote)',
    image: '/shink.jpg',
    description: [
      'Frontend development for LogChimp (open-source product of Code Carrot).',
      'Implemented cursor-based pagination with infinite scroll to speed data loading and   prevent duplicate items.',
      'Fixed an initial-render duplication bug by redesigning client-side state updates and scroll handling; added tests for loading/pagination.',
      'Refactored frontend utilities to remove redundancy, improved developer experience with clearer docs and cleaner commit history.'
    ],
    startDate: 'July 2025',
    endDate: 'August 2025',
    technologies: [
      {
        name: 'Vue',
        href: 'https://nestjs.com/',
        icon: <Vue />,
      },
      {
        name: 'Postman',
        href: 'https://www.postman.com/',
        icon: <Postman />,
      },
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Docker',
        href: 'https://expressjs.com/',
        icon: <Docker />,
      },
    ],
    website: 'https://codecarrots.in/',
    github: 'https://github.com/logchimp',
    x: 'https://x.com/logchimp',
    
  }
];
'use client';

import { type Experience, experiences } from '@/config/Experience';
import Link from 'next/link';
import React from 'react';

import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import { ExperienceCard } from './experience/ExperienceCard';
import { Button } from './ui/button';

export default function Experience() {
  return (
    <Container className="mt-0 pt-12">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="flex flex-col gap-6">
        {experiences.slice(0, 2).map((experience: Experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
      
    </Container>
  );
}
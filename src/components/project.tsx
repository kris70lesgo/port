'use client';

import { projects } from '@/config/Projects';
import Link from 'next/link';
import React from 'react';

import Container from './common/Container';
import SectionHeading from './common/SectionHeading';
import { ProjectList } from './projects/ProjectList';
import { Button } from './ui/button';

export default function Projects() {
  return (
    <Container className="mt-0">
      <SectionHeading subHeading="Featured" heading="Projects" />

      <ProjectList className="mt-8" projects={projects.slice(0, 4)} />
      
    </Container>
  );
}
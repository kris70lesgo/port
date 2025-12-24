import Appwrite from '@/components/technologies/Appwrite';
import Bun from '@/components/technologies/Bun';
import ExpressJs from '@/components/technologies/ExpressJs';
import Github from '@/components/technologies/Github';
import MDXIcon from '@/components/technologies/MDXIcon';
import MongoDB from '@/components/technologies/MongoDB';
import Motion from '@/components/technologies/Motion';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Supabase from '@/components/technologies/Supabase';
import Shadcn from '@/components/technologies/Shadcn';
import Electron from '@/components/technologies/Electron';
import TailwindCss from '@/components/technologies/TailwindCss';
import Streamlit from '@/components/technologies/Streamlit';
import HuggingFace from '@/components/technologies/HuggingFace';
import Python from '@/components/technologies/Python';
import Plotly from '@/components/technologies/Plotly';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Web Browser',
    description:
      'Agentic AI browser for natural language webpage control',
    image: '/browsers.png',
    video: '',
    link: 'https://github.com/kris70lesgo/Browser',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="Node.js" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Electron', icon: <Electron key="electron" /> },
    ],
    github: 'https://github.com/kris70lesgo/Browser',
    live: 'https://github.com/kris70lesgo/Browser',
    details: true,
    projectDetailsPageSlug: '/projects/notesbuddy',
    isWorking: true,
  },
  {
    title: 'Ashelp',
    description:
      'Marketplace connecting students to verified academic performers',
    image: '/as.png',
    video: 'https://nlqqjmipfodb24gi.public.blob.vercel-storage.com/portfolio-optimized-2.mp4',
    link: 'https://as-help.vercel.app/',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Next.js', icon: <NextJs key="next.js" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Supabase', icon: <Supabase key="supabase" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: 'https://github.com/kris70lesgo/asHelp',
    live: 'https://as-help.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/appwrite-mcp-server',
    isWorking: true,
  },
  {
    title: 'Cultura',
    description:
      'AI-powered taste-based recommendation engine for culture and travel.',
    image: '/culturas.png',
    video: '',
    link: 'https://taste-one.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="next.js" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Supabase', icon: <Supabase key="supabase" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      
    ],
    github: 'https://github.com/kris70lesgo/Cultura',
    live: 'https://taste-one.vercel.app/',
    details: true,
    projectDetailsPageSlug: '#',
    isWorking: true,
  },
  {
    title: 'Quantum Edge',
    description:
      'Quantitative trading platform using AI for analysis, risk management, and optimization',
    image: '/quantshot.png',
    video: 'https://nlqqjmipfodb24gi.public.blob.vercel-storage.com/portfolio-optimized.mp4',
    link: 'https://quantumedge.streamlit.app/',
    technologies: [
      { name: 'Python', icon: <Python key="python" /> },
      { name: 'Streamlit', icon: <Streamlit key="streamlit" /> },
      { name: 'Hugging Face', icon: <HuggingFace key="huggingface" /> },
      { name: 'Plotly', icon: <Plotly key="plotly" /> },
    ],
    github: 'https://github.com/kris70lesgo/QuantumEdge',
    live: 'https://quantumedge.streamlit.app/',
    details: true,
    projectDetailsPageSlug: '#',
    isWorking: false, // Currently in development
  },
];